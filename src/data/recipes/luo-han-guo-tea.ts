import type { Recipe } from "@/lib/types";

/** Monk Fruit Tea (罗汉果茶) — Day batch */
export const luo_han_guo_tea: Recipe = {
  "id": "luo-han-guo-tea",
  "slug": "luo-han-guo-tea",
  "titleEn": "Monk Fruit Tea",
  "titleZh": "罗汉果茶",
  "pinyin": "luó hàn guǒ chá",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangxi",
  "regionZh": "广西",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version simmers a quarter fruit for twenty minutes and drinks it hot; the bottled commercial drink is diluted, chilled and often cut with sugar and flavouring. Once you have made the real thing, the bottle tastes like sweet water.",
  "versionNoteZh": "家常版用四分之一个果煮二十分钟热饮；瓶装饮料是稀释冷灌、还常加糖与香精。喝过真货之后，瓶子里的就只是甜水。",
  "tags": [
    "herbal-tea",
    "no-sugar",
    "throat-soothing",
    "30-min",
    "beginner"
  ],
  "dietary": [
    "vegan",
    "gluten-free",
    "low-sodium"
  ],
  "story": "Monk fruit comes from the mountains of Guangxi, where it was brewed by Buddhist monks for centuries - hence the name - long before anyone marketed it as a zero-calorie sweetener. My teacher in Guilin cracked the fruit with the back of a cleaver and used the shell as well as the flesh, saying the shell is where the throat-coating sweetness sits. Nothing is added: no sugar, no honey, nothing.",
  "storyZh": "罗汉果出自广西山区，僧人煮饮数百年，因此得名——比它被当成零卡代糖卖要早得多。桂林的师傅用刀背把果敲开，壳和瓤一起下锅，说润喉的那股甜在壳上。什么都不用加：不加糖、不加蜜。",
  "ingredients": [
    {
      "id": "lhgt-01",
      "nameEn": "dried monk fruit",
      "nameZh": "罗汉果",
      "pinyin": "luó hàn guǒ",
      "amountMetric": "5 g",
      "amountUS": "1/4 fruit",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "A quarter is enough for a full litre. Choose one that feels light for its size and rattles slightly - a heavy fruit is damp and tastes musty.",
      "noteZh": "四分之一个就够一升水。挑同样大小里偏轻、摇起来有轻响的；压手的果受潮，煮出来有霉味。",
      "termKey": "luo-han-guo"
    },
    {
      "id": "lhgt-02",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "1 litre",
      "amountUS": "4 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "lhgt-03",
      "nameEn": "aged dried tangerine peel",
      "nameZh": "陈皮",
      "pinyin": "chén pí",
      "amountMetric": "2 g",
      "amountUS": "1 small piece",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds the citrus-oil top note that keeps a litre of sweet tea from tasting flat.",
      "noteZh": "补上柑橘油的「前调」，一升甜茶才不至于发闷。",
      "termKey": "dried-tangerine-peel"
    },
    {
      "id": "lhgt-04",
      "nameEn": "ginger, bruised",
      "nameZh": "生姜（拍裂）",
      "pinyin": "shēng jiāng",
      "amountMetric": "10 g",
      "amountUS": "3 slices, smashed",
      "category": "produce",
      "pantry": "local",
      "note": "Optional. Skip it if you are drinking this for a sore throat and want the pure fruit taste.",
      "noteZh": "可省略。如果是为嗓子不舒服而煮、想尝纯果味，就不放。",
      "termKey": "ginger"
    },
    {
      "id": "lhgt-05",
      "nameEn": "dried red dates",
      "nameZh": "红枣",
      "pinyin": "hóng zǎo",
      "amountMetric": "10 g",
      "amountUS": "2 dates",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rounds out the sweetness with a little body, so the tea does not taste thin.",
      "noteZh": "让甜味有厚度，茶汤不发单薄。",
      "termKey": "jujube"
    },
    {
      "id": "lhgt-06",
      "nameEn": "dried chrysanthemum buds",
      "nameZh": "菊花",
      "pinyin": "jú huā",
      "amountMetric": "1 g",
      "amountUS": "4 buds",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Four buds only, added at the end - this is a garnish for aroma, not a second tea.",
      "noteZh": "只放四朵、最后下——这是添香的配角，别喧宾夺主。",
      "termKey": "chrysanthemum"
    }
  ],
  "steps": [
    {
      "text": "Crack the monk fruit with the back of a cleaver or a heavy mug, then break it into six or eight pieces, shell included.",
      "textZh": "用刀背或厚杯底把罗汉果敲裂，连壳掰成六到八块。",
      "zhHint": "连壳敲碎",
      "stateNote": {
        "visual": "The dark shell splits to show pale, slightly sticky fibres inside",
        "visualZh": "深色硬壳裂开，露出浅色、微黏的纤维",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "You can smell a raisin-like sweetness the moment the shell breaks - that is the mogroside being released",
        "signalZh": "壳一破就闻到近似葡萄干的甜香——那是罗汉果苷释放出来了"
      }
    },
    {
      "text": "Rinse the pieces briefly under cold water to wash off dust trapped in the shell crevices, then shake dry.",
      "textZh": "果块用冷水快速冲一下，洗掉壳缝里的灰尘，然后甩干。",
      "zhHint": "冲洗去尘",
      "stateNote": {
        "visual": "Water runs off pale brown, not black - if it runs black the fruit has been dyed",
        "visualZh": "冲下的水是浅褐色而非黑色——如果是黑的，说明果被染过色",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "low",
        "signal": "The pieces still smell sweet after rinsing; you have not washed the flavour out",
        "signalZh": "冲完仍有甜香——味道没被冲走"
      }
    },
    {
      "text": "Put the fruit and cold water in a pot, bring to a boil uncovered, then drop to a bare simmer for 20 minutes.",
      "textZh": "果块与冷水一起下锅，不加盖煮开，然后转最小火微沸 20 分钟。",
      "zhHint": "冷水下锅煮 20 分钟",
      "stateNote": {
        "visual": "The liquid deepens from pale gold to a clear reddish amber",
        "visualZh": "汤色从浅金逐渐加深为清亮的红琥珀色",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "medium-low",
        "signal": "Taste a spoonful: sweet at the front, with a faint cooling bitterness at the back of the throat. Too sweet means over-reduced",
        "signalZh": "尝一勺：入口甜，喉头有一丝凉苦。过甜说明水收太多了"
      },
      "tip": "Keep the lid off for the first boil so the raw, slightly beany note escapes with the steam.",
      "tipZh": "第一次煮开时不要盖盖，让那股生豆气随蒸汽跑掉。"
    },
    {
      "text": "Add the tangerine peel, smashed ginger and slit dates and simmer another 8 minutes, then switch off and drop in the chrysanthemum buds.",
      "textZh": "加入陈皮、拍裂的姜与划口红枣，再煮 8 分钟，关火后投入菊花。",
      "zhHint": "后下陈皮姜枣",
      "stateNote": {
        "visual": "The dates swell and the liquid takes on a warmer, browner tone; flowers unfurl on the surface",
        "visualZh": "红枣胀起，汤色转暖偏棕；菊花在水面舒展开",
        "timeRef": "8 minutes plus 3 minutes resting",
        "timeRefZh": "8 分钟，再加静置 3 分钟",
        "heat": "low",
        "signal": "The citrus oil from the peel hits your nose before the sweetness does",
        "signalZh": "陈皮的柑橘油香先于甜味冲到鼻子里"
      }
    },
    {
      "text": "Strain through a fine sieve, pressing the solids to get the last of the syrup, and drink hot. The same pieces can be re-simmered once more with half the water.",
      "textZh": "细筛过滤，压一压渣取尽糖分，趁热喝。同一批果渣可再加水（半量）复煮一次。",
      "zhHint": "滤渣趁热喝",
      "stateNote": {
        "visual": "A clear, glassy amber tea with no floating sediment",
        "visualZh": "茶汤清亮如琥珀，没有悬浮渣",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Hold it to the light - it should be translucent. Cloudy means the fruit was crushed too fine",
        "signalZh": "对着光看应该透亮。浑浊说明果敲得太碎"
      }
    }
  ],
  "tips": [
    "Resist adding sugar. Monk fruit is roughly 200 times sweeter than cane sugar by weight and needs none.",
    "Cold-brewed is also excellent: same quarter fruit in a litre of cold water in the fridge overnight, no heat at all.",
    "One fruit yields two or three infusions; the second is milder and better with a slice of ginger."
  ],
  "tipsZh": [
    "别加糖。罗汉果按重量算甜度约是蔗糖的两百倍，完全不用加。",
    "冷泡也很好：同一份四分之一果放一升冷水，冰箱泡一夜，全程不加热。",
    "一个果能煮两三泡；第二泡更淡，加片姜更好喝。"
  ],
  "relatedSlugs": [
    "sour-plum-drink",
    "rock-sugar-pear-soup",
    "chinese-tea-eggs"
  ],
  "image": "/images/recipes/sour-plum-drink.webp"
};
