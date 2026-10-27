import type { Recipe } from "@/lib/types";

/** Pork Ribs Stewed with Green Beans (Pai Gu Dun Dou Jiao) (排骨炖豆角) — Day batch */
export const pork_ribs_green_bean_stew: Recipe = {
  "id": "pai-gu-dun-dou-jiao",
  "slug": "pork-ribs-green-bean-stew",
  "titleEn": "Pork Ribs Stewed with Green Beans (Pai Gu Dun Dou Jiao)",
  "titleZh": "排骨炖豆角",
  "pinyin": "pái gǔ dùn dòu jiǎo",
  "cuisine": "东北菜",
  "cuisineEn": "Northeast Chinese",
  "region": "Jilin",
  "regionZh": "吉林",
  "difficulty": "easy",
  "timeMin": 60,
  "servings": 4,
  "version": "family",
  "versionNote": "The family version adds potato to stretch the ribs and soak up the sauce, and simmers in a covered pot. The traditional Northeast version uses only ribs and long beans with a longer, drier braise, finishing almost like a dry-pot dish with no thickening.",
  "versionNoteZh": "家庭版加土豆来撑量并吸味，全程加盖焖炖。东北传统做法只用排骨和长豆角，炖得更久更干，收汁近乎干锅，不勾芡。",
  "tags": [
    "one-pot",
    "pork",
    "stew",
    "family-dinner"
  ],
  "dietary": [
    "none"
  ],
  "story": "Green beans and ribs were the August pair in my aunt's village outside Changchun — both peaked in the same two weeks. She never measured the soy sauce, just poured until the pot looked right, and said the beans should taste like they had been waiting all year for the ribs.",
  "storyZh": "在长春郊外的姨妈村里，豆角和排骨是八月的固定搭档——两者的最佳期就重合那两周。她从不下量酱油，只凭锅里的颜色倒，她说豆角该炖出「等了整整一年才等到排骨」的味道。",
  "ingredients": [
    {
      "id": "pg-01",
      "nameEn": "pork spare ribs",
      "nameZh": "猪排骨",
      "amountMetric": "700 g",
      "amountUS": "1.5 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs",
      "note": "Ask for ribs cut into 4 cm pieces; small ribs cook faster and more evenly."
    },
    {
      "id": "pg-02",
      "nameEn": "green beans",
      "nameZh": "豆角（四季豆）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "produce",
      "pantry": "local",
      "note": "Use flat long beans if you can find them. Snap off ends and break into 5 cm lengths."
    },
    {
      "id": "pg-03",
      "nameEn": "potato",
      "nameZh": "土豆",
      "amountMetric": "300 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "note": "Waxy potatoes keep their shape; floury ones thicken the sauce."
    },
    {
      "id": "pg-04",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "20 g",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pg-05",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "20 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "pg-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pg-07",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "pg-08",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 g",
      "amountUS": "1 pod",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "pg-09",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "amountMetric": "15 g",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "pg-10",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    }
  ],
  "steps": [
    {
      "text": "Put ribs in a pot of cold water, bring to a boil, and cook 3 minutes. Skim the scum, drain, and rinse each piece under running water.",
      "textZh": "排骨冷水下锅，大火煮3分钟。撇净浮沫，捞出后用流水逐块冲洗。",
      "zhHint": "排骨冷水焯水3分钟",
      "stateNote": {
        "visual": "Grey-brown foam floats on the surface; ribs look clean with no clinging bits",
        "visualZh": "水面浮起灰褐色浮沫；排骨表面干净无杂质附着",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Water smells porky rather than fresh; no new foam forms after skimming"
      },
      "tip": "Skipping this step leaves a grey, muddy-tasting sauce."
    },
    {
      "text": "Heat oil in a heavy pot over medium-high heat. Brown the ribs on two sides for 5 minutes until light golden.",
      "textZh": "厚底锅放油中大火，将排骨两面煎5分钟至微微金黄。",
      "zhHint": "排骨煎至两面金黄",
      "stateNote": {
        "visual": "Rib surfaces turn pale gold with caramelised spots where they touched the pot",
        "visualZh": "排骨表面呈淡金，贴锅处出现焦糖色斑点",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "A nutty roasted smell rises and the ribs release easily from the pot base"
      }
    },
    {
      "text": "Add ginger, garlic and star anise, stir for 30 seconds, then add light and dark soy sauce and toss to coat.",
      "textZh": "下姜蒜八角炒30秒，加入生抽和老抽翻炒上色。",
      "zhHint": "加双酱油翻炒上色",
      "stateNote": {
        "visual": "Ribs take on an even reddish-brown sheen; spices are glossy with oil",
        "visualZh": "排骨均匀裹上红褐色酱色，香料被油润亮",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Sauce clings to the ribs rather than running off"
      }
    },
    {
      "text": "Add hot water to just cover the ribs. Bring to a boil, then cover and simmer 25 minutes.",
      "textZh": "加入热水刚好没过排骨。大火烧开后加盖，小火炖25分钟。",
      "zhHint": "加热水没过排骨焖25分钟",
      "stateNote": {
        "visual": "Broth is clear reddish-brown; meat has started to pull back from the bone ends",
        "visualZh": "汤色清亮红褐，肉开始从骨头末端回缩",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "low",
        "signal": "Barely any bubbling under the lid; a chopstick meets slight resistance in the meat"
      }
    },
    {
      "text": "Add potato wedges and green beans. Cover and simmer 15 more minutes until the beans wrinkle and lose their raw snap and the potato is tender.",
      "textZh": "加入土豆块和豆角，加盖再炖15分钟，至豆角起皱、生味尽失，土豆变软。",
      "zhHint": "下土豆豆角再炖15分钟",
      "stateNote": {
        "visual": "Green beans shift from bright green to olive and their skins wrinkle; potato edges soften",
        "visualZh": "豆角由鲜绿转为橄榄绿、表皮起皱；土豆边缘变得软糯",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "A bean bends fully without snapping; a fork slides through a potato wedge"
      },
      "tip": "Beans must be fully cooked — undercooked kidney-type beans are not safe to eat."
    },
    {
      "text": "Uncover, raise the heat, and drizzle in the cornstarch slurry while shaking the pot. Cook 1 minute until the sauce thickens and clings. Scatter scallion and serve.",
      "textZh": "开盖转大火，边晃锅边淋入水淀粉，煮1分钟至汤汁浓稠挂勺。撒葱花出锅。",
      "zhHint": "开盖大火收汁勾芡",
      "stateNote": {
        "visual": "Sauce turns glossy and coats the ribs and beans; little liquid remains at the bottom",
        "visualZh": "汤汁油亮，均匀挂在排骨和豆角上，锅底几无余汤",
        "timeRef": "1-2 minutes",
        "timeRefZh": "1-2 分钟",
        "heat": "high",
        "signal": "A spoon drawn across the pot base leaves a trail that slowly fills in"
      }
    }
  ],
  "tips": [
    "Blanch the ribs first for a clean, clear-tasting sauce.",
    "Cook the beans until fully wrinkled; undercooked beans are unpleasant and unsafe.",
    "Use flat long beans rather than round string beans for the authentic texture."
  ],
  "tipsZh": [
    "排骨先焯水，汤汁才清亮不腥。",
    "豆角一定要炖到起皱熟透，半生既难吃也不安全。",
    "用扁长的东北豆角，口感比圆四季豆更正。"
  ],
  "relatedSlugs": [
    "potato-stewed-green-beans",
    "potato-pork-rib-stew",
    "dry-fried-long-beans"
  ],
  "image": "/images/recipes/potato-stewed-green-beans.webp"
};
