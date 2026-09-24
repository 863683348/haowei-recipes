import type { Recipe } from "@/lib/types";

/** Beef with Chinese Broccoli (芥兰炒牛肉) (芥兰炒牛肉) — Day batch */
export const beef_with_gai_lan: Recipe = {
  "id": "beef-with-gai-lan",
  "slug": "beef-with-gai-lan",
  "titleEn": "Beef with Chinese Broccoli (芥兰炒牛肉)",
  "titleZh": "芥兰炒牛肉",
  "pinyin": "jiè lán chǎo niú ròu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version blanches the gai lan first so the stem cooks evenly. Restaurant version stir-fries it raw over a roaring flame.",
  "versionNoteZh": "家常版先把芥兰焯水，梗才熟得均匀。餐厅版大火生炒。",
  "tags": [
    "beef",
    "gai-lan",
    "stir-fry",
    "canton",
    "25-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "In Guangdong, gai lan with beef is a benchmark dish — it shows up on every cha chaan teng menu and the cook is judged on whether the stem is tender-crisp and the sauce has just enough ginger to cut the beef.",
  "storyZh": "在广东，芥兰炒牛肉是道基准菜——每家茶餐厅都有，好不好吃就看梗是否脆嫩、姜味是否刚好压住牛肉。",
  "ingredients": [
    {
      "id": "bgl-1",
      "nameEn": "beef flank, sliced thin across the grain",
      "nameZh": "牛腩边，逆纹薄片",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "bgl-2",
      "nameEn": "gai lan (Chinese broccoli)",
      "nameZh": "芥兰",
      "amountMetric": "400 g",
      "amountUS": "about 1 lb",
      "category": "produce",
      "pantry": "asian",
      "note": "Stems should snap cleanly and be deep green."
    },
    {
      "id": "bgl-3",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "bgl-4",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bgl-5",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "bgl-6",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "bgl-7",
      "nameEn": "ginger, sliced into thin coins",
      "nameZh": "姜片",
      "amountMetric": "6 slices",
      "amountUS": "6 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bgl-8",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "bgl-9",
      "nameEn": "baking soda, for tenderising (optional)",
      "nameZh": "小苏打（可选）",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "other",
      "pantry": "local",
      "note": "Use only if the beef is a tough cut."
    },
    {
      "id": "bgl-10",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Marinate the beef with soy sauce, wine, cornstarch and optional baking soda. Rest 15 minutes.",
      "textZh": "牛肉加生抽、绍酒、淀粉和可选的苏打抓匀，静置 15 分钟。",
      "zhHint": "腌制牛肉",
      "stateNote": {
        "visual": "Slices look wet and slightly glossy",
        "visualZh": "肉片湿润微亮",
        "signal": "No dry patches of starch remain",
        "signalZh": "看不到干粉块"
      }
    },
    {
      "text": "Trim the gai lan: peel fibrous stem skin, cut stems on a steep diagonal, keep leaves whole.",
      "textZh": "芥兰处理：削去梗上老筋，梗斜切，叶片保留整片。",
      "zhHint": "处理芥兰"
    },
    {
      "text": "Blanch stems in boiling salted water 45 seconds, add leaves for 15 seconds, then drain and shock in cold water.",
      "textZh": "沸盐水焯梗 45 秒，下叶再 15 秒，捞出过冷水。",
      "zhHint": "焯芥兰",
      "stateNote": {
        "visual": "Stems go from dull to vivid jade green",
        "visualZh": "梗由暗绿转成亮翠绿",
        "signal": "A stem bends without snapping in half",
        "signalZh": "梗能弯但不会脆断",
        "heat": "high",
        "timeRef": "60 seconds total"
      }
    },
    {
      "text": "Heat the wok over high heat, add oil, sear the beef 1 minute, then remove.",
      "textZh": "大火热锅放油，牛肉煎 1 分钟盛出。",
      "zhHint": "滑炒牛肉",
      "stateNote": {
        "visual": "Edges brown while the centre is still pink",
        "visualZh": "边缘焦褐，中心还粉",
        "signal": "Beef feels firm but not springy when pressed",
        "signalZh": "按压肉质紧实但不回弹",
        "heat": "high",
        "timeRef": "1 minute"
      }
    },
    {
      "text": "Fry ginger and garlic 20 seconds, add gai lan and toss 1 minute with a splash of the blanching water.",
      "textZh": "爆香姜蒜 20 秒，下芥兰加一勺焯菜水炒 1 分钟。",
      "zhHint": "炒芥兰",
      "stateNote": {
        "visual": "Leaves wilt and stems turn glossy",
        "visualZh": "叶片塌软，梗面油亮",
        "signal": "Vegetables hiss steadily, not steam-logged",
        "signalZh": "锅里持续滋响，不闷水汽",
        "heat": "high",
        "timeRef": "1 minute"
      }
    },
    {
      "text": "Return the beef, add oyster sauce and a splash of water, and toss 40 seconds until the sauce coats everything.",
      "textZh": "回锅牛肉，加蚝油和少许水，翻炒 40 秒裹匀。",
      "zhHint": "回锅收汁",
      "stateNote": {
        "visual": "Sauce becomes a thin glossy film",
        "visualZh": "酱汁呈薄亮膜状",
        "signal": "No puddle at the bottom of the wok",
        "signalZh": "锅底没有积汁",
        "heat": "high",
        "timeRef": "40 seconds"
      }
    },
    {
      "text": "Plate immediately, stems first and leaves on top, so the greens keep their crunch.",
      "textZh": "立刻装盘，梗在下叶在上，保持脆度。",
      "zhHint": "装盘"
    }
  ],
  "tips": [
    "Peel the stem skin — it is stringy and never softens.",
    "Salt the blanching water; it seasons the greens from the inside.",
    "Shocking in cold water is what keeps gai lan bright green."
  ],
  "tipsZh": [
    "梗上的老皮一定要削，否则永远咬不烂。",
    "焯菜水里加盐，从内到外给菜味。",
    "过冷水是芥兰保持翠绿的关键。"
  ],
  "relatedSlugs": [
    "beef-and-broccoli",
    "green-pepper-beef",
    "oyster-sauce-beef",
    "garlic-romaine"
  ],
  "image": "/images/recipes/beef-and-broccoli.webp"
};
