import type { Recipe } from "@/lib/types";

/** Onion Scrambled Eggs Recipe | Quick Chinese Home-Style Breakfast (洋葱炒鸡蛋) — Day batch */
export const onion_scrambled_eggs: Recipe = {
  "id": "onion-scrambled-eggs",
  "slug": "onion-scrambled-eggs",
  "titleEn": "Onion Scrambled Eggs Recipe | Quick Chinese Home-Style Breakfast",
  "titleZh": "洋葱炒鸡蛋",
  "pinyin": "yáng cōng chǎo dàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 12,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: sweet onion caramelizes naturally in the pan, no sugar needed.",
  "versionNoteZh": "家常版：洋葱自然焦糖化，无需加糖。",
  "tags": [
    "30-min",
    "breakfast",
    "vegetarian",
    "weeknight"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "In northern Chinese households, this is the go-to weeknight dish when time is short but hunger is not.",
  "storyZh": "在华北家庭的餐桌上，这是时间紧迫时的救星。",
  "ingredients": [
    {
      "id": "oe-01",
      "nameEn": "yellow onion",
      "nameZh": "黄洋葱",
      "amountMetric": "1 large (200 g)",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "oe-02",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "4 large",
      "amountUS": "4 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "oe-03",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "oe-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "oe-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "oe-06",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/8 tsp",
      "amountUS": "1/8 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Peel onion and slice into 1/2 cm rings. Whisk eggs with 1/4 tsp salt.",
      "textZh": "洋葱切圈，鸡蛋加盐打匀。",
      "zhHint": "洋葱切圈，蛋液打匀",
      "stateNote": {
        "visual": "Onion rings separate, egg liquid uniform pale yellow.",
        "signal": "Egg mixture smooth with no streaks."
      }
    },
    {
      "text": "Heat oil over medium-high. Add onions, cook 2 minutes without stirring.",
      "textZh": "热油下洋葱，静置2分钟不翻。",
      "zhHint": "静置焦糖化",
      "stateNote": {
        "visual": "Onion edges turn translucent gold.",
        "heat": "medium-high",
        "timeRef": "2 minutes",
        "signal": "Sweet aroma, edges browning."
      }
    },
    {
      "text": "Stir onions, pour egg mixture. Let set 15 seconds.",
      "textZh": "翻拌洋葱，倒入蛋液静置15秒。",
      "zhHint": "淋蛋液静置凝底",
      "stateNote": {
        "visual": "Egg edges opaque, center still glossy.",
        "signal": "Bottom layer holds shape when pan shaken."
      }
    },
    {
      "text": "Fold eggs and onions together. Cook 30 more seconds.",
      "textZh": "轻翻拌匀，再炒30秒。",
      "zhHint": "轻翻成大块",
      "stateNote": {
        "visual": "Eggs fluffy golden, onions tender glazed.",
        "heat": "medium",
        "signal": "Eggs release easily, no liquid."
      }
    },
    {
      "text": "Remove from heat. Drizzle soy sauce, sprinkle pepper. Toss once and serve.",
      "textZh": "离火淋生抽撒胡椒，翻一次上桌。",
      "stateNote": {
        "visual": "Soy sauce sizzles on contact, aroma blooms.",
        "signal": "Salty-umami fragrance."
      }
    }
  ],
  "tips": [
    "Use nonstick pan - onions stick easily.",
    "Do not oversalt eggs before whisking.",
    "Sweet Vidalia onions are ideal if available."
  ],
  "tipsZh": [
    "用不粘锅，洋葱易粘。",
    "蛋液勿提前多盐。",
    "可用Vidalia甜洋葱。"
  ],
  "relatedSlugs": [
    "tomato-and-egg",
    "cucumber-scrambled-eggs",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/onion-scrambled-eggs.webp"
};
