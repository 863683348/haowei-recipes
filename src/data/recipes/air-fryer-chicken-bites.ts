import type { Recipe } from "@/lib/types";

/** Air Fryer Crispy Chicken Bites (空气炸锅鸡米花) — Day batch */
export const air_fryer_chicken_bites: Recipe = {
  "id": "air-fryer-chicken-bites",
  "slug": "air-fryer-chicken-bites",
  "titleEn": "Air Fryer Crispy Chicken Bites",
  "titleZh": "空气炸锅鸡米花",
  "pinyin": "kōng qì zhá guō jī mǐ huā",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 18,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses chicken breast cut small—restaurant version sometimes uses thigh for juicier bite.",
  "versionNoteZh": "家常版用鸡胸肉切小块；餐馆版有时用鸡腿肉更多汁。",
  "tags": [
    "30-min",
    "weeknight",
    "air-fryer",
    "high-protein"
  ],
  "dietary": [
    "gluten-free",
    "none"
  ],
  "story": "Chicken bites are the ultimate party food—crispy outside, tender inside. Air-frying cuts the oil but keeps the crunch my mother loved.",
  "storyZh": "鸡米花是终极派对美食——外酥里嫩。空气炸锅减少用油却保留了母亲钟爱的酥脆。",
  "ingredients": [
    {
      "id": "acb-01",
      "nameEn": "chicken breast",
      "nameZh": "鸡胸肉",
      "amountMetric": "400 g",
      "amountUS": "14.1 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "acb-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "acb-03",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "dairy",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "acb-04",
      "nameEn": "panko breadcrumbs",
      "nameZh": "面包糠",
      "amountMetric": "½ cup",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "acb-05",
      "nameEn": "soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Cut chicken breast into 1-inch cubes. Pat dry with paper towels.",
      "textZh": "鸡胸肉切成1英寸方块，用厨房纸擦干。",
      "stateNote": {
        "visual": "Chicken surface is pale pink, no wet sheen",
        "visualZh": "鸡肉表面粉红不透明，无湿亮感",
        "signal": "Paper towels absorb surface moisture"
      }
    },
    {
      "text": "Marinate chicken in soy sauce 10 minutes at room temperature.",
      "textZh": "鸡肉用生抽腌制10分钟，室温。",
      "stateNote": {
        "visual": "Chicken turns opaque pink at edges",
        "visualZh": "鸡肉边缘变粉红不透明",
        "signal": "No raw translucent spots"
      }
    },
    {
      "text": "Set up three shallow bowls: cornstarch, beaten eggs, panko breadcrumbs.",
      "textZh": "准备三个浅碗：玉米淀粉、打散的鸡蛋、面包糠。",
      "stateNote": {
        "visual": "Eggs fully beaten with no streaks",
        "visualZh": "鸡蛋完全打散无 streaks",
        "signal": "Egg mixture looks uniform yellow"
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
    }
  ],
  "tips": [
    "Press breadcrumbs firmly for better adhesion",
    "Preheat air fryer 3 minutes for extra crisp",
    "Serve immediately—best eaten hot"
  ],
  "tipsZh": [
    "按压面包糠使其更牢固",
    "空气炸锅预热3分钟更酥脆",
    "现做现吃，热时最佳"
  ],
  "relatedSlugs": [
    "air-fryer-chicken-wings",
    "taiwanese-salt-fried-chicken"
  ],
  "image": "/images/recipes/air-fryer-chicken-wings.webp"
};
