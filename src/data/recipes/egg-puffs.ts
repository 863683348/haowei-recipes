import type { Recipe } from "@/lib/types";

/** Egg Pancake (鸡蛋仔) (鸡蛋仔) — Day batch */
export const egg_puffs: Recipe = {
  "titleEn": "Egg Pancake (鸡蛋仔)",
  "titleZh": "鸡蛋仔",
  "pinyin": "jī dàn zǎi",
  "cuisine": "港式甜点",
  "cuisineEn": "Hong Kong Dessert",
  "region": "香港",
  "regionZh": "香港",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "Hong Kong street vendor style, hollow egg bubbles",
  "versionNoteZh": "香港街头风格，空心蛋泡球",
  "tags": [
    "dessert",
    "street-food",
    "quick"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Hong Kong's beloved street dessert, egg puffs are light, airy spheres with a crispy shell and soft custard center. Sold from rolling carts, they're enjoyed plain or filled with ice cream for a delightful contrast.",
  "storyZh": "香港人钟爱的街头甜点，鸡蛋仔是轻盈松软的球状蛋糕，外壳酥脆、内里嫩滑。从流动餐车售卖，可单吃或填入冰淇淋形成冰火口感。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "All-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "120g",
      "amountUS": "1 cup minus 2 tbsp",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "Eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Granulated sugar",
      "nameZh": "细砂糖",
      "amountMetric": "60g",
      "amountUS": "1/3 cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Whole milk",
      "nameZh": "全脂牛奶",
      "amountMetric": "180ml",
      "amountUS": "3/4 cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Vegetable oil",
      "nameZh": "植物油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "Baking powder",
      "nameZh": "泡打粉",
      "amountMetric": "2 tsp",
      "amountUS": "2 tsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "7",
      "nameEn": "Vanilla extract",
      "nameZh": "香草精",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Whisk eggs and sugar until pale and ribbony, about 2 minutes.",
      "textZh": "鸡蛋和细砂糖放入碗中，打蛋器搅打至颜色变浅、质地浓稠，约2分钟。",
      "stateNote": {
        "visual": "pale yellow, thick ribbon trail",
        "signal": "sugar dissolved"
      }
    },
    {
      "text": "Add milk, oil, and vanilla, whisk to combine.",
      "textZh": "加入牛奶、植物油和香草精，搅拌均匀。",
      "stateNote": {
        "visual": "smooth emulsified mixture",
        "signal": "well combined"
      }
    },
    {
      "text": "Sift flour and baking powder, fold into wet ingredients until just combined.",
      "textZh": "面粉和泡打粉过筛，加入湿料中轻轻翻拌至无干粉。",
      "zhHint": "不要过度搅拌，保持面糊有颗粒感",
      "stateNote": {
        "visual": "slightly lumpy smooth batter",
        "signal": "just combined"
      }
    },
    {
      "text": "Preheat egg puff iron, brush with oil, pour batter into molds 3/4 full.",
      "textZh": "鸡蛋仔炉预热，刷薄油，倒入面糊至模具7分满。",
      "stateNote": {
        "visual": "batter spread evenly",
        "signal": "heat ~180°C"
      }
    },
    {
      "text": "Close lid, rotate occasionally, bake 4-5 minutes until golden and crisp.",
      "textZh": "合上盖子，每隔1分钟转动一次，烤4-5分钟至金黄酥脆。",
      "stateNote": {
        "visual": "golden brown, aromatic steam",
        "signal": "crisp exterior"
      }
    },
    {
      "text": "Carefully remove and serve warm, optionally with ice cream or condensed milk.",
      "textZh": "小心取出趁热食用，可搭配冰淇淋或炼乳。",
      "stateNote": {
        "visual": "hollow sphere, crisp shell",
        "signal": "ready to serve"
      }
    }
  ],
  "tips": [
    "No egg puff iron? Use waffle maker cut into circles",
    "Batter should rest 10 minutes for better texture",
    "Double batch freezes well for quick street snacks"
  ],
  "tipsZh": [
    "没有专用模具？可用华夫饼机切圆",
    "面糊静置10分钟口感更佳",
    "可批量制作冷冻保存，随时复烤"
  ],
  "relatedSlugs": [
    "tanghulu-day88-6",
    "jianbing-day88-8"
  ],
  "image": "/images/recipes/egg-puffs-day88.webp",
  "slug": "egg-puffs",
  "id": "egg-puffs"
};
