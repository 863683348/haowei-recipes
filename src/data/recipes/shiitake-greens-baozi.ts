import type { Recipe } from "@/lib/types";

/** Shiitake and Green Baozi (Vegetable Buns) (香菇青菜包) — Day batch */
export const shiitake_greens_baozi: Recipe = {
  "id": "shiitake-greens-baozi",
  "slug": "shiitake-greens-baozi",
  "titleEn": "Shiitake and Green Baozi (Vegetable Buns)",
  "titleZh": "香菇青菜包",
  "pinyin": "xiāng gū qīng cài bāo",
  "cuisine": "淮扬点心",
  "cuisineEn": "Jiangnan Dim Sum",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "medium",
  "timeMin": 170,
  "servings": 12,
  "version": "family",
  "versionNote": "Home versions use fresh shiitake when dried are unavailable and add crumbled tofu for body. Jiangnan teahouse versions insist on dried shiitake plus a splash of the soaking liquid, and blanch the greens harder so the filling stays almost dry.",
  "versionNoteZh": "家常版没有干香菇时可用鲜香菇，并加豆腐碎增体积；江南茶楼坚持用干香菇加一点泡发水，青菜也焯得更透，让馅料几乎不带水。",
  "tags": [
    "baozi",
    "vegetarian",
    "umami",
    "make-ahead"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "This is the bun Shanghai families order at a teahouse and then try to reverse-engineer at home. The two things that make it are dried shiitake rather than fresh — the dried ones carry a concentrated savoury punch — and squeezing the greens until your hands ache. Wet greens make a sodden, weeping filling.",
  "storyZh": "这是上海人家在茶楼点完回家试图复刻的包子。成败只在两点：用干香菇而不是鲜香菇（干的鲜味浓得多），以及把青菜攥到手发酸。青菜带水，馅就会又湿又渗汤。",
  "ingredients": [
    {
      "id": "sg-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "sg-02",
      "nameEn": "warm water (35°C)",
      "nameZh": "温水（35°C）",
      "amountMetric": "265 ml",
      "amountUS": "1 cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "sg-03",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "sg-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sg-05",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "amountMetric": "40 g",
      "amountUS": "8 caps",
      "category": "produce",
      "pantry": "asian",
      "termKey": "dried-shiitake",
      "note": "Dried give far more savoury depth than fresh; fresh needs 3× the weight",
      "noteZh": "干香菇鲜味远胜鲜香菇；用新鲜的要放三倍量"
    },
    {
      "id": "sg-06",
      "nameEn": "baby bok choy",
      "nameZh": "上海青／小白菜",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "sg-07",
      "nameEn": "firm tofu, small dice",
      "nameZh": "老豆腐（切小丁）",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "sg-08",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "20 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "sg-09",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sg-10",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sg-11",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Mix flour, sugar and yeast in the warm water, knead 12 minutes until smooth, then rise 70 minutes.",
      "textZh": "面粉、糖与溶于温水的酵母混匀，揉12分钟至光滑，发酵70分钟。",
      "zhHint": "和面一发",
      "stateNote": {
        "visual": "Dough is smooth and ivory, springs back slowly and cleans the bowl",
        "visualZh": "面团光滑呈象牙白，缓慢回弹并能刮净碗壁",
        "timeRef": "70 minutes",
        "timeRefZh": "70 分钟",
        "signal": "A floured finger dent holds for 3 seconds",
        "signalZh": "沾粉手指按出的凹坑静止3秒"
      }
    },
    {
      "text": "Soak the dried shiitake in 300 ml warm water 30 minutes until fully soft, then dice finely. Keep 3 tbsp of the soaking liquid.",
      "textZh": "干香菇加300毫升温水泡30分钟至完全泡软，切细丁，留3汤匙泡发水。",
      "zhHint": "泡发香菇",
      "stateNote": {
        "visual": "Caps are pliable with no hard core at the stem join, and the soaking water is a clear amber",
        "visualZh": "菇伞柔软、柄根处无硬芯，泡发水呈清澈琥珀色",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "A cap squeezed between finger and thumb compresses fully and springs back",
        "signalZh": "拇指食指捏压菇伞能完全压扁并回弹"
      }
    },
    {
      "text": "Blanch the bok choy in boiling salted water 45 seconds, shock in iced water, then squeeze out as much water as possible and chop roughly.",
      "textZh": "上海青入沸盐水焯45秒，过冰水后尽量攥干，粗剁几刀。",
      "zhHint": "焯菜攥干",
      "stateNote": {
        "visual": "Leaves are a bright jade and the squeezed mass is compact, with no water running out",
        "visualZh": "叶片鲜亮翠绿，攥紧后成紧实一团，不再滴水",
        "timeRef": "45 seconds blanch + 2 minutes chill",
        "timeRefZh": "焯45秒 + 冰镇2分钟",
        "signal": "Squeezed in a fist, not a single drop escapes between your fingers",
        "signalZh": "攥拳时指缝间一滴水都不漏"
      },
      "tip": "Squeeze harder than you think is reasonable. Water here is what makes the filling weep.",
      "tipZh": "攥到「不合理」的干。这里的水分就是馅料渗汤的根源。"
    },
    {
      "text": "Pan-fry the tofu dice in a dry non-stick pan over medium-high 5 minutes until golden on at least two sides.",
      "textZh": "不粘锅不放油，中大火煎豆腐丁5分钟至至少两面金黄。",
      "zhHint": "煎豆腐",
      "stateNote": {
        "visual": "Cubes have a dry golden crust and have shrunk slightly; they no longer stick to the pan",
        "visualZh": "豆腐丁表面结出干爽金壳、略微收缩，不再粘锅",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "They rattle in the pan when shaken instead of dragging",
        "signalZh": "晃动锅时豆腐丁哗啦作响而不是拖住"
      }
    },
    {
      "text": "Add the diced shiitake to the tofu and fry 3 minutes, then pour in the reserved soaking liquid and cook until it evaporates. Off the heat, fold in the greens, soy sauce, white pepper, salt and sesame oil, and cool completely.",
      "textZh": "香菇丁下锅与豆腐同炒3分钟，倒入预留泡发水炒干。关火后拌入青菜、生抽、白胡椒、盐与香油，彻底放凉。",
      "zhHint": "合炒调味",
      "stateNote": {
        "visual": "Filling is matte rather than wet, holds together when pressed, and smells strongly of shiitake",
        "visualZh": "馅料呈哑光不湿，按压能成团，香菇香气浓郁",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "No liquid pools at the bottom of the bowl when you tilt it",
        "signalZh": "碗倾斜时底部不积汁水"
      }
    },
    {
      "text": "Divide the dough into 12, wrap 2 tbsp filling each, pleat closed, proof 25 minutes, then steam over vigorously boiling water 14 minutes and rest 5 minutes.",
      "textZh": "面团分12份，每份包2汤匙馅并捏褶收口，醒发25分钟后沸水大火蒸14分钟，焖5分钟。",
      "zhHint": "包制与蒸制",
      "stateNote": {
        "visual": "Buns are plump and pale with closed pleats, and the green filling glows faintly through the thin skin",
        "visualZh": "包子饱满色浅、褶口闭合，隐约透出馅里的绿色",
        "timeRef": "25 minutes proof + 14 minutes steam + 5 minutes rest",
        "timeRefZh": "醒25分钟 + 蒸14分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts out on opening and the base peels cleanly off the parchment",
        "signalZh": "开盖蒸汽喷涌，底部能干净撕离纸"
      }
    }
  ],
  "tips": [
    "Dried shiitake, not fresh. The soaking liquid is free umami — save three spoonfuls.",
    "Squeeze the greens until your hands hurt, then squeeze again.",
    "Sesame oil goes in off the heat, at the very end, or its aroma steams away."
  ],
  "tipsZh": [
    "一定要用干香菇不用鲜香菇。泡发水就是免费的鲜味，留三勺。",
    "青菜攥到手酸，然后再攥一次。",
    "香油必须关火后最后放，否则香气全被蒸没了。"
  ],
  "relatedSlugs": [
    "three-umami-baozi",
    "fresh-pork-baozi",
    "braised-pork-baozi"
  ],
  "image": "/images/recipes/three-umami-baozi.webp"
};
