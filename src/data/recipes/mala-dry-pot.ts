import type { Recipe } from "@/lib/types";

/** Mala Dry Pot (麻辣香锅) — Day batch */
export const mala_dry_pot: Recipe = {
  "id": "mala-dry-pot",
  "slug": "mala-dry-pot",
  "titleEn": "Mala Dry Pot",
  "titleZh": "麻辣香锅",
  "pinyin": "má là xiāng guō",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "Customizable dry pot with your favorite ingredients.",
  "versionNoteZh": "可根据喜好自由搭配食材。",
  "tags": [
    "spicy",
    "one-pot",
    "customizable"
  ],
  "dietary": [
    "none"
  ],
  "story": "Sichuan dry pot is a social cooking style where everyone adds their favorite ingredients to a spicy broth.",
  "storyZh": "四川麻辣香锅是聚餐必备，大家把自己喜欢的食材一起涮煮。",
  "ingredients": [
    {
      "id": "mdp-01",
      "nameEn": "beef slices",
      "nameZh": "牛肉片",
      "amountMetric": "200 g",
      "amountUS": "0.4 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "mdp-02",
      "nameEn": "duck blood",
      "nameZh": "鸭血",
      "amountMetric": "200 g",
      "amountUS": "0.4 lb",
      "category": "protein",
      "pantry": "asian",
      "termKey": "duck-blood"
    },
    {
      "id": "mdp-03",
      "nameEn": "king oyster mushrooms",
      "nameZh": "杏鲍菇",
      "amountMetric": "150 g",
      "amountUS": "0.3 lb",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "mdp-04",
      "nameEn": "cauliflower",
      "nameZh": "花菜",
      "amountMetric": "150 g",
      "amountUS": "0.3 lb",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "mdp-05",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "15 pieces",
      "amountUS": "15 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "mdp-06",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "mdp-07",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "6 cloves",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "mdp-08",
      "nameEn": "Chinese celery",
      "nameZh": "芹菜",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Slice beef, duck blood, mushrooms, and cauliflower into bite-sized pieces.",
      "textZh": "牛肉、鸭血、蘑菇、花菜切块。",
      "stateNote": {
        "visual": "Ingredients prepped",
        "visualZh": "食材切好",
        "signal": "Ready"
      }
    },
    {
      "text": "Blanch duck blood and mushrooms in salted water for 2 minutes.",
      "textZh": "鸭血和蘑菇焯水2分钟。",
      "stateNote": {
        "visual": "Water boiling",
        "visualZh": "水开",
        "heat": "high",
        "timeRef": "2 minutes",
        "signal": "Blanched"
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
      "text": "Add garlic and stir-fry for 30 seconds.",
      "textZh": "加入蒜末翻炒30秒。",
      "stateNote": {
        "visual": "Garlic fragrant",
        "visualZh": "蒜香四溢",
        "heat": "medium",
        "timeRef": "30 seconds",
        "signal": "Aromatic"
      }
    },
    {
      "text": "Add beef and stir-fry until browned.",
      "textZh": "加入牛肉片炒至变色。",
      "stateNote": {
        "visual": "Beef browned",
        "visualZh": "牛肉变色",
        "heat": "high",
        "signal": "Browned"
      }
    },
    {
      "text": "Add blanched ingredients and celery, toss with soy sauce.",
      "textZh": "加入焯好的食材和芹菜，加酱油翻匀。",
      "stateNote": {
        "visual": "All ingredients mixed",
        "visualZh": "食材混合",
        "signal": "Mixed"
      }
    },
    {
      "text": "Cook for 2 more minutes and serve.",
      "textZh": "再煮2分钟即可上桌。",
      "stateNote": {
        "visual": "Steam rising",
        "visualZh": "热气腾腾",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Pat ingredients dry before cooking for better texture.",
    "Adjust spice level by controlling chili amount."
  ],
  "tipsZh": [
    "食材要沥干水分，口感更好。",
    "根据口味调整辣度。"
  ],
  "relatedSlugs": [
    "spicy-clam-stir-fry",
    "chopped-chili-steamed-chicken-legs"
  ],
  "image": "/images/recipes/mala-dry-pot.webp"
};
