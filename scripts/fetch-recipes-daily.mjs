#!/usr/bin/env node
/**
 * HǎoWèi 好味 · 数据层（Layer 1）· 每日菜谱自动生成
 *
 * 流程：
 *   1. 解析 docs/content-calendar-100d.md → 找下一个未生成 Day
 *   2. 调百炼 qwen-plus 生成当日 3 道菜完整双语 JSON
 *   3. 校验（slug 唯一/字段完整/食材≥4/步骤≥5/stateNote 存在）
 *   4. 调百炼 wanx2.1-t2i-turbo 异步生成 3 张菜品图
 *   5. sharp 压缩 PNG → WebP
 *   6. 落盘 src/data/recipes/{slug}.ts + public/images/recipes/{slug}.webp
 *   7. 更新 src/data/recipes/index.ts
 *   8. npx tsc --noEmit 校验
 *
 * 用法：
 *   node scripts/fetch-recipes-daily.mjs                    # 自动找下一个 Day
 *   node scripts/fetch-recipes-daily.mjs --day N             # 指定日历第 N 天
 *   node scripts/fetch-recipes-daily.mjs --no-image          # 跳过生图（节省额度）
 *   node scripts/fetch-recipes-daily.mjs --dry-run           # 只生成 JSON 不落盘
 *
 * 环境变量：
 *   DASHSCOPE_API_KEY  阿里云百炼 API Key（LLM + 生图共用）
 *
 * GitHub Actions：被 .github/workflows/daily-recipes.yml 触发（cron 00:10 UTC）
 *
 * 输出：写入 .github 输出 new_urls（给 Layer 3 indexnow-submit.mjs 用）
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { execFileSync, execSync } from "node:child_process";

const ROOT = process.cwd();
const CALENDAR = path.join(ROOT, "docs", "content-calendar-100d.md");
const RECIPES_DIR = path.join(ROOT, "src", "data", "recipes");
const INDEX_FILE = path.join(RECIPES_DIR, "index.ts");
const IMAGES_DIR = path.join(ROOT, "public", "images", "recipes");
const ARCHIVE_IMAGES_DIR = path.join(ROOT, "_archive-images", "recipes");

const BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1";
const LLM_MODEL = "qwen-plus";

const SUBMIT_URL =
  process.env.BAILIAN_BASE_URL ||
  "https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis";
const TASK_URL =
  process.env.BAILIAN_TASK_URL || "https://dashscope.aliyuncs.com/api/v1/tasks";
const IMG_MODEL = process.env.BAILIAN_IMAGE_MODEL || "wanx2.1-t2i-turbo";
const IMG_SIZE = process.env.BAILIAN_IMAGE_SIZE || "1440*960";

const STYLE =
  "professional food photography, natural window light, shallow depth of field, rustic wooden table, white ceramic bowls, warm inviting tones, appetizing steam, high resolution, no text, no watermark";

/* ---------- 参数 ---------- */
const args = process.argv.slice(2);
const dayArg = args.indexOf("--day") >= 0 ? Number(args[args.indexOf("--day") + 1]) : null;
const noImage = args.includes("--no-image");
const dryRun = args.includes("--dry-run");

const API_KEY = process.env.DASHSCOPE_API_KEY || process.env.BAILIAN_API_KEY;
if (!API_KEY) {
  console.error("❌ DASHSCOPE_API_KEY 环境变量未设置");
  process.exit(1);
}

function setGHOutput(key, value) {
  const f = process.env.GITHUB_OUTPUT;
  if (f) {
    fs.appendFile(f, `${key}<<EOF\n${value}\nEOF\n`).catch(() => {});
  }
}

/* ---------- 1. 解析日历 ---------- */
function parseCalendar() {
  const src = require("node:fs").readFileSync(CALENDAR, "utf8");
  const days = new Map();
  const rowRe = /^\|\s*(\d+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/;
  for (const line of src.split("\n")) {
    const m = line.match(rowRe);
    if (!m) continue;
    const day = Number(m[1]);
    const theme = m[2].trim();
    const dishes = m[3]
      .split("/")
      .map((s) => s.trim().replace(/[✓（(][^)）]*[)）]?$/, "").trim())
      .filter(Boolean);
    const keywords = m[4].trim();
    days.set(day, { theme, dishes, keywords });
  }
  return days;
}

