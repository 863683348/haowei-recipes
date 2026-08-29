import type { Recipe } from "@/lib/types";

/** Sweet Corn & Pork Bone Soup (玉米排骨汤) — Seed batch */
export const sweet_corn_pork_bone_soup: Recipe = {
  "id": "yu-mi-pai-gu-tang",
  "slug": "sweet-corn-pork-bone-soup",
  "titleEn": "Sweet Corn & Pork Bone Soup",
  "titleZh": "玉米排骨汤",
  "pinyin": "yù mǐ pái gǔ tāng",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Xiangtan",
  "regionZh": "湘潭",
  "difficulty": "easy",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses whole ears for maximum sweetness and avoids corn starch or sugar—restaurants sometimes add corn syrup for instant gloss, masking true flavor.",
  "versionNoteZh": "家常版用整根鲜玉米取天然甜；餐馆版偶加玉米糖浆增亮，反掩本味。",
  "tags": [
    "sweet",
    "light",
    "family-dinner"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Xiangtan ran a roadside stall near Lianhua Mountain—he’d shuck corn at dawn, cut ears into thirds, and simmer them with bones he’d saved from yesterday’s braised pork, calling it ‘the sweet breath of the mountain’.",
  "storyZh": "我湘潭舅舅在莲花山路边摆摊，天未亮就剥玉米，截成三段，配昨日卤肉剩骨同炖，称其为‘山的甜息’。",
  "ingredients": [
    {
      "id": "cm-01",
      "nameEn": "pork neck bones (with marrow)",
      "nameZh": "猪颈骨（带骨髓）",
      "pinyin": "zhū jǐng gǔ",
      "amountMetric": "450 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Same preference: marrow-rich, uncut neck bones.",
      "noteZh": "同前，优选带髓颈骨。"
    },
    {
      "id": "cm-02",
      "nameEn": "fresh sweet corn",
      "nameZh": "新鲜甜玉米",
      "pinyin": "xīn xiān tián yù mǐ",
      "amountMetric": "3 ears (about 450 g kernels + cobs)",
      "amountUS": "3 ears (about 2.5 cups kernels + cobs)",
      "category": "produce",
      "pantry": "local",
      "note": "Use milk-stage corn—kernels plump, milky when pierced. Sub: frozen corn kernels (add in last 15 min only).",
      "noteZh": "选乳熟期玉米——掐破溢乳汁。替代：冷冻玉米粒（仅最后15分钟下）。"
    },
    {
      "id": "cm-03",
      "nameEn": "dried longan flesh",
      "nameZh": "桂圆肉",
      "pinyin": "guì yuán ròu",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds round sweetness and nourishes Qi—common in Hunan home soups for children and elders.",
      "noteZh": "增醇甜、益心脾，湘人家厨常为老人孩童添入。"
    },
    {
      "id": "cm-04",
      "nameEn": "white pepper",
      "nameZh": "白胡椒",
      "pinyin": "bái hú jiāo",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp, freshly ground",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Blanch pork bones as in previous soups: cold water, boil, skim foam 3 minutes, rinse well.",
      "textZh": "猪骨同前法焯水：冷水入锅，沸后撇沫3分钟，温水洗净。",
      "zhHint": "基础去腥",
      "stateNote": {
        "visual": "Minimal foam, clean bone surface",
        "visualZh": "浮沫极少，骨面洁净",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Water returns to steady simmer after skimming",
        "signalZh": "撇沫后水复归匀沸"
      }
    },
    {
      "text": "Place bones and corn cobs (broken into thirds) in clean pot with 2 L cold water. Bring to gentle simmer and cook covered on low heat for 45 minutes.",
      "textZh": "净锅中放骨、断节玉米芯，加冷水2升。烧至微沸，盖盖小火炖45分钟。",
      "zhHint": "玉米芯先炖出甜",
      "stateNote": {
        "visual": "Water turns faintly yellow, corn cobs softening at ends",
        "visualZh": "水微泛黄，玉米芯两端变软",
        "timeRef": "45 minutes",
        "timeRefZh": "45 分钟",
        "heat": "low",
        "signal": "Sweet, grassy aroma fills kitchen",
        "signalZh": "厨房弥漫清甜青草香"
      }
    },
    {
      "text": "Add corn kernels and dried longan. Simmer uncovered on medium-low heat for 25 minutes.",
      "textZh": "下玉米粒与桂圆肉，敞盖中火炖25分钟。",
      "zhHint": "后下粒保甜润",
      "stateNote": {
        "visual": "Kernels plump and golden, longan swollen and translucent",
        "visualZh": "玉米粒饱满金黄，桂圆膨润透亮",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium-low",
        "signal": "Broth deepens to pale gold, sweetness intensifies",
        "signalZh": "汤色转淡金，甜香愈浓"
      }
    },
    {
      "text": "Remove corn cobs. Stir in freshly ground white pepper and a pinch of salt—just enough to lift sweetness, not dominate.",
      "textZh": "捞出玉米芯。撒现磨白胡椒与少许盐——仅提甜，不抢味。",
      "zhHint": "白胡椒引甜不燥",
      "stateNote": {
        "visual": "Fine white specks suspended in golden broth",
        "visualZh": "细白颗粒悬浮于金汤之中",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "Pepper aroma blooms instantly, warm and floral",
        "signalZh": "胡椒香瞬发，暖而微芳"
      }
    },
    {
      "text": "Taste and adjust salt only. Serve hot—no garnish needed, as the golden kernels and longan provide visual warmth.",
      "textZh": "尝味，仅微调盐。热汤上桌——金粒桂圆已足色足味，无需另饰。",
      "zhHint": "本真即美",
      "stateNote": {
        "visual": "Glossy golden broth studded with plump corn and amber longan",
        "visualZh": "油亮金汤缀满饱满玉米与琥珀桂圆",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "high",
        "signal": "Steam carries layered sweetness—corn, longan, and marrow",
        "signalZh": "热气裹三重甜香：玉米、桂圆、骨髓"
      }
    }
  ],
  "tips": [
    "Never use canned corn—it adds sodium and dulls sweetness.",
    "Save corn cobs for stock—they contain 70% of the corn’s natural sugar.",
    "This soup pairs perfectly with steamed rice and a simple stir-fried green vegetable."
  ],
  "tipsZh": [
    "禁用罐头玉米——钠高且甜味钝。",
    "玉米芯别丢！含玉米70%天然糖分，可存冻作高汤基底。",
    "此汤配白米饭与清炒时蔬，即成地道湘式家常一餐。"
  ],
  "relatedSlugs": [
    "lotus-root-pork-bone-soup",
    "winter-melon-coix-pork-bone-soup"
  ],
  "image": "/images/recipes/sweet-corn-pork-bone-soup.webp"
};
