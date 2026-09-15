import type { Recipe } from "@/lib/types";

/** Korean Tofu Claypot (韩式豆腐煲) (韩式豆腐煲) — Day batch */
export const korean_tofu_claypot: Recipe = {
  "id": "korean-tofu-claypot",
  "slug": "korean-tofu-claypot",
  "titleEn": "Korean Tofu Claypot (韩式豆腐煲)",
  "titleZh": "韩式豆腐煲",
  "pinyin": "hán shì dòu fu bāo",
  "cuisine": "韩中融合",
  "cuisineEn": "Korean-Chinese Fusion",
  "region": "Jilin",
  "regionZh": "吉林",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "延边朝鲜族家常豆腐煲，辣白菜与豆腐的简单组合。",
  "versionNoteZh": "延边朝鲜族家常豆腐煲，辣白菜与豆腐的简单组合。",
  "tags": [
    "claypot",
    "tofu",
    "korean",
    "spicy",
    "quick"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "In Yanbian, my Korean-Chinese friend showed me how to make this from kimchi and soft tofu. Five ingredients, twenty minutes, infinitely comforting.",
  "storyZh": "在延边，我的朝鲜族朋友教我用地瓜泡菜和嫩豆腐做这道菜。五样食材，二十分钟，无限温暖。",
  "ingredients": [
    {
      "id": "ktc-1",
      "nameEn": "soft tofu",
      "nameZh": "嫩豆腐",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ktc-2",
      "nameEn": "kimchi, chopped",
      "nameZh": "泡菜",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "ktc-3",
      "nameEn": "pork belly, thin slices",
      "nameZh": "五花肉片",
      "amountMetric": "100 g",
      "amountUS": "3.5 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ktc-4",
      "nameEn": "green onion, chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ktc-5",
      "nameEn": "gochujang",
      "nameZh": "韩式辣酱",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Sear pork in claypot 2 minutes until fat renders.",
      "textZh": "砂锅煎五花肉2分钟，出油。",
      "stateNote": {
        "visual": "Pork edges curl, fat renders clear.",
        "visualZh": "肉边卷曲，油脂清澈析出。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Sizzle is steady, not popping.",
        "signalZh": "滋滋声均匀，不爆裂。"
      }
    },
    {
      "text": "Add kimchi and gochujang, stir 1 minute.",
      "textZh": "下泡菜和韩式辣酱，翻炒1分钟。",
      "stateNote": {
        "visual": "Kimchi softens, sauce turns red.",
        "visualZh": "泡菜变软，酱变红。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Aroma is tangy and spicy.",
        "signalZh": "香气酸辣。"
      }
    },
    {
      "text": "Pour in 300ml water, bring to boil.",
      "textZh": "冲入300毫升水，大火烧开。",
      "stateNote": {
        "visual": "Broth turns red-orange.",
        "visualZh": "汤汁变红橙色。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Rolling boil.",
        "signalZh": "滚沸。"
      }
    },
    {
      "text": "Gently add tofu, cover and simmer 8 minutes.",
      "textZh": "轻放入豆腐，盖盖焖8分钟。",
      "stateNote": {
        "visual": "Tofu absorbs red color.",
        "visualZh": "豆腐吸红汤色。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-low",
        "signal": "Tofu is hot throughout.",
        "signalZh": "豆腐热透。"
      }
    },
    {
      "text": "Garnish with scallion. Serve with rice.",
      "textZh": "撒葱花，配米饭热盛。",
      "stateNote": {
        "visual": "Broth is bubbling, tofu is golden.",
        "visualZh": "汤汁冒泡，豆腐金黄。",
        "signal": "Tofu springs back when pressed.",
        "signalZh": "豆腐轻压回弹。"
      }
    }
  ],
  "tips": [
    "Use well-fermented kimchi for deeper flavor.",
    "Don't stir tofu — scoop broth over it."
  ],
  "tipsZh": [
    "用发酵充分的泡菜，滋味更深。",
    "不要搅拌豆腐——用勺浇汤。"
  ],
  "relatedSlugs": [
    "mushroom-tofu-claypot",
    "clay-pot-tofu"
  ],
  "image": "/images/recipes/korean-tofu-claypot.webp"
};
