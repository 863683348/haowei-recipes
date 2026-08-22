import fs from "fs";
import path from "path";

const RECIPES_DIR = "C:/Users/l'x/WorkBuddy/2026-08-14-23-01-31/haoweirecipes/src/data/recipes";
const IMG_DIR = "C:/Users/l'x/WorkBuddy/2026-08-14-23-01-31/haoweirecipes/public/images/recipes";

// 真实存在的 webp 图（含已知别名 tomato-eggs -> tomato-and-egg.webp）
const realWebp = new Set(fs.readdirSync(IMG_DIR).filter((f) => f.endsWith(".webp")));
function webpForSlug(slug) {
  if (slug === "tomato-eggs" && realWebp.has("tomato-and-egg.webp")) return "tomato-and-egg.webp";
  if (realWebp.has(`${slug}.webp`)) return `${slug}.webp`;
  return null;
}

function buildSvg(titleZh, pinyin) {
  const name = (titleZh || "家常菜").slice(0, 12);
  const pin = pinyin || "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FDF6EC"/>
      <stop offset="100%" stop-color="#F3E3C8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <g stroke="#C77B2E" stroke-width="6" fill="none" opacity="0.85">
    <path d="M250 360 A150 60 0 0 0 550 360 Z" fill="#FFFFFF" fill-opacity="0.6"/>
    <ellipse cx="400" cy="360" rx="150" ry="42" fill="#FFFFFF" fill-opacity="0.5"/>
    <path d="M286 332 q114 -70 228 0" stroke-width="5" opacity="0.7"/>
  </g>
  <text x="400" y="250" font-family="'Noto Serif SC','Songti SC',serif" font-size="52" font-weight="700" fill="#2A2118" text-anchor="middle">${name}</text>
  ${pin ? `<text x="400" y="300" font-family="'Noto Sans SC',sans-serif" font-size="24" fill="#8A6D3B" text-anchor="middle" letter-spacing="1">${pin}</text>` : ""}
  <text x="400" y="470" font-family="'Noto Sans SC',sans-serif" font-size="26" font-weight="700" fill="#C77B2E" text-anchor="middle" letter-spacing="2">HǎoWèi 好味</text>
  <text x="400" y="505" font-family="sans-serif" font-size="16" fill="#B08C5A" text-anchor="middle">Authentic Chinese Home Cooking</text>
</svg>`;
}

// 匹配 image 字段（兼容带引号 key "image": 和不带引号 image: 两种写法）
const IMAGE_RE = /(["']?)image\1\s*:\s*"[^"]*"/;

const files = fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");
let svgCount = 0, webpCount = 0, replaced = 0, inserted = 0;

files.forEach((f) => {
  const fp = path.join(RECIPES_DIR, f);
  let c = fs.readFileSync(fp, "utf8");

  const slugM = c.match(/slug:\s*"([^"]+)"/) || c.match(/"slug":\s*"([^"]+)"/);
  const titleM = c.match(/titleZh:\s*"([^"]*)"/) || c.match(/"titleZh":\s*"([^"]*)"/);
  const pinM = c.match(/pinyin:\s*"([^"]*)"/) || c.match(/"pinyin":\s*"([^"]*)"/);
  const slug = slugM ? slugM[1] : f.replace(".ts", "");
  const titleZh = titleM ? titleM[1] : slug;
  const pinyin = pinM ? pinM[1] : "";

  const webp = webpForSlug(slug);
  let imgField;
  if (webp) {
    imgField = `/images/recipes/${webp}`;
    webpCount++;
  } else {
    const svgName = `${slug}.svg`;
    fs.writeFileSync(path.join(IMG_DIR, svgName), buildSvg(titleZh, pinyin));
    imgField = `/images/recipes/${svgName}`;
    svgCount++;
  }

  if (IMAGE_RE.test(c)) {
    c = c.replace(IMAGE_RE, `"image": "${imgField}"`);
    replaced++;
  } else {
    c = c.replace(/(slug:\s*"[^"]*",)/, `$1\n  "image": "${imgField}",`);
    inserted++;
  }
  fs.writeFileSync(fp, c);
});

console.log(`✅ 处理 ${files.length} 个菜谱（替换 ${replaced}，新增 ${inserted}）`);
console.log(`   - 使用真实 webp: ${webpCount}`);
console.log(`   - 生成 SVG 占位: ${svgCount}`);
