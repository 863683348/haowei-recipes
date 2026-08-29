import type { Recipe } from "@/lib/types";

/** Tofu Skin Beef Casserole (腐竹牛腩煲) (腐竹牛腩煲) — Day batch */
export const tofu_skin_beef_casserole: Recipe = {
  "slug": "tofu-skin-beef-casserole",
  "titleEn": "Tofu Skin Beef Casserole (腐竹牛腩煲)",
  "titleZh": "腐竹牛腩煲",
  "pinyin": "fǔ zhú niú ruǎn bāo",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 80,
  "servings": 4,
  "version": "family",
  "versionNote": "Claypot style — tofu skin soaks up all the beef broth and becomes the star.",
  "versionNoteZh": "煲仔风格——腐竹吸饱牛腩汤，成为主角。",
  "tags": [
    "beef",
    "tofu-skin",
    "casserole",
    "claypot",
    "comfort-food"
  ],
  "dietary": [],
  "story": "Tofu skin (yuba) is a Cantonese delicacy made from the skin that forms on simmering soy milk. When braised with beef brisket, it absorbs the rich broth and becomes a meaty, umami-rich morsel that many prefer over the beef itself.",
  "storyZh": "腐竹是粤式美食，由豆浆煮沸后凝结的皮制成。和牛腩一起炖煮时吸饱浓郁汤汁，成为鲜美多汁的食材，很多人比牛肉还爱它。",
  "ingredients": [
    {
      "id": "tsb-1",
      "nameEn": "beef brisket, 4cm chunks",
      "nameZh": "牛腩块",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tsb-2",
      "nameEn": "dried tofu skin (yuba)",
      "nameZh": "腐竹",
      "amountMetric": "80 g",
      "amountUS": "about 2.8 oz",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in warm water for 30 min before use.",
      "noteZh": "使用前温水泡发 30 分钟。"
    },
    {
      "id": "tsb-3",
      "nameEn": "daikon radish, thick rounds",
      "nameZh": "白萝卜",
      "amountMetric": "200 g",
      "amountUS": "about 0.4 lbs",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tsb-4",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tsb-5",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 piece",
      "amountUS": "1 piece",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "tsb-6",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tsb-7",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "tsb-8",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "tsb-9",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "tsb-10",
      "nameEn": "hot water",
      "nameZh": "热水",
      "amountMetric": "1 L",
      "amountUS": "about 4 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak dried tofu skin in warm water for 30 min until soft. Cut into 5cm lengths. Drain.",
      "textZh": "腐竹温水泡发 30 分钟至软，切 5cm 段，沥干。",
      "zhHint": "泡腐竹",
      "stateNote": {
        "visual": "Tofu skin pliable and soft",
        "visualZh": "腐竹柔韧柔软",
        "timeRef": "30 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Blanch brisket in cold water, skim foam, drain and rinse.",
      "textZh": "牛腩冷水下锅，烧开撇沫，捞出冲洗。",
      "zhHint": "焯水",
      "stateNote": {
        "visual": "Gray foam",
        "visualZh": "灰色浮沫",
        "signal": "Water runs clear",
        "signalZh": "水变清"
      }
    },
    {
      "text": "Heat oil, fry ginger and star anise 30s. Add brisket, stir-fry 3 min.",
      "textZh": "热油下姜片、八角爆香 30 秒，下牛腩炒 3 分钟。",
      "zhHint": "爆香炒肉",
      "stateNote": {
        "visual": "Beef edges seared",
        "visualZh": "牛肉边缘煎焦",
        "heat": "high",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Add soy sauces and rock sugar. Stir 2 min. Add hot water.",
      "textZh": "加生抽、老抽、冰糖，炒 2 分钟，加热水。",
      "zhHint": "调味",
      "stateNote": {
        "visual": "Sauce coats beef",
        "visualZh": "酱汁裹住牛肉",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Bring to boil, add daikon. Reduce to low. Cover and simmer 40 min.",
      "textZh": "烧开加白萝卜，转小火盖盖炖 40 分钟。",
      "zhHint": "炖煮",
      "stateNote": {
        "visual": "Broth is amber",
        "visualZh": "汤汁呈琥珀色",
        "heat": "low",
        "timeRef": "40 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Add soaked tofu skin. Cover and cook 15 min more until everything is tender and flavors meld.",
      "textZh": "加腐竹，盖盖再炖 15 分钟至入味软烂。",
      "zhHint": "下腐竹",
      "stateNote": {
        "visual": "Tofu skin swollen and saturated",
        "visualZh": "腐竹膨胀吸饱汤汁",
        "heat": "low",
        "timeRef": "15 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Transfer to a claypot or serve directly. Garnish with scallions.",
      "textZh": "转砂锅或直接上桌，撒葱花。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Tofu skin is a sponge — it will soak up all the flavorful broth.",
    "Don't soak tofu skin too long or it becomes mushy.",
    "Serve in a claypot to keep warm at the table."
  ],
  "tipsZh": [
    "腐竹是海绵——会吸光所有美味汤汁。",
    "腐竹别泡太久否则会烂。",
    "用砂锅上桌可以保温。"
  ],
  "relatedSlugs": [
    "daikon-beef-brisket",
    "tomato-beef-brisket",
    "clay-pot-tofu",
    "home-style-tofu"
  ],
  "image": "/images/recipes/tofu-skin-beef-casserole.webp",
  "id": "tofu-skin-beef-casserole"
};
