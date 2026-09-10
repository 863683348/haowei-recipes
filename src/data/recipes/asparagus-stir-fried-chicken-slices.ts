import type { Recipe } from "@/lib/types";

/** Asparagus Stir-Fried Chicken Slices (芦笋炒鸡片) (芦笋炒鸡片) — Day batch */
export const asparagus_stir_fried_chicken_slices: Recipe = {
  "id": "asparagus-stir-fried-chicken-slices",
  "slug": "asparagus-stir-fried-chicken-slices",
  "titleEn": "Asparagus Stir-Fried Chicken Slices (芦笋炒鸡片)",
  "titleZh": "芦笋炒鸡片",
  "pinyin": "lu sun chao ji pian",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Delicate asparagus pairs with silky chicken in this elegant stir-fry.",
  "versionNoteZh": "嫩芦笋配滑鸡片，雅致家常。",
  "tags": [
    "30-min",
    "weeknight",
    "chicken",
    "elegant"
  ],
  "dietary": [
    "none"
  ],
  "story": "Asparagus chicken stir-fry brings an elegant touch to weeknight cooking.",
  "storyZh": "芦笋炒鸡片为工作日晚餐增添雅致。",
  "ingredients": [
    {
      "id": "ac-01",
      "nameEn": "chicken breast, sliced thin",
      "nameZh": "鸡胸肉切片",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ac-02",
      "nameEn": "asparagus spears, cut into 2-inch pieces",
      "nameZh": "芦笋段",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ac-03",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ac-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "ac-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "ac-06",
      "nameEn": "cornstarch",
      "nameZh": "淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ac-07",
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
      "text": "Slice chicken against grain. Marinate with soy, Shaoxing, and 1/2 tbsp cornstarch. Rest 10 minutes.",
      "textZh": "鸡胸逆纹切片，加生抽、料酒半汤匙淀粉腌10分钟。",
      "zhHint": "上浆",
      "stateNote": {
        "visual": "Chicken glossy coated",
        "visualZh": "鸡片油亮裹浆",
        "timeRef": "10 minutes",
        "signal": "Tacky"
      }
    },
    {
      "text": "Trim asparagus woody ends. Cut into 5 cm pieces. Blanch 1 minute in boiling water.",
      "textZh": "芦笋去老根，切5厘米段。沸水焯1分钟。",
      "zhHint": "焯芦笋",
      "stateNote": {
        "visual": "Asparagus bright vivid green",
        "visualZh": "芦笋鲜亮翠绿",
        "timeRef": "1 minute",
        "signal": "Crisp-tender"
      }
    },
    {
      "text": "Heat oil high. Sear chicken 2 minutes until golden.",
      "textZh": "热油大火，鸡片煎2分钟至金黄。",
      "zhHint": "煎鸡",
      "stateNote": {
        "visual": "Chicken golden opaque",
        "visualZh": "鸡片金黄不透生",
        "heat": "high",
        "timeRef": "2 minutes",
        "signal": "Crisp exterior"
      }
    },
    {
      "text": "Add garlic, stir 15 seconds. Add asparagus, toss 30 seconds.",
      "textZh": "下蒜片炒香15秒，加芦笋翻30秒。",
      "zhHint": "合炒",
      "stateNote": {
        "visual": "Asparagus glossy bright",
        "visualZh": "芦笋油亮翠绿",
        "heat": "high",
        "timeRef": "30 seconds",
        "signal": "Aromatic"
      }
    },
    {
      "text": "Add remaining cornstarch slurry. Toss until glossy. Serve.",
      "textZh": "剩余淀粉水倒入，翻炒至油亮出锅。",
      "zhHint": "勾芡",
      "stateNote": {
        "visual": "Sauce clings to all",
        "visualZh": "酱汁均匀包裹",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Blanch asparagus briefly.",
    "Do not overcook chicken.",
    "Asparagus should stay bright green."
  ],
  "tipsZh": [
    "芦笋焯一下就好。",
    "鸡片别炒过头。",
    "芦笋要保持翠绿。"
  ],
  "relatedSlugs": [
    "broccoli-stir-fried-chicken-slices",
    "mushroom-stir-fried-chicken-slices",
    "black-pepper-chicken-dice"
  ],
  "image": "/images/recipes/asparagus-stir-fried-chicken-slices.webp"
};
