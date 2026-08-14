#!/usr/bin/env node
/**
 * 百炼（阿里云通义万相）菜谱生图脚本 — 替换 WorkBuddy ImageGen（成本低 ~10 倍）
 *
 * ⚠️ 关键：wanx2.1-t2i-turbo 只支持【异步任务模式】：
 *   1. POST /services/aigc/text2image/image-synthesis (X-DashScope-Async: enable) → task_id
 *   2. GET  /api/v1/tasks/{task_id} 轮询 → SUCCEEDED → output.results[0].url 下载
 *   （multimodal-generation 同步端点仅适配 wan2.6，不适用本模型）
 *
 * 前置：BAILIAN_API_KEY（二选一）：
 *   1. 环境变量：export BAILIAN_API_KEY=sk-xxx
 *   2. 本地文件：~/.workbuddy/secrets/bailian-api-key.txt（推荐，key 不进对话/仓库）
 *
 * 用法：
 *   node scripts/bailian-recipe-images.mjs                          # 按内置菜谱清单生成
 *   node scripts/bailian-recipe-images.mjs --slug mapo-tofu         # 只生成指定菜谱
 *   node scripts/bailian-recipe-images.mjs --prompt "..." --name x  # 自定义 prompt/输出名
 *   node scripts/bailian-recipe-images.mjs --og                     # 生成 OG 默认图
 *   node scripts/bailian-recipe-images.mjs --no-optimize            # 只下载 PNG，不转 WebP
 *
 * 流程：调 wanx2.1-t2i-turbo（异步）生成 → 下载 PNG 到 _archive-images/ → 调
 *       optimize-recipe-images.mjs 转 WebP → public/images + 更新数据引用。
 */
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ARCHIVE = path.join(ROOT, "_archive-images", "recipes");
const OG_ARCHIVE = path.join(ROOT, "_archive-images");

const MODEL = process.env.BAILIAN_IMAGE_MODEL || "wanx2.1-t2i-turbo";
/** 提交任务端点（异步）；multimodal-generation 同步端点仅 wan2.6 可用 */
const SUBMIT_URL =
  process.env.BAILIAN_BASE_URL ||
  "https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis";
/** 任务查询端点（固定） */
const TASK_URL =
  process.env.BAILIAN_TASK_URL || "https://dashscope.aliyuncs.com/api/v1/tasks";
const SIZE = process.env.BAILIAN_IMAGE_SIZE || "1440*960"; // 注意是星号；wanx2.1 宽高限 512-1440
const POLL_INTERVAL_MS = 4000;
const POLL_TIMEOUT_MS = 120000;

const STYLE =
  "professional food photography, natural window light, shallow depth of field, rustic wooden table, white ceramic bowls, warm inviting tones, appetizing steam, high resolution, no text, no watermark";

const RECIPES = [
  {
    slug: "tomato-and-egg",
    dish: "Tomato Scrambled Eggs (番茄炒蛋)",
    desc: "glossy red tomato wedges in rich orange sauce with soft golden egg curds, garnished with chopped scallions, served in a rustic white ceramic bowl, steamed white rice blurred in background",
  },
  {
    slug: "mapo-tofu",
    dish: "Mapo Tofu (麻婆豆腐)",
    desc: "silken tofu cubes in glossy deep-red spicy fermented chili bean sauce, minced pork, red chili oil sheen, ground Sichuan peppercorn and scallion rings, white ceramic bowl, steamed rice in background",
  },
  {
    slug: "kung-pao-chicken",
    dish: "Kung Pao Chicken (宫保鸡丁)",
    desc: "golden diced chicken stir-fry with dried red chilies, Sichuan peppercorns, roasted peanuts and scallion sections, glossy vinegar-forward sauce, white ceramic plate",
  },
  {
    slug: "scallion-pancakes",
    dish: "Scallion Pancakes (葱油饼)",
    desc: "golden-brown crispy flaky scallion pancakes stacked on a wooden cutting board, visible flaky layers and green scallion specks, one cut into wedges showing lamination, small bowl of soy dipping sauce",
  },
  {
    slug: "egg-fried-rice",
    dish: "Egg Fried Rice (蛋炒饭)",
    desc: "glossy golden egg fried rice with separate individual grains, scrambled egg ribbons, chopped spring onions, white ceramic bowl with chopsticks, light steam rising",
  },
  {
    slug: "beef-and-broccoli",
    dish: "Beef and Broccoli (西兰花炒牛肉)",
    desc: "tender sliced beef and bright green broccoli florets coated in glossy savory oyster sauce, white ceramic plate, steam rising",
  },
];

