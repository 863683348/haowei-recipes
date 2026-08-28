#!/usr/bin/env node
/**
 * HǎoWèi 好味 · 种子库全量批量生成（一次性）
 *
 * 读取 docs/content-calendar-100d.md 日历（Day 1-81，236 道）→
 * 对每个 Day 调百炼 qwen-plus 生成 2-3 道完整双语菜谱 →
 * 校验 + 清洗 → 落盘 src/data/recipes/{slug}.ts → 增量更新 index.ts →
 * 全部完成后统一 tsc。
 *
 * 用法：
 *   node scripts/batch-seed-generate.mjs [--day 1,2,5] [--only 1-10] [--max-day 81]
 *   --day      只生成指定 Day（逗号分隔）
 *   --only     只生成 Day 区间（如 1-10）
 *   --max-day  最大 Day（默认 81）
 *   --no-tsc   跳过最终 tsc
 *
 * 断点续传：已存在 .ts 文件的 slug 自动跳过（按 titleZh 判重）。
 * 失败重试：每个 Day 最多 3 次，全部完成后打印 failed 列表。
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
const dayArgIdx = args.indexOf("--day");
const onlyIdx = args.indexOf("--only");
const maxDayIdx = args.indexOf("--max-day");
const doTsc = !args.includes("--no-tsc");

const dayFilter = dayArgIdx >= 0
  ? new Set(args[dayArgIdx + 1].split(",").map((s) => Number(s.trim())))
  : null;
const onlyRange = onlyIdx >= 0 ? args[onlyIdx + 1] : null;
const maxDay = maxDayIdx >= 0 ? Number(args[maxDayIdx + 1]) : 81;

/* ---------- 读 key ---------- */
function readApiKey() {
  const envPath = path.join(ROOT, ".env.local");
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
      const m = line.match(/^\s*DASHSCOPE_API_KEY=(\S+)\s*$/);
      if (m) return m[1];
    }
  }
  console.error("❌ 未找到 DASHSCOPE_API_KEY（.env.local）");
  process.exit(1);
}
const API_KEY = readApiKey();

