import type { Recipe } from "@/lib/types";

/** Spicy Stir-Fried Lotus Root (辣炒藕片) — Day batch */
export const spicy_lotus_root_stir_fry: Recipe = {
  "id": "spicy-lotus-root-stir-fry",
  "slug": "spicy-lotus-root-stir-fry",
  "titleEn": "Spicy Stir-Fried Lotus Root",
  "titleZh": "辣炒藕片",
  "pinyin": "là chǎo ǒu piàn",
  "cuisine": "鄂菜",
  "cuisineEn": "Hubei",
  "region": "Wuhan",
  "regionZh": "武汉",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Crispy lotus root with spicy kick.",
  "versionNoteZh": "脆藕片配辣味，爽脆可口。",
  "tags": [
    "15-min",
    "spicy",
    "quick",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "Lotus root stir-fried with chili is a Hubei home-style vegetable dish.",
  "storyZh": "藕片辣炒是湖北家常素菜，脆爽可口。",
  "ingredients": [
    {
      "id": "slr-01",
      "nameEn": "lotus root",
      "nameZh": "莲藕",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "slr-02",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "6 pieces",
      "amountUS": "6 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "slr-03",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "slr-04",
      "nameEn": "vinegar",
      "nameZh": "白醋",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "slr-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "slr-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Peel lotus root and slice into 3mm rounds.",
      "textZh": "莲藕去皮切3毫米薄片。",
      "stateNote": {
        "visual": "Thin slices",
        "visualZh": "藕片切好",
        "signal": "Ready"
      }
    },
    {
      "text": "Soak sliced lotus root in water with vinegar for 5 minutes.",
      "textZh": "藕片加白醋水泡5分钟防氧化。",
      "stateNote": {
        "visual": "Soaking",
        "visualZh": "藕片浸泡",
        "timeRef": "5 minutes",
        "signal": "Prepped"
      }
    },
    {
      "text": "Heat oil and fry dried chilies and garlic until fragrant.",
      "textZh": "热油爆香干辣椒和蒜片。",
      "stateNote": {
        "visual": "Chilies fragrant",
        "visualZh": "辣椒出香",
        "heat": "medium",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Drain lotus root and add to wok, stir-fry on high heat.",
      "textZh": "藕片沥干入锅大火快炒。",
      "stateNote": {
        "visual": "Stir-frying",
        "visualZh": "大火翻炒",
        "heat": "high",
        "signal": "Sizzling"
      }
    },
    {
      "text": "Add salt and sesame oil, toss quickly.",
      "textZh": "加盐和香油翻匀。",
      "stateNote": {
        "visual": "Seasoned",
        "visualZh": "调味完成",
        "signal": "Mixed"
      }
    },
    {
      "text": "Serve immediately for maximum crispness.",
      "textZh": "立即上桌保持脆爽。",
      "stateNote": {
        "visual": "Steaming dish",
        "visualZh": "热气腾腾",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Soak in vinegar water to prevent browning.",
    "High heat and quick cooking keeps lotus root crisp."
  ],
  "tipsZh": [
    "醋水浸泡防止氧化变黑。",
    "大火快炒保持脆爽口感。"
  ],
  "relatedSlugs": [
    "spicy-clam-stir-fry",
    "spicy-squid-stir-fry"
  ],
  "image": "/images/recipes/spicy-lotus-root-stir-fry.webp"
};
