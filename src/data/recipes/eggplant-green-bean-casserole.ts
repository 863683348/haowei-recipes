import type { Recipe } from "@/lib/types";

/** Eggplant & Green Bean Casserole (茄子豆角煲) (茄子豆角煲) — Day batch */
export const eggplant_green_bean_casserole: Recipe = {
  "id": "eggplant-green-bean-casserole",
  "slug": "eggplant-green-bean-casserole",
  "titleEn": "Eggplant & Green Bean Casserole (茄子豆角煲)",
  "titleZh": "茄子豆角煲",
  "pinyin": "qié zi dòu jiǎo bāo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "家庭版——一锅炖，茄子软糯吸汁，豆角绵软入味。",
  "versionNoteZh": "家庭版——一锅炖，茄子软糯吸汁，豆角绵软入味。",
  "tags": [
    "comfort",
    "one-pot",
    "weeknight",
    "pork"
  ],
  "dietary": [
    "none"
  ],
  "story": "This one-pot casserole is a weekend staple in northern Chinese homes. Eggplant acts like a sponge, soaking up the savory soy-garlic braising liquid, while green beans soften into silky ribbons. The trick is salting the eggplant first to draw out moisture — without this step, the dish turns watery.",
  "storyZh": "这道一锅炖是北方家庭的周末常客。茄子像海绵一样吸满咸香的酱油蒜味汤汁，豆角炖成绵软的丝条。秘诀是先给茄子撒盐脱水——这步不做，菜就会出水。",
  "ingredients": [
    {
      "id": "egb-1",
      "nameEn": "Chinese eggplant (or round purple eggplant)",
      "nameZh": "茄子",
      "amountMetric": "2 medium (~600 g)",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "egb-2",
      "nameEn": "green beans (trimmed, broken into 5 cm lengths)",
      "nameZh": "豆角",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "egb-3",
      "nameEn": "pork belly, sliced thin (optional, for flavor)",
      "nameZh": "五花肉片",
      "amountMetric": "100 g",
      "amountUS": "about 3.5 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "egb-4",
      "nameEn": "garlic cloves, sliced",
      "nameZh": "大蒜",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "egb-5",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "egb-6",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "egb-7",
      "nameEn": "shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "egb-8",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "egb-9",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "egb-10",
      "nameEn": "water",
      "nameZh": "清水",
      "amountMetric": "200 ml",
      "amountUS": "about 3/4 cup",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut eggplant into 3 cm chunks. Sprinkle with 1/2 tsp salt, toss, and let sit 15 minutes. Rinse and squeeze dry — this removes bitterness and prevents oil splatter.",
      "textZh": "茄子切 3 厘米块，撒 1/2 茶匙盐拌匀，静置 15 分钟。冲洗后挤干水分——这一步去涩味、防炸锅。",
      "zhHint": "茄子撒盐脱水",
      "stateNote": {
        "visual": "Eggplant chunks release pale liquid; surface looks dull, not glossy",
        "visualZh": "茄子块渗出淡色液体；表面呈哑光，不反光",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Eggplant feels slightly soft when pressed"
      }
    },
    {
      "text": "Heat oil in a heavy pot or Dutch oven over medium-high. Add pork belly slices and fry until edges crisp and fat renders — about 3 minutes.",
      "textZh": "锅中放油，中大火加热。下五花肉片煎至边缘微焦、油脂析出——约 3 分钟。",
      "zhHint": "煎五花肉出油",
      "stateNote": {
        "visual": "Pork turns translucent gold; pan fills with rendered fat",
        "visualZh": "猪肉变金黄透明；锅裡充满析出的油脂",
        "heat": "medium-high",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Sizzle sound becomes gentler as moisture evaporates"
      }
    },
    {
      "text": "Add garlic, stir 10 seconds until fragrant. Add the drained eggplant and green beans. Toss to coat in oil.",
      "textZh": "下蒜片炒 10 秒出香。加入沥干的茄子和豆角，翻炒裹上油。",
      "zhHint": "爆香下主料",
      "stateNote": {
        "visual": "Garlic turns light golden at edges; eggplant begins to soften",
        "visualZh": "蒜片边缘微金黄；茄子开始变软",
        "heat": "medium",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Garlic aroma fills the kitchen"
      }
    },
    {
      "text": "Pour in soy sauces, Shaoxing, sugar, and water. Bring to a boil, then reduce to medium-low. Cover and simmer 12 minutes.",
      "textZh": "倒入生抽、老抽、料酒、糖和水。大火烧开后转中火，盖盖焖 12 分钟。",
      "zhHint": "调味焖煮",
      "stateNote": {
        "visual": "Sauce is bubbling gently under the lid; eggplant is collapsing",
        "visualZh": "锅盖下汤汁微沸；茄子已经塌软",
        "heat": "medium-low",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "Bean stems look dull and slightly shriveled"
      }
    },
    {
      "text": "Uncover and stir gently — eggplant should be melting and beans tender. If liquid is thin, simmer uncovered 3 more minutes to reduce.",
      "textZh": "开盖轻搅——茄子应已融化，豆角绵软。汤汁若太稀，敞开再煮 3 分钟收浓。",
      "zhHint": "收汁",
      "stateNote": {
        "visual": "Sauce coats the back of a spoon; eggplant breaks apart easily",
        "visualZh": "汤汁能挂勺；茄子轻轻一碰就散",
        "heat": "medium",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Bubbles are slow and thick, not rapid and thin"
      }
    },
    {
      "text": "Taste and adjust salt if needed. Serve immediately over steamed rice.",
      "textZh": "尝味，按需补盐。配白米饭上桌。",
      "zhHint": "尝味上桌",
      "stateNote": {
        "visual": "Dish looks glossy and deeply colored; steam rises",
        "visualZh": "菜品油亮深褐；热气升腾",
        "signal": "Ready when eggplant yields to gentle pressure"
      }
    }
  ],
  "tips": [
    "Salting the eggplant is non-negotiable — skip it and your casserole will be watery and bitter.",
    "Don't use wax eggplant (the shiny cylindrical type); Chinese eggplant (long, purplish, spongy) absorbs sauce best.",
    "This dish tastes even better the next day — the flavors continue to meld in the fridge."
  ],
  "tipsZh": [
    "茄子脱水这一步不能省——跳过这步，煲会出水发苦。",
    "别用蜡质长茄（那种圆柱形、表皮发亮的）；中国茄子（长条形、紫黑、海绵质感）最吸汁。",
    "这菜隔夜更入味——冰箱冷藏后风味继续融合。"
  ],
  "relatedSlugs": [
    "huangmen-chicken",
    "potato-beef-stew",
    "twice-cooked-pork",
    "egg-fried-rice"
  ],
  "image": "/images/recipes/potato-beef-stew.webp"
};
