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
  relatedRecipeSlugs: ["mapo-tofu", "egg-fried-rice", "tomato-and-egg"],
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
  updatedDate: "2026-09-02",
  coverImage: "/images/blog/marinating-meat-chinese-way.png",
  relatedRecipeSlugs: [
    "kung-pao-chicken",
    "beef-and-broccoli",
    "dry-fried-green-beans",
    "twice-cooked-pork",
    "yu-xiang-pork",
    "cashew-shrimp",
    "kung-pao-shrimp",
    "shanghai-style-sauce-duck",
    "pan-seared-chicken-breast",
    "salt-fried-pork",
  ],
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
    {
      qEn: "What is the underlying logic behind marinating meat so it actually absorbs flavor?",
      qZh: "腌肉入味的底层逻辑到底是什么？",
      aEn: "It comes down to three things working in order: salt first draws out moisture and starts breaking down proteins so the meat relaxes; then soy sauce and seasoning penetrate while the meat is relaxed; oil goes last to form a fat barrier that locks everything in. Water-based and fat-based ingredients don't mix, so the sequence is what lets flavor travel from the surface into the meat instead of sitting on top.",
      aZh: "核心是三点按序发生：盐先下，析出水分、启动蛋白质分解，让肉松弛；接着酱油和调料在肉松弛时渗入；油最后封，形成脂层把味道锁住。水基和脂基不互溶，所以顺序才是味道从表面进到肉里的关键，而不是浮在表层。",
    },
    {
      qEn: "Why does my marinated meat still come out tough?",
      qZh: "为什么我腌过的肉还是柴？",
      aEn: "Most often it's one of three mistakes: oil was added before the soy sauce (fat blocks penetration), the meat was over-marinated in an acidic mix (vinegar or wine breaks protein down too far, making it mushy yet stringy), or the starch coating was skipped so moisture escaped during high-heat stir-fry. Fix the order, watch the time, and add the cornstarch step.",
      aZh: "多半是三个错之一：先放油后放酱油（脂肪挡住渗入）、酸性腌料腌太久（醋或料酒把蛋白质过度分解，又粉又柴）、或者省略了淀粉那一步导致水分在高温下跑光。把顺序调对、控好时间、加上淀粉，就能解决。",
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
  updatedDate: "2026-09-02",
  coverImage: "/images/blog/doubanjiang-101.webp",
  relatedRecipeSlugs: [
    "mapo-tofu",
    "kung-pao-chicken",
    "home-style-tofu",
    "twice-cooked-pork",
    "yu-xiang-pork",
    "scallion-pancakes",
    "yu-xiang-eggplant",
    "dan-dan-noodles-chengdu",
    "chengdu-maocai",
    "shui-zhu-beef",
    "shui-zhu-fish",
    "ge-le-shan-lazi-chicken",
    "la-zi-diced-chicken",
    "fish-fragrant-shredded-pork",
  ],
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
    {
      qEn: "What is a good chili bean paste substitute for doubanjiang?",
      qZh: "没有豆瓣酱，用什么替代？",
      aEn: "The closest shelf swap is a fermented chili bean paste like gochujang thinned with a little soy sauce and rice vinegar, or a spoon of chili crisp plus soy sauce for the salty-umami base. None perfectly replicate pixian doubanjiang's fermented funk, but a mix of soy sauce, a mild chili paste, and a pinch of sugar gets 80% of the way there for mapo tofu and stir-fries.",
      aZh: "最接近的货架替代是发酵辣椒酱类：韩式辣酱加一点酱油和米醋调稀，或者一勺油泼辣子加酱油打底。没有一样能完全复刻郫县豆瓣酱的发酵臭香，但用酱油+温和辣椒酱+一点糖的组合，做麻婆豆腐和炒菜能还原八成。",
    },
    {
      qEn: "How do I stir-fry doubanjiang without burning it?",
      qZh: "炒豆瓣酱怎么才不会糊？",
      aEn: "Always fry it in oil over medium heat — never a dry pan — and keep stirring for about 30-60 seconds until the oil turns red and smells toasty. If the oil smokes or the paste darkens too fast, pull the pan off the heat and start that step over with fresh oil.",
      aZh: "一定用油、中小火炒——绝不能干锅——持续翻炒 30-60 秒，直到油变红、闻到焦香。如果油冒烟或酱色一下子变太深，立刻离火，重新倒油再来这一步。",
    },
    {
      qEn: "How much doubanjiang should I use?",
      qZh: "豆瓣酱放多少合适？",
      aEn: "One tablespoon per two servings is a solid baseline, then adjust to taste. A good doubanjiang is salty enough that you often skip extra salt later, so season at the end rather than up front.",
      aZh: "两人份一汤匙是稳妥起点，之后按口味调整。好豆瓣酱本身够咸，后面常常不用再放盐，所以最后尝味再定，不要一开始就加盐。",
    },
    {
      qEn: "What dishes should I use doubanjiang in?",
      qZh: "豆瓣酱适合做哪些菜？",
      aEn: "Anything from the Sichuan pantry: mapo tofu, twice-cooked pork, fish-fragrant eggplant and pork, dan dan noodles, maocai, shui zhu (poached) beef or fish, and la zi chicken. The rule of thumb: if a recipe is red, savory, and a little funky, doubanjiang is almost certainly the base. Each HǎoWèi recipe that calls for it lists the exact amount.",
      aZh: "川菜货架上那一串都靠它：麻婆豆腐、回锅肉、鱼香茄子和鱼香肉丝、担担面、冒菜、水煮牛肉/鱼、歌乐山辣子鸡。一个判断标准：凡是红亮、咸鲜、带点臭香的家常川菜，基底八成是豆瓣酱。好味每篇用到它的菜谱都标了精确用量。",
    },
    {
      qEn: "When in the cooking process do I add doubanjiang?",
      qZh: "做菜时豆瓣酱什么阶段下锅？",
      aEn: "Almost always at the very start, right after the oil is hot and before the garlic and ginger. Frying it in oil for 30–60 seconds is what releases its red color and toasty aroma into the whole dish. Add it late and you get a raw, harsh fermented taste instead of a rounded one.",
      aZh: "几乎都在最开头——油热之后、蒜姜之前。用油炒 30–60 秒，红亮的颜色和焦香才会铺满整道菜。下晚了会留下生涩的发酵味，而不是圆润的厚味。",
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
    "hongshao-pork",
    "sweet-sour-fish",
    "potato-beef-stew"
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
    "shui-zhu-beef",
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
    "cold-dressed-dried-tofu",
    "home-style-tofu"
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
    "scallion-noodles",
    "dan-dan-noodles-chengdu",
    "chicken-broth-noodle-soup"
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
    "pidan-shourou-congee",
    "pearl-meatballs-sticky-rice"
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
    "scallion-noodles",
    "da-la-pi-jelly-noodle-salad",
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
    "smashed-cucumber",
    "da-la-pi-jelly-noodle-salad",
    "cold-dressed-dried-tofu"
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
  relatedRecipeSlugs: ["mapo-tofu", "smashed-cucumber", "dan-dan-noodles-chengdu"],
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




const oysterSauceGuide: BlogPost = {
  "id": "oyster-sauce-guide",
  "slug": "oyster-sauce-guide",
  "titleEn": "Oyster Sauce: What It Is, How to Use It, and What to Substitute",
  "titleZh": "蚝油是什么，怎么用，没有了怎么办",
  "excerptEn": "It doesn't taste fishy and it isn't only for stir-fries. Here's what oyster sauce actually does, when to add it, and the best substitute if your bottle is empty.",
  "excerptZh": "蚝油不腥，也不只用于炒菜。这篇讲清蚝油到底起什么作用、什么时候放，以及瓶子空了用什么顶。",
  "bodyEn": [
    {
      "type": "p",
      "text": "Oyster sauce doesn't taste fishy, and it isn't just for stir-fries. It's the bottle that gives Chinese takeout vegetables their glossy, savory coating — and once you understand what it actually does, it shows up in marinades, braises, and noodles too."
    },
    {
      "type": "h2",
      "text": "What it actually is"
    },
    {
      "type": "p",
      "text": "Despite the name, there is no oyster in the bottle in any form you'd recognize. Traditional versions simmer oysters in water until the liquid reduces into a dark, concentrated sauce, then thicken it with starch and season it with soy and sugar. Most supermarket brands use oyster extract instead, which is why they're cheap — and why quality varies a lot between brands."
    },
    {
      "type": "h2",
      "text": "Flavor profile"
    },
    {
      "type": "ul",
      "items": [
        "Savory and slightly sweet, with a rounder umami than plain soy sauce",
        "Thick enough to coat a spoon, so it clings to food instead of pooling at the bottom",
        "Dark brown and glossy, closer to syrup than to a thin seasoning"
      ]
    },
    {
      "type": "h2",
      "text": "How to use it"
    },
    {
      "type": "ul",
      "items": [
        "Stir-fries: add it near the end, so it coats without scorching",
        "Marinades: a spoonful adds salt, sweetness, and better browning",
        "Braises: gives body and sheen to a thin sauce",
        "Noodles: toss it through for instant savory gloss"
      ]
    },
    {
      "type": "h2",
      "text": "What to use instead"
    },
    {
      "type": "p",
      "text": "If the bottle is empty, or you're cooking vegetarian, the goal is to replace savory-sweet thickness — not the oyster flavor itself, which is barely there anyway."
    },
    {
      "type": "note",
      "text": "Best all-round substitute: 1 tablespoon soy sauce + 1 teaspoon sugar + a few drops of sesame oil, thickened with a little cornstarch slurry. For a plant-based version, buy vegetarian mushroom sauce (素蚝油) — it's widely stocked and tastes close."
    },
    {
      "type": "h2",
      "text": "How to store it"
    },
    {
      "type": "p",
      "text": "Refrigerate after opening, always. It's salty enough to keep for months, but the flavor dulls and the color keeps darkening. If it smells sharp or the cap has crusted over, it's time for a new bottle."
    },
    {
      "type": "note",
      "text": "Want to see it work? Oyster sauce lettuce takes about five minutes, and beef and broccoli is the classic weeknight test of whether you're using it right."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "蚝油不腥，也不只用于炒菜。中餐外卖蔬菜那层油亮咸鲜的芡汁就是它给的——搞懂它到底起什么作用后，腌料、红烧、拌面你都会想加一勺。"
    },
    {
      "type": "h2",
      "text": "蚝油到底是什么"
    },
    {
      "type": "p",
      "text": "名字叫蚝油，但瓶子里没有你能认出来的蚝。传统做法是拿蚝水煮到浓缩成深色稠汁，再勾淀粉、加酱油和糖调味。多数超市品牌改用蚝提取物，所以便宜——也导致不同牌子差距很大。"
    },
    {
      "type": "h2",
      "text": "味道特征"
    },
    {
      "type": "ul",
      "items": [
        "咸鲜带甜，鲜味比生抽更圆润柔和",
        "稠到能挂勺，所以是裹在菜上而不是沉在盘底",
        "深褐油亮，更像糖浆而不是稀薄的调味汁"
      ]
    },
    {
      "type": "h2",
      "text": "怎么用"
    },
    {
      "type": "ul",
      "items": [
        "炒菜：最后放，裹匀又不会炒糊",
        "腌料：一勺同时补咸、补甜、帮助上色",
        "红烧：给偏稀的汤汁增加厚度和光泽",
        "拌面：直接拌开就有咸鲜亮泽"
      ]
    },
    {
      "type": "h2",
      "text": "没有了用什么替代"
    },
    {
      "type": "p",
      "text": "瓶子空了，或者做素食时，要替代的是「咸鲜带稠度」这个作用，而不是蚝味本身——那点蚝味本来就不明显。"
    },
    {
      "type": "note",
      "text": "最通用的替代：1 勺生抽 + 1 小勺糖 + 几滴香油，再用水淀粉勾一点稠。素食者直接买素蚝油（素食蚝油），超市很常见，味道接近。"
    },
    {
      "type": "h2",
      "text": "怎么保存"
    },
    {
      "type": "p",
      "text": "开封后必须冷藏，没有例外。它咸度够，放几个月不会坏，但鲜味会钝、颜色会继续变深。闻到刺鼻味或瓶口结了一层硬壳，就该换新的了。"
    },
    {
      "type": "note",
      "text": "想看它发挥？蚝油生菜五分钟搞定，蚝油牛肉是检验你用得对不对的经典家常测试。"
    }
  ],
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "oyster sauce",
    "chinese pantry",
    "substitutions",
    "umami"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-22",
  "coverImage": "/images/blog/oyster-sauce-guide.webp",
  "relatedRecipeSlugs": [
    "oyster-sauce-lettuce",
    "beef-and-broccoli",
    "garlic-romaine"
  ],
  "faq": [
    {
      "qEn": "Does oyster sauce taste like oysters?",
      "qZh": "蚝油吃起来有蚝味吗？",
      "aEn": "Barely. It's savory and slightly sweet rather than fishy, which is why plenty of people who avoid seafood still like it.",
      "aZh": "几乎没有。它是咸鲜微甜而不是腥，所以不少不吃海鲜的人也照样喜欢蚝油。"
    },
    {
      "qEn": "Is oyster sauce vegetarian?",
      "qZh": "蚝油是素的吗？",
      "aEn": "No — it's made from oysters. If you need a plant-based version, look for vegetarian mushroom sauce (素蚝油), which is sold in most Asian groceries.",
      "aZh": "不是，蚝油用蚝制成。需要素食版本就找素蚝油（素食蚝油），多数亚超都有卖。"
    },
    {
      "qEn": "Do I have to refrigerate it?",
      "qZh": "蚝油一定要放冰箱吗？",
      "aEn": "Once opened, yes. Unopened bottles are shelf-stable, but after opening the flavor degrades quickly at room temperature.",
      "aZh": "开封后必须冷藏。没开封可以常温存放，但开封后在室温下鲜味掉得很快。"
    }
  ]
};

const hoisinVsSweetBeanSauce: BlogPost = {
  "id": "hoisin-vs-sweet-bean-sauce",
  "slug": "hoisin-vs-sweet-bean-sauce",
  "titleEn": "Hoisin vs Sweet Bean Sauce: They Are Not the Same Thing",
  "titleZh": "海鲜酱和甜面酱不是一回事",
  "excerptEn": "Both are dark, thick, and sweetish, so they get swapped constantly. Here's what each one is actually for — and what happens when you mix them up.",
  "excerptZh": "两样都是深色浓稠带甜，所以经常被混用。这篇讲清各自真正的用途，以及搞混了会怎样。",
  "bodyEn": [
    {
      "type": "p",
      "text": "Hoisin sauce and sweet bean sauce look like siblings in the jar — dark, thick, faintly sweet — and recipes sometimes treat them as interchangeable. They aren't. Using the wrong one doesn't ruin a dish, but it does move it in a direction you probably didn't intend."
    },
    {
      "type": "h2",
      "text": "Sweet bean sauce (甜面酱)"
    },
    {
      "type": "p",
      "text": "Sweet bean sauce is made from fermented wheat flour, salt, and a little sugar. It's savory first: salty, mellow, with a wheaty depth and only mild sweetness. Northern Chinese cooking leans on it hard — it's the base of jing jiang pork and the sauce you brush on Peking duck pancakes."
    },
    {
      "type": "h2",
      "text": "Hoisin sauce (海鲜酱)"
    },
    {
      "type": "p",
      "text": "Hoisin is sweeter and more complex, usually built from soybeans, garlic, chili, vinegar, sugar, and five-spice. Despite the name, it contains no seafood. It reads as a finished, almost barbecue-like sauce — which is why it works as a dipping sauce straight from the jar."
    },
    {
      "type": "h2",
      "text": "The practical difference"
    },
    {
      "type": "ul",
      "items": [
        "Sweet bean sauce is an ingredient: you cook it, usually with a little oil or wine first",
        "Hoisin is closer to a condiment: it can go on the table as-is",
        "Sweet bean is saltier and less sweet; hoisin is sweeter and more aromatic"
      ]
    },
    {
      "type": "h2",
      "text": "Can you substitute one for the other?"
    },
    {
      "type": "p",
      "text": "In a pinch, yes, with an adjustment. They're close enough that the dish will still be edible — you just need to correct the seasoning."
    },
    {
      "type": "note",
      "text": "Using hoisin in place of sweet bean sauce? Add a splash of soy sauce for salt and cut any sugar the recipe calls for. Going the other way, add a little sugar and a drop of sesame oil to round hoisin out."
    },
    {
      "type": "h2",
      "text": "Storage"
    },
    {
      "type": "p",
      "text": "Both keep well. Refrigerate after opening and they'll last months. Sweet bean sauce in particular tends to darken and thicken over time without actually spoiling — thin it with a little water if it gets stiff."
    },
    {
      "type": "note",
      "text": "Both show up in northern-style dishes. Moo shu pork and twice-cooked pork are good places to taste what sweet bean sauce actually does."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "海鲜酱和甜面酱在罐子里像亲兄弟——深色、浓稠、微甜——菜谱里有时当成一个东西用。其实不是。用错了不至于毁掉一道菜，但会把味道带往你没打算去的方向。"
    },
    {
      "type": "h2",
      "text": "甜面酱"
    },
    {
      "type": "p",
      "text": "甜面酱用发酵面粉、盐和少量糖制成，本质是咸鲜的：咸、醇厚、带小麦发酵的底蕴，甜度很轻。北方菜重度依赖它——京酱肉丝的底味就是它，北京烤鸭的荷叶饼也是刷它。"
    },
    {
      "type": "h2",
      "text": "海鲜酱"
    },
    {
      "type": "p",
      "text": "海鲜酱更甜、层次更复杂，通常用黄豆、蒜、辣椒、醋、糖和五香粉调配。名字带「海鲜」，其实没有海鲜成分。它更接近一支可以直接用的成品酱，类似照烧或烤肉酱——所以能直接上桌当蘸酱。"
    },
    {
      "type": "h2",
      "text": "实际区别在哪"
    },
    {
      "type": "ul",
      "items": [
        "甜面酱是原料：要先下锅，通常用油或料酒炒一下",
        "海鲜酱更像调料：可以直接上桌蘸着吃",
        "甜面酱更咸更不甜；海鲜酱更甜更香"
      ]
    },
    {
      "type": "h2",
      "text": "能互相替代吗"
    },
    {
      "type": "p",
      "text": "应急可以，但要调整。两者差距没大到菜会难以下咽，只是需要把调味补回来。"
    },
    {
      "type": "note",
      "text": "用海鲜酱替代甜面酱？补一点生抽增加咸度，同时减掉菜谱里的糖。反过来用，则加一点糖和几滴香油把甜面酱的圆润度补上。"
    },
    {
      "type": "h2",
      "text": "保存"
    },
    {
      "type": "p",
      "text": "两者都耐放。开封后冷藏能存好几个月。甜面酱尤其会随着时间变深变稠，但并不是坏了——太硬就加点水调开。"
    },
    {
      "type": "note",
      "text": "两样都常出现在北方菜里。木须肉和回锅肉是体会甜面酱作用的好例子。"
    }
  ],
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "hoisin sauce",
    "sweet bean sauce",
    "chinese pantry",
    "substitutions"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-23",
  "coverImage": "/images/blog/hoisin-vs-sweet-bean-sauce.webp",
  "relatedRecipeSlugs": [
    "moo-shu-pork",
    "twice-cooked-pork",
    "jing-jiang-pork"
  ],
  "faq": [
    {
      "qEn": "Does hoisin sauce contain seafood?",
      "qZh": "海鲜酱里有海鲜吗？",
      "aEn": "No. The name is misleading — standard hoisin is made from soybeans, garlic, vinegar, sugar, and spices. Always check the label if you have an allergy, though.",
      "aZh": "没有。名字有误导性，普通海鲜酱是黄豆、蒜、醋、糖和香料做的。但如果有过敏，还是要看配料表。"
    },
    {
      "qEn": "Which one do I need for Peking duck?",
      "qZh": "北京烤鸭用哪个？",
      "aEn": "Sweet bean sauce (甜面酱) is traditional for the pancakes. Hoisin is a common substitute outside China and works fine, but it's noticeably sweeter.",
      "aZh": "传统上荷叶饼刷甜面酱。海外常用海鲜酱代替也没问题，只是明显更甜。"
    },
    {
      "qEn": "Can I use them as dipping sauces?",
      "qZh": "能直接当蘸酱吗？",
      "aEn": "Hoisin, yes, straight from the jar. Sweet bean sauce is better cooked briefly with a little oil first — raw it tastes flat and overly salty.",
      "aZh": "海鲜酱可以直接蘸。甜面酱最好先用油炒一下——生的味道发死、偏咸。"
    }
  ]
};

const homemadeChiliOil: BlogPost = {
  "id": "homemade-chili-oil",
  "slug": "homemade-chili-oil",
  "titleEn": "Homemade Chili Oil: The 20-Minute Version That Beats Store-Bought",
  "titleZh": "自制辣椒油：20 分钟版本，比买的香",
  "excerptEn": "Chili oil is the fastest way to make Chinese food taste like it came from a restaurant. Here's a simple method, the mistakes that make it bitter, and how long it keeps.",
  "excerptZh": "辣椒油是让中餐一秒变「馆子味」的最快办法。这篇给你一个简单做法、会让它发苦的几个坑，以及能放多久。",
  "bodyEn": [
    {
      "type": "p",
      "text": "Homemade chili oil is the highest return on effort of anything in a Chinese pantry. Twenty minutes, one jar, and every noodle bowl, dumpling plate, and cold dish you make for the next month gets better. The one thing that goes wrong is bitterness — and that's entirely avoidable."
    },
    {
      "type": "h2",
      "text": "What you need"
    },
    {
      "type": "ul",
      "items": [
        "Coarse chili flakes (not fine powder — it burns and turns bitter)",
        "A neutral oil: canola, grapeseed, or peanut",
        "Aromatics: sliced ginger, a few scallion whites, star anise, bay leaf",
        "Salt, and optionally a spoonful of toasted sesame seeds"
      ]
    },
    {
      "type": "h2",
      "text": "The method"
    },
    {
      "type": "p",
      "text": "Put the chili flakes, salt, and sesame seeds in a heatproof bowl. Heat the oil with the aromatics over medium heat until the scallions are slowly sizzling and fragrant, about 8 to 10 minutes — you want the oil flavored, not smoking. Fish out the aromatics, then pour the hot oil over the flakes in two or three stages, stirring between each."
    },
    {
      "type": "h2",
      "text": "Why it turns bitter"
    },
    {
      "type": "ul",
      "items": [
        "Oil too hot: if it's smoking, the flakes scorch on contact",
        "Powder instead of flakes: fine chili powder has more surface area and burns instantly",
        "Pouring it all at once: the first splash superheats the top layer"
      ]
    },
    {
      "type": "h2",
      "text": "How to use it"
    },
    {
      "type": "p",
      "text": "It's a finishing oil more than a cooking oil. Spoon it over dumplings, noodles, cold chicken, or plain rice. It also works as the red layer at the bottom of a mapo tofu bowl."
    },
    {
      "type": "note",
      "text": "The flakes settle, so stir before each use. The oil on top is fragrant; the sludge at the bottom carries most of the heat and texture."
    },
    {
      "type": "h2",
      "text": "How long it keeps"
    },
    {
      "type": "p",
      "text": "Stored in a clean, dry jar in the fridge, it holds for a month or two with the flavor intact. At room temperature it's fine for a week or two. If it smells rancid or the flakes have gone dull brown, throw it out."
    },
    {
      "type": "note",
      "text": "Once you have a jar, mapo tofu, mouthwatering chicken, and laziji all get noticeably closer to restaurant versions."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "自制辣椒油是中餐厨房里投入产出比最高的一件事。二十分钟、一个罐子，接下来一个月的拌面、饺子、凉菜全都升级。唯一会出的问题是发苦——而这个问题完全可以避免。"
    },
    {
      "type": "h2",
      "text": "需要什么"
    },
    {
      "type": "ul",
      "items": [
        "粗辣椒面（不要用细粉，细粉会糊会苦）",
        "中性油：菜籽油、葡萄籽油或花生油",
        "香料：姜片、几段葱白、八角、香叶",
        "盐，可选一勺熟芝麻"
      ]
    },
    {
      "type": "h2",
      "text": "做法"
    },
    {
      "type": "p",
      "text": "辣椒面、盐、芝麻放进耐热碗。油加香料中火加热，到葱白慢慢冒小泡、出香味，大约 8 到 10 分钟——要的是把油煨出香味，而不是冒烟。捞出香料，把热油分两三次泼进辣椒面，每次都搅一下。"
    },
    {
      "type": "h2",
      "text": "为什么会发苦"
    },
    {
      "type": "ul",
      "items": [
        "油温过高：油一冒烟，辣椒面接触瞬间就焦",
        "用了细粉而不是粗面：细粉接触面积大，一碰就糊",
        "一次全倒：第一下会把表层瞬间冲过热"
      ]
    },
    {
      "type": "h2",
      "text": "怎么用"
    },
    {
      "type": "p",
      "text": "它更像是「淋油」而不是「炒菜的油」。浇在饺子、面条、口水鸡、白米饭上都行，也可以做麻婆豆腐碗底那层红油。"
    },
    {
      "type": "note",
      "text": "辣椒面会沉底，每次用前搅一下。上层的油是香的，底下的辣渣才是辣味和口感的来源。"
    },
    {
      "type": "h2",
      "text": "能放多久"
    },
    {
      "type": "p",
      "text": "装在干净无水无油的罐子里冷藏，风味能保持一两个月。室温放一两周没问题。闻到哈喇味或辣椒面变成暗褐色就该扔了。"
    },
    {
      "type": "note",
      "text": "有了一罐辣椒油，麻婆豆腐、口水鸡、辣子鸡都会明显更接近馆子的版本。"
    }
  ],
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "chili oil",
    "sichuan",
    "condiments",
    "homemade"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-24",
  "coverImage": "/images/blog/homemade-chili-oil.webp",
  "relatedRecipeSlugs": [
    "mapo-tofu",
    "kou-shui-chicken",
    "lazi-diced-chicken"
  ],
  "faq": [
    {
      "qEn": "Can I reuse the oil from store-bought chili oil?",
      "qZh": "买的辣椒油能重复利用吗？",
      "aEn": "You can fortify it by heating it gently with fresh aromatics, but don't build a new batch on old oil — it's already oxidized and will turn quickly.",
      "aZh": "可以加点新香料小火再煨一下增香，但不要用旧油做新一批——旧油已经氧化，很快会变质。"
    },
    {
      "qEn": "What if I only have fine chili powder?",
      "qZh": "只有细辣椒粉怎么办？",
      "aEn": "Lower the oil temperature: let it cool for a minute or two off the heat before pouring, and pour in smaller stages. It'll be less textured but still usable.",
      "aZh": "把油温降下来：离火放一两分钟再泼，并且分更小的量多次泼。口感会差一些，但能用。"
    },
    {
      "qEn": "How spicy is it?",
      "qZh": "会有多辣？",
      "aEn": "That depends entirely on your flakes. Korean gochugaru gives mild, fruity heat; Sichuan chili flakes are more aromatic than hot. Mix them if you want both.",
      "aZh": "完全取决于你用什么辣椒面。韩式辣椒面是温和带果香的辣，四川辣椒面香大于辣。想要两者兼得就混着用。"
    }
  ]
};

const blackVinegarZhenjiangVsShanxi: BlogPost = {
  "id": "black-vinegar-zhenjiang-vs-shanxi",
  "slug": "black-vinegar-zhenjiang-vs-shanxi",
  "titleEn": "Chinese Black Vinegar: Zhenjiang vs Shanxi, and When Each Matters",
  "titleZh": "中国香醋：镇江 vs 山西，什么时候该用哪个",
  "excerptEn": "Chinese black vinegar isn't one thing. Zhenjiang is malty and rounded, Shanxi is sharper and smokier — and picking the right one changes the dish.",
  "excerptZh": "中国的黑醋不是一种东西。镇江香醋麦芽香、圆润，山西老陈醋酸冽带烟熏味——选对了菜会不一样。",
  "bodyEn": [
    {
      "type": "p",
      "text": "\"Chinese black vinegar\" covers two products that behave very differently in the pan. If a recipe just says black vinegar, it almost always means Zhenjiang — but knowing what Shanxi brings lets you choose on purpose instead of by default."
    },
    {
      "type": "h2",
      "text": "Zhenjiang vinegar (镇江香醋)"
    },
    {
      "type": "p",
      "text": "Brewed from rice in southern China, Zhenjiang vinegar is dark, malty, and slightly sweet with a rounded finish. It's the all-purpose one: the dipping sauce for dumplings, the splash at the end of a stir-fry, the backbone of sweet-and-sour dishes."
    },
    {
      "type": "h2",
      "text": "Shanxi aged vinegar (山西老陈醋)"
    },
    {
      "type": "p",
      "text": "Made from sorghum and aged for years in northern China, Shanxi vinegar is sharper, more acidic, and carries a faint smoky depth. It's more assertive — great when you want the sourness to cut through richness, overwhelming when a dish only needs a light touch."
    },
    {
      "type": "h2",
      "text": "Which one for what"
    },
    {
      "type": "ul",
      "items": [
        "Dumpling dipping sauce: Zhenjiang, with a little soy and chili oil",
        "Sweet and sour ribs or fish: Zhenjiang — its sweetness supports the sugar",
        "Cold dressed dishes with lots of chili oil: Shanxi, to cut the fat",
        "Finishing a braise: Zhenjiang; Shanxi would dominate"
      ]
    },
    {
      "type": "h2",
      "text": "Can I substitute regular vinegar?"
    },
    {
      "type": "p",
      "text": "You can, but the result will be flatter and harsher. Black vinegar has a fermented depth that plain distilled vinegar doesn't have."
    },
    {
      "type": "note",
      "text": "Closest substitute: balsamic vinegar for Zhenjiang (similar malty sweetness, use a little less), or rice vinegar with a dash of Worcestershire for Shanxi. Neither is exact, but both are better than distilled white vinegar."
    },
    {
      "type": "h2",
      "text": "Storage"
    },
    {
      "type": "p",
      "text": "Vinegar is self-preserving — it keeps for years at room temperature, out of direct sunlight. The sediment some bottles develop is harmless; shake it in or leave it behind, it doesn't matter much."
    },
    {
      "type": "note",
      "text": "Vinegar-forward dishes are the fastest way to taste the difference. Try vinegar cabbage with Shanxi, then sweet and sour ribs with Zhenjiang."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "「中国黑醋」其实涵盖两种在锅里表现很不一样的产品。菜谱里只写「香醋」时，几乎都指镇江醋——但知道山西醋能带来什么，你就可以主动选择，而不是默认。"
    },
    {
      "type": "h2",
      "text": "镇江香醋"
    },
    {
      "type": "p",
      "text": "南方用大米酿造，色深、带麦芽香、微甜，收口圆润。它是全能选手：饺子的蘸料、出锅前那一勺、糖醋菜的底味骨架。"
    },
    {
      "type": "h2",
      "text": "山西老陈醋"
    },
    {
      "type": "p",
      "text": "北方用高粱酿造并陈放数年，酸度更冲、更尖锐，带一丝烟熏底蕴。它存在感强——需要酸味切开油腻时很出色，但只需要轻轻一点时就会喧宾夺主。"
    },
    {
      "type": "h2",
      "text": "各自该用在哪"
    },
    {
      "type": "ul",
      "items": [
        "饺子蘸料：镇江醋，配一点生抽和辣椒油",
        "糖醋排骨、糖醋鱼：镇江醋——它的甜味能托住糖",
        "重油凉拌菜：山西醋，用来解腻",
        "红烧出锅：镇江醋；山西醋会盖过整锅"
      ]
    },
    {
      "type": "h2",
      "text": "能用普通醋替代吗"
    },
    {
      "type": "p",
      "text": "能，但成品会更扁、更冲。黑醋有发酵带来的厚度，普通蒸馏醋没有。"
    },
    {
      "type": "note",
      "text": "最接近的替代：镇江醋用意大利香醋（同样麦芽甜香，用量略减）；山西醋用米醋加几滴伍斯特酱。都不算完全一样，但都比白醋强。"
    },
    {
      "type": "h2",
      "text": "保存"
    },
    {
      "type": "p",
      "text": "醋自带防腐能力，避光阴凉处常温能放好几年。有些瓶子会出现沉淀，无害——摇匀或留着不管都行。"
    },
    {
      "type": "note",
      "text": "重醋的菜最能喝出差别。试试用山西醋做醋溜白菜，再用镇江醋做糖醋排骨。"
    }
  ],
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "black vinegar",
    "chinese pantry",
    "ingredients",
    "substitutions"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-25",
  "coverImage": "/images/blog/black-vinegar-zhenjiang-vs-shanxi.webp",
  "relatedRecipeSlugs": [
    "vinegar-cabbage",
    "sweet-sour-ribs",
    "smashed-cucumber"
  ],
  "faq": [
    {
      "qEn": "Is black vinegar the same as balsamic?",
      "qZh": "黑醋等于意大利香醋吗？",
      "aEn": "No, but balsamic is the best Western substitute for Zhenjiang — both are dark, malty, and slightly sweet. Use a little less than the recipe calls for.",
      "aZh": "不等于，但香醋是镇江醋最好的西式替代品——两者都色深、麦芽香、微甜。用量比菜谱略减。"
    },
    {
      "qEn": "Which vinegar for dumpling sauce?",
      "qZh": "饺子蘸料用哪种醋？",
      "aEn": "Zhenjiang. It's milder and slightly sweet, so it balances soy sauce and chili oil instead of fighting them.",
      "aZh": "镇江醋。它更柔和微甜，能和生抽、辣椒油互相平衡而不是互相打架。"
    },
    {
      "qEn": "Does it need refrigeration?",
      "qZh": "需要冷藏吗？",
      "aEn": "No. Vinegar keeps at room temperature essentially indefinitely. Just keep it out of direct sun and capped.",
      "aZh": "不需要。醋在常温下基本可以永久保存，只要避免阳光直射、盖好盖子。"
    }
  ]
};

const shaoxingWineBuyingGuide: BlogPost = {
  "id": "shaoxing-wine-buying-guide",
  "slug": "shaoxing-wine-buying-guide",
  "titleEn": "Shaoxing Wine: What to Buy, and Whether Cooking Wine Is a Scam",
  "titleZh": "绍兴酒怎么买？「料酒」是不是智商税",
  "excerptEn": "Most Shaoxing wine on Western shelves is salted and undrinkable, but it still works. Here's how to read the label, what to buy, and what to use if you'd rather skip alcohol.",
  "excerptZh": "西方货架上多数绍兴酒都加了盐、不能喝，但做菜依然好用。这篇教你看标签、怎么挑，以及不想用酒时用什么替代。",
  "bodyEn": [
    {
      "type": "p",
      "text": "Shaoxing wine is the bottle most Chinese home cooks reach for without thinking, and the one most Western shoppers buy wrong. The problem isn't quality — it's that two very different products sit side by side on the shelf, and the cheaper one isn't always the wrong choice."
    },
    {
      "type": "h2",
      "text": "What it does in a dish"
    },
    {
      "type": "p",
      "text": "Shaoxing wine isn't there for flavor in the way soy sauce is. It removes the raw, gamey edge from meat and fish, and it carries aroma — the smell that hits you when it hits a hot wok. That's the whole job."
    },
    {
      "type": "h2",
      "text": "Reading the label"
    },
    {
      "type": "ul",
      "items": [
        "Shaoxing cooking wine (料酒): salted, cheap, sold in most supermarkets. Salted to avoid liquor tax, which is why it can't be drunk — but it seasons the dish at the same time",
        "Drinking-grade Shaoxing (花雕 / 加饭): unsalted, in liquor stores or Asian groceries. Better aroma, and you can drink it",
        "Avoid anything labeled \"rice wine\" that's actually mirin — that's sweetened Japanese cooking wine and behaves differently"
      ]
    },
    {
      "type": "h2",
      "text": "Which should you buy"
    },
    {
      "type": "p",
      "text": "If you cook Chinese food once or twice a month, salted cooking wine is genuinely fine — just remember it's salty, so ease off the soy sauce. If you cook it weekly, buy a bottle of huadiao. The aroma difference is real, especially in braises and steamed fish."
    },
    {
      "type": "h2",
      "text": "Substitutions"
    },
    {
      "type": "note",
      "text": "Best non-alcoholic substitute: dry sherry, which is close in profile, or chicken stock with a few drops of rice vinegar for dishes where you just need liquid and a little acidity. Avoid cooking wine from the supermarket's international aisle that lists salt as the second ingredient — it's mostly brine."
    },
    {
      "type": "h2",
      "text": "Storage"
    },
    {
      "type": "p",
      "text": "Cooking wine is salted and keeps for a year or more in the cupboard. Drinking-grade huadiao is wine: once opened it slowly oxidizes, so it's better in the fridge and best used within a few months."
    },
    {
      "type": "note",
      "text": "Red-braised pork and steamed fish are the two dishes where a better bottle of wine is most obvious — the aroma has nowhere to hide."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "绍兴酒是中国家庭厨师不假思索就拿起的瓶子，也恰恰是西方消费者最容易买错的一样。问题不在品质，而在于货架上并排放着两种完全不同的产品，而便宜的那个不一定是错的。"
    },
    {
      "type": "h2",
      "text": "它在菜里起什么作用"
    },
    {
      "type": "p",
      "text": "绍兴酒不像生抽那样提供味道。它的作用是去掉肉和鱼的腥膻，同时带香——就是它下热锅时冲上来的那股香气。这就是它的全部工作。"
    },
    {
      "type": "h2",
      "text": "怎么看标签"
    },
    {
      "type": "ul",
      "items": [
        "绍兴料酒：加盐、便宜，多数超市有卖。加盐是为了规避酒税，所以不能喝——但同时也给菜补了咸味",
        "饮用级绍兴酒（花雕 / 加饭）：不加盐，在酒类店或亚超。香气更好，也能喝",
        "避开标着「rice wine」其实是味醂的产品——那是加了甜的日本料酒，表现完全不同"
      ]
    },
    {
      "type": "h2",
      "text": "该买哪个"
    },
    {
      "type": "p",
      "text": "一个月做一两次中餐，加盐料酒其实完全够用——只要记住它带咸，生抽要相应少放。如果每周都做，买一瓶花雕。香气差距是真的，红烧和清蒸鱼尤其明显。"
    },
    {
      "type": "h2",
      "text": "替代方案"
    },
    {
      "type": "note",
      "text": "最好的无酒精替代：干雪莉酒（风味接近），或者用鸡高汤加几滴米醋（适合只需要液体和一点酸度的菜）。避开超市国际货架上配料表第二位就是盐的那种「cooking wine」——那基本是盐水。"
    },
    {
      "type": "h2",
      "text": "保存"
    },
    {
      "type": "p",
      "text": "料酒含盐，橱柜里放一年以上没问题。饮用级花雕是酒，开瓶后会慢慢氧化，最好冷藏并在几个月内用完。"
    },
    {
      "type": "note",
      "text": "红烧肉和清蒸鱼是最能体现酒质差距的两道菜——香气无处可藏。"
    }
  ],
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "shaoxing wine",
    "chinese pantry",
    "substitutions",
    "ingredients"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-26",
  "coverImage": "/images/blog/shaoxing-wine-buying-guide.webp",
  "relatedRecipeSlugs": [
    "hongshao-pork",
    "huangmen-chicken",
    "steamed-bass"
  ],
  "faq": [
    {
      "qEn": "Is salted Shaoxing cooking wine bad?",
      "qZh": "加盐的料酒是不是不好？",
      "aEn": "No. It's salted to avoid liquor tax, not because it's low quality. It works fine — just reduce the soy sauce slightly to account for the salt.",
      "aZh": "不是。加盐是为了规避酒税，不是因为品质差。它很好用，只要相应少放一点生抽来平衡咸度。"
    },
    {
      "qEn": "Can I use dry sherry instead?",
      "qZh": "能用干雪莉酒替代吗？",
      "aEn": "Yes, it's the closest common substitute and behaves almost identically in cooking. Japanese mirin is too sweet to swap in directly.",
      "aZh": "可以，它是最接近的常用替代品，在烹饪中表现几乎一致。日本味醂太甜，不能直接替换。"
    },
    {
      "qEn": "Does the alcohol cook off?",
      "qZh": "酒精会挥发掉吗？",
      "aEn": "Mostly, but not entirely — a small percentage remains even after simmering. If you need to avoid alcohol completely, use stock or water with a splash of vinegar.",
      "aZh": "大部分会，但不是全部——即使炖煮后仍有少量残留。如果必须完全无酒精，用高汤或水加一点醋代替。"
    }
  ]
};

const firmVsSoftTofu: BlogPost = {
  "id": "firm-vs-soft-tofu",
  "slug": "firm-vs-soft-tofu",
  "titleEn": "Firm vs Soft Tofu: Which One Your Recipe Actually Means",
  "titleZh": "老豆腐还是嫩豆腐？菜谱到底指的是哪个",
  "excerptEn": "Grab the wrong tofu and even a good recipe falls apart — literally. Here's the difference, what each is for, and how to keep soft tofu from breaking up in the pan.",
  "excerptZh": "豆腐拿错，再好的菜谱也会散掉——字面意义上的散。这篇讲清区别、各自用途，以及怎么让嫩豆腐下锅不碎。",
  "bodyEn": [
    {
      "type": "p",
      "text": "Tofu type is one of the few choices that can quietly sink a Chinese recipe. Mapo tofu made with firm tofu is a different dish from mapo tofu made with silken — and if a recipe doesn't specify, it's usually assuming one in particular."
    },
    {
      "type": "h2",
      "text": "The range, firmest to softest"
    },
    {
      "type": "ul",
      "items": [
        "Extra firm / pressed: dense, holds its shape, good for pan-frying and grilling",
        "Firm (老豆腐): the everyday Chinese block, holds cubes in stir-fries and braises",
        "Soft (嫩豆腐): delicate, breaks easily, used in soups and steamed dishes",
        "Silken (内酯豆腐): custard-like, barely holds shape, for cold dishes and mapo tofu"
      ]
    },
    {
      "type": "h2",
      "text": "Which one recipes mean"
    },
    {
      "type": "p",
      "text": "When a Chinese recipe just says \"tofu,\" it usually means firm (老豆腐) for anything cooked in a pan or wok. The exceptions are worth memorizing: mapo tofu traditionally uses silken, and most soups use soft."
    },
    {
      "type": "h2",
      "text": "Keeping soft tofu from falling apart"
    },
    {
      "type": "ul",
      "items": [
        "Cut it in larger pieces than feels right — small cubes break",
        "Slide it into the pan rather than dropping it",
        "Move the pan, not the tofu: swirl the sauce instead of stirring",
        "Salt the water gently when blanching; it firms the surface slightly"
      ]
    },
    {
      "type": "h2",
      "text": "Pressing: when it matters"
    },
    {
      "type": "p",
      "text": "Press firm tofu for 20 to 30 minutes if you want it to brown. Water on the surface has to evaporate before browning can start, and unpressed tofu mostly steams in the pan. For braises, skip it — the tofu will absorb sauce instead, which is the point."
    },
    {
      "type": "note",
      "text": "Silken tofu needs no pressing and shouldn't be pressed — it would collapse. If a recipe calls for silken, handle it as little as possible."
    },
    {
      "type": "h2",
      "text": "Storage"
    },
    {
      "type": "p",
      "text": "Keep tofu submerged in clean water in the fridge and change the water daily; it lasts about a week that way. Once the water turns cloudy or smells sour, it's done. Tofu also freezes well — thawed and squeezed, it turns spongy and soaks up sauce, which is a genuinely useful texture for braises."
    },
    {
      "type": "note",
      "text": "Mapo tofu is where the silken-versus-firm argument is loudest, and home-style tofu is the forgiving one if you're still learning the difference."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "豆腐种类是少数能悄悄毁掉一道中餐的选择。用老豆腐做的麻婆豆腐和用内酯豆腐做的，根本是两道菜——而菜谱没写清楚时，它通常默认的是某一种。"
    },
    {
      "type": "h2",
      "text": "从最硬到最软"
    },
    {
      "type": "ul",
      "items": [
        "特硬 / 压干型：密实、定得住型，适合煎和烤",
        "老豆腐（firm）：中式日常块豆腐，炒和红烧都能保持块状",
        "嫩豆腐（soft）：细嫩易碎，用于汤和蒸菜",
        "内酯豆腐（silken）：像炖蛋一样嫩，几乎定不住型，用于凉菜和麻婆豆腐"
      ]
    },
    {
      "type": "h2",
      "text": "菜谱指的是哪种"
    },
    {
      "type": "p",
      "text": "中餐菜谱只写「豆腐」时，凡是下锅或下炒锅的，通常都指老豆腐。例外值得记住：麻婆豆腐传统用内酯豆腐，多数汤用嫩豆腐。"
    },
    {
      "type": "h2",
      "text": "嫩豆腐下锅不碎的技巧"
    },
    {
      "type": "ul",
      "items": [
        "切得比你以为的更大块——小块必碎",
        "滑进锅里，而不是扔进去",
        "动锅不动豆腐：晃锅让汁裹上，而不是去搅",
        "焯水时水里加一点盐，表面会稍微收紧"
      ]
    },
    {
      "type": "h2",
      "text": "什么时候需要压水"
    },
    {
      "type": "p",
      "text": "想让老豆腐煎上色，就压 20 到 30 分钟。表面的水必须先蒸发掉才可能上色，不压的话豆腐在锅里基本是「蒸」。红烧则不用压——豆腐反而要吸汁，那正是目的。"
    },
    {
      "type": "note",
      "text": "内酯豆腐不需要压，也不能压——一压就塌。菜谱说用内酯豆腐时，尽量少动它。"
    },
    {
      "type": "h2",
      "text": "保存"
    },
    {
      "type": "p",
      "text": "豆腐泡在干净水里放冰箱，每天换水，这样能放约一周。水变浑或有酸味就不能吃了。豆腐也很适合冷冻——解冻挤干后会变成海绵质，特别吸汁，红烧时是种很好用的口感。"
    },
    {
      "type": "note",
      "text": "麻婆豆腐是「内酯还是老豆腐」争论最凶的一道，而家常豆腐对你还在摸索差别时最宽容。"
    }
  ],
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "tofu",
    "ingredients",
    "technique",
    "chinese pantry"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-27",
  "coverImage": "/images/blog/firm-vs-soft-tofu.webp",
  "relatedRecipeSlugs": [
    "mapo-tofu",
    "braised-tofu",
    "home-style-tofu"
  ],
  "faq": [
    {
      "qEn": "Can I use firm tofu in mapo tofu?",
      "qZh": "麻婆豆腐能用老豆腐吗？",
      "aEn": "You can, and plenty of home cooks do. It holds its shape better but absorbs less sauce — traditional versions use silken for the custard-against-spice contrast.",
      "aZh": "可以，很多家庭就这么做。它更定得住型，但吸汁少——传统做法用内酯豆腐，要的是嫩滑配麻辣的对比感。"
    },
    {
      "qEn": "How long does tofu last in the fridge?",
      "qZh": "豆腐冷藏能放多久？",
      "aEn": "About a week, submerged in clean water changed daily. Once opened, avoid storing it in the original tub's liquid for more than a day or two.",
      "aZh": "泡干净水、每天换水，约一周。开封后不要在原盒的水里泡超过一两天。"
    },
    {
      "qEn": "Why does my tofu stick to the pan?",
      "qZh": "为什么我的豆腐粘锅？",
      "aEn": "Usually too little oil, an insufficiently hot pan, or tofu that wasn't pressed. Give it time to release before you try to move it.",
      "aZh": "通常是油太少、锅不够热，或者豆腐没压水。下锅后给它时间自然脱底，别急着翻动。"
    }
  ]
};

const fermentedBeanCurdFuru: BlogPost = {
  "id": "fermented-bean-curd-furu",
  "slug": "fermented-bean-curd-furu",
  "titleEn": "Fermented Bean Curd (Furu): The Small Jar That Fixes Braises",
  "titleZh": "腐乳：一小罐让红烧脱胎换骨的东西",
  "excerptEn": "Furu is salty, funky, and used in tiny amounts — one cube does the work of several seasonings. Here's how to buy it, use it, and stop being afraid of it.",
  "excerptZh": "腐乳咸、带发酵味，用量极小——一块能顶好几种调料。这篇讲怎么买、怎么用，以及别再怕它。",
  "bodyEn": [
    {
      "type": "p",
      "text": "Fermented bean curd — 腐乳, or furu — is tofu that's been salted and aged in a brine until it turns creamy, salty, and deeply savory. Western cooks tend to buy a jar, use it once, and then leave it in the fridge for a year. That's a waste: one cube does the work of salt, soy sauce, and a good chunk of the aromatics."
    },
    {
      "type": "h2",
      "text": "The types you'll see"
    },
    {
      "type": "ul",
      "items": [
        "Red furu (红腐乳): aged with red yeast rice, deeper and slightly sweet — the standard for braises",
        "White furu (白腐乳): milder, saltier, good for vegetable dishes and congee",
        "Spicy furu (辣腐乳): red furu with chili, nice as a condiment on rice"
      ]
    },
    {
      "type": "h2",
      "text": "How to use it"
    },
    {
      "type": "p",
      "text": "Mash one or two cubes into the cooking liquid with the back of a spoon before anything else goes in. It dissolves and disappears into the sauce, leaving body rather than an identifiable flavor. It's also the traditional seasoning for stir-fried water spinach and a common addition to hot pot dipping sauce."
    },
    {
      "type": "ul",
      "items": [
        "Braises: one cube of red furu per 500g of meat, plus the sauce it came in",
        "Stir-fried greens: half a cube, added with the garlic",
        "Marinades: mash into the marinade for pork or tofu",
        "On the table: a cube alongside congee or plain rice"
      ]
    },
    {
      "type": "h2",
      "text": "How much is too much"
    },
    {
      "type": "p",
      "text": "Furu is very salty, and this is where people go wrong. Start with one cube for a dish serving three or four, taste, then add more if needed. A whole jar in one pot will make the dish inedibly salty, and you can't fix it by adding water."
    },
    {
      "type": "h2",
      "text": "Substitutions"
    },
    {
      "type": "note",
      "text": "There's no great substitute — miso is the closest in function (salty, fermented, savory) but tastes different. Use a small spoonful of white miso plus a pinch of salt, and accept that the dish won't taste quite the same."
    },
    {
      "type": "h2",
      "text": "Storage"
    },
    {
      "type": "p",
      "text": "It's a preserved product and keeps for months, even a year, in the fridge after opening. Keep the cubes submerged in their brine and always use a clean spoon — introducing moisture or other food is what spoils it."
    },
    {
      "type": "note",
      "text": "Red-braised pork is the classic place to try it, and braised tofu shows how well it works without any meat involved."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "腐乳是豆腐加盐在卤水里腌熟的产物，腌到质地变奶油状、咸而极鲜。西方厨子常买了用一次，然后在冰箱里放一年。太浪费了——一块腐乳能同时顶掉盐、生抽，还有大半的香料。"
    },
    {
      "type": "h2",
      "text": "你会见到的种类"
    },
    {
      "type": "ul",
      "items": [
        "红腐乳：加红曲米腌，味道更深、微甜——红烧的标准选择",
        "白腐乳：更温和、更咸，适合炒菜和配粥",
        "辣腐乳：红腐乳加辣椒，配白饭当小菜很合适"
      ]
    },
    {
      "type": "h2",
      "text": "怎么用"
    },
    {
      "type": "p",
      "text": "在下任何其他东西之前，用勺背把一两块腐乳在汤汁里压散。它会化进汤里、消失不见，留下的是厚度而不是某种能分辨的味道。它也是炒空心菜的传统调味，还常加进火锅蘸料。"
    },
    {
      "type": "ul",
      "items": [
        "红烧：每 500 克肉一块红腐乳，连卤汁一起用",
        "炒青菜：半块，跟蒜一起下",
        "腌料：压散拌进肉或豆腐的腌料里",
        "直接上桌：配粥或白饭来一块"
      ]
    },
    {
      "type": "h2",
      "text": "多少算多"
    },
    {
      "type": "p",
      "text": "腐乳非常咸，这也是人们最容易翻车的地方。三人份的菜先放一块，尝过再决定要不要加。一整罐倒进锅里会让菜咸到没法吃，而且加水也救不回来。"
    },
    {
      "type": "h2",
      "text": "替代方案"
    },
    {
      "type": "note",
      "text": "没有特别好的替代——味噌在功能上最接近（咸、发酵、鲜），但味道不同。用一小勺白味噌加一点盐，并且接受成品味道不会完全一样。"
    },
    {
      "type": "h2",
      "text": "保存"
    },
    {
      "type": "p",
      "text": "它是腌制品，开封后冷藏能放几个月甚至一年。保持腐乳块泡在卤汁里，并且一定用干净的勺子——带进水或其他食物才是让它变质的原因。"
    },
    {
      "type": "note",
      "text": "红烧肉是试腐乳最经典的地方，而红烧豆腐能让你看到它不放肉时同样出色。"
    }
  ],
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "fermented bean curd",
    "furu",
    "chinese pantry",
    "braising"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-29",
  "coverImage": "/images/blog/fermented-bean-curd-furu.webp",
  "relatedRecipeSlugs": [
    "hongshao-pork",
    "braised-tofu",
    "home-style-pork"
  ],
  "faq": [
    {
      "qEn": "Is fermented bean curd the same as stinky tofu?",
      "qZh": "腐乳等于臭豆腐吗？",
      "aEn": "No. Stinky tofu is soaked in a different, much more pungent brine and then usually fried. Furu is creamy, salty, and far milder.",
      "aZh": "不等于。臭豆腐泡的是另一种气味更冲的卤水，通常还要下锅炸。腐乳是奶油质地、咸，气味温和得多。"
    },
    {
      "qEn": "Do I need to cook it, or can I eat it straight?",
      "qZh": "腐乳要煮过吗？可以直接吃吗？",
      "aEn": "It's already fermented and ready to eat — a cube with congee or rice is completely normal. Cooking just lets it melt into a sauce.",
      "aZh": "它已经发酵好了，可以直接吃——配粥或白饭来一块很正常。下锅煮只是为了让它化进汤汁里。"
    },
    {
      "qEn": "How salty is it compared to soy sauce?",
      "qZh": "它比生抽咸多少？",
      "aEn": "Significantly saltier by volume. Treat one cube as roughly a tablespoon of soy sauce, and cut the recipe's salt accordingly.",
      "aZh": "按体积算咸得多。一块大约相当于一勺生抽，菜谱里的盐要相应减少。"
    }
  ]
};

const woodEarFungusGuide: BlogPost = {
  "id": "wood-ear-fungus-guide",
  "slug": "wood-ear-fungus-guide",
  "titleEn": "Wood Ear Fungus: How to Soak It Safely and What to Cook With It",
  "titleZh": "木耳：怎么安全泡发，以及拿它做什么菜",
  "excerptEn": "Wood ear has almost no flavor and a great texture, which is exactly the point. Here's how long to soak it, the safety rule that matters, and where it's worth using.",
  "excerptZh": "木耳几乎没味道，胜在口感——这正是它存在的意义。这篇讲泡多久、必须注意的安全规则，以及值得用它的地方。",
  "bodyEn": [
    {
      "type": "p",
      "text": "Wood ear fungus — 木耳, sometimes sold as black fungus or cloud ear — is dried, shelf-stable, and costs almost nothing. It has nearly no flavor of its own. What it brings is a snappy, slightly rubbery crunch that survives stir-frying and vinegar, which is why it shows up in cold dishes, hot and sour soup, and moo shu pork."
    },
    {
      "type": "h2",
      "text": "Soaking: the rule that actually matters"
    },
    {
      "type": "p",
      "text": "Soak dried wood ear in cold water for 1 to 2 hours, or in warm water for about 30 minutes. It expands to several times its dried size, so use far more water and a much bigger bowl than feels necessary."
    },
    {
      "type": "note",
      "text": "Do not soak it overnight or for many hours at room temperature. Long soaks at warm temperatures let bacteria grow, and there are documented cases of serious food poisoning from fungus soaked too long. If you need to prepare it ahead, soak it in the fridge, and if it smells sour or feels slimy, throw it out."
    },
    {
      "type": "h2",
      "text": "Cleaning and trimming"
    },
    {
      "type": "ul",
      "items": [
        "Rinse the rehydrated pieces under running water, rubbing gently to loosen grit trapped in the folds",
        "Trim off the hard, knobbly bit where it attached to the wood — it stays tough no matter how long you cook it",
        "Tear larger pieces into bite-sized ones rather than cutting, so the edges stay irregular and catch sauce"
      ]
    },
    {
      "type": "h2",
      "text": "Cooking it"
    },
    {
      "type": "p",
      "text": "Wood ear needs brief cooking, not long simmering. Add it to stir-fries near the end, or blanch it for a minute before tossing into cold dressed dishes. Cooked too long it loses the crunch that makes it worth using at all."
    },
    {
      "type": "h2",
      "text": "Where it earns its place"
    },
    {
      "type": "ul",
      "items": [
        "Cold dressed wood ear with vinegar, chili oil, and garlic — the classic",
        "Hot and sour soup, where it's the texture against the soft tofu",
        "Moo shu pork, where it echoes the crunch of the other vegetables"
      ]
    },
    {
      "type": "h2",
      "text": "Buying and storage"
    },
    {
      "type": "p",
      "text": "Dried wood ear keeps for a year or more in a sealed container in a dark cupboard. Buy it whole rather than pre-shredded if you can — the pieces are cleaner and keep their texture better. Rehydrated wood ear should be used within a day or two and kept in the fridge."
    },
    {
      "type": "note",
      "text": "Cold dressed wood ear is the fastest way to understand what this ingredient is actually for — the texture does all the work."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "木耳（也叫黑木耳、云耳）是干货，常温耐放，几乎不要钱。它本身基本没味道，带来的是一种爽脆带弹的口感，而且经得起爆炒和醋泡——所以它出现在凉拌菜、酸辣汤和木须肉里。"
    },
    {
      "type": "h2",
      "text": "泡发：真正要紧的一条规则"
    },
    {
      "type": "p",
      "text": "干木耳用冷水泡 1 到 2 小时，或温水泡约 30 分钟。泡开后体积会变成干货的好几倍，所以水要多放、碗要比你以为的大得多。"
    },
    {
      "type": "note",
      "text": "不要泡过夜，也不要在室温下泡好几个小时。长时间在温暖环境里泡发会让细菌繁殖，木耳泡太久导致严重食物中毒是有公开记录的案例。需要提前准备就放冰箱泡；闻到酸味或摸起来发黏，直接扔掉。"
    },
    {
      "type": "h2",
      "text": "清洗和去根"
    },
    {
      "type": "ul",
      "items": [
        "泡开后在流动水下冲洗，轻轻搓掉藏在褶皱里的沙",
        "剪掉长在木头上的那块硬蒂——无论煮多久它都是硬的",
        "大朵用手撕成小朵而不是切，让边缘不规则、更容易挂汁"
      ]
    },
    {
      "type": "h2",
      "text": "怎么烹调"
    },
    {
      "type": "p",
      "text": "木耳要快，不要久煮。炒菜时最后放，凉拌则先焯一分钟再拌。煮太久，它那点值得用的脆感就没了。"
    },
    {
      "type": "h2",
      "text": "哪些地方值得用它"
    },
    {
      "type": "ul",
      "items": [
        "凉拌木耳配醋、辣椒油、蒜——最经典的吃法",
        "酸辣汤里，它的口感正好和软嫩的豆腐形成对比",
        "木须肉里，它呼应其他配菜的脆感"
      ]
    },
    {
      "type": "h2",
      "text": "购买和保存"
    },
    {
      "type": "p",
      "text": "干木耳密封避光放橱柜，能存一年以上。尽量买整朵而不是切好的丝——杂质更少，口感也更好。泡发后的木耳冷藏并在一两天内用完。"
    },
    {
      "type": "note",
      "text": "凉拌木耳是理解这个食材用途最快的方式——所有表现都由口感完成。"
    }
  ],
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "wood ear",
    "mushrooms",
    "ingredients",
    "food safety"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-30",
  "coverImage": "/images/blog/wood-ear-fungus-guide.webp",
  "relatedRecipeSlugs": [
    "cold-wood-ear",
    "moo-shu-pork",
    "home-style-pork"
  ],
  "faq": [
    {
      "qEn": "Can I soak wood ear overnight?",
      "qZh": "木耳能泡一整夜吗？",
      "aEn": "Better not at room temperature. Long soaks in warm conditions allow bacteria to grow. If you need to prep ahead, soak it in the fridge and use it within a day.",
      "aZh": "室温下最好别这样。长时间在温暖环境泡发会让细菌繁殖。需要提前准备就放冰箱泡，并在一天内用完。"
    },
    {
      "qEn": "How do I know if soaked wood ear has gone bad?",
      "qZh": "怎么判断泡发的木耳坏了？",
      "aEn": "Smell it and feel it. It should smell neutral or faintly earthy. If it smells sour or the surface feels slimy, discard it — don't try to cook it clean.",
      "aZh": "闻一下、摸一下。正常的应该是无味或略带土腥。闻到酸味或表面发黏就扔掉——别指望煮一下就能杀菌。"
    },
    {
      "qEn": "Is wood ear the same as cloud ear?",
      "qZh": "木耳和云耳是一种东西吗？",
      "aEn": "Nearly — cloud ear is a thinner, more delicate variety. You can use them interchangeably in most recipes; cloud ear is a bit more tender.",
      "aZh": "基本是——云耳是更薄更嫩的一个品种。多数菜谱里可以互换，云耳口感更柔一些。"
    }
  ]
};

const sesamePasteGuide: BlogPost = {
  "id": "sesame-paste-guide",
  "slug": "sesame-paste-guide",
  "titleEn": "Sesame Paste (Zhi Ma Jiang): How to Fix It When It Seizes",
  "titleZh": "芝麻酱：结块了怎么救回来",
  "excerptEn": "Sesame paste turns into a stubborn lump the moment you add water — until you know the trick. Here's how to thin it properly, and how it differs from tahini.",
  "excerptZh": "芝麻酱一加水就变成搅不开的硬块——直到你知道那个窍门。这篇讲怎么正确调稀，以及它和中东芝麻酱有什么不同。",
  "bodyEn": [
    {
      "type": "p",
      "text": "Chinese sesame paste — 芝麻酱 — is made from toasted sesame seeds, which gives it a deeper, nuttier, slightly bitter edge than the raw-seed tahini most Western kitchens already have. It's the base of cold noodles, and the reason those noodles taste like something you'd order rather than something you threw together."
    },
    {
      "type": "h2",
      "text": "Why it seizes, and the fix"
    },
    {
      "type": "p",
      "text": "Add water to sesame paste and it stiffens into a stubborn lump that won't mix. This isn't a mistake on your part — it's how the emulsion behaves. The fix is counterintuitive: keep going."
    },
    {
      "type": "note",
      "text": "Add liquid a small splash at a time and stir hard in one direction. It will seize, then look worse, then suddenly turn smooth and pourable. The whole thing takes about two minutes. Trying to fix it by adding a lot of water at once just gives you lumps floating in water."
    },
    {
      "type": "h2",
      "text": "What to thin it with"
    },
    {
      "type": "ul",
      "items": [
        "Warm water: neutral, lets the sesame flavor lead",
        "Sesame oil: richer, better for cold noodle sauces",
        "Light soy sauce: seasons and thins at once"
      ]
    },
    {
      "type": "h2",
      "text": "Sesame paste vs tahini"
    },
    {
      "type": "p",
      "text": "Both are ground sesame, but Chinese sesame paste uses toasted seeds and tahini usually uses raw. That makes sesame paste darker, stronger, and a little bitter. In a cold noodle sauce, tahini tastes flat by comparison."
    },
    {
      "type": "note",
      "text": "Using tahini in a pinch? Toast it lightly in a dry pan first and let it cool, or add a few drops of toasted sesame oil to push it in the right direction."
    },
    {
      "type": "h2",
      "text": "Where to use it"
    },
    {
      "type": "ul",
      "items": [
        "Cold sesame noodles — the classic, and the whole reason to own a jar",
        "Cold dressed dishes, thinned into the dressing",
        "Hot pot dipping sauce, mixed with furu and chili oil"
      ]
    },
    {
      "type": "h2",
      "text": "Storage"
    },
    {
      "type": "p",
      "text": "Store it in the fridge once opened; the oil separates and rises, which is normal. Stir it back in thoroughly before each use. If it separates and you never stir it, the bottom layer goes hard and dry. Kept stirred and cold, it lasts several months."
    },
    {
      "type": "note",
      "text": "Scallion noodles are the fastest test of whether you thinned it correctly — the sauce should coat the noodles, not pool at the bottom of the bowl."
    }
  ],
  "bodyZh": [
    {
      "type": "p",
      "text": "中式芝麻酱用熟芝麻磨制，所以比西方厨房常见的生芝麻磨的中东芝麻酱（tahini）更深、更坚果香，还带一点苦韵。它是凉面的基底，也是凉面吃起来像外卖而不是随便拌拌的原因。"
    },
    {
      "type": "h2",
      "text": "为什么会结块，怎么救"
    },
    {
      "type": "p",
      "text": "芝麻酱一加水就会变硬、搅不开。这不是你操作失误，而是它乳化的特性就是这样。救法有点反直觉：继续加。"
    },
    {
      "type": "note",
      "text": "液体少量多次地加，同时朝一个方向用力搅。它会先结块，然后看起来更糟，接着突然变顺滑、可以流动。整个过程大约两分钟。想一次加很多水来补救，只会得到一盆漂着硬块的水。"
    },
    {
      "type": "h2",
      "text": "用什么调稀"
    },
    {
      "type": "ul",
      "items": [
        "温水：中性，让芝麻味主导",
        "香油：更浓郁，适合凉面酱",
        "生抽：调味和调稀一次完成"
      ]
    },
    {
      "type": "h2",
      "text": "芝麻酱和中东芝麻酱的区别"
    },
    {
      "type": "p",
      "text": "两者都是磨芝麻，但中式芝麻酱用熟芝麻，tahini 多用生芝麻。这让芝麻酱颜色更深、味道更冲、略带苦。拌凉面时，tahini 相比之下会显得寡淡。"
    },
    {
      "type": "note",
      "text": "应急用 tahini？先在干锅里小火炒香、放凉再用，或者加几滴香油把方向掰回来。"
    },
    {
      "type": "h2",
      "text": "用在哪"
    },
    {
      "type": "ul",
      "items": [
        "芝麻凉面——最经典，也是值得常备一罐的理由",
        "凉拌菜里调进料汁",
        "火锅蘸料，配腐乳和辣椒油"
      ]
    },
    {
      "type": "h2",
      "text": "保存"
    },
    {
      "type": "p",
      "text": "开封后冷藏，油会分离浮到上层，这是正常的。每次用前充分搅匀。如果一直不搅，下层会变干变硬。搅匀冷藏，能放好几个月。"
    },
    {
      "type": "note",
      "text": "葱油拌面是检验你调稀是否到位最快的方式——酱应该裹在面上，而不是积在碗底。"
    }
  ],
  "categoryKey": "ingredients",
  "categoryEn": "Ingredients",
  "categoryZh": "食材",
  "tags": [
    "sesame paste",
    "zhi ma jiang",
    "ingredients",
    "cold dishes"
  ],
  "authorEn": "HǎoWèi Kitchen",
  "authorZh": "好味厨房",
  "publishDate": "2026-08-31",
  "coverImage": "/images/blog/sesame-paste-guide.webp",
  "relatedRecipeSlugs": [
    "scallion-noodles",
    "smashed-cucumber",
    "cold-wood-ear"
  ],
  "faq": [
    {
      "qEn": "Why does my sesame paste get hard when I add water?",
      "qZh": "为什么芝麻酱加水会变硬？",
      "aEn": "It's the emulsion forming. Keep adding liquid a splash at a time and stirring in one direction — it goes lumpy, then suddenly smooth.",
      "aZh": "那是正在形成乳化。继续少量多次加水、朝一个方向搅——它会先结块，然后突然变顺滑。"
    },
    {
      "qEn": "Can I use tahini instead of Chinese sesame paste?",
      "qZh": "能用中东芝麻酱代替吗？",
      "aEn": "In a pinch, yes, but tahini is made from raw sesame and tastes milder. Toast it lightly in a dry pan first, or add a little toasted sesame oil.",
      "aZh": "应急可以，但 tahini 是生芝麻做的，味道更淡。先在干锅小火炒香，或者加一点香油。"
    },
    {
      "qEn": "Should sesame paste be refrigerated?",
      "qZh": "芝麻酱要冷藏吗？",
      "aEn": "Yes, after opening. The oil will separate and rise — that's normal. Stir it back in each time and it keeps for months.",
      "aZh": "开封后要冷藏。油会分离上浮，这是正常的。每次搅回去，能放好几个月。"
    }
  ]
};


const midAutumnFestivalDishes: BlogPost = {
  id: "mid-autumn-festival-dishes",
  slug: "mid-autumn-festival-dishes",
  titleEn: "Mid-Autumn Festival Dishes: A Chinese Family Menu",
  titleZh: "中秋家宴吃什么：一桌团圆菜",
  excerptEn:
    "What to cook for Mid-Autumn: steamed hairy crab, lotus-root pork-rib soup, steamed taro, a bubbling reunion hot pot and a chilled pomelo sago — the dishes Chinese families put on the table for the harvest moon.",
  excerptZh:
    "中秋家宴怎么安排：清蒸大闸蟹、莲藕排骨汤、剁椒蒸芋头、一锅团圆火锅，再以杨枝甘露收尾——应季而食、团圆不腻的一桌菜。",
  categoryKey: "culture",
  categoryEn: "Culture",
  categoryZh: "文化",
  tags: ["mid-autumn", "festival", "family dinner", "chinese holiday", "mooncake", "reunion"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-08-29",
  coverImage: "/images/og-default.webp",
  relatedRecipeSlugs: [
    "steamed-hairy-crab",
    "hubei-pork-rib-and-lotus-root-soup",
    "duojiao-steamed-taro",
    "reunion-hot-pot",
    "mango-pomelo-yang-zhi-gan-lu",
  ],
  bodyEn: [
    { type: "p", text: "Mid-Autumn is the night families step outside, look up at the fullest moon of the year, and share a table built around the harvest. The menu is lighter than the heavy New Year spread — it leans into what is in season right now: crab, lotus root, taro, and pomelo." },
    { type: "h2", text: "The centerpiece: steamed hairy crab" },
    { type: "p", text: "In late September and October, Shanghai hairy crab (大闸蟹) is at its fattiest. Steamed simply with ginger-vinegar dipping sauce, it is the dish everyone waits for all year. Serve it early while it is hot." },
    { type: "ul", items: [
      "Buy crabs that are lively and heavy for their size",
      "Steam 15–18 minutes; don't overcook or the meat turns chalky",
      "Dip in equal parts aged vinegar, sliced ginger, and a little sugar",
    ] },
    { type: "h2", text: "Warm the table: lotus-root soup & steamed taro" },
    { type: "p", text: "A pork-rib and lotus-root soup is the soothing counterpoint to crab — sweet, milky, and make-ahead friendly. Duojiao (fermented chili) steamed taro brings the heat and the crunch that cuts through the richness." },
    { type: "h2", text: "A bubbling reunion hot pot" },
    { type: "p", text: "If the family is big, a reunion hot pot (团圆火锅) keeps everyone at the table and the cook out of the kitchen. Broth, a few plates of sliced meat, tofu, and greens — everyone cooks their own." },
    { type: "note", text: "Pair the crab with warm ginger tea, not cold drinks — it sits easier on the stomach after a plate of shellfish." },
    { type: "h2", text: "Finish sweet: pomelo sago" },
    { type: "p", text: "Close with mango pomelo sago (杨枝甘露) — chilled, barely sweet, and a relief after the rich savoury courses. It is the one dessert that reads as both festival and summer's last gasp." },
  ],
  bodyZh: [
    { type: "p", text: "中秋是全家抬头看一年里最圆月亮、围着应季食材吃饭的夜晚。这一桌比年夜饭清润：主打当下正当季的蟹、莲藕、芋头、柚子。" },
    { type: "h2", text: "压轴：清蒸大闸蟹" },
    { type: "p", text: "九十月的阳澄湖大闸蟹最肥。简单清蒸，配姜醋蘸料，是所有人等了一年的菜。趁热先上。" },
    { type: "ul", items: [
      "挑手感沉、活力足的蟹",
      "蒸 15–18 分钟，过火肉发柴",
      "蘸料用陈醋、姜丝、少许糖调匀",
    ] },
    { type: "h2", text: "暖桌：莲藕排骨汤 & 剁椒蒸芋头" },
    { type: "p", text: "莲藕排骨汤是蟹的温润搭档——清甜奶白、还能提前炖好；剁椒蒸芋头给一桌添点辣和脆，解腻一流。" },
    { type: "h2", text: "一锅团圆火锅" },
    { type: "p", text: "人多就上团圆火锅，把全家人留在桌边、把掌勺的从厨房解放出来。一锅汤底、几盘肉片豆腐青菜，各自涮各自吃。" },
    { type: "note", text: "蟹配温姜茶，别配冷饮——吃完一桌壳类，胃会舒服很多。" },
    { type: "h2", text: "甜收尾：杨枝甘露" },
    { type: "p", text: "用杨枝甘露收尾——冰镇、微甜，给浓油赤酱之后一口清爽，也是夏天最后的余韵。" },
  ],
};

const nationalDayFamilyFeast: BlogPost = {
  id: "national-day-family-feast",
  slug: "national-day-family-feast",
  titleEn: "National Day Family Feast: 12 Dishes to Feed a Crowd",
  titleZh: "国庆家宴怎么做：12 道硬菜喂饱全家",
  excerptEn:
    "A make-ahead National Day menu: red-cooked pork, sweet-and-sour ribs, a whole steamed fish and crowd-pleasing finger food — feed the whole family without chaining you to the stove all week.",
  excerptZh:
    "国庆七天家宴这么做：红烧肉、糖醋排骨、清蒸整鱼加一桌手指食物——多数硬菜可提前炖好，喂饱全家还不累。",
  categoryKey: "recipes",
  categoryEn: "Recipes",
  categoryZh: "菜谱合集",
  tags: ["national day", "family feast", "chinese holiday", "make ahead", "banquet", "guest-worthy"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-08-29",
  coverImage: "/images/og-default.webp",
  relatedRecipeSlugs: [
    "hongshao-pork",
    "sweet-sour-ribs",
    "steamed-bass",
    "char-siu-pork",
    "kung-pao-chicken",
    "reunion-hot-pot",
  ],
  bodyEn: [
    { type: "p", text: "The National Day week is the longest stretch of family time of the year, which means the kitchen becomes Grand Central. The trick is to build a menu where most of the heavy lifting happens the day before, so you are hosting instead of cooking on the day." },
    { type: "h2", text: "Make-ahead braises (cook once, eat all week)" },
    { type: "p", text: "Red-cooked pork (红烧肉) and sweet-and-sour ribs (糖醋排骨) are better on day two. Braise them ahead, refrigerate, and reheat gently — the fat sets, the flavor deepens, and you free up the stove." },
    { type: "ul", items: [
      "Hong shao pork: cube, blanch, then low braise in soy, wine and rock sugar",
      "Sweet-and-sour ribs: double-fry for crunch, glaze at the end",
      "Both improve after a night in the fridge",
    ] },
    { type: "h2", text: "The lucky centerpiece: a whole steamed fish" },
    { type: "p", text: "A whole steamed fish (清蒸鱼) is non-negotiable for a holiday table — the word for fish (鱼) sounds like surplus (余). Steam it fresh on the day; it takes 8–10 minutes and looks impressive with a hot-oil pour-over." },
    { type: "h2", text: "Finger food that disappears" },
    { type: "p", text: "Char siu (叉烧) and kung pao chicken (宫保鸡丁) are the dishes that vanish first at a gathering. Make the char siu the day before and slice it cold; kung pao comes together in one wok right before eating." },
    { type: "note", text: "A reunion hot pot (团圆火锅) turns the feast into a help-yourself buffet — perfect when relatives drop by unannounced during the holiday." },
    { type: "h2", text: "Close the loop" },
    { type: "p", text: "End with something cold and light: a chilled pomelo sago or a plate of white-boiled shrimp. After a week of braises, the table wants a reset." },
  ],
  bodyZh: [
    { type: "p", text: "国庆这一周是全年和家人相处最长的一段时间，厨房也成了全家枢纽。诀窍是让大部分重活在前一天完成，当天你是在招待而不是在掌勺。" },
    { type: "h2", text: "提前炖好的硬菜（做一次，吃一周）" },
    { type: "p", text: "红烧肉和糖醋排骨都是第二天更好吃。提前炖好放冰箱，吃时小火回热——油脂凝住、味道更沉，灶台也空出来。" },
    { type: "ul", items: [
      "红烧肉：切块焯水，再用酱油料酒冰糖小火慢炖",
      "糖醋排骨：复炸取脆，最后挂汁",
      "两道放过夜都更入味",
    ] },
    { type: "h2", text: "吉祥压轴：一条清蒸整鱼" },
    { type: "p", text: "清蒸整鱼是节桌标配——「鱼」谐音「余」。当天现蒸，8–10 分钟，热油一泼就好看又吉利。" },
    { type: "h2", text: "一上桌就光的手指食物" },
    { type: "p", text: "叉烧和宫保鸡丁是聚会里最先空的菜。叉烧前一天做好冷藏切冷盘；宫保鸡丁临吃前一锅出。" },
    { type: "note", text: "团圆火锅把家宴变成自取buffet——假期亲戚临时串门也接得住。" },
    { type: "h2", text: "收个尾" },
    { type: "p", text: "用冰镇杨枝甘露或一盘白灼虾收尾。连吃一周红烧后，桌上需要一点清口。" },
  ],
};


const miseEnPlaceBatchPrep: BlogPost = {
  id: "mise-en-place-batch-prep-chinese-style",
  slug: "mise-en-place-batch-prep-chinese-style",
  titleEn: "Mise en Place: Batch-Prep Chinese Style",
  titleZh: "备菜（mise），下锅前都切好",
  excerptEn: "Mise en place is the habit that makes Chinese home cooking fast: prep everything before the wok gets hot. Here's how to batch-prep a week of dinners the Chinese way.",
  excerptZh: "备菜（mise）是让中式家常菜变快的习惯：锅热之前把所有料切好配好。这篇讲怎么用中式方法批量备好一周的晚饭。",
  bodyEn: [
    { type: "p", text: "The French call it mise en place; Chinese home cooks just call it 备菜. Before the wok is hot, every vegetable is sliced, every sauce is mixed, and every plate is within arm's reach. If you want to make chinese meal prep actually stick, the trick isn't a gadget, it's a sequence: do the dull knife work once, then the fast part becomes easy." },
    { type: "h2", text: "What mise en place buys you" },
    { type: "p", text: "Stir-frying moves fast. Once the oil is shimmering you have seconds, not minutes, to add aromatics. A proper chinese meal prep session means the garlic is minced, the ginger is julienned, and the sauce is already in a bowl. You stop scrambling and start cooking." },
    { type: "h2", text: "The Chinese prep list" },
    { type: "ul", items: [
      "Aromatics first: scallion, ginger, garlic, sliced and stored separately",
      "Sauces pre-mixed: soy, vinegar, wine, and cornstarch slurry in small bowls",
      "Proteins velveted and marinated ahead of time",
      "Hard vegetables blanched so they finish with the quick ones",
    ] },
    { type: "h2", text: "Batch-prep a week of dinners" },
    { type: "p", text: "Pick three sauces you rotate: a ginger-scallion base, a red-cooking base, and a hot-garlic base. Prep the aromatics for all three in one session, then each weeknight is a ten-minute cook. This is the chinese meal prep loop that keeps the wok in heavy rotation without repeating a dish." },
    { type: "note", text: "Prep aromatics on Sunday, but velvet proteins the night you cook, not three days before, or the texture slips." },
    { type: "h2", text: "Tools that earn their counter space" },
    { type: "ul", items: [
      "A heavy cleaver for slice, shred, and smash",
      "Stackable prep bowls so nothing touches until it hits the wok",
      "A small sauce bowl set for pre-mixed seasonings",
    ] },
    { type: "h2", text: "About HǎoWèi" },
    { type: "p", text: "HǎoWèi Kitchen publishes bilingual recipes and technique guides that fit this prep habit. Browse the full index at haoweirecipes.com, read more on the blog, or jump straight to a weeknight dish like mapo tofu, kung pao chicken, or scallion pancakes." },
  ],
  bodyZh: [
    { type: "p", text: "法国人叫它 mise en place，中国家常厨师只叫它「备菜」。锅热之前，菜切好、酱调好、盘摆到手边。想让中式备餐真正坚持下去，秘诀不是某件工具，而是一套顺序：先把枯燥的刀工一次做完，后面的快炒就轻松了。" },
    { type: "h2", text: "备菜给你带来什么" },
    { type: "p", text: "炒菜节奏快。油一冒烟，你只有几秒而不是几分钟去下料。一次到位的中式备餐，意味着蒜剁好、姜切丝、酱已经在碗里。你不再手忙脚乱，而是从容开火。" },
    { type: "h2", text: "中式备菜清单" },
    { type: "ul", items: [
      "先处理香辛料：葱、姜、蒜分别切好分装",
      "酱汁提前调：生抽、醋、料酒、水淀粉分小碗备好",
      "肉类提前上浆腌制",
      "难熟的菜先焯，好和快熟的同步出锅",
    ] },
    { type: "h2", text: "批量备好一周晚饭" },
    { type: "p", text: "准备三种轮换酱底：葱油底、红烧底、蒜辣底。一次把三者的香辛料备齐，每个工作日晚上就是十分钟出锅。这就是让炒锅高频使用又不重样的中式备餐循环。" },
    { type: "note", text: "香辛料周日备，但肉类下锅当晚再上浆，别提前三天，否则口感会塌。" },
    { type: "h2", text: "值得占台面的工具" },
    { type: "ul", items: [
      "一把厚实砍刀，切片、切丝、拍蒜都顺手",
      "可叠放备菜碗，下锅前各料不串味",
      "一小套酱料碗，调好的味料随取随用",
    ] },
    { type: "h2", text: "关于好味厨房" },
    { type: "p", text: "好味厨房出品双语菜谱与技法指南，正好契合这种备菜习惯。完整索引请看 haoweirecipes.com，更多内容在博客，或直接跳到工作日晚餐：麻婆豆腐、宫保鸡丁、葱油饼。" },
  ],
  categoryKey: "technique",
  categoryEn: "Technique",
  categoryZh: "技法",
  tags: ["mise en place", "chinese meal prep", "备菜", "stir fry prep", "chinese cooking technique"],
  authorEn: "HǎoWèi Kitchen",
  authorZh: "好味厨房",
  publishDate: "2026-09-02",
  coverImage: "/images/blog/light-vs-dark-soy-sauce.png",
  relatedRecipeSlugs: ["mapo-tofu", "kung-pao-chicken", "scallion-pancakes"],
  faq: [
    {
      qEn: "Is mise en place necessary for Chinese cooking?",
      qZh: "中式炒菜必须备菜吗？",
      aEn: "Not for every dish, but for stir-fries it changes everything. Prepping ahead turns a stressful scramble into a calm ten-minute cook.",
      aZh: "不是每道菜都要，但炒菜差别巨大。提前备好，手忙脚乱就变成从容的十分钟出锅。",
    },
    {
      qEn: "How far ahead can I prep aromatics?",
      qZh: "香辛料能提前备多久？",
      aEn: "Minced scallion, ginger, and garlic keep well for two to three days in the fridge if stored separately and sealed.",
      aZh: "葱、姜、蒜剁好后分装密封，冰箱里放两三天没问题。",
    },
  ],
};

export const blogPosts: BlogPost[] = [
  miseEnPlaceBatchPrep,
  {
    "id": "hong-shao-rou-braised-pork",
    "slug": "hong-shao-rou-braised-pork",
    "titleEn": "How to Make Perfect Hong Shao Rou (Braised Pork)",
    "titleZh": "如何做出完美的红烧肉",
    "excerptEn": "A step-by-step guide to making authentic Chinese braised pork belly with caramelized sugar color.",
    "excerptZh": "一步步教你制作正宗中式红烧肉，包括糖色炒制技巧。",
    "bodyEn": [{"type": "h2", "text": "Introduction"}, {"type": "p", "text": "Hong Shao Rou is one of the most iconic dishes in Chinese cuisine. The key is mastering the caramelized sugar color (糖色) and slow-cooking technique."}],
    "bodyZh": [{"type": "h2", "text": "简介"}, {"type": "p", "text": "红烧肉是中国最具代表性的菜肴之一。关键在于掌握糖色炒制和慢炖技巧。"}],
    "categoryKey": "main-dish",
    "categoryEn": "Main Dish",
    "categoryZh": "主菜",
    "tags": ["pork", "braised", "chinese-classic"],
    "authorEn": "Chef Wei",
    "authorZh": "魏厨师",
    "publishDate": "2026-08-31",
    "coverImage": "/images/recipes/hong-shao-rou.webp",
    "relatedRecipeSlugs": [],
    "faq": []
  },
  oysterSauceGuide, hoisinVsSweetBeanSauce, homemadeChiliOil, blackVinegarZhenjiangVsShanxi, shaoxingWineBuyingGuide, firmVsSoftTofu, fermentedBeanCurdFuru, woodEarFungusGuide, sesamePasteGuide, condimentSubstitutions, doubanjiang101, marinatingMeat, tenSichuan, westernPantry, lightVsDarkSoy, makingCaramelSugarColor, driedChilies, tofuTypes, chineseNoodlesBuyersGuide, chineseRiceTypes, sesameOilUses, coldNoodleSauceRecipe, vinegarInChineseCooking, midAutumnFestivalDishes, nationalDayFamilyFeast];
 (blog: add day30 mise-en-place-batch-prep-chinese-style)
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
