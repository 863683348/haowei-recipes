import type { Recipe } from "@/lib/types";

/** Spicy Crispy Tofu Cubes (香辣酥脆豆腐) — Day 138 豆制品盛宴 */
export const spicy_tofu_cubes: Recipe = {
  "id": "spicy-tofu-cubes",
  "slug": "spicy-tofu-cubes",
  "titleEn": "Spicy Crispy Tofu Cubes",
  "titleZh": "香辣酥脆豆腐",
  "pinyin": "xiāng là suì cuì dòu fu",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Crispy fried tofu tossed in a spicy-savory sauce — irresistible snack or side dish.",
  "versionNoteZh": "酥脆炸豆腐裹香辣酱汁——停不下来的零食或配菜。",
  "tags": [
    "30-min",
    "sichuan",
    "vegetarian",
    "spicy",
    "snack"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This Sichuan-style crispy tofu is addictive. The exterior is crackling crisp, the interior soft and custardy, all coated in a spicy-sweet-savory sauce.",
  "storyZh": "这道川菜风格酥脆豆腐上瘾。外壳噼啪脆，里面柔软布丁，裹着香辣甜咸酱汁。",
  "image": "/images/recipes/spicy-tofu-cubes.webp",
  "relatedSlugs": [
    "mapo-tofu",
    "spicy-diced-chicken",
    "salt-pepper-mantis-shrimp"
  ],
  "ingredients": [
    {
      "id": "st-tofu-01",
      "nameEn": "firm tofu, cubed",
      "nameZh": "老豆腐，切块",
      "pinyin": "lǎo dòu fu",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "st-corn-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "st-douban-03",
      "nameEn": "doubanjiang",
      "nameZh": "豆瓣酱",
      "pinyin": "dòu bàn jiàng",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "st-garlic-04",
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
      "id": "st-chili-05",
      "nameEn": "chili oil",
      "nameZh": "红油",
      "pinyin": "hóng yóu",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "st-sugar-06",
      "nameEn": "sugar",
      "nameZh": "糖",
      "pinyin": "táng",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "sugar"
    }
  ],
  "steps": [
    {
      "text": "Cut tofu into 2cm cubes. Coat evenly with cornstarch.",
      "textZh": "豆腐切2厘米块，均匀裹玉米淀粉。",
      "zhHint": "裹粉要匀"
    },
    {
      "text": "Heat oil to 180°C. Fry tofu in batches for 2-3 minutes until golden and crispy. Drain.",
      "textZh": "油温180°C，分批炸豆腐2-3分钟至金黄酥脆。沥油。",
      "zhHint": "分批炸",
      "stateNote": {
        "visual": "Tofu is deep golden and crackling",
        "visualZh": "豆腐深金黄，噼啪响",
        "timeRef": "2-3 minutes",
        "timeRefZh": "2-3 分钟",
        "heat": "high",
        "signal": "Oil bubbles vigorously",
        "signalZh": "油剧烈冒泡"
      }
    },
    {
      "text": "In a clean wok, heat 1 tbsp oil. Sauté doubanjiang and garlic for 15 seconds.",
      "textZh": "干净 wok 热1汤匙油，炒豆瓣酱和蒜末15秒。",
      "zhHint": "快炒"
    },
    {
      "text": "Add fried tofu, chili oil, and sugar. Toss quickly to coat. Serve immediately.",
      "textZh": "下炸豆腐、红油和糖，快速翻匀。立刻上桌。",
      "zhHint": "快翻，保持脆"
    }
  ],
  "tips": [
    "Double-fry for extra crispiness: fry once, rest 5 minutes, fry again.",
    "Toss quickly — the sauce will soften the crust if left too long.",
    "Serve as a snack with cold beer."
  ],
  "tipsZh": [
    "双重炸更脆：炸一次，休息5分钟，再炸一次。",
    "快速翻——酱汁会让脆壳变软。",
    "作为零食配啤酒。"
  ]
};
