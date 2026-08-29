#!/usr/bin/env node
/**
 * Agnes 免费生图批量补图脚本
 * 用 Agnes Image 2.1 Flash（免费）生成菜谱封面图
 *
 * 流程：扫描 src/data/recipes/*.ts → 提取 slug/titleEn/titleZh/cuisine →
 *       对比 public/images/recipes/{slug}.webp 是否已存在 → 只补缺失的 →
 *       调 Agnes API → 下载 PNG → 本地 sharp 转 WebP 落盘
 * 断点续传：基于「webp 是否已存在」判定
 *
 * 前置：AGNES_API_KEY（环境变量 或 ~/.workbuddy/secrets/agnes-api-key.txt）
 *
 * 用法：
 *   node scripts/agnes-generate-missing.mjs --limit 5   # 先验证 5 张
 *   node scripts/agnes-generate-missing.mjs --all        # 全量补缺失图
 *   AGNES_CONCURRENCY=2 node scripts/agnes-generate-missing.mjs --all
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

const API_BASE = process.env.AGNES_API_BASE || "https://apihub.agnes-ai.com";
const API_URL = `${API_BASE}/v1/images/generations`;
const MODEL = process.env.AGNES_MODEL || "agnes-image-2.1-flash";
const SIZE = process.env.AGNES_IMAGE_SIZE || "1024x768";
const POLL_INTERVAL_MS = Number(process.env.AGNES_POLL_MS || 2000);
const CONCURRENCY = Math.max(1, Number(process.env.AGNES_CONCURRENCY || 1));
const WEBP_QUALITY = 82;
const WEBP_EFFORT = 6;

const STYLE =
  "professional food photography, natural window light, shallow depth of field, rustic wooden table, white ceramic bowls or plates, warm inviting tones, appetizing, high resolution, no text, no watermark, no people";

function getApiKey() {
  if (process.env.AGNES_API_KEY) return Promise.resolve(process.env.AGNES_API_KEY.trim());
  if (process.env.AGNES_TOKEN) return Promise.resolve(process.env.AGNES_TOKEN.trim());
  const p = path.join(os.homedir(), ".workbuddy", "secrets", "agnes-api-key.txt");
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

/** PNG → WebP 落盘 */
async function toWebp(pngPath, outPath) {
  const buf = await fs.readFile(pngPath);
  const out = await sharp(buf, { limitInputPixels: false })
    .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT })
    .toBuffer();
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, out);
  return out.length;
}

/** 提交 Agnes 生图任务，返回图片 URL */
async function submitTask(key, prompt) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      prompt,
      size: SIZE,
      extra_body: { response_format: "url" },
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`提交失败 ${res.status} ${JSON.stringify(json).slice(0, 300)}`);
  }
  const url = json?.data?.[0]?.url;
  if (!url) throw new Error(`无图片 URL ${JSON.stringify(json).slice(0, 300)}`);
  return url;
}

/** 下载图片 */
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
  const url = await submitTask(key, prompt);
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
      "❌ 未找到 AGNES_API_KEY。请任选其一：\n" +
        "  1. export AGNES_API_KEY=xxx\n" +
        "  2. 写入 ~/.workbuddy/secrets/agnes-api-key.txt"
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
      // 避免限流
      await sleep(POLL_INTERVAL_MS);
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
