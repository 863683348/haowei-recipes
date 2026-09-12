import type { Recipe } from "@/lib/types";

/** Oil-Braised Prawns (油焖大虾) — Day batch */
export const oil_braised_prawns: Recipe = {
  "id": "oil-braised-prawns",
  "slug": "oil-braised-prawns",
  "titleEn": "Oil-Braised Prawns",
  "titleZh": "油焖大虾",
  "pinyin": "yóu mèn dà xiā",
  "cuisine": "鲁菜",
  "cuisineEn": "Shandong",
  "region": "Qingdao",
  "regionZh": "青岛",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Shandong style uses more oil and longer braising.",
  "versionNoteZh": "鲁菜用油较多、焖烧时间长。",
  "tags": [
    "weeknight",
    "shandong",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Qingdao taught me this dish — the key is enough oil to coat the wok.",
  "storyZh": "青岛的叔父教我做这道菜——关键在于足够的油裹满锅底。",
  "ingredients": [
    {
      "id": "obp-01",
      "nameEn": "large prawns",
      "nameZh": "大虾",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "obp-02",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "obp-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "obp-04",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "obp-05",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "obp-06",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "obp-07",
      "nameEn": "white sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Clean prawns, remove veins, make a slit along the belly.",
      "textZh": "大虾去虾线，腹部斜切一刀。",
      "stateNote": {
        "visual": "Slit open",
        "visualZh": "虾腹切开",
        "signal": "Ready"
      }
    },
    {
      "text": "Heat oil until shimmering. Fry prawns 2 minutes per side.",
      "textZh": "热油至微冒烟，下虾煎2分钟每面。",
      "stateNote": {
        "visual": "Prawns orange",
        "visualZh": "虾身橙红",
        "heat": "medium-high",
        "timeRef": "4 minutes",
        "signal": "Color changed"
      }
    },
    {
      "text": "Add ginger, soy sauce, vinegar, sugar and water.",
      "textZh": "下姜末、生抽、醋、糖和水。",
      "stateNote": {
        "visual": "Sauce bubbling",
        "visualZh": "酱汁沸腾",
        "signal": "Aromatic"
      }
    },
    {
      "text": "Cover and simmer 8 minutes on medium heat.",
      "textZh": "盖盖中火焖8分钟。",
      "stateNote": {
        "visual": "Sauce reducing",
        "visualZh": "酱汁收浓",
        "heat": "medium",
        "timeRef": "8 minutes",
        "signal": "Reducing"
      }
    },
    {
      "text": "Uncover and increase heat to glaze the prawns.",
      "textZh": "开盖大火收汁至釉亮。",
      "stateNote": {
        "visual": "Sauce glossy",
        "visualZh": "酱汁浓稠发亮",
        "heat": "high",
        "signal": "Glazed"
      }
    }
  ],
  "tips": [
    "Use enough oil.",
    "Do not skip the slit."
  ],
  "tipsZh": [
    "油要够。",
    "别忘了切缝。"
  ],
  "relatedSlugs": [
    "red-braised-prawns",
    "garlic-steamed-prawns"
  ],
  "image": "/images/recipes/oil-braised-prawns.webp"
};
