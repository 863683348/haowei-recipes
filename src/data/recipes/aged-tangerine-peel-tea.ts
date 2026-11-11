import type { Recipe } from "@/lib/types";

/** Aged Tangerine Peel Water (陈皮水) — Day batch */
export const aged_tangerine_peel_tea: Recipe = {
  "id": "aged-tangerine-peel-tea",
  "slug": "aged-tangerine-peel-tea",
  "titleEn": "Aged Tangerine Peel Water",
  "titleZh": "陈皮水",
  "pinyin": "chén pí shuǐ",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version scrapes the white pith off and simmers a fingernail-sized piece for a clear amber drink; the herbal-shop version leaves the pith on and boils it hard, which is more bitter and more medicinal. Scraping is what makes it pleasant enough to drink daily.",
  "versionNoteZh": "家常版会刮掉白瓤，指甲大一片煮出清亮琥珀色；凉茶铺版留瓤猛煮，更苦、更「药」。刮瓤才让它变成可以天天喝的饮，而不是药。",
  "tags": [
    "herbal-tea",
    "25-min",
    "beginner",
    "digestive",
    "cantonese"
  ],
  "dietary": [
    "vegan",
    "gluten-free",
    "low-sodium"
  ],
  "story": "Every Cantonese kitchen has a jar of this in the cupboard, some of it older than the children. Aged peel is treated as a household remedy, not an ingredient: a piece is simmered when someone has eaten too much, feels bloated, or has a phlegmy cough. The ageing is real - three years minimum, and the sharp citrus oil slowly turns into something that smells of old wood and honey.",
  "storyZh": "广东厨房的柜子里都有一罐陈皮，有些比孩子年纪还大。老陈皮是家常药，不是普通食材：谁吃撑了、胀气、或是咳嗽有痰，就煮一片。陈化是真的——至少三年，尖锐的柑橘油慢慢变成老木与蜜的气味。",
  "ingredients": [
    {
      "id": "atpt-01",
      "nameEn": "aged dried tangerine peel",
      "nameZh": "陈皮",
      "pinyin": "chén pí",
      "amountMetric": "3 g",
      "amountUS": "1 piece the size of a coin",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Darker, thinner and more fragrant with age. Three years is the minimum; ten-year peel costs several times more and is worth it once.",
      "noteZh": "越陈越黑、越薄、越香。三年是底线；十年陈皮贵好几倍，值得试一次。",
      "termKey": "dried-tangerine-peel"
    },
    {
      "id": "atpt-02",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "600 ml",
      "amountUS": "2 1/2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "atpt-03",
      "nameEn": "ginger, sliced",
      "nameZh": "生姜片",
      "pinyin": "shēng jiāng",
      "amountMetric": "8 g",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "note": "Balances the peel's bitterness; also the standard pairing when the drink is for bloating.",
      "noteZh": "平衡陈皮的苦；胀气时煮这一杯，配姜也是老规矩。",
      "termKey": "ginger"
    },
    {
      "id": "atpt-04",
      "nameEn": "dried red dates",
      "nameZh": "红枣",
      "pinyin": "hóng zǎo",
      "amountMetric": "10 g",
      "amountUS": "2 dates",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Two dates make the drink round enough to have with breakfast.",
      "noteZh": "两颗枣，喝起来就圆润到可以当早餐饮品。",
      "termKey": "jujube"
    },
    {
      "id": "atpt-05",
      "nameEn": "yellow rock sugar",
      "nameZh": "黄冰糖",
      "pinyin": "huáng bīng táng",
      "amountMetric": "8 g",
      "amountUS": "1 small lump",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Optional, and only a little - this is not meant to be a sweet drink.",
      "noteZh": "可省，且只放一点点——它本来就不是甜饮。",
      "termKey": "rock-sugar-raw"
    },
    {
      "id": "atpt-06",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "pinyin": "fēng mì",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Use instead of rock sugar if you want the peel's aroma kept intact - honey goes in off the heat.",
      "noteZh": "想让陈皮香气完整保留就用蜂蜜代替冰糖——要关火后再放。",
      "termKey": "honey"
    }
  ],
  "steps": [
    {
      "text": "Soak the peel in warm water for 5 minutes to soften it and rinse off the dust that collects in the dried oil cells.",
      "textZh": "陈皮用温水泡 5 分钟，软化并洗掉积在干油胞里的灰尘。",
      "zhHint": "温水泡软洗尘",
      "stateNote": {
        "visual": "The piece uncurls from a brittle shard into a flexible sheet; the water turns pale amber",
        "visualZh": "从脆硬碎片舒展成柔韧一片，泡水变浅琥珀",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "It bends without cracking - a piece that still snaps has not rehydrated",
        "signalZh": "能弯不断就对了；一弯就断说明还没泡透"
      }
    },
    {
      "text": "Lay the peel flat on a board and scrape the white pith away with a small knife until only the thin, dark outer skin remains.",
      "textZh": "陈皮摊在案板上，用小刀把白色内瓤刮净，只留薄薄的深色外皮。",
      "zhHint": "刮净白瓤",
      "stateNote": {
        "visual": "A soft white layer comes off in sheets, leaving a dark, slightly translucent skin",
        "visualZh": "白色软瓤成片刮下，剩下深色、微透光的薄皮",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "The smell changes from bitter-orange to clean preserved citrus - the bitterness was in the pith",
        "signalZh": "气味从苦橘转为干净的陈柑橘香——苦味原来都在白瓤里"
      },
      "tip": "You will lose about a third of the piece. That is correct; the pith is bitter and adds nothing.",
      "tipZh": "大约会刮掉三分之一。这是对的——白瓤只带来苦，没别的作用。"
    },
    {
      "text": "Put the scraped peel, ginger and slit dates into a pot with the cold water and bring to a boil.",
      "textZh": "刮好的陈皮、姜片与划口红枣加冷水入锅，煮开。",
      "zhHint": "冷水同煮",
      "stateNote": {
        "visual": "The peel floats at first, then sinks as it takes on water",
        "visualZh": "陈皮先浮后沉，吸饱水就落下去了",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "The aroma comes up with the steam - woody, honeyed, faintly bitter at the end",
        "signalZh": "香气随蒸汽上来：木质、蜜香，尾巴带一点苦"
      }
    },
    {
      "text": "Lower the heat and simmer, covered, for 15 minutes. Do not let it boil hard - a rolling boil emulsifies the oils and turns the drink cloudy.",
      "textZh": "转小火盖盖煮 15 分钟。不要大滚——猛滚会把油乳化，汤就浑了。",
      "zhHint": "小火 15 分钟",
      "stateNote": {
        "visual": "A clear, pale amber liquid with the peel still in one piece",
        "visualZh": "汤色清亮浅琥珀，陈皮仍为完整一片",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "Taste it: bitter first, then sweet, then a long citrus finish. If it is only bitter, you scraped too little pith",
        "signalZh": "先苦、后甜、尾韵悠长的柑橘——若只剩苦，说明白瓤没刮够"
      }
    },
    {
      "text": "Add the rock sugar if using and stir for 30 seconds, or switch off first and stir in honey instead. Strain and drink warm.",
      "textZh": "要用冰糖就此时加入搅 30 秒；改用蜂蜜则先关火再拌。滤渣趁温喝。",
      "zhHint": "后调糖再滤",
      "stateNote": {
        "visual": "Clear pale amber tea; the peel left in the sieve has gone soft and pale",
        "visualZh": "清亮浅琥珀茶汤，滤网里的陈皮已软而色淡",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "The sweetness is barely there - it should read as a savoury-ish tea, not a dessert",
        "signalZh": "甜味只是若隐若现——它喝起来该像一杯偏咸鲜的茶，不是甜汤"
      }
    }
  ],
  "tips": [
    "One piece can be re-simmered three times; each round is milder and rounder.",
    "Use it after a heavy meal. That is the traditional use, and a small cup genuinely does settle the stomach.",
    "Store peel in a sealed jar away from light; it keeps improving for years and absorbs fridge smells if left open."
  ],
  "tipsZh": [
    "一片可以复煮三次，每一轮都更温和圆润。",
    "吃完油腻大餐后喝。这是它的传统用法，一小杯确实能顺胃。",
    "陈皮要密封避光保存；它会越放越好，但敞口放会吸走冰箱杂味。"
  ],
  "relatedSlugs": [
    "luo-han-guo-tea",
    "ginger-brown-sugar-tea",
    "sugarcane-water-chestnut-drink"
  ],
  "image": "/images/recipes/jidi-congee.webp"
};
