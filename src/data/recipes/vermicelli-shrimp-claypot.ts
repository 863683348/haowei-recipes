import type { Recipe } from "@/lib/types";

/** Vermicelli Shrimp Claypot (粉丝虾球煲) (粉丝虾球煲) — Day batch */
export const vermicelli_shrimp_claypot: Recipe = {
  "id": "vermicelli-shrimp-claypot",
  "slug": "vermicelli-shrimp-claypot",
  "titleEn": "Vermicelli Shrimp Claypot (粉丝虾球煲)",
  "titleZh": "粉丝虾球煲",
  "pinyin": "fěn sī xiā qiú bāo",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Fujian",
  "regionZh": "福建",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "闽式粉丝虾球煲，鲜虾与粉丝在砂锅中交融。",
  "versionNoteZh": "闽式粉丝虾球煲，鲜虾与粉丝在砂锅中交融。",
  "tags": [
    "claypot",
    "shrimp",
    "vermicelli",
    "cantonese"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Fujian coastal cooking at its finest. Vermicelli absorbs shrimp broth, shrimp gain sweetness from the noodles — a perfect partnership in a claypot.",
  "storyZh": "福建沿海烹饪的精华。粉丝吸虾汤，虾借粉丝甜味——砂锅里的完美搭档。",
  "ingredients": [
    {
      "id": "vsc-1",
      "nameEn": "large shrimp, deveined",
      "nameZh": "大虾",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "vsc-2",
      "nameEn": "mung bean vermicelli",
      "nameZh": "粉丝",
      "amountMetric": "80 g",
      "amountUS": "2.8 oz",
      "category": "staple",
      "pantry": "asian"
    },
    {
      "id": "vsc-3",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "5 cloves",
      "amountUS": "5 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "vsc-4",
      "nameEn": "scallion, chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "vsc-5",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "vsc-6",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Soak vermicelli in warm water 10 minutes until soft.",
      "textZh": "粉丝温水浸泡10分钟至软。",
      "stateNote": {
        "visual": "Noodles translucent and pliable.",
        "visualZh": "粉丝透明柔软。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No hard center when bent.",
        "signalZh": "弯折无硬芯。"
      }
    },
    {
      "text": "Sauté garlic in claypot 30 seconds until fragrant.",
      "textZh": "砂锅爆香蒜末，30秒。",
      "stateNote": {
        "visual": "Garlic turns pale gold.",
        "visualZh": "蒜末微金黄。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aroma is pungent.",
        "signalZh": "香气浓。"
      }
    },
    {
      "text": "Add shrimp, stir-fry 1 minute.",
      "textZh": "下虾，翻炒1分钟。",
      "stateNote": {
        "visual": "Shrimp turns pink.",
        "visualZh": "虾变粉红。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Shrimp curls.",
        "signalZh": "虾卷曲。"
      }
    },
    {
      "text": "Add drained noodles, pour in 200ml water and oyster sauce.",
      "textZh": "下沥干的粉丝，冲入200毫升水和蚝油。",
      "stateNote": {
        "visual": "Noodles absorb sauce.",
        "visualZh": "粉丝吸汁。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Noodles are glossy.",
        "signalZh": "粉丝有光泽。"
      }
    },
    {
      "text": "Cover and simmer 3 minutes. Garnish with scallion. Serve.",
      "textZh": "盖盖焖3分钟，撒葱花，热盛。",
      "stateNote": {
        "visual": "Broth is reduced, shrimp is cooked.",
        "visualZh": "汤汁收浓，虾熟透。",
        "signal": "Shrimp springs back when pressed.",
        "signalZh": "虾轻压回弹。"
      }
    }
  ],
  "tips": [
    "Don't overcook shrimp — they curl when done.",
    "Soak vermicelli in warm, not hot, water."
  ],
  "tipsZh": [
    "虾不要煮过头——卷曲就熟了。",
    "粉丝用温水泡，不是热水。"
  ],
  "relatedSlugs": [
    "seafood-tofu-claypot",
    "garlic-lass-greens"
  ],
  "image": "/images/recipes/vermicelli-shrimp-claypot.webp"
};
