#!/usr/bin/env node
/**
 * 百炼（通义万相 wanx2.1-t2i-turbo）批量补图 — 只生成缺失的菜谱图
 *
 * 流程：扫描 src/data/recipes/*.ts → 提取 slug/titleEn/titleZh/cuisine →
 *       对比 public/images/recipes/{slug}.webp 是否已存在 → 只补缺失的 →
 *       调百炼异步生图 → 下载 PNG → 本地 sharp 转 WebP 落盘。
 * 断点续传：基于「webp 是否已存在」判定，中断重跑自动跳过已完成。
 *
 * 用法：
 *   node scripts/bailian-generate-missing.mjs --limit 5   # 先验证 5 张
 *   node scripts/bailian-generate-missing.mjs --all        # 全量补缺失图
 *   BAILIAN_CONCURRENCY=2 node scripts/bailian-generate-missing.mjs --all
 *
 * 前置：BAILIAN_API_KEY（环境变量 或 ~/.workbuddy/secrets/bailian-api-key.txt）
 */
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const RECIPES_DIR = path.join(ROOT, "src", "data", "recipes");
const IMG_DIR = path.join(ROOT, "public", "images", "recipes");
const ARCHIVE = path.join(ROOT, "_archive-images", "recipes");

const MODEL = process.env.BAILIAN_IMAGE_MODEL || "wanx2.1-t2i-turbo";
const SUBMIT_URL =
  process.env.BAILIAN_BASE_URL ||
  "https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis";
const TASK_URL = process.env.BAILIAN_TASK_URL || "https://dashscope.aliyuncs.com/api/v1/tasks";
const SIZE = process.env.BAILIAN_IMAGE_SIZE || "1440*960"; // 星号分隔；wanx2.1 宽高 512-1440
const POLL_INTERVAL_MS = Number(process.env.BAILIAN_POLL_MS || 4000);
const POLL_TIMEOUT_MS = Number(process.env.BAILIAN_POLL_TIMEOUT || 180000);
const CONCURRENCY = Math.max(1, Number(process.env.BAILIAN_CONCURRENCY || 1));
const WEBP_QUALITY = 82;
const WEBP_EFFORT = 6;

const STYLE =
  "professional food photography, natural window light, shallow depth of field, rustic wooden table, white ceramic bowls or plates, warm inviting tones, appetizing, high resolution, no text, no watermark, no people";

function getApiKey() {
  if (process.env.BAILIAN_API_KEY) return Promise.resolve(process.env.BAILIAN_API_KEY.trim());
  const p = path.join(os.homedir(), ".workbuddy", "secrets", "bailian-api-key.txt");
  return fs.readFile(p, "utf8").then((s) => s.trim()).catch(() => null);
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function collectRecipes() {
  const files = (await fs.readdir(RECIPES_DIR)).filter((f) => f.endsWith(".ts") && f !== "index.ts");
  const out = [];
  for (const f of files) {
    const s = await fs.readFile(path.join(RECIPES_DIR, f), "utf8");
    const img = s.match(/(?:"image"|image)\s*:\s*"\/images\/recipes\/([^"]+)\.webp"/);
    if (!img) continue;
    const slug = img[1];
    const titleEn = (s.match(/(?:"titleEn"|titleEn)\s*:\s*"([^"]+)"/) || [])[1] || slug;
    const titleZh = (s.match(/(?:"titleZh"|titleZh)\s*:\s*"([^"]+)"/) || [])[1] || "";
    const cuisine = (s.match(/(?:"cuisine"|cuisine)\s*:\s*"([^"]+)"/) || [])[1] || "";
    out.push({ slug, titleEn, titleZh, cuisine });
  }
  return out;
}

/** PNG → WebP（FOT 惯例：quality=82 effort=6）落盘 public/images/recipes/{slug}.webp */
async function toWebp(pngPath, outPath) {
  const buf = await fs.readFile(pngPath); // 读 buffer（sharp 路径句柄坑）
  const out = await sharp(buf, { limitInputPixels: false })
    .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT })
    .toBuffer();
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, out);
  return out.length;
}

