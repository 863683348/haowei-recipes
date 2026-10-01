import type { Recipe } from "@/lib/types";

/** Pan-Fried Hairtail (香煎带鱼) (香煎带鱼) — Day batch */
export const pan_fried_hairtail: Recipe = {
  "id": "xiang-jian-dai-yu",
  "slug": "pan-fried-hairtail",
  "titleEn": "Pan-Fried Hairtail (香煎带鱼)",
  "titleZh": "香煎带鱼",
  "pinyin": "xiāng jiān dài yú",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Coastal East China",
  "regionZh": "华东沿海",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version dusts hairtail with cornstarch and pan-fries it until the silver skin turns crackling crisp.",
  "versionNoteZh": "家常版给带鱼裹薄淀粉，煎到银皮酥脆。",
  "tags": [
    "hairtail",
    "pan-fried",
    "weeknight",
    "crispy"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Hairtail is the fish of my childhood winter — cheap, oily, and impossibly crisp when fried right.",
  "storyZh": "带鱼是我儿时冬天的鱼：便宜、油润，煎对了酥得不行。",
  "ingredients": [
    {
      "id": "pjh-01",
      "nameEn": "hairtail, cut into segments",
      "nameZh": "带鱼（切段）",
      "pinyin": "dài yú",
      "amountMetric": "500 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Rinse and dry the silver skin.",
      "noteZh": "银鳞冲净擦干。"
    },
    {
      "id": "pjh-02",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "pinyin": "jiāng",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pjh-03",
      "nameEn": "scallion, cut into sections",
      "nameZh": "葱（切段）",
      "pinyin": "cōng",
      "amountMetric": "20 g",
      "amountUS": "1.5 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "pjh-04",
      "nameEn": "white pepper",
      "nameZh": "白胡椒",
      "pinyin": "bái hú jiāo",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "pjh-05",
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
      "id": "pjh-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "30 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    }
  ],
  "steps": [
    {
      "text": "Marinate hairtail with ginger, scallion, cooking wine, and white pepper 15 minutes; pat dry.",
      "textZh": "带鱼加姜葱料酒白胡椒腌15分钟，擦干。",
      "zhHint": "腌鱼擦干",
      "stateNote": {
        "visual": "Segments look dry and faintly fragrant.",
        "visualZh": "鱼段干爽、微有香气。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "No surface moisture remains.",
        "signalZh": "表面无水。"
      }
    },
    {
      "text": "Dust segments lightly with cornstarch on both sides.",
      "textZh": "鱼段两面薄薄裹一层玉米淀粉。",
      "zhHint": "裹粉",
      "stateNote": {
        "visual": "Skin shows a thin white film.",
        "visualZh": "鱼皮覆一层白膜。",
        "signal": "Powder clings without clumps.",
        "signalZh": "粉贴不结块。"
      }
    },
    {
      "text": "Pan-fry in hot oil, skin-side down, 3 minutes until the crust sets.",
      "textZh": "热油皮朝下入锅，煎3分钟至外壳定。",
      "zhHint": "煎制",
      "stateNote": {
        "visual": "Crust turns golden and releases on its own.",
        "visualZh": "外壳金黄、自动离锅。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Sizzle softens, fish lifts clean.",
        "signalZh": "滋啦转弱、轻抬即离。"
      }
    },
    {
      "text": "Flip; fry 2 minutes on the second side until equally crisp.",
      "textZh": "翻面再煎2分钟至同样酥脆。",
      "zhHint": "翻面",
      "stateNote": {
        "visual": "Both sides are deep gold and rigid.",
        "visualZh": "两面深金、硬挺。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Tapping sounds hollow.",
        "signalZh": "敲之空响。"
      }
    },
    {
      "text": "Drain on paper; shower with extra scallion and serve hot.",
      "textZh": "沥油后撒葱段，趁热上桌。",
      "zhHint": "沥油出锅",
      "stateNote": {
        "visual": "Crust stays crisp and glistens.",
        "visualZh": "外壳酥脆发亮。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Steam clears from the surface.",
        "signalZh": "表面水汽散尽。"
      }
    }
  ],
  "tips": [
    "Dry the silver skin or it will spit and stick.",
    "Don't move the fish until the crust sets.",
    "A thin starch film is enough — a thick coat turns gummy."
  ],
  "tipsZh": [
    "银鳞擦干，否则爆油粘锅。",
    "外壳未定别动鱼。",
    "淀粉薄薄一层即可，厚了发黏。"
  ],
  "commonMistakes": [
    {
      "mistake": "Overcrowding so the pan steams the fish.",
      "mistakeZh": "挤锅导致鱼被蒸。",
      "fix": "Fry in batches with space between segments.",
      "fixZh": "分批煎、段间留空。"
    },
    {
      "mistake": "Flipping early and losing the skin.",
      "mistakeZh": "翻早了掉皮。",
      "fix": "Wait for the fish to release naturally.",
      "fixZh": "等鱼自动离锅再翻。"
    }
  ],
  "variations": [
    "Dust with five-spice for a fragrant twist.",
    "Air-fry at 200°C for a lighter version."
  ],
  "variationsZh": [
    "撒五香粉，香气更足。",
    "空气炸锅200°C，更轻版。"
  ],
  "relatedSlugs": [
    "braised-fish-cubes",
    "sweet-sour-carp",
    "dry-braised-crucian",
    "sauce-braised-croaker",
    "scallion-oil-turbot",
    "tomato-fish-slices",
    "salt-pepper-croaker",
    "stir-fried-shrimp",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
