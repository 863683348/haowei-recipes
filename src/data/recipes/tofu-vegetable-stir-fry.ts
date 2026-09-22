import type { Recipe } from "@/lib/types";

/** Tofu and Vegetable Stir-Fry (豆腐蔬菜炒) — Day 138 豆制品盛宴 */
export const tofu_vegetable_stir_fry: Recipe = {
  "id": "tofu-vegetable-stir-fry",
  "slug": "tofu-vegetable-stir-fry",
  "titleEn": "Tofu and Vegetable Stir-Fry",
  "titleZh": "豆腐蔬菜炒",
  "pinyin": "dòu fu shū cài chǎo",
  "cuisine": "融合菜",
  "cuisineEn": "Fusion",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Quick vegetable and tofu stir-fry — a healthy weeknight meal.",
  "versionNoteZh": "快速蔬菜豆腐炒——健康的工作日晚餐。",
  "tags": [
    "30-min",
    "vegetarian",
    "healthy",
    "quick"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This dish combines firm tofu with seasonal vegetables in a light soy-garlic sauce. It's fast, healthy, and endlessly adaptable.",
  "storyZh": "这道菜将老豆腐与时令蔬菜结合，清淡酱油蒜香酱汁。快速、健康，可无限变化。",
  "image": "/images/recipes/tofu-vegetable-stir-fry.webp",
  "relatedSlugs": [
    "pan-fried-tofu",
    "stir-fried-dried-tofu-with-celery",
    "garlic-romaine"
  ],
  "ingredients": [
    {
      "id": "tv-tofu-01",
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
      "id": "tv-broccoli-02",
      "nameEn": "broccoli florets",
      "nameZh": "西兰花",
      "pinyin": "xī lán huā",
      "amountMetric": "200 g",
      "amountUS": "about 7 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tv-carrot-03",
      "nameEn": "carrot, julienned",
      "nameZh": "胡萝卜，切丝",
      "pinyin": "hú luó bo",
      "amountMetric": "1 medium",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "tv-garlic-04",
      "nameEn": "garlic cloves, sliced",
      "nameZh": "大蒜，切片",
      "pinyin": "dà suàn",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tv-soy-05",
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
      "id": "tv-oil-06",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut tofu into 2cm cubes. Pat dry with paper towels.",
      "textZh": "豆腐切2厘米块，用厨房纸吸干。",
      "zhHint": "吸干水分"
    },
    {
      "text": "Heat oil in a wok over high heat. Add tofu and fry for 2 minutes until golden. Remove and set aside.",
      "textZh": "大火热锅冷油，下豆腐煎2分钟至金黄。取出备用。",
      "zhHint": "先煎豆腐",
      "stateNote": {
        "visual": "Tofu turns light golden",
        "visualZh": "豆腐呈浅金黄色",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Crispy crust forms",
        "signalZh": "脆壳形成"
      }
    },
    {
      "text": "Add garlic and stir-fry for 10 seconds. Add broccoli and carrot, toss for 1 minute.",
      "textZh": "下蒜片爆香10秒，下西兰花和胡萝卜丝，翻炒1分钟。",
      "zhHint": "大火快炒"
    },
    {
      "text": "Return tofu to wok. Add soy sauce. Toss everything together for 30 seconds. Serve immediately.",
      "textZh": "豆腐回锅，淋生抽，翻炒30秒。立刻上桌。",
      "zhHint": "快翻匀"
    }
  ],
  "tips": [
    "Pat tofu dry — wet tofu steams instead of frying.",
    "Don't overcook vegetables — they should stay crisp-tender.",
    "Add a splash of sesame oil at the end for fragrance."
  ],
  "tipsZh": [
    "豆腐吸干——湿豆腐是蒸而不是煎。",
    "不要过度烹饪蔬菜——保持脆嫩。",
    "最后加一点香油提香。"
  ]
};
