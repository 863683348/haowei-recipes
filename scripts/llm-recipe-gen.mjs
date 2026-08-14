#!/usr/bin/env node
/**
 * HǎoWèi 好味 · LLM 菜谱生成器（阿里云百炼 DashScope）
 *
 * 读取 docs/content-calendar-100d.md 日历 → 定位下一个未生成的 Day →
 * 调百炼 qwen-plus 按 Recipe 类型生成当日 3 道完整双语菜谱 JSON →
 * 落盘 src/data/recipes/{slug}.ts + 更新 index.ts。
 *
 * 用法：
 *   node scripts/llm-recipe-gen.mjs [--day N] [--dry-run] [--api-key sk-xxx]
 *
 * 选项：
 *   --day N      指定生成日历第 N 天（默认：自动找下一个未生成的 Day）
 *   --dry-run    只生成 JSON 到 /tmp 并打印，不落盘
 *   --api-key    key（默认读 .env.local 的 DASHSCOPE_API_KEY）
 *
 * 环境：DASHSCOPE_API_KEY（.env.local，gitignore 已排除）
 * 依赖：仅 node 内置（fetch），零 npm 依赖。
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = "C:\\Users\\l'x\\WorkBuddy\\2026-08-14-23-01-31\\haoweirecipes";
const CALENDAR = path.join(ROOT, "docs", "content-calendar-100d.md");
const RECIPES_DIR = path.join(ROOT, "src", "data", "recipes");
const INDEX_FILE = path.join(RECIPES_DIR, "index.ts");
const BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1";
const MODEL = "qwen-plus";

/* ---------- 参数 ---------- */
const args = process.argv.slice(2);
const dayArg = args.indexOf("--day") >= 0 ? Number(args[args.indexOf("--day") + 1]) : null;
const dryRun = args.includes("--dry-run");
const keyArg = args.indexOf("--api-key") >= 0 ? args[args.indexOf("--api-key") + 1] : null;

/* ---------- 读 key（.env.local 简易解析，无 dotenv 依赖） ---------- */
function readApiKey() {
  if (keyArg) return keyArg;
  const envPath = path.join(ROOT, ".env.local");
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
      const m = line.match(/^\s*DASHSCOPE_API_KEY=(\S+)\s*$/);
      if (m) return m[1];
    }
  }
  console.error("❌ 未找到 DASHSCOPE_API_KEY（.env.local 或 --api-key）");
  process.exit(1);
}
const API_KEY = readApiKey();

/* ---------- 1. 解析日历 ---------- */
function parseCalendar() {
  const src = fs.readFileSync(CALENDAR, "utf8");
  const days = new Map(); // day -> { theme, dishes[], keywords }
  const rowRe = /^\|\s*(\d+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/;
  for (const line of src.split("\n")) {
    const m = line.match(rowRe);
    if (!m) continue;
    const day = Number(m[1]);
    const theme = m[2].trim();
    const dishes = m[3].split("/").map((s) => s.trim().replace(/[✓（(][^)）]*[)）]?$/, "").trim()).filter(Boolean);
    const keywords = m[4].trim();
    days.set(day, { theme, dishes, keywords });
  }
  return days;
}

/* ---------- 2. 已存在 slug（含中文标题，避免重复） ---------- */
function existingTitles() {
  const set = new Set();
  for (const f of fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts")) {
    const src = fs.readFileSync(path.join(RECIPES_DIR, f), "utf8");
    const zh = src.match(/titleZh:\s*"([^"]+)"/);
    const en = src.match(/titleEn:\s*"([^"]+)"/);
    if (zh) set.add(zh[1]);
    if (en) set.add(en[1].replace(/ \(.*\)$/, ""));
  }
  return set;
}

/* ---------- 3. 选择目标 Day ---------- */
const calendar = parseCalendar();
const exists = existingTitles();
let targetDay = dayArg;
if (!targetDay) {
  // 找第一个「三道菜中有未生成菜」的 Day
  const sorted = [...calendar.keys()].sort((a, b) => a - b);
  targetDay = sorted.find((d) => calendar.get(d).dishes.some((dish) => !exists.has(dish)));
}
if (!targetDay || !calendar.has(targetDay)) {
  console.error("❌ 未找到目标 Day（日历可能已全部生成）");
  process.exit(1);
}
const plan = calendar.get(targetDay);
const todo = plan.dishes.filter((d) => !exists.has(d));
if (todo.length === 0) {
  console.error(`❌ Day ${targetDay} 三道菜均已存在`);
  process.exit(1);
}
console.log(`🎯 Day ${targetDay}: ${plan.theme}`);
console.log(`   待生成: ${todo.join(" / ")}`);
console.log(`   关键词: ${plan.keywords}`);

