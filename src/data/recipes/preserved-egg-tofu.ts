import type { Recipe } from "@/lib/types";

/** Preserved Egg with Tofu | Cool Summer Appetizer, No Cooking Required (皮蛋豆腐) — Day batch */
export const preserved_egg_tofu: Recipe = {
  "id": "preserved-egg-tofu",
  "slug": "preserved-egg-tofu",
  "titleEn": "Preserved Egg with Tofu | Cool Summer Appetizer, No Cooking Required",
  "titleZh": "皮蛋豆腐",
  "pinyin": "pí dàn dòu fu",
  "cuisine": "凉菜",
  "cuisineEn": "Cold Dish",
  "region": "Shanghai / Jiangnan",
  "regionZh": "上海 / 江南",
  "difficulty": "easy",
  "timeMin": 10,
  "servings": 2,
  "version": "family",
  "versionNote": "This is a no-cook cold appetizer. Silken tofu is the base.",
  "versionNoteZh": "这是一道免煮凉菜。以嫩豆腐为底。",
  "tags": [
    "no-cook",
    "summer",
    "vegetarian",
    "appetizer"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "Pí dàn dòu fu is the quintessential Chinese summer appetizer — cool, creamy, and deeply savory.",
  "storyZh": "皮蛋豆腐是中式夏日凉菜的典范——清凉、绵滑、咸鲜浓郁。",
  "ingredients": [
    {
      "id": "pt-01",
      "nameEn": "silken tofu",
      "nameZh": "嫩豆腐",
      "amountMetric": "400 g (1 block)",
      "amountUS": "1 block (14 oz)",
      "category": "dairy",
      "pantry": "asian",
      "termKey": "tofu"
    },
    {
      "id": "pt-02",
      "nameEn": "preserved egg",
      "nameZh": "皮蛋 / 松花蛋",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "asian",
      "termKey": "preserved-egg"
    },
    {
      "id": "pt-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp (22 ml)",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pt-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "pt-05",
      "nameEn": "chinkiang vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "pt-06",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱（切末）",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "pt-07",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "pinch",
      "amountUS": "pinch",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Drain tofu and place on serving plate.",
      "textZh": "豆腐沥干放盘。",
      "zhHint": "冷豆腐底",
      "stateNote": {
        "visual": "Tofu smooth and firm.",
        "signal": "Holds shape."
      }
    },
    {
      "text": "Cut tofu into 2 cm cubes.",
      "textZh": "切2厘米方块。",
      "zhHint": "切块",
      "stateNote": {
        "visual": "Cubes uniform.",
        "signal": "Tofu yields slightly."
      }
    },
    {
      "text": "Refrigerate until ready to serve.",
      "textZh": "冷藏备用。",
      "zhHint": "冷藏",
      "stateNote": {
        "visual": "Tofu cold and firm.",
        "signal": "Surface dry."
      }
    },
    {
      "text": "Peel preserved eggs under running water. Roughly chop.",
      "textZh": "流水下剥壳粗切。",
      "zhHint": "流水剥壳",
      "stateNote": {
        "visual": "Egg white amber jelly.",
        "signal": "Shell washes off."
      }
    },
    {
      "text": "Arrange chopped egg around and on top of tofu. Do not mix.",
      "textZh": "皮蛋摆盘不拌。",
      "zhHint": "皮蛋摆放",
      "stateNote": {
        "visual": "Amber and green contrast.",
        "signal": "Visually striking."
      }
    },
    {
      "text": "Drizzle soy sauce, sesame oil, vinegar. Sprinkle scallion and pepper. Serve.",
      "textZh": "淋汁撒葱胡椒上桌。",
      "stateNote": {
        "visual": "Sauce coats glossy.",
        "signal": "Savory vinegary aroma."
      }
    }
  ],
  "tips": [
    "Use coldest tofu possible.",
    "Preserved egg has strong flavor - 2 eggs for 400g tofu is ideal.",
    "Serve immediately after dressing."
  ],
  "tipsZh": [
    "豆腐越冷越好。",
    "皮蛋风味强烈，2个配400克豆腐。",
    "拌好立即食用。"
  ],
  "relatedSlugs": [
    "tomato-and-egg",
    "cucumber-scrambled-eggs",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/preserved-egg-tofu.webp"
};
