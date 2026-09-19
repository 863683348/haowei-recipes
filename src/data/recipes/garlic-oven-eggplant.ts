import type { Recipe } from "@/lib/types";

/** Garlic Oven-Roasted Eggplant (蒜香烤茄子·烤箱版) (蒜香烤茄子·烤箱版) — Day batch */
export const garlic_oven_eggplant: Recipe = {
  "id": "garlic-oven-eggplant",
  "slug": "garlic-oven-eggplant",
  "titleEn": "Garlic Oven-Roasted Eggplant (蒜香烤茄子·烤箱版)",
  "titleZh": "蒜香烤茄子·烤箱版",
  "pinyin": "suàn xiāng kǎo qié zi",
  "cuisine": "烧烤风味",
  "cuisineEn": "BBQ-style",
  "region": "National street food",
  "regionZh": "全国夜市",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family oven-roasted version of the famous street BBQ eggplant. The oven gives a similar result with less fuss — no charcoal, no outdoor setup.",
  "versionNoteZh": "家常烤箱版的名夜市烤茄子。烤箱效果类似，不用炭火和户外设备。",
  "tags": [
    "bbq",
    "street-food",
    "garlic",
    "weeknight",
    "vegan-option"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "Street vendors split eggplants lengthwise, score the flesh, and slather it with a garlic-chili paste before roasting over charcoal. The flesh becomes impossibly creamy while the skin crisps. This oven version replicates that street magic without the grill.",
  "storyZh": "夜市摊将茄子纵剖，划花刀，抹上蒜蓉辣椒酱，炭火烤制。茄肉变得极奶油般软糯，皮微脆。烤箱版不用炭火也能还原夜市魔法。",
  "ingredients": [
    {
      "id": "gre-egg",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "gre-garlic",
      "nameEn": "garlic cloves, minced",
      "nameZh": "蒜末",
      "amountMetric": "8 cloves",
      "amountUS": "8 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gre-oil",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gre-chili",
      "nameEn": "chili oil or gochujang",
      "nameZh": "辣椒油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "gre-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gre-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "gre-cumin",
      "nameEn": "ground cumin",
      "nameZh": "孜然粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "gre-sesame",
      "nameEn": "sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "gre-scallion",
      "nameEn": "scallions, finely chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Preheat oven to 220°C / 425°F. Line a baking sheet with foil.",
      "textZh": "烤箱预热220°C/425°F，烤盘铺锡纸。",
      "stateNote": {
        "visual": "oven heating element glows red",
        "visualZh": "加热管发红",
        "signal": "oven is ready when preheat indicator beeps or thermometer reads 220°C",
        "signalZh": "预热带蜂鸣或温度计显示220°C——就绪"
      }
    },
    {
      "text": "Wash eggplants and pat dry. Cut lengthwise in half, leaving the stem intact. Score the flesh in a cross-hatch pattern, cutting about ¾ into the flesh without piercing the skin.",
      "textZh": "茄子洗净擦干，纵向对半切，保留蒂。切花刀，深约3/4不切破皮。",
      "stateNote": {
        "visual": "cross-hatch pattern visible on the cut surface, flesh is exposed",
        "visualZh": "切面呈十字花刀纹路，茄肉外露",
        "signal": "score depth should be about ¾ — too shallow and the garlic won't penetrate",
        "signalZh": "切深3/4——太浅蒜味进不去"
      }
    },
    {
      "text": "Mix minced garlic, oil, chili oil, soy sauce, sugar, and cumin in a small bowl to make the garlic paste.",
      "textZh": "蒜末、油、辣椒油、生抽、糖、孜然粉混合成蒜蓉酱。"
    },
    {
      "text": "Brush the garlic paste generously into the scores of each eggplant half. Place cut-side up on the baking sheet.",
      "textZh": "蒜蓉酱刷入刀缝中，切面朝上摆盘。"
    },
    {
      "text": "Roast for 25 min. Remove, sprinkle sesame seeds and scallions. Return to oven for 3 min more until edges char.",
      "textZh": "烤25分钟，取出撒芝麻葱花，再入炉烤3分钟至边缘微焦。",
      "stateNote": {
        "visual": "eggplant flesh is completely collapsed and creamy; edges are charred",
        "visualZh": "茄肉完全塌软呈奶油状，边缘焦香",
        "signal": "fork slides into center with no resistance — done",
        "signalZh": "叉子插入中心毫无阻力——完成"
      }
    }
  ],
  "tips": [
    "Don't cut all the way through — the stem holds the two halves together like a book.",
    "The cross-hatch scoring maximizes surface area for the garlic paste to penetrate.",
    "Eat with your hands — this is street food. Scoop the creamy flesh with the skin as a boat."
  ],
  "tipsZh": [
    "不要切透——蒂像书脊一样把两半连在一起。",
    "十字花刀最大化蒜蓉渗透表面积。",
    "用手吃——这是街边小吃。用皮当船舀软糯的茄肉。"
  ],
  "relatedSlugs": [
    "chopped-chili-steamed-eggplant",
    "scallion-pancakes",
    "garlic-romaine"
  ],
  "image": "/images/recipes/garlic-oven-eggplant.webp"
};
