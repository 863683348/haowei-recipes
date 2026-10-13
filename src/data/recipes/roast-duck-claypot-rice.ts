import type { Recipe } from "@/lib/types";

/** Roast Duck Clay Pot Rice (烧鸭煲仔饭) — Day batch */
export const roast_duck_claypot_rice: Recipe = {
  "id": "roast-duck-claypot-rice",
  "slug": "roast-duck-claypot-rice",
  "titleEn": "Roast Duck Clay Pot Rice",
  "titleZh": "烧鸭煲仔饭",
  "pinyin": "shāo yā bāo zǎi fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "The home version buys roast duck from a Chinatown BBQ shop and warms it on rice. Real Cantonese clay pot shops hang their own ducks and chop them to order with bones in, so the bone marrow and rendered fat drip into the rice — which is why theirs always tastes deeper than yours, and that is fine.",
  "versionNoteZh": "家常版是从华埠烧腊店买烧鸭，放在饭上加热；真正的粤式煲仔饭店自己挂炉烤鸭、现点连骨斩件，让骨髓和烤出的鸭油滴进饭里——所以他们的永远比你做的更深一层，这没关系。",
  "tags": [
    "45-min",
    "claypot",
    "cantonese",
    "duck",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the laziest genuinely great clay pot rice there is. You do not roast anything; you buy roast duck, and three-quarters of the flavour arrives in the bag. Ask specifically for the bone-in leg end and pour any juices from the container into sauce, and you have the best thing you can do with a shop-bought bird.",
  "storyZh": "这是所有煲仔饭里「最偷懒却最棒」的一锅。你不需要烤任何东西，买只烧鸭，四分之三的味道就装在袋子里带回来了。指明要带骨的腿部位，把打包盒里的汁水倒进酱汁里，这就是「外买烧鸭」能被做到最好的样子。",
  "ingredients": [
    {
      "id": "rdc-01",
      "nameEn": "jasmine rice, rinsed",
      "nameZh": "茉莉香米，淘洗",
      "pinyin": "xiāng mǐ",
      "amountMetric": "220 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinsed until clear and drained",
      "noteZh": "淘到水清后沥干"
    },
    {
      "id": "rdc-02",
      "nameEn": "Cantonese roast duck, bone-in, chopped",
      "nameZh": "广式烧鸭，连骨斩件",
      "pinyin": "shāo yā",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Ask for the leg end with bones; keep every drop of juice from the container",
      "noteZh": "要带骨的腿部；打包盒里的汁水一滴都别倒"
    },
    {
      "id": "rdc-03",
      "nameEn": "hoisin sauce",
      "nameZh": "海鲜酱",
      "pinyin": "hǎi xiān jiàng",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "hoisin-sauce"
    },
    {
      "id": "rdc-04",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "rdc-05",
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
      "id": "rdc-06",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "rdc-07",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "pinyin": "fēng mì",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Loosens the sauce and echoes the duck skin glaze",
      "noteZh": "稀释酱汁，与鸭皮的脆皮糖相呼应"
    },
    {
      "id": "rdc-08",
      "nameEn": "fresh ginger, shredded",
      "nameZh": "鲜姜，切丝",
      "pinyin": "jiāng sī",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "rdc-09",
      "nameEn": "scallion, sliced",
      "nameZh": "小葱，切葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "rdc-10",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Films the pot for the crust",
      "noteZh": "给锅上油膜做锅巴"
    }
  ],
  "steps": [
    {
      "text": "Pull the duck off the bones in large pieces and reserve every drop of juice from the container. Keep the bones.",
      "textZh": "把鸭肉从骨头上拆成大片，打包盒里的汁水全部留用，骨头也留着。",
      "zhHint": "拆肉留汁",
      "stateNote": {
        "visual": "Meat comes away in chunks with lacquered skin still attached; a pool of dark, fatty juice sits at the bottom of the container",
        "visualZh": "肉成块拆下，脆皮仍连在上面；盒底积着一层深色带油的汁水",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "The skin still looks crisp and dry, not steamed soft from sitting in its own juice",
        "signalZh": "鸭皮看起来仍干爽酥脆，没有被自身汁水泡软"
      }
    },
    {
      "text": "Put rice, 300 ml (1¼ cups) water, oil and the reserved bones into the clay pot. Bring to a boil over medium heat, stirring once.",
      "textZh": "砂锅里放入大米、300毫升水、油和留用的鸭骨。中火烧沸，搅一次。",
      "zhHint": "带骨下米",
      "stateNote": {
        "visual": "Milky water boiling across the surface with a faint golden film from the rendered duck fat",
        "visualZh": "乳白的水在锅面沸腾，浮着一层鸭油逼出的淡金色油膜",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "Bubbles break through the centre continuously",
        "signalZh": "锅中央持续冒泡破裂"
      },
      "tip": "The bones go in raw with the rice. That is where the depth comes from.",
      "tipZh": "鸭骨要跟米一起生下锅。深度就是从这里来的。"
    },
    {
      "text": "Whisk hoisin, oyster sauce, light soy, dark soy, honey and the reserved duck juice together until smooth.",
      "textZh": "把海鲜酱、蚝油、生抽、老抽、蜂蜜与留用的鸭汁搅匀至顺滑。",
      "zhHint": "调酱汁",
      "stateNote": {
        "visual": "A glossy mahogany sauce that pours in a ribbon and leaves a film on the side of the bowl",
        "visualZh": "红木色酱汁油亮，倒下成带状，碗壁能挂上一层",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No separate streaks of pale honey or dark soy remain",
        "signalZh": "看不到蜂蜜的浅色条纹或老抽的深色痕迹"
      }
    },
    {
      "text": "Cover the pot, drop to the lowest heat and cook 15 minutes. Then remove the bones and lay the duck skin-side up on the rice in one layer.",
      "textZh": "加盖转最小火煮15分钟。取出骨头，把鸭皮朝上单层铺在饭面上。",
      "zhHint": "小火焖饭后铺鸭",
      "stateNote": {
        "visual": "Water has been absorbed, the surface is pocked with steam holes, and the duck skin has started to glisten",
        "visualZh": "水分被吸干，饭面布满气孔，鸭皮开始泛油光",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "No free liquid remains when you tilt the pot slightly",
        "signalZh": "稍微倾斜锅身，没有流动的汤水"
      }
    },
    {
      "text": "Spoon the sauce over the duck, cover, and cook another 8 minutes on the lowest heat. Then raise to medium-low for 5 minutes to set the crust.",
      "textZh": "把酱汁淋在鸭肉上，加盖最小火再煮8分钟，然后转中小火5分钟让锅巴定型。",
      "zhHint": "淋酱再焖逼锅巴",
      "stateNote": {
        "visual": "The sauce has run down and stained the rice amber; steam is almost gone and there is a faint toasty smell",
        "visualZh": "酱汁下渗把米饭染成琥珀色；蒸汽几乎散尽，有淡淡焦香",
        "timeRef": "13 minutes",
        "timeRefZh": "13 分钟",
        "heat": "medium-low",
        "signal": "A dry crackle is audible from the base of the pot",
        "signalZh": "能听到锅底轻微的干脆爆声"
      },
      "tip": "Skin-side up, always. Skin-side down in a closed pot and you will steam every bit of crisp off it.",
      "tipZh": "永远皮朝上。盖着锅皮朝下的话，脆度会被蒸得一干二净。"
    },
    {
      "text": "Off the heat, rest 5 minutes. Scatter ginger and scallion, then fold from the bottom up and serve straight from the pot.",
      "textZh": "离火静置5分钟。撒姜丝与葱花，从锅底往上翻拌，连锅上桌。",
      "zhHint": "静置拌匀上桌",
      "stateNote": {
        "visual": "Grains are amber and glossy, with crisp golden flakes folded through and lacquered duck skin on top",
        "visualZh": "米粒琥珀油亮，金黄脆片拌在里面，最上是红亮的鸭皮",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "A spoon scraped along the base lifts a rigid sheet of crust",
        "signalZh": "勺子刮过锅底能掀起硬挺的整片锅巴"
      }
    }
  ],
  "tips": [
    "Buy the duck the same day you cook it. Day-old roast duck skin goes soft and the whole point is lost.",
    "Ask for the juice. Most shops will give you extra if you say what it is for.",
    "No extra salt — between oyster sauce, dark soy and the duck itself there is already plenty."
  ],
  "tipsZh": [
    "当天买当天做。隔夜烧鸭皮会返软，这道菜的灵魂就没了。",
    "开口要那盒汁水。跟店家说是做什么用的，多数都会多给一些。",
    "不用额外加盐——蚝油、老抽加鸭肉本身，咸度已经足够。"
  ],
  "relatedSlugs": [
    "clay-pot-rice",
    "beer-duck"
  ],
  "image": "/images/recipes/beer-duck.webp"
};
