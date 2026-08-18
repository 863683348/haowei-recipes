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
export const blogPosts: BlogPost[] = [doubanjiang101, marinatingMeat, tenSichuan, westernPantry, lightVsDarkSoy];

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
