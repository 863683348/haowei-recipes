import type { Recipe } from "@/lib/types";

/** Red-Braised Chicken Wings (红烧鸡翅) (红烧鸡翅) — Day batch */
export const red_braised_chicken_wings: Recipe = {
  "id": "red-braised-chicken-wings",
  "slug": "red-braised-chicken-wings",
  "titleEn": "Red-Braised Chicken Wings (红烧鸡翅)",
  "titleZh": "红烧鸡翅",
  "pinyin": "hong shao ji chi",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Classic hongshao technique with chicken wings — glossy, savory-sweet.",
  "versionNoteZh": "经典红烧手法配鸡翅——红亮咸甜。",
  "tags": [
    "comfort",
    "chicken",
    "braised",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "Red-braised chicken wings are China's answer to braised short ribs — deep, glossy, and deeply satisfying.",
  "storyZh": "红烧鸡翅是中式的红烧短肋——深透、油亮、满足感极强。",
  "ingredients": [
    {
      "id": "rb-01",
      "nameEn": "chicken wings, halved at joint",
      "nameZh": "鸡翅中切半",
      "amountMetric": "8 (about 500 g)",
      "amountUS": "8 (about 1.1 lb)",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "rb-02",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "rb-03",
      "nameEn": "scallions, cut into 3 cm sections",
      "nameZh": "葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "rb-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "rb-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "rb-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "rb-07",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "rb-08",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Score wings on both sides. Blanch in boiling water 2 minutes. Remove and pat dry.",
      "textZh": "鸡翅两面各划两刀。沸水焯2分钟，捞出擦干。",
      "zhHint": "焯水去腥",
      "stateNote": {
        "visual": "Wings firm, surface dry",
        "visualZh": "鸡翅紧实，表面干燥",
        "timeRef": "2 minutes",
        "signal": "No pink bleeding"
      }
    },
    {
      "text": "Heat oil medium. Sear wings 3 minutes per side until golden.",
      "textZh": "热油中火，鸡翅煎3分钟每面至金黄。",
      "zhHint": "煎鸡翅",
      "stateNote": {
        "visual": "Skin lacquered golden",
        "visualZh": "鸡皮金黄漆亮",
        "heat": "medium",
        "timeRef": "3 minutes per side",
        "signal": "Crisp skin"
      }
    },
    {
      "text": "Add ginger, scallions, stir 30 seconds until fragrant.",
      "textZh": "下姜片葱段炒香30秒。",
      "zhHint": "爆香料",
      "stateNote": {
        "visual": "Aromatics sizzle",
        "visualZh": "香料滋滋作响",
        "heat": "medium",
        "timeRef": "30 seconds",
        "signal": "Pungent aroma"
      }
    },
    {
      "text": "Add soy sauces, Shaoxing, sugar, and 1 cup warm water. Bring to boil.",
      "textZh": "加生抽、老抽、料酒、冰糖、1杯水，大火烧开。",
      "zhHint": "加炖汁",
      "stateNote": {
        "visual": "Liquid dark and uniform",
        "visualZh": "液体深褐均匀",
        "signal": "Sugar dissolved"
      }
    },
    {
      "text": "Cover, reduce to low. Simmer 20 minutes.",
      "textZh": "盖盖转小火焖20分钟。",
      "zhHint": "小火焖",
      "stateNote": {
        "visual": "Liquid gentle bubble",
        "visualZh": "汤汁微滚",
        "heat": "low",
        "timeRef": "20 minutes",
        "signal": "Chicken tender"
      }
    },
    {
      "text": "Uncover, raise heat to medium-high. Reduce sauce 5 minutes until glossy and coating.",
      "textZh": "开盖转中大火，收汁5分钟至油亮包裹。",
      "zhHint": "收汁",
      "stateNote": {
        "visual": "Sauce thick and lacquered",
        "visualZh": "酱汁浓稠漆亮",
        "heat": "medium-high",
        "timeRef": "5 minutes",
        "signal": "Coats back of spoon"
      }
    }
  ],
  "tips": [
    "Score the wings — helps flavor penetrate.",
    "Do not skip searing — browning = flavor.",
    "Reduce sauce until it clings — that's the lacquer."
  ],
  "tipsZh": [
    "鸡翅划刀——更入味。",
    "别省煎——美拉德反应=风味。",
    "收汁要收至挂勺——那是漆亮的关键。"
  ],
  "relatedSlugs": [
    "hongshao-chicken",
    "coke-chicken-wings",
    "soy-chicken-wings"
  ],
  "image": "/images/recipes/red-braised-chicken-wings.webp"
};
