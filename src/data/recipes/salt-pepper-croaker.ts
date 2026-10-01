import type { Recipe } from "@/lib/types";

/** Salt and Pepper Yellow Croaker (椒盐小黄鱼) (椒盐小黄鱼) — Day batch */
export const salt_pepper_croaker: Recipe = {
  "id": "jiao-yan-xiao-huang-yu",
  "slug": "salt-pepper-croaker",
  "titleEn": "Salt and Pepper Yellow Croaker (椒盐小黄鱼)",
  "titleZh": "椒盐小黄鱼",
  "pinyin": "jiāo yán xiǎo huáng yú",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version double-fries small croaker dusted in spiced cornstarch, then tosses it with scallion, garlic, and white pepper.",
  "versionNoteZh": "家常版把小黄鱼裹香料淀粉两次炸，再与葱蒜白胡椒同抛。",
  "tags": [
    "croaker",
    "crispy",
    "salt-pepper",
    "appetizer"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Salt-and-pepper fry is the bar snack of the Yangtze delta — small fish, big crunch, impossible to stop eating.",
  "storyZh": "椒盐炸是长三角的下酒小吃：鱼小、脆大、停不下嘴。",
  "ingredients": [
    {
      "id": "jyc-01",
      "nameEn": "small yellow croaker (about 80 g each)",
      "nameZh": "小黄鱼（每条约80克）",
      "pinyin": "xiǎo huáng yú",
      "amountMetric": "500 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Score and dry.",
      "noteZh": "打花刀擦干。"
    },
    {
      "id": "jyc-02",
      "nameEn": "ginger, minced",
      "nameZh": "姜（剁末）",
      "pinyin": "jiāng",
      "amountMetric": "8 g",
      "amountUS": "1.5 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "jyc-03",
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
      "id": "jyc-04",
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
      "id": "jyc-05",
      "nameEn": "white pepper",
      "nameZh": "白胡椒",
      "pinyin": "bái hú jiāo",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "jyc-06",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "pinyin": "liào jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cooking-wine"
    },
    {
      "id": "jyc-07",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "50 g",
      "amountUS": "⅓ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    }
  ],
  "steps": [
    {
      "text": "Marinate croaker with ginger, cooking wine, and white pepper 15 minutes; pat dry.",
      "textZh": "小黄鱼加姜、料酒、白胡椒腌15分钟，擦干。",
      "zhHint": "腌鱼擦干",
      "stateNote": {
        "visual": "Fish looks dry and faintly aromatic.",
        "visualZh": "鱼干爽、微有香。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "No surface moisture.",
        "signalZh": "表面无水。"
      }
    },
    {
      "text": "Dust with cornstarch; first fry at 170°C 3 minutes until pale; rest 2 minutes.",
      "textZh": "裹淀粉，170°C初炸3分钟至浅黄，静置2分钟。",
      "zhHint": "初炸",
      "stateNote": {
        "visual": "Crust is set but pale.",
        "visualZh": "外壳定型、色浅。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Fish floats and firms.",
        "signalZh": "鱼浮起、变硬。"
      }
    },
    {
      "text": "Second fry at 190°C 90 seconds until deep gold and crisp.",
      "textZh": "190°C复炸90秒至深金酥脆。",
      "zhHint": "复炸",
      "stateNote": {
        "visual": "Crust is shatter-crisp and deep amber.",
        "visualZh": "外壳酥脆、深琥珀。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "Tapping sounds hollow and sharp.",
        "signalZh": "敲之空响清脆。"
      }
    },
    {
      "text": "In a clean wok, sizzle scallion, garlic, and white pepper 20 seconds.",
      "textZh": "净锅下葱蒜白胡椒，爆20秒。",
      "zhHint": "爆香料",
      "stateNote": {
        "visual": "Aromatics sizzle and perfume the pan.",
        "visualZh": "小料滋响、满锅香。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Fragrance is sharp and peppery.",
        "signalZh": "香气辛香带椒。"
      }
    },
    {
      "text": "Toss the hot fish with the aromatics and a pinch of salt; serve immediately.",
      "textZh": "热鱼与香料及少许盐同抛，即刻上桌。",
      "zhHint": "抛匀出锅",
      "stateNote": {
        "visual": "Fish glistens and is dusted with pepper specks.",
        "visualZh": "鱼发亮、缀满椒粒。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Crust stays loud and crisp.",
        "signalZh": "外壳仍脆响。"
      }
    }
  ],
  "tips": [
    "Double-fry is the secret to a crust that stays crisp.",
    "Drain the first fry on a rack, not paper, to keep it dry.",
    "Toss quickly so the fish doesn't steam."
  ],
  "tipsZh": [
    "复炸是外壳久脆的秘诀。",
    "初炸用网架沥，别用纸，保干。",
    "快速抛匀，鱼别被捂软。"
  ],
  "commonMistakes": [
    {
      "mistake": "Single-fry so the crust goes soggy.",
      "mistakeZh": "只炸一次，外壳回软。",
      "fix": "Always rest and re-fry.",
      "fixZh": "必静置再复炸。"
    },
    {
      "mistake": "Tossing too long and steaming the fish.",
      "mistakeZh": "抛太久把鱼捂软。",
      "fix": "Toss 10 seconds max off heat.",
      "fixZh": "离火最多抛10秒。"
    }
  ],
  "variations": [
    "Add a few dried chilies for heat.",
    "Use the same method for small squid."
  ],
  "variationsZh": [
    "加几颗干辣椒提辣。",
    "同样做法换小鱿鱼。"
  ],
  "relatedSlugs": [
    "braised-fish-cubes",
    "sweet-sour-carp",
    "dry-braised-crucian",
    "sauce-braised-croaker",
    "pan-fried-hairtail",
    "scallion-oil-turbot",
    "tomato-fish-slices",
    "stir-fried-shrimp",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
