/**
 * 全量修复菜谱图片：
 * 1. 为 35 道菜（29 无图 + 6 配错图）生成专属 SVG 占位图 → public/images/recipes/{slug}.svg
 * 2. 修正菜谱文件 image 字段指向实际存在的文件
 * 运行：node scripts/_fix-all-images.mjs
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const DATA_DIR = path.join(ROOT, "src/data/recipes");
const IMG_DIR = path.join(ROOT, "public/images/recipes");
const W = 1200;
const H = 630;

// 35 道菜的 emoji + 配色（29 无图 + 6 配错图）
const META = {
  // === 无图 29 道 ===
  "chive-egg-dumplings":        { emoji: "🥟", c1: "#8A5A2B", c2: "#C7915B", accent: "#F7E3C2" },
  "coke-chicken-wings":         { emoji: "🍗", c1: "#6B2F1A", c2: "#A8542E", accent: "#F3D5B0" },
  "cold-wood-ear":              { emoji: "🍄", c1: "#3A3A3A", c2: "#6E6E6E", accent: "#E8D9C8" },
  "dry-fried-green-beans":      { emoji: "🫛", c1: "#3F6B28", c2: "#7FA84F", accent: "#E7F0CD" },
  "egg-drop-soup":              { emoji: "🥣", c1: "#7A6A2E", c2: "#C0A854", accent: "#FBF0CC" },
  "home-style-pork":            { emoji: "🥩", c1: "#8A3A20", c2: "#C46A3A", accent: "#FBE0C2" },
  "hongshao-chicken":           { emoji: "🍗", c1: "#7A2418", c2: "#B04A28", accent: "#F6D3B0" },
  "hongshao-pork":              { emoji: "🥓", c1: "#6B1E12", c2: "#A63D22", accent: "#F5CDB2" },
  "huangmen-chicken":           { emoji: "🐔", c1: "#8A5A14", c2: "#C89A3A", accent: "#FBF0C8" },
  "jing-jiang-pork":            { emoji: "🥢", c1: "#5A3A22", c2: "#8A6A3E", accent: "#EFE0C8" },
  "kou-shui-chicken":           { emoji: "🐓", c1: "#B3402A", c2: "#D87A3C", accent: "#FFE0C2" },
  "moo-shu-pork":               { emoji: "🍄", c1: "#4A4A2A", c2: "#7E7E3E", accent: "#E8E8C8" },
  "pan-fried-chicken":          { emoji: "🍳", c1: "#B3641B", c2: "#DE9338", accent: "#FBE4B8" },
  "pepper-pork":                { emoji: "🫑", c1: "#2F6B28", c2: "#5E9E45", accent: "#E3F0C8" },
  "pork-cabbage-dumplings":     { emoji: "🥟", c1: "#6E5A3A", c2: "#A68A56", accent: "#F3E8D2" },
  "potato-beef-stew":           { emoji: "🥔", c1: "#6B4A1E", c2: "#A87A34", accent: "#F5E3BC" },
  "scallion-noodles":           { emoji: "🍜", c1: "#7A5C1E", c2: "#B89540", accent: "#FBF0C8" },
  "smashed-cucumber":           { emoji: "🥒", c1: "#2E6B3C", c2: "#5E9E5A", accent: "#DFF0D8" },
  "sour-soup-dumplings":        { emoji: "🥟", c1: "#8A3A2A", c2: "#C45E3A", accent: "#FBE0D0" },
  "soy-chicken-wings":          { emoji: "🍗", c1: "#4A2A14", c2: "#7E4A22", accent: "#EFD8B8" },
  "spicy-potato-shreds":        { emoji: "🥔", c1: "#B3302A", c2: "#D87A3C", accent: "#FFE0C8" },
  "stir-fried-greens":          { emoji: "🥬", c1: "#2E6B32", c2: "#5E9E58", accent: "#DFF0D8" },
  "sweet-sour-pork":            { emoji: "🍖", c1: "#C4552A", c2: "#E88A3C", accent: "#FFE3C0" },
  "tomato-egg-noodles":         { emoji: "🍅", c1: "#C94F35", c2: "#E8835C", accent: "#FFE0C8" },
  "twice-cooked-pork":          { emoji: "🥓", c1: "#8F2626", c2: "#C4553F", accent: "#F5D0C0" },
  "vinegar-cabbage":            { emoji: "🥬", c1: "#5E8A2E", c2: "#93B84F", accent: "#EFF0C8" },
  "winter-melon-soup":          { emoji: "🍲", c1: "#5E7A3E", c2: "#93AA5E", accent: "#E8F0D8" },
  "yangchun-noodles":           { emoji: "🍜", c1: "#8A6A2E", c2: "#C0A054", accent: "#FBF0D0" },
  "yu-xiang-pork":              { emoji: "🍆", c1: "#4A2A5E", c2: "#7A4A8A", accent: "#E8D8F0" },
  // === 配错图 6 道（改为专属） ===
  "cashew-chicken":             { emoji: "🥜", c1: "#8A5A1E", c2: "#C8913A", accent: "#FBE8C0" },
  "garlic-romaine":             { emoji: "🥬", c1: "#3F6B28", c2: "#7FA84F", accent: "#E7F0CD" },
  "green-pepper-beef":          { emoji: "🫑", c1: "#2F6B28", c2: "#5E9E45", accent: "#E3F0C8" },
  "onion-beef-stir-fry":        { emoji: "🧅", c1: "#8A5A2B", c2: "#C7915B", accent: "#F7E3C2" },
  "oyster-sauce-lettuce":       { emoji: "🥬", c1: "#2E6B3C", c2: "#5E9E5A", accent: "#DFF0D8" },
  "stir-fried-bok-choy":        { emoji: "🥬", c1: "#3A6B3E", c2: "#6E9E6E", accent: "#DFF0D8" },
};

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function svgFor({ titleEn, titleZh, pinyin, emoji, c1, c2, accent }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1080" cy="90" r="180" fill="${accent}" opacity="0.18"/>
  <circle cx="80" cy="560" r="140" fill="#FFFFFF" opacity="0.10"/>
  <text x="${W / 2}" y="300" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="80" font-weight="700" fill="#FFFFFF">${esc(titleEn)}</text>
  <text x="${W / 2}" y="385" text-anchor="middle" font-family="'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', sans-serif" font-size="50" fill="${esc(accent)}">${esc(titleZh)} · ${esc(pinyin)}</text>
  <text x="${W / 2}" y="505" text-anchor="middle" font-size="66">${emoji}</text>
  <text x="${W / 2}" y="588" text-anchor="middle" font-family="Georgia, serif" font-size="28" letter-spacing="6" fill="#FFFFFF" opacity="0.9">HǎoWèi 好味 · 家常菜</text>
</svg>`;
}

// 从菜谱文件提取字段（兼容 "key": 与 key: 两种键格式）
function parseRecipe(content) {
  const get = (key) => {
    const m = content.match(new RegExp(`(["']?)${key}\\1\\s*:\\s*"([^"]+)"`));
    return m ? m[2].trim() : "";
  };
  const slug = get("slug");
  let titleEn = get("titleEn");
  const titleZh = get("titleZh");
  let pinyin = get("pinyin");
  // titleEn 形如 "Spicy Potato Shreds (酸辣土豆丝)" → 去掉中文括号
  titleEn = titleEn.replace(/\s*\([^)]*[\u4e00-\u9fff][^)]*\)$/, "").trim();
  if (pinyin && /[\u4e00-\u9fff]/.test(pinyin)) pinyin = ""; // pinyin 不可是中文
  return { slug, titleEn, titleZh, pinyin };
}

async function main() {
  await fs.mkdir(IMG_DIR, { recursive: true });
  const files = (await fs.readdir(DATA_DIR)).filter((f) => f.endsWith(".ts") && f !== "index.ts");
  let gen = 0;
  let fixed = 0;

  for (const f of files) {
    const content = await fs.readFile(path.join(DATA_DIR, f), "utf8");
    const info = parseRecipe(content);
    const meta = META[info.slug];
    if (!meta) continue; // 只处理 35 道目标菜
    if (!info.titleEn) {
      console.log("SKIP(no title) " + f);
      continue;
    }
    const svgPath = path.join(IMG_DIR, `${info.slug}.svg`);
    await fs.writeFile(svgPath, svgFor({ ...info, ...meta }), "utf8");
    gen++;

    // 修正 image 字段 → {slug}.svg（保留原键格式：带引号/不带引号）
    const newRef = `/images/recipes/${info.slug}.svg`;
    const re = /(["']?)image\1\s*:\s*"([^"]+)"/;
    if (re.test(content)) {
      const next = content.replace(re, (mm, q) =>
        q ? `"image": "${newRef}"` : `image: "${newRef}"`
      );
      if (next !== content) {
        await fs.writeFile(path.join(DATA_DIR, f), next, "utf8");
        fixed++;
      }
    } else {
      console.log("WARN no image field: " + f);
    }
  }
  console.log(`\n生成 SVG: ${gen} 张，修正 image 字段: ${fixed} 个文件`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
