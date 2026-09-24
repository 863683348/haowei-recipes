import type { Recipe } from "@/lib/types";

/** Beef with Yellow Chives (韭黄炒牛肉) (韭黄炒牛肉) — Day batch */
export const chinese_chive_beef: Recipe = {
  "id": "chinese-chive-beef",
  "slug": "chinese-chive-beef",
  "titleEn": "Beef with Yellow Chives (韭黄炒牛肉)",
  "titleZh": "韭黄炒牛肉",
  "pinyin": "jiǔ huáng chǎo niú ròu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version keeps it simple: beef, chives, soy. Restaurant version adds a puff of wok hei with a final splash of hot oil.",
  "versionNoteZh": "家常版只放牛肉、韭黄和生抽。餐厅版最后淋一勺热油激出锅气。",
  "tags": [
    "beef",
    "chives",
    "stir-fry",
    "quick",
    "20-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "Yellow chives are the same plant as green chives, grown under a cover so no sunlight reaches them. The result is sweeter, softer and much more expensive — which is why this dish shows up at Cantonese banquets but rarely in a weeknight rotation.",
  "storyZh": "韭黄和韭菜是同一种植物，只是遮光栽培不见阳光。结果更甜更嫩，也贵得多——所以这道菜常出现在粤式宴席上，家常反倒少见。",
  "ingredients": [
    {
      "id": "ccb-1",
      "nameEn": "beef sirloin, sliced thin",
      "nameZh": "牛里脊薄片",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ccb-2",
      "nameEn": "yellow chives, cut into 5 cm lengths",
      "nameZh": "韭黄，切 5 cm 段",
      "amountMetric": "250 g",
      "amountUS": "about 9 oz",
      "category": "produce",
      "pantry": "asian",
      "note": "If unavailable, green chives work but taste sharper."
    },
    {
      "id": "ccb-3",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ccb-4",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "ccb-5",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "ccb-6",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ccb-7",
      "nameEn": "ginger, julienned",
      "nameZh": "姜丝",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ccb-8",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ccb-9",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Marinate the beef with soy sauce, wine and cornstarch for 10 minutes.",
      "textZh": "牛肉加生抽、绍酒、淀粉腌 10 分钟。",
      "zhHint": "腌肉",
      "stateNote": {
        "visual": "Slices separate easily, each lightly coated",
        "visualZh": "肉片松散分开，各自挂薄浆",
        "signal": "No starch clumps stick to the bowl",
        "signalZh": "碗边没有淀粉结块"
      }
    },
    {
      "text": "Separate the chive whites and greens — they cook at different speeds.",
      "textZh": "韭黄白段和绿段分开，熟的时间不同。",
      "zhHint": "分梗叶"
    },
    {
      "text": "Heat the wok until a droplet skitters. Add oil and sear the beef 60 seconds, then remove.",
      "textZh": "锅烧到水滴打转，放油煎牛肉 60 秒盛出。",
      "zhHint": "滑炒牛肉",
      "stateNote": {
        "visual": "Beef browns at the edges but stays pink inside",
        "visualZh": "边缘上色，内部仍粉",
        "signal": "Meat springs back lightly when pressed",
        "signalZh": "按压有轻微回弹",
        "heat": "high",
        "timeRef": "60 seconds"
      }
    },
    {
      "text": "Fry ginger 15 seconds, add chive whites and toss 40 seconds until they soften.",
      "textZh": "爆香姜丝 15 秒，下韭黄白段炒 40 秒变软。",
      "zhHint": "炒白段",
      "stateNote": {
        "visual": "White sections turn translucent and droop",
        "visualZh": "白段变半透明并软塌",
        "signal": "Sweet allium smell rises from the wok",
        "signalZh": "锅里飘出葱蒜甜香",
        "heat": "high",
        "timeRef": "40 seconds"
      }
    },
    {
      "text": "Add the chive greens and beef, splash in the wine, and toss 30 seconds.",
      "textZh": "下韭黄绿段和牛肉，淋绍酒，翻炒 30 秒。",
      "zhHint": "合炒",
      "stateNote": {
        "visual": "Greens wilt but keep a yellow-green tone",
        "visualZh": "叶段塌软但保持黄绿色",
        "signal": "Volume drops by about a third",
        "signalZh": "体积缩了约三分之一",
        "heat": "high",
        "timeRef": "30 seconds"
      }
    },
    {
      "text": "Season with oyster sauce off the heat, finish with sesame oil, and serve.",
      "textZh": "离火加蚝油调味，淋香油出锅。",
      "zhHint": "调味出锅"
    }
  ],
  "tips": [
    "Yellow chives cook faster than green ones — cut the heat earlier than you think.",
    "Never cover the wok; trapped steam turns them to mush.",
    "Sesame oil goes in off the heat so it stays aromatic."
  ],
  "tipsZh": [
    "韭黄比韭菜熟得更快，比你以为的早离火。",
    "千万别盖锅盖，闷一下就烂。",
    "香油离火后淋才香。"
  ],
  "relatedSlugs": [
    "chinese-leek-shredded-pork",
    "onion-beef-stir-fry",
    "beef-and-broccoli",
    "oyster-sauce-beef"
  ],
  "image": "/images/recipes/oyster-sauce-beef.webp"
};
