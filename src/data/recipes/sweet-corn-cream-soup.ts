import type { Recipe } from "@/lib/types";

/** Creamy Sweet Corn Soup with Egg Ribbons (粟米羹) — Day batch */
export const sweet_corn_cream_soup: Recipe = {
  "id": "sweet-corn-cream-soup",
  "slug": "sweet-corn-cream-soup",
  "titleEn": "Creamy Sweet Corn Soup with Egg Ribbons",
  "titleZh": "粟米羹",
  "pinyin": "sù mǐ gēng",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version relies on blended corn for natural sweetness and body; restaurant versions add evaporated milk or creamed corn from a can and thicken heavier with cornstarch.",
  "versionNoteZh": "家常版靠打碎的玉米出自然甜味与稠度；餐厅版会加淡奶或罐装奶油玉米，并用更多玉米淀粉增稠。",
  "tags": [
    "25-min",
    "soup",
    "kid-friendly",
    "beginner",
    "weeknight"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This is the soup that arrives first at almost every Cantonese banquet, before the chicken and the fish. My mother made a quicker weeknight version with frozen corn, and my brother and I used to race to see who could slurp the longest egg ribbon without breaking it.",
  "storyZh": "几乎每一桌粤式宴席，这道羹都先于鸡和鱼上桌。我妈用冷冻玉米做过快手版，我和弟弟比赛谁能把最长的蛋丝吸进嘴里而不断。",
  "ingredients": [
    {
      "id": "sc-01",
      "nameEn": "corn kernels (fresh or frozen)",
      "nameZh": "玉米粒（新鲜或冷冻）",
      "pinyin": "yù mǐ lì",
      "amountMetric": "400 g",
      "amountUS": "2½ cups",
      "category": "produce",
      "pantry": "local",
      "note": "Frozen sweet corn works year-round and is already blanched",
      "noteZh": "冷冻甜玉米四季可用，且已焯过水"
    },
    {
      "id": "sc-02",
      "nameEn": "large eggs, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "2 large (100 g)",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sc-03",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch",
      "note": "Mix with equal parts cold water before adding, or it will clump",
      "noteZh": "先用等量冷水调开再下锅，否则会结块"
    },
    {
      "id": "sc-04",
      "nameEn": "low-sodium chicken or vegetable stock",
      "nameZh": "低盐鸡高汤或蔬菜高汤",
      "pinyin": "gāo tāng",
      "amountMetric": "900 ml",
      "amountUS": "3¾ cups",
      "category": "other",
      "pantry": "local",
      "note": "Use vegetable stock to keep it vegetarian",
      "noteZh": "用蔬菜高汤即为素食版"
    },
    {
      "id": "sc-05",
      "nameEn": "fresh ginger, finely grated",
      "nameZh": "鲜姜末",
      "pinyin": "jiāng mò",
      "amountMetric": "8 g",
      "amountUS": "1 tsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sc-06",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切细",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sc-07",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "sc-08",
      "nameEn": "toasted sesame oil",
      "nameZh": "芝麻香油",
      "pinyin": "zhī má xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Reserve 100 g (⅔ cup) whole corn kernels. Blend the remaining 300 g with 200 ml of the stock until completely smooth.",
      "textZh": "留100克整粒玉米，其余300克加200毫升高汤打成完全细腻的玉米糊。",
      "zhHint": "留整粒增口感",
      "stateNote": {
        "visual": "Blended corn is pale yellow and pourable, with no visible kernel pieces",
        "visualZh": "玉米糊呈淡黄色可流动状，看不到颗粒",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium",
        "signal": "Mixture runs off a spoon in a smooth ribbon",
        "signalZh": "混合物从勺上流下呈顺滑带状"
      }
    },
    {
      "text": "Bring the blended corn and remaining 700 ml stock to a gentle boil with the grated ginger. Lower heat to medium-low.",
      "textZh": "玉米糊与剩余700毫升高汤、姜末一同烧至微沸，转中小火。",
      "zhHint": "姜末同煮去腥",
      "stateNote": {
        "visual": "Surface shows small bubbles around the edge; soup is thin and milky yellow",
        "visualZh": "锅边冒小泡，汤体稀薄呈奶黄色",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "heat": "medium",
        "signal": "Steam smells sweet and clean, no raw corn starchiness",
        "signalZh": "蒸汽闻起来清甜，无生玉米的生粉味"
      }
    },
    {
      "text": "Stir in the reserved whole kernels and simmer 5 minutes so they plump and stay distinct in the soup.",
      "textZh": "下预留的整粒玉米，小火煮5分钟，让颗粒饱满并与汤体分明。",
      "zhHint": "整粒后下保口感",
      "stateNote": {
        "visual": "Kernels look glossy and swollen, suspended in the pale broth",
        "visualZh": "玉米粒饱满发亮，悬浮在淡色汤中",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "A kernel bursts easily between tongue and palate but is not mealy",
        "signalZh": "玉米粒用舌轻压即破，但不粉不柴"
      }
    },
    {
      "text": "Stir the cornstarch slurry again, then pour it in slowly while stirring in one direction. Simmer 1–2 minutes until the soup thickens enough to coat a spoon.",
      "textZh": "再次搅匀淀粉水，边缓慢倒入边同方向搅拌，小火煮1–2分钟至汤能挂勺。",
      "zhHint": "淀粉水同方向搅",
      "stateNote": {
        "visual": "Soup turns glossy and leaves a thin film on the back of a spoon",
        "visualZh": "汤体变亮，能在勺背留下薄薄一层",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium-low",
        "signal": "Bubbles break slowly and the surface no longer looks watery",
        "signalZh": "气泡破裂变慢，表面不再水汪汪"
      }
    },
    {
      "text": "Turn the heat to low. Drizzle beaten egg in a thin stream from a height of about 20 cm while gently stirring, then stop and let it set 20 seconds.",
      "textZh": "转小火。蛋液从约20厘米高处细流淋入并轻搅，随后停手静置20秒。",
      "zhHint": "高处细流淋蛋",
      "stateNote": {
        "visual": "Egg forms pale gold ribbons and flakes floating through the soup",
        "visualZh": "蛋液化成淡金色细丝与絮片，漂在汤中",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "Ribbons look silky and separate, not scrambled into tiny bits",
        "signalZh": "蛋丝柔滑成条，未被搅成碎絮"
      }
    },
    {
      "text": "Season with white pepper and salt. Finish with sesame oil and scallion, and serve hot.",
      "textZh": "以白胡椒粉和盐调味，淋芝麻油、撒葱花，趁热上桌。",
      "zhHint": "出锅前淋香油",
      "stateNote": {
        "visual": "Golden soup with white corn, yellow egg ribbons and green scallion on top",
        "visualZh": "金色汤中可见白色玉米、黄色蛋丝，表面浮绿色葱花",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Aroma is sweet corn with a nutty sesame top note",
        "signalZh": "香气为甜玉米带芝麻坚果尾韵"
      }
    }
  ],
  "tips": [
    "Do not boil after adding the egg, or the ribbons will toughen and turn frothy.",
    "Swap half the stock for unsweetened soy or oat milk for a creamier, vegan-friendly body.",
    "Leftovers thicken in the fridge — loosen with a splash of hot stock when reheating."
  ],
  "tipsZh": [
    "加蛋后不要大滚，否则蛋丝变老并起泡沫。",
    "把一半高汤换成无糖豆奶或燕麦奶，口感更醇厚且适合纯素。",
    "冷藏后会变稠，回热时兑一点热高汤调开即可。"
  ],
  "relatedSlugs": [
    "egg-drop-soup",
    "tomato-egg-drop-soup"
  ],
  "image": "/images/recipes/sweet-corn-pork-bone-soup.webp"
};