/** 提交生图任务，带 429/400 退避重试 */
async function submitTask(key, prompt, attempt = 0) {
  const MAX = Number(process.env.BAILIAN_SUBMIT_RETRIES || 8);
  let res;
  try {
    res = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "X-DashScope-Async": "enable",
      },
      body: JSON.stringify({
        model: MODEL,
        input: { prompt },
        parameters: { size: SIZE, n: 1, watermark: false },
      }),
    });
  } catch (e) {
    if (attempt < MAX) {
      const wait = Math.min(30000, 2000 * 2 ** attempt);
      console.log(`  ⏳ 网络抖动 第${attempt + 1}次重试(等${wait / 1000}s)`);
      await sleep(wait);
      return submitTask(key, prompt, attempt + 1);
    }
    throw e;
  }
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    const code = json?.code || "";
    // 429 限流 / 400 额度抖动 → 退避重试
    if ((res.status === 429 || res.status === 400) && attempt < MAX) {
      const wait = Math.min(30000, 3000 * 2 ** attempt);
      console.log(`  ⏳ ${code || res.status} 第${attempt + 1}次重试(等${wait / 1000}s)`);
      await sleep(wait);
      return submitTask(key, prompt, attempt + 1);
    }
    throw new Error(`提交失败 ${res.status} ${JSON.stringify(json).slice(0, 300)}`);
  }
  const taskId = json?.output?.task_id;
  if (!taskId) throw new Error(`无 task_id ${JSON.stringify(json).slice(0, 300)}`);
  return taskId;
}

async function pollTask(key, taskId) {
  const started = Date.now();
  for (;;) {
    const res = await fetch(`${TASK_URL}/${taskId}`, {
      headers: { Authorization: `Bearer ${key}` },
    });
    const json = await res.json().catch(() => ({}));
    const status = json?.output?.task_status;
    if (status === "SUCCEEDED") {
      const url = json?.output?.results?.[0]?.url;
      if (!url) throw new Error("成功但无图片 URL");
      return url;
    }
    if (status === "FAILED" || status === "CANCELED") {
      throw new Error(`任务${status} ${JSON.stringify(json).slice(0, 200)}`);
    }
    if (Date.now() - started > POLL_TIMEOUT_MS) throw new Error("轮询超时");
    await sleep(POLL_INTERVAL_MS);
  }
}

async function download(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`下载失败 ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, buf);
  return buf.length;
}

async function processOne(key, r) {
  const dish = `${r.titleEn}${r.titleZh ? ` (${r.titleZh})` : ""}`;
  const prompt = `${dish}, ${r.cuisine ? r.cuisine + " " : ""}authentic Chinese home-cooked dish, ${STYLE}`;
  const pngPath = path.join(ARCHIVE, `${r.slug}.png`);
  const webpPath = path.join(IMG_DIR, `${r.slug}.webp`);
  const taskId = await submitTask(key, prompt);
  const url = await pollTask(key, taskId);
  const pngSize = await download(url, pngPath);
  const webpSize = await toWebp(pngPath, webpPath);
  return { pngSize, webpSize };
}

async function main() {
  const args = process.argv.slice(2);
  const limitIdx = args.indexOf("--limit");
  const limit = limitIdx >= 0 ? Number(args[limitIdx + 1]) : Infinity;
  const all = args.includes("--all");

  const key = await getApiKey();
  if (!key) {
    console.error(
      "❌ 未找到 BAILIAN_API_KEY。请任选其一：\n  1. export BAILIAN_API_KEY=sk-xxx\n  2. 写入 ~/.workbuddy/secrets/bailian-api-key.txt"
    );
    process.exit(1);
  }

  const allRecipes = await collectRecipes();
  const missing = [];
  for (const r of allRecipes) {
    try {
      await fs.access(path.join(IMG_DIR, `${r.slug}.webp`));
    } catch {
      missing.push(r);
    }
  }
  console.log(
    `总菜谱 ${allRecipes.length} | 已有图 ${allRecipes.length - missing.length} | 缺失 ${missing.length}`
  );

  let jobs = missing;
  if (!all) jobs = missing.slice(0, limit === Infinity ? missing.length : limit);
  console.log(`本次处理 ${jobs.length} 张 (并发 ${CONCURRENCY})`);

  let ok = 0;
  let fail = 0;
  const queue = [...jobs];
  async function worker() {
    while (queue.length) {
      const r = queue.shift();
      try {
        process.stdout.write(`⏳ ${r.slug}…`);
        const { webpSize } = await processOne(key, r);
        console.log(` ✓ webp ${(webpSize / 1024).toFixed(0)}KB`);
        ok++;
      } catch (e) {
        console.error(`\n❌ ${r.slug}: ${e.message || e}`);
        fail++;
      }
    }
  }
  const workers = Array.from({ length: Math.min(CONCURRENCY, jobs.length) }, worker);
  await Promise.all(workers);
  console.log(`\n完成：成功 ${ok}，失败 ${fail} / 共 ${jobs.length}`);
  if (fail > 0) process.exit(2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
