import type { Recipe } from "@/lib/types";

/** Chinese Chive Pockets (Jiu Cai He Zi) (韭菜盒子) — Day batch */
export const chive_pockets: Recipe = {
  "id": "jiu-cai-he-zi",
  "slug": "chive-pockets",
  "titleEn": "Chinese Chive Pockets (Jiu Cai He Zi)",
  "titleZh": "韭菜盒子",
  "pinyin": "jiǔ cài hé zi",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version pan-fries in a covered skillet with modest oil; restaurant versions deep-fry or griddle with far more fat, giving a blistered but greasier crust.",
  "versionNoteZh": "家常版用平底锅少油加盖半煎半烙；餐馆版多油半煎炸，起泡更猛但偏腻。",
  "tags": [
    "weeknight",
    "vegetarian",
    "spring"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "In Shandong every spring the first cutting of Chinese chives is celebrated with jiu cai he zi: two thin wrappers sealed around a filling of chives, scrambled egg and rehydrated vermicelli. My grandmother said the box must be sealed with a rope-like crimp, because 'a leaking box is a wasted spring'.",
  "storyZh": "在山东，每年头茬韭菜下来都要吃韭菜盒子：两张薄皮包住韭菜、炒蛋和泡软的粉丝。奶奶说收口一定得捏出绳边，因为「漏了的盒子，就是糟蹋了一个春天」。",
  "ingredients": [
    {
      "id": "jch-1",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "250 g",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "jch-2",
      "nameEn": "warm water (50°C)",
      "nameZh": "温水（50℃）",
      "pinyin": "wēn shuǐ",
      "amountMetric": "140 ml",
      "amountUS": "2/3 cup",
      "category": "other",
      "pantry": "local",
      "note": "Warm water gives a soft, pliable skin that seals well.",
      "noteZh": "温水面团柔软、延展好，易捏合封口。"
    },
    {
      "id": "jch-3",
      "nameEn": "Chinese chives",
      "nameZh": "韭菜",
      "pinyin": "jiǔ cài",
      "amountMetric": "300 g",
      "amountUS": "2 bunches",
      "category": "produce",
      "pantry": "local",
      "note": "Must be completely dry after washing — water is the enemy here.",
      "noteZh": "洗净后务必彻底晾干——水分是最大敌人。",
      "termKey": "scallion"
    },
    {
      "id": "jch-4",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "3 large",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "note": "Scrambled soft, then chopped — they absorb chive juices.",
      "noteZh": "炒至嫩碎，切细——用来吸收韭菜汁水。",
      "termKey": "egg"
    },
    {
      "id": "jch-5",
      "nameEn": "glass noodles (vermicelli)",
      "nameZh": "龙口粉丝",
      "pinyin": "lóng kǒu fěn sī",
      "amountMetric": "50 g",
      "amountUS": "1 small bundle",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak 10 minutes, then snip short so they don't pierce the wrapper.",
      "noteZh": "泡软 10 分钟后剪短，避免戳破面皮。",
      "termKey": "vermicelli"
    },
    {
      "id": "jch-6",
      "nameEn": "toasted sesame oil",
      "nameZh": "芝麻香油",
      "pinyin": "zhī ma xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Added last, off heat — it volatilises quickly.",
      "noteZh": "最后离火加入——香气易挥发。",
      "termKey": "sesame-oil"
    },
    {
      "id": "jch-7",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use light, not dark — dark soy will grey the bright green filling.",
      "noteZh": "用生抽不用老抽——老抽会让碧绿馅料发暗。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "jch-8",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Mix flour with warm water and 2 g salt, knead 5 minutes to a soft dough, cover and rest 30 minutes.",
      "textZh": "面粉加温水与 2 克盐，揉 5 分钟成软面团，盖膜醒 30 分钟。",
      "zhHint": "软面团才好封口",
      "stateNote": {
        "visual": "Dough is soft, slightly sticky, and smooths out when pressed.",
        "visualZh": "面团柔软微黏，按压后表面可自愈平整。",
        "timeRef": "5 minutes + 30 minutes rest",
        "timeRefZh": "揉 5 分钟 + 醒 30 分钟",
        "signal": "Finger poke leaves a shallow dent that slowly fills in.",
        "signalZh": "戳出的浅坑缓慢回平。"
      }
    },
    {
      "text": "Beat eggs with a pinch of salt and scramble over medium heat until just set and still moist. Transfer to a board, chop fine, and cool completely.",
      "textZh": "鸡蛋加少许盐打散，中火炒至刚凝固尚带湿气；盛出切碎，彻底放凉。",
      "zhHint": "炒蛋要嫩，务必凉透",
      "stateNote": {
        "visual": "Eggs are pale gold, moist, with no browning at the edges.",
        "visualZh": "蛋呈浅金色带湿感，边缘无焦黄。",
        "timeRef": "3 minutes cook + 5 minutes cool",
        "timeRefZh": "炒 3 分钟 + 放凉 5 分钟",
        "heat": "medium",
        "signal": "Curd sets the moment the spatula sweeps the pan bottom.",
        "signalZh": "锅铲扫过锅底，蛋液随即凝固。"
      }
    },
    {
      "text": "Wash chives and dry thoroughly. Cut into 5 mm lengths. Toss with sesame oil *before* salt — the oil film keeps them from weeping.",
      "textZh": "韭菜洗净彻底晾干，切成 5 毫米段；**先**拌香油**再**放盐——油膜能锁住水分不出汤。",
      "zhHint": "先油后盐，锁水不出汤",
      "stateNote": {
        "visual": "Chives glisten with a thin oil film and stay bright green.",
        "visualZh": "韭菜表面覆薄油膜，色泽碧绿发亮。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "No liquid pools at the bottom of the bowl after 2 minutes.",
        "signalZh": "静置 2 分钟碗底无积水。"
      }
    },
    {
      "text": "Combine chives, cooled egg, snipped vermicelli, light soy sauce and remaining salt. Mix gently with chopsticks in one direction.",
      "textZh": "韭菜、凉透的蛋碎、剪短粉丝、生抽与余盐混合，用筷子朝一个方向轻拌。",
      "zhHint": "单向轻拌，勿搅出汁",
      "stateNote": {
        "visual": "Filling looks loose and separate, not a paste; green dominates.",
        "visualZh": "馅料松散分明不成泥，以绿色为主。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Lifted chopsticks release filling cleanly with no dripping.",
        "signalZh": "提起筷子馅料自然落下，不滴汤。"
      }
    },
    {
      "text": "Divide dough into 8 balls. Roll each into a 12 cm round, place filling on one half, fold over, and crimp the edge into a rope pattern. Press out trapped air as you seal.",
      "textZh": "面团分 8 份，擀成 12 厘米圆片；馅放半边，对折，边缘捏出绳状花边；收口时把空气挤出。",
      "zhHint": "边捏绳花，边排空气",
      "stateNote": {
        "visual": "Seam is a tight braid with no gaps; the pocket looks flat, not ballooned.",
        "visualZh": "收口绳纹紧密无缝，盒子扁平不鼓胀。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Pressing the centre gently does not force air out of the seam.",
        "signalZh": "轻压中心，收口处不漏气。"
      }
    },
    {
      "text": "Heat a skillet over medium-low with 10 ml oil. Cook pockets 3–4 minutes per side, covered for the first half, until both sides are pale gold with brown spots and the pocket puffs slightly.",
      "textZh": "平底锅加 10 毫升油，中小火，先盖盖煎前半程，每面 3–4 分钟，至两面浅金带褐斑、盒子微鼓。",
      "zhHint": "先盖后开，中小火慢烙",
      "stateNote": {
        "visual": "Crust shows scattered toasted spots; the pocket feels light and hollow-tapping.",
        "visualZh": "外皮散布焦香斑点，轻敲有中空感。",
        "timeRef": "7–8 minutes",
        "timeRefZh": "7–8 分钟",
        "heat": "medium-low",
        "signal": "A faint puff of steam escapes when you pierce with a chopstick tip.",
        "signalZh": "筷子尖轻扎即有热气冒出。"
      }
    }
  ],
  "tips": [
    "Salt draws water out of chives — season at the very last moment, right before you wrap.",
    "Dry chives are non-negotiable: even a few tablespoons of water will burst the pocket during cooking.",
    "Freeze uncooked pockets on a floured tray, then bag them; fry from frozen with 2 extra minutes per side."
  ],
  "tipsZh": [
    "韭菜遇盐出水——临包前最后时刻再调味。",
    "韭菜必须晾干：哪怕两三勺水，烙的时候也会把盒子顶破。",
    "生盒子可撒粉摆盘冻硬后装袋，冷冻保存；无需解冻，每面多煎 2 分钟。"
  ],
  "relatedSlugs": [
    "chive-egg-dumplings",
    "garlic-chives-scrambled-eggs",
    "pork-cabbage-dumplings"
  ],
  "image": "/images/recipes/chive-egg-dumplings.webp"
};
