#!/usr/bin/env node
/**
 * 菜谱图片 WebP 优化脚本（FOT 优化惯例）
 *
 * 用法：
 *   node scripts/optimize-recipe-images.mjs                      # 处理 _archive-images/recipes/*.png（默认）
 *   node scripts/optimize-recipe-images.mjs --src <目录或文件>    # 指定源目录/文件
 *   node scripts/optimize-recipe-images.mjs --src x.png --name tomato-and-egg   # 指定输出文件名
 *   node scripts/optimize-recipe-images.mjs --og x.png           # 作为 OG 默认图（输出 og-default.webp）
 *   node scripts/optimize-recipe-images.mjs --update-refs        # 同时把数据层 image 字段改为 .webp
 *
 * 规则（FOT 惯例，勿改）：
 *   - 目标：public/images/** 只保留 WebP（单张 ~100KB），源图归档 _archive-images/，不提交
 *   - 压缩：sharp WebP quality=82 effort=6（照片类视觉无损，体积 -90%+）
 *   - 缓存：next.config.ts 已给 /images/:path* 配 30d + SWR 1y；换图务必改文件名而非覆盖
 *   - sharp 坑：必须 fs.readFileSync 读 buffer 再处理，不能传路径（文件句柄导致 EPERM）
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DEFAULT_SRC = path.join(ROOT, "_archive-images", "recipes");
const DEST = path.join(ROOT, "public", "images", "recipes");
const OG_DEST = path.join(ROOT, "public", "images");

const QUALITY = 82;
const EFFORT = 6;

function parseArgs(argv) {
  const args = { src: null, name: null, og: false, updateRefs: false, files: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--src") args.src = argv[++i];
    else if (argv[i] === "--name") args.name = argv[++i];
    else if (argv[i] === "--og") args.og = true;
    else if (argv[i] === "--update-refs") args.updateRefs = true;
    else if (!argv[i].startsWith("--")) args.files.push(argv[i]);
  }
  return args;
}

async function collectInputs(args) {
  // 显式传入文件 > --src 目录 > 默认归档目录
  if (args.files.length > 0) return args.files;
  const dir = args.src ?? DEFAULT_SRC;
  const entries = await fs.readdir(dir).catch(() => []);
  return entries
    .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
    .map((f) => path.join(dir, f))
    .sort();
}

async function toWebp(inputPath, outPath) {
  const buf = await fs.readFile(inputPath); // 必须读 buffer（sharp 路径句柄坑）
  const out = await sharp(buf, { limitInputPixels: false })
    .webp({ quality: QUALITY, effort: EFFORT })
    .toBuffer();
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, out);
  return { in: buf.length, out: out.length };
}

/** 数据层 image 字段 .png/.svg → .webp（按 slug 匹配，避免误伤） */
async function updateDataRefs(slug) {
  const dataDir = path.join(ROOT, "src", "data", "recipes");
  const files = await fs.readdir(dataDir).catch(() => []);
  let changed = 0;
  for (const f of files) {
    if (!f.endsWith(".ts")) continue;
    const p = path.join(dataDir, f);
    const src = await fs.readFile(p, "utf8");
    if (!src.includes(slug)) continue;
    const next = src.replace(
      new RegExp(`(image: "/images/recipes/${slug}\\.)[a-z]+(",)`),
      `$1webp$2`
    );
    if (next !== src) {
      await fs.writeFile(p, next, "utf8");
      changed++;
    }
  }
  return changed;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const inputs = await collectInputs(args);
  if (inputs.length === 0) {
    console.error("未找到输入图片（默认目录为空，或用 --src 指定）");
    process.exit(1);
  }

  let totalIn = 0;
  let totalOut = 0;
  const results = [];

  for (const input of inputs) {
    const base = path.basename(input).replace(/\.(png|jpe?g|webp)$/i, "");
    const name = args.og ? "og-default" : args.name ?? base;
    const outPath = args.og
      ? path.join(OG_DEST, `${name}.webp`)
      : path.join(DEST, `${name}.webp`);
    const { in: ib, out: ob } = await toWebp(input, outPath);
    totalIn += ib;
    totalOut += ob;
    const pct = (100 - (ob / ib) * 100).toFixed(0);
    results.push({ name, in: ib, out: ob, pct });
    if (args.updateRefs && !args.og) {
      const n = await updateDataRefs(name);
      if (n > 0) console.log(`  ↳ 数据引用更新 ${n} 个文件`);
    }
  }

  console.log("\n=== 压缩报告 ===");
  for (const r of results) {
    console.log(
      `${r.name.padEnd(20)} ${(r.in / 1024).toFixed(0).padStart(5)}KB → ${(r.out / 1024).toFixed(0).padStart(4)}KB  (-${r.pct}%)`
    );
  }
  console.log(
    `\n总计: ${(totalIn / 1048576).toFixed(2)}MB → ${(totalOut / 1048576).toFixed(2)}MB  (-${(100 - (totalOut / totalIn) * 100).toFixed(0)}%)`
  );
  console.log("\n完成。提示：换图请改文件名（/images 长缓存下同名覆盖不生效）。");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
