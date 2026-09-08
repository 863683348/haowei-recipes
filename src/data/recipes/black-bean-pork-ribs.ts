import type { Recipe } from "@/lib/types";

/** Black Bean Sauce Ribs | Chinese Chi Zhi Pai Gu (豉汁排骨) — Day batch */
export const black_bean_pork_ribs: Recipe = {
  "slug": "black-bean-pork-ribs",
  "id": "black-bean-pork-ribs",
  "titleEn": "Black Bean Sauce Ribs | Chinese Chi Zhi Pai Gu",
  "titleZh": "豉汁排骨",
  "pinyin": "chǐ zhī pái gǔ",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "Steamed ribs with fermented black beans — dim sum favorite.",
  "versionNoteZh": "豆豉蒸排骨——粤式点心经典。",
  "tags": [
    "dim-sum",
    "steamed",
    "cantonese"
  ],
  "dietary": [
    "none"
  ],
  "story": "Chi zhi pai gu is a dim sum classic. Fermented black beans add deep umami, while ginger and garlic provide aroma. The ribs are steamed until tender.",
  "storyZh": "豉汁排骨是粤式点心经典。豆豉提供深邃鲜味，姜蒜增香。排骨蒸至软嫩。",
  "ingredients": [
    {
      "id": "bb-01",
      "nameEn": "pork ribs",
      "nameZh": "排骨",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs"
    },
    {
      "id": "bb-02",
      "nameEn": "fermented black beans",
      "nameZh": "豆豉",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "bb-03",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "bb-04",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "1 inch",
      "amountUS": "1 inch",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bb-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bb-06",
      "nameEn": "shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "bb-07",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "bb-08",
      "nameEn": "cornstarch",
      "nameZh": "淀粉",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut ribs into 4-cm pieces. Soak in cold water 30 minutes to remove blood. Drain.",
      "textZh": "排骨切4厘米段，冷水浸泡30分钟去血水，捞出沥干。",
      "zhHint": "排骨泡水去血",
      "stateNote": {
        "visual": "Water becomes less pink.",
        "visualZh": "水色变浅。",
        "timeRef": "30 minutes",
        "signal": "Water runs clear; no pink clouds."
      }
    },
    {
      "text": "Mince garlic, ginger. Chop fermented black beans.",
      "textZh": "蒜姜切末，豆豉切碎。",
      "zhHint": "配料切碎",
      "stateNote": {
        "visual": "Fine mince, uniform size.",
        "visualZh": "细碎均匀。",
        "signal": "Aroma of garlic and ginger released."
      }
    },
    {
      "text": "Mix ribs with all ingredients except sesame oil. Marinate 20 minutes.",
      "textZh": "排骨与除香油外的所有调料混合，腌制20分钟。",
      "zhHint": "腌制入味",
      "stateNote": {
        "visual": "Ribs coated in dark marinade.",
        "visualZh": "排骨裹满深色腌料。",
        "timeRef": "20 minutes",
        "signal": "Salty, funky aroma from black beans."
      }
    },
    {
      "text": "Drizzle sesame oil on top. Steam 20 minutes.",
      "textZh": "淋上香油，蒸20分钟。",
      "zhHint": "大火蒸制",
      "stateNote": {
        "visual": "Ribs tender, sauce bubbly.",
        "visualZh": "排骨软嫩，酱汁冒泡。",
        "timeRef": "20 minutes",
        "heat": "high",
        "signal": "Steam rises; meat pulls from bone easily."
      }
    },
    {
      "text": "Garnish with scallions. Serve hot.",
      "textZh": "撒葱段，趁热食用。",
      "zhHint": "出锅装饰",
      "stateNote": {
        "visual": "Garnish fresh green.",
        "visualZh": "葱段翠绿新鲜。",
        "signal": "Aromatic steam rises; ready to eat."
      }
    }
  ],
  "tips": [
    "Soak ribs to remove blood — makes cleaner flavor.",
    "Don't over-steam — ribs get dry.",
    "Fermented black beans vary in saltiness — adjust soy sauce."
  ],
  "tipsZh": [
    "泡水去血——味道更干净。",
    "别蒸过头——肉会柴。",
    "豆豉咸度不同——生抽酌情减量。"
  ],
  "relatedSlugs": [
    "red-braised-pork-ribs",
    "honey-rib-roast",
    "air-fryer-pork-ribs"
  ],
  "image": "/images/recipes/black-bean-pork-ribs.webp"
};
