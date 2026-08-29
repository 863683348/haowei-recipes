import type { Recipe } from "@/lib/types";

/** Chu Hou Sauce Beef (柱候酱牛腩) (柱候酱牛腩) — Day batch */
export const chu_hou_sauce_beef: Recipe = {
  "slug": "chu-hou-sauce-beef",
  "titleEn": "Chu Hou Sauce Beef (柱候酱牛腩)",
  "titleZh": "柱候酱牛腩",
  "pinyin": "zhù hòu jiàng niú ruǎn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 85,
  "servings": 4,
  "version": "family",
  "versionNote": "Cantonese Chu Hou sauce is a fermented soybean paste with garlic and five-spice. It's the soul of this dish.",
  "versionNoteZh": "粤式柱候酱是发酵豆酱加蒜和五香粉，是这道菜的灵魂。",
  "tags": [
    "beef",
    "cantonese",
    "stew",
    "aromatic",
    "weeknight"
  ],
  "dietary": [],
  "story": "Chu Hou sauce originates from Foshan, Guangdong and is a staple of Cantonese home cooking. This beef brisket in Chu Hou sauce has a deep umami-savory flavor that's uniquely Cantonese.",
  "storyZh": "柱候酱源自广东佛山，是粤式家常菜必备。这道柱候牛腩有独特的鲜香咸味，是典型的粤式风味。",
  "ingredients": [
    {
      "id": "chs-1",
      "nameEn": "beef brisket, 4cm chunks",
      "nameZh": "牛腩块",
      "amountMetric": "600 g",
      "amountUS": "about 1.3 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "chs-2",
      "nameEn": "Chu Hou sauce (or hoisin as substitute)",
      "nameZh": "柱候酱",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Hoisin sauce is the closest substitute if you can't find Chu Hou.",
      "noteZh": "找不到柱候酱可用海鲜酱替代。"
    },
    {
      "id": "chs-3",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "chs-4",
      "nameEn": "garlic cloves, smashed",
      "nameZh": "蒜瓣",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "chs-5",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 piece",
      "amountUS": "1 piece",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "chs-6",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "chs-7",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "chs-8",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "chs-9",
      "nameEn": "hot water",
      "nameZh": "热水",
      "amountMetric": "1 L",
      "amountUS": "about 4 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "chs-10",
      "nameEn": "scallions, for garnish",
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
      "text": "Heat oil, fry ginger, garlic, and star anise until fragrant (30s).",
      "textZh": "热油下姜片、蒜瓣、八角爆香 30 秒。",
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
      "text": "Add brisket, stir-fry 3 min until colored. Add Chu Hou sauce, soy sauce, rock sugar.",
      "textZh": "下牛腩炒 3 分钟上色，加柱候酱、生抽、冰糖。",
      "zhHint": "炒香调味",
      "stateNote": {
        "visual": "Beef coated in dark sauce",
        "visualZh": "牛肉裹上深色酱汁",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Add hot water. Bring to boil, reduce to low. Cover and simmer 60 min.",
      "textZh": "加热水烧开，转小火盖盖炖 60 分钟。",
      "zhHint": "炖煮",
      "stateNote": {
        "visual": "Broth is dark and glossy",
        "visualZh": "汤汁深色有光泽",
        "heat": "low",
        "timeRef": "60 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Check tenderness — beef should be fork-tender. If sauce is thin, simmer uncovered 10 min to reduce.",
      "textZh": "检查软烂度——牛腩应 fork-tender。如汤汁稀，开盖收汁 10 分钟。",
      "zhHint": "收汁",
      "stateNote": {
        "visual": "Sauce thickens and coats meat",
        "visualZh": "酱汁变浓稠挂在肉上",
        "signal": "Fork slides in easily",
        "signalZh": "叉子轻松插入"
      }
    },
    {
      "text": "Garnish with scallions. Serve with rice or noodles.",
      "textZh": "撒葱花，配米饭或面条食用。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Chu Hou sauce is hard to find outside China — hoisin is the best substitute but less complex.",
    "Don't rush the simmer — low and slow is the only way to tenderize brisket.",
    "This dish pairs excellently with plain steamed rice."
  ],
  "tipsZh": [
    "柱候酱国外难找——海鲜酱是最好的替代但风味不如。",
    "别急——慢炖是软化的唯一方法。",
    "配白米饭绝佳。"
  ],
  "relatedSlugs": [
    "hongshao-pork",
    "char-siu-pork",
    "beef-and-broccoli",
    "tomato-beef-brisket"
  ],
  "image": "/images/recipes/chu-hou-sauce-beef.webp",
  "id": "chu-hou-sauce-beef"
};
