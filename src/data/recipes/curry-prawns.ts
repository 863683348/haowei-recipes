import type { Recipe } from "@/lib/types";

/** Curry Prawns (咖喱虾) — Day batch */
export const curry_prawns: Recipe = {
  "id": "curry-prawns",
  "slug": "curry-prawns",
  "titleEn": "Curry Prawns",
  "titleZh": "咖喱虾",
  "pinyin": "gā lí xiā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Hong Kong",
  "regionZh": "香港",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Hong Kong style with coconut milk.",
  "versionNoteZh": "港式椰浆咖喱。",
  "tags": [
    "30-min",
    "mild"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Colonial-era curry prawns, mild and creamy.",
  "storyZh": "殖民时期咖喱虾，温和 creamy。",
  "ingredients": [
    {
      "id": "cp-01",
      "nameEn": "large prawns",
      "nameZh": "大虾",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cp-02",
      "nameEn": "coconut milk",
      "nameZh": "椰浆",
      "amountMetric": "200 ml",
      "amountUS": "¾ cup",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "cp-03",
      "nameEn": "curry powder",
      "nameZh": "咖喱粉",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "cp-04",
      "nameEn": "onion",
      "nameZh": "洋葱",
      "amountMetric": "½ medium",
      "amountUS": "½ medium",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Sauté onion and garlic until soft.",
      "textZh": "炒香洋葱蒜末至软。",
      "stateNote": {
        "visual": "Onion soft",
        "visualZh": "洋葱变软",
        "heat": "medium",
        "signal": "Aromatic"
      }
    },
    {
      "text": "Add curry powder and toast 30 seconds.",
      "textZh": "加咖喱粉炒香30秒。",
      "stateNote": {
        "visual": "Curry fragrant",
        "visualZh": "咖喱飘香",
        "heat": "medium",
        "timeRef": "30 seconds",
        "signal": "Aromatic"
      }
    },
    {
      "text": "Pour in coconut milk and bring to simmer.",
      "textZh": "倒入椰浆小火煮沸。",
      "stateNote": {
        "visual": "Sauce yellow",
        "visualZh": "酱汁变黄",
        "heat": "medium",
        "signal": "Curry fragrant"
      }
    },
    {
      "text": "Add prawns and cook 3 minutes.",
      "textZh": "下虾煮3分钟。",
      "stateNote": {
        "visual": "Prawns opaque",
        "visualZh": "虾肉变白",
        "heat": "medium",
        "timeRef": "3 minutes",
        "signal": "Cooked"
      }
    },
    {
      "text": "Season with soy sauce and serve.",
      "textZh": "加生抽调味出锅。",
      "stateNote": {
        "visual": "Glossy sauce",
        "visualZh": "酱汁浓稠发亮",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Use Thai yellow curry powder.",
    "Don't boil coconut milk hard."
  ],
  "tipsZh": [
    "用泰式黄咖喱粉。",
    "椰浆别大火煮。"
  ],
  "relatedSlugs": [
    "red-braised-prawns",
    "garlic-steamed-prawns"
  ],
  "image": "/images/recipes/curry-prawns.webp"
};
