import type { Recipe } from "@/lib/types";

/** Green Pepper Stir-Fried Chicken Dice (青椒炒鸡丁) (青椒炒鸡丁) — Day batch */
export const green_pepper_stir_fried_chicken_dice: Recipe = {
  "id": "green-pepper-stir-fried-chicken-dice",
  "slug": "green-pepper-stir-fried-chicken-dice",
  "titleEn": "Green Pepper Stir-Fried Chicken Dice (青椒炒鸡丁)",
  "titleZh": "青椒炒鸡丁",
  "pinyin": "qing jiao ji ding",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Simple stir-fry with sweet green pepper and tender chicken.",
  "versionNoteZh": "青椒清甜配嫩鸡丁，简单快手。",
  "tags": [
    "30-min",
    "weeknight",
    "chicken"
  ],
  "dietary": [
    "none"
  ],
  "story": "Green pepper chicken is the ultimate weeknight stir-fry — quick, colorful, and deeply satisfying.",
  "storyZh": "青椒炒鸡丁是经典工作日晚餐小炒——快、好看、够味。",
  "ingredients": [
    {
      "id": "gp-01",
      "nameEn": "boneless chicken thighs, diced",
      "nameZh": "鸡腿肉丁",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "gp-02",
      "nameEn": "green bell pepper, diced",
      "nameZh": "青椒丁",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gp-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gp-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "gp-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "gp-06",
      "nameEn": "cornstarch",
      "nameZh": "淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gp-07",
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
      "text": "Marinate chicken with soy, Shaoxing, and 1/2 tbsp cornstarch. Rest 10 minutes.",
      "textZh": "鸡丁加生抽、料酒和半汤匙淀粉拌匀，腌10分钟。",
      "zhHint": "上浆腌制",
      "stateNote": {
        "visual": "Chicken glossy and coated",
        "visualZh": "鸡丁油亮裹浆",
        "timeRef": "10 minutes",
        "signal": "Sticky surface"
      }
    },
    {
      "text": "Cut green pepper into 2 cm pieces (remove seeds). Mince garlic.",
      "textZh": "青椒去籽切2厘米块，蒜切末。",
      "zhHint": "备料",
      "stateNote": {
        "visual": "Vibrant green pepper pieces",
        "visualZh": "青椒鲜绿",
        "signal": "No soft spots"
      }
    },
    {
      "text": "Heat oil over high heat. Add chicken and sear 2 minutes until golden.",
      "textZh": "热油大火，鸡丁煎2分钟至金黄。",
      "zhHint": "煎鸡上色",
      "stateNote": {
        "visual": "Chicken golden on outside",
        "visualZh": "鸡丁外金黄",
        "heat": "high",
        "timeRef": "2 minutes",
        "signal": "Crisp exterior"
      }
    },
    {
      "text": "Add garlic, stir 15 seconds. Add green pepper, stir-fry 1 minute.",
      "textZh": "下蒜末炒香15秒，加青椒翻炒1分钟。",
      "zhHint": "爆香配菜",
      "stateNote": {
        "visual": "Pepper bright and slightly blistered",
        "visualZh": "青椒鲜亮微起皱",
        "heat": "high",
        "timeRef": "1 minute",
        "signal": "Pepper crisp-tender"
      }
    },
    {
      "text": "Add remaining cornstarch mixed with 2 tbsp water. Toss until glossy. Serve.",
      "textZh": "剩余淀粉加水调匀倒入，翻炒至油亮出锅。",
      "zhHint": "勾芡出锅",
      "stateNote": {
        "visual": "Sauce glossy and coating all",
        "visualZh": "酱汁油亮包裹",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "High heat is essential for wok hei.",
    "Do not overcook the pepper.",
    "Chicken thighs > breast for juiciness."
  ],
  "tipsZh": [
    "大火是镬气的关键。",
    "青椒别炒过头。",
    "鸡腿肉比鸡胸肉多汁。"
  ],
  "relatedSlugs": [
    "black-pepper-chicken-dice",
    "cashew-chicken",
    "kung-pao-chicken"
  ],
  "image": "/images/recipes/green-pepper-stir-fried-chicken-dice.webp"
};
