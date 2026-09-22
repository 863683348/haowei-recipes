import type { Recipe } from "@/lib/types";

/** Pan-Fried Tofu (香煎豆腐) — Day 138 豆制品盛宴 */
export const pan_fried_tofu: Recipe = {
  "id": "pan-fried-tofu",
  "slug": "pan-fried-tofu",
  "titleEn": "Pan-Fried Tofu",
  "titleZh": "香煎豆腐",
  "pinyin": "xiāng jiān dòu fu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan",
  "regionZh": "湖南",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Crispy golden tofu with a savory soy-ginger glaze — simple, quick, and deeply satisfying.",
  "versionNoteZh": "金黄酥脆的香煎豆腐，淋上酱油姜汁——简单快捷，十分满足。",
  "tags": [
    "30-min",
    "vegetarian",
    "hunan",
    "quick"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Pan-fried tofu is a Hunan home staple. The key is pressing the tofu well and frying it until the outside is crispy while the inside stays soft and custardy.",
  "storyZh": "香煎豆腐是湖南家常菜的标配。秘诀在于充分压干水分，煎到外面酥脆而里面仍柔软如布丁。",
  "image": "/images/recipes/pan-fried-tofu.webp",
  "relatedSlugs": [
    "mapo-tofu",
    "home-style-tofu",
    "frozen-tofu-hot-pot"
  ],
  "ingredients": [
    {
      "id": "pf-tofu-01",
      "nameEn": "firm tofu (pressed)",
      "nameZh": "老豆腐",
      "pinyin": "lǎo dòu fu",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu",
      "note": "Press for 20 min to remove excess water",
      "noteZh": "压20分钟去多余水分"
    },
    {
      "id": "pf-soy-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pf-oil-03",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "3 tbsp (45 ml)",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "pf-garlic-04",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "pf-ginger-05",
      "nameEn": "ginger, minced",
      "nameZh": "生姜，切末",
      "pinyin": "shēng jiāng",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pf-sugar-06",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "sugar"
    }
  ],
  "steps": [
    {
      "text": "Press tofu between paper towels for 20 minutes. Cut into 2cm thick slices. Pat completely dry.",
      "textZh": "豆腐用厨房纸压20分钟。切2厘米厚片，完全吸干水分。",
      "zhHint": "水分是关键"
    },
    {
      "text": "Heat oil in a large non-stick pan over medium-high heat. Lay tofu slices in a single layer.",
      "textZh": "大平底锅中火加热油。豆腐片单排放入。",
      "zhHint": "不要 overcrowd",
      "stateNote": {
        "visual": "Oil shimmers but not smoking",
        "visualZh": "油 shimmering 但不冒烟",
        "heat": "medium-high",
        "signal": "Oil ripples when tofu touches it",
        "signalZh": "油波状起伏"
      }
    },
    {
      "text": "Fry undisturbed for 3 minutes until golden. Flip and fry another 3 minutes.",
      "textZh": "煎3分钟至金黄，翻面再煎3分钟。",
      "zhHint": "耐心煎出脆皮",
      "stateNote": {
        "visual": "Bottom is deep golden and crispy",
        "visualZh": "底部深金黄酥脆",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Tofu releases easily from pan",
        "signalZh": "豆腐轻易脱离锅底"
      }
    },
    {
      "text": "Add garlic and ginger, stir-fry for 15 seconds.",
      "textZh": "下蒜末姜末，翻炒15秒。",
      "zhHint": "快炒不焦"
    },
    {
      "text": "Pour in soy sauce and sugar. Toss gently to coat. Serve immediately.",
      "textZh": "淋生抽和糖，轻翻裹匀。立刻上桌。",
      "zhHint": "趁热吃"
    }
  ],
  "tips": [
    "Press tofu well — wet tofu won't crisp up.",
    "Don't flip too often; let the crust form.",
    "Serve with steamed rice to soak up the sauce."
  ],
  "tipsZh": [
    "豆腐一定要压干——湿豆腐煎不出脆皮。",
    "不要频繁翻面——让脆壳形成。",
    "配米饭——吸酱汁绝佳。"
  ]
};
