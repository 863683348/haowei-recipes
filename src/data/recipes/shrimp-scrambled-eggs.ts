import type { Recipe } from "@/lib/types";

/** Shrimp Scrambled Eggs | Cantonese-Style, Silky and Sweet (虾仁炒蛋) — Day batch */
export const shrimp_scrambled_eggs: Recipe = {
  "id": "shrimp-scrambled-eggs",
  "slug": "shrimp-scrambled-eggs",
  "titleEn": "Shrimp Scrambled Eggs | Cantonese-Style, Silky and Sweet",
  "titleZh": "虾仁炒蛋",
  "pinyin": "xiā rén chǎo dàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Cantonese family version: eggs silky, shrimp sweet and springy.",
  "versionNoteZh": "粤式家常：蛋嫩虾甜。",
  "tags": [
    "30-min",
    "weeknight",
    "high-protein"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Shrimp and eggs is a classic Cantonese pairing — the sweetness of shrimp amplifies the richness of egg.",
  "storyZh": "虾仁炒蛋是粤式经典搭配——虾的甜鲜衬托蛋的浓郁。",
  "ingredients": [
    {
      "id": "se-01",
      "nameEn": "fresh shrimp, peeled and deveined",
      "nameZh": "鲜虾仁",
      "amountMetric": "200 g",
      "amountUS": "200 g",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp"
    },
    {
      "id": "se-02",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "4 large",
      "amountUS": "4 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "se-03",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tsp (3 g)",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "se-04",
      "nameEn": "shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "se-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "se-06",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "se-07",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/8 tsp",
      "amountUS": "1/8 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Pat shrimp completely dry with paper towels.",
      "textZh": "虾仁用厨房纸彻底吸干。",
      "zhHint": "吸干水分",
      "stateNote": {
        "visual": "Shrimp matte and dry.",
        "signal": "No water droplets."
      }
    },
    {
      "text": "Toss with shaoxing wine and pinch salt. Let marinate 5 minutes.",
      "textZh": "加料酒盐腌制5分钟。",
      "zhHint": "腌制去腥",
      "stateNote": {
        "visual": "Shrimp slightly translucent.",
        "signal": "Surface sticky not slimy."
      }
    },
    {
      "text": "Whisk eggs with salt until uniform.",
      "textZh": "蛋液打匀。",
      "zhHint": "蛋液打匀",
      "stateNote": {
        "visual": "Egg mixture pale yellow.",
        "signal": "Smooth no streaks."
      }
    },
    {
      "text": "Heat oil over high. Add shrimp, sear 45 seconds without moving.",
      "textZh": "大火煎虾仁45秒不翻。",
      "zhHint": "单面煎45秒",
      "stateNote": {
        "visual": "Shrimp edges pink.",
        "heat": "high",
        "timeRef": "45 seconds",
        "signal": "Sizzle loud."
      }
    },
    {
      "text": "Flip shrimp, add oil, pour eggs. Let set 8 seconds, fold gently.",
      "textZh": "翻虾入蛋静置8秒后轻翻。",
      "zhHint": "推虾入蛋",
      "stateNote": {
        "visual": "Egg bottom sets.",
        "signal": "Eggs lift cleanly."
      }
    },
    {
      "text": "Sprinkle pepper, toss once, serve. Shrimp should be C-shape.",
      "textZh": "撒胡椒翻一次上桌虾呈C形。",
      "stateNote": {
        "visual": "Shrimp opaque pink curled.",
        "signal": "Sweet seafood aroma."
      }
    }
  ],
  "tips": [
    "Dry shrimp is non-negotiable.",
    "Do not overcook shrimp.",
    "C-shape means perfectly cooked."
  ],
  "tipsZh": [
    "虾仁必须吸干。",
    "虾不要炒过头。",
    "C形卷曲表示刚好。"
  ],
  "relatedSlugs": [
    "tomato-and-egg",
    "cucumber-scrambled-eggs",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/shrimp-scrambled-eggs.webp"
};
