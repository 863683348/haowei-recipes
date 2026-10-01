import type { Recipe } from "@/lib/types";

/** Cumin Lamb (孜然羊肉) (孜然羊肉) — Day batch */
export const cumin_lamb: Recipe = {
  "id": "zi-ran-yang-rou",
  "slug": "cumin-lamb",
  "titleEn": "Cumin Lamb (孜然羊肉)",
  "titleZh": "孜然羊肉",
  "pinyin": "zī rán yáng ròu",
  "cuisine": "西北菜",
  "cuisineEn": "Northwest Chinese",
  "region": "Xinjiang",
  "regionZh": "新疆",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses thinly sliced lamb leg, flash-fried with whole cumin and dried chilies. No deep-frying — just a hot wok and fast hands.",
  "versionNoteZh": "家常版羊腿肉薄片，与整孜然、干辣椒猛火快炒。不炸，只靠热锅快手。",
  "tags": [
    "lamb-stir-fry",
    "20-min",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "halal"
  ],
  "story": "This is the dish that made me love lamb. A street vendor in Xi'an tossed it in a wok the size of a washing machine, and the cumin hit me before the plate did.",
  "storyZh": "正是这道菜让我爱上羊肉。西安街头师傅用洗衣机大的锅一颠，孜然味比盘子先到。",
  "ingredients": [
    {
      "id": "cl-01",
      "nameEn": "boneless lamb leg, thinly sliced",
      "nameZh": "羊腿肉（薄切）",
      "pinyin": "yáng tuǐ ròu",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Freeze 20 minutes before slicing for clean thin cuts.",
      "noteZh": "切前冻20分钟更易薄片。"
    },
    {
      "id": "cl-02",
      "nameEn": "whole cumin seeds",
      "nameZh": "孜然籽",
      "pinyin": "zī rán zǐ",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "cl-03",
      "nameEn": "dried red chilies, halved",
      "nameZh": "干红辣椒（剪段）",
      "pinyin": "gān là jiāo",
      "amountMetric": "10 g",
      "amountUS": "4-5 peppers",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "cl-04",
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
      "id": "cl-05",
      "nameEn": "neutral oil",
      "nameZh": "植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "25 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cl-06",
      "nameEn": "scallion, cut into rings",
      "nameZh": "葱（切圈）",
      "pinyin": "cōng",
      "amountMetric": "30 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Toss lamb with Shaoxing wine. Marinate 10 minutes at room temperature.",
      "textZh": "羊肉加绍兴酒拌匀，室温腌10分钟。",
      "zhHint": "酒腌羊肉",
      "stateNote": {
        "visual": "Meat surface looks faintly moist and glossy.",
        "visualZh": "肉面微润有光。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Alcohol edge softens.",
        "signalZh": "酒气转柔。"
      }
    },
    {
      "text": "Heat wok over high heat until smoking. Add oil, then lamb in a single layer; sear 45 seconds without stirring.",
      "textZh": "旺火将锅烧至冒烟，下油，羊肉单层铺入，静置45秒不翻。",
      "zhHint": "单层定焦",
      "stateNote": {
        "visual": "Edges brown; lamb releases clear juice.",
        "visualZh": "边缘褐变，渗出清汁。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "Sizzle deepens and steadies.",
        "signalZh": "滋啦声转沉、趋稳。"
      }
    },
    {
      "text": "Add cumin seeds and dried chilies; stir-fry 30 seconds until fragrant and the chilies darken slightly.",
      "textZh": "下孜然籽与干辣椒，翻炒30秒至香、辣椒微深。",
      "zhHint": "爆香孜辣",
      "stateNote": {
        "visual": "Chilies turn deep red; cumin smells toasty.",
        "visualZh": "辣椒转深红，孜然焙香。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Aroma is sharp, warm, and nutty — not burnt.",
        "signalZh": "香气辛暖带坚果感，未焦。"
      }
    },
    {
      "text": "Add scallions and toss 20 seconds until just wilted.",
      "textZh": "下葱圈翻拌20秒至刚软。",
      "zhHint": "快炒葱圈",
      "stateNote": {
        "visual": "Scallions brighten and lose raw stiffness.",
        "visualZh": "葱圈转翠、去生硬。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Color stays vivid green.",
        "signalZh": "色泽仍鲜绿。"
      }
    },
    {
      "text": "Season with salt and serve immediately over rice or with flatbread.",
      "textZh": "加盐调味，即刻配饭或饼食用。",
      "zhHint": "调味出锅",
      "stateNote": {
        "visual": "Lamb glistens with oil and speckles of cumin.",
        "visualZh": "羊肉油润、缀满孜然粒。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Wok hei rises — smoky and savory.",
        "signalZh": "锅气上来，烟香咸鲜。"
      }
    }
  ],
  "tips": [
    "Slice against the grain after a brief freeze for tenderness.",
    "Keep the wok screaming hot — cumin lamb is a 2-minute dish.",
    "Add chilies off-heat if you want less heat."
  ],
  "tipsZh": [
    "冻后逆纹切，嫩而不柴。",
    "锅要极热，孜然羊肉全程两分钟。",
    "怕辣可关火后再下辣椒。"
  ],
  "relatedSlugs": [
    "roast-lamb-chops",
    "hand-torn-lamb",
    "lamb-skewers-chinese-bbq",
    "sour-soup-lamb"
  ],
  "image": "/images/recipes/og-default.webp"
};
