import type { Recipe } from "@/lib/types";

/** Teriyaki Chicken Thighs (照烧鸡腿) (照烧鸡腿) — Day batch */
export const teriyaki_chicken_thighs: Recipe = {
  "id": "teriyaki-chicken-thighs",
  "slug": "teriyaki-chicken-thighs",
  "titleEn": "Teriyaki Chicken Thighs (照烧鸡腿)",
  "titleZh": "照烧鸡腿",
  "pinyin": "zhào shāo jī tuǐ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version mixes its own tare from soy, mirin and sugar. Restaurant version brushes the tare three times while grilling for a lacquered finish.",
  "versionNoteZh": "家常版用生抽、味醂、糖自调照烧汁。餐厅版烤时刷三次，做出镜面亮皮。",
  "tags": [
    "chicken",
    "thighs",
    "teriyaki",
    "rice-bowl",
    "weeknight",
    "30-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "照烧 means \"glossy grill\" — the shine comes from sugar in the tare caramelising against hot protein. Chinese home cooks borrowed it for its one-pan convenience: sear, sauce, done, and the same pan reduces the glaze.",
  "storyZh": "照烧意为「有光泽的烤」。亮面来自照烧汁里的糖在热锅上焦化。中国家常厨房爱上它是因为一锅到底：煎、浇、收汁，全程不用换锅。",
  "ingredients": [
    {
      "id": "tct-1",
      "nameEn": "boneless chicken thighs, skin on",
      "nameZh": "去骨带皮鸡腿",
      "amountMetric": "600 g",
      "amountUS": "about 1.3 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tct-2",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tct-3",
      "nameEn": "mirin",
      "nameZh": "味醂",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "mirin"
    },
    {
      "id": "tct-4",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "tct-5",
      "nameEn": "brown sugar",
      "nameZh": "红糖",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "tct-6",
      "nameEn": "ginger, grated",
      "nameZh": "姜末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tct-7",
      "nameEn": "garlic, grated",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tct-8",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "tct-9",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟白芝麻",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-seeds"
    },
    {
      "id": "tct-10",
      "nameEn": "steamed jasmine rice, to serve",
      "nameZh": "茉莉香米饭",
      "amountMetric": "3 bowls",
      "amountUS": "3 bowls",
      "category": "staple",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Whisk soy sauce, mirin, wine, sugar, ginger and garlic into a tare. Set aside.",
      "textZh": "生抽、味醂、绍酒、糖、姜末、蒜末调成照烧汁备用。",
      "zhHint": "调照烧汁",
      "stateNote": {
        "visual": "Sugar dissolves into a dark amber liquid",
        "visualZh": "糖完全化开，呈深琥珀色液体",
        "signal": "No grit left at the bottom of the bowl",
        "signalZh": "碗底没有颗粒感",
        "heat": "low"
      }
    },
    {
      "text": "Pat the thighs very dry and score the thick parts. Heat a pan over medium, add oil, place skin-side down.",
      "textZh": "鸡腿擦干，厚处划两刀。中火放油，皮朝下入锅。",
      "zhHint": "皮朝下入锅",
      "stateNote": {
        "visual": "Skin makes a steady sizzle, not a splatter",
        "visualZh": "表皮稳定滋滋响，不飞溅",
        "signal": "Skin is dry to the touch before it hits the pan",
        "signalZh": "下锅前表皮摸起来干爽"
      }
    },
    {
      "text": "Cook skin-side down 8 minutes, pressing gently, until the skin is deep gold and crisp.",
      "textZh": "皮朝下煎 8 分钟，轻压贴着锅，至金黄酥脆。",
      "zhHint": "煎脆鸡皮",
      "stateNote": {
        "visual": "Skin turns deep gold with a flat surface",
        "visualZh": "表皮深金黄，表面平整",
        "signal": "Chicken releases without tugging",
        "signalZh": "鸡腿能轻松脱离锅底",
        "heat": "medium",
        "timeRef": "8 minutes"
      }
    },
    {
      "text": "Flip, cook 3 minutes, then pour in the tare. It will bubble up immediately.",
      "textZh": "翻面煎 3 分钟，倒入照烧汁，会立刻起泡。",
      "zhHint": "倒入照烧汁",
      "stateNote": {
        "visual": "Sauce bubbles hard and darkens",
        "visualZh": "酱汁剧烈起泡并变深",
        "signal": "Smell turns from sharp to caramelised",
        "signalZh": "气味从刺鼻转为焦糖香",
        "heat": "medium-high"
      }
    },
    {
      "text": "Reduce 3-4 minutes, spooning sauce over the chicken, until it coats the back of a spoon.",
      "textZh": "收汁 3-4 分钟，边收边把汁淋在鸡腿上，至挂勺。",
      "zhHint": "收汁上光",
      "stateNote": {
        "visual": "Glaze becomes syrupy and glossy",
        "visualZh": "酱汁变糖浆状，油亮",
        "signal": "A line drawn through the sauce in the pan holds",
        "signalZh": "锅底划一道汁不会立刻合拢",
        "heat": "medium",
        "timeRef": "3-4 minutes"
      }
    },
    {
      "text": "Rest 2 minutes, slice, and pile over rice. Spoon the pan glaze on top and scatter sesame seeds.",
      "textZh": "静置 2 分钟切条，铺在米饭上，淋锅内酱汁撒白芝麻。",
      "zhHint": "切条装碗"
    }
  ],
  "tips": [
    "Dry skin is the whole game — moisture steams instead of crisping.",
    "Mirin is sweet rice wine; dry sherry plus a pinch of sugar is a decent stand-in.",
    "Pull the pan off the heat the moment the glaze coats a spoon — it burns in seconds."
  ],
  "tipsZh": [
    "表皮一定要擦干，有水只会蒸不会脆。",
    "味醂是甜米酒，干雪莉酒加一点糖可替代。",
    "酱汁一挂勺立刻离火，多几秒就糊。"
  ],
  "relatedSlugs": [
    "hongshao-chicken",
    "herb-roasted-chicken-thighs",
    "soy-chicken-wings",
    "kung-pao-chicken"
  ],
  "image": "/images/recipes/hongshao-chicken.webp"
};
