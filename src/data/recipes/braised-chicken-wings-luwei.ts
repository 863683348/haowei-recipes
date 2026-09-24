import type { Recipe } from "@/lib/types";

/** Master Stock Braised Chicken Wings (卤鸡翅) (卤鸡翅) — Day batch */
export const braised_chicken_wings_luwei: Recipe = {
  "id": "braised-chicken-wings-luwei",
  "slug": "braised-chicken-wings-luwei",
  "titleEn": "Master Stock Braised Chicken Wings (卤鸡翅)",
  "titleZh": "卤鸡翅",
  "pinyin": "lǔ jī chì",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version keeps the master stock simple and simmers once. Restaurant version reuses the same pot of stock for days.",
  "versionNoteZh": "家常版用简单卤水煮一次。餐厅版同一锅卤水连用数日，越卤越香。",
  "tags": [
    "chicken",
    "wings",
    "master-stock",
    "braise",
    "make-ahead",
    "party"
  ],
  "dietary": [
    "none"
  ],
  "story": "卤味 is the Cantonese answer to cold cuts — a pot of soy and spice broth that you dip things into and never throw away. Every family's master stock tastes slightly different because each round adds a little more chicken fat and aroma.",
  "storyZh": "卤味是广东人的冷盘答案——一锅酱油香料汤，什么都能下去卤，卤水从不倒掉。每家卤水味道都略有不同，因为每卤一次就多一分鸡油和香气。",
  "ingredients": [
    {
      "id": "bcwl-1",
      "nameEn": "chicken wings, whole",
      "nameZh": "整只鸡翅",
      "amountMetric": "800 g",
      "amountUS": "about 1.8 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "bcwl-2",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "120 ml",
      "amountUS": "1/2 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bcwl-3",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bcwl-4",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "bcwl-5",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "bcwl-6",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "2 pieces",
      "amountUS": "2 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "bcwl-7",
      "nameEn": "cinnamon bark",
      "nameZh": "桂皮",
      "amountMetric": "1 stick",
      "amountUS": "1 stick",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cinnamon"
    },
    {
      "id": "bcwl-8",
      "nameEn": "white peppercorns",
      "nameZh": "白胡椒粒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "bcwl-9",
      "nameEn": "ginger, smashed",
      "nameZh": "姜块",
      "amountMetric": "30 g",
      "amountUS": "1 thumb",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bcwl-10",
      "nameEn": "scallion, knotted",
      "nameZh": "葱结",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Blanch the wings in boiling water for 3 minutes to remove blood and impurities. Rinse under cold water.",
      "textZh": "鸡翅沸水焯 3 分钟去血水杂质，冷水冲洗干净。",
      "zhHint": "焯水",
      "stateNote": {
        "visual": "Foam collects on the surface, skin dulls",
        "visualZh": "表面聚起浮沫，表皮变暗",
        "signal": "Rinsing water runs clear",
        "signalZh": "冲水变清",
        "timeRef": "3 minutes",
        "heat": "high"
      }
    },
    {
      "text": "Add 1.2 L water, soy sauces, wine, sugar and all spices to a pot. Boil for 10 minutes to build the master stock.",
      "textZh": "锅中加 1.2 L 水、生抽、老抽、绍酒、冰糖和全部香料，煮开 10 分钟熬卤水。",
      "zhHint": "熬卤水",
      "stateNote": {
        "visual": "Broth turns deep amber and smells of anise",
        "visualZh": "卤水呈深琥珀色，飘出八角香",
        "signal": "Seasoning aroma is strong and rounded",
        "signalZh": "香料味浓郁圆润",
        "heat": "medium",
        "timeRef": "10 minutes"
      }
    },
    {
      "text": "Slide in the wings. Keep at a bare simmer — bubbles should only break the surface occasionally.",
      "textZh": "下鸡翅，保持微沸——只有零星气泡冒出即可。",
      "zhHint": "下鸡翅",
      "stateNote": {
        "visual": "Occasional bubbles, no rolling boil",
        "visualZh": "偶尔冒泡，不翻滚",
        "signal": "Wings stay whole, skin not broken",
        "signalZh": "鸡翅完整，皮不破烂",
        "heat": "low"
      }
    },
    {
      "text": "Simmer 18 minutes, then turn off the heat and let the wings steep in the stock for 15 minutes.",
      "textZh": "小火卤 18 分钟，关火后在卤水中浸泡 15 分钟。",
      "zhHint": "卤煮浸泡",
      "stateNote": {
        "visual": "Meat firms up and turns even mahogany",
        "visualZh": "肉质紧实，颜色均匀呈红棕",
        "signal": "A skewer pierces the thickest part with light resistance",
        "signalZh": "筷子扎最厚处略有阻力",
        "timeRef": "18 + 15 minutes"
      }
    },
    {
      "text": "Lift the wings out and cool to room temperature. Strain and freeze the master stock for next time.",
      "textZh": "捞出鸡翅放凉，卤水过滤后冷冻留用。",
      "zhHint": "捞出放凉"
    },
    {
      "text": "Brush with a little warm stock before serving so they glisten. Serve cold or at room temperature.",
      "textZh": "上桌前刷一点热卤水提亮，冷食或常温食用。",
      "zhHint": "刷卤上光"
    }
  ],
  "tips": [
    "Keep the stock at a bare simmer — a hard boil shreds the skin.",
    "Steeping off the heat is what makes the meat taste seasoned all the way through.",
    "Reuse the strained stock within a month; boil it for 5 minutes each time."
  ],
  "tipsZh": [
    "必须微沸，大滚会把皮煮烂。",
    "关火浸泡才是入味的关键。",
    "卤水过滤后一个月内复用，每次先煮开 5 分钟。"
  ],
  "relatedSlugs": [
    "braised-chicken-feet-luwei",
    "braised-beef-luwei",
    "braised-eggs-luwei",
    "braised-dried-tofu"
  ],
  "image": "/images/recipes/soy-chicken-wings.webp"
};
