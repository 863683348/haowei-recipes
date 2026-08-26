import type { Recipe } from "@/lib/types";

/**
 * 葱油拌面 Scallion Oil Noodles
 */
export const scallion_noodles: Recipe = {
  id: "scallion-noodles",
  slug: "scallion-noodles",
  titleEn: "Scallion Oil Noodles (葱油拌面)",
  titleZh: "葱油拌面",
  pinyin: "scallion noodles",
  cuisine: "家常菜",
  cuisineEn: "Home-style",
  region: "Shanghai",
  regionZh: "上海",
  difficulty: "medium",
  timeMin: 30,
  servings: 2,
  version: "family",
  versionNote: "Shanghai street food classic — simple noodles tossed in deeply caramelized scallion oil.",
  versionNoteZh: "上海街头经典——简单面条拌上香浓葱油。",
  tags: ["comfort", "vegetarian", "weeknight"],
  dietary: ["vegetarian"],
  story: "Scallion oil noodles (葱油拌面) are a Shanghai street food icon — humble wheat noodles tossed in deeply caramelized scallion-infused oil with a touch of soy and sugar. The magic is in the scallion oil: slow-frying scallions until they are dark brown and crispy, infusing the oil with sweet allium flavor. This dish proves that Chinese comfort food doesn't need to be complicated to be deeply satisfying.",
  storyZh: "葱油拌面是上海街头小吃的代表——简单的小麦面条拌上深 caramelized 的葱油，加一点生抽和糖。秘诀在于葱油：慢火炸葱至深褐色酥脆，让油充分吸收葱的甜味。这道菜证明中式 comfort food 不需要复杂也能深深满足。",
  ingredients: [
    { id: "scn-noodles", nameEn: "wheat noodles (or ramen)", nameZh: "小麦面（或拉面）", amountMetric: "200 g", amountUS: "7 oz", category: "staple", pantry: "local" },
    { id: "scn-scallion", nameEn: "scallions, cut into 3-inch sections", nameZh: "大葱段，3 寸长", amountMetric: "6 stalks", amountUS: "6 stalks", category: "produce", pantry: "local", termKey: "scallion" },
    { id: "scn-oil", nameEn: "neutral oil (canola or peanut)", nameZh: "食用油（菜籽油或花生油）", amountMetric: "4 tbsp", amountUS: "4 tbsp", category: "western-pantry", pantry: "local" },
    { id: "scn-soy", nameEn: "light soy sauce", nameZh: "生抽", amountMetric: "2 tbsp", amountUS: "2 tbsp", category: "asian-pantry", pantry: "asian", termKey: "light-soy-sauce" },
    { id: "scn-sugar", nameEn: "white sugar", nameZh: "白糖", amountMetric: "1 tsp", amountUS: "1 tsp", category: "western-pantry", pantry: "local" }
  ],
  steps: [
    { text: "Cook noodles in salted boiling water according to package directions. Drain and rinse briefly under cold water to stop cooking. Set aside.", textZh: "面条沸水加盐煮熟，按包装说明时间。捞出过冷水沥干备用。", stateNote: { visual: "Noodles are tender but still firm (al dente)", visualZh: "面条软但仍有弹性", signal: "No hard center when bitten", signalZh: "咬开无硬芯" } },
    { text: "Heat neutral oil in a small saucepan over medium-low heat. Add scallion sections in a single layer.", textZh: "小锅中放油，中小火加热。葱段平铺入锅。", stateNote: { visual: "Oil shimmers, scallions begin to sizzle gently", visualZh: "油微微晃动，葱段开始轻嘶", heat: "medium-low", signal: "Oil is at 150°C — scallions sizzle without smoking", signalZh: "油温约150度，葱嘶响但不冒烟" } },
    { text: "Slow-fry scallions, turning occasionally, for 8-10 minutes until deeply browned and crispy. The oil will turn amber-colored.", textZh: "慢炸葱段，偶尔翻动，8-10 分钟至深褐色酥脆。油会变成琥珀色。", stateNote: { visual: "Scallions turn from bright green to dark brown, oil turns amber", visualZh: "葱从翠绿变深褐，油变琥珀色", heat: "medium-low", timeRef: "8-10 minutes", timeRefZh: "8-10 分钟", signal: "Scallions are dark brown and crisp, not burnt", signalZh: "葱深褐酥脆，不焦" } },
    { text: "Remove scallions with a slotted spoon. Add soy sauce and sugar to the hot oil, stir 10 seconds until sugar dissolves.", textZh: "捞出葱段。热油中加生抽、糖，搅 10 秒至糖融化。", stateNote: { visual: "Sauce bubbles vigorously and mixes with oil into a glossy brown liquid", visualZh: "酱汁冒泡与油融合成光泽棕液", signal: "Sugar fully dissolved, sauce glossy", signalZh: "糖完全融化，酱汁光亮" } },
    { text: "Add cooked noodles to the sauce. Toss vigorously with chopsticks or tongs to coat every strand evenly.", textZh: "下面条入酱汁，用筷子或夹子快速翻炒均匀。", stateNote: { visual: "Noodles are evenly coated in dark glossy sauce, no dry patches", visualZh: "面条均匀裹上深褐色光泽酱汁，无干燥斑块", signal: "Every strand is coated, sauce clings to noodles", signalZh: "每根面条都裹上酱，酱汁挂面" } },
    { text: "Top with fried scallions. Serve immediately while hot.", textZh: "撒上炸葱，立即上桌趁热吃。", stateNote: { visual: "Glossy dark noodles topped with dark crispy scallions", visualZh: "光泽黑亮面条配深褐酥脆葱段", signal: "Steam rising, best eaten now", signalZh: "热气升腾，现在吃最佳" } }
  ],
  tips: [
    "The scallion oil is the star — do not rush the frying. Low and slow brings out the sweet allium flavor.",
    "Use the darkest scallion sections (the white ends) for the best color and flavor.",
    "This dish is naturally vegan and gluten-free if you use tamari instead of soy sauce.",
    "The fried scallions can be made ahead and stored in the fridge for up to a week."
  ],
  tipsZh: [
    "葱油是灵魂——不要急火。小火慢炸才能激发葱的甜味。",
    "用葱白部分（最白的末端）颜色最深、风味最好。",
    "这道菜天生纯素，用味醂代替生抽就是无麸质。",
    "炸葱可以提前做多批，冷藏保存一周。"
  ],
  relatedSlugs: ["tomato-egg-noodles", "egg-fried-rice", "yangchun-noodles"],
  image: "/images/recipes/scallion-noodles.webp"
};
