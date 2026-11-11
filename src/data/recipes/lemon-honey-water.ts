import type { Recipe } from "@/lib/types";

/** Lemon Honey Water (柠檬蜂蜜水) — Day batch */
export const lemon_honey_water: Recipe = {
  "id": "lemon-honey-water",
  "slug": "lemon-honey-water",
  "titleEn": "Lemon Honey Water",
  "titleZh": "柠檬蜂蜜水",
  "pinyin": "níng méng fēng mì shuǐ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 10,
  "servings": 2,
  "version": "family",
  "versionNote": "The home version muddles the peel to get the oil out and uses water at drinking temperature; the cafe version pours boiling water over a slice and adds syrup, which kills the aroma and tastes of nothing but sugar.",
  "versionNoteZh": "家常版把柠檬皮压出油、水温控制在能入口的温度；咖啡馆版是滚水冲一片柠檬再加糖浆——香气全毁，只剩甜。",
  "tags": [
    "drink",
    "10-min",
    "beginner",
    "summer",
    "no-cook"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free",
    "low-sodium"
  ],
  "story": "Chinese homes keep a jar of this in the fridge all summer: lemon slices packed in honey, spooned out into cold water. The two rules my mother enforced were to scrub the wax off the peel with salt and never to use hot water - she said hot water turns lemon peel bitter and honey into plain sugar.",
  "storyZh": "整个夏天，中国家庭的冰箱里都会有一罐这个：柠檬片泡在蜂蜜里，舀出来兑冷水。母亲的两条铁律是——用盐把皮上的蜡搓掉，绝不用热水。她说热水会把柠檬皮煮苦，也把蜂蜜变成单纯的糖。",
  "ingredients": [
    {
      "id": "lhw-01",
      "nameEn": "lemon",
      "nameZh": "柠檬",
      "pinyin": "níng méng",
      "amountMetric": "1",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "note": "Thin-skinned lemons give less bitter pith. Roll it on the counter under your palm first to soften the flesh.",
      "noteZh": "皮薄的柠檬白瓤少、苦味轻。先用掌心在台面上滚压几下把果肉压松。",
      "termKey": "lemon"
    },
    {
      "id": "lhw-02",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "pinyin": "fēng mì",
      "amountMetric": "40 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Runny honey dissolves cold; set honey needs warming first. Strong wildflower honey holds up better against lemon than neutral clover honey.",
      "noteZh": "流动性好的蜂蜜冷水也能化；结晶蜜要先温热。味道重的百花蜜比清淡的苜蓿蜜更扛得住柠檬。",
      "termKey": "honey"
    },
    {
      "id": "lhw-03",
      "nameEn": "water at about 60°C",
      "nameZh": "约 60°C 温水",
      "pinyin": "wēn shuǐ",
      "amountMetric": "400 ml",
      "amountUS": "1 3/4 cups",
      "category": "other",
      "pantry": "local",
      "note": "Hot enough to melt honey, cool enough that you can hold your finger in it for three seconds.",
      "noteZh": "热到能化蜜，凉到手指能插进去数三下。"
    },
    {
      "id": "lhw-04",
      "nameEn": "fine salt, for scrubbing",
      "nameZh": "细盐（洗皮用）",
      "pinyin": "xì yán",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Not for flavour - it takes the wax coating off the peel so the oil can come out.",
      "noteZh": "不是用来调味的——是把皮上的果蜡搓掉，好让皮油出来。"
    },
    {
      "id": "lhw-05",
      "nameEn": "fresh mint leaves",
      "nameZh": "新鲜薄荷叶",
      "pinyin": "bó hé yè",
      "amountMetric": "6 leaves",
      "amountUS": "6 leaves",
      "category": "produce",
      "pantry": "local",
      "note": "Optional, but mint and lemon peel share the same cooling top note.",
      "noteZh": "可省，但薄荷与柠檬皮共享同一层清凉前调。"
    },
    {
      "id": "lhw-06",
      "nameEn": "ginger, one thin slice",
      "nameZh": "生姜（一片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "3 g",
      "amountUS": "1 thin slice",
      "category": "produce",
      "pantry": "local",
      "note": "A single slice rounds off the acidity, especially if you drink this first thing in the morning.",
      "noteZh": "一片就能圆掉那股尖酸，尤其是早上空腹喝的时候。",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Scrub the lemon with the salt under running water for 30 seconds, pressing firmly, then rinse.",
      "textZh": "柠檬用盐在流水下搓洗 30 秒，稍用力，然后冲净。",
      "zhHint": "盐搓去蜡",
      "stateNote": {
        "visual": "The peel goes from shiny to matte and slightly dull; the salt turns faintly grey",
        "visualZh": "果皮从反光变得哑光、略暗；盐粒微微发灰",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "Water no longer beads on the skin - the wax is gone and the oil is reachable",
        "signalZh": "水在皮上不再成珠——蜡掉了，皮油才出得来"
      }
    },
    {
      "text": "Cut the lemon into 2 mm slices, discard the two end pieces, and pick out any seeds.",
      "textZh": "柠檬切 2 毫米薄片，丢掉两头，挑掉籽。",
      "zhHint": "切薄片去籽",
      "stateNote": {
        "visual": "Almost transparent slices with the pale rind ring clearly visible",
        "visualZh": "薄得近乎透明的圆片，浅色外皮一圈清晰可见",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "A slice bends without breaking - thinner than this and it disintegrates when muddled",
        "signalZh": "能弯而不断就是对的；再薄一压就烂"
      },
      "tip": "Seeds are the main source of bitterness in the finished drink.",
      "tipZh": "籽是成品发苦的主要来源。"
    },
    {
      "text": "Put three or four slices in a jug and press them with the back of a spoon for 20 seconds to bruise the peel and release the oil.",
      "textZh": "取三四片放入壶中，用勺背压 20 秒，把皮压破、逼出皮油。",
      "zhHint": "勺背压出皮油",
      "stateNote": {
        "visual": "The flesh breaks down into pulp and a fine mist of oil beads on the surface",
        "visualZh": "果肉压散成绒，表面浮起一层细密油珠",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "low",
        "signal": "A bright citrus smell jumps out at you - that is the peel oil, and it is the whole difference between this and lemonade",
        "signalZh": "一股鲜亮的柑橘香冲上来——那是皮油，也是它与「柠檬水」的全部区别"
      }
    },
    {
      "text": "Pour in the 60°C water, add the ginger slice and mint, and stir for a few seconds.",
      "textZh": "倒入 60°C 温水，放姜片与薄荷，搅几秒。",
      "zhHint": "60°C 温水冲",
      "stateNote": {
        "visual": "Mint leaves sink then float back up; the water stays pale, not cloudy",
        "visualZh": "薄荷先沉后浮，水色清浅不浑",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-low",
        "signal": "Put a finger in: it should feel comfortably hot, never scalding. Above 70°C the peel turns bitter",
        "signalZh": "手指试温：温热舒服、绝不烫。超过 70°C 皮就发苦"
      }
    },
    {
      "text": "Stir the honey in until fully dissolved, then steep 5 minutes and serve. For a cold version, chill it and add ice at the last moment.",
      "textZh": "拌入蜂蜜至完全化开，浸 5 分钟后即可。要冰饮就冷藏，喝前再放冰块。",
      "zhHint": "后加蜜浸 5 分钟",
      "stateNote": {
        "visual": "Honey sinks as a golden thread and dissolves into a faintly hazy, pale gold drink",
        "visualZh": "蜂蜜沉成一道金线化开，整体呈微浑的浅金色",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Taste: sour first, sweet after, with the citrus oil lingering in your nose",
        "signalZh": "先酸后甜，柑橘皮油留在鼻腔里不散"
      }
    }
  ],
  "tips": [
    "Never use boiling water. It destroys the honey aromatics and pulls bitterness out of the pith.",
    "Make a jar of it: layer slices with honey in a clean jar, refrigerate, and it keeps two weeks.",
    "If it tastes bitter, the culprit is usually the seeds or too-thick slices of pith, not the lemon itself."
  ],
  "tipsZh": [
    "绝不用滚水。会毁掉蜂蜜香气，还会把白瓤的苦煮出来。",
    "可以一次做一罐：柠檬片与蜂蜜层叠装进干净玻璃罐冷藏，能存两周。",
    "若发苦，多半是籽没挑干净或白瓤切太厚，不是柠檬的问题。"
  ],
  "relatedSlugs": [
    "chrysanthemum-tea",
    "sugarcane-water-chestnut-drink",
    "sour-plum-drink"
  ],
  "image": "/images/recipes/mango-pomelo-yang-zhi-gan-lu.webp"
};
