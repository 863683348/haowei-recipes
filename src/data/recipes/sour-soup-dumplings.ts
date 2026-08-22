import type { Recipe } from "@/lib/types";

/**
 * 酸汤水饺 Sour Soup Dumplings
 */
export const sourSoupDumplings: Recipe = {
  id: "sour-soup-dumplings",
  slug: "sour-soup-dumplings",
  titleEn: "Sour Soup Dumplings (酸汤水饺)",
  titleZh: "酸汤水饺",
  pinyin: "sour soup dumplings",
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
  tags: ["comfort", "spicy"],
  dietary: ["none"],
  story: "A classic Chinese home dish.",
  storyZh: "经典中国家常菜。",
  ingredients: [
    { id: "sour-soup-dumplings-1", nameEn: "main ingredient", nameZh: "主料", amountMetric: "200 g", amountUS: "7 oz", category: "protein", pantry: "local" },
    { id: "sour-soup-dumplings-2", nameEn: "seasoning", nameZh: "调味料", amountMetric: "2 tbsp", amountUS: "2 tbsp", category: "asian-pantry", pantry: "asian" },
    { id: "sour-soup-dumplings-3", nameEn: "oil", nameZh: "食用油", amountMetric: "3 tbsp", amountUS: "3 tbsp", category: "western-pantry", pantry: "local" }
  ],
  steps: [
    { text: "Prepare main ingredients.", textZh: "准备主料。" },
    { text: "Heat oil, cook ingredients.", textZh: "热油烹饪。" },
    { text: "Add seasoning and serve.", textZh: "加调味料，上桌。" }
  ],
  tips: ["Use fresh ingredients."],
  tipsZh: ["使用新鲜食材。"],
  relatedSlugs: ["tomato-and-egg", "egg-fried-rice"],
<<<<<<< HEAD
  image: "/images/recipes/sour-soup-dumplings.svg",
=======
  "image": "/images/recipes/sour-soup-dumplings.svg",
>>>>>>> origin/main
};
