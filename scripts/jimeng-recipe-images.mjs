#!/usr/bin/env node
/**
 * 即梦AI（火山引擎 Ark / Jimeng）菜谱生图脚本
 * 每道菜 4 图：1 首页封面 + 3 过程步骤图（适配免费 60 张/天额度）
 *
 * ⚠️ 接入说明：
 *   - 即梦AI 的「60 张/天免费」是【网页端】额度，API 走火山引擎 Ark，需自行确认是否有免费 API 额度。
 *   - 若 API 需付费，本脚本同样适用（按量计费），只是不再"白嫖"。
 *   - 火山引擎 Ark 图像生成端点：POST https://ark.cn-beijing.volces.com/api/v3/images/generations
 *
 * 前置：VOLCENGINE_API_KEY（二选一）：
 *   1. 环境变量：export VOLCENGINE_API_KEY=xxx
 *   2. 本地文件：~/.workbuddy/secrets/jimeng-api-key.txt（推荐，key 不进对话/仓库）
 *
 * 用法：
 *   node scripts/jimeng-recipe-images.mjs                    # 全部菜谱（每道 4 图）
 *   node scripts/jimeng-recipe-images.mjs --slug mapo-tofu  # 指定菜谱
 *   node scripts/jimeng-recipe-images.mjs --dry-run         # 只打印 prompt，不调用 API
 *   node scripts/jimeng-recipe-images.mjs --cover-only      # 只生成首页封面图
 */
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ARCHIVE = path.join(ROOT, "_archive-images", "recipes");

// 即梦方舟「推理接入点」ID，形如 ep-xxxx，必须设置（见 docs/api-keys-setup.md）
let MODEL = process.env.JIMENG_MODEL || ""; // 也可写入 ~/.workbuddy/secrets/jimeng-model.txt
const ENDPOINT =
  process.env.JIMENG_ENDPOINT ||
  "https://ark.cn-beijing.volces.com/api/v3/images/generations";
const SIZE = process.env.JIMENG_IMAGE_SIZE || "1024x1024";
const POLL_INTERVAL_MS = 3000;
const TIMEOUT_MS = 120000;

const STYLE =
  "professional food photography, natural window light, shallow depth of field, rustic wooden table, warm inviting tones, appetizing, high detail, no text, no watermark";

/**
 * 每道菜定义 4 个 prompt：
 *   cover  → 首页封面图（成品，吸引点击）
 *   step1-3 → 过程步骤图（关键操作/状态，用于菜谱详情页步骤展示）
 */
