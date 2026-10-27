import type { Recipe } from "@/lib/types";

/** Hand-Torn Cabbage (Shou Si Bao Cai) (手撕包菜) — Day batch */
export const hand_torn_cabbage: Recipe = {
  "id": "shou-si-bao-cai",
  "slug": "hand-torn-cabbage",
  "titleEn": "Hand-Torn Cabbage (Shou Si Bao Cai)",
  "titleZh": "手撕包菜",
  "pinyin": "shǒu sī bāo cài",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan",
  "regionZh": "湖南",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 3,
  "version": "family",
  "versionNote": "The family version tears the cabbage by hand instead of cutting it, so the ragged edges catch sauce and stay crunchy, and it uses a modest amount of oil in a home wok. Restaurant versions often deep-fry the cabbage briefly for extra smokiness and use a much hotter wok.",
  "versionNoteZh": "家庭版用手撕而不是刀切，断面粗糙更容易挂汁且保持脆感，家用铁锅只放少量油。餐馆版常把包菜先过油，用猛火灶逼出更强的锅气。",
  "tags": [
    "15-min",
    "weeknight",
    "vegetable",
    "stir-fry"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My Hunanese neighbour tore cabbage by hand and told me a knife makes the leaf weep and go soft. She cooked it in a wok so hot the chillies crackled before the cabbage even hit the metal, and the whole stairwell smelled of garlic and vinegar.",
  "storyZh": "我湖南的邻居坚持手撕包菜，她说刀切会让菜叶「流泪」变软。她把铁锅烧到极热，干辣椒还没下菜就先噼啪作响，整条楼梯间都弥漫着蒜香和醋香。",
  "ingredients": [
    {
      "id": "hb-01",
      "nameEn": "green cabbage",
      "nameZh": "包菜（圆白菜）",
      "amountMetric": "500 g",
      "amountUS": "1 small head",
      "category": "produce",
      "pantry": "local",
      "note": "Choose a firm, heavy head with loosely packed leaves; tear into 4 cm pieces and discard the hard core."
    },
    {
      "id": "hb-02",
      "nameEn": "dried red chillies",
      "nameZh": "干辣椒",
      "amountMetric": "6 g",
      "amountUS": "5-6 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies",
      "note": "Snip in half and shake out the seeds for moderate heat. Sub: 1/2 tsp chilli flakes."
    },
    {
      "id": "hb-03",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "20 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "hb-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hb-05",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar",
      "note": "Added at the very end off the heat so the aroma stays sharp."
    },
    {
      "id": "hb-06",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "hb-07",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "amountMetric": "15 g",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "hb-08",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "hb-09",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Tear the cabbage into roughly 4 cm pieces by hand, discarding the thick core. Rinse and shake very dry in a salad spinner.",
      "textZh": "用手把包菜撕成约4厘米的小块，去掉硬芯。冲洗后用蔬菜脱水器甩干水分。",
      "zhHint": "手撕4厘米块，务必甩干",
      "stateNote": {
        "visual": "Ragged-edged pieces, surface completely dry with no water beads",
        "visualZh": "断面粗糙的菜块，表面完全干燥无水滴",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "Leaves feel papery-dry to the touch, not damp or slippery"
      },
      "tip": "Any water left on the leaves will steam the cabbage instead of searing it."
    },
    {
      "text": "Heat the wok over high heat until a drop of water skitters across the surface. Add neutral oil and swirl to coat.",
      "textZh": "大火烧热铁锅，至滴入水珠能在锅面滚动。倒入食用油润锅。",
      "zhHint": "锅要烧到水珠打滚",
      "stateNote": {
        "visual": "Faint wisps of smoke rise and the oil shimmers with a moving ripple",
        "visualZh": "锅面微起青烟，油面泛起流动的波纹",
        "timeRef": "1-2 minutes",
        "timeRefZh": "1-2 分钟",
        "heat": "high",
        "signal": "Oil surface ripples rather than sitting still"
      }
    },
    {
      "text": "Add dried chillies and sliced garlic. Stir for 20 seconds until fragrant, being careful not to burn the garlic.",
      "textZh": "下干辣椒和蒜片，翻炒20秒至出香，注意不要把蒜炒糊。",
      "zhHint": "小火爆香20秒",
      "stateNote": {
        "visual": "Garlic edges turn pale gold; chillies darken to deep red and release a toasty aroma",
        "visualZh": "蒜片边缘微泛金黄，辣椒转为深红并散出焦香",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "medium-high",
        "signal": "Pungent garlic smell rises sharply; garlic must not brown past pale gold"
      },
      "tip": "If the garlic browns too fast, lift the wok off the heat for a few seconds."
    },
    {
      "text": "Add all the cabbage at once. Press and toss continuously over high heat for 2 minutes so every piece touches the hot metal.",
      "textZh": "一次性倒入全部包菜，大火不断按压翻炒2分钟，让每片菜都接触到热锅壁。",
      "zhHint": "大火快炒2分钟",
      "stateNote": {
        "visual": "Leaves wilt at the edges but the stems stay translucent-white and rigid",
        "visualZh": "菜叶边缘变软，菜梗仍呈半透明白且挺立",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Volume shrinks by about one third and you hear a dry rustle, not a wet sizzle"
      }
    },
    {
      "text": "Sprinkle in salt, drizzle light soy sauce around the wok wall, and toss for 30 seconds to coat evenly.",
      "textZh": "撒盐，沿锅边淋入生抽，翻炒30秒使菜块均匀上色。",
      "zhHint": "沿锅边淋生抽",
      "stateNote": {
        "visual": "Cabbage takes on an even light-brown glaze with darker caramelised edges",
        "visualZh": "包菜覆上均匀的浅褐色酱汁，边缘略深",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Liquid hitting the wok wall sizzles and almost instantly evaporates"
      }
    },
    {
      "text": "Turn off the heat. Add rice vinegar and sesame oil, toss twice, scatter scallion and serve immediately.",
      "textZh": "关火，加入米醋和香油翻拌两下，撒葱花立即出锅。",
      "zhHint": "关火后再下醋和香油",
      "stateNote": {
        "visual": "Glossy, bright cabbage with a sharp vinegar aroma and green scallion flecks",
        "visualZh": "油亮鲜亮的包菜，醋香扑鼻，点缀翠绿葱花",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "A light acidic tang hits your nose before the soy aroma"
      },
      "tip": "Serve within 5 minutes; the cabbage loses its crunch as it sits."
    }
  ],
  "tips": [
    "Dry the cabbage thoroughly — water is the enemy of wok hei.",
    "Add vinegar off the heat so the aroma does not burn off.",
    "Swap in napa cabbage or romaine for a milder, sweeter version."
  ],
  "tipsZh": [
    "包菜一定要甩干，水分是锅气的大敌。",
    "醋必须关火后再放，否则香气全被烧掉。",
    "换成大白菜或罗马生菜，口感更清甜柔和。"
  ],
  "relatedSlugs": [
    "vinegar-cabbage",
    "dry-fried-long-beans",
    "stir-fried-bok-choy"
  ],
  "image": "/images/recipes/vinegar-cabbage.webp"
};
