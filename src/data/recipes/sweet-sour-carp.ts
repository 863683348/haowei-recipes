import type { Recipe } from "@/lib/types";

/** Sweet and Sour Carp (糖醋鲤鱼) (糖醋鲤鱼) — Day batch */
export const sweet_sour_carp: Recipe = {
  "id": "tang-cu-li-yu",
  "slug": "sweet-sour-carp",
  "titleEn": "Sweet and Sour Carp (糖醋鲤鱼)",
  "titleZh": "糖醋鲤鱼",
  "pinyin": "táng cù lǐ yú",
  "cuisine": "鲁菜",
  "cuisineEn": "Shandong Cuisine",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version scores the carp, fries it crisp, and ladles a glossy sweet-sour sauce over the top at the table.",
  "versionNoteZh": "家常版给鲤鱼打花刀、炸到酥脆，上桌前淋上亮泽糖醋汁。",
  "tags": [
    "carp",
    "sweet-sour",
    "banquet",
    "crispy"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the showpiece of a Shandong banquet — the carp arches like it's still swimming, and the sauce is pure theatre.",
  "storyZh": "这是鲁菜宴席的门面：鲤鱼弓身如游，糖醋汁是整桌的戏。",
  "ingredients": [
    {
      "id": "tsc-01",
      "nameEn": "whole carp (about 600 g), scored",
      "nameZh": "鲤鱼（约600克，打花刀）",
      "pinyin": "lǐ yú",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask the fishmonger to score it.",
      "noteZh": "让鱼贩打花刀更省力。"
    },
    {
      "id": "tsc-02",
      "nameEn": "ginger, minced",
      "nameZh": "姜（剁末）",
      "pinyin": "jiāng",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tsc-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（剁末）",
      "pinyin": "suàn",
      "amountMetric": "8 g",
      "amountUS": "1.5 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tsc-04",
      "nameEn": "scallion, minced",
      "nameZh": "葱（剁末）",
      "pinyin": "cōng",
      "amountMetric": "15 g",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "tsc-05",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "60 g",
      "amountUS": "½ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "tsc-06",
      "nameEn": "tomato",
      "nameZh": "番茄（取酱感）",
      "pinyin": "fān qié",
      "amountMetric": "120 g",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "tsc-07",
      "nameEn": "chinkiang vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "tsc-08",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "50 g",
      "amountUS": "¼ cup",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat carp dry; dust thickly with cornstarch, working it into the scores.",
      "textZh": "鲤鱼擦干，厚裹玉米淀粉，揉进花刀缝。",
      "zhHint": "裹粉",
      "stateNote": {
        "visual": "Every cut is packed with white powder.",
        "visualZh": "每道刀缝都填进白粉。",
        "signal": "No wet spots remain.",
        "signalZh": "不见湿润处。"
      }
    },
    {
      "text": "Fry in hot oil 4 minutes per side until the crust is shatter-crisp; rest.",
      "textZh": "热油炸每面4分钟至外壳酥脆，捞出沥油。",
      "zhHint": "炸鱼",
      "stateNote": {
        "visual": "Crust is deep amber and rigid.",
        "visualZh": "外壳深琥珀、硬挺。",
        "timeRef": "8 minutes total",
        "timeRefZh": "共8分钟",
        "heat": "high",
        "signal": "Tapping the fish sounds hollow.",
        "signalZh": "敲之有空响。"
      }
    },
    {
      "text": "In a small pan, soften tomato with a splash of oil over medium heat.",
      "textZh": "小锅放少许油中火炒软番茄。",
      "zhHint": "炒番茄",
      "stateNote": {
        "visual": "Tomato breaks down into a loose paste.",
        "visualZh": "番茄化开成稀酱。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Pulp loosens and darkens slightly.",
        "signalZh": "果肉松散微深。"
      }
    },
    {
      "text": "Add vinegar, sugar, ginger, garlic, scallion, and 60 ml water; simmer to a glossy syrup.",
      "textZh": "下醋、糖、姜蒜葱与60毫升水，收成亮浆。",
      "zhHint": "调糖醋汁",
      "stateNote": {
        "visual": "Sauce coats a spoon and sheets off slowly.",
        "visualZh": "汁挂勺、缓慢流下。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Sweet-sour aroma is balanced, not sharp.",
        "signalZh": "糖醋酸香平衡、不刺鼻。"
      }
    },
    {
      "text": "Ladle the hot sauce over the crisp carp and serve immediately.",
      "textZh": "热汁淋上酥鱼，即刻上桌。",
      "zhHint": "淋汁上桌",
      "stateNote": {
        "visual": "Sauce pools and glistens on the crust.",
        "visualZh": "汁在鱼身汇聚发亮。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Steam rises as sauce meets crust.",
        "signalZh": "汁遇脆壳腾起热气。"
      }
    }
  ],
  "tips": [
    "Score deep but not through the bone for maximum crisp surface.",
    "Keep the sauce warm while the fish fries so both hit the table hot.",
    "Balance the vinegar last — taste and add a splash more if needed."
  ],
  "tipsZh": [
    "花刀深而不破骨，脆面最大。",
    "鱼炸时汁保温，两者同步上桌。",
    "醋最后调，尝过可再补一勺。"
  ],
  "commonMistakes": [
    {
      "mistake": "Under-dusting so the crust slides off.",
      "mistakeZh": "粉太薄，外壳脱落。",
      "fix": "Coat until no wet skin shows.",
      "fixZh": "裹到不见湿皮。"
    },
    {
      "mistake": "Sauce too thin and it soaks the crisp fish.",
      "mistakeZh": "汁太稀会塌掉脆壳。",
      "fix": "Reduce until it sheets off a spoon.",
      "fixZh": "收汁到挂勺流下。"
    }
  ],
  "variations": [
    "Use a whole sea bass for a smaller, milder version.",
    "Add pineapple chunks for a fruit-sweet variation."
  ],
  "variationsZh": [
    "换成整条鲈鱼，个头小、味更淡。",
    "加菠萝块，果香版糖醋。"
  ],
  "relatedSlugs": [
    "braised-fish-cubes",
    "dry-braised-crucian",
    "sauce-braised-croaker",
    "pan-fried-hairtail",
    "scallion-oil-turbot",
    "tomato-fish-slices",
    "salt-pepper-croaker",
    "stir-fried-shrimp",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
