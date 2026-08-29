import type { Recipe } from "@/lib/types";

/** Chinese BBQ Lamb Skewers (羊肉串) — Seed batch */
export const lamb_skewers_chinese_bbq: Recipe = {
  "id": "yang-rou-chuan",
  "slug": "lamb-skewers-chinese-bbq",
  "titleEn": "Chinese BBQ Lamb Skewers",
  "titleZh": "羊肉串",
  "pinyin": "yang rou chuan",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Street Food",
  "region": "Xinjiang",
  "regionZh": "新疆",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses simple marinade and charcoal-free grilling—no wok hei needed, just deep lamb flavor and gentle char.",
  "versionNoteZh": "家常版不依赖炭火或专业烤炉，用平底锅/oven烤架模拟焦香，突出羊肉本味与温和焦感。",
  "tags": [
    "30-min",
    "weeknight",
    "grill"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Ürümqi taught me this on a summer evening in his courtyard—he skewered mutton shoulder by hand, brushed it with cumin oil, and turned each stick slowly over glowing coal. 'No rush,' he said, 'the meat tells you when it’s ready.'",
  "storyZh": "我在乌鲁木齐的舅舅在一个夏夜的院子里教我这道菜——他亲手将羊肩肉切块穿签，刷上孜然油，在红炭上慢翻。'别急，'他说，'肉自己会告诉你什么时候好了。'",
  "ingredients": [
    {
      "id": "lr-01",
      "nameEn": "boneless lamb shoulder",
      "nameZh": "羊肩肉（去骨）",
      "pinyin": "yang jian rou",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Look for well-marbled, bright pink meat; avoid pre-ground or frozen blocks.",
      "noteZh": "选带细纹雪花、色泽鲜粉的肉；避免预绞碎或冷冻块状肉。"
    },
    {
      "id": "lr-02",
      "nameEn": "toasted cumin seeds",
      "nameZh": "炒香孜然籽",
      "pinyin": "chao xiang zi ran zi",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Grind fresh in mortar or spice grinder—pre-ground loses aroma fast.",
      "noteZh": "现焙现磨最佳；市售粉香气易散。"
    },
    {
      "id": "lr-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "sheng chou",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "lr-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shao xing jiu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "lr-05",
      "nameEn": "neutral oil (e.g., grapeseed or canola)",
      "nameZh": "无味植物油（如葡萄籽油或菜籽油）",
      "pinyin": "wu wei zhi wu you",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut lamb into 2.5 cm cubes. Place in a bowl and pat dry with paper towels — excess moisture prevents browning.",
      "textZh": "将羊肉切成2.5厘米见方的块，放入碗中，用厨房纸吸干表面水分——多余水分会阻碍上色。",
      "zhHint": "擦干再腌",
      "stateNote": {
        "visual": "Meat cubes look matte, not glistening.",
        "visualZh": "肉块呈哑光状，无水光。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No water beads visible on surface.",
        "signalZh": "表面不见水珠。"
      }
    },
    {
      "text": "In a small pan over medium heat, toast cumin seeds until fragrant and lightly golden — about 1.5 minutes. Transfer to a mortar and crush coarsely.",
      "textZh": "小锅中火干焙孜然籽至微香、浅金黄（约1.5分钟），倒入研钵粗捣。",
      "zhHint": "焙香再捣",
      "stateNote": {
        "visual": "Seeds turn pale amber, some pop softly.",
        "visualZh": "籽粒呈浅琥珀色，偶有轻微爆裂声。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium",
        "signal": "Aromatic warmth rises — no smoke or darkening.",
        "signalZh": "散发暖香，无烟、无焦黑。"
      }
    },
    {
      "text": "Add light soy sauce, Shaoxing wine, and oil to the lamb. Mix in crushed cumin. Marinate 20 minutes at room temperature.",
      "textZh": "将生抽、绍兴酒、油和捣碎的孜然加入羊肉，拌匀，室温腌20分钟。",
      "zhHint": "室温短腌",
      "stateNote": {
        "visual": "Meat glistens faintly, coated in thin glossy marinade.",
        "visualZh": "肉块泛微光，裹薄亮酱汁。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Lamb fibers visibly relax and absorb liquid.",
        "signalZh": "肉纤维明显松弛，吸收酱汁。"
      }
    },
    {
      "text": "Thread 4–5 cubes per bamboo skewer (soak skewers in water 30 min first). Leave 3 mm space between pieces for even cooking.",
      "textZh": "每根竹签穿4–5块肉（提前清水浸泡30分钟），块间留3毫米空隙以利受热均匀。",
      "zhHint": "留缝才熟透",
      "stateNote": {
        "visual": "Skewers hold meat snugly but not compressed.",
        "visualZh": "肉块贴签但不挤压。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No gaps wider than 3 mm between cubes.",
        "signalZh": "块间缝隙不超过3毫米。"
      }
    },
    {
      "text": "Heat a cast-iron grill pan over medium-high heat until smoking lightly. Grill skewers 2–3 minutes per side, turning once, until edges are deeply caramelized and center is just cooked through.",
      "textZh": "铸铁烤盘中高火烧至微冒青烟，每面烤2–3分钟，翻一次，至边缘深褐焦糖化、中心刚熟。",
      "zhHint": "中高温快烤",
      "stateNote": {
        "visual": "Edges show dark mahogany char, interior slightly springy.",
        "visualZh": "边缘呈深红褐色焦痕，内里略弹。",
        "timeRef": "4–6 minutes total",
        "timeRefZh": "共4–6分钟",
        "heat": "medium-high",
        "signal": "Sizzle intensifies; meat releases easily from pan.",
        "signalZh": "滋滋声变强；肉块可轻松离锅。"
      }
    }
  ],
  "tips": [
    "Use shoulder, not leg — it’s fattier and stays juicy on skewers.",
    "If using oven: broil on middle rack, 15 cm from element, 4 minutes per side.",
    "Serve immediately — lamb dries out fast off heat."
  ],
  "tipsZh": [
    "选羊肩肉而非羊腿肉——脂肪更丰盈，烤后多汁不柴。",
    "烤箱做法：置于中层，距加热管15厘米，每面烤4分钟。",
    "即烤即食——离火稍久羊肉易变干。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/lamb-skewers-chinese-bbq.webp"
};
