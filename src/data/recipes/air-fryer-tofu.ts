import type { Recipe } from "@/lib/types";

/** Air Fryer Crispy Tofu (空气炸锅脆豆腐) — Day batch */
export const air_fryer_tofu: Recipe = {
  "id": "air-fryer-tofu",
  "slug": "air-fryer-tofu",
  "titleEn": "Air Fryer Crispy Tofu",
  "titleZh": "空气炸锅脆豆腐",
  "pinyin": "kōng qì zhá guō cuì dòu fu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses firm tofu pressed and cubed—restaurant version may use tofu skin rolls.",
  "versionNoteZh": "家常版用老豆腐压干切块；餐馆版有时用腐皮卷。",
  "tags": [
    "30-min",
    "weeknight",
    "air-fryer",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Crispy tofu is the protein powerhouse of Chinese vegetarian cooking. Air-frying gives the same golden crust without deep-frying mess.",
  "storyZh": "脆豆腐是中餐素食的蛋白质主力。空气炸锅无需深炸就能得到金黄脆壳。",
  "ingredients": [
    {
      "id": "atf-01",
      "nameEn": "firm tofu",
      "nameZh": "老豆腐",
      "amountMetric": "400 g",
      "amountUS": "14.1 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "atf-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "atf-03",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "atf-04",
      "nameEn": "soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "atf-05",
      "nameEn": "neutral oil",
      "nameZh": "中性油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Wrap tofu block in paper towels, place a heavy plate on top. Press 15 minutes to remove excess moisture.",
      "textZh": "豆腐块用厨房纸包好，上面压重盘。压15分钟去除多余水分。",
      "stateNote": {
        "visual": "Tofu feels firm, not squishy",
        "visualZh": "豆腐质地紧实，不软塌",
        "signal": "Water collected in press is minimal"
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
    "Press tofu well—wet tofu steams instead of crisps",
    "Don't shake basket too vigorously",
    "Toss with sauce immediately after cooking"
  ],
  "tipsZh": [
    "豆腐压干——湿豆腐会蒸煮而非酥脆",
    "不要剧烈摇晃炸篮",
    "烹饪后立即拌酱"
  ],
  "relatedSlugs": [
    "mapo-tofu",
    "home-style-tofu"
  ],
  "image": "/images/recipes/home-style-tofu.webp"
};
