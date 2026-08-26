import type { Recipe } from "@/lib/types";

/**
 * 蒜苗回锅肉 Twice Cooked Pork
 */
export const twiceCookedPork: Recipe = {
  id: "twice-cooked-pork",
  slug: "twice-cooked-pork",
  titleEn: "Twice Cooked Pork (蒜苗回锅肉)",
  titleZh: "蒜苗回锅肉",
  pinyin: "suan miao hui gu rou",
  cuisine: "川菜",
  cuisineEn: "Sichuan",
  region: "Sichuan (四川)",
  regionZh: "四川",
  difficulty: "medium",
  timeMin: 35,
  servings: 2,
  version: "family",
  versionNote: "家庭快手版——用现成卤肉快速回锅，周末家常味。",
  versionNoteZh: "家庭快手版——用现成卤肉快速回锅，周末家常味。",
  tags: ["sichuan", "comfort", "weeknight", "pork"],
  dietary: ["none"],
  story: "Twice-cooked pork is a Sichuan home-cooking legend. Thinly sliced pre-boiled pork belly is pan-fried until the edges curl and caramelize, then tossed with garlic sprouts and doubanjiang. My grandmother made this every Sunday — the house would fill with that smoky, spicy aroma that made everyone rush to the table.",
  storyZh: "回锅肉是川菜家常菜的传奇。薄切的卤五花肉在锅里煎到边缘卷曲焦糖化，再加入蒜苗和豆瓣酱快炒。我阿嬷每个星期天都会做这道菜——整栋房子都会充满那种烟熏辣香，让人忍不住冲向饭桌。",
  ingredients: [
    { id: "twice-1", nameEn: "pork belly (pre-boiled/char siu)", nameZh: "五花肉（预先卤过或叉烧）", amountMetric: "250 g", amountUS: "9 oz", category: "protein", pantry: "local", termKey: "pork-belly" },
    { id: "twice-2", nameEn: "garlic sprouts (suan miao)", nameZh: "蒜苗", amountMetric: "4 stalks", amountUS: "4 stalks", category: "produce", pantry: "local", termKey: "garlic-sprout" },
    { id: "twice-3", nameEn: "doubanjiang (fermented chili bean paste)", nameZh: "郫县豆瓣酱", amountMetric: "1.5 tbsp", amountUS: "1.5 tbsp", category: "asian-pantry", pantry: "asian", termKey: "doubanjiang" },
    { id: "twice-4", nameEn: "light soy sauce", nameZh: "生抽", amountMetric: "1 tbsp", amountUS: "1 tbsp", category: "asian-pantry", pantry: "asian", termKey: "light-soy-sauce" },
    { id: "twice-5", nameEn: "dark soy sauce", nameZh: "老抽", amountMetric: "1 tsp", amountUS: "1 tsp", category: "asian-pantry", pantry: "asian", termKey: "dark-soy-sauce" },
    { id: "twice-6", nameEn: "shaoxing wine", nameZh: "绍兴酒", amountMetric: "1 tbsp", amountUS: "1 tbsp", category: "asian-pantry", pantry: "asian", termKey: "shaoxing-wine" },
    { id: "twice-7", nameEn: "garlic cloves", nameZh: "大蒜", amountMetric: "3 cloves", amountUS: "3 cloves", category: "produce", pantry: "local", termKey: "garlic" },
    { id: "twice-8", nameEn: "ginger slices", nameZh: "姜片", amountMetric: "3 slices", amountUS: "3 slices", category: "produce", pantry: "local", termKey: "ginger" },
    { id: "twice-9", nameEn: "cooking oil", nameZh: "食用油", amountMetric: "1 tbsp", amountUS: "1 tbsp", category: "western-pantry", pantry: "local" },
    { id: "twice-10", nameEn: "sugar", nameZh: "白糖", amountMetric: "1/2 tsp", amountUS: "1/2 tsp", category: "western-pantry", pantry: "local" },
  ],
  steps: [
    {
      text: "Slice the pre-boiled pork belly into thin strips about 5 cm long and 2 mm thick. Slice the garlic sprouts on the diagonal into 3 cm pieces, separating the white and green parts.",
      textZh: "将预先卤好的五花肉切成约 5 厘米长、2 毫米薄的片。蒜苗斜切成 3 厘米段，白色和绿色部分分开。",
      stateNote: { visual: "pork slices translucent at edges", signal: "ready to fry", heat: "medium-high" },
    },
    {
      text: "Heat the wok over medium-high heat with cooking oil. Add the pork slices in a single layer and fry without stirring for 1 minute until the bottom is golden and slightly crispy.",
      textZh: "热锅下油，中大火将五花肉片平铺入锅，不要翻动，煎 1 分钟至底部金黄微脆。",
      stateNote: { visual: "golden edges curling up", signal: "sizzling sound", heat: "medium-high" },
    },
    {
      text: "Stir the pork, push to one side. Add doubanjiang to the empty side and fry for 10 seconds until the oil turns red. Add ginger, garlic, and the white parts of garlic sprouts.",
      textZh: "翻炒猪肉，推到一边。在空出的位置加入豆瓣酱炒 10 秒至红油析出。加入姜、蒜和蒜苗白色部分。",
      stateNote: { visual: "oil turning deep red", signal: "aromatic", heat: "medium" },
    },
    {
      text: "Pour in shaoxing wine, light soy sauce, and dark soy sauce. Toss everything together for 30 seconds.",
      textZh: "倒入绍兴酒、生抽和老抽，翻炒 30 秒让酱料均匀裹上肉片。",
      stateNote: { visual: "sauce coating evenly", signal: "bubbling", heat: "high" },
    },
    {
      text: "Add the green parts of garlic sprouts and sugar. Stir-fry for another 30 seconds until the greens are wilted but still crisp. Serve immediately.",
      textZh: "加入蒜苗绿色部分和白糖，再翻炒 30 秒，绿色部分软化但仍保持脆感即可出锅。",
      stateNote: { visual: "greens glossy and wilted", signal: "ready" },
    },
  ],
  tips: [
    "Use pre-boiled pork belly (卤五花肉) from the Asian supermarket — saves 40 minutes vs. boiling from raw.",
    "The key is high heat and quick cooking — this dish should take no more than 5 minutes of actual wok time after prep.",
    "Garlic sprouts (蒜苗) are different from scallions — they have a thicker white stem and flat green leaves. If unavailable, use thick-stemmed scallions.",
  ],
  tipsZh: [
    "使用亚超卖的预先卤好的五花肉——比从零卤节省 40 分钟。",
    "秘诀是猛火快炒——实际锅上时间不超过 5 分钟。",
    "蒜苗和小葱不同——蒜苗有更粗的白色茎和扁平的绿色叶子。买不到可用粗杆小葱代替。",
  ],
  relatedSlugs: ["mapo-tofu", "twice-cooked-pork", "home-style-pork", "yu-xiang-pork"],
  image: "/images/recipes/twice-cooked-pork.svg",
};
