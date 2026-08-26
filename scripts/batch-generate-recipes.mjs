#!/usr/bin/env node
/**
 * 批量生图脚本 — 遍历 public/images/recipes/ 下所有 .svg，生成对应真实食物 webp
 *
 * 用法：
 *   node scripts/batch-generate-recipes.mjs                    # 处理所有 SVG 占位
 *   node scripts/batch-generate-recipes.mjs --slug winter-melon-soup  # 只生成指定 slug
 *   node scripts/batch-generate-recipes.mjs --dry-run          # 只打印不会提交任务
 *
 * 流程：
 *   1. 读取 src/data/recipes/*.ts 提取 slug + titleZh + desc + tags
 *   2. 读 public/images/recipes/*.svg 获取需要处理的 slug 列表
 *   3. 对每个 slug 构造 prompt 并提交百炼 wanx2.1-t2i-turbo 异步任务
 *   4. 轮询成功后下载 PNG → 转 WebP → 更新数据层引用
 */
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ARCHIVE = path.join(ROOT, "_archive-images", "recipes");
const IMAGE_DIR = path.join(ROOT, "public", "images", "recipes");
const DATA_DIR = path.join(ROOT, "src", "data", "recipes");

const MODEL = process.env.BAILIAN_IMAGE_MODEL || "wanx2.1-t2i-turbo";
const SUBMIT_URL = process.env.BAILIAN_BASE_URL ||
  "https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis";
const TASK_URL = process.env.BAILIAN_TASK_URL ||
  "https://dashscope.aliyuncs.com/api/v1/tasks";
const SIZE = process.env.BAILIAN_IMAGE_SIZE || "1440*960";
const POLL_INTERVAL_MS = 4000;
const POLL_TIMEOUT_MS = 120000;
const DELAY_MS = 5000; // 每道菜间隔 5 秒，防 120 RPM 限流

const STYLE =
  "professional food photography, natural window light, shallow depth of field, rustic wooden table, white ceramic bowls, warm inviting tones, appetizing steam, high resolution, no text, no watermark";

function getApiKey() {
  if (process.env.BAILIAN_API_KEY) return process.env.BAILIAN_API_KEY.trim();
  const p = path.join(os.homedir(), ".workbuddy", "secrets", "bailian-api-key.txt");
  try {
    return fs.readFile(p, "utf8").then((s) => s.trim());
  } catch {
    return null;
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** 读所有菜谱 ts 文件，返回 {slug: {titleZh, desc, tags, cuisine}} */
async function loadRecipes() {
  const files = await fs.readdir(DATA_DIR).catch(() => []);
  const recipes = {};
  for (const f of files) {
    if (!f.endsWith(".ts") || f === "index.ts") continue;
    const src = await fs.readFile(path.join(DATA_DIR, f), "utf8");
    // slug
    const slugM = src.match(/slug:\s*"([^"]+)"/);
    const slug = slugM ? slugM[1] : f.replace(".ts", "");
    if (recipes[slug]) continue;
    // titleZh
    const titleZhM = src.match(/titleZh:\s*"([^"]+)"/);
    // desc
    const descM = src.match(/desc:\s*"([^"]+)"/);
    // tags
    const tagsM = src.match(/tags:\s*\[([^\]]+)\]/);
    const tags = tagsM ? tagsM[1].match(/"([^"]+)"/g)?.map((t) => t.replace(/"/g, "")) : [];
    // cuisine
    const cuisineM = src.match(/cuisine:\s*"([^"]+)"/);
    recipes[slug] = {
      slug,
      titleZh: titleZhM ? titleZhM[1] : "",
      desc: descM ? descM[1] : "",
      tags,
      cuisine: cuisineM ? cuisineM[1] : "",
    };
  }
  return recipes;
}

/** 构造 prompt */
function buildPrompt(recipe) {
  const { titleZh, desc, tags, cuisine } = recipe;
  // 优先用 desc，否则用 titleZh
  const dishName = desc || titleZh;
  if (!dishName) return `${recipe.slug}: ${STYLE}`;
  // 加 cuisine 和 tags 丰富 prompt
  const extras = [];
  if (cuisine) extras.push(cuisine);
  if (tags.length > 0) extras.push(tags.slice(0, 3).join(", "));
  const context = extras.length ? ` (${extras.join(", ")})` : "";
  return `${dishName}: ${dishName}，${STYLE}${context}`;
}