function getApiKey() {
  if (process.env.BAILIAN_API_KEY) return Promise.resolve(process.env.BAILIAN_API_KEY.trim());
  const p = path.join(os.homedir(), ".workbuddy", "secrets", "bailian-api-key.txt");
  return fs
    .readFile(p, "utf8")
    .then((s) => s.trim())
    .catch(() => null);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** 提交异步任务，返回 task_id */
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
    console.error("❌ 提交任务失败", res.status, JSON.stringify(json).slice(0, 400));
    process.exit(1);
  }
  const taskId = json?.output?.task_id;
  if (!taskId) {
    console.error("❌ 未返回 task_id，响应：", JSON.stringify(json).slice(0, 400));
    process.exit(1);
  }
  return taskId;
}

/** 轮询任务直到 SUCCEEDED/FAILED，返回图片 URL */
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
      if (!url) {
        console.error("❌ 任务成功但无图片 URL", JSON.stringify(json).slice(0, 300));
        process.exit(1);
      }
      return url;
    }
    if (status === "FAILED" || status === "CANCELED") {
      console.error("❌ 任务失败:", status, JSON.stringify(json).slice(0, 300));
      process.exit(1);
    }
    if (Date.now() - started > POLL_TIMEOUT_MS) {
      console.error("❌ 轮询超时", POLL_TIMEOUT_MS / 1000, "s");
      process.exit(1);
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

async function main() {
  const args = process.argv.slice(2);
  const isOg = args.includes("--og");
  const noOptimize = args.includes("--no-optimize");
  const slugIdx = args.indexOf("--slug");
  const promptIdx = args.indexOf("--prompt");
  const nameIdx = args.indexOf("--name");

  let jobs = [];
  if (promptIdx >= 0) {
    jobs = [{ name: nameIdx >= 0 ? args[nameIdx + 1] : "custom", prompt: args[promptIdx + 1] }];
  } else if (isOg) {
    jobs = [
      {
        name: "og-default",
        prompt:
          `overhead flat-lay spread of classic Chinese home dishes on rustic wooden table — tomato scrambled eggs, mapo tofu, egg fried rice, golden scallion pancakes, beef and broccoli, small bowls of rice and dipping sauces, chopsticks, ${STYLE}`,
      },
    ];
  } else if (slugIdx >= 0) {
    const slug = args[slugIdx + 1];
    const r = RECIPES.find((x) => x.slug === slug);
    if (!r) {
      console.error("未知 slug:", slug);
      console.error("可用:", RECIPES.map((x) => x.slug).join(", "));
      process.exit(1);
    }
    jobs = [{ name: r.slug, prompt: `${r.dish}: ${r.desc}, ${STYLE}` }];
  } else {
    jobs = RECIPES.map((r) => ({ name: r.slug, prompt: `${r.dish}: ${r.desc}, ${STYLE}` }));
  }

  const key = await getApiKey();
  if (!key) {
    console.error(
      "❌ 未找到 BAILIAN_API_KEY。请任选其一：\n" +
        "  1. export BAILIAN_API_KEY=sk-xxx\n" +
        "  2. 把 key 写入 ~/.workbuddy/secrets/bailian-api-key.txt（推荐）"
    );
    process.exit(1);
  }

  console.log(`使用模型 ${MODEL}（异步任务），生成 ${jobs.length} 张图…`);
  for (const job of jobs) {
    const pngPath = isOg
      ? path.join(OG_ARCHIVE, `${job.name}.png`)
      : path.join(ARCHIVE, `${job.name}.png`);
    process.stdout.write(`⏳ ${job.name}: 提交任务…`);
    const taskId = await submitTask(key, job.prompt);
    process.stdout.write(` task=${taskId.slice(-6)} 轮询中…`);
    const url = await pollTask(key, taskId);
    const size = await download(url, pngPath);
    console.log(` ✓ PNG ${(size / 1024).toFixed(0)}KB`);
  }

  if (noOptimize) {
    console.log("跳过 WebP 优化（--no-optimize）");
    return;
  }

  // 转 WebP + 更新引用
  const nodeBin = process.execPath;
  const optimize = path.join(__dirname, "optimize-recipe-images.mjs");
  const extra = isOg ? ["--og"] : ["--update-refs"];
  execFileSync(nodeBin, [optimize, ...extra], { cwd: ROOT, stdio: "inherit" });
  console.log("✅ 完成：已转 WebP 并更新数据引用");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
