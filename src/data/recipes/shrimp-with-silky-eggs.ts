import type { Recipe } from "@/lib/types";

/** Shrimp with Silky Eggs (滑蛋虾仁) (滑蛋虾仁) — Day batch */
export const shrimp_with_silky_eggs: Recipe = {
  "id": "hua-dan-xia-ren",
  "slug": "shrimp-with-silky-eggs",
  "titleEn": "Shrimp with Silky Eggs (滑蛋虾仁)",
  "titleZh": "滑蛋虾仁",
  "pinyin": "huá dàn xiā rén",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version cooks the eggs low and slow in one pan so they set into soft curds; restaurant version uses a screaming-hot wok and a ladle of hot oil for a puffier, glossier finish.",
  "versionNoteZh": "家常版全程小火单锅慢推，蛋液结成软嫩絮状；酒楼版用猛火旺油一气呵成，蛋更蓬松发亮。",
  "tags": [
    "cantonese",
    "shrimp",
    "egg",
    "20-min",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "The Cantonese test of a home cook: eggs that stay soft and just-set, never dry. Shrimp go in first so their sweet liquor seasons the custard.",
  "storyZh": "粤菜里考较手艺的一道：蛋要刚凝就出锅，软而不老。虾仁先下，鲜汁正好给蛋液打底。",
  "ingredients": [
    {
      "id": "hd-01",
      "nameEn": "shelled shrimp, deveined",
      "nameZh": "虾仁（去虾线）",
      "pinyin": "xiā rén",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp",
      "note": "Pat very dry so the egg does not go watery.",
      "noteZh": "一定要吸干水，蛋液才不澥。"
    },
    {
      "id": "hd-02",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "4 pc",
      "amountUS": "4 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "hd-03",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "6 g",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "hd-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "hd-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "pinyin": "yán",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "hd-06",
      "nameEn": "scallion, finely sliced",
      "nameZh": "葱（切细花）",
      "pinyin": "cōng",
      "amountMetric": "15 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "hd-07",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "hd-08",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Toss shrimp with 1 g salt, half the cornstarch and the Shaoxing wine; rest 10 minutes.",
      "textZh": "虾仁加1克盐、一半淀粉与黄酒抓匀，静置10分钟。",
      "zhHint": "腌虾",
      "stateNote": {
        "visual": "Shrimp turn glossy and slightly tacky.",
        "visualZh": "虾仁发亮、略发黏。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No liquid pools in the bowl.",
        "signalZh": "碗底不积水。"
      }
    },
    {
      "text": "Beat eggs with remaining cornstarch, remaining salt and white pepper until completely uniform.",
      "textZh": "鸡蛋加剩余淀粉、盐与白胡椒粉，彻底打匀。",
      "zhHint": "打蛋",
      "stateNote": {
        "visual": "Mixture is one even pale yellow with no white streaks.",
        "visualZh": "蛋液色泽均匀、无蛋白丝。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Lift the whisk: it runs off in a thin ribbon.",
        "signalZh": "提起打蛋器呈细线流下。"
      }
    },
    {
      "text": "Sear shrimp in 15 ml oil over medium-high heat 40 seconds until just pink; remove to a bowl.",
      "textZh": "15毫升油中火下虾仁炒40秒至刚变粉，盛出。",
      "zhHint": "滑虾",
      "stateNote": {
        "visual": "Shrimp curl into a loose C and turn opaque.",
        "visualZh": "虾仁卷成松C形、转白。",
        "timeRef": "40 seconds",
        "timeRefZh": "40 秒",
        "heat": "medium-high",
        "signal": "Still springy, not firm.",
        "signalZh": "仍有弹性、不发硬。"
      }
    },
    {
      "text": "Lower heat to low; pour egg mixture into the pan with remaining oil and let it sit 15 seconds.",
      "textZh": "转小火，倒入蛋液与余油，静置15秒。",
      "zhHint": "入蛋",
      "stateNote": {
        "visual": "Edges just begin to set while the centre stays liquid.",
        "visualZh": "边缘刚凝、中间仍流动。",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "low",
        "signal": "A thin opaque rim forms.",
        "signalZh": "出现一圈薄白边。"
      }
    },
    {
      "text": "Push the set curds from the edge toward the centre in slow sweeps; fold in the shrimp.",
      "textZh": "用锅铲从边缘向中间慢推，折入虾仁。",
      "zhHint": "推蛋",
      "stateNote": {
        "visual": "Soft folds form; the surface still looks wet and glossy.",
        "visualZh": "形成软絮，表面仍湿润发亮。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "low",
        "signal": "Eggs hold a shape but jiggle.",
        "signalZh": "蛋已成形但会颤。"
      }
    },
    {
      "text": "Turn off the heat, scatter scallion and serve immediately.",
      "textZh": "关火撒葱花，立即上桌。",
      "zhHint": "出锅",
      "stateNote": {
        "visual": "Creamy curds with pink shrimp peeking through.",
        "visualZh": "奶白蛋絮中透出粉虾。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "No browned spots, no liquid runoff.",
        "signalZh": "无焦斑、不澥水。"
      }
    }
  ],
  "tips": [
    "Low heat is the whole trick — a hot pan scrambles the eggs.",
    "Cornstarch in the egg keeps the curds from weeping.",
    "Pull the pan a beat before it looks done; carryover heat finishes it."
  ],
  "tipsZh": [
    "小火是全部关键，锅太热就成炒蛋了。",
    "蛋液里加淀粉，成品不澥水。",
    "看着还差一点就出锅，余温会继续熟。"
  ],
  "commonMistakes": [
    {
      "mistake": "Cooking on high heat so the eggs turn dry and browned.",
      "mistakeZh": "火太大，蛋发干发黄。",
      "fix": "Keep it on low and pull early.",
      "fixZh": "全程小火，提前出锅。"
    },
    {
      "mistake": "Adding wet shrimp, which thins the custard.",
      "mistakeZh": "虾仁带水，蛋液被稀释。",
      "fix": "Pat shrimp bone-dry before marinating.",
      "fixZh": "腌前把虾仁彻底吸干。"
    }
  ],
  "variations": [
    "Add a handful of peas for colour.",
    "Swap shrimp for crab meat.",
    "Finish with a few drops of sesame oil."
  ],
  "variationsZh": [
    "加一把豌豆配色。",
    "虾仁换成蟹肉。",
    "出锅前淋几滴香油。"
  ],
  "relatedSlugs": [
    "stir-fried-shrimp",
    "shrimp-scrambled-eggs",
    "cucumber-shrimp",
    "asparagus-shrimp",
    "salt-pepper-whole-shrimp"
  ],
  "image": "/images/recipes/cashew-shrimp.webp"
};
