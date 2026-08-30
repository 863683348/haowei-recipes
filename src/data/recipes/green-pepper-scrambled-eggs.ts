import type { Recipe } from "@/lib/types";

/** Green Pepper Scrambled Eggs | Crisp, Colorful, Ready in 10 Minutes (青椒炒鸡蛋) — Day batch */
export const green_pepper_scrambled_eggs: Recipe = {
  "id": "green-pepper-scrambled-eggs",
  "slug": "green-pepper-scrambled-eggs",
  "titleEn": "Green Pepper Scrambled Eggs | Crisp, Colorful, Ready in 10 Minutes",
  "titleZh": "青椒炒鸡蛋",
  "pinyin": "qīng jiāo chǎo dàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northeast China",
  "regionZh": "东北",
  "difficulty": "easy",
  "timeMin": 10,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version keeps peppers crisp-tender with light soy.",
  "versionNoteZh": "家常版青椒脆嫩，生抽轻点。",
  "tags": [
    "30-min",
    "vegetarian",
    "weeknight"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "This dish is a Northeast Chinese staple — simple, colorful, and deeply satisfying.",
  "storyZh": "这是东北人家的拿手菜——简单、色彩明快、满足感强。",
  "ingredients": [
    {
      "id": "gp-01",
      "nameEn": "green bell pepper",
      "nameZh": "青椒",
      "amountMetric": "2 medium (250 g)",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "green-pepper"
    },
    {
      "id": "gp-02",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "4 large",
      "amountUS": "4 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "gp-03",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gp-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gp-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Core and seed peppers. Cut into 2 cm strips. Whisk eggs with salt.",
      "textZh": "青椒去蒂去籽切条，蛋液打匀。",
      "zhHint": "青椒切条",
      "stateNote": {
        "visual": "Pepper strips uniform.",
        "signal": "Peppers firm."
      }
    },
    {
      "text": "Heat oil over high until shimmering. Add peppers, spread single layer.",
      "textZh": "大火热油下青椒铺单层。",
      "zhHint": "大火热油",
      "stateNote": {
        "visual": "Oil shimmers.",
        "heat": "high",
        "timeRef": "60 seconds",
        "signal": "Water sizzles."
      }
    },
    {
      "text": "Stir-fry 90 seconds until edges blister.",
      "textZh": "猛火快炒90秒至边缘起泡。",
      "zhHint": "大火快炒",
      "stateNote": {
        "visual": "Peppers char lightly.",
        "heat": "high",
        "timeRef": "90 seconds",
        "signal": "Sweet aroma."
      }
    },
    {
      "text": "Push peppers aside. Add oil, pour eggs. Let set 10 seconds.",
      "textZh": "推椒入蛋，静置10秒。",
      "zhHint": "推椒入蛋",
      "stateNote": {
        "visual": "Egg bottom sets.",
        "signal": "Bottom holds shape."
      }
    },
    {
      "text": "Scramble into curds, toss with peppers. Add soy sauce, serve.",
      "textZh": "炒成大块翻匀加生抽上桌。",
      "stateNote": {
        "visual": "Eggs coat peppers.",
        "signal": "Aromatic soy scent."
      }
    }
  ],
  "tips": [
    "High heat essential - low heat makes peppers watery.",
    "Do not overcook peppers.",
    "Add fresh chili for heat lovers."
  ],
  "tipsZh": [
    "火候必须大。",
    "青椒不要炒过头。",
    "爱吃辣的加鲜辣椒。"
  ],
  "relatedSlugs": [
    "tomato-and-egg",
    "cucumber-scrambled-eggs",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/green-pepper-scrambled-eggs.webp"
};
