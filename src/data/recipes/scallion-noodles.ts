import type { Recipe } from "@/lib/types";

/** Scallion Oil Noodles (葱油拌面) (葱油拌面) — Day batch */
export const scallion_noodles: Recipe = {
  "id": "scallion-noodles",
  "slug": "scallion-noodles",
  "titleEn": "Scallion Oil Noodles (葱油拌面)",
  "titleZh": "葱油拌面",
  "pinyin": "cōng yóu bàn miàn",
  "cuisine": "沪菜",
  "cuisineEn": "Shanghainese",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Shanghai street food classic. The scallion oil is made by slowly frying scallions in oil until deeply caramelized — the same oil becomes the sauce. Best made in batches and stored.",
  "versionNoteZh": "上海街头经典。用慢火将葱炸至深焦糖色，葱油就是酱汁本身。建议批量制作冷藏保存。",
  "tags": [
    "comfort",
    "vegetarian",
    "shanghai",
    "street-food"
  ],
  "dietary": [
    "vegetarian"
  ],
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
  tips: ["Use fresh ingredients."],
  tipsZh: ["使用新鲜食材。"],
  relatedSlugs: ["tomato-and-egg", "egg-fried-rice"],
  image: "/images/recipes/scallion-noodles.svg",
};
