import type { Recipe } from "@/lib/types";

/** Cilantro Beef Stir-Fry (香菜牛肉丝) (香菜牛肉丝) — Day batch */
export const cilantro_beef_stir_fry: Recipe = {
  "id": "cilantro-beef-stir-fry",
  "slug": "cilantro-beef-stir-fry",
  "titleEn": "Cilantro Beef Stir-Fry (香菜牛肉丝)",
  "titleZh": "香菜牛肉丝",
  "pinyin": "xiāng cài niú ròu sī",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version velvet the beef in cornstarch water for tenderness. Restaurant version flash-fries at higher heat for wok hei.",
  "versionNoteZh": "家常版用淀粉水给牛肉上浆保嫩。餐厅版大火爆炒出锅气。",
  "tags": [
    "beef",
    "cilantro",
    "stir-fry",
    "velveting",
    "weeknight",
    "25-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "Cilantro is the most divisive herb in the world, and this dish is unapologetically for the people who love it — a full bunch goes in at the very end so the stems stay crunchy and the leaves only just wilt.",
  "storyZh": "香菜是全球最招争议的香草，这道菜毫不掩饰地站在爱它那一边——整整一把最后下锅，梗还是脆的，叶子刚塌下去。",
  "ingredients": [
    {
      "id": "cbf-1",
      "nameEn": "beef flank or sirloin, sliced thin across the grain",
      "nameZh": "牛里脊或牛腩边，逆纹切丝",
      "amountMetric": "350 g",
      "amountUS": "about 12 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cbf-2",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "cbf-3",
      "nameEn": "water, for the slurry",
      "nameZh": "清水",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "cbf-4",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cbf-5",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cbf-6",
      "nameEn": "cilantro, stems and leaves, cut into 4 cm lengths",
      "nameZh": "香菜，切 4 cm 段",
      "amountMetric": "1 large bunch, about 120 g",
      "amountUS": "1 large bunch",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cbf-7",
      "nameEn": "dried chilies, snipped",
      "nameZh": "干辣椒段",
      "amountMetric": "6 pieces",
      "amountUS": "6 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "cbf-8",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cbf-9",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cbf-10",
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
      "text": "Mix the beef with cornstarch slurry, soy sauce and wine. Massage 1 minute until it feels sticky.",
      "textZh": "牛肉加淀粉水、生抽、绍酒抓 1 分钟至发黏。",
      "zhHint": "上浆",
      "stateNote": {
        "visual": "Every strip is evenly coated, no pooling liquid",
        "visualZh": "每根肉丝均匀挂浆，碗底无积水",
        "signal": "Strips cling together slightly when lifted",
        "signalZh": "提起时肉丝略微粘连",
        "timeRef": "1 minute"
      }
    },
    {
      "text": "Rest the beef 10 minutes at room temperature while you prep the aromatics.",
      "textZh": "室温静置 10 分钟，同时准备配料。",
      "zhHint": "静置入味"
    },
    {
      "text": "Heat the wok until a drop of water evaporates instantly. Add oil and swirl.",
      "textZh": "锅烧到滴水即干，倒油晃匀。",
      "zhHint": "烧热锅",
      "stateNote": {
        "visual": "Oil shimmers and forms quick ripples",
        "visualZh": "油面反光并迅速起波纹",
        "signal": "A wisp of smoke appears at the edge",
        "signalZh": "锅边开始冒一丝青烟",
        "heat": "high"
      }
    },
    {
      "text": "Add beef in one layer. Leave 40 seconds, then stir-fry 60 seconds until just browned. Remove.",
      "textZh": "牛肉铺一层，停 40 秒后翻炒 60 秒至刚变色，盛出。",
      "zhHint": "滑炒牛肉",
      "stateNote": {
        "visual": "Underside turns grey-brown, top still pink",
        "visualZh": "底面变灰褐，上面还带粉色",
        "signal": "No red patches left, but strips are still glossy",
        "signalZh": "看不到生红，但肉丝仍油亮",
        "heat": "high",
        "timeRef": "about 100 seconds"
      }
    },
    {
      "text": "Lower the heat, fry chilies, garlic and ginger 15 seconds until fragrant but not dark.",
      "textZh": "转中火，下干辣椒、蒜末、姜末炒 15 秒出香不上色。",
      "zhHint": "爆香辣椒",
      "stateNote": {
        "visual": "Chilies darken slightly, garlic stays pale",
        "visualZh": "辣椒略深，蒜末仍发白",
        "signal": "Sharp chili aroma hits the nose",
        "signalZh": "辣椒香气冲鼻",
        "heat": "medium",
        "timeRef": "15 seconds"
      }
    },
    {
      "text": "Return the beef, add cilantro, and toss 20 seconds only — the leaves should barely wilt.",
      "textZh": "回锅加香菜，翻炒 20 秒即可，叶子刚塌就行。",
      "zhHint": "下香菜",
      "stateNote": {
        "visual": "Leaves collapse but stems stay bright green",
        "visualZh": "叶子塌下，梗仍翠绿",
        "signal": "Cilantro scent is still fresh, not cooked",
        "signalZh": "香菜味清鲜不发闷",
        "heat": "high",
        "timeRef": "20 seconds"
      }
    },
    {
      "text": "Taste for salt and serve immediately with rice.",
      "textZh": "尝味补盐，立刻配米饭上桌。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Slice across the grain — with the grain and the strips turn to rope.",
    "The cornstarch slurry is what keeps the beef silky; skip it and the meat toughens fast.",
    "Cilantro goes in last and briefly. Twenty seconds, no more."
  ],
  "tipsZh": [
    "一定要逆纹切，顺纹会嚼不动。",
    "淀粉水是牛肉滑嫩的关键，省了就发柴。",
    "香菜最后下、只炒 20 秒。"
  ],
  "relatedSlugs": [
    "hunan-sliced-beef-stir-fry",
    "green-pepper-beef",
    "onion-beef-stir-fry",
    "oyster-sauce-beef"
  ],
  "image": "/images/recipes/onion-beef-stir-fry.webp"
};
