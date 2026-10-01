import type { Recipe } from "@/lib/types";

/** Sauce-Braised Yellow Croaker (酱焖黄花鱼) (酱焖黄花鱼) — Day batch */
export const sauce_braised_croaker: Recipe = {
  "id": "jiang-men-huang-hua-yu",
  "slug": "sauce-braised-croaker",
  "titleEn": "Sauce-Braised Yellow Croaker (酱焖黄花鱼)",
  "titleZh": "酱焖黄花鱼",
  "pinyin": "jiàng mèn huáng huā yú",
  "cuisine": "北方菜",
  "cuisineEn": "North Chinese Cuisine",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version braises yellow croaker in a gentle soybean-paste sauce, keeping the flesh silky and the bones easy to lift.",
  "versionNoteZh": "家常版用温和的豆酱汁焖黄花鱼，肉嫩、骨易挑。",
  "tags": [
    "croaker",
    "braised",
    "home-style",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "Along the Jiaodong coast, yellow croaker is the everyday fish — cheap, sweet, and forgiving in a covered pot.",
  "storyZh": "胶东沿海，黄花鱼是家常鱼：便宜、清甜、焖锅里最不挑人。",
  "ingredients": [
    {
      "id": "sbc-01",
      "nameEn": "yellow croaker (about 350 g each)",
      "nameZh": "黄花鱼（每条约350克）",
      "pinyin": "huáng huā yú",
      "amountMetric": "700 g",
      "amountUS": "1.5 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Score the sides.",
      "noteZh": "两面打花刀。"
    },
    {
      "id": "sbc-02",
      "nameEn": "doubanjiang (fermented chili bean paste)",
      "nameZh": "豆瓣酱",
      "pinyin": "dòu bàn jiàng",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "sbc-03",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "pinyin": "jiāng",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sbc-04",
      "nameEn": "garlic, smashed",
      "nameZh": "蒜（拍碎）",
      "pinyin": "suàn",
      "amountMetric": "10 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sbc-05",
      "nameEn": "scallion, cut into sections",
      "nameZh": "葱（切段）",
      "pinyin": "cōng",
      "amountMetric": "30 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sbc-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sbc-07",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "pinyin": "liào jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cooking-wine"
    }
  ],
  "steps": [
    {
      "text": "Pat croaker dry; sear skin-side down 2 minutes until set; remove.",
      "textZh": "黄花鱼擦干，皮朝下入锅煎2分钟定型，盛出。",
      "zhHint": "煎鱼",
      "stateNote": {
        "visual": "Skin turns opaque and lifts cleanly.",
        "visualZh": "鱼皮转白、离锅干净。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "No resistance when lifted.",
        "signalZh": "轻抬无阻力。"
      }
    },
    {
      "text": "In the same pan, soften ginger, garlic, and doubanjiang over medium heat.",
      "textZh": "原锅下姜蒜与豆瓣酱，中火炒软。",
      "zhHint": "炒酱",
      "stateNote": {
        "visual": "Paste darkens and smells savory.",
        "visualZh": "酱色转深、咸香起。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "medium",
        "signal": "Aroma is rounded, not raw.",
        "signalZh": "香气圆润、无生酱味。"
      }
    },
    {
      "text": "Add soy, cooking wine, and 250 ml water; bring to a simmer.",
      "textZh": "加生抽、料酒与250毫升水，煮到微沸。",
      "zhHint": "加水煮开",
      "stateNote": {
        "visual": "Liquid simmers with a thin red film.",
        "visualZh": "汤面微沸、浮起红膜。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Bubbles form steadily.",
        "signalZh": "气泡稳定泛起。"
      }
    },
    {
      "text": "Return fish; cover; braise 12 minutes, basting twice.",
      "textZh": "回鱼加盖焖12分钟，中途浇汁两次。",
      "zhHint": "焖煮",
      "stateNote": {
        "visual": "Fish turns opaque and sauce thickens.",
        "visualZh": "鱼肉转白、汁渐浓。",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low",
        "signal": "Flesh separates from the bone easily.",
        "signalZh": "肉易离骨。"
      }
    },
    {
      "text": "Uncover; reduce 2 minutes; scatter scallion and serve.",
      "textZh": "开盖收汁2分钟，撒葱段出锅。",
      "zhHint": "收汁出锅",
      "stateNote": {
        "visual": "Sauce glosses the fish.",
        "visualZh": "汁裹鱼身发亮。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Coating shines and clings.",
        "signalZh": "挂汁发亮。"
      }
    }
  ],
  "tips": [
    "A tight lid keeps the fish from drying out.",
    "Doubanjiang brings salt and depth — go light on extra soy.",
    "Baste so the top side stays moist."
  ],
  "tipsZh": [
    "盖严锅盖，鱼不干。",
    "豆瓣酱已有咸鲜，生抽少放。",
    "浇汁让朝上的一面也润。"
  ],
  "commonMistakes": [
    {
      "mistake": "Flipping too hard and shredding the fish.",
      "mistakeZh": "翻太狠把鱼弄碎。",
      "fix": "Lift with two spatulas and turn gently once.",
      "fixZh": "两铲托起、只翻一次。"
    },
    {
      "mistake": "Skipping the sear so the flesh sticks.",
      "mistakeZh": "不煎直接焖，肉粘锅。",
      "fix": "Always sear the skin first.",
      "fixZh": "先煎皮再焖。"
    }
  ],
  "variations": [
    "Add soft tofu cubes in the last 5 minutes.",
    "Use black bean sauce instead of doubanjiang for a milder plate."
  ],
  "variationsZh": [
    "最后5分钟加豆腐块。",
    "豆瓣酱换豆豉，味更淡。"
  ],
  "relatedSlugs": [
    "braised-fish-cubes",
    "sweet-sour-carp",
    "dry-braised-crucian",
    "pan-fried-hairtail",
    "scallion-oil-turbot",
    "tomato-fish-slices",
    "salt-pepper-croaker",
    "stir-fried-shrimp",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
