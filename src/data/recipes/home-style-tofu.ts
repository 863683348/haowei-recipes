import type { Recipe } from "@/lib/types";

/** Home-style Tofu (家常豆腐) (家常豆腐) — Day batch */
export const home_style_tofu: Recipe = {
  "id": "home-style-tofu",
  "slug": "home-style-tofu",
  "titleEn": "Home-style Tofu (家常豆腐)",
  "titleZh": "家常豆腐",
  "pinyin": "jiā cháng dòu fu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Sichuan / national home cooking",
  "regionZh": "川渝家常，全国流行",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "The family version pan-fries tofu to a golden crust first, then braises it in a doubanjiang sauce with vegetables — richer than a plain stir-fry, faster than a full red-braise. No deep frying, no MSG.",
  "versionNoteZh": "家常版先把豆腐煎出金黄脆壳，再用豆瓣酱配蔬菜烧制——比清炒更香浓，比整锅红烧更省时。不用宽油，不加味精。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian-ok",
    "comfort",
    "tofu"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "In Sichuan homes, 家常豆腐 is the tofu dish grandma makes when she wants something heartier than mapo. The tofu is pan-fried first — that golden, slightly chewy skin is called the 'tiger skin' (虎皮), and it's what lets the squares soak up sauce without falling apart. Every family's sauce is a little different; this one uses doubanjiang for the red base, a few pork slices for richness, and whatever vegetables are in the fridge.",
  "storyZh": "在四川家庭里，家常豆腐是奶奶想做一道比麻婆豆腐更实在的豆腐菜时的选择。豆腐先煎——那层金黄微韧的皮叫“虎皮”，正是它让豆腐块吸饱汤汁却不散架。每家酱汁都略有不同；这一版用豆瓣酱打底，几片五花肉增香，再加冰箱里现成的蔬菜。",
  "ingredients": [
    {
      "id": "hf-tofu",
      "nameEn": "firm tofu",
      "nameZh": "老豆腐",
      "amountMetric": "400 g",
      "amountUS": "1 block (about 14 oz)",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "tofu",
      "note": "Firm or extra-firm — the golden crust needs structure.",
      "noteZh": "用老豆腐或硬豆腐——煎出脆壳需要结构支撑。"
    },
    {
      "id": "hf-pork",
      "nameEn": "pork belly or shoulder, thin slices",
      "nameZh": "五花肉片",
      "amountMetric": "100 g",
      "amountUS": "about 3.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Optional — skip for a vegetarian version.",
      "noteZh": "可选——素食版不放。"
    },
    {
      "id": "hf-pepper",
      "nameEn": "green bell pepper, cut into squares",
      "nameZh": "青椒",
      "amountMetric": "1 (about 150 g)",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "hf-carrot",
      "nameEn": "carrot, thinly sliced",
      "nameZh": "胡萝卜",
      "amountMetric": "1/2 (about 60 g)",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "hf-woodear",
      "nameEn": "dried wood ear mushrooms, soaked",
      "nameZh": "黑木耳",
      "amountMetric": "10 g (dry)",
      "amountUS": "small handful (dry)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in warm water 20 min; or skip and add 1 more veggie.",
      "noteZh": "温水泡 20 分钟；没有可省，多放一种蔬菜即可。"
    },
    {
      "id": "hf-douban",
      "nameEn": "doubanjiang (fermented chili bean paste)",
      "nameZh": "郫县豆瓣酱",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "hf-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hf-garlic",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "hf-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "hf-scallion",
      "nameEn": "scallions, chopped",
      "nameZh": "小葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "hf-starch",
      "nameEn": "cornstarch slurry (1 tbsp cornstarch + 2 tbsp water)",
      "nameZh": "水淀粉",
      "amountMetric": "3 tbsp total",
      "amountUS": "3 tbsp total",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "hf-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut tofu into 1.5 cm thick slices, then into triangles or squares. Pat completely dry with paper towels — dry tofu sears instead of splattering.",
      "textZh": "豆腐切成 1.5 厘米厚的片，再切三角或方块。用厨房纸彻底吸干水分——干豆腐才能煎出脆壳而不溅油。",
      "zhHint": "切豆腐并吸干水分",
      "stateNote": {
        "visual": "Tofu surface looks matte and dry, no beading water",
        "visualZh": "豆腐表面哑光干燥，没有渗水珠",
        "signal": "Paper towel comes away nearly dry",
        "signalZh": "纸巾按上去几乎不湿"
      },
      "tip": "Extra-firm tofu needs almost no pressing; soft-firm tofu benefits from 10 minutes under a light weight.",
      "tipZh": "硬豆腐几乎不用压；稍软的豆腐压 10 分钟更好。"
    },
    {
      "text": "Heat 2 tbsp oil in a skillet over medium-high. Fry tofu in a single layer until deep golden, about 3 minutes per side. Set aside.",
      "textZh": "锅中放 2 汤匙油，中大火加热。豆腐单层铺开煎至深金黄，每面约 3 分钟。盛出备用。",
      "zhHint": "中大火煎豆腐",
      "stateNote": {
        "visual": "Bottom edge turns golden then deep amber; a crisp 'tiger skin' forms",
        "visualZh": "底部边缘先变金黄再转深琥珀色，形成脆韧的“虎皮”",
        "heat": "medium-high",
        "timeRef": "3 minutes per side",
        "timeRefZh": "每面 3 分钟",
        "signal": "Tofu releases from the pan easily — it's ready to flip",
        "signalZh": "豆腐能轻松离锅——说明可以翻面了"
      }
    },
    {
      "text": "Lower heat to medium, add remaining 1 tbsp oil. Fry pork slices until they start to render and brown slightly at the edges.",
      "textZh": "转中火，加剩余 1 汤匙油。下五花肉片炒至出油、边缘微焦。",
      "zhHint": "煸炒肉片",
      "stateNote": {
        "visual": "Pork edges turn light brown and fat turns translucent",
        "visualZh": "肉片边缘微焦，肥肉部分变半透明",
        "heat": "medium",
        "timeRef": "2-3 minutes",
        "timeRefZh": "2-3 分钟",
        "signal": "Fat has rendered and the pan bottom glistens",
        "signalZh": "肥肉出油，锅底泛着油光"
      },
      "tip": "Vegetarian: skip the pork and start directly at step 4 with an extra teaspoon of doubanjiang.",
      "tipZh": "素食版：跳过猪肉，直接从第 4 步开始，豆瓣酱多加 1 茶匙。"
    },
    {
      "text": "Add doubanjiang, garlic, and ginger. Stir-fry 1 minute until the oil turns red and smells fragrant.",
      "textZh": "加入豆瓣酱、蒜片和姜片，翻炒 1 分钟至油变红、香气扑鼻。",
      "zhHint": "炒豆瓣酱出红油",
      "stateNote": {
        "visual": "Oil turns deep red-orange and the paste clings to the meat",
        "visualZh": "油变成深橙红色，酱料裹在肉片上",
        "heat": "medium",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Sharp, rich aroma — before the paste darkens or burns",
        "signalZh": "香气浓郁锐利——别等酱色发黑"
      }
    },
    {
      "text": "Add carrot and wood ear, stir 1 minute. Return tofu, add soy sauce and 1 cup water (250 ml). Bring to a simmer and cook 5 minutes.",
      "textZh": "加入胡萝卜和木耳翻炒 1 分钟。放回豆腐，加生抽和 1 杯水（250 毫升）。煮开后小火煨 5 分钟。",
      "zhHint": "加水烧豆腐",
      "stateNote": {
        "visual": "Sauce bubbles gently around the tofu; tofu edges darken as they soak up color",
        "visualZh": "汤汁在豆腐周围微微冒泡，豆腐边缘因吸色变深",
        "heat": "medium-low",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Sauce has reduced by about a third",
        "signalZh": "汤汁收掉约三分之一"
      }
    },
    {
      "text": "Add green pepper and half the cornstarch slurry. Push the sauce gently (don't stir the tofu) until it turns glossy. Add the rest if you want a thicker coat.",
      "textZh": "加入青椒和一半水淀粉，轻轻推汁（不要翻动豆腐）至汤汁油亮。想要更浓稠再加剩下的水淀粉。",
      "zhHint": "下青椒勾芡",
      "stateNote": {
        "visual": "Sauce turns glossy and clings to the back of a spoon",
        "visualZh": "汤汁变得油亮，能挂在勺背",
        "timeRef": "30-60 seconds",
        "timeRefZh": "30-60 秒",
        "signal": "Spoon leaves a clear trail through the sauce",
        "signalZh": "勺子划过留下清晰痕迹"
      }
    },
    {
      "text": "Off heat, fold in scallions. Serve immediately with steamed rice.",
      "textZh": "关火，拌入葱花。趁热配米饭吃。",
      "zhHint": "撒葱花出锅",
      "stateNote": {
        "visual": "Glossy red sauce, golden tofu, bright green pepper — classic home-style look",
        "visualZh": "红亮的酱汁、金黄的豆腐、翠绿的青椒——经典家常卖相",
        "signal": "Serve hot over rice",
        "signalZh": "趁热浇在米饭上"
      }
    }
  ],
  "tips": [
    "Patting the tofu dry is the single most important step — wet tofu never crisps.",
    "Doubanjiang is salty; taste before adding any extra salt.",
    "Frying in a single layer matters: overcrowding steams the tofu instead of searing it.",
    "This is a 'clean-out-the-fridge' dish: mushrooms, zucchini, or cabbage all work."
  ],
  "tipsZh": [
    "吸干豆腐水分是最关键的一步——湿豆腐永远煎不出脆壳。",
    "豆瓣酱本身很咸——加盐前先尝味。",
    "一定要单层煎：挤在一起会变成蒸豆腐而不是煎豆腐。",
    "这是道“清冰箱”菜：香菇、西葫芦、白菜都能加。"
  ],
  "relatedSlugs": [
    "mapo-tofu",
    "braised-tofu",
    "kung-pao-chicken"
  ],
  "image": "/images/recipes/home-style-tofu.webp"
};
