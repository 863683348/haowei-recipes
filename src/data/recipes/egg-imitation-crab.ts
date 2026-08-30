import type { Recipe } from "@/lib/types";

/** Egg Imitation Crab (赛螃蟹) | Scrambled Egg Dish That Tastes Like Seafood (赛螃蟹) — Day batch */
export const egg_imitation_crab: Recipe = {
  "id": "egg-imitation-crab",
  "slug": "egg-imitation-crab",
  "titleEn": "Egg Imitation Crab (赛螃蟹) | Scrambled Egg Dish That Tastes Like Seafood",
  "titleZh": "赛螃蟹",
  "pinyin": "sài páng xiè",
  "cuisine": "鲁菜",
  "cuisineEn": "Shandong",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "easy",
  "timeMin": 12,
  "servings": 2,
  "version": "family",
  "versionNote": "This classic Shandong dish uses only eggs, ginger, and vinegar to recreate crab taste.",
  "versionNoteZh": "经典鲁菜，仅用鸡蛋、姜、醋模仿蟹肉口感。",
  "tags": [
    "30-min",
    "vegetarian",
    "classic",
    "Shandong"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Sai pang xie - 'rivaling crab' - is a dish born from frugality and ingenuity.",
  "storyZh": "赛螃蟹是一道节俭与智慧催生的菜。",
  "ingredients": [
    {
      "id": "ec-01",
      "nameEn": "egg yolks only",
      "nameZh": "蛋黄（分离）",
      "amountMetric": "6 large yolks",
      "amountUS": "6 large yolks",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ec-02",
      "nameEn": "whole eggs",
      "nameZh": "鸡蛋（全蛋）",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ec-03",
      "nameEn": "fresh ginger, finely minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "15 g (3 tbsp)",
      "amountUS": "3 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ec-04",
      "nameEn": "chinkiang vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1.5 tbsp (22 ml)",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "ec-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ec-06",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ec-07",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "pinch",
      "amountUS": "pinch",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Separate eggs: collect 6 yolks in one bowl, 2 whole eggs in another.",
      "textZh": "分离鸡蛋6个蛋黄一碗2个全蛋一碗。",
      "zhHint": "蛋黄轻搅不破",
      "stateNote": {
        "visual": "Yolks bright orange spheres.",
        "signal": "Yolks intact."
      }
    },
    {
      "text": "Whisk whole eggs until uniform.",
      "textZh": "全蛋打匀。",
      "zhHint": "全蛋打匀",
      "stateNote": {
        "visual": "Egg mixture pale yellow.",
        "signal": "No streaks."
      }
    },
    {
      "text": "Mix minced ginger into yolks gently.",
      "textZh": "姜末拌入蛋黄。",
      "zhHint": "拌入姜末",
      "stateNote": {
        "visual": "Ginger distributed.",
        "signal": "Ginger aroma."
      }
    },
    {
      "text": "Heat oil over medium-low. Pour yolk-ginger mixture. Let set 15 seconds.",
      "textZh": "中低火下蛋黄姜末凝15秒。",
      "zhHint": "先下蛋黄低温",
      "stateNote": {
        "visual": "Edges golden-orange.",
        "heat": "medium-low",
        "timeRef": "15 seconds",
        "signal": "Gentle sizzle."
      }
    },
    {
      "text": "Push cooked yolks aside. Pour whole eggs. Let set 10 seconds.",
      "textZh": "推熟蛋黄倒全蛋液凝10秒。",
      "zhHint": "推黄入全蛋",
      "stateNote": {
        "visual": "Egg bottom sets.",
        "signal": "Bottom holds shape."
      }
    },
    {
      "text": "Fold into marbled curds. Drizzle vinegar. Add salt and pepper. Serve.",
      "textZh": "翻成大理石纹淋醋加盐胡椒上桌。",
      "stateNote": {
        "visual": "Marbled two-tone eggs.",
        "signal": "Vinegar aroma."
      }
    }
  ],
  "tips": [
    "Medium-low heat is critical.",
    "Add vinegar at end, not beginning.",
    "Goal is marbled two-tone eggs, not uniform yellow."
  ],
  "tipsZh": [
    "中低火是关键。",
    "醋最后加。",
    "目标是大理石双色蛋。"
  ],
  "relatedSlugs": [
    "tomato-and-egg",
    "cucumber-scrambled-eggs",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/egg-imitation-crab.webp"
};