/* ---------- 解析日历 ---------- */
function parseCalendar() {
  const src = fs.readFileSync(CALENDAR, "utf8");
  const days = new Map();
  const rowRe = /^\|\s*(\d+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/;
  for (const line of src.split("\n")) {
    const m = line.match(rowRe);
    if (!m) continue;
    const day = Number(m[1]);
    if (day > maxDay) continue;
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

/* ---------- 已存在判定（titleZh + 文件） ---------- */
function existingInfo() {
  const titles = new Set();
  const files = new Set();
  for (const f of fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts")) {
    files.add(f.replace(/\.ts$/, ""));
    const src = fs.readFileSync(path.join(RECIPES_DIR, f), "utf8");
    // 兼容 "titleZh": "..."（JSON 风格）与 titleZh: "..."（手写风格）
    const zh = src.match(/"?titleZh"?:\s*"([^"]+)"/);
    const en = src.match(/"?titleEn"?:\s*"([^"]+)"/);
    if (zh) titles.add(zh[1]);
    if (en) titles.add(en[1].replace(/ \(.*\)$/, "").trim());
  }
  return { titles, files };
}

/* ---------- LLM 生成 ---------- */
const SCHEMA = `{
  "id": "kebab-case-identifier",
  "slug": "kebab-case-english (e.g. oyster-sauce-lettuce)",
  "titleEn": "English Title",
  "titleZh": "中文菜名",
  "pinyin": "pin yin",
  "cuisine": "川菜/粤菜/家常/面点小吃/江浙菜/湘菜/北方小吃/汤羹凉菜/甜品饮品（中文）",
  "cuisineEn": "Sichuan/Cantonese/Home-style/...",
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
    "pinyin": "shi cai",
    "amountMetric": "10 g",
    "amountUS": "2 tsp",
    "category": "produce|protein|staple|asian-pantry|western-pantry|spice|dairy|other",
    "pantry": "local|asian",
    "note": "selection tip (optional)",
    "noteZh": "选材提示（可选）",
    "termKey": "light-soy-sauce (only if in the valid list, else omit)"
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
  "relatedSlugs": ["another-batch-slug"],
  "image": "/images/recipes/{slug}.webp"
}`;

function buildPrompt(dishes, keywords, theme) {
  return `You are a Chinese home-cooking expert writing for HǎoWèi 好味, an English-first recipe site for cooks outside China.

Today's theme: ${theme}. Generate EXACTLY ${dishes.length} complete recipes for these dishes: ${dishes.join(", ")}. SEO keywords to target: ${keywords}.

STRICT RULES:
1. Authentic 家常菜 (home-style, NOT Americanized Chinese food).
2. Every ingredient must be available in Western supermarkets OR have a substitution note.
3. Each recipe: ≥5 steps, ≥1 step with a stateNote (visual/signal/timeRef/heat), ≥1 ingredient with termKey ONLY if the term exists in the valid list, ingredients ≥4 items.
4. Amounts must be in BOTH metric (g/ml) and US (tbsp/tsp/cup).
5. All text is bilingual: English primary + Chinese secondary fields (titleZh/textZh/storyZh/tipsZh/visualZh/signalZh/timeRefZh).
6. slug must be kebab-case English, unique, descriptive (e.g. shui-zhu-beef). image path: /images/recipes/{slug}.webp
7. difficulty/timeMin/servings must be realistic for home cooking.
8. relatedSlugs: only use slugs that are generated together in this batch.
9. Use "cuisine" values from this set only: 川菜/粤菜/家常/面点小吃/江浙菜/湘菜/北方小吃/汤羹凉菜/甜品饮品.
10. Every ingredient id must be unique within its recipe (e.g. "xx-01", "xx-02").
11. story must feel like a real family story, 2-3 sentences, specific (city, relative, memory).

Valid termKeys: light-soy-sauce, dark-soy-sauce, shaoxing-wine, oyster-sauce, doubanjiang, chinese-black-vinegar, sesame-oil, cooking-wine, sichuan-peppercorn, ginger, garlic, scallion, five-spice, rice-vinegar, white-pepper, star-anise, dried-chili.

Respond with a SINGLE JSON array (no markdown, no commentary) matching this exact schema per item:
${SCHEMA}`;
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
          model: MODEL,
          messages: [
            { role: "system", content: "You are a JSON-only assistant. Never wrap output in markdown code fences. Always reply with valid JSON." },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 8000,
          response_format: { type: "json_object" },
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
      const arr = Array.isArray(parsed) ? parsed : parsed.recipes ?? parsed.batch ?? Object.values(parsed)[0];
      if (!Array.isArray(arr) || arr.length === 0) throw new Error("Empty array");
      return arr;
    } catch (e) {
      lastErr = e;
      console.warn(`⚠️ LLM retry ${i + 1}/${retries}: ${e.message}`);
      if (i < retries - 1) await new Promise((r) => setTimeout(r, 15000));
    }
  }
  throw lastErr;
}