const RECIPES = [
  {
    slug: "tomato-and-egg",
    dish: "Tomato Scrambled Eggs (番茄炒蛋)",
    cover:
      "glossy red tomato wedges in rich orange egg sauce with soft golden egg curds, chopped scallions, rustic white ceramic bowl, NO whole tomatoes, NO rice",
    step1:
      "fresh eggs cracked into a bowl being whisked with chopsticks, golden yolks, close-up kitchen scene",
    step2:
      "red tomatoes being cut into wedges on a wooden cutting board with a sharp knife, bright red flesh",
    step3:
      "eggs and tomatoes simmering in a wok over medium heat, glossy orange sauce forming, steam rising",
  },
  {
    slug: "mapo-tofu",
    dish: "Mapo Tofu (麻婆豆腐)",
    cover:
      "silken tofu cubes in glossy deep-red spicy chili bean sauce with minced pork, chili oil sheen, scallion rings, white ceramic bowl, rice behind",
    step1:
      "silken tofu cubes being gently slid into a wok of bubbling red sauce, wooden spatula",
    step2:
      "ground Sichuan peppercorns being toasted in a dry pan until fragrant, close-up",
    step3:
      "finished mapo tofu being plated, glossy sauce coating tofu, scallion rings sprinkled on top",
  },
  {
    slug: "kung-pao-chicken",
    dish: "Kung Pao Chicken (宫保鸡丁)",
    cover:
      "golden diced chicken with dried red chilies, Sichuan peppercorns, roasted peanuts and scallion sections, glossy vinegar sauce, white plate",
    step1:
      "chicken thigh being diced into uniform cubes on a cutting board, knife work close-up",
    step2:
      "dried red chilies and Sichuan peppercorns sizzling in hot oil in a wok, aromatic",
    step3:
      "kung pao chicken tossing in wok with peanuts and scallions, glossy sauce coating",
  },
  {
    slug: "scallion-pancakes",
    dish: "Scallion Pancakes (葱油饼)",
    cover:
      "golden-brown crispy flaky scallion pancakes stacked on wooden board, visible layers and green specks, one cut showing lamination, soy dipping sauce",
    step1:
      "dough being rolled out thin with a rolling pin, scallion-green oil brushed on surface",
    step2:
      "pancake dough being coiled into a spiral and flattened, layering technique close-up",
    step3:
      "scallion pancake frying in a pan with oil, golden-brown bottom forming, crispy edges",
  },
  {
    slug: "egg-fried-rice",
    dish: "Egg Fried Rice (蛋炒饭)",
    cover:
      "glossy golden egg fried rice with separate grains, egg ribbons, spring onions, white ceramic bowl with chopsticks, light steam",
    step1:
      "cold cooked rice being broken up with hands then added to hot wok, separate grains",
    step2:
      "beaten egg being poured into hot wok and scrambled quickly into ribbons",
    step3:
      "rice and egg tossed together with scallions in wok over high heat, wok hei visible",
  },
  {
    slug: "beef-and-broccoli",
    dish: "Beef and Broccoli (西兰花炒牛肉)",
    cover:
      "tender sliced beef and bright green broccoli in glossy oyster sauce, white plate, steam rising",
    step1:
      "beef slices being velveted with cornstarch and soy in a bowl, marinating close-up",
    step2:
      "beef searing in wok over high heat, browning edges, wok hei smoke",
    step3:
      "broccoli and beef tossed in glossy oyster sauce, bright green florets coated",
  },
  {
    slug: "cucumber-scrambled-eggs",
    dish: "Cucumber Scrambled Eggs (黄瓜炒蛋)",
    cover:
      "bright green cucumber chunks with soft golden egg curds in light glossy sauce, rustic white bowl, rice blurred behind",
    step1:
      "cucumber being cut into diagonal chunks on cutting board, fresh green",
    step2:
      "eggs being scrambled in wok until just set, soft curds",
    step3:
      "cucumber and egg combined in wok, light sauce glistening, quick stir-fry",
  },
  {
    slug: "garlic-chives-scrambled-eggs",
    dish: "Garlic Chives Scrambled Eggs (韭菜炒蛋)",
    cover:
      "vibrant green garlic chive segments folded into fluffy golden egg, simple white plate, NO rice, Shandong rustic style",
    step1:
      "garlic chives being cut into 2-inch segments, vibrant green, knife close-up",
    step2:
      "eggs being beaten in bowl with pinch of salt, golden",
    step3:
      "chives and egg stir-fried together in wok, eggs just set, chives wilted bright",
  },
  {
    slug: "pineapple-fried-rice",
    dish: "Pineapple Fried Rice (菠萝炒饭)",
    cover:
      "golden curry-tinted fried rice with bright pineapple chunks, cashews, raisins, white plate, lime wedge, Thai-Chinese style",
    step1:
      "fresh pineapple being cut and chunks removed from half shell, yellow flesh",
    step2:
      "rice tossed in wok with curry powder, turning golden, aromatics sizzling",
    step3:
      "pineapple fried rice plated in pineapple shell, cashews and raisins on top",
  },
  {
    slug: "yangzhou-fried-rice",
    dish: "Yangzhou Fried Rice (扬州炒饭)",
    cover:
      "glossy long-grain rice with diced ham, shrimp, peas, carrots and egg ribbons, white bowl with chopsticks, Cantonese banquet style",
    step1:
      "assorted ingredients (ham, shrimp, peas, carrot) prepped in small bowls, mise en place",
    step2:
      "egg poured into wok forming thin sheet then cut into ribbons",
    step3:
      "all ingredients tossed with rice in wok over high heat, colorful and glossy",
  },
];

function getApiKey() {
  if (process.env.VOLCENGINE_API_KEY)
    return Promise.resolve(process.env.VOLCENGINE_API_KEY.trim());
  const p = path.join(os.homedir(), ".workbuddy", "secrets", "jimeng-api-key.txt");
  return fs.readFile(p, "utf8").then((s) => s.trim()).catch(() => null);
}

