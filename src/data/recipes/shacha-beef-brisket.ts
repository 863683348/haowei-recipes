import type { Recipe } from "@/lib/types";

/** Shacha Sauce Beef Brisket (沙茶牛腩) (沙茶牛腩) — Day batch */
export const shacha_beef_brisket: Recipe = {
  "slug": "shacha-beef-brisket",
  "titleEn": "Shacha Sauce Beef Brisket (沙茶牛腩)",
  "titleZh": "沙茶牛腩",
  "pinyin": "shā chá niú ruǎn",
  "cuisine": "闽菜",
  "cuisineEn": "Fujian",
  "region": "Fujian",
  "regionZh": "福建",
  "difficulty": "medium",
  "timeMin": 85,
  "servings": 4,
  "version": "family",
  "versionNote": "Shacha sauce is a Fujianese chili-garlic-peanut sauce. It's savory, slightly sweet, and deeply aromatic.",
  "versionNoteZh": "沙茶酱是福建辣椒蒜花生酱——咸鲜微甜，香气深沉。",
  "tags": [
    "beef",
    "shacha",
    "spicy",
    "fujian",
    "aromatic"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Shacha sauce comes from Fujian province and has Southeast Asian influences — it contains dried shrimp, garlic, chili, and peanuts. This beef brisket version is a Fujianese home classic, often served over rice or noodles.",
  "storyZh": "沙茶酱源自福建，有东南亚影响——含虾米、蒜、辣椒和花生。这道牛腩是福建家常经典，常配米饭或面条。",
  "ingredients": [
    {
      "id": "ssb-1",
      "nameEn": "beef brisket, 4cm chunks",
      "nameZh": "牛腩块",
      "amountMetric": "600 g",
      "amountUS": "about 1.3 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ssb-2",
      "nameEn": "Shacha sauce (or satay sauce substitute)",
      "nameZh": "沙茶酱",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Shacha sauce is available in Asian supermarkets. If unavailable, satay sauce works.",
      "noteZh": "亚超有售。没有可用沙嗲酱替代。"
    },
    {
      "id": "ssb-3",
      "nameEn": "garlic cloves, minced",
      "nameZh": "蒜末",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ssb-4",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ssb-5",
      "nameEn": "scallions, cut into 3cm sections",
      "nameZh": "大葱段",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ssb-6",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ssb-7",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "ssb-8",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ssb-9",
      "nameEn": "hot water",
      "nameZh": "热水",
      "amountMetric": "1 L",
      "amountUS": "about 4 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "ssb-10",
      "nameEn": "green onions, for garnish",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
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
      "text": "Heat oil, fry garlic, ginger, and scallion whites until fragrant (30s).",
      "textZh": "热油下蒜末、姜片、葱白爆香 30 秒。",
      "zhHint": "爆香",
      "stateNote": {
        "visual": "Garlic golden at edges",
        "visualZh": "蒜边微黄",
        "heat": "medium",
        "signal": "Aromatic",
        "signalZh": "香气四溢"
      }
    },
    {
      "text": "Add brisket, stir-fry 3 min. Add Shacha sauce, soy sauce, rock sugar. Stir to coat.",
      "textZh": "下牛腩炒 3 分钟，加沙茶酱、生抽、冰糖，翻炒裹匀。",
      "zhHint": "炒香调味",
      "stateNote": {
        "visual": "Beef coated in reddish-brown sauce",
        "visualZh": "牛肉裹上红褐色酱汁",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Add hot water. Bring to boil, reduce to low. Cover and simmer 60 min.",
      "textZh": "加热水烧开，转小火盖盖炖 60 分钟。",
      "zhHint": "炖煮",
      "stateNote": {
        "visual": "Broth is rich and aromatic",
        "visualZh": "汤汁浓郁飘香",
        "heat": "low",
        "timeRef": "60 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Check tenderness — beef should be fork-tender. Simmer uncovered 10 min to thicken sauce if needed.",
      "textZh": "检查软烂度——牛腩应 fork-tender。如需要，开盖收汁 10 分钟。",
      "zhHint": "收汁",
      "stateNote": {
        "visual": "Sauce thickens and coats meat",
        "visualZh": "酱汁浓稠挂肉",
        "signal": "Fork slides in easily",
        "signalZh": "叉子轻松插入"
      }
    },
    {
      "text": "Garnish with scallion greens. Serve with steamed rice.",
      "textZh": "撒葱绿，配米饭食用。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Shacha sauce varies by brand — taste and adjust.",
    "This sauce is great over rice or noodles — the extra sauce is perfect for soaking.",
    "Add a pinch of sugar if the sauce is too salty."
  ],
  "tipsZh": [
    "沙茶酱品牌不同——尝味调整。",
    "这酱汁配米饭面条都绝——多留点汤汁拌饭。",
    "太咸就加 pinch 糖。"
  ],
  "relatedSlugs": [
    "chu-hou-sauce-beef",
    "tomato-beef-brisket",
    "beef-and-broccoli",
    "hongshao-pork"
  ],
  "image": "/images/recipes/shacha-beef-brisket.webp",
  "id": "shacha-beef-brisket"
};