/* ---------- 清洗校验 ---------- */
function cleanAndValidate(batch, validSlugs, existingTitles) {
  const seen = new Set();
  const cleaned = [];
  const errors = [];
  const HEAT = new Set(["low", "medium-low", "medium", "medium-high", "high"]);
  const CUISINES = new Set(["川菜", "粤菜", "家常", "面点小吃", "江浙菜", "湘菜", "北方小吃", "汤羹凉菜", "甜品饮品"]);
  const REQUIRED = ["slug", "titleEn", "titleZh", "pinyin", "cuisine", "region", "difficulty", "timeMin", "servings", "version", "tags", "dietary", "story", "ingredients", "steps", "tips", "relatedSlugs"];
  for (const r of batch) {
    if (!r || typeof r !== "object") continue;
    let slug = String(r.slug ?? "").trim().toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    if (!slug) { errors.push("空 slug"); continue; }
    if (existingTitles.has(r.titleZh ?? "")) continue; // 已存在同名菜
    // slug 冲突（与已有文件/批内重复且标题不同）→ 追加后缀
    if (seen.has(slug) || validSlugs.has(slug)) {
      let base = slug;
      let i = 2;
      while (seen.has(slug) || validSlugs.has(slug)) slug = `${base}-${i++}`;
    }
    seen.add(slug);
    // cuisine 归一
    if (r.cuisine && !CUISINES.has(r.cuisine)) {
      // 尝试映射
      const c = String(r.cuisine);
      if (c.includes("川")) r.cuisine = "川菜";
      else if (c.includes("粤") || c.includes("广")) r.cuisine = "粤菜";
      else if (c.includes("湘")) r.cuisine = "湘菜";
      else if (c.includes("江") || c.includes("沪") || c.includes("淮")) r.cuisine = "江浙菜";
      else if (c.includes("面") || c.includes("包") || c.includes("点")) r.cuisine = "面点小吃";
      else if (c.includes("甜") || c.includes("糖") || c.includes("饮")) r.cuisine = "甜品饮品";
      else if (c.includes("汤") || c.includes("羹") || c.includes("凉菜")) r.cuisine = "汤羹凉菜";
      else if (c.includes("北")) r.cuisine = "北方小吃";
      else r.cuisine = "家常";
    }
    // stateNote.heat 清洗
    if (Array.isArray(r.steps)) {
      for (const s of r.steps) {
        if (s.stateNote && s.stateNote.heat && !HEAT.has(s.stateNote.heat)) delete s.stateNote.heat;
      }
    }
    // ingredient id 唯一化 + pantry 归一（Pantry 类型仅 local|asian）+ termKey null 清理
    if (Array.isArray(r.ingredients)) {
      r.ingredients.forEach((ing, i) => {
        if (!ing.id) ing.id = `${slug.slice(0, 2)}-${String(i + 1).padStart(2, "0")}`;
        if (ing.pantry && ing.pantry !== "local" && ing.pantry !== "asian") {
          ing.pantry = ing.pantry.includes("asian") ? "asian" : "local";
        }
        if (ing.termKey === null || ing.termKey === undefined || ing.termKey === "") {
          delete ing.termKey;
        }
      });
    }
    // relatedSlugs：只保留本批 + 已有文件
    const related = (r.relatedSlugs ?? []).filter((s) => validSlugs.has(s));
    for (const s of seen) if (s !== slug && !related.includes(s)) related.push(s);
    r.relatedSlugs = [...new Set(related)];
    cleaned.push({ ...r, slug, image: `/images/recipes/${slug}.webp` });
  }
  for (const r of cleaned) {
    for (const k of REQUIRED) if (r[k] === undefined) errors.push(`[${r.slug}] 缺字段: ${k}`);
    if (Array.isArray(r.ingredients) && r.ingredients.length < 4) errors.push(`[${r.slug}] 食材<4`);
    if (Array.isArray(r.steps) && r.steps.length < 5) errors.push(`[${r.slug}] 步骤<5`);
    if (Array.isArray(r.steps) && !r.steps.some((s) => s.stateNote)) errors.push(`[${r.slug}] 缺 stateNote`);
  }
  return { cleaned, errors };
}

/* ---------- 落盘 + index.ts 增量 ---------- */
const nameToSlug = {}; // 变量名 -> slug（模块级，updateIndex 使用）

function writeRecipeFile(r) {
  const name = r.slug.replace(/-/g, "_");
  const fileContent = `import type { Recipe } from "@/lib/types";

/** ${r.titleEn} (${r.titleZh}) — Seed batch */
export const ${name}: Recipe = ${JSON.stringify(r, null, 2)};
`;
  fs.writeFileSync(path.join(RECIPES_DIR, `${r.slug}.ts`), fileContent, "utf8");
  return name;
}

