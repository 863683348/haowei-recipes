import type { Recipe } from "@/lib/types";

/** Fermented Tofu Braised Pork (腐乳红烧肉) (腐乳红烧肉) — Day batch */
export const fermented_tofu_braised_pork: Recipe = {
  "id": "fermented-tofu-braised-pork",
  "slug": "fermented-tofu-braised-pork",
  "titleEn": "Fermented Tofu Braised Pork (腐乳红烧肉)",
  "titleZh": "腐乳红烧肉",
  "pinyin": "fǔ rǔ hóng shāo ròu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong (广东)",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Cantonese home version uses red fermented bean curd as the primary seasoning, giving the pork a distinctive reddish hue.",
  "versionNoteZh": "粤式家常版以红腐乳为主要调味料，赋予猪肉独特的红亮色泽。",
  "tags": [
    "braise",
    "cantonese",
    "pork",
    "comfort",
    "weekend"
  ],
  "dietary": [
    "none"
  ],
  "story": "Fermented tofu braised pork is Cantonese home cooking at its most flavorful.",
  "storyZh": "腐乳红烧肉是粤式家常菜中最有风味的代表之一。",
  "ingredients": [
    {
      "id": "ft-pork",
      "nameEn": "pork belly, cut into 3 cm cubes",
      "nameZh": "五花肉切3厘米方块",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "ft-fermented",
      "nameEn": "red fermented bean curd (hóng fǔ rǔ), mashed",
      "nameZh": "红腐乳（压碎）",
      "amountMetric": "3 pieces + 1 tbsp sauce",
      "amountUS": "3 cubes + 1 tbsp sauce",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "fermented-bean-curd"
    },
    {
      "id": "ft-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ft-scallion",
      "nameEn": "scallions, cut into 3 cm lengths",
      "nameZh": "葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ft-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ft-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ft-rock",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "ft-oil",
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
      "text": "Blanch pork cubes in boiling water for 3 minutes. Drain and rinse. Pat dry.",
      "textZh": "五花肉块沸水焯3分钟，捞出冲洗，沥干备用。",
      "stateNote": {
        "visual": "Gray scum rises; water turns cloudy",
        "visualZh": "水面浮起灰沫；水变浑浊",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Water turns from pink to gray"
      }
    },
    {
      "text": "Mash red fermented bean curd into a smooth paste with the accompanying sauce.",
      "textZh": "将红腐乳连同汤汁一起压成细腻酱糊。",
      "stateNote": {
        "visual": "Paste is deep crimson with visible silk strands",
        "visualZh": "酱糊呈深猩红色，有丝状质感",
        "signal": "No large curds remain"
      }
    },
    {
      "text": "Heat oil in a heavy pot. Sear pork on all sides until lightly golden (3-4 minutes).",
      "textZh": "热锅下油，五花肉四面煎至微金黄（3-4分钟）。",
      "stateNote": {
        "visual": "Pork edges golden brown; fat rendering",
        "visualZh": "肉块边缘金黄，肥肉开始出油",
        "heat": "medium",
        "timeRef": "3-4 minutes",
        "timeRefZh": "3-4 分钟",
        "signal": "Sizzle is steady, not splattering"
      }
    },
    {
      "text": "Add ginger and scallion. Stir 30 seconds. Add fermented bean curd paste, soy sauce, Shaoxing wine, and rock sugar.",
      "textZh": "下姜片葱段，炒30秒。加入腐乳酱、生抽、料酒和冰糖。",
      "stateNote": {
        "visual": "Paste dissolves into a rich crimson sauce",
        "visualZh": "酱糊化开，形成深红色浓汁",
        "heat": "medium",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Sauce bubbles around pork; sugar dissolving"
      }
    },
    {
      "text": "Add hot water to just cover the pork. Bring to a boil, then reduce to a simmer. Cover and cook 60 minutes. Uncover and simmer 15 minutes to reduce sauce.",
      "textZh": "加足量热水没过肉块。大火烧开，转小火盖盖焖60分钟。开盖再煮15分钟收汁至浓稠挂勺。",
      "stateNote": {
        "visual": "Gentle simmer; sauce is rich brown; pork is meltingly tender",
        "visualZh": "汤汁微滚，深棕色浓汤；猪肉入口即化",
        "heat": "low",
        "timeRef": "75 minutes total",
        "timeRefZh": "共75分钟",
        "signal": "Pork yields easily to chopstick; sauce coats spoon"
      }
    }
  ],
  "tips": [
    "Red fermented bean curd varies in saltiness by brand.",
    "The fermentation paste adds both color and umami — no dark soy needed.",
    "This dish is forgiving.",
    "Pairs beautifully with a simple blanched bok choy."
  ],
  "tipsZh": [
    "红腐乳咸度因品牌而异。",
    "腐乳同时提供颜色和鲜味——无需老抽上色。",
    "这道菜很宽容。",
    "配一道白灼菜心，解腻又平衡。"
  ],
  "relatedSlugs": [
    "hongshao-pork",
    "braised-pork-with-quail-eggs",
    "twice-cooked-pork",
    "char-siu-pork"
  ],
  "image": "/images/recipes/hongshao-pork.webp"
};
