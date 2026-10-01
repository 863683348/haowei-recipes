import type { Recipe } from "@/lib/types";

/** Broccoli with Shrimp (西兰花炒虾仁) (西兰花炒虾仁) — Day batch */
export const broccoli_shrimp: Recipe = {
  "id": "xi-lan-hua-chao-xia-ren",
  "slug": "broccoli-shrimp",
  "titleEn": "Broccoli with Shrimp (西兰花炒虾仁)",
  "titleZh": "西兰花炒虾仁",
  "pinyin": "xī lán huā chǎo xiā rén",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Home",
  "regionZh": "家常",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version blanches broccoli to bright green, then stir-fries it with velveted shrimp and a glossy oyster sauce.",
  "versionNoteZh": "家常版西兰花先焯到翠绿，再与浆虾仁、蚝油同炒成亮汁。",
  "tags": [
    "shrimp",
    "broccoli",
    "weeknight",
    "balanced"
  ],
  "dietary": [
    "none"
  ],
  "story": "The weeknight compromise: a green vegetable the kids will eat, plus shrimp that makes it feel like a treat.",
  "storyZh": "工作日的折中：孩子肯吃的青菜，加虾仁就成了犒赏。",
  "ingredients": [
    {
      "id": "bxr-01",
      "nameEn": "shelled shrimp",
      "nameZh": "虾仁",
      "pinyin": "xiā rén",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Butterfly for even cooking.",
      "noteZh": "开背更匀熟。"
    },
    {
      "id": "bxr-02",
      "nameEn": "broccoli, cut into florets",
      "nameZh": "西兰花（切小朵）",
      "pinyin": "xī lán huā",
      "amountMetric": "300 g",
      "amountUS": "3 cups",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "bxr-03",
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
      "id": "bxr-04",
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
      "id": "bxr-05",
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
      "id": "bxr-06",
      "nameEn": "ginger, minced",
      "nameZh": "姜（剁末）",
      "pinyin": "jiāng",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bxr-07",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    }
  ],
  "steps": [
    {
      "text": "Marinate shrimp with egg white and cornstarch 10 minutes.",
      "textZh": "虾仁加蛋清与玉米淀粉腌10分钟。",
      "zhHint": "上浆",
      "stateNote": {
        "visual": "Shrimp look glossy and coated.",
        "visualZh": "虾仁发亮挂浆。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Slurry clings without dripping.",
        "signalZh": "浆液挂住不滴。"
      }
    },
    {
      "text": "Blanch broccoli in salted boiling water 60 seconds; drain.",
      "textZh": "西兰花入加盐沸水焯60秒，捞出。",
      "zhHint": "焯西兰花",
      "stateNote": {
        "visual": "Florets turn vivid green and crisp-tender.",
        "visualZh": "花球转鲜绿、脆嫩。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "Color is bright, not olive.",
        "signalZh": "色鲜、不发黄。"
      }
    },
    {
      "text": "Sear shrimp in hot oil 45 seconds until pink; remove.",
      "textZh": "热油下虾仁炒45秒至粉，盛出。",
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
      "text": "Sizzle garlic and ginger; return broccoli and shrimp; add oyster sauce.",
      "textZh": "爆香蒜姜，回西兰花与虾仁，加蚝油。",
      "zhHint": "合炒",
      "stateNote": {
        "visual": "Sauce glosses everything in a thin coat.",
        "visualZh": "汁薄薄裹住全场。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Aroma is savory and sweet.",
        "signalZh": "香气咸鲜带甜。"
      }
    },
    {
      "text": "Toss 20 seconds; plate while broccoli is still bright.",
      "textZh": "翻20秒，趁西兰花仍翠绿装盘。",
      "zhHint": "出锅",
      "stateNote": {
        "visual": "Broccoli stays green; shrimp glisten.",
        "visualZh": "西兰花仍绿、虾发亮。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Steam is light and clean.",
        "signalZh": "热气清、不重。"
      }
    }
  ],
  "tips": [
    "Blanch broccoli just until bright — it cooks more in the wok.",
    "Velvet the shrimp so they stay juicy next to the veg.",
    "Oyster sauce is salty; skip extra salt."
  ],
  "tipsZh": [
    "西兰花焯到鲜绿即可，锅里还会熟。",
    "虾仁上浆，配菜也不柴。",
    "蚝油已咸，不必再加盐。"
  ],
  "commonMistakes": [
    {
      "mistake": "Over-blanching so broccoli goes dull and soft.",
      "mistakeZh": "焯太久，西兰花发黄变软。",
      "fix": "60 seconds max, then shock if you like it crisp.",
      "fixZh": "最多60秒，爱脆可过凉。"
    },
    {
      "mistake": "Overcooking shrimp in the final toss.",
      "mistakeZh": "最后翻太久虾老。",
      "fix": "Sear shrimp separately and just toss to coat.",
      "fixZh": "虾先滑熟，最后只翻匀裹汁。"
    }
  ],
  "variations": [
    "Add a few shiitake slices for umami.",
    "Swap broccoli for snap peas."
  ],
  "variationsZh": [
    "加几片香菇提鲜。",
    "西兰花换荷兰豆。"
  ],
  "relatedSlugs": [
    "braised-fish-cubes",
    "sweet-sour-carp",
    "dry-braised-crucian",
    "sauce-braised-croaker",
    "pan-fried-hairtail",
    "scallion-oil-turbot",
    "tomato-fish-slices",
    "salt-pepper-croaker",
    "stir-fried-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
