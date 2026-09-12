import type { Recipe } from "@/lib/types";

/** Clear-Steamed Prawns (清蒸对虾) — Day batch */
export const clear_steamed_prawns: Recipe = {
  "id": "clear-steamed-prawns",
  "slug": "clear-steamed-prawns",
  "titleEn": "Clear-Steamed Prawns",
  "titleZh": "清蒸对虾",
  "pinyin": "qīng zhēng duì xiā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Zhuhai",
  "regionZh": "珠海",
  "difficulty": "easy",
  "timeMin": 12,
  "servings": 2,
  "version": "family",
  "versionNote": "Pure Cantonese simplicity.",
  "versionNoteZh": "纯粤式简朴。",
  "tags": [
    "30-min",
    "healthy",
    "quick"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Zhuhai fishermen wives steam prawns simply with ginger and scallion.",
  "storyZh": "珠海渔家清蒸大虾只加葱姜。",
  "ingredients": [
    {
      "id": "csp-01",
      "nameEn": "large prawns",
      "nameZh": "大对虾",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "csp-02",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "csp-03",
      "nameEn": "spring onion",
      "nameZh": "葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "csp-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Arrange prawns on plate with ginger and scallion.",
      "textZh": "虾摆盘铺上葱姜。",
      "stateNote": {
        "visual": "Prawns on plate",
        "visualZh": "虾摆盘",
        "signal": "Ready"
      }
    },
    {
      "text": "Steam over high heat 8 minutes.",
      "textZh": "大火蒸8分钟。",
      "stateNote": {
        "visual": "Shells orange",
        "visualZh": "虾壳橙红",
        "heat": "high",
        "timeRef": "8 minutes",
        "signal": "Color changed"
      }
    },
    {
      "text": "Remove ginger and scallion.",
      "textZh": "取出葱姜。",
      "stateNote": {
        "visual": "Garnish removed",
        "visualZh": "葱姜取出",
        "signal": "Ready"
      }
    },
    {
      "text": "Drizzle soy sauce over prawns.",
      "textZh": "淋上生抽。",
      "stateNote": {
        "visual": "Sauced",
        "visualZh": "虾身淋汁",
        "signal": "Ready"
      }
    },
    {
      "text": "Garnish with fresh scallion and serve.",
      "textZh": "撒新鲜葱花上桌。",
      "stateNote": {
        "visual": "Garnished",
        "visualZh": "撒葱花点缀",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Don't oversteam.",
    "Serve with soy dip on side."
  ],
  "tipsZh": [
    "别蒸过头。",
    "配生抽碟蘸食。"
  ],
  "relatedSlugs": [
    "red-braised-prawns",
    "garlic-steamed-prawns"
  ],
  "image": "/images/recipes/clear-steamed-prawns.webp"
};
