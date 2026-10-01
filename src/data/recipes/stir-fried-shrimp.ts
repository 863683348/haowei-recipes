import type { Recipe } from "@/lib/types";

/** Stir-Fried Shrimp (清炒虾仁) (清炒虾仁) — Day batch */
export const stir_fried_shrimp: Recipe = {
  "id": "qing-chao-xia-ren",
  "slug": "stir-fried-shrimp",
  "titleEn": "Stir-Fried Shrimp (清炒虾仁)",
  "titleZh": "清炒虾仁",
  "pinyin": "qīng chǎo xiā rén",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang Cuisine",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version velvets shelled shrimp in egg white and cornstarch, then stir-fries them barely 60 seconds so they stay bouncy and sweet.",
  "versionNoteZh": "家常版虾仁以蛋清淀粉上浆，猛火快炒约60秒，保弹保甜。",
  "tags": [
    "shrimp",
    "huaiyang",
    "quick",
    "light"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Qing chao xia ren is restraint on a plate — no heavy sauce, just shrimp that tastes like shrimp.",
  "storyZh": "清炒虾仁是盘中的克制：不靠重汁，只让虾有虾味。",
  "ingredients": [
    {
      "id": "scx-01",
      "nameEn": "shelled shrimp",
      "nameZh": "虾仁",
      "pinyin": "xiā rén",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Butterfly for even cooking.",
      "noteZh": "开背更匀熟。"
    },
    {
      "id": "scx-02",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "pinyin": "dàn qīng",
      "amountMetric": "1 pc",
      "amountUS": "1 white",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "scx-03",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "scx-04",
      "nameEn": "ginger, minced",
      "nameZh": "姜（剁末）",
      "pinyin": "jiāng",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "scx-05",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "pinyin": "liào jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cooking-wine"
    },
    {
      "id": "scx-06",
      "nameEn": "white pepper",
      "nameZh": "白胡椒",
      "pinyin": "bái hú jiāo",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "scx-07",
      "nameEn": "scallion, minced",
      "nameZh": "葱（剁末）",
      "pinyin": "cōng",
      "amountMetric": "10 g",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Marinate shrimp with egg white, cornstarch, cooking wine, and white pepper 10 minutes.",
      "textZh": "虾仁加蛋清、玉米淀粉、料酒、白胡椒腌10分钟。",
      "zhHint": "上浆",
      "stateNote": {
        "visual": "Shrimp look glossy and coated.",
        "visualZh": "虾仁发亮挂浆。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Slurry clings without dripping.",
        "signalZh": "浆液挂住不滴。"
      }
    },
    {
      "text": "Heat oil over high heat; add ginger; then shrimp in a single layer.",
      "textZh": "热油下姜，再下虾仁单层铺开。",
      "zhHint": "热油下虾",
      "stateNote": {
        "visual": "Shrimp hit the pan with a sharp sizzle.",
        "visualZh": "虾仁入锅一声脆响。",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "heat": "high",
        "signal": "Pan is properly hot.",
        "signalZh": "锅已够热。"
      }
    },
    {
      "text": "Stir-fry 45 seconds until they just turn pink and curl.",
      "textZh": "翻炒45秒至刚变粉、卷曲。",
      "zhHint": "快炒",
      "stateNote": {
        "visual": "Shrimp turn opaque pink and C-shaped.",
        "visualZh": "虾仁转粉白、成C形。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "Edges firm but centers still tender.",
        "signalZh": "边缘紧、中心仍嫩。"
      }
    },
    {
      "text": "Add scallion; toss 10 seconds; season with a pinch of salt.",
      "textZh": "下葱，翻10秒，撒少许盐。",
      "zhHint": "撒葱调味",
      "stateNote": {
        "visual": "Scallion brightens and shrimp glisten.",
        "visualZh": "葱转翠、虾发亮。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Aroma is clean and sweet.",
        "signalZh": "香气清爽带甜。"
      }
    },
    {
      "text": "Plate at once — overcooking turns them rubbery.",
      "textZh": "立刻装盘，过火就老。",
      "zhHint": "出锅",
      "stateNote": {
        "visual": "Shrimp sit plump and glossy.",
        "visualZh": "虾仁饱满油亮。",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "heat": "high",
        "signal": "Steam is light, not billowing.",
        "signalZh": "热气轻、不腾。"
      }
    }
  ],
  "tips": [
    "The whole stir-fry is under 90 seconds — have everything ready.",
    "Egg-white velvet keeps the shrimp bouncy, not chalky.",
    "Stop cooking the moment they curl; residual heat finishes them."
  ],
  "tipsZh": [
    "全程不足90秒，料要备齐。",
    "蛋清上浆，虾弹不柴。",
    "一卷曲就停，余温会收尾。"
  ],
  "commonMistakes": [
    {
      "mistake": "Overcooking so shrimp turn rubbery.",
      "mistakeZh": "炒久变橡胶。",
      "fix": "Pull them the second they curl.",
      "fixZh": "卷曲即离火。"
    },
    {
      "mistake": "Skipping the velvet so they weep water.",
      "mistakeZh": "不上浆出水。",
      "fix": "Always coat in egg white and cornstarch first.",
      "fixZh": "先裹蛋清淀粉。"
    }
  ],
  "variations": [
    "Add peas and carrot cubes for color.",
    "Toss with a few cashews for crunch."
  ],
  "variationsZh": [
    "加青豆胡萝卜丁添色。",
    "拌几颗腰果增脆。"
  ],
  "relatedSlugs": [
    "braised-fish-cubes",
    "sweet-sour-carp",
    "dry-braised-crucian",
    "sauce-braised-croaker",
    "pan-fried-hairtail",
    "scallion-oil-turbot",
    "tomato-fish-slices",
    "salt-pepper-croaker",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
