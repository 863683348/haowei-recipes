import type { Recipe } from "@/lib/types";

/**
 * 蒜蓉油麦菜 Garlic Romaine — 快手蒜香青菜
 * Day 7 · 青菜素炒主题
 */
export const garlicRomaine: Recipe = {
  id: "garlic-romaine",
  slug: "garlic-romaine",
  titleEn: "Garlic Romaine (蒜蓉油麦菜)",
  titleZh: "蒜蓉油麦菜",
  pinyin: "suàn róng yóu mài cài",
  cuisine: "家常菜",
  cuisineEn: "Home-style",
  region: "Northern China",
  regionZh: "华北",
  difficulty: "easy",
  timeMin: 12,
  servings: 2,
  version: "family",
  versionNote:
    "Quick stir-fry at high heat — the garlic gets fragrant in seconds, and the romaine stays crisp-tender with a slight char.",
  versionNoteZh:
    "大火快炒——蒜香几秒出，油麦菜保持脆嫩，边缘微焦。",
  tags: ["quick", "vegetarian", "garlic", "weeknight"],
  dietary: ["vegetarian"],
  story:
    "Romaine lettuce is an unlikely star in Chinese cooking — most Westerners toss it into salads. But in China, its sturdy ribs and slightly bitter leaves hold up beautifully to high-heat stir-frying. Paired with a generous amount of garlic, it becomes one of the fastest and most reliable weeknight greens on the table.",
  storyZh:
    "油麦菜在中式烹饪中是个异类——大多数西方人把它扔进沙拉。但在中国，它坚实的菜帮和微苦的叶片在高温快炒下表现极佳。配上大量蒜蓉，成为工作日餐桌上最快最可靠的绿叶菜之一。",
  ingredients: [
    {
      id: "gr-01",
      nameEn: "romaine lettuce (油麦菜)",
      nameZh: "油麦菜",
      pinyin: "yóu mài cài",
      amountMetric: "500 g (about 1 large bunch)",
      amountUS: "1 large bunch (about 1.1 lbs)",
      category: "produce",
      pantry: "local",
      termKey: "lettuce",
      note:
        "If you can't find romaine, use choy sum or baby bok choy as substitutes — they'll change the flavor slightly but keep the texture.",
      noteZh: "买不到油麦菜可用菜心或小白菜替代——风味略变但口感相近。",
    },
    {
      id: "gr-02",
      nameEn: "garlic cloves, thinly sliced",
      nameZh: "大蒜（切片）",
      pinyin: "dà suàn",
      amountMetric: "6 cloves",
      amountUS: "6 cloves",
      category: "produce",
      pantry: "local",
      termKey: "garlic",
    },
    {
      id: "gr-03",
      nameEn: "light soy sauce",
      nameZh: "生抽",
      pinyin: "shēng chōu",
      amountMetric: "1 tbsp",
      amountUS: "1 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "light-soy-sauce",
    },
    {
      id: "gr-04",
      nameEn: "salt",
      nameZh: "盐",
      amountMetric: "½ tsp",
      amountUS: "½ tsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "gr-05",
      nameEn: "neutral cooking oil",
      nameZh: "食用油",
      amountMetric: "2 tbsp",
      amountUS: "2 tbsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "gr-06",
      nameEn: "sugar (optional, to balance bitterness)",
      nameZh: "糖（可选，中和苦味）",
      amountMetric: "¼ tsp",
      amountUS: "¼ tsp",
      category: "western-pantry",
      pantry: "local",
    },
  ],
  steps: [
    {
      text: "Trim the woody base of the romaine, then cut into 5 cm (2-inch) lengths. Separate leaves if they're large. Wash and spin dry — wet leaves will steam instead of stir-fry.",
      textZh: "削去油麦菜根部老硬部分，切成 5 厘米段。大叶撕开。洗净沥干——带水的叶子会蒸而不是炒。",
      zhHint: "处理油麦菜",
      stateNote: {
        visual:
          "Cut surfaces are pale green and firm; leaves are perky, not wilted",
        visualZh: "切口淡绿结实，叶片挺立不萎蔫",
        signal:
          "Leaves should feel dry to the touch — pat with a towel if needed",
        signalZh: "叶片摸起来是干的——必要时用厨房纸吸干",
      },
    },
    {
      text: "Slice garlic thinly — not minced. Thin slices release aroma more evenly and don't burn as easily as minced garlic.",
      textZh: "大蒜切薄片——不是蒜末。薄片受热均匀、不易焦。",
      zhHint: "切蒜片",
    },
    {
      text: "Heat oil in a wok over high heat until a drop of water sizzles on contact. Add garlic and swirl for 5-8 seconds until fragrant.",
      textZh: "大火热锅至滴水滴入立刻滋滋作响。下蒜片快速翻炒 5-8 秒至出香。",
      zhHint: "爆香蒜片",
      stateNote: {
        visual: "Garlic edges turn pale gold and the kitchen fills with aroma",
        visualZh: "蒜片边缘微金，厨房充满蒜香",
        heat: "high",
        timeRef: "5-8 seconds",
        timeRefZh: "5-8 秒",
        signal:
          "Garlic is aromatic but NOT brown — if it browns, start over with fresh oil",
        signalZh: "蒜香但**不发黄**——如果变黄就换油重来",
      },
      tip:
        "High heat is essential. Low heat = soggy garlic and steamed lettuce.",
      tipZh: "大火是关键。火小了→蒜软烂、叶子变蒸。",
    },
    {
      text: "Add romaine immediately. Toss constantly for 60-90 seconds. The leaves should wilt just enough to coat in oil but still retain crunch.",
      textZh: "立刻下油麦菜。不停颠炒 60-90 秒。叶片微微塌软、裹上油但依然脆。",
      zhHint: "大火快炒",
      stateNote: {
        visual:
          "Leaves darken to a deeper green, edges curl slightly, but stems remain opaque and crisp",
        visualZh: "叶片颜色变深绿，边缘微卷，但菜帮仍不透明且脆",
        heat: "high",
        timeRef: "60-90 seconds",
        timeRefZh: "60-90 秒",
        signal:
          "Stems are still rigid when you bite — if they bend, you've overcooked",
        signalZh: "咬下去菜帮仍然硬挺——如果弯了说明炒过头了",
      },
    },
    {
      text: "Sprinkle salt and sugar (if using) over the greens. Drizzle soy sauce around the edge of the wok (not directly on the leaves) for even distribution.",
      textZh: "撒盐和糖。沿锅边淋入生抽——不要直接浇在菜上，让热锅激发酱香。",
      zhHint: "调味",
      stateNote: {
        visual: "Soy sauce hits the hot wok and sizzles, releasing a toasted aroma",
        visualZh: "生抽碰到热锅立刻滋滋作响，释放焦香",
        heat: "high",
        timeRef: "10 seconds",
        timeRefZh: "10 秒",
        signal: "Aroma shifts from raw garlic to toasted, savory",
        signalZh: "香气从生蒜转为焦香咸鲜",
      },
    },
    {
      text: "Toss one final time for 10 seconds. Plate immediately — romaine continues cooking from residual heat.",
      textZh: "再颠炒 10 秒。立刻装盘——余温会继续烹饪。",
      zhHint: "出锅",
    },
  ],
  tips: [
    "Romaine lettuce has a naturally bitter edge — that's a feature, not a bug. It balances the salty garlic sauce beautifully.",
    "Do not cover the wok at any point — trapped steam makes romaine slimy.",
    "If your romaine is very large, trim the bottom 2 cm — that's the woody, inedible part.",
    "For extra umami, add a pinch of chicken powder (or vegetarian mushroom seasoning) at the end.",
  ],
  tipsZh: [
    "油麦菜自带微苦——这是亮点，不是缺点。和咸香蒜蓉正好平衡。",
    "全程不要盖锅盖——蒸汽会让油麦菜变软塌。",
    "如果油麦菜很大棵，切掉底部 2 厘米——那是木质化、不能吃的部分。",
    "想要更鲜：出锅前加一撮鸡精（或素食菌菇粉）。",
  ],
<<<<<<< HEAD
  tips: ["The key is high heat and quick cooking — 60 seconds is all you need.", "Do not overcook or the romaine becomes mushy and loses its signature crunch."],
  tipsZh: ["关键是大火快炒——60秒就够了。", "不要煮过头，否则油麦菜会变软烂失去脆爽口感。"],
  relatedSlugs: ["oyster-sauce-lettuce", "stir-fried-bok-choy", "tomato-eggs"],
=======
  relatedSlugs: ["oyster-sauce-lettuce", "stir-fried-bok-choy", "tomato-eggs"],
  image: "/images/recipes/garlic-romaine.svg",
>>>>>>> origin/main
};
