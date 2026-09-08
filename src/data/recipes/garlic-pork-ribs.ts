import type { Recipe } from "@/lib/types";

/** Garlic Pork Ribs | Chinese Suan Xiang Pai Gu (蒜香排骨) — Day batch */
export const garlic_pork_ribs: Recipe = {
  "slug": "garlic-pork-ribs",
  "id": "garlic-pork-ribs",
  "titleEn": "Garlic Pork Ribs | Chinese Suan Xiang Pai Gu",
  "titleZh": "蒜香排骨",
  "pinyin": "suàn xiāng pái gǔ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National",
  "regionZh": "全国",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 4,
  "version": "family",
  "versionNote": "Crispy fried ribs with abundant garlic aroma.",
  "versionNoteZh": "外酥里嫩，蒜香浓郁。",
  "tags": [
    "fried",
    "garlic",
    "popular"
  ],
  "dietary": [
    "none"
  ],
  "story": "Garlic ribs are a pub food favorite. Generous garlic is fried until fragrant, then tossed with crispy ribs.",
  "storyZh": "蒜香排骨是经典下酒菜。大量蒜瓣炸至金黄飘香，与酥脆排骨拌匀。",
  "ingredients": [
    {
      "id": "gr-01",
      "nameEn": "pork ribs",
      "nameZh": "排骨",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs"
    },
    {
      "id": "gr-02",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "1 head",
      "amountUS": "1 head",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gr-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gr-04",
      "nameEn": "shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "gr-05",
      "nameEn": "cornstarch",
      "nameZh": "淀粉",
      "amountMetric": "30 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gr-06",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut ribs into 4-cm pieces. Soak 30 minutes. Drain.",
      "textZh": "排骨切段，泡水30分钟，沥干。",
      "zhHint": "排骨泡水",
      "stateNote": {
        "visual": "Water less pink.",
        "visualZh": "水色变浅。",
        "timeRef": "30 minutes",
        "signal": "Water runs clear."
      }
    },
    {
      "text": "Marinate ribs with soy sauce, wine, half the garlic (minced). 20 minutes.",
      "textZh": "排骨加生抽、料酒、一半蒜末腌制20分钟。",
      "zhHint": "腌制入味",
      "stateNote": {
        "visual": "Ribs coated in marinade.",
        "visualZh": "排骨裹满腌料。",
        "timeRef": "20 minutes",
        "signal": "Salty, garlicky aroma."
      }
    },
    {
      "text": "Coat ribs in cornstarch. Heat oil to 180°C. Fry 3 minutes until crispy.",
      "textZh": "排骨裹淀粉，油温180度炸3分钟至酥脆。",
      "zhHint": "高油炸制",
      "stateNote": {
        "visual": "Golden brown and crispy.",
        "visualZh": "金黄酥脆。",
        "timeRef": "3 minutes",
        "heat": "high",
        "signal": "Oil bubbling vigorously; golden color."
      }
    },
    {
      "text": "Increase oil to 200°C. Fry again 1 minute for extra crisp.",
      "textZh": "油温升至200度，复炸1分钟更酥脆。",
      "zhHint": "复炸增脆",
      "stateNote": {
        "visual": "Deep golden, very crispy.",
        "visualZh": "深金黄，极酥脆。",
        "timeRef": "1 minute",
        "heat": "high",
        "signal": "Crackling sound; very golden."
      }
    },
    {
      "text": "Fry remaining garlic until golden. Toss ribs with garlic. Serve.",
      "textZh": "炸剩余蒜瓣至金黄。与排骨拌匀，出锅。",
      "zhHint": "蒜香收尾",
      "stateNote": {
        "visual": "Garlic golden; ribs glossy.",
        "visualZh": "蒜瓣金黄；排骨光亮。",
        "signal": "Intense garlic aroma; ready to serve."
      }
    }
  ],
  "tips": [
    "Double-fry for extra crispiness.",
    "Garlic burns easily — watch carefully.",
    "Use plenty of garlic — it's the star flavor."
  ],
  "tipsZh": [
    "复炸更酥。",
    "蒜易糊——小心看。",
    "多放蒜——这是主角。"
  ],
  "relatedSlugs": [
    "red-braised-pork-ribs",
    "black-bean-pork-ribs",
    "air-fryer-pork-ribs"
  ],
  "image": "/images/recipes/garlic-pork-ribs.webp"
};
