import type { Recipe } from "@/lib/types";

/** Peanut Crumble Dipping Sauce (Huāshēng Suì Zhànliào) (花生碎蘸料) — Day batch */
export const peanut_crumble_dipping_sauce: Recipe = {
  "id": "hua-sheng-sui-zhan-liao",
  "slug": "peanut-crumble-dipping-sauce",
  "titleEn": "Peanut Crumble Dipping Sauce (Huāshēng Suì Zhànliào)",
  "titleZh": "花生碎蘸料",
  "pinyin": "huā shēng suì zhàn liào",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version crushes roasted peanuts by hand into an uneven crumble so you get both crunchy bits and fine powder, rather than the smooth peanut-butter-style sauce many restaurants blend. Dry-roasted peanuts keep it from turning pasty.",
  "versionNoteZh": "家庭版把熟花生手工压成粗细不匀的碎粒，既有脆粒又有粉末，不像餐馆打成顺滑的花生酱质地。用干焙花生可避免酱体发黏。",
  "tags": [
    "15-min",
    "dipping-sauce",
    "nutty",
    "hot-pot",
    "skewer"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "This is the bowl that always sat next to the skewer pot at the night market near my grandmother's place in Chengdu. She kept a rolling pin and a clean cloth just for smashing peanuts, and she refused a blender: 'the machine makes it all the same, and then there is nothing to chew.'",
  "storyZh": "成都外婆家附近的夜市，串串锅边总摆着这碗蘸料。她专门留了根擀面杖和一块净布用来压花生，坚决不用料理机：'机器打出来一个样，就没得嚼头了。'",
  "ingredients": [
    {
      "id": "hs-01",
      "nameEn": "dry-roasted peanuts, unsalted",
      "nameZh": "熟花生仁（原味）",
      "pinyin": "shú huā shēng rén",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Oil-roasted peanuts taste richer but go pasty faster. Sub: dry-roasted almonds or cashews for a milder version.",
      "noteZh": "油炸花生更香但更易返潮变黏。替代：可用干焙杏仁或腰果，风味更柔和。"
    },
    {
      "id": "hs-02",
      "nameEn": "chili flakes, medium grind",
      "nameZh": "辣椒面（中粗）",
      "pinyin": "là jiāo miàn",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes",
      "note": "Chinese chili flakes are coarser and less spicy than cayenne. Sub: 1 tbsp paprika + 1 tsp cayenne.",
      "noteZh": "中式辣椒面比卡宴辣椒粗且不那么辣。替代：1汤匙红椒粉+1茶匙卡宴辣椒粉。"
    },
    {
      "id": "hs-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hs-04",
      "nameEn": "Chinkiang vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "hs-05",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油（芝麻油）",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "hs-06",
      "nameEn": "garlic, finely minced",
      "nameZh": "大蒜（切细末）",
      "pinyin": "dà suàn",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "hs-07",
      "nameEn": "scallion greens, finely chopped",
      "nameZh": "小葱绿（切细）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "hs-08",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "6 g",
      "amountUS": "1.5 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Put the peanuts in a clean cloth or zip-top bag and crush with a rolling pin until you have an uneven mix of coarse pieces and fine powder. Leave about a quarter in large half-pieces.",
      "textZh": "花生装入净布或密封袋，用擀面杖压碎至粗细不匀——粗粒与细粉混合。留约四分之一保持半粒大小。",
      "zhHint": "手工压碎，粗细不匀才香",
      "stateNote": {
        "visual": "Rough rubble of pale beige pieces ranging from whole halves to fine dust",
        "visualZh": "米白色碎粒，从半粒到细粉大小不一",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Crushing releases a warm roasted aroma; stop when no whole peanuts remain but plenty of visible chunks do",
        "signalZh": "压碎时散出烘焙香气；无整粒花生但仍有大量可见碎块时即可停手"
      },
      "tip": "A few seconds in a blender turns this into peanut butter — pulse at most twice if you must use one.",
      "tipZh": "料理机几秒就打成花生酱了；非用不可的话最多点动两次。"
    },
    {
      "text": "Place the chili flakes in a small heatproof bowl. Heat 30 ml (2 tbsp) neutral vegetable oil in a small pan over medium heat until it shimmers, then pour it over the flakes.",
      "textZh": "辣椒面放入耐热小碗。小锅加30毫升（2汤匙）无味植物油，中火加热至泛油纹后浇在辣椒面上。",
      "zhHint": "热油激香辣椒面",
      "stateNote": {
        "visual": "Oil turns a clear bright red and the flakes darken slightly without blackening",
        "visualZh": "油色转为清亮红，辣椒面颜色略深但不发黑",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "A puff of toasty chili aroma rises immediately on pouring; if flakes scorch black, the oil was too hot",
        "signalZh": "浇油瞬间腾起烘烤椒香；若辣椒面发黑说明油温过高"
      }
    },
    {
      "text": "Add light soy sauce, Chinkiang vinegar, sugar, sesame oil and minced garlic to the bloomed chili oil. Whisk 30 seconds until the sugar has dissolved.",
      "textZh": "在爆香的辣油中加入生抽、镇江香醋、白糖、香油和蒜末，搅打30秒至糖化开。",
      "zhHint": "搅打至糖化",
      "stateNote": {
        "visual": "Thin, glossy reddish-brown liquid with garlic flecks evenly suspended",
        "visualZh": "稀薄发亮的红褐色液体，蒜末均匀悬浮",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Liquid no longer separates when the whisk stops; surface is uniformly glossy",
        "signalZh": "停手后酱汁不再分层，表面光泽均匀"
      }
    },
    {
      "text": "Fold the crushed peanuts into the seasoned liquid in two additions, stirring just until coated. Do not stir vigorously or the peanut starch will turn the sauce gluey.",
      "textZh": "分两次把花生碎拌入调味汁中，拌匀裹上即可。切勿用力搅拌，否则花生淀粉会让酱体发黏。",
      "zhHint": "分次轻拌，避免发黏",
      "stateNote": {
        "visual": "Peanut pieces glisten with sauce but the bowl bottom stays free of liquid",
        "visualZh": "花生碎裹汁发亮，碗底无积液",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Sauce clings to the peanuts rather than running off them",
        "signalZh": "酱汁挂在花生碎上而不往下流"
      }
    },
    {
      "text": "Rest 3 minutes so the peanuts absorb some liquid and soften slightly, then stir in the scallion. Serve at room temperature, sprinkled with extra peanut crumble if you like.",
      "textZh": "静置3分钟让花生吸汁略软，再拌入葱花。室温食用，喜欢的话可再撒一层花生碎。",
      "zhHint": "静置吸汁后再放葱花",
      "stateNote": {
        "visual": "Spoonable, slightly clumpy texture; peanuts hold their shape but have lost their raw crunch",
        "visualZh": "可舀起的微团状质地；花生保持形状但生脆感已减",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "A spoonful holds together briefly on the spoon then breaks apart easily",
        "signalZh": "舀起时短暂成团，轻碰即散"
      },
      "tip": "The peanuts keep absorbing liquid — if making ahead, keep the crumble separate and combine just before serving.",
      "tipZh": "花生会持续吸汁——若要提前做，把花生碎单独存放，上桌前再拌。"
    }
  ],
  "tips": [
    "Store the plain sauce for up to 4 days in the fridge; add peanuts only when serving to keep them crunchy.",
    "Add 1 tsp Sichuan peppercorn powder if you want the mala version sold at Chengdu skewer stalls.",
    "Great spooned over cold noodles or smashed cucumbers, not just as a dipping bowl."
  ],
  "tipsZh": [
    "纯酱汁冷藏可存4天；花生碎临上桌前再加，保持香脆。",
    "想要成都串串摊的麻辣版，加1茶匙花椒粉即可。",
    "不只做蘸碟，浇在凉面或拍黄瓜上同样好吃。"
  ],
  "relatedSlugs": [
    "sesame-sauce-dipping-sauce",
    "mala-spicy-dipping-sauce",
    "cilantro-garlic-dipping-sauce"
  ],
  "image": "/images/recipes/laohu-cai-lao-cu-peanut.webp"
};
