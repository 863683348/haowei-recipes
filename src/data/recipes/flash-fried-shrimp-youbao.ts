import type { Recipe } from "@/lib/types";

/** Flash-Fried Shrimp (Youbao Xia) (油爆虾) — Day batch */
export const flash_fried_shrimp_youbao: Recipe = {
  "id": "flash-fried-shrimp-youbao",
  "slug": "flash-fried-shrimp-youbao",
  "titleEn": "Flash-Fried Shrimp (Youbao Xia)",
  "titleZh": "油爆虾",
  "pinyin": "yóu bào xiā",
  "cuisine": "上海菜",
  "cuisineEn": "Shanghai home cooking",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Restaurant 油爆虾 is fried twice in a litre of very hot oil in a wok with a roaring burner. At home we shallow-fry in a heavy pot with less oil, and boost the heat at the second fry so the shells still crackle.",
  "versionNoteZh": "餐厅的油爆虾要在猛火灶上一升热油里过两遍。家常改用厚底锅少油半煎炸，第二遍把火开到最大，壳一样能爆脆。",
  "tags": [
    "shanghai",
    "shrimp",
    "quick-fry",
    "wok-hei",
    "30-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "油爆 is the shortest verb in Chinese cooking — 'explode in oil'. The shrimp go in whole, shell on, and come out 40 seconds later with shells blistered and brittle enough to chew. Shanghai families eat them by hand at the table, sucking the sweetened soy off each shell before spitting it into a growing pile. It is not a polite dish, and that is exactly the point.",
  "storyZh": "「爆」是中餐里最短的动词。虾整只带壳下锅，四十秒后捞出，壳起泡发脆，可以直接嚼。上海人吃这道菜直接上手，先嘬掉壳上甜甜的酱油，再把壳吐成一小堆。它不体面，可是就要这个劲儿。",
  "ingredients": [
    {
      "id": "shrimp",
      "nameEn": "head-on shell-on shrimp, medium",
      "nameZh": "带壳大虾（中号）",
      "amountMetric": "500 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp",
      "note": "Shell-on is essential — the shell is what crisps. Trim the rostrum and legs with scissors.",
      "noteZh": "必须带壳，脆的是壳。用剪刀剪去虾枪和虾脚。"
    },
    {
      "id": "scallion",
      "nameEn": "scallions, cut into 3 cm lengths",
      "nameZh": "葱段",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ginger",
      "nameEn": "ginger, sliced thin",
      "nameZh": "姜片",
      "amountMetric": "15 g",
      "amountUS": "5 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "light-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sugar",
      "nameEn": "granulated sugar",
      "nameZh": "白糖",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Shanghai cooking is unapologetically sweet here; cut to 2 tsp if you prefer.",
      "noteZh": "上海做法这里就是甜，不爱甜可减到 2 小勺。"
    },
    {
      "id": "rice-vinegar",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "cornstarch",
      "nameEn": "cornstarch slurry (1:3 with water)",
      "nameZh": "水淀粉",
      "amountMetric": "5 g + 15 ml water",
      "amountUS": "1 tsp + 1 tbsp water",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "neutral-oil",
      "nameEn": "neutral oil for frying",
      "nameZh": "炸油",
      "amountMetric": "400 ml",
      "amountUS": "1 2/3 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Trim the shrimp with scissors, devein if you like, then dry them thoroughly and keep them in a single layer on a rack.",
      "textZh": "剪刀剪去虾枪虾脚，可挑去虾线，彻底吸干水分，单层摊在架子上。",
      "stateNote": {
        "visual": "Shells look chalky and dry, no sheen of moisture",
        "visualZh": "虾壳发白发干，看不到水光",
        "signal": "Shrimp no longer stick to the paper towel when you lift them",
        "signalZh": "提起时虾不再粘住厨房纸",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "medium"
      },
      "tip": "Wet shrimp drop the oil temperature and steam instead of crisping.",
      "tipZh": "虾带水会让油温骤降，变成煮而不是爆。"
    },
    {
      "text": "Heat the oil to smoking and fry the shrimp in two batches for about 40 seconds, just until the shells turn red and start to blister. Lift out and drain.",
      "textZh": "油烧至冒烟，虾分两批下锅炸约 40 秒，壳变红并起小泡即捞出沥油。",
      "stateNote": {
        "visual": "Shells turn bright coral-red and separate slightly from the meat",
        "visualZh": "虾壳变成鲜亮的珊瑚红，微微和肉分离",
        "signal": "The frantic bubbling quiets noticeably and the shrimp float",
        "signalZh": "剧烈冒泡明显变缓，虾浮起来",
        "timeRef": "40 seconds per batch",
        "timeRefZh": "每批 40 秒",
        "heat": "high"
      }
    },
    {
      "text": "Bring the oil back up to full heat and return all the shrimp for a second, 20-second blast to set the crunch.",
      "textZh": "油温重新拉到最高，全部虾回锅二次爆 20 秒，把脆壳定住。",
      "stateNote": {
        "visual": "Shells look glassy and you can hear them tick against the pot",
        "visualZh": "虾壳透出玻璃质感，能听见敲击锅壁的脆响",
        "signal": "A shrimp lifted out crackles as it cools for a few seconds",
        "signalZh": "捞出后冷却几秒还能听见轻微的爆裂声",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high"
      }
    },
    {
      "text": "Pour off all but 1 tbsp of oil. Over high heat add scallion and ginger, then wine, soy, sugar and vinegar; let it bubble up into a thin syrupy sauce.",
      "textZh": "锅内留 1 大勺油，大火下葱姜，再烹黄酒、生抽、白糖、米醋，煮到起泡变稀糖浆状。",
      "stateNote": {
        "visual": "The sauce darkens and thick bubbles rise and burst slowly",
        "visualZh": "酱汁颜色变深，大气泡缓慢升起破裂",
        "signal": "The sharp vinegar edge mellows into a rounded sweet-sour smell",
        "signalZh": "醋的冲味转成圆润的酸甜香",
        "timeRef": "1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Tip the shrimp back in, add the slurry and toss hard for 15 seconds so every shell gets lacquered, then serve immediately.",
      "textZh": "虾回锅，淋水淀粉，大火猛翻 15 秒让每只虾都裹上亮芡，立刻出锅。",
      "stateNote": {
        "visual": "Each shell gleams and no sauce pools at the bottom of the pot",
        "visualZh": "虾壳油亮发亮，锅底不留余汁",
        "signal": "The sauce clings rather than runs when you lift a shrimp out",
        "signalZh": "夹起一只虾，酱汁挂在壳上不往下流",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "high"
      }
    }
  ],
  "tips": [
    "Eat these within five minutes — after that the shell softens and the whole point is lost.",
    "Do not skip the second fry. It is the difference between crisp and merely cooked.",
    "Head-on shrimp give you tomalley-rich oil; if using headless, add a spoon of the frying oil back to the sauce."
  ],
  "tipsZh": [
    "五分钟内上桌吃掉，壳一软这道菜就白做了。",
    "第二遍复炸别省，这是「脆」和「熟」的分界线。",
    "带头虾能炸出虾膏香；用无头虾就往酱汁里回一勺炸虾油。"
  ],
  "relatedSlugs": [
    "red-braised-prawns",
    "oil-braised-large-shrimp",
    "stir-fried-shrimp"
  ],
  "image": "/images/recipes/chinese-chives-stir-fried-river-shrimp.webp"
};
