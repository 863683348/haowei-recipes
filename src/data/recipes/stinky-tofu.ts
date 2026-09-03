import type { Recipe } from "@/lib/types";

/** Stinky Tofu (臭豆腐) (臭豆腐) — Day batch */
export const stinky_tofu: Recipe = {
  "titleEn": "Stinky Tofu (臭豆腐)",
  "titleZh": "臭豆腐",
  "pinyin": "chòu dòu fu",
  "cuisine": "湘式街头",
  "cuisineEn": "Hunan Street Style",
  "region": "长沙",
  "regionZh": "长沙",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Changsha black stinky tofu, deep-fried until crispy",
  "versionNoteZh": "长沙黑色臭豆腐，外酥里嫩",
  "tags": [
    "street-food",
    "bold-flavor",
    "fermented"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "The love-it-or-hate-it street food phenomenon — stinky tofu smells pungent but delivers an irresistible crispy exterior and custardy interior. Changsha's version uses a fermented brine that turns the tofu jet black before frying.",
  "storyZh": "爱者极爱、恨者避之的街头食物——臭豆腐闻着冲鼻、吃着上瘾，外酥里嫩。长沙版本用发酵卤水将豆腐染成焦黑色，再油炸至金黄酥脆。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Fermented stinky tofu blocks",
      "nameZh": "臭豆腐块",
      "amountMetric": "8 pieces",
      "amountUS": "8 pcs",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "2",
      "nameEn": "Garlic",
      "nameZh": "大蒜",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Chili flakes",
      "nameZh": "辣椒碎",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "4",
      "nameEn": "Soy sauce",
      "nameZh": "酱油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "5",
      "nameEn": "Cilantro",
      "nameZh": "香菜",
      "amountMetric": "2 tbsp chopped",
      "amountUS": "2 tbsp chopped",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "Vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "500ml",
      "amountUS": "2 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Drain stinky tofu and pat dry with paper towels.",
      "textZh": "臭豆腐从卤水中捞出，用厨房纸吸干表面卤水。",
      "stateNote": {
        "visual": "dark gray-black blocks, firm",
        "signal": "drained"
      }
    },
    {
      "text": "Make the dipping sauce: crush garlic, mix with chili flakes, soy sauce, and a splash of water.",
      "textZh": "调酱汁：大蒜捣碎，加入辣椒碎、酱油和少许清水搅匀。",
      "stateNote": {
        "visual": "rough reddish garlic-chili paste",
        "signal": "aromatic"
      }
    },
    {
      "text": "Heat oil to 190°C in a deep pot until a cube of tofu sizzles immediately on contact.",
      "textZh": "深锅倒油烧至190度，放入豆腐块应立即剧烈冒泡。",
      "stateNote": {
        "visual": "oil smoking lightly",
        "signal": "190°C ready"
      }
    },
    {
      "text": "Fry tofu blocks in batches for 2 minutes until deep golden and crusty outside.",
      "textZh": "分批下入臭豆腐块，炸2分钟至表面金黄酥脆。",
      "zhHint": "不要频繁翻动，让外壳定型",
      "stateNote": {
        "visual": "crisp dark golden crust",
        "signal": "2 minutes"
      }
    },
    {
      "text": "Drain on paper towels, split open, stuff with garlic-chili sauce and cilantro. Serve immediately.",
      "textZh": "捞出沥油，从中间剪开，填入蒜辣酱汁和香菜，趁热食用。",
      "stateNote": {
        "visual": "steaming hot, sauce oozing",
        "signal": "ready to eat"
      }
    }
  ],
  "tips": [
    "The stronger the fermentation smell, the better the final flavor",
    "Cut a pocket in each block rather than slicing through completely",
    "Add a drop of sesame oil to the sauce for fragrance"
  ],
  "tipsZh": [
    "发酵味道越浓，成品越香",
    "中间切口袋而非完全切开，方便填酱",
    "酱汁中滴几滴香油更提香"
  ],
  "relatedSlugs": [
    "fried-skewers-day88-2",
    "malatang-day88-9"
  ],
  "image": "/images/recipes/stinky-tofu-day88.webp",
  "slug": "stinky-tofu",
  "id": "stinky-tofu"
};
