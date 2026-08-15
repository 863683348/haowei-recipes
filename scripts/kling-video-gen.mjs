#!/usr/bin/env node
/**
 * 可灵AI（Kling / Kuaishou）菜谱视频生成脚本
 * 每道菜生成 1 条短视频（默认图生视频 image2video，用封面图保证画风一致）
 *
 * ⚠️ 重要：可灵「网页端 66 credits/天免费」≠ API 免费。
 *   - API 需购买资源包，但新用户在 https://klingai.com/dev 开通后有【试用资源包】可联调少量。
 *
 * 鉴权（脚本自动识别，二选一）：
 *   新系统（推荐，2026 起主推）：Bearer API Key
 *     - export KLING_API_KEY=xxx
 *     - 或写入 ~/.workbuddy/secrets/kling-api-key.txt
 *   旧系统：Access Key + Secret Key（JWT 签名）
 *     - export KLING_ACCESS_KEY=xxx && export KLING_SECRET_KEY=yyy
 *     - 或 ~/.workbuddy/secrets/kling-access-key.txt + kling-secret-key.txt
 *
 * 注册/开通步骤：
 *   1. 打开 https://klingai.com/dev （可灵AI 开发者平台）
 *   2. 手机号 / 快手扫码登录（与网页端同一账号）
 *   3. 进入「资源包」购买页，选择【试用资源包】或按需购买视频生成资源包
 *   4. 打开 https://klingai.com/dev/api-key → 点「+ 新建 API Key」→ 命名 → 复制（仅显示一次！务必保存）
 *   5. 把 Key 设为 KLING_API_KEY 环境变量（或写入 secrets/kling-api-key.txt）
 *   文档：https://klingai.com/document-api
 *
 * 用法：
 *   node scripts/kling-video-gen.mjs                   # 全部菜谱各 1 条视频
 *   node scripts/kling-video-gen.mjs --slug mapo-tofu  # 指定菜谱
 *   node scripts/kling-video-gen.mjs --dry-run         # 只打印参数，不调用 API
 *   node scripts/kling-video-gen.mjs --mode text       # 文生视频（而非图生视频）
 */
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const VIDEO_DIR = path.join(ROOT, "public", "videos");
const COVER_DIR = path.join(ROOT, "public", "images", "recipes");

const API_BASE = process.env.KLING_API_BASE || "https://api-beijing.klingai.com";
const DURATION = Number(process.env.KLING_DURATION || 10); // 秒（5 或 10）
const MODE = process.env.KLING_MODE || "std"; // std | pro
const ASPECT = process.env.KLING_ASPECT || "16:9";
const MODEL_NAME = process.env.KLING_MODEL || "kling-v1-6";
const POLL_INTERVAL_MS = 15000;
const TIMEOUT_MS = 600000; // 10 分钟

/** 每道菜的镜头描述（用于文生/图生视频 prompt） */
const RECIPES = [
  { slug: "tomato-and-egg", dish: "Tomato Scrambled Eggs (番茄炒蛋)", motion: "close-up of tomatoes and eggs simmering in a wok, glossy sauce bubbling, steam rising, warm home kitchen" },
  { slug: "mapo-tofu", dish: "Mapo Tofu (麻婆豆腐)", motion: "silken tofu in red spicy sauce gently stirred, chili oil sheen, scallions sprinkled, sizzling" },
  { slug: "kung-pao-chicken", dish: "Kung Pao Chicken (宫保鸡丁)", motion: "diced chicken with chilies and peanuts tossed in wok, glossy sauce, high heat, appetizing" },
  { slug: "scallion-pancakes", dish: "Scallion Pancakes (葱油饼)", motion: "golden scallion pancake frying in pan, crispy layers, flipped showing flakiness" },
  { slug: "egg-fried-rice", dish: "Egg Fried Rice (蛋炒饭)", motion: "rice and egg tossed in wok over high flame, separate glossy grains, wok hei smoke" },
  { slug: "beef-and-broccoli", dish: "Beef and Broccoli (西兰花炒牛肉)", motion: "tender beef and bright broccoli in oyster sauce, tossing in wok, steam rising" },
  { slug: "cucumber-scrambled-eggs", dish: "Cucumber Scrambled Eggs (黄瓜炒蛋)", motion: "cucumber chunks and soft eggs stir-fried quickly, light sauce glistening" },
  { slug: "garlic-chives-scrambled-eggs", dish: "Garlic Chives Scrambled Eggs (韭菜炒蛋)", motion: "green chives folded into fluffy golden egg, gentle stir-fry, home style" },
  { slug: "pineapple-fried-rice", dish: "Pineapple Fried Rice (菠萝炒饭)", motion: "colorful fried rice in pineapple shell, cashews and raisins, tropical presentation" },
  { slug: "yangzhou-fried-rice", dish: "Yangzhou Fried Rice (扬州炒饭)", motion: "elegant fried rice with ham shrimp peas carrots and egg ribbons, banquet style" },
];

