import type { Recipe } from "@/lib/types";

/** Taiwanese Braised Pork Rice (Lu Rou Fan) (台式卤肉饭) — Day batch */
export const taiwanese_braised_pork_rice: Recipe = {
  "id": "tai-shi-lu-rou-fan",
  "slug": "taiwanese-braised-pork-rice",
  "titleEn": "Taiwanese Braised Pork Rice (Lu Rou Fan)",
  "titleZh": "台式卤肉饭",
  "pinyin": "tái shì lǔ ròu fàn",
  "cuisine": "台菜",
  "cuisineEn": "Taiwanese",
  "region": "Taiwan, China",
  "regionZh": "中国台湾",
  "difficulty": "medium",
  "timeMin": 75,
  "servings": 4,
  "version": "family",
  "versionNote": "The family version dices the pork belly by hand so it keeps texture, and simmers uncovered near the end to concentrate; the restaurant version often uses minced pork and a thickener, which is faster but loses the distinct cubes of fat and lean.",
  "versionNoteZh": "家庭版手切五花肉丁以保留口感，最后开盖收汁；餐馆常用绞肉加增稠，速度快但失去了肥瘦分明的肉丁口感。",
  "tags": [
    "75-min",
    "braise",
    "pork",
    "rice",
    "taiwanese"
  ],
  "dietary": [
    "none"
  ],
  "story": "Lu rou fan is the dish Taiwanese people measure each other by, and every family swears theirs is the correct one. The version I learned in Taipei used fried shallots from a packet and a full hour of barely-there simmering, and the only garnish was a braised egg cut in half so the yolk soaked up sauce.",
  "storyZh": "卤肉饭是台湾人互相较劲的一道菜，每家都坚称自己那锅才对。我在台北学的版本用袋装油葱酥，再小火慢卤整整一小时，唯一配料是对半切开的卤蛋，让蛋黄吸饱卤汁。",
  "ingredients": [
    {
      "id": "lr-01",
      "nameEn": "pork belly, diced to 1 cm",
      "nameZh": "五花肉（切1厘米丁）",
      "pinyin": "wǔ huā ròu",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly",
      "note": "Skin on is traditional; ask the butcher to scald and scrape it. Sub: pork shoulder with a little extra oil.",
      "noteZh": "传统带皮，请摊主烫刮干净。替代：猪肩肉加少许油。"
    },
    {
      "id": "lr-02",
      "nameEn": "fried shallots",
      "nameZh": "油葱酥",
      "pinyin": "yóu cōng sū",
      "amountMetric": "40 g",
      "amountUS": "3/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "The single most important ingredient. Sub: fry 3 sliced shallots in oil until golden and drained.",
      "noteZh": "这道菜最重要的配料。替代：3个切片红葱头炸至金黄沥油。"
    },
    {
      "id": "lr-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "lr-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "lr-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp crushed",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar",
      "note": "Sub: light brown sugar.",
      "noteZh": "替代：浅色红糖。"
    },
    {
      "id": "lr-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "lr-07",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "2 whole",
      "amountUS": "2 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "lr-08",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wǔ xiāng fěn",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "lr-09",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（切末）",
      "pinyin": "suàn",
      "amountMetric": "15 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "lr-10",
      "nameEn": "hard-boiled eggs, peeled",
      "nameZh": "水煮蛋（去壳）",
      "pinyin": "jī dàn",
      "amountMetric": "4",
      "amountUS": "4",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "lr-11",
      "nameEn": "steamed jasmine rice, for serving",
      "nameZh": "蒸好的茉莉香米饭",
      "pinyin": "mǐ fàn",
      "amountMetric": "600 g cooked",
      "amountUS": "4 cups cooked",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "lr-12",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "shuǐ",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Put the diced pork belly in a cold, dry heavy pot over medium heat with no added oil. Render 8 minutes, stirring occasionally, until the cubes have shrunk and a good pool of fat has collected.",
      "textZh": "五花肉丁放入冷的重锅中，不放油，中火煸8分钟，偶尔翻动，至肉丁收缩并析出足量猪油。",
      "zhHint": "干锅煸出猪油",
      "stateNote": {
        "visual": "Cubes shrink by about a third, edges turn golden, and clear fat pools in the bottom of the pot",
        "visualZh": "肉丁缩小约三分之一，边缘金黄，锅底积起清亮猪油",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium",
        "signal": "The sizzling changes from a wet spatter to a steady oily fry",
        "signalZh": "声音由带水的爆溅转为平稳的油煎声"
      },
      "tip": "Starting in a cold dry pot renders more fat without scorching the outside.",
      "tipZh": "冷锅干煸能逼出更多油，又不会把表面烧焦。"
    },
    {
      "text": "Pour off all but 1 tbsp of the rendered fat. Add garlic and star anise and fry 1 minute, then add the pork back with the Shaoxing wine and let it bubble 30 seconds.",
      "textZh": "倒出猪油只留1汤匙。下蒜末和八角炒1分钟，倒回肉丁并淋黄酒，让其沸腾30秒。",
      "zhHint": "留少许油爆香回锅",
      "stateNote": {
        "visual": "Garlic turns pale gold, not brown; the wine hits the hot pot and steams up in a fragrant cloud",
        "visualZh": "蒜末变浅金而非焦褐；黄酒遇热锅腾起一团香气",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "The sharp alcohol smell has burned off and the pot smells sweet and nutty",
        "signalZh": "刺鼻酒味已挥发，锅里是甜香与坚果香"
      },
      "tip": "Keep that rendered pork fat — it is the best thing in the world for frying greens later in the week.",
      "tipZh": "煸出的猪油留着——这周炒青菜时用它最香。"
    },
    {
      "text": "Stir in light soy sauce, dark soy sauce, rock sugar and five-spice. Add the water and the fried shallots and bring to a simmer.",
      "textZh": "加入生抽、老抽、冰糖和五香粉炒匀。倒入清水和油葱酥，煮至微沸。",
      "zhHint": "调味加水放油葱酥",
      "stateNote": {
        "visual": "Liquid turns deep dark brown and glossy; sugar crystals have completely dissolved and the shallots float soft",
        "visualZh": "汤汁转为深褐色发亮；糖粒完全化开，油葱酥漂浮变软",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "Running a spoon along the pot bottom leaves a clean line with no grit of sugar",
        "signalZh": "勺子刮过锅底留下干净痕迹，摸不到糖粒"
      },
      "tip": "Crush the rock sugar before measuring; a whole lump takes far longer to dissolve and you will over-reduce waiting.",
      "tipZh": "冰糖先敲碎再称量；整块化得慢，等它化开会收汁过头。"
    },
    {
      "text": "Nestle the peeled eggs into the sauce, cover, and simmer on the lowest heat for 45 minutes. Stir every 15 minutes so the bottom does not catch.",
      "textZh": "把去壳水煮蛋埋入卤汁，盖盖，最小火卤45分钟，每15分钟翻动一次防止糊底。",
      "zhHint": "小火卤45分钟",
      "stateNote": {
        "visual": "Sauce barely trembles rather than bubbling; pork cubes are dark mahogany and the eggs have stained to even brown",
        "visualZh": "卤汁轻微颤动而非冒泡；肉丁呈深红木色，卤蛋均匀上色",
        "timeRef": "45 minutes",
        "timeRefZh": "45 分钟",
        "heat": "low",
        "signal": "A cube pressed with the back of a spoon yields easily and the fat is jelly-soft, not rubbery",
        "signalZh": "勺背按压肉丁轻松下陷，脂肪软如冻而非橡皮"
      },
      "tip": "If the pork still feels firm at 45 minutes it needs longer, not more heat — more heat only toughens it.",
      "tipZh": "45分钟若肉还硬，说明要再久一点而不是加大火——大火只会让肉变柴。"
    },
    {
      "text": "Uncover and simmer 10 more minutes to reduce the sauce until it is spoon-coating and shiny. Fish out the star anise.",
      "textZh": "开盖再煮10分钟收汁，至卤汁能挂勺并油亮。捞出八角。",
      "zhHint": "开盖收汁10分钟",
      "stateNote": {
        "visual": "Sauce has thickened so a spoon dragged across the pot leaves a channel that fills slowly; surface is glossy with visible fat",
        "visualZh": "卤汁浓稠，勺子划过锅底留下缓慢回填的沟痕；表面油亮可见油花",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "Bubbles are slower and thicker and the sauce clings to the pork instead of running off",
        "signalZh": "气泡变慢变稠，卤汁挂在肉上而不是流下"
      },
      "tip": "Reduce uncovered — covered reduction just makes more liquid and never thickens.",
      "tipZh": "收汁要开盖——盖着收只会越收越多，永远不稠。"
    },
    {
      "text": "Spoon the rice into bowls, ladle the pork and plenty of sauce over, and halve a braised egg on top. Serve with a spoonful of the sauce from the bottom of the pot.",
      "textZh": "米饭盛碗，舀上卤肉和足量卤汁，顶上对半摆一颗卤蛋。再淋一勺锅底的卤汁即可上桌。",
      "zhHint": "浇肉汁配卤蛋",
      "stateNote": {
        "visual": "Rice is stained dark brown where the sauce lands; the egg yolk is pale and creamy against the dark sauce",
        "visualZh": "卤汁落处米饭被染成深褐；蛋黄浅黄柔润，与深色卤汁形成对比",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Sauce runs slowly down the mound of rice rather than pooling instantly at the bottom of the bowl",
        "signalZh": "卤汁沿饭堆缓慢流下，而不是立刻积在碗底"
      },
      "tip": "Serve with a small dish of pickled mustard greens on the side — the sourness resets your palate between bites.",
      "tipZh": "配一小碟酸菜或榨菜——酸味能在每一口之间清口。"
    }
  ],
  "tips": [
    "Make it a day ahead: the flavour is deeper on day two and the fat solidifies on top so you can skim it.",
    "Double the batch and freeze half — lu rou fan freezes better than almost any other braise.",
    "Add a pinch of white pepper at the end, never during, or it turns bitter in the long simmer."
  ],
  "tipsZh": [
    "提前一天做更好吃：第二天味道更厚，表面油脂凝固也方便撇去。",
    "一次做两份，冻一半——卤肉饭比绝大多数卤味都更适合冷冻。",
    "白胡椒粉最后才加，久煮会发苦。"
  ],
  "relatedSlugs": [
    "hongshao-pork",
    "char-siu-pork",
    "da-bian-lu"
  ],
  "image": "/images/recipes/hongshao-pork.webp"
};