function updateIndex(names) {
  if (names.length === 0) return;
  let src = fs.readFileSync(INDEX_FILE, "utf8");
  const importLines = names.map((n) => {
    const slug = nameToSlug[n]; // name -> slug
    return `import { ${n} } from "./${slug}";`;
  }).join("\n");
  const arrInsert = names.map((n) => `  ${n},`).join("\n");
  const lastImportIdx = src.lastIndexOf("\nimport ");
  if (lastImportIdx >= 0) {
    src = src.slice(0, lastImportIdx + 1) + importLines + "\n" + src.slice(lastImportIdx + 1);
  } else {
    src = importLines + "\n" + src;
  }
  if (src.includes("\n];")) {
    src = src.replace("\n];", `\n${arrInsert}\n];`);
  } else if (src.includes("];")) {
    src = src.replace("];", `${arrInsert}\n];`);
  } else {
    console.error("!!! index.ts 未找到数组结束符");
    process.exit(1);
  }
  fs.writeFileSync(INDEX_FILE, src, "utf8");
}

/* ---------- main ---------- */
async function main() {
  const calendar = parseCalendar();
  const { titles, files } = existingInfo();
  const validSlugs = new Set(files);
  let dayNumbers = [...calendar.keys()].sort((a, b) => a - b);
  if (dayFilter) dayNumbers = dayNumbers.filter((d) => dayFilter.has(d));
  if (onlyRange) {
    const [a, b] = onlyRange.split("-").map(Number);
    dayNumbers = dayNumbers.filter((d) => d >= a && d <= b);
  }

  const totalDishes = [...calendar.values()].reduce((acc, p) => acc + p.dishes.length, 0);
  console.log(`📅 日历 Day 1-${maxDay}：共 ${dayNumbers.length} 天 / ${totalDishes} 道菜（含已存在）`);
  console.log(`  已存在菜谱: ${files.size} 个 slug / ${titles.size} 个中文名\n`);

  let generated = 0;
  let skippedDays = 0;
  const failed = [];

  for (const day of dayNumbers) {
    const plan = calendar.get(day);
    const todo = plan.dishes.filter((d) => !titles.has(d));
    if (todo.length === 0) {
      console.log(`⏭️  Day ${day}（${plan.theme}）三道菜均已存在，跳过`);
      skippedDays++;
      continue;
    }
    console.log(`\n🎯 Day ${day}: ${plan.theme} → 待生成 [${todo.join(" / ")}]`);

    let ok = false;
    for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
      try {
        const prompt = buildPrompt(todo, plan.keywords, plan.theme);
        let batch = await callLLM(prompt);
        const { cleaned, errors } = cleanAndValidate(batch, validSlugs, titles);
        if (cleaned.length === 0) throw new Error(errors.join("; ") || "全部与已有菜重复");
        if (errors.length) {
          console.warn(`⚠️  部分字段问题（继续，仅警告）: ${errors.slice(0, 5).join(" | ")}`);
        }
        // 落盘
        const names = cleaned.map((r) => {
          const name = writeRecipeFile(r);
          nameToSlug[name] = r.slug;
          validSlugs.add(r.slug);
          titles.add(r.titleZh);
          return name;
        });
        updateIndex(names);
        generated += cleaned.length;
        console.log(`✅ Day ${day} 完成: ${cleaned.map((r) => `${r.slug}(${r.titleZh})`).join(", ")}`);
        ok = true;
        await new Promise((r) => setTimeout(r, 2000));
      } catch (e) {
        console.error(`❌ Day ${day} 第 ${attempt} 次失败: ${e.message}`);
        if (attempt === 3) failed.push(day);
        await new Promise((r) => setTimeout(r, 10000));
      }
    }
  }

  console.log(`\n========== 汇总 ==========`);
  console.log(`✅ 成功生成: ${generated} 道菜谱`);
  console.log(`⏭️  跳过(已存在) Day: ${skippedDays}`);
  if (failed.length) console.log(`❌ 失败 Day（需手动重跑 --day ${failed.join(",")}）: ${failed.length}`);
  else console.log(`✅ 全部成功，无失败`);

  if (doTsc) {
    console.log("\n🔍 tsc 校验…");
    try {
      execSync('npx tsc --noEmit 2>&1', { cwd: ROOT, stdio: "inherit" });
      console.log("✅ tsc 通过");
    } catch {
      console.error("❌ tsc 失败，请修复");
      process.exit(1);
    }
  }
}

main().catch((e) => {
  console.error("💥 致命错误:", e.message);
  process.exit(1);
});
