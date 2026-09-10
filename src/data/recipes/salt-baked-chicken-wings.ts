import type { Recipe } from "@/lib/types";

/** Salt-Baked Chicken Wings (盐焗鸡翅) (盐焗鸡翅) — Day batch */
export const salt_baked_chicken_wings: Recipe = {
  "id": "salt-baked-chicken-wings",
  "slug": "salt-baked-chicken-wings",
  "titleEn": "Salt-Baked Chicken Wings (盐焗鸡翅)",
  "titleZh": "盐焗鸡翅",
  "pinyin": "yan ju ji chi",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Cantonese salt-baking method using coarse salt as insulating oven.",
  "versionNoteZh": "粤式盐焗手法，粗盐做保温层。",
  "tags": [
    "oven-bake",
    "cantonese",
    "impressive",
    "weekend"
  ],
  "dietary": [
    "none"
  ],
  "story": "Salt-baked wings bring the technique of Cantonese salt-baked chicken to a smaller format.",
  "storyZh": "盐焗鸡翅把粤式盐焗鸡的手法用在鸡翅上。",
  "ingredients": [
    {
      "id": "sw-01",
      "nameEn": "chicken wings, halved",
      "nameZh": "鸡翅切半",
      "amountMetric": "10 (about 600 g)",
      "amountUS": "10 (about 1.3 lb)",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "sw-02",
      "nameEn": "coarse sea salt",
      "nameZh": "粗海盐",
      "amountMetric": "500 g",
      "amountUS": "2 cups",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "sw-03",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "3 whole",
      "amountUS": "3 whole",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "sw-04",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sw-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "sw-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "sw-07",
      "nameEn": "parchment paper",
      "nameZh": "烘焙纸",
      "amountMetric": "2 sheets",
      "amountUS": "2 sheets",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Marinate wings with soy, Shaoxing, ginger slices 30 minutes in fridge.",
      "textZh": "鸡翅加生抽、料酒、姜片腌30分钟（冷藏）。",
      "zhHint": "腌制",
      "stateNote": {
        "visual": "Wings coated in soy mixture",
        "visualZh": "鸡翅裹满酱汁",
        "timeRef": "30 minutes",
        "signal": "Aromatic"
      }
    },
    {
      "text": "Heat coarse salt in wok over medium 5 minutes until hot.",
      "textZh": "宽锅中火加热粗盐5分钟至烫手。",
      "zhHint": "热盐",
      "stateNote": {
        "visual": "Salt shimmering, dry",
        "visualZh": "盐粒发亮干燥",
        "heat": "medium",
        "timeRef": "5 minutes",
        "signal": "Hissing when water touches"
      }
    },
    {
      "text": "Remove half salt. Place wings on remaining salt, cover with reserved salt.",
      "textZh": "取出半锅盐。鸡翅放余盐上，盖回盐。",
      "zhHint": "埋鸡",
      "stateNote": {
        "visual": "Wings buried in warm salt",
        "visualZh": "鸡翅埋入温盐中",
        "signal": "Salt crackling"
      }
    },
    {
      "text": "Cover wok. Cook on medium-low 20 minutes. Turn wings halfway.",
      "textZh": "盖锅盖，中小火焗20分钟，中途翻面。",
      "zhHint": "焗制",
      "stateNote": {
        "visual": "Steam escaping from edges",
        "visualZh": "边缘冒蒸汽",
        "heat": "medium-low",
        "timeRef": "20 minutes",
        "signal": "Wings firm"
      }
    },
    {
      "text": "Brush wings with remaining marinade. Cook 5 minutes more until glaze sets.",
      "textZh": "刷剩余腌料，再焗5分钟至焦糖化。",
      "zhHint": "收釉",
      "stateNote": {
        "visual": "Wings lacquered and caramelized",
        "visualZh": "鸡翅漆亮微焦糖",
        "heat": "medium",
        "timeRef": "5 minutes",
        "signal": "Glaze set"
      }
    }
  ],
  "tips": [
    "Do not reuse the salt — it is spent.",
    "Wings are done when juices run clear.",
    "Serve with the salt as a rustic presentation."
  ],
  "tipsZh": [
    "盐别重复用——已经报废。",
    "鸡翅汁清即熟。",
    "带盐上桌更有仪式感。"
  ],
  "relatedSlugs": [
    "salt-baked-chicken",
    "soy-chicken-wings",
    "grilled-chicken-wings"
  ],
  "image": "/images/recipes/salt-baked-chicken-wings.webp"
};
