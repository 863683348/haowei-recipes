import type { Recipe } from "@/lib/types";

/** Air Fryer Honey-Glazed Pork Ribs (空气炸锅蜜汁排骨) — Day batch */
export const air_fryer_pork_ribs: Recipe = {
  "id": "air-fryer-pork-ribs",
  "slug": "air-fryer-pork-ribs",
  "titleEn": "Air Fryer Honey-Glazed Pork Ribs",
  "titleZh": "空气炸锅蜜汁排骨",
  "pinyin": "kōng qì zhá guō mì zhī pái gu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses honey glaze at the end—restaurant version may braise first then finish under broiler.",
  "versionNoteZh": "家常版最后刷蜜汁；餐馆版有时先红烧再上火局。",
  "tags": [
    "weeknight",
    "air-fryer",
    "high-protein"
  ],
  "dietary": [
    "gluten-free",
    "none"
  ],
  "story": "Cantonese honey ribs are a dim sum staple. The air fryer's circulating heat mimics a broiler, caramelizing the glaze beautifully.",
  "storyZh": "蜜汁排骨是粤式点心经典。空气炸锅的循环热模拟上火局，焦糖化效果极佳。",
  "ingredients": [
    {
      "id": "apr-01",
      "nameEn": "pork ribs",
      "nameZh": "猪肋排",
      "amountMetric": "600 g",
      "amountUS": "21.2 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs"
    },
    {
      "id": "apr-02",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "apr-03",
      "nameEn": "soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "apr-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "apr-05",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    }
  ],
  "steps": [
    {
      "text": "Cut ribs into 2-inch pieces. Mix soy sauce, Shaoxing wine, and minced garlic.",
      "textZh": "肋排切成2英寸段。生抽、绍兴酒、蒜末混合。",
      "stateNote": {
        "visual": "Marinade is dark and fragrant",
        "visualZh": "腌料深色且芳香",
        "signal": "Garlic is evenly distributed in liquid"
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
    "Don't skip the honey step—it creates the signature gloss",
    "Let ribs rest 3 minutes before serving",
    "Cut between bones for easy eating"
  ],
  "tipsZh": [
    "不要跳过刷蜂蜜步骤——这是标志光泽的来源",
    "上桌前静置3分钟",
    "沿骨缝切断便于食用"
  ],
  "relatedSlugs": [
    "sweet-sour-ribs",
    "hongshao-pork"
  ],
  "image": "/images/recipes/sweet-sour-ribs.webp"
};
