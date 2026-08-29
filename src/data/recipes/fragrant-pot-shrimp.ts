import type { Recipe } from "@/lib/types";

/** Fragrant Pot Shrimp (香锅虾) — Seed batch */
export const fragrant_pot_shrimp: Recipe = {
  "id": "xiang-guo-xia",
  "slug": "fragrant-pot-shrimp",
  "titleEn": "Fragrant Pot Shrimp",
  "titleZh": "香锅虾",
  "pinyin": "xiāng guō xiā",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Changsha",
  "regionZh": "长沙",
  "difficulty": "medium",
  "timeMin": 32,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses peeled, deveined shrimp sautéed in aromatics — no deep-frying or MSG-laced seasoning packets.",
  "versionNoteZh": "家常版用去壳去线鲜虾，纯香料煸炒——无油炸，无市售香锅酱。",
  "tags": [
    "30-min",
    "weeknight",
    "seafood"
  ],
  "dietary": [
    "none"
  ],
  "story": "My cousin in Changsha ran a tiny street-side xiangguo stall near Taiping Street — she’d marinate shrimp in Shaoxing wine and ginger for 10 minutes, then toss them with lotus root and bamboo shoots in a roaring wok. Her secret? A spoonful of fermented black beans, added last.",
  "storyZh": "我长沙表姐在太平街口支了个小香锅摊——虾仁用绍兴酒和姜腌 10 分钟，再与莲藕、笋片同炒。她的秘诀？出锅前才放一勺豆豉。",
  "ingredients": [
    {
      "id": "shr-01",
      "nameEn": "large shrimp",
      "nameZh": "大虾",
      "pinyin": "dà xiā",
      "amountMetric": "300 g",
      "amountUS": "12–14 count, peeled & deveined",
      "category": "protein",
      "pantry": "local",
      "note": "Frozen raw shrimp (thawed) works perfectly. Pat dry before cooking.",
      "noteZh": "冷冻鲜虾（解冻）完全可用；烹饪前务必擦干。",
    },
    {
      "id": "win-01",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry if unavailable — never cooking wine labeled 'for cooking' (too salty).",
      "noteZh": "无绍兴酒可用干雪莉酒替代；忌‘料酒’（含盐过高）。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "gar-03",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "3 cloves",
      "amountUS": "1 tsp minced",
      "category": "produce",
      "pantry": "local",
      "note": "Crush lightly with side of knife before mincing — releases more oil and aroma.",
      "noteZh": "拍松后再切末，更出油、更香。",
      "termKey": "garlic"
    },
    {
      "id": "chi-03",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "5 g",
      "amountUS": "6–7 whole chilies",
      "category": "spice",
      "pantry": "asian",
      "note": "Use mild variety; deseed for family meals. Sub: 1/2 tsp crushed red pepper.",
      "noteZh": "选微辣品种；家常可去籽。替代：红椒碎 1/2 茶匙。",
      "termKey": "dried-chili"
    },
    {
      "id": "fer-01",
      "nameEn": "fermented black beans",
      "nameZh": "豆豉",
      "pinyin": "dòu chǐ",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp, rinsed & chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse briefly to remove excess salt; chop finely so flavor disperses evenly.",
      "noteZh": "快速冲洗去浮盐；切碎使咸鲜均匀释放。",
    }
  ],
  "steps": [
    {
      "text": "Pat shrimp completely dry. Marinate with Shaoxing wine and half the garlic (minced) for 10 minutes at room temperature.",
      "textZh": "虾仁彻底擦干，用绍兴酒与一半蒜末拌匀，室温腌 10 分钟。",
      "zhHint": "擦干+酒腌，去腥增嫩",
      "stateNote": {
        "visual": "Shrimp appear plump and glossy; liquid is absorbed, not pooled.",
        "visualZh": "虾仁饱满油亮，无多余酒液渗出。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Shrimp feel firmer and slightly springy to touch.",
        "signalZh": "手指轻按，虾肉明显弹韧。"
      }
    },
    {
      "text": "Heat 20 ml (1.5 tbsp) oil in wok over medium-high heat until shimmering. Add dried chilies and stir-fry 15 seconds until fragrant.",
      "textZh": "炒锅中火烧热 20 毫升油至微涟漪，下干辣椒煸香 15 秒。",
      "zhHint": "热油快炝，辣香不苦",
      "stateNote": {
        "visual": "Chilies swell slightly and release a warm, smoky fragrance.",
        "visualZh": "辣椒微胀，散发温热烟熏香。",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "medium-high",
        "signal": "No blackening or acrid smell — just clean chili aroma.",
        "signalZh": "无焦黑、无呛味，唯纯正椒香。"
      }
    },
    {
      "text": "Add remaining garlic and stir-fry 20 seconds until golden at edges. Immediately add shrimp in a single layer — do not stir yet.",
      "textZh": "下剩余蒜末，炒 20 秒至边缘微黄；立刻铺入虾仁单层，暂勿翻动。",
      "zhHint": "蒜末后下，防焦；虾单层，保嫩",
      "stateNote": {
        "visual": "Garlic turns pale gold; shrimp begin to turn opaque at edges.",
        "visualZh": "蒜末呈淡金色；虾仁边缘开始变不透明。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "medium-high",
        "signal": "Garlic sizzles steadily — no popping or browning.",
        "signalZh": "蒜末持续滋滋声，无爆响或焦化。"
      }
    },
    {
      "text": "Let shrimp sear undisturbed 1 minute, then flip and cook 1 more minute until just pink and opaque throughout. Transfer to a plate — do not overcook.",
      "textZh": "静置煎 1 分钟，翻面再煎 1 分钟，至虾身全粉红、不透明即离锅——切勿过熟。",
      "zhHint": "两面各煎 1 分，弹牙是关键",
      "stateNote": {
        "visual": "Shrimp curl into loose C-shapes and turn uniformly pink; tails bright orange.",
        "visualZh": "虾身卷成松散 C 形，通体粉红；尾部橙亮。",
        "timeRef": "2 minutes total",
        "timeRefZh": "共 2 分钟",
        "heat": "medium-high",
        "signal": "Shrimp release easily from wok surface when lifted.",
        "signalZh": "虾仁轻提即离锅，不粘不碎。"
      }
    },
    {
      "text": "Wipe wok clean. Return to medium heat. Add fermented black beans and stir-fry 30 seconds until aromatic. Return shrimp, toss 45 seconds. Serve immediately with steamed rice.",
      "textZh": "擦净炒锅，中火复热；下豆豉煸 30 秒至浓香；倒回虾仁，翻匀 45 秒即出锅，配米饭。",
      "zhHint": "豆豉后放，香而不咸",
      "stateNote": {
        "visual": "Black beans glisten and release a deep, savory, almost meaty aroma.",
        "visualZh": "豆豉油亮，散发醇厚酱香，近似肉香。",
        "timeRef": "30 seconds + 45 seconds",
        "timeRefZh": "30 秒 + 45 秒",
        "heat": "medium",
        "signal": "Aroma shifts from raw bean to deeply fermented and complex.",
        "signalZh": "气味由生豆腥转为醇厚发酵香。"
      }
    }
  ],
  "tips": [
    "Never rinse shrimp under running water after thawing — it washes away flavor and makes them watery.",
    "Fermented black beans are essential — they’re the soul of xiangguo’s umami depth. Find them in Asian grocery refrigerated section or online.",
    "Serve with plain steamed rice — the sauce clings perfectly to each grain."
  ],
  "tipsZh": [
    "解冻虾仁切勿水冲——冲走鲜味且易出水。",
    "豆豉是灵魂！赋予香锅不可替代的醇厚咸鲜。超市冷藏区或网购均有售。",
    "必配白米饭——酱汁裹粒粒分明，一口入魂。"
  ],
  "relatedSlugs": [
    "dry-pot-cauliflower",
    "dry-pot-potato-slices"
  ],
  "image": "/images/recipes/fragrant-pot-shrimp.webp"
};
