import type { Recipe } from "@/lib/types";

/** Malatang (Spicy Hot Pot) (麻辣烫) — Day batch */
export const malatang: Recipe = {
  "titleEn": "Malatang (Spicy Hot Pot)",
  "titleZh": "麻辣烫",
  "pinyin": "má là tàng",
  "cuisine": "川式街头",
  "cuisineEn": "Sichuan Street Style",
  "region": "四川",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Self-serve style with choice of ingredients in spicy broth",
  "versionNoteZh": "自选食材麻辣烫，麻辣鲜香",
  "tags": [
    "street-food",
    "spicy",
    "customizable",
    "comfort-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "Sichuan's answer to hot pot on a budget — choose your ingredients from a display, they're boiled in aromatic chili-broth, then served in a bowl with the peppery soup. The numbing mala sensation comes from Sichuan peppercorns.",
  "storyZh": "四川版平价麻辣烫——自选食材，在香辣的骨汤中煮熟，连汤带菜盛入碗中。花椒的麻和辣椒的辣交织，是川味街头最接地气的美味。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Mixed vegetables",
      "nameZh": "时蔬拼盘",
      "amountMetric": "300g",
      "amountUS": "10 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "vegetable-mix"
    },
    {
      "id": "2",
      "nameEn": "Fusion tofu puffs",
      "nameZh": "油豆腐泡",
      "amountMetric": "150g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "3",
      "nameEn": "Wide rice noodles",
      "nameZh": "宽米粉",
      "amountMetric": "100g",
      "amountUS": "3.5 oz",
      "category": "staple",
      "pantry": "asian"
    },
    {
      "id": "4",
      "nameEn": "Chicken slices",
      "nameZh": "鸡肉片",
      "amountMetric": "200g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Dried shredded kelp",
      "nameZh": "海带丝",
      "amountMetric": "80g",
      "amountUS": "3 oz",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "6",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "7",
      "nameEn": "Dried chili peppers",
      "nameZh": "干辣椒",
      "amountMetric": "8 pcs",
      "amountUS": "8 pcs",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "8",
      "nameEn": "Beef broth",
      "nameZh": "牛骨高汤",
      "amountMetric": "1L",
      "amountUS": "4 cups",
      "category": "other",
      "pantry": "asian"
    },
    {
      "id": "9",
      "nameEn": "Sesame paste",
      "nameZh": "芝麻酱",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Bring beef broth to a boil with whole Sichuan peppercorns and dried chilies, simmer 5 minutes.",
      "textZh": "牛骨高汤中加入花椒和干辣椒，大火煮开后转小火煮5分钟出麻辣味。",
      "stateNote": {
        "visual": "red oil rising, peppery aroma",
        "signal": "broth infused"
      }
    },
    {
      "text": "Add hard vegetables (kelp, root vegetables) first, cook 3 minutes.",
      "textZh": "先下耐煮的食材（海带丝、根茎类），煮3分钟。",
      "stateNote": {
        "visual": "kelp softened",
        "signal": "3 minutes"
      }
    },
    {
      "text": "Add tofu puffs, noodles, and chicken slices, cook 2 more minutes.",
      "textZh": "再加入豆腐泡、米粉和鸡肉片，继续煮2分钟。",
      "zhHint": "鸡肉片变色即熟",
      "stateNote": {
        "visual": "chicken opaque, noodles soft",
        "signal": "2 minutes"
      }
    },
    {
      "text": "Dissolve sesame paste in a little broth, pour into the pot and stir.",
      "textZh": "芝麻酱用少许汤汁化开，倒入锅中搅匀。",
      "stateNote": {
        "visual": "creamy orange-brown broth",
        "signal": "emulsified"
      }
    },
    {
      "text": "Ladle everything into bowls with plenty of broth. Garnish with cilantro and sesame.",
      "textZh": "连汤带料盛入碗中，撒香菜和白芝麻即可。",
      "stateNote": {
        "visual": "steaming, oily sheen on surface",
        "signal": "ready to eat"
      }
    }
  ],
  "tips": [
    "Adjust spice level by controlling chili quantity",
    "Add a spoon of peanut butter for richer sesame flavor",
    "Broth can be saved and reused — the base improves daily"
  ],
  "tipsZh": [
    "根据口味调整干辣椒用量控制辣度",
    "可加一勺花生酱增加浓郁度",
    "汤底可复用，越煮越香"
  ],
  "relatedSlugs": [
    "oden-day88-3",
    "stinky-tofu-day88-7"
  ],
  "image": "/images/recipes/malatang-day88.webp",
  "slug": "malatang",
  "id": "malatang"
};
