import type { Recipe } from "@/lib/types";

/** Preserved Mustard Root Fried Rice (Zhacai Chaofan) (榨菜炒饭) — Day batch */
export const preserved_mustard_root_fried_rice: Recipe = {
  "id": "zha-cai-chao-fan",
  "slug": "preserved-mustard-root-fried-rice",
  "titleEn": "Preserved Mustard Root Fried Rice (Zhacai Chaofan)",
  "titleZh": "榨菜炒饭",
  "pinyin": "zhà cài chǎo fàn",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "The family version uses zha cai straight from the packet as both vegetable and seasoning, so it needs almost no added salt; restaurants add a spoonful of chilli oil and a fried egg on top, which turns it from a plain pot into a full meal.",
  "versionNoteZh": "家庭版直接把榨菜当蔬菜兼调味用，几乎不用再加盐；餐馆会加一勺辣油和一个煎蛋，把一锅朴素炒饭变成正式一餐。",
  "tags": [
    "25-min",
    "fried-rice",
    "sichuan",
    "pantry",
    "budget"
  ],
  "dietary": [
    "none"
  ],
  "story": "Zha cai fried rice is what you eat when the fridge is empty but the cupboard is not. A packet of preserved mustard root keeps for months and carries enough salt and umami to season a whole pan of rice by itself. In Chongqing it is breakfast as often as it is dinner.",
  "storyZh": "榨菜炒饭是冰箱空了、柜子还没空时吃的东西。一包榨菜能放好几个月，自带的咸鲜足够给一整锅饭调味。在重庆，它既是晚饭也常是早饭。",
  "ingredients": [
    {
      "id": "zc-01",
      "nameEn": "cold cooked rice",
      "nameZh": "冷米饭",
      "pinyin": "lěng mǐ fàn",
      "amountMetric": "400 g",
      "amountUS": "2.5 cups cooked",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "zc-02",
      "nameEn": "zha cai (preserved mustard root), rinsed and finely chopped",
      "nameZh": "榨菜（冲洗后切碎）",
      "pinyin": "zhà cài",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse briefly to remove the packing brine, then pat dry. Sub: finely chopped cornichons plus 1/4 tsp salt.",
      "noteZh": "快速冲洗去掉包装盐水，再吸干。替代：切碎的小酸黄瓜加1/4茶匙盐。"
    },
    {
      "id": "zc-03",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "2",
      "amountUS": "2",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "cc-04",
      "nameEn": "pork mince",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "100 g",
      "amountUS": "3.5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince",
      "note": "Optional but traditional. Sub: omit for a vegetarian version.",
      "noteZh": "传统做法会加，也可省略做素版。"
    },
    {
      "id": "zc-05",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（切末）",
      "pinyin": "suàn",
      "amountMetric": "8 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "zc-06",
      "nameEn": "scallion greens, chopped",
      "nameZh": "小葱绿（切碎）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "4 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "zc-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "zc-08",
      "nameEn": "chilli oil",
      "nameZh": "辣油",
      "pinyin": "là yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "zc-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "zc-10",
      "nameEn": "neutral vegetable oil",
      "nameZh": "无味植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse the zha cai under cold water for 15 seconds, drain, and squeeze dry in a clean towel. Chop finely.",
      "textZh": "榨菜用冷水冲15秒，沥干后用干净布挤干水分，切成细末。",
      "zhHint": "榨菜冲洗挤干切细",
      "stateNote": {
        "visual": "Pieces look pale translucent yellow-green and feel firm rather than slimy; no brine drips from the towel",
        "visualZh": "榨菜呈浅黄绿色半透明、手感紧实不发滑；布上不滴盐水",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "A piece pressed between fingers feels rubbery and dry, not wet",
        "signalZh": "两指捏一块榨菜感觉韧而干，不湿"
      },
      "tip": "Rinsing removes the harsh brine, but squeezing dry is what stops the finished rice going soggy.",
      "tipZh": "冲洗能去掉刺鼻的盐水，但挤干才能让成品不发水。"
    },
    {
      "text": "Break up the cold rice with wet hands until every clump is gone and the grains move freely.",
      "textZh": "手上蘸水把冷米饭抓散，直到完全没有结块、米粒能自由散动。",
      "zhHint": "冷饭蘸水抓散",
      "stateNote": {
        "visual": "Grains are matte and separate; shaking the bowl makes them tumble individually",
        "visualZh": "米粒哑光分明；晃动碗时米粒一颗颗滚动",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "No lumps larger than a thumbnail remain",
        "signalZh": "不再有大于指甲盖的结块"
      },
      "tip": "Do this first. Everything else in this dish moves fast once the pan is hot.",
      "tipZh": "这步要先做。锅一热，后面每一步都很快。"
    },
    {
      "text": "Heat 1 tbsp oil over high heat, add the pork mince and break it up, frying 3 minutes until it is browned and the pan is nearly dry.",
      "textZh": "大火加1汤匙油，下猪肉末炒散，炒3分钟至变色微焦、锅中几乎没有水分。",
      "zhHint": "肉末炒散至焦香",
      "stateNote": {
        "visual": "Mince changes from pink to brown and separates into small crisp granules; rendered fat is clear, not cloudy",
        "visualZh": "肉末由粉红转为褐色并散成焦香小粒；析出的油清澈不发浑",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "The sizzle becomes dry and the mince no longer releases steam when stirred",
        "signalZh": "声音变干脆，翻炒时肉末不再冒水汽"
      },
      "tip": "Fry until genuinely dry. Wet mince makes wet rice, and wet rice will never fry properly.",
      "tipZh": "要炒到真正干爽。肉末带水饭就会湿，湿饭永远炒不出香。"
    },
    {
      "text": "Push the mince to one side, add the remaining oil and the beaten eggs to the cleared space, and scramble 40 seconds. Mix everything together with the garlic and zha cai and fry 1 minute.",
      "textZh": "把肉末推到一边，在空处补油和蛋液，炒40秒。再连同蒜末和榨菜一起混合翻炒1分钟。",
      "zhHint": "蛋液炒散后与榨菜同炒",
      "stateNote": {
        "visual": "Egg is set in soft curds; zha cai pieces are glossy and distributed evenly; the pan smells sharply savoury",
        "visualZh": "鸡蛋凝成软块；榨菜粒油亮分布均匀；锅里是浓烈的咸香",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "The zha cai aroma hits you the moment it hits the oil",
        "signalZh": "榨菜一入油香气立刻冲上来"
      },
      "tip": "Fry the zha cai in oil for a full minute — raw zha cai tastes flat and metallic straight from the packet.",
      "tipZh": "榨菜要在油里实炒1分钟——直接从包装里拿出来吃是平板带金属味的。"
    },
    {
      "text": "Add the rice and press and toss continuously for 3 minutes over high heat until the grains are separate and starting to pop.",
      "textZh": "倒入米饭，大火持续按压翻炒3分钟至米粒分明并开始爆响。",
      "zhHint": "大火翻炒3分钟至米粒跳动",
      "stateNote": {
        "visual": "Grains are glossy and separate, moving freely; a few jump when tossed",
        "visualZh": "米粒油亮分明、滑动顺畅；翻炒时有几粒会跳起",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "The sound from the pan is a dry crackle, not a wet hiss",
        "signalZh": "锅中传出的是干脆爆响，而不是带水的滋滋声"
      },
      "tip": "Keep the rice moving but give it a few seconds of still contact between tosses — that is where the toasting happens.",
      "tipZh": "要持续翻动，但每次翻动之间留几秒让米贴锅——焦香就是这几秒出来的。"
    },
    {
      "text": "Add soy sauce around the edge of the pan, toss 30 seconds, then turn off the heat and finish with chilli oil, sesame oil and scallion greens.",
      "textZh": "沿锅边淋入生抽翻拌30秒，关火后用辣油、香油和葱花收尾。",
      "zhHint": "沿锅边淋酱油，关火拌辣油葱花",
      "stateNote": {
        "visual": "Rice is pale brown flecked with red chilli oil and green scallion; grains hold their shape on the plate",
        "visualZh": "米饭呈浅褐色，点缀红辣油与绿葱花；盛盘后米粒保持形状",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "A spoonful lifts cleanly with no wet sauce pooling underneath",
        "signalZh": "盛起一勺干净利落，底下不积汤汁"
      },
      "tip": "Taste before adding any salt — zha cai is already salty and it is very easy to overshoot.",
      "tipZh": "加盐前先尝——榨菜本身很咸，极容易下手过重。"
    }
  ],
  "tips": [
    "Top with a fried egg with a runny yolk; it is the standard Chongqing way to serve this.",
    "Add a handful of frozen peas with the rice for colour and sweetness.",
    "Vegetarian version: drop the pork mince and add diced firm tofu fried until golden."
  ],
  "tipsZh": [
    "顶上盖一个溏心煎蛋，这是重庆吃法的标配。",
    "跟饭一起加一把冷冻青豆，颜色和甜味都更好。",
    "素版：去掉肉末，改用煎至金黄的老豆腐丁。"
  ],
  "relatedSlugs": [
    "pickled-mustard-root-pork-shreds",
    "soy-sauce-fried-rice",
    "zha-cai-pork-noodles"
  ],
  "image": "/images/recipes/pickled-mustard-root-pork-shreds.webp"
};
