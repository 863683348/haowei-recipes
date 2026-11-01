import type { Recipe } from "@/lib/types";

/** Assorted Clay Pot (Shijin Shaguo) (什锦砂锅) — Day batch */
export const assorted_clay_pot: Recipe = {
  "id": "shi-jin-sha-guo",
  "slug": "assorted-clay-pot",
  "titleEn": "Assorted Clay Pot (Shijin Shaguo)",
  "titleZh": "什锦砂锅",
  "pinyin": "shí jǐn shā guō",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 4,
  "version": "family",
  "versionNote": "The family version builds the broth from scratch with a quick chicken or pork stock and layers ingredients by cooking time; restaurants use a concentrated master stock and add a flavour enhancer, which is why theirs tastes rounder but leaves you thirsty.",
  "versionNoteZh": "家庭版用鸡骨或猪骨快速吊汤打底，并按食材成熟时间分层下锅；餐馆用浓缩高汤加增鲜剂，所以味道更圆润却容易口干。",
  "tags": [
    "40-min",
    "clay-pot",
    "one-pot",
    "soup",
    "comfort-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "Shijin means ten-treasures, but nobody counts. It is the northern answer to the odds and ends in the fridge: a few meatballs, some tofu, a handful of glass noodles, whatever green is going soft. My grandmother served it in the clay pot itself on a wooden trivet, and the rule was that nobody got a second spoonful until the pot had gone round once.",
  "storyZh": "什锦是说十样宝贝，但没人真的去数。这是北方人对付冰箱边角料的方法：几颗肉丸、几块豆腐、一把粉丝、快蔫的那把青菜。我祖母连砂锅一起端上木垫，规矩是锅没转完一圈谁也不许添第二勺。",
  "ingredients": [
    {
      "id": "sj-01",
      "nameEn": "pork mince",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince",
      "note": "80/20 gives juicy meatballs. Sub: ground chicken thigh.",
      "noteZh": "八分瘦二分肥的肉末做丸子才多汁。替代：鸡腿肉末。"
    },
    {
      "id": "sj-02",
      "nameEn": "firm tofu, cubed",
      "nameZh": "老豆腐（切块）",
      "pinyin": "lǎo dòu fǔ",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "sj-03",
      "nameEn": "dried glass noodles (vermicelli)",
      "nameZh": "干粉丝",
      "pinyin": "fěn sī",
      "amountMetric": "60 g",
      "amountUS": "2 oz",
      "category": "staple",
      "pantry": "asian",
      "termKey": "vermicelli",
      "note": "Sub: sweet potato starch noodles or bean thread noodles.",
      "noteZh": "替代：红薯粉条或龙口粉丝。"
    },
    {
      "id": "sj-04",
      "nameEn": "napa cabbage, cut into wide ribbons",
      "nameZh": "大白菜（切宽条）",
      "pinyin": "dà bái cài",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "napa-cabbage"
    },
    {
      "id": "sj-05",
      "nameEn": "dried shiitake mushrooms, soaked",
      "nameZh": "干香菇（泡发）",
      "pinyin": "gān xiāng gū",
      "amountMetric": "5 (about 35 g dried)",
      "amountUS": "5 (about 1.2 oz dried)",
      "category": "produce",
      "pantry": "asian",
      "termKey": "dried-shiitake"
    },
    {
      "id": "sj-06",
      "nameEn": "wood ear fungus, soaked",
      "nameZh": "黑木耳（泡发）",
      "pinyin": "hēi mù ěr",
      "amountMetric": "20 g dried",
      "amountUS": "0.7 oz dried",
      "category": "produce",
      "pantry": "asian",
      "termKey": "wood-ear"
    },
    {
      "id": "sj-07",
      "nameEn": "chicken or pork stock",
      "nameZh": "鸡高汤或猪骨汤",
      "pinyin": "gāo tāng",
      "amountMetric": "1.2 L",
      "amountUS": "5 cups",
      "category": "other",
      "pantry": "local",
      "note": "Sub: 1.2 L water plus 2 tsp chicken bouillon powder.",
      "noteZh": "替代：1.2升水加2茶匙鸡粉。"
    },
    {
      "id": "sj-08",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sj-09",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "sj-10",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "sj-11",
      "nameEn": "scallion greens, chopped",
      "nameZh": "小葱绿（切碎）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sj-12",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Mix the pork mince with the cornstarch, 1 tbsp of the light soy sauce and the white pepper. Wet your hands and roll into 16 balls about 3 cm / 1.2 in across.",
      "textZh": "猪肉末加玉米淀粉、1汤匙生抽和白胡椒粉拌匀，手上蘸水后搓成16个约3厘米的丸子。",
      "zhHint": "肉末上劲搓成16个丸子",
      "stateNote": {
        "visual": "Mixture turns sticky and elastic and pulls away from the bowl in one mass; balls hold a smooth round shape",
        "visualZh": "肉馅变黏有弹性，能整团脱离碗壁；丸子保持光滑圆形",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "A ball pressed between thumb and finger springs back instead of cracking",
        "signalZh": "用拇指和食指捏丸子会回弹而不是开裂"
      },
      "tip": "Wet hands are the trick — dry hands drag the surface and the balls crack as they cook.",
      "tipZh": "手上蘸水是关键——干手会把表面拉毛，丸子煮时就会裂。"
    },
    {
      "text": "Bring the stock to a bare simmer in the clay pot over medium heat. Slip the meatballs in one at a time and cook 5 minutes, skimming the grey foam that rises.",
      "textZh": "砂锅中火加热，高汤煮至将沸未沸。逐个下入肉丸煮5分钟，撇去浮起的灰色浮沫。",
      "zhHint": "微沸下丸撇浮沫",
      "stateNote": {
        "visual": "Balls float to the surface and firm up; the broth clears from cloudy grey to light amber",
        "visualZh": "丸子浮起并变紧实；汤由灰浊转为清亮浅琥珀色",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "A ball cut open is uniformly pink-grey with no raw red centre",
        "signalZh": "切开丸子内部均匀粉灰色，中心无生红"
      },
      "tip": "Never boil hard once the meatballs are in — a rolling boil breaks them apart.",
      "tipZh": "下丸后绝不能大滚——剧烈沸腾会把丸子冲散。"
    },
    {
      "text": "Add the soaked shiitake and wood ear and simmer 8 minutes to give the broth body.",
      "textZh": "加入泡发的香菇和木耳，小火煮8分钟让汤变厚。",
      "zhHint": "香菇木耳煮8分钟吊味",
      "stateNote": {
        "visual": "Broth darkens a shade and takes on a faint glossy sheen; mushroom caps look plump and fully hydrated",
        "visualZh": "汤色略深并带微微油光；香菇伞盖饱满、完全泡开",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "A spoonful of broth coats the back of the spoon instead of running straight off",
        "signalZh": "一勺汤能挂住勺背而不是直接流光"
      },
      "tip": "This is the step that separates a homemade pot from a bouillon cube one — give it the full eight minutes.",
      "tipZh": "这步决定了是自家吊的汤还是浓汤宝——八分钟不能省。"
    },
    {
      "text": "Add the tofu cubes and the remaining light soy sauce and simmer gently 5 minutes, then add the napa cabbage ribbons and cook 3 minutes until they slump.",
      "textZh": "下入豆腐块和剩余生抽，小火煮5分钟，再加入大白菜条煮3分钟至菜叶塌软。",
      "zhHint": "豆腐煮5分钟再下白菜",
      "stateNote": {
        "visual": "Tofu cubes look slightly swollen and translucent at the edges; cabbage goes from crisp pale green to soft translucent yellow-green",
        "visualZh": "豆腐块略膨胀、边缘半透明；白菜由脆挺浅绿转为柔软透亮的黄绿",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "A cabbage ribbon drapes over the spoon instead of standing up",
        "signalZh": "白菜条能软软搭在勺上而不是立着"
      },
      "tip": "Add the tofu before the cabbage — it needs the longer time and it will not overcook.",
      "tipZh": "豆腐要在白菜之前下——它需要更长时间，而且不会煮老。"
    },
    {
      "text": "Add the dried glass noodles and cook 3 minutes, pressing them under the surface, until they turn from opaque white to clear and slippery.",
      "textZh": "下入干粉丝煮3分钟，用勺把它们压入汤面以下，至粉丝由不透明白色转为透明滑亮。",
      "zhHint": "粉丝煮3分钟至透明",
      "stateNote": {
        "visual": "Noodles change from chalky white to glassy translucent; they have absorbed broth and swollen noticeably",
        "visualZh": "粉丝由粉白转为玻璃般半透明；吸饱汤汁后明显胀大",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "A strand pulled out is bendable and slippery with no white core",
        "signalZh": "挑起一根粉丝能弯折打滑，中心无白芯"
      },
      "tip": "Do not soak the noodles first — they should absorb the seasoned broth, not plain water.",
      "tipZh": "粉丝不要提前泡——它该吸的是调过味的高汤，不是清水。"
    },
    {
      "text": "Turn off the heat, drizzle with sesame oil and scatter the scallion. Carry the pot to the table on a trivet and serve straight from it.",
      "textZh": "关火，淋香油、撒葱花。连锅端上木垫，直接上桌分食。",
      "zhHint": "关火淋香油连锅上桌",
      "stateNote": {
        "visual": "Surface is dotted with green scallion and beads of amber oil; steam rises steadily but the pot has stopped bubbling",
        "visualZh": "汤面点缀翠绿葱花和琥珀色油珠；蒸汽稳定上升但已不再冒泡",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "The broth is still but visibly hot, with steam coming off the whole surface",
        "signalZh": "汤面静止但明显滚烫，整面都在冒汽"
      },
      "tip": "Serve in the pot — a clay pot holds heat for twenty minutes, which is the whole point of the dish.",
      "tipZh": "连锅上桌——砂锅能保温二十分钟，这正是这道菜的意义。"
    }
  ],
  "tips": [
    "Add a handful of frozen prawns in the last three minutes for a seafood version.",
    "A spoonful of chilli oil on each bowl lets people season their own portion at the table.",
    "Cook the noodles separately if you are making this ahead, or they will swell into the whole pot overnight."
  ],
  "tipsZh": [
    "最后三分钟加一把冷冻虾仁，就成了海鲜版。",
    "每碗配一勺辣油，让各人自行调味。",
    "若要提前做，粉丝要分开煮，否则一晚上会把整锅汤吸干。"
  ],
  "relatedSlugs": [
    "clay-pot-tofu",
    "sandpot-vermicelli-pot",
    "pork-cabbage-claypot"
  ],
  "image": "/images/recipes/sandpot-vermicelli-pot.webp"
};
