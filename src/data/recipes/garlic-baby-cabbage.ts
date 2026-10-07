import type { Recipe } from "@/lib/types";

/** Garlic Baby Chinese Cabbage (蒜蓉娃娃菜) (蒜蓉娃娃菜) — Day batch */
export const garlic_baby_cabbage: Recipe = {
  "id": "garlic-baby-cabbage",
  "slug": "garlic-baby-cabbage",
  "titleEn": "Garlic Baby Chinese Cabbage (蒜蓉娃娃菜)",
  "titleZh": "蒜蓉娃娃菜",
  "pinyin": "suàn róng wá wá cài",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China / nationwide",
  "regionZh": "华北 / 全国",
  "difficulty": "easy",
  "timeMin": 18,
  "servings": 3,
  "version": "family",
  "versionNote": "In restaurants, baby cabbage is often deep-fried in hot oil for 10 seconds before the wok toss, which blisters the leaves and makes them absorb sauce. The family version blanches or dry-sears instead — lighter, and the sweet core of the cabbage comes through more clearly.",
  "versionNoteZh": "餐厅常把娃娃菜先在热油里过 10 秒，让菜叶起泡更易吸汁。家常版改为汆烫或干煎——更清爽，娃娃菜芯的甜味也更清楚。",
  "tags": [
    "home-style",
    "vegetarian",
    "quick",
    "garlic",
    "budget"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "娃娃菜 is a small, tightly wrapped Chinese cabbage with a pale yellow heart and leaves so tender they cook in three minutes. 蒜蓉娃娃菜 became a menu staple in northern Chinese home cooking because it solves a seasonal problem: in winter, when greens are expensive and limited, this small cabbage keeps for weeks in a cold hallway and still tastes sweet. Garlic and a little dried chili are all it needs.",
  "storyZh": "娃娃菜是一种个头小、包心紧的变种白菜，菜芯淡黄、叶子嫩到三分钟就熟。蒜蓉娃娃菜成为北方家常菜是因为它解决了一个季节问题：冬天绿叶菜又贵又少，这种小白菜放在冷楼道里能存几周，还依然带甜。只需要蒜和一点干辣椒。",
  "ingredients": [
    {
      "id": "gbc-cabbage",
      "nameEn": "baby Chinese cabbage (娃娃菜), quartered lengthwise",
      "nameZh": "娃娃菜（竖切四瓣）",
      "amountMetric": "3 small heads (about 500 g)",
      "amountUS": "3 small heads (about 1.1 lb)",
      "category": "produce",
      "pantry": "asian",
      "termKey": "napa-cabbage",
      "note": "If unavailable, use the tender inner half of a napa cabbage cut into thick ribbons.",
      "noteZh": "买不到就用大白菜嫩芯部分切粗条代替。"
    },
    {
      "id": "gbc-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "5 cloves",
      "amountUS": "5 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gbc-chili",
      "nameEn": "dried red chilies, snipped in half and seeds shaken out",
      "nameZh": "干辣椒（剪半去籽）",
      "amountMetric": "2",
      "amountUS": "2",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "gbc-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gbc-vinegar",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "gbc-oyster",
      "nameEn": "vegetarian mushroom stir-fry sauce",
      "nameZh": "素食香菇蚝油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "gbc-starch",
      "nameEn": "cornstarch mixed with 2 tbsp water",
      "nameZh": "玉米淀粉 + 2 汤匙水（水淀粉）",
      "amountMetric": "1 tsp + 30 ml water",
      "amountUS": "1 tsp + 2 tbsp water",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "gbc-scallion",
      "nameEn": "scallion greens, sliced",
      "nameZh": "葱花",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "gbc-oil",
      "nameEn": "neutral oil",
      "nameZh": "中性油",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Quarter each baby cabbage lengthwise so the core holds the leaves together, then rinse and shake off excess water.",
      "textZh": "娃娃菜竖切成四瓣，让菜芯连住叶片，冲洗后甩掉多余水分。",
      "stateNote": {
        "visual": "Each quarter shows a pale yellow core with tightly nested white-green leaves",
        "visualZh": "每瓣能看到淡黄菜芯和层层紧抱的白绿叶",
        "signal": "Quarters hold shape when lifted by the core",
        "signalZh": "拎起菜芯时整瓣不散"
      }
    },
    {
      "text": "Heat 1 tablespoon of oil in a wok over medium-high and lay the cabbage quarters cut-side down in a single layer. Sear undisturbed for 2 minutes.",
      "textZh": "锅中大火加 1 汤匙油，娃娃菜切面朝下平铺一层，静置煎 2 分钟。",
      "stateNote": {
        "visual": "Cut faces turn golden-brown with a few darker caramelised edges; outer leaves wilt slightly",
        "visualZh": "切面呈金褐、边缘略带焦糖色，外层叶片稍软",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "A sweet, toasty cabbage smell rises and the sizzle softens",
        "signalZh": "飘出甜香的焦白菜味，滋滋声变柔"
      },
      "tip": "Do not crowd the pan or the cabbage will steam and go grey instead of golden.",
      "tipZh": "别挤满锅，否则会变成蒸、颜色发灰而不是金黄。"
    },
    {
      "text": "Flip the quarters, add the dried chilies and half the garlic to the bare part of the wok, and stir for 20 seconds until fragrant.",
      "textZh": "翻面，在锅空处下干辣椒和一半蒜末，炒 20 秒出香。",
      "stateNote": {
        "visual": "Chili skins darken to a deep red; garlic is just turning ivory",
        "visualZh": "辣椒皮变深红，蒜末刚转象牙白",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "medium-high",
        "signal": "A sharp chili-garlic aroma hits you without any bitterness",
        "signalZh": "冲鼻的辣椒蒜香扑上来，不带苦味"
      }
    },
    {
      "text": "Pour in 100 ml of water, cover, and steam over medium heat for 3 minutes until the cores are tender.",
      "textZh": "倒入 100 毫升水，加盖中火焖 3 分钟至菜芯变软。",
      "stateNote": {
        "visual": "Cores turn translucent; a skewer slides into the thickest part with no resistance",
        "visualZh": "菜芯变半透明，竹签插入最厚处毫无阻力",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Leaves at the outer edge droop but are still bright, not olive",
        "signalZh": "外层叶片下垂但仍鲜亮不发暗"
      }
    },
    {
      "text": "Uncover, add the remaining garlic, soy sauce, vegetarian oyster sauce and the vinegar. Spoon the liquid over the cabbage for 1 minute to reduce.",
      "textZh": "开盖，加入余下蒜末、生抽、素食蚝油和香醋，把汤汁不断淋在菜上收 1 分钟。",
      "stateNote": {
        "visual": "Liquid reduces by half and turns a light amber that clings to the leaves",
        "visualZh": "汤汁收掉一半、变成淡琥珀色挂在叶上",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-high",
        "signal": "Bubbles around the edge are glossy and slow",
        "signalZh": "边缘气泡油亮且冒得慢"
      }
    },
    {
      "text": "Drizzle the cornstarch slurry, toss twice, scatter the scallion and serve the cabbage with the sauce spooned over.",
      "textZh": "淋水淀粉翻两下，撒葱花，把汤汁浇在菜上即可出锅。",
      "stateNote": {
        "visual": "Glossy amber glaze on golden-seared cabbage, garlic flecks visible",
        "visualZh": "金褐菜面裹着油亮琥珀汁，可见蒜末颗粒",
        "signal": "The core is creamy and sweet while the leaves still have body",
        "signalZh": "菜芯绵甜，叶片仍有嚼头"
      }
    }
  ],
  "tips": [
    "Quartering lengthwise keeps the core intact — random chopping makes the leaves fall apart in the wok.",
    "The splash of black vinegar at the end is what keeps a sweet cabbage from tasting flat.",
    "Add 100 g of soaked glass noodles in step 4 for a one-pan meal."
  ],
  "tipsZh": [
    "竖切四瓣能保住菜芯，乱切会让叶片在锅里散开。",
    "最后那一勺香醋是让甜白菜不发闷的关键。",
    "第 4 步加 100 克泡软的粉丝，就是一锅出。"
  ],
  "ingredientSubs": [
    {
      "from": "baby Chinese cabbage (娃娃菜)",
      "fromZh": "娃娃菜",
      "to": "inner leaves of napa cabbage, cut into 4 cm ribbons",
      "toZh": "大白菜嫩芯切 4 厘米宽条",
      "ratio": "1:1 by weight",
      "note": "Slightly more water content, so shorten the covered steam to 2 minutes.",
      "noteZh": "水分更多，加盖焖的时间缩短到 2 分钟。"
    }
  ],
  "relatedSlugs": [
    "stir-fried-bok-choy",
    "napa-cabbage-stewed-tofu",
    "vinegar-cabbage"
  ],
  "image": "/images/recipes/napa-cabbage-stewed-tofu.webp"
};
