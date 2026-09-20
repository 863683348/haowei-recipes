import type { Recipe } from "@/lib/types";

/** White Wine Steamed Clams (酒蒸文蛤) — Day 137 贝壳鲜味 */
export const white_wine_steamed_clams: Recipe = {
  "id": "white-wine-steamed-clams",
  "slug": "white-wine-steamed-clams",
  "titleEn": "White Wine Steamed Clams",
  "titleZh": "酒蒸文蛤",
  "pinyin": "jiǔ zhēng wén gé",
  "cuisine": "融合菜",
  "cuisineEn": "Fusion",
  "region": "Coastal China",
  "regionZh": "中国沿海",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Fusion take on classic steamed clams using Chinese wine instead of European white wine.",
  "versionNoteZh": "融合版——用中国酒替代欧洲白葡萄酒。",
  "tags": [
    "30-min",
    "seafood",
    "fusion",
    "date-night"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This fusion dish replaces French wine with Shaoxing wine and adds ginger and scallion for an Eastern twist. The result is deeply savory with a complex aroma that bridges both culinary traditions.",
  "storyZh": "这道融合菜用绍兴酒替代法国白葡萄酒，加姜葱增添东方韵味。结果是浓郁鲜咸，香气复杂， bridging 两种烹饪传统。",
  "image": "/images/recipes/white-wine-steamed-clams.webp",
  "relatedSlugs": [
    "scallion-steamed-clams",
    "garlic-vermicelli-steamed-scallops",
    "clear-steamed-prawns"
  ],
  "ingredients": [
    {
      "id": "ww-clams-01",
      "nameEn": "hard-shell clams (manila clams)",
      "nameZh": "文蛤",
      "pinyin": "wén gé",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Soak in salted water 30 min",
      "noteZh": "盐水浸泡30分钟吐沙"
    },
    {
      "id": "ww-wine-02",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "100 ml",
      "amountUS": "about 7 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ww-ginger-03",
      "nameEn": "ginger, sliced into thin rounds",
      "nameZh": "生姜，切片",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "about 2 tbsp sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ww-scallion-04",
      "nameEn": "scallions, cut into 3-inch lengths",
      "nameZh": "大葱，切3英寸段",
      "pinyin": "dà cōng",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ww-butter-05",
      "nameEn": "unsalted butter",
      "nameZh": "无盐黄油",
      "pinyin": "wú yán huáng yóu",
      "amountMetric": "2 tbsp (30 g)",
      "amountUS": "2 tbsp",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "ww-pepper-06",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Soak clams in salted water for 30 minutes. Scrub shells thoroughly under running water.",
      "textZh": "蛤蜊盐水浸泡30分钟吐沙。流水下彻底刷洗外壳。",
      "zhHint": "吐沙要彻底"
    },
    {
      "text": "Melt butter in a large pot with a tight-fitting lid over medium heat. Add ginger slices and scallion whites. Sauté for 1 minute until fragrant.",
      "textZh": "大锅中火融化黄油。下姜片和大葱白部分，炒1分钟至香。",
      "zhHint": "用葱白部分",
      "stateNote": {
        "visual": "Butter foams and ginger sizzles",
        "visualZh": "黄油起泡，姜片滋滋作响",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Aroma of ginger and butter fills the kitchen",
        "signalZh": "厨房充满姜和黄油的香气"
      }
    },
    {
      "text": "Add clams and pour Shaoxing wine over them. Cover and bring to a boil over high heat.",
      "textZh": "下蛤蜊，淋绍兴酒。盖锅盖大火煮至沸腾。",
      "zhHint": "大火快煮"
    },
    {
      "text": "Once boiling, reduce heat to medium and steam for 4-5 minutes. Shake the pot occasionally to redistribute clams.",
      "textZh": "煮沸后转中火蒸4-5分钟。偶尔摇晃锅使蛤蜊受热均匀。",
      "zhHint": "摇锅匀热",
      "stateNote": {
        "visual": "Most shells have opened, wine is bubbling",
        "visualZh": "大部分贝壳张开，酒沸腾",
        "timeRef": "4-5 minutes",
        "timeRefZh": "4-5 分钟",
        "heat": "medium",
        "signal": "At least 80% shells open",
        "signalZh": "80%以上贝壳张开"
      }
    },
    {
      "text": "Discard any unopened clams. Sprinkle with white pepper and green scallion parts. Serve immediately in the pot or transfer to bowls.",
      "textZh": "丢弃未张开的蛤蜊。撒白胡椒粉和葱绿部分。立刻上桌。",
      "zhHint": "趁热喝汤吃蛤",
      "stateNote": {
        "visual": "Steam rises, broth is fragrant and golden",
        "visualZh": "热气腾腾，汤汁金黄芬芳",
        "signal": "Serve immediately",
        "signalZh": "立刻上桌"
      }
    }
  ],
  "tips": [
    "Save the broth—it's liquid gold. Serve with crusty bread for dipping.",
    "Shaoxing wine works beautifully here; don't substitute with regular cooking wine.",
    "The longer you cook, the tougher the clams get. Keep it under 5 minutes."
  ],
  "tipsZh": [
    "汤汁是精华——配面包蘸食。",
    "绍兴酒效果极佳，不要用普通料酒替代。",
    "煮越久越韧，控制在5分钟内。"
  ]
};
