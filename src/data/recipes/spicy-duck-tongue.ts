import type { Recipe } from "@/lib/types";

/** Spicy Stir-Fried Duck Tongue (辣炒鸭舌) — Day batch */
export const spicy_duck_tongue: Recipe = {
  "id": "spicy-duck-tongue",
  "slug": "spicy-duck-tongue",
  "titleEn": "Spicy Stir-Fried Duck Tongue",
  "titleZh": "辣炒鸭舌",
  "pinyin": "là chǎo yā shé",
  "cuisine": "浙菜",
  "cuisineEn": "Zhejiang",
  "region": "Hangzhou",
  "regionZh": "杭州",
  "difficulty": "medium",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Delicate Zhejiang-style spicy duck tongue.",
  "versionNoteZh": "浙式辣炒鸭舌，鲜嫩爽口。",
  "tags": [
    "20-min",
    "spicy",
    "delicacy"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Duck tongue is a Zhejiang delicacy, stir-fried with chilies for a spicy kick.",
  "storyZh": "鸭舌是浙江特色食材，辣炒后鲜香弹牙。",
  "ingredients": [
    {
      "id": "sdt-01",
      "nameEn": "duck tongues",
      "nameZh": "鸭舌",
      "amountMetric": "300 g",
      "amountUS": "0.7 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "sdt-02",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "8 pieces",
      "amountUS": "8 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "sdt-03",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sdt-04",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sdt-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sdt-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Clean duck tongues, remove any remaining beak.",
      "textZh": "鸭舌洗净，去掉残留的喙。",
      "stateNote": {
        "visual": "Clean duck tongues",
        "visualZh": "鸭舌洗净",
        "signal": "Ready"
      }
    },
    {
      "text": "Blanch duck tongues in boiling water with ginger for 1 minute.",
      "textZh": "鸭舌加姜片焯水1分钟去腥。",
      "stateNote": {
        "visual": "Water boiling",
        "visualZh": "水开",
        "heat": "high",
        "timeRef": "1 minute",
        "signal": "Blanched"
      }
    },
    {
      "text": "Heat oil and fry garlic, ginger, and dried chilies.",
      "textZh": "热油爆香蒜、姜、干辣椒。",
      "stateNote": {
        "visual": "Aroma rising",
        "visualZh": "香气溢出",
        "heat": "medium",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Add duck tongues and stir-fry on high heat.",
      "textZh": "加入鸭舌大火快炒。",
      "stateNote": {
        "visual": "Tongues sizzling",
        "visualZh": "鸭舌滋滋作响",
        "heat": "high",
        "signal": "Sizzling"
      }
    },
    {
      "text": "Pour in soy sauce and wine, toss quickly.",
      "textZh": "倒入生抽和绍兴酒快速翻匀。",
      "stateNote": {
        "visual": "Sauce coating",
        "visualZh": "酱汁包裹",
        "signal": "Mixed"
      }
    },
    {
      "text": "Serve immediately.",
      "textZh": "立即上桌。",
      "stateNote": {
        "visual": "Steaming dish",
        "visualZh": "热气腾腾",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Don't overcook or duck tongue becomes tough.",
    "Best served immediately while hot."
  ],
  "tipsZh": [
    "别炒太久，口感会变韧。",
    "趁热吃最佳。"
  ],
  "relatedSlugs": [
    "spicy-clam-stir-fry",
    "mala-dry-pot"
  ],
  "image": "/images/recipes/spicy-duck-tongue.webp"
};
