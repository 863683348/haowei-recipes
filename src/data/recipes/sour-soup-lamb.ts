import type { Recipe } from "@/lib/types";

/** Sour Soup Lamb (酸汤羊肉) (酸汤羊肉) — Day batch */
export const sour_soup_lamb: Recipe = {
  "id": "suan-tang-yang-rou",
  "slug": "sour-soup-lamb",
  "titleEn": "Sour Soup Lamb (酸汤羊肉)",
  "titleZh": "酸汤羊肉",
  "pinyin": "suān tāng yáng ròu",
  "cuisine": "贵州菜",
  "cuisineEn": "Guizhou",
  "region": "Guizhou",
  "regionZh": "贵州",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version builds a hot-sour broth from tomato and pickled chili, then poaches lamb slices — the Guizhou answer to a cold day, bright instead of heavy.",
  "versionNoteZh": "家常版以番茄与糟辣椒吊出酸辣汤，汆羊肉片——贵州版的御寒汤，酸亮不腻。",
  "tags": [
    "soup",
    "sour-spicy",
    "hot-pot",
    "lamb"
  ],
  "dietary": [
    "halal"
  ],
  "story": "In Guizhou every household keeps a jar of pickled chili. This soup is their winter default — sour, hot, and so bright it wakes you up.",
  "storyZh": "贵州人家家一坛糟辣椒。这酸汤是他们的冬日默认——酸辣透亮，一喝就醒。",
  "ingredients": [
    {
      "id": "ss-01",
      "nameEn": "lamb slices (hot-pot style)",
      "nameZh": "羊肉片（火锅式）",
      "pinyin": "yáng ròu piàn",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Thin slices cook in seconds.",
      "noteZh": "薄片秒熟。"
    },
    {
      "id": "ss-02",
      "nameEn": "tomato, diced",
      "nameZh": "番茄（切丁）",
      "pinyin": "fān qié",
      "amountMetric": "200 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "ss-03",
      "nameEn": "pickled chili (zao la jiao) or chili flakes",
      "nameZh": "糟辣椒（或辣椒粉）",
      "pinyin": "zāo là jiāo",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "ss-04",
      "nameEn": "white vinegar or rice vinegar",
      "nameZh": "白醋/米醋",
      "pinyin": "cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "ss-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ss-06",
      "nameEn": "scallion + cilantro, for garnish",
      "nameZh": "葱+香菜（点缀）",
      "pinyin": "cōng + xiāng cài",
      "amountMetric": "15 g",
      "amountUS": "handful",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "In a pot, sauté tomato and pickled chili over medium heat until tomato breaks down into a soft pulp.",
      "textZh": "锅中火炒番茄与糟辣椒至番茄软烂成酱。",
      "zhHint": "炒出番茄酱",
      "stateNote": {
        "visual": "Tomato collapses to a glossy red pulp.",
        "visualZh": "番茄塌成油亮红酱。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "Sour-sweet aroma rises.",
        "signalZh": "酸甜味起。"
      }
    },
    {
      "text": "Add 600 ml water and vinegar; bring to a boil to form the sour broth.",
      "textZh": "加水600ml与醋煮沸，成酸汤。",
      "zhHint": "注水成汤",
      "stateNote": {
        "visual": "Broth turns pink-red and slightly cloudy.",
        "visualZh": "汤转粉红微浊。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Tangy steam with chili heat.",
        "signalZh": "酸辣蒸汽带刺。"
      }
    },
    {
      "text": "Add Shaoxing wine; slide lamb slices in and cook 1 minute until just opaque.",
      "textZh": "下绍兴酒，滑入羊肉片煮1分钟至刚白。",
      "zhHint": "汆羊肉片",
      "stateNote": {
        "visual": "Lamb turns white and curls at edges.",
        "visualZh": "羊肉转白、边微卷。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Meat cooked through but still tender.",
        "signalZh": "肉已熟仍嫩。"
      }
    },
    {
      "text": "Taste and adjust vinegar/salt; keep at a lively simmer.",
      "textZh": "尝味调醋与盐，保持轻沸。",
      "zhHint": "调酸定咸",
      "stateNote": {
        "visual": "Surface shimmers; broth clarity returns.",
        "visualZh": "汤面微漾，复转清。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Bright, mouth-watering sourness.",
        "signalZh": "明亮开胃的酸。"
      }
    },
    {
      "text": "Scatter scallion and cilantro; serve hot as a soup course.",
      "textZh": "撒葱与香菜，趁热作汤上桌。",
      "zhHint": "撒香菜出锅",
      "stateNote": {
        "visual": "Greens bright atop pink-red broth.",
        "visualZh": "青绿浮于粉红汤。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Fresh herb lifts the sour heat.",
        "signalZh": "香草提酸辣。"
      }
    }
  ],
  "tips": [
    "Balance the sour: add vinegar at the end so it stays bright, not flat.",
    "Use thin hot-pot lamb slices — they poach in under a minute.",
    "Pickled chili gives authentic Guizhou tang; chili flakes are a fine backup."
  ],
  "tipsZh": [
    "酸要收尾加醋，才亮不闷。",
    "用火锅羊肉薄片，一分即熟。",
    "糟辣椒最正宗；辣椒粉亦可。"
  ],
  "relatedSlugs": [
    "lamb-glass-noodle-pot",
    "cumin-lamb",
    "angelica-ginger-lamb-soup",
    "radish-lamb-stew"
  ],
  "image": "/images/recipes/og-default.webp"
};
