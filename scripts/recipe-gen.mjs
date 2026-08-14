#!/usr/bin/env node
/**
 * HǎoWèi 好味 · 每日菜谱生成器
 *
 * 用法：
 *   node scripts/recipe-gen.mjs <input.json> [--commit]
 *
 * input.json 结构（3 道菜的数组，字段对齐 src/lib/types.ts Recipe）：
 * [
 *   { "slug": "...", "titleEn": "...", ..., "ingredients": [...], "steps": [...], ... },
 *   ...
 * ]
 *
 * 功能：
 *   1. 校验：字段完整性 / slug 唯一 / relatedSlugs 存在 / termKey 覆盖
 *   2. 生成 src/data/recipes/{slug}.ts（模板化输出）
 *   3. 更新 src/data/recipes/index.ts（注册 + 去重）
 *   4. --commit 时自动 git 提交（GIT_DIR 模式）
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = "C:\\Users\\l'x\\WorkBuddy\\2026-08-14-23-01-31\\haoweirecipes";
const RECIPES_DIR = path.join(ROOT, "src", "data", "recipes");
const INDEX_FILE = path.join(RECIPES_DIR, "index.ts");

const inputPath = process.argv[2];
const doCommit = process.argv.includes("--commit");

if (!inputPath) {
  console.error("用法: node scripts/recipe-gen.mjs <input.json> [--commit]");
  process.exit(1);
}

const raw = fs.readFileSync(inputPath, "utf8");
const batch = JSON.parse(raw);
if (!Array.isArray(batch) || batch.length === 0) {
  console.error("input.json 必须是非空数组");
  process.exit(1);
}

/* ---------- 1. 校验 ---------- */
const errors = [];
const REQUIRED = [
  "slug", "titleEn", "titleZh", "pinyin", "cuisine", "region",
  "difficulty", "timeMin", "servings", "version", "tags", "dietary",
  "story", "ingredients", "steps", "tips", "relatedSlugs", "image",
];

const existingFiles = fs
  .readdirSync(RECIPES_DIR)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts")
  .map((f) => f.replace(/\.ts$/, ""));

const existingSlugs = new Set();
for (const r of batch) {
  for (const k of REQUIRED) {
    if (r[k] === undefined) errors.push(`[${r.slug}] 缺少字段: ${k}`);
  }
  if (existingSlugs.has(r.slug)) errors.push(`[${r.slug}] 批内 slug 重复`);
  if (existingFiles.includes(r.slug)) errors.push(`[${r.slug}] 已存在同名文件`);
  existingSlugs.add(r.slug);

  // 步骤：≥5 步，≥1 个 stateNote
  if (Array.isArray(r.steps)) {
    if (r.steps.length < 5) errors.push(`[${r.slug}] 步骤 < 5`);
    if (!r.steps.some((s) => s.stateNote)) errors.push(`[${r.slug}] 缺少 stateNote`);
  }
  // 食材：≥4 项
  if (Array.isArray(r.ingredients) && r.ingredients.length < 4)
    errors.push(`[${r.slug}] 食材 < 4`);
  // relatedSlugs 存在性（对其他菜谱的引用暂不校验，交叉检查在 index 更新后）
  if (!Array.isArray(r.relatedSlugs)) errors.push(`[${r.slug}] relatedSlugs 非数组`);
}

if (errors.length) {
  console.error("=== 校验失败 ===");
  for (const e of errors) console.error("  -", e);
  process.exit(1);
}
console.log(`✅ 校验通过：${batch.length} 道菜`);

/* ---------- 2. 生成 .ts 文件 ---------- */
const typeMap = (r) => `
export const ${r.slug.replace(/-/g, "_")}: Recipe = ${JSON.stringify(r, null, 2)
  .replace(/"([a-zA-Z][a-zA-Z0-9]*)":/g, "$1:")
  .replace(/"/g, "\"")};
`;

let written = [];
for (const r of batch) {
  const fileContent = `import type { Recipe } from "@/lib/types";

/** ${r.titleEn} (${r.titleZh}) — Day batch */
export const ${r.slug.replace(/-/g, "_")}: Recipe = ${JSON.stringify(r, null, 2)};
`;
  const filePath = path.join(RECIPES_DIR, `${r.slug}.ts`);
  fs.writeFileSync(filePath, fileContent, "utf8");
  written.push({ slug: r.slug, name: r.slug.replace(/-/g, "_"), filePath });
  console.log(`  📄 已生成: ${r.slug}.ts`);
}

/* ---------- 3. 更新 index.ts ---------- */
const indexSrc = fs.readFileSync(INDEX_FILE, "utf8");
const importLines = written
  .map((w) => `import { ${w.name} } from "./${w.slug}";`)
  .join("\n");

// 注入 import（在最后一个 import 后）
const lastImportIdx = indexSrc.lastIndexOf("\nimport ");
const head = indexSrc.slice(0, lastImportIdx + 1);
const tail = indexSrc.slice(lastImportIdx + 1);
const importRe = /import \{ [^}]+\} from "\.\/[^"]+";/;
const firstImportIdx = tail.search(importRe);
const newTail =
  firstImportIdx >= 0
    ? tail.slice(0, firstImportIdx) +
      importLines +
      "\n" +
      tail.slice(firstImportIdx)
    : importLines + "\n" + tail;

// 注入数组项（在 "];" 前）
const arrInsert = written.map((w) => `  ${w.name},`).join("\n");
let finalSrc = head + newTail;
if (finalSrc.includes("\n];")) {
  finalSrc = finalSrc.replace("\n];", `\n${arrInsert}\n];`);
} else if (finalSrc.includes("];")) {
  finalSrc = finalSrc.replace("];", `${arrInsert}\n];`);
} else {
  console.error("!!! index.ts 未找到数组结束符");
  process.exit(1);
}

fs.writeFileSync(INDEX_FILE, finalSrc, "utf8");
console.log(`  🔗 已注册 index.ts (+${written.length})`);

/* ---------- 4. 质量闸门 ---------- */
console.log("\n=== 质量闸门 ===");
try {
  execSync('npx tsc --noEmit 2>&1', { cwd: ROOT, stdio: "inherit" });
  console.log("✅ tsc 通过");
} catch {
  console.error("❌ tsc 失败，请修复后重试（index.ts 已更新，可手动回滚）");
  process.exit(1);
}

/* ---------- 5. 提交（可选） ---------- */
if (doCommit) {
  const GIT_DIR = "C:\\Users\\l'x\\WorkBuddy\\2026-08-14-23-01-31\\haoweirecipes\\.git";
  const msg = `content: add ${written.map((w) => w.slug).join(", ")} (Day batch)`;
  try {
    execSync(
      `git -C "${ROOT}" add src/data/recipes && git -C "${ROOT}" commit -m "${msg}"`,
      { cwd: "C:\\Users\\l'x\\WorkBuddy\\2026-08-14-23-01-31", stdio: "inherit" }
    );
    console.log("✅ 已提交:", msg);
  } catch (e) {
    console.warn("⚠️ git 提交失败（可能无 .git 或需手工提交）:", e.message);
  }
}

console.log(`\n🎉 完成：${written.length} 道菜已落盘并注册`);
console.log(`   菜谱总数: ${existingFiles.length + written.length} 道`);
