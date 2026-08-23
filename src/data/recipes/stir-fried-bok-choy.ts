import type { Recipe } from "@/lib/types";

/**
 * 清炒小白菜 Stir-fried Bok Choy — 家常快手青菜
 * Day 7 · 青菜素炒主题
 */
export const stirFriedBokChoy: Recipe = {
  id: "stir-fried-bok-choy",
  slug: "stir-fried-bok-choy",
  titleEn: "Stir-fried Bok Choy (清炒小白菜)",
  titleZh: "清炒小白菜",
  pinyin: "qīng chǎo xiǎo bái cài",
  cuisine: "家常菜",
  cuisineEn: "Home-style",
  region: "Jiangsu",
  regionZh: "江苏",
  difficulty: "easy",
  timeMin: 10,
  servings: 2,
  version: "family",
  versionNote:
    "Simple stir-fry with just garlic and salt — let the bok choy's natural sweetness shine. No sauces, no cornstarch, no fuss.",
  versionNoteZh:
    "只用蒜和盐简单快炒——突出小白菜本身的清甜。不加酱、不勾芡、不折腾。",
  tags: ["quick", "vegetarian", "5-ingredients", "weeknight"],
  dietary: ["vegan", "gluten-free"],
  story:
    "Bok choy is the workhorse of Chinese home cooking — mild, sweet, and forgiving. This simplest version, stir-fried with just garlic and a pinch of salt, is what millions of Chinese families make on weeknights when they want something healthy in under 10 minutes. The key is high heat and not overcooking.",
  storyZh:
    "小白菜是中国家常菜里的劳模——温和、清甜、不挑剔。最简单的蒜蓉清炒版，是无数中国家庭工作日里的必选项：10 分钟内搞定一盘健康青菜。关键是大火、不炒过头。",
  ingredients: [
    {
      id: "sbc-01",
      nameEn: "baby bok choy (or pak choi)",
      nameZh: "小白菜",
      pinyin: "xiǎo bái cài",
      amountMetric: "400 g (about 8-10 small heads)",
      amountUS: "8-10 small heads (about 1.1 lbs)",
      category: "produce",
      pantry: "local",
      termKey: "baby-bok-choy",
      note:
        "Baby bok choy is best — small, tender heads. If using mature bok choy, cut each head in half lengthwise.",
      noteZh: "幼小白菜最佳——小巧嫩甜。如果用大棵白菜，纵向对半切。",
    },
    {
      id: "sbc-02",
      nameEn: "garlic cloves, minced",
      nameZh: "大蒜（切末）",
      pinyin: "dà suàn",
      amountMetric: "4 cloves",
      amountUS: "4 cloves",
      category: "produce",
      pantry: "local",
      termKey: "garlic",
    },
    {
      id: "sbc-03",
      nameEn: "salt",
      nameZh: "盐",
      amountMetric: "¾ tsp",
      amountUS: "¾ tsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "sbc-04",
      nameEn: "neutral cooking oil",
      nameZh: "食用油",
      amountMetric: "1.5 tbsp",
      amountUS: "1.5 tbsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "sbc-05",
      nameEn: "sesame oil (optional, for finishing)",
      nameZh: "香油（可选，出锅前淋）",
      pinyin: "xiāng yóu",
      amountMetric: "½ tsp",
      amountUS: "½ tsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "sesame-oil",
    },
    {
      id: "sbc-06",
      nameEn: "white pepper (optional pinch)",
      nameZh: "白胡椒粉（可选一撮）",
      pinyin: "bái hú jiāo fěn",
      amountMetric: "Pinch",
      amountUS: "Pinch",
      category: "spice",
      pantry: "local",
      termKey: "white-pepper",
    },
  ],
  steps: [
    {
      text: "Cut each bok choy lengthwise in half (or quarters if large). Separate the white stems from the green leaves if possible — they cook at different rates. Soak in cold water for 2 minutes to remove any sand, then drain well.",
      textZh:
        "每棵小白菜纵向对半切（大的切四半）。白茎和绿叶尽量分开——熟成时间不同。冷水浸泡 2 分钟去沙，然后沥干。",
      zhHint: "处理小白菜",
      stateNote: {
        visual:
          "Cut surfaces are clean white (stems) and deep green (leaves), no brown or slimy spots",
        visualZh: "切面洁白（菜帮）和深绿（叶片），无褐变或黏滑处",
        signal: "Water should run clear after soaking — no grit at the bottom",
        signalZh: "浸泡后水要清澈——杯底无沙",
      },
      tip:
        "If you're in a rush, skip the soak and just rinse thoroughly under running water while separating the halves.",
      tipZh: "赶时间可以跳过浸泡，直接流水冲洗同时掰开。",
    },
    {
      text: "Heat oil in a wok or large skillet over high heat until shimmering. Add minced garlic and stir for 5 seconds until fragrant.",
      textZh: "大火热锅至油微微冒烟。下蒜末快速翻炒 5 秒至出香。",
      zhHint: "爆香蒜末",
      stateNote: {
        visual: "Garlic sizzles and aroma fills the kitchen in seconds",
        visualZh: "蒜末滋滋作响，几秒内厨房充满蒜香",
        heat: "high",
        timeRef: "5 seconds",
        timeRefZh: "5 秒",
        signal: "Golden around the edges but NOT brown — burned garlic is bitter",
        signalZh: "边缘微金但**绝不发黑**——焦蒜是苦的",
      },
    },
    {
      text: "Add the bok choy stems first (they take longer). Stir-fry for 1 minute, then add the leaves. Toss constantly for another 60-90 seconds.",
      textZh: "先下菜帮部分（更耐煮）。快炒 1 分钟，再下菜叶。继续颠炒 60-90 秒。",
      zhHint: "先茎后叶",
      stateNote: {
        visual:
          "Stems turn translucent at the edges, leaves begin to wilt and darken",
        visualZh: "菜帮边缘变半透明，叶片开始塌软、颜色变深",
        heat: "high",
        timeRef: "1-1.5 minutes total",
        timeRefZh: "共 1-1.5 分钟",
        signal:
          "Stems are tender-crisp (bite through with no resistance but still snap) — this is the target texture",
        signalZh: "菜帮断生但有脆感——咬下去不费力但仍有断裂声——这就是目标口感",
      },
    },
    {
      text: "Sprinkle salt evenly over the greens. Toss for 20 seconds to distribute. If using white pepper, add it now.",
      textZh: "均匀撒盐。颠炒 20 秒让盐分布均匀。如果用白胡椒粉，此时加入。",
      zhHint: "加盐调味",
    },
    {
      text: "If using sesame oil, drizzle it around the edge of the wok (not directly on the vegetables) and toss once more for 10 seconds.",
      textZh: "如果用香油，沿锅边淋入——不要直接浇在菜上——再颠炒 10 秒。",
      zhHint: "淋香油出锅",
      stateNote: {
        visual: "Leaves are glossy and vibrant green, stems still hold their shape",
        visualZh: "叶片油亮翠绿，菜帮仍保持形状",
        signal: "Vegetables look alive — if they're dark and slimy, you've过火了",
        signalZh: "青菜看着有生命力——如果发暗发黏就是炒过头了",
      },
    },
    {
      text: "Serve immediately. The residual heat in the wok will continue cooking, so don't let it sit.",
      textZh: "立刻上桌。锅的余温会继续烹饪，不要让菜在锅里久放。",
      zhHint: "立即上桌",
    },
  ],
  tips: [
    "The golden rule: high heat, short time. Bok choy releases water quickly — if you cook it slowly, it steams in its own liquid and becomes soggy.",
    "Salt at the very end, not the beginning. Early salting draws out moisture and makes the dish watery.",
    "This dish is naturally vegan and gluten-free. Skip the optional sesame oil if you're strict about it.",
    "Pair with any rice dish — the clean, crisp green cuts through richer mains beautifully.",
  ],
  tipsZh: [
    "黄金法则：大火、短时间。小白菜出水很快——慢慢炒就是在自己出的水里蒸，会变软塌。",
    "盐最后放，不要一开始就放。早放盐会出水，菜汤水汪汪的。",
    "这道菜天然纯素无麸质。严格控制的话跳过香油。",
    "配任何米饭都很棒——清脆的青菜能解腻。",
  ],
  relatedSlugs: ["oyster-sauce-lettuce", "garlic-romaine", "tomato-eggs"],
  image: "/images/recipes/stir-fried-bok-choy.svg",
};
