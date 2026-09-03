import type { Recipe } from "@/lib/types";

/** Air Fryer Garlic-Shrimp (空气炸锅蒜香虾) — Day batch */
export const air_fryer_shrimp: Recipe = {
  "id": "air-fryer-shrimp",
  "slug": "air-fryer-shrimp",
  "titleEn": "Air Fryer Garlic-Shrimp",
  "titleZh": "空气炸锅蒜香虾",
  "pinyin": "kōng qì zhá guō suàn xiāng xiā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 12,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses whole shrimp with shells for flavor—restaurant version may butterfly for quicker cooking.",
  "versionNoteZh": "家常版带壳整虾更入味；餐馆版有时开背更快熟。",
  "tags": [
    "30-min",
    "weeknight",
    "air-fryer",
    "high-protein",
    "gluten-free"
  ],
  "dietary": [
    "gluten-free",
    "none"
  ],
  "story": "Garlic shrimp is a Cantonese seafood classic. The air fryer concentrates the garlic flavor while keeping the shrimp perfectly curled and pink.",
  "storyZh": "蒜香虾是粤式海鲜经典。空气炸锅浓缩蒜香的同时，虾保持完美卷曲和粉红色。",
  "ingredients": [
    {
      "id": "ash-01",
      "nameEn": "large shrimp",
      "nameZh": "大虾",
      "amountMetric": "400 g",
      "amountUS": "14.1 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp"
    },
    {
      "id": "ash-02",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "6 cloves",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ash-03",
      "nameEn": "butter",
      "nameZh": "黄油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "ash-04",
      "nameEn": "soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ash-05",
      "nameEn": "scallion",
      "nameZh": "葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Pat shrimp dry with paper towels. Mince garlic finely.",
      "textZh": "虾用厨房纸擦干。蒜切末。",
      "stateNote": {
        "visual": "Shrimp surface is dry and pink",
        "visualZh": "虾表面干燥粉红色",
        "signal": "Paper towels show no moisture"
      }
    },
    {
      "text": "Check doneness and adjust cooking time as needed.",
      "textZh": "检查熟度并根据需要调整烹饪时间。",
      "stateNote": {
        "visual": "Food is cooked through with desired texture",
        "visualZh": "食物完全熟透，质地符合预期",
        "signal": "Internal temperature or visual cue confirms doneness"
      }
    },
    {
      "text": "Transfer to serving plate. Garnish and serve immediately while hot.",
      "textZh": "移至餐盘，装饰后立即热食。",
      "stateNote": {
        "visual": "Dish is steaming and appetizing",
        "visualZh": "菜品热气腾腾，食欲诱人",
        "signal": "Aroma is prominent and inviting"
      }
    },
    {
      "text": "Adjust cooking time based on your air fryer model and desired crispiness level.",
      "textZh": "根据空气炸锅型号和 desired 酥脆度调整烹饪时间。",
      "stateNote": {
        "visual": "Food approaches desired doneness",
        "visualZh": "食物接近 desired 熟度",
        "signal": "Check doneness by piercing with a fork"
      }
    },
    {
      "text": "Adjust cooking time based on your air fryer model and desired crispiness level.",
      "textZh": "根据空气炸锅型号和 desired 酥脆度调整烹饪时间。",
      "stateNote": {
        "visual": "Food approaches desired doneness",
        "visualZh": "食物接近 desired 熟度",
        "signal": "Check doneness by piercing with a fork"
      }
    }
  ],
  "tips": [
    "Don't overcook—shrimp continue cooking after removal",
    "Butter+butter is key for Cantonese garlic shrimp",
    "Serve with steamed rice to soak up sauce"
  ],
  "tipsZh": [
    "不要过熟——虾出锅后还会继续熟",
    "黄油是蒜香虾的关键",
    "配米饭吸收酱汁"
  ],
  "relatedSlugs": [
    "longjing-shrimp",
    "garlic-shrimp-vermicelli"
  ],
  "image": "/images/recipes/garlic-shrimp-vermicelli.webp"
};
