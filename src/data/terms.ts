import type { Term } from "@/lib/types";

/**
 * 中餐术语库（R-01 英中对照系统）
 * 覆盖 P0 菜谱全部术语：生抽/老抽/料酒/蚝油/豆瓣酱/花椒/白胡椒等
 * v1.1 多语言：英文为主，中文增量字段（definitionZh/substituteHintZh）。
 */
export const terms: Term[] = [
  /* ---------- 酱料 sauces ---------- */
  {
    id: "light-soy-sauce",
    zh: "生抽",
    pinyin: "shēng chōu",
    en: "Light soy sauce",
    category: "sauce",
    definition:
      "The everyday salty soy sauce used for seasoning. Thin, salty, and lighter in color than dark soy.",
    definitionZh:
      "日常调味用的咸味酱油。质地稀、咸味足，颜色比老抽浅。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint:
      "Any standard soy sauce (Kikkoman etc.) works 1:1 for cooking; taste before adding extra salt.",
    substituteHintZh:
      "任意普通酱油（如万字等）可按 1:1 用于烹饪；加盐前先尝味。",
  },
  {
    id: "dark-soy-sauce",
    zh: "老抽",
    pinyin: "lǎo chōu",
    en: "Dark soy sauce",
    category: "sauce",
    definition:
      "Thicker, darker, slightly sweet soy sauce used mainly for color (braises, fried rice). Less salty than light soy.",
    definitionZh:
      "质地更稠、颜色更深、微甜的酱油，主要用于上色（红烧、炒饭）。咸度低于生抽。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint:
      "No dark soy? Mix 1 tbsp light soy + a pinch of sugar + few drops of molasses for color.",
    substituteHintZh:
      "没有老抽？用 1 汤匙生抽 + 一小撮糖 + 几滴糖蜜调色。",
  },
  {
    id: "shaoxing-wine",
    zh: "料酒 / 绍兴酒",
    pinyin: "shào xīng jiǔ",
    en: "Shaoxing cooking wine",
    category: "sauce",
    definition:
      "Fermented rice wine from Shaoxing; adds depth and removes gamey notes from meat.",
    definitionZh: "绍兴产的发酵米酒；增香去腥。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint: "Dry sherry is the closest 1:1 swap (fidelity ~80%).",
    substituteHintZh: "干雪利酒是最接近的 1:1 替代（还原度约 80%）。",
  },
  {
    id: "oyster-sauce",
    zh: "蚝油",
    pinyin: "háo yóu",
    en: "Oyster sauce",
    category: "sauce",
    definition:
      "Thick, savory-sweet sauce made from oyster extracts. Signature of Cantonese stir-fries.",
    definitionZh: "以蚝汁制成的浓稠咸甜酱料，是粤式炒菜的标志。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint:
      "Vegetarian: mushroom stir-fry sauce or hoisin + soy mix. Note: most contain gluten & shellfish.",
    substituteHintZh:
      "素食版：菌菇炒酱或海鲜酱+酱油调和。注意：多数含麸质和贝类。",
  },
  {
    id: "doubanjiang",
    zh: "郫县豆瓣酱",
    pinyin: "pí xiàn dòu bàn jiàng",
    en: "Doubanjiang (fermented chili bean paste)",
    category: "sauce",
    definition:
      "Fermented broad-bean & chili paste, the soul of Sichuan cooking (mapo tofu, twice-cooked pork).",
    definitionZh:
      "发酵蚕豆与辣椒制成的酱，是川菜的灵魂（麻婆豆腐、回锅肉）。",
    quantEquivalent: "1 tbsp ≈ 15 g",
    substituteHint:
      "Gochujang + extra chili flakes is a decent stand-in (fidelity ~70%); flavor is sweeter.",
    substituteHintZh:
      "韩式辣酱+辣椒面可作近似替代（还原度约 70%）；风味偏甜。",
  },
  {
    id: "hoisin-sauce",
    zh: "海鲜酱",
    pinyin: "hǎi xiān jiàng",
    en: "Hoisin sauce",
    category: "sauce",
    definition:
      "Sweet, thick barbecue-style sauce (soy, garlic, five-spice). Used in glazes and stir-fries.",
    definitionZh:
      "甜而浓稠的烧烤风味酱（含大豆、蒜、五香粉），用于上釉与炒菜。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
  },
  {
    id: "chinkiang-vinegar",
    zh: "镇江香醋",
    pinyin: "zhèn jiāng xiāng cù",
    en: "Chinkiang (black) vinegar",
    category: "sauce",
    definition:
      "Dark, malty, slightly sweet rice vinegar. Essential for dumpling dips and sweet-sour dishes.",
    definitionZh:
      "色泽深、带麦芽香、微甜的米醋。蘸饺子和糖醋菜的必备。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint: "Balsamic vinegar, thinned with a splash of water (fidelity ~75%).",
    substituteHintZh: "意大利黑醋兑一点水稀释（还原度约 75%）。",
  },
  {
    id: "rice-vinegar",
    zh: "米醋 / 白醋",
    pinyin: "mǐ cù",
    en: "Rice vinegar",
    category: "sauce",
    definition: "Mild, gently sweet vinegar used in dressings and quick pickles.",
    definitionZh: "温和微甜的醋，用于凉拌汁和快手泡菜。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint: "Apple cider vinegar works 1:1 in most dressings.",
    substituteHintZh: "多数凉拌汁可用苹果醋 1:1 替代。",
  },
  {
    id: "sesame-oil",
    zh: "香油 / 芝麻油",
    pinyin: "xiāng yóu",
    en: "Toasted sesame oil",
    category: "sauce",
    definition:
      "Dark, nutty oil from toasted sesame. Used as a finishing flavor, not for frying.",
    definitionZh:
      "由熟芝麻制成的深色坚果香油。用作出锅增香，不用于煎炸。",
    quantEquivalent: "1 tsp ≈ 5 ml",
    substituteHint: "No substitute matches the aroma; skip rather than replace with neutral oil.",
    substituteHintZh: "香气无可替代；宁可不放，也别用食用油代替。",
  },
  {
    id: "chili-oil",
    zh: "辣椒油 / 红油",
    pinyin: "là jiāo yóu",
    en: "Chili oil (red oil)",
    category: "sauce",
    definition: "Chili-infused oil with crispy bits; heat + aroma in Sichuan dishes.",
    definitionZh: "辣椒浸油并带酥脆辣椒碎；川菜中的辣味与香气来源。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint: "DIY: warm oil poured over chili flakes + pinch of five-spice.",
    substituteHintZh: "自制：热油浇在辣椒面上，加一小撮五香粉。",
  },

  /* ---------- 香料 spices ---------- */
  {
    id: "sichuan-peppercorn",
    zh: "花椒",
    pinyin: "huā jiāo",
    en: "Sichuan peppercorn",
    category: "spice",
    definition:
      "Citrusy, numbing spice (má) unique to Sichuan cooking. Not a 'peppercorn' in heat terms.",
    definitionZh:
      "川菜特有的柑橘香、麻味香料。从辣度上说它并不是“胡椒”。",
    quantEquivalent: "1 tsp ≈ 2 g",
    substituteHint:
      "No true substitute for the numbing effect; add a little black pepper for warmth only.",
    substituteHintZh: "麻感无真正替代；最多加点黑胡椒提供暖辣。",
  },
  {
    id: "star-anise",
    zh: "八角",
    pinyin: "bā jiǎo",
    en: "Star anise",
    category: "spice",
    definition: "Licorice-scented spice used in braises and five-spice.",
    definitionZh: "带甘草香气的香料，用于红烧和五香粉。",
    quantEquivalent: "1 star ≈ 1 g",
    substituteHint: "A pinch of five-spice powder can stand in for one star.",
    substituteHintZh: "一小撮五香粉可代替一颗八角。",
  },
  {
    id: "five-spice",
    zh: "五香粉",
    pinyin: "wǔ xiāng fěn",
    en: "Five-spice powder",
    category: "spice",
    definition: "Blend of star anise, cloves, cinnamon, Sichuan pepper, fennel.",
    definitionZh: "八角、丁香、肉桂、花椒、小茴香的混合粉末。",
    quantEquivalent: "1 tsp ≈ 2 g",
    substituteHint: "DIY: equal parts cinnamon, cloves, star anise, fennel, Sichuan pepper.",
    substituteHintZh: "自制：肉桂、丁香、八角、小茴香、花椒等量磨粉。",
  },
  {
    id: "white-pepper",
    zh: "白胡椒粉",
    pinyin: "bái hú jiāo fěn",
    en: "White pepper",
    category: "spice",
    definition: "Earthy, sharp pepper used in soups and stir-fries for depth without black flecks.",
    definitionZh: "土香辛辣的胡椒，用于汤和炒菜增加层次，且不留黑点。",
    quantEquivalent: "1 tsp ≈ 2 g",
    substituteHint: "Black pepper 1:1 (slightly stronger, more floral).",
    substituteHintZh: "黑胡椒 1:1（稍强、更带花香）。",
  },
  {
    id: "chili-flakes",
    zh: "干辣椒段",
    pinyin: "gān là jiāo duàn",
    en: "Dried chili / chili flakes",
    category: "spice",
    definition: "Dried red chilies, whole or crushed; more aroma than fresh heat.",
    definitionZh: "干红辣椒，整只或切碎；香气多于鲜辣。",
    quantEquivalent: "1 dried chili ≈ 0.5 tsp flakes",
  },

  /* ---------- 技法 techniques ---------- */
  {
    id: "wok-hei",
    zh: "镬气",
    pinyin: "wok hēi",
    en: "Wok hei (breath of the wok)",
    category: "technique",
    definition:
      "The smoky, charred aroma from high-heat wok cooking. Hard to replicate on home stoves — don't stress it.",
    definitionZh:
      "猛火爆炒产生的焦香锅气。家用炉灶难以复制——不必强求。",
  },
  {
    id: "velveting",
    zh: "上浆 / 滑油",
    pinyin: "shàng jiāng",
    en: "Velveting (marinating in cornstarch)",
    category: "technique",
    definition:
      "Coating meat in cornstarch (often with egg white) before cooking so it stays silky and tender.",
    definitionZh:
      "烹饪前用淀粉（常加蛋清）给肉类上浆，使其滑嫩多汁。",
    quantEquivalent: "~1 tbsp cornstarch + 1 tbsp water per 250 g meat",
  },
  {
    id: "blanching",
    zh: "焯水 / 汆烫",
    pinyin: "chāo shuǐ",
    en: "Blanching",
    category: "technique",
    definition: "Briefly boiling vegetables or meat in water to set color, remove scum, or parcook.",
    definitionZh: "将蔬菜或肉类在水中短时煮沸，以定色、去浮沫或半熟。",
    quantEquivalent: "30-90 seconds, then shock in cold water",
  },
  {
    id: "quenching",
    zh: "过冷水",
    pinyin: "guò lěng shuǐ",
    en: "Shocking / quenching",
    category: "technique",
    definition: "Dunking blanched food in cold water to stop cooking and keep color bright.",
    definitionZh: "将焯好的食材浸入冷水，停止加热并保持色泽鲜亮。",
  },

  /* ---------- 食材 ingredients ---------- */
  {
    id: "cornstarch",
    zh: "玉米淀粉",
    pinyin: "yù mǐ diàn fěn",
    en: "Cornstarch (cornflour UK)",
    category: "ingredient",
    definition: "Fine starch used to thicken sauces and velvet meat. Creates glossy finish.",
    definitionZh: "细淀粉，用于勾芡和给肉上浆。带来光泽感。",
    quantEquivalent: "1 tbsp ≈ 8 g",
  },
  {
    id: "tofu",
    zh: "豆腐",
    pinyin: "dòu fu",
    en: "Tofu",
    category: "ingredient",
    definition: "Soybean curd; firm/silken varieties behave differently — use what the recipe says.",
    definitionZh: "大豆凝乳；老/嫩豆腐质地差异大——按菜谱选用。",
  },
  {
    id: "scallion",
    zh: "小葱 / 青葱",
    pinyin: "xiǎo cōng",
    en: "Scallions / green onions",
    category: "ingredient",
    definition: "The all-purpose garnish and aromatic base of countless dishes.",
    definitionZh: "无数菜肴的万能点缀与爆香基底。",
    quantEquivalent: "1 stalk ≈ 15 g",
  },
  {
    id: "ginger",
    zh: "姜",
    pinyin: "jiāng",
    en: "Fresh ginger",
    category: "ingredient",
    definition: "Aromatic root that cuts richness and removes meat 'gamey' notes.",
    definitionZh: "解腻去腥的芳香根茎。",
  },
  {
    id: "garlic",
    zh: "大蒜",
    pinyin: "dà suàn",
    en: "Garlic",
    category: "ingredient",
    definition: "Universal aromatic base; sliced, minced, or smashed for different intensity.",
    definitionZh: "万能爆香基底；切片、切末或拍碎强度各异。",
  },
  {
    id: "dried-shiitake",
    zh: "干香菇",
    pinyin: "gān xiāng gū",
    en: "Dried shiitake mushrooms",
    category: "ingredient",
    definition: "Rehydrated for deep umami; the soaking liquid is liquid gold for sauces.",
    definitionZh: "泡发后鲜味浓郁；泡发水是调汁的黄金。",
    quantEquivalent: "soak 20-30 min in warm water",
  },
  {
    id: "baby-bok-choy",
    zh: "小白菜 / 青菜",
    pinyin: "xiǎo bái cài",
    en: "Baby bok choy",
    category: "ingredient",
    definition: "A quick-cooking leafy green, the default vegetable of Chinese home cooking.",
    definitionZh: "快熟的绿叶菜，中国家常菜的默认蔬菜。",
    substituteHint: "Substitute: Swiss chard, spinach, or broccoli florets.",
    substituteHintZh: "替代：甜菜叶、菠菜或西兰花小朵。",
  },
  {
    id: "napa-cabbage",
    zh: "大白菜",
    pinyin: "dà bái cài",
    en: "Napa cabbage",
    category: "ingredient",
    definition: "Sweet, juicy cabbage used in stir-fries, dumplings, and hot pot.",
    definitionZh: "清甜多汁的白菜，用于炒菜、饺子和火锅。",
  },

  /* ---------- 计量 measurements ---------- */
  {
    id: "tbsp",
    zh: "汤匙",
    pinyin: "tāng chí",
    en: "Tablespoon",
    category: "measurement",
    definition: "US tablespoon = 15 ml. In Chinese recipes 1 汤匙 usually means 1 tablespoon.",
    definitionZh: "美制汤匙 = 15 毫升。中餐菜谱中的 1 汤匙通常即 1 tablespoon。",
    quantEquivalent: "1 tbsp = 15 ml = 3 tsp",
  },
  {
    id: "tsp",
    zh: "茶匙",
    pinyin: "chá chí",
    en: "Teaspoon",
    category: "measurement",
    definition: "US teaspoon = 5 ml.",
    definitionZh: "美制茶匙 = 5 毫升。",
    quantEquivalent: "1 tsp = 5 ml = 1/3 tbsp",
  },
  {
    id: "shao-适量",
    zh: "适量 / 少许",
    pinyin: "shì liàng",
    en: "To taste / a pinch",
    category: "measurement",
    definition:
      "The infamous vague measure. In HǎoWèi we always replace it with a concrete amount.",
    definitionZh:
      "臭名昭著的模糊计量。在 HǎoWèi 我们一律用具体用量替代。",
  },

  /* ========== 新增 Day 2 术语 ========== */
  {
    id: "shrimp",
    zh: "虾仁",
    pinyin: "xiā rén",
    en: "Shrimp",
    category: "ingredient",
    definition:
      "Peeled, deveined prawns. Sweet and quick-cooking; add at the last moment to avoid toughness.",
    definitionZh: "去壳去肠线的鲜虾仁。甜鲜快熟；最后下锅避免变韧。",
  },
  {
    id: "char-siu",
    zh: "叉烧",
    pinyin: "chā shāo",
    en: "Char siu (Chinese BBQ pork)",
    category: "ingredient",
    definition:
      "Sweet-savory roasted pork, cubed for fried rice. Found in the meat section of Asian supermarkets.",
    definitionZh: "甜咸烤肉，切丁用于炒饭。亚超冷鲜区有售。",
    substituteHint: "Substitute: diced ham, cooked pork shoulder, or chicken thigh.",
    substituteHintZh: "替代：切丁火腿、熟猪肩肉或鸡腿肉。",
  },
  {
    id: "curry-powder",
    zh: "咖喱粉",
    pinyin: "gā lí fěn",
    en: "Curry powder (yellow)",
    category: "spice",
    definition:
      "Ground blend of turmeric, coriander, cumin, fenugreek. Gives golden color and warm spice. Different from Thai curry paste.",
    definitionZh: "姜黄、芫荽、孜然、葫芦巴研磨的混合粉。赋予金黄色与暖香。不同于泰式咖喱酱。",
    substituteHint:
      "No curry powder? Use 1/2 tsp turmeric + pinch each cumin + coriander. Color only, less complexity.",
    substituteHintZh:
      "没有咖喱粉？用 1/2 茶匙姜黄+各一小撮孜然+芫荽。只有颜色，层次略少。",
  },
  {
    id: "fish-sauce",
    zh: "鱼露",
    pinyin: "yú lù",
    en: "Fish sauce",
    category: "sauce",
    definition:
      "Fermented anchovy liquid, the umami backbone of Southeast Asian and Southern Chinese cooking. Salty, savory, funky.",
    definitionZh: "发酵鳀鱼汁，东南亚和中国南方烹饪的鲜味基石。咸、鲜、有发酵香气。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint:
      "Vegetarian: 1 tbsp soy + 1/2 tsp miso or 1/4 tsp mushroom powder. GF: tamari + pinch sugar.",
    substituteHintZh:
      "素食版：1 汤匙酱油+1/2 茶匙味噌或1/4 茶匙菌菇粉。无麸质：味醂+一小撮糖。",
  },
];

/** 术语查询工具 */
export function getTermByKey(key: string): Term | undefined {
  return terms.find((t) => t.id === key);
}

export function searchTerms(query: string): Term[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return terms.filter(
    (t) =>
      t.en.toLowerCase().includes(q) ||
      t.zh.includes(query.trim()) ||
      t.pinyin.includes(q) ||
      t.category === q
  );
}
