import type { Recipe } from "@/lib/types";

/** Pickled Chicken Feet (泡椒凤爪) — Seed batch */
export const pickled_chicken_feet: Recipe = {
  "id": "pao-jiao-feng-zhao",
  "slug": "pickled-chicken-feet",
  "titleEn": "Pickled Chicken Feet",
  "titleZh": "泡椒凤爪",
  "pinyin": "pào jiāo fèng zhǎo",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "easy",
  "timeMin": 120,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version skips alum and food-grade lime—uses vinegar soak + ice bath for crispness instead.",
  "versionNoteZh": "家常版不用明矾和食用石灰，以醋水浸泡+冰浴替代，安全又爽脆。",
  "tags": [
    "make-ahead",
    "snack",
    "no-cook"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Chongqing’s Ciqikou made these every Lunar New Year Eve. She’d line bamboo trays with pickled mustard greens, saying, 'The crunch is luck snapping into place.' I still use her 3-day soak method—but skip the alum.",
  "storyZh": "我重庆磁器口的外婆每逢除夕必做这道菜。她把泡菜叶铺在竹匾上，说：‘咔嚓一声，是好运落定的声音。’我沿用她三天浸泡法，但不用明矾。",
  "ingredients": [
    {
      "id": "cf-01",
      "nameEn": "chicken feet",
      "nameZh": "鸡爪",
      "pinyin": "jī zhǎo",
      "amountMetric": "500 g",
      "amountUS": "1 lb 2 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Look for plump, pale pink feet with intact nails and minimal yellow callus.",
      "noteZh": "选饱满粉嫩、指甲完整、黄茧少的鸡爪。"
    },
    {
      "id": "cf-02",
      "nameEn": "pickled red chilies (in brine)",
      "nameZh": "野山椒（带汁）",
      "pinyin": "yě shān jiāo",
      "amountMetric": "200 g",
      "amountUS": "1 cup, chopped with brine",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: 1/2 cup jarred Korean kimchi juice + 1/4 cup chopped jalapeños (seeds removed).",
      "noteZh": "替代：韩式泡菜汁1/2杯 + 去籽墨西哥辣椒碎1/4杯。"
    },
    {
      "id": "cf-03",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "pinyin": "mǐ cù",
      "amountMetric": "120 ml",
      "amountUS": "1/2 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "cf-04",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "cf-05",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "30 g",
      "amountUS": "4 cloves, smashed",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cf-06",
      "nameEn": "ginger",
      "nameZh": "姜",
      "pinyin": "jiāng",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp, julienned",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cf-07",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Trim nails and calluses from chicken feet. Rinse thoroughly. Place in large bowl, cover with cold water + 2 tbsp rice vinegar. Soak 30 minutes.",
      "textZh": "剪去鸡爪指甲及硬茧，彻底冲洗；放入大碗，加冷水与2汤匙米醋没过，浸泡30分钟。",
      "zhHint": "醋水去腥软化",
      "stateNote": {
        "visual": "Water remains clear, no foam or cloudiness.",
        "visualZh": "水体清澈，无泡沫或浑浊。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "Claws feel slightly softened but hold shape.",
        "signalZh": "爪子略软但仍保持形状。"
      }
    },
    {
      "text": "Drain and rinse. Place feet in pot, cover with fresh cold water. Add 1 tbsp ginger and 1 clove garlic. Bring to boil, then simmer 25 minutes until tender but still springy.",
      "textZh": "捞出冲洗；入锅加足量冷水，加1汤匙姜片、1瓣蒜，大火烧开后转中火煮25分钟，至软弹不烂。",
      "zhHint": "煮到弹牙不烂",
      "stateNote": {
        "visual": "Skin blanches and wrinkles slightly; joints bend easily.",
        "visualZh": "表皮泛白微皱；关节可轻松弯曲。",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium",
        "signal": "Tip of claw bends without breaking.",
        "signalZh": "爪尖可弯折而不断裂。"
      }
    },
    {
      "text": "Drain and immediately plunge into ice water for 15 minutes. Pat completely dry with paper towels.",
      "textZh": "捞出立刻浸入冰水15分钟；彻底擦干水分。",
      "zhHint": "冰浴锁住脆感",
      "stateNote": {
        "visual": "Skin tightens and develops fine dimples.",
        "visualZh": "表皮收紧，出现细密小坑。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Feet feel firm and squeak when rubbed.",
        "signalZh": "手指搓揉有轻微‘吱吱’声。"
      }
    },
    {
      "text": "In a clean glass jar, combine pickled chilies (with brine), remaining rice vinegar, Chinese black vinegar, remaining ginger, garlic, and white pepper. Stir well.",
      "textZh": "干净玻璃罐中混合泡椒（带汁）、剩余米醋、陈醋、剩余姜丝、蒜末和白胡椒粉，搅匀。",
      "zhHint": "料汁需充分融合",
      "stateNote": {
        "visual": "Brine becomes cloudy-pink with suspended chili flecks.",
        "visualZh": "卤汁呈粉雾状，悬浮细小椒粒。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Aroma is sharp, tangy, and faintly floral.",
        "signalZh": "气味酸爽、微辛、略带花香。"
      }
    },
    {
      "text": "Pack chicken feet into jar, ensuring fully submerged. Seal and refrigerate minimum 24 hours (best after 48–72 hours). Serve chilled.",
      "textZh": "鸡爪装入罐中，确保完全浸没；密封冷藏，至少24小时（48–72小时风味最佳）。冰镇后食用。",
      "zhHint": "浸泡越久越入味",
      "stateNote": {
        "visual": "Feet turn translucent-pink at tips; brine deepens to rosy amber.",
        "visualZh": "爪尖呈半透明粉红色；卤汁变为玫瑰琥珀色。",
        "timeRef": "24–72 hours",
        "timeRefZh": "24–72 小时",
        "signal": "Vinegar tang mellows; chili heat blooms evenly.",
        "signalZh": "醋酸味变柔和，辣味均匀绽放。"
      }
    }
  ],
  "tips": [
    "Never use metal containers—they react with vinegar and dull flavor.",
    "For extra crunch, add 1 tsp citric acid (or 1/2 tsp lemon juice) to brine.",
    "Strain and reuse brine up to 3 times—just boil 5 minutes and cool before reusing."
  ],
  "tipsZh": [
    "禁用金属容器，会与醋反应影响风味。",
    "追求极致爽脆，可在卤汁中加1茶匙柠檬酸（或半茶匙鲜柠檬汁）。",
    "卤汁可重复使用3次：每次复用前煮沸5分钟，冷却后再用。"
  ],
  "relatedSlugs": [
    "spicy-duck-neck"
  ],
  "image": "/images/recipes/pickled-chicken-feet.webp"
};
