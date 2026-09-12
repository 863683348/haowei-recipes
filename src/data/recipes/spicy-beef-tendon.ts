import type { Recipe } from "@/lib/types";

/** Spicy Beef Tendon (麻辣牛筋) — Day batch */
export const spicy_beef_tendon: Recipe = {
  "id": "spicy-beef-tendon",
  "slug": "spicy-beef-tendon",
  "titleEn": "Spicy Beef Tendon",
  "titleZh": "麻辣牛筋",
  "pinyin": "má là niú jīn",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "hard",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Slow-braised beef tendon with Sichuan spice.",
  "versionNoteZh": "慢炖牛筋配川式麻辣。",
  "tags": [
    "spicy",
    "slow-cook",
    "chewy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Beef tendon is a Sichuan favorite, braised until tender and coated in spicy sauce.",
  "storyZh": "牛筋是四川人钟爱的食材，炖至软糯入味，麻辣鲜香。",
  "ingredients": [
    {
      "id": "sbt-01",
      "nameEn": "beef tendon",
      "nameZh": "牛筋",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "sbt-02",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "15 pieces",
      "amountUS": "15 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "sbt-03",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "sbt-04",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "2 pieces",
      "amountUS": "2 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "sbt-05",
      "nameEn": "cinnamon stick",
      "nameZh": "桂皮",
      "amountMetric": "1 piece",
      "amountUS": "1 piece",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cinnamon"
    },
    {
      "id": "sbt-06",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "sbt-07",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    }
  ],
  "steps": [
    {
      "text": "Cut beef tendon into 2cm pieces.",
      "textZh": "牛筋切2厘米块状。",
      "stateNote": {
        "visual": "Tendon pieces",
        "visualZh": "牛筋切块",
        "signal": "Ready"
      }
    },
    {
      "text": "Blanch tendon in boiling water for 5 minutes, drain.",
      "textZh": "牛筋焯水5分钟去腥。",
      "stateNote": {
        "visual": "Water boiling",
        "visualZh": "水开",
        "heat": "high",
        "timeRef": "5 minutes",
        "signal": "Blanched"
      }
    },
    {
      "text": "Heat oil and fry rock sugar until caramel colored.",
      "textZh": "热油炒糖色至琥珀色。",
      "stateNote": {
        "visual": "Sugar caramelizing",
        "visualZh": "糖色变琥珀",
        "heat": "medium",
        "signal": "Caramel"
      }
    },
    {
      "text": "Add tendon and stir to coat with sugar color.",
      "textZh": "加入牛筋翻炒上色。",
      "stateNote": {
        "visual": "Tendon coated",
        "visualZh": "牛筋上色",
        "signal": "Coated"
      }
    },
    {
      "text": "Add chilies, peppercorns, star anise, cinnamon, and soy sauce.",
      "textZh": "加入干辣椒、花椒、八角、桂皮、酱油。",
      "stateNote": {
        "visual": "Spices added",
        "visualZh": "香料入锅",
        "signal": "Mixed"
      }
    },
    {
      "text": "Add enough water to cover, bring to boil.",
      "textZh": "加水没过牛筋，大火烧开。",
      "stateNote": {
        "visual": "Water boiling",
        "visualZh": "水开",
        "heat": "high",
        "signal": "Boiling"
      }
    },
    {
      "text": "Reduce heat and simmer for 60-70 minutes until tender.",
      "textZh": "转小火炖60-70分钟至软糯。",
      "stateNote": {
        "visual": "Simmering gently",
        "visualZh": "小火慢炖",
        "heat": "low",
        "timeRef": "70 minutes",
        "signal": "Tender"
      }
    },
    {
      "text": "Increase heat and reduce sauce until thick.",
      "textZh": "大火收汁至浓稠。",
      "stateNote": {
        "visual": "Sauce thickening",
        "visualZh": "汤汁收浓",
        "heat": "high",
        "signal": "Thick"
      }
    },
    {
      "text": "Serve hot.",
      "textZh": "热食。",
      "stateNote": {
        "visual": "Steaming dish",
        "visualZh": "热气腾腾",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Tendon needs long braising for tenderness.",
    "Can be made ahead and reheated."
  ],
  "tipsZh": [
    "牛筋需要长时间炖煮才能软糯。",
    "可提前制作，复热更佳。"
  ],
  "relatedSlugs": [
    "mala-dry-pot",
    "spicy-chicken-feet"
  ],
  "image": "/images/recipes/spicy-beef-tendon.webp"
};
