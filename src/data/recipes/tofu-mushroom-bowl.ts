import type { Recipe } from "@/lib/types";

/** Buddha's Delight Tofu Bowl (罗汉斋豆腐碗) — Day 138 豆制品盛宴 */
export const tofu_mushroom_bowl: Recipe = {
  "id": "tofu-mushroom-bowl",
  "slug": "tofu-mushroom-bowl",
  "titleEn": "Buddha's Delight Tofu Bowl",
  "titleZh": "罗汉斋豆腐碗",
  "pinyin": "luó hàn zhāi dòu fu wǎn",
  "cuisine": "素菜",
  "cuisineEn": "Vegetarian",
  "region": "Fujian",
  "regionZh": "福建",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "A vegetarian temple dish with tofu and assorted mushrooms — umami-rich and deeply satisfying.",
  "versionNoteZh": "素菜寺庙菜配豆腐和多种蘑菇——鲜味浓郁，十分满足。",
  "tags": [
    "30-min",
    "vegetarian",
    "temple",
    "healthy"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Buddha's Delight is a classic vegetarian temple dish. This tofu version combines firm tofu with shiitake, wood ear, and day lily for a deeply umami bowl.",
  "storyZh": "罗汉斋是经典素菜寺庙菜。这道豆腐版将老豆腐与香菇、木耳、黄花菜结合，鲜味浓郁。",
  "image": "/images/recipes/tofu-mushroom-bowl.webp",
  "relatedSlugs": [
    "mushroom-tofu-claypot",
    "winter-melon-soup",
    "garlic-romaine"
  ],
  "ingredients": [
    {
      "id": "tm-tofu-01",
      "nameEn": "firm tofu, cubed",
      "nameZh": "老豆腐，切块",
      "pinyin": "lǎo dòu fu",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "tm-shiitake-02",
      "nameEn": "dried shiitake mushrooms, rehydrated",
      "nameZh": "干香菇，泡发",
      "pinyin": "gān xiāng gū",
      "amountMetric": "30 g",
      "amountUS": "about 1 oz",
      "category": "produce",
      "pantry": "asian",
      "termKey": "dried-shiitake"
    },
    {
      "id": "tm-wood-03",
      "nameEn": "dried wood ear mushrooms",
      "nameZh": "干木耳",
      "pinyin": "gān mù ěr",
      "amountMetric": "20 g",
      "amountUS": "about 0.7 oz",
      "category": "produce",
      "pantry": "asian",
      "termKey": "wood-ear"
    },
    {
      "id": "tm-daylily-04",
      "nameEn": "dried day lily buds",
      "nameZh": "干黄花菜",
      "pinyin": "gān huáng huā cài",
      "amountMetric": "20 g",
      "amountUS": "about 0.7 oz",
      "category": "produce",
      "pantry": "asian",
      "note": "Soak 20 min",
      "noteZh": "泡20分钟"
    },
    {
      "id": "tm-garlic-05",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tm-soy-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tm-sesame-07",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Rehydrate shiitake, wood ear, and day lily in warm water for 20 minutes. Cut into bite-sized pieces.",
      "textZh": "香菇、木耳、黄花菜温水泡发20分钟，切适口大小。",
      "zhHint": "泡发要透"
    },
    {
      "text": "Heat sesame oil in a wok. Sauté garlic for 15 seconds until fragrant.",
      "textZh": "香油热锅，爆香蒜末15秒。",
      "zhHint": "快炒"
    },
    {
      "text": "Add all vegetables and stir-fry for 2 minutes.",
      "textZh": "下所有蔬菜，翻炒2分钟。",
      "zhHint": "大火快炒"
    },
    {
      "text": "Add tofu and soy sauce. Gently toss to combine. Cook for 3 minutes.",
      "textZh": "下豆腐和生抽，轻翻匀，煮3分钟。",
      "zhHint": "豆腐别碎",
      "stateNote": {
        "visual": "Tofu is coated in sauce, vegetables are tender",
        "visualZh": "豆腐裹满酱汁，蔬菜软",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Aroma of mushrooms fills kitchen",
        "signalZh": "厨房充满蘑菇香气"
      }
    },
    {
      "text": "Serve over steamed rice.",
      "textZh": "配米饭上桌。",
      "zhHint": "米饭是灵魂"
    }
  ],
  "tips": [
    "Rehydrate mushrooms thoroughly for best texture.",
    "Don't stir too vigorously — tofu will break.",
    "This dish is best served immediately."
  ],
  "tipsZh": [
    "蘑菇要充分泡发，口感最佳。",
    "不要大力翻炒——豆腐会碎。",
    "这道菜现做现吃最佳。"
  ]
};
