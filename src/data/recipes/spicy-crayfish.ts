import type { Recipe } from "@/lib/types";

/** Spicy Crayfish (麻辣小龙虾) — Day batch */
export const spicy_crayfish: Recipe = {
  "id": "spicy-crayfish",
  "slug": "spicy-crayfish",
  "titleEn": "Spicy Crayfish",
  "titleZh": "麻辣小龙虾",
  "pinyin": "má là xiǎo lóng xiā",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Wuhan",
  "regionZh": "武汉",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Wuhan street-style spicy crayfish.",
  "versionNoteZh": "武汉街头风味麻辣小龙虾。",
  "tags": [
    "weeknight",
    "sichuan",
    "spicy",
    "summer"
  ],
  "dietary": [
    "none"
  ],
  "story": "Summer evenings in Wuhan mean crayfish stalls with beer.",
  "storyZh": "武汉夏夜意味着大排档和小啤酒。",
  "ingredients": [
    {
      "id": "sc-01",
      "nameEn": "crayfish",
      "nameZh": "小龙虾",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "sc-02",
      "nameEn": "doubanjiang",
      "nameZh": "郫县豆瓣酱",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "sc-03",
      "nameEn": "sichuan peppercorns",
      "nameZh": "花椒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "sc-04",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "10 whole",
      "amountUS": "10 whole",
      "category": "spice",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Clean crayfish thoroughly, removing sand vein.",
      "textZh": "洗净小龙虾去沙线。",
      "stateNote": {
        "visual": "Clean shells",
        "visualZh": "壳干净",
        "signal": "Ready"
      }
    },
    {
      "text": "Fry dried chilies and Sichuan peppercorns until fragrant.",
      "textZh": "爆香干辣椒花椒。",
      "stateNote": {
        "visual": "Oil red",
        "visualZh": "油变红",
        "heat": "medium-high",
        "signal": "Aromatic"
      }
    },
    {
      "text": "Add doubanjiang and fry 1 minute.",
      "textZh": "下豆瓣酱炒1分钟。",
      "stateNote": {
        "visual": "Red oil",
        "visualZh": "红油析出",
        "heat": "medium",
        "timeRef": "1 minute",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Add crayfish and stir to coat.",
      "textZh": "下小龙虾翻炒裹酱。",
      "stateNote": {
        "visual": "Coated in sauce",
        "visualZh": "虾裹满红油",
        "signal": "Mixed"
      }
    },
    {
      "text": "Add beer and simmer 20 minutes.",
      "textZh": "加啤酒焖20分钟。",
      "stateNote": {
        "visual": "Bubbling broth",
        "visualZh": "汤汁沸腾",
        "heat": "medium",
        "timeRef": "20 minutes",
        "signal": "Tender"
      }
    }
  ],
  "tips": [
    "Wash crayfish thoroughly.",
    "Remove sand vein for best presentation."
  ],
  "tipsZh": [
    "小龙虾要洗净。",
    "去沙线更美观。"
  ],
  "relatedSlugs": [
    "mapo-tofu",
    "shui-zhu-beef"
  ],
  "image": "/images/recipes/spicy-crayfish.webp"
};
