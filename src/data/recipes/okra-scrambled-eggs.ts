import type { Recipe } from "@/lib/types";

/** Okra Scrambled Eggs | Slimy-Crunchy, Nutty, Unexpectedly Delicious (秋葵炒鸡蛋) — Day batch */
export const okra_scrambled_eggs: Recipe = {
  "id": "okra-scrambled-eggs",
  "slug": "okra-scrambled-eggs",
  "titleEn": "Okra Scrambled Eggs | Slimy-Crunchy, Nutty, Unexpectedly Delicious",
  "titleZh": "秋葵炒鸡蛋",
  "pinyin": "qiū kuí chǎo dàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Jiangnan",
  "regionZh": "江南",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version: whole or halved okra, minimal seasoning.",
  "versionNoteZh": "家常版整根或对半切，调味极简。",
  "tags": [
    "30-min",
    "vegetarian",
    "healthy"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "Okra is one of those vegetables that divides opinion. In Jiangnan homes, it is a summer favorite.",
  "storyZh": "秋葵是一种两极分化的蔬菜。在江南人家，它是夏季常客。",
  "ingredients": [
    {
      "id": "ok-01",
      "nameEn": "okra",
      "nameZh": "秋葵",
      "amountMetric": "200 g (about 12-15 pods)",
      "amountUS": "200 g",
      "category": "produce",
      "pantry": "local",
      "termKey": "okra"
    },
    {
      "id": "ok-02",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "4 large",
      "amountUS": "4 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ok-03",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ok-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ok-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Wash okra, trim tips leaving caps. Cut lengthwise. Whisk eggs.",
      "textZh": "秋葵去蒂保帽对半切，蛋液打匀。",
      "zhHint": "去蒂保帽",
      "stateNote": {
        "visual": "Okra bright green.",
        "signal": "Pods firm."
      }
    },
    {
      "text": "Heat oil over medium-high until shimmering.",
      "textZh": "中大火热油。",
      "zhHint": "热油",
      "stateNote": {
        "visual": "Oil flows like glass.",
        "heat": "medium-high",
        "timeRef": "45 seconds",
        "signal": "Water dances."
      }
    },
    {
      "text": "Add okra in single layer, cook 90 seconds without stirring.",
      "textZh": "下秋葵铺单层不翻动煎90秒。",
      "zhHint": "单面焦香",
      "stateNote": {
        "visual": "Okra edges deepen.",
        "heat": "medium-high",
        "timeRef": "90 seconds",
        "signal": "Smoky aroma."
      }
    },
    {
      "text": "Push okra aside. Add oil, pour eggs. Let set 10 seconds.",
      "textZh": "推秋葵入蛋，静置10秒。",
      "zhHint": "推菜入蛋",
      "stateNote": {
        "visual": "Egg bottom sets.",
        "signal": "Eggs lift cleanly."
      }
    },
    {
      "text": "Scramble eggs, toss with okra. Add soy sauce, serve immediately.",
      "textZh": "炒蛋翻匀加生抽立即上桌。",
      "stateNote": {
        "visual": "Okra retains green.",
        "signal": "Fresh grassy aroma."
      }
    }
  ],
  "tips": [
    "Do not salt okra before cooking.",
    "Leave caps on when trimming.",
    "Small pods are tender enough to eat whole."
  ],
  "tipsZh": [
    "炒前不要加盐。",
    "切蒂时保留顶部。",
    "小秋葵可整根食用。"
  ],
  "relatedSlugs": [
    "tomato-and-egg",
    "cucumber-scrambled-eggs",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/okra-scrambled-eggs.webp"
};
