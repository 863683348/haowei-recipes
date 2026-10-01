import type { Recipe } from "@/lib/types";

/** Salt and Pepper Whole Shrimp (椒盐大虾) (椒盐大虾) — Day batch */
export const salt_pepper_whole_shrimp: Recipe = {
  "id": "jiao-yan-da-xia",
  "slug": "salt-pepper-whole-shrimp",
  "titleEn": "Salt and Pepper Whole Shrimp (椒盐大虾)",
  "titleZh": "椒盐大虾",
  "pinyin": "jiāo yán dà xiā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version shallow-fries in 1 cm of oil and tosses in the pan; restaurant version deep-fries twice at high heat for a shell you can eat whole.",
  "versionNoteZh": "家常版只用1厘米浅油煎炸、锅内翻拌；酒楼版高温复炸两次，壳酥到能整只吃。",
  "tags": [
    "cantonese",
    "shrimp",
    "crispy",
    "party",
    "fried"
  ],
  "dietary": [
    "none"
  ],
  "story": "A dai pai dong classic: whole shrimp fried hard in the shell, then tossed with a spice salt that blooms for one second in hot oil. Eat them with your fingers.",
  "storyZh": "大排档经典：整虾带壳炸透，再与热油里爆一秒的椒盐同翻。用手抓着吃最香。",
  "ingredients": [
    {
      "id": "jydx-01",
      "nameEn": "large head-on shrimp, shell on",
      "nameZh": "大虾（带头带壳）",
      "pinyin": "dà xiā",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp",
      "note": "Trim the rostrum and legs; devein through the shell.",
      "noteZh": "剪去虾枪与虾脚，开背去线。"
    },
    {
      "id": "jydx-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "30 g",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "jydx-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "jydx-04",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（剁末）",
      "pinyin": "suàn",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "jydx-05",
      "nameEn": "red chili, finely diced",
      "nameZh": "红椒（切细粒）",
      "pinyin": "hóng jiāo",
      "amountMetric": "20 g",
      "amountUS": "1 small",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "jydx-06",
      "nameEn": "scallion, finely sliced",
      "nameZh": "葱（切细花）",
      "pinyin": "cōng",
      "amountMetric": "20 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "jydx-07",
      "nameEn": "Sichuan peppercorn, ground",
      "nameZh": "花椒粉",
      "pinyin": "huā jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "jydx-08",
      "nameEn": "fine sea salt",
      "nameZh": "细盐",
      "pinyin": "yán",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "jydx-09",
      "nameEn": "neutral oil for frying",
      "nameZh": "炸油",
      "pinyin": "zhá yóu",
      "amountMetric": "400 ml",
      "amountUS": "1 2/3 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat shrimp completely dry; toss with Shaoxing wine and 2 g salt; rest 10 minutes.",
      "textZh": "大虾彻底吸干，加黄酒与2克盐抓匀，静置10分钟。",
      "zhHint": "腌虾",
      "stateNote": {
        "visual": "Shells look dry and matte, not wet.",
        "visualZh": "虾壳干爽发哑、不湿亮。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No water on the plate.",
        "signalZh": "盘底无水。"
      }
    },
    {
      "text": "Dredge shrimp in cornstarch, shaking off the excess.",
      "textZh": "大虾薄薄裹一层淀粉，抖掉多余。",
      "zhHint": "拍粉",
      "stateNote": {
        "visual": "A fine even dusting; no clumps.",
        "visualZh": "薄粉均匀、无疙瘩。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Shrimp look chalky, not pasty.",
        "signalZh": "呈粉感、不成糊。"
      }
    },
    {
      "text": "Fry in 180 C oil for 90 seconds until shells turn red and crisp; drain.",
      "textZh": "180度油炸90秒至壳红酥，捞出沥油。",
      "zhHint": "初炸",
      "stateNote": {
        "visual": "Shells turn bright orange-red and stiffen.",
        "visualZh": "虾壳转亮橙红、变挺。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "Bubbling quietens noticeably.",
        "signalZh": "油泡明显变小。"
      }
    },
    {
      "text": "Raise oil to 200 C and re-fry 30 seconds for a brittle shell; drain.",
      "textZh": "油升至200度复炸30秒至壳脆，捞出。",
      "zhHint": "复炸",
      "stateNote": {
        "visual": "Shells look lacquered and audibly crisp.",
        "visualZh": "虾壳油亮、碰之沙沙响。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Shrimp float and feel light on the skimmer.",
        "signalZh": "虾浮起、捞勺手感变轻。"
      }
    },
    {
      "text": "In a dry wok, warm 15 ml oil with garlic, chili and scallion over low heat 20 seconds.",
      "textZh": "净锅下15毫升油，小火煸蒜、红椒与葱20秒。",
      "zhHint": "爆料",
      "stateNote": {
        "visual": "Garlic is pale gold, aromatics just soften.",
        "visualZh": "蒜呈浅金、料头刚软。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "low",
        "signal": "Fragrance rises without any browning.",
        "signalZh": "出香不焦。"
      }
    },
    {
      "text": "Return shrimp; sprinkle in the blended salt, peppercorn and remaining salt; toss hard 20 seconds.",
      "textZh": "回虾，撒入椒盐混合料，大火翻20秒。",
      "zhHint": "翻椒盐",
      "stateNote": {
        "visual": "Spice salt clings in a fine speckle; nothing burns.",
        "visualZh": "椒盐细点均匀附着、不焦。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Aroma is sharp, toasty and peppery.",
        "signalZh": "香气冲、带焦麻。"
      }
    }
  ],
  "tips": [
    "Dry shrimp are the difference between crispy and soggy.",
    "Re-frying is not optional if you want an edible shell.",
    "Grind your own peppercorn — pre-ground loses the numbing note in a week."
  ],
  "tipsZh": [
    "虾够干才酥，带水必软。",
    "想连壳吃，复炸不能省。",
    "花椒现磨，预磨粉一周就没麻味了。"
  ],
  "commonMistakes": [
    {
      "mistake": "Frying once only, so the shell softens in minutes.",
      "mistakeZh": "只炸一次，几分钟就回软。",
      "fix": "Always do the 200 C second fry.",
      "fixZh": "务必200度复炸。"
    },
    {
      "mistake": "Tossing the spice salt over high heat until it scorches.",
      "mistakeZh": "大火翻椒盐，糊了发苦。",
      "fix": "Bloom aromatics low, add shrimp, toss off the heat.",
      "fixZh": "小火爆料，回虾后离火翻匀。"
    }
  ],
  "variations": [
    "Use squid rings instead of shrimp.",
    "Add curry leaves for a Singaporean riff.",
    "Serve over lettuce to catch the oil."
  ],
  "variationsZh": [
    "换成鲜鱿圈。",
    "加咖喱叶，变南洋版。",
    "垫生菜叶吸油。"
  ],
  "relatedSlugs": [
    "stir-fried-shrimp",
    "shrimp-with-silky-eggs",
    "cucumber-shrimp",
    "asparagus-shrimp",
    "oil-braised-large-shrimp"
  ],
  "image": "/images/recipes/fragrant-pot-shrimp.webp"
};
