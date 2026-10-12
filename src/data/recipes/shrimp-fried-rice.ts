import type { Recipe } from "@/lib/types";

/** Shrimp Fried Rice (虾仁炒饭) — Day batch */
export const shrimp_fried_rice: Recipe = {
  "id": "shrimp-fried-rice",
  "slug": "shrimp-fried-rice",
  "titleEn": "Shrimp Fried Rice",
  "titleZh": "虾仁炒饭",
  "pinyin": "xiā rén chǎo fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks velvet the shrimp in cornstarch and egg white so they stay plump in a moderately hot home wok. Restaurant kitchens skip the velveting and rely on a blazing wok to sear the shrimp in seconds, which is why takeout shrimp snaps rather than bounces.",
  "versionNoteZh": "家常做法把虾仁用淀粉蛋清上浆，在火力一般家用锅里也能保持饱满；餐厅不浆，靠猛火几秒爆熟，所以外卖的虾仁是脆弹而不是柔弹。",
  "tags": [
    "25-min",
    "fried-rice",
    "shrimp",
    "cantonese",
    "one-bowl"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the fried rice order that tells you whether a Cantonese kitchen cares. The shrimp should be separately cooked and folded in at the end, never boiled along with the rice — shrimp that steams in the rice turns rubbery and leaks water into the grains. Cold day-old rice, hot pan, and everything prepped within arm's reach: that is the whole dish.",
  "storyZh": "这是能看出粤菜厨房用不用心的一道炒饭。虾仁必须单独炒、最后才拌进去，绝不能和饭一起焖——在饭里被蒸熟的虾仁会变橡皮，还会把水渗进米粒。隔夜冷饭、热锅、所有配料放在伸手就够得到的地方：这道菜的全部就这些。",
  "ingredients": [
    {
      "id": "sfr-01",
      "nameEn": "cooked jasmine rice, cold and day-old",
      "nameZh": "茉莉香米饭，隔夜冷饭",
      "pinyin": "lěng fàn",
      "amountMetric": "450 g",
      "amountUS": "3 cups cooked",
      "category": "staple",
      "pantry": "local",
      "note": "Refrigerate uncovered overnight to dry it out; fresh rice will clump and steam",
      "noteZh": "不加盖冷藏过夜让它失水；刚煮的饭会成团出水"
    },
    {
      "id": "sfr-02",
      "nameEn": "raw shrimp, peeled and deveined",
      "nameZh": "生虾仁，去壳去虾线",
      "pinyin": "xiā rén",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Pat very dry; frozen-and-thawed shrimp work fine if drained well",
      "noteZh": "一定擦干；冻虾解冻后沥干水分同样好用",
      "termKey": "shrimp"
    },
    {
      "id": "sfr-03",
      "nameEn": "large eggs, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "100 g",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sfr-04",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "For velveting the shrimp",
      "noteZh": "用于虾仁上浆",
      "termKey": "cornstarch"
    },
    {
      "id": "sfr-05",
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
      "id": "sfr-06",
      "nameEn": "frozen green peas",
      "nameZh": "冷冻青豆",
      "pinyin": "qīng dòu",
      "amountMetric": "60 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "note": "No need to thaw; rinse under warm water first",
      "noteZh": "无需解冻，先用温水冲一下"
    },
    {
      "id": "sfr-07",
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
      "id": "sfr-08",
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
      "id": "sfr-09",
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
      "id": "sfr-10",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Toss the shrimp with the cornstarch, a pinch of white pepper and 1 tsp of the beaten egg. Leave for 10 minutes in the fridge.",
      "textZh": "虾仁加淀粉、少许白胡椒和1茶匙蛋液抓匀，冷藏静置10分钟。",
      "zhHint": "虾仁上浆",
      "stateNote": {
        "visual": "Each shrimp is coated in a thin, slightly tacky film rather than a wet slurry; the surface no longer looks glossy-raw",
        "visualZh": "每只虾仁裹着一层薄而略黏的浆，表面不再是生虾的水亮感",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "The coating stays on the shrimp when you lift it with chopsticks and does not drip off",
        "signalZh": "筷子夹起虾仁时浆挂得住，不会往下滴"
      },
      "tip": "This is 'velveting'. It is the single biggest difference between homemade and restaurant-style shrimp.",
      "tipZh": "这就是『上浆』。家常与餐厅虾仁口感差距的最大来源。"
    },
    {
      "text": "Heat 1 tbsp oil in a wok over high until it just smokes. Add the shrimp in a single layer and sear 45 seconds per side. Remove to a plate.",
      "textZh": "炒锅大火下1汤匙油至刚冒烟，虾仁单层下锅，每面煎45秒，盛出备用。",
      "zhHint": "大火爆虾仁",
      "stateNote": {
        "visual": "Shrimp curl into a loose C and turn opaque pink with lightly golden edges; the wok bottom is dry, not watery",
        "visualZh": "虾仁弯成松松的C形，转为不透明粉红并带浅金边；锅底干爽不出水",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "They are just set — a C shape means done, a tight O means overcooked",
        "signalZh": "刚好凝固即可——C形正好，卷成紧O形就是老了"
      }
    },
    {
      "text": "Add the beaten egg to the hot wok and scramble for 20 seconds until just set but still glossy. Remove to the same plate.",
      "textZh": "蛋液倒入热锅，炒20秒至刚凝固但仍油亮，盛到同一盘中。",
      "zhHint": "炒蛋",
      "stateNote": {
        "visual": "Egg is puffed and mostly opaque with a few shiny wet patches; no browned edges",
        "visualZh": "蛋液膨起、基本不透明，还带几处油亮湿润；边缘无焦黄",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "It slides out of the wok in one mass rather than sticking in patches",
        "signalZh": "整块从锅里滑出，不会一块块粘底"
      }
    },
    {
      "text": "Add 1 tbsp oil, then the carrot and peas. Stir-fry 90 seconds over high heat.",
      "textZh": "补1汤匙油，下胡萝卜丁与青豆，大火炒90秒。",
      "zhHint": "炒蔬菜丁",
      "stateNote": {
        "visual": "Carrot dice look slightly darker and glossy at the corners; peas turn vivid green and look plump",
        "visualZh": "胡萝卜丁棱角略深发亮；青豆转为鲜绿饱满",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "A raw carrot smell is gone and the peas squeak lightly against the wok",
        "signalZh": "生胡萝卜味消失，青豆在锅里擦出轻微响声"
      }
    },
    {
      "text": "Add the cold rice. Press and fold with the spatula for 2 minutes until the grains separate and start to jump in the wok.",
      "textZh": "下冷饭，用锅铲压散翻炒2分钟，至米粒散开并在锅中跳动。",
      "zhHint": "炒散米饭",
      "stateNote": {
        "visual": "Clumps have broken into individual grains that look dry and slightly translucent at the edges; a few grains pop",
        "visualZh": "饭团散成单粒，米粒干爽、边缘微透；偶有米粒蹦起",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "high",
        "signal": "You hear a light crackling rather than a wet hiss, and no steam cloud forms",
        "signalZh": "听到轻微爆裂声而不是湿嗤声，也看不到大团蒸汽"
      },
      "tip": "Break the rice up with your hands before it goes in. Fighting clumps in the wok costs you the heat you need.",
      "tipZh": "下锅前先用手把饭抓散。在锅里跟饭团较劲会把锅温耗光。"
    },
    {
      "text": "Return the shrimp and egg, pour the soy sauce around the wok edge, and toss 30 seconds. Off the heat, add sesame oil and scallion and toss once more.",
      "textZh": "倒回虾仁与鸡蛋，沿锅边淋生抽翻炒30秒。关火后加香油与葱花，再翻一次。",
      "zhHint": "合炒调味",
      "stateNote": {
        "visual": "Grains are evenly light tan, shrimp are pink and distinct, egg is scattered in small pale curds, and green scallion flecks sit on top",
        "visualZh": "米粒均匀浅褐，虾仁粉红分明，鸡蛋散布成浅色小块，面上点缀葱绿",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "A dry nutty smell comes off the wok and every grain is separate — nothing is stuck to the bottom",
        "signalZh": "锅里飘出干香坚果味，粒粒分明——锅底不粘"
      }
    }
  ],
  "tips": [
    "Cook the shrimp separately and fold it in at the end. Shrimp simmered inside the rice goes rubbery and waters down the grains.",
    "Day-old rice is not optional. Freshly cooked rice has too much surface moisture to fry.",
    "Add soy sauce around the wok edge, not onto the rice. It caramelises on the metal instead of steaming into the grains."
  ],
  "tipsZh": [
    "虾仁单独炒，最后才拌入。在饭里焖熟的虾仁会发橡皮，还会把米粒弄湿。",
    "隔夜饭不是可选项。刚煮好的饭表面水分太多，炒不起来。",
    "酱油沿锅边淋，不要直接浇在饭上。让它在锅壁上焦化，而不是被饭吸收变水。"
  ],
  "relatedSlugs": [
    "egg-fried-rice",
    "stir-fried-shrimp"
  ],
  "image": "/images/recipes/kung-pao-shrimp.webp"
};
