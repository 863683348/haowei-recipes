import type { Recipe } from "@/lib/types";

/**
 * 葱油拌面 Scallion Oil Noodles
 */
export const scallionNoodles: Recipe = {
  id: "scallion-noodles",
  slug: "scallion-noodles",
  titleEn: "Scallion Oil Noodles (葱油拌面)",
  titleZh: "葱油拌面",
  pinyin: "scallion noodles",
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
  tags: ["vegetarian", "quick"],
  dietary: ["none"],
  story: "A classic Chinese home dish.",
  storyZh: "经典中国家常菜。",
  ingredients: [
    { id: "scallion-noodles-1", nameEn: "main ingredient", nameZh: "主料", amountMetric: "200 g", amountUS: "7 oz", category: "protein", pantry: "local" },
    { id: "scallion-noodles-2", nameEn: "seasoning", nameZh: "调味料", amountMetric: "2 tbsp", amountUS: "2 tbsp", category: "asian-pantry", pantry: "asian" },
    { id: "scallion-noodles-3", nameEn: "oil", nameZh: "食用油", amountMetric: "3 tbsp", amountUS: "3 tbsp", category: "western-pantry", pantry: "local" }
  ],
  steps: [
    { text: "Prepare main ingredients.", textZh: "准备主料。" },
    { text: "Heat oil, cook ingredients.", textZh: "热油烹饪。" },
    { text: "Add seasoning and serve.", textZh: "加调味料，上桌。" }
  ],
<<<<<<< HEAD
  story: "A Shanghai street food classic — simple noodles tossed in fragrant scallion oil. The oil is made by slowly frying scallions until deeply caramelized.",
  storyZh: "上海街头经典——简单面条拌上香浓葱油。葱油通过慢火炸葱至深焦糖色制成。",
  ingredients: [
    { id: "scn-noodles", nameEn: "wheat noodles", nameZh: "小麦面", amountMetric: "200 g", amountUS: "7 oz", category: "staple", pantry: "local" },
    { id: "scn-scallion", nameEn: "scallions, cut into 3-inch sections", nameZh: "大葱段，3 寸长", amountMetric: "6 stalks", amountUS: "6 stalks", category: "produce", pantry: "local" },
    { id: "scn-oil", nameEn: "neutral oil", nameZh: "食用油", amountMetric: "4 tbsp", amountUS: "4 tbsp", category: "western-pantry", pantry: "local" },
    { id: "scn-soy", nameEn: "light soy sauce", nameZh: "生抽", amountMetric: "2 tbsp", amountUS: "2 tbsp", category: "asian-pantry", pantry: "asian", termKey: "light-soy-sauce" },
    { id: "scn-sugar", nameEn: "sugar", nameZh: "白糖", amountMetric: "1 tsp", amountUS: "1 tsp", category: "western-pantry", pantry: "local" }
  ],
  steps: [
    { text: "Cook noodles according to package directions. Drain and rinse briefly.", textZh: "按包装说明煮面。捞出沥干。", stateNote: { visual: "Noodles are tender but still firm (al dente)", visualZh: "面条软但仍有弹性", signal: "No hard center when bitten", signalZh: "咬开无硬芯" } },
    { text: "Heat oil in a pan over medium-low. Add scallion sections and fry slowly, turning occasionally, until deeply browned and crispy (about 8-10 minutes).", textZh: "锅中放油，中小火加热。下葱段慢炸，偶尔翻动，炸至深褐色酥脆（约 8-10 分钟）。", stateNote: { visual: "Scallions turn dark brown and crispy", visualZh: "葱段变深褐酥脆", heat: "medium-low", timeRef: "8-10 minutes", timeRefZh: "8-10 分钟", signal: "Scallions are dark brown and crisp", signalZh: "葱深褐酥脆" } },
    { text: "Remove scallions with a slotted spoon. Add soy sauce and sugar to the oil, stir 10 seconds.", textZh: "捞出葱段。锅中油加生抽、糖，搅 10 秒。", stateNote: { visual: "Sauce bubbles and mixes with oil", visualZh: "酱汁冒泡与油融合", signal: "Sugar dissolved, aroma rises", signalZh: "糖融化，香气升起" } },
    { text: "Add cooked noodles to the sauce. Toss vigorously to coat every strand.", textZh: "下煮好的面条，快速翻炒均匀。", stateNote: { visual: "Noodles are evenly coated in dark glossy sauce", visualZh: "面条均匀裹上深褐色光泽酱汁", signal: "No dry patches visible", signalZh: "无干燥斑块" } },
    { text: "Top with fried scallions. Serve immediately.", textZh: "撒上炸葱，立即上桌。", stateNote: { visual: "Glossy dark noodles topped with crispy scallions", visualZh: "光泽黑亮面条配酥脆葱段", signal: "Ready to eat", signalZh: "即可食用" } }
  ],
=======
>>>>>>> origin/main
  tips: ["Use fresh ingredients."],
  tipsZh: ["使用新鲜食材。"],
  relatedSlugs: ["tomato-and-egg", "egg-fried-rice"],
  image: "/images/recipes/scallion-noodles.svg",
};
