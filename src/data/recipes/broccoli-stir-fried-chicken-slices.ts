import type { Recipe } from "@/lib/types";

/** Broccoli Stir-Fried Chicken Slices (西兰花炒鸡片) (西兰花炒鸡片) — Day batch */
export const broccoli_stir_fried_chicken_slices: Recipe = {
  "id": "broccoli-stir-fried-chicken-slices",
  "slug": "broccoli-stir-fried-chicken-slices",
  "titleEn": "Broccoli Stir-Fried Chicken Slices (西兰花炒鸡片)",
  "titleZh": "西兰花炒鸡片",
  "pinyin": "xi lan hua chao ji pian",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Nutritious broccoli meets tender chicken in this vibrant stir-fry.",
  "versionNoteZh": "营养西兰花配嫩鸡片，色彩鲜艳。",
  "tags": [
    "30-min",
    "weeknight",
    "chicken",
    "healthy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Broccoli chicken stir-fry is the healthy weeknight go-to.",
  "storyZh": "西兰花炒鸡片是健康工作日晚餐的首选。",
  "ingredients": [
    {
      "id": "bc-01",
      "nameEn": "chicken breast, sliced thin",
      "nameZh": "鸡胸肉切片",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "bc-02",
      "nameEn": "broccoli florets",
      "nameZh": "西兰花",
      "amountMetric": "1 large head",
      "amountUS": "1 head",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "bc-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "bc-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "bc-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "bc-06",
      "nameEn": "cornstarch",
      "nameZh": "淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "bc-07",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Slice chicken against grain, marinate with soy, Shaoxing, and 1/2 tbsp cornstarch. Rest 10 minutes.",
      "textZh": "鸡胸逆纹切片，加生抽、料酒半汤匙淀粉腌10分钟。",
      "zhHint": "上浆",
      "stateNote": {
        "visual": "Chicken glossy coated",
        "visualZh": "鸡片油亮裹浆",
        "timeRef": "10 minutes",
        "signal": "Tacky"
      }
    },
    {
      "text": "Cut broccoli into bite-sized florets. Blanch in boiling salted water 2 minutes. Shock in cold water.",
      "textZh": "西兰花切小朵，盐开水焯2分钟，过凉水。",
      "zhHint": "焯西兰花",
      "stateNote": {
        "visual": "Broccoli bright neon green",
        "visualZh": "西兰花鲜亮翠绿",
        "timeRef": "2 minutes",
        "signal": "Vibrant green color"
      }
    },
    {
      "text": "Heat oil high. Sear chicken 2 minutes until golden.",
      "textZh": "热油大火，鸡片煎2分钟至金黄。",
      "zhHint": "煎鸡",
      "stateNote": {
        "visual": "Chicken golden opaque",
        "visualZh": "鸡片金黄不透生",
        "heat": "high",
        "timeRef": "2 minutes",
        "signal": "No pink inside"
      }
    },
    {
      "text": "Add garlic, stir 15 seconds. Add broccoli, toss 30 seconds.",
      "textZh": "下蒜末炒香15秒，加西兰花翻30秒。",
      "zhHint": "合炒",
      "stateNote": {
        "visual": "Broccoli glossy bright",
        "visualZh": "西兰花油亮翠绿",
        "heat": "high",
        "timeRef": "30 seconds",
        "signal": "Aromatic"
      }
    },
    {
      "text": "Add remaining cornstarch slurry. Toss until glossy. Serve.",
      "textZh": "剩余淀粉水倒入，翻炒至油亮。",
      "zhHint": "勾芡",
      "stateNote": {
        "visual": "Sauce clings to all",
        "visualZh": "酱汁均匀包裹",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Blanch broccoli first.",
    "Do not overcook — stay crisp-tender.",
    "Use chicken thighs for more flavor."
  ],
  "tipsZh": [
    "西兰花先焯。",
    "别炒过头——保持脆嫩。",
    "鸡腿肉更香。"
  ],
  "relatedSlugs": [
    "beef-and-broccoli",
    "mushroom-stir-fried-chicken-slices",
    "black-pepper-chicken-dice"
  ],
  "image": "/images/recipes/broccoli-stir-fried-chicken-slices.webp"
};