/* ---------- 2. 找下一个未生成的 Day ---------- */
function existingSlugs() {
  const set = new Set();
  for (const f of require("node:fs").readdirSync(RECIPES_DIR)) {
    if (f.endsWith(".ts") && f !== "index.ts") set.add(f.replace(/\.ts$/, ""));
  }
  return set;
}

function nextDay(days, existing) {
  if (dayArg) {
    if (!days.has(dayArg)) {
      console.error(`❌ Day ${dayArg} 不在日历中`);
      process.exit(1);
    }
    return dayArg;
  }
  // 找最小 Day，其中至少 1 道菜未生成
  const sorted = [...days.keys()].sort((a, b) => a - b);
  for (const d of sorted) {
    const plan = days.get(d);
    // 简单判断：日历里菜名（拼音/英文）hash 后与现有 slug 不重合
    const hasNew = plan.dishes.some((dish) => {
      const slug = slugify(dish);
      return !existing.has(slug);
    });
    if (hasNew) return d;
  }
  return null;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[\u4e00-\u9fa5]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* ---------- 3. 调百炼 qwen-plus 生成菜谱 ---------- */
function buildPrompt(plan) {
  const dishList = plan.dishes.join(" / ");
  return `Generate 3 Chinese home-cooking recipes for "${plan.theme}".

Constraints:
- Dish list (3 recipes): ${dishList}
- Target keywords: ${plan.keywords}
- Bilingual: each recipe must include titleEn, titleZh, pinyin, ingredients (En+Zh, metric+US), steps (En+Zh, ≥5 steps, key steps with stateNote for visual cue)
- Fields required: slug, titleEn, titleZh, pinyin, cuisine, province, difficulty, totalTimeMin, servings, ingredients[], steps[], tips[], story?, dietary[], relatedSlugs[], category, pantry, termKey[]
- relatedSlugs must include the other 2 recipes in this batch
- slug format: lowercase-kebab-case-english (e.g. "tomato-egg")
- NO whole tomatoes shown in image; cut into wedges/pieces
- NO rice visible (unless recipe explicitly is a rice dish like fried rice)
- Dietary: tags like "vegetarian", "gluten-free" if applicable

Return JSON object: {"recipes": [r1, r2, r3]}`;
}

async function callLLM(prompt, retries = 3) {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(`${BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: LLM_MODEL,
          messages: [{ role: "user", content: prompt }],
          response_format: { type: "json_object" },
          temperature: 0.7,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        throw new Error(`API ${res.status}: ${body.slice(0, 300)}`);
      }
      const data = await res.json();
      const content = data.choices?.[0]?.message?.content ?? "";
      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch {
        throw new Error(`Not JSON: ${content.slice(0, 200)}`);
      }
      const arr = Array.isArray(parsed) ? parsed : parsed.recipes ?? [];
      if (!arr.length) throw new Error("Empty array");
      return arr;
    } catch (e) {
      lastErr = e;
      console.warn(`⚠️ LLM retry ${i + 1}/${retries}: ${e.message}`);
      if (i < retries - 1)
        await new Promise((r) => setTimeout(r, 30000 * Math.pow(2, i)));
    }
  }
  throw lastErr;
}

/* ---------- 4. 校验 ---------- */
const REQUIRED = ["slug", "titleEn", "titleZh", "ingredients", "steps"];
function validate(batch) {
  const errors = [];
  const seen = new Set();
  for (const r of batch) {
    if (!r.slug) errors.push("缺 slug");
    else if (seen.has(r.slug)) errors.push(`[${r.slug}] slug 重复`);
    else seen.add(r.slug);
    for (const k of REQUIRED) if (r[k] === undefined) errors.push(`[${r.slug ?? "?"}] 缺字段: ${k}`);
    if (Array.isArray(r.ingredients) && r.ingredients.length < 4) errors.push(`[${r.slug}] 食材<4`);
    if (Array.isArray(r.steps) && r.steps.length < 5) errors.push(`[${r.slug}] 步骤<5`);
    if (Array.isArray(r.steps) && !r.steps.some((s) => s.stateNote)) errors.push(`[${r.slug}] 缺 stateNote`);
  }
  return errors;
}

/* ---------- 5. 生图（百炼 wanx2.1 异步任务） ---------- */
async function generateImage(prompt, retries = 2) {
  const fullPrompt = `${prompt}. ${STYLE}`;
  for (let i = 0; i < retries; i++) {
    try {
      const submit = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "X-DashScope-Async": "enable",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: IMG_MODEL,
          input: { prompt: fullPrompt },
          parameters: { size: IMG_SIZE, n: 1 },
        }),
      });
      if (!submit.ok) {
        const body = await submit.text();
        throw new Error(`submit ${submit.status}: ${body.slice(0, 200)}`);
      }
      const { output } = await submit.json();
      const taskId = output?.task_id;
      if (!taskId) throw new Error("no task_id");

      // 轮询
      const deadline = Date.now() + 120000;
      while (Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 4000));
        const poll = await fetch(`${TASK_URL}/${taskId}`, {
          headers: { Authorization: `Bearer ${API_KEY}` },
        });
        const pd = await poll.json();
        const status = pd.output?.task_status;
        if (status === "SUCCEEDED") {
          const url = pd.output.results?.[0]?.url;
          if (!url) throw new Error("no result url");
          return url;
        }
        if (status === "FAILED") throw new Error(`task failed: ${JSON.stringify(pd.output)}`);
      }
      throw new Error("poll timeout");
    } catch (e) {
      console.warn(`⚠️ image retry ${i + 1}/${retries}: ${e.message}`);
      if (i < retries - 1) await new Promise((r) => setTimeout(r, 10000));
      else throw e;
    }
  }
}

async function downloadAndCompress(imageUrl, slug) {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());

  await fs.mkdir(ARCHIVE_IMAGES_DIR, { recursive: true });
  await fs.mkdir(IMAGES_DIR, { recursive: true });

  const pngPath = path.join(ARCHIVE_IMAGES_DIR, `${slug}.png`);
  await fs.writeFile(pngPath, buffer);

  // sharp 压缩 PNG → WebP
  const webpPath = path.join(IMAGES_DIR, `${slug}.webp`);
  execFileSync(
    "node",
    [
      "-e",
      `const sharp=require('sharp');sharp('${pngPath.replace(/\\/g, "\\\\")}').webp({quality:85}).toFile('${webpPath.replace(/\\/g, "\\\\")}').then(i=>console.log('webp:',i.size))`,
    ],
    { cwd: ROOT, stdio: "inherit" }
  );
  return webpPath;
}

/* ---------- 6. 落盘 .ts（复用 recipe-gen.mjs 的核心） ---------- */
function toTs(r, slug) {
  // 简化版：把 JSON 转成单文件 .ts（schema 与项目现有 .ts 对齐）
  const json = JSON.stringify({ ...r, image: `/images/recipes/${slug}.webp` }, null, 2);
  return `import type { Recipe } from "../types";

const recipe: Recipe = ${json.replace(/"(\w+)":/g, "$1:")};

export default recipe;
export const ${slug.replace(/-/g, "_")} = recipe;
`;
}

/* ---------- 7. 更新 index.ts ---------- */
async function updateIndex(newSlugs) {
  let src = await fs.readFile(INDEX_FILE, "utf8");
  const importLines = newSlugs
    .map((s) => `import { ${s.replace(/-/g, "_")} } from "./${s}";`)
    .join("\n");

  // 注入 import
  const lastImportIdx = src.lastIndexOf("\nimport ");
  if (lastImportIdx >= 0) {
    src = src.slice(0, lastImportIdx + 1) + importLines + "\n" + src.slice(lastImportIdx + 1);
  } else {
    src = importLines + "\n" + src;
  }

  // 注入数组项
  const arrInsert = newSlugs.map((s) => `  ${s.replace(/-/g, "_")},`).join("\n");
  if (src.includes("\n];")) {
    src = src.replace("\n];", `\n${arrInsert}\n];`);
  }
  await fs.writeFile(INDEX_FILE, src, "utf8");
}

/* ---------- main ---------- */
async function main() {
  console.log("🚀 HǎoWèi 数据层启动");
  const days = parseCalendar();
  const existing = existingSlugs();
  const targetDay = nextDay(days, existing);

  if (targetDay === null) {
    console.log("✅ 所有 Day 100 天都已生成，无需新增");
    setGHOutput("new_urls", "");
    process.exit(0);
  }
  const plan = days.get(targetDay);
  console.log(`📅 Day ${targetDay} | 主题：${plan.theme} | 菜：${plan.dishes.join(", ")}`);

  // LLM 生成
  console.log("🤖 调百炼 qwen-plus 生成...");
  const batch = await callLLM(buildPrompt(plan));

  // 校验
  const errors = validate(batch);
  if (errors.length || batch.length === 0) {
    console.error("❌ 校验失败：");
    errors.forEach((e) => console.error("  -", e));
    process.exit(1);
  }

  // 注入 image 字段
  for (const r of batch) r.image = `/images/recipes/${r.slug}.webp`;

  // 保存调试 JSON
  const debugJson = path.join(ROOT, "scripts", `.recipe-batch-${targetDay}.json`);
  await fs.writeFile(debugJson, JSON.stringify(batch, null, 2));

  if (dryRun) {
    console.log(`📝 dry-run: 已写 ${debugJson}`);
    setGHOutput("new_urls", "");
    process.exit(0);
  }

  // 生图
  const newUrls = [];
  for (const r of batch) {
    if (noImage) {
      console.log(`⏭️ 跳过生图: ${r.slug}`);
    } else {
      console.log(`🎨 生图: ${r.slug}`);
      try {
        const desc = `${r.titleEn} (${r.titleZh}): ${r.cuisine ?? "Chinese home cooking"} dish, ${r.difficulty ?? "easy"} difficulty`;
        const imgUrl = await generateImage(desc);
        await downloadAndCompress(imgUrl, r.slug);
      } catch (e) {
        console.warn(`⚠️ 生图失败 ${r.slug}: ${e.message}（生成占位图）`);
        // 占位灰色图
        const webpPath = path.join(IMAGES_DIR, `${r.slug}.webp`);
        await fs.mkdir(IMAGES_DIR, { recursive: true });
        execFileSync(
          "node",
          [
            "-e",
            `const sharp=require('sharp');sharp({create:{width:1440,height:960,channels:3,background:'#e0e0e0'}}).webp({quality:70}).toFile('${webpPath.replace(/\\/g, "\\\\")}').then(()=>console.log('placeholder ok'))`,
          ],
          { cwd: ROOT, stdio: "inherit" }
        );
      }
    }
    newUrls.push(`https://haoweirecipes.com/en/recipes/${r.slug}`);
    newUrls.push(`https://haoweirecipes.com/zh/recipes/${r.slug}`);
  }

  // 落盘 .ts
  console.log("💾 落盘 .ts...");
  for (const r of batch) {
    const ts = toTs(r, r.slug);
    await fs.writeFile(path.join(RECIPES_DIR, `${r.slug}.ts`), ts, "utf8");
  }

  // 更新 index.ts
  await updateIndex(batch.map((r) => r.slug));
  console.log(`🔗 已注册 index.ts (+${batch.length})`);

  // tsc
  console.log("🔍 tsc 校验...");
  try {
    execSync("npx tsc --noEmit 2>&1", { cwd: ROOT, stdio: "inherit" });
    console.log("✅ tsc 通过");
  } catch (e) {
    console.error("❌ tsc 失败");
    process.exit(1);
  }

  console.log(`\n🎉 Day ${targetDay} 完成：${batch.length} 道菜已落盘`);
  setGHOutput("new_urls", newUrls.join(" "));
}

main().catch((e) => {
  console.error("💥 致命错误:", e.message);
  process.exit(1);
});