import type { Recipe } from "@/lib/types";

/** Salted Egg Yolk Fried Rice (咸蛋黄炒饭) — Day batch */
export const salted_egg_yolk_fried_rice: Recipe = {
  "id": "salted-egg-yolk-fried-rice",
  "slug": "salted-egg-yolk-fried-rice",
  "titleEn": "Salted Egg Yolk Fried Rice",
  "titleZh": "咸蛋黄炒饭",
  "pinyin": "xián dàn huáng chǎo fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "At home, four yolks mashed into the oil makes a sandy coating that clings to the grains. Restaurant versions use six to eight yolks and sometimes fold in a spoon of evaporated milk, which turns the coating creamy rather than sandy — richer, but closer to a sauce than a fry.",
  "versionNoteZh": "家常用4个蛋黄在油里压散，形成沙沙的包裹层；餐厅用6到8个，有时还会拌入一勺淡奶，把沙感变成奶滑——更浓郁，但更接近酱汁而非炒饭。",
  "tags": [
    "30-min",
    "fried-rice",
    "salted-egg",
    "cantonese",
    "rich"
  ],
  "dietary": [
    "none"
  ],
  "story": "The trick that made this dish famous across Southeast Asia: mashed salted duck egg yolk, fried in oil until it foams, turns into a golden sand that coats every grain of rice individually. It looks like the cook emptied a bottle of gold dust into the wok. The flavour is eggy, briny and slightly grainy — and it is genuinely hard to stop eating.",
  "storyZh": "让这道菜红遍东南亚的诀窍：咸鸭蛋黄压碎后在油里炒到起泡，会变成金色的细沙，把每一粒米单独裹住。看起来像厨师往锅里倒了一瓶金粉。味道是浓蛋香、咸鲜、略带沙感——真的很难停口。",
  "ingredients": [
    {
      "id": "sey-01",
      "nameEn": "cooked rice, cold and day-old",
      "nameZh": "米饭，隔夜冷饭",
      "pinyin": "lěng fàn",
      "amountMetric": "450 g",
      "amountUS": "3 cups cooked",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "sey-02",
      "nameEn": "salted duck egg yolks, steamed 8 minutes",
      "nameZh": "咸鸭蛋黄，蒸8分钟",
      "pinyin": "xián dàn huáng",
      "amountMetric": "60 g",
      "amountUS": "4 yolks",
      "category": "protein",
      "pantry": "asian",
      "note": "Vacuum-packed cooked yolks are the easiest option; steaming firms raw ones for mashing",
      "noteZh": "真空装熟蛋黄最省事；生咸蛋蒸过才好压散",
      "termKey": "salted-egg-yolk"
    },
    {
      "id": "sey-03",
      "nameEn": "large egg, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "50 g",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sey-04",
      "nameEn": "raw shrimp, peeled and diced",
      "nameZh": "生虾仁，切小丁",
      "pinyin": "xiā rén",
      "amountMetric": "100 g",
      "amountUS": "3½ oz",
      "category": "protein",
      "pantry": "local",
      "note": "Optional but traditional; omit for a vegetarian version using extra corn",
      "noteZh": "传统会加，可省；素版用更多玉米粒代替",
      "termKey": "shrimp"
    },
    {
      "id": "sey-05",
      "nameEn": "frozen corn kernels",
      "nameZh": "冷冻玉米粒",
      "pinyin": "yù mǐ lì",
      "amountMetric": "70 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sey-06",
      "nameEn": "frozen green peas",
      "nameZh": "冷冻青豆",
      "pinyin": "qīng dòu",
      "amountMetric": "50 g",
      "amountUS": "⅓ cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sey-07",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sey-08",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "This dish needs more oil than usual — the foam is made in oil",
      "noteZh": "这道菜用油比平时多——金沙是靠油炒出来的"
    },
    {
      "id": "sey-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "sey-10",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Steam the salted egg yolks for 8 minutes, then mash them finely with a fork until no lumps remain.",
      "textZh": "咸蛋黄蒸8分钟，用叉子压成细末，不留颗粒。",
      "zhHint": "咸蛋黄蒸熟压碎",
      "stateNote": {
        "visual": "The yolks look dry, crumbly and deep orange; the mash has the texture of coarse sand",
        "visualZh": "蛋黄干爽易碎、深橙色；压散后呈粗沙质地",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "high",
        "signal": "The mash falls apart between your fingers and no whole yellow chunks remain",
        "signalZh": "指尖一捻就散，没有整块蛋黄残留"
      },
      "tip": "Mash them thoroughly. Lumps of yolk never melt into the foam and you get pockets of pure salt.",
      "tipZh": "一定要压细。没压碎的蛋黄融不进金沙，会留下一块块纯咸。"
    },
    {
      "text": "Heat 2 tbsp oil in a wok over medium-low. Add the mashed yolks and stir constantly for 60–90 seconds until the oil foams up into a golden sand.",
      "textZh": "炒锅中火偏小下2汤匙油，放入蛋黄末不停搅炒60–90秒，至油中泛起金色泡沫。",
      "zhHint": "炒出金沙",
      "stateNote": {
        "visual": "The oil turns bright orange and a thick layer of fine golden foam rises and covers the surface",
        "visualZh": "油色转为鲜橙，表面涌起厚厚一层细密金色泡沫",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium-low",
        "signal": "The foam is fine and bubbling gently, not smoking — if it starts to brown, lower the heat at once",
        "signalZh": "泡沫细密、温和冒泡，不冒烟——一旦开始变褐立刻降温"
      },
      "tip": "Keep the heat low. High heat browns the yolk before it can foam and you lose the golden colour.",
      "tipZh": "火力要小。火大了蛋黄还没起泡就焦，金色就没了。"
    },
    {
      "text": "Add the shrimp and fry 60 seconds in the foaming oil until opaque, then add corn and peas for 45 seconds.",
      "textZh": "下虾仁在金沙油中炒60秒至不透明，再下玉米粒与青豆炒45秒。",
      "zhHint": "虾仁蔬菜过油",
      "stateNote": {
        "visual": "Shrimp are pink and coated gold; corn and peas are glossy and bright and the foam still clings to them",
        "visualZh": "虾仁粉红裹金；玉米与青豆油亮鲜绿，表面仍挂着金沙",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "The foam has not collapsed — it should still be visible around the ingredients",
        "signalZh": "金沙没有塌——配料周围仍能看到泡沫"
      }
    },
    {
      "text": "Add the cold rice and fold gently but thoroughly for 2–3 minutes over medium heat until every grain is coated gold.",
      "textZh": "下冷饭，中小火轻柔而彻底地翻拌2–3分钟，至每粒米都裹上金色。",
      "zhHint": "金沙裹饭",
      "stateNote": {
        "visual": "Rice has turned an even dull gold and looks sandy rather than wet; grains are separate",
        "visualZh": "米饭呈均匀暗金色，质感是沙沙的而非湿黏；粒粒分明",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "No white grains remain and the wok bottom is coated with a thin gold film, not burning",
        "signalZh": "没有白色米粒，锅底是一层薄金膜而不是焦糊"
      }
    },
    {
      "text": "Push the rice aside, add the beaten egg to the clear space and let it set 15 seconds before folding it through. Add white pepper and sugar.",
      "textZh": "把饭拨到一边，蛋液淋在空处静置15秒后翻匀。加白胡椒与白糖。",
      "zhHint": "蛋液增香",
      "stateNote": {
        "visual": "Pale yellow strands of egg run through the gold rice; the whole wok looks uniformly coated",
        "visualZh": "浅黄蛋丝穿插在金色米饭中；整锅色泽均匀",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "The egg is dry and set, and the sugar has taken the harsh edge off the salt",
        "signalZh": "蛋液干爽凝固，糖把咸味的棱角磨平了"
      }
    },
    {
      "text": "Off the heat, fold in the scallion and serve immediately — the sandy coating firms up as it cools.",
      "textZh": "关火拌入葱花，立即上桌——金沙层会随着降温变硬。",
      "zhHint": "关火即上桌",
      "stateNote": {
        "visual": "A mound of dull-gold rice with bright green scallion flecks and pink shrimp pieces; the surface looks dry and sandy",
        "visualZh": "暗金色饭堆上点缀翠绿葱花与粉红虾仁；表面干爽起沙",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "The plate stays loose and sandy for the first few minutes — eat it now",
        "signalZh": "头几分钟里饭是松散沙感的——趁现在吃"
      }
    }
  ],
  "tips": [
    "Low heat and constant stirring is what turns the yolk into golden foam. High heat browns it and you lose the colour.",
    "Mash the yolks completely before they go in. Lumps become salt bombs.",
    "Serve immediately. Salted egg yolk coating sets as it cools and the texture goes from sandy to heavy."
  ],
  "tipsZh": [
    "小火不停搅，蛋黄才能起成金沙。火大只会焦，金色就没了。",
    "蛋黄下锅前一定要压碎。没压碎的会变成一颗颗盐弹。",
    "要马上吃。咸蛋黄层一凉就凝，口感从沙爽变沉。"
  ],
  "relatedSlugs": [
    "salted-egg-yolk-razor-clams",
    "egg-fried-rice"
  ],
  "image": "/images/recipes/pineapple-fried-rice.webp"
};
