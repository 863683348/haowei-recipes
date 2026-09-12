import type { Recipe } from "@/lib/types";

/** Spicy Stir-Fried Edamame (麻辣毛豆) — Day batch */
export const spicy_stir_fried_edamame: Recipe = {
  "id": "spicy-stir-fried-edamame",
  "slug": "spicy-stir-fried-edamame",
  "titleEn": "Spicy Stir-Fried Edamame",
  "titleZh": "麻辣毛豆",
  "pinyin": "má là máo dòu",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 4,
  "version": "family",
  "versionNote": "Classic Sichuan spicy snack, perfect for beer.",
  "versionNoteZh": "经典川式麻辣小吃，啤酒绝配。",
  "tags": [
    "20-min",
    "spicy",
    "snack",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "Spicy edamame is a must-have at any Sichuan hotpot restaurant.",
  "storyZh": "麻辣毛豆是四川火锅店必点的小吃。",
  "ingredients": [
    {
      "id": "sfe-01",
      "nameEn": "fresh edamame pods",
      "nameZh": "新鲜毛豆",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sfe-02",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "10 pieces",
      "amountUS": "10 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "sfe-03",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "sfe-04",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "2 tsp",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "sfe-05",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "2 pieces",
      "amountUS": "2 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "star-anise"
    }
  ],
  "steps": [
    {
      "text": "Snap off both ends of edamame pods for better flavor absorption.",
      "textZh": "毛豆两头顶掉方便入味。",
      "stateNote": {
        "visual": "Pods trimmed",
        "visualZh": "毛豆修剪",
        "signal": "Ready"
      }
    },
    {
      "text": "Boil water with salt and star anise.",
      "textZh": "水煮开加盐和八角。",
      "stateNote": {
        "visual": "Water boiling",
        "visualZh": "水开",
        "heat": "high",
        "signal": "Boiling"
      }
    },
    {
      "text": "Add edamame and cook for 8 minutes.",
      "textZh": "加入毛豆煮8分钟。",
      "stateNote": {
        "visual": "Edamame bright green",
        "visualZh": "毛豆翠绿",
        "heat": "high",
        "timeRef": "8 minutes",
        "signal": "Cooked"
      }
    },
    {
      "text": "Drain and transfer to a bowl.",
      "textZh": "沥干水分装碗。",
      "stateNote": {
        "visual": "Drained edamame",
        "visualZh": "毛豆沥干",
        "signal": "Ready"
      }
    },
    {
      "text": "Heat oil and fry dried chilies and peppercorns until fragrant.",
      "textZh": "热油爆香干辣椒和花椒。",
      "stateNote": {
        "visual": "Chilies darkening",
        "visualZh": "辣椒变色",
        "heat": "medium",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Pour hot oil and spices over edamame, toss to coat.",
      "textZh": "将热油浇在毛豆上翻匀。",
      "stateNote": {
        "visual": "Oil sizzling",
        "visualZh": "热油滋啦作响",
        "signal": "Mixed"
      }
    },
    {
      "text": "Let cool and serve as a cold dish.",
      "textZh": "放凉后作为凉菜食用。",
      "stateNote": {
        "visual": "Cool dish ready",
        "visualZh": "凉菜完成",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Snapping both ends is key to flavor penetration.",
    "Can be served warm or cold."
  ],
  "tipsZh": [
    "剪掉两头是入味的关键。",
    "温热或冷却食用均可。"
  ],
  "relatedSlugs": [
    "mala-dry-pot",
    "spicy-clam-stir-fry"
  ],
  "image": "/images/recipes/spicy-stir-fried-edamame.webp"
};
