import type { Recipe } from "@/lib/types";

/** Garlic Chives Baozi (Jiu Cai Bao) (韭菜包) — Day batch */
export const garlic_chives_baozi: Recipe = {
  "id": "garlic-chives-baozi",
  "slug": "garlic-chives-baozi",
  "titleEn": "Garlic Chives Baozi (Jiu Cai Bao)",
  "titleZh": "韭菜包",
  "pinyin": "jiǔ cài bāo",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 165,
  "servings": 12,
  "version": "family",
  "versionNote": "Home versions add crumbled tofu and dried shrimp to stretch the chives and soak up their moisture. Northern shop versions use a higher ratio of chives to filler and season only with salt and sesame oil, which makes the flavour sharper but the filling much harder to wrap.",
  "versionNoteZh": "家常版加豆腐碎和虾皮，既能撑量又能吸走韭菜的水；北方铺子韭菜比例更高，只靠盐和香油调味，味道更冲但馅也更难包。",
  "tags": [
    "baozi",
    "spring",
    "vegetarian-friendly",
    "make-ahead"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Jiu cai bao is the first bun of spring in northern China — the chives that come up early are thin, dark and ferociously fragrant. Two rules govern it: dry the chives completely after washing, and salt them at the very last second. Salt early and the chives flood the bowl within minutes.",
  "storyZh": "韭菜包是北方的开春第一只包子——头茬韭菜细、色深、香气冲得很。它只有两条铁律：洗后必须彻底晾干，以及临包前最后一刻才加盐。盐放早了，几分钟内韭菜就会把碗底泡成一汪水。",
  "ingredients": [
    {
      "id": "gc-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "gc-02",
      "nameEn": "warm water (35°C)",
      "nameZh": "温水（35°C）",
      "amountMetric": "265 ml",
      "amountUS": "1 cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "gc-03",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "gc-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gc-05",
      "nameEn": "garlic chives",
      "nameZh": "韭菜",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "produce",
      "pantry": "local",
      "note": "Must be bone dry after washing — spread out for 30 minutes",
      "noteZh": "洗后务必彻底晾干——摊开晾30分钟"
    },
    {
      "id": "gc-06",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "150 g",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "gc-07",
      "nameEn": "firm tofu, small dice",
      "nameZh": "老豆腐（切小丁）",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "gc-08",
      "nameEn": "dried shrimp",
      "nameZh": "虾皮",
      "amountMetric": "20 g",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shrimp"
    },
    {
      "id": "gc-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "20 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "gc-10",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gc-11",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "gc-12",
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
      "text": "Mix flour, sugar and yeast in the warm water, knead 12 minutes, then rise 70 minutes.",
      "textZh": "面粉、糖与溶于温水的酵母混匀，揉12分钟，发酵70分钟。",
      "zhHint": "和面一发",
      "stateNote": {
        "visual": "Dough is smooth, ivory and satin-matt, pulling clean from the bowl",
        "visualZh": "面团光滑象牙白、缎面哑光，能干净脱离碗壁",
        "timeRef": "70 minutes",
        "timeRefZh": "70 分钟",
        "signal": "A floured finger dent holds for 3 seconds",
        "signalZh": "沾粉手指按出的凹坑静止3秒"
      }
    },
    {
      "text": "Beat the eggs with a pinch of salt and scramble over medium heat until just set but still glossy and moist, then break up and cool completely.",
      "textZh": "鸡蛋加一小撮盐打散，中火炒到刚凝固但仍油亮湿润，划散后彻底放凉。",
      "zhHint": "炒蛋碎",
      "stateNote": {
        "visual": "Curd pieces are soft pale yellow with no browned edges and no liquid weeping out",
        "visualZh": "蛋碎柔软淡黄，无焦边，也不渗水",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "They look slightly underdone in the pan — they finish setting as they cool",
        "signalZh": "在锅里看起来略欠火候——放凉过程中会继续凝固"
      }
    },
    {
      "text": "Dry-fry the tofu dice over medium-high 4 minutes until gilded, add the dried shrimp and fry 30 seconds more. Cool.",
      "textZh": "中大火干煎豆腐丁4分钟至焦黄，下虾皮再炒30秒，放凉。",
      "zhHint": "煎豆腐虾皮",
      "stateNote": {
        "visual": "Tofu has a dry golden crust and the shrimp have turned translucent-pink and smell strongly of the sea",
        "visualZh": "豆腐结出干爽金壳，虾皮转为透亮的粉红并散发出浓烈海鲜香",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "Shrimp rattle in the pan and nothing sticks to the base",
        "signalZh": "虾皮在锅中哗啦作响，锅底不粘"
      }
    },
    {
      "text": "Wash the chives, spread them out until completely dry, then cut into 1 cm lengths.",
      "textZh": "韭菜洗净摊开彻底晾干，切1厘米段。",
      "zhHint": "晾干切段",
      "stateNote": {
        "visual": "Cut chives are a deep flat green, crisp rather than limp, with no beads of water on the cut ends",
        "visualZh": "韭菜段呈深实绿色、挺括不瘫软，切口处没有水珠",
        "timeRef": "30 minutes drying",
        "timeRefZh": "晾30分钟",
        "signal": "A handful pressed in a paper towel leaves no damp patch",
        "signalZh": "抓一把按在厨房纸上不留湿痕"
      },
      "tip": "This is the step people skip. Wet chives plus salt equals a bowl of green soup.",
      "tipZh": "这步最常被跳过。湿韭菜加盐，等于一碗绿色的汤。"
    },
    {
      "text": "Combine chives, egg, tofu and shrimp. Add sesame oil, soy sauce and white pepper, toss, and add the salt only right before you start wrapping.",
      "textZh": "韭菜、蛋碎、豆腐与虾皮混合，加香油、生抽、白胡椒拌匀；盐留到开始包之前才加。",
      "zhHint": "拌馅",
      "stateNote": {
        "visual": "Filling is loose and matte with the green, yellow and pink components still distinct — no pooled liquid in the bowl",
        "visualZh": "馅料松散哑光，绿、黄、粉三色分明——碗底没有积汁",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Tilt the bowl and nothing runs to the low side",
        "signalZh": "碗倾斜时没有汁水往低处流"
      },
      "tip": "Salt last, and wrap immediately. Chives start releasing water within about five minutes of salting.",
      "tipZh": "盐最后放，放完立刻包。韭菜加盐后大约五分钟就开始出水。"
    },
    {
      "text": "Divide the dough into 12, wrap 2 tbsp filling each, pleat closed, proof 25 minutes, then steam over vigorously boiling water 13 minutes and rest 5 minutes.",
      "textZh": "面团分12份，每份包2汤匙馅并捏褶收口，醒发25分钟后沸水大火蒸13分钟，焖5分钟。",
      "zhHint": "包制与蒸制",
      "stateNote": {
        "visual": "Buns are plump and pale and the chives inside have gone a deeper, softer green without dulling",
        "visualZh": "包子饱满色浅，里面的韭菜变成更深更柔的绿但依然鲜亮",
        "timeRef": "25 minutes proof + 13 minutes steam + 5 minutes rest",
        "timeRefZh": "醒25分钟 + 蒸13分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts out on opening and the base peels cleanly off the parchment",
        "signalZh": "开盖蒸汽喷涌，底部能干净撕离纸"
      }
    }
  ],
  "tips": [
    "Dry the chives completely and salt them last — this is the whole game with jiu cai bao.",
    "Under-cook the eggs slightly; they keep cooking from residual heat and stay tender.",
    "Do not over-steam. Past 13 minutes the chives go olive and smell sulphurous."
  ],
  "tipsZh": [
    "韭菜彻底晾干、盐最后放——韭菜包的成败全在这两件事上。",
    "鸡蛋略欠火候就出锅，余温还会继续加热，这样才嫩。",
    "别蒸过头。超过13分钟韭菜会发橄榄色并出现硫味。"
  ],
  "relatedSlugs": [
    "three-umami-baozi",
    "chive-egg-dumplings",
    "fresh-pork-baozi"
  ],
  "image": "/images/recipes/chive-egg-dumplings.webp"
};
