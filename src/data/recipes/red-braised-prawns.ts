import type { Recipe } from "@/lib/types";

/** Red-Braised Prawns (红烧大虾) — Day batch */
export const red_braised_prawns: Recipe = {
  "id": "red-braised-prawns",
  "slug": "red-braised-prawns",
  "titleEn": "Red-Braised Prawns",
  "titleZh": "红烧大虾",
  "pinyin": "hóng shāo dà xiā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses less oil and sugar than restaurant style.",
  "versionNoteZh": "家常版比餐厅用油少、糖少。",
  "tags": [
    "30-min",
    "weeknight",
    "cantonese"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Guangzhou made red-braised prawns for every Cantonese New Year Eve dinner.",
  "storyZh": "祖母在广州每逢除夕都做红烧大虾。",
  "ingredients": [
    {
      "id": "rbp-01",
      "nameEn": "large prawns",
      "nameZh": "大虾",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "rbp-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "rbp-03",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "rbp-04",
      "nameEn": "shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "rbp-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "rbp-06",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "rbp-07",
      "nameEn": "spring onion",
      "nameZh": "葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Make a shallow cut along the back of each prawn to remove the vein.",
      "textZh": "虾背斜切一刀去虾线。",
      "stateNote": {
        "visual": "Vein removed",
        "visualZh": "虾线去除",
        "signal": "Clean flesh"
      }
    },
    {
      "text": "Heat oil in wok over high heat. Fry ginger until fragrant.",
      "textZh": "热锅下油，爆香姜片。",
      "stateNote": {
        "visual": "Ginger aromatic",
        "visualZh": "姜片飘香",
        "heat": "high",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Add prawns, stir-fry 1 minute per side until orange.",
      "textZh": "下虾翻炒每面1分钟至橙红。",
      "stateNote": {
        "visual": "Prawns orange",
        "visualZh": "虾身橙红",
        "heat": "high",
        "timeRef": "2 minutes",
        "signal": "Color change"
      }
    },
    {
      "text": "Add soy sauces, wine, sugar and water. Bring to boil.",
      "textZh": "加酱油、料酒、糖和水烧开。",
      "stateNote": {
        "visual": "Sauce bubbling",
        "visualZh": "酱汁沸腾",
        "signal": "Boiling"
      }
    },
    {
      "text": "Simmer 5 minutes, then reduce sauce until glossy.",
      "textZh": "焖5分钟，大火收汁至浓稠。",
      "stateNote": {
        "visual": "Sauce glossy",
        "visualZh": "酱汁浓稠发亮",
        "heat": "medium-high",
        "timeRef": "5 minutes",
        "signal": "Glazed"
      }
    }
  ],
  "tips": [
    "Do not overcook.",
    "Rock sugar gives better gloss."
  ],
  "tipsZh": [
    "不要煮过头。",
    "冰糖上色更好。"
  ],
  "relatedSlugs": [
    "garlic-steamed-prawns",
    "salt-and-pepper-prawn-tails"
  ],
  "image": "/images/recipes/red-braised-prawns.webp"
};
