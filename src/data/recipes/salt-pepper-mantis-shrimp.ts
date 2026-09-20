import type { Recipe } from "@/lib/types";

/** Salt and Pepper Mantis Shrimp (椒盐皮皮虾) — Day 137 贝壳鲜味 */
export const salt_pepper_mantis_shrimp: Recipe = {
  "id": "salt-pepper-mantis-shrimp",
  "slug": "salt-pepper-mantis-shrimp",
  "titleEn": "Salt and Pepper Mantis Shrimp",
  "titleZh": "椒盐皮皮虾",
  "pinyin": "jiāo yán pí pí xiā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Double-fried mantis shrimp with salt and pepper—a festive dish that's worth the effort.",
  "versionNoteZh": "椒盐皮皮虾——节日必备的功夫菜。",
  "tags": [
    "30-min",
    "seafood",
    "cantonese",
    "festive"
  ],
  "dietary": [],
  "story": "Mantis shrimp is a seasonal delicacy in Southern China. The double-frying technique creates an incredibly crispy shell that cracks open to reveal sweet, succulent meat.",
  "storyZh": "皮皮虾是中国南方的时令美味。双重油炸 create 极脆的外壳， cracking 开后是甜美多汁的肉质。",
  "image": "/images/recipes/salt-pepper-mantis-shrimp.webp",
  "relatedSlugs": [
    "spicy-crayfish",
    "garlic-vermicelli-steamed-scallops",
    "white-boiled-shrimp"
  ],
  "ingredients": [
    {
      "id": "sp-shrimp-01",
      "nameEn": "fresh mantis shrimp",
      "nameZh": "鲜皮皮虾",
      "pinyin": "pí pí xiā",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Ask fishmonger to clean; remove the saddle on the head",
      "noteZh": "请鱼贩清理；去掉头部的马鞍"
    },
    {
      "id": "sp-corn-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "sp-egg-03",
      "nameEn": "egg, beaten",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "1",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sp-garlic-04",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sp-chili-05",
      "nameEn": "dried red chilies, whole",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "6 whole",
      "amountUS": "6 whole",
      "category": "spice",
      "pantry": "local",
      "termKey": "chili-flakes"
    },
    {
      "id": "sp-salt-06",
      "nameEn": "salt",
      "nameZh": "盐",
      "pinyin": "yán",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "sp-pepper-07",
      "nameEn": "Sichuan peppercorn, ground",
      "nameZh": "花椒粉",
      "pinyin": "huā jiāo fěn",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "sp-oil-08",
      "nameEn": "vegetable oil for deep frying",
      "nameZh": "炸油",
      "pinyin": "zhá yóu",
      "amountMetric": "1 liter",
      "amountUS": "about 4 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Clean mantis shrimp: remove the saddle on the head, pull out the digestive tract from the tail. Rinse well and pat dry.",
      "textZh": "清理皮皮虾：去掉头部马鞍，从尾部拉出沙线。冲洗干净，吸干水分。",
      "zhHint": "一定要吸干"
    },
    {
      "text": "Coat shrimp in cornstarch, then dip in beaten egg, letting excess drip off.",
      "textZh": "皮皮虾裹玉米淀粉，再蘸打散的鸡蛋，沥掉多余蛋液。",
      "zhHint": "均匀裹浆"
    },
    {
      "text": "Heat oil to 170°C. Fry shrimp in batches for 2 minutes until lightly golden. Remove and drain.",
      "textZh": "油温170°C，分批炸2分钟至浅金黄色。捞出沥油。",
      "zhHint": "不要 overcrowd 锅",
      "stateNote": {
        "visual": "Shrimp turn light golden",
        "visualZh": "皮皮虾变浅金黄色",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Oil bubbles vigorously around shrimp",
        "signalZh": "油剧烈冒泡"
      }
    },
    {
      "text": "Increase oil to 190°C. Return all shrimp and fry for 1-2 minutes until deeply golden and crispy.",
      "textZh": "油温升至190°C，全部回锅复炸1-2分钟至深金黄酥脆。",
      "zhHint": "复炸是关键",
      "stateNote": {
        "visual": "Shell is deep golden and crackling",
        "visualZh": "外壳深金黄，噼啪作响",
        "timeRef": "1-2 minutes",
        "timeRefZh": "1-2 分钟",
        "heat": "high",
        "signal": "Shell sounds hollow when tapped",
        "signalZh": "轻敲壳发出空心声"
      }
    },
    {
      "text": "Heat 2 tbsp oil in a clean wok. Sauté garlic, chilies, and Sichuan peppercorn for 15 seconds.",
      "textZh": "干净 wok 中火加热2汤匙油，爆香蒜末、干辣椒、花椒粉15秒。",
      "zhHint": "快炒不焦"
    },
    {
      "text": "Add fried shrimp and toss to coat with the seasoning. Sprinkle with salt and serve immediately.",
      "textZh": "下炸好的皮皮虾，翻炒裹上调料。撒盐，立刻上桌。",
      "zhHint": "快速翻匀"
    }
  ],
  "tips": [
    "Double-frying is essential for the crackling shell texture.",
    "Squeeze a lemon wedge over the top for brightness.",
    "Eat immediately—the crispiness fades fast."
  ],
  "tipsZh": [
    "双重油炸是 crackling 壳的关键。",
    "挤点柠檬汁提亮。",
    "立刻吃——脆度消退很快。"
  ]
};
