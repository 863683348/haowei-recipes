import type { Recipe } from "@/lib/types";

/** Suan Cai Yu (Hot & Sour Pickled Mustard Greens Fish Stew) (酸菜鱼) — Seed batch */
export const suan_cai_yu_hot_sour_fish_stew: Recipe = {
  "id": "suan-cai-yu",
  "slug": "suan-cai-yu-hot-sour-fish-stew",
  "titleEn": "Suan Cai Yu (Hot & Sour Pickled Mustard Greens Fish Stew)",
  "titleZh": "酸菜鱼",
  "pinyin": "suān cài yú",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses gentle poaching instead of flash-frying fish slices — safer and more forgiving for home kitchens.",
  "versionNoteZh": "家常版用温火浸煮代替猛油滑炒鱼片，更安全、更易掌控火候。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Chongqing’s Yuzhong District taught me this when I was 12 — she’d simmer the broth while I shredded the suan cai, saying, 'The sourness must bloom before the heat arrives.' Her clay pot still sits on my stove.",
  "storyZh": "我十二岁时，重庆渝中区的姑妈教我这道菜——她一边慢炖汤底，一边让我手撕酸菜，说：‘酸味要先醒过来，辣才站得住脚。’她的砂锅至今还在我灶台上。",
  "ingredients": [
    {
      "id": "scy-01",
      "nameEn": "fresh tilapia fillets",
      "nameZh": "鲜鲈鱼片",
      "pinyin": "xiān lú yú piàn",
      "amountMetric": "600 g",
      "amountUS": "1.25 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Look for skinless, boneless fillets; cod or basa may substitute but tilapia holds texture best.",
      "noteZh": "选无皮无刺鱼片；可用鳕鱼或巴沙鱼替代，但鲈鱼口感最弹嫩。"
    },
    {
      "id": "scy-02",
      "nameEn": "Sichuan-style pickled mustard greens (suan cai)",
      "nameZh": "四川酸菜（袋装）",
      "pinyin": "sì chuān suān cài",
      "amountMetric": "300 g",
      "amountUS": "3 cups, loosely packed",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Must be fermented, not vinegar-brined — check label for 'lactic acid fermented' or 'no added vinegar'.",
      "noteZh": "须为乳酸发酵型，非醋渍酸菜；查看包装是否标注‘乳酸发酵’或‘无添加醋’。"
    },
    {
      "id": "scy-03",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "15 g",
      "amountUS": "1/4 cup",
      "category": "spice",
      "pantry": "asian",
      "note": "Use mild-to-medium heat varieties like facing heaven or er jing tiao; remove seeds for less heat.",
      "noteZh": "选用二荆条或朝天椒等中辣品种；去籽可降辣度。"
    },
    {
      "id": "scy-04",
      "nameEn": "Sichuan peppercorn",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Toasted whole Sichuan peppercorns preferred — avoid pre-ground (loses aroma fast).",
      "noteZh": "优选整粒现焙花椒；忌用久置粉状花椒（麻香易散）。",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "scy-05",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp, julienned",
      "category": "produce",
      "pantry": "local",
      "note": "Young ginger preferred for tenderness and milder bite.",
      "noteZh": "嫩姜纤维少、辣味柔和，更宜入汤。",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Rinse suan cai under cold water 3 times to remove excess salt; squeeze dry and roughly chop. Set aside.",
      "textZh": "酸菜冷水冲洗3遍去盐，挤干水分后粗切备用。",
      "zhHint": "去盐控水",
      "stateNote": {
        "visual": "Suan cai turns pale olive-green, no brine dripping when squeezed.",
        "visualZh": "酸菜呈浅橄榄绿，攥紧后无卤水滴落。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "No visible salt crystals remain on surface.",
        "signalZh": "表面无可见盐粒结晶。"
      }
    },
    {
      "text": "Heat 2 tbsp neutral oil in a heavy-bottomed pot over medium heat. Add dried chilies and Sichuan peppercorns; toast 45 seconds until fragrant and slightly darkened.",
      "textZh": "厚底锅中火加热中性油，下干辣椒与花椒，焙香45秒至微深、香气逸出。",
      "zhHint": "焙香料",
      "stateNote": {
        "visual": "Chilies puff slightly; oil shimmers with tiny golden flecks.",
        "visualZh": "辣椒微微鼓起，油面浮现金色细点。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium",
        "signal": "Aromatic, warm numbing scent fills the kitchen.",
        "signalZh": "厨房弥漫温暖麻香。"
      }
    },
    {
      "text": "Add ginger and stir 1 minute until edges turn translucent. Stir in suan cai; cook 3 minutes until aroma deepens and liquid reduces slightly.",
      "textZh": "加入姜丝炒1分钟至边缘微透，再下酸菜翻炒3分钟，至酸香浓郁、汁水略收。",
      "zhHint": "激香姜与酸菜",
      "stateNote": {
        "visual": "Ginger softens; suan cai darkens slightly and releases tangy steam.",
        "visualZh": "姜丝变软，酸菜颜色微深，腾起微酸热气。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "Tangy, fermented fragrance intensifies — not sharp or sour-smelling.",
        "signalZh": "酸香发酵味明显增强，不刺鼻不呛喉。"
      }
    },
    {
      "text": "Pour in 1.5 L hot water (or fish stock if available). Bring to gentle boil, then reduce heat to low. Simmer uncovered 15 minutes.",
      "textZh": "冲入1.5升热水（或鱼骨高汤），煮沸后转小火，敞盖慢煨15分钟。",
      "zhHint": "熬出醇厚汤底",
      "stateNote": {
        "visual": "Surface ripples softly; thin white foam gathers at edges.",
        "visualZh": "汤面轻漾涟漪，边缘聚薄层白沫。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Clear, clean sour aroma — no raw fermentation smell remains.",
        "signalZh": "酸香清正，无生酵异味。"
      }
    },
    {
      "text": "Season with 1 tsp salt and 1 tsp white pepper. Gently slide fish slices into simmering broth one by one. Poach 4–5 minutes until opaque and just firm — do not stir vigorously.",
      "textZh": "加盐和白胡椒调味；鱼片逐片滑入微沸汤中，浸煮4–5分钟至断生、微弹即止，勿大力搅动。",
      "zhHint": "轻柔浸煮鱼片",
      "stateNote": {
        "visual": "Fish turns fully opaque white with faint pink center; edges curl slightly.",
        "visualZh": "鱼片全白微粉，边缘微卷，中心略显柔润。",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "heat": "low",
        "signal": "Firm but yielding to gentle pressure — never rubbery.",
        "signalZh": "按压微弹不硬，绝不可发柴。"
      }
    }
  ],
  "tips": [
    "For deeper umami, simmer fish bones (head + frame) in water 20 min before step 4 — strain and use as broth.",
    "Serve immediately: residual heat continues cooking fish. Overcooking makes it mushy.",
    "Top with fresh scallion greens and a drizzle of chili oil just before serving."
  ],
  "tipsZh": [
    "为增鲜，可在第4步前用鱼头鱼骨熬20分钟高汤，滤渣取汤。",
    "务必趁热上桌：余温会继续烹煮鱼片，过熟则松散失形。",
    "上桌前撒新鲜葱绿，淋一勺红油提香增色。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/suan-cai-yu-hot-sour-fish-stew.webp"
};
