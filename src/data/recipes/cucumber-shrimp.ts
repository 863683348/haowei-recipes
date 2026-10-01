import type { Recipe } from "@/lib/types";

/** Cucumber with Shrimp (黄瓜炒虾仁) (黄瓜炒虾仁) — Day batch */
export const cucumber_shrimp: Recipe = {
  "id": "huang-gua-chao-xia-ren",
  "slug": "cucumber-shrimp",
  "titleEn": "Cucumber with Shrimp (黄瓜炒虾仁)",
  "titleZh": "黄瓜炒虾仁",
  "pinyin": "huáng guā chǎo xiā rén",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Home",
  "regionZh": "家常",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version keeps the cucumber skin on for crunch and colour; restaurant version peels and blanches it briefly for a cleaner, softer bite.",
  "versionNoteZh": "家常版黄瓜留皮，脆且好看；酒楼版去皮快焯，口感更净更软。",
  "tags": [
    "shrimp",
    "cucumber",
    "light",
    "20-min",
    "summer"
  ],
  "dietary": [
    "none"
  ],
  "story": "The fastest way to make a hot evening feel reasonable: cool cucumber, sweet shrimp, three minutes in the wok.",
  "storyZh": "闷热晚上最省事的一道：黄瓜凉、虾仁甜，锅里三分钟就好。",
  "ingredients": [
    {
      "id": "hgx-01",
      "nameEn": "shelled shrimp",
      "nameZh": "虾仁",
      "pinyin": "xiā rén",
      "amountMetric": "220 g",
      "amountUS": "8 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp"
    },
    {
      "id": "hgx-02",
      "nameEn": "Persian or Japanese cucumber",
      "nameZh": "小黄瓜",
      "pinyin": "xiǎo huáng guā",
      "amountMetric": "2 pc",
      "amountUS": "2 small",
      "category": "produce",
      "pantry": "local",
      "note": "Seedless varieties stay crisp.",
      "noteZh": "无籽品种更脆。"
    },
    {
      "id": "hgx-03",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "pinyin": "dàn qīng",
      "amountMetric": "1 pc",
      "amountUS": "1 white",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "hgx-04",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "hgx-05",
      "nameEn": "garlic, sliced thin",
      "nameZh": "蒜（切片）",
      "pinyin": "suàn",
      "amountMetric": "8 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "hgx-06",
      "nameEn": "ginger, sliced thin",
      "nameZh": "姜（切片）",
      "pinyin": "jiāng",
      "amountMetric": "5 g",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "hgx-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hgx-08",
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
      "id": "hgx-09",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Velvet the shrimp: toss with egg white and half the cornstarch, rest 10 minutes.",
      "textZh": "虾仁加蛋清与一半淀粉上浆，静置10分钟。",
      "zhHint": "上浆",
      "stateNote": {
        "visual": "Shrimp are coated and glossy.",
        "visualZh": "虾仁挂浆发亮。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Coating clings evenly.",
        "signalZh": "浆挂得均匀。"
      }
    },
    {
      "text": "Cut cucumber into 1 cm half-moons; salt lightly and drain 5 minutes.",
      "textZh": "黄瓜切1厘米半月片，轻腌5分钟沥水。",
      "zhHint": "腌黄瓜",
      "stateNote": {
        "visual": "Beads of water appear on the cut faces.",
        "visualZh": "切面渗出水珠。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Slices bend without snapping.",
        "signalZh": "瓜片可弯而不断。"
      }
    },
    {
      "text": "Sear shrimp in hot oil 45 seconds until just pink; remove.",
      "textZh": "热油滑虾45秒至刚变粉，盛出。",
      "zhHint": "滑虾",
      "stateNote": {
        "visual": "Shrimp curl and go opaque.",
        "visualZh": "虾仁卷起转白。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "Just set, still bouncy.",
        "signalZh": "刚熟仍弹。"
      }
    },
    {
      "text": "Fry garlic and ginger 15 seconds; add cucumber and toss 30 seconds.",
      "textZh": "爆香蒜姜15秒，下黄瓜翻30秒。",
      "zhHint": "炒瓜",
      "stateNote": {
        "visual": "Cucumber turns translucent at the edges but stays bright.",
        "visualZh": "瓜片边缘转透、仍翠绿。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Still snaps when bitten.",
        "signalZh": "咬下去仍脆。"
      }
    },
    {
      "text": "Return shrimp; add soy sauce, wine and remaining cornstarch slurry; toss 20 seconds.",
      "textZh": "回虾，加生抽、黄酒与剩余淀粉水，翻20秒。",
      "zhHint": "合炒",
      "stateNote": {
        "visual": "A thin glossy film coats everything.",
        "visualZh": "薄亮汁裹满食材。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "No sauce pools on the plate.",
        "signalZh": "盘底不积汁。"
      }
    },
    {
      "text": "Off heat, drizzle sesame oil and serve at once.",
      "textZh": "关火淋香油，立刻上桌。",
      "zhHint": "出锅",
      "stateNote": {
        "visual": "Cucumber is still green and crisp.",
        "visualZh": "黄瓜仍翠绿爽脆。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "Dish tastes fresh, not stewed.",
        "signalZh": "口感清爽、不塌。"
      }
    }
  ],
  "tips": [
    "Salt the cucumber first or it will flood the wok.",
    "Cucumber needs less than a minute of heat.",
    "A cornstarch slurry keeps the sauce from sliding off."
  ],
  "tipsZh": [
    "黄瓜先腌，否则下锅出水。",
    "黄瓜受热不到一分钟就够。",
    "勾薄芡，汁才挂得住。"
  ],
  "commonMistakes": [
    {
      "mistake": "Cooking cucumber until it turns limp and olive.",
      "mistakeZh": "黄瓜炒到发软发黄。",
      "fix": "30 seconds, high heat, then out.",
      "fixZh": "大火30秒即出锅。"
    },
    {
      "mistake": "Skipping the salting step so the dish sits in water.",
      "mistakeZh": "没腌黄瓜，成菜泡在水里。",
      "fix": "Salt, drain 5 minutes, pat dry.",
      "fixZh": "腌5分钟沥干再擦干。"
    }
  ],
  "variations": [
    "Add wood ear mushrooms for crunch.",
    "Add a handful of cashews.",
    "Use zucchini when cucumber is out of season."
  ],
  "variationsZh": [
    "加木耳增脆。",
    "加一把腰果。",
    "黄瓜过季可换西葫芦。"
  ],
  "relatedSlugs": [
    "stir-fried-shrimp",
    "shrimp-with-silky-eggs",
    "asparagus-shrimp",
    "salt-pepper-whole-shrimp",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/cashew-shrimp.webp"
};
