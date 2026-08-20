import type { Recipe } from "@/lib/types";

/** Tomato Egg Noodles (番茄鸡蛋面) (番茄鸡蛋面) — Day batch */
export const tomato_egg_noodles: Recipe = {
  "id": "tomato-egg-noodles",
  "slug": "tomato-egg-noodles",
  "titleEn": "Tomato Egg Noodles (番茄鸡蛋面)",
  "titleZh": "番茄鸡蛋面",
  "pinyin": "fān qié jī dàn miàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Northern Chinese comfort food — sweet-tart tomato broth with silky egg ribbons over wheat noodles. The tomato must be peeled and broken down into a sauce.",
  "versionNoteZh": "北方家常 comfort food——酸甜番茄汤底配嫩滑蛋花，浇在小麦面上。番茄必须去皮并炒成酱。",
  "tags": [
    "comfort",
    "quick",
    "weeknight",
    "30-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the soup a Chinese mother makes when you are sick or tired. The tomatoes break down into a bright red broth, the eggs become silky ribbons, and the noodles soak up every drop. It is humble, fast, and deeply satisfying — the definition of Chinese comfort food.",
  "storyZh": "这是中国妈妈在你生病或疲惫时会做的汤面。番茄化入汤底，蛋液成丝，面条吸饱汤汁。朴素、快速、治愈——中国 comfort food 的定义。",
  "image": "/images/recipes/tomato-and-egg.webp",
  "ingredients": [
    {
      "id": "ten-01",
      "nameEn": "ripe tomatoes, peeled and diced",
      "nameZh": "熟番茄",
      "pinyin": "fān qié",
      "amountMetric": "2 large (about 350 g)",
      "amountUS": "2 large (about 12 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "",
      "note": "Choose tomatoes that are deeply red and soft to the touch — they break down into sauce easiest. Score an X on the bottom and blanch 30 seconds to peel.",
      "noteZh": "选深红软熟的番茄——最容易炒成酱。底部划十字，沸水焯30秒去皮。"
    },
    {
      "id": "ten-02",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "3 large",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "termKey": ""
    },
    {
      "id": "ten-03",
      "nameEn": "wheat noodles (fresh or dried)",
      "nameZh": "小麦面条",
      "pinyin": "xiǎo mài miàn",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "staple",
      "pantry": "local",
      "note": "Fresh egg noodles or Italian spaghetti both work. Ramen noodles are too chewy.",
      "noteZh": "鲜鸡蛋面或意大利细面均可。拉面太韧，不合适。"
    },
    {
      "id": "ten-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ten-05",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "ten-06",
      "nameEn": "sugar",
      "nameZh": "糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ten-07",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ten-08",
      "nameEn": "scallions, sliced",
      "nameZh": "葱花",
      "pinyin": "cōng huā",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ten-09",
      "nameEn": "water",
      "nameZh": "水",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Bring a large pot of water to boil for the noodles. Salt lightly.",
      "textZh": "大锅烧水下面条，加少许盐。",
      "zhHint": "烧水下面"
    },
    {
      "text": "Score an X on each tomato bottom. Blanch in boiling water for 30 seconds, then transfer to cold water. Peel off skins and dice into 2-cm chunks.",
      "textZh": "番茄底部划十字，沸水焯30秒，过凉水后去皮，切成2厘米块。",
      "zhHint": "去皮切块",
      "stateNote": {
        "visual": "Skin begins to curl and separate from the flesh at the X cuts",
        "visualZh": "皮在十字切口处开始卷边与果肉分离",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Skin slips off easily with fingers",
        "signalZh": "皮能轻松剥下"
      }
    },
    {
      "text": "Whisk eggs with a pinch of salt until uniform. Heat ½ tbsp oil in a pan over medium-high. Pour in eggs and let set 10 seconds, then scramble into large curds. Remove and set aside.",
      "textZh": "鸡蛋加少许盐打散。中大火热锅半汤匙油，倒入蛋液静置10秒，再炒成大块盛出。",
      "zhHint": "炒蛋盛出",
      "stateNote": {
        "visual": "Eggs form fluffy golden curds, slightly underdone in center",
        "visualZh": "蛋块金黄蓬松，中心略湿",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "Eggs release from pan easily, still glossy",
        "signalZh": "蛋块离锅轻松，表面油亮"
      }
    },
    {
      "text": "Add remaining oil. Add tomato chunks and a pinch of salt. Cook over medium-high, pressing tomatoes against the pan, until they break down into a thick sauce (about 4 minutes).",
      "textZh": "加余下油，下番茄块和少许盐。中大火翻炒并用锅铲压碎番茄，炒至浓酱状（约4分钟）。",
      "zhHint": "炒番茄成酱",
      "stateNote": {
        "visual": "Tomatoes have collapsed into a thick, saucy jam; oil separates at the edges",
        "visualZh": "番茄已化为浓稠果酱状，锅边析出红油",
        "heat": "medium-high",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "Sauce is thick and coats the spoon; no watery liquid remains",
        "signalZh": "酱汁浓稠挂勺，无多余水分"
      }
    },
    {
      "text": "Pour in water. Add soy sauce and sugar. Bring to a boil, then add noodles and cook 2 minutes so the noodles absorb the tomato broth.",
      "textZh": "倒入水，加生抽和糖，烧开，下面条煮2分钟让面条吸汤。",
      "zhHint": "煮面入味"
    },
    {
      "text": "Return scrambled eggs. Toss gently 30 seconds. Drizzle sesame oil, top with scallions, and serve.",
      "textZh": "倒回炒蛋，轻翻30秒。淋香油，撒葱花，上桌。",
      "zhHint": "回蛋出锅",
      "stateNote": {
        "visual": "Broth is bright red-orange and glossy; eggs are heated through",
        "visualZh": "汤色鲜红橙亮，蛋块热透",
        "signal": "Tomato-egg aroma, sweet and savory",
        "signalZh": "番茄鸡蛋香气，酸甜鲜美"
      }
    }
  ],
  "tips": [
    "The tomato must be fully broken down — no chunks of skin or firm flesh should remain.",
    "A pinch of salt on the tomatoes helps them release juice faster.",
    "Cook the eggs until just set — they finish cooking in the broth later."
  ],
  "tipsZh": [
    "番茄必须完全炒化成酱——不能有皮或硬块残留。",
    "加一点盐能让番茄更快出汁。",
    "蛋只需炒到刚凝就盛出——后面在汤里还会继续熟。"
  ],
  "relatedSlugs": [
    "tomato-eggs",
    "egg-fried-rice",
    "scallion-noodles"
  ]
};
