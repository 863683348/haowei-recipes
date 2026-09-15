import type { Recipe } from "@/lib/types";

/** Lap Cheong Rib Claypot (腊味排骨煲) (腊味排骨煲) — Day batch */
export const lap_cheong_rib_claypot: Recipe = {
  "id": "lap-cheong-rib-claypot",
  "slug": "lap-cheong-rib-claypot",
  "titleEn": "Lap Cheong Rib Claypot (腊味排骨煲)",
  "titleZh": "腊味排骨煲",
  "pinyin": "là wèi pái gǔ bāo",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 3,
  "version": "family",
  "versionNote": "广式腊味排骨煲，腊肠甜咸与排骨鲜香完美融合。",
  "versionNoteZh": "广式腊味排骨煲，腊肠甜咸与排骨鲜香完美融合。",
  "tags": [
    "claypot",
    "pork",
    "lap-cheong",
    "cantonese",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Lap cheong claypot is a Cantonese Sunday tradition. The cured sausage's sweetness seeps into the ribs, creating a complex savory-sweet broth that disappears fast.",
  "storyZh": "腊味排骨煲是广东周日的传统。腊肠的甜味渗入排骨，形成咸甜交织的汤汁，瞬间消失。",
  "ingredients": [
    {
      "id": "lrc-1",
      "nameEn": "pork ribs, 3cm chunks",
      "nameZh": "排骨块",
      "amountMetric": "500 g",
      "amountUS": "1.1 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "lrc-2",
      "nameEn": "lap cheong, sliced",
      "nameZh": "腊肠片",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "lrc-3",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "lrc-4",
      "nameEn": "garlic cloves, crushed",
      "nameZh": "蒜瓣",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "lrc-5",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "lrc-6",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Parboil ribs 5 minutes, drain and rinse to remove impurities.",
      "textZh": "排骨焯水5分钟，捞出冲洗去杂质。",
      "stateNote": {
        "visual": "Grey foam rises, water clouds.",
        "visualZh": "灰色浮沫升起，水变浑。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Foam is grey and dense.",
        "signalZh": "浮沫灰密。"
      }
    },
    {
      "text": "Sear ribs in claypot 3 minutes until golden.",
      "textZh": "砂锅煎排骨3分钟至金黄。",
      "stateNote": {
        "visual": "Surface browns, fat renders.",
        "visualZh": "表面焦黄，油脂析出。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Sizzle is loud.",
        "signalZh": "滋滋声大。"
      }
    },
    {
      "text": "Add ginger and garlic, stir 30 seconds.",
      "textZh": "下姜片和蒜，翻炒30秒。",
      "stateNote": {
        "visual": "Aromatics fragrant.",
        "visualZh": "香料出香。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Pungent aroma.",
        "signalZh": "辛辣香气。"
      }
    },
    {
      "text": "Add lap cheong, pour in 500ml water, bring to boil.",
      "textZh": "下腊肠，冲入500毫升水，大火烧开。",
      "stateNote": {
        "visual": "Broth turns amber.",
        "visualZh": "汤汁变琥珀色。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Rolling boil.",
        "signalZh": "滚沸。"
      }
    },
    {
      "text": "Reduce to low, cover and simmer 25 minutes.",
      "textZh": "转小火，盖盖焖25分钟。",
      "stateNote": {
        "visual": "Broth simmers, ribs tender.",
        "visualZh": "汤汁微滚，排骨软。",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "low",
        "signal": "Steam escapes steadily.",
        "signalZh": "蒸汽匀速逸出。"
      }
    },
    {
      "text": "Add soy sauce and wine, simmer 5 more minutes. Serve.",
      "textZh": "加生抽和绍兴酒，再煮5分钟，热盛。",
      "stateNote": {
        "visual": "Broth is rich, ribs yield to bite.",
        "visualZh": "汤汁浓郁，排骨一咬即脱。",
        "signal": "Bone pulls away easily.",
        "signalZh": "骨易分离。"
      }
    }
  ],
  "tips": [
    "Parboiling removes gaminess.",
    "Add lap cheong in last 10 minutes to prevent overcooking."
  ],
  "tipsZh": [
    "焯水去腥。",
    "腊肠最后10分钟放，防止过熟。"
  ],
  "relatedSlugs": [
    "braised-pork-shank-bones",
    "clay-pot-meatballs"
  ],
  "image": "/images/recipes/lap-cheong-rib-claypot.webp"
};
