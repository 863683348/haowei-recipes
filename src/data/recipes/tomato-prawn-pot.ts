import type { Recipe } from "@/lib/types";

/** Tomato Prawn Pot (番茄虾仁锅) — Day batch */
export const tomato_prawn_pot: Recipe = {
  "id": "tomato-prawn-pot",
  "slug": "tomato-prawn-pot",
  "titleEn": "Tomato Prawn Pot",
  "titleZh": "番茄虾仁锅",
  "pinyin": "fān qié xiā rén guō",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "National",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "One-pot comfort with sweet tomato broth.",
  "versionNoteZh": "一锅鲜甜番茄汤底。",
  "tags": [
    "30-min",
    "healthy",
    "comfort"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Winter warming pot with sweet tomatoes and plump prawns.",
  "storyZh": "冬日暖锅——番茄甜鲜配饱满虾仁。",
  "ingredients": [
    {
      "id": "tp-01",
      "nameEn": "large prawns",
      "nameZh": "大虾",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tp-02",
      "nameEn": "tomatoes",
      "nameZh": "番茄",
      "amountMetric": "2 medium",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tp-03",
      "nameEn": "tofu",
      "nameZh": "豆腐",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "tp-04",
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
      "text": "Sauté tomatoes until soft and breaking down.",
      "textZh": "炒番茄至软烂出汁。",
      "stateNote": {
        "visual": "Tomatoes breaking down",
        "visualZh": "番茄出汁",
        "heat": "medium",
        "signal": "Jammy"
      }
    },
    {
      "text": "Add broth and bring to boil.",
      "textZh": "加高汤烧开。",
      "stateNote": {
        "visual": "Bubbling broth",
        "visualZh": "汤汁沸腾",
        "heat": "high",
        "signal": "Boiling"
      }
    },
    {
      "text": "Add tofu and simmer 3 minutes.",
      "textZh": "下豆腐煮3分钟。",
      "stateNote": {
        "visual": "Tofu heated",
        "visualZh": "豆腐热透",
        "heat": "medium",
        "timeRef": "3 minutes",
        "signal": "Hot"
      }
    },
    {
      "text": "Add prawns and cook 2 minutes.",
      "textZh": "下虾仁煮2分钟。",
      "stateNote": {
        "visual": "Prawns opaque",
        "visualZh": "虾肉变白",
        "heat": "medium",
        "timeRef": "2 minutes",
        "signal": "Cooked"
      }
    },
    {
      "text": "Season with soy sauce and garnish.",
      "textZh": "加生抽调味撒葱花。",
      "stateNote": {
        "visual": "Garnished",
        "visualZh": "撒葱花点缀",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Use ripe tomatoes for sweeter broth.",
    "Add tofu last to prevent breaking."
  ],
  "tipsZh": [
    "选熟番茄汤更甜。",
    "豆腐最后放避免煮散。"
  ],
  "relatedSlugs": [
    "red-braised-prawns",
    "garlic-steamed-prawns"
  ],
  "image": "/images/recipes/tomato-prawn-pot.webp"
};
