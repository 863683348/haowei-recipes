import type { Recipe } from "@/lib/types";

/**
 * 鱼香肉丝 Yu Xiang Shredded Pork
 */
export const yuXiangPork: Recipe = {
  id: "yu-xiang-pork",
  slug: "yu-xiang-pork",
  titleEn: "Yu Xiang Shredded Pork (鱼香肉丝)",
  titleZh: "鱼香肉丝",
  pinyin: "yu xiang rou si",
  cuisine: "川菜",
  cuisineEn: "Sichuan",
  region: "Sichuan (四川)",
  regionZh: "四川",
  difficulty: "medium",
  timeMin: 25,
  servings: 2,
  version: "family",
  versionNote: "家庭版——无鱼却有着鱼香味道的传奇川菜，酸甜微辣是灵魂。",
  versionNoteZh: "家庭版——无鱼却有着鱼香味道的传奇川菜，酸甜微辣是灵魂。",
  tags: ["sichuan", "comfort", "weeknight", "pork", "sweet-spicy"],
  dietary: ["none"],
  story: "Yu xiang (鱼香) literally means 'fish fragrance' — but there's no fish in this dish! The flavor profile was inspired by the way Cantonese fishermen season fish with garlic, ginger, scallion, and chili. Today it's one of the most ordered dishes in Chinese restaurants worldwide. My first time making this was a disaster — I used too much sugar and it was cloying. After three attempts I finally got the balance right: sweet, sour, salty, and spicy all in harmony.",
  storyZh: "鱼香 literally 意思是「鱼的香味」——但这道菜里没有鱼！这种风味源自广东渔民给鱼调味的方：蒜、姜、葱、辣椒。如今它已成为中餐厅全球点餐率最高的菜品之一。我第一次做惨不忍睹——糖放太多，甜到发腻。试了三次才终于找到平衡：甜、酸、咸、辣和谐共舞。",
  ingredients: [
    { id: "yuxiang-1", nameEn: "pork loin", nameZh: "猪里脊", amountMetric: "200 g", amountUS: "7 oz", category: "protein", pantry: "local", termKey: "pork-loin" },
    { id: "yuxiang-2", nameEn: "bamboo shoots (canned, julienned)", nameZh: "笋丝（罐头）", amountMetric: "80 g", amountUS: "3 oz", category: "produce", pantry: "asian", termKey: "bamboo-shoots" },
    { id: "yuxiang-3", nameEn: "carrot (julienned)", nameZh: "胡萝卜（切丝）", amountMetric: "1 small", amountUS: "1 small", category: "produce", pantry: "local", termKey: "carrot" },
    { id: "yuxiang-4", nameEn: "doubanjiang (chili bean paste)", nameZh: "郫县豆瓣酱", amountMetric: "1 tbsp", amountUS: "1 tbsp", category: "asian-pantry", pantry: "asian", termKey: "doubanjiang" },
    { id: "yuxiang-5", nameEn: "chinkiang vinegar", nameZh: "镇江香醋", amountMetric: "1.5 tbsp", amountUS: "1.5 tbsp", category: "asian-pantry", pantry: "asian", termKey: "chinkiang-vinegar" },
    { id: "yuxiang-6", nameEn: "light soy sauce", nameZh: "生抽", amountMetric: "1 tbsp", amountUS: "1 tbsp", category: "asian-pantry", pantry: "asian", termKey: "light-soy-sauce" },
    { id: "yuxiang-7", nameEn: "sugar", nameZh: "白糖", amountMetric: "1.5 tbsp", amountUS: "1.5 tbsp", category: "western-pantry", pantry: "local" },
    { id: "yuxiang-8", nameEn: "cornstarch", nameZh: "玉米淀粉", amountMetric: "1 tbsp", amountUS: "1 tbsp", category: "western-pantry", pantry: "local", termKey: "cornstarch" },
    { id: "yuxiang-9", nameEn: "garlic cloves", nameZh: "大蒜", amountMetric: "4 cloves", amountUS: "4 cloves", category: "produce", pantry: "local", termKey: "garlic" },
    { id: "yuxiang-10", nameEn: "ginger (minced)", nameZh: "姜（末）", amountMetric: "1 tsp", amountUS: "1 tsp", category: "produce", pantry: "local", termKey: "ginger" },
    { id: "yuxiang-11", nameEn: "scallions", nameZh: "小葱", amountMetric: "2 stalks", amountUS: "2 stalks", category: "produce", pantry: "local", termKey: "scallion" },
    { id: "yuxiang-12", nameEn: "cooking oil", nameZh: "食用油", amountMetric: "2 tbsp", amountUS: "2 tbsp", category: "western-pantry", pantry: "local" },
  ],
  steps: [
    {
      text: "Cut pork into thin strips 5 cm x 3 mm. Marinate with 1 tbsp shaoxing wine, 1/2 tbsp light soy sauce, and 1 tsp cornstarch for 10 minutes.",
      textZh: "猪肉切 5 厘米长、3 毫米宽的细丝。加入 1 汤匙绍兴酒、1/2 汤匙生抽和 1 茶匙玉米淀粉，腌制 10 分钟。",
      stateNote: { visual: "meat glossy with starch coating", signal: "liquid absorbed", timeRef: "10 min" },
    },
    {
      text: "Make the yu xiang sauce: mix chinkiang vinegar, remaining soy sauce, sugar, and 1 tsp cornstarch with 2 tbsp water in a small bowl. Set aside.",
      textZh: "调配鱼香汁：将镇江香醋、剩余生抽、白糖和 1 茶匙玉米淀粉与 2 汤匙水在小碗中搅匀备用。",
      stateNote: { visual: "sugar fully dissolved", signal: "sauce ready" },
    },
    {
      text: "Drain bamboo shoots and cut into matchstick strips. Julienne the carrot. Mince garlic and ginger. Cut scallions into 3 cm lengths.",
      textZh: "笋丝沥干切丝，胡萝卜切细丝。大蒜和生姜切末，小葱切 3 厘米段。",
      stateNote: { visual: "all vegetables cut into uniform strips", signal: "prep complete" },
    },
    {
      text: "Heat oil in a wok over high heat. Add the pork and spread flat — sear 20 seconds without stirring, then stir-fry until color changes to white.",
      textZh: "热锅旺火下油，加入肉丝摊平，煎 20 秒不要翻动，然后翻炒至肉丝变白。",
      stateNote: { visual: "pork turning opaque white", signal: "sizzling", heat: "high" },
    },
    {
      text: "Push pork to one side. Add doubanjiang to the empty side and fry 10 seconds until red oil appears. Add garlic, ginger, and white parts of scallions. Stir for 15 seconds.",
      textZh: "将肉丝推到一边，在空出的位置加入豆瓣酱炒 10 秒至红油析出。加入蒜末、姜末和葱白部分，翻炒 15 秒。",
      stateNote: { visual: "oil turning deep red", signal: "aromatic", heat: "medium-high" },
    },
    {
      text: "Add bamboo shoots and carrots. Stir-fry 30 seconds, then pour in the prepared sauce. Toss quickly until the sauce thickens and coats everything.",
      textZh: "加入笋丝和胡萝卜丝，翻炒 30 秒，倒入调好的鱼香汁。快速翻炒至酱汁浓稠裹匀。",
      stateNote: { visual: "sauce glossy and thick", signal: "bubble rapidly", heat: "high" },
    },
    {
      text: "Add green parts of scallions, toss 10 seconds, and serve immediately over steamed rice.",
      textZh: "加入葱绿部分，翻炒 10 秒即可出锅，配白米饭食用。",
      stateNote: { visual: "scallion greens wilted but vibrant", signal: "ready" },
    },
  ],
  tips: [
    "The sauce balance is everything: 1.5 tbsp vinegar : 1.5 tbsp sugar : 1 tbsp soy is the golden ratio. Adjust to taste but keep the sweet-sour anchor.",
    "Canned bamboo shoots are convenient and work perfectly — just rinse and squeeze dry to remove the metallic taste.",
    "Yu xiang flavor is the 'four delights': sweet, sour, salty, spicy — all four must be perceptible but none overpowering.",
  ],
  tipsZh: [
    "酱汁平衡是灵魂：1.5 汤匙醋 : 1.5 汤匙糖 : 1 汤匙生抽是黄金比例。可按口味调整，但酸甜基调不能丢。",
    "罐头笋丝既方便又好用——只要冲洗并挤干水分去除金属味即可。",
    "鱼香味的「四味和谐」：甜酸咸辣——四种味道都要感知得到，但不能有任何一种盖过其他。",
  ],
  relatedSlugs: ["twice-cooked-pork", "mapo-tofu", "lazi-diced-chicken", "egg-fried-rice"],
  image: "/images/recipes/yu-xiang-pork.webp",
};
