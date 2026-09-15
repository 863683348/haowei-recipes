import type { Recipe } from "@/lib/types";

/** Mushroom Tofu Claypot (菌菇豆腐煲) (菌菇豆腐煲) — Day batch */
export const mushroom_tofu_claypot: Recipe = {
  "id": "mushroom-tofu-claypot",
  "slug": "mushroom-tofu-claypot",
  "titleEn": "Mushroom Tofu Claypot (菌菇豆腐煲)",
  "titleZh": "菌菇豆腐煲",
  "pinyin": "jūn gū dòu fu bāo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "家庭素煲，菌菇鲜味自然渗入豆腐，无需高汤。",
  "versionNoteZh": "家庭素煲，菌菇鲜味自然渗入豆腐，无需高汤。",
  "tags": [
    "claypot",
    "vegetarian",
    "mushroom",
    "tofu",
    "weeknight"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother's mushroom claypot was her gift to vegetarians at family gatherings. She'd layer shiitake, enoki, and silken tofu, let the pot hum softly until every pore of the tofu held forest flavor.",
  "storyZh": "祖母的菌菇煲是她给家庭聚会中素食者的礼物。她层层码入香菇、金针菇和嫩豆腐，让砂锅咕嘟软吟，直到每孔豆腐都饱含森林滋味。",
  "ingredients": [
    {
      "id": "mtc-1",
      "nameEn": "silken tofu",
      "nameZh": "嫩豆腐",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "mtc-2",
      "nameEn": "shiitake mushrooms, sliced",
      "nameZh": "香菇片",
      "amountMetric": "80 g",
      "amountUS": "2.8 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "mtc-3",
      "nameEn": "enoki mushrooms",
      "nameZh": "金针菇",
      "amountMetric": "100 g",
      "amountUS": "3.5 oz",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "mtc-4",
      "nameEn": "carrot, julienned",
      "nameZh": "胡萝卜丝",
      "amountMetric": "1 small",
      "amountUS": "1 small",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "mtc-5",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "mtc-6",
      "nameEn": "vegetable broth",
      "nameZh": "素高汤",
      "amountMetric": "300 ml",
      "amountUS": "1.25 cups",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Cut tofu into 2cm cubes, soak in salted water 5 minutes to firm up.",
      "textZh": "豆腐切2厘米方块，盐水浸泡5分钟定型。",
      "stateNote": {
        "visual": "Tofu cubes hold shape when lifted.",
        "visualZh": "豆腐块提起不散。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Firm to gentle touch.",
        "signalZh": "轻触有弹性。"
      }
    },
    {
      "text": "Sauté garlic in claypot 30 seconds until fragrant.",
      "textZh": "砂锅爆香蒜末，30秒。",
      "stateNote": {
        "visual": "Garlic turns pale gold.",
        "visualZh": "蒜末微金黄。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aroma is pungent, not burnt.",
        "signalZh": "香气浓但不焦。"
      }
    },
    {
      "text": "Add shiitake and carrot, stir-fry 2 minutes.",
      "textZh": "下香菇和胡萝卜丝，翻炒2分钟。",
      "stateNote": {
        "visual": "Carrot edges soften, shiitake releases aroma.",
        "visualZh": "胡萝卜边软，香菇出香。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Carrot smells sweet.",
        "signalZh": "胡萝卜出甜香。"
      }
    },
    {
      "text": "Pour in broth, add tofu and enoki. Cover and simmer 8 minutes.",
      "textZh": "倒入高汤，加豆腐和金针菇，盖盖焖8分钟。",
      "stateNote": {
        "visual": "Broth simmers gently, tofu absorbs color.",
        "visualZh": "汤汁微滚，豆腐吸色。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-low",
        "signal": "Steam escapes steadily.",
        "signalZh": "蒸汽匀速逸出。"
      }
    },
    {
      "text": "Season with soy sauce, garnish with scallion. Serve hot.",
      "textZh": "加生抽调味，撒葱花，热盛。",
      "stateNote": {
        "visual": "Broth is golden, tofu is hot throughout.",
        "visualZh": "汤色金黄，豆腐热透。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Tofu sizzles lightly when touched.",
        "signalZh": "豆腐轻触微滋滋。"
      }
    }
  ],
  "tips": [
    "Salt water helps tofu hold its shape during simmering.",
    "Don't stir aggressively — use a spoon to baste broth over tofu."
  ],
  "tipsZh": [
    "盐水让豆腐在炖煮时不易碎。",
    "不要大力搅拌——用勺浇汤在豆腐上。"
  ],
  "relatedSlugs": [
    "clay-pot-tofu",
    "clay-pot-meatballs"
  ],
  "image": "/images/recipes/mushroom-tofu-claypot.webp"
};
