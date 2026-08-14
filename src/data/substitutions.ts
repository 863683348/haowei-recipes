import type { Substitution } from "@/lib/types";

/**
 * 食材替换表（R-02 食材替换引擎）
 * type=asian2local：亚超食材 → 本地超市替代（风味还原度星级）
 * type=pair：常见配对/口味近似建议
 * fidelity: 1-5 星（Spec §4：星级可视化）
 */
export const substitutions: Substitution[] = [
  /* ========== 酱料 ========== */
  {
    id: "sub-shaoxing",
    from: "Shaoxing cooking wine",
    fromZh: "绍兴酒",
    to: "Dry sherry (fino/amontillado)",
    ratio: "1:1",
    fidelity: 4,
    note: "Closest match for flavor depth. Alcohol cooks off; a splash of water + rice vinegar also works.",
    type: "asian2local",
  },
  {
    id: "sub-dark-soy",
    from: "Dark soy sauce",
    fromZh: "老抽",
    to: "Light soy + pinch of sugar + few drops molasses",
    ratio: "1 tbsp dark ≈ 1 tbsp light soy + 1/4 tsp sugar",
    fidelity: 4,
    note: "Adds color and slight sweetness without buying a new bottle.",
    type: "asian2local",
  },
  {
    id: "sub-oyster",
    from: "Oyster sauce",
    fromZh: "蚝油",
    to: "Mushroom stir-fry sauce (vegetarian 'oyster' sauce)",
    ratio: "1:1",
    fidelity: 4,
    note: "Most supermarket 'mushroom oyster sauce' is nearly identical in use; also GF-friendly.",
    type: "asian2local",
  },
  {
    id: "sub-doubanjiang",
    from: "Doubanjiang (fermented chili bean paste)",
    fromZh: "郫县豆瓣酱",
    to: "Gochujang + 1/2 tsp chili flakes + pinch of salt",
    ratio: "1 tbsp doubanjiang ≈ 2 tsp gochujang + chili flakes",
    fidelity: 3,
    note: "Sweeter and less fermented; add a little salt and vinegar to balance.",
    type: "asian2local",
  },
  {
    id: "sub-chinkiang",
    from: "Chinkiang (black) vinegar",
    fromZh: "镇江香醋",
    to: "Balsamic vinegar + splash of water",
    ratio: "1:1 (thinned balsamic)",
    fidelity: 4,
    note: "Malty sweetness is close; thin balsamic slightly so it isn't too syrupy.",
    type: "asian2local",
  },
  {
    id: "sub-hoisin",
    from: "Hoisin sauce",
    fromZh: "海鲜酱",
    to: "BBQ sauce + 1 tsp soy sauce + pinch five-spice",
    ratio: "1:1",
    fidelity: 3,
    note: "BBQ base gives the sweet-savory body; five-spice brings it closer.",
    type: "asian2local",
  },
  {
    id: "sub-sesame-oil",
    from: "Toasted sesame oil",
    fromZh: "香油",
    to: "Neutral oil + few drops of toasted sesame seeds (pounded)",
    ratio: "finishing only",
    fidelity: 2,
    note: "Aroma is irreplaceable — this only adds a hint. Best to buy sesame oil; it lasts.",
    type: "asian2local",
  },
  {
    id: "sub-chili-oil",
    from: "Chili oil (red oil)",
    fromZh: "辣椒油",
    to: "Warm neutral oil poured over chili flakes + 5-spice",
    ratio: "DIY 5 min",
    fidelity: 4,
    note: "Easy homemade version; store in fridge.",
    type: "asian2local",
  },

  /* ========== 香料 ========== */
  {
    id: "sub-sichuan-pepper",
    from: "Sichuan peppercorn",
    fromZh: "花椒",
    to: "Black pepper + citrus zest (lemon/orange)",
    ratio: "1 tsp Sichuan ≈ 1/2 tsp black pepper + zest",
    fidelity: 2,
    note: "Gives warmth and a hint of citrus but no numbing (má). Order online if you want the real effect.",
    type: "asian2local",
  },
  {
    id: "sub-star-anise",
    from: "Star anise",
    fromZh: "八角",
    to: "Pinch of five-spice powder",
    ratio: "1 star ≈ 1/4 tsp five-spice",
    fidelity: 3,
    note: "Five-spice is star-anise forward; close enough for braises.",
    type: "asian2local",
  },
  {
    id: "sub-white-pepper",
    from: "White pepper",
    fromZh: "白胡椒",
    to: "Black pepper (use slightly less)",
    ratio: "3/4 tsp black ≈ 1 tsp white",
    fidelity: 4,
    note: "Slightly more floral; fine for most dishes.",
    type: "asian2local",
  },

  /* ========== 食材 ========== */
  {
    id: "sub-shaoxing-pair-rice",
    from: "Rice wine / mirin",
    fromZh: "米酒/味醂",
    to: "Dry white wine + 1/4 tsp sugar",
    ratio: "1:1",
    fidelity: 3,
    note: "White wine brings acidity; sugar rounds it into the rice-wine direction.",
    type: "asian2local",
  },
  {
    id: "sub-tofu-silken",
    from: "Silken tofu (for mapo tofu)",
    fromZh: "嫩豆腐",
    to: "Medium-firm tofu, gently simmered",
    ratio: "1:1 (handle gently)",
    fidelity: 4,
    note: "Less delicate texture but holds sauce well and is easier to find.",
    type: "asian2local",
  },
  {
    id: "sub-bok-choy",
    from: "Baby bok choy",
    fromZh: "小白菜",
    to: "Swiss chard / spinach / broccoli florets",
    ratio: "1:1",
    fidelity: 4,
    note: "Any quick-cooking green works; adjust cooking time for thickness.",
    type: "asian2local",
  },
  {
    id: "sub-napa",
    from: "Napa cabbage",
    fromZh: "大白菜",
    to: "Savoy cabbage",
    ratio: "1:1",
    fidelity: 4,
    note: "Closest texture and sweetness in Western supermarkets.",
    type: "asian2local",
  },
  {
    id: "sub-gai-lan",
    from: "Gai lan (Chinese broccoli)",
    fromZh: "芥兰",
    to: "Broccolini",
    ratio: "1:1",
    fidelity: 4,
    note: "Broccolini is the hybrid closest to gai lan's tender stems and mild bitterness.",
    type: "asian2local",
  },
  {
    id: "sub-dried-shiitake",
    from: "Dried shiitake",
    fromZh: "干香菇",
    to: "Fresh shiitake (more water, less umami)",
    ratio: "1 dried ≈ 2 fresh",
    fidelity: 3,
    note: "Fresh lacks the intense umami; add a splash of soy or mushroom stock to compensate.",
    type: "asian2local",
  },
  {
    id: "sub-five-spice",
    from: "Five-spice powder",
    fromZh: "五香粉",
    to: "DIY: cinnamon + cloves + star anise + fennel + Sichuan pepper",
    ratio: "equal parts, ground",
    fidelity: 4,
    note: "All components are easy to find; grind or crush fine.",
    type: "asian2local",
  },
  {
    id: "sub-chinese-sausage",
    from: "Chinese sausage (lap cheong)",
    fromZh: "腊肠",
    to: "Chorizo (cooked) or smoked sausage + 1/4 tsp five-spice",
    ratio: "1:1",
    fidelity: 3,
    note: "Chorizo mimics the sweet-savory, slightly fatty bite.",
    type: "asian2local",
  },
  {
    id: "sub-pork-belly",
    from: "Pork belly (for 红烧肉)",
    fromZh: "五花肉",
    to: "Pork shoulder / collar, fattier cuts",
    ratio: "1:1 (braise 15-20 min longer)",
    fidelity: 4,
    note: "Shoulder braises beautifully; just a touch less rich.",
    type: "asian2local",
  },
  {
    id: "sub-rice-wine-umami",
    from: "Shaoxing + oyster sauce combo",
    fromZh: "料酒+蚝油",
    to: "Dry sherry + Worcestershire sauce (half amount)",
    ratio: "1 tbsp sherry + 1/2 tsp Worcestershire",
    fidelity: 3,
    note: "Worcestershire adds the fermented umami depth oyster sauce normally provides.",
    type: "pair",
  },
  {
    id: "sub-sweet-sour",
    from: "Sweet & sour sauce base",
    fromZh: "糖醋汁",
    to: "Ketchup + rice vinegar + sugar (2:1:1)",
    ratio: "2 tbsp ketchup + 1 tbsp vinegar + 1 tbsp sugar",
    fidelity: 4,
    note: "Classic home hack; ketchup gives color and body.",
    type: "pair",
  },
];

/** 按原食材名查找替代方案 */
export function findSubstitution(query: string): Substitution[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return substitutions.filter(
    (s) =>
      s.from.toLowerCase().includes(q) ||
      (s.fromZh && s.fromZh.includes(query.trim())) ||
      s.to.toLowerCase().includes(q)
  );
}

/** Top 20 高频替代（Spec 验收：100% 覆盖） */
export const topSubstitutionNames = substitutions.map((s) => s.from);
