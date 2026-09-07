import type { Recipe } from "@/lib/types";

/** Dried Bamboo Shoot Braised Pork (笋干红烧肉) (笋干红烧肉) — Day batch */
export const dried_bamboo_braised_pork: Recipe = {
  "id": "dried-bamboo-braised-pork",
  "slug": "dried-bamboo-braised-pork",
  "titleEn": "Dried Bamboo Shoot Braised Pork (笋干红烧肉)",
  "titleZh": "笋干红烧肉",
  "pinyin": "sǔn gàn hóng shāo ròu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Zhejiang (浙江)",
  "regionZh": "浙江",
  "difficulty": "medium",
  "timeMin": 100,
  "servings": 4,
  "version": "family",
  "versionNote": "Dried bamboo shoots absorb the rich pork fat during braising, becoming savory, chewy, and deeply flavorful — often more loved than the pork itself.",
  "versionNoteZh": "笋干在红烧过程中吸收五花肉油脂，变得咸香有嚼劲，甚至比肉更受欢迎。",
  "tags": [
    "braise",
    "comfort",
    "pork",
    "seasonal",
    "jiangnan"
  ],
  "dietary": [
    "none"
  ],
  "story": "Sǔn gàn — dried bamboo shoots — is one of Jiangnan's great culinary treasures.",
  "storyZh": "笋干——干制竹笋——是江南 culinary 的珍宝之一。",
  "ingredients": [
    {
      "id": "db-pork",
      "nameEn": "pork belly, cut into 3 cm cubes",
      "nameZh": "五花肉切3厘米方块",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "db-bamboo",
      "nameEn": "dried bamboo shoots (sǔn gàn), rehydrated and cut",
      "nameZh": "笋干（泡发切块）",
      "amountMetric": "30 g dried (~150 g rehydrated)",
      "amountUS": "1 oz dried (~5 oz rehydrated)",
      "category": "produce",
      "pantry": "asian",
      "termKey": "bamboo-shoots"
    },
    {
      "id": "db-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "db-scallion",
      "nameEn": "scallions, cut into 3 cm lengths",
      "nameZh": "葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "db-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "db-dark",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "½ tbsp",
      "amountUS": "½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "db-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "db-rock",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "db-star",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 whole",
      "amountUS": "1 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "db-oil",
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
      "text": "Rehydrate dried bamboo shoots in warm water for 4-6 hours (or overnight). Drain, rinse, and cut into 3 cm pieces. Trim any tough ends.",
      "textZh": "笋干用温水泡发4-6小时（或过夜）。沥干冲洗，切3厘米块。切除硬根。",
      "stateNote": {
        "visual": "Shoots are plump, flexible, and dark golden-brown",
        "visualZh": "笋干饱满有弹性，深金黄褐色",
        "timeRef": "4-6 hours",
        "timeRefZh": "4-6 小时",
        "signal": "No hard or fibrous core remaining"
      }
    },
    {
      "text": "Blanch pork belly cubes in boiling water for 3 minutes. Drain and rinse.",
      "textZh": "五花肉块沸水焯3分钟，捞出冲洗。",
      "stateNote": {
        "visual": "Gray scum on surface; water cloudy",
        "visualZh": "水面浮灰沫；水浑浊",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Water turns from pink to gray"
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
      "text": "Add rehydrated bamboo shoots and enough hot water to cover. Bring to a boil, then reduce to a simmer. Cover and cook 50 minutes. Uncover and simmer 15 minutes to reduce sauce.",
      "textZh": "加入笋干和足量热水没过。大火烧开，转小火盖盖焖50分钟。开盖再煮15分钟收汁。",
      "stateNote": {
        "visual": "Gentle simmer; sauce is rich brown; bamboo is tender but chewy",
        "visualZh": "汤汁微滚，深棕色浓汤；笋干软糯但保持嚼劲",
        "heat": "low",
        "timeRef": "65 minutes total",
        "timeRefZh": "共65分钟",
        "signal": "Pork yields to chopstick; sauce coats spoon"
      }
    }
  ],
  "tips": [
    "Dried bamboo shoots have an intense umami that fresh ones can't match.",
    "If the bamboo still feels tough after braising, extend cooking by 10-15 minutes.",
    "This dish is excellent cold — the flavors intensify as it rests.",
    "Leftover braising liquid makes an incredible noodle soup base."
  ],
  "tipsZh": [
    "笋干有鲜笋无法比拟的浓缩鲜味。别省泡发步骤——这是风味的关键。",
    "如果笋干烧完还觉得韧，多焖10-15分钟。",
    "这道菜冷吃也很好——风味在静置中继续融合。",
    "剩下的红烧汁是绝佳的汤面底汤。"
  ],
  "relatedSlugs": [
    "oil-braised-bamboo-shoots",
    "hongshao-pork",
    "fermented-tofu-braised-pork",
    "home-style-pork"
  ],
  "image": "/images/recipes/oil-braised-bamboo-shoots.webp"
};
