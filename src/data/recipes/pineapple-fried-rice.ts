import type { Recipe } from "@/lib/types";

/** Pineapple Fried Rice (菠萝炒饭) (菠萝炒饭) — Day batch */
export const pineapple_fried_rice: Recipe = {
  "id": "pineapple-fried-rice",
  "slug": "pineapple-fried-rice",
  "titleEn": "Thai-Style Pineapple Fried Rice Recipe | 20-Min Chinese Street Food",
  "titleZh": "菠萝炒饭",
  "pinyin": "bō luó chǎo fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Southern China (Thailand-influenced)",
  "regionZh": "中国南方（受泰国影响）",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Thai-style pineapple fried rice is a street-food classic: sweet pineapple, curry spice, cashews, raisins. Home version simplifies the curry paste to powder.",
  "versionNoteZh": "泰式菠萝炒饭是街头经典：甜菠萝、咖喱香、腰果、葡萄干。家常版用咖喱粉简化。",
  "tags": [
    "20-min",
    "sweet-sour",
    "kid-friendly",
    "one-pot",
    "thai-inspired"
  ],
  "dietary": [
    "none"
  ],
  "story": "Born from Thai-Chinese street food in southern China, pineapple fried rice is the ultimate sweet-savory comfort bowl. The curry powder gives it golden color and warmth; pineapple adds bright acidity that cuts through the richness. Kids and adults both love it.",
  "storyZh": "源于中国南方的泰式中餐街头小吃，菠萝炒饭是甜咸交织的终极 comfort food。咖喱粉赋予金黄色泽与暖意；菠萝提供清爽酸度，化解油腻。大人小孩都爱。",
  "ingredients": [
    {
      "id": "pfr-rice",
      "nameEn": "day-old cold cooked rice",
      "nameZh": "隔夜米饭",
      "amountMetric": "300 g (about 2 cups)",
      "amountUS": "2 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Jasmine rice preferred for its floral aroma."
    },
    {
      "id": "pfr-pineapple",
      "nameEn": "fresh pineapple, cut into 1 cm chunks (or canned, well drained)",
      "nameZh": "新鲜菠萝，切 1 厘米块（或用罐头菠萝，充分沥干）",
      "amountMetric": "200 g (about 1⅔ cups)",
      "amountUS": "1⅔ cups",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pfr-shrimp",
      "nameEn": "raw shrimp, peeled & deveined",
      "nameZh": "鲜虾仁，去壳去肠线",
      "amountMetric": "100 g",
      "amountUS": "3/4 cup",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "pfr-egg",
      "nameEn": "eggs, beaten",
      "nameZh": "鸡蛋",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "pfr-cashew",
      "nameEn": "raw cashew halves",
      "nameZh": "生腰果",
      "amountMetric": "30 g (about 1/4 cup)",
      "amountUS": "1/4 cup",
      "category": "other",
      "pantry": "local",
      "note": "Toast in dry pan first for extra crunch."
    },
    {
      "id": "pfr-raisin",
      "nameEn": "golden raisins",
      "nameZh": "金葡萄干",
      "amountMetric": "30 g (about 1/4 cup)",
      "amountUS": "1/4 cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "pfr-onion",
      "nameEn": "red onion, finely diced",
      "nameZh": "红洋葱，切细丁",
      "amountMetric": "80 g (2/3 cup)",
      "amountUS": "2/3 cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pfr-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜，切末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "pfr-curry",
      "nameEn": "yellow curry powder",
      "nameZh": "黄咖喱粉",
      "amountMetric": "1½ tbsp",
      "amountUS": "1½ tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "curry-powder"
    },
    {
      "id": "pfr-fishsauce",
      "nameEn": "fish sauce",
      "nameZh": "鱼露",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "fish-sauce"
    },
    {
      "id": "pfr-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pfr-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "pfr-sugar",
      "nameEn": "white sugar",
      "nameZh": "白砂糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Dry-toast the cashews in a dry pan over medium heat, shaking occasionally, until golden and fragrant — about 3 minutes. Remove and set aside. This step is non-negotiable for crunch.",
      "textZh": "干锅中小火炒香腰果，期间不断摇晃，至金黄微香——约 3 分钟。盛出备用。这步是酥脆口感的关键。",
      "zhHint": "干焙腰果",
      "stateNote": {
        "visual": "Cashews turn light golden and release a nutty aroma",
        "visualZh": "腰果变浅金色，散发坚果香气",
        "heat": "medium",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Golden color and nutty smell; no smoke",
        "signalZh": "呈金黄色，散发坚果香；无烟"
      }
    },
    {
      "text": "Heat 1 tbsp oil over medium-high. Add beaten eggs, scramble until just set (soft curds), about 30 seconds. Remove to plate.",
      "textZh": "热锅中放 1 汤匙油，倒入蛋液，炒至刚刚凝固（柔软蛋花），约 30 秒。盛出。",
      "zhHint": "滑炒鸡蛋",
      "stateNote": {
        "visual": "Eggs are soft curds, still glossy",
        "visualZh": "鸡蛋柔软有光泽",
        "heat": "medium-high",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "No runny liquid; curds still moist",
        "signalZh": "无流动蛋液；蛋块湿润"
      }
    },
    {
      "text": "Add remaining 1 tbsp oil. Toss in onion and garlic. Stir-fry 30 seconds until onion softens and becomes fragrant.",
      "textZh": "加剩余 1 汤匙油。下洋葱和大蒜。翻炒 30 秒，洋葱变软出香。",
      "zhHint": "爆香洋葱大蒜",
      "stateNote": {
        "visual": "Onion turns translucent at edges; garlic sizzles",
        "visualZh": "洋葱边缘变透明；大蒜滋啦作响",
        "heat": "high",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Aromatic, no browning",
        "signalZh": "香气四溢，未上色"
      }
    },
    {
      "text": "Add curry powder to the empty side of the wok, let it sizzle 10 seconds to bloom the spices, then fold into the onion. (Blooming releases the essential oils in the curry.)",
      "textZh": "把咖喱粉撒到锅空的一侧，让它滋啦 10 秒激发香气，再翻拌进洋葱。（加热能释放咖喱中的精油。）",
      "zhHint": "煸香咖喱粉",
      "stateNote": {
        "visual": "Curry powder darkens slightly and releases intense golden aroma",
        "visualZh": "咖喱粉颜色变深，散发浓郁金黄色香气",
        "heat": "high",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "Aroma is warm and nutty, not raw-powdery",
        "signalZh": "香气温暖坚果感，不是生粉味"
      }
    },
    {
      "text": "Add cold rice, breaking up clumps. Press and toss until rice is evenly golden from the curry — about 2 minutes.",
      "textZh": "下隔夜冷饭，搓散结块。按压翻拌至米饭均匀裹上咖喱金色——约 2 分钟。",
      "zhHint": "下米饭炒至金黄",
      "stateNote": {
        "visual": "Rice transforms from white to a uniform golden-yellow",
        "visualZh": "米饭从白色变成均匀的金黄色",
        "heat": "high",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Every grain coated; no white patches",
        "signalZh": "每粒米都裹上颜色；没有白色斑块"
      }
    },
    {
      "text": "Add fish sauce, soy sauce, and sugar. Toss to combine. Add the pineapple chunks and raisins — toss gently so pineapple doesn't break apart.",
      "textZh": "下鱼露、生抽和糖。翻匀。下菠萝块和葡萄干——轻轻翻，别让菠萝散碎。",
      "zhHint": "调味，下菠萝葡萄干",
      "stateNote": {
        "visual": "Sauce coats rice glossy; pineapple warm but holding shape",
        "visualZh": "酱汁裹上米饭呈光泽；菠萝温热但保持块状",
        "heat": "high",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Pineapple just warmed through, still firm",
        "signalZh": "菠萝刚热透，依然紧实"
      }
    },
    {
      "text": "Fold in the scrambled eggs and half the cashews. Toss once more. Serve topped with remaining cashews and a pineapple wedge if you have one.",
      "textZh": "把炒蛋和一半腰果折入。再翻一次。装盘，余下腰果撒在上面，有菠萝的话放一片装饰。",
      "zhHint": "回蛋，撒腰果出锅",
      "stateNote": {
        "visual": "Rice golden, pineapple bright, cashews scattered on top",
        "visualZh": "米饭金黄，菠萝鲜亮，腰果点缀其上",
        "signal": "Each spoonful has rice, pineapple, cashew, and protein",
        "signalZh": "每勺都有米饭、菠萝、腰果和蛋白"
      }
    }
  ],
  "tips": [
    "Canned pineapple works but must be thoroughly drained — excess water makes rice soggy.",
    "Fish sauce is non-negotiable for authentic flavor; for vegetarian version use soy sauce + 1/2 tsp miso.",
    "The curry powder must be bloomed in oil first — raw curry powder tastes bitter."
  ],
  "tipsZh": [
    "罐头菠萝可用，但必须充分沥干——多余水分会让米饭变糊。",
    "鱼露是正宗风味的关键；素食版用酱油+1/2 茶匙味噌替代。",
    "咖喱粉必须先煸香——生咖喱粉有苦味。"
  ],
  "relatedSlugs": [
    "egg-fried-rice",
    "yangzhou-fried-rice",
    "kung-pao-chicken"
  ],
  "image": "/images/recipes/pineapple-fried-rice.webp"
};
