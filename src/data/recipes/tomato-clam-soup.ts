import type { Recipe } from "@/lib/types";

/** Tomato Clam Soup (番茄蛤蜊汤) — Day 137 贝壳鲜味 */
export const tomato_clam_soup: Recipe = {
  "id": "tomato-clam-soup",
  "slug": "tomato-clam-soup",
  "titleEn": "Tomato Clam Soup",
  "titleZh": "番茄蛤蜊汤",
  "pinyin": "fān qié gé lí tāng",
  "cuisine": "融合菜",
  "cuisineEn": "Fusion",
  "region": "Coastal China",
  "regionZh": "中国沿海",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "A fusion soup combining Western tomato base with Chinese clams—bright, tangy, and deeply satisfying.",
  "versionNoteZh": "融合汤——西式番茄底配中式蛤蜊，明亮酸爽，令人满足。",
  "tags": [
    "30-min",
    "soup",
    "seafood",
    "healthy",
    "quick"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This soup bridges two culinary worlds. The tomato base is familiar to Western palates, but the addition of clams and a touch of Shaoxing wine gives it an unmistakable Chinese character.",
  "storyZh": "这道汤 bridging 两种烹饪世界。番茄底熟悉西式 palate，但蛤蜊和绍兴酒增添无可争议的中国特色。",
  "image": "/images/recipes/tomato-clam-soup.webp",
  "relatedSlugs": [
    "tomato-egg-drop-soup",
    "winter-melon-soup",
    "scallion-steamed-clams"
  ],
  "ingredients": [
    {
      "id": "tc-clams-01",
      "nameEn": "fresh clams",
      "nameZh": "鲜蛤蜊",
      "pinyin": "gé lí",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Soak in salted water 30 min",
      "noteZh": "盐水浸泡30分钟吐沙"
    },
    {
      "id": "tc-tomato-02",
      "nameEn": "ripe tomatoes, diced",
      "nameZh": "成熟番茄，切丁",
      "pinyin": "fān qié",
      "amountMetric": "3 medium",
      "amountUS": "3 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "tc-tomato-paste-03",
      "nameEn": "tomato paste",
      "nameZh": "番茄膏",
      "pinyin": "fān qié gāo",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "note": "Concentrated tomato flavor",
      "noteZh": "浓缩番茄风味"
    },
    {
      "id": "tc-garlic-04",
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
      "id": "tc-wine-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "tc-stock-06",
      "nameEn": "fish stock or chicken stock",
      "nameZh": "鱼高汤或鸡高汤",
      "pinyin": "yú gāo tāng",
      "amountMetric": "600 ml",
      "amountUS": "about 2.5 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "tc-oil-07",
      "nameEn": "neutral oil",
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
      "text": "Soak clams in salted water 30 minutes. Scrub and discard any open or damaged ones.",
      "textZh": "蛤蜊盐水浸泡30分钟。刷洗，丢弃张开或破损的。",
      "zhHint": "吐沙要彻底"
    },
    {
      "text": "Heat oil in a pot over medium heat. Add diced tomatoes and a pinch of salt. Cook, mashing occasionally, for 5-7 minutes until tomatoes break down into a sauce.",
      "textZh": "中火热锅冷油，下番茄丁和少许盐。煮5-7分钟，偶尔按压，直到番茄化成酱汁。",
      "zhHint": "耐心炒番茄",
      "stateNote": {
        "visual": "Tomatoes collapse into a thick sauce",
        "visualZh": "番茄塌陷成浓酱",
        "timeRef": "5-7 minutes",
        "timeRefZh": "5-7 分钟",
        "heat": "medium",
        "signal": "Oil separates and pools at edges",
        "signalZh": "油分离，边缘 pooling"
      }
    },
    {
      "text": "Add tomato paste and garlic. Stir-fry for 1 minute until fragrant.",
      "textZh": "下番茄膏和蒜末，翻炒1分钟至香。",
      "zhHint": "别炒焦"
    },
    {
      "text": "Pour in stock and Shaoxing wine. Bring to a boil, then reduce heat and simmer for 5 minutes.",
      "textZh": "倒入高汤和绍兴酒。烧沸后转小火煮5分钟。",
      "zhHint": "让风味融合",
      "stateNote": {
        "visual": "Soup is deep red and aromatic",
        "visualZh": "汤汁深红芬芳",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Flavors have melded together",
        "signalZh": "风味融合"
      }
    },
    {
      "text": "Add clams and cook for 3-4 minutes until shells open. Discard any unopened clams.",
      "textZh": "下蛤蜊煮3-4分钟至贝壳张开。丢弃未张开的。",
      "zhHint": "蛤蜊别煮过头",
      "stateNote": {
        "visual": "Most shells have opened wide",
        "visualZh": "大部分贝壳充分张开",
        "timeRef": "3-4 minutes",
        "timeRefZh": "3-4 分钟",
        "heat": "medium",
        "signal": "80% shells open",
        "signalZh": "80%贝壳张开"
      }
    },
    {
      "text": "Taste and adjust seasoning with salt and pepper. Serve hot with crusty bread.",
      "textZh": "尝味调咸淡和胡椒。配脆面包趁热上桌。",
      "zhHint": "面包蘸汤是灵魂"
    }
  ],
  "tips": [
    "Choose ripe, red tomatoes for maximum sweetness and acidity.",
    "Don't boil the clams too long or they'll be tough.",
    "A splash of cream at the end adds richness—but it's optional."
  ],
  "tipsZh": [
    "选熟透的红番茄，甜酸平衡最佳。",
    "蛤蜊不要煮太久，否则变韧。",
    "最后加一点奶油增加浓郁感——可选。"
  ]
};
