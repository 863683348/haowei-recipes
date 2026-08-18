import type { Recipe } from "@/lib/types";

/** Lazi Diced Chicken (辣子鸡丁) (辣子鸡丁) — Day batch */
export const lazi_diced_chicken: Recipe = {
  "id": "lazi-diced-chicken",
  "slug": "lazi-diced-chicken",
  "titleEn": "Lazi Diced Chicken (辣子鸡丁)",
  "titleZh": "辣子鸡丁",
  "pinyin": "là zǐ jī dīng",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing / Sichuan",
  "regionZh": "重庆 / 四川",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurant lazi chicken is deep-fried with a mountain of dried chilies. The family version shallow-fries the velveting-marinated chicken until crisp, then tosses it with chilies and Sichuan peppercorn — same fiery crunch, half the oil.",
  "versionNoteZh": "餐厅辣子鸡用宽油猛炸、配一座干辣椒山。家常版把上浆腌好的鸡丁半煎炸至酥脆，再与干辣椒、花椒一同翻炒——一样的麻辣焦香，一半的油。",
  "tags": [
    "spicy",
    "sichuan",
    "weeknight",
    "chicken",
    "crispy"
  ],
  "dietary": [
    "none"
  ],
  "story": "辣子鸡 is the great game of Sichuan cooking: you search for the crispy chicken cubes hidden inside a pile of dried chilies. In Chongqing homes it's a Saturday dish — the whole kitchen smells of chilies toasting in oil while everyone digs for the golden pieces. 'Finding the chicken in the peppers' is half the joy.",
  "storyZh": "辣子鸡是川菜里最大的“寻宝游戏”：在一堆干辣椒里翻找酥脆的鸡丁。重庆人家的周六硬菜——满屋飘着辣椒下油锅的焦香，全家人在辣椒山里“寻宝”。“辣椒里找鸡”本身就是一半的乐趣。",
  "ingredients": [
    {
      "id": "lz-chicken",
      "nameEn": "boneless chicken thighs, cut into 2 cm cubes",
      "nameZh": "鸡腿肉",
      "amountMetric": "450 g",
      "amountUS": "about 1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Thighs stay juicy at high heat; breast dries out.",
      "noteZh": "鸡腿肉高温下依然多汁；鸡胸会柴。"
    },
    {
      "id": "lz-chilies",
      "nameEn": "dried red chilies, snipped into 1.5 cm segments (seeds shaken out)",
      "nameZh": "干辣椒段",
      "amountMetric": "1 cup (about 30 g)",
      "amountUS": "1 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-flakes",
      "note": "Use 1/2 cup for a milder version — this is a spicy dish by design.",
      "noteZh": "怕辣用半杯——这本来就是道辣菜。"
    },
    {
      "id": "lz-peppercorn",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn",
      "note": "The má (numbing) is the point — don't skip.",
      "noteZh": "麻是这道菜的灵魂——不能省。"
    },
    {
      "id": "lz-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "lz-shaoxing",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "lz-pepper",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "lz-starch",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch",
      "note": "For the velvet marinade — makes the crust shatter-crisp.",
      "noteZh": "用于上浆腌料——让外壳酥脆。"
    },
    {
      "id": "lz-garlic",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "lz-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "lz-scallion",
      "nameEn": "scallions, cut into 2 cm segments",
      "nameZh": "小葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "lz-sesame",
      "nameEn": "toasted white sesame seeds (optional)",
      "nameZh": "白芝麻",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "lz-oil",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "食用油（煎炸用）",
      "amountMetric": "1/2 cup (125 ml)",
      "amountUS": "1/2 cup",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Marinate the chicken: mix with soy, Shaoxing, white pepper, and cornstarch. Rest 15 minutes — this velvet coating is what makes the crust crisp and the meat juicy.",
      "textZh": "腌鸡丁：与生抽、料酒、白胡椒粉、玉米淀粉拌匀，静置 15 分钟——这层上浆正是外壳酥脆、内里多汁的关键。",
      "zhHint": "上浆腌 15 分钟",
      "stateNote": {
        "visual": "Chicken cubes are evenly coated in a thin starchy white film",
        "visualZh": "鸡丁均匀裹上一层薄薄的白色淀粉膜",
        "timeRef": "15 minutes rest",
        "timeRefZh": "静置 15 分钟",
        "signal": "Coating feels tacky, not wet or clumpy",
        "signalZh": "裹层有黏感，不湿也不结块"
      },
      "tip": "This is the velveting technique in action — see the term note for how it works.",
      "tipZh": "这就是上浆技法——术语卡片里讲了原理。"
    },
    {
      "text": "Heat 1/2 cup oil in a wok over medium-high. Fry the chicken in 2 batches until golden and crisp, about 4-5 minutes per batch. Remove with a slotted spoon.",
      "textZh": "锅中倒 1/2 杯油，中大火加热。鸡丁分两批炸至金黄酥脆，每批约 4-5 分钟。用漏勺捞出。",
      "zhHint": "半煎炸鸡丁",
      "stateNote": {
        "visual": "Chicken turns deep golden and floats slightly in the oil; crust is visibly craggy",
        "visualZh": "鸡丁变成深金黄，微微浮起；外壳有明显凹凸",
        "heat": "medium-high",
        "timeRef": "4-5 minutes per batch",
        "timeRefZh": "每批 4-5 分钟",
        "signal": "Oil bubbles around the chicken become rapid and loud — moisture is gone, crispness is in",
        "signalZh": "油泡变得细密急促——水分炸干，酥脆到位"
      },
      "tip": "Don't crowd the wok — two batches keep the oil hot so the crust stays crisp.",
      "tipZh": "别一次下太多——分批炸保持油温，外壳才脆。"
    },
    {
      "text": "Pour out all but 2 tbsp of the oil. Lower heat to medium. Add Sichuan peppercorns and stir 20 seconds until fragrant but not burnt.",
      "textZh": "倒出多余的油，留 2 汤匙。转中火，下花椒炒 20 秒，炸出香味但别炸糊。",
      "zhHint": "小火炸花椒",
      "stateNote": {
        "visual": "Peppercorns swell slightly and perfume the oil",
        "visualZh": "花椒微微胀开，香气渗入油中",
        "heat": "medium",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "Aroma is floral and numbing — before it turns bitter",
        "signalZh": "花香麻香扑鼻——再久就发苦了"
      }
    },
    {
      "text": "Add dried chilies, garlic, and ginger. Stir-fry 1 minute until the chilies darken to a deep red and the kitchen smells of toasted chili.",
      "textZh": "下干辣椒段、蒜片和姜片，翻炒 1 分钟，辣椒变成深红色、满屋焦香。",
      "zhHint": "炒香辣椒",
      "stateNote": {
        "visual": "Chilies turn deep red, edges slightly darker; garlic just golden",
        "visualZh": "辣椒变深红、边缘略深；蒜片刚金黄",
        "heat": "medium",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Chili aroma is intense and toasty — don't let it turn black",
        "signalZh": "辣椒香气浓烈焦香——别等它变黑"
      }
    },
    {
      "text": "Return the chicken to the wok. Toss everything together 1 minute so the crisped chicken is fully coated in chili-peppercorn oil.",
      "textZh": "把鸡丁倒回锅中，翻炒 1 分钟，让酥脆鸡丁裹满辣椒花椒油。",
      "zhHint": "鸡丁回锅翻炒",
      "stateNote": {
        "visual": "Each chicken cube glistens with red oil and is flecked with chili seeds and pepper",
        "visualZh": "每块鸡丁泛着红油光泽，沾满辣椒籽和花椒粒",
        "heat": "medium-high",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Crust stays audible — you can hear the crisp crunch as you toss",
        "signalZh": "外壳依然酥脆——翻炒时能听到脆响"
      }
    },
    {
      "text": "Off heat, toss in scallions and sesame seeds. Serve hot — the classic way to eat it is to hunt for the chicken in the chilies.",
      "textZh": "关火，拌入葱段和芝麻。趁热上桌——经典吃法就是在辣椒堆里翻找鸡丁。",
      "zhHint": "撒葱出锅",
      "stateNote": {
        "visual": "Mound of deep-red chilies studded with golden crispy chicken",
        "visualZh": "深红辣椒堆里点缀着金黄酥脆的鸡丁",
        "signal": "Serve immediately while the crust is still shatter-crisp",
        "signalZh": "趁外壳还酥脆立刻吃"
      }
    }
  ],
  "tips": [
    "Shake the seeds out of the chilies — they add raw heat, not the good toasted kind.",
    "Two frying batches is non-negotiable for a crisp crust.",
    "Don't skip the Sichuan peppercorn: the má is what makes it 辣子鸡 and not just spicy chicken.",
    "Leftover chili oil from the pan is liquid gold — save it to toss noodles or eggs."
  ],
  "tipsZh": [
    "抖掉辣椒籽——它们只提供生辣，不是焦香。",
    "分两批炸是酥脆外壳的前提，别省。",
    "花椒不能省：有麻才是辣子鸡，否则只是辣炒鸡。",
    "锅底剩下的辣椒油是宝贝——留着拌面拌蛋。"
  ],
  "relatedSlugs": [
    "kung-pao-chicken",
    "mapo-tofu",
    "beef-and-broccoli"
  ],
  "image": "/images/recipes/lazi-diced-chicken.webp"
};
