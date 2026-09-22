import type { Recipe } from "@/lib/types";

/** Honey Soy Glazed Tofu (蜜汁豆腐) — Day 138 豆制品盛宴 */
export const honey_soy_tofu: Recipe = {
  "id": "honey-soy-tofu",
  "slug": "honey-soy-tofu",
  "titleEn": "Honey Soy Glazed Tofu",
  "titleZh": "蜜汁豆腐",
  "pinyin": "mì zhī dòu fu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Sweet and savory glazed tofu with a caramelized exterior — a Cantonese favorite.",
  "versionNoteZh": "甜咸 glazed 豆腐，焦糖化外壳——粤式最爱。",
  "tags": [
    "30-min",
    "cantonese",
    "vegetarian",
    "sweet-savory"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This Cantonese dish features tofu with a glossy, caramelized glaze made from soy sauce and honey. The contrast of sweet and savory is irresistible.",
  "storyZh": "这道粤式菜用豆腐配光泽焦糖化酱汁，由酱油和蜂蜜制成。甜咸对比令人无法抗拒。",
  "image": "/images/recipes/honey-soy-tofu.webp",
  "relatedSlugs": [
    "pan-fried-tofu",
    "braised-tofu",
    "home-style-tofu"
  ],
  "ingredients": [
    {
      "id": "hs-tofu-01",
      "nameEn": "firm tofu, sliced",
      "nameZh": "老豆腐，切片",
      "pinyin": "lǎo dòu fu",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "hs-soy-02",
      "nameEn": "soy sauce",
      "nameZh": "酱油",
      "pinyin": "jiàng yóu",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "soy-sauce"
    },
    {
      "id": "hs-honey-03",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "pinyin": "fēng mì",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Or rock sugar",
      "noteZh": "或冰糖"
    },
    {
      "id": "hs-oil-04",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "hs-ginger-05",
      "nameEn": "ginger, julienned",
      "nameZh": "生姜，切丝",
      "pinyin": "shēng jiāng",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Press tofu for 15 minutes. Cut into 2cm thick slices. Pat dry.",
      "textZh": "豆腐压15分钟，切2厘米厚片，吸干。",
      "zhHint": "吸干水分"
    },
    {
      "text": "Heat oil in a pan. Fry tofu slices for 2 minutes per side until golden.",
      "textZh": "热锅冷油，煎豆腐片每面2分钟至金黄。",
      "zhHint": "不要频繁翻面",
      "stateNote": {
        "visual": "Tofu has golden crust",
        "visualZh": "豆腐有金黄脆壳",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Crust releases easily",
        "signalZh": "脆壳轻易脱离"
      }
    },
    {
      "text": "Add ginger and stir-fry for 10 seconds.",
      "textZh": "下姜丝，翻炒10秒。",
      "zhHint": "快炒"
    },
    {
      "text": "Mix soy sauce and honey. Pour over tofu. Cook for 1 minute until glaze thickens and coats.",
      "textZh": "混合酱油和蜂蜜，淋在豆腐上，煮1分钟至酱汁变稠包裹。",
      "zhHint": "酱汁要浓",
      "stateNote": {
        "visual": "Sauce bubbles and thickens",
        "visualZh": "酱汁冒泡变稠",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Glaze clings to tofu",
        "signalZh": "glaze 粘附豆腐"
      }
    },
    {
      "text": "Serve immediately, garnished with sesame seeds.",
      "textZh": "立刻上桌，撒芝麻点缀。",
      "zhHint": "趁热"
    }
  ],
  "tips": [
    "Press tofu well for better glaze adhesion.",
    "Don't reduce the honey — it's essential for the gloss.",
    "Serve with steamed rice to soak up the glaze."
  ],
  "tipsZh": [
    "豆腐压干，glaze 更易粘附。",
    "别减少蜂蜜——光泽来自它。",
    "配米饭——吸glaze绝佳。"
  ]
};