async function readSecret(name, envVar) {
  if (process.env[envVar]) return process.env[envVar].trim();
  const p = path.join(os.homedir(), ".workbuddy", "secrets", name);
  return fs.readFile(p, "utf8").then((s) => s.trim()).catch(() => null);
}

/** 旧版 AK/SK → JWT（HS256） */
function genJwt(ak, sk) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(JSON.stringify({ iss: ak, exp: now + 1800, nbf: now - 5 })).toString("base64url");
  const data = `${header}.${payload}`;
  const sig = crypto.createHmac("sha256", sk).update(data).digest("base64url");
  return `${data}.${sig}`;
}

/** 自动识别鉴权方式：优先 Bearer API Key，回退 JWT */
async function resolveAuth() {
  const apiKey = await readSecret("kling-api-key.txt", "KLING_API_KEY");
  if (apiKey) return { header: `Bearer ${apiKey}`, kind: "apikey" };
  const accessKey = await readSecret("kling-access-key.txt", "KLING_ACCESS_KEY");
  const secretKey = await readSecret("kling-secret-key.txt", "KLING_SECRET_KEY");
  if (accessKey && secretKey) return { header: `Bearer ${genJwt(accessKey, secretKey)}`, kind: "jwt" };
  console.error(
    "❌ 未找到可灵密钥。请任选其一：\n" +
      "  1. export KLING_API_KEY=xxx   （推荐，开发者平台新建的 API Key）\n" +
      "  2. export KLING_ACCESS_KEY=xxx && export KLING_SECRET_KEY=yyy   （旧版）\n" +
      "  或写入 ~/.workbuddy/secrets/kling-api-key.txt"
  );
  process.exit(1);
}

async function submitVideo(auth, payload) {
  const url =
    auth.kind === "apikey"
      ? `${API_BASE}/v1/videos/image2video`
      : `${API_BASE}/videos/image2video`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: auth.header, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await res.json().catch(() => ({}));
  const taskId = json?.data?.task_id || json?.task_id;
  if (!taskId) {
    console.error("❌ 提交视频任务失败：", JSON.stringify(json).slice(0, 400));
    process.exit(1);
  }
  return taskId;
}

async function pollVideo(auth, taskId) {
  const url = `${API_BASE}/v1/videos/${taskId}`;
  const started = Date.now();
  for (;;) {
    const res = await fetch(url, { headers: { Authorization: auth.header } });
    const json = await res.json().catch(() => ({}));
    const data = json?.data || json;
    const status = data?.task_status;
    if (status === "succeed" || status === "succeeded") {
      const videos = data?.task_result?.videos || data?.videos;
      const vurl = videos?.[0]?.url || videos?.[0]?.resource_url;
      if (!vurl) {
        console.error("❌ 视频成功但无 URL：", JSON.stringify(json).slice(0, 400));
        process.exit(1);
      }
      return vurl;
    }
    if (status === "failed") {
      console.error("❌ 视频生成失败：", JSON.stringify(json).slice(0, 400));
      process.exit(1);
    }
    if (Date.now() - started > TIMEOUT_MS) {
      console.error("❌ 视频轮询超时");
      process.exit(1);
    }
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const textMode = args.includes("--mode") && args[args.indexOf("--mode") + 1] === "text";
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

  if (dryRun) {
    console.log(`[dry-run] 将生成 ${recipes.length} 条视频（${DURATION}s, ${MODE}, ${ASPECT}, model=${MODEL_NAME}）：`);
    for (const r of recipes) console.log(`  ${r.slug}: ${r.motion.slice(0, 70)}…`);
    return;
  }

  const auth = await resolveAuth();
  console.log(`可灵鉴权方式：${auth.kind}，开始生成 ${recipes.length} 条视频…`);

  for (const r of recipes) {
    const payload = {
      model_name: MODEL_NAME,
      prompt: r.motion,
      mode: MODE,
      duration: String(DURATION),
      aspect_ratio: ASPECT,
    };
    if (!textMode) {
      const coverPath = path.join(COVER_DIR, `${r.slug}.webp`);
      try {
        const b64 = await fs.readFile(coverPath, "base64");
        payload.image = `data:image/webp;base64,${b64}`;
      } catch {
        console.warn(`  ⚠️ 未找到封面图 ${coverPath}，改用文生视频`);
      }
    }
    process.stdout.write(`⏳ ${r.slug}: 提交任务…`);
    const taskId = await submitVideo(auth, payload);
    process.stdout.write(` task=${String(taskId).slice(-6)} 轮询中…`);
    const url = await pollVideo(auth, taskId);
    const outPath = path.join(VIDEO_DIR, `${r.slug}.mp4`);
    const size = await download(url, outPath);
    console.log(` ✓ ${(size / 1024 / 1024).toFixed(1)}MB → public/videos/${r.slug}.mp4`);
    await sleep(POLL_INTERVAL_MS);
  }
  console.log("✅ 视频生成完成");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
