import type { Recipe } from "@/lib/types";

/** Asparagus with Shrimp (芦笋炒虾仁) (芦笋炒虾仁) — Day batch */
export const asparagus_shrimp: Recipe = {
  "id": "lu-sun-chao-xia-ren",
  "slug": "asparagus-shrimp",
  "titleEn": "Asparagus with Shrimp (芦笋炒虾仁)",
  "titleZh": "芦笋炒虾仁",
  "pinyin": "lú sǔn chǎo xiā rén",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Home",
  "regionZh": "家常",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version blanches the asparagus first so the wok work stays fast; restaurant version fries the spears directly in hot oil for a lightly blistered skin.",
  "versionNoteZh": "家常版芦笋先焯，锅里才快；酒楼版直接热油拉一下，表皮微起虎皮。",
  "tags": [
    "shrimp",
    "asparagus",
    "spring",
    "light",
    "20-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "Spring on a plate in northern China: the first thin asparagus, sweet shrimp, nothing heavy to cover either.",
  "storyZh": "华北春天的一盘：头茬细芦笋配甜虾仁，调味极轻，谁也不抢谁。",
  "ingredients": [
    {
      "id": "lsx-01",
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
      "id": "lsx-02",
      "nameEn": "asparagus, trimmed and cut on the bias",
      "nameZh": "芦笋（去老根、斜切段）",
      "pinyin": "lú sǔn",
      "amountMetric": "300 g",
      "amountUS": "1 bunch",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "lsx-03",
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
      "id": "lsx-04",
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
      "id": "lsx-05",
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
      "id": "lsx-06",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "lsx-07",
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
      "id": "lsx-08",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "lsx-09",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "20 ml",
      "amountUS": "1 1/2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Velvet the shrimp with egg white and half the cornstarch; rest 10 minutes.",
      "textZh": "虾仁加蛋清与一半淀粉上浆，静置10分钟。",
      "zhHint": "上浆",
      "stateNote": {
        "visual": "Shrimp are glossy and coated.",
        "visualZh": "虾仁发亮挂浆。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Coating clings without running.",
        "signalZh": "浆挂住不流。"
      }
    },
    {
      "text": "Snap the woody ends off the asparagus and cut into 4 cm bias pieces.",
      "textZh": "芦笋掐去老根，斜切成4厘米段。",
      "zhHint": "处理芦笋",
      "stateNote": {
        "visual": "Cut faces are pale and moist.",
        "visualZh": "切面白而湿润。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Spears snap cleanly where tender begins.",
        "signalZh": "在嫩处自然折断。"
      }
    },
    {
      "text": "Blanch asparagus in salted boiling water 45 seconds; drain well.",
      "textZh": "芦笋入加盐沸水焯45秒，彻底沥干。",
      "zhHint": "焯芦笋",
      "stateNote": {
        "visual": "Spears turn vivid green and slightly glossy.",
        "visualZh": "笋条转鲜绿、微亮。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "Crisp-tender, still with bite.",
        "signalZh": "脆嫩、仍有芯。"
      }
    },
    {
      "text": "Sear shrimp in hot oil 45 seconds until pink; remove.",
      "textZh": "热油滑虾45秒至变粉，盛出。",
      "zhHint": "滑虾",
      "stateNote": {
        "visual": "Shrimp curl and turn opaque.",
        "visualZh": "虾仁卷起转白。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "Just cooked through.",
        "signalZh": "刚好熟透。"
      }
    },
    {
      "text": "Sizzle garlic 15 seconds; add asparagus, oyster sauce, wine and white pepper; toss 30 seconds.",
      "textZh": "爆香蒜15秒，下芦笋、蚝油、黄酒与白胡椒，翻30秒。",
      "zhHint": "合炒",
      "stateNote": {
        "visual": "Spears are glossy and evenly coated.",
        "visualZh": "笋条油亮、挂汁均匀。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Aroma is savoury and grassy.",
        "signalZh": "香气咸鲜带青草味。"
      }
    },
    {
      "text": "Return shrimp, thicken with the remaining cornstarch slurry, toss 20 seconds and plate.",
      "textZh": "回虾仁，用剩余淀粉水勾薄芡，翻20秒装盘。",
      "zhHint": "出锅",
      "stateNote": {
        "visual": "Sauce forms a thin sheen; asparagus stays green.",
        "visualZh": "汁薄亮、芦笋仍绿。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "No liquid in the plate.",
        "signalZh": "盘底无汁。"
      }
    }
  ],
  "tips": [
    "Salt the blanching water to lock in the green.",
    "Cut asparagus on the bias so it cooks evenly.",
    "Oyster sauce is salty enough — taste before adding salt."
  ],
  "tipsZh": [
    "焯水加盐，绿色更稳。",
    "斜切受热更匀。",
    "蚝油已咸，先尝再放盐。"
  ],
  "commonMistakes": [
    {
      "mistake": "Blanching too long so asparagus goes drab.",
      "mistakeZh": "焯太久，芦笋发暗。",
      "fix": "45 seconds, then straight into the wok.",
      "fixZh": "45秒后立刻下锅。"
    },
    {
      "mistake": "Overcooking shrimp in the final toss.",
      "mistakeZh": "最后翻太久，虾变老。",
      "fix": "Sear separately and return at the end.",
      "fixZh": "虾先滑熟，最后回锅。"
    }
  ],
  "variations": [
    "Add sliced shiitake for umami.",
    "Swap asparagus for snap peas.",
    "Finish with a splash of sesame oil."
  ],
  "variationsZh": [
    "加香菇片提鲜。",
    "芦笋换荷兰豆。",
    "出锅淋少许香油。"
  ],
  "relatedSlugs": [
    "stir-fried-shrimp",
    "cucumber-shrimp",
    "shrimp-with-silky-eggs",
    "broccoli-shrimp",
    "salt-pepper-whole-shrimp"
  ],
  "image": "/images/recipes/chinese-chives-stir-fried-river-shrimp.webp"
};
