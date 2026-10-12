import type { Recipe } from "@/lib/types";

/** Vegetable Fried Rice (蔬菜炒饭) — Day batch */
export const vegetable_fried_rice: Recipe = {
  "id": "vegetable-fried-rice",
  "slug": "vegetable-fried-rice",
  "titleEn": "Vegetable Fried Rice",
  "titleZh": "蔬菜炒饭",
  "pinyin": "shū cài chǎo fàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "The home version is deliberately light — soy, sesame and the vegetables' own sweetness. Restaurant and takeout versions lean on more oil and often a spoon of chicken bouillon powder, which is why they taste louder but heavier.",
  "versionNoteZh": "家常版刻意清淡——只有酱油、香油和蔬菜本身的甜味。餐厅与外卖版靠更多油、常加一勺鸡粉，所以味道更冲但也更腻。",
  "tags": [
    "25-min",
    "fried-rice",
    "vegetarian",
    "quick",
    "one-bowl"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "The fried rice Chinese families make on the day there is nothing in the fridge but half a carrot, three mushrooms and yesterday's rice. There is no canonical ingredient list — you use what is there, keeping to one rule: everything gets diced to roughly the size of a rice grain so you get a little of each in every spoonful.",
  "storyZh": "这是冰箱里只剩半根胡萝卜、三朵香菇和昨天剩饭那天，中国家庭会做的炒饭。没有标准配料表——有什么用什么，只守一条规矩：所有配菜都切成米粒大小，这样每一勺都能吃到各种料。",
  "ingredients": [
    {
      "id": "vfr-01",
      "nameEn": "cooked rice, cold and day-old",
      "nameZh": "米饭，隔夜冷饭",
      "pinyin": "lěng fàn",
      "amountMetric": "450 g",
      "amountUS": "3 cups cooked",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "vfr-02",
      "nameEn": "dried shiitake, soaked and diced",
      "nameZh": "干香菇，泡发切丁",
      "pinyin": "xiāng gū",
      "amountMetric": "20 g dried",
      "amountUS": "4–5 caps",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak 30 minutes in warm water; reserve the soaking liquid for soups",
      "noteZh": "温水泡发30分钟；泡菇水留着煮汤",
      "termKey": "dried-shiitake"
    },
    {
      "id": "vfr-03",
      "nameEn": "carrot, small dice",
      "nameZh": "胡萝卜，切小丁",
      "pinyin": "hú luó bo",
      "amountMetric": "80 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "vfr-04",
      "nameEn": "baby bok choy, stems diced and leaves shredded",
      "nameZh": "小白菜，帮切丁叶切丝",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "150 g",
      "amountUS": "3–4 heads",
      "category": "produce",
      "pantry": "asian",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "vfr-05",
      "nameEn": "frozen corn kernels",
      "nameZh": "冷冻玉米粒",
      "pinyin": "yù mǐ lì",
      "amountMetric": "70 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "vfr-06",
      "nameEn": "large eggs, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "100 g",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "note": "Omit for a vegan version and add pressed tofu instead",
      "noteZh": "纯素版可省，改用豆干",
      "termKey": "egg"
    },
    {
      "id": "vfr-07",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "8 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "vfr-08",
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
      "id": "vfr-09",
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
      "id": "vfr-10",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Squeeze the soaked shiitake very dry, then dice to the size of a rice grain. Dice the carrot and bok choy stems to match.",
      "textZh": "泡发的香菇挤干水分，切成米粒大小的丁；胡萝卜与白菜帮也切成同样大小。",
      "zhHint": "配料切米粒丁",
      "stateNote": {
        "visual": "All the dice sit in one even pile with no piece more than twice the size of a grain of rice",
        "visualZh": "所有丁料大小均匀，没有一粒超过米粒的两倍",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "A pinch of the mix holds together as a small mosaic rather than falling apart into big chunks",
        "signalZh": "捏起一把配料能聚成小拼块，不会散成大块"
      },
      "tip": "Uniform dice is not fussiness — it is what makes every spoonful taste the same.",
      "tipZh": "切得均匀不是讲究——这是每一勺味道都一致的原因。"
    },
    {
      "text": "Heat 1 tbsp oil over high. Add the beaten egg, scramble 20 seconds until just set, and remove.",
      "textZh": "大火下1汤匙油，倒入蛋液炒20秒至刚凝固，盛出。",
      "zhHint": "炒蛋备用",
      "stateNote": {
        "visual": "Egg is pale yellow, puffed, and still has a few glossy wet spots; no browning",
        "visualZh": "蛋色浅黄蓬松，仍带几处油亮湿润；无焦黄",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "It releases from the wok in one piece when you slide the spatula under it",
        "signalZh": "锅铲一铲能从底部整片铲起"
      }
    },
    {
      "text": "Add 1 tbsp oil, then garlic and shiitake. Stir-fry 60 seconds until the mushroom smell is strong.",
      "textZh": "补1汤匙油，下蒜末与香菇丁炒60秒至菇香浓郁。",
      "zhHint": "爆香蒜与香菇",
      "stateNote": {
        "visual": "Shiitake dice have darkened and shrunk slightly; the garlic is pale gold, not brown",
        "visualZh": "香菇丁变深并略微收缩；蒜末呈浅金而非褐色",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "medium-high",
        "signal": "An earthy mushroom aroma fills the kitchen and the mushrooms squeak against the wok",
        "signalZh": "厨房里满是泥土般菇香，香菇在锅里擦出响声"
      },
      "tip": "Squeeze the mushrooms hard. Wet mushrooms steam instead of browning and never develop flavour.",
      "tipZh": "香菇一定挤干。带水的香菇只会蒸不会香，出不了味。"
    },
    {
      "text": "Add carrot, corn and bok choy stems. Stir-fry 90 seconds over high heat.",
      "textZh": "下胡萝卜丁、玉米粒与白菜帮，大火炒90秒。",
      "zhHint": "炒硬质蔬菜",
      "stateNote": {
        "visual": "Carrot is glossy orange, corn kernels look plump and shiny, bok choy stems have turned bright jade",
        "visualZh": "胡萝卜油亮橙红，玉米粒饱满发亮，白菜帮转为鲜翠",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "The raw carrot smell has gone and the pan smells sweet",
        "signalZh": "生胡萝卜味消失，锅里飘出甜味"
      }
    },
    {
      "text": "Add the cold rice and press-and-fold for 2–3 minutes until completely separated, then add the bok choy leaves for the last 45 seconds.",
      "textZh": "下冷饭压散翻炒2–3分钟至完全散开，最后45秒下白菜叶。",
      "zhHint": "炒饭下菜叶",
      "stateNote": {
        "visual": "Grains are dry and separate; the leaves have just wilted to a deep green with no water pooling in the wok",
        "visualZh": "米粒干爽分明；菜叶刚塌软成深绿，锅底不积水",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Rice crackles lightly and you can see individual grains jumping at the wok edge",
        "signalZh": "米饭轻微爆响，能看到米粒在锅边跳动"
      }
    },
    {
      "text": "Return the egg, pour the soy sauce around the wok edge, toss 30 seconds. Off the heat add sesame oil and scallion and fold twice.",
      "textZh": "倒回鸡蛋，沿锅边淋生抽翻炒30秒。关火加香油与葱花，翻两下。",
      "zhHint": "合炒收尾",
      "stateNote": {
        "visual": "Pale tan grains speckled with orange carrot, dark mushroom, green leaves and yellow egg; scallion sits bright green on top",
        "visualZh": "浅褐米粒间杂橙红胡萝卜、深褐香菇、绿叶与黄蛋碎，面上翠绿葱花鲜明",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "The sesame aroma arrives after the heat is off, not before — that means it has not burned",
        "signalZh": "香油味是关火之后才飘出来的——说明没被烧焦"
      }
    }
  ],
  "tips": [
    "Dice every vegetable to rice-grain size. Big pieces never distribute and you end up fishing them out.",
    "Soy sauce goes in around the wok edge at the end, so it toasts rather than soaking in and making the rice wet.",
    "For a vegan version, drop the egg and add diced pressed tofu fried until golden."
  ],
  "tipsZh": [
    "所有蔬菜都切成米粒大小。切大了拌不匀，最后还得挑出来。",
    "酱油最后沿锅边淋，让它焦化而不是被饭吸走变湿。",
    "纯素版去掉鸡蛋，改用煎至金黄的豆干丁。"
  ],
  "relatedSlugs": [
    "egg-fried-rice",
    "soy-sauce-fried-rice"
  ],
  "image": "/images/recipes/egg-fried-rice.webp"
};
