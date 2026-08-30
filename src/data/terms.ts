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
  {
    id: "wood-ear",
    zh: "木耳",
    pinyin: "mù ěr",
    en: "Wood ear mushroom (cloud ear fungus)",
    category: "ingredient",
    definition:
      "A crispy, jelly-like edible fungus dried in sheets. Rehydrates in warm water in 10 minutes. Nearly neutral in flavor — prized for its extraordinary crunch in cold dishes.",
    definitionZh:
      "脆爽胶质的食用真菌，干制呈片状。温水泡发 10 分钟。味道近乎中性——凉拌菜中以其绝妙脆感著称。",
    quantEquivalent: "15 g dry ≈ 150 g rehydrated",
    substituteHint:
      "No wood ear? Shredded daikon radish or jicama provide similar crunch (fidelity ~60%).",
    substituteHintZh:
      "没有木耳？切丝的白萝卜或菊苣可提供类似脆感（还原度约 60%）。",
  },

  /* ========== 新增 Day 14 术语 ========== */
  {
    id: "pork-belly",
    zh: "五花肉",
    pinyin: "wǔ huā ròu",
    en: "Pork belly",
    category: "ingredient",
    definition:
      "Layered cut from the belly of the pig — fat and lean alternating. Ideal for braising and twice-cooked dishes. In Asian supermarkets you'll find it pre-boiled (卤五花肉) which saves hours.",
    definitionZh: "猪腹部层层相间的肉——肥瘦相间。适合红烧和回锅。亚超有预先卤好的，可省数小时。",
    substituteHint: "Pork shoulder (picnic) is a good substitute — also has fat marbling.",
    substituteHintZh: "猪肩肉（picnic）是不错替代——同样有 fat marbling。",
  },
  {
    id: "pork-loin",
    zh: "猪里脊",
    pinyin: "zhū lǐ jiǔ",
    en: "Pork loin / tenderloin",
    category: "ingredient",
    definition:
      "Lean, tender cut from the back of the pig. The most tender pork cut — perfect for stir-fry strips (肉丝) and velveting.",
    definitionZh: "猪背部最嫩的瘦肉，适合切丝（肉丝）和上浆滑炒。",
    substituteHint: "Pork shoulder works too but is less tender — slice against the grain.",
    substituteHintZh: "猪肩肉也可，但没那么嫩——逆纹切。",
  },
  {
    id: "green-pepper",
    zh: "青椒 / 甜椒",
    pinyin: "qīng jiāo",
    en: "Green bell pepper",
    category: "ingredient",
    definition:
      "Mild, crisp, slightly sweet pepper. The default vegetable partner for shredded pork stir-fries. Not to be confused with hot green chilies.",
    definitionZh: "温和爽脆微甜的甜椒，是肉丝炒菜的默认搭档。不要和辣青椒搞混。",
    substituteHint: "Red bell pepper for color contrast; poblano for mild heat.",
    substituteHintZh: "红甜椒增色； poblanos 微辣。",
  },
  {
    id: "bamboo-shoots",
    zh: "笋丝 / 竹笋",
    pinyin: "sǔn sī",
    en: "Bamboo shoots (julienned)",
    category: "ingredient",
    definition:
      "Tender young shoots of the bamboo plant. Canned julienned bamboo shoots are a pantry staple for yu xiang dishes — rinse well to remove the canned metallic taste.",
    definitionZh: "竹子的嫩芽。罐头笋丝是鱼香菜的 pantry 常备——冲洗干净去金属味。",
    quantEquivalent: "80 g canned ≈ 1/2 cup",
    substituteHint: "Water chestnuts (sliced) for crunch; jicama strips for mild sweetness.",
    substituteHintZh: "荸荠片增脆；菊苣丝增甜。",
  },
  {
    id: "carrot",
    zh: "胡萝卜",
    pinyin: "hú luó bo",
    en: "Carrot",
    category: "ingredient",
    definition:
      "Sweet root vegetable, julienned for color and crunch in stir-fries. Adds beta-carotene and a touch of sweetness that balances salty sauces.",
    definitionZh: "甜味根茎类蔬菜，切丝炒菜增色增脆。提供 β-胡萝卜素，平衡咸酱汁。",
    substituteHint: "Blanched daikon strips or bell pepper strips.",
    substituteHintZh: "焯水白萝卜丝或甜椒丝。",
  },
  {
    id: "garlic-sprout",
    zh: "蒜苗 / 青蒜",
    pinyin: "suàn miáo",
    en: "Garlic sprouts (suan miao / Chinese scallion)",
    category: "ingredient",
    definition:
      "The young green stalks of the garlic plant. More pungent than scallions with a distinct garlic flavor. Essential for twice-cooked pork (回锅肉). Different from scallions — thicker white stem, flat leaves.",
    definitionZh: "蒜的幼嫩绿茎。比小葱更辛辣，有独特蒜香。回锅肉必备。和小葱不同——更粗的白色茎，扁平叶子。",
    quantEquivalent: "1 stalk ≈ 15 g",
    substituteHint: "Thick-stemmed scallions (日本长葱) or leeks (white part only).",
    substituteHintZh: "粗杆小葱（日本长葱）或韭葱（只用白色部分）。",
  },
  {
    id: "dried-chilies",
    zh: "干辣椒",
    pinyin: "gān là jiāo",
    en: "Dried red chilies",
    category: "ingredient",
    definition:
      "Whole or snipped dried chili peppers. Used for heat and toasted aroma in Sichuan and Hunan stir-fries. Toasting in oil releases the fragrance without full capsaicin burn.",
    definitionZh: "整只或剪段的干辣椒。川湘炒菜用其辣味与焦香。油中煸香可释放香气而不至于过辣。",
    quantEquivalent: "1 small chili ≈ 0.3 g",
    substituteHint: "Chili flakes (红辣椒面) work for heat; add at the end to avoid burning.",
    substituteHintZh: "辣椒面可代辣味；最后再加，避免炒糊。",
  },
  {
    id: "douchi",
    zh: "豆豉",
    pinyin: "dòu chǐ",
    en: "Fermented black beans (douchi)",
    category: "sauce",
    definition:
      "Black soybeans fermented with salt and aromatics. Salty, earthy, and intensely savory — the umami backbone of mapo tofu and Hunan dishes. Rinse briefly to remove excess salt.",
    definitionZh: "用盐和香料发酵的黑大豆。咸鲜浓郁，是麻婆豆腐和湘菜的鲜味基石。用前稍冲洗去除多余盐分。",
    quantEquivalent: "1 tsp ≈ 5 g",
    substituteHint: "Miso paste thinned with soy (fidelity ~60%) or a splash of fish sauce.",
    substituteHintZh: "味噌加生抽调稀（还原度约 60%），或加少许鱼露。",
  },
  {
    id: "sesame-seeds",
    zh: "白芝麻",
    pinyin: "bái zhī ma",
    en: "White sesame seeds",
    category: "ingredient",
    definition:
      "Pale, nutty seeds used as a finishing garnish. Toast in a dry pan until golden to wake up the aroma before sprinkling.",
    definitionZh: "浅色坚果香种子，用作收尾点缀。干锅焙至金黄激发香气后再撒。",
    quantEquivalent: "1 tbsp ≈ 9 g",
    substituteHint: "Black sesame seeds or toasted sesame salt (furikake).",
    substituteHintZh: "黑芝麻或拌饭料（furikake）。",
  },
  {
    id: "lettuce",
    zh: "生菜",
    pinyin: "shēng cài",
    en: "Lettuce (romaine / crisphead)",
    category: "ingredient",
    definition:
      "Crisp leafy vegetable. In Cantonese cooking, romaine hearts are blanched whole and dressed with oyster sauce — the standard way to get a restaurant green on the table fast.",
    definitionZh: "脆嫩叶菜。粤菜中罗马生菜心整棵白灼后淋蚝油——最快端出餐厅级青菜的方式。",
    substituteHint: "Bok choy or choy sum blanch the same way.",
    substituteHintZh: "小白菜或菜心同样白灼。",
  },
  {
    id: "eggplant",
    zh: "茄子",
    pinyin: "qié zi",
    en: "Eggplant",
    category: "ingredient",
    definition:
      "Spongy vegetable that soaks up sauce and oil. In Chinese cooking it's often pre-fried or steamed to soften before stir-frying with garlic sauce.",
    definitionZh: "海绵质蔬菜，极吸酱汁和油。中餐常先煎或蒸软，再与蒜蓉酱同炒。",
    substituteHint: "Zucchini works for texture but soaks less flavor.",
    substituteHintZh: "西葫芦口感接近，但吸味不如茄子。",
  },
  {
    id: "winter-melon",
    zh: "冬瓜",
    pinyin: "dōng guā",
    en: "Winter melon",
    category: "ingredient",
    definition:
      "Large pale-green gourd with mild, watery flesh. Used in soups where it soaks up broth flavor and turns translucent. Peel before use; seeds in the cavity are discarded.",
    definitionZh: "淡绿色大型瓜，肉质清淡多水。做汤时吸饱汤汁变半透明。用前去皮，瓤和籽丢弃。",
    substituteHint: "Zucchini (firmer) or Chinese loofah (softer) for soups.",
    substituteHintZh: "西葫芦（较硬）或丝瓜（较软）可代做汤。",
  },
  {
    id: "seaweed",
    zh: "紫菜",
    pinyin: "zǐ cài",
    en: "Dried seaweed (nori / laver)",
    category: "ingredient",
    definition:
      "Thin dried sheets of edible algae. In Chinese soups (egg drop), torn laver is added at the end and rehydrates instantly, adding a briny umami note.",
    definitionZh: "薄片干海藻。中式汤（蛋花汤）中最后撕入，瞬间泡发，带来海味鲜香。",
    substituteHint: "Nori sheets torn small, or wakame (soaked).",
    substituteHintZh: "海苔片撕碎，或裙带菜（泡发）。",
  },
  {
    id: "whole-fish",
    zh: "整鱼",
    pinyin: "zhěng yú",
    en: "Whole fish (gutted)",
    category: "ingredient",
    definition:
      "A whole, gutted fish cooked intact — the classic way for sweet-sour fish. Ask the fishmonger to scale and gut it; score both sides so the sauce penetrates and the fish cooks evenly.",
    definitionZh: "整条去内脏的鱼——糖醋鱼的经典形态。让鱼贩去鳞去内脏，两面打花刀便于入味和均匀成熟。",
    substituteHint: "Fillets work but change the presentation; reduce cooking time by half.",
    substituteHintZh: "鱼片可行但形态不同；烹饪时间减半。",
  },
  {
    id: "pork-rib",
    zh: "排骨",
    pinyin: "pái gǔ",
    en: "Pork ribs",
    category: "ingredient",
    definition:
      "Cut of pork from the ribcage. Spare ribs are meatier; baby back ribs are leaner. Ideal for braising, sweet-sour, and soups.",
    definitionZh: "猪肋部的排骨。肋排肉多；小排更瘦。适合红烧、糖醋和煲汤。",
    substituteHint: "Pork neck or shoulder can be used in braises but with less bone flavor.",
    substituteHintZh: "炖菜可用猪颈肉或肩肉替代，但骨香不足。",
  },
  {
    id: "pork-ribs",
    zh: "排骨",
    pinyin: "pái gǔ",
    en: "Pork ribs (spare / baby back)",
    category: "ingredient",
    definition:
      "The rib cut of pork. Spare ribs are larger and fattier; baby back ribs are smaller and leaner. Both work for sweet-sour ribs and braises.",
    definitionZh: "猪肋排。肋排大而肥；小排小而瘦。都适合糖醋排骨和红烧。",
    substituteHint: "Pork shoulder chunks for braises — less bone, similar flavor.",
    substituteHintZh: "炖菜可用猪肩肉块——骨少，风味接近。",
  },
  {
    id: "pork-tenderloin",
    zh: "猪里脊 / 小里脊",
    pinyin: "zhū lǐ ji",
    en: "Pork tenderloin",
    category: "ingredient",
    definition:
      "The leanest, most tender cut of pork, running along the backbone. Perfect for velveting and quick stir-fries like sweet-sour pork.",
    definitionZh: "猪最瘦最嫩的部位，沿脊骨分布。适合上浆快炒，如糖醋里脊。",
    substituteHint: "Pork loin, sliced thin and velveted, is a fine substitute.",
    substituteHintZh: "猪通脊切薄片上浆，是很好的替代。",
  },
  {
    id: "tianmianjiang",
    zh: "甜面酱",
    pinyin: "tián miàn jiàng",
    en: "Sweet bean sauce (tianmianjiang)",
    category: "sauce",
    definition:
      "Fermented wheat paste, sweet and savory with a deep malty note. The signature sauce of Beijing dishes like jing jiang rou si (京酱肉丝) and Peking duck wraps.",
    definitionZh: "发酵小麦酱，甜咸交织带麦香。京酱肉丝和北京烤鸭卷饼的标志性酱料。",
    quantEquivalent: "1 tbsp ≈ 15 g",
    substituteHint: "Hoisin sauce is the closest western swap — sweeter, use slightly less.",
    substituteHintZh: "海鲜酱是最接近的西式替代——偏甜，略减量。",
  },
  {
    id: "rock-sugar",
    zh: "冰糖",
    pinyin: "bīng táng",
    en: "Rock sugar",
    category: "ingredient",
    definition:
      "Large translucent chunks of crystallized sugar. Used in braises (hongshao) for a cleaner, more refined sweetness and better glaze than white sugar.",
    definitionZh: "大块半透明结晶糖。红烧用其甜味更清亮、上色更亮，优于白糖。",
    quantEquivalent: "1 tbsp crushed ≈ 15 g",
    substituteHint: "White sugar works 1:1 by weight in a pinch.",
    substituteHintZh: "急用可用白糖等重替代。",
  },
  /* ========== 新增 Day 83 术语 ========== */
  {
    id: "onion",
    zh: "洋葱",
    pinyin: "yáng cōng",
    en: "Onion (yellow / sweet)",
    category: "ingredient",
    definition:
      "A pungent allium that caramelizes beautifully when cooked slowly. Yellow or sweet onions are ideal for Chinese home cooking — they turn naturally sweet without added sugar.",
    definitionZh: "辛辣的葱属蔬菜，慢火烹调会自然焦糖化。黄洋葱最适合中式家常烹饪——无需加糖即可自然变甜。",
    quantEquivalent: "1 medium ≈ 150 g",
    substituteHint:
      "White or red onion works but is sharper. Use less and rinse if too pungent.",
    substituteHintZh: "白洋葱或红洋葱可用但更辛辣。用量减半，过辣可冲洗。",
  },
  {
    id: "okra",
    zh: "秋葵",
    pinyin: "qiū kuí",
    en: "Okra (lady's finger)",
    category: "ingredient",
    definition:
      "A tropical vegetable with a distinctive mucilaginous texture and nutty flavor. In Chinese cooking, it is quickly stir-fried to retain crunch while the natural slime adds body to sauces.",
    definitionZh: "一种热带蔬菜，有独特的黏液质地和坚果风味。中餐快炒以保持脆感，天然黏液可增稠酱汁。",
    quantEquivalent: "200 g ≈ 12-15 pods",
    substituteHint:
      "Green beans or asparagus tips provide similar crunch (fidelity ~70%).",
    substituteHintZh: "四季豆或芦笋尖可提供类似脆感（还原度约70%）。",
  },
  {
    id: "zucchini",
    zh: "西葫芦",
    pinyin: "xī hú lu",
    en: "Chinese zucchini (summer squash)",
    category: "ingredient",
    definition:
      "A mild, juicy summer squash with thin green skin and soft seeds. Unlike Western courgette, Chinese zucchini is milder and releases more water during cooking — remove seeds for best texture.",
    definitionZh: "清淡多汁的夏季南瓜，皮薄绿嫩，籽软。与西方courgette不同，西葫芦味道更淡、出水更多——去籽口感更佳。",
    quantEquivalent: "1 large ≈ 300 g",
    substituteHint:
      "Western courgette works but is firmer and less watery. Reduce cooking time slightly.",
    substituteHintZh: "西方courgette可用但质地更硬、水分更少。烹饪时间略减。",
  },
  {
    id: "preserved-egg",
    zh: "皮蛋 / 松花蛋",
    pinyin: "pí dàn / sōng huā dàn",
    en: "Preserved egg (century egg / thousand-year egg)",
    category: "ingredient",
    definition:
      " Duck or quail eggs preserved in a mixture of clay, ash, salt, quicklime, and rice hulls for several weeks to months. The white becomes amber jelly-like with a strong ammonia scent; the yolk turns dark green-gray and creamy. A staple in cold dishes and congee.",
    definitionZh: "鸭蛋或鹌鹑蛋用黏土、Ash、盐、石灰和稻壳腌制数周至数月。蛋白呈琥珀色果冻状，带氨香；蛋黄墨绿乳酪状。凉拌菜和粥的必备。",
    quantEquivalent: "1 large ≈ 60 g",
    substituteHint:
      "No true substitute — the flavor is unique. For approximation: soft-boiled egg with a pinch of baking soda (fidelity ~40%).",
    substituteHintZh: "无可替代——风味独特。近似替代：加一小撮小苏打的软煮蛋（还原度约40%）。",
  }
];

