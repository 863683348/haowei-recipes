import type { Recipe } from "@/lib/types";

/** Tomato and Tofu (番茄豆腐) (番茄豆腐) — Day batch */
export const tomato_tofu: Recipe = {
  "id": "fan-qie-dou-fu",
  "slug": "tomato-tofu",
  "titleEn": "Tomato and Tofu (番茄豆腐)",
  "titleZh": "番茄豆腐",
  "pinyin": "fān qié dòu fu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Home",
  "regionZh": "家常",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version cooks the tomatoes down into a loose sauce and slides in soft tofu; restaurant version blanches and peels the tomatoes first for a brighter, cleaner sauce.",
  "versionNoteZh": "家常版番茄直接炒成沙汁、嫩豆腐下锅轻推；酒楼版番茄先去皮，汤色更亮净。",
  "tags": [
    "tofu",
    "tomato",
    "vegetarian",
    "20-min",
    "weeknight"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Northern home cooking at its most forgiving: tomatoes break down into a sweet-tart sauce that needs no stock, and tofu soaks it up.",
  "storyZh": "北方家常菜里最宽容的一道：番茄炒成酸甜沙汁，不用高汤，豆腐把汁全吸进去。",
  "ingredients": [
    {
      "id": "fqdf-01",
      "nameEn": "soft tofu, cut into 2 cm cubes",
      "nameZh": "嫩豆腐（切2厘米块）",
      "pinyin": "nèn dòu fu",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "fqdf-02",
      "nameEn": "ripe tomatoes, cut into wedges",
      "nameZh": "番茄（切块）",
      "pinyin": "fān qié",
      "amountMetric": "400 g",
      "amountUS": "3 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "fqdf-03",
      "nameEn": "scallion, chopped",
      "nameZh": "葱（切花）",
      "pinyin": "cōng",
      "amountMetric": "15 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "fqdf-04",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（剁末）",
      "pinyin": "suàn",
      "amountMetric": "8 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "fqdf-05",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "fqdf-06",
      "nameEn": "salt",
      "nameZh": "盐",
      "pinyin": "yán",
      "amountMetric": "4 g",
      "amountUS": "3/4 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "fqdf-07",
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
      "id": "fqdf-08",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "20 ml",
      "amountUS": "1 1/2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "fqdf-09",
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
      "text": "Cut tofu into cubes and drain 5 minutes in a sieve; pat the surface dry.",
      "textZh": "豆腐切块，滤网中沥5分钟，表面吸干。",
      "zhHint": "备豆腐",
      "stateNote": {
        "visual": "Cubes keep sharp corners and look matte.",
        "visualZh": "豆腐棱角清楚、表面发哑。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No water beads on the plate.",
        "signalZh": "盘底不积水。"
      }
    },
    {
      "text": "Fry scallion and garlic in oil over medium heat 30 seconds until fragrant.",
      "textZh": "中火爆香葱蒜30秒。",
      "zhHint": "爆香",
      "stateNote": {
        "visual": "Garlic turns pale gold; oil looks glossy.",
        "visualZh": "蒜呈浅金、油面发亮。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aroma is sweet, not burnt.",
        "signalZh": "出香不焦。"
      }
    },
    {
      "text": "Add tomatoes, sugar and salt; press and stir 4 minutes until they collapse into a sauce.",
      "textZh": "下番茄、糖与盐，边压边炒4分钟至塌成酱。",
      "zhHint": "炒番茄",
      "stateNote": {
        "visual": "Tomatoes lose their shape; sauce turns deep red and glossy.",
        "visualZh": "番茄失形、酱汁转深红发亮。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "Skins slip off and oil separates slightly at the rim.",
        "signalZh": "皮脱落、边缘微微出油。"
      }
    },
    {
      "text": "Slide in the tofu; shake the pan rather than stirring, and simmer 3 minutes.",
      "textZh": "推入豆腐，晃锅代替翻炒，微煮3分钟。",
      "zhHint": "下豆腐",
      "stateNote": {
        "visual": "Cubes stay whole and take on an orange tint.",
        "visualZh": "豆腐完整、染上橙红色。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Sauce thickens slightly without sticking.",
        "signalZh": "汁微稠、不粘锅。"
      }
    },
    {
      "text": "Thicken with the cornstarch slurry; swirl once and turn off the heat.",
      "textZh": "淋入淀粉水勾芡，晃一圈关火。",
      "zhHint": "勾芡",
      "stateNote": {
        "visual": "Sauce turns glossy and clings to the tofu.",
        "visualZh": "汁发亮、挂住豆腐。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Spoon trail holds for a second.",
        "signalZh": "勺痕停留一秒。"
      }
    },
    {
      "text": "Finish with sesame oil and serve with rice.",
      "textZh": "淋香油，配米饭上桌。",
      "zhHint": "出锅",
      "stateNote": {
        "visual": "Bright red sauce, pale tofu, fragrant surface.",
        "visualZh": "红汁白豆腐、香气扑鼻。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "No raw tomato chunks left.",
        "signalZh": "无生番茄块残留。"
      }
    }
  ],
  "tips": [
    "Sugar balances the tomato acid — do not skip it.",
    "Shake the pan instead of stirring to keep tofu whole.",
    "Use fully ripe tomatoes or the sauce stays thin and sharp."
  ],
  "tipsZh": [
    "糖中和番茄酸，别省。",
    "晃锅不翻炒，豆腐才整。",
    "番茄要熟透，否则汁薄发酸。"
  ],
  "commonMistakes": [
    {
      "mistake": "Stirring the tofu so it turns to mush.",
      "mistakeZh": "猛搅豆腐，成了一锅糊。",
      "fix": "Shake the pan; stir only the sauce around the cubes.",
      "fixZh": "晃锅，只推豆腐周围的汁。"
    },
    {
      "mistake": "Adding tofu before the tomatoes break down.",
      "mistakeZh": "番茄没炒烂就下豆腐。",
      "fix": "Cook tomatoes 4 minutes until saucy first.",
      "fixZh": "先炒4分钟成酱再下。"
    }
  ],
  "variations": [
    "Add scrambled egg for the classic tomato-egg-tofu trio.",
    "Add a spoon of tomato paste for depth.",
    "Top with chopped coriander."
  ],
  "variationsZh": [
    "加炒蛋，成番茄蛋豆腐三件套。",
    "加一勺番茄酱提厚度。",
    "撒香菜末。"
  ],
  "relatedSlugs": [
    "braised-tofu",
    "three-delicacy-tofu-soup",
    "enoki-tofu-clay-pot",
    "iron-plate-tofu",
    "guota-tofu"
  ],
  "image": "/images/recipes/braised-dried-tofu.webp"
};
