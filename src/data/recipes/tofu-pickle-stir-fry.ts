import type { Recipe } from "@/lib/types";

/** Pickled Vegetable and Tofu Stir-Fry (泡菜炒豆腐) — Day 138 豆制品盛宴 */
export const tofu_pickle_stir_fry: Recipe = {
  "id": "tofu-pickle-stir-fry",
  "slug": "tofu-pickle-stir-fry",
  "titleEn": "Pickled Vegetable and Tofu Stir-Fry",
  "titleZh": "泡菜炒豆腐",
  "pinyin": "pào cài chǎo dòu fu",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Tangy pickled vegetables with crispy tofu — a Sichuan peasant dish that's endlessly addictive.",
  "versionNoteZh": "酸爽泡菜配酥脆豆腐——四川 peasant 菜，百吃不厌。",
  "tags": [
    "30-min",
    "sichuan",
    "vegetarian",
    "quick",
    "appetizer"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This dish uses Sichuan pickled vegetables (泡菜) which add a bright tangy acidity that cuts through the richness of fried tofu.",
  "storyZh": "这道菜用四川泡菜，增添明亮的酸爽风味，中和煎豆腐的油腻感。",
  "image": "/images/recipes/tofu-pickle-stir-fry.webp",
  "relatedSlugs": [
    "mapo-tofu",
    "stir-fried-dried-tofu-with-celery",
    "sour-cabbage-pork"
  ],
  "ingredients": [
    {
      "id": "pt-tofu-01",
      "nameEn": "firm tofu, cubed",
      "nameZh": "老豆腐，切块",
      "pinyin": "lǎo dòu fu",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "pt-pickle-02",
      "nameEn": "Sichuan pickled vegetables",
      "nameZh": "四川泡菜",
      "pinyin": "sì chuān pào cài",
      "amountMetric": "150 g",
      "amountUS": "about 5 oz",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Chopped coarsely",
      "noteZh": "粗切"
    },
    {
      "id": "pt-chili-03",
      "nameEn": "dried red chilies, whole",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "5 whole",
      "amountUS": "5 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "pt-garlic-04",
      "nameEn": "garlic cloves, sliced",
      "nameZh": "大蒜，切片",
      "pinyin": "dà suàn",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "pt-oil-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut tofu into 2cm cubes. Pat dry. Heat oil in a wok over medium-high heat.",
      "textZh": "豆腐切2厘米块，吸干。中火热锅冷油。",
      "zhHint": "豆腐要干"
    },
    {
      "text": "Fry tofu for 3-4 minutes until golden on all sides. Remove and drain.",
      "textZh": "煎豆腐3-4分钟至四面金黄。捞出沥油。",
      "zhHint": "四面金黄",
      "stateNote": {
        "visual": "Tofu is golden and crisp",
        "visualZh": "豆腐金黄酥脆",
        "timeRef": "3-4 minutes",
        "timeRefZh": "3-4 分钟",
        "heat": "medium-high",
        "signal": "Crust forms on all sides",
        "signalZh": "四面形成脆壳"
      }
    },
    {
      "text": "Add dried chilies and garlic. Stir-fry for 15 seconds until fragrant.",
      "textZh": "下干辣椒和大蒜片，爆香15秒。",
      "zhHint": "快炒不焦"
    },
    {
      "text": "Add pickled vegetables and fried tofu. Toss for 1 minute. Season with a pinch of sugar.",
      "textZh": "下泡菜和煎豆腐，翻炒1分钟，加少许糖提鲜。",
      "zhHint": "泡菜本身咸，不用加盐"
    },
    {
      "text": "Serve immediately while tofu is still crispy.",
      "textZh": "立刻上桌，豆腐要还保持脆感。",
      "zhHint": "趁脆"
    }
  ],
  "tips": [
    "Don't skip patting tofu dry — moisture prevents crisping.",
    "Sichuan pickled vegetables are essential; regular kimchi won't work.",
    "The dish should be dry, not soupy."
  ],
  "tipsZh": [
    "别省略吸干豆腐——水分阻止脆化。",
    "必须用四川泡菜；普通泡菜不行。",
    "这道菜要干，不要带汤。"
  ]
};
