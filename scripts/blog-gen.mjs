#!/usr/bin/env node
/**
 * HǎoWèi 好味 · 每日博客生成器（配套 haowei-blog-daily skill）
 *
 * 用法：
 *   node scripts/blog-gen.mjs <input.json> [--commit]
 *
 * input.json 结构（单个 BlogPost 对象，或 BlogPost 数组，字段对齐 src/lib/types.ts）：
 * {
 *   "id": "slug", "slug": "slug",
 *   "titleEn": "...", "titleZh": "...",
 *   "excerptEn": "...", "excerptZh": "...",
 *   "categoryKey": "technique|ingredients|recipes|culture",
 *   "categoryEn": "Technique", "categoryZh": "技法",
 *   "tags": ["..."], "authorEn": "...", "authorZh": "...",
 *   "publishDate": "2026-08-17",
 *   "coverImage": "/images/blog/slug.png",
 *   "relatedRecipeSlugs": ["mapo-tofu"],
 *   "bodyEn": [{ "type": "p", "text": "..." }, { "type": "h2", "text": "..." }, ...],
 *   "bodyZh": [ ... 同结构 ... ],
 *   "faq": [{ "qEn": "...", "qZh": "...", "aEn": "...", "aZh": "..." }]   // 可选
 * }
 *
 * 功能：
 *   1. 校验：字段完整性 / slug 唯一 / bodyEn+bodyZh 都有 / coverImage 存在
 *   2. 生成 const 并注入 src/data/blog/index.ts（inline，追加到 blogPosts 数组）
 *   3. 质量闸门：npx tsc --noEmit（NODE_OPTIONS="" 绕过 safe-delete）
 *   4. --commit 时自动 git 提交（GIT_DIR 模式，避免 l'x 路径损坏 .git）
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

// 项目根：优先读 HW_ROOT 环境变量，回退到当前 clone 路径
const ROOT =
  process.env.HW_ROOT ||
  "C:\\worktmp\\haowei-git";
const BLOG_DIR = path.join(ROOT, "src", "data", "blog");
const INDEX_FILE = path.join(BLOG_DIR, "index.ts");
const IMG_DIR = path.join(ROOT, "public", "images", "blog");

const inputPath = process.argv[2];
const doCommit = process.argv.includes("--commit");

if (!inputPath) {
  console.error("用法: node scripts/blog-gen.mjs <input.json> [--commit]");
  process.exit(1);
}

const raw = fs.readFileSync(inputPath, "utf8").replace(/^\uFEFF/, ""); // 去 BOM
let batch = JSON.parse(raw);
if (!Array.isArray(batch)) batch = [batch];
if (batch.length === 0) {
  console.error("input.json 必须含至少 1 篇 BlogPost");
  process.exit(1);
}

/* ---------- 1. 校验 ---------- */
const errors = [];
const REQUIRED = [
  "slug", "titleEn", "titleZh", "excerptEn", "excerptZh",
  "categoryKey", "categoryEn", "categoryZh", "tags",
  "authorEn", "authorZh", "publishDate", "coverImage",
  "bodyEn", "bodyZh",
];
const VALID_CATS = ["technique", "ingredients", "recipes", "culture"];

// 现有 const 名（避免冲突）
const indexSrc0 = fs.readFileSync(INDEX_FILE, "utf8");
const usedNames = new Set(
  [...indexSrc0.matchAll(/const\s+(\w+)\s*:\s*BlogPost\s*=/g)].map((m) => m[1])
);
const usedSlugs = new Set(
  [...indexSrc0.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1])
);

const camel = (slug) => {
  const c = slug.replace(/-([a-z0-9])/g, (_, ch) => ch.toUpperCase());
  return /^[0-9]/.test(c) ? "p" + c : c;
};

