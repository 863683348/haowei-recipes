import type { Recipe } from "@/lib/types";

/** Sour Soup Beef (酸汤肥牛) (酸汤肥牛) — Day batch */
export const sour_soup_beef: Recipe = {
  "id": "sour-soup-beef",
  "slug": "sour-soup-beef",
  "titleEn": "Sour Soup Beef (酸汤肥牛)",
  "titleZh": "酸汤肥牛",
  "pinyin": "suān tāng féi niú",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "家常酸汤肥牛，酸爽开胃，牛肉滑嫩。",
  "versionNoteZh": "家常酸汤肥牛，酸爽开胃，牛肉滑嫩。",
  "tags": [
    "claypot",
    "beef",
    "sour",
    "spicy",
    "sichuan"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This claypot from my favorite Chengdu eatery became my weekend obsession. The sour broth — fermented chili and tomato — made every slice of beef an experience.",
  "storyZh": "这道成都小馆的酸汤肥牛让我每个周末都惦记。发酵辣椒和番茄的酸汤，让每片牛肉都成为一次体验。",
  "ingredients": [
    {
      "id": "ssb-1",
      "nameEn": "beef belly slices, 2mm",
      "nameZh": "肥牛卷",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ssb-2",
      "nameEn": "tomatoes, quartered",
      "nameZh": "番茄块",
      "amountMetric": "2 medium",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ssb-3",
      "nameEn": "fermented chili paste",
      "nameZh": "剁椒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "ssb-4",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ssb-5",
      "nameEn": "enoki mushrooms",
      "nameZh": "金针菇",
      "amountMetric": "100 g",
      "amountUS": "3.5 oz",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "ssb-6",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Sauté garlic and chili paste in claypot 30 seconds until fragrant.",
      "textZh": "砂锅爆香蒜末和剁椒，30秒。",
      "stateNote": {
        "visual": "Oil turns red, chili aroma fills air.",
        "visualZh": "油变红，辣椒香气弥漫。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aroma is pungent, not burnt.",
        "signalZh": "香气浓但不焦。"
      }
    },
    {
      "text": "Add tomatoes, cook 2 minutes until softened.",
      "textZh": "下番茄，炒2分钟至软。",
      "stateNote": {
        "visual": "Tomatoes collapse, release juice.",
        "visualZh": "番茄塌软，出汁。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Tomatoes are mushy.",
        "signalZh": "番茄成泥状。"
      }
    },
    {
      "text": "Pour in 500ml water, add vinegar, bring to boil.",
      "textZh": "冲入500毫升水，加醋，大火烧开。",
      "stateNote": {
        "visual": "Broth turns bright red-orange.",
        "visualZh": "汤汁变鲜红橙色。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Rolling boil, vibrant color.",
        "signalZh": "滚沸，色泽鲜艳。"
      }
    },
    {
      "text": "Add enoki, cook 1 minute.",
      "textZh": "下金针菇，煮1分钟。",
      "stateNote": {
        "visual": "Enoki wilts slightly.",
        "visualZh": "金针菇略塌。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Enoki is wilted but crisp.",
        "signalZh": "金针菇塌但脆。"
      }
    },
    {
      "text": "Add beef slices, swish gently 30 seconds until just cooked.",
      "textZh": "下肥牛卷，轻搅30秒至刚熟。",
      "stateNote": {
        "visual": "Beef turns from pink to brown.",
        "visualZh": "牛肉从粉红变棕。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Beef is no longer pink.",
        "signalZh": "牛肉不再粉红。"
      }
    }
  ],
  "tips": [
    "Sear beef quickly — 10 seconds per side.",
    "Add vinegar at the end for bright acidity."
  ],
  "tipsZh": [
    "牛肉快煎——每面10秒。",
    "醋最后加，酸味更鲜亮。"
  ],
  "relatedSlugs": [
    "tomato-beef-brisket",
    "tomato-beef-claypot"
  ],
  "image": "/images/recipes/sour-soup-beef.webp"
};
