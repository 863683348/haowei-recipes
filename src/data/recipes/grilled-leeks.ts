import type { Recipe } from "@/lib/types";

/** Grilled Leeks (烤韭菜) — Seed batch */
export const grilled_leeks: Recipe = {
  "id": "kao-jiu-cai",
  "slug": "grilled-leeks",
  "titleEn": "Grilled Leeks",
  "titleZh": "烤韭菜",
  "pinyin": "kao jiu cai",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses whole leek stems — grilled gently to sweeten their natural oniony bite, then finished with toasted sesame oil and white pepper.",
  "versionNoteZh": "家常版整根韭菜茎烤制，以中火激发天然甜味，最后淋芝麻油与白胡椒提香。",
  "tags": [
    "15-min",
    "vegetarian",
    "side"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Jinan served these alongside lamb skewers every spring — she’d harvest leeks from her rooftop plot, brush them with oil, and lay them across the grill grate while the coals still glowed orange.",
  "storyZh": "我在济南的姑姑每年春天都配羊肉串端上这道菜——她从屋顶小菜园割韭菜，刷油后铺在尚泛橙光的炭火上。",
  "ingredients": [
    {
      "id": "gl-01",
      "nameEn": "leeks (large, 2–3 cm thick at base)",
      "nameZh": "韭菜（大棵，根部粗2–3厘米）",
      "pinyin": "jiu cai",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "produce",
      "pantry": "local",
      "note": "Choose firm, deep green stalks with clean white roots — avoid yellowing or limp leaves.",
      "noteZh": "选硬挺深绿叶、洁净白根；避黄叶、萎蔫。"
    },
    {
      "id": "gl-02",
      "nameEn": "neutral oil (e.g., grapeseed or canola)",
      "nameZh": "无味植物油（如葡萄籽油或菜籽油）",
      "pinyin": "wu wei zhi wu you",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gl-03",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油（芝麻油）",
      "pinyin": "xiang you",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "gl-04",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bai hu jiao fen",
      "amountMetric": "2 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Trim root ends and dark green tops — keep only pale green and white stalks (about 15 cm long). Rinse thoroughly under cold water, fanning layers to remove grit.",
      "textZh": "剪去根须与深绿叶尖，只留淡绿及白色茎段（约15厘米）；冷水冲洗并拨开叶层，洗净泥沙。",
      "zhHint": "拨开洗沙",
      "stateNote": {
        "visual": "Stalks look clean, no visible soil between layers.",
        "visualZh": "茎段洁净，叶层间无泥沙。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Water runs clear after rinsing.",
        "signalZh": "冲洗后水流清澈。"
      }
    },
    {
      "text": "Pat dry with paper towels. Brush both sides lightly with neutral oil — just enough to coat, not pool.",
      "textZh": "厨房纸吸干，双面薄刷无味油——仅覆油膜，不积液。",
      "zhHint": "薄油不积",
      "stateNote": {
        "visual": "Stalks gleam faintly, no oil droplets bead.",
        "visualZh": "茎段微泛光，无油珠凝结。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Oil spreads evenly without running.",
        "signalZh": "油膜均匀延展，不流淌。"
      }
    },
    {
      "text": "Heat grill pan over medium heat until warm but not smoking. Lay leeks crosswise across grates — they’ll bend slightly but hold shape.",
      "textZh": "烤盘中火预热至温热不冒烟；韭菜横放于烤条上——略弯但不断。",
      "zhHint": "中火横放",
      "stateNote": {
        "visual": "Pan surface shimmers faintly, no visible smoke.",
        "visualZh": "锅面微泛光，无烟。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium",
        "signal": "Droplet of water sizzles and evaporates in 2 seconds.",
        "signalZh": "滴水入锅2秒即嘶响蒸发。"
      }
    },
    {
      "text": "Grill 3–4 minutes per side, turning once, until stalks are tender-crisp and show light grill marks — do not overcook or they’ll wilt.",
      "textZh": "每面烤3–4分钟，翻一次，至茎段柔韧带脆、显浅色烤痕——勿过熟，否则塌软。",
      "zhHint": "见痕即翻",
      "stateNote": {
        "visual": "Pale green turns soft jade; grill marks appear as faint brown lines.",
        "visualZh": "淡绿色转为柔润青玉色；烤痕呈浅褐细线。",
        "timeRef": "6–8 minutes total",
        "timeRefZh": "共6–8分钟",
        "heat": "medium",
        "signal": "Stalk yields slightly to gentle pressure but springs back.",
        "signalZh": "轻压微软，松手即弹回。"
      }
    },
    {
      "text": "Transfer to a plate. While hot, drizzle with toasted sesame oil and sprinkle white pepper evenly over both sides.",
      "textZh": "装盘趁热淋香油，撒白胡椒粉于两面。",
      "zhHint": "热淋热撒",
      "stateNote": {
        "visual": "Oil glistens on warm, supple stalks; white pepper speckles evenly.",
        "visualZh": "香油在温润茎段上泛光；白胡椒均匀点染。",
        "timeRef": "immediately after grilling",
        "timeRefZh": "出炉即淋即撒",
        "signal": "Aromatic nuttiness rises instantly.",
        "signalZh": "瞬间升腾坚果般醇香。"
      }
    }
  ],
  "tips": [
    "Leeks taste sweetest in early spring — seek local farmers’ market bunches.",
    "For extra depth: add ½ tsp light soy sauce to the neutral oil before brushing.",
    "Serve within 5 minutes — texture degrades quickly as they cool."
  ],
  "tipsZh": [
    "韭菜春初最甜——优选本地农夫市集新鲜捆。",
    "增风味：中性油中加½茶匙生抽再刷。",
    "5分钟内上桌——冷却后口感迅速变差。"
  ],
  "relatedSlugs": [
    "lamb-skewers-chinese-bbq",
    "grilled-chicken-wings"
  ],
  "image": "/images/recipes/grilled-leeks.webp"
};
