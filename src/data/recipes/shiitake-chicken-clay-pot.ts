import type { Recipe } from "@/lib/types";

/** Shiitake Chicken Clay Pot (香菇滑鸡煲) — Day batch */
export const shiitake_chicken_clay_pot: Recipe = {
  "id": "shiitake-chicken-clay-pot",
  "slug": "shiitake-chicken-clay-pot",
  "titleEn": "Shiitake Chicken Clay Pot",
  "titleZh": "香菇滑鸡煲",
  "pinyin": "xiāng gū huá jī bāo",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 50,
  "servings": 3,
  "version": "family",
  "versionNote": "The home version is braised gently in a sauce that you spoon over rice. Restaurant 啫啫 versions start the chicken raw in a screaming-hot clay pot with only oil and aromatics, so the skin sears against the wall and the sauce is built entirely from what renders out.",
  "versionNoteZh": "家常版是温和慢焖，最后把酱汁浇在饭上；餐馆的啫啫版是把生鸡直接下进滚烫砂锅，只靠油和香料，鸡皮贴着锅壁焦香，酱汁全靠自身逼出的油脂形成。",
  "tags": [
    "50-min",
    "claypot",
    "cantonese",
    "chicken",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the weeknight version of the Cantonese clay pot family: no rice in the pot, no crust to babysit, just chicken and mushrooms sharing a sauce thickened by nothing but their own juices. The dried shiitake matter more than the chicken — they give the pot its deep, forest-floor backbone, and the soaking liquid goes in too.",
  "storyZh": "这是粤式砂锅家族里的平日版：锅里不放米，不用盯锅巴，只有鸡和香菇共享一锅全靠自身汁水收浓的酱。干香菇比鸡更重要——它给整锅带来深沉的森林底味，泡菇水也要一起倒进去。",
  "ingredients": [
    {
      "id": "scg-01",
      "nameEn": "boneless chicken thigh, cut into 4 cm pieces",
      "nameZh": "去骨鸡腿肉，切4厘米块",
      "pinyin": "jī tuǐ ròu",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Thigh stays juicy through the braise; breast will turn stringy",
      "noteZh": "腿肉焖完仍多汁；胸肉会发柴"
    },
    {
      "id": "scg-02",
      "nameEn": "dried shiitake mushrooms, soaked 2 hours",
      "nameZh": "干香菇，泡发2小时",
      "pinyin": "gān xiāng gū",
      "amountMetric": "40 g",
      "amountUS": "8 mushrooms",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Reserve 150 ml of the strained soaking liquid",
      "noteZh": "留下150毫升过滤后的泡菇水",
      "termKey": "dried-shiitake"
    },
    {
      "id": "scg-03",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Velvets the chicken so it stays slippery through the braise",
      "noteZh": "给鸡上浆，焖后依然滑嫩",
      "termKey": "velveting"
    },
    {
      "id": "scg-04",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "scg-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "scg-06",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Only for colour — a full tablespoon makes it taste flat",
      "noteZh": "只为上色——放一整勺会让味道发闷",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "scg-07",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "鲜姜，切片",
      "pinyin": "jiāng piàn",
      "amountMetric": "25 g",
      "amountUS": "6 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "scg-08",
      "nameEn": "garlic, smashed",
      "nameZh": "蒜，拍碎",
      "pinyin": "suàn",
      "amountMetric": "20 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "scg-09",
      "nameEn": "scallion, cut into 4 cm lengths",
      "nameZh": "小葱，切4厘米段",
      "pinyin": "xiǎo cōng",
      "amountMetric": "40 g",
      "amountUS": "5 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "scg-10",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī má yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Added off the heat, never cooked",
      "noteZh": "离火后再加，绝不进锅煮",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Cover the dried shiitake with 400 ml warm water and soak 2 hours (or 30 minutes in hot water). Lift them out, squeeze gently, and strain 150 ml of the soaking liquid.",
      "textZh": "干香菇加400毫升温水泡2小时（热水则30分钟）。捞出轻挤，滤出150毫升泡菇水。",
      "zhHint": "泡发干香菇",
      "stateNote": {
        "visual": "Caps are fully pliable and dark brown with no hard core where the stem meets the cap",
        "visualZh": "菇伞完全变软呈深褐色，菇柄与伞盖连接处没有硬芯",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "signal": "Squeezing a cap releases clear amber liquid, not milky starchiness",
        "signalZh": "挤一下菇伞挤出的是清澈琥珀色液体，而不是乳白淀粉水"
      },
      "tip": "Soak in warm water, never boiling. Boiling water blows out the aroma and leaves the mushrooms bland.",
      "tipZh": "一定要温水泡，别用开水。开水会把香味冲掉，香菇就寡淡了。"
    },
    {
      "text": "Toss the chicken with cornstarch, 1 tsp of the light soy and half the oyster sauce. Rest 15 minutes while the pot heats.",
      "textZh": "鸡肉加淀粉、1茶匙生抽和一半蚝油抓匀，静置15分钟，这段时间热锅。",
      "zhHint": "给鸡上浆",
      "stateNote": {
        "visual": "Each piece is filmed with a thin translucent paste and no liquid pools in the bowl",
        "visualZh": "每块鸡肉都裹着薄薄一层半透明浆液，碗底没有积液",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Pinching a piece leaves a sticky film on your fingers",
        "signalZh": "捏一下鸡肉，手指会留下发黏的浆"
      },
      "tip": "The marinade should coat, not marinate. Too much liquid and the chicken poaches instead of browning.",
      "tipZh": "浆要「挂」住而不是「淹」住。液体太多鸡就会变成水煮而不是煎香。"
    },
    {
      "text": "Heat 1 tbsp oil in the clay pot over medium until it shimmers. Lay the chicken skin-side down in a single layer and leave it undisturbed 4 minutes.",
      "textZh": "砂锅放1汤匙油中火烧至油面发亮，鸡皮朝下单层铺入，静置不动4分钟。",
      "zhHint": "鸡皮朝下煎香",
      "stateNote": {
        "visual": "The edges have turned golden and the pieces release from the pot base with a nudge",
        "visualZh": "边缘煎至金黄，轻轻一推就能脱离锅底",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "The sizzle shifts from sharp and wet to a lower, drier fry",
        "signalZh": "声音从尖锐的水汽声转为低沉的干煎声"
      }
    },
    {
      "text": "Add ginger, garlic and the shiitake. Stir-fry 2 minutes until the mushroom edges catch a little colour.",
      "textZh": "下姜片、蒜和香菇翻炒2分钟，直到香菇边缘微微上色。",
      "zhHint": "爆香姜蒜",
      "stateNote": {
        "visual": "The pot is fragrant with ginger and garlic and the mushrooms look glossy and slightly browned at the rim",
        "visualZh": "锅里姜蒜香气扑鼻，香菇油亮、边缘略带焦色",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Garlic is pale gold, not brown — brown means it will turn bitter in the braise",
        "signalZh": "蒜呈浅金色而非褐色——发褐会在焖煮中变苦"
      }
    },
    {
      "text": "Pour in the reserved soaking liquid, remaining light soy, remaining oyster sauce and dark soy. Bring to a simmer, cover, and cook on low for 15 minutes.",
      "textZh": "倒入留用的泡菇水、余下生抽、余下蚝油与老抽。煮沸后加盖转小火焖15分钟。",
      "zhHint": "加汤慢焖",
      "stateNote": {
        "visual": "The sauce is deep brown and just barely bubbling under the lid; the chicken has taken on a mahogany glaze",
        "visualZh": "酱汁深褐，盖下只有微微冒泡；鸡肉已裹上红木色酱光",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Steam leaks steadily from one spot under the lid and the liquid has reduced by about a third",
        "signalZh": "蒸汽从盖下一个位置稳定漏出，汤汁已收掉约三分之一"
      }
    },
    {
      "text": "Uncover, raise to medium-high and reduce 4–5 minutes until the sauce coats the back of a spoon. Off the heat, stir in sesame oil and the scallion.",
      "textZh": "开盖转中大火收汁4–5分钟，直到酱汁能挂住勺背。离火后拌入芝麻油和葱段。",
      "zhHint": "收汁拌香",
      "stateNote": {
        "visual": "The sauce is glossy and thick enough to leave a clear line when you draw a finger across the spoon",
        "visualZh": "酱汁油亮浓稠，手指划过勺背能留下清晰的痕迹",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "Bubbles have turned slow and thick, and the surface sheen holds instead of flooding back",
        "signalZh": "气泡变慢变稠，表面光泽能挂住而不是立即流回填满"
      }
    }
  ],
  "tips": [
    "Never skip the soaking liquid. It carries most of the mushroom flavour and thickens the sauce naturally.",
    "Serve it straight from the clay pot — it holds heat for 15 minutes and the rice goes in at the table.",
    "Leftovers reheat better than almost any other Cantonese braise: 6 minutes covered on low with a splash of water."
  ],
  "tipsZh": [
    "千万别丢泡菇水。大部分香菇风味都在里面，还能自然给酱汁增稠。",
    "直接连砂锅上桌——保温15分钟没问题，米饭到桌上再盛。",
    "这道菜回锅比绝大多数粤式焖菜都好吃：加盖小火6分钟，点一点水即可。"
  ],
  "relatedSlugs": [
    "shiitake-mushroom-chicken-stew",
    "winter-mushroom-steamed-chicken"
  ],
  "image": "/images/recipes/shiitake-mushroom-chicken-stew.webp"
};
