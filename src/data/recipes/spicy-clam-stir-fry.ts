import type { Recipe } from "@/lib/types";

/** Spicy Stir-Fried Clams (辣炒花蛤) — Day batch */
export const spicy_clam_stir_fry: Recipe = {
  "id": "spicy-clam-stir-fry",
  "slug": "spicy-clam-stir-fry",
  "titleEn": "Spicy Stir-Fried Clams",
  "titleZh": "辣炒花蛤",
  "pinyin": "là chǎo huā gé",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Quick home-style spicy stir-fry.",
  "versionNoteZh": "家常快手辣炒。",
  "tags": [
    "30-min",
    "spicy",
    "quick"
  ],
  "dietary": [
    "none"
  ],
  "story": "Clams stir-fried with dried chilies and garlic make a perfect beer companion.",
  "storyZh": "花蛤与干辣椒蒜瓣快炒，是下酒绝佳小菜。",
  "ingredients": [
    {
      "id": "scf-01",
      "nameEn": "clams",
      "nameZh": "花蛤",
      "amountMetric": "400 g",
      "amountUS": "0.9 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "scf-02",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "amountMetric": "10 pieces",
      "amountUS": "10 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "scf-03",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "5 cloves",
      "amountUS": "5 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "scf-04",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "scf-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "scf-06",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cooking-wine"
    }
  ],
  "steps": [
    {
      "text": "Soak clams in salted water for 30 minutes to purge sand.",
      "textZh": "花蛤盐水浸泡30分钟吐沙。",
      "stateNote": {
        "visual": "Clams soaking",
        "visualZh": "花蛤浸泡中",
        "timeRef": "30 minutes",
        "signal": "Ready"
      }
    },
    {
      "text": "Rinse clams thoroughly under running water.",
      "textZh": "清水冲洗干净。",
      "stateNote": {
        "visual": "Clean clams",
        "visualZh": "花蛤洗净",
        "signal": "Ready"
      }
    },
    {
      "text": "Heat oil and fry garlic, ginger, and dried chilies until fragrant.",
      "textZh": "热油爆香蒜、姜、干辣椒。",
      "stateNote": {
        "visual": "Aroma rising",
        "visualZh": "香气溢出",
        "heat": "medium-high",
        "timeRef": "30 seconds",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Add clams and stir-fry on high heat until shells open.",
      "textZh": "加入花蛤大火翻炒至开口。",
      "stateNote": {
        "visual": "Clams opening",
        "visualZh": "花蛤开口",
        "heat": "high",
        "signal": "Opening"
      }
    },
    {
      "text": "Pour in soy sauce and cooking wine, toss quickly.",
      "textZh": "倒入生抽和料酒快速翻匀。",
      "stateNote": {
        "visual": "Sauce coating",
        "visualZh": "酱汁包裹",
        "signal": "Mixed"
      }
    },
    {
      "text": "Serve immediately while clams are hot.",
      "textZh": "趁热上桌。",
      "stateNote": {
        "visual": "Steaming dish",
        "visualZh": "热气腾腾",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Don't overcook or clams become tough.",
    "Pick any clams that remain closed after cooking."
  ],
  "tipsZh": [
    "别炒太久，肉质会变硬。",
    "扔掉煮完还闭壳的花蛤。"
  ],
  "relatedSlugs": [
    "mala-dry-pot",
    "spicy-duck-tongue"
  ],
  "image": "/images/recipes/spicy-clam-stir-fry.webp"
};
