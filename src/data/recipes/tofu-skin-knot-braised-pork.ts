import type { Recipe } from "@/lib/types";

/** Tofu Skin Knot Braised Pork (百叶结烧肉) (百叶结烧肉) — Day batch */
export const tofu_skin_knot_braised_pork: Recipe = {
  "id": "tofu-skin-knot-braised-pork",
  "slug": "tofu-skin-knot-braised-pork",
  "titleEn": "Tofu Skin Knot Braised Pork (百叶结烧肉)",
  "titleZh": "百叶结烧肉",
  "pinyin": "bǎi yè jié shāo ròu",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang",
  "region": "Jiangsu (江苏)",
  "regionZh": "江苏",
  "difficulty": "medium",
  "timeMin": 80,
  "servings": 4,
  "version": "family",
  "versionNote": "Huaiyang home version folds dried tofu skin into knots that absorb braising liquid like sponges.",
  "versionNoteZh": "淮扬家常版将千张折成结子，像海绵一样吸收红烧汁。",
  "tags": [
    "braise",
    "huaiyang",
    "pork",
    "tofu",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Bǎi yè jié — tofu skin knots — are a signature of Huaiyang cuisine, the refined cooking tradition of Jiangsu province.",
  "storyZh": "百叶结——豆腐皮结子——是淮扬菜的标志性元素，江苏精致烹饪传统的代表。",
  "ingredients": [
    {
      "id": "tk-pork",
      "nameEn": "pork belly, cut into 3 cm cubes",
      "nameZh": "五花肉切3厘米方块",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "tk-skin",
      "nameEn": "dried tofu skin sheets (bǎi yè), cut into 5 cm strips and knotted",
      "nameZh": "千张（百叶）切5厘米条打结",
      "amountMetric": "200 g (about 8-10 sheets)",
      "amountUS": "about 7 oz",
      "category": "protein",
      "pantry": "asian",
      "termKey": "dried-tofu-skin"
    },
    {
      "id": "tk-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tk-scallion",
      "nameEn": "scallions, cut into 3 cm lengths",
      "nameZh": "葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "tk-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tk-dark",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "tk-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "tk-rock",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "tk-star",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 whole",
      "amountUS": "1 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "tk-oil",
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
      "text": "Blanch pork belly cubes in boiling water for 3 minutes. Drain and rinse.",
      "textZh": "五花肉块沸水焯3分钟，捞出冲洗。",
      "stateNote": {
        "visual": "Gray scum rises; water cloudy",
        "visualZh": "浮起灰沫；水变浑浊",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Water turns from pink to gray"
      }
    },
    {
      "text": "Cut dried tofu skin into 5 cm wide strips. Fold each strip in half lengthwise, then tie into a simple overhand knot. Repeat for all strips.",
      "textZh": "千张切5厘米宽条。每条对折后打个简单活结。全部打好备用。",
      "stateNote": {
        "visual": "Neat knots, about 4 cm across, with a pocket in the center",
        "visualZh": "整齐的结子约4厘米宽，中间有口袋",
        "signal": "Knots hold their shape when lifted"
      }
    },
    {
      "text": "Heat oil in a heavy pot. Sear pork on all sides until golden (3-4 minutes).",
      "textZh": "热锅下油，五花肉四面煎至金黄（3-4分钟）。",
      "stateNote": {
        "visual": "Pork edges crispy golden; fat rendering",
        "visualZh": "肉块边缘金黄脆，肥肉出油",
        "heat": "medium",
        "timeRef": "3-4 minutes",
        "timeRefZh": "3-4 分钟",
        "signal": "Sizzle steady, not splattering"
      }
    },
    {
      "text": "Add ginger, scallion, star anise. Stir 30 seconds. Add soy sauces, Shaoxing wine, and rock sugar.",
      "textZh": "下姜片、葱段、八角，炒30秒。加生抽、老抽、料酒和冰糖。",
      "stateNote": {
        "visual": "Sauce bubbles around pork; sugar dissolving",
        "visualZh": "酱汁在肉周围冒泡；糖正在融化",
        "heat": "medium",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aromatics are fragrant, not browned"
      }
    },
    {
      "text": "Add tofu skin knots and enough hot water to cover. Bring to a boil, then reduce to a simmer. Cover and cook 50 minutes. Uncover and simmer 10 minutes to reduce sauce.",
      "textZh": "加入千张结子和足量热水没过。大火烧开转小火盖盖焖50分钟。开盖再煮10分钟收汁。",
      "stateNote": {
        "visual": "Gentle simmer; knots absorb sauce, turning golden brown; sauce thickens",
        "visualZh": "汤汁微滚；结子吸汁变金黄；汤汁浓稠",
        "heat": "low",
        "timeRef": "60 minutes total",
        "timeRefZh": "共60分钟",
        "signal": "Pork yields to chopstick; knots are soft but not falling apart"
      }
    }
  ],
  "tips": [
    "The knots are the star — they absorb sauce like sponges.",
    "If knots are still too firm after braising, extend cooking by 10 minutes.",
    "This dish is excellent at room temperature.",
    "Leftover braising liquid is incredible over plain noodles."
  ],
  "tipsZh": [
    "结子是主角——吸汁如海绵。别偷懒用预切的干豆腐皮，口感完全不同。",
    "如果结子还偏硬，多焖10分钟。",
    "这道菜常温吃更好——结子在静置中继续吸收风味。",
    "剩余红烧汁拌 plain 面条绝了。"
  ],
  "relatedSlugs": [
    "hongshao-pork",
    "dried-bamboo-braised-pork",
    "fermented-tofu-braised-pork",
    "home-style-pork"
  ],
  "image": "/images/recipes/braised-dried-tofu.webp"
};
