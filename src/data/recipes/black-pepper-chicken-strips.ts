import type { Recipe } from "@/lib/types";

/** Black Pepper Chicken Strips (黑椒鸡柳) (黑椒鸡柳) — Day batch */
export const black_pepper_chicken_strips: Recipe = {
  "id": "black-pepper-chicken-strips",
  "slug": "black-pepper-chicken-strips",
  "titleEn": "Black Pepper Chicken Strips (黑椒鸡柳)",
  "titleZh": "黑椒鸡柳",
  "pinyin": "hei jiao ji liu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Julienned chicken with bold black pepper and colorful peppers.",
  "versionNoteZh": "鸡柳配浓郁黑胡椒，色彩丰富。",
  "tags": [
    "30-min",
    "weeknight",
    "chicken",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Black pepper chicken strips are the street food version of home cooking — bold, peppery, and addictive.",
  "storyZh": "黑椒鸡柳是街头小吃的家常版——胡椒味浓郁，让人上瘾。",
  "ingredients": [
    {
      "id": "bp-01",
      "nameEn": "chicken breast, cut into strips",
      "nameZh": "鸡胸肉切条",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "bp-02",
      "nameEn": "bell pepper, cut into strips",
      "nameZh": "彩椒条",
      "amountMetric": "1 medium",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "bp-03",
      "nameEn": "black pepper, ground",
      "nameZh": "黑胡椒碎",
      "amountMetric": "2 tsp",
      "amountUS": "2 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "bp-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "bp-05",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "bp-06",
      "nameEn": "cornstarch",
      "nameZh": "淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "bp-07",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut chicken into 1 cm x 5 cm strips. Marinate with soy and 1/2 tbsp cornstarch. Rest 10 minutes.",
      "textZh": "鸡胸切1厘米宽5厘米长条，加生抽和半汤匙淀粉腌10分钟。",
      "zhHint": "切条上浆",
      "stateNote": {
        "visual": "Strips glossy coated",
        "visualZh": "鸡柳油亮裹浆",
        "timeRef": "10 minutes",
        "signal": "Tacky"
      }
    },
    {
      "text": "Cut bell pepper into matching strips.",
      "textZh": "彩椒切同样大小条。",
      "zhHint": "备彩椒",
      "stateNote": {
        "visual": "Uniform colorful strips",
        "visualZh": "大小均匀，色泽鲜艳",
        "signal": "Crisp"
      }
    },
    {
      "text": "Heat oil high. Fry chicken strips 2-3 minutes until sealed and golden.",
      "textZh": "热油大火，鸡柳煎2-3分钟至定型金黄。",
      "zhHint": "煎鸡柳",
      "stateNote": {
        "visual": "Chicken golden and opaque",
        "visualZh": "鸡柳金黄不透生",
        "heat": "high",
        "timeRef": "3 minutes",
        "signal": "Crisp exterior"
      }
    },
    {
      "text": "Add pepper strips, black pepper, oyster sauce. Toss 1 minute.",
      "textZh": "下彩椒条、黑胡椒、蚝油，翻1分钟。",
      "zhHint": "快炒入味",
      "stateNote": {
        "visual": "Pepper bright, sauce coating",
        "visualZh": "彩椒鲜亮，酱汁包裹",
        "heat": "high",
        "timeRef": "1 minute",
        "signal": "Peppery aroma"
      }
    },
    {
      "text": "Add remaining cornstarch slurry. Toss 30 seconds. Serve.",
      "textZh": "剩余淀粉水倒入，翻30秒出锅。",
      "zhHint": "勾芡",
      "stateNote": {
        "visual": "Glossy sauce clinging",
        "visualZh": "酱汁油亮包裹",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "High heat = fast cook = tender chicken.",
    "Do not skip the black pepper.",
    "Add all pepper at once for max flavor."
  ],
  "tipsZh": [
    "大火快炒——鸡肉才嫩。",
    "黑胡椒不能省。",
    "一次下完黑胡椒，味道最足。"
  ],
  "relatedSlugs": [
    "black-pepper-chicken-dice",
    "green-pepper-stir-fried-chicken-dice",
    "kung-pao-chicken"
  ],
  "image": "/images/recipes/black-pepper-chicken-strips.webp"
};
