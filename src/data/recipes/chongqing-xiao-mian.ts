import type { Recipe } from "@/lib/types";

/** Chongqing Xiao Mian (Small Noodles) (重庆小面) — Seed batch */
export const chongqing_xiao_mian: Recipe = {
  "id": "chongqing-xiao-mian",
  "slug": "chongqing-xiao-mian",
  "titleEn": "Chongqing Xiao Mian (Small Noodles)",
  "titleZh": "重庆小面",
  "pinyin": "Chóngqìng xiǎo miàn",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Authentic Chongqing Xiao Mian uses no stock—just a master seasoning blend ('mian jiang') poured over boiled noodles. This version replicates the street-side balance: numbing, spicy, savory, garlicky, with a whisper of sweetness.",
  "versionNoteZh": "地道重庆小面不用高汤，只靠‘面酱’调味。本方还原街边灵魂：麻、辣、咸、鲜、香、微甜六味平衡。",
  "tags": [
    "30-min",
    "spicy",
    "umami"
  ],
  "dietary": [
    "none"
  ],
  "story": "My cousin Wei worked at a 24-hour Xiao Mian stall in Jiefangbei, Chongqing. At 3 a.m., he’d wake his daughter to help pound garlic and ginger into paste while he toasted dried chilies—‘The sauce must breathe before dawn,’ he’d say.",
  "storyZh": "表哥伟在重庆解放碑经营24小时小面摊。凌晨3点，他叫醒女儿一起舂姜蒜泥，自己焙干辣椒——‘酱要赶在天亮前喘口气’，他总这么说。",
  "ingredients": [
    {
      "id": "cx-01",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng làjiāo",
      "amountMetric": "15 g",
      "amountUS": "1/4 cup (broken)",
      "category": "spice",
      "pantry": "asian",
      "note": "Substitute ancho or guajillo chilies for mild heat + fruitiness",
      "noteZh": "可用安乔或瓜希略干椒替代（辣度低、果香足）"
    },
    {
      "id": "cx-02",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dàsuàn",
      "amountMetric": "30 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cx-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēngjiāng",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cx-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēngchōu",
      "amountMetric": "20 ml",
      "amountUS": "1⅓ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cx-05",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "cx-06",
      "nameEn": "fresh wheat noodles",
      "nameZh": "鲜切面",
      "pinyin": "xiān qiē miàn",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "staple",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Toast dried chilies in dry wok over medium heat until fragrant and slightly puffed (2–3 min). Cool, then break into pieces and grind coarsely in spice grinder or mortar.",
      "textZh": "干锅中火焙干辣椒至香膨（2–3分钟）；晾凉后掰碎，粗磨成粒。",
      "zhHint": "焙香→晾凉→掰碎→粗磨",
      "stateNote": {
        "visual": "Chilies deepen to brick red and emit smoky aroma",
        "visualZh": "辣椒转砖红，散发烟熏香",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium",
        "signal": "Skin blisters and separates easily from flesh",
        "signalZh": "表皮起泡，易与椒肉分离"
      }
    },
    {
      "text": "Pound garlic and ginger together into smooth paste using mortar and pestle (or mince finely and mash with side of knife). Mix with ground chilies, light soy sauce, Chinese black vinegar, 1 tsp sugar, and 1 tsp Sichuan peppercorn powder.",
      "textZh": "蒜姜共舂成细腻蓉；混入辣椒粉、生抽、陈醋、糖、花椒粉调成面酱。",
      "zhHint": "蒜姜舂蓉→合酱调匀",
      "stateNote": {
        "visual": "Paste is cohesive and glossy, no visible grain",
        "visualZh": "蓉泥细腻油润，不见颗粒",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aroma sharpens and sweetens simultaneously",
        "signalZh": "辛香与甘香同时跃升"
      }
    },
    {
      "text": "Bring large pot of water to rolling boil. Add 1 tsp salt. Cook noodles until just tender (3 min for fresh). Reserve 60 ml cooking water, then drain noodles—do not rinse.",
      "textZh": "宽水滚盐煮面至断生（鲜面3分钟）；捞面前舀60ml面汤，面条沥干勿冲。",
      "zhHint": "宽水·滚盐·断生·留汤·沥干",
      "stateNote": {
        "visual": "Water boils violently with continuous large bubbles",
        "visualZh": "水大沸，气泡连绵不断",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Noodles float freely and bend without snapping",
        "signalZh": "面条浮起，弯折不断"
      }
    },
    {
      "text": "In each bowl, place 2 tbsp seasoning paste. Add 30 ml reserved hot cooking water and stir into slurry. Add hot noodles and toss vigorously with chopsticks for 40 seconds until fully coated and glossy.",
      "textZh": "每碗放2大勺面酱，加30ml热面汤搅成浆；下热面快拌40秒至油亮裹匀。",
      "zhHint": "酱+汤→搅浆→下面→快拌",
      "stateNote": {
        "visual": "Sauce emulsifies into creamy, opaque sheen",
        "visualZh": "酱汁乳化，呈奶油状油光",
        "timeRef": "40 seconds",
        "timeRefZh": "40 秒",
        "heat": "medium",
        "signal": "Noodles separate cleanly and cling to chopsticks",
        "signalZh": "面条根根分明，能挂筷不落"
      }
    },
    {
      "text": "Top with scallion greens, a pinch of toasted sesame seeds, and optional pickled mustard greens. Serve immediately—Xiao Mian waits for no one.",
      "textZh": "撒葱花、熟芝麻，可选加榨菜丁；即刻上桌——小面不等人。",
      "zhHint": "撒绿·点香·即食",
      "stateNote": {
        "visual": "Scallions stay vibrant green against glossy noodles",
        "visualZh": "葱花翠绿，映衬油亮面条",
        "timeRef": "within 10 seconds of tossing",
        "timeRefZh": "拌好后10秒内",
        "signal": "First bite releases immediate numbing tingle on lips",
        "signalZh": "入口即感唇舌微微酥麻"
      }
    }
  ],
  "tips": [
    "Reserve starchy noodle water—it’s the binder that makes the sauce cling.",
    "Grind chilies *after* toasting: heat unlocks volatile oils for maximum aroma.",
    "For true Chongqing heat, add 1/2 tsp chili oil sediment to the paste."
  ],
  "tipsZh": [
    "务必留面汤——淀粉水是酱汁裹面的关键粘合剂。",
    "辣椒务必焙香后再磨：高温激发挥发油，香气翻倍。",
    "追求地道辣度？可在酱中加半茶匙红油渣。"
  ],
  "relatedSlugs": [
    "dan-dan-noodles-chengdu",
    "yibin-ran-mian"
  ],
  "image": "/images/recipes/chongqing-xiao-mian.webp"
};
