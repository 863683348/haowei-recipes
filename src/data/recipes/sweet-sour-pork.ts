import type { Recipe } from "@/lib/types";

/**
 * 糖醋里脊 Sweet and Sour Pork
 */
export const sweetSourPork: Recipe = {
  id: "sweet-sour-pork",
  slug: "sweet-sour-pork",
  titleEn: "Sweet and Sour Pork (糖醋里脊)",
  titleZh: "糖醋里脊",
  pinyin: "sweet sour pork",
  cuisine: "家常菜",
  cuisineEn: "Home-style",
  region: "China",
  regionZh: "中国",
  difficulty: "medium",
  timeMin: 30,
  servings: 2,
  version: "family",
  versionNote: "家庭版做法",
  versionNoteZh: "家庭版做法",
  tags: ["comfort", "special-occasion"],
  dietary: ["none"],
  story: "A classic Chinese home dish.",
  storyZh: "经典中国家常菜。",
  ingredients: [
    { id: "sweet-sour-pork-1", nameEn: "main ingredient", nameZh: "主料", amountMetric: "200 g", amountUS: "7 oz", category: "protein", pantry: "local" },
    { id: "sweet-sour-pork-2", nameEn: "seasoning", nameZh: "调味料", amountMetric: "2 tbsp", amountUS: "2 tbsp", category: "asian-pantry", pantry: "asian" },
    { id: "sweet-sour-pork-3", nameEn: "oil", nameZh: "食用油", amountMetric: "3 tbsp", amountUS: "3 tbsp", category: "western-pantry", pantry: "local" }
  ],
  steps: [
    { text: "Prepare main ingredients.", textZh: "准备主料。" },
    { text: "Heat oil, cook ingredients.", textZh: "热油烹饪。" },
    { text: "Add seasoning and serve.", textZh: "加调味料，上桌。" }
  ],
  tips: ["Use fresh ingredients."],
  tipsZh: ["使用新鲜食材。"],
  relatedSlugs: ["tomato-and-egg", "egg-fried-rice"],
  "image": "/images/recipes/sweet-sour-pork.svg",
};
