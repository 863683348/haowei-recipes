import type { Recipe } from "@/lib/types";

/** Hand-Pulled Flatbread (Shou Zhua Bing) (手抓饼) — Day batch */
export const shou_zhua_bing: Recipe = {
  "id": "shou-zhua-bing",
  "slug": "shou-zhua-bing",
  "titleEn": "Hand-Pulled Flatbread (Shou Zhua Bing)",
  "titleZh": "手抓饼",
  "pinyin": "shǒu zhuā bǐng",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Taiwan",
  "regionZh": "台湾",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses a half-boiled-water dough and a home skillet instead of a commercial griddle; the layers are slightly thicker than the night-market version but far more forgiving.",
  "versionNoteZh": "家常版用半烫面、家用平底锅代替商用铁板——层次比夜市版略厚，但更好操作、不易失败。",
  "tags": [
    "weeknight",
    "kid-friendly",
    "make-ahead"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Shou zhua bing started as a Taiwan night-market riff on northern Chinese scallion bread: vendors stretch a coil of oil-layered dough, griddle it, then crush it between two spatulas so the layers shatter into shreds you literally pull apart by hand — hence 'hand-grab bread'.",
  "storyZh": "手抓饼源自台湾夜市对北方葱油饼的改造：摊主把抹油卷好的面剂擀开、上铁板煎香，再用两把铲子对挤，让层次碎成一丝丝，用手一抓就散——所以叫「手抓饼」。",
  "ingredients": [
    {
      "id": "szb-1",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "300 g",
      "amountUS": "2 1/2 cups",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Plain AP flour (10–11% protein) gives the best balance of chew and flake.",
      "noteZh": "普通中筋面粉（蛋白质 10–11%）兼顾筋道与分层。"
    },
    {
      "id": "szb-2",
      "nameEn": "boiling water",
      "nameZh": "沸水",
      "pinyin": "fèi shuǐ",
      "amountMetric": "90 ml",
      "amountUS": "6 tbsp",
      "category": "other",
      "pantry": "local",
      "note": "Scalds part of the flour so the dough stays soft instead of springy.",
      "noteZh": "烫掉部分面筋，饼才软而不硬。"
    },
    {
      "id": "szb-3",
      "nameEn": "cold water",
      "nameZh": "冷水",
      "pinyin": "lěng shuǐ",
      "amountMetric": "90 ml",
      "amountUS": "6 tbsp",
      "category": "other",
      "pantry": "local",
      "note": "Added after the hot water to rebuild just enough gluten to roll thin.",
      "noteZh": "热水之后补入，恢复少量筋性，便于擀薄。"
    },
    {
      "id": "szb-4",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "4 g",
      "amountUS": "3/4 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "szb-5",
      "nameEn": "neutral cooking oil",
      "nameZh": "中性食用油",
      "pinyin": "zhōng xìng shí yòng yóu",
      "amountMetric": "40 ml",
      "amountUS": "2 tbsp + 2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Half goes into the dough, half into the lamination paste.",
      "noteZh": "一半揉进面团，一半调油酥。"
    },
    {
      "id": "szb-6",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "40 g",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local",
      "note": "Slice thin; green parts carry the aroma, whites can go in the paste.",
      "noteZh": "切细葱花；葱绿提香，葱白可拌入油酥。",
      "termKey": "scallion"
    },
    {
      "id": "szb-7",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Optional but traditional; black pepper changes the aroma profile.",
      "noteZh": "可选但传统；黑胡椒会改变香气走向。",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Put flour and salt in a bowl. Pour the boiling water over two-thirds of the flour and stir quickly with chopsticks until it looks like ragged crumbs.",
      "textZh": "面粉加盐入盆，沸水冲入其中三分之二的粉，用筷子快速搅成絮状。",
      "zhHint": "沸水先烫，粉要留三分之一",
      "stateNote": {
        "visual": "Mixture looks like coarse, uneven crumbs with no dry flour pockets in the scalded part.",
        "visualZh": "呈粗絮状，烫过部分无干粉团。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Bowl feels warm but not painfully hot to the back of your hand.",
        "signalZh": "手背贴盆温热不烫手。"
      }
    },
    {
      "text": "Add the cold water to the remaining flour, then knead everything together 6–8 minutes into a smooth, slightly tacky dough. Cover and rest 20 minutes.",
      "textZh": "剩余干粉处加入冷水，再把全部面团揉 6–8 分钟至光滑微黏；盖保鲜膜醒 20 分钟。",
      "zhHint": "揉到光滑，醒够才不回缩",
      "stateNote": {
        "visual": "Dough surface is smooth and springs back slowly when poked; no flour streaks.",
        "visualZh": "面团表面光滑，戳洞缓慢回弹，无干粉纹路。",
        "timeRef": "8 minutes knead + 20 minutes rest",
        "timeRefZh": "揉 8 分钟 + 醒 20 分钟",
        "signal": "A pressed finger mark half-fills in within 5 seconds.",
        "signalZh": "指印 5 秒内回弹一半。"
      }
    },
    {
      "text": "Mix 20 ml oil with 20 g flour into a pourable paste (oil-roux). Divide dough into 4 balls; roll each into a 20 cm round, spread a thin layer of paste, and scatter scallion and white pepper.",
      "textZh": "20 毫升油与 20 克面粉调成可流动油酥；面团分 4 份，每份擀成 20 厘米圆片，薄抹油酥，撒葱花与白胡椒粉。",
      "zhHint": "油酥薄而匀，葱花别堆",
      "stateNote": {
        "visual": "Sheet is evenly translucent where the paste is applied; scallion is distributed, not clumped.",
        "visualZh": "抹酥处均匀透光，葱花分散不结团。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Paste drips slowly from the spoon, like thin yogurt.",
        "signalZh": "油酥从勺边缓慢流下，似稀酸奶。"
      }
    },
    {
      "text": "Roll the sheet up into a tight log from one edge, then coil the log into a snail shape, tucking the end underneath. Flatten gently with your palm and rest 10 minutes.",
      "textZh": "从一边卷成紧实长条，再由一头盘成蜗牛状，收尾压在底部；手掌轻按扁，松弛 10 分钟。",
      "zhHint": "卷紧盘圆，收口压底",
      "stateNote": {
        "visual": "Spiral is visible on top with a clean centre; coil holds without unravelling.",
        "visualZh": "顶面螺旋纹清晰，收口不散不松。",
        "timeRef": "3 minutes + 10 minutes rest",
        "timeRefZh": "3 分钟 + 松弛 10 分钟",
        "signal": "Coil feels springy, and the seam stays sealed when nudged.",
        "signalZh": "轻推收口不裂开，手感有弹性。"
      }
    },
    {
      "text": "Roll each coil into a 3 mm thick disc. Heat a dry skillet over medium-low, brush with 5 ml oil, and cook the disc 2–3 minutes per side until blistered and golden.",
      "textZh": "每份擀成 3 毫米厚圆饼；平底锅烧热转中小火，刷 5 毫升油，每面煎 2–3 分钟至鼓泡金黄。",
      "zhHint": "中小火慢煎，别急翻",
      "stateNote": {
        "visual": "Surface shows amber blisters with pale dough between them; edges look set.",
        "visualZh": "表面琥珀色鼓泡、间有浅色面皮，边缘定型。",
        "timeRef": "5–6 minutes total",
        "timeRefZh": "共 5–6 分钟",
        "heat": "medium-low",
        "signal": "Pale spots turn opaque and the cake slides freely in the pan.",
        "signalZh": "浅色部位变不透明，饼在锅中可自由滑动。"
      }
    },
    {
      "text": "Transfer to a board. Using two spatulas or gloved hands, push from the edges toward the centre to crush and fluff the layers. Serve immediately.",
      "textZh": "移到砧板，用两把铲子（或戴手套的双手）由边缘向中间挤压，把层次挤散抖松，趁热上桌。",
      "zhHint": "由外向内挤，抖散即食",
      "stateNote": {
        "visual": "Layers separate into visible shreds; the disc roughly doubles in apparent volume.",
        "visualZh": "层次散成丝状，体积看似膨大一倍。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Steam puffs out as you crush, and the crust crackles under the spatula.",
        "signalZh": "挤压时热气外冒，铲下脆皮作响。"
      }
    }
  ],
  "tips": [
    "Freeze the coiled raw discs between sheets of parchment — they cook straight from frozen in 6 minutes, no thawing.",
    "Resting is not optional: an unrested dough snaps back and you will never roll it thin.",
    "For a full meal, crack an egg onto the cooking flatbread (as with jianbing) and fold around a sausage or bacon."
  ],
  "tipsZh": [
    "生胚盘好用油纸隔层冷冻——无需解冻，直接下锅 6 分钟即成。",
    "醒面不能省：没醒透的面回缩，根本擀不薄。",
    "想当正餐，可在饼上打个蛋（像煎饼果子那样），再卷香肠或培根。"
  ],
  "relatedSlugs": [
    "cong-you-bao-bing",
    "scallion-pancakes",
    "jianbing-guo-zi"
  ],
  "image": "/images/recipes/cong-you-bao-bing.webp"
};
