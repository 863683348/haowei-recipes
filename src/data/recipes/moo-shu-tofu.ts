import type { Recipe } from "@/lib/types";

/** Moo Shu Tofu (木须豆腐) (木须豆腐) — Day batch */
export const moo_shu_tofu: Recipe = {
  "id": "mu-xu-dou-fu",
  "slug": "moo-shu-tofu",
  "titleEn": "Moo Shu Tofu (木须豆腐)",
  "titleZh": "木须豆腐",
  "pinyin": "mù xū dòu fu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Classic moo shu uses pork and eggs with wood ear and daylily; this home version swaps pork for pressed firm tofu, keeping the same scrambled-egg texture and the same sweet-savory soy profile.",
  "versionNoteZh": "传统木须肉用猪肉配鸡蛋、木耳和黄花菜；家庭版把猪肉换成压实老豆腐，保留同样的炒蛋口感和咸甜酱香。",
  "tags": [
    "vegetarian-friendly",
    "25-min",
    "tofu",
    "northern",
    "beginner"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Moo shu literally means 'wood shavings' — a joke about how the shredded scrambled egg looks like curls of wood. In our house it was the dish that cleaned out the fridge: a handful of wood ear, whatever vegetable was wilting, and eggs to bind it all.",
  "storyZh": "「木须」本意是「木屑」，是形容炒碎的鸡蛋像刨花。在我家这道菜专治冰箱剩菜：一把木耳、蔫掉的蔬菜、再加鸡蛋把所有东西黏合起来。",
  "ingredients": [
    {
      "id": "ing-tofu",
      "nameEn": "firm tofu, pressed and crumbled",
      "nameZh": "老豆腐（压实、捏碎）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Press 20 min under a weight to remove water.",
      "noteZh": "压重 20 分钟去水。",
      "termKey": "tofu"
    },
    {
      "id": "ing-egg",
      "nameEn": "eggs, beaten",
      "nameZh": "鸡蛋（打散）",
      "amountMetric": "3",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ing-woodear",
      "nameEn": "dried wood ear mushrooms, rehydrated and shredded",
      "nameZh": "干木耳（泡发切丝）",
      "amountMetric": "15 g dried",
      "amountUS": "0.5 oz dried",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "wood-ear"
    },
    {
      "id": "ing-carrot",
      "nameEn": "carrot, julienned",
      "nameZh": "胡萝卜（切丝）",
      "amountMetric": "80 g",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "ing-scallion",
      "nameEn": "scallion, sliced",
      "nameZh": "葱（切片）",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ing-lss",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ing-sesame",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "ing-wp",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Press the tofu for 20 minutes, then crumble it by hand into rough 1 cm pieces — not a paste.",
      "textZh": "豆腐压水 20 分钟，用手掰成约 1 厘米的小块——不要压成泥。",
      "stateNote": {
        "visual": "Tofu pieces hold their shape, with dry-looking edges.",
        "visualZh": "豆腐块保持形状，边缘看起来发干。",
        "signal": "A squeezed handful releases no water.",
        "signalZh": "抓一把攥紧不再出水。",
        "timeRef": "20 minutes pressing",
        "timeRefZh": "压水 20 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Heat 1 tbsp oil over medium-high and fry the crumbled tofu 4-5 minutes without stirring much, until edges turn golden.",
      "textZh": "中大火热 1 汤匙油，下豆腐块煎 4-5 分钟，不要频繁翻动，至边缘金黄。",
      "stateNote": {
        "visual": "Patches of deep golden crust form on the tofu faces.",
        "visualZh": "豆腐表面出现成片金黄色硬壳。",
        "signal": "The pan sizzles more quietly as surface moisture cooks off.",
        "signalZh": "锅内滋滋声变小，说明表面水分已收干。",
        "timeRef": "4-5 minutes",
        "timeRefZh": "4-5 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Push tofu aside, pour in the beaten eggs, and scramble until just set, breaking them into small curds.",
      "textZh": "豆腐拨到一边，倒入蛋液，炒至刚凝固并划散成小块。",
      "stateNote": {
        "visual": "Egg is opaque and separated into fluffy curds, no liquid shine.",
        "visualZh": "蛋液变白不透明，呈蓬松小块，无湿亮感。",
        "signal": "Curd surfaces look dry and matte rather than glossy.",
        "signalZh": "蛋块表面发哑光而不是亮晶晶。",
        "timeRef": "60-90 seconds",
        "timeRefZh": "60-90 秒",
        "heat": "medium"
      }
    },
    {
      "text": "Add wood ear and carrot, stir-fry 2 minutes until the carrot softens slightly but still has bite.",
      "textZh": "下木耳和胡萝卜丝，翻炒 2 分钟至胡萝卜略软但仍有脆感。",
      "stateNote": {
        "visual": "Carrot turns a brighter orange and bends without snapping.",
        "visualZh": "胡萝卜颜色更亮橙，能弯折而不断。",
        "signal": "Wood ear pieces make a faint crackle as they release steam.",
        "signalZh": "木耳受热发出轻微的噼啪声。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Season with light soy sauce and white pepper, toss 30 seconds, finish with sesame oil and scallion off the heat.",
      "textZh": "加生抽和白胡椒粉翻匀 30 秒，关火后淋香油、撒葱花。",
      "stateNote": {
        "visual": "Every piece is evenly tinted light brown; scallion stays bright green.",
        "visualZh": "每块食材均匀裹上浅褐色，葱花仍翠绿。",
        "signal": "Soy sauce hits the hot pan and smells toasty within one second.",
        "signalZh": "生抽遇热锅一秒内散出焦香味。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high"
      }
    }
  ],
  "tips": [
    "Do not skip pressing the tofu — wet tofu steams instead of browning.",
    "Wood ear adds the classic crunch; sliced shiitake is an acceptable substitute.",
    "Serve with steamed rice or rolled in a warm flour tortilla as a moo shu wrap."
  ],
  "tipsZh": [
    "豆腐一定要压水——带水的豆腐只会出水蒸熟，不会上色。",
    "木耳提供标志性脆感；没有可用鲜香菇片代替。",
    "配米饭，或卷进热薄饼做成木须卷。"
  ],
  "relatedSlugs": [
    "moo-shu-pork",
    "home-style-tofu",
    "braised-tofu",
    "tomato-tofu-soup"
  ],
  "image": "/images/recipes/home-style-tofu.webp"
};