/** 术语查询工具 */
export function getTermByKey(key: string): Term | undefined {
  return terms.find((t) => t.id === key);
}

export function searchTerms(query: string): Term[] {
  const q = query.toLowerCase().trim();
  if (!q) return [
  /* ========== 新增 Day 15 术语 ========== */
  {
    id: "egg",
    zh: "鸡蛋",
    pinyin: "jī dàn",
    en: "Eggs",
    category: "ingredient",
    definition:
      "The backbone of Chinese home cooking. Large chicken eggs work for all steamed egg dishes; duck eggs are sometimes used for richer versions.",
    definitionZh: "中式家常烹饪的基础。普通大号鸡蛋适用于所有蒸蛋菜；鸭蛋有时用于更浓郁的版本。",
    substituteHint:
      "Large hen eggs are standard. Duck eggs are richer but harder to find; substitute 1:1 by count.",
    substituteHintZh: "大号土鸡蛋是标准。鸭蛋更浓郁但较难买到；数量上 1:1 替代。",
  },
  {
    id: "pork-mince",
    zh: "猪肉末",
    pinyin: "zhū ròu mò",
    en: "Ground pork",
    category: "ingredient",
    definition:
      "Finely minced pork, typically 5-15% fat for stir-fries and steamed toppings. The fat keeps the meat moist during quick cooking.",
    definitionZh: "细绞猪肉，炒和蒸 topping 通常选 5-15% 脂肪含量。脂肪让肉在快煮时保持湿润。",
    quantEquivalent: "150 g ≈ 3/4 cup packed",
    substituteHint:
      "Ground chicken or turkey works but is leaner — add a teaspoon of oil to the pan.",
    substituteHintZh: "鸡 ground 或火鸡肉可行但更瘦——锅中加一茶匙油。",
  },
  {
    id: "sea-bass",
    zh: "鲈鱼",
    pinyin: "lú yú",
    en: "Sea bass (Asian species)",
    category: "ingredient",
    definition:
      "A mild, sweet-fleshed fish with delicate flakes. In Chinese cooking, a whole 400-600g sea bass is the standard size for steaming. Ask the fishmonger to scale and gut it. A similar substitute is branzino or striped bass.",
    definitionZh: "肉质温和甜美、鱼片细嫩的鱼。中餐里整条 400-600g 的鲈鱼是蒸鱼的标配。让鱼贩去鳞去内脏。类似替代品是布伦齐诺或条纹鲈鱼。",
    quantEquivalent: "1 fish ≈ 500 g",
    substituteHint:
      "Branzino, striped bass, or tilapia fillets (reduce cook time by half). For whole fish, any firm white fish with scale and gut.",
    substituteHintZh: "布伦齐诺、条纹鲈鱼或龙利鱼片（烹饪时间减半）。整鱼的话选带鳞去内脏的紧实白肉鱼。",
  },
  {
    id: "white-fish",
    zh: "白肉鱼",
    pinyin: "bái ròu yú",
    en: "White fish (firm-fleshed)",
    category: "ingredient",
    definition:
      "A category of fish with mild flavor and firm, flaky white meat. Ideal for steaming, braising, and soups. Examples: cod, haddock, halibut, snapper.",
    definitionZh: "味道温和、肉质紧实白嫩的鱼类。适合蒸、炖、汤。例：鳕鱼、黑线鳕、比目鱼、鲷鱼。",
    substituteHint:
      "Any firm white fish works. Avoid oily fish (salmon, mackerel) for clear-steamed dishes.",
    substituteHintZh: "任何紧实白肉鱼均可。清蒸菜避免用油腻鱼类（鲑鱼、鲭鱼）。",
  },
  {
    id: "mirin",
    zh: "味醂",
    pinyin: "wèi lán",
    en: "Mirin (sweet rice wine)",
    category: "sauce",
    definition:
      "A sweet Japanese rice wine used in cooking to add gloss, mild sweetness, and depth. Common in Cantonese-Chinese adaptation of Japanese techniques and in some southern Chinese home cooking.",
    definitionZh: "甜味日式米酒，烹饪中用于增亮、微甜和提味。常见于粤式家常菜改良日式技法时。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint:
      "No mirin? Mix 1 tbsp dry sherry + 1/2 tsp sugar. The sugar replaces the sweetness; sherry replaces the rice wine note.",
    substituteHintZh: "没有味醂？1 汤匙干雪利 + 1/2 茶匙糖。糖替代甜味，雪利替代米香。",
  },
  {
    id: "rice-wine",
    zh: "米酒 / 黄酒",
    pinyin: "mǐ jiǔ / huáng jiǔ",
    en: "Rice wine (huangjiu)",
    category: "sauce",
    definition:
      "Fermented rice wine, amber in color with a deep umami-sweet flavor. Used in marinades and braises to remove gaminess and add complexity. Different from Shaoxing wine (shaoxing is drier and more aromatic).",
    definitionZh: "发酵米酒，琥珀色，咸鲜微甜。用于腌制和红烧去腥增香。与料酒不同——料酒更干更香。",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint:
      "Shaoxing wine is the closest available everywhere; use 1:1. For non-alcoholic: skip and add extra ginger.",
    substituteHintZh: "绍兴酒是最接近的通用替代；1:1。无酒精：跳过，多加姜片。",
  },
];
  return terms.filter(
    (t) =>
      t.en.toLowerCase().includes(q) ||
      t.zh.includes(query.trim()) ||
      t.pinyin.includes(q) ||
      t.category === q
  );
}
