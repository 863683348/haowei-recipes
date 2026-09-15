import type { Recipe } from "@/lib/types";

/** Pork Cabbage Claypot (猪肉白菜砂锅) (猪肉白菜砂锅) — Day batch */
export const pork_cabbage_claypot: Recipe = {
  "id": "pork-cabbage-claypot",
  "slug": "pork-cabbage-claypot",
  "titleEn": "Pork Cabbage Claypot (猪肉白菜砂锅)",
  "titleZh": "猪肉白菜砂锅",
  "pinyin": "zhū ròu bái cài shā guō",
  "cuisine": "东北菜",
  "cuisineEn": "Northeastern",
  "region": "Heilongjiang",
  "regionZh": "黑龙江",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "东北家常猪肉白菜砂锅，冬日暖心菜。",
  "versionNoteZh": "东北家常猪肉白菜砂锅，冬日暖心菜。",
  "tags": [
    "claypot",
    "pork",
    "cabbage",
    "northeastern",
    "winter"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the dish my mother made when the first snow fell. Napa cabbage, pork, and a hint of glass noodle — simple, humble, perfect.",
  "storyZh": "这是母亲在初雪时做的菜。大白菜、猪肉、一点粉条——简单、朴素、完美。",
  "ingredients": [
    {
      "id": "pcc-1",
      "nameEn": "pork belly, 2cm slices",
      "nameZh": "五花肉片",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "pcc-2",
      "nameEn": "Napa cabbage, chunks",
      "nameZh": "大白菜块",
      "amountMetric": "500 g",
      "amountUS": "1.1 lbs",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pcc-3",
      "nameEn": "glass noodles",
      "nameZh": "粉条",
      "amountMetric": "50 g",
      "amountUS": "1.7 oz",
      "category": "staple",
      "pantry": "asian"
    },
    {
      "id": "pcc-4",
      "nameEn": "garlic cloves, whole",
      "nameZh": "整瓣大蒜",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pcc-5",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Brown pork in claypot 3 minutes, remove excess fat.",
      "textZh": "砂锅煎五花肉3分钟，倒掉多余油脂。",
      "stateNote": {
        "visual": "Pork edges crisp, fat renders.",
        "visualZh": "肉边酥脆，油脂析出。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Fat is liquid, not grey.",
        "signalZh": "油脂清澈，不灰暗。"
      }
    },
    {
      "text": "Add garlic, stir 30 seconds.",
      "textZh": "下大蒜，翻炒30秒。",
      "stateNote": {
        "visual": "Garlic fragrant, golden.",
        "visualZh": "大蒜香，微金黄。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Pungent garlic aroma.",
        "signalZh": "辛辣蒜香。"
      }
    },
    {
      "text": "Add cabbage, stir-fry 2 minutes until wilted.",
      "textZh": "下大白菜，翻炒2分钟至塌。",
      "stateNote": {
        "visual": "Cabbage softens, releases water.",
        "visualZh": "白菜变软，出水。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Cabbage is wilted.",
        "signalZh": "白菜塌软。"
      }
    },
    {
      "text": "Pour in 400ml water, add soaked noodles, bring to boil.",
      "textZh": "冲入400毫升水，下泡软的粉条，大火烧开。",
      "stateNote": {
        "visual": "Broth bubbles, noodles soften.",
        "visualZh": "汤汁冒泡，粉条变软。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Rolling boil.",
        "signalZh": "滚沸。"
      }
    },
    {
      "text": "Season with soy sauce, simmer 5 minutes. Serve.",
      "textZh": "加生抽调味，焖5分钟，热盛。",
      "stateNote": {
        "visual": "Noodles are translucent, cabbage is tender.",
        "visualZh": "粉条透明，白菜软。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Noodles chew but tender.",
        "signalZh": "粉条弹牙但软。"
      }
    }
  ],
  "tips": [
    "Remove excess fat for a cleaner broth.",
    "Soak glass noodles 10 minutes before adding."
  ],
  "tipsZh": [
    "倒掉多余油脂，汤更清。",
    "粉条提前泡水10分钟。"
  ],
  "relatedSlugs": [
    "sauerkraut-pork-claypot",
    "dan-dang-pork"
  ],
  "image": "/images/recipes/pork-cabbage-claypot.webp"
};
