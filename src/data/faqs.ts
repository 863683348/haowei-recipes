import type { FAQ } from "@/lib/types";

/**
 * FAQ 规则问答库（R-05 AI 交互式追问 — 规则版）
 * 匹配策略：关键词权重匹配 → 返回最相关 FAQ；未命中 → 诚实"不确定"+引导。
 * 每条带 source（来源标注）与 confidence（信任要素：AI 边界诚实）。
 */
export const faqs: FAQ[] = [
  /* ========== 技法 technique ========== */
  {
    id: "faq-why-low-heat",
    category: "technique",
    question: "Why do you cook the aromatics (garlic/ginger) first on low heat?",
    keywords: ["why low heat", "why small fire", "aromatics", "garlic first", "ginger first", "炒香料", "为什么小火", "小火"],
    answer:
      "Aromatics contain oils and sugars that turn bitter if scorched. Gentle heat (low-medium) lets garlic and ginger release their fragrance without browning too fast. If the pan is too hot, garlic goes bitter within seconds — that's why we always add aromatics first, before the main ingredients.",
    source: "Chinese Cooking Demystified technique library",
    confidence: "high",
  },
  {
    id: "faq-what-is-velveting",
    category: "technique",
    question: "What is velveting and why do it?",
    keywords: ["velveting", "velvet", "cornstarch marinade", "silky meat", "tender beef", "上浆", "滑嫩"],
    answer:
      "Velveting = coating meat in cornstarch (sometimes egg white + a splash of wine/soy) before cooking. The starch forms a protective layer that seals in juices and prevents the meat from drying out at high heat. This is the secret to restaurant-smooth beef in dishes like beef & broccoli. At home: 1 tbsp cornstarch + 1 tbsp water (or soy/wine) per 250 g meat, rest 10 min, then stir-fry.",
    source: "HǎoWèi technique guide",
    confidence: "high",
  },
  {
    id: "faq-wok-hei",
    category: "technique",
    question: "My wok doesn't give that smoky restaurant taste. What is wok hei?",
    keywords: ["wok hei", "smoky", "restaurant taste", "char", "镬气"],
    answer:
      "Wok hei ('breath of the wok') is the smoky, slightly charred aroma from ultra-high heat — typically 30,000+ BTU burners that home stoves can't reach. You don't need to chase it: on a home stove, preheat the wok until a water droplet sizzles instantly, work in small batches (don't overcrowd), and let ingredients sear before stirring. That gets you 80% of the way.",
    source: "Chinese Cooking Demystified",
    confidence: "high",
  },
  {
    id: "faq-blanching",
    category: "technique",
    question: "Why blanch vegetables before stir-frying?",
    keywords: ["blanch", "blanching", "precook", "parboil", "焯水", "汆烫"],
    answer:
      "Blanching (30-90 seconds in boiling salted water, then shocking in cold water) sets the bright color, partially cooks dense vegetables (broccoli, gai lan), and removes bitterness. It guarantees a crisp-tender result even if your wok isn't screaming hot.",
    source: "HǎoWèi technique guide",
    confidence: "high",
  },

  /* ========== 食材 ingredient ========== */
  {
    id: "faq-light-vs-dark-soy",
    category: "ingredient",
    question: "What's the difference between light and dark soy sauce?",
    keywords: ["light soy", "dark soy", "soy sauce difference", "生抽", "老抽"],
    answer:
      "Light soy (生抽) is the everyday salty seasoning — thin and salty, used in most recipes. Dark soy (老抽) is thicker, darker, slightly sweet, and used mostly for color (braises, fried rice). If you only buy one, get light soy. For dark soy's color: 1 tbsp light soy + a pinch of sugar + a few drops of molasses.",
    source: "HǎoWèi pantry guide",
    confidence: "high",
  },
  {
    id: "faq-shaoxing-sub",
    category: "ingredient",
    question: "Can I skip Shaoxing wine? What's the substitute?",
    keywords: ["shaoxing", "cooking wine", "sherry", "料酒", "绍兴", "substitute wine", "no wine"],
    answer:
      "Dry sherry is the closest 1:1 swap (fidelity ~80%). No sherry? Use a splash of white wine plus a little water, or just skip it and add a tiny extra pinch of sugar — the wine's job is depth and removing meat's gamey notes, and a good marinade covers most of it.",
    source: "HǎoWèi substitution engine",
    confidence: "high",
  },
  {
    id: "faq-sichuan-pepper-sub",
    category: "ingredient",
    question: "I can't find Sichuan peppercorns. What do I use?",
    keywords: ["sichuan peppercorn", "花椒", "numbing", "ma la", "substitute sichuan"],
    answer:
      "Honestly, there is no true substitute — the numbing (má) sensation is unique. Best local approximation: 1/2 tsp black pepper + a little citrus zest for warmth and brightness. If you cook Sichuan food regularly, buy them online; they keep for months in an airtight jar.",
    source: "HǎoWèi substitution engine",
    confidence: "medium",
  },
  {
    id: "faq-tofu-types",
    category: "ingredient",
    question: "What type of tofu should I use?",
    keywords: ["tofu type", "silken tofu", "firm tofu", "which tofu", "豆腐"],
    answer:
      "Silken/soft tofu (嫩豆腐) for mapo tofu and soups — silky, falls apart gently. Firm/extra-firm (老豆腐) for stir-fries, braises, and anything you want to keep its shape. If the recipe doesn't say, firm is the safe default for stir-fries.",
    source: "HǎoWèi ingredient guide",
    confidence: "high",
  },
  {
    id: "faq-oyster-sauce-vegan",
    category: "ingredient",
    question: "Is there a vegan substitute for oyster sauce?",
    keywords: ["oyster sauce vegan", "vegetarian oyster", "蚝油 素", "mushroom sauce"],
    answer:
      "Yes — 'mushroom oyster sauce' (often labeled vegetarian/vegan) is sold in most Asian grocers and increasingly in mainstream supermarkets. It behaves 1:1 and adds the same glossy umami. Watch labels if you're also gluten-free; most brands are GF, some aren't.",
    source: "HǎoWèi substitution engine",
    confidence: "high",
  },

  /* ========== 口味 flavor ========== */
  {
    id: "faq-too-salty",
    category: "flavor",
    question: "My dish came out too salty. Can I fix it?",
    keywords: ["too salty", "salty fix", "reduce salt", "咸了", "太咸"],
    answer:
      "Quick fixes: add a squeeze of lemon/vinegar (acidity masks salt), stir in a few potato chunks or rice (they absorb salt — remove before serving), or bulk it out with more rice/vegetables. Next time: add soy sauce in two stages, taste in the middle, and remember light soy + a pinch of salt is often enough.",
    source: "HǎoWèi cooking science",
    confidence: "high",
  },
  {
    id: "faq-too-spicy",
    category: "flavor",
    question: "It's too spicy. How do I tone it down?",
    keywords: ["too spicy", "reduce spicy", "less spicy", "太辣", "减辣"],
    answer:
      "Add a dairy element (a swirl of yogurt, milk, or a spoon of peanut butter) — dairy fat binds the capsaicin. Sugar or honey also helps balance heat. For next time: remove chili seeds (they hold most heat) or halve the dried chilies and add chili oil at the table instead.",
    source: "HǎoWèi flavor guide",
    confidence: "high",
  },
  {
    id: "faq-taste-authentic",
    category: "flavor",
    question: "Why doesn't my stir-fry taste like the restaurant?",
    keywords: ["not authentic", "taste different", "restaurant", "why not taste", "不正宗", "味道不对"],
    answer:
      "Three usual culprits: (1) heat — the pan isn't hot enough, work in smaller batches; (2) finishing oil — restaurants add a teaspoon of sesame oil or chili oil at the very end for aroma; (3) seasoning balance — a pinch of sugar rounds out salty/sour/spicy, and that 'something is missing' is often just 1/4 tsp sugar or a splash of vinegar.",
    source: "HǎoWèi cooking science",
    confidence: "medium",
  },

  /* ========== 设备 equipment ========== */
  {
    id: "faq-air-fryer",
    category: "equipment",
    question: "Can I use an air fryer for this recipe?",
    keywords: ["air fryer", "airfryer", "空气炸锅"],
    answer:
      "Air fryers work best for dry, breaded, or roasted items (crispy wings, roast pork belly, golden tofu). They don't replicate wok stir-frying — for stir-fries, stick to the pan. For our roasted/air-fryer-adaptable recipes, we note the conversion (temp: reduce ~15°C / 25°F, time: roughly 80% of oven).",
    source: "HǎoWèi equipment guide",
    confidence: "medium",
  },
  {
    id: "faq-no-wok",
    category: "equipment",
    question: "I don't have a wok. What pan should I use?",
    keywords: ["no wok", "without wok", "what pan", "pan substitute", "没有锅", "炒锅"],
    answer:
      "A large stainless or carbon-steel skillet/frying pan works fine — the key is a wide cooking surface and high heat. Non-stick is fine too, just don't preheat it empty. Whatever the pan, preheat thoroughly and work in small batches.",
    source: "HǎoWèi equipment guide",
    confidence: "high",
  },

  /* ========== 饮食 diet ========== */
  {
    id: "faq-gluten-free",
    category: "diet",
    question: "Is this recipe gluten-free? What should I watch out for?",
    keywords: ["gluten free", "gluten", "无麸质", "celiac"],
    answer:
      "Hidden gluten in Chinese cooking is everywhere: regular soy sauce, oyster sauce, hoisin, and doubanjiang all usually contain wheat. Swap to tamari (GF soy), GF oyster/mushroom sauce, and check labels. Beware shared woks at restaurants and malt vinegar. Our recipes flag 'gluten-free' only when every ingredient is safe.",
    source: "HǎoWèi diet guide",
    confidence: "high",
  },
  {
    id: "faq-vegetarian",
    category: "diet",
    question: "How do I make this vegetarian/vegan?",
    keywords: ["vegetarian", "vegan", "no meat", "素食", "不放肉"],
    answer:
      "Swap meat for tofu, mushrooms (dried shiitake for umami), or seitan. Replace oyster sauce with mushroom sauce, chicken stock with veg stock, and watch for fish sauce and shrimp in sauces. Doubanjiang is vegetarian but check brands. Most of our recipes include a 'make it veg' note in the tips.",
    source: "HǎoWèi diet guide",
    confidence: "high",
  },
  {
    id: "faq-low-sodium",
    category: "diet",
    question: "Can I reduce the salt/soy in this recipe?",
    keywords: ["low sodium", "reduce salt", "low salt", "低盐", "低钠", "less salt"],
    answer:
      "Yes — soy sauce is the main sodium source. Use light soy at 2/3 amount and finish with salt only to taste. Rinse canned/doubanjiang components if possible. Note: reducing soy also reduces color; a drop of dark soy or a pinch of sugar can restore depth without salt.",
    source: "HǎoWèi diet guide",
    confidence: "high",
  },

  /* ========== 通用 general ========== */
  {
    id: "faq-30min",
    category: "general",
    question: "I only have 30 minutes. Which recipes should I pick?",
    keywords: ["30 minutes", "quick", "weeknight", "fast", "半小时", "快手", "30min"],
    answer:
      "Look for the 'Quick' filter (≤30 min) — tomato & egg, egg fried rice, scallion pancakes, beef & broccoli, and mapo tofu (if you have doubanjiang) all fit. Prep tip: mise-en-place everything first; the actual cooking is usually under 10 minutes.",
    source: "HǎoWèi recipe collection",
    confidence: "high",
  },
  {
    id: "faq-first-time",
    category: "general",
    question: "I've never cooked Chinese food. Where do I start?",
    keywords: ["first time", "beginner", "start", "new to", "第一次", "新手"],
    answer:
      "Start with the 'Easy' difficulty filter. Our recommended first three: Tomato & Egg (2 ingredients, foolproof), Egg Fried Rice (forgiving, uses leftover rice), and Scallion Pancakes (impressive but easy). Read the state notes (they tell you exactly what to look for) and gather your pantry first — the substitution engine tells you what to buy where.",
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
    // 完整问题匹配（用户问题命中 FAQ 问题）
    if (faq.question.toLowerCase().includes(q)) score += 10;
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
