import type { Recipe } from "@/lib/types";

/**
 * 青椒肉丝 Pepper Shredded Pork
 */
export const pepperPork: Recipe = {
  id: "pepper-pork",
  slug: "pepper-pork",
  titleEn: "Pepper Shredded Pork (青椒肉丝)",
  titleZh: "青椒肉丝",
  pinyin: "qing jiao rou si",
  cuisine: "家常菜",
  cuisineEn: "Home-style",
  region: "Jiangsu (江苏)",
  regionZh: "江苏",
  difficulty: "easy",
  timeMin: 20,
  servings: 2,
  version: "family",
  versionNote: "家庭快手版——肉丝滑嫩，青椒爽脆，十分钟上桌。",
  versionNoteZh: "家庭快手版——肉丝滑嫩，青椒爽脆，十分钟上桌。",
  tags: ["quick", "comfort", "weeknight", "pork"],
  dietary: ["none"],
  story: "Pepper shredded pork is the ultimate weeknight comfort food in Chinese homes. Thin strips of pork are velveted for silkiness, then stir-fried with crisp green pepper. My mother made this after work on busy Tuesdays — it took 15 minutes from fridge to table and never failed to make my father smile.",
  storyZh: "青椒肉丝是中国家庭周末下班后的终极安慰菜。肉丝经过上浆处理变得丝滑嫩口，再与爽脆的青椒快炒。我妈妈在忙碌的周二手工做饭——从冰箱到餐桌只要 15 分钟，却总能让我爸爸露出微笑。",
  ingredients: [
    { id: "pepper-1", nameEn: "pork loin (or tenderloin)", nameZh: "猪里脊", amountMetric: "200 g", amountUS: "7 oz", category: "protein", pantry: "local", termKey: "pork-loin" },
    { id: "pepper-2", nameEn: "green bell pepper", nameZh: "青椒", amountMetric: "1 large", amountUS: "1 large", category: "produce", pantry: "local", termKey: "green-pepper" },
    { id: "pepper-3", nameEn: "light soy sauce", nameZh: "生抽", amountMetric: "1 tbsp", amountUS: "1 tbsp", category: "asian-pantry", pantry: "asian", termKey: "light-soy-sauce" },
    { id: "pepper-4", nameEn: "shaoxing wine", nameZh: "绍兴酒", amountMetric: "1 tbsp", amountUS: "1 tbsp", category: "asian-pantry", pantry: "asian", termKey: "shaoxing-wine" },
    { id: "pepper-5", nameEn: "cornstarch", nameZh: "玉米淀粉", amountMetric: "1 tbsp", amountUS: "1 tbsp", category: "western-pantry", pantry: "local", termKey: "cornstarch" },
    { id: "pepper-6", nameEn: "garlic cloves", nameZh: "大蒜", amountMetric: "2 cloves", amountUS: "2 cloves", category: "produce", pantry: "local", termKey: "garlic" },
    { id: "pepper-7", nameEn: "cooking oil", nameZh: "食用油", amountMetric: "2 tbsp", amountUS: "2 tbsp", category: "western-pantry", pantry: "local" },
    { id: "pepper-8", nameEn: "sesame oil", nameZh: "香油", amountMetric: "1/2 tsp", amountUS: "1/2 tsp", category: "asian-pantry", pantry: "asian", termKey: "sesame-oil" },
    { id: "pepper-9", nameEn: "sugar", nameZh: "白糖", amountMetric: "1/4 tsp", amountUS: "1/4 tsp", category: "western-pantry", pantry: "local" },
  ],
  steps: [
    {
      text: "Cut pork loin into thin strips about 5 cm long and 3 mm thick. Place in a bowl with shaoxing wine, 1/2 tbsp light soy sauce, and cornstarch. Mix well and marinate for 10 minutes.",
      textZh: "将猪里脊切成约 5 厘米长、3 毫米厚的细丝。放入碗中，加入绍兴酒、1/2 汤匙生抽和玉米淀粉，拌匀腌制 10 分钟。",
      stateNote: { visual: "meat coated in glossy slurry", signal: "liquid absorbed", timeRef: "10 min" },
    },
    {
      text: "Remove seeds from the green pepper and cut into matching thin strips. Mince the garlic.",
      textZh: "青椒去籽后切成与肉丝相近的细丝。大蒜切末。",
      stateNote: { visual: "uniform strip shapes", signal: "prep complete" },
    },
    {
      text: "Heat oil in a wok over high heat until shimmering. Add the marinated pork and spread in a single layer. Let it sear for 20 seconds without stirring, then stir-fry until the pork turns white.",
      textZh: "热锅旺火下油，烧至微冒烟。加入腌好的肉丝，平铺锅底煎 20 秒不要翻动，然后快速翻炒至肉丝变白。",
      stateNote: { visual: "pork turning opaque white", signal: "sizzling", heat: "high" },
    },
    {
      text: "Add garlic and green pepper strips. Stir-fry for 1 minute until the pepper softens slightly but remains crisp.",
      textZh: "加入蒜末和青椒丝，翻炒 1 分钟，青椒略微变软但仍保持脆感。",
      stateNote: { visual: "pepper glossy bright green", signal: "fragrant", heat: "high" },
    },
    {
      text: "Add remaining light soy sauce and sugar. Toss for 15 seconds. Drizzle sesame oil and serve immediately over steamed rice.",
      textZh: "加入剩余生抽和白糖，翻炒 15 秒。淋上香油即可出锅，配白米饭食用。",
      stateNote: { visual: "sauce glossy coating meat", signal: "ready" },
    },
  ],
  tips: [
    "Velveting (上浆) is the secret to tender pork — the cornstarch creates a protective coating that locks in moisture.",
    "High heat is essential. If your wok isn't hot enough, the pork will stew instead of stir-fry.",
    "Green bell pepper works best — sweet and crisp. Don't use hot peppers for this dish.",
  ],
  tipsZh: [
    "上浆是肉丝嫩滑的秘诀——玉米淀粉形成保护层锁住水分。",
    "猛火是关键。如果锅不够热，肉会变成煮而不是炒。",
    "甜椒最合适——清甜爽脆。不要用辣椒做这道菜。",
  ],
  relatedSlugs: ["egg-fried-rice", "yangzhou-fried-rice", "scallion-noodles", "twice-cooked-pork"],
  image: "/images/recipes/pepper-pork.svg",
};
