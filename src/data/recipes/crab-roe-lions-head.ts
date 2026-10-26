import type { Recipe } from "@/lib/types";

/** Crab Roe Lion's Head Meatballs (Qingdun Xiefen Shizitou) (清炖蟹粉狮子头) — Day batch */
export const crab_roe_lions_head: Recipe = {
  "id": "crab-roe-lions-head",
  "slug": "crab-roe-lions-head",
  "titleEn": "Crab Roe Lion's Head Meatballs (Qingdun Xiefen Shizitou)",
  "titleZh": "清炖蟹粉狮子头",
  "pinyin": "qīng dùn xiè fěn shī zi tóu",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang",
  "region": "Jiangsu (Yangzhou)",
  "regionZh": "江苏（扬州）",
  "difficulty": "hard",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Banquet versions hand-chop pork belly to a coarse mince and use fresh crab roe scraped from live crabs. At home we use 70/30 ground pork and canned crab meat with roe, which is both cheaper and available year round.",
  "versionNoteZh": "宴席版要用五花肉手工粗斩、现拆活蟹的蟹粉。家常版用肥瘦 7:3 的绞肉加罐头蟹肉蟹黄，便宜且一年四季都有。",
  "tags": [
    "huaiyang",
    "pork",
    "crab",
    "stew",
    "banquet",
    "weekend-project"
  ],
  "dietary": [
    "none"
  ],
  "story": "A lion's head is a meatball the size of a fist, pale and barely bound, so tender it trembles when you set the bowl down. Yangzhou cooks say the crab roe is not an ingredient but a seasoning — it disappears into the pork and leaves only a gold-flecked sweetness behind. It is the dish you make for a parent's birthday.",
  "storyZh": "狮子头是拳头大的一颗肉圆，颜色浅白、几乎不上劲，端上桌时还在颤。扬州厨师说蟹粉不是配料而是调味——它化进肉里，只留下星星点点的金红色和一丝甜。这是给长辈过生日才会做的菜。",
  "ingredients": [
    {
      "id": "pork-mince",
      "nameEn": "ground pork, 70% lean / 30% fat",
      "nameZh": "猪绞肉（肥瘦 3:7）",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince",
      "note": "Do not use lean mince. The fat is what keeps the meatball from turning to gravel.",
      "noteZh": "不能用瘦绞肉，肥肉才是不柴的关键。"
    },
    {
      "id": "crab-meat",
      "nameEn": "canned crab meat with roe, drained",
      "nameZh": "罐头蟹肉蟹黄（沥干）",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for 'crab meat with roe' at Asian markets; lump crab plus a spoon of crab roe paste also works.",
      "noteZh": "中式超市找「蟹肉蟹黄」罐头；蟹腿肉加一勺蟹黄酱也行。"
    },
    {
      "id": "napa-cabbage",
      "nameEn": "napa cabbage, cut into large pieces",
      "nameZh": "大白菜（切大块）",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "napa-cabbage"
    },
    {
      "id": "scallion",
      "nameEn": "scallion, finely chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ginger",
      "nameEn": "ginger, grated",
      "nameZh": "姜末",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "egg-white",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "amountMetric": "1",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "cornstarch",
      "nameEn": "cornstarch",
      "nameZh": "生粉",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "white-pepper",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "chicken-stock",
      "nameEn": "chicken stock, hot",
      "nameZh": "热鸡汤",
      "amountMetric": "800 ml",
      "amountUS": "3 1/2 cups",
      "category": "other",
      "pantry": "local",
      "note": "The broth should be clear and pale so the meatballs stay white.",
      "noteZh": "汤要清要淡，肉圆才保持洁白。"
    }
  ],
  "steps": [
    {
      "text": "Combine pork, crab, half the scallion, ginger, egg white, cornstarch, wine, white pepper and a pinch of salt. Mix gently in one direction just until it holds together — do not knead.",
      "textZh": "把绞肉、蟹粉、一半葱花、姜末、蛋清、生粉、黄酒、白胡椒和少许盐拌在一起，顺一个方向轻轻搅到能抱团即可，不要上劲。",
      "stateNote": {
        "visual": "The mixture looks loose and slightly rough, streaked with orange roe",
        "visualZh": "肉馅松散略粗糙，能看到橙红的蟹黄丝",
        "signal": "It holds a rough shape when scooped but slumps if you shake the bowl",
        "signalZh": "舀起来能成形，晃一下碗就会塌",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "low"
      },
      "tip": "Over-mixing is the classic mistake — it makes a bouncy, bouncy ball instead of a tender one.",
      "tipZh": "搅过头是最常见的错误，会做出口感弹牙的肉丸而不是松软的狮子头。"
    },
    {
      "text": "With wet hands, shape four large balls by tossing the mixture lightly from palm to palm until each is about 8 cm across and smooth on the surface.",
      "textZh": "手沾水，把肉馅在两手之间轻轻摔打搓圆，做成四个直径约 8 cm、表面光滑的大肉圆。",
      "stateNote": {
        "visual": "Each ball has a smooth, faintly damp dome with no cracks",
        "visualZh": "肉圆表面光滑微湿，没有裂缝",
        "signal": "The ball holds its shape when set down but wobbles slightly",
        "signalZh": "放下能保持形状，轻推微微晃动",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Line a heavy pot with the cabbage, set the meatballs on top, pour in hot stock to just cover, and bring it to the barest tremble.",
      "textZh": "厚底锅里铺上白菜，放上肉圆，倒入热鸡汤刚好没过，煮到似开非开。",
      "stateNote": {
        "visual": "The surface barely moves; only occasional small bubbles rise at the edge",
        "visualZh": "汤面几乎不动，只是边缘偶尔冒小泡",
        "signal": "The meatballs stay pale and do not break apart",
        "signalZh": "肉圆保持洁白不散开",
        "timeRef": "about 10 minutes",
        "timeRefZh": "约 10 分钟",
        "heat": "low"
      },
      "tip": "If it boils, the meatballs will break. Skim the grey foam once, then leave it alone.",
      "tipZh": "一开锅肉圆就会散。撇一次灰色浮沫后就别再动它。"
    },
    {
      "text": "Cover and simmer very gently for 60 minutes, skimming occasionally, until the meatballs have swollen and the broth is clear and golden.",
      "textZh": "加盖最小火焖 60 分钟，偶尔撇沫，直到肉圆微微涨大、汤色清亮泛金。",
      "stateNote": {
        "visual": "The meatballs look plumper and the broth carries flecks of orange crab oil",
        "visualZh": "肉圆明显变饱满，汤面浮着橙色的蟹油星",
        "signal": "A skewer pushed into the centre comes out clean and the ball springs back slowly",
        "signalZh": "竹签插到中心抽出是干净的，按下去慢慢回弹",
        "timeRef": "60 minutes",
        "timeRefZh": "60 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Taste the broth, adjust with salt only, scatter the remaining scallion and serve each meatball in a bowl with the cabbage and plenty of broth.",
      "textZh": "尝汤，只用盐调味，撒上剩下的葱花，每碗盛一个肉圆配白菜和多多的汤。",
      "stateNote": {
        "visual": "The broth is pale gold and translucent, with the cabbage collapsed and sweet",
        "visualZh": "汤色淡金通透，白菜焖塌发甜",
        "signal": "A spoonful tastes clean and sweet, never salty or greasy",
        "signalZh": "一勺入口清鲜回甜，不咸不腻",
        "timeRef": "3 minutes",
        "timeRefZh": "约 3 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Keep the broth at a tremble, never a boil, for the entire hour.",
    "Wet hands are the only tool you need for shaping — do not flour them.",
    "Make it a day ahead: the flavour deepens and the meatballs reheat beautifully in the same broth."
  ],
  "tipsZh": [
    "整整一小时都要保持似开非开，绝不能滚。",
    "搓圆只需要蘸水的手，不要拍干粉。",
    "提前一天做更好：味道更醇，第二天用原汤热回即可。"
  ],
  "relatedSlugs": [
    "yangzhou-lion-head",
    "qing-dun-shi-zi-tou",
    "yan-du-xian"
  ],
  "image": "/images/recipes/yangzhou-lion-head.webp"
};
