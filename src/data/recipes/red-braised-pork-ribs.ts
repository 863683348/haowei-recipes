import type { Recipe } from "@/lib/types";

/** Red-Braised Pork Ribs | Chinese Hong Shao Pai Gu (红烧排骨) — Day batch */
export const red_braised_pork_ribs: Recipe = {
  "slug": "red-braised-pork-ribs",
  "id": "red-braised-pork-ribs",
  "titleEn": "Red-Braised Pork Ribs | Chinese Hong Shao Pai Gu",
  "titleZh": "红烧排骨",
  "pinyin": "hóng shāo pái gǔ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National",
  "regionZh": "全国",
  "difficulty": "medium",
  "timeMin": 60,
  "servings": 4,
  "version": "family",
  "versionNote": "Classic braised ribs with tender meat off the bone.",
  "versionNoteZh": "经典红烧排骨，肉质软烂脱骨。",
  "tags": [
    "braised",
    "popular",
    "comfort-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "Hong shao pai gu is one of the most beloved dishes in Chinese homes. The ribs become fall-off-the-bone tender with a rich, savory-sweet glaze.",
  "storyZh": "红烧排骨是最受欢迎的家常菜之一。排骨炖至脱骨，裹着浓郁咸甜的酱汁。",
  "ingredients": [
    {
      "id": "rb-01",
      "nameEn": "pork ribs",
      "nameZh": "排骨",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs"
    },
    {
      "id": "rb-02",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "rb-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "rb-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "rb-05",
      "nameEn": "shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "20 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "rb-06",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "rb-07",
      "nameEn": "scallions",
      "nameZh": "大葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Cut ribs into 5-cm pieces. Blanch 5 minutes. Drain and rinse.",
      "textZh": "排骨切5厘米段，焯水5分钟，捞出冲洗。",
      "zhHint": "排骨焯水",
      "stateNote": {
        "visual": "Scum rises to surface; meat turns pale.",
        "visualZh": "水面浮沫；肉变白。",
        "timeRef": "5 minutes",
        "signal": "Water cloudy; impurities float."
      }
    },
    {
      "text": "Heat oil, add rock sugar, melt to amber. Add ribs, toss to coat.",
      "textZh": "热油下冰糖炒至琥珀色，下排骨翻炒上色。",
      "zhHint": "炒糖色",
      "stateNote": {
        "visual": "Ribs coated in amber glaze.",
        "visualZh": "排骨裹上琥珀色。",
        "timeRef": "2 minutes",
        "heat": "medium",
        "signal": "Caramel aroma; sugar bubbles amber."
      }
    },
    {
      "text": "Add soy sauces, wine, ginger, scallion. Add hot water to cover. Bring to boil.",
      "textZh": "加生抽、老抽、料酒、姜片、葱段。加热水没过，大火烧开。",
      "zhHint": "下调料",
      "stateNote": {
        "visual": "Sauce darkens; aroma rises.",
        "visualZh": "酱汁变深；香气上升。",
        "signal": "Savory, caramel scent fills kitchen."
      }
    },
    {
      "text": "Reduce heat, cover and braise 40 minutes.",
      "textZh": "转小火盖盖焖40分钟。",
      "zhHint": "小火焖煮",
      "stateNote": {
        "visual": "Ribs tender, sauce reduced.",
        "visualZh": "排骨软，酱汁浓。",
        "timeRef": "40 minutes",
        "heat": "low",
        "signal": "Fork slides into meat easily."
      }
    },
    {
      "text": "Increase heat to reduce sauce to glaze. Remove scallion pieces. Serve.",
      "textZh": "转大火收汁至琉璃状。捞出葱段，出锅。",
      "zhHint": "收汁出锅",
      "stateNote": {
        "visual": "Sauce glossy, coats ribs.",
        "visualZh": "酱汁光亮包裹排骨。",
        "signal": "Sauce thickens; coats spoon."
      }
    }
  ],
  "tips": [
    "Blanch ribs well to remove blood and impurities.",
    "Rock sugar gives better gloss than white sugar.",
    "Remove scallion pieces before serving for presentation."
  ],
  "tipsZh": [
    "焯水要彻底——去血沫杂质。",
    "冰糖比白糖收出的光泽更好。",
    "出锅前捞出葱段更美观。"
  ],
  "relatedSlugs": [
    "sweet-sour-ribs",
    "honey-rib-roast",
    "air-fryer-pork-ribs"
  ],
  "image": "/images/recipes/red-braised-pork-ribs.webp"
};
