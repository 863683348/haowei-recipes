import type { Recipe } from "@/lib/types";

/** Cashew Chicken (腰果鸡丁) (腰果鸡丁) — Day batch */
export const cashew_chicken: Recipe = {
  "id": "cashew-chicken",
  "slug": "cashew-chicken",
  "titleEn": "Cashew Chicken (腰果鸡丁)",
  "titleZh": "腰果鸡丁",
  "pinyin": "yāo guǒ jī dīng",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Guangdong / national favorite",
  "regionZh": "广东 / 全国流行",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurant version velvet-fries the chicken in oil and flashes the cashews through hot oil for extra crunch. The family version sears both in the same pan with less oil — same silky chicken, same nutty finish.",
  "versionNoteZh": "餐厅版先把鸡丁滑油、腰果过油炸得酥脆。家常版在同一口锅里少油煎炒——鸡丁一样嫩滑，腰果一样焦香。",
  "tags": [
    "30-min",
    "weeknight",
    "chicken",
    "kids-friendly",
    "nutty"
  ],
  "dietary": [
    "none"
  ],
  "story": "Cashew chicken is what happens when Cantonese stir-fry meets a can of nuts — a dish that appears at family dinners and banquet tables alike. The home version is beloved for one reason: it's almost impossible to overcook into misery. The velveted chicken stays silky, the cashews add a toasty crunch, and the sauce is a simple savory-sweet glaze that children and adults agree on.",
  "storyZh": "腰果鸡丁是粤式炒锅与一把坚果相遇的产物——既上得了家宴，也出得了餐厅。家常版受宠只有一个原因：它几乎不可能被炒砸。上浆的鸡丁滑嫩不柴，腰果带着焦香脆口，酱汁是简单的咸甜口，大人小孩都买账。",
  "ingredients": [
    {
      "id": "cc-chicken",
      "nameEn": "boneless chicken thighs, cut into 2 cm cubes",
      "nameZh": "鸡腿肉",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Thighs stay juicy; breast works if velveted properly.",
      "noteZh": "鸡腿肉多汁；鸡胸上浆到位也可以。"
    },
    {
      "id": "cc-cashews",
      "nameEn": "raw cashews",
      "nameZh": "生腰果",
      "amountMetric": "80 g",
      "amountUS": "about 3/4 cup",
      "category": "other",
      "pantry": "local",
      "note": "Raw, unsalted — you control the salt. Roasted work too, add at the very end.",
      "noteZh": "用原味生腰果——咸淡自己控。熟腰果也行，最后再放。"
    },
    {
      "id": "cc-cucumber",
      "nameEn": "English cucumber, diced (or carrot / zucchini)",
      "nameZh": "黄瓜丁",
      "amountMetric": "1/2 (about 120 g)",
      "amountUS": "1/2 large",
      "category": "produce",
      "pantry": "local",
      "note": "Classic is cucumber + carrot for color; use whatever is crisp.",
      "noteZh": "经典搭配是黄瓜+胡萝卜配色；任何脆的蔬菜都行。"
    },
    {
      "id": "cc-carrot",
      "nameEn": "carrot, diced",
      "nameZh": "胡萝卜丁",
      "amountMetric": "1/2 (about 60 g)",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cc-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cc-ginger",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cc-scallion",
      "nameEn": "scallions, white part for the wok, green for garnish",
      "nameZh": "小葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cc-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cc-shaoxing",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cc-oyster",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "cc-pepper",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "cc-starch",
      "nameEn": "cornstarch (for velveting + slurry)",
      "nameZh": "玉米淀粉",
      "amountMetric": "2 tbsp total",
      "amountUS": "2 tbsp total",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "cc-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Velvet the chicken: mix with 1 tbsp soy, Shaoxing, white pepper, and 1 tbsp cornstarch. Rest 10 minutes.",
      "textZh": "上浆：鸡丁与 1 汤匙生抽、料酒、白胡椒和 1 汤匙淀粉拌匀，静置 10 分钟。",
      "zhHint": "鸡丁上浆",
      "stateNote": {
        "visual": "Chicken is coated in a thin, even starchy film",
        "visualZh": "鸡丁裹上一层薄而均匀的淀粉膜",
        "timeRef": "10 minutes rest",
        "timeRefZh": "静置 10 分钟",
        "signal": "Coating feels tacky, not dry or clumpy",
        "signalZh": "裹层有黏感，不干也不结块"
      },
      "tip": "Velveting is what keeps the chicken silky — see the term card.",
      "tipZh": "上浆是鸡丁滑嫩的秘诀——看术语卡片。"
    },
    {
      "text": "In a small bowl mix the sauce: remaining 1/2 tbsp soy, oyster sauce, 1/2 cup water (125 ml), and 1 tbsp cornstarch.",
      "textZh": "调汁：小碗里放剩余半汤匙生抽、蚝油、半杯水（125 毫升）和 1 汤匙淀粉，搅匀。",
      "zhHint": "调好碗汁",
      "stateNote": {
        "visual": "Sauce is a smooth, uniform brown liquid, no lumps",
        "visualZh": "酱汁是顺滑均匀的棕色液体，没有结块",
        "signal": "Cornstarch fully dissolved — shake if needed",
        "signalZh": "淀粉完全化开——不行就晃一晃"
      }
    },
    {
      "text": "Heat 1 tbsp oil in a wok over medium. Toast cashews until golden and fragrant, about 2 minutes. Remove immediately.",
      "textZh": "锅中放 1 汤匙油，中火。腰果炒至金黄出香，约 2 分钟，立刻盛出。",
      "zhHint": "炒香腰果",
      "stateNote": {
        "visual": "Cashews turn pale golden and release a nutty aroma",
        "visualZh": "腰果变成浅金色，散发出坚果香",
        "heat": "medium",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "A few cashews show faint golden spots — they keep cooking off-heat, so pull them now",
        "signalZh": "部分腰果出现淡金色斑点——离火后还会继续熟，现在就要捞出"
      },
      "tip": "Cashews burn in seconds after they start coloring. When in doubt, take them out early.",
      "tipZh": "腰果一变色几秒内就会糊。拿不准就早一步盛出。"
    },
    {
      "text": "Add remaining 1 tbsp oil to the wok, raise to high heat. Stir-fry the chicken in one layer until the exterior turns opaque and lightly golden, about 2-3 minutes.",
      "textZh": "锅中加剩余 1 汤匙油，转大火。鸡丁单层下锅翻炒至表面变白微金黄，约 2-3 分钟。",
      "zhHint": "大火炒鸡丁",
      "stateNote": {
        "visual": "Chicken turns from pink to pale golden with a light crust",
        "visualZh": "鸡丁从粉色变成淡金色，带一层薄壳",
        "heat": "high",
        "timeRef": "2-3 minutes",
        "timeRefZh": "2-3 分钟",
        "signal": "No pink remains; edges just starting to brown",
        "signalZh": "看不到粉色，边缘刚开始上色"
      },
      "tip": "High heat is the point — you want sear, not steam. Crowding the pan steams it.",
      "tipZh": "大火是关键——要的是煎香不是蒸。一次别放太多。"
    },
    {
      "text": "Add garlic, ginger, and scallion whites. Stir 30 seconds until fragrant. Add cucumber and carrot, stir-fry 1 minute.",
      "textZh": "下蒜末、姜末和葱白，炒 30 秒出香。加入黄瓜丁和胡萝卜丁，翻炒 1 分钟。",
      "zhHint": "爆香下蔬菜",
      "stateNote": {
        "visual": "Vegetables turn glossy and bright, carrot slightly softened",
        "visualZh": "蔬菜变得油亮鲜艳，胡萝卜微微变软",
        "heat": "high",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Cucumber still crisp but warmed through",
        "signalZh": "黄瓜依然脆，但已热透"
      }
    },
    {
      "text": "Give the sauce bowl a stir (cornstarch settles!), pour it in. Toss quickly — the sauce should turn glossy and coat everything within 30 seconds.",
      "textZh": "先搅一下碗汁（淀粉会沉底！），倒入锅中快速翻炒——酱汁应在 30 秒内变得油亮并裹住所有食材。",
      "zhHint": "倒碗汁快速翻炒",
      "stateNote": {
        "visual": "Sauce turns from cloudy to glossy and clings to chicken and veggies",
        "visualZh": "酱汁从浑浊变油亮，挂在鸡丁和蔬菜上",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Sauce coats the back of a spoon — thick enough",
        "signalZh": "酱汁能挂勺背——浓稠度刚好"
      }
    },
    {
      "text": "Off heat, fold in the toasted cashews and scallion greens. Serve immediately — cashews stay crunchiest this way.",
      "textZh": "关火，拌入炒香的腰果和葱花。趁热上桌——这样腰果最脆。",
      "zhHint": "拌入腰果",
      "stateNote": {
        "visual": "Glossy golden chicken, colorful veg, crunchy cashews on top",
        "visualZh": "油亮的金黄鸡丁、彩色蔬菜、表面脆腰果",
        "signal": "Serve hot before the cashews soften",
        "signalZh": "趁腰果还没软立刻吃"
      }
    }
  ],
  "tips": [
    "Raw cashews toast fast — pull them out the moment they smell nutty.",
    "Always re-stir the sauce right before pouring; cornstarch sinks like a rock.",
    "For extra crunch, add a handful of water chestnuts or celery at the veggie step.",
    "This dish scales beautifully to a party: double everything, keep the high heat."
  ],
  "tipsZh": [
    "生腰果熟得很快——一闻到坚果香就出锅。",
    "倒汁前一定要再搅一次；淀粉沉底比石头还快。",
    "想要更脆，蔬菜步骤可加一把马蹄丁或芹菜丁。",
    "这道菜特别适合聚会：全部翻倍，大火不变。"
  ],
  "relatedSlugs": [
    "kung-pao-chicken",
    "lazi-diced-chicken",
    "home-style-tofu"
  ],
  "image": "/images/recipes/kung-pao-chicken.webp"
};
