import type { BlogPost } from "@/lib/types";

/**
 * Blog 数据层（双语）。
 * 百日 SEO 规划：每天 1 篇（配合每日 3 道菜），100 天 = 100 篇，
 * 与菜谱日历形成内容矩阵（blog ↔ 菜谱 互相内链）。
 * 当前为首批示例（覆盖 technique / recipes / ingredients 三类），
 * 后续由 haowei-blog-daily 流水线按日历自动扩充。
 */

const lightVsDarkSoy: BlogPost = {
  id: "light-vs-dark-soy-sauce",
  slug: "light-vs-dark-soy-sauce",
  titleEn: "Light Soy vs Dark Soy Sauce: What's the Difference?",
  titleZh: "生抽和老抽到底差在哪？一次讲清",
  excerptEn:
    "They look almost identical in the bottle, but light and dark soy do completely different jobs. Here's when to reach for each — and what to use if you only have one.",
  excerptZh:
    "两瓶酱油看着差不多，但生抽和老抽干的活完全不同。这篇讲清什么时候用哪种，以及只有一种时怎么替代。",
  categoryKey: "technique",
  categoryEn: "Technique",
  categoryZh: "技法",
  tags: ["soy sauce", "seasoning", "chinese pantry", "substitutions"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-08-16",
  coverImage: "/images/blog/light-vs-dark-soy-sauce.png",
  relatedRecipeSlugs: ["mapo-tofu", "kung-pao-chicken", "beef-and-broccoli"],
  bodyEn: [
    { type: "p", text: "If you've ever stood in an Asian grocery staring at two near-identical bottles of soy sauce, you're not alone. Both are brewed from soybeans and wheat, but they are not interchangeable." },
    { type: "h2", text: "Light soy sauce (生抽)" },
    { type: "p", text: "Light soy — 生抽 — is the salty, thin, all-purpose seasoning. It's added during cooking to bring out umami and salt without darkening the dish much." },
    { type: "ul", items: [
      "Use for: stir-fries, marinades, dipping sauces, almost any savory dish",
      "Flavor: salty, bright, lightly fermented",
      "Color: pale brown, thin",
    ] },
    { type: "h2", text: "Dark soy sauce (老抽)" },
    { type: "p", text: "Dark soy — 老抽 — is light soy that's been aged longer and often sweetened with molasses. It's thicker, darker, and used mainly for color and a hint of sweetness, not salt." },
    { type: "ul", items: [
      "Use for: braises, red-cooked dishes, giving fried rice its glossy brown",
      "Flavor: mellow, slightly sweet",
      "Color: near-black, viscous",
    ] },
    { type: "h2", text: "Can you substitute one for the other?" },
    { type: "p", text: "Not really, and that's the most common home-cooking mistake. Swapping dark for light makes food bitter and too dark; swapping light for dark leaves braises pale and flat." },
    { type: "note", text: "Only have light soy? Add a pinch of sugar for color in a braise. Only have dark? Use less, and add salt separately." },
    { type: "h2", text: "The easy rule" },
    { type: "p", text: "Season with light soy. Color with dark soy. Keep both in the pantry and most Chinese home recipes become straightforward." },
  ],
  bodyZh: [
    { type: "p", text: "如果你曾在亚超里对着两瓶几乎一样的酱油发呆，你不是一个人。两者都用黄豆小麦酿造，但绝不是一回事。" },
    { type: "h2", text: "生抽" },
    { type: "p", text: "生抽是咸鲜、稀薄、百搭的调味料。做饭时加入，提鲜提咸，但不会把菜染得太深。" },
    { type: "ul", items: [
      "用在：炒菜、腌料、蘸酱、几乎所有咸鲜菜肴",
      "味道：咸、鲜、略带发酵香",
      "颜色：浅褐、稀",
    ] },
    { type: "h2", text: "老抽" },
    { type: "p", text: "老抽是生抽再久酿，通常加焦糖（molasses）增色。它更稠、更深，主要用来上色和一点点回甜，不是用来咸。" },
    { type: "ul", items: [
      "用在：红烧、卤味、给炒饭那层油亮酱色",
      "味道：醇厚、微甜",
      "颜色：近黑、浓稠",
    ] },
    { type: "h2", text: "能互相替代吗？" },
    { type: "p", text: "基本不能，这也是家常菜最常见的翻车点。老抽当生抽会让菜发苦、过深；生抽当老抽则红烧菜苍白无味。" },
    { type: "note", text: "只有生抽？红烧里加一小撮糖补色。只有老抽？少放，并另外加盐。" },
    { type: "h2", text: "一句话记住" },
    { type: "p", text: "生抽调味，老抽上色。两瓶都备着，大部分中国家常菜就通了。" },
  ],
  faq: [
    {
      qEn: "Is dark soy sauce the same as soy sauce?",
      qZh: "老抽就是酱油吗？",
      aEn: "No. \"Soy sauce\" usually means light soy (生抽). Dark soy (老抽) is a separate, thicker, darker, slightly sweetened product used mainly for color.",
      aZh: "不是。「酱油」通常指生抽。老抽是另一种更稠、更深、略带回甜、主要用来上色的产品。",
    },
    {
      qEn: "Can I skip dark soy in a recipe?",
      qZh: "菜谱里的老抽可以省吗？",
      aEn: "Yes — the dish will be paler and slightly less glossy, but still tasty. Add a pinch of sugar to compensate for the lost sweetness.",
      aZh: "可以——菜会浅一点、没那么油亮，但照样好吃。加一小撮糖补回失去的甜味。",
    },
  ],
};

const tenSichuan: BlogPost = {
  id: "10-sichuan-home-recipes",
  slug: "10-sichuan-home-recipes",
  titleEn: "10 Sichuan Home Recipes That Go With Plain Rice",
  titleZh: "10 道最下饭的川菜家常，白米饭杀手",
  excerptEn:
    "Sichuan food isn't all tongue-numbing heat. These 10 family recipes — from mapo tofu to kung pao — are the ones Chinese home cooks actually make on a weeknight.",
  excerptZh:
    "川菜不只有麻辣。这 10 道家常川菜——从麻婆豆腐到宫保鸡丁——是中国家庭平日里真正会做的下饭菜。",
  categoryKey: "recipes",
  categoryEn: "Recipes",
  categoryZh: "菜谱合集",
  tags: ["sichuan", "home cooking", "rice bowls", "mapo tofu", "kung pao"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-08-16",
  coverImage: "/images/blog/10-sichuan-home-recipes.png",
  relatedRecipeSlugs: ["mapo-tofu", "kung-pao-chicken", "scallion-pancakes"],
  bodyEn: [
    { type: "p", text: "Ask any Chinese home cook for their top 10, and you'll get a list built around one thing: something that makes plain steamed rice disappear fast. Here are ten Sichuan-leaning classics that do exactly that." },
    { type: "h2", text: "1. Mapo tofu (麻婆豆腐)" },
    { type: "p", text: "Silken tofu in a tingling, chili-oil sauce. Twenty minutes, one pan, endless rice." },
    { type: "h2", text: "2. Kung pao chicken (宫保鸡丁)" },
    { type: "p", text: "Diced chicken, peanuts, dried chilies — sweet, sour, and gently numbing at once." },
    { type: "h2", text: "3. Twice-cooked pork (回锅肉)" },
    { type: "p", text: "Boiled then pan-fried pork with leeks and doubanjiang. The original Sichuan rice-killer." },
    { type: "h2", text: "4–10: build your own" },
    { type: "p", text: "Fish-fragrant eggplant, ants-on-a-log (silverfish), Sichuan-style green beans, tea-smoked duck, dan dan noodles, spicy boiled beef, and scallion pancakes to mop it all up." },
    { type: "note", text: "Every dish above links to a full bilingual recipe on HǎoWèi — ingredients tagged local vs Asian, with substitutions for whatever your supermarket is missing." },
    { type: "h2", text: "The through-line" },
    { type: "p", text: "Most share a base of doubanjiang (豆瓣酱), garlic, and ginger. Master that trio and the whole list opens up." },
  ],
  bodyZh: [
    { type: "p", text: "随便问一个中国家庭煮妇煮夫Top 10，列出来的菜都围绕一件事：能让人把一碗白米饭快速消灭。下面这十道偏川味的经典，干的正是这个。" },
    { type: "h2", text: "1. 麻婆豆腐" },
    { type: "p", text: "嫩豆腐浸在麻辣红油里。二十分钟，一锅，米饭无限续。" },
    { type: "h2", text: "2. 宫保鸡丁" },
    { type: "p", text: "鸡丁、花生、干辣椒——甜、酸、微微麻，一口全有。" },
    { type: "h2", text: "3. 回锅肉" },
    { type: "p", text: "先煮后炒的猪肉，配韭菜和豆瓣酱。川菜下饭界的老祖宗。" },
    { type: "h2", text: "4–10：自己凑" },
    { type: "p", text: "鱼香茄子、蚂蚁上树、川味四季豆、樟茶鸭、担担面、水煮牛肉，再来张葱油饼把汤汁擦干净。" },
    { type: "note", text: "上面每道菜都链到好味的完整双语菜谱——食材标注本地/亚超，缺啥都有替代方案。" },
    { type: "h2", text: "贯穿其中的一条线" },
    { type: "p", text: "大多共用豆瓣酱、蒜、姜的底味。这一组三样练熟，整张列表就通了。" },
  ],
};

const westernPantry: BlogPost = {
  id: "western-supermarket-chinese-pantry",
  slug: "western-supermarket-chinese-pantry",
  titleEn: "Building a Chinese Pantry From a Western Supermarket",
  titleZh: "只靠欧美超市，也能备齐中餐厨房",
  excerptEn:
    "You don't need an Asian grocery for most home cooking. Here's the short list of what to buy at a regular supermarket — and the three things worth a special trip.",
  excerptZh:
    "大部分家常菜根本不需要亚超。这篇列清楚普通超市就能买到的，以及哪三样值得专门跑一趟。",
  categoryKey: "ingredients",
  categoryEn: "Ingredients",
  categoryZh: "食材",
  tags: ["pantry", "shopping", "substitutions", "beginner"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-08-16",
  coverImage: "/images/blog/western-supermarket-chinese-pantry.png",
  relatedRecipeSlugs: ["mapo-tofu", "egg-fried-rice", "tomato-eggs"],
  bodyEn: [
    { type: "p", text: "The biggest myth about cooking Chinese food abroad is that you need a wall of special ingredients. For everyday 家常菜, a normal supermarket gets you 80% of the way." },
    { type: "h2", text: "Buy at any supermarket" },
    { type: "ul", items: [
      "Light soy sauce (the standard bottle in the international aisle)",
      "Cornstarch, rice (any long-grain), eggs, garlic, ginger",
      "Neutral oil (vegetable/canola), sugar, black pepper",
      "Firm tofu, scallions, cabbage, carrots",
    ] },
    { type: "h2", text: "Worth a trip to an Asian store" },
    { type: "ul", items: [
      "Doubanjiang (豆瓣酱) — the soul of Sichuan cooking, no real substitute",
      "Dark soy (老抽) — for that glossy braise color",
      "Shaoxing wine (料酒) — depth you can't fake with anything else",
    ] },
    { type: "note", text: "Stuck without the three? Our substitution finder shows the closest Western swap and exactly how the flavor changes." },
    { type: "h2", text: "Start small" },
    { type: "p", text: "Pick three recipes, buy what they share, and your pantry builds itself. Most HǎoWèi recipes tag every ingredient local vs Asian so you know before you shop." },
  ],
  bodyZh: [
    { type: "p", text: "在海外做中餐最大的误解，就是觉得需要一整面墙的特殊调料。日常家常菜，普通超市就能解决八成。" },
    { type: "h2", text: "任何超市都能买" },
    { type: "ul", items: [
      "生抽（国际食品区那瓶标准装）",
      "玉米淀粉、米（任何长粒米）、鸡蛋、蒜、姜",
      "中性油（菜油/芥花油）、糖、黑胡椒",
      "老豆腐、葱、白菜、胡萝卜",
    ] },
    { type: "h2", text: "值得专门跑一趟亚超" },
    { type: "ul", items: [
      "豆瓣酱——川菜灵魂，没有真替代",
      "老抽——给红烧那层油亮酱色",
      "料酒——别处仿不出的层次",
    ] },
    { type: "note", text: "这三样没有？我们的替换引擎会给出最接近的西方替代品，并说明味道具体怎么变。" },
    { type: "h2", text: "从小处开始" },
    { type: "p", text: "先挑三道菜，买它们共用的料，厨房自己就丰满了。好味每篇菜谱都标了食材本地/亚超，逛超市前就心里有数。" },
  ],
};

/** 全部 blog 文章（按发布日期倒序） */
export const blogPosts: BlogPost[] = [tenSichuan, westernPantry, lightVsDarkSoy];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categoryKey: string): BlogPost[] {
  return getAllPosts().filter((p) => p.categoryKey === categoryKey);
}

/** 分类显示名（按 locale） */
export function categoryLabel(post: BlogPost, locale: "en" | "zh"): string {
  return locale === "zh" ? post.categoryZh : post.categoryEn;
}
