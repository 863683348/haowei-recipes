/**
 * 生成菜谱卡片图（1200×630）+ 站点 OG 图
 * - SVG 源文件 → public/images/recipes/{slug}.svg（浏览器渲染，无字体依赖）
 * - sharp 转 PNG → public/images/recipes/{slug}.png（og:image / <img> 用）
 * 运行：node scripts/generate-recipe-images.mjs
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public", "images", "recipes");

const W = 1200;
const H = 630;

const recipes = [
  {
    slug: "tomato-and-egg",
    en: "Tomato & Egg",
    zh: "番茄炒蛋",
    pinyin: "fān qié chǎo dàn",
    emoji: "🍅",
    c1: "#C94F35",
    c2: "#E8835C",
    accent: "#FFD9A8",
  },
  {
    slug: "mapo-tofu",
    en: "Mapo Tofu",
    zh: "麻婆豆腐",
    pinyin: "má pó dòu fu",
    emoji: "🌶",
    c1: "#8F2626",
    c2: "#C4553F",
    accent: "#F5C4B3",
  },
  {
    slug: "kung-pao-chicken",
    en: "Kung Pao Chicken",
    zh: "宫保鸡丁",
    pinyin: "gōng bǎo jī dīng",
    emoji: "🥜",
    c1: "#B3641B",
    c2: "#DE9338",
    accent: "#FBE0B4",
  },
  {
    slug: "scallion-pancakes",
    en: "Scallion Pancakes",
    zh: "葱油饼",
    pinyin: "cōng yóu bǐng",
    emoji: "🧅",
    c1: "#4A6B1F",
    c2: "#7FA23F",
    accent: "#E3F0C4",
  },
  {
    slug: "egg-fried-rice",
    en: "Egg Fried Rice",
    zh: "蛋炒饭",
    pinyin: "dàn chǎo fàn",
    emoji: "🍚",
    c1: "#9A6B1F",
    c2: "#CFA253",
    accent: "#FBEED2",
  },
  {
    slug: "beef-and-broccoli",
    en: "Beef & Broccoli",
    zh: "西兰花炒牛肉",
    pinyin: "xī lán huā chǎo niú ròu",
    emoji: "🥦",
    c1: "#1F6B52",
    c2: "#4E9B77",
    accent: "#D2EDE0",
  },
];

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function svgFor(r, kind) {
  const title = esc(kind === "og" ? `${r.en} · ${r.zh}` : r.en);
  const sub = esc(kind === "og" ? r.zh : `${r.zh} · ${r.pinyin}`);
  const size = kind === "og" ? 88 : 120;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${r.c1}"/>
      <stop offset="1" stop-color="${r.c2}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1080" cy="90" r="180" fill="${r.accent}" opacity="0.18"/>
  <circle cx="80" cy="560" r="140" fill="#FFFFFF" opacity="0.10"/>
  <text x="${W / 2}" y="300" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${size}" font-weight="700" fill="#FFFFFF">${title}</text>
  <text x="${W / 2}" y="390" text-anchor="middle" font-family="'Microsoft YaHei', 'PingFang SC', sans-serif" font-size="52" fill="${r.accent}">${sub}</text>
  <text x="${W / 2}" y="505" text-anchor="middle" font-size="64">${r.emoji}</text>
  <text x="${W / 2}" y="590" text-anchor="middle" font-family="Georgia, serif" font-size="30" letter-spacing="6" fill="#FFFFFF" opacity="0.9">HǎoWèi 好味 · 家常菜</text>
</svg>`;
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  for (const r of recipes) {
    const svg = svgFor(r, "card");
    const svgPath = path.join(OUT, `${r.slug}.svg`);
    const pngPath = path.join(OUT, `${r.slug}.png`);
    await fs.writeFile(svgPath, svg, "utf8");
    await sharp(Buffer.from(svg)).resize(W, H).png().toFile(pngPath);
    console.log("OK", r.slug, (await fs.stat(pngPath)).size, "bytes");
  }
  // 站点 OG 图（品牌通用）
  const ogDir = path.join(ROOT, "public", "images");
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8F2626"/>
      <stop offset="0.5" stop-color="#C94F35"/>
      <stop offset="1" stop-color="#DE9338"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1050" cy="110" r="200" fill="#FBE0B4" opacity="0.20"/>
  <circle cx="120" cy="540" r="160" fill="#FFFFFF" opacity="0.10"/>
  <text x="${W / 2}" y="280" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="110" font-weight="700" fill="#FFFFFF">HǎoWèi 好味</text>
  <text x="${W / 2}" y="390" text-anchor="middle" font-family="Georgia, serif" font-size="48" fill="#FFE3C0">Authentic Chinese Home Cooking</text>
  <text x="${W / 2}" y="470" text-anchor="middle" font-family="Georgia, serif" font-size="40" fill="#FFFFFF" opacity="0.92">Made Easy · 家常菜</text>
</svg>`;
  await fs.writeFile(path.join(ogDir, "og-default.svg"), ogSvg, "utf8");
  await sharp(Buffer.from(ogSvg)).resize(W, H).png().toFile(path.join(ogDir, "og-default.png"));
  console.log("OK og-default.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
