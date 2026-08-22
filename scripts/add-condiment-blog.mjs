// Add new blog post for GSC optimization
import fs from 'fs';
import path from 'path';

const BLOG_FILE = path.join(process.cwd(), 'src/data/blog/index.ts');

// Read existing content
let content = fs.readFileSync(BLOG_FILE, 'utf8');

// New blog post: Chinese Condiments Substitutions
const newBlogPost = `
const condimentSubstitutions: BlogPost = {
  id: "chinese-condiment-substitutions",
  slug: "chinese-condiment-substitutions",
  titleEn: "Chinese Condiment Substitutions: What to Use When You Can't Find Doubanjiang",
  titleZh: "中餐调料替换指南：找不到豆瓣酱怎么办？",
  excerptEn:
    "No doubanjiang? No problem. Here's what to use instead for mapo tofu, kung pao, and other Sichuan classics — plus the one ingredient you can't fake.",
  excerptZh:
    "没有豆瓣酱？没关系。这篇告诉你麻婆豆腐、宫保鸡丁等川菜的完美替代品——以及那一样真正无法替代的食材。",
  categoryKey: "ingredients",
  categoryEn: "Ingredients",
  categoryZh: "食材",
  tags: ["substitutions", "doubanjiang", "chu hou paste", "sichuan", "pantry", "beginner"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-08-21",
  coverImage: "/images/blog/chinese-condiment-substitutions.png",
  relatedRecipeSlugs: ["mapo-tofu", "kung-pao-chicken", "twice-cooked-pork", "pepper-pork"],
  bodyEn: [
    { type: "p", text: "The moment you open a Chinese recipe and see an ingredient you've never heard of, two things happen: you Google it, then you give up and order takeout. But most Chinese condiments have workable substitutes — if you know what to reach for." },
    { type: "h2", text: "The big three (and their backups)" },
    { type: "h3", text: "1. Doubanjiang (豆瓣酱) — Sichuan's soul" },
    { type: "p", text: "Fermented broad beans and chili paste. There's no perfect substitute, but if you're missing it:" },
    { type: "ul", items: [
      "Gochujang (Korean chili paste) + 1 tsp miso — closest in heat and depth",
      "Sriracha + 1 tsp soy sauce — quick fix for stir-fries",
      "Chili crisp + 1 tbsp soy sauce — for the oil and crunch",
    ] },
    { type: "note", text: "Pro tip: If you can find a Chinese grocer within 30 miles, make the trip. Doubanjiang transforms dishes; nothing else comes close." },
    { type: "h3", text: "2. Chu Hou Paste (柱侯酱) — Cantonese braising secret" },
    { type: "p", text: "Soybean-based, slightly sweet, used for braised meats. Substitute with:" },
    { type: "ul", items: [
      "Hoisin sauce + 1 tsp soy sauce — closest flavor profile",
      "Miso + 1 tbsp brown sugar + 1 tsp soy — umami depth",
      "BBQ sauce (Asian-style) — for quick shortcuts",
    ] },
    { type: "h3", text: "3. Shaoxing Wine (绍兴酒) — the cooking wine" },
    { type: "p", text: "Not for drinking, for cooking. Removes gaminess and adds depth. If you don't have it:" },
    { type: "ul", items: [
      "Dry sherry — best Western substitute, same grape-based warmth",
      "Rice wine + pinch of salt — closer to original",
      "White wine + 1 tsp soy — emergency fix",
      "Water + pinch of sugar — when you have nothing else",
    ] },
    { type: "h2", text: "The one thing you can't fake" },
    { type: "p", text: "Sichuan peppercorns (花椒). That unique numbing sensation (mala) comes only from this spice. If you can't find it, you'll miss the characteristic 'tingle' — but the dish will still be delicious." },
    { type: "h2", text: "Quick reference table" },
    { type: "p", text: "When a recipe calls for X, use Y instead:" },
    { type: "ul", items: [
      "Doubanjiang → Gochujang + miso",
      "Chu Hou paste → Hoisin + soy",
      "Shaoxing wine → Dry sherry",
      "Light soy → Regular soy (use less)",
      "Dark soy → Light soy + pinch of sugar",
    ] },
    { type: "note", text: "Every HǎoWèi recipe tags ingredients as 'local' (Western supermarket) or 'Asian' (specialty store), so you know before you shop which swaps you'll need." },
    { type: "h2", text: "Build your pantry gradually" },
    { type: "p", text: "Start with the basics: light soy, dark soy, Shaoxing wine. Add doubanjiang when you're ready for Sichuan heat. One bottle at a time, your Chinese kitchen takes shape." },
  ],
  bodyZh: [
    { type: "p", text: "当你打开一篇中餐菜谱，看到一个从没听过的调料，会发生两件事：你Google它，然后放弃去点外卖。但其实大多数中国调料都有可用的替代品——只要你清楚该拿什么来替。" },
    { type: "h2", text: "三大调料（和它们的备用方案）" },
    { type: "h3", text: "1. 豆瓣酱——川菜的灵魂" },
    { type: "p", text: "发酵蚕豆加辣椒的酱。没有完美的替代品，但如果缺了它：" },
    { type: "ul", items: [
      "韩式辣酱 + 1茶匙味噌——最接近的辣度和厚度",
      "Srirstacha + 1茶匙酱油——快炒的应急方案",
      "辣椒脆油 + 1汤匙酱油——要油和脆感",
    ] },
    { type: "note", text: "诀窍：如果30英里内有亚超，值得去一趟。豆瓣酱能transform菜肴——别的都替代不了。" },
    { type: "h3", text: "2. 柱侯酱——粤式红烧的秘密" },
    { type: "p", text: "黄豆基底，微甜，用于红烧肉。替代品：" },
    { type: "ul", items: [
      "海鲜酱 + 1茶匙酱油——最接近的风味",
      "味噌 + 1汤匙红糖 + 1茶匙酱油——鲜味深度",
      "BBQ酱（中式）——快速捷径",
    ] },
    { type: "h3", text: "3. 绍兴酒——烹饪用酒" },
    { type: "p", text: "不喝，用来做饭。去腥提鲜。如果没有：" },
    { type: "ul", items: [
      "干雪莉酒——最好的西方替代品，葡萄基底的温暖感",
      "米酒 + 一小撮盐——更接近原味",
      "白葡萄酒 + 1茶匙酱油——应急方案",
      "水 + 一小撮糖——什么也没有时",
    ] },
    { type: "h2", text: "一样无法替代的" },
    { type: "p", text: "花椒。那种独特的麻味（麻辣）只来自这种香料。找不到它，你会错过特有的'麻'感——但菜依然好吃。" },
    { type: "h2", text: "快速参考表" },
    { type: "p", text: "菜谱需要X时，用Y代替：" },
    { type: "ul", items: [
      "豆瓣酱 → 韩式辣酱 + 味噌",
      "柱侯酱 → 海鲜酱 + 酱油",
      "绍兴酒 → 干雪莉酒",
      "生抽 → 普通酱油（少用）",
      "老抽 → 生抽 + 一小撮糖",
    ] },
    { type: "note", text: "好味每篇菜谱都标注食材是'本地'（欧美超市）还是'亚超'，购物前就知道要替换什么。" },
    { type: "h2", text: "逐渐丰满你的厨房" },
    { type: "p", text: "从 basics 开始：生抽、老抽、绍兴酒。准备好面对川菜辣度时再加豆瓣酱。一瓶一瓶来，你的中式厨房慢慢成形。" },
  ],
  faq: [
    {
      qEn: "Can I skip doubanjiang entirely?",
      qZh: "豆瓣酱可以完全省掉吗？",
      aEn: "Yes, but the dish loses its soul. The fermented bean umami is irreplaceable. Use gochujang + miso as a backup, but know you're getting 80% of the flavor, not 100%.",
      aZh: "可以，但菜会失去灵魂。发酵蚕豆的鲜味无法完全替代。用韩式辣酱+味噌应急，但要明白你得到的是80%的风味，不是100%。",
    },
    {
      qEn: "What's the closest Western substitute for Shaoxing wine?",
      qZh: "绍兴酒最接近的西方替代品是什么？",
      aEn: "Dry sherry. It's grape-based like Shaoxing, has similar warmth, and is available at any liquor store. Avoid cooking wine from the vinegar aisle — it's too salty and acidic.",
      aZh: "干雪莉酒。和绍兴酒一样是葡萄基底，有相似的温暖感，任何酒类商店都能买到。避免醋架上的烹饪酒——太咸太酸。",
    },
    {
      qEn: "Is chu hou paste the same as hoisin sauce?",
      qZh: "柱侯酱和海鲜酱是一回事吗？",
      aEn: "No. Hoisin is sweeter and thinner; chu hou paste is saltier, thicker, and more complex. But for home cooking, hoisin + a splash of soy gets you close enough.",
      aZh: "不是一回事。海鲜酱更甜更稀；柱侯酱更咸更稠更复杂。但家常烹饪，海鲜酱+一点酱油已经足够接近。",
    },
  ],
};

// Insert before the closing export
content = content.replace(
  /export const blogPosts: BlogPost\[\] = \[([^\]]+)\];/,
  'export const blogPosts: BlogPost[] = [$1, condimentSubstitutions];'
);

// Update the exports section
content = content.replace(
  /export const blogPosts: BlogPost\[\] = \[doubanjiang101, marinatingMeat, tenSichuan, westernPantry, lightVsDarkSoy\];/,
  'export const blogPosts: BlogPost[] = [condimentSubstitutions, doubanjiang101, marinatingMeat, tenSichuan, westernPantry, lightVsDarkSoy];'
);

// Add the new blog post before the exports
const insertPoint = content.indexOf('/** 全部 blog 文章');
if (insertPoint > 0) {
  content = content.slice(0, insertPoint) + newBlogPost + '\\n\\n' + content.slice(insertPoint);
}

// Write back
fs.writeFileSync(BLOG_FILE, content);
console.log('✅ Added new blog post: Chinese Condiment Substitutions');
