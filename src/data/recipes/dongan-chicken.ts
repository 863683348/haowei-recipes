import type { Recipe } from "@/lib/types";

/** Dong'an Chicken | Hunan Dong An Zi Ji, Vinegar-Spiced Poached Chicken (东安子鸡) — Day batch */
export const dongan_chicken: Recipe = {
  "id": "dongan-chicken",
  "slug": "dongan-chicken",
  "titleEn": "Dong'an Chicken | Hunan Dong An Zi Ji, Vinegar-Spiced Poached Chicken",
  "titleZh": "东安子鸡",
  "pinyin": "dōng ān zǐ jī",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan",
  "regionZh": "湖南",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version uses a whole young chicken cut into pieces; banquet versions use only the leg and serve it on a bed of raw chili threads.",
  "versionNoteZh": "家庭版用整只仔鸡斩块；宴席版只取鸡腿，并配生辣椒丝垫底。",
  "tags": [
    "hunan",
    "sour-spicy",
    "poached",
    "one-pot",
    "classic"
  ],
  "dietary": [
    "none"
  ],
  "story": "Dong'an chicken is one of the eight classic Hunan dishes, named after Dong'an county in Yongzhou. What makes it unusual is the rice vinegar: instead of the heavy soy-braised profile people expect from Chinese chicken, you get a bright, sour, gently spicy finish that cuts through summer heat.",
  "storyZh": "东安子鸡是湘菜八大经典之一，得名于永州东安县。特别之处在米醋——不是常见的酱烧路子，而是酸辣清爽、开胃解暑。",
  "ingredients": [
    {
      "id": "da-01",
      "nameEn": "young chicken, cut into pieces",
      "nameZh": "仔鸡块",
      "amountMetric": "900 g",
      "amountUS": "2 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "da-02",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "da-03",
      "nameEn": "fresh red chili, slivered",
      "nameZh": "鲜红椒丝",
      "amountMetric": "2 pieces",
      "amountUS": "2 pieces",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "da-04",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "4 pieces",
      "amountUS": "4 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "da-05",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "25 g",
      "amountUS": "1 knob",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "da-06",
      "nameEn": "scallion",
      "nameZh": "葱",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "da-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "da-08",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "da-09",
      "nameEn": "cornstarch slurry",
      "nameZh": "水淀粉",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "other",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "da-10",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Cover the chicken pieces with cold water, add half the ginger and one scallion, and bring to a boil. Skim off the grey foam.",
      "textZh": "鸡块冷水下锅，加一半姜和一根葱，煮开后撇去灰色浮沫。",
      "stateNote": {
        "visual": "Grey-brown foam gathers at the edge of the pot and the broth underneath turns clear.",
        "visualZh": "锅边聚起灰褐浮沫，撇净后汤色转清。",
        "signal": "Broth is clear once the foam is removed",
        "signalZh": "浮沫撇净、汤变清",
        "timeRef": "about 8 minutes",
        "timeRefZh": "约 8 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Lower the heat and simmer until a chopstick slides into the thickest piece with only slight resistance, then lift the chicken out and reserve 250 ml of the broth.",
      "textZh": "转小火煮至筷子能插入最厚处、略有阻力，捞出鸡块，留 250 毫升原汤。",
      "stateNote": {
        "visual": "The meat near the bone is uniformly opaque with no pink; the skin has shrunk slightly.",
        "visualZh": "贴近骨头处全部变白无血色，鸡皮略收缩。",
        "signal": "Chopstick goes in with slight resistance, juices run clear",
        "signalZh": "筷子可插入略阻，无血水",
        "timeRef": "15-18 minutes",
        "timeRefZh": "15-18 分钟",
        "heat": "medium-low"
      }
    },
    {
      "text": "Heat 2 tbsp oil in a wok over medium-high heat and stir-fry the remaining ginger, scallion whites and dried chilies until fragrant.",
      "textZh": "炒锅加 2 汤匙油，中大火爆香余下的姜、葱白和干辣椒。",
      "stateNote": {
        "visual": "The chilies darken to a deep glossy red and the kitchen fills with a toasted aroma.",
        "visualZh": "干辣椒转为深红发亮，香味扑鼻。",
        "signal": "Fragrance releases and the chilies look glossy, not black",
        "signalZh": "香气逸出、辣椒发亮而未焦黑",
        "timeRef": "30-45 seconds",
        "timeRefZh": "30-45 秒",
        "heat": "medium-high"
      },
      "tip": "Pull the chilies out the moment they shine — burnt chilies turn bitter."
    },
    {
      "text": "Return the chicken to the wok, splash in the Shaoxing wine around the edge, then add the soy sauce and the reserved broth.",
      "textZh": "鸡块回锅，沿锅边淋料酒，加生抽和预留原汤。",
      "stateNote": {
        "visual": "The wine hisses and steams off the hot wok wall within seconds.",
        "visualZh": "料酒遇热锅壁嘶响、瞬间冒汽。",
        "signal": "Sharp alcohol smell gives way to a rounded savory aroma",
        "signalZh": "刺鼻酒味转为醇香",
        "timeRef": "1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Simmer for 6 minutes so the chicken absorbs the broth, then add the fresh chili slivers and cook 1 minute more.",
      "textZh": "小火焖 6 分钟让鸡块吸味，再下鲜红椒丝续煮 1 分钟。",
      "stateNote": {
        "visual": "The broth reduces by about a third and clings to the chicken; the chili slivers soften but stay bright red.",
        "visualZh": "汤汁收去三分之一并挂上鸡块；椒丝变软但仍鲜红。",
        "signal": "Sauce coats the back of a spoon",
        "signalZh": "汤汁能挂住勺背",
        "timeRef": "6-7 minutes",
        "timeRefZh": "6-7 分钟",
        "heat": "medium-low"
      }
    },
    {
      "text": "Pour in the rice vinegar, stir in the cornstarch slurry, and cook until the sauce thickens and glosses. Finish with sesame oil and the scallion greens.",
      "textZh": "倒入米醋，加水淀粉勾芡，煮至汤汁浓稠发亮，最后淋香油、撒葱花。",
      "stateNote": {
        "visual": "The sauce turns translucent and glossy, and a spoon drawn across the pan leaves a path that slowly fills in.",
        "visualZh": "汤汁透亮挂糊，勺子划过锅底留下慢慢合拢的痕迹。",
        "signal": "Sauce coats the chicken and the vinegar smell is bright, not sharp",
        "signalZh": "汤汁裹住鸡块，醋香清爽不刺鼻",
        "timeRef": "1-2 minutes",
        "timeRefZh": "1-2 分钟",
        "heat": "medium"
      },
      "tip": "Add the vinegar at the end off high heat so the sour note stays fresh instead of cooking away."
    }
  ],
  "tips": [
    "Do not skip the rice vinegar — it is the defining note of this dish, not a garnish.",
    "A young chicken (under 1.5 kg) stays tender; a large stewing hen needs far longer.",
    "Leftovers taste even better the next day as the sourness penetrates the meat."
  ],
  "tipsZh": [
    "米醋不能省——这是本菜的灵魂，不是点缀。",
    "选 1.5 公斤以下的仔鸡才嫩；老母鸡要炖很久。",
    "隔夜再吃更入味，酸味会渗进肉里。"
  ],
  "relatedSlugs": [
    "hunan-sliced-beef-stir-fry",
    "chilli-pork",
    "lazi-diced-chicken",
    "duojiao-fish-head"
  ],
  "image": "/images/recipes/hand-torn-chicken.webp"
};