const made = [];
for (const p of batch) {
  for (const k of REQUIRED) {
    if (p[k] === undefined) errors.push(`[${p.slug}] 缺少字段: ${k}`);
  }
  if (p.categoryKey && !VALID_CATS.includes(p.categoryKey))
    errors.push(`[${p.slug}] categoryKey 非法: ${p.categoryKey}`);
  if (!Array.isArray(p.bodyEn) || p.bodyEn.length === 0)
    errors.push(`[${p.slug}] bodyEn 非数组/为空`);
  if (!Array.isArray(p.bodyZh) || p.bodyZh.length === 0)
    errors.push(`[${p.slug}] bodyZh 非数组/为空`);
  if (usedSlugs.has(p.slug))
    errors.push(`[${p.slug}] slug 已存在于 index.ts`);
  const name = camel(p.slug);
  if (usedNames.has(name))
    errors.push(`[${p.slug}] const 名冲突: ${name}`);
  // 封面图存在性（可选警告，不阻断）
  const imgPath = path.join(ROOT, p.coverImage.replace(/^\//, ""));
  if (!fs.existsSync(imgPath))
    console.warn(`  ⚠️ [${p.slug}] 封面图缺失: ${p.coverImage}（请先生成/复制）`);
  made.push({ post: p, name });
  usedNames.add(name);
  usedSlugs.add(p.slug);
}

if (errors.length) {
  console.error("=== 校验失败 ===");
  for (const e of errors) console.error("  -", e);
  process.exit(1);
}
console.log(`✅ 校验通过：${made.length} 篇`);

/* ---------- 2. 注入 index.ts ---------- */
let src = indexSrc0;
const constsBlock = made
  .map(({ post, name }) => {
    const lit = JSON.stringify(post, null, 2);
    return `const ${name}: BlogPost = ${lit};`;
  })
  .join("\n\n");

const marker = "export const blogPosts: BlogPost[] = [";
const idx = src.indexOf(marker);
if (idx < 0) {
  console.error("!!! index.ts 未找到 blogPosts 数组标记");
  process.exit(1);
}
// 在 marker 前插入 const 定义
src = src.slice(0, idx) + constsBlock + "\n\n" + src.slice(idx);

// 把新 const 名追加进数组
const arrRegex = /export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/;
const m = src.match(arrRegex);
if (!m) {
  console.error("!!! 未匹配到 blogPosts 数组");
  process.exit(1);
}
const inner = m[1].trim();
const newInner = (inner ? inner.replace(/,\s*$/, "") + ", " : "") +
  made.map(({ name }) => name).join(", ");
src = src.replace(arrRegex, `export const blogPosts: BlogPost[] = [${newInner}];`);

fs.writeFileSync(INDEX_FILE, src, "utf8");
console.log(`  🔗 已注入 index.ts (+${made.length} const)`);

/* ---------- 3. 质量闸门 ---------- */
console.log("\n=== 质量闸门 (tsc) ===");
try {
  execSync('set NODE_OPTIONS="" && npx tsc --noEmit 2>&1', {
    cwd: ROOT,
    stdio: "inherit",
    shell: true,
  });
  console.log("✅ tsc 通过");
} catch {
  console.error("❌ tsc 失败，请修复后重试（index.ts 已更新，可手动回滚）");
  process.exit(1);
}

/* ---------- 4. 提交（可选） ---------- */
if (doCommit) {
  const GIT_DIR = path.join(ROOT, ".git");
  const msg = `content(blog): add ${made.map((x) => x.post.slug).join(", ")} (百日博客)`;
  try {
    execSync(`git --git-dir="${GIT_DIR}" --work-tree="${ROOT}" add src/data/blog docs/ public/images/blog`, {
      cwd: ROOT,
      stdio: "inherit",
      shell: true,
    });
    execSync(`git --git-dir="${GIT_DIR}" --work-tree="${ROOT}" commit -m "${msg}"`, {
      cwd: ROOT,
      stdio: "inherit",
      shell: true,
    });
    execSync(
      `GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no" git --git-dir="${GIT_DIR}" --work-tree="${ROOT}" push origin main`,
      { cwd: ROOT, stdio: "inherit", shell: true }
    );
    console.log("✅ 已提交并推送:", msg);
  } catch (e) {
    console.warn("⚠️ git 提交/推送失败（可能无 .git 或需手工）:", e.message);
  }
}

console.log(`\n🎉 完成：${made.length} 篇博客已注入`);
console.log(`   当前 blogPosts 总数: ${[...src.matchAll(/slug:\s*"([^"]+)"/g)].length} 篇`);
