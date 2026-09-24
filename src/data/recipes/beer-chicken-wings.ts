import type { Recipe } from "@/lib/types";

/** Beer Braised Chicken Wings (啤酒鸡翅) (啤酒鸡翅) — Day batch */
export const beer_chicken_wings: Recipe = {
  "id": "beer-chicken-wings",
  "slug": "beer-chicken-wings",
  "titleEn": "Beer Braised Chicken Wings (啤酒鸡翅)",
  "titleZh": "啤酒鸡翅",
  "pinyin": "pí jiǔ jī chì",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version uses one can of lager and lets the sauce reduce to a glaze. Restaurant version adds a splash of dark soy for gloss.",
  "versionNoteZh": "家常版用一罐拉格啤酒收汁成亮芡。餐厅版会再点老抽提亮。",
  "tags": [
    "chicken",
    "wings",
    "beer",
    "braise",
    "weeknight",
    "30-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "Beer chicken wings started as a college-dorm shortcut: one can of cheap lager replaced stock, water and wine at once. The hops leave a faint bitterness that cuts the sweetness of the soy glaze, and the alcohol cooks off completely.",
  "storyZh": "啤酒鸡翅最早是宿舍快手菜——一罐便宜拉格同时替代高汤、清水和料酒。啤酒花的微苦正好压住酱汁的甜，酒精会完全挥发。",
  "ingredients": [
    {
      "id": "bcw-1",
      "nameEn": "chicken wings, mid-joint, scored",
      "nameZh": "鸡翅中",
      "amountMetric": "700 g",
      "amountUS": "about 1.5 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "bcw-2",
      "nameEn": "lager beer",
      "nameZh": "拉格啤酒",
      "amountMetric": "330 ml",
      "amountUS": "1 can",
      "category": "other",
      "pantry": "local",
      "note": "Any plain lager works; avoid hoppy IPAs."
    },
    {
      "id": "bcw-3",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "5 slices",
      "amountUS": "5 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bcw-4",
      "nameEn": "scallion, cut into batons",
      "nameZh": "葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bcw-5",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bcw-6",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bcw-7",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "bcw-8",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 piece",
      "amountUS": "1 piece",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "bcw-9",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "bcw-10",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟白芝麻",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-seeds"
    }
  ],
  "steps": [
    {
      "text": "Score each wing twice on the meaty side, then blanch in boiling water for 2 minutes. Drain and pat dry.",
      "textZh": "鸡翅中肉面划两刀，沸水焯 2 分钟，捞出沥干。",
      "zhHint": "划刀焯水",
      "stateNote": {
        "visual": "Grey foam rises and the skin tightens",
        "visualZh": "浮沫升起，表皮收紧",
        "signal": "Wings feel firm and no longer slick",
        "signalZh": "鸡翅手感变紧实不滑",
        "timeRef": "2 minutes",
        "heat": "high"
      }
    },
    {
      "text": "Heat oil in a wok over medium heat. Fry ginger, scallion and star anise for 30 seconds until aromatic.",
      "textZh": "锅中放油中火，下姜片、葱段、八角炒 30 秒出香。",
      "zhHint": "爆香",
      "stateNote": {
        "visual": "Scallion edges soften, oil smells sweet",
        "visualZh": "葱段边缘变软，油有甜香",
        "signal": "Fragrant but nothing browned",
        "signalZh": "香气出来但无焦色",
        "heat": "medium"
      }
    },
    {
      "text": "Add wings and fry 3 minutes, turning, until the skin looks dry and slightly golden.",
      "textZh": "下鸡翅翻炒 3 分钟，至表皮干爽微黄。",
      "zhHint": "煎香表皮",
      "stateNote": {
        "visual": "Skin turns opaque with pale gold patches",
        "visualZh": "表皮变不透明，出现浅金色斑块",
        "signal": "Wings release easily from the wok",
        "signalZh": "鸡翅能轻松离锅不粘",
        "heat": "medium-high",
        "timeRef": "3 minutes"
      }
    },
    {
      "text": "Pour in soy sauces, rock sugar and the whole can of beer. Bring to a boil, then reduce to low.",
      "textZh": "倒入生抽、老抽、冰糖和整罐啤酒，烧开后转小火。",
      "zhHint": "下啤酒",
      "stateNote": {
        "visual": "Foam settles into a light amber liquid",
        "visualZh": "泡沫消退，汤汁呈浅琥珀色",
        "signal": "Liquid almost covers the wings",
        "signalZh": "汤汁基本没过鸡翅",
        "heat": "medium"
      }
    },
    {
      "text": "Cover and simmer 12 minutes, then uncover and reduce 6-8 minutes, spooning sauce over the wings.",
      "textZh": "盖盖焖 12 分钟，开盖收汁 6-8 分钟，边收边淋汁。",
      "zhHint": "焖煮收汁",
      "stateNote": {
        "visual": "Sauce thickens and coats the back of a spoon",
        "visualZh": "汤汁变稠，能挂住勺背",
        "signal": "Glaze clings instead of running off",
        "signalZh": "酱汁挂在鸡翅上不流走",
        "heat": "medium-low",
        "timeRef": "6-8 minutes"
      }
    },
    {
      "text": "Taste and add a pinch of salt only if needed. Plate and scatter sesame seeds.",
      "textZh": "尝味，必要时补一点盐，装盘撒熟白芝麻。",
      "zhHint": "装盘"
    }
  ],
  "tips": [
    "Blanching first removes the metallic tang that makes beer sauce taste flat.",
    "Use a plain lager — dark stout turns the sauce bitter.",
    "Reduce uncovered at the end; covering the whole time leaves the glaze watery."
  ],
  "tipsZh": [
    "先焯水能去掉让啤酒酱发闷的腥气。",
    "用普通拉格，黑啤会让酱汁发苦。",
    "最后要开盖收汁，全程盖盖酱汁会稀。"
  ],
  "relatedSlugs": [
    "coke-chicken-wings",
    "soy-chicken-wings",
    "beer-duck",
    "potato-stewed-chicken-wings"
  ],
  "image": "/images/recipes/coke-chicken-wings.webp"
};
