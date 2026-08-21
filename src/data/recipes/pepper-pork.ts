import type { Recipe } from "@/lib/types";

/**
 * 青椒肉丝 Pepper Shredded Pork
 */
export const pepperPork: Recipe = {
  id: "pepper-pork",
  slug: "pepper-pork",
  titleEn: "Pepper Shredded Pork (青椒肉丝)",
  titleZh: "青椒肉丝",
  pinyin: "pepper pork",
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
  tags: ["spicy", "comfort"],
  dietary: ["none"],
  story: "A classic Chinese home dish.",
  storyZh: "经典中国家常菜。",
  ingredients: [
    { id: "pepper-pork-1", nameEn: "main ingredient", nameZh: "主料", amountMetric: "200 g", amountUS: "7 oz", category: "protein", pantry: "local" },
    { id: "pepper-pork-2", nameEn: "seasoning", nameZh: "调味料", amountMetric: "2 tbsp", amountUS: "2 tbsp", category: "asian-pantry", pantry: "asian" },
    { id: "pepper-pork-3", nameEn: "oil", nameZh: "食用油", amountMetric: "3 tbsp", amountUS: "3 tbsp", category: "western-pantry", pantry: "local" }
  ],
  steps: [
    { text: "Prepare main ingredients.", textZh: "准备主料。" },
    { text: "Heat oil, cook ingredients.", textZh: "热油烹饪。" },
    { text: "Add seasoning and serve.", textZh: "加调味料，上桌。" }
  ],
  tips: ["Use fresh ingredients."],
  tipsZh: ["使用新鲜食材。"],
  relatedSlugs: ["tomato-and-egg", "egg-fried-rice"],
  "image": "/images/recipes/pepper-pork.svg",
};
