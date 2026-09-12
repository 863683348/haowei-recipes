import type { Recipe } from "@/lib/types";

/** Salt-and-Pepper Prawn Tails (椒盐虾尾) — Day batch */
export const salt_and_pepper_prawn_tails: Recipe = {
  "id": "salt-and-pepper-prawn-tails",
  "slug": "salt-and-pepper-prawn-tails",
  "titleEn": "Salt-and-Pepper Prawn Tails",
  "titleZh": "椒盐虾尾",
  "pinyin": "jiāo yán xiā wěi",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Hong Kong",
  "regionZh": "香港",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Dim sum style crispy tails.",
  "versionNoteZh": "点心风格酥脆虾尾。",
  "tags": [
    "30-min",
    "appetizer"
  ],
  "dietary": [
    "none"
  ],
  "story": "Hong Kong dim sum classic — crispy and numbing.",
  "storyZh": "香港点心经典——酥脆麻香。",
  "ingredients": [
    {
      "id": "spp-01",
      "nameEn": "prawn tails",
      "nameZh": "虾尾",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "spp-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "spp-03",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "spp-04",
      "nameEn": "sichuan peppercorns",
      "nameZh": "花椒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    }
  ],
  "steps": [
    {
      "text": "Pat prawn tails dry and coat in cornstarch.",
      "textZh": "虾尾吸干水分裹玉米淀粉。",
      "stateNote": {
        "visual": "Lightly coated",
        "visualZh": "薄薄一层粉",
        "signal": "Ready to fry"
      }
    },
    {
      "text": "Heat oil to 180C.",
      "textZh": "油烧至180度。",
      "stateNote": {
        "visual": "Oil shimmering",
        "visualZh": "油微冒烟",
        "heat": "high",
        "signal": "Ready"
      }
    },
    {
      "text": "Fry prawn tails until golden and crispy.",
      "textZh": "炸至金黄酥脆。",
      "stateNote": {
        "visual": "Golden brown",
        "visualZh": "金黄",
        "heat": "high",
        "timeRef": "3 minutes",
        "signal": "Crispy"
      }
    },
    {
      "text": "Fry garlic and Sichuan peppercorns briefly.",
      "textZh": "蒜末花椒快炒香。",
      "stateNote": {
        "visual": "Aromatic",
        "visualZh": "香气溢出",
        "heat": "medium",
        "timeRef": "30 seconds",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Toss prawns in seasoning mix and serve.",
      "textZh": "虾尾裹上椒盐粉出锅。",
      "stateNote": {
        "visual": "Coated",
        "visualZh": "裹满调料",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Double fry for extra crunch.",
    "Sichuan pepper adds numbing."
  ],
  "tipsZh": [
    "复炸更酥。",
    "花椒提麻。"
  ],
  "relatedSlugs": [
    "red-braised-prawns",
    "garlic-steamed-prawns"
  ],
  "image": "/images/recipes/salt-and-pepper-prawn-tails.webp"
};
