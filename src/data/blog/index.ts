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

const marinatingMeat: BlogPost = {
  id: "marinating-meat-chinese-way",
  slug: "marinating-meat-chinese-way",
  titleEn: "Marinating Meat the Chinese Way: Order, Time, and Why It Matters",
  titleZh: "腌肉入味：顺序与时长，这才是中式腌肉的底层逻辑",
  excerptEn:
    "Chinese home cooks don't just dump soy sauce and call it a day. The order you add ingredients, the time you give them, and the chemistry behind each choice is what separates bland meat from restaurant-quality stir-fry.",
  excerptZh:
    "中式腌肉不是酱油一倒就完事。先放什么、后放什么、腌多久，每一步背后都有化学逻辑——这些细节决定了炒出来是柴还是嫩。",
  categoryKey: "technique",
  categoryEn: "Technique",
  categoryZh: "技法",
  tags: ["marinade", "velveting", "stir-fry", "meat prep", "chinese cooking technique"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-08-17",
  coverImage: "/images/blog/marinating-meat-chinese-way.png",
  relatedRecipeSlugs: ["kung-pao-chicken", "beef-and-broccoli", "sichuan-green-beans"],
  bodyEn: [
    { type: "p", text: "If you've ever marinated meat at home and it came out dry or bland, the problem is rarely the recipe. It's usually the order, the timing, or the missing ingredient that most home cooks overlook." },
    { type: "h2", text: "The four-step order (and why it matters)" },
    { type: "p", text: "Chinese marinades follow a strict sequence. Get it wrong and the flavors sit on the surface instead of penetrating the meat." },
    { type: "ol", items: [
      "Salt first — it draws out moisture and begins protein breakdown",
      "Soy sauce / seasoning second — flavor penetrates as the meat relaxes",
      "Oil last — seals in moisture and prevents sticking during stir-fry",
      "Starch optional — a light cornstarch coating gives restaurant-quality silkiness",
    ] },
    { type: "note", text: "The key insight: salt and soy sauce are water-based. Oil is fat-based. Water and fat don't mix, so oil always goes last to create a protective barrier." },
    { type: "h2", text: "How long is enough?" },
    { type: "p", text: "Thinly sliced meat (stir-fry cuts): 15–30 minutes. Diced or cubed: 30–60 minutes. Whole pieces (chicken thighs, pork chops): 1–4 hours, ideally overnight. Beef benefits from longer marinating; pork and chicken need less time." },
    { type: "h2", text: "The velveting shortcut" },
    { type: "p", text: "Restaurant-style silkiness comes from a technique called velveting — a light coat of cornstarch mixed with egg white or water, applied after the wet marinade has been absorbed. The starch gelatinizes during cooking, creating a protective layer that locks in juices." },
    { type: "ul", items: [
      "Ratio: 1 tsp cornstarch per 200g meat",
      "Mix with a splash of water or egg white until slurry forms",
      "Add to meat after the wet marinade has been absorbed",
      "Let sit 10 minutes before cooking",
    ] },
    { type: "note", text: "This is the same technique behind the silky texture in Kung Pao chicken and beef dishes from Chinese takeout." },
    { type: "h2", text: "Common mistakes" },
    { type: "ul", items: [
      "Adding oil before soy sauce — the fat blocks flavor penetration",
      "Marinating too long — acid (vinegar, wine) breaks down proteins past the point of no return, making meat mushy",
      "Using the same marinade for every meat — beef needs stronger seasoning; chicken is delicate",
      "Skipping the rest time — the starch coating needs 10 minutes to hydrate and adhere properly",
    ] },
    { type: "p", text: "Master this sequence and you'll never have dry, bland stir-fried meat again. Every recipe on HǎoWèi that calls for marinated meat follows these principles — check the ingredient notes for exact ratios." },
  ],
  bodyZh: [
    { type: "p", text: "如果你在家腌肉，成品却干柴或没味道，问题通常不在配方，而在下料的顺序、时间，或者遗漏了大多数家常厨师忽视的关键一步。" },
    { type: "h2", text: "四步下料顺序（以及为什么顺序重要）" },
    { type: "p", text: "中式腌肉有严格的先后顺序。顺序错了，味道只会浮在表面，渗不进肉里。" },
    { type: "ol", items: [
      "盐先下——析出水分，启动蛋白质分解",
      "酱油/调味料第二——肉松弛后味道才能渗入",
      "油最后封——锁住水分，炒的时候不粘锅",
      "淀粉可选——薄薄一层玉米淀粉，是餐厅级嫩滑的关键",
    ] },
    { type: "note", text: "核心原理：盐和酱油都是水基，油是脂基。水和油不融合，所以油必须最后放，形成保护层。" },
    { type: "h2", text: "腌多久合适？" },
    { type: "p", text: "薄片（炒肉用）：15–30 分钟。丁块：30–60 分钟。整块（鸡腿、猪排）：1–4 小时，隔夜更佳。牛肉耐腌，猪肉和鸡肉时间要短。" },
    { type: "h2", text: "上浆的捷径" },
    { type: "p", text: "餐厅级的嫩滑来自「上浆」——薄薄一层玉米淀粉加水或蛋清，在湿腌料吸收后涂抹。烹饪时淀粉糊化，形成保护膜锁住汁水。" },
    { type: "ul", items: [
      "比例：每 200g 肉配 1 茶匙玉米淀粉",
      "加水或蛋清调成糊状",
      "湿腌料吸收后再加",
      "静置 10 分钟让淀粉充分水合",
    ] },
    { type: "note", text: "这就是宫保鸡丁、中式炒牛肉为什么比家常版更嫩的原因。" },
    { type: "h2", text: "常见误区" },
    { type: "ul", items: [
      "先放油再放酱油——脂肪挡住味道渗入",
      "腌太久——酸（醋、料酒）会过度分解蛋白质，肉质变粉",
      "所有肉用同一配方——牛肉耐腌，鸡肉娇嫩",
      "忽略静置时间——淀粉需要 10 分钟水合才能附着",
    ] },
    { type: "p", text: "掌握了这个顺序，你再做炒肉就不会干柴。好味每道需要腌肉的菜谱，都在食材注释里标了精确比例——按那个做就对了。" },
  ],
  faq: [
    {
      qEn: "Can I marinate meat overnight?",
      qZh: "隔夜腌肉可以吗？",
      aEn: "Yes for beef and pork cuts; no for delicate poultry. Acidic marinades (soy + wine + vinegar) break down proteins over many hours, turning meat mushy. For chicken, 1–2 hours is plenty.",
      aZh: "牛肉和猪肉大块可以，但鸡肉别隔夜。酸性腌料（酱油+料酒+醋）长时间作用会把蛋白质过度分解，肉变粉。鸡肉 1–2 小时就够了。",
    },
    {
      qEn: "Why do Chinese recipes call for cornstarch in marinades?",
      qZh: "中式菜谱为什么常说要加淀粉？",
      aEn: "Cornstarch creates a protective gel layer during stir-frying. It seals in moisture and gives meat a silky, restaurant-quality texture that home cooking rarely achieves without it.",
      aZh: "淀粉在爆炒时形成凝胶保护膜，锁住水分，带来顺滑口感。这是家常菜做不出餐厅嫩滑感的关键原因。",
    },
  ],
};

const doubanjiang101: BlogPost = {
  id: "doubanjiang-101",
  slug: "doubanjiang-101",
  titleEn: "Doubanjiang 101: The Soul of Sichuan",
  titleZh: "豆瓣酱用法与挑选：一篇讲透川菜灵魂",
  excerptEn:
    "Doubanjiang is the fermented chili bean paste that does the heavy lifting in Sichuan cooking. Here's what it is, the two kinds you'll meet, how to pick a good jar, and how to actually cook with it.",
  excerptZh:
    "豆瓣酱（发酵辣椒豆瓣酱）是川菜里挑大梁的那一味。这篇讲清它到底是什么、你会遇到哪两种、怎么挑一瓶好的，以及下锅到底怎么用。",
  categoryKey: "technique",
  categoryEn: "Technique",
  categoryZh: "技法",
  tags: ["doubanjiang", "sichuan", "fermented bean paste", "chinese pantry", "seasoning"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-08-19",
  coverImage: "/images/blog/doubanjiang-101.webp",
  relatedRecipeSlugs: ["mapo-tofu", "kung-pao-chicken", "scallion-pancakes"],
  bodyEn: [
    { type: "p", text: "If you cook one Sichuan dish and it tastes flat, the missing piece is almost always doubanjiang. This fermented chili bean paste is the backbone of the region's flavor, the thing that gives mapo tofu its deep red character and kung pao its savory edge. Get to know this one ingredient and a whole shelf of Chinese cooking opens up." },
    { type: "h2", text: "What doubanjiang actually is" },
    { type: "p", text: "Doubanjiang (豆瓣酱) starts with fava beans, chili, salt, and time. The beans and chilies are left to ferment, often for months, until the sharp raw edges soften into something round, funky, and a little sweet. The result is salty, deeply savory, and gently spicy, with an aroma you won't get from any powder or sauce." },
    { type: "p", text: "It's not a finishing sauce you drizzle on at the end. It's a cooking base, fried in oil at the start so its flavor blooms into the whole dish. That's why so many Sichuan recipes open with the same move: heat oil, add doubanjiang, stir until the oil turns red." },
    { type: "h2", text: "The two kinds you'll meet" },
    { type: "ul", items: [
      "Sichuan chili bean paste (郫县豆瓣酱, pixian doubanjiang): the real deal. Aged, chunky, brick-red, salty and funky. This is the one for mapo tofu, twice-cooked pork, and fish-fragrant anything.",
      "Sweet bean paste / tianmianjiang (甜面酱): a different product entirely, made from flour, not chili. Thick, dark, sweet-savory. Used in Peking duck sauces and some stir-fries. Don't confuse the two.",
    ] },
    { type: "note", text: "When a recipe just says doubanjiang, it means the chili bean paste, not the sweet one. If you grab the wrong jar, the dish comes out sweet instead of savory and red." },
    { type: "h2", text: "How to pick a good jar" },
    { type: "p", text: "Most supermarkets stock a few brands, and they are not equal. A few things I look for:" },
    { type: "ul", items: [
      "Origin: a jar from Pixian (郫县) is the safe bet. The region has protected status for a reason.",
      "Texture: you want visible bean chunks, not a smooth puree. Chunks mean it was fermented, not just blended.",
      "Color: a mature paste is a deep, uneven reddish-brown, not bright orange.",
      "Salt: taste before you season. A good doubanjiang is salty enough that you often skip extra salt later.",
    ] },
    { type: "p", text: "Avoid the super-cheap bright-red squeeze bottles if you can. They tend to be sugar and coloring with little fermentation behind them. Spend a little more on a glass jar from an Asian store and the difference is obvious the first time you fry it." },
    { type: "h2", text: "How to cook with it (a little goes far)" },
    { type: "p", text: "The basic technique never changes. Warm your oil over medium heat, add a spoonful of doubanjiang, and stir it around for thirty seconds to a minute. You're looking for the oil to pick up a red hue and the kitchen to smell toasty. Then add garlic, ginger, and the rest of your ingredients." },
    { type: "ol", items: [
      "Start with oil, not a dry pan, so the paste fries instead of burns.",
      "Use about one tablespoon per two servings as a baseline, then adjust.",
      "Fry it before adding liquid, so the raw ferment cooks off.",
      "Taste at the end; you may need less salt than the recipe implies.",
    ] },
    { type: "note", text: "Burnt doubanjiang turns bitter fast. If the oil smokes or the paste darkens too quickly, pull the pan off the heat and start that step over with fresh oil." },
    { type: "h2", text: "Storing it" },
    { type: "p", text: "Once open, keep the jar in the fridge with the lid on tight. A thin layer of oil on top helps. It won't spoil quickly, but the aroma fades after a few months, so buy a size you'll actually finish. If you only cook Sichuan now and then, a small jar beats a giant one you forget in the back." },
    { type: "p", text: "That's really the whole intro. Nail this one paste and mapo tofu, kung pao, and twice-cooked pork stop being mysterious. Every HǎoWèi recipe that calls for doubanjiang lists the exact amount, so you can follow along without guessing." },
  ],
  bodyZh: [
    { type: "p", text: "如果你做过一道川菜，却总觉得寡淡，缺的那一味八成是豆瓣酱。这种发酵辣椒豆瓣酱是川菜风味的脊梁，麻婆豆腐那股红亮厚味、宫保鸡丁那点咸鲜，全靠它。把这一味弄懂，中餐货架上的一大片就通了。" },
    { type: "h2", text: "豆瓣酱到底是什么" },
    { type: "p", text: "豆瓣酱（doubanjiang）以蚕豆、辣椒、盐和时间为原料。蚕豆和辣椒一起发酵，往往要好几个月，生辣的棱角慢慢磨平，变成圆润、带点臭香、又微甜的东西。成品咸、极鲜、微辣，有一种任何粉状或酱汁都调不出的香气。" },
    { type: "p", text: "它不是最后淋上去的收尾酱，而是下锅的底味——先用油把它炒香，味道才能铺满整道菜。所以很多川菜的开头都是同一招：热油、下豆瓣酱、炒到油变红。" },
    { type: "h2", text: "你会遇到的两种" },
    { type: "ul", items: [
      "郫县豆瓣酱（pixian doubanjiang）：正宗的那种。陈酿、带粒、砖红、咸而臭香。麻婆豆腐、回锅肉、鱼香系列都靠它。",
      "甜面酱（tianmianjiang）：完全是另一种东西，用面粉不做辣。稠、深、甜咸。用在烤鸭酱和一些炒菜里。两者别搞混。",
    ] },
    { type: "note", text: "菜谱里只写「豆瓣酱」三字，指的是辣椒豆瓣酱，不是甜面酱。拿错罐子，菜会发甜而不是咸红。" },
    { type: "h2", text: "怎么挑一瓶好的" },
    { type: "p", text: "普通超市能买到几个牌子，但差别不小。我挑的时候看这几样：" },
    { type: "ul", items: [
      "产地：郫县出的基本不会错。这地方有保护标志不是没原因。",
      "质地：要看到豆瓣颗粒，不是顺滑泥状。有颗粒说明真发酵过，不是只打成浆。",
      "颜色：陈酿的酱是深而不匀的红棕，不是亮橙。",
      "咸度：下锅前先尝。好豆瓣酱够咸，后面常能少放盐。",
    ] },
    { type: "p", text: "能避就避开那种超便宜的亮红挤压瓶。它们多半是糖加色素，背后没多少发酵。去亚超花多一点买瓶玻璃罐装的，第一次下锅你就知道差别。" },
    { type: "h2", text: "下锅怎么用（少即是多）" },
    { type: "ol", items: [
      "先下油再下酱，用油炒而不是干焙，免得糊。",
      "两人份打底约一汤匙，之后再调。",
      "加液体前先把它炒香，生发酵味才散得掉。",
      "最后尝味，盐可能比菜谱写的少放。",
    ] },
    { type: "note", text: "豆瓣酱炒糊会迅速发苦。油冒烟或酱一下子变太深，就把锅离火，重新倒油再来这一步。" },
    { type: "h2", text: "怎么存" },
    { type: "p", text: "开罐后盖紧放冰箱。表面留一层油更好。它不会很快坏，但香气几个月后就淡了，所以买个吃得完的规格。如果你只是偶尔做川菜，小罐比忘在角落的大罐强。" },
    { type: "p", text: "入门其实就这些。把这一味豆瓣酱练熟，麻婆豆腐、宫保鸡丁、回锅肉就不再神秘。好味每篇用到豆瓣酱的菜谱都标了 exact 用量，跟着做不用猜。" },
  ],
  faq: [
    {
      qEn: "Is doubanjiang very spicy?",
      qZh: "豆瓣酱很辣吗？",
      aEn: "Mildly. It brings warmth and depth more than heat. If you want it hotter, add fresh chili or chili oil alongside it; the paste alone is usually gentle enough for most palates.",
      aZh: "不算。它给的是温感和厚味，多于辣。想更辣就另加鲜辣椒或辣椒油；单靠这酱，大多数人口感都扛得住。",
    },
    {
      qEn: "Can I substitute gochujang or miso?",
      qZh: "能用味噌或韩式辣酱代替吗？",
      aEn: "Not really. Gochujang is sweet and sticky, miso is mild and barley-based. Both miss the fermented bean-and-chili funk that defines the dish. In a pinch, a mix of soy sauce plus a little chili paste gets you closer, but it's still not the same.",
      aZh: "不太行。韩式辣酱甜而黏，味噌淡、走麦味，都缺了那股蚕豆辣椒发酵的臭香，而那正是这道菜的灵魂。实在没辙，酱油加一点辣椒酱能凑近点，但终究不是一回事。",
    },
  ],
};

/** 全部 blog 文章（按发布日期倒序） */
const condimentSubstitutions: BlogPost = {
  id: "chinese-condiment-substitutions",
  slug: "chinese-condiment-substitutions",
  titleEn: "Chinese Condiment Substitutions: What to Use When You Can't Find Doubanjiang",
  titleZh: "中餐调料替换指南：找不到豆瓣酱怎么办？",
  excerptEn: "No doubanjiang? No problem. Here's what to use instead for mapo tofu, kung pao, and other Sichuan classics — plus the one ingredient you can't fake.",
  excerptZh: "没有豆瓣酱？没关系。这篇告诉你麻婆豆腐、宫保鸡丁等川菜的完美替代品——以及那一样真正无法替代的食材。",
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
    { type: "h2", text: "1. Doubanjiang (豆瓣酱) — Sichuan's soul" },
    { type: "p", text: "Fermented broad beans and chili paste. There's no perfect substitute, but if you're missing it:" },
    { type: "ul", items: ["Gochujang (Korean chili paste) + 1 tsp miso — closest in heat and depth", "Sriracha + 1 tsp soy sauce — quick fix for stir-fries", "Chili crisp + 1 tbsp soy sauce — for the oil and crunch"] },
    { type: "note", text: "Pro tip: If you can find a Chinese grocer within 30 miles, make the trip. Doubanjiang transforms dishes; nothing else comes close." },
    { type: "h2", text: "Quick reference table" },
    { type: "ul", items: ["Doubanjiang → Gochujang + miso", "Chu Hou paste → Hoisin + soy", "Shaoxing wine → Dry sherry", "Light soy → Regular soy (use less)", "Dark soy → Light soy + pinch of sugar"] },
    { type: "note", text: "Every HǎoWèi recipe tags ingredients as local vs Asian, so you know before you shop which swaps you'll need." },
  ],
  bodyZh: [
    { type: "p", text: "当你打开一篇中餐菜谱，看到一个从没听过的调料，会发生两件事：你Google它，然后放弃去点外卖。但其实大多数中国调料都有可用的替代品——只要你清楚该拿什么来替。" },
    { type: "h2", text: "三大调料（和它们的备用方案）" },
    { type: "h2", text: "1. 豆瓣酱——川菜的灵魂" },
    { type: "p", text: "发酵蚕豆加辣椒的酱。没有完美的替代品，但如果缺了它：" },
    { type: "ul", items: ["韩式辣酱 + 1茶匙味噌——最接近的辣度和厚度", "Sriracha + 1茶匙酱油——快炒的应急方案", "辣椒脆油 + 1汤匙酱油——要油和脆感"] },
    { type: "note", text: "诀窍：如果30英里内有亚超，值得去一趟。豆瓣酱能transform菜肴——别的都替代不了。" },
    { type: "h2", text: "快速参考表" },
    { type: "ul", items: ["豆瓣酱 → 韩式辣酱 + 味噌", "柱侯酱 → 海鲜酱 + 酱油", "绍兴酒 → 干雪莉酒", "生抽 → 普通酱油（少用）", "老抽 → 生抽 + 一小撮糖"] },
    { type: "note", text: "好味每篇菜谱都标注食材是本地还是亚超，购物前就知道要替换什么。" },
  ],
  faq: [
    { qEn: "Can I skip doubanjiang entirely?", qZh: "豆瓣酱可以完全省掉吗？", aEn: "Yes, but the dish loses its soul. Use gochujang + miso as a backup, but know you're getting 80% of the flavor, not 100%.", aZh: "可以，但菜会失去灵魂。用韩式辣酱+味噌应急，但要明白你得到的是80%的风味，不是100%。" },
    { qEn: "What's the closest Western substitute for Shaoxing wine?", qZh: "绍兴酒最接近的西方替代品是什么？", aEn: "Dry sherry. It's grape-based like Shaoxing, has similar warmth, and is available at any liquor store.", aZh: "干雪莉酒。和绍兴酒一样是葡萄基底，有相似的温暖感，任何酒类商店都能买到。" },
  ],
};

const makingCaramelSugarColor: BlogPost = {
  "id": "making-caramel-sugar-color",
  "slug": "making-caramel-sugar-color",
  "titleEn": "Making Caramel (Sugar Color) for Red Dishes",
  "titleZh": "炒糖色不苦不焦：红烧上色秘诀",
  "excerptEn": "Sugar color (糖色) is the secret to glossy, amber-red braises. Get the timing right and your dishes shine; get it wrong and they turn bitter. Here‘s how to nail it every time.",
  "excerptZh": "糖色是红烧菜色泽红亮的秘诀。掌握时机，菜肴油亮诱人；掌握不好，味道发苦。这里教你每次都成功的炒糖色方法。",
  "categoryKey": "technique",
  "categoryEn": "Technique",
  "categoryZh": "技法",
  "tags": [
    "sugar color",
    "tang se",
    "red braising",
    "caramel"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-28",
  "coverImage": "/images/blog/making-caramel-sugar-color.png",
  "relatedRecipeSlugs": [
    "hong-shao-pork-belly",
    "red-braised-carp",
    "braised-beef-brisket"
  ],
  "bodyEn": [
    {
      "type": "p",
      "text": "Sugar color — tang se (糖色) — is what gives Chinese red-braised dishes their signature glossy, amber-red hue. Unlike Western caramel, which is just melted sugar, Chinese sugar color is a cooking technique that transforms rock sugar or white sugar into a rich coloring agent."
    },
    {
      "type": "h2",
      "text": "The Three Stages of Sugar Color"
    },
    {
      "type": "p",
      "text": "Watch sugar melt and change color in three stages: first it becomes a clear, bubbling syrup; then it turns golden amber; finally it deepens to a reddish-brown. The window between amber and bitter is narrow — maybe 10-15 seconds."
    },
    {
      "type": "ul",
      "items": [
        "Stage 1: Clear bubbles, like boiling water",
        "Stage 2: Golden amber, the sweet spot",
        "Stage 3: Dark amber to reddish-brown, add meat immediately",
        "Too dark: bitter, ruined batch"
      ]
    },
    {
      "type": "h2",
      "text": "Oil Method vs. Water Method"
    },
    {
      "type": "p",
      "text": "There are two approaches. The oil method (chao tang) uses a small amount of oil and gives faster, more control — but splatters hot oil if you‘re not careful. The water method (shui chao) uses water first, then oil, and is more forgiving for beginners but takes longer."
    },
    {
      "type": "h2",
      "text": "The Golden Rule"
    },
    {
      "type": "p",
      "text": "When the sugar reaches deep amber with a slight reddish tint, add your par-cooked meat immediately and stir to coat. The residual heat will finish the caramelization without burning. If it looks too dark already, you‘ve missed the window — start over with fresh sugar."
    },
    {
      "type": "note",
      "text": "Pro tip: add a splash of hot water if you need to deglaze the pan after caramelizing. This becomes the base for your braising liquid."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "糖色是中式红烧菜的灵魂，赋予菜肴标志性的红亮光泽。与西方焦糖不同，中式糖色是一种烹饪技法，将冰糖或白糖转化为上色剂。"
    },
    {
      "type": "h2",
      "text": "糖色的三个阶段"
    },
    {
      "type": "p",
      "text": "观察糖融化变色：先是清澈冒泡的糖浆；然后变成金黄琥珀色；最后加深到红棕色。琥珀色到发苦的窗口很窄——大概 10-15 秒。"
    },
    {
      "type": "ul",
      "items": [
        "阶段 1：清澈气泡，像 boiling water",
        "阶段 2：金黄琥珀色，最佳时机",
        "阶段 3：深琥珀带红，立即下肉",
        "过深：发苦，整锅报废"
      ]
    },
    {
      "type": "h2",
      "text": "油炒法 vs. 水炒法"
    },
    {
      "type": "p",
      "text": "两种方法。油炒法用少量油，速度快、易控制——但不小心会溅热油。水炒法先加水再加油，对新手更友好但时间更长。"
    },
    {
      "type": "h2",
      "text": "黄金法则"
    },
    {
      "type": "p",
      "text": "糖达到深琥珀色带微红时，立即加入焯过水的肉，翻炒裹色。余热完成焦糖化不会焦。如果看起来已经太深，说明错过了窗口——重新来过。"
    },
    {
      "type": "note",
      "text": "秘诀：焦糖化后如果需要 deglaze，加一勺热水。这成为炖煮液体的基底。"
    }
  ]
};

const driedChilies: BlogPost = {
  "id": "dried-chilies",
  "slug": "dried-chilies",
  "titleEn": "Dried Chilies: Aromatics, Not Just Heat",
  "titleZh": "干辣椒炝锅不出苦",
  "excerptEn": "Dried chilies add depth and aroma to Chinese cooking, not just heat. The trick is tempering them correctly in oil. Get it wrong and your dish turns bitter; get it right and you unlock complex spiciness.",
  "excerptZh": "干辣椒给中餐增添深度和香气，不只是辣度。诀窍是在油里正确 temper。搞砸了，菜会发苦；搞对了，解锁复杂辣味。",
  "categoryKey": "technique",
  "categoryEn": "Technique",
  "categoryZh": "技法",
  "tags": [
    "dried chili",
    "chili oil",
    "aromatics",
    "sichuan cooking"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-09-01",
  "coverImage": "/images/blog/dried-chilies.png",
  "relatedRecipeSlugs": [
    "mapo-tofu",
    "water-boiled-beef",
    "dry-fried-green-beans"
  ],
  "bodyEn": [
    {
      "type": "p",
      "text": "Dried chilies (干辣椒, gān là jiāo) are a cornerstone of Sichuan and Hunan cooking. But they‘re not just about heat — properly prepared, they add smoky, fruity, almost chocolatey depth to dishes. The difference between a bitter, harsh chili and a fragrant, complex one comes down to technique."
    },
    {
      "type": "h2",
      "text": "The Tempering Technique"
    },
    {
      "type": "p",
      "text": "Tempering (炝锅, qiang guo) means briefly frying aromatics in hot oil to release their flavors before adding other ingredients. For dried chilies: use medium-low heat, add whole or halved chilies, and remove them as soon as they puff and darken — about 15-20 seconds. Overcooking makes them bitter."
    },
    {
      "type": "h2",
      "text": "Choosing the Right Chili"
    },
    {
      "type": "p",
      "text": "Different dried chilies serve different purposes. Erjingtiao (二荆条) is mild and fragrant — perfect for coloring oil. Thai bird‘s eye is fierce but thin-skinned — good for quick heat. Sichuan dried chilies offer balanced heat with floral notes. Mix types for complexity."
    },
    {
      "type": "h2",
      "text": "Removing Seeds vs. Keeping Them"
    },
    {
      "type": "p",
      "text": "Seeds contain most of the capsaicin. For milder dishes, shake seeds out before using. For maximum heat, use whole chilies with seeds. A middle ground: halve and tap out half the seeds."
    },
    {
      "type": "note",
      "text": "Pro tip: toast chilies in a dry pan before frying in oil. This rehydrates them slightly and intensifies aroma before they hit the hot fat."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "干辣椒是川菜和湘菜的基石。但它们不只是辣——正确处理后，它们为菜肴增添烟熏、果香、几乎巧克力的深度。苦辣与香辣的差别在于技法。"
    },
    {
      "type": "h2",
      "text": "炝锅技法"
    },
    {
      "type": "p",
      "text": "炝锅（qiang guo）是在热油中短暂炸香料释放风味，再加其他食材。干辣椒：中小火，整粒或对半切开，膨胀变深后立即取出——约 15-20 秒。炒过头会苦。"
    },
    {
      "type": "h2",
      "text": "选对辣椒"
    },
    {
      "type": "p",
      "text": "不同干辣椒用途不同。二荆条温和芳香——适合给油上色。泰国产鸟眼椒猛烈但皮薄——适合快速辣。四川干辣椒平衡辣度带花香。混用多种增加层次。"
    },
    {
      "type": "h2",
      "text": "去籽 vs. 保留"
    },
    {
      "type": "p",
      "text": "籽含大部分辣椒素。清淡菜去籽再用。最大辣度用整粒带籽。中间路线：对半切、倒出一半籽。"
    },
    {
      "type": "note",
      "text": "秘诀：炸油前先干焙辣椒。这微微复水、强化香气，再入热油效果更好。"
    }
  ]
};

const tofuTypes: BlogPost = {
  "id": "tofu-types",
  "slug": "tofu-types",
  "titleEn": "Tofu Types and How to Handle Each",
  "titleZh": "豆腐种类与处理",
  "excerptEn": "Tofu comes in many textures — from silken to extra firm — and each behaves differently in cooking. Knowing which type to use prevents mushy stir-fries and crumbly soups.",
  "excerptZh": "豆腐有多种质地——从嫩到极硬——每种烹饪表现不同。知道用哪种能避免炒菜变糊、汤品散碎。",
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "tofu",
    "bean curd",
    "silken tofu",
    "firm tofu"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-09-02",
  "coverImage": "/images/blog/tofu-types.png",
  "relatedRecipeSlugs": [
    "mapo-tofu",
    "century-egg-tofu",
    "tofu-vegetable-stir-fry"
  ],
  "bodyEn": [
    {
      "type": "p",
      "text": "Tofu (豆腐, dòu fu) is one of China‘s most versatile ingredients, but the word covers a wide range of textures. Using the wrong type in a recipe guarantees disappointment — silken tofu falls apart in stir-fries, while extra firm tofu dominates delicate soups."
    },
    {
      "type": "h2",
      "text": "The Texture Spectrum"
    },
    {
      "type": "p",
      "text": "Chinese tofu is graded by water content, not just firmness. Silken (嫩豆腐, nèn dòu fu) is custard-like and breaks easily — perfect for soups and steamed dishes. Soft (软豆腐, ruǎn dòu fu) holds shape better but still crumbles. Firm (老豆腐, lǎo dòu fu) is dense and sturdy. Extra firm (黄干/北豆腐, huáng gān) is nearly solid."
    },
    {
      "type": "h2",
      "text": "Which Type for Which Dish"
    },
    {
      "type": "p",
      "text": "Silken: cold appetizers, steamed with toppings, blended soups, tofu pudding. Soft: gentle braises, hot pot, congee. Firm: stir-fries, mapo tofu (cut large), pan-frying. Extra firm: deep-frying, skewers, hearty stews."
    },
    {
      "type": "h2",
      "text": "Prep Tips"
    },
    {
      "type": "p",
      "text": "For firm and extra firm tofu, press between paper towels for 10 minutes to remove excess water — this improves browning and texture. For silken tofu, handle with two spatulas or invert the container directly into the dish."
    },
    {
      "type": "note",
      "text": "Frozen tofu (冻豆腐, dòng dòu fu) has a spongy, chewy texture that soaks up sauces like a sponge. Perfect for hot pot and stews."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "豆腐是中国最百搭的食材之一，但这个词涵盖广泛的质地。用错类型注定失望——嫩豆腐在快炒中散开，极硬豆腐压倒精致的汤品。"
    },
    {
      "type": "h2",
      "text": "质地光谱"
    },
    {
      "type": "p",
      "text": "中式豆腐按含水量分级，不只看硬度。嫩豆腐（nèn dòu fu）如布丁，易碎——适合汤和蒸菜。软豆腐（ruǎn dòu fu）形状更稳定但仍会散。老豆腐（lǎo dòu fu）紧实坚硬。黄干/北豆腐（huáng gān）近乎固体。"
    },
    {
      "type": "h2",
      "text": "哪种类型配哪种菜"
    },
    {
      "type": "p",
      "text": "嫩豆腐：冷盘、蒸菜加配料、 blended 汤、豆腐花。软豆腐：温柔红烧、火锅、粥。老豆腐：快炒、麻婆豆腐（切大块）、煎。极硬：油炸、串串、炖菜。"
    },
    {
      "type": "h2",
      "text": "处理技巧"
    },
    {
      "type": "p",
      "text": "老豆腐和极硬豆腐，用厨房纸压 10 分钟去水——改善煎着色和口感。嫩豆腐，用两个锅铲操作或直接倒扣入菜。"
    },
    {
      "type": "note",
      "text": "冻豆腐（dòng dòu fu）有海绵状嚼劲，像海绵一样吸酱汁。适合火锅和炖菜。"
    }
  ]
};

const chineseNoodlesBuyersGuide: BlogPost = {
  "id": "chinese-noodles-buyers-guide",
  "slug": "chinese-noodles-buyers-guide",
  "titleEn": "Chinese Noodles: A Buyer‘s Guide",
  "titleZh": "面条种类怎么选",
  "excerptEn": "Chinese noodles vary wildly in shape, texture, and cooking method. This guide helps you pick the right noodle for your dish — from hand-pulled lamian to delicate wonton noodles.",
  "excerptZh": "中国面条在形状、质地、烹饪方法上差异很大。本指南帮你为菜品选对面条——从手工拉面到精致云吞面。",
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "chinese noodles",
    "noodle types",
    "lamian",
    "wonton noodles"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-09-03",
  "coverImage": "/images/blog/chinese-noodles-buyers-guide.png",
  "relatedRecipeSlugs": [
    "scallion-oil-noodles",
    "dan-dan-noodles",
    "wonton-noodle-soup"
  ],
  "bodyEn": [
    {
      "type": "p",
      "text": "Chinese noodles (面条, miàn tiáo) are as varied as rice varieties — each shape and texture suited to specific cooking methods. Using thin egg noodles in a hearty stew or thick hand-pulled noodles in a delicate soup guarantees a disappointing meal."
    },
    {
      "type": "h2",
      "text": "The Four Main Categories"
    },
    {
      "type": "p",
      "text": "Egg noodles (鸡蛋面, jī dàn miàn): yellow, firm, hold up to stir-frying and soups. Wheat noodles (小麦面, xiǎo mò miàn): plain, white, common in northern China. Rice noodles (米粉, mǐ fěn): delicate, used in southern China and Southeast Asia. Starch noodles (粉丝, fěn sī): transparent, from mung bean or sweet potato starch."
    },
    {
      "type": "h2",
      "text": "Shape Matters"
    },
    {
      "type": "p",
      "text": "Thick noodles (宽面, kuān miàn) like lamian hold sauce well and need hearty broths. Thin noodles (细面, xì miàn) like Cantonese egg noodles absorb broth quickly and suit light soups. Flat noodles (扁面, biǎn miàn) like zhajiangmian noodles carry thick sauces. Curly noodles (卷曲面, juǎn qū miàn) trap sauce in their ridges."
    },
    {
      "type": "h2",
      "text": "Fresh vs. Dried"
    },
    {
      "type": "p",
      "text": "Fresh noodles have superior texture but spoil quickly. Dried noodles last months and rehydrate well. For the best results, buy fresh from Asian markets when available; otherwise, good quality dried noodles are a reliable backup."
    },
    {
      "type": "note",
      "text": "Pro tip: always salt your noodle cooking water generously. This seasons the noodle itself, not just the sauce."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "中国面条与米种一样多样——每种形状和质地适合特定烹饪方法。用细蛋面做炖菜或用粗拉面做精致汤品，注定失望。"
    },
    {
      "type": "h2",
      "text": "四大类"
    },
    {
      "type": "p",
      "text": "鸡蛋面（jī dàn miàn）：黄色、有嚼劲，适合快炒和汤。小麦面（xiǎo mò miàn）： plain、白色，北方常见。米粉（mǐ fěn）：细腻，南方和东南亚使用。淀粉粉丝（fěn sī）：透明，绿豆或红薯淀粉制。"
    },
    {
      "type": "h2",
      "text": "形状关键"
    },
    {
      "type": "p",
      "text": "宽面（kuān miàn）如拉面挂酱好、需浓汤。细面（xì miàn）如粤式蛋面吸汤快、适合清汤。扁面（biǎn miàn）如炸酱面挂浓酱。卷曲面（juǎn qū miàn）凹槽藏酱。"
    },
    {
      "type": "h2",
      "text": "鲜 vs. 干"
    },
    {
      "type": "p",
      "text": "鲜面条口感 superior 但易变质。干面条保质期长、复水好。最佳：亚洲市场买鲜；否则，优质干面是可靠备选。"
    },
    {
      "type": "note",
      "text": "秘诀：煮面水一定要多放盐。这给面条本身调味，不只靠酱汁。"
    }
  ]
};

const chineseRiceTypes: BlogPost = {
  "id": "chinese-rice-types",
  "slug": "chinese-rice-types",
  "titleEn": "Rice Varieties for Chinese Cooking",
  "titleZh": "米种：长粒/圆粒/糯米",
  "excerptEn": "Not all rice is created equal in Chinese cooking. Short-grain for porridge, long-grain for stir-fry, glutinous for dim sum — using the wrong rice type changes the entire dish.",
  "excerptZh": "中餐里不是所有米都一样。圆粒做粥，长粒做炒饭，糯米做点心——用错米种会改变整道菜。",
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "rice",
    "chinese rice",
    "short grain",
    "glutinous rice",
    "jasmine rice"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-09-04",
  "coverImage": "/images/blog/chinese-rice-types.png",
  "relatedRecipeSlugs": [
    "yangzhou-fried-rice",
    "congee-basic",
    "sticky-rice-dumplings"
  ],
  "bodyEn": [
    {
      "type": "p",
      "text": "Rice (米饭, mǐ fàn) is the backbone of Chinese cuisine, but the type matters enormously. A sticky glutinous rice meant for dumplings will fail in a stir-fry, while long-grain rice meant for fried rice will be too dry for congee."
    },
    {
      "type": "h2",
      "text": "The Three Main Types"
    },
    {
      "type": "p",
      "text": "Short-grain white rice (粳米, jīng mǐ): sticky, round, the everyday table rice. Used for congee, steamed rice, and rice bowls. Long-grain rice (籼米, xiān mǐ): separate grains, less sticky. Essential for fried rice — the drier texture prevents mushiness. Glutinous rice (糯米, nuò mǐ): completely sticky when cooked. Used for dim sum, zongzi, and sweet dishes."
    },
    {
      "type": "h2",
      "text": "Specialty Rices"
    },
    {
      "type": "p",
      "text": "Sushi rice is essentially short-grain japonica — fine for Chinese cooking. Brown rice adds nuttiness but requires longer cooking. Black rice (黑米, hēi mǐ) is nutritious but chewy — best mixed with white rice. Red rice (红米, hóng mǐ) has a similar profile."
    },
    {
      "type": "h2",
      "text": "Washing and Soaking"
    },
    {
      "type": "p",
      "text": "Short-grain rice: wash 2-3 times until water runs clear. Glutinous rice: soak 2-4 hours before cooking for even texture. Long-grain rice: quick rinse is sufficient — don‘t overwash or you‘ll lose flavor."
    },
    {
      "type": "note",
      "text": "The rice-to-water ratio varies: short-grain 1:1.1, long-grain 1:1.3, glutinous 1:1.2. Adjust based on your pot and preference."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "米饭是中餐的基石，但米种至关重要。做点心的糯米用在炒饭里会失败，做炒饭的长粒米做粥会太干。"
    },
    {
      "type": "h2",
      "text": "三大类"
    },
    {
      "type": "p",
      "text": "短粒白米（粳米 jīng mǐ）：黏、圆、日常饭。做粥、蒸饭、饭 bowl。长粒米（籼米 xiān mǐ）：粒粒分明、不太黏。炒饭必备——干爽质地防黏。糯米（nuò mǐ）：煮熟后完全黏。做点心、粽子、甜品。"
    },
    {
      "type": "h2",
      "text": "特色米"
    },
    {
      "type": "p",
      "text": "寿司米本质是短粒粳米——中餐可用。糙米加坚果香但需更长烹饪。黑米（hēi mǐ）营养但嚼劲——最好混白米。红米（hóng mǐ）类似。"
    },
    {
      "type": "h2",
      "text": "洗和泡"
    },
    {
      "type": "p",
      "text": "短粒米：洗 2-3 次至水清。糯米：煮前泡 2-4 小时确保均匀。长粒米：快冲即可——别过度洗，会流失风味。"
    },
    {
      "type": "note",
      "text": "米水比例：短粒 1:1.1，长粒 1:1.3，糯米 1:1.2。根据锅具和偏好调整。"
    }
  ]
};

const sesameOilUses: BlogPost = {
  "id": "sesame-oil-uses",
  "slug": "sesame-oil-uses",
  "titleEn": "Sesame Oil: Finish, Never Fry",
  "titleZh": "香油：只淋不炒",
  "excerptEn": "Sesame oil (香油, xiāng yóu) is a flavor bomb — but only if you add it at the end. Cooking it destroys its delicate aroma. Here‘s how to use this essential Chinese ingredient correctly.",
  "excerptZh": "香油是风味炸弹——但前提是最后加。炒它会毁掉精致香气。这里教你正确使用这种中餐必备调料。",
  "categoryKey": "technique",
  "categoryEn": "Technique",
  "categoryZh": "技法",
  "tags": [
    "sesame oil",
    "xiang you",
    "finishing oil",
    "chinese seasoning"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-09-05",
  "coverImage": "/images/blog/sesame-oil-uses.png",
  "relatedRecipeSlugs": [
    "scallion-oil-noodles",
    "cold-noodle-salad",
    "egg-drop-soup"
  ],
  "bodyEn": [
    {
      "type": "p",
      "text": "Sesame oil (香油 or 芝麻油, zhī ma yóu) is the most recognizable Chinese finishing oil. Its nutty, toasted aroma transforms simple dishes into something special — but only when added correctly. The biggest mistake? Using it as a cooking oil."
    },
    {
      "type": "h2",
      "text": "Why You Shouldn‘t Fry With It"
    },
    {
      "type": "p",
      "text": "Sesame oil has a low smoke point (around 350°F/175°C for toasted varieties) and its delicate flavor compounds break down under high heat. Frying with it produces a bitter, acrid taste and wastes expensive oil. Always use neutral oils (vegetable, canola, peanut) for cooking."
    },
    {
      "type": "h2",
      "text": "The Right Way to Use"
    },
    {
      "type": "p",
      "text": "Add sesame oil in the last 30 seconds of cooking, or drizzle directly onto finished dishes. Common uses: a few drops in soups and congee, a teaspoon in noodle dishes, a dash in marinades and dipping sauces."
    },
    {
      "type": "ul",
      "items": [
        "Soups: ½-1 tsp per bowl",
        "Noodles: 1 tsp tossed at the end",
        "Marinades: 1 tbsp per cup of sauce",
        "Dipping sauces: a few drops to finish"
      ]
    },
    {
      "type": "h2",
      "text": "Toasted vs. Refined"
    },
    {
      "type": "p",
      "text": "Toasted sesame oil (炒香 sesame oil) is dark, potent, and aromatic — this is what you want for finishing. Refined sesame oil is pale and mild — more like a cooking oil. Don‘t confuse the two. Chinese labels: 香油 (toasted), 芝麻油/淡香油 (refined)."
    },
    {
      "type": "note",
      "text": "Pro tip: keep toasted sesame oil in the fridge after opening. It stays fresh for 6 months vs. 3 months at room temperature."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "香油是识别度最高的中式 finishing oil。它的坚果烤香能把简单菜肴变得特别——但前提是加对时机。最大错误：用它炒菜。"
    },
    {
      "type": "h2",
      "text": "为什么不该用它炒"
    },
    {
      "type": "p",
      "text": "香油烟点低（焙香种约 350°F/175°C），精致风味化合物在高温下分解。炒它会产生苦涩辛辣味，浪费昂贵的油。炒菜永远用中性油（植物油、菜籽油、花生油）。"
    },
    {
      "type": "h2",
      "text": "正确用法"
    },
    {
      "type": "p",
      "text": "烹饪最后 30 秒加香油，或直接淋在成品菜上。常见用法：汤和粥加几滴，面条加一茶匙，腌料和蘸酱加一点。"
    },
    {
      "type": "ul",
      "items": [
        "汤：每碗 ½-1 茶匙",
        "面条：最后拌入 1 茶匙",
        "腌料：每杯酱汁 1 汤匙",
        "蘸酱：几滴收尾"
      ]
    },
    {
      "type": "h2",
      "text": "焙香 vs. 精炼"
    },
    {
      "type": "p",
      "text": "焙香香油（炒香）深色、浓郁、芳香——这是你要的 finishing oil。精炼香油浅色、温和——更像炒菜油。别搞混。中文标签：香油（焙香），芝麻油/淡香油（精炼）。"
    },
    {
      "type": "note",
      "text": "秘诀：开封后焙香香油放冰箱。保鲜 6 个月 vs. 室温 3 个月。"
    }
  ]
};

const coldNoodleSauceRecipe: BlogPost = {
  "id": "cold-noodle-sauce-recipe",
  "slug": "cold-noodle-sauce-recipe",
  "titleEn": "Building a Balanced Liang Ban Sauce",
  "titleZh": "凉拌汁万能比例",
  "excerptEn": "Liang ban (凉拌) sauces are the soul of Chinese cold dishes. Master the sour-salty-sweet-spicy balance and you can dress any vegetable, noodle, or protein with confidence.",
  "excerptZh": "凉拌汁是中餐冷菜的灵魂。掌握酸-咸-甜-辣的平衡，你就能自信地拌任何蔬菜、面条或蛋白质。",
  "categoryKey": "technique",
  "categoryEn": "Technique",
  "categoryZh": "技法",
  "tags": [
    "liang ban",
    "cold sauce",
    "dressing",
    "chinese salad"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-09-06",
  "coverImage": "/images/blog/cold-noodle-sauce-recipe.png",
  "relatedRecipeSlugs": [
    "cucumber-salad",
    "cold-noodle-salad",
    "tofu-cold-appetizer"
  ],
  "bodyEn": [
    {
      "type": "p",
      "text": "Liang ban (凉拌) is one of Chinese cooking‘s most accessible techniques. The sauce balances four flavors — sour, salty, sweet, and spicy — in proportions that work for almost any ingredient. Once you memorize the ratio, you can create endless variations."
    },
    {
      "type": "h2",
      "text": "The Golden Ratio"
    },
    {
      "type": "p",
      "text": "Start with this base ratio and adjust to taste: 2 parts soy sauce (salty), 1 part Chinkiang vinegar (sour), ½ part sugar (sweet), ½ part sesame oil (aromatic), plus garlic and chili to taste. This is your template — tweak each component based on the ingredient."
    },
    {
      "type": "ul",
      "items": [
        "Soy sauce: 2 parts (light soy for salt, dark for color)",
        "Vinegar: 1 part (Chinkiang/black vinegar ideal)",
        "Sugar: ½ part (white or rock sugar)",
        "Sesame oil: ½ part (toasted)",
        "Aromatics: minced garlic, chili oil, scallion"
      ]
    },
    {
      "type": "h2",
      "text": "Adjusting for Ingredients"
    },
    {
      "type": "p",
      "text": "Leafy greens need more vinegar to cut bitterness. Root vegetables benefit from more sugar to balance earthiness. Protein (tofu, chicken) needs more soy sauce for umami. Noodles require a thinner sauce — add a splash of cooking water or broth."
    },
    {
      "type": "h2",
      "text": "Pro Tips"
    },
    {
      "type": "p",
      "text": "Always taste the sauce before adding to ingredients. Adjust while warm for dressings that will be served hot. For cold dishes, let the sauce sit 10 minutes so flavors meld. Remember: you can always add more, but you can‘t take it away."
    },
    {
      "type": "note",
      "text": "The best liang ban sauces are made to order — never pre-mixed in advance. Fresh aromatics make the difference between good and great."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "凉拌是中餐最容易上手的技法之一。酱汁平衡四种味道——酸、咸、甜、辣——比例适用于几乎所有食材。记住这个比例，就能创造无限变化。"
    },
    {
      "type": "h2",
      "text": "黄金比例"
    },
    {
      "type": "p",
      "text": "从基础比例开始，按口味调整：2 份酱油（咸）、1 份镇江香醋（酸）、½ 份糖（甜）、½ 份香油（香），加蒜和辣椒调味。这是你的模板——根据食材调整各成分。"
    },
    {
      "type": "ul",
      "items": [
        "酱油：2 份（生抽提咸，老抽上色）",
        "醋：1 份（镇江/黑醋最佳）",
        "糖：½ 份（白糖或冰糖）",
        "香油：½ 份（焙香）",
        "香料：蒜末、辣椒油、葱"
      ]
    },
    {
      "type": "h2",
      "text": "根据食材调整"
    },
    {
      "type": "p",
      "text": "叶菜需要更多醋去苦。根茎类需要更多糖平衡土腥。蛋白质（豆腐、鸡肉）需要更多酱油提鲜。面条需要薄酱汁——加一勺 cooking water 或高汤。"
    },
    {
      "type": "h2",
      "text": "秘诀"
    },
    {
      "type": "p",
      "text": "加食材前务必尝酱汁。热拌酱汁趁热调。冷菜让酱汁静置 10 分钟让风味融合。记住：只能加更多，不能撤回来。"
    },
    {
      "type": "note",
      "text": "最好的凉拌汁现做现用——别提前混好。新鲜香料是好与伟大的差别。"
    }
  ]
};


const vinegarInChineseCooking: BlogPost = {
  id: "vinegar-in-chinese-cooking",
  slug: "vinegar-in-chinese-cooking",
  titleEn: "Vinegar in Chinese Cooking: Not Just Sour",
  titleZh: "醋在中华烹饪中的妙用：酸香提鲜",
  excerptEn:
    "Vinegar is not just sour. In Chinese kitchens, it is a multi-functional tool for seasoning, removing fishiness, enhancing umami, and preserving color. Here is how to use it properly.",
  excerptZh:
    "醋不仅仅是酸的。在中华厨房里，醋是调味、去腥、提鲜、保色的多功能工具。本文教你正确使用醋的技巧。",
  categoryKey: "technique",
  categoryEn: "Technique",
  categoryZh: "技法",
  tags: ["vinegar", "seasoning", "chinese cooking", "technique"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-08-21",
  coverImage: "/images/blog/vinegar-in-chinese-cooking.png",
  relatedRecipeSlugs: ["mapo-tofu", "cold-dressed-cucumber", "dan-dan-noodles"],
  bodyEn: [
    { type: "p", text: "Vinegar is not just sour. In Chinese kitchens, it is a multi-functional tool for seasoning, removing fishiness, enhancing umami, and preserving color." },
    { type: "h2", text: "Main Types of Chinese Vinegar" },
    { type: "ul", items: [
      "Chen Vinegar (陈醋) — mellow sourness, dark color · red braising, dipping sauces",
      "Rice Vinegar (米醋) — clean sourness, light color · cold dishes, pickling",
      "Black Vinegar/Xiangcu (香醋) — slightly sweet, rich aroma · dumpling dipping sauce",
      "White Vinegar (白醋) — pure sour, colorless · cleaning, marinating",
    ] },
    { type: "h2", text: "Four Key Uses of Vinegar" },
    { type: "p", text: "1. Remove Fishiness and Enhance Umami: When cooking fish or meat, a little vinegar neutralizes fishy odors while boosting umami." },
    { type: "p", text: "2. Preserve Vegetable Color: Add a few drops of vinegar when blanching to keep green vegetables vibrant." },
    { type: "p", text: "3. Soften Ingredients: Add vinegar when boiling beans or stewing meat to accelerate softening." },
    { type: "p", text: "4. Balance Flavors: Sweet and sour, spicy and sour — vinegar is key to balancing flavors." },
    { type: "h2", text: "Practical Tips" },
    { type: "ul", items: [
      "Add vinegar at the end of stir-frying for more pronounced sourness",
      "Add vinegar early when stewing for milder sourness",
      "Use black vinegar for cold dishes for better taste",
    ] },
    { type: "h2", text: "Common Mistakes" },
    { type: "ul", items: [
      "Adding vinegar too early — sourness evaporates",
      "Using too much — masks other flavors",
      "Using the wrong type for the dish",
    ] },
  ],
  bodyZh: [
    { type: "p", text: "醋不仅仅是酸的。在中华厨房里，醋是调味、去腥、提鲜、保色的多功能工具。" },
    { type: "h2", text: "中国醋的主要种类" },
    { type: "ul", items: [
      "陈醋：酸味醇厚，颜色深 · 红烧、蘸料",
      "米醋：酸味清爽，颜色浅 · 凉拌、酸菜",
      "香醋：微甜，香气浓 · 饺子蘸料",
      "白醋：纯酸，无色 · 清洁、腌制",
    ] },
    { type: "h2", text: "醋的四大妙用" },
    { type: "p", text: "1. 去腥提鲜：烹饪鱼类或肉类时，少许醋可以中和腥味，同时提升鲜味。" },
    { type: "p", text: "2. 保持蔬菜颜色：焯水时加几滴醋，绿色蔬菜能保持翠绿。" },
    { type: "p", text: "3. 软化食材：煮豆子或炖肉时加醋，可以加速软化。" },
    { type: "p", text: "4. 调味平衡：糖醋、酸辣——醋是平衡味道的关键。" },
    { type: "h2", text: "实用技巧" },
    { type: "ul", items: [
      "炒菜起锅前加醋，酸味更明显",
      "炖煮时早加醋，酸味更柔和",
      "凉拌菜用香醋，口感更好",
    ] },
    { type: "h2", text: "常见错误" },
    { type: "ul", items: [
      "醋加得太早，酸味挥发",
      "用量过多，掩盖其他味道",
      "不分种类乱用",
    ] },
  ],
};




export const blogPosts: BlogPost[] = [condimentSubstitutions, doubanjiang101, marinatingMeat, tenSichuan, westernPantry, lightVsDarkSoy, makingCaramelSugarColor, driedChilies, tofuTypes, chineseNoodlesBuyersGuide, chineseRiceTypes, sesameOilUses, coldNoodleSauceRecipe, vinegarInChineseCooking];
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
