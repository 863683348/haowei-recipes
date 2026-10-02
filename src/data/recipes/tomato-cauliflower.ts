import type { Recipe } from "@/lib/types";

/** Tomato Cauliflower (番茄菜花) (番茄菜花) — Day batch */
export const tomato_cauliflower: Recipe = {
  "id": "fan-qie-cai-hua",
  "slug": "tomato-cauliflower",
  "titleEn": "Tomato Cauliflower (番茄菜花)",
  "titleZh": "番茄菜花",
  "pinyin": "fān qié cài huā",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurant versions deep-fry the cauliflower first for a nutty edge; the family version blanches and then pan-sears, which gets you 80% of the browning with a fraction of the oil.",
  "versionNoteZh": "餐厅版会先把菜花过油求焦香；家庭版先焯后煎，用极少的油达到八成上色效果。",
  "tags": [
    "25-min",
    "vegetarian",
    "vegan",
    "cauliflower",
    "tomato",
    "low-oil"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "Cauliflower soaks up sauce better than almost any vegetable, which is why this tomato version turns a plain weeknight plate into something you want to eat with a spoon of rice. My mother added it to the rotation when the doctor said 'more vegetables' and nobody complained.",
  "storyZh": "菜花吸汁能力数一数二，所以番茄版能把一盘寡淡的工作日菜变成想配饭的菜。医生说「多吃蔬菜」后我妈把它加进轮换菜单，没人抱怨过。",
  "ingredients": [
    {
      "id": "ing-cauli",
      "nameEn": "cauliflower, cut in small florets",
      "nameZh": "菜花（切小朵）",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ing-tomato",
      "nameEn": "ripe tomatoes, diced",
      "nameZh": "成熟番茄（切丁）",
      "amountMetric": "3 medium (400 g)",
      "amountUS": "3 medium (14 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "ing-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜（切末）",
      "amountMetric": "12 g",
      "amountUS": "2-3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ing-scallion",
      "nameEn": "scallion, sliced",
      "nameZh": "葱（切片）",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ing-lss",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ing-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ing-cornstarch",
      "nameEn": "cornstarch slurry",
      "nameZh": "水淀粉",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    }
  ],
  "steps": [
    {
      "text": "Bring a pot of salted water to a boil and blanch the cauliflower for 90 seconds. Drain well and pat dry.",
      "textZh": "盐水烧开，菜花焯 90 秒。沥干并擦干表面水分。",
      "stateNote": {
        "visual": "Florets turn a brighter white and the stem is slightly translucent.",
        "visualZh": "菜花颜色更白亮，梗部略呈半透明。",
        "signal": "A knife tip enters the stem with a little resistance.",
        "signalZh": "刀尖插入菜梗略有阻力。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high"
      },
      "tip": "Dry florets brown; wet florets steam. Do not skip the pat-down.",
      "tipZh": "干的菜花才会上色，湿的只会蒸熟。擦干这步别省。"
    },
    {
      "text": "Heat 1.5 tbsp oil over medium-high. Add the cauliflower in a single layer and sear 4 minutes, turning once, until golden patches appear.",
      "textZh": "中大火热 1.5 汤匙油，菜花平铺入锅煎 4 分钟，翻面一次，至出现金黄斑点。",
      "stateNote": {
        "visual": "Flat faces of the florets show toasted brown spots.",
        "visualZh": "菜花平整面上出现焦褐斑点。",
        "signal": "It smells nutty and toasted rather than raw and grassy.",
        "signalZh": "香气是坚果焦香，而不是生青味。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Push the cauliflower up one side, add garlic and scallion to the oil, and fry 20 seconds until fragrant.",
      "textZh": "菜花拨到一侧，蒜末葱片下到油里，炒 20 秒至出香。",
      "stateNote": {
        "visual": "Garlic edges turn pale gold, not brown.",
        "visualZh": "蒜末边缘呈浅金色，还没发褐。",
        "signal": "The sharp raw garlic smell turns sweet within seconds.",
        "signalZh": "生蒜的辛辣味几秒内转为甜香。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "medium"
      }
    },
    {
      "text": "Add tomato and sugar. Stir-fry 4 minutes until the tomato breaks down and coats the florets in red sauce.",
      "textZh": "下番茄丁和糖，翻炒 4 分钟至番茄化开、红汁裹住菜花。",
      "stateNote": {
        "visual": "White florets are streaked orange-red and the pan is nearly dry of liquid.",
        "visualZh": "白色菜花被橙红酱汁染上条纹，锅内几乎没有余汁。",
        "signal": "Sauce clings to the florets instead of running off.",
        "signalZh": "酱汁挂在菜花上而不是流走。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Season with light soy sauce, add the slurry, and toss 30 seconds until glossy. Serve hot.",
      "textZh": "加生抽调味，淋水淀粉，翻匀 30 秒至油亮出锅。",
      "stateNote": {
        "visual": "A thin glossy film covers each floret.",
        "visualZh": "每朵菜花表面覆一层薄亮芡汁。",
        "signal": "The sauce no longer slides off when the pan is tilted.",
        "signalZh": "倾斜锅时酱汁不再流走。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium"
      }
    }
  ],
  "tips": [
    "Cut florets small and even — they cook through before the outside overcooks.",
    "Skip the blanching only if you are willing to pan-roast longer over lower heat.",
    "For a heartier version, add scrambled egg with the tomato."
  ],
  "tipsZh": [
    "菜花切小且大小均匀——内部熟透时外部也不会过火。",
    "可以跳过焯水，但要用小火多煎一会儿。",
    "想更顶饱，可在下番茄时加炒蛋。"
  ],
  "relatedSlugs": [
    "dry-pot-cauliflower",
    "tomato-tofu",
    "home-style-tofu",
    "moo-shu-tofu"
  ],
  "image": "/images/recipes/dry-pot-cauliflower.webp"
};
