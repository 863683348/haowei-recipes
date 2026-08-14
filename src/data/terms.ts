import type { Term } from "@/lib/types";

/**
 * 中餐术语库（R-01 英中对照系统）
 * 覆盖 P0 菜谱全部术语：生抽/老抽/料酒/蚝油/豆瓣酱/花椒/白胡椒等
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
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint:
      "Any standard soy sauce (Kikkoman etc.) works 1:1 for cooking; taste before adding extra salt.",
  },
  {
    id: "dark-soy-sauce",
    zh: "老抽",
    pinyin: "lǎo chōu",
    en: "Dark soy sauce",
    category: "sauce",
    definition:
      "Thicker, darker, slightly sweet soy sauce used mainly for color (braises, fried rice). Less salty than light soy.",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint:
      "No dark soy? Mix 1 tbsp light soy + a pinch of sugar + few drops of molasses for color.",
  },
  {
    id: "shaoxing-wine",
    zh: "料酒 / 绍兴酒",
    pinyin: "shào xīng jiǔ",
    en: "Shaoxing cooking wine",
    category: "sauce",
    definition:
      "Fermented rice wine from Shaoxing; adds depth and removes gamey notes from meat.",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint: "Dry sherry is the closest 1:1 swap (fidelity ~80%).",
  },
  {
    id: "oyster-sauce",
    zh: "蚝油",
    pinyin: "háo yóu",
    en: "Oyster sauce",
    category: "sauce",
    definition:
      "Thick, savory-sweet sauce made from oyster extracts. Signature of Cantonese stir-fries.",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint:
      "Vegetarian: mushroom stir-fry sauce or hoisin + soy mix. Note: most contain gluten & shellfish.",
  },
  {
    id: "doubanjiang",
    zh: "郫县豆瓣酱",
    pinyin: "pí xiàn dòu bàn jiàng",
    en: "Doubanjiang (fermented chili bean paste)",
    category: "sauce",
    definition:
      "Fermented broad-bean & chili paste, the soul of Sichuan cooking (mapo tofu, twice-cooked pork).",
    quantEquivalent: "1 tbsp ≈ 15 g",
    substituteHint:
      "Gochujang + extra chili flakes is a decent stand-in (fidelity ~70%); flavor is sweeter.",
  },
  {
    id: "hoisin-sauce",
    zh: "海鲜酱",
    pinyin: "hǎi xiān jiàng",
    en: "Hoisin sauce",
    category: "sauce",
    definition:
      "Sweet, thick barbecue-style sauce (soy, garlic, five-spice). Used in glazes and stir-fries.",
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
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint: "Balsamic vinegar, thinned with a splash of water (fidelity ~75%).",
  },
  {
    id: "rice-vinegar",
    zh: "米醋 / 白醋",
    pinyin: "mǐ cù",
    en: "Rice vinegar",
    category: "sauce",
    definition: "Mild, gently sweet vinegar used in dressings and quick pickles.",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint: "Apple cider vinegar works 1:1 in most dressings.",
  },
  {
    id: "sesame-oil",
    zh: "香油 / 芝麻油",
    pinyin: "xiāng yóu",
    en: "Toasted sesame oil",
    category: "sauce",
    definition:
      "Dark, nutty oil from toasted sesame. Used as a finishing flavor, not for frying.",
    quantEquivalent: "1 tsp ≈ 5 ml",
    substituteHint: "No substitute matches the aroma; skip rather than replace with neutral oil.",
  },
  {
    id: "chili-oil",
    zh: "辣椒油 / 红油",
    pinyin: "là jiāo yóu",
    en: "Chili oil (red oil)",
    category: "sauce",
    definition: "Chili-infused oil with crispy bits; heat + aroma in Sichuan dishes.",
    quantEquivalent: "1 tbsp ≈ 15 ml",
    substituteHint: "DIY: warm oil poured over chili flakes + pinch of five-spice.",
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
    quantEquivalent: "1 tsp ≈ 2 g",
    substituteHint:
      "No true substitute for the numbing effect; add a little black pepper for warmth only.",
  },
  {
    id: "star-anise",
    zh: "八角",
    pinyin: "bā jiǎo",
    en: "Star anise",
    category: "spice",
    definition: "Licorice-scented spice used in braises and five-spice.",
    quantEquivalent: "1 star ≈ 1 g",
    substituteHint: "A pinch of five-spice powder can stand in for one star.",
  },
  {
    id: "five-spice",
    zh: "五香粉",
    pinyin: "wǔ xiāng fěn",
    en: "Five-spice powder",
    category: "spice",
    definition: "Blend of star anise, cloves, cinnamon, Sichuan pepper, fennel.",
    quantEquivalent: "1 tsp ≈ 2 g",
    substituteHint: "DIY: equal parts cinnamon, cloves, star anise, fennel, Sichuan pepper.",
  },
  {
    id: "white-pepper",
    zh: "白胡椒粉",
    pinyin: "bái hú jiāo fěn",
    en: "White pepper",
    category: "spice",
    definition: "Earthy, sharp pepper used in soups and stir-fries for depth without black flecks.",
    quantEquivalent: "1 tsp ≈ 2 g",
    substituteHint: "Black pepper 1:1 (slightly stronger, more floral).",
  },
  {
    id: "chili-flakes",
    zh: "干辣椒段",
    pinyin: "gān là jiāo duàn",
    en: "Dried chili / chili flakes",
    category: "spice",
    definition: "Dried red chilies, whole or crushed; more aroma than fresh heat.",
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
  },
  {
    id: "velveting",
    zh: "上浆 / 滑油",
    pinyin: "shàng jiāng",
    en: "Velveting (marinating in cornstarch)",
    category: "technique",
    definition:
      "Coating meat in cornstarch (often with egg white) before cooking so it stays silky and tender.",
    quantEquivalent: "~1 tbsp cornstarch + 1 tbsp water per 250 g meat",
  },
  {
    id: "blanching",
    zh: "焯水 / 汆烫",
    pinyin: "chāo shuǐ",
    en: "Blanching",
    category: "technique",
    definition: "Briefly boiling vegetables or meat in water to set color, remove scum, or parcook.",
    quantEquivalent: "30-90 seconds, then shock in cold water",
  },
  {
    id: "quenching",
    zh: "过冷水",
    pinyin: "guò lěng shuǐ",
    en: "Shocking / quenching",
    category: "technique",
    definition: "Dunking blanched food in cold water to stop cooking and keep color bright.",
  },

  /* ---------- 食材 ingredients ---------- */
  {
    id: "cornstarch",
    zh: "玉米淀粉",
    pinyin: "yù mǐ diàn fěn",
    en: "Cornstarch (cornflour UK)",
    category: "ingredient",
    definition: "Fine starch used to thicken sauces and velvet meat. Creates glossy finish.",
    quantEquivalent: "1 tbsp ≈ 8 g",
  },
  {
    id: "tofu",
    zh: "豆腐",
    pinyin: "dòu fu",
    en: "Tofu",
    category: "ingredient",
    definition: "Soybean curd; firm/silken varieties behave differently — use what the recipe says.",
  },
  {
    id: "scallion",
    zh: "小葱 / 青葱",
    pinyin: "xiǎo cōng",
    en: "Scallions / green onions",
    category: "ingredient",
    definition: "The all-purpose garnish and aromatic base of countless dishes.",
    quantEquivalent: "1 stalk ≈ 15 g",
  },
  {
    id: "ginger",
    zh: "姜",
    pinyin: "jiāng",
    en: "Fresh ginger",
    category: "ingredient",
    definition: "Aromatic root that cuts richness and removes meat 'gamey' notes.",
  },
  {
    id: "garlic",
    zh: "大蒜",
    pinyin: "dà suàn",
    en: "Garlic",
    category: "ingredient",
    definition: "Universal aromatic base; sliced, minced, or smashed for different intensity.",
  },
  {
    id: "dried-shiitake",
    zh: "干香菇",
    pinyin: "gān xiāng gū",
    en: "Dried shiitake mushrooms",
    category: "ingredient",
    definition: "Rehydrated for deep umami; the soaking liquid is liquid gold for sauces.",
    quantEquivalent: "soak 20-30 min in warm water",
  },
  {
    id: "baby-bok-choy",
    zh: "小白菜 / 青菜",
    pinyin: "xiǎo bái cài",
    en: "Baby bok choy",
    category: "ingredient",
    definition: "A quick-cooking leafy green, the default vegetable of Chinese home cooking.",
    substituteHint: "Substitute: Swiss chard, spinach, or broccoli florets.",
  },
  {
    id: "napa-cabbage",
    zh: "大白菜",
    pinyin: "dà bái cài",
    en: "Napa cabbage",
    category: "ingredient",
    definition: "Sweet, juicy cabbage used in stir-fries, dumplings, and hot pot.",
  },

  /* ---------- 计量 measurements ---------- */
  {
    id: "tbsp",
    zh: "汤匙",
    pinyin: "tāng chí",
    en: "Tablespoon",
    category: "measurement",
    definition: "US tablespoon = 15 ml. In Chinese recipes 1 汤匙 usually means 1 tablespoon.",
    quantEquivalent: "1 tbsp = 15 ml = 3 tsp",
  },
  {
    id: "tsp",
    zh: "茶匙",
    pinyin: "chá chí",
    en: "Teaspoon",
    category: "measurement",
    definition: "US teaspoon = 5 ml.",
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
