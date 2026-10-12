import type { Recipe } from "@/lib/types";

/** Curry Fried Rice (咖喱炒饭) — Day batch */
export const curry_fried_rice: Recipe = {
  "id": "curry-fried-rice",
  "slug": "curry-fried-rice",
  "titleEn": "Curry Fried Rice",
  "titleZh": "咖喱炒饭",
  "pinyin": "gā lí chǎo fàn",
  "cuisine": "港式",
  "cuisineEn": "Hong Kong style",
  "region": "Hong Kong",
  "regionZh": "香港",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks bloom the curry powder in oil and stop there — a dry, fragrant fried rice. Cha chaan teng kitchens often add a spoon of curry paste or coconut milk, giving the wetter, richer version people recognise from the plate.",
  "versionNoteZh": "家常做法把咖喱粉在油里爆香就停——得到干香的炒饭；茶餐厅常加一勺咖喱酱或椰浆，就是大家熟悉的那种更湿更浓的版本。",
  "tags": [
    "30-min",
    "fried-rice",
    "curry",
    "chicken",
    "hong-kong"
  ],
  "dietary": [
    "none"
  ],
  "story": "Neither Chinese nor Indian, curry fried rice is pure Hong Kong — the colonial pantry meeting the wok. Everything hangs on one move: the curry powder has to hit hot oil on its own for a few seconds before anything wet goes in. Curry powder stirred into a finished dish tastes like dust; bloomed in oil it turns nutty and warm.",
  "storyZh": "咖喱炒饭既不中也不印，是纯粹的香港产物——殖民地食材柜遇上了炒锅。成败全在一个动作：咖喱粉必须先单独在热油里爆几秒，再下任何带水的东西。最后撒进去的咖喱粉吃起来像尘土，在油里爆开才会变得坚果香、暖口。",
  "ingredients": [
    {
      "id": "cfr-01",
      "nameEn": "cooked rice, cold and day-old",
      "nameZh": "米饭，隔夜冷饭",
      "pinyin": "lěng fàn",
      "amountMetric": "450 g",
      "amountUS": "3 cups cooked",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "cfr-02",
      "nameEn": "boneless chicken thigh, small dice",
      "nameZh": "去骨鸡腿肉，切小丁",
      "pinyin": "jī tuǐ ròu",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Thigh stays juicy where breast dries out in fried rice",
      "noteZh": "鸡腿肉在炒饭里能保持多汁，鸡胸会柴"
    },
    {
      "id": "cfr-03",
      "nameEn": "mild curry powder",
      "nameZh": "微辣咖喱粉",
      "pinyin": "gā lí fěn",
      "amountMetric": "12 g",
      "amountUS": "2 tbsp",
      "category": "spice",
      "pantry": "local",
      "note": "Standard British-style blend is what Hong Kong kitchens use; use Madras if you want heat",
      "noteZh": "港式厨房用的就是英式混合咖喱粉；要辣可换马德拉斯",
      "termKey": "curry-powder"
    },
    {
      "id": "cfr-04",
      "nameEn": "onion, small dice",
      "nameZh": "洋葱，切小丁",
      "pinyin": "yáng cōng",
      "amountMetric": "100 g",
      "amountUS": "⅔ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "cfr-05",
      "nameEn": "carrot, small dice",
      "nameZh": "胡萝卜，切小丁",
      "pinyin": "hú luó bo",
      "amountMetric": "70 g",
      "amountUS": "⅓ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "cfr-06",
      "nameEn": "frozen green peas",
      "nameZh": "冷冻青豆",
      "pinyin": "qīng dòu",
      "amountMetric": "60 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cfr-07",
      "nameEn": "large egg, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "50 g",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "cfr-08",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cfr-09",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Curry powder needs a little sugar to round off the bitterness",
      "noteZh": "咖喱粉需要一点糖来压住苦底"
    },
    {
      "id": "cfr-10",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Toss the chicken dice with 1 tsp soy sauce and 1 tsp cornstarch. Rest 10 minutes.",
      "textZh": "鸡丁加1茶匙生抽与1茶匙淀粉抓匀，静置10分钟。",
      "zhHint": "鸡丁腌渍",
      "stateNote": {
        "visual": "Chicken looks matte and slightly tacky with no liquid pooling",
        "visualZh": "鸡肉呈哑光微黏，碗底无积液",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "The dice hold their shape when stirred and the marinade clings",
        "signalZh": "搅动时鸡丁保持形状，腌料挂得住"
      }
    },
    {
      "text": "Heat 1 tbsp oil over high. Sear the chicken 2 minutes until golden at the edges, then remove.",
      "textZh": "大火下1汤匙油，鸡丁煎炒2分钟至边缘金黄，盛出。",
      "zhHint": "爆香鸡丁",
      "stateNote": {
        "visual": "Chicken dice are opaque with browned corners; the wok is nearly dry",
        "visualZh": "鸡丁不透明、棱角焦褐；锅底几乎无汁",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "The dice squeak rather than hiss, and no white liquid seeps out",
        "signalZh": "鸡丁在锅里是擦响声而非嘶嘶声，也不渗白色汁水"
      }
    },
    {
      "text": "Lower to medium. Add 1 tbsp oil and the onion, and cook 2 minutes until soft and sweet.",
      "textZh": "转中火，补1汤匙油下洋葱丁，炒2分钟至软甜。",
      "zhHint": "炒软洋葱",
      "stateNote": {
        "visual": "Onion dice have turned translucent and slightly golden at the tips; they look collapsed and glossy",
        "visualZh": "洋葱丁变半透明，尖端微金；塌软油亮",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "The sharp raw-onion smell is gone and the pan smells sweet",
        "signalZh": "洋葱生冲味消失，锅里是甜味"
      }
    },
    {
      "text": "Add the curry powder to the oil and onion and stir constantly for 30–40 seconds. This is the most important step.",
      "textZh": "咖喱粉下入油与洋葱中，不停搅炒30–40秒。这是最关键的一步。",
      "zhHint": "爆香咖喱粉",
      "stateNote": {
        "visual": "The powder darkens from dull yellow to deep gold and the oil turns bright yellow-orange; the mix looks like a loose paste",
        "visualZh": "咖喱粉由暗黄转深金，油色变为鲜亮的黄橙；混合物呈松散酱状",
        "timeRef": "40 seconds",
        "timeRefZh": "40 秒",
        "heat": "medium",
        "signal": "The raw dusty smell turns warm and nutty within seconds — if it smells burnt, pull the pan off the heat immediately",
        "signalZh": "几秒内土腥味转成温润坚果香——一旦出现焦味立刻离火"
      },
      "tip": "Never add curry powder to a wet pan. Blooming it in oil is the difference between fragrant and gritty.",
      "tipZh": "咖喱粉绝不能下进有水的锅。在油里爆开是香与沙的分界。"
    },
    {
      "text": "Raise the heat to high, add carrot and peas, stir 60 seconds, then add the rice and press-and-fold 2–3 minutes.",
      "textZh": "转大火，下胡萝卜丁与青豆炒60秒，再下米饭压散翻炒2–3分钟。",
      "zhHint": "炒饭上色",
      "stateNote": {
        "visual": "Every grain has taken on an even golden-yellow coat; carrot and peas are visible as orange and green specks",
        "visualZh": "每粒米都裹上均匀的金黄外衣；胡萝卜与青豆呈橙绿斑点可见",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "high",
        "signal": "Rice moves freely and crackles; the colour is even with no white patches",
        "signalZh": "米饭推动顺滑并轻微爆响；色泽均匀无白斑"
      }
    },
    {
      "text": "Return the chicken, push the rice aside and pour the beaten egg into the open space. Let it set 15 seconds, then fold everything together with soy sauce and sugar. Off the heat, scatter scallion.",
      "textZh": "倒回鸡丁，把饭拨到一边，蛋液淋在空处静置15秒，再与生抽、白糖一起翻匀。关火撒葱花。",
      "zhHint": "蛋液裹饭收尾",
      "stateNote": {
        "visual": "Golden grains with chicken pieces, shreds of pale egg and bright green scallion; nothing sticks to the wok",
        "visualZh": "金黄米粒间有鸡丁、浅色蛋丝与翠绿葱花；锅底不粘",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "The egg has dried into thin strands coating the rice instead of forming wet clumps",
        "signalZh": "蛋液被炒成细丝裹住米粒，而不是结成湿块"
      }
    }
  ],
  "tips": [
    "Bloom the curry powder in oil for 30–40 seconds before anything wet goes in. Added at the end it tastes raw and dusty.",
    "Use chicken thigh, not breast. Fried rice is dry heat and breast meat has no fat to protect it.",
    "A teaspoon of sugar is not optional — curry powder has a bitter edge that needs balancing."
  ],
  "tipsZh": [
    "咖喱粉先下热油爆30–40秒再下湿料。最后撒进去会有生粉味。",
    "用鸡腿肉不要用鸡胸。炒饭是干热，鸡胸没有脂肪保护会发柴。",
    "一茶匙糖不是可选项——咖喱粉有苦底，需要平衡。"
  ],
  "relatedSlugs": [
    "egg-fried-rice",
    "curry-potatoes"
  ],
  "image": "/images/recipes/cheese-baked-rice.webp"
};
