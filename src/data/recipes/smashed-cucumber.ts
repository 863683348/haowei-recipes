import type { Recipe } from "@/lib/types";

/**
 * 拍黄瓜 Smashed Cucumber — 夏日开胃第一口
 * 双版本：家庭快手版（默认）/ 餐厅正宗版
 * v1.1 多语言：英文为主，中文增量字段（storyZh/textZh/visualZh 等）。
 */
export const smashedCucumber: Recipe = {
  id: "smashed-cucumber",
  slug: "smashed-cucumber",
  titleEn: "Smashed Cucumber (拍黄瓜)",
  titleZh: "拍黄瓜",
  pinyin: "pāi huáng guā",
  cuisine: "家常菜",
  cuisineEn: "Home-style",
  region: "Northern China",
  regionZh: "华北",
  difficulty: "easy",
  timeMin: 15,
  servings: 2,
  version: "family",
  versionNote:
    "Family version: rustic, quick, punchy — the 'smash' cracks the skin so the dressing penetrates deeply. Restaurant version uses a rolling pin and adds a touch of sugar for balance.",
  versionNoteZh:
    "家庭版：粗犷快手、味道浓烈——「拍」破表皮质地，让汁水渗入。餐厅版会用擀面杖更均匀地拍碎，并加少许糖提鲜。",
  tags: ["cold", "quick", "30-min", "beginner", "vegetarian"],
  dietary: ["vegan", "gluten-free"],
  story:
    "Smashed cucumber is the quintessential Chinese summer cold dish — crunchy, garlicky, and tangy. The key technique is 'smashing' rather than slicing: crack the cucumber with the flat side of a chef's knife so the surface area is rough and uneven. This allows the dressing (chinkiang vinegar, sesame oil, soy, garlic) to cling to every nook. Served at room temperature or slightly chilled, it cuts through greasy meals like a palate reset button.",
  storyZh:
    "拍黄瓜是夏日中式凉菜的典范——脆、蒜香、酸爽。关键技法是「拍」而非「切」：用刀背拍裂黄瓜，让表面粗糙不平，这样酱汁（镇江香醋、香油、生抽、蒜）才能附着每一处缝隙。室温或微凉上桌，是解腻提神的最佳开胃菜。",
  ingredients: [
    {
      id: "sc-cuke",
      nameEn: "english cucumbers (or persian), about 6 inches each",
      nameZh: "黄瓜（长条型）",
      amountMetric: "2 large (about 500 g)",
      amountUS: "2 large",
      category: "produce",
      pantry: "local",
      note:
        "English or persian cucumbers are best — thin-skinned, fewer seeds. If using regular slicing cucumbers, peel in stripes for texture.",
      noteZh: "长条黄瓜最佳，皮薄籽少。普通黄瓜可留条纹状表皮增加口感。",
    },
    {
      id: "sc-garlic",
      nameEn: "garlic cloves, minced",
      nameZh: "大蒜，切末",
      amountMetric: "4 cloves",
      amountUS: "4 cloves",
      category: "produce",
      pantry: "local",
      termKey: "garlic",
    },
    {
      id: "sc-scallion",
      nameEn: "scallions, sliced thin on the bias",
      nameZh: "小葱，斜切段",
      amountMetric: "2 stalks",
      amountUS: "2 stalks",
      category: "produce",
      pantry: "local",
      termKey: "scallion",
    },
    {
      id: "sc-chinkiang",
      nameEn: "Chinkiang (black) vinegar",
      nameZh: "镇江香醋",
      amountMetric: "2 tbsp (30 ml)",
      amountUS: "2 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "chinkiang-vinegar",
    },
    {
      id: "sc-soy",
      nameEn: "light soy sauce",
      nameZh: "生抽",
      amountMetric: "1 tbsp (15 ml)",
      amountUS: "1 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "light-soy-sauce",
    },
    {
      id: "sc-sesame",
      nameEn: "toasted sesame oil",
      nameZh: "香油",
      amountMetric: "1 tbsp (15 ml)",
      amountUS: "1 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "sesame-oil",
    },
    {
      id: "sc-sugar",
      nameEn: "sugar",
      nameZh: "白糖",
      amountMetric: "1 tsp",
      amountUS: "1 tsp",
      category: "western-pantry",
      pantry: "local",
      note:
        "Balances the sharp vinegar and salt — the defining touch of a good smashed cucumber.",
      noteZh: "中和醋的酸和盐的咸——好拍黄瓜的点睛之笔。",
    },
    {
      id: "sc-salt",
      nameEn: "salt",
      nameZh: "盐",
      amountMetric: "1/2 tsp",
      amountUS: "1/2 tsp",
      category: "western-pantry",
      pantry: "local",
    },
  ],
  steps: [
    {
      text:
        "Wash cucumbers. Trim both ends. Place on a cutting board and press down firmly with the flat side of a chef's knife — you should hear a crack. Press along the length 3–4 times, turning the cucumber slightly each time until it is loosely broken apart.",
      textZh: "黄瓜洗净，切去两端。放在砧板上，用刀背（平底）用力拍下去——听到 cracking 声即可。沿长度方向拍 3–4 次，每次轻微转动黄瓜，让整体裂开但不散碎。",
      stateNote: {
        visual:
          "Cucumber is split into irregular chunks with cracked skin; some seeds are exposed",
        visualZh: "黄瓜裂成不规则块状，表皮开裂，部分籽露出",
        signal:
          "Each piece is about 2–3 inches long; skin is fissured but not pulverized",
        signalZh: "每块约 5–7 厘米，表皮有裂纹但不过碎",
        timeRef: "about 1 minute of smashing",
        timeRefZh: "拍约 1 分钟",
      },
    },
    {
      text:
        "Transfer the smashed cucumber to a bowl. Sprinkle with 1/4 tsp salt and toss gently. Let sit for 5 minutes — the salt draws out moisture and slightly wilts the flesh, concentrating flavor.",
      textZh: "将拍好的黄瓜放入碗中，撒 1/4 茶匙盐，轻拌。静置 5 分钟——盐会逼出水分，让黄瓜微微塌软，味道更浓缩。",
      stateNote: {
        visual:
          "Pools of watery liquid appear at the bottom of the bowl; cucumber surface looks glossy",
        visualZh: "碗底渗出清水，黄瓜表面油亮",
        signal: "Liquid has collected; cucumber feels slightly softer to touch",
        signalZh: "有汁水渗出，黄瓜手感略软",
        timeRef: "5 minutes",
        timeRefZh: "5 分钟",
      },
    },
    {
      text:
        "Discard the released water. Add minced garlic, sliced scallions, Chinkiang vinegar, soy sauce, sesame oil, remaining 1/4 tsp salt, and sugar. Toss gently until every piece is coated.",
      textZh: "倒掉渗出的水。加入蒜末、葱花、香醋、生抽、香油、剩余盐和糖，轻拌均匀，让每块黄瓜都裹上酱汁。",
      stateNote: {
        visual:
          "Each cucumber chunk is glossy and darkened by the soy and vinegar; garlic and scallion bits cling to the surface",
        visualZh: "每块黄瓜被酱油和醋染成深色、油亮，蒜末和葱花附着其上",
        signal:
          "No dry patches — every crevice has dressing",
        signalZh: "没有干的地方，每处缝隙都有汁",
      },
    },
    {
      text:
        "Let the dressed cucumber rest for another 5–10 minutes at room temperature. This allows the flavors to meld and the cucumber to absorb the dressing.",
      textZh: "拌好的黄瓜在室温下再静置 5–10 分钟，让味道融合并渗入黄瓜内部。",
      stateNote: {
        visual:
          "The bowl contains a light pooling of dressing; cucumber pieces have taken on a translucent, glossy appearance",
        visualZh: "碗底有少量酱汁，黄瓜块呈半透明油亮状",
        timeRef: "5–10 minutes",
        timeRefZh: "5–10 分钟",
        signal: "Aroma of garlic and sesame is noticeable",
        signalZh: "蒜香和香油香气明显",
      },
    },
    {
      text:
        "Taste and adjust — need more salt? A pinch. More tang? A splash of Chinkiang vinegar. Transfer to a serving dish, garnish with extra scallion slices and a few toasted sesame seeds if desired. Serve immediately at room temperature.",
      textZh: "尝味调整——咸了加点糖，淡了加点盐，酸了滴几滴醋。装盘，可额外撒葱花和熟白芝麻。室温立即上桌。",
      stateNote: {
        visual:
          "Plated cucumbers glisten; dressing has pooled lightly at the base; scallion greens provide color contrast",
        visualZh: "黄瓜油亮，盘底有薄薄一层酱汁，葱花绿色提亮",
        signal:
          "The balance is sour-salty-savory with a garlic kick and sesame finish — no single note dominates",
        signalZh: "酸、咸、鲜、蒜香、芝麻尾韵平衡，没有单一味道抢戏",
      },
    },
  ],
  tips: [
    "Never slice smashed cucumber — the cracks and fissures are what make it superior to a clean cut. A food processor will turn it to mush.",
    "Use the best Chinkiang vinegar you can find. Good quality has a rounded, malty sourness; cheap versions are harsh and one-note.",
    "This dish improves as it sits — make it 30 minutes before serving for maximum flavor penetration. Do not refrigerate; serve at cool room temperature.",
    "Add a few drops of chili oil for heat, or a pinch of Sichuan peppercorn powder for the signature 'má' (numbing) sensation.",
  ],
  tipsZh: [
    "千万别切——裂纹和裂缝才是拍黄瓜的灵魂，切出来的口感完全不同。料理机只会把它打成泥。",
    "用最好的镇江香醋。好醋酸味圆润有麦芽香；廉价醋尖锐单一。",
    "这道菜放久更入味——提前 30 分钟拌好风味最佳。不要冷藏，室温食用。",
    "加几滴辣椒油提辣，或撒少许花椒粉，体验正宗「麻」感。",
  ],
  relatedSlugs: [
    "cold-wood-ear",
    "kou-shui-chicken",
    "egg-fried-rice",
    "tomato-and-egg",
  ],
  image: "/images/recipes/smashed-cucumber.webp",
};
