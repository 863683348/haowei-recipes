import type { Recipe } from "@/lib/types";

/** Beef Fried Rice (牛肉炒饭) — Day batch */
export const beef_fried_rice: Recipe = {
  "id": "beef-fried-rice",
  "slug": "beef-fried-rice",
  "titleEn": "Beef Fried Rice",
  "titleZh": "牛肉炒饭",
  "pinyin": "niú ròu chǎo fàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "At home the beef is sliced thin and velveted in cornstarch so a domestic burner can still produce tender results. Restaurant versions often use beef tenderloin trimmings and flash-sear them in a wok four times hotter, so the beef comes out with a charred edge the home version trades away for tenderness.",
  "versionNoteZh": "家常把牛肉切薄片上浆，家用灶也能炒嫩；餐厅常用牛柳边角料，在火力高数倍的锅里快爆，带出焦香边——家常版用焦香换了嫩度。",
  "tags": [
    "30-min",
    "fried-rice",
    "beef",
    "one-bowl",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "The Hong Kong cha chaan teng answer to a full meal in one plate. Beef fried rice lives or dies on two things: the beef must be marinated long enough to hold water, and it must be seared hard and fast in a screaming pan and then removed. Anything longer than ninety seconds in the wok and you are eating beef jerky in rice.",
  "storyZh": "港式茶餐厅『一盘搞定一餐』的答案。牛肉炒饭成败只在两点：牛肉要腌够时间锁住水分，要在滚烫的锅里大火快爆后立刻盛出。在锅里待超过九十秒，你吃到的就是米饭里的牛肉干。",
  "ingredients": [
    {
      "id": "bfr-01",
      "nameEn": "cooked jasmine rice, cold and day-old",
      "nameZh": "茉莉香米饭，隔夜冷饭",
      "pinyin": "lěng fàn",
      "amountMetric": "450 g",
      "amountUS": "3 cups cooked",
      "category": "staple",
      "pantry": "local",
      "note": "Cold and dry is the whole secret",
      "noteZh": "冷而干就是全部秘诀"
    },
    {
      "id": "bfr-02",
      "nameEn": "beef sirloin or flank, sliced thin against the grain",
      "nameZh": "牛里脊或牛腩片，逆纹切薄片",
      "pinyin": "niú ròu piàn",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Freeze 20 minutes first — it makes thin slicing much easier",
      "noteZh": "先冷冻20分钟——切薄片会容易很多",
      "termKey": "pork-loin"
    },
    {
      "id": "bfr-03",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "8 g",
      "amountUS": "1½ tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Half goes into the marinade, half into a slurry",
      "noteZh": "一半入腌料，一半调水淀粉",
      "termKey": "cornstarch"
    },
    {
      "id": "bfr-04",
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
      "id": "bfr-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "This is for colour, not saltiness",
      "noteZh": "用来上色，不是调味",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bfr-06",
      "nameEn": "onion, small dice",
      "nameZh": "洋葱，切小丁",
      "pinyin": "yáng cōng",
      "amountMetric": "80 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "bfr-07",
      "nameEn": "carrot, small dice",
      "nameZh": "胡萝卜，切小丁",
      "pinyin": "hú luó bo",
      "amountMetric": "60 g",
      "amountUS": "⅓ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "bfr-08",
      "nameEn": "large egg, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "50 g",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "bfr-09",
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
      "id": "bfr-10",
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
      "text": "Toss the beef with half the cornstarch, 1 tsp light soy sauce, the white pepper and 1 tbsp water. Work it in by hand for 30 seconds, then rest 15 minutes.",
      "textZh": "牛肉加一半淀粉、1茶匙生抽、白胡椒与1汤匙清水，用手抓打30秒，静置15分钟。",
      "zhHint": "牛肉上浆腌制",
      "stateNote": {
        "visual": "The meat has drunk all the liquid and looks matte rather than wet; a thin starchy film clings to each slice",
        "visualZh": "肉把水分全部吸收，呈哑光而非水亮；每片肉挂着一层薄浆",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "No liquid pools at the bottom of the bowl when you tilt it",
        "signalZh": "倾斜碗底没有积液"
      },
      "tip": "Add the water a tablespoon at a time and keep kneading. This is what keeps the beef juicy later.",
      "tipZh": "水要一汤匙一汤匙加，边加边抓。这是牛肉之后多汁的关键。"
    },
    {
      "text": "Heat 1 tbsp oil in a wok over high until shimmering. Add the beef in one layer, leave it 30 seconds, then toss 45 seconds more. Remove.",
      "textZh": "炒锅大火下1汤匙油至泛光，牛肉单层下锅静置30秒，再翻炒45秒，盛出。",
      "zhHint": "大火爆牛肉",
      "stateNote": {
        "visual": "Edges are browned and slightly crisp while the centres still show a little pink; the wok stays almost dry",
        "visualZh": "边缘焦褐微脆，中心仍带一点粉红；锅底几乎不出水",
        "timeRef": "75 seconds",
        "timeRefZh": "75 秒",
        "heat": "high",
        "signal": "A slice pressed with the spatula springs back instead of feeling hard",
        "signalZh": "锅铲轻压肉片会回弹，而不是发硬"
      }
    },
    {
      "text": "Add the beaten egg and scramble 20 seconds until barely set. Push to the side, add the onion and carrot, and stir-fry 90 seconds.",
      "textZh": "倒入蛋液炒20秒至半凝，拨到一边，下洋葱与胡萝卜丁炒90秒。",
      "zhHint": "炒蛋炒蔬菜",
      "stateNote": {
        "visual": "Onion dice are translucent at the edges and the carrot has darkened slightly; the egg is set into small pale curds",
        "visualZh": "洋葱丁边缘半透明，胡萝卜略深；蛋液凝固成浅色小块",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "The raw onion bite is gone and the pan smells sweet rather than sharp",
        "signalZh": "洋葱生辣味消失，锅里是甜味而非冲味"
      }
    },
    {
      "text": "Add the cold rice and press-and-fold for 2–3 minutes until every grain is separate and lightly toasted.",
      "textZh": "下冷饭，压散翻炒2–3分钟，至粒粒分明并微带焦香。",
      "zhHint": "炒散米饭",
      "stateNote": {
        "visual": "Grains look dry, matte and separate; a few at the bottom have turned pale gold",
        "visualZh": "米粒干爽哑光、粒粒分明；锅底几粒转成浅金",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "A faint popcorn smell appears and the rice moves freely under the spatula",
        "signalZh": "飘出淡淡爆米花香，锅铲推饭时毫无阻力"
      }
    },
    {
      "text": "Return the beef with any resting juices. Add oyster sauce and dark soy sauce around the wok edge and toss 45 seconds until the colour is even.",
      "textZh": "倒回牛肉与盘中肉汁，沿锅边淋蚝油与老抽，翻炒45秒至色泽均匀。",
      "zhHint": "回锅调味上色",
      "stateNote": {
        "visual": "Every grain carries an even glossy brown coat; beef pieces are visibly darker than the rice",
        "visualZh": "每粒米都裹上均匀油亮的褐色，牛肉块颜色明显比饭深",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "No pale white patches of rice remain, and the sauce smell is savoury rather than raw",
        "signalZh": "不再有白色生饭斑，酱料气味是醇鲜而非生味"
      }
    },
    {
      "text": "Turn off the heat, stir in the remaining cornstarch mixed with 1 tbsp water if you want a glossier coat, then scatter the scallion and toss twice.",
      "textZh": "关火。想要更亮的包浆，可淋入剩余淀粉加1汤匙水调的水淀粉，最后撒葱花翻两下。",
      "zhHint": "勾薄芡撒葱花",
      "stateNote": {
        "visual": "Rice is glossy brown with green scallion flecks and dark beef pieces distributed throughout",
        "visualZh": "米饭油亮褐色，点缀葱绿，深褐色牛肉块均匀分布",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "The wok bottom is clean when you scrape it with the spatula",
        "signalZh": "锅铲刮过锅底是干净的"
      }
    }
  ],
  "tips": [
    "Slice against the grain, and freeze the beef for 20 minutes first — a firm block gives you paper-thin slices.",
    "Sear the beef and take it out. It finishes cooking when you fold it back in at the end.",
    "Dark soy sauce is for colour only. Use light soy sauce if you need more salt."
  ],
  "tipsZh": [
    "逆纹切，并先冷冻20分钟——硬一点的肉块才切得出薄片。",
    "牛肉爆香后立刻盛出。最后回锅时它还会继续熟。",
    "老抽只管上色。要补咸味请加生抽。"
  ],
  "relatedSlugs": [
    "egg-fried-rice",
    "beef-and-broccoli"
  ],
  "image": "/images/recipes/beef-and-broccoli.webp"
};
