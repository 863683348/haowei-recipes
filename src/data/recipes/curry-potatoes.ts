import type { Recipe } from "@/lib/types";

/** Chinese-Style Curried Potatoes (咖喱土豆) (咖喱土豆) — Day batch */
export const curry_potatoes: Recipe = {
  "id": "curry-potatoes",
  "slug": "curry-potatoes",
  "titleEn": "Chinese-Style Curried Potatoes (咖喱土豆)",
  "titleZh": "咖喱土豆",
  "pinyin": "kā lí tǔ dòu",
  "cuisine": "家常菜",
  "cuisineEn": "Chinese home-style curry",
  "region": "Chinese home kitchen / Hong Kong style",
  "regionZh": "中国家常厨房 / 港式",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Hong Kong cha chaan teng curry is made from a curry brick or paste bloomed in oil, then stretched with coconut milk and simmered for hours with the meat. This home version uses plain curry powder — bloomed in oil the same way — with a splash of coconut milk only at the end, so it tastes bright rather than heavy and comes together in half an hour.",
  "versionNoteZh": "港式茶餐厅咖喱是用咖喱砖或咖喱膏在油里爆香，再加椰浆跟肉一起炖上几小时。家常版用普通咖喱粉——同样先在油里爆香——椰浆只在最后加一点，所以味道清爽不厚重，半小时就能端上桌。",
  "tags": [
    "home-style",
    "potato",
    "curry",
    "vegetarian",
    "one-pot",
    "rice-friendly"
  ],
  "dietary": [
    "vegan",
    "vegetarian"
  ],
  "story": "Chinese curry is not Indian curry: it is a Hong Kong invention built from whatever a British colony left behind — curry powder, a bit of coconut milk, and soy sauce to bring it back home. Potatoes are the classic partner because they take their time, thicken the sauce with their own starch, and cost almost nothing. This plain version is what students and weeknight cooks actually make.",
  "storyZh": "中式咖喱不是印度咖喱：它是香港的产物，用的是殖民时期留下的东西——咖喱粉、一点椰浆，再加酱油拉回中餐的底味。土豆是它的经典搭档：耐炖、能用自身淀粉把酱汁收稠，还几乎不要钱。这个纯素版本才是学生党和上班族真正会做的。",
  "ingredients": [
    {
      "id": "cp-potato",
      "nameEn": "waxy potatoes, cut into 3 cm chunks",
      "nameZh": "土豆（切 3 厘米块）",
      "amountMetric": "3 medium (about 500 g)",
      "amountUS": "3 medium (about 1.1 lb)",
      "category": "produce",
      "pantry": "local",
      "note": "Waxy potatoes hold their shape. If using starchy ones, cut bigger and reduce simmer time.",
      "noteZh": "脆土豆能保持形状。用面土豆就切大块、缩短炖的时间。"
    },
    {
      "id": "cp-curry",
      "nameEn": "curry powder (Chinese/Hong Kong style if available)",
      "nameZh": "咖喱粉（有港式最好）",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "spice",
      "pantry": "local",
      "note": "Madras or standard curry powder both work. Blooming it in oil is essential.",
      "noteZh": "Madras 或普通咖喱粉都可以。关键是必须在油里爆香。",
      "termKey": "curry-powder"
    },
    {
      "id": "cp-onion",
      "nameEn": "onion, diced",
      "nameZh": "洋葱丁",
      "amountMetric": "1/2 medium",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "cp-carrot",
      "nameEn": "carrot, cut into chunks",
      "nameZh": "胡萝卜块",
      "amountMetric": "1 medium",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "cp-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cp-coconut",
      "nameEn": "coconut milk (full-fat preferred)",
      "nameZh": "椰浆（全脂更佳）",
      "amountMetric": "80 ml",
      "amountUS": "about 1/3 cup",
      "category": "asian-pantry",
      "pantry": "local",
      "note": "Optional but rounds out the heat. Substitute: 3 tbsp evaporated milk or oat milk.",
      "noteZh": "可选，但能柔化辣度。替代：3 大勺淡奶或燕麦奶。"
    },
    {
      "id": "cp-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cp-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cp-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cp-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cp-scallion",
      "nameEn": "scallion greens, sliced",
      "nameZh": "葱花",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Cut the potatoes into even 3 cm chunks and rinse off the surface starch under cold water. Drain well.",
      "textZh": "土豆切成均匀的 3 厘米块，用冷水冲掉表面淀粉，沥干备用。",
      "zhHint": "切块冲洗",
      "stateNote": {
        "visual": "Water rinsing off the potatoes runs clear instead of cloudy",
        "visualZh": "冲下来的水从浑浊变清澈",
        "signal": "Edges look sharp and defined, coated with a thin film of water only",
        "signalZh": "边缘棱角清晰，只是薄薄一层水膜"
      },
      "tip": "Even sizing means every piece finishes at the same time.",
      "tipZh": "大小一致，才能同时熟。"
    },
    {
      "text": "Heat oil in a saucepan over medium heat. Add onion and cook 3 minutes until translucent and sweet.",
      "textZh": "锅中火加油，下洋葱炒 3 分钟至透明变甜。",
      "zhHint": "炒软洋葱",
      "stateNote": {
        "visual": "Onion turns soft and glassy; edges begin to turn golden",
        "visualZh": "洋葱变软透亮；边缘开始转金黄",
        "heat": "medium",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "It smells sweet, not sharp — no raw onion bite left",
        "signalZh": "闻起来是甜的而不是冲的——生洋葱味消失"
      }
    },
    {
      "text": "Add garlic and curry powder. Stir constantly for 45 seconds so the powder fries in the oil — it will darken and smell intensely fragrant. Do not walk away.",
      "textZh": "下蒜末和咖喱粉，不停搅拌 45 秒，让咖喱粉在油里爆香——颜色变深、香气浓烈。这一步千万别走开。",
      "zhHint": "咖喱粉爆香",
      "stateNote": {
        "visual": "Powder goes from dry yellow to a dark paste clinging to the onion; oil turns golden",
        "visualZh": "咖喱粉从干粉的黄色变成裹住洋葱的深色酱糊；油色转金",
        "heat": "medium-low",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "Curry aroma fills the kitchen — pull it off before it smells dusty or burnt",
        "signalZh": "咖喱香充满厨房——闻到灰味或糊味前立刻离火"
      },
      "tip": "This single step is the difference between curry flavor and raw spice. Never add curry powder to water.",
      "tipZh": "这一步决定了是咖喱香还是生粉味。咖喱粉永远不要直接撒进水里。"
    },
    {
      "text": "Add potato and carrot chunks and stir 1 minute so every piece is coated in the spiced oil.",
      "textZh": "下土豆块和胡萝卜块，翻炒 1 分钟让每块都裹上香料油。",
      "zhHint": "翻炒裹油",
      "stateNote": {
        "visual": "Every chunk takes on a yellow-gold coat; no dry white patches remain",
        "visualZh": "每块都裹上金黄色的外衣；没有残留的白色干粉",
        "heat": "medium",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "The pan looks dry — the oil has been absorbed by the spice rather than pooling",
        "signalZh": "锅里看起来是干的——油被香料吸收了而不是积着"
      }
    },
    {
      "text": "Pour in 300 ml water, add salt and sugar. Bring to a boil, then cover and simmer over medium-low heat 12 minutes, stirring once or twice.",
      "textZh": "倒入 300 毫升清水，加盐和糖。大火煮开后加盖，中小火炖 12 分钟，中途翻动一两次。",
      "zhHint": "加水慢炖",
      "stateNote": {
        "visual": "Liquid turns opaque yellow; potato edges begin to soften and round off",
        "visualZh": "汤汁变成不透明的黄色；土豆边缘开始变软、棱角变圆",
        "heat": "medium-low",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "A chopstick pierces a potato with slight resistance at the center",
        "signalZh": "筷子扎土豆时只在中心遇到轻微阻力"
      }
    },
    {
      "text": "Uncover, add soy sauce and coconut milk, and simmer uncovered 3–4 minutes until the sauce thickens naturally from the potato starch. Adjust seasoning.",
      "textZh": "开盖，加生抽和椰浆，再煮 3–4 分钟，让土豆淀粉自然把汤汁收稠。尝味调整。",
      "zhHint": "加椰浆收汁",
      "stateNote": {
        "visual": "Sauce goes from thin yellow broth to a creamy coating that mounds behind the spoon",
        "visualZh": "汤汁从稀黄变成能在勺后堆叠的浓稠挂酱",
        "heat": "medium-low",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "The surface sheens with coconut oil at the edges — it has reduced enough",
        "signalZh": "边缘泛出椰油的油光——说明收汁到位了"
      },
      "tip": "Add coconut milk late, at a bare simmer. Boiling it hard can split it.",
      "tipZh": "椰浆要晚加、保持微沸。大火滚煮容易分层。"
    },
    {
      "text": "Rest off the heat 3 minutes so the flavors settle, then scatter scallion greens and serve over steamed rice.",
      "textZh": "关火静置 3 分钟让味道融合，撒葱花，浇在白米饭上享用。",
      "zhHint": "静置出锅",
      "stateNote": {
        "visual": "A thin film of coconut oil rises to the surface; potatoes are glossy and intact",
        "visualZh": "表面浮起薄薄一层椰油；土豆油亮且形状完整",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "The potato holds its corner when lifted with a spoon",
        "signalZh": "用勺子舀起时土豆仍能保持棱角"
      }
    }
  ],
  "tips": [
    "Fry the curry powder in oil before liquid. Everything else is negotiable; this is not.",
    "Add the coconut milk at the end and keep it at a bare simmer to avoid splitting.",
    "No coconut milk? Use evaporated milk, or skip it — it is still good.",
    "The sauce thickens itself from potato starch, so no cornstarch needed."
  ],
  "tipsZh": [
    "咖喱粉一定先过油爆香。其他都能商量，这条不行。",
    "椰浆最后加并保持微沸，避免油水分离。",
    "没有椰浆就用淡奶，或者干脆不放——依然好吃。",
    "土豆自身的淀粉就能收稠，不需要勾芡。"
  ],
  "relatedSlugs": [
    "potato-beef-stew",
    "green-pepper-potato-shreds",
    "salt-and-pepper-potatoes"
  ],
  "image": "/images/recipes/potato-beef-stew.webp"
};
