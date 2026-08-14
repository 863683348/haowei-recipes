import type { Recipe } from "@/lib/types";

/** 葱油饼 Scallion Pancakes — 面粉+葱就能做的高性价比小吃 */
export const scallionPancakes: Recipe = {
  id: "scallion-pancakes",
  slug: "scallion-pancakes",
  titleEn: "Scallion Pancakes (葱油饼)",
  titleZh: "葱油饼",
  pinyin: "cōng yóu bǐng",
  cuisine: "北方小吃",
  region: "Northern China / street food",
  difficulty: "easy",
  timeMin: 45,
  servings: 4,
  version: "family",
  versionNote:
    "Street version is laminated with lots of oil; home version uses a thinner oil paste — same flaky layers, less mess.",
  tags: ["beginner", "snack", "vegetarian", "dough"],
  dietary: ["vegetarian"],
  story:
    "A northern-China street food: unleavened dough rolled thin with scallions and oil, coiled and flattened so it flakes into crispy layers. Perfect weekend project — and the first 'wow' recipe for new cooks.",
  ingredients: [
    {
      id: "sp-flour",
      nameEn: "all-purpose flour",
      nameZh: "中筋面粉",
      amountMetric: "300 g",
      amountUS: "2 1/2 cups",
      category: "staple",
      pantry: "local",
    },
    {
      id: "sp-water",
      nameEn: "hot water (not boiling)",
      nameZh: "热水",
      amountMetric: "180 ml",
      amountUS: "3/4 cup",
      category: "other",
      pantry: "local",
    },
    {
      id: "sp-oil-paste",
      nameEn: "neutral oil + 1 tbsp flour (for paste)",
      nameZh: "油酥",
      amountMetric: "3 tbsp oil + 1 tbsp flour",
      amountUS: "3 tbsp + 1 tbsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "sp-scallion",
      nameEn: "scallions, finely chopped (dry them on a towel)",
      nameZh: "小葱",
      amountMetric: "4 stalks",
      amountUS: "4 stalks",
      category: "produce",
      pantry: "local",
    },
    {
      id: "sp-salt",
      nameEn: "salt",
      nameZh: "盐",
      amountMetric: "1/2 tsp",
      amountUS: "1/2 tsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "sp-frying-oil",
      nameEn: "oil for frying",
      nameZh: "煎饼油",
      amountMetric: "2 tbsp",
      amountUS: "2 tbsp",
      category: "western-pantry",
      pantry: "local",
    },
  ],
  steps: [
    {
      text: "Mix flour and salt. Slowly pour in hot water, stirring with chopsticks, until it forms shaggy clumps. Knead into a smooth ball. Cover, rest 20 minutes.",
      zhHint: "烫面，醒20分钟",
      stateNote: {
        visual: "Dough comes together into a smooth, elastic ball",
        timeRef: "20 minutes rest",
        signal: "Dough springs back when poked",
      },
    },
    {
      text: "Meanwhile make the oil paste: whisk oil + flour until smooth. Dry the chopped scallions on a paper towel (wet scallions make soggy layers).",
      zhHint: "调油酥，擦干葱",
      stateNote: {
        visual: "Paste is smooth, pale, and spreadable",
        signal: "No flour lumps",
      },
    },
    {
      text: "Divide dough into 4 balls. Roll each into a thin rectangle (about 2-3 mm).",
      zhHint: "擀薄片",
      stateNote: {
        visual: "Rectangle is thin enough to be slightly translucent",
        signal: "Can see your hand faintly through it",
      },
    },
    {
      text: "Spread oil paste thinly over the dough, sprinkle with scallions. Roll it up tightly into a long log, then coil the log into a spiral. Rest 5 minutes.",
      zhHint: "抹油酥卷起，盘成螺旋",
      stateNote: {
        visual: "Coil holds its shape; layers are visible at the cut edge",
        timeRef: "5 minutes rest",
        signal: "Coil doesn't unroll on its own",
      },
    },
    {
      text: "Roll each coil gently into a flat pancake, about 5-6 mm thick. Don't press hard — you want to preserve the layers.",
      zhHint: "轻擀成饼",
      stateNote: {
        visual: "Pancake is even thickness, spiral pattern visible",
        signal: "Layers still distinct at the edge",
      },
    },
    {
      text: "Heat 1 tbsp oil in a skillet over medium. Fry the pancake 2-3 minutes per side until golden and crisp.",
      zhHint: "中小火煎至两面金黄",
      stateNote: {
        visual: "Golden-brown patches; pancake puffs slightly and layers separate",
        heat: "medium",
        timeRef: "2-3 minutes per side",
        signal: "Edges look flaky and sound crisp when tapped",
      },
    },
    {
      text: "Move to a cutting board, rest 1 minute (traps steam = flaky). Cut into wedges. Repeat for remaining pancakes.",
      zhHint: "出锅切块",
      stateNote: {
        visual: "Pancake steams slightly as it rests; layers lift when cut",
        timeRef: "1 minute rest",
        signal: "Layers visibly peel apart when cut",
      },
    },
  ],
  tips: [
    "Hot water (not boiling) is key — it cooks the gluten slightly, making the dough tender and rollable.",
    "Drying the scallions is the #1 secret to crispy layers.",
    "Freeze rolled, uncooked pancakes between parchment; fry straight from frozen, add 1 min per side.",
  ],
  relatedSlugs: ["tomato-and-egg", "egg-fried-rice"],
};
