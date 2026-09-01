import type { Recipe } from "@/lib/types";

/** Crispy Fried Wontons (炸馄饨) (炸馄饨) — Day batch */
export const fried_wontons: Recipe = {
  "id": "fried-wontons",
  "slug": "fried-wontons",
  "titleEn": "Crispy Fried Wontons (炸馄饨)",
  "titleZh": "炸馄饨",
  "pinyin": "zhà húntun",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版直接炸，无需先煮；餐馆版有时会先煮后炸追求双层口感。",
  "versionNoteZh": "家庭版直接炸，无需先煮；餐馆版有时会先煮后炸追求双层口感。",
  "tags": [
    "fried",
    "appetizer",
    "quick",
    "party"
  ],
  "dietary": [
    "none"
  ],
  "story": "In Guangdong, fried wontons are the ultimate party snack—crispy outside, juicy inside. My aunt would make a mountain of them for every wedding and celebration, served with mustard dipping sauce.",
  "storyZh": "在广东，炸馄饨是聚会的必备小食——外皮酥脆，内里多汁。阿姨每年婚宴寿宴都会包一大盆，配黄芥末酱上桌。",
  "ingredients": [
    {
      "id": "fw-01",
      "nameEn": "wonton wrappers",
      "nameZh": "馄饨皮",
      "amountMetric": "30 pieces",
      "amountUS": "30 pieces",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "fw-02",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "amountMetric": "200 g",
      "amountUS": "1 cup",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "fw-03",
      "nameEn": "shrimp, minced",
      "nameZh": "虾仁末",
      "amountMetric": "100 g",
      "amountUS": "2/3 cup",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp"
    },
    {
      "id": "fw-04",
      "nameEn": "scallion, finely chopped",
      "nameZh": "小葱末",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "fw-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "fw-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "fw-07",
      "nameEn": "neutral oil (for frying)",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Mix pork, shrimp, scallion, soy sauce, and sesame oil until sticky, about 2 minutes.",
      "textZh": "猪肉、虾仁、葱花、生抽、香油拌匀至起胶，约2分钟。",
      "stateNote": {
        "visual": "Filling becomes paste-like, sticky to touch",
        "visualZh": "馅料呈 paste 状，手感粘手",
        "signal": "Filling clings to spoon when lifted",
        "signalZh": "馅料能粘在勺子上"
      }
    },
    {
      "text": "Place 1 tbsp filling in center of each wrapper, fold into triangle, pinch edges.",
      "textZh": "每张馄饨皮放1汤匙馅，对折成三角形，捏紧边缘。",
      "stateNote": {
        "visual": "Fold is sealed tight, no gaps at edges",
        "visualZh": "封口严密，无空隙",
        "signal": "Wrapper holds shape when lifted",
        "signalZh": "提起来不散开"
      }
    },
    {
      "text": "Heat oil to 180°C, fry wontons in batches 2-3 minutes until golden and floating.",
      "textZh": "油温180°C，分批炸至金黄浮起，每批2-3分钟。",
      "stateNote": {
        "visual": "Wontons puff up, turn golden, float to surface",
        "visualZh": "馄饨膨胀鼓起，金黄浮起",
        "signal": "Crackle sound subsides, wontons steady on surface",
        "signalZh": "油炸声变轻，馄饨稳定浮面"
      }
    },
    {
      "text": "Drain on paper towel, serve hot with mustard or sweet chili sauce.",
      "textZh": "吸油纸沥油，趁热配黄芥末或甜辣酱。",
      "stateNote": {
        "visual": "Steam rises from center when bitten",
        "visualZh": "咬开中心冒热气",
        "signal": "Crackle when bitten, hot juice inside",
        "signalZh": "咬下咔嚓响，内有热汤"
      }
    },
    {
      "text": "Prepare dipping sauce: mix 2 tbsp mustard with 1 tbsp rice vinegar and 1 tsp sugar until smooth.",
      "textZh": "调配蘸料：黄芥末2汤匙+米醋1汤匙+糖1茶匙搅匀。",
      "stateNote": {
        "visual": "Sauce is smooth and emulsified",
        "visualZh": "酱料顺滑乳化",
        "signal": "Sugar dissolves completely",
        "signalZh": "糖完全溶解"
      }
    }
  ],
  "tips": [
    "Don't overfill—1 tbsp is perfect, excess causes bursting",
    "Keep wrappers covered with damp cloth to prevent drying",
    "Double-fry at 190°C for extra crispness if desired"
  ],
  "tipsZh": [
    "馅不要太多——1汤匙刚好，太多会炸破",
    "未用的馄饨皮用湿布盖住防干",
    "想要更脆可二次复炸：190°C再炸30秒"
  ],
  "relatedSlugs": [
    "northern-style-fried-wontons",
    "chicken-broth-wonton-soup",
    "fresh-pork-wonton"
  ],
  "image": "/images/recipes/northern-style-fried-wontons.webp"
};
