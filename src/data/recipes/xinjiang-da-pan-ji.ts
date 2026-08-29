import type { Recipe } from "@/lib/types";

/** Xinjiang Big Plate Chicken (新疆大盘鸡) — Seed batch */
export const xinjiang_da_pan_ji: Recipe = {
  "id": "xinjiang-da-pan-ji",
  "slug": "xinjiang-da-pan-ji",
  "titleEn": "Xinjiang Big Plate Chicken",
  "titleZh": "新疆大盘鸡",
  "pinyin": "Xīnjiāng dà pán jī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Urumqi, Xinjiang",
  "regionZh": "新疆乌鲁木齐市",
  "difficulty": "medium",
  "timeMin": 75,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses skin-on chicken thighs for richness and cooks potatoes whole to absorb sauce gradually — no pre-boiling. Restaurants often add bell peppers; home cooks skip them unless available fresh.",
  "versionNoteZh": "家常版选用带皮鸡腿肉增香，土豆整块入锅慢吸酱汁——无需预煮。餐馆常加彩椒；家庭若无新鲜彩椒则省略。",
  "tags": [
    "one-pot",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt Amina in Urumqi cooked da pan ji every Friday after mosque, using free-range chickens from her cousin’s farm near Turpan. She always added extra cumin and toasted the dried chilies herself in a wok — ‘the smoke tells you when they’re ready,’ she’d say, waving her hand near the wok’s edge.",
  "storyZh": "我在乌鲁木齐的阿米娜阿姨每周礼拜后必做大盘鸡，鸡肉取自吐鲁番表叔的散养鸡场。她总多放孜然，并亲手在锅中焙干辣椒——‘看烟就知道火候到了’，她边说边用手试锅沿的热气。",
  "ingredients": [
    {
      "id": "dp-01",
      "nameEn": "bone-in chicken thighs",
      "nameZh": "带骨鸡腿肉",
      "pinyin": "dài gǔ jī tuǐ ròu",
      "amountMetric": "800 g",
      "amountUS": "1.8 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Skin-on preferred; cut into 5-cm (2-inch) chunks with bone",
      "noteZh": "带皮更佳；连骨剁成5厘米块"
    },
    {
      "id": "dp-02",
      "nameEn": "russet potatoes",
      "nameZh": "褐皮土豆",
      "pinyin": "hè pí tǔ dòu",
      "amountMetric": "600 g",
      "amountUS": "4 large, unpeeled",
      "category": "produce",
      "pantry": "local",
      "note": "Leave skins on — they hold shape and add earthy depth",
      "noteZh": "保留外皮——防碎且增土香"
    },
    {
      "id": "dp-03",
      "nameEn": "dried chili peppers",
      "nameZh": "干辣椒",
      "pinyin": "gān là jiāo",
      "amountMetric": "15 g",
      "amountUS": "10–12 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "dp-04",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "5 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "dp-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Toast spices: Heat wok over medium heat. Add dried chilies and Sichuan peppercorns. Toast 60–90 seconds, shaking constantly, until fragrant and slightly darkened. Transfer to mortar and coarsely crush.",
      "textZh": "焙香料：空锅中火加热。下干辣椒与花椒，持续晃动焙60–90秒至香气溢出、颜色微深。移入臼中粗捣。",
      "zhHint": "闻香即停，防苦涩",
      "stateNote": {
        "visual": "Chilies turn dull red and puff slightly; peppercorns swell and release white dust",
        "visualZh": "辣椒转暗红、微膨；花椒鼓胀并析出白粉",
        "timeRef": "60–90 seconds",
        "timeRefZh": "60–90秒",
        "heat": "medium",
        "signal": "Aromatic smoke rises — not acrid or burnt",
        "signalZh": "升起清香烟雾，非焦糊味"
      }
    },
    {
      "text": "Brown chicken: Pat chicken dry. Heat 30 ml (2 tbsp) oil in same wok over medium-high heat. Brown chicken in batches until golden on all sides, about 4 minutes per batch. Remove and set aside.",
      "textZh": "煸鸡块：鸡块擦干。同一锅中火高油量（30毫升/2汤匙）烧热。分批下锅，四面煎至金黄，约每批4分钟。盛出备用。",
      "zhHint": "分批防降温，保酥脆",
      "stateNote": {
        "visual": "Chicken develops deep mahogany crust with crisp edges",
        "visualZh": "鸡块呈深棕褐脆边",
        "timeRef": "4 minutes per batch",
        "timeRefZh": "每批4分钟",
        "heat": "medium-high",
        "signal": "Sizzling sound deepens and oil stops spattering violently",
        "signalZh": "滋滋声变沉，油星骤减"
      }
    },
    {
      "text": "Build sauce: Lower heat to medium. Add crushed spice mix, 1 tbsp ginger (minced), and 2 cloves garlic (minced). Stir 1 minute until aromatic. Stir in light soy sauce, 15 ml (1 tbsp) dark soy sauce, and 120 ml (½ cup) Shaoxing wine.",
      "textZh": "炒酱汁：转中火。下碎香料、1汤匙姜末、2瓣蒜末，炒香1分钟。加入生抽、15毫升老抽、120毫升绍兴酒，翻炒匀。",
      "zhHint": "姜蒜爆香是风味基底",
      "stateNote": {
        "visual": "Oil turns amber and coats wok surface with glossy film",
        "visualZh": "油色转琥珀，锅面覆一层亮泽油膜",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "heat": "medium",
        "signal": "Fragrance intensifies and steam rises in visible ribbons",
        "signalZh": "香味骤浓，蒸汽呈丝带状升腾"
      }
    },
    {
      "text": "Braise: Return chicken to wok. Add 500 ml (2¼ cups) hot water, 1 tsp white pepper, and 1 tsp sugar. Bring to simmer, cover, and cook 30 minutes. Add whole unpeeled potatoes. Simmer uncovered 25 more minutes until potatoes are tender and sauce thickens to coat spoon.",
      "textZh": "焖烧：鸡块回锅。加500毫升（2¼杯）热水、1茶匙白胡椒、1茶匙糖。煮沸后转小火，加盖焖30分钟。下整颗土豆，开盖再焖25分钟至土豆软糯、酱汁浓稠挂勺。",
      "zhHint": "土豆后下，防煮烂",
      "stateNote": {
        "visual": "Sauce reduces to glossy, viscous layer clinging to potato skins",
        "visualZh": "酱汁收至油亮浓稠，裹住土豆表皮",
        "timeRef": "25 minutes uncovered",
        "timeRefZh": "开盖焖25分钟",
        "heat": "medium-low",
        "signal": "Wooden spoon leaves clear trail when dragged across bottom",
        "signalZh": "木勺划过锅底，留清晰痕迹"
      }
    },
    {
      "text": "Finish: Taste and adjust with salt only if needed (soy sauces provide saltiness). Garnish with fresh cilantro and scallions. Serve hot in wide shallow bowl — traditionally eaten with hand-torn flatbread.",
      "textZh": "出锅：尝味，仅缺盐时补（酱油已含咸度）。撒香菜、葱花。热盛宽浅碗——传统配手撕馕同食。",
      "zhHint": "少盐多香，突出本味",
      "stateNote": {
        "visual": "Potatoes gleam with sticky, reddish-brown glaze; chicken skin glistens",
        "visualZh": "土豆泛红褐黏亮光泽，鸡皮油润反光",
        "timeRef": "under 1 minute",
        "timeRefZh": "1分钟内",
        "heat": "low",
        "signal": "Steam rises steadily with layered aroma of cumin, chili, and chicken fat",
        "signalZh": "热气升腾，层层散发孜然、辣椒与鸡油复合香"
      }
    }
  ],
  "tips": [
    "Substitute russet potatoes with Yukon Gold if russets unavailable — they hold shape better than red potatoes",
    "No Shaoxing wine? Use dry sherry or Japanese cooking sake — never vinegar-based 'cooking wine'",
    "To mimic Urumqi street stalls, serve with freshly baked naan — brush with garlic butter before toasting"
  ],
  "tipsZh": [
    "若无褐皮土豆，可用尤康黄土豆替代——比红土豆更耐煮",
    "无绍兴酒？可用干雪莉酒或日本料理清酒替代——切勿用醋基‘料酒’",
    "仿乌鲁木齐街头风味，配现烤馕——刷蒜香黄油再烘烤更地道"
  ],
  "relatedSlugs": [
    "lanzhou-lamian"
  ],
  "image": "/images/recipes/xinjiang-da-pan-ji.webp"
};
