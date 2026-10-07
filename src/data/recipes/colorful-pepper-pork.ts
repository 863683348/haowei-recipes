import type { Recipe } from "@/lib/types";

/** Stir-fried Pork with Tri-colour Bell Peppers (彩椒炒肉) (彩椒炒肉) — Day batch */
export const colorful_pepper_pork: Recipe = {
  "id": "colorful-pepper-pork",
  "slug": "colorful-pepper-pork",
  "titleEn": "Stir-fried Pork with Tri-colour Bell Peppers (彩椒炒肉)",
  "titleZh": "彩椒炒肉",
  "pinyin": "cǎi jiāo chǎo ròu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurant woks velvet the pork in a cornstarch-and-egg-white slurry and flash-fry it in a cup of hot oil so every slice stays silky. At home, a 1-teaspoon cornstarch coating and a hard sear in 2 tablespoons of oil gets you 90 percent of the texture with a fraction of the oil.",
  "versionNoteZh": "餐厅把肉用淀粉和蛋清上浆、在大量热油里滑炒，每片都滑嫩。家常版用 1 茶匙淀粉抓匀、2 汤匙油大火快煎，能拿到九成口感，油量却少得多。",
  "tags": [
    "home-style",
    "pork",
    "weeknight",
    "colorful",
    "kid-friendly"
  ],
  "dietary": [
    "none"
  ],
  "story": "彩椒炒肉 is the weeknight answer to 青椒肉丝: same technique, but the skinny hot green peppers are swapped for sweet red, yellow and orange bell peppers. It appeared in Chinese home kitchens in the 1990s when greenhouse bell peppers became cheap year-round, and it is now the dish parents make because children will actually eat the vegetables — they are sweet, crunchy and the colour of a cartoon.",
  "storyZh": "彩椒炒肉是青椒肉丝的工作日版本：手法一样，只是把细长的辣青椒换成甜的红黄橙彩椒。90 年代大棚彩椒全年便宜之后它进了中国家常厨房，如今是爸妈愿意做的菜——因为孩子真的会吃那些蔬菜：甜、脆、颜色像动画片。",
  "ingredients": [
    {
      "id": "cpp-pork",
      "nameEn": "pork loin, sliced 3 mm thick across the grain",
      "nameZh": "猪里脊（逆纹切 3 毫米片）",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-loin",
      "note": "Partially freeze for 30 minutes to slice thin easily.",
      "noteZh": "冷冻 30 分钟再切，更容易切薄。"
    },
    {
      "id": "cpp-red",
      "nameEn": "red bell pepper, cut into 2 cm diamonds",
      "nameZh": "红彩椒（切 2 厘米菱形块）",
      "amountMetric": "1 medium (about 150 g)",
      "amountUS": "1 medium (about 5 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "green-pepper"
    },
    {
      "id": "cpp-green",
      "nameEn": "green bell pepper, cut into 2 cm diamonds",
      "nameZh": "绿彩椒（切 2 厘米菱形块）",
      "amountMetric": "1 medium (about 150 g)",
      "amountUS": "1 medium (about 5 oz)",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cpp-yellow",
      "nameEn": "yellow bell pepper, cut into 2 cm diamonds",
      "nameZh": "黄彩椒（切 2 厘米菱形块）",
      "amountMetric": "0.5 medium",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cpp-garlic",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cpp-ginger",
      "nameEn": "ginger, sliced into thin coins",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cpp-marinade-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cpp-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cpp-starch",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "cpp-oyster",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "cpp-oil",
      "nameEn": "neutral oil",
      "nameZh": "中性油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Toss the pork slices with the Shaoxing wine, 2 teaspoons of the soy sauce and the cornstarch. Massage for 30 seconds and rest 10 minutes.",
      "textZh": "肉片加黄酒、2 茶匙生抽和淀粉，抓匀 30 秒，静置 10 分钟。",
      "stateNote": {
        "visual": "Each piece is coated in a thin, slightly tacky film; no liquid pools in the bowl",
        "visualZh": "每片肉裹上一层薄而微黏的浆，碗底无积液",
        "timeRef": "10 minutes resting",
        "timeRefZh": "静置 10 分钟",
        "signal": "Pinch a slice — it feels slippery and springs back",
        "signalZh": "捏一片肉感觉滑手且会回弹"
      },
      "tip": "This is velveting, the single biggest difference between homemade and takeout stir-fry.",
      "tipZh": "这就是上浆——家常小炒和外卖口感最大的分界线。"
    },
    {
      "text": "Heat the wok dry over medium-high until hot, add 1 tablespoon of oil, and lay the pork in a single layer. Leave it alone for 45 seconds.",
      "textZh": "锅空烧至中大火热，加 1 汤匙油，把肉片平铺一层，静置 45 秒不要动。",
      "stateNote": {
        "visual": "The underside turns opaque white with light gold spots; the top is still pink",
        "visualZh": "贴锅面变不透明、出现浅金斑点，上面仍是粉色",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium-high",
        "signal": "The sizzle drops in pitch as surface moisture cooks off",
        "signalZh": "滋滋声由高变低，说明表面水分收干"
      }
    },
    {
      "text": "Flip and stir-fry for 30 seconds more until just cooked through, then transfer the pork to a plate.",
      "textZh": "翻面再炒 30 秒至刚熟，盛出备用。",
      "stateNote": {
        "visual": "No pink remains but the slices still look glossy and moist",
        "visualZh": "没有生粉色，肉片仍油亮湿润",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "Slices feel firm but yield easily when pressed with the spatula",
        "signalZh": "锅铲轻压肉片有弹性不柴硬"
      }
    },
    {
      "text": "Add the remaining oil, then the garlic and ginger. Stir for 15 seconds, then add all three peppers and raise the heat to high.",
      "textZh": "补剩下的油，下蒜片姜片炒 15 秒，倒入三色彩椒转大火。",
      "stateNote": {
        "visual": "Pepper skins brighten and glisten; edges take on a few blistered spots",
        "visualZh": "彩椒表皮变亮发油光，边缘出现少量起泡焦点",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "The peppers squeak against the wok and smell sweet, like grass and sugar",
        "signalZh": "彩椒蹭锅发出吱吱声，闻到清甜的草香和糖香"
      },
      "tip": "Keep peppers slightly underdone — they should still snap when you bite them.",
      "tipZh": "彩椒要略欠一点——咬下去还该有脆响。"
    },
    {
      "text": "Return the pork with the remaining soy sauce and the oyster sauce. Toss for 25 seconds so the sauce clings.",
      "textZh": "倒回肉片，加剩余生抽和蚝油，翻炒 25 秒让酱汁挂匀。",
      "stateNote": {
        "visual": "A thin amber glaze coats everything; no sauce pooling at the bottom",
        "visualZh": "薄薄一层琥珀色酱汁裹住所有食材，锅底不积汁",
        "timeRef": "25 seconds",
        "timeRefZh": "25 秒",
        "heat": "high",
        "signal": "Sauce bubbles thickly and slowly rather than spitting",
        "signalZh": "酱汁起泡变稠、不再飞溅"
      }
    },
    {
      "text": "Turn off the heat, taste, and adjust with a splash of soy sauce if needed. Serve straight away over rice.",
      "textZh": "关火尝味，需要的话补一点生抽，趁热浇在米饭上。",
      "stateNote": {
        "visual": "Three clearly separated pepper colours against browned pork, steam still rising",
        "visualZh": "三色椒块分明配焦香肉片，仍在冒热气",
        "signal": "Plate looks glossy, not wet",
        "signalZh": "装盘油亮而不是水汪汪"
      }
    }
  ],
  "tips": [
    "Cut peppers into the same size as the pork so everything cooks in the same 90 seconds.",
    "Pork tenderloin also works and is even more tender; reduce the sear by 10 seconds.",
    "For a spicy version swap one green bell pepper for two long green chilies."
  ],
  "tipsZh": [
    "彩椒切成和肉片一样大小，才能在同样的 90 秒里一起熟。",
    "用猪里脊更嫩，煎的时间缩短 10 秒。",
    "想吃辣就把一个绿彩椒换成两根长青椒。"
  ],
  "ingredientSubs": [
    {
      "from": "Shaoxing wine",
      "fromZh": "绍兴黄酒",
      "to": "dry sherry or dry vermouth",
      "toZh": "干雪利酒或干味美思",
      "ratio": "1:1",
      "note": "Both give the same savoury lift; avoid cooking wine from the supermarket seasoning aisle, which is salty.",
      "noteZh": "提鲜效果一致；别用超市调料区的含盐料酒。"
    },
    {
      "from": "oyster sauce",
      "fromZh": "蚝油",
      "to": "vegetarian mushroom stir-fry sauce",
      "toZh": "素食香菇蚝油",
      "ratio": "1:1",
      "note": "Makes the dish fully vegetarian-friendly; slightly less seafood depth.",
      "noteZh": "可做成全素版本，海鲜厚度略减。"
    }
  ],
  "relatedSlugs": [
    "pepper-pork",
    "green-pepper-beef",
    "yu-xiang-pork"
  ],
  "image": "/images/recipes/pepper-pork.webp"
};
