import type { Recipe } from "@/lib/types";

/** Daikon Beef Brisket Stew (白萝卜炖牛腩) (白萝卜炖牛腩) — Day batch */
export const daikon_beef_brisket: Recipe = {
  "slug": "daikon-beef-brisket",
  "titleEn": "Daikon Beef Brisket Stew (白萝卜炖牛腩)",
  "titleZh": "白萝卜炖牛腩",
  "pinyin": "bái luó bo dùn niú ruǎn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 100,
  "servings": 4,
  "version": "family",
  "versionNote": "Lighter Cantonese style — the daikon absorbs beef broth and becomes sweet and melt-in-your-mouth.",
  "versionNoteZh": "粤式清淡版——白萝卜吸饱牛腩汤，变得清甜软糯。",
  "tags": [
    "beef",
    "daikon",
    "stew",
    "comfort-food",
    "winter"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "In Cantonese home cooking, daikon and beef are a classic pairing. The radish soaks up the rich beef fat and becomes sweeter than most vegetables. This is a warming winter dish found in every Guangdong household.",
  "storyZh": "在广东家常菜中，白萝卜和牛腩是经典搭配。萝卜吸饱牛腩的油脂，比大多数蔬菜更甜。这是一道粤式冬日暖菜。",
  "ingredients": [
    {
      "id": "drb-1",
      "nameEn": "beef brisket, 4cm chunks",
      "nameZh": "牛腩块",
      "amountMetric": "600 g",
      "amountUS": "about 1.3 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "drb-2",
      "nameEn": "daikon radish, peeled and cut into thick rounds",
      "nameZh": "白萝卜",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lbs",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "drb-3",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "drb-4",
      "nameEn": "scallions, 5cm sections",
      "nameZh": "大葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "drb-5",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "2 pieces",
      "amountUS": "2 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "drb-6",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "drb-7",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "drb-8",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "drb-9",
      "nameEn": "hot water",
      "nameZh": "热水",
      "amountMetric": "1.5 L",
      "amountUS": "about 6 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "drb-10",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "to taste",
      "amountUS": "to taste",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Blanch brisket: cold water, bring to boil, skim foam, drain and rinse.",
      "textZh": "焯水：冷水下锅烧开，撇沫，捞出冲洗。",
      "zhHint": "牛腩焯水",
      "stateNote": {
        "visual": "Gray foam floats",
        "visualZh": "灰色浮沫",
        "signal": "Water runs clear",
        "signalZh": "水变清"
      }
    },
    {
      "text": "Heat oil, add ginger, scallions, star anise. Fry 30s until fragrant.",
      "textZh": "锅中放油，下姜片、葱段、八角，炒 30 秒出香。",
      "zhHint": "爆香",
      "stateNote": {
        "visual": "Aromatics glisten",
        "visualZh": "香料出油光",
        "heat": "medium",
        "signal": "Fragrant, no browning",
        "signalZh": "香气出来"
      }
    },
    {
      "text": "Add brisket, stir 2 min. Pour in soy sauce and rock sugar.",
      "textZh": "下牛腩翻炒 2 分钟，加生抽和冰糖。",
      "zhHint": "上色",
      "stateNote": {
        "visual": "Beef coated in dark sauce",
        "visualZh": "牛肉裹上酱汁",
        "heat": "medium-high",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Add hot water, bring to boil. Cover and simmer 60 min on low.",
      "textZh": "加热水烧开，盖盖小火炖 60 分钟。",
      "zhHint": "炖牛腩",
      "stateNote": {
        "visual": "Broth is rich amber",
        "visualZh": "汤汁呈琥珀色",
        "heat": "low",
        "timeRef": "60 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Add daikon rounds. Cover and simmer another 30 min until daikon is translucent and tender.",
      "textZh": "加白萝卜块，继续盖盖炖 30 分钟至萝卜透明软烂。",
      "zhHint": "下萝卜",
      "stateNote": {
        "visual": "Daikon edges turn translucent",
        "visualZh": "萝卜边缘变透明",
        "heat": "low",
        "timeRef": "30 minutes",
        "signal": "Pierce easily with chopsticks",
        "signalZh": "筷子能轻松插入"
      }
    },
    {
      "text": "Season with salt. Garnish with scallion greens. Serve hot.",
      "textZh": "盐调味，撒葱花，趁热食用。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Daikon should be cut thick — it shrinks but not too much.",
    "Don't add daikon too early or it will disintegrate.",
    "The broth is the star — drink it separately if you like."
  ],
  "tipsZh": [
    "萝卜切大块——会缩水但不会太厉害。",
    "萝卜不要早放，否则会煮散。",
    "汤是灵魂——可以单独喝。"
  ],
  "relatedSlugs": [
    "tomato-beef-brisket",
    "potato-beef-stew",
    "sweet-sour-ribs",
    "winter-melon-soup"
  ],
  "image": "/images/recipes/daikon-beef-brisket.webp",
  "id": "daikon-beef-brisket"
};
