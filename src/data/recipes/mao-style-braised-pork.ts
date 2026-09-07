import type { Recipe } from "@/lib/types";

/** Mao-Style Braised Pork (毛氏红烧肉) (毛氏红烧肉) — Day batch */
export const mao_style_braised_pork: Recipe = {
  "id": "mao-style-braised-pork",
  "slug": "mao-style-braised-pork",
  "titleEn": "Mao-Style Braised Pork (毛氏红烧肉)",
  "titleZh": "毛氏红烧肉",
  "pinyin": "máo shì hóng shāo ròu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan (湖南)",
  "regionZh": "湖南",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Hunan-style braised pork uses no soy sauce at all — the color comes entirely from caramelized rock sugar.",
  "versionNoteZh": "湘式红烧肉完全不用酱油——颜色全靠炒糖色。",
  "tags": [
    "braise",
    "hunan",
    "pork",
    "no-soy",
    "weekend"
  ],
  "dietary": [
    "none"
  ],
  "story": "Máo shì hóng shāo ròu is named after Chairman Mao Zedong's preference for this style.",
  "storyZh": "毛氏红烧肉因毛泽东主席的偏爱而得名。",
  "ingredients": [
    {
      "id": "mp-pork",
      "nameEn": "pork belly, cut into 3 cm cubes",
      "nameZh": "五花肉切3厘米方块",
      "amountMetric": "600 g",
      "amountUS": "about 1.3 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "mp-rock",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "30 g (~3 tbsp)",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "mp-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "mp-scallion",
      "nameEn": "scallions, cut into 4 cm lengths",
      "nameZh": "葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "mp-star",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 whole",
      "amountUS": "1 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "mp-shaoxing",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "mp-wine",
      "nameEn": "Chinese rice wine (huangjiu, optional)",
      "nameZh": "黄酒（可选）",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-wine"
    },
    {
      "id": "mp-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Blanch pork cubes in boiling water for 3 minutes with 1 tbsp Shaoxing wine. Drain and rinse.",
      "textZh": "五花肉块加1汤匙料酒入沸水焯3分钟。捞出冲洗。",
      "stateNote": {
        "visual": "Gray scum on surface; water cloudy",
        "visualZh": "水面浮灰沫；水浑浊",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Water turns from pink to gray"
      }
    },
    {
      "text": "Heat oil in a heavy pot over medium-low heat. Add rock sugar and stir constantly until melted and turning deep amber (about 3 minutes).",
      "textZh": "热锅下油，小火下冰糖，不停搅拌至融化变成深琥珀色（约3分钟）。",
      "stateNote": {
        "visual": "Sugar melts, bubbles, transitions from pale to deep amber",
        "visualZh": "糖融化冒泡，由浅变深琥珀色",
        "heat": "medium-low",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Color is the shade of old whiskey — not yet dark brown"
      }
    },
    {
      "text": "Immediately add drained pork. Toss vigorously to coat every piece in caramel. Add ginger, scallion, star anise.",
      "textZh": "立即下沥干的五花肉，快速翻炒裹匀糖色。加姜片、葱段、八角。",
      "stateNote": {
        "visual": "Pork instantly takes on deep mahogany color",
        "visualZh": "肉块瞬间染上深红木褐色",
        "heat": "medium",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Caramel coats every surface evenly"
      }
    },
    {
      "text": "Pour in remaining Shaoxing wine and huangjiu. Stir 30 seconds to deglaze.",
      "textZh": "倒入剩余料酒和黄酒，翻炒30秒让锅底焦糖融化。",
      "stateNote": {
        "visual": "Steam rises; caramel dissolves into a glossy glaze",
        "visualZh": "蒸汽升腾；焦糖化开成光泽釉面",
        "heat": "medium-high",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Sauce clings to pork — no pooling liquid"
      }
    },
    {
      "text": "Add enough boiling water to just cover the pork. Bring to a boil, then reduce to the lowest possible simmer. Cover and cook 60 minutes. Uncover and simmer 15 minutes to reduce sauce to a thick glaze.",
      "textZh": "加足量沸水刚没过肉块。大火烧开，转最小火盖盖焖60分钟。开盖再煮15分钟收汁至浓稠挂勺。",
      "stateNote": {
        "visual": "Gentle bubble breaks surface every 3-4 seconds; sauce thickens to lacquer gloss",
        "visualZh": "每3-4秒破出一个小泡；汤汁浓稠如漆",
        "heat": "low",
        "timeRef": "75 minutes total",
        "timeRefZh": "共75分钟",
        "signal": "Sauce coats spoon and holds its shape"
      }
    }
  ],
  "tips": [
    "No soy sauce is used — the color and saltiness come entirely from rock sugar caramel.",
    "The sugar caramel can burn quickly. Keep heat medium-low and stir constantly.",
    "This dish is sweeter than Cantonese braised pork.",
    "Leftovers taste even better the next day."
  ],
  "tipsZh": [
    "不用酱油——颜色和咸味全靠糖色和肉本身的美拉德反应。",
    "糖色很容易炒过头变苦。加糖时保持中低火，不停搅拌。",
    "这道菜比粤式红烧肉更甜。甜咸平衡，而不是咸甜。",
    "隔夜味道更好——风味继续融合。"
  ],
  "relatedSlugs": [
    "hongshao-pork",
    "fermented-tofu-braised-pork",
    "home-style-pork",
    "twice-cooked-pork"
  ],
  "image": "/images/recipes/hongshao-pork.webp"
};
