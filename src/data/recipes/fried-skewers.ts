import type { Recipe } from "@/lib/types";

/** Street Fried Skewers (炸串) (炸串) — Day batch */
export const fried_skewers: Recipe = {
  "titleEn": "Street Fried Skewers (炸串)",
  "titleZh": "炸串",
  "pinyin": "zhà chuàn",
  "cuisine": "街头小吃",
  "cuisineEn": "Street Snack",
  "region": "全国",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version of street-style deep-fried skewers",
  "versionNoteZh": "家庭版街头炸串",
  "tags": [
    "street-food",
    "party",
    "finger-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "Fried skewers are China's most popular street snack, found at night markets everywhere. The key is the spice rub applied after frying — a blend of cumin, chili powder, and sesame that creates an addictive crunch.",
  "storyZh": "炸串是中国最受欢迎的街头小吃，夜市处处可见。关键在于炸后的撒料——孜然、辣椒粉和芝麻的混合，创造出令人上瘾的酥脆口感。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Chicken breast",
      "nameZh": "鸡胸肉",
      "amountMetric": "300g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "Mushrooms",
      "nameZh": "香菇",
      "amountMetric": "200g",
      "amountUS": "7 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Tofu skin sheets",
      "nameZh": "豆腐皮",
      "amountMetric": "150g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "4",
      "nameEn": "Sweet potato noodles",
      "nameZh": "红薯粉条",
      "amountMetric": "100g",
      "amountUS": "3.5 oz",
      "category": "staple",
      "pantry": "asian"
    },
    {
      "id": "5",
      "nameEn": "Bamboo shoots",
      "nameZh": "笋片",
      "amountMetric": "150g",
      "amountUS": "5 oz",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "6",
      "nameEn": "Cumin powder",
      "nameZh": "孜然粉",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "7",
      "nameEn": "Chili powder",
      "nameZh": "辣椒粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "8",
      "nameEn": "Sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "9",
      "nameEn": "Salt",
      "nameZh": "盐",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut chicken breast into 2cm cubes, slice mushrooms in half, cut tofu skin into strips.",
      "textZh": "鸡胸肉切2厘米见方小块，香菇对半切，豆腐皮切成长条。",
      "stateNote": {
        "visual": "uniform bite-sized pieces",
        "signal": "ready to skewer"
      }
    },
    {
      "text": "Soak sweet potato noodles in warm water for 15 minutes until soft, then drain.",
      "textZh": "红薯粉条用温水泡软约15分钟，捞出沥干水分。",
      "stateNote": {
        "visual": "noodles translucent and pliable",
        "signal": "soaked through"
      }
    },
    {
      "text": "Thread ingredients onto skewers alternately: chicken, mushroom, tofu skin, bamboo shoot.",
      "textZh": "将食材穿在竹签上，鸡块、香菇、豆腐皮、笋片交替穿插。",
      "zhHint": "每种食材切大小均匀便于熟透",
      "stateNote": {
        "visual": "neatly arranged on skewers",
        "signal": "ready for frying"
      }
    },
    {
      "text": "Heat oil to 180°C in a deep pot, fry skewers in batches for 2-3 minutes until golden.",
      "textZh": "锅中倒油烧至180度，分批下炸串，炸2-3分钟至表面金黄。",
      "stateNote": {
        "visual": "golden brown crust forming",
        "signal": "2-3 minutes"
      }
    },
    {
      "text": "Remove and drain, immediately sprinkle with cumin, chili powder, sesame, and salt while hot.",
      "textZh": "捞出沥油，趁热撒上孜然粉、辣椒粉、白芝麻和盐，翻匀即可。",
      "stateNote": {
        "visual": "spices adhering to hot surface",
        "signal": "aromatic"
      }
    }
  ],
  "tips": [
    "Oil temperature must be high enough to seal moisture inside",
    "Double fry for extra crispiness: fry once at 160°C, then again at 180°C",
    "Custom spice blend: add MSG and five-spice powder to taste"
  ],
  "tipsZh": [
    "油温要高才能锁住水分",
    "复炸更脆：先160度炸熟，再180度复炸上色",
    "调味可加味精和五香粉提鲜"
  ],
  "relatedSlugs": [
    "jianbing-day88-8",
    "zhajiliu-day88-10"
  ],
  "image": "/images/recipes/fried-skewers-day88.webp",
  "slug": "fried-skewers",
  "id": "fried-skewers"
};
