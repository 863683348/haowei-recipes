import type { Recipe } from "@/lib/types";

/** Garlic Fried Chicken Wings (蒜香炸鸡翅) (蒜香炸鸡翅) — Day batch */
export const garlic_fried_chicken_wings: Recipe = {
  "id": "garlic-fried-chicken-wings",
  "slug": "garlic-fried-chicken-wings",
  "titleEn": "Garlic Fried Chicken Wings (蒜香炸鸡翅)",
  "titleZh": "蒜香炸鸡翅",
  "pinyin": "suan xiang zha ji chi",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Double-fried for extra crispiness with heavy garlic flavor.",
  "versionNoteZh": "复炸更酥脆，蒜香浓郁。",
  "tags": [
    "crispy",
    "chicken",
    "garlic",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "Garlic fried chicken wings are the ultimate crowd-pleaser — crispy outside, juicy inside, loaded with garlic.",
  "storyZh": "蒜香炸鸡翅是终极聚会菜——外酥里嫩，蒜香满满。",
  "ingredients": [
    {
      "id": "gf-01",
      "nameEn": "chicken wings, halved",
      "nameZh": "鸡翅切半",
      "amountMetric": "8 (about 500 g)",
      "amountUS": "8 (about 1.1 lb)",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "gf-02",
      "nameEn": "garlic, minced (4 cloves)",
      "nameZh": "蒜末（4瓣）",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gf-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "gf-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "gf-05",
      "nameEn": "cornstarch",
      "nameZh": "淀粉",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gf-06",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "食用油（炸）",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gf-07",
      "nameEn": "white pepper",
      "nameZh": "白胡椒",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Score wings. Marinate with soy, Shaoxing, white pepper 15 minutes.",
      "textZh": "鸡翅划刀，加生抽、料酒、白胡椒腌15分钟。",
      "zhHint": "腌制",
      "stateNote": {
        "visual": "Wings glossy with marinade",
        "visualZh": "鸡翅裹满腌料",
        "timeRef": "15 minutes",
        "signal": "Aromatic"
      }
    },
    {
      "text": "Coat wings evenly in cornstarch. Shake off excess.",
      "textZh": "鸡翅均匀裹淀粉，抖掉多余。",
      "zhHint": "裹粉",
      "stateNote": {
        "visual": "White powdery coating, no clumps",
        "visualZh": "白色粉衣，无结块",
        "signal": "Even dusting"
      }
    },
    {
      "text": "Heat oil to 160C (320F). Fry wings 6 minutes until cooked through. Remove.",
      "textZh": "油温160度炸鸡翅6分钟至熟透，捞出。",
      "zhHint": "初炸",
      "stateNote": {
        "visual": "Wings pale golden",
        "visualZh": "鸡翅浅金黄",
        "heat": "medium",
        "timeRef": "6 minutes",
        "signal": "Internal 74C"
      }
    },
    {
      "text": "Increase oil to 190C (375F). Re-fry wings 2 minutes until deep golden and crisp.",
      "textZh": "油温升至190度复炸2分钟至深金黄酥脆。",
      "zhHint": "复炸",
      "stateNote": {
        "visual": "Deep golden, crackling crust",
        "visualZh": "深金黄，外壳咔哧脆",
        "heat": "high",
        "timeRef": "2 minutes",
        "signal": "Crackling sound"
      }
    },
    {
      "text": "Drain on paper towel. Toss with minced garlic and pinch of salt. Serve immediately.",
      "textZh": "吸油纸上沥油，撒蒜末盐拌匀，趁热吃。",
      "zhHint": "撒蒜上桌",
      "stateNote": {
        "visual": "Golden crispy wings with garlic flecks",
        "visualZh": "金黄酥脆鸡翅，蒜末点缀",
        "signal": "Sizzling"
      }
    }
  ],
  "tips": [
    "Double fry = extra crisp. Do not skip the second fry.",
    "Garlic burns fast — add at the very end.",
    "Oil temperature: 160C first, 190C second."
  ],
  "tipsZh": [
    "复炸=更脆——别省第二步。",
    "蒜末易糊——最后再加。",
    "油温：初炸160度，复炸190度。"
  ],
  "relatedSlugs": [
    "crispy-chicken-chunks",
    "crispy-chicken-strips",
    "taiwanese-salt-fried-chicken"
  ],
  "image": "/images/recipes/garlic-fried-chicken-wings.webp"
};
