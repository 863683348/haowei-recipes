import type { Recipe } from "@/lib/types";

/** Enoki Mushroom and Tofu Clay Pot (金针菇豆腐煲) (金针菇豆腐煲) — Day batch */
export const enoki_tofu_clay_pot: Recipe = {
  "id": "jin-zhen-gu-dou-fu-bao",
  "slug": "enoki-tofu-clay-pot",
  "titleEn": "Enoki Mushroom and Tofu Clay Pot (金针菇豆腐煲)",
  "titleZh": "金针菇豆腐煲",
  "pinyin": "jīn zhēn gū dòu fu bāo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Home",
  "regionZh": "家常",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version builds it in a saucepan with a simple soy-garlic broth; restaurant version finishes in a clay pot over a flame so the base caramelises and the pot keeps it bubbling at the table.",
  "versionNoteZh": "家常版用深锅加酱油蒜汤煮；酒楼版收在砂锅里明火上，锅底微焦、上桌还冒泡。",
  "tags": [
    "tofu",
    "mushroom",
    "clay-pot",
    "vegetarian",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "A cold-weather one-pot: enoki gives a springy bite and a natural glutinous broth, tofu carries the sauce, and the clay pot keeps it hot long after it leaves the stove.",
  "storyZh": "天冷时的一锅出：金针菇脆弹、汤自然发稠，豆腐吸味，砂锅离火还热很久。",
  "ingredients": [
    {
      "id": "jzgdfb-01",
      "nameEn": "firm tofu, cut into 2 cm cubes",
      "nameZh": "北豆腐（切2厘米块）",
      "pinyin": "běi dòu fu",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "jzgdfb-02",
      "nameEn": "enoki mushrooms, roots trimmed",
      "nameZh": "金针菇（去根）",
      "pinyin": "jīn zhēn gū",
      "amountMetric": "300 g",
      "amountUS": "2 packs",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "jzgdfb-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（剁末）",
      "pinyin": "suàn",
      "amountMetric": "12 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "jzgdfb-04",
      "nameEn": "ginger, sliced thin",
      "nameZh": "姜（切片）",
      "pinyin": "jiāng",
      "amountMetric": "6 g",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "jzgdfb-05",
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
      "id": "jzgdfb-06",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "jzgdfb-07",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "jzgdfb-08",
      "nameEn": "vegetable stock",
      "nameZh": "素高汤",
      "pinyin": "sù gāo tāng",
      "amountMetric": "250 ml",
      "amountUS": "1 cup",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "jzgdfb-09",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "jzgdfb-10",
      "nameEn": "scallion, chopped",
      "nameZh": "葱（切花）",
      "pinyin": "cōng",
      "amountMetric": "15 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Press tofu 10 minutes and cube it; trim enoki roots and separate into small bundles.",
      "textZh": "豆腐压10分钟切块；金针菇去根、分成小束。",
      "zhHint": "备料",
      "stateNote": {
        "visual": "Tofu holds firm edges; enoki bundles are loose and dry.",
        "visualZh": "豆腐边角挺、金针菇松散干爽。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No water on the board.",
        "signalZh": "砧板不积水。"
      }
    },
    {
      "text": "Fry tofu cubes in a little oil over medium heat until two sides are golden; set aside.",
      "textZh": "少许油中火将豆腐两面煎金黄，盛出备用。",
      "zhHint": "煎豆腐",
      "stateNote": {
        "visual": "Two faces are deep gold; the cube sounds light when moved.",
        "visualZh": "两面深金，铲动手感轻。",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "Cubes release from the pan cleanly.",
        "signalZh": "豆腐能完整离锅。"
      }
    },
    {
      "text": "In the same pot, fry garlic and ginger 30 seconds until fragrant.",
      "textZh": "原锅爆香蒜末姜片30秒。",
      "zhHint": "爆香",
      "stateNote": {
        "visual": "Garlic is pale gold; oil is glossy and aromatic.",
        "visualZh": "蒜浅金、油亮出香。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "No browning or bitter smell.",
        "signalZh": "不焦不苦。"
      }
    },
    {
      "text": "Add both soy sauces, oyster sauce and stock; bring to a simmer.",
      "textZh": "加生抽、老抽、蚝油与素高汤，煮至微沸。",
      "zhHint": "调汤",
      "stateNote": {
        "visual": "Broth turns a clear amber and small bubbles break the surface.",
        "visualZh": "汤转清亮琥珀色、冒小泡。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Steam smells savoury and slightly sweet.",
        "signalZh": "热气咸鲜微甜。"
      }
    },
    {
      "text": "Return tofu, pile enoki on top, cover and simmer 8 minutes.",
      "textZh": "回豆腐，金针菇铺在上面，加盖焖8分钟。",
      "zhHint": "焖煲",
      "stateNote": {
        "visual": "Enoki wilts and releases a silky broth; sauce reduces by a third.",
        "visualZh": "金针菇塌软出滑汁、汤收三分之一。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-low",
        "signal": "Broth coats the back of a spoon lightly.",
        "signalZh": "汤汁薄挂勺背。"
      }
    },
    {
      "text": "Thicken with cornstarch slurry, scatter scallion and serve bubbling in the pot.",
      "textZh": "淀粉水勾芡，撒葱花，连锅冒泡上桌。",
      "zhHint": "收汁",
      "stateNote": {
        "visual": "Sauce is glossy and the surface still trembles with heat.",
        "visualZh": "汁发亮、表面随热轻颤。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Bubbles break at the rim steadily.",
        "signalZh": "边缘持续冒泡。"
      }
    }
  ],
  "tips": [
    "Do not wash enoki under running water — it turns slimy.",
    "Fry the tofu first so it holds up in the broth.",
    "Vegetarian oyster sauce keeps the whole dish meat-free."
  ],
  "tipsZh": [
    "金针菇别用水冲，会发黏。",
    "豆腐先煎，煮时才不散。",
    "用素蚝油即可全素。"
  ],
  "commonMistakes": [
    {
      "mistake": "Adding raw tofu straight to the broth so it crumbles.",
      "mistakeZh": "生豆腐直接下汤，煮碎了。",
      "fix": "Press and pan-fry it first.",
      "fixZh": "先压水再煎。"
    },
    {
      "mistake": "Overcooking enoki until it turns rubbery.",
      "mistakeZh": "金针菇煮太久发橡皮。",
      "fix": "8 minutes covered, no more.",
      "fixZh": "加盖8分钟即止。"
    }
  ],
  "variations": [
    "Add glass noodles to soak up the broth.",
    "Add a spoon of doubanjiang for a spicy version.",
    "Top with fried shallots before serving."
  ],
  "variationsZh": [
    "加粉丝吸汤。",
    "加一勺豆瓣酱做辣版。",
    "出锅撒油葱酥。"
  ],
  "relatedSlugs": [
    "braised-tofu",
    "tomato-tofu",
    "three-delicacy-tofu-soup",
    "iron-plate-tofu",
    "clay-pot-tofu"
  ],
  "image": "/images/recipes/clay-pot-tofu.webp"
};
