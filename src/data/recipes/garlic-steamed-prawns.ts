import type { Recipe } from "@/lib/types";

/** Garlic-Steamed Prawns (蒜蓉蒸虾) — Day batch */
export const garlic_steamed_prawns: Recipe = {
  "id": "garlic-steamed-prawns",
  "slug": "garlic-steamed-prawns",
  "titleEn": "Garlic-Steamed Prawns",
  "titleZh": "蒜蓉蒸虾",
  "pinyin": "suàn róng zhēng xiā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Shenzhen",
  "regionZh": "深圳",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Quick Cantonese steaming preserves sweetness.",
  "versionNoteZh": "快手粤式清蒸保留鲜甜。",
  "tags": [
    "30-min",
    "healthy",
    "cantonese"
  ],
  "dietary": [
    "none"
  ],
  "story": "Shenzhen night market prawns are steamed simply with garlic.",
  "storyZh": "深圳夜市大虾只加蒜蓉清蒸。",
  "ingredients": [
    {
      "id": "gsp-01",
      "nameEn": "large prawns",
      "nameZh": "大虾",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "gsp-02",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "6 cloves",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gsp-03",
      "nameEn": "butter",
      "nameZh": "黄油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "gsp-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Butterfly prawns and remove veins.",
      "textZh": "大虾对半开去虾线。",
      "stateNote": {
        "visual": "Split open",
        "visualZh": "虾对半开",
        "signal": "Ready"
      }
    },
    {
      "text": "Melt butter and fry garlic until golden.",
      "textZh": "黄油融化炒蒜至金黄。",
      "stateNote": {
        "visual": "Garlic golden",
        "visualZh": "蒜末金黄",
        "heat": "low",
        "timeRef": "1 minute",
        "signal": "Golden"
      }
    },
    {
      "text": "Arrange prawns on plate and spoon garlic butter over.",
      "textZh": "虾摆盘浇上蒜蓉黄油。",
      "stateNote": {
        "visual": "Prawns topped",
        "visualZh": "虾上覆盖蒜蓉黄油",
        "signal": "Ready"
      }
    },
    {
      "text": "Steam over boiling water 5 minutes.",
      "textZh": "水开后蒸5分钟。",
      "stateNote": {
        "visual": "Prawns opaque",
        "visualZh": "虾肉变白",
        "heat": "high",
        "timeRef": "5 minutes",
        "signal": "Opaque"
      }
    },
    {
      "text": "Garnish with spring onion and serve immediately.",
      "textZh": "撒葱花上桌。",
      "stateNote": {
        "visual": "Garnished",
        "visualZh": "撒葱花点缀",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Don't oversteam.",
    "Use salted butter."
  ],
  "tipsZh": [
    "别蒸过头。",
    "用有盐黄油。"
  ],
  "relatedSlugs": [
    "red-braised-prawns",
    "oil-braised-prawns"
  ],
  "image": "/images/recipes/garlic-steamed-prawns.webp"
};
