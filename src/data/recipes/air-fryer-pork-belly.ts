import type { Recipe } from "@/lib/types";

/** Air Fryer Crispy Pork Belly (空气炸锅脆皮五花肉) — Day batch */
export const air_fryer_pork_belly: Recipe = {
  "id": "air-fryer-pork-belly",
  "slug": "air-fryer-pork-belly",
  "titleEn": "Air Fryer Crispy Pork Belly",
  "titleZh": "空气炸锅脆皮五花肉",
  "pinyin": "kōng qì zhá guō cuì pí wǔ huā ròu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version scores skin and uses high heat for crackling—restaurant version may pre-boil first.",
  "versionNoteZh": "家常版在皮上划刀高温烤出脆皮；餐馆版有时先焯水。",
  "tags": [
    "weeknight",
    "air-fryer",
    "high-protein",
    "gluten-free"
  ],
  "dietary": [
    "none"
  ],
  "story": "Crispy pork belly (kou shao rou) is a Cantonese classic. The air fryer achieves the crackling effect with less fuss than traditional roasting.",
  "storyZh": "脆皮五花肉是粤菜经典。空气炸锅能做出类似传统烤制的脆皮效果，却更省事。",
  "ingredients": [
    {
      "id": "apb-01",
      "nameEn": "pork belly",
      "nameZh": "五花肉",
      "amountMetric": "500 g",
      "amountUS": "17.6 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "apb-02",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "apb-03",
      "nameEn": "soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "apb-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "apb-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat pork belly dry with paper towels.",
      "textZh": "五花肉用厨房纸擦干。",
      "stateNote": {
        "visual": "Skin surface is dry and firm",
        "visualZh": "皮面干燥紧实",
        "signal": "No moisture on paper towels after patting"
      }
    },
    {
      "text": "Using a sharp knife, score the skin in a crosshatch pattern—cut through fat layer but not into the meat below.",
      "textZh": "用锋利的刀在皮面划十字花刀——切透脂肪层但不要切到下面的肉。",
      "stateNote": {
        "visual": "Skin has diamond pattern, fat layer visible between cuts",
        "visualZh": "皮面呈菱形纹路，脂肪层可见",
        "signal": "Knife tip reaches fat but not muscle"
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
    }
  ],
  "tips": [
    "Score skin but not too deep into meat",
    "Pat skin dry before cooking—moisture prevents crispiness",
    "Rest 5 minutes before slicing"
  ],
  "tipsZh": [
    "划皮不要切入肉太深",
    "烹饪前擦干皮面——湿气阻止脆化",
    "切片前静置5分钟"
  ],
  "relatedSlugs": [
    "hongshao-pork",
    "twice-cooked-pork"
  ],
  "image": "/images/recipes/hongshao-pork.webp"
};