/* ---------- 4. 调百炼生成 ---------- */
const SCHEMA = `{
  "id": "kebab-case-identifier",
  "slug": "kebab-case-english (e.g. oyster-sauce-lettuce)",
  "titleEn": "English Title",
  "titleZh": "中文菜名",
  "pinyin": "pīn yīn",
  "cuisine": "川菜/粤菜/家常/面点小吃/江浙菜/湘菜（中文）",
  "cuisineEn": "Sichuan/Cantonese/Home-style",
  "region": "Province or City in English",
  "regionZh": "省份/城市（中文）",
  "difficulty": "easy|medium|hard",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family vs restaurant version note (English)",
  "versionNoteZh": "双版本说明（中文）",
  "tags": ["30-min","weeknight","comfort"],
  "dietary": ["none"] | ["vegetarian"] | ["vegan"] | ["gluten-free"],
  "story": "Family origin / cultural story in English (2-3 sentences)",
  "storyZh": "家庭来源/文化叙事（中文）",
  "ingredients": [{
    "id": "xx-01",
    "nameEn": "ingredient",
    "nameZh": "食材中文",
    "pinyin": "shí cái",
    "amountMetric": "10 g",
    "amountUS": "2 tsp",
    "category": "produce|protein|staple|asian-pantry|western-pantry|spice|dairy|other",
    "pantry": "local|asian",
    "note": "selection tip (optional)",
    "noteZh": "选材提示（可选）",
    "termKey": "light-soy-sauce (only if in existing terms, else omit)"
  }],
  "steps": [{
    "text": "Step description (English)",
    "textZh": "步骤说明（中文）",
    "zhHint": "中文短提示",
    "stateNote": {
      "visual": "What it looks like (English)",
      "visualZh": "状态描述（中文）",
      "timeRef": "2-3 minutes",
      "timeRefZh": "2-3 分钟",
      "heat": "low|medium-low|medium|medium-high|high",
      "signal": "What to watch for (English)",
      "signalZh": "判断信号（中文）"
    },
    "tip": "optional tip (English)",
    "tipZh": "小贴士（中文，可选）"
  }],
  "tips": ["tip 1", "tip 2", "tip 3"],
  "tipsZh": ["中文贴士 1", "中文贴士 2", "中文贴士 3"],
  "relatedSlugs": ["tomato-and-egg"],
  "image": "/images/recipes/{slug}.png"
}`;

function buildPrompt(dishes, keywords, theme) {
  return `You are a Chinese home-cooking expert writing for HǎoWèi 好味, an English-first recipe site for cooks outside China.

Today's theme: ${theme}. Generate EXACTLY ${dishes.length} complete recipes for these dishes: ${dishes.join(", ")}. SEO keywords to target: ${keywords}.

STRICT RULES:
1. Authentic 家常菜 (home-style, not Americanized Chinese food).
2. Every ingredient must be available in Western supermarkets OR have a substitution note.
3. Each recipe: ≥5 steps, ≥1 step with a stateNote (visual/signal/timeRef/heat), ≥1 ingredient with termKey ONLY if the term already exists in this list, ingredients ≥4 items.
4. Amounts must be in BOTH metric (g/ml) and US (tbsp/tsp/cup).
5. All text is bilingual: English primary + Chinese secondary fields (titleZh/textZh/storyZh/tipsZh/visualZh/signalZh/timeRefZh).
6. slug must be kebab-case English, unique. image path: /images/recipes/{slug}.png
7. difficulty/timeMin/servings must be realistic for home cooking.
8. relatedSlugs: only use slugs that exist or are generated together in this batch.

Valid termKeys: light-soy-sauce, dark-soy-sauce, shaoxing-wine, oyster-sauce, doubanjiang, chinese-black-vinegar, sesame-oil, cooking-wine, sichuan-peppercorn, ginger, garlic, scallion, five-spice, rice-vinegar, white-pepper, star-anise, dried-chili.

Respond with a SINGLE JSON array (no markdown, no commentary) matching this exact schema per item:
${SCHEMA}`;
}

async function callLLM(prompt) {
  console.log("\n⏳ 调百炼生成中…");
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: "You are a JSON-only assistant. Never wrap output in markdown code fences. Always reply with valid JSON." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 6000,
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    console.error(`❌ 百炼 API 错误 ${res.status}: ${body.slice(0, 500)}`);
    process.exit(1);
  }
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? "";
  // 兼容 json_object 返回（可能包一层 {"recipes": [...]}）
  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    console.error("❌ LLM 输出不是合法 JSON：", content.slice(0, 300));
    process.exit(1);
  }
  const arr = Array.isArray(parsed) ? parsed : parsed.recipes ?? parsed.batch ?? Object.values(parsed)[0];
  if (!Array.isArray(arr) || arr.length === 0) {
    console.error("❌ LLM 未返回数组：", JSON.stringify(parsed).slice(0, 300));
    process.exit(1);
  }
  return arr;
}

