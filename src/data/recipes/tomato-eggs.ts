import type { Recipe } from "@/lib/types";

/**
 * 番茄炒蛋 Tomato & Egg — 每个中国家庭的第一道菜
 * 双版本：家庭快手版（默认）/ 餐厅正宗版
 */
export const tomatoEggs: Recipe = {
  id: "tomato-eggs",
  slug: "tomato-and-egg",
  titleEn: "Tomato & Egg (番茄炒蛋)",
  titleZh: "番茄炒蛋",
  pinyin: "fān qié chǎo dàn",
  cuisine: "家常菜",
  region: "Everywhere in China",
  difficulty: "easy",
  timeMin: 20,
  servings: 2,
  version: "family",
  versionNote:
    "Family version: soft, saucy, slightly sweet — the way it's made at home. Restaurant version adds a wok-seared egg texture.",
  tags: ["30-min", "beginner", "comfort", "weeknight"],
  dietary: ["none"],
  story:
    "The first dish most Chinese kids learn. Every family has its own ratio of eggs to tomato, its own pinch of sugar. This is the home-style version from a Cantonese household — lots of sauce, soft eggs, ladled over rice.",
  ingredients: [
    {
      id: "te-egg",
      nameEn: "eggs",
      nameZh: "鸡蛋",
      amountMetric: "4 large",
      amountUS: "4 large",
      category: "protein",
      pantry: "local",
    },
    {
      id: "te-tomato",
      nameEn: "ripe tomatoes",
      nameZh: "番茄",
      amountMetric: "3 medium (~450 g)",
      amountUS: "3 medium",
      category: "produce",
      pantry: "local",
    },
    {
      id: "te-oil",
      nameEn: "neutral oil (vegetable/peanut)",
      nameZh: "食用油",
      amountMetric: "3 tbsp (45 ml)",
      amountUS: "3 tbsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "te-scallion",
      nameEn: "scallions, finely sliced",
      nameZh: "小葱",
      amountMetric: "2 stalks",
      amountUS: "2 stalks",
      category: "produce",
      pantry: "local",
    },
    {
      id: "te-salt",
      nameEn: "salt",
      nameZh: "盐",
      amountMetric: "1/2 tsp",
      amountUS: "1/2 tsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "te-sugar",
      nameEn: "sugar",
      nameZh: "白糖",
      amountMetric: "1 tsp",
      amountUS: "1 tsp",
      category: "western-pantry",
      pantry: "local",
      note: "Balances tomato acidity — this is the 'secret' home touch.",
    },
    {
      id: "te-soy",
      nameEn: "light soy sauce (optional)",
      nameZh: "生抽（可选）",
      amountMetric: "1/2 tsp",
      amountUS: "1/2 tsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "light-soy-sauce",
    },
  ],
  steps: [
    {
      text: "Beat the eggs with 1/4 tsp salt until the yolks are fully broken. Cut tomatoes into bite-size wedges.",
      zhHint: "打散鸡蛋，番茄切块",
      stateNote: {
        visual: "Egg liquid is uniform pale yellow with no visible yolk streaks",
        timeRef: "about 30 seconds of beating",
        signal: "Fork leaves a smooth ribbon when lifted",
      },
    },
    {
      text: "Heat 2 tbsp oil in a wok or large skillet over medium-high until shimmering. Pour in the eggs.",
      zhHint: "热油下蛋液",
      stateNote: {
        visual: "Oil shimmers; eggs puff and set at the edges within seconds",
        heat: "medium-high",
        timeRef: "30-40 seconds",
        signal: "Edges turn light golden and release easily from the pan",
      },
    },
    {
      text: "Scramble the eggs just until softly set (still a little glossy), then scoop them out onto a plate. Don't overcook — they finish in the sauce.",
      zhHint: "嫩炒后盛出",
      stateNote: {
        visual: "Curds are soft and glossy, not dry or browned",
        timeRef: "45-60 seconds total",
        signal: "No raw liquid left, but curds still look moist",
      },
    },
    {
      text: "Add the remaining 1 tbsp oil and the tomatoes with 1/4 tsp salt. Sauté over medium-high.",
      zhHint: "下番茄翻炒",
      stateNote: {
        visual: "Tomatoes release juice and start to soften",
        heat: "medium-high",
        timeRef: "2-3 minutes",
        signal: "Edges go translucent and the pan fills with pink juice",
      },
    },
    {
      text: "Press a few wedges with your spatula to release more juice. Add the sugar (and soy, if using).",
      zhHint: "压出汤汁，加糖",
      stateNote: {
        visual: "Sauce turns glossy deep-orange",
        timeRef: "1 minute",
        signal: "Juice is actively bubbling, not evaporating to dryness",
      },
    },
    {
      text: "Return the eggs to the pan and toss gently for 20 seconds so they soak up the sauce. Finish with scallions.",
      zhHint: "回锅裹汁，撒葱",
      stateNote: {
        visual: "Eggs are coated in glossy orange sauce",
        timeRef: "20-30 seconds",
        signal: "Sauce clings to the egg curds",
      },
    },
  ],
  tips: [
    "Serve immediately over steamed rice — the sauce is the point.",
    "Ripe, soft tomatoes make the best sauce. If tomatoes are hard, add 2 tbsp water while cooking.",
    "The sugar is not optional in the home version: it's what makes it taste like 家常, not sour.",
  ],
  relatedSlugs: ["egg-fried-rice", "mapo-tofu"],
};
