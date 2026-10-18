import type { Recipe } from "@/lib/types";

/** Chongqing Braised Rooster (Shao Ji Gong) (重庆烧鸡公) — Day batch */
export const chongqing_shao_ji_gong: Recipe = {
  "id": "chong-qing-shao-ji-gong",
  "slug": "chongqing-shao-ji-gong",
  "titleEn": "Chongqing Braised Rooster (Shao Ji Gong)",
  "titleZh": "重庆烧鸡公",
  "pinyin": "chóng qìng shāo jī gōng",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 65,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses chicken thighs and a regular pot; the original uses a whole free-range rooster chopped bone-in and is served as a hot pot that keeps cooking at the table, with vegetables added as you go.",
  "versionNoteZh": "家常版用鸡腿肉、普通炒锅；原版用整只散养公鸡连骨剁块，边煮边吃像火锅，中途不断加配菜。",
  "tags": [
    
    "weekend-project",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "Shao Ji Gong — literally 'braised rooster, the male one' — came out of Chongqing's highway restaurants in the 1990s. Truckers wanted something chewable, numbing and cheap, so kitchens took the tough free-range rooster nobody wanted, braised it hard with doubanjiang and a fistful of chillies, and turned toughness into texture.",
  "storyZh": "烧鸡公出自九十年代重庆的公路餐馆。货车司机要耐嚼、够麻、便宜，于是厨房用没人要的散养老公鸡，下豆瓣与一大把干辣椒猛烧，把「柴」变成了口感。",
  "ingredients": [
    {
      "id": "sjg-1",
      "nameEn": "bone-in chicken thighs (or half a free-range chicken)",
      "nameZh": "带骨鸡腿（或半只散养鸡）",
      "pinyin": "dài gǔ jī tuǐ",
      "amountMetric": "900 g",
      "amountUS": "2 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Bone-in is essential for body; boneless thigh cooks faster but tastes flatter.",
      "noteZh": "必须带骨才有厚度；去骨鸡腿熟得快但味薄。"
    },
    {
      "id": "sjg-2",
      "nameEn": "doubanjiang (fermented chilli bean paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "45 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "sjg-3",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "15 g",
      "amountUS": "20 chilies",
      "category": "spice",
      "pantry": "asian",
      "note": "Snip in half and shake out seeds for heat control.",
      "noteZh": "剪开去籽可控制辣度。",
      "termKey": "dried-chilies"
    },
    {
      "id": "sjg-4",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "5 g",
      "amountUS": "2 1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "sjg-5",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sjg-6",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "30 g",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sjg-7",
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
      "id": "sjg-8",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "For colour only — too much turns the dish muddy.",
      "noteZh": "只为上色；过多发暗发苦。",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "sjg-9",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Dry sherry is the standard substitute.",
      "noteZh": "标准替代：干雪莉酒。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sjg-10",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rounds out the fierce chilli heat.",
      "noteZh": "中和猛辣，让味道圆润。",
      "termKey": "rock-sugar"
    },
    {
      "id": "sjg-11",
      "nameEn": "waxy potatoes",
      "nameZh": "黄心土豆",
      "pinyin": "huáng xīn tǔ dòu",
      "amountMetric": "250 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "note": "Cut into 3 cm chunks; they thicken the sauce as they braise.",
      "noteZh": "切 3 厘米块；炖煮时会自然收稠汤汁。"
    },
    {
      "id": "sjg-12",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Chop chicken into 4 cm bone-in pieces. Soak in cold water 10 minutes, then drain and pat dry.",
      "textZh": "鸡剁成 4 厘米带骨块，冷水浸泡 10 分钟去血水，捞出沥干擦干。",
      "zhHint": "泡去血水，擦干才上色",
      "stateNote": {
        "visual": "Water runs from cloudy to clear; meat looks pale pink, surfaces dry.",
        "visualZh": "泡水由浑转清，肉色浅粉、表面干爽。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Paper towel pressed on the meat leaves no wet mark.",
        "signalZh": "纸巾按压鸡肉无湿痕。"
      }
    },
    {
      "text": "Heat a wok over medium-high with 20 ml oil. Sear chicken in two batches, cut sides down, 3 minutes per batch until deeply browned. Remove.",
      "textZh": "炒锅大火放 20 毫升油，鸡块分两批下锅，切面朝下，每批煎 3 分钟至深褐上色；盛出备用。",
      "zhHint": "分两批煎，别挤锅",
      "stateNote": {
        "visual": "Cut surfaces are rich brown with crisp edges; wok bottom has browned fond.",
        "visualZh": "切面呈浓郁褐色带焦边，锅底留有焦香底味。",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium-high",
        "signal": "Sizzling is loud and steady; chicken releases without sticking.",
        "signalZh": "滋声大而稳定，鸡块不粘锅可翻动。"
      }
    },
    {
      "text": "Lower to medium-low. In the same fat add ginger, garlic, dried chilies and Sichuan peppercorns; fry 1 minute. Add doubanjiang and fry 2 minutes until the oil is red and fragrant.",
      "textZh": "转中小火，用锅内余油下姜片、蒜瓣、干辣椒与花椒煸 1 分钟；加入豆瓣酱再炒 2 分钟至油红香浓。",
      "zhHint": "豆瓣要炒透，油红才香",
      "stateNote": {
        "visual": "Oil separates from the paste and turns clear crimson; chillies darken but do not blacken.",
        "visualZh": "油与酱分离呈清亮深红，辣椒转深但不发黑。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "A deep roasted-bean aroma fills the kitchen; the chilli smell makes you cough slightly.",
        "signalZh": "满屋豆瓣焦香，辣气微微呛喉。"
      }
    },
    {
      "text": "Return chicken. Splash in Shaoxing wine, then light and dark soy sauce. Toss 1 minute so each piece is coated and glossy.",
      "textZh": "鸡块回锅，沿锅边淋黄酒，再加生抽与老抽；翻拌 1 分钟使每块均匀裹酱上色。",
      "zhHint": "酒沿锅边淋，酱裹匀",
      "stateNote": {
        "visual": "Chicken takes on a mahogany sheen; sauce clings rather than pooling.",
        "visualZh": "鸡块呈红木色光泽，酱汁挂身不积底。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "A sharp alcohol smell flashes off within 15 seconds.",
        "signalZh": "酒气 15 秒内迅速挥发。"
      }
    },
    {
      "text": "Add hot water to just cover, plus rock sugar. Bring to a boil, then cover and simmer 20 minutes over low heat.",
      "textZh": "加入没过鸡肉的热水与冰糖；大火烧开后转小火加盖炖 20 分钟。",
      "zhHint": "加热水没过，小火慢炖",
      "stateNote": {
        "visual": "Broth is deep reddish-brown; surface shows slow, lazy bubbles.",
        "visualZh": "汤色深红褐，表面只冒细缓气泡。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low",
        "signal": "A chopstick pierces the thickest piece with slight resistance.",
        "signalZh": "筷子扎最厚处略有阻力。"
      }
    },
    {
      "text": "Add potato chunks, cover and simmer 15 minutes more until tender. Uncover and reduce over medium-high 5 minutes until the sauce is thick and clings. Garnish with scallion.",
      "textZh": "下土豆块，加盖再炖 15 分钟至软；开盖转中大火收汁 5 分钟至浓稠挂身，撒葱花出锅。",
      "zhHint": "后放土豆，最后大火收汁",
      "stateNote": {
        "visual": "Sauce coats the back of a spoon and leaves a clear line when wiped; potatoes hold shape but yield to a chopstick.",
        "visualZh": "汤汁能挂住勺背、划过留痕；土豆成形但筷子可穿透。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "medium-high",
        "signal": "Bubbles turn large and glossy with a faint sticky sound.",
        "signalZh": "气泡变大发亮，伴有轻微黏稠声。"
      }
    }
  ],
  "tips": [
    "Sear hard before braising — the browned fond is where most of the flavour comes from.",
    "Add potatoes late; added at the start they disintegrate into the sauce.",
    "Leftovers are better the next day: the chillies keep blooming overnight."
  ],
  "tipsZh": [
    "炖前务必煎透——焦香锅底是这道菜大半风味的来源。",
    "土豆要后放；一开始就下会煮化在汤里。",
    "隔夜更入味：辣椒的香气会继续释放。"
  ],
  "relatedSlugs": [
    "da-pan-ji",
    "chongqing-mala-xiang-guo",
    "hongshao-chicken"
  ],
  "image": "/images/recipes/da-pan-ji.webp"
};
