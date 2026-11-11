import type { Recipe } from "@/lib/types";

/** Seafood Fried Rice (海鲜炒饭) — Day batch */
export const seafood_fried_rice: Recipe = {
  "id": "seafood-fried-rice",
  "slug": "seafood-fried-rice",
  "titleEn": "Seafood Fried Rice",
  "titleZh": "海鲜炒饭",
  "pinyin": "hǎi xiān chǎo fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version velvets the seafood in cornstarch and egg white so it stays plump on a modest domestic burner; restaurant woks sear it dry over a blazing flame in about 40 seconds and get their wok hei from that heat, not from technique you can copy at home.",
  "versionNoteZh": "家常版把海鲜用淀粉蛋清上浆，在火力一般的家用灶上也能保持饱满弹嫩；餐厅猛火四十秒爆熟，锅气来自那口火，不是家里能照搬的手法。",
  "tags": [
    "25-min",
    "fried-rice",
    "seafood",
    "one-pan",
    "beginner"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Cantonese diner has a fried rice built on whatever came off the boat that morning. My aunt in Sham Shui Po cooked the seafood in two quick batches and never let it sit in the rice - she said seafood steamed inside rice turns to rubber and leaks water into the grains, which is the one mistake that ruins the dish.",
  "storyZh": "每家粤式茶餐厅都有一盘用当天船货炒出来的海鲜炒饭。香港深水埗的姑妈把海鲜分两批快炒，绝不焖在饭里——她说海鲜在饭里被蒸熟会变橡皮，还会把水渗进米粒，这是唯一一道会毁掉整锅的错误。",
  "ingredients": [
    {
      "id": "sfr-01",
      "nameEn": "cooked long-grain rice, chilled overnight",
      "nameZh": "隔夜冷饭",
      "pinyin": "gé yè lěng fàn",
      "amountMetric": "300 g",
      "amountUS": "2 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Cold leftover rice is non-negotiable; freshly cooked rice is too wet and will steam instead of fry",
      "noteZh": "必须用隔夜冷饭；现煮的米饭太湿，只会蒸不会炒"
    },
    {
      "id": "sfr-02",
      "nameEn": "raw shrimp, peeled and deveined",
      "nameZh": "虾仁",
      "pinyin": "xiā rén",
      "amountMetric": "120 g",
      "amountUS": "4 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Frozen cooked shrimp works in a pinch but add it at the very end, only to warm through",
      "noteZh": "冷冻熟虾仁也能用，但要最后下锅，只需热透",
      "termKey": "shrimp"
    },
    {
      "id": "sfr-03",
      "nameEn": "squid body, scored and cut into rings",
      "nameZh": "鲜鱿鱼筒",
      "pinyin": "xiān yóu yú",
      "amountMetric": "100 g",
      "amountUS": "3.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Score the inside in a crosshatch so the rings curl into tight rolls; frozen cleaned squid tubes are fine",
      "noteZh": "内面斜切十字花刀，焯后会卷成鱿鱼卷；冷冻鱿鱼筒可用"
    },
    {
      "id": "sfr-04",
      "nameEn": "sea scallops, halved",
      "nameZh": "鲜扇贝",
      "pinyin": "xiān shàn bèi",
      "amountMetric": "80 g",
      "amountUS": "3 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Bay scallops are cheaper and need even less time; pat them bone dry or they will poach in their own liquid",
      "noteZh": "小扇贝更便宜、熟得更快；务必吸干水分，否则会变成水煮"
    },
    {
      "id": "sfr-05",
      "nameEn": "large eggs, beaten",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "2",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sfr-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "local",
      "note": "Half goes into the velveting marinade; it is what keeps home-burner seafood bouncy instead of tough",
      "noteZh": "一半用于上浆——这正是家用灶上海鲜保持弹嫩而非发柴的关键",
      "termKey": "cornstarch"
    },
    {
      "id": "sfr-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Splash it down the side of the wok, never into the middle, so it hits hot metal and caramelises",
      "noteZh": "沿锅边淋入，不要倒在锅中央，让酱油碰到热锅壁焦化出香",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sfr-08",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴料酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Dry sherry is the standard substitute at a 1:1 ratio",
      "noteZh": "可用干雪莉酒 1:1 替代",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sfr-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "White pepper, not black - it gives the clean seafood warmth without the speckled look",
      "noteZh": "用白胡椒不用黑胡椒——提海鲜的暖香且不会有黑点",
      "termKey": "white-pepper"
    },
    {
      "id": "sfr-10",
      "nameEn": "scallion, sliced thin on the bias",
      "nameZh": "小葱，斜切",
      "pinyin": "xiǎo cōng",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "note": "Cut whites and greens separately; whites go in with the rice, greens at the very end",
      "noteZh": "葱白葱绿分开：葱白跟饭一起炒，葱绿最后撒",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Pat the shrimp, squid and scallops completely dry with paper towel, then toss with half the cornstarch, the Shaoxing wine and the white pepper. Leave to marinate while you prep everything else.",
      "textZh": "虾仁、鱿鱼、扇贝用厨房纸彻底吸干水分，加一半淀粉、料酒与白胡椒抓匀腌制，备菜期间静置。",
      "zhHint": "海鲜先吸干再上浆",
      "stateNote": {
        "visual": "Seafood looks matte and slightly tacky rather than wet and shiny; no liquid pools in the bowl",
        "visualZh": "海鲜表面呈哑光微黏而非水亮，碗底无积水",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "When you tilt the bowl, nothing runs to the low side",
        "signalZh": "倾斜碗身，没有液体流到低处"
      },
      "tip": "Wet seafood is the number one cause of steamed, grey fried rice.",
      "tipZh": "海鲜带水是把炒饭做成灰白水煮的第一大原因。"
    },
    {
      "text": "Heat 1 tablespoon oil in a wok over high heat until it shimmers, pour in the beaten eggs and scramble them to soft curds. Tip them straight back out onto a plate.",
      "textZh": "炒锅大火烧热，下1大勺油至微微冒烟，倒入蛋液炒成嫩蛋絮，立刻盛出备用。",
      "zhHint": "蛋单独炒后盛出",
      "stateNote": {
        "visual": "Egg puffs up at the edges within seconds and sets in soft golden curds, still slightly glossy in the centre",
        "visualZh": "蛋液数秒内边缘鼓起、凝成金黄嫩絮，中心仍略带光泽",
        "timeRef": "40 seconds",
        "timeRefZh": "40 秒",
        "heat": "high",
        "signal": "The egg slides as one mass when you tilt the wok - pull it then, it will finish on the plate",
        "signalZh": "倾斜炒锅时蛋液整块滑动即可出锅——余温会在盘中继续熟化"
      }
    },
    {
      "text": "Add another tablespoon of oil and sear the seafood in a single uncrowded layer, undisturbed for 45 seconds, then toss for 30 seconds more. Remove to the same plate as the egg.",
      "textZh": "再下1大勺油，海鲜单层平铺入锅，先不动45秒，再翻炒30秒，盛到放鸡蛋的同一个盘里。",
      "zhHint": "海鲜快炒即出",
      "stateNote": {
        "visual": "Shrimp turn opaque pink and curl into a C shape; squid rings tighten into scrolls; scallop edges are golden",
        "visualZh": "虾仁变不透明粉红并弯成C形，鱿鱼圈卷成卷，扇贝边缘金黄",
        "timeRef": "75 seconds",
        "timeRefZh": "75 秒",
        "heat": "high",
        "signal": "A shrimp curled into a tight O is overcooked - C means cooked, O means overdone",
        "signalZh": "虾仁蜷成紧闭的O形就老了——C形刚好，O形过头"
      },
      "tip": "Crowding the pan drops the temperature and poaches the seafood instead of searing it.",
      "tipZh": "一次下太多会降温，海鲜就变成水煮而非煎香。"
    },
    {
      "text": "Add the last of the oil, then the cold rice. Press and fold with the spatula for 2-3 minutes until every grain has separated and is coated in oil, and the scallion whites go in halfway through.",
      "textZh": "补入最后一点油，下隔夜冷饭，用锅铲按压翻炒2-3分钟至米粒粒粒分明、均匀裹油，中途下葱白。",
      "zhHint": "冷饭炒散至粒粒分明",
      "stateNote": {
        "visual": "Grains bounce and skitter across the wok surface instead of clumping; a few grains at the rim start to turn pale gold",
        "visualZh": "米粒在锅中跳动散开而不结团，锅边少量米粒开始泛浅金",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "You can hear the rice - it crackles instead of hissing, which means the surface moisture is gone",
        "signalZh": "能听见米粒噼啪声而非滋滋水汽声——说明表面水分已炒干"
      },
      "tip": "Break up cold rice with your fingers before it hits the wok; fighting clumps with a spatula mashes the grains.",
      "tipZh": "冷饭下锅前先用手抓散；用锅铲硬压会把米粒压烂。"
    },
    {
      "text": "Splash the light soy sauce down the side of the wok, toss twice, then return the egg and all the seafood and toss to distribute evenly.",
      "textZh": "沿锅边淋入生抽，翻拌两次，倒回鸡蛋与全部海鲜，翻匀使分布均匀。",
      "zhHint": "酱油沿锅边淋",
      "stateNote": {
        "visual": "A thin pale-brown haze blooms where the soy hits the metal; colour spreads through the rice in even pale flecks",
        "visualZh": "酱油碰到锅壁处腾起浅褐色薄雾，颜色以均匀的浅斑分布到米粒上",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "The wok smells toasty and slightly sweet rather than raw and salty",
        "signalZh": "锅中飘出焦香微甜的气味，而不是生酱油的咸味"
      }
    },
    {
      "text": "Kill the heat, shower in the scallion greens, fold twice more and serve straight away in warm bowls.",
      "textZh": "关火，撒入葱绿，再翻拌两次，趁热盛入温碗上桌。",
      "zhHint": "关火后撒葱绿",
      "stateNote": {
        "visual": "Bright green scallion against pale gold rice with pink shrimp and white squid showing through; grains are dry and separate",
        "visualZh": "葱绿鲜亮，米饭浅金，粉红虾仁与白色鱿鱼隐约可见；米粒干爽分明",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "No steam cloud rises when you plate it - that is how you know the rice stayed fried, not steamed",
        "signalZh": "装盘时没有大团蒸汽上涌——说明饭始终是炒出来的，不是蒸熟的"
      }
    }
  ],
  "tips": [
    "Overnight rice, a screaming hot wok and a dry surface are the entire recipe - everything else is seasoning.",
    "Cook the seafood in batches if your pan is small; two fast batches beat one slow one every time.",
    "Leftover fried rice reheats best in a dry non-stick pan over medium heat, not in the microwave, which makes it gummy."
  ],
  "tipsZh": [
    "隔夜饭、够热的锅、干燥的表面——这就是这道菜的全部，其余都只是调味。",
    "锅小就分两批炒海鲜；两次快炒永远胜过一次慢炒。",
    "剩炒饭最好用不粘锅干锅中小火回热，微波炉会让它发黏。"
  ],
  "relatedSlugs": [
    "yangzhou-fried-rice",
    "shrimp-fried-rice",
    "seafood-geda-soup"
  ],
  "image": "/images/recipes/yangzhou-fried-rice.webp"
};
