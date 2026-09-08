import type { Recipe } from "@/lib/types";

/** Black Pepper Chicken Dice | Chinese Hei Jiao Ji Ding (黑椒鸡丁) — Day batch */
export const black_pepper_chicken_dice: Recipe = {
  "slug": "black-pepper-chicken-dice",
  "id": "black-pepper-chicken-dice",
  "titleEn": "Black Pepper Chicken Dice | Chinese Hei Jiao Ji Ding",
  "titleZh": "黑椒鸡丁",
  "pinyin": "hēi jiāo jī dīng",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Quick stir-fry with bold black pepper heat.",
  "versionNoteZh": "快手小炒，黑椒辣味突出。",
  "tags": [
    "30-min",
    "weeknight",
    "quick"
  ],
  "dietary": [
    "none"
  ],
  "story": "Black pepper chicken is a popular home-style dish that brings bold pepper heat to tender chicken.",
  "storyZh": "黑椒鸡丁是 popular 家常小炒，黑椒辣味与鸡肉嫩滑完美结合。",
  "ingredients": [
    {
      "id": "bp-01",
      "nameEn": "chicken breast",
      "nameZh": "鸡胸肉",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "bp-02",
      "nameEn": "bell pepper",
      "nameZh": "彩椒",
      "amountMetric": "1 medium",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "bp-03",
      "nameEn": "black pepper",
      "nameZh": "黑胡椒",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "bp-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bp-05",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "bp-06",
      "nameEn": "cornstarch",
      "nameZh": "淀粉",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut chicken into 2-cm cubes. Marinate with 5 ml soy sauce, cornstarch. 10 minutes.",
      "textZh": "鸡胸切2厘米丁，加5毫升生抽和淀粉腌制10分钟。",
      "zhHint": "鸡肉上浆",
      "stateNote": {
        "visual": "Chicken glossy with starch coating.",
        "visualZh": "鸡肉裹粉有光泽。",
        "timeRef": "10 minutes",
        "signal": "Surface slightly tacky."
      }
    },
    {
      "text": "Cut bell pepper into matching cubes.",
      "textZh": "彩椒切同样大小丁。",
      "zhHint": "彩椒切丁",
      "stateNote": {
        "visual": "Uniform cubes, vibrant color.",
        "visualZh": "大小均匀，色泽鲜亮。",
        "signal": "Crisp, no soft spots."
      }
    },
    {
      "text": "Heat oil over high heat. Fry chicken 2 minutes until sealed.",
      "textZh": "大火热油，鸡肉煎2分钟定型。",
      "zhHint": "大火煎肉",
      "stateNote": {
        "visual": "Chicken white on outside.",
        "visualZh": "鸡肉表面变白。",
        "timeRef": "2 minutes",
        "heat": "high",
        "signal": "Sizzling sound; edges crisp."
      }
    },
    {
      "text": "Add pepper, remaining soy sauce, oyster sauce, black pepper. Toss 1 minute.",
      "textZh": "下彩椒、剩余生抽、蚝油、黑胡椒，翻炒1分钟。",
      "zhHint": "快炒入味",
      "stateNote": {
        "visual": "Pepper bright, sauce coating.",
        "visualZh": "彩椒鲜亮，酱汁包裹。",
        "timeRef": "1 minute",
        "signal": "Peppery aroma; peppers crisp-tender."
      }
    },
    {
      "text": "Add splash of water if dry. Toss 30 seconds. Serve.",
      "textZh": "太干可加少许水，再翻30秒。出锅。",
      "zhHint": "调整干湿",
      "stateNote": {
        "visual": "Sauce glossy, coating all.",
        "visualZh": "酱汁光亮包裹食材。",
        "timeRef": "30 seconds",
        "signal": "Ready to serve; steam rising."
      }
    }
  ],
  "tips": [
    "High heat is key — don't crowd the pan.",
    "Pre-cut all ingredients before cooking.",
    "Adjust black pepper to heat preference."
  ],
  "tipsZh": [
    "大火快炒——别 overcrowd。",
    "食材提前备好。",
    "黑胡椒按口味调整。"
  ],
  "relatedSlugs": [
    "cashew-chicken",
    "kung-pao-chicken",
    "huangmen-chicken"
  ],
  "image": "/images/recipes/black-pepper-chicken-dice.webp"
};