const prompt = buildPrompt(todo, plan.keywords, plan.theme);
let batch;
try {
  batch = await callLLM(prompt);
} catch (e) {
  console.error("❌ 请求失败:", e.message);
  process.exit(1);
}

/* ---------- 5. 清洗与校验 ---------- */
function clean(batch) {
  const seen = new Set();
  const cleaned = [];
  // 已存在 slug（用于 relatedSlugs 清洗）
  const existingFiles = fs
    .readdirSync(RECIPES_DIR)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => f.replace(/\.ts$/, ""));
  const existingSlugs = new Set(existingFiles.map((s) => s.replace(/-/g, "").toLowerCase()));
  for (const r of batch) {
    if (!r || typeof r !== "object") continue;
    const slug = (r.slug ?? "").trim().toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    if (!slug || seen.has(slug) || exists.has(r.titleZh ?? "")) continue;
    seen.add(slug);
    cleaned.push({ ...r, slug, image: `/images/recipes/${slug}.png` });
  }
  return cleaned;
}
batch = clean(batch);

// relatedSlugs 清洗：只保留「已存在文件」+「本批生成」的 slug，并保证同批互链
{
  const newSlugs = batch.map((r) => r.slug);
  const valid = new Set([...newSlugs]);
  for (const f of fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts")) {
    valid.add(f.replace(/\.ts$/, ""));
  }
  for (const r of batch) {
    // stateNote.heat 非法值清洗（LLM 可能输出 "n/a"）
    if (Array.isArray(r.steps)) {
      const HEAT = new Set(["low", "medium-low", "medium", "medium-high", "high"]);
      for (const s of r.steps) {
        if (s.stateNote && s.stateNote.heat && !HEAT.has(s.stateNote.heat)) delete s.stateNote.heat;
      }
    }
    const related = (r.relatedSlugs ?? []).filter((s) => valid.has(s));
    for (const s of newSlugs) if (s !== r.slug && !related.includes(s)) related.push(s);
    r.relatedSlugs = [...new Set(related)];
  }
}

const errors = [];
const REQUIRED = [
  "slug", "titleEn", "titleZh", "pinyin", "cuisine", "region", "difficulty",
  "timeMin", "servings", "version", "tags", "dietary", "story", "ingredients", "steps", "tips", "relatedSlugs",
];
for (const r of batch) {
  for (const k of REQUIRED) if (r[k] === undefined) errors.push(`[${r.slug ?? "?"}] 缺字段: ${k}`);
  if (Array.isArray(r.ingredients) && r.ingredients.length < 4) errors.push(`[${r.slug}] 食材<4`);
  if (Array.isArray(r.steps) && r.steps.length < 5) errors.push(`[${r.slug}] 步骤<5`);
  if (Array.isArray(r.steps) && !r.steps.some((s) => s.stateNote)) errors.push(`[${r.slug}] 缺 stateNote`);
}
if (errors.length || batch.length === 0) {
  console.error("=== 校验失败 ===");
  for (const e of errors) console.error("  -", e);
  if (batch.length === 0) console.error("  - LLM 生成的菜与已有菜全部重复");
  process.exit(1);
}
console.log(`✅ LLM 生成 ${batch.length} 道，校验通过`);

/* ---------- 6. dry-run / 落盘 ---------- */
if (dryRun) {
  const out = path.join(ROOT, "scripts", `.recipe-batch-${targetDay}.json`);
  fs.writeFileSync(out, JSON.stringify(batch, null, 2));
  console.log(`📝 dry-run: 已写 ${out}`);
  console.log(JSON.stringify(batch.map((r) => ({ slug: r.slug, titleEn: r.titleEn, titleZh: r.titleZh })), null, 2));
  process.exit(0);
}

const tmp = path.join(ROOT, "scripts", `.recipe-batch-${targetDay}.json`);
fs.writeFileSync(tmp, JSON.stringify(batch, null, 2));
console.log(`📄 临时 JSON: ${tmp}`);

/* ---------- 7. 复用 recipe-gen.mjs 落盘 + 注册 + tsc ---------- */
try {
  execSync(`"C:\\Users\\l'x\\.workbuddy\\binaries\\node\\versions\\22.22.2\\node.exe" scripts/recipe-gen.mjs "${tmp}"`, {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, NODE_OPTIONS: "" },
  });
} catch (e) {
  console.error("❌ recipe-gen.mjs 执行失败（JSON 保留在 " + tmp + " 供人工修复）");
  process.exit(1);
}

console.log(`\n🎉 Day ${targetDay} 完成：${batch.length} 道菜已落盘并注册 index.ts`);
