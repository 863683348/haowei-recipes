import type { Recipe } from "@/lib/types";

/** Garlic Loofah Stir-fry (蒜蓉丝瓜) (蒜蓉丝瓜) — Day batch */
export const garlic_loofah: Recipe = {
  "id": "garlic-loofah",
  "slug": "garlic-loofah",
  "titleEn": "Garlic Loofah Stir-fry (蒜蓉丝瓜)",
  "titleZh": "蒜蓉丝瓜",
  "pinyin": "suàn róng sī guā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong / southern China",
  "regionZh": "广东 / 华南",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Cantonese restaurant kitchens often add a spoonful of rendered crab roe or dried scallop to the sauce, which is why the dish tastes rounder there. The home version uses a little stock and a pinch of sugar to get the same roundness without the seafood.",
  "versionNoteZh": "粤菜酒楼常往酱汁里加一勺蟹黄或干贝，所以那里的味道更圆润。家常版用一点高汤和少许糖，不用海鲜也能达到同样的圆润。",
  "tags": [
    "cantonese",
    "vegetarian",
    "15-min",
    "summer",
    "garlic"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "丝瓜 — the ridged or smooth loofah gourd — is a summer vegetable in southern China, picked young so the flesh is still creamy and the seeds barely formed. 蒜蓉丝瓜 is the fastest way to cook it: six minutes from cutting board to table, no blanching, no batter. The gourd gives off its own sweet liquid, and garlic plus a handful of glass noodles or dried shrimp is all the help it needs.",
  "storyZh": "丝瓜是华南的夏季瓜菜，趁嫩摘，果肉还绵、籽还没成形。蒜蓉丝瓜是最快的做法：从切菜到上桌六分钟，不汆水、不挂糊。丝瓜自己会出甜味汁水，只要蒜、再加一把粉丝或虾皮就够了。",
  "ingredients": [
    {
      "id": "gl-loofah",
      "nameEn": "young loofah gourd (丝瓜), peeled and cut into 5 mm diagonal slices",
      "nameZh": "丝瓜（去皮切 5 毫米斜片）",
      "amountMetric": "2 medium (about 450 g)",
      "amountUS": "2 medium (about 1 lb)",
      "category": "produce",
      "pantry": "asian",
      "note": "Use zucchini as a stand-in, but cut the cook time to 2 minutes.",
      "noteZh": "可用西葫芦代替，但炒的时间缩到 2 分钟。"
    },
    {
      "id": "gl-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "5 cloves",
      "amountUS": "5 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gl-ginger",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "gl-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gl-stock",
      "nameEn": "vegetable stock",
      "nameZh": "蔬菜高汤",
      "amountMetric": "80 ml",
      "amountUS": "1/3 cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "gl-starch",
      "nameEn": "cornstarch mixed with 1 tbsp water",
      "nameZh": "玉米淀粉 + 1 汤匙水（水淀粉）",
      "amountMetric": "1 tsp + 15 ml water",
      "amountUS": "1 tsp + 1 tbsp water",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "gl-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "0.25 tsp",
      "amountUS": "1/4 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gl-sesame",
      "nameEn": "toasted sesame oil",
      "nameZh": "芝麻香油",
      "amountMetric": "0.5 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "gl-oil",
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
      "text": "Peel the loofah with a vegetable peeler, removing the ridges but keeping as much green flesh as possible, then slice on the diagonal into 5 mm coins.",
      "textZh": "丝瓜用削皮刀削去棱线但尽量保留绿色果肉，斜切成 5 毫米厚片。",
      "stateNote": {
        "visual": "Pale green translucent flesh with a faint pearly sheen; seeds tiny and soft",
        "visualZh": "浅绿半透明果肉带淡淡珠光，籽细小柔软",
        "signal": "A slice bends slightly and feels cool and slippery",
        "signalZh": "薄片微弯、手感凉滑"
      },
      "tip": "If the seeds are big and hard, the gourd is over-mature and will taste watery.",
      "tipZh": "如果籽又大又硬，说明瓜老了，炒出来会发水。"
    },
    {
      "text": "Heat the oil in a wok over medium-high, add the garlic and ginger, and stir for 15 seconds.",
      "textZh": "锅中大火热油，下蒜末姜末炒 15 秒。",
      "stateNote": {
        "visual": "Garlic turns pale gold at the tips only; no browning anywhere",
        "visualZh": "蒜末只有尖端转浅金，没有任何发褐",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "medium-high",
        "signal": "Aroma is warm and nutty rather than sharp",
        "signalZh": "香气温热带坚果香，不再辛辣"
      }
    },
    {
      "text": "Add the loofah and toss over high heat for 60 seconds so every slice touches the hot metal.",
      "textZh": "下丝瓜大火翻 60 秒，让每片都贴到热锅面。",
      "stateNote": {
        "visual": "Slices go from opaque pale green to a deeper jade and start to glisten",
        "visualZh": "瓜片由不透明浅绿转为更深翠色，开始泛油光",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "The first beads of liquid appear at the edges of the pan",
        "signalZh": "锅边开始出现第一批汁水珠"
      }
    },
    {
      "text": "Pour in the stock, add the soy sauce and sugar, cover, and cook over medium heat for 2 minutes.",
      "textZh": "倒入高汤，加生抽和糖，加盖中火焖 2 分钟。",
      "stateNote": {
        "visual": "Slices look almost glassy and a skewer slides through with no resistance",
        "visualZh": "瓜片近乎透明，竹签插入毫无阻力",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "The liquid in the pan is pale green and tastes sweet",
        "signalZh": "锅中汁水淡绿、尝起来带甜"
      }
    },
    {
      "text": "Uncover, drizzle the cornstarch slurry around the edge, and toss for 20 seconds until the sauce thickens enough to coat a spoon.",
      "textZh": "开盖，沿锅边淋水淀粉，翻 20 秒至酱汁浓到能挂勺。",
      "stateNote": {
        "visual": "Sauce turns glossy and clings to the slices instead of running off",
        "visualZh": "酱汁变亮挂在瓜片上而不是流走",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "medium-high",
        "signal": "A spoon drawn through the sauce leaves a line that holds for a second",
        "signalZh": "勺子划过酱汁留下一条能停一秒的痕"
      }
    },
    {
      "text": "Turn off the heat, add the sesame oil, and serve immediately while the gourd is still silky.",
      "textZh": "关火淋芝麻香油，趁丝瓜还滑嫩立刻上桌。",
      "stateNote": {
        "visual": "Jade slices in a pale glossy sauce, with visible flecks of gold garlic",
        "visualZh": "翠绿瓜片浸在淡亮酱汁中，可见金色蒜末",
        "signal": "Texture is creamy-tender, never spongy or collapsed",
        "signalZh": "口感绵嫩，不发海绵也不塌烂"
      }
    }
  ],
  "tips": [
    "Salt the loofah only at the very end — salt early draws out water and the gourd turns limp.",
    "A splash of stock beats water: it keeps the sauce tasting like something.",
    "Add 1 tbsp of dried shrimp with the garlic for the classic Cantonese savoury note."
  ],
  "tipsZh": [
    "盐一定要最后放——早放会出水，丝瓜就塌了。",
    "加高汤比加水好：酱汁才有味道。",
    "下蒜时加 1 汤匙虾皮，就是经典粤式鲜香。"
  ],
  "ingredientSubs": [
    {
      "from": "loofah gourd (丝瓜)",
      "fromZh": "丝瓜",
      "to": "zucchini, cut into 5 mm half-moons",
      "toZh": "西葫芦切 5 毫米半月片",
      "ratio": "1:1 by weight",
      "note": "Milder and less sweet; reduce the covered cooking to 90 seconds.",
      "noteZh": "味道更淡、甜度低；加盖时间缩到 90 秒。"
    }
  ],
  "relatedSlugs": [
    "garlic-roasted-eggplant",
    "garlic-romaine",
    "garlic-baby-cabbage"
  ],
  "image": "/images/recipes/garlic-roasted-eggplant.webp"
};
