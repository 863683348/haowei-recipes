import type { Recipe } from "@/lib/types";

/** Chopped Chili Steamed Egg (剁椒蒸蛋) — Day batch */
export const chopped_chili_steamed_egg: Recipe = {
  "id": "chopped-chili-steamed-egg",
  "slug": "chopped-chili-steamed-egg",
  "titleEn": "Chopped Chili Steamed Egg",
  "titleZh": "剁椒蒸蛋",
  "pinyin": "duò jiāo zhēng dàn",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan",
  "regionZh": "湖南",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Silky steamed egg with fiery chili topping.",
  "versionNoteZh": "嫩滑蒸蛋配辣剁椒。",
  "tags": [
    "15-min",
    "spicy",
    "quick",
    "healthy"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "A simple Hunan home dish: silky steamed egg topped with spicy chopped chili.",
  "storyZh": "湖南家常蒸蛋，嫩滑如布丁，盖上剁椒辣得过瘾。",
  "ingredients": [
    {
      "id": "cse-01",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "3 pieces",
      "amountUS": "3 pieces",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cse-02",
      "nameEn": "chopped chili peppers",
      "nameZh": "剁椒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chopped-chili"
    },
    {
      "id": "cse-03",
      "nameEn": "warm water",
      "nameZh": "温水",
      "amountMetric": "150 ml",
      "amountUS": "0.6 cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cse-04",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "cse-05",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cse-06",
      "nameEn": "spring onion",
      "nameZh": "小葱",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Beat eggs with warm water and a pinch of salt.",
      "textZh": "鸡蛋打散加入温水和少许盐。",
      "stateNote": {
        "visual": "Egg mixture smooth",
        "visualZh": "蛋液顺滑",
        "signal": "Mixed"
      }
    },
    {
      "text": "Strain egg mixture through a sieve for extra smoothness.",
      "textZh": "过筛一次更嫩滑。",
      "stateNote": {
        "visual": "Fine mixture",
        "visualZh": "蛋液细腻",
        "signal": "Ready"
      }
    },
    {
      "text": "Cover bowl with plastic wrap and pierce holes.",
      "textZh": "碗口覆保鲜膜扎几个孔。",
      "stateNote": {
        "visual": "Covered bowl",
        "visualZh": "碗已覆盖",
        "signal": "Ready"
      }
    },
    {
      "text": "Steam over medium heat for 12 minutes.",
      "textZh": "中火蒸12分钟。",
      "stateNote": {
        "visual": "Egg set",
        "visualZh": "蛋羹凝固",
        "heat": "medium",
        "timeRef": "12 minutes",
        "signal": "Set"
      }
    },
    {
      "text": "Top with chopped chili and drizzle sesame oil.",
      "textZh": "取出后铺上剁椒淋香油。",
      "stateNote": {
        "visual": "Garnished",
        "visualZh": "点缀完成",
        "signal": "Ready"
      }
    },
    {
      "text": "Garnish with chopped spring onion and serve.",
      "textZh": "撒葱花上桌。",
      "stateNote": {
        "visual": "Green garnish",
        "visualZh": "葱花点缀",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Use warm water for silkier texture.",
    "Don't overcook or eggs become rubbery."
  ],
  "tipsZh": [
    "用温水蛋羹更嫩。",
    "别蒸太久，会变硬。"
  ],
  "relatedSlugs": [
    "chopped-chili-steamed-chicken-legs",
    "minced-pork-steamed-egg"
  ],
  "image": "/images/recipes/chopped-chili-steamed-egg.webp"
};
