import type { Recipe } from "@/lib/types";

/** Potato and Pork Rib Stew | Chinese Tu Dou Dun Pai Gu (土豆炖排骨) — Day batch */
export const potato_pork_rib_stew: Recipe = {
  "slug": "potato-pork-rib-stew",
  "id": "potato-pork-rib-stew",
  "titleEn": "Potato and Pork Rib Stew | Chinese Tu Dou Dun Pai Gu",
  "titleZh": "土豆炖排骨",
  "pinyin": "tǔ dòu dùn pái gǔ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northeast",
  "regionZh": "东北",
  "difficulty": "easy",
  "timeMin": 60,
  "servings": 4,
  "version": "family",
  "versionNote": "Hearty Northeastern stew with starchy potatoes absorbing savory broth.",
  "versionNoteZh": "东北家常炖菜，土豆淀粉吸收汤汁。",
  "tags": [
    "winter",
    "stew",
    "northeastern"
  ],
  "dietary": [
    "none"
  ],
  "story": "This hearty stew is a Northeastern Chinese winter staple. Potatoes become creamy as they absorb the rich pork rib broth.",
  "storyZh": "这道 hearty 炖菜是东北冬季家常必备。土豆在浓郁排骨汤中变得绵软。",
  "ingredients": [
    {
      "id": "pt-01",
      "nameEn": "pork ribs",
      "nameZh": "排骨",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs"
    },
    {
      "id": "pt-02",
      "nameEn": "potatoes",
      "nameZh": "土豆",
      "amountMetric": "300 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pt-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pt-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "pt-05",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pt-06",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 pc",
      "amountUS": "1 pc",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    }
  ],
  "steps": [
    {
      "text": "Cut ribs into pieces. Blanch 5 minutes. Drain.",
      "textZh": "排骨切段，焯水5分钟，捞出。",
      "zhHint": "排骨焯水",
      "stateNote": {
        "visual": "Ribs pale; scum removed.",
        "visualZh": "排骨发白；杂质去除。",
        "timeRef": "5 minutes",
        "signal": "Gray foam floats; water clears."
      }
    },
    {
      "text": "Cut potatoes into chunks. Soak in water to remove starch.",
      "textZh": "土豆切块，泡水去淀粉。",
      "zhHint": "土豆泡水",
      "stateNote": {
        "visual": "Water clear, not cloudy.",
        "visualZh": "水清澈不浑浊。",
        "signal": "Potato surface smooth, no white cloud."
      }
    },
    {
      "text": "Heat oil, add ribs. Stir-fry 2 minutes. Add soy sauces, ginger, anise.",
      "textZh": "热油下排骨翻炒2分钟，加生抽、老抽、姜片、八角。",
      "zhHint": "炒香排骨",
      "stateNote": {
        "visual": "Ribs browned; aromatic.",
        "visualZh": "排骨上色；香气溢出。",
        "timeRef": "2 minutes",
        "heat": "high",
        "signal": "Sizzling sound; savory aroma."
      }
    },
    {
      "text": "Add hot water to cover. Bring to boil, then simmer 40 minutes.",
      "textZh": "加热水没过，大火烧开转小火焖40分钟。",
      "zhHint": "小火焖煮",
      "stateNote": {
        "visual": "Sauce reducing.",
        "visualZh": "酱汁收浓。",
        "timeRef": "40 minutes",
        "heat": "low",
        "signal": "Fork slides into ribs easily."
      }
    },
    {
      "text": "Add potatoes. Cook 15 minutes until tender. Serve.",
      "textZh": "下土豆，煮15分钟至软。出锅。",
      "zhHint": "土豆后下",
      "stateNote": {
        "visual": "Potatoes soft, edges slightly broken.",
        "visualZh": "土豆软糯，边缘微散。",
        "timeRef": "15 minutes",
        "signal": "Fork slides into potato easily."
      }
    }
  ],
  "tips": [
    "Soak potatoes to prevent sticking.",
    "Add potatoes late — they cook faster than ribs.",
    "This dish tastes better next day as flavors meld."
  ],
  "tipsZh": [
    "泡水防粘锅。",
    "土豆后下——比排骨熟得快。",
    "隔夜更入味。"
  ],
  "relatedSlugs": [
    "yam-pork-rib-soup",
    "hubei-pork-rib-and-lotus-root-soup",
    "red-braised-pork-ribs"
  ],
  "image": "/images/recipes/potato-pork-rib-stew.webp"
};
