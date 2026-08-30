import type { Recipe } from "@/lib/types";

/** Zucchini Scrambled Eggs | Light, Juicy, Summer Chinese Comfort (西葫芦炒鸡蛋) — Day batch */
export const zucchini_scrambled_eggs: Recipe = {
  "id": "zucchini-scrambled-eggs",
  "slug": "zucchini-scrambled-eggs",
  "titleEn": "Zucchini Scrambled Eggs | Light, Juicy, Summer Chinese Comfort",
  "titleZh": "西葫芦炒鸡蛋",
  "pinyin": "xī hú lu chǎo dàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 12,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version: zucchini sliced thin, eggs fluffy.",
  "versionNoteZh": "家常版西葫芦薄切，鸡蛋蓬松。",
  "tags": [
    "30-min",
    "vegetarian",
    "summer"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "Chinese zucchini is a summer staple in northern China. Unlike Western courgette, it is milder and juicier.",
  "storyZh": "西葫芦是华北夏季的当家蔬菜。与西方courgette不同，它味道更淡、汁水更足。",
  "ingredients": [
    {
      "id": "zc-01",
      "nameEn": "zucchini",
      "nameZh": "西葫芦",
      "amountMetric": "300 g (1 large)",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "zucchini"
    },
    {
      "id": "zc-02",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "4 large",
      "amountUS": "4 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "zc-03",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "zc-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "zc-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "zc-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Halve zucchini, scoop out seeds. Slice into half-moons.",
      "textZh": "西葫芦去籽薄切半圆。",
      "zhHint": "去籽薄切",
      "stateNote": {
        "visual": "Zucchini uniform.",
        "signal": "Firm no soft spots."
      }
    },
    {
      "text": "Whisk eggs with salt until uniform.",
      "textZh": "蛋液打匀。",
      "zhHint": "蛋液打匀",
      "stateNote": {
        "visual": "Egg mixture pale yellow.",
        "signal": "Smooth no foam."
      }
    },
    {
      "text": "Heat oil over medium-high. Add zucchini, cook 60 seconds without stirring.",
      "textZh": "热油下西葫芦不翻动煎60秒。",
      "zhHint": "单面煎微焦",
      "stateNote": {
        "visual": "Edges translucent.",
        "heat": "medium-high",
        "timeRef": "60 seconds",
        "signal": "Caramelization visible."
      }
    },
    {
      "text": "Push zucchini aside. Add oil, pour eggs. Let set 10 seconds.",
      "textZh": "推菜入蛋静置10秒。",
      "zhHint": "推菜入蛋",
      "stateNote": {
        "visual": "Egg bottom sets.",
        "signal": "Eggs lift cleanly."
      }
    },
    {
      "text": "Scramble eggs, toss with zucchini. Add soy sauce and sesame oil, serve.",
      "textZh": "炒蛋翻匀加酱油香油上桌。",
      "stateNote": {
        "visual": "Dish glossy.",
        "signal": "Grassy and nutty aroma."
      }
    }
  ],
  "tips": [
    "Removing seeds is key - they release water.",
    "Do not overcook zucchini.",
    "Sesame oil at end adds depth."
  ],
  "tipsZh": [
    "去籽是关键。",
    "西葫芦勿久炒。",
    "出锅前淋香油。"
  ],
  "relatedSlugs": [
    "tomato-and-egg",
    "cucumber-scrambled-eggs",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/zucchini-scrambled-eggs.webp"
};
