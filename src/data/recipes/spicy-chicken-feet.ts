import type { Recipe } from "@/lib/types";

/** Spicy Stir-Fried Chicken Feet (辣炒鸡爪) — Day batch */
export const spicy_chicken_feet: Recipe = {
  "id": "spicy-chicken-feet",
  "slug": "spicy-chicken-feet",
  "titleEn": "Spicy Stir-Fried Chicken Feet",
  "titleZh": "辣炒鸡爪",
  "pinyin": "là chǎo jī zhuǎ",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Chewy chicken feet with fiery Sichuan spice.",
  "versionNoteZh": "Q弹鸡爪配川式麻辣。",
  "tags": [
    "spicy",
    "chewy",
    "appetizer"
  ],
  "dietary": [
    "none"
  ],
  "story": "Chicken feet are a popular Sichuan snack, stir-fried with lots of chili and Sichuan pepper.",
  "storyZh": "鸡爪是四川人最爱的零食之一，辣炒后麻辣鲜香。",
  "ingredients": [
    {
      "id": "scf2-01",
      "nameEn": "chicken feet",
      "nameZh": "鸡爪",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "scf2-02",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "15 pieces",
      "amountUS": "15 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "scf2-03",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "scf2-04",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "5 cloves",
      "amountUS": "5 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "scf2-05",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "scf2-06",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Trim chicken feet nails and cut in half.",
      "textZh": "鸡爪剪去指甲，对半切开。",
      "stateNote": {
        "visual": "Feet trimmed",
        "visualZh": "鸡爪处理",
        "signal": "Ready"
      }
    },
    {
      "text": "Blanch chicken feet in boiling water with ginger for 3 minutes.",
      "textZh": "鸡爪加姜片焯水3分钟去腥。",
      "stateNote": {
        "visual": "Water boiling",
        "visualZh": "水开",
        "heat": "high",
        "timeRef": "3 minutes",
        "signal": "Blanched"
      }
    },
    {
      "text": "Heat oil and fry dried chilies, peppercorns, garlic, and ginger.",
      "textZh": "热油爆香干辣椒、花椒、蒜、姜。",
      "stateNote": {
        "visual": "Spices fragrant",
        "visualZh": "香料出香",
        "heat": "medium",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Add chicken feet and stir-fry on high heat.",
      "textZh": "加入鸡爪大火快炒。",
      "stateNote": {
        "visual": "Feet sizzling",
        "visualZh": "鸡爪滋滋响",
        "heat": "high",
        "signal": "Sizzling"
      }
    },
    {
      "text": "Add dark soy sauce and stir to coat.",
      "textZh": "倒入老抽翻匀上色。",
      "stateNote": {
        "visual": "Golden brown color",
        "visualZh": "色泽金黄",
        "signal": "Colored"
      }
    },
    {
      "text": "Add 100ml water, cover and simmer for 10 minutes.",
      "textZh": "加水100ml，盖盖焖煮10分钟。",
      "stateNote": {
        "visual": "Simmering",
        "visualZh": "小火慢炖",
        "heat": "medium-low",
        "timeRef": "10 minutes",
        "signal": "Tender"
      }
    },
    {
      "text": "Remove lid and cook until sauce thickens.",
      "textZh": "开盖收汁即可。",
      "stateNote": {
        "visual": "Sauce reduced",
        "visualZh": "汤汁收浓",
        "heat": "high",
        "signal": "Thick"
      }
    }
  ],
  "tips": [
    "Simmer until tender for best texture.",
    "Adjust spice level to preference."
  ],
  "tipsZh": [
    "焖到软糯口感最佳。",
    "辣度可按口味调整。"
  ],
  "relatedSlugs": [
    "mala-dry-pot",
    "spicy-stir-fried-edamame"
  ],
  "image": "/images/recipes/spicy-chicken-feet.webp"
};