async function submitTask(key, prompt) {
  const res = await fetch(SUBMIT_URL, {
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
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("❌ 提交失败", res.status, JSON.stringify(json).slice(0, 300));
    return null;
  }
  const taskId = json?.output?.task_id;
  if (!taskId) {
    console.error("❌ 无 task_id:", JSON.stringify(json).slice(0, 200));
    return null;
  }
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
      return json?.output?.results?.[0]?.url;
    }
    if (status === "FAILED" || status === "CANCELED") {
      console.error("❌ 任务失败:", status, JSON.stringify(json).slice(0, 200));
      return null;
    }
    if (Date.now() - started > POLL_TIMEOUT_MS) {
      console.error("❌ 轮询超时");
      return null;
    }
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

async function toWebp(inputPath, outPath) {
  const { default: sharp } = await import("sharp");
  const buf = await fs.readFile(inputPath);
  const out = await sharp(buf, { limitInputPixels: false })
    .webp({ quality: 82, effort: 6 })
    .toBuffer();
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, out);
  return { in: buf.length, out: out.length };
}

/** 更新数据层 image 引用（.svg → .webp） */
async function updateDataRef(slug) {
  const dataDir = path.join(ROOT, "src", "data", "recipes");
  const files = await fs.readdir(dataDir).catch(() => []);
  for (const f of files) {
    if (!f.endsWith(".ts") || f === "index.ts") continue;
    const p = path.join(dataDir, f);
    const src = await fs.readFile(p, "utf8");
    if (!src.includes(`slug: "${slug}"`)) continue;
    const next = src.replace(
      new RegExp(`(image: "/images/recipes/${slug}\\.)[a-z]+(",)`),
      `$1webp$2`
    );
    if (next !== src) {
      await fs.writeFile(p, next, "utf8");
      console.log(`  ↳ 数据引用更新 ${f}`);
      return true;
    }
  }
  return false;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const slugIdx = args.indexOf("--slug");
  const targetSlug = slugIdx >= 0 ? args[slugIdx + 1] : null;

  const recipes = await loadRecipes();
  console.log(`加载菜谱 ${Object.keys(recipes).length} 道`);

  // 找所有 SVG 占位
  const svgDir = path.join(ROOT, "public", "images", "recipes");
  const allFiles = await fs.readdir(svgDir).catch(() => []);
  const svgSlugs = allFiles
    .filter((f) => f.endsWith(".svg"))
    .map((f) => f.replace(".svg", ""));

  let targets = targetSlug ? [targetSlug] : svgSlugs;
  if (targetSlug && !svgSlugs.includes(targetSlug)) {
    console.error(`⚠️  找不到 ${targetSlug}.svg，跳过`);
    return;
  }

  const key = await getApiKey();
  if (!key) {
    console.error("❌ 未找到 BAILIAN_API_KEY");
    process.exit(1);
  }

  console.log(`使用模型 ${MODEL}，待生成 ${targets.length} 张图\n`);

  let success = 0;
  let skipped = 0;

  for (const slug of targets) {
    const recipe = recipes[slug];
    const pngPath = path.join(ARCHIVE, `${slug}.png`);
    const webpPath = path.join(IMAGE_DIR, `${slug}.webp`);

    // 跳过已生成的
    const svgExists = await fs.access(path.join(IMAGE_DIR, `${slug}.svg`)).then(() => true).catch(() => false);
    const webpExists = await fs.access(webpPath).then(() => true).catch(() => false);
    if (!svgExists || webpExists) {
      if (webpExists) skipped++;
      continue;
    }

    process.stdout.write(`⏳ ${slug}: 提交任务…`);
    const prompt = recipe ? buildPrompt(recipe) : `${slug}: ${STYLE}`;

    if (dryRun) {
      console.log(` [DRY RUN] prompt: ${prompt.slice(0, 80)}...`);
      skipped++;
      await sleep(DELAY_MS);
      continue;
    }

    const taskId = await submitTask(key, prompt);
    if (!taskId) {
      console.log(" 跳过");
      await sleep(DELAY_MS);
      continue;
    }

    process.stdout.write(` task=${taskId.slice(-6)} 轮询中…`);
    const url = await pollTask(key, taskId);
    if (!url) {
      console.log(" 失败");
      await sleep(DELAY_MS);
      continue;
    }

    const size = await download(url, pngPath);
    console.log(` ✓ PNG ${(size / 1024).toFixed(0)}KB`);

    // 转 WebP
    const { in: ib, out: ob } = await toWebp(pngPath, webpPath);
    console.log(`  → WebP ${(ob / 1024).toFixed(0)}KB (-${((1 - ob / ib) * 100).toFixed(0)}%)`);

    // 更新数据引用
    if (recipe) await updateDataRef(slug);

    success++;
    await sleep(DELAY_MS);
  }

  console.log(`\n完成：成功 ${success} 张，跳过 ${skipped} 张`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
