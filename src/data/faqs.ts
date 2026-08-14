import type { FAQ } from "@/lib/types";

/**
 * FAQ 规则问答库（R-05 AI 交互式追问 — 规则版）
 * 匹配策略：关键词权重匹配 → 返回最相关 FAQ；未命中 → 诚实"不确定"+引导。
 * 每条带 source（来源标注）与 confidence（信任要素：AI 边界诚实）。
 * v1.1 多语言：英文为主，中文增量字段（questionZh/answerZh）。
 */
export const faqs: FAQ[] = [
  /* ========== 技法 technique ========== */
  {
    id: "faq-why-low-heat",
    category: "technique",
    question: "Why do you cook the aromatics (garlic/ginger) first on low heat?",
    questionZh: "为什么先用小火炒香料（蒜/姜）？",
    keywords: ["why low heat", "why small fire", "aromatics", "garlic first", "ginger first", "炒香料", "为什么小火", "小火"],
    answer:
      "Aromatics contain oils and sugars that turn bitter if scorched. Gentle heat (low-medium) lets garlic and ginger release their fragrance without browning too fast. If the pan is too hot, garlic goes bitter within seconds — that's why we always add aromatics first, before the main ingredients.",
    answerZh:
      "香料含有油脂和糖分，一旦焦糊就会发苦。温和的火力（中小火）能让蒜姜充分释放香气而不过快上色。锅太热的话，蒜几秒钟就会变苦——所以一定要在主食材之前先下香料。",
    source: "Chinese Cooking Demystified technique library",
    confidence: "high",
  },
  {
    id: "faq-what-is-velveting",
    category: "technique",
    question: "What is velveting and why do it?",
    questionZh: "什么是上浆？为什么要上浆？",
    keywords: ["velveting", "velvet", "cornstarch marinade", "silky meat", "tender beef", "上浆", "滑嫩"],
    answer:
      "Velveting = coating meat in cornstarch (sometimes egg white + a splash of wine/soy) before cooking. The starch forms a protective layer that seals in juices and prevents the meat from drying out at high heat. This is the secret to restaurant-smooth beef in dishes like beef & broccoli. At home: 1 tbsp cornstarch + 1 tbsp water (or soy/wine) per 250 g meat, rest 10 min, then stir-fry.",
    answerZh:
      "上浆 = 烹饪前用淀粉（有时加蛋清和少许酒/酱油）裹住肉类。淀粉形成保护层，锁住肉汁，防止高温下变干。这是西兰花炒牛肉等菜肴中牛肉嫩滑如餐厅的关键。家常做法：每 250 克肉用 1 汤匙淀粉 + 1 汤匙水（或酱油/酒），腌制 10 分钟后再炒。",
    source: "HǎoWèi technique guide",
    confidence: "high",
  },
  {
    id: "faq-wok-hei",
    category: "technique",
    question: "My wok doesn't give that smoky restaurant taste. What is wok hei?",
    questionZh: "我的锅炒不出餐厅那种锅气。什么是镬气？",
    keywords: ["wok hei", "smoky", "restaurant taste", "char", "镬气"],
    answer:
      "Wok hei ('breath of the wok') is the smoky, slightly charred aroma from ultra-high heat — typically 30,000+ BTU burners that home stoves can't reach. You don't need to chase it: on a home stove, preheat the wok until a water droplet sizzles instantly, work in small batches (don't overcrowd), and let ingredients sear before stirring. That gets you 80% of the way.",
    answerZh:
      "镬气（wok hei）是超高火力带来的焦香锅气——通常需要 3 万 BTU 以上的炉头，家用灶达不到。不必强求：家用灶上把锅烧到水珠滴下瞬间蒸发，分小批量下料（不要堆太满），先让食材煎出焦面再翻动——这就能达到 80% 的效果。",
    source: "Chinese Cooking Demystified",
    confidence: "high",
  },
  {
    id: "faq-blanching",
    category: "technique",
    question: "Why blanch vegetables before stir-frying?",
    questionZh: "炒菜前为什么要焯水？",
    keywords: ["blanch", "blanching", "precook", "parboil", "焯水", "汆烫"],
    answer:
      "Blanching (30-90 seconds in boiling salted water, then shocking in cold water) sets the bright color, partially cooks dense vegetables (broccoli, gai lan), and removes bitterness. It guarantees a crisp-tender result even if your wok isn't screaming hot.",
    answerZh:
      "焯水（沸盐水 30-90 秒，再过冷水）能锁住鲜亮色泽，让质地紧密的蔬菜（西兰花、芥兰）半熟，并去除苦味。即使锅温不够猛，也能保证脆嫩的口感。",
    source: "HǎoWèi technique guide",
    confidence: "high",
  },

  /* ========== 食材 ingredient ========== */
  {
    id: "faq-light-vs-dark-soy",
    category: "ingredient",
    question: "What's the difference between light and dark soy sauce?",
    questionZh: "生抽和老抽有什么区别？",
    keywords: ["light soy", "dark soy", "soy sauce difference", "生抽", "老抽"],
    answer:
      "Light soy (生抽) is the everyday salty seasoning — thin and salty, used in most recipes. Dark soy (老抽) is thicker, darker, slightly sweet, and used mostly for color (braises, fried rice). If you only buy one, get light soy. For dark soy's color: 1 tbsp light soy + a pinch of sugar + a few drops of molasses.",
    answerZh:
      "生抽是日常咸味调味——质地稀、咸味足，大多数菜谱都用它。老抽更稠、颜色更深、微甜，主要用于上色（红烧、炒饭）。如果只买一瓶，选生抽。想要老抽的颜色：1 汤匙生抽 + 一小撮糖 + 几滴糖蜜。",
    source: "HǎoWèi pantry guide",
    confidence: "high",
  },
  {
    id: "faq-shaoxing-sub",
    category: "ingredient",
    question: "Can I skip Shaoxing wine? What's the substitute?",
    questionZh: "可以不放料酒吗？用什么替代？",
    keywords: ["shaoxing", "cooking wine", "sherry", "料酒", "绍兴", "substitute wine", "no wine"],
    answer:
      "Dry sherry is the closest 1:1 swap (fidelity ~80%). No sherry? Use a splash of white wine plus a little water, or just skip it and add a tiny extra pinch of sugar — the wine's job is depth and removing meat's gamey notes, and a good marinade covers most of it.",
    answerZh:
      "干雪利酒是最接近的 1:1 替代（还原度约 80%）。没有雪利酒？用少许白葡萄酒加水，或者干脆不放、额外加一小撮糖——料酒的作用是增香去腥，好的腌料能覆盖大部分需求。",
    source: "HǎoWèi substitution engine",
    confidence: "high",
  },
  {
    id: "faq-sichuan-pepper-sub",
    category: "ingredient",
    question: "I can't find Sichuan peppercorns. What do I use?",
    questionZh: "买不到花椒怎么办？",
    keywords: ["sichuan peppercorn", "花椒", "numbing", "ma la", "substitute sichuan"],
    answer:
      "Honestly, there is no true substitute — the numbing (má) sensation is unique. Best local approximation: 1/2 tsp black pepper + a little citrus zest for warmth and brightness. If you cook Sichuan food regularly, buy them online; they keep for months in an airtight jar.",
    answerZh:
      "说实话，麻感无可替代——这是花椒独有的。本地超市最接近的组合：1/2 茶匙黑胡椒 + 少许柑橘皮屑，提供暖辣和明亮感。如果常做川菜，建议网购花椒；密封罐可存放数月。",
    source: "HǎoWèi substitution engine",
    confidence: "medium",
  },
  {
    id: "faq-tofu-types",
    category: "ingredient",
    question: "What type of tofu should I use?",
    questionZh: "应该用哪种豆腐？",
    keywords: ["tofu type", "silken tofu", "firm tofu", "which tofu", "豆腐"],
    answer:
      "Silken/soft tofu (嫩豆腐) for mapo tofu and soups — silky, falls apart gently. Firm/extra-firm (老豆腐) for stir-fries, braises, and anything you want to keep its shape. If the recipe doesn't say, firm is the safe default for stir-fries.",
    answerZh:
      "麻婆豆腐和汤用嫩豆腐——滑嫩、易碎。炒菜、红烧和需要保持形状的菜肴用老豆腐（firm/extra-firm）。菜谱没注明时，炒菜用老豆腐最稳妥。",
    source: "HǎoWèi ingredient guide",
    confidence: "high",
  },
  {
    id: "faq-oyster-sauce-vegan",
    category: "ingredient",
    question: "Is there a vegan substitute for oyster sauce?",
    questionZh: "蚝油有纯素替代吗？",
    keywords: ["oyster sauce vegan", "vegetarian oyster", "蚝油 素", "mushroom sauce"],
    answer:
      "Yes — 'mushroom oyster sauce' (often labeled vegetarian/vegan) is sold in most Asian grocers and increasingly in mainstream supermarkets. It behaves 1:1 and adds the same glossy umami. Watch labels if you're also gluten-free; most brands are GF, some aren't.",
    answerZh:
      "有——“菌菇蚝油”（常标注 vegetarian/vegan）在多数亚超和越来越多主流超市有售。可 1:1 使用，带来同样的光泽鲜味。如果你同时需要无麸质，注意看标签：多数品牌无麸质，但并非全部。",
    source: "HǎoWèi substitution engine",
    confidence: "high",
  },

  /* ========== 口味 flavor ========== */
  {
    id: "faq-too-salty",
    category: "flavor",
    question: "My dish came out too salty. Can I fix it?",
    questionZh: "菜太咸了怎么办？能补救吗？",
    keywords: ["too salty", "salty fix", "reduce salt", "咸了", "太咸"],
    answer:
      "Quick fixes: add a squeeze of lemon/vinegar (acidity masks salt), stir in a few potato chunks or rice (they absorb salt — remove before serving), or bulk it out with more rice/vegetables. Next time: add soy sauce in two stages, taste in the middle, and remember light soy + a pinch of salt is often enough.",
    answerZh:
      "快速补救：挤点柠檬汁/醋（酸味掩盖咸味）、放入几块土豆或米饭吸盐（上桌前取出）、或加更多米饭/蔬菜稀释。下次：分两次加酱油、中途尝味，记住生抽 + 一小撮盐通常就够了。",
    source: "HǎoWèi cooking science",
    confidence: "high",
  },
  {
    id: "faq-too-spicy",
    category: "flavor",
    question: "It's too spicy. How do I tone it down?",
    questionZh: "太辣了，怎么减辣？",
    keywords: ["too spicy", "reduce spicy", "less spicy", "太辣", "减辣"],
    answer:
      "Add a dairy element (a swirl of yogurt, milk, or a spoon of peanut butter) — dairy fat binds the capsaicin. Sugar or honey also helps balance heat. For next time: remove chili seeds (they hold most heat) or halve the dried chilies and add chili oil at the table instead.",
    answerZh:
      "加入乳制品（一勺酸奶、牛奶或花生酱）——乳脂能包裹辣椒素。糖或蜂蜜也能平衡辣味。下次：去掉辣椒籽（辣味大头）、干辣椒减半，改在餐桌上自己加辣椒油。",
    source: "HǎoWèi flavor guide",
    confidence: "high",
  },
  {
    id: "faq-taste-authentic",
    category: "flavor",
    question: "Why doesn't my stir-fry taste like the restaurant?",
    questionZh: "为什么我炒的菜没有餐馆好吃？",
    keywords: ["not authentic", "taste different", "restaurant", "why not taste", "不正宗", "味道不对"],
    answer:
      "Three usual culprits: (1) heat — the pan isn't hot enough, work in smaller batches; (2) finishing oil — restaurants add a teaspoon of sesame oil or chili oil at the very end for aroma; (3) seasoning balance — a pinch of sugar rounds out salty/sour/spicy, and that 'something is missing' is often just 1/4 tsp sugar or a splash of vinegar.",
    answerZh:
      "三个常见原因：(1) 火候——锅不够热，要分小批量下料；(2) 出锅油——餐馆会在最后加一茶匙香油或辣椒油提香；(3) 调味平衡——一小撮糖能融合咸酸辣，那种“少了点什么”的感觉，往往就是 1/4 茶匙糖或一点醋。",
    source: "HǎoWèi cooking science",
    confidence: "medium",
  },

  /* ========== 设备 equipment ========== */
  {
    id: "faq-air-fryer",
    category: "equipment",
    question: "Can I use an air fryer for this recipe?",
    questionZh: "这道菜能用空气炸锅吗？",
    keywords: ["air fryer", "airfryer", "空气炸锅"],
    answer:
      "Air fryers work best for dry, breaded, or roasted items (crispy wings, roast pork belly, golden tofu). They don't replicate wok stir-frying — for stir-fries, stick to the pan. For our roasted/air-fryer-adaptable recipes, we note the conversion (temp: reduce ~15°C / 25°F, time: roughly 80% of oven).",
    answerZh:
      "空气炸锅最适合干爽、裹粉或烘烤类食物（脆皮鸡翅、烤五花肉、金黄豆腐）。它无法模拟炒锅爆炒——炒菜还是用锅。对于可改用空气炸锅的烤制类菜谱，我们会标注换算（温度降低约 15°C/25°F，时间为烤箱的约 80%）。",
    source: "HǎoWèi equipment guide",
    confidence: "medium",
  },
  {
    id: "faq-no-wok",
    category: "equipment",
    question: "I don't have a wok. What pan should I use?",
    questionZh: "没有炒锅，用什么锅？",
    keywords: ["no wok", "without wok", "what pan", "pan substitute", "没有锅", "炒锅"],
    answer:
      "A large stainless or carbon-steel skillet/frying pan works fine — the key is a wide cooking surface and high heat. Non-stick is fine too, just don't preheat it empty. Whatever the pan, preheat thoroughly and work in small batches.",
    answerZh:
      "大号不锈钢或碳钢平底锅完全可用——关键是受热面大、火力足。不粘锅也行，只是别空锅干烧。无论什么锅，充分预热、分小批量下料。",
    source: "HǎoWèi equipment guide",
    confidence: "high",
  },

  /* ========== 饮食 diet ========== */
  {
    id: "faq-gluten-free",
    category: "diet",
    question: "Is this recipe gluten-free? What should I watch out for?",
    questionZh: "这道菜无麸质吗？需要注意什么？",
    keywords: ["gluten free", "gluten", "无麸质", "celiac"],
    answer:
      "Hidden gluten in Chinese cooking is everywhere: regular soy sauce, oyster sauce, hoisin, and doubanjiang all usually contain wheat. Swap to tamari (GF soy), GF oyster/mushroom sauce, and check labels. Beware shared woks at restaurants and malt vinegar. Our recipes flag 'gluten-free' only when every ingredient is safe.",
    answerZh:
      "中餐里的隐形麸质无处不在：普通酱油、蚝油、海鲜酱、豆瓣酱通常都含小麦。换成无麸质酱油（tamari）、无麸质蚝油/菌菇酱，并检查标签。注意餐馆共用炒锅和麦芽醋。我们的菜谱只有在所有食材都安全时才会标注“无麸质”。",
    source: "HǎoWèi diet guide",
    confidence: "high",
  },
  {
    id: "faq-vegetarian",
    category: "diet",
    question: "How do I make this vegetarian/vegan?",
    questionZh: "怎么把这道菜做成素食/纯素？",
    keywords: ["vegetarian", "vegan", "no meat", "素食", "不放肉"],
    answer:
      "Swap meat for tofu, mushrooms (dried shiitake for umami), or seitan. Replace oyster sauce with mushroom sauce, chicken stock with veg stock, and watch for fish sauce and shrimp in sauces. Doubanjiang is vegetarian but check brands. Most of our recipes include a 'make it veg' note in the tips.",
    answerZh:
      "用豆腐、菌菇（干香菇提鲜）或面筋代替肉类。蚝油换成菌菇酱，鸡汤换成素高汤，注意酱料里的鱼露和虾米。豆瓣酱是素的，但要核对品牌。我们多数菜谱的贴士里都有“素食版”提示。",
    source: "HǎoWèi diet guide",
    confidence: "high",
  },
  {
    id: "faq-low-sodium",
    category: "diet",
    question: "Can I reduce the salt/soy in this recipe?",
    questionZh: "这道菜可以减盐/减酱油吗？",
    keywords: ["low sodium", "reduce salt", "low salt", "低盐", "低钠", "less salt"],
    answer:
      "Yes — soy sauce is the main sodium source. Use light soy at 2/3 amount and finish with salt only to taste. Rinse canned/doubanjiang components if possible. Note: reducing soy also reduces color; a drop of dark soy or a pinch of sugar can restore depth without salt.",
    answerZh:
      "可以——酱油是主要钠来源。生抽减至 2/3 用量，最后只按口味补盐。罐头/豆瓣酱成分尽量冲洗。注意：减酱油也会减颜色；一滴老抽或一小撮糖可以在不加盐的情况下补回色泽与层次。",
    source: "HǎoWèi diet guide",
    confidence: "high",
  },

  /* ========== 通用 general ========== */
  {
    id: "faq-30min",
    category: "general",
    question: "I only have 30 minutes. Which recipes should I pick?",
    questionZh: "我只有 30 分钟，选哪些菜谱？",
    keywords: ["30 minutes", "quick", "weeknight", "fast", "半小时", "快手", "30min"],
    answer:
      "Look for the 'Quick' filter (≤30 min) — tomato & egg, egg fried rice, scallion pancakes, beef & broccoli, and mapo tofu (if you have doubanjiang) all fit. Prep tip: mise-en-place everything first; the actual cooking is usually under 10 minutes.",
    answerZh:
      "用“快手”（≤30 分钟）筛选——番茄炒蛋、蛋炒饭、葱油饼、西兰花炒牛肉、麻婆豆腐（有豆瓣酱的话）都符合。备菜技巧：先把所有材料备齐；实际下锅通常不到 10 分钟。",
    source: "HǎoWèi recipe collection",
    confidence: "high",
  },
  {
    id: "faq-first-time",
    category: "general",
    question: "I've never cooked Chinese food. Where do I start?",
    questionZh: "我从没做过中餐，从哪里开始？",
    keywords: ["first time", "beginner", "start", "new to", "第一次", "新手"],
    answer:
      "Start with the 'Easy' difficulty filter. Our recommended first three: Tomato & Egg (2 ingredients, foolproof), Egg Fried Rice (forgiving, uses leftover rice), and Scallion Pancakes (impressive but easy). Read the state notes (they tell you exactly what to look for) and gather your pantry first — the substitution engine tells you what to buy where.",
    answerZh:
      "先用“简单”难度筛选。我们推荐前三道：番茄炒蛋（两种食材，不易失败）、蛋炒饭（容错高，用剩饭）、葱油饼（惊艳但简单）。认真读状态说明（它会告诉你每一步该看什么），先备齐调料——替换引擎会告诉你在哪里买什么。",
    source: "HǎoWèi beginner path",
    confidence: "high",
  },
];

/** FAQ 匹配引擎（规则版 R-05）：关键词命中 + 简单评分 */
export function matchFAQ(query: string): { faq: FAQ; score: number } | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  let best: { faq: FAQ; score: number } | null = null;
  for (const faq of faqs) {
    let score = 0;
    // 完整问题匹配（用户问题命中 FAQ 问题，中英文都算）
    if (faq.question.toLowerCase().includes(q)) score += 10;
    if (faq.questionZh && faq.questionZh.toLowerCase().includes(q)) score += 10;
    // 关键词匹配
    for (const kw of faq.keywords) {
      if (q.includes(kw.toLowerCase())) score += 3;
    }
    // 答案中提到的相关词兜底
    if (score > 0 && (!best || score > best.score)) {
      best = { faq, score };
    }
  }
  // 阈值：至少命中 1 个关键词
  return best && best.score >= 3 ? best : null;
}