async function loadModelFromFile() {
  const p = path.join(os.homedir(), ".workbuddy", "secrets", "jimeng-model.txt");
  return fs.readFile(p, "utf8").then((s) => s.trim()).catch(() => "");
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** 调用即梦 API 生成单张图，返回图片 URL */
async function generateImage(key, prompt) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      prompt: `${prompt}, ${STYLE}`,
      size: SIZE,
      response_format: "url",
      n: 1,
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("❌ 即梦 API 失败", res.status, JSON.stringify(json).slice(0, 400));
    process.exit(1);
  }
  const url = json?.data?.[0]?.url || json?.images?.[0]?.url;
  if (!url) {
    console.error("❌ 未返回图片 URL，响应：", JSON.stringify(json).slice(0, 400));
    process.exit(1);
  }
  return url;
}

async function download(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`下载失败 ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, buf);
  return buf.length;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const coverOnly = args.includes("--cover-only");
  const slugIdx = args.indexOf("--slug");

  let recipes = RECIPES;
  if (slugIdx >= 0) {
    const slug = args[slugIdx + 1];
    recipes = RECIPES.filter((r) => r.slug === slug);
    if (recipes.length === 0) {
      console.error("未知 slug:", slug, "\n可用:", RECIPES.map((r) => r.slug).join(", "));
      process.exit(1);
    }
  }

  // 构造任务：每道菜 4 图（或仅封面）
  const jobs = [];
  for (const r of recipes) {
    jobs.push({ slug: r.slug, kind: "cover", prompt: `${r.dish}: ${r.cover}` });
    if (!coverOnly) {
      jobs.push({ slug: r.slug, kind: "step1", prompt: `${r.dish} — step 1: ${r.step1}` });
      jobs.push({ slug: r.slug, kind: "step2", prompt: `${r.dish} — step 2: ${r.step2}` });
      jobs.push({ slug: r.slug, kind: "step3", prompt: `${r.dish} — step 3: ${r.step3}` });
    }
  }

  if (!MODEL) MODEL = await loadModelFromFile();

  if (dryRun) {
    console.log(`[dry-run] 将生成 ${jobs.length} 张图（模型 ${MODEL || "<未设置 JIMENG_MODEL / jimeng-model.txt>"}）：`);
    for (const j of jobs) console.log(`  ${j.slug}/${j.kind}: ${j.prompt.slice(0, 70)}…`);
    return;
  }

  if (!MODEL) {
    console.error(
      "❌ 请先设置即梦模型（火山方舟「推理接入点」ID）。步骤：\n" +
        "   1. 火山方舟控制台 https://console.volcengine.com/  → 在线推理 → 自定义推理接入点\n" +
        "   2. 创建接入点，模型选「即梦AI - 图片生成」，复制接入点 ID（ep-xxxx）\n" +
        "   3. export JIMENG_MODEL=ep-xxxx   （或写入 ~/.workbuddy/secrets/jimeng-model.txt）\n" +
        "   详见 docs/api-keys-setup.md"
    );
    process.exit(1);
  }

  const key = await getApiKey();
  if (!key) {
    console.error(
      "❌ 未找到 VOLCENGINE_API_KEY。请任选其一：\n" +
        "  1. export VOLCENGINE_API_KEY=xxx\n" +
        "  2. 把 key 写入 ~/.workbuddy/secrets/jimeng-api-key.txt（推荐）"
    );
    process.exit(1);
  }

  console.log(`使用即梦模型 ${MODEL}，生成 ${jobs.length} 张图（${recipes.length} 道菜）…`);
  for (const job of jobs) {
    const pngPath = path.join(ARCHIVE, `${job.slug}-${job.kind}.png`);
    process.stdout.write(`⏳ ${job.slug}/${job.kind}…`);
    const url = await generateImage(key, job.prompt);
    const size = await download(url, pngPath);
    console.log(` ✓ ${(size / 1024).toFixed(0)}KB`);
    await sleep(POLL_INTERVAL_MS); // 避免限流
  }

  // 转 WebP + 更新引用（复用 optimize 脚本）
  const nodeBin = process.execPath;
  const optimize = path.join(__dirname, "optimize-recipe-images.mjs");
  execFileSync(nodeBin, [optimize, "--update-refs"], { cwd: ROOT, stdio: "inherit" });
  console.log("✅ 完成：已转 WebP 并更新数据引用");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
