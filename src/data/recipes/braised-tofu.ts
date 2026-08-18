import type { Recipe } from "@/lib/types";

/** Braised Tofu (红烧豆腐) (红烧豆腐) — Day batch */
export const braised_tofu: Recipe = {
  "id": "braised-tofu",
  "slug": "braised-tofu",
  "titleEn": "Braised Tofu (红烧豆腐)",
  "titleZh": "红烧豆腐",
  "pinyin": "hóng shāo dòu fu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National home cooking (Jiangnan favorite)",
  "regionZh": "全国家常（江南一带最爱）",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "The restaurant version deep-fries the tofu first and uses a rich master stock. The family version sears it in a little oil and builds the classic hongshao sauce — light soy, dark soy, sugar, Shaoxing — at home in one pan.",
  "versionNoteZh": "餐厅版先宽油炸豆腐再用老卤烧。家常版少油煎出香味，在一口锅里调出经典红烧汁——生抽、老抽、糖、绍兴酒。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian-ok",
    "comfort",
    "tofu",
    "braised"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "红烧 is the great home-cooking technique of eastern China: dark soy for color, sugar for shine, and a long, patient simmer. Braised tofu is the budget family's version of red-braised pork — the same glossy sauce, a fraction of the cost. In Jiangnan households it's often made with shiitake mushroom soaking water, which turns an ordinary block of tofu into something that tastes like a much longer story.",
  "storyZh": "红烧是中国东部家庭烹饪的看家技法：老抽上色、糖提亮、文火慢煨。红烧豆腐就是普通家庭的红烧肉平替——一样的红亮酱汁，价格却只是零头。江南人家常用泡香菇的水来烧，让一块普通豆腐吃出满满的故事感。",
  "ingredients": [
    {
      "id": "br-tofu",
      "nameEn": "firm tofu",
      "nameZh": "老豆腐",
      "amountMetric": "400 g",
      "amountUS": "1 block (about 14 oz)",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "tofu",
      "note": "Firm holds its shape through the braise; silken will fall apart.",
      "noteZh": "老豆腐耐烧不散；嫩豆腐会碎。"
    },
    {
      "id": "br-shiitake",
      "nameEn": "dried shiitake mushrooms, soaked (reserve the soaking water)",
      "nameZh": "干香菇",
      "amountMetric": "4 pieces (about 15 g dry)",
      "amountUS": "4 medium (dry)",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-shiitake",
      "note": "The soaking water replaces stock — this is the secret.",
      "noteZh": "泡菇水代替高汤——这就是秘诀。"
    },
    {
      "id": "br-garlic",
      "nameEn": "garlic, smashed",
      "nameZh": "拍蒜",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "br-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "br-scallion",
      "nameEn": "scallions, white and green parts separated",
      "nameZh": "小葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "br-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "br-dark-soy",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce",
      "note": "For color only — it's not the salty one.",
      "noteZh": "只用来上色——它不是咸味的来源。"
    },
    {
      "id": "br-sugar",
      "nameEn": "sugar (rock sugar if you have it)",
      "nameZh": "糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Rock sugar gives the most beautiful gloss.",
      "noteZh": "冰糖的亮泽最漂亮。"
    },
    {
      "id": "br-shaoxing",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "br-starch",
      "nameEn": "cornstarch slurry (1 tbsp cornstarch + 2 tbsp water)",
      "nameZh": "水淀粉",
      "amountMetric": "3 tbsp total",
      "amountUS": "3 tbsp total",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "br-oil",
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
      "text": "Slice tofu into 1.5 cm thick rectangles. Drain on paper towels. Slice rehydrated shiitake (keep 200 ml of the soaking water).",
      "textZh": "豆腐切 1.5 厘米厚的块，放厨房纸上沥干。泡发的香菇切片（留 200 毫升泡菇水）。",
      "zhHint": "切豆腐、留泡菇水",
      "stateNote": {
        "visual": "Tofu surfaces look dry, shiitake plump and rehydrated",
        "visualZh": "豆腐表面干燥，香菇吸足水分、饱满",
        "signal": "Tofu no longer weeps water",
        "signalZh": "豆腐不再渗水"
      }
    },
    {
      "text": "Heat oil in a skillet over medium-high. Sear tofu in a single layer until golden on both sides. Remove.",
      "textZh": "锅中热油，中大火。豆腐单层煎至两面金黄后盛出。",
      "zhHint": "煎豆腐",
      "stateNote": {
        "visual": "Golden-brown crust forms; tofu feels springy when pressed",
        "visualZh": "金黄色脆皮形成；按压时豆腐有弹性",
        "heat": "medium-high",
        "timeRef": "2-3 minutes per side",
        "timeRefZh": "每面 2-3 分钟",
        "signal": "Tofu slides easily in the pan",
        "signalZh": "豆腐在锅中能轻松滑动"
      }
    },
    {
      "text": "Lower to medium. Add garlic, ginger, and shiitake slices. Stir 30 seconds until fragrant.",
      "textZh": "转中火，下蒜、姜和香菇片，翻炒 30 秒出香。",
      "zhHint": "爆香香菇",
      "stateNote": {
        "visual": "Shiitake edges start to brown; aroma turns nutty and deep",
        "visualZh": "香菇边缘开始金黄，香气变得浓郁深沉",
        "heat": "medium",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Fragrant — before the garlic turns brown",
        "signalZh": "香气扑鼻——别等蒜片变焦"
      }
    },
    {
      "text": "Add light soy, dark soy, sugar, and Shaoxing wine. Stir 20 seconds — the sauce should darken and smell sweet-savory.",
      "textZh": "加入生抽、老抽、糖和料酒，翻炒 20 秒——酱汁变深，甜咸香扑鼻。",
      "zhHint": "调红烧汁",
      "stateNote": {
        "visual": "Sauce coats the pan in a deep reddish-brown, glossy sheen",
        "visualZh": "酱汁在锅底形成深红棕色的油亮涂层",
        "heat": "medium",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "Sugar has dissolved and sauce smells caramelized, not burnt",
        "signalZh": "糖已融化，酱汁有焦糖香而不糊"
      }
    },
    {
      "text": "Pour in the reserved shiitake water (200 ml). Return the tofu, bring to a simmer, and cook 6-8 minutes, spooning sauce over the tofu occasionally.",
      "textZh": "倒入预留的泡菇水（200 毫升）。放回豆腐，煮开后小火煨 6-8 分钟，期间不时把汤汁浇在豆腐上。",
      "zhHint": "香菇水烧豆腐",
      "stateNote": {
        "visual": "Tofu absorbs the red-brown sauce; sauce bubbles gently and reduces",
        "visualZh": "豆腐吸饱红棕色酱汁；汤汁微微冒泡收浓",
        "heat": "medium-low",
        "timeRef": "6-8 minutes",
        "timeRefZh": "6-8 分钟",
        "signal": "Sauce has reduced by half and turns glossy",
        "signalZh": "汤汁收掉一半且变得油亮"
      },
      "tip": "Resist the urge to stir — a gentle spoon-over keeps the tofu intact.",
      "tipZh": "忍住别翻——用勺子浇汁保持豆腐完整。"
    },
    {
      "text": "Add half the cornstarch slurry; swirl the pan to thicken. Add more slurry only if you want a heavier coat.",
      "textZh": "倒入一半水淀粉，晃动锅身让汤汁变稠。想要更浓的芡再补。",
      "zhHint": "勾芡收汁",
      "stateNote": {
        "visual": "Sauce turns translucent and clings to tofu edges",
        "visualZh": "汤汁变半透明，挂在豆腐边缘",
        "timeRef": "30-60 seconds",
        "timeRefZh": "30-60 秒",
        "signal": "Sauce coats the back of a spoon without running off",
        "signalZh": "酱汁能挂在勺背而不滑落"
      }
    },
    {
      "text": "Off heat, scatter the green scallions. Serve over steamed rice.",
      "textZh": "关火，撒上葱花。配米饭吃。",
      "zhHint": "撒葱花出锅",
      "stateNote": {
        "visual": "Deep red-brown glaze, glossy tofu, fresh green scallions",
        "visualZh": "深红棕色酱汁、油亮的豆腐、翠绿葱花",
        "signal": "Glaze looks lacquered — serve immediately",
        "signalZh": "酱汁如漆亮——立刻上桌"
      }
    }
  ],
  "tips": [
    "The shiitake soaking water is the whole trick — it replaces stock with deep umami.",
    "Dark soy is for color only; don't let anyone convince you to add more than a teaspoon.",
    "Sear the tofu in a single layer; crowded tofu steams and loses its crust.",
    "Leftover braised tofu tastes even better the next day — the sauce keeps soaking in."
  ],
  "tipsZh": [
    "泡菇水是全部秘诀——它用浓郁的鲜味代替高汤。",
    "老抽只负责上色；别超出一茶匙。",
    "豆腐要单层煎；挤在一起会变成蒸豆腐。",
    "剩的红烧豆腐隔夜更好吃——酱汁越浸越入味。"
  ],
  "relatedSlugs": [
    "mapo-tofu",
    "home-style-tofu",
    "egg-fried-rice"
  ],
  "image": "/images/recipes/braised-tofu.webp"
};
