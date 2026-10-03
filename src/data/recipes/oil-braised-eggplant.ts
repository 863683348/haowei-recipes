import type { Recipe } from "@/lib/types";

/** Oil-Braised Eggplant with Soy and Vinegar (油焖茄子) (油焖茄子) — Day batch */
export const oil_braised_eggplant: Recipe = {
  "id": "oil-braised-eggplant",
  "slug": "oil-braised-eggplant",
  "titleEn": "Oil-Braised Eggplant with Soy and Vinegar (油焖茄子)",
  "titleZh": "油焖茄子",
  "pinyin": "yóu mèn qié zi",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Jiangnan (Shanghai / Zhejiang)",
  "regionZh": "江南（上海 / 浙江）",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "\"Men\" (焖) means braising in a closed pot with very little liquid — the steam softens the eggplant rather than boiling it. Restaurants pass the eggplant through hot oil first for a glossy skin; the home version shallow-fries in the same pan, then braises covered, which uses a third of the oil and tastes less heavy.",
  "versionNoteZh": "「焖」指少量汤汁加盖慢煨——靠蒸汽把茄子焖软而不是水煮。餐厅会先过油让表皮油亮；家常版在同口锅里半煎后加盖焖，油量只用三分之一，吃起来也不那么腻。",
  "tags": [
    "jiangnan",
    "eggplant",
    "vegetarian",
    "home-style",
    "braise",
    "30-min"
  ],
  "dietary": [
    "vegan",
    "vegetarian"
  ],
  "story": "Jiangnan cooking treats vegetables almost like meat: soy, sugar, and a closed pot, until the vegetable takes on a dark, glossy coat and a sweetness that isn't quite dessert. 油焖茄子 is the archetype. The sugar here is not optional — with the black vinegar at the end it makes the sweet-sour backbone that every Shanghai household grew up on, and the oil is what carries it into the flesh.",
  "storyZh": "江南做菜常常「把蔬菜当肉做」：酱油、糖、加盖焖，让蔬菜裹上一层深褐油亮的外衣，甜得几乎像甜品。油焖茄子就是典范。这里的糖不是可选项——和出锅前的香醋一起构成沪上人家从小吃到大的糖醋底味，而油是把味道带进茄肉的载体。",
  "ingredients": [
    {
      "id": "obe-eggplant",
      "nameEn": "Chinese eggplant (long)",
      "nameZh": "长茄子",
      "amountMetric": "2 large (about 500 g)",
      "amountUS": "2 large (about 1.1 lb)",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "obe-lightsoy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "obe-darksoy",
      "nameEn": "dark soy sauce (for color)",
      "nameZh": "老抽（上色）",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "obe-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "This is a Shanghai-style amount. Cut to 2 tsp if you prefer savory.",
      "noteZh": "这是上海口味的量。偏咸口的可以减到 2 茶匙。"
    },
    {
      "id": "obe-vinegar",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "obe-garlic",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "obe-scallion",
      "nameEn": "scallion, whites and greens separated",
      "nameZh": "葱（葱白葱绿分开）",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "obe-slurry",
      "nameEn": "cornstarch mixed with 2 tbsp water",
      "nameZh": "水淀粉（玉米淀粉 1 茶匙 + 水 2 大勺）",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "obe-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut the eggplant into thick strips about 1.5 cm wide and 6 cm long, keeping the skin on. Leave them uncovered for 10 minutes so the cut faces dry slightly.",
      "textZh": "茄子带皮切成约 1.5 厘米宽、6 厘米长的粗条，敞开放 10 分钟让切面稍微收干。",
      "zhHint": "切条晾干",
      "stateNote": {
        "visual": "Cut faces go from wet-looking to matte; strips feel slightly tacky",
        "visualZh": "切面从水亮变哑光；摸起来有点发黏",
        "timeRef": "10 minutes air-drying",
        "timeRefZh": "晾 10 分钟",
        "signal": "No moisture transfers to your fingertips when you touch a cut face",
        "signalZh": "手指碰切面时不留水迹"
      }
    },
    {
      "text": "Heat 2 tbsp oil in a wide pan over medium-high. Fry the strips in a single layer 4 minutes without stirring, then turn once and fry 3 minutes more until golden.",
      "textZh": "宽口锅中大火热 2 大勺油，茄条单层下锅，先不翻动煎 4 分钟，翻一次面再煎 3 分钟至金黄。",
      "zhHint": "煎至金黄",
      "stateNote": {
        "visual": "Skin side blisters and turns bronze; flesh side is evenly browned",
        "visualZh": "带皮面起泡转成古铜色；茄肉面均匀上色",
        "heat": "medium-high",
        "timeRef": "7 minutes total",
        "timeRefZh": "共 7 分钟",
        "signal": "The oil stops hissing aggressively — the surface water is gone",
        "signalZh": "油的响声不再剧烈——表面水分已经干了"
      }
    },
    {
      "text": "Push the eggplant aside, add the last 1 tbsp oil with garlic and scallion whites. Fry 20 seconds until fragrant.",
      "textZh": "把茄子拨到一边，补最后 1 大勺油，下蒜片和葱白，炒 20 秒出香。",
      "zhHint": "爆香蒜葱",
      "stateNote": {
        "visual": "Garlic edges turn pale gold; scallion whites go translucent",
        "visualZh": "蒜片边缘转浅金；葱白变半透明",
        "heat": "medium",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "Aroma lifts off the pan — before the garlic browns",
        "signalZh": "香气窜起来——在蒜片变褐之前"
      }
    },
    {
      "text": "Return everything together. Add both soy sauces, sugar and 100 ml water. Bring to a simmer, cover, and cook over low heat 6 minutes.",
      "textZh": "全部搅到一起。加生抽、老抽、糖和 100 毫升清水。煮开后加盖，小火焖 6 分钟。",
      "zhHint": "调味焖煮",
      "stateNote": {
        "visual": "Eggplant takes on an even reddish-brown color; liquid darkens and reduces by half",
        "visualZh": "茄子转为均匀的酱褐色；汤汁变深、收掉一半",
        "heat": "low",
        "timeRef": "6 minutes covered",
        "timeRefZh": "加盖焖 6 分钟",
        "signal": "Strips are fully soft — a chopstick passes through with no resistance",
        "signalZh": "茄条完全变软——筷子一穿到底没有阻力"
      }
    },
    {
      "text": "Stir in the cornstarch slurry and cook 1 minute, uncovered, until the sauce thickens and turns glossy.",
      "textZh": "淋入水淀粉，开盖煮 1 分钟，直到酱汁变稠发亮。",
      "zhHint": "收汁勾芡",
      "stateNote": {
        "visual": "Sauce goes from thin and watery to a glossy coat that clings to the strips",
        "visualZh": "酱汁从稀水状变成能挂在茄条上的亮芡",
        "heat": "medium",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "The spoon leaves a clear trail on the pan bottom",
        "signalZh": "锅铲划过锅底能留下清晰的痕迹"
      }
    },
    {
      "text": "Turn off the heat, add the black vinegar and scallion greens, and toss twice. Serve with plenty of rice.",
      "textZh": "关火，加入香醋和葱绿，翻拌两下即可。配足量米饭上桌。",
      "zhHint": "点醋出锅",
      "stateNote": {
        "visual": "Vinegar brightens the color and loosens the sauce slightly; everything glistens",
        "visualZh": "香醋让颜色更亮、酱汁略稀；整锅都在闪着油光",
        "signal": "It smells sweet-sour and sharp — the vinegar should hit your nose, not just your tongue",
        "signalZh": "香氣是酸甜带冲——醋香要先窜进鼻子，而不只是留在舌尖"
      },
      "tip": "Vinegar goes in off the heat. Boiling it kills the aroma you just paid for.",
      "tipZh": "香醋一定要关火后加。一煮开，刚花力气买来的香气就没了。"
    }
  ],
  "tips": [
    "Air-dry the cut strips before frying — wet eggplant steams instead of browning.",
    "Sugar and black vinegar are a pair: adjust both together, never one alone.",
    "Add the vinegar off the heat so the aroma survives.",
    "Even better an hour later at room temperature; the sugar keeps seeping in."
  ],
  "tipsZh": [
    "切好的茄条先晾干再下锅——带水的茄子是蒸熟而不是煎黄。",
    "糖和香醋是一对：要调就一起调，不要只动其中一个。",
    "香醋务必关火后再下，香气才留得住。",
    "放凉一小时后常温吃更入味，糖分会继续往里渗透。"
  ],
  "relatedSlugs": [
    "soy-paste-eggplant",
    "minced-pork-eggplant",
    "mapo-tofu"
  ],
  "image": "/images/recipes/yu-xiang-eggplant.webp"
};
