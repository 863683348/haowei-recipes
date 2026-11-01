import type { Recipe } from "@/lib/types";

/** Crispy Fried Rice Ball (Chaofantuan) (炒饭团) — Day batch */
export const fried_rice_ball: Recipe = {
  "id": "chao-fan-tuan",
  "slug": "fried-rice-ball",
  "titleEn": "Crispy Fried Rice Ball (Chaofantuan)",
  "titleZh": "炒饭团",
  "pinyin": "chǎo fàn tuán",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Zhejiang",
  "regionZh": "浙江",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "The family version presses cold leftover fried rice into balls and griddles them so they develop a crust; the version sold at night markets is deep-fried, which gives a thicker shell but needs far more oil than a home kitchen wants to heat.",
  "versionNoteZh": "家庭版把冷掉的剩炒饭压成团再煎出脆壳；夜市版是油炸的，外壳更厚但需要大量油，家庭厨房通常不愿起那么大一锅油。",
  "tags": [
    "35-min",
    "leftovers",
    "snack",
    "pan-fried",
    "kid-friendly"
  ],
  "dietary": [
    "none"
  ],
  "story": "This exists because of leftover fried rice, which is always too good to throw away and always slightly too dry to enjoy the second time around. Pressing it into a ball and crisping the outside fixes the texture completely. It is the lunchbox item I made most often as a teenager.",
  "storyZh": "这道菜的存在理由是剩炒饭——扔了可惜，直接热第二遍又偏干。压成团把外面煎脆，口感问题一下就解决了。这是我十几岁时做得最多的便当。",
  "ingredients": [
    {
      "id": "ct-01",
      "nameEn": "cold cooked rice",
      "nameZh": "冷米饭",
      "pinyin": "lěng mǐ fàn",
      "amountMetric": "400 g",
      "amountUS": "2.5 cups cooked",
      "category": "staple",
      "pantry": "local",
      "note": "Day-old rice from the fridge is ideal. Fresh rice is too wet to hold a ball.",
      "noteZh": "冰箱里放了一天的饭最合适。新煮的饭太湿，捏不成团。"
    },
    {
      "id": "ct-02",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "2",
      "amountUS": "2",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ct-03",
      "nameEn": "Chinese sausage or ham, finely diced",
      "nameZh": "腊肠或火腿（切细丁）",
      "pinyin": "huǒ tuǐ",
      "amountMetric": "60 g",
      "amountUS": "1/2 cup diced",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ct-04",
      "nameEn": "carrot, finely diced",
      "nameZh": "胡萝卜（切细丁）",
      "pinyin": "hú luó bo",
      "amountMetric": "60 g",
      "amountUS": "1/3 cup diced",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "ct-05",
      "nameEn": "frozen green peas",
      "nameZh": "冷冻青豆",
      "pinyin": "qīng dòu",
      "amountMetric": "60 g",
      "amountUS": "1/3 cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ct-06",
      "nameEn": "scallion greens, finely chopped",
      "nameZh": "小葱绿（切细）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ct-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ct-08",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "ct-09",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch",
      "note": "The binder. Do not skip it or the balls fall apart in the pan.",
      "noteZh": "这是黏合剂。不加的话饭团下锅就散。"
    },
    {
      "id": "ct-10",
      "nameEn": "neutral vegetable oil, for the pan",
      "nameZh": "无味植物油（煎用）",
      "pinyin": "zhí wù yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Break up the cold rice with wet hands so there are no large clumps, then mix in the cornstarch, soy sauce and sesame oil until evenly distributed.",
      "textZh": "手上蘸水把冷米饭抓散至无大块，再加入玉米淀粉、生抽和香油拌至分布均匀。",
      "zhHint": "冷饭抓散加淀粉拌匀",
      "stateNote": {
        "visual": "Rice is loose and separate, with a faint sheen and no visible white powder pockets",
        "visualZh": "米饭松散分明、略有光泽，看不到白色干粉团",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Squeezing a handful forms a shape that holds for a few seconds before crumbling",
        "signalZh": "抓一把捏紧能短暂成形，几秒后才散开"
      },
      "tip": "Wet hands stop the rice sticking to you, and cold rice is stickier than warm, so work fast.",
      "tipZh": "手上蘸水能防粘，而冷饭比热饭更黏，所以动作要快。"
    },
    {
      "text": "Heat 1 tsp oil in a pan over medium-high heat, scramble the eggs until just set but still soft, and tip them out onto a board to chop coarsely.",
      "textZh": "锅中火加1茶匙油烧热，把鸡蛋炒至刚凝固仍软，倒出到砧板上粗略切碎。",
      "zhHint": "鸡蛋炒散切碎",
      "stateNote": {
        "visual": "Egg is pale yellow with no browning and still slightly glossy; pieces are distinct, not powdered",
        "visualZh": "蛋呈浅黄、无焦色且仍带光泽；碎块分明而非成粉",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "The egg stops flowing when you push it with the spatula",
        "signalZh": "用锅铲推动时蛋液不再流动"
      },
      "tip": "Under-cook the egg slightly — it cooks a second time inside the rice ball.",
      "tipZh": "鸡蛋要炒得略生——它会在饭团里再熟一次。"
    },
    {
      "text": "In the same pan, fry the sausage or ham 2 minutes, then add carrot and peas and cook 2 minutes more until the carrot softens. Return the egg and add scallion.",
      "textZh": "同一锅中下腊肠或火腿丁炒2分钟，再加胡萝卜丁和青豆炒2分钟至胡萝卜变软。倒回鸡蛋并加葱花。",
      "zhHint": "配菜炒香后回鸡蛋",
      "stateNote": {
        "visual": "Carrot dice have lost their sharp corners and turned brighter orange; peas are plump and glossy green",
        "visualZh": "胡萝卜丁棱角变钝、颜色更亮；青豆饱满油亮翠绿",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high",
        "signal": "A pea crushed with the spatula gives with no starchy resistance",
        "signalZh": "用锅铲压一粒青豆轻松即碎，无生粉感"
      },
      "tip": "Dice everything smaller than you would for fried rice — big pieces tear the ball apart when you press it.",
      "tipZh": "所有配料都要比炒饭切得更细——大块会在捏团时把饭团顶裂。"
    },
    {
      "text": "Fold the filling into the rice and mix thoroughly. Wet your hands and press firmly into 6 balls about 6 cm / 2.5 in across, squeezing each one three or four times so it compacts.",
      "textZh": "把配料拌入米饭中充分混合。手上蘸水，紧实捏成6个约6厘米的饭团，每个反复捏压三四次让它压实。",
      "zhHint": "拌匀后蘸水捏6个紧实饭团",
      "stateNote": {
        "visual": "Balls have a smooth surface with no cracks; filling is visible at the surface but not protruding",
        "visualZh": "饭团表面光滑无裂纹；表面可见配料但不外凸",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "A ball held in one hand does not shed grains when you turn it over",
        "signalZh": "单手托住饭团翻面时不掉米粒"
      },
      "tip": "Squeeze until you feel resistance. A loosely packed ball will crack the moment it hits the hot pan.",
      "tipZh": "要捏到感觉到阻力。压不实的饭团一碰到热锅就会裂。"
    },
    {
      "text": "Heat the remaining oil in a non-stick or well-seasoned pan over medium heat. Cook the balls 3 minutes per side, pressing gently with a spatula, until both sides are deep golden and crisp.",
      "textZh": "不粘锅或养好的铁锅中火加热剩余油。饭团每面煎3分钟，用锅铲轻压，至两面深金黄酥脆。",
      "zhHint": "每面煎3分钟压出脆壳",
      "stateNote": {
        "visual": "Contact surface turns even deep golden with a firm crust; the ball holds its shape and does not spread",
        "visualZh": "贴锅面变成均匀的深金色硬壳；饭团保持形状不外摊",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "The spatula meets resistance when you press, and the crust makes a faint crackling sound",
        "signalZh": "锅铲按压时有阻力，脆壳发出轻微脆响"
      },
      "tip": "Resist the urge to flip early — the crust is what releases the ball from the pan, not the oil.",
      "tipZh": "别急着翻面——让饭团脱离锅底的是那层脆壳，不是油。"
    },
    {
      "text": "Transfer to a rack or plate and rest 2 minutes. Serve with chilli oil or a small dish of soy sauce for dipping.",
      "textZh": "取出放在晾架或盘中静置2分钟。配辣油或一小碟生抽蘸食。",
      "zhHint": "静置2分钟配蘸料",
      "stateNote": {
        "visual": "Crust stays crisp and glossy; no steam has softened the underside; cut open, the inside is steaming and soft",
        "visualZh": "外壳保持酥脆油亮；底部未被蒸汽泡软；切开后内部热气腾腾、柔软",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Tapping the crust with a spoon gives a dry hollow sound rather than a soft thud",
        "signalZh": "用勺轻敲外壳发出干脆的空响，而不是闷响"
      },
      "tip": "Rest on a rack, not a plate — trapped steam is what turns a crisp crust soft in two minutes.",
      "tipZh": "要放在晾架上而不是盘里——积住的蒸汽两分钟就能把脆壳泡软。"
    }
  ],
  "tips": [
    "Freeze uncooked balls on a tray, then bag them — they cook from frozen with 2 extra minutes per side.",
    "A slice of cheese pressed into the centre before shaping gives you a molten middle.",
    "Brush the outside with a little soy sauce in the last minute for a glazed, teriyaki-like finish."
  ],
  "tipsZh": [
    "生饭团可先在托盘上冻硬再装袋——冷冻状态直接煎，每面多加2分钟即可。",
    "捏团时在中心塞一片芝士，就有流心效果。",
    "最后1分钟在外壳刷一点生抽，能得到照烧般的亮泽。"
  ],
  "relatedSlugs": [
    "egg-fried-rice",
    "chinese-rice-ball",
    "soy-sauce-fried-rice"
  ],
  "image": "/images/recipes/egg-fried-rice.webp"
};
