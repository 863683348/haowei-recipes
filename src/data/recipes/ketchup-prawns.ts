import type { Recipe } from "@/lib/types";

/** Ketchup Glazed Prawns (茄汁大虾) — Day batch */
export const ketchup_prawns: Recipe = {
  "id": "ketchup-prawns",
  "slug": "ketchup-prawns",
  "titleEn": "Ketchup Glazed Prawns",
  "titleZh": "茄汁大虾",
  "pinyin": "qié zhī dà xiā",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "National",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 18,
  "servings": 2,
  "version": "family",
  "versionNote": "Sweet and tangy glaze popular with children.",
  "versionNoteZh": "酸甜茄汁釉，深受孩子喜爱。",
  "tags": [
    "30-min",
    "kids",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "Kids love this sweet-sour glaze — perfect weeknight dinner.",
  "storyZh": "孩子最爱酸甜茄汁虾——完美工作日晚餐。",
  "ingredients": [
    {
      "id": "kp-01",
      "nameEn": "large prawns",
      "nameZh": "大虾",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "kp-02",
      "nameEn": "ketchup",
      "nameZh": "番茄酱",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "kp-03",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "kp-04",
      "nameEn": "vinegar",
      "nameZh": "白醋",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Clean prawns and pat dry.",
      "textZh": "大虾洗净吸干水分。",
      "stateNote": {
        "visual": "Dry prawns",
        "visualZh": "虾身干燥",
        "signal": "Ready to fry"
      }
    },
    {
      "text": "Heat oil and fry prawns until orange.",
      "textZh": "热油煎虾至橙红。",
      "stateNote": {
        "visual": "Prawns orange",
        "visualZh": "虾身橙红",
        "heat": "high",
        "timeRef": "3 minutes",
        "signal": "Color changed"
      }
    },
    {
      "text": "Add ketchup, sugar, vinegar and water.",
      "textZh": "加番茄酱、糖、醋和水。",
      "stateNote": {
        "visual": "Sauce bubbling",
        "visualZh": "酱汁沸腾",
        "signal": "Boiling"
      }
    },
    {
      "text": "Simmer 2 minutes until sauce thickens.",
      "textZh": "小火煮2分钟至酱汁浓稠。",
      "stateNote": {
        "visual": "Sauce glossy",
        "visualZh": "酱汁浓稠发亮",
        "heat": "medium",
        "timeRef": "2 minutes",
        "signal": "Glazed"
      }
    },
    {
      "text": "Toss prawns in glaze and serve.",
      "textZh": "虾裹满酱汁出锅。",
      "stateNote": {
        "visual": "Coated",
        "visualZh": "虾身裹釉",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Adjust sugar to taste.",
    "Cornstarch slurry thickens sauce."
  ],
  "tipsZh": [
    "糖量可按口味调整。",
    "淀粉水勾芡使酱汁浓稠。"
  ],
  "relatedSlugs": [
    "red-braised-prawns",
    "garlic-steamed-prawns"
  ],
  "image": "/images/recipes/ketchup-prawns.webp"
};
