import type { Recipe } from "@/lib/types";

/** Salt and Pepper Pan-Fried Chicken Thighs (香煎鸡腿) (香煎鸡腿) — Day batch */
export const pan_fried_chicken_thighs: Recipe = {
  "id": "pan-fried-chicken-thighs",
  "slug": "pan-fried-chicken-thighs",
  "titleEn": "Salt and Pepper Pan-Fried Chicken Thighs (香煎鸡腿)",
  "titleZh": "香煎鸡腿",
  "pinyin": "xiāng jiān jī tuǐ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version seasons only with salt, white pepper and a squeeze of lemon. Restaurant version adds a dusting of five-spice before searing.",
  "versionNoteZh": "家常版只用盐、白胡椒和一点柠檬。餐厅版下锅前会拍一层五香粉。",
  "tags": [
    "chicken",
    "thighs",
    "pan-fried",
    "beginner",
    "low-carb",
    "25-min"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This is the dish Cantonese home cooks make when there is no time for a marinade. Salt goes on early so it penetrates, white pepper goes on late so it stays sharp, and the whole thing is done in one pan in under half an hour.",
  "storyZh": "这是广东家庭没时间腌肉时的做法。盐早放才进味，白胡椒晚放才够冲，全程一口锅，半小时内上桌。",
  "ingredients": [
    {
      "id": "pfct-1",
      "nameEn": "bone-in chicken thighs",
      "nameZh": "带骨鸡腿",
      "amountMetric": "2 pieces, about 500 g",
      "amountUS": "2 pieces",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "pfct-2",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "pfct-3",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "pfct-4",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "pfct-5",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pfct-6",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "pfct-7",
      "nameEn": "lemon or lime, cut in wedges",
      "nameZh": "柠檬或青柠",
      "amountMetric": "1/2 piece",
      "amountUS": "1/2 piece",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pfct-8",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "葱花",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Salt the thighs on both sides 15 minutes ahead. Pat off any surface moisture that beads up.",
      "textZh": "鸡腿两面撒盐腌 15 分钟，下锅前擦去渗出的水分。",
      "zhHint": "提前撒盐",
      "stateNote": {
        "visual": "Small beads of brine appear on the skin",
        "visualZh": "表皮渗出细小的盐水珠",
        "signal": "Skin feels tacky rather than wet",
        "signalZh": "表皮黏手但不湿漉",
        "timeRef": "15 minutes"
      }
    },
    {
      "text": "Heat a heavy pan over medium-low with the oil. Lay the thighs skin-side down and do not move them.",
      "textZh": "厚底锅中低火放油，鸡腿皮朝下摆入，不要翻动。",
      "zhHint": "皮朝下入锅",
      "stateNote": {
        "visual": "Gentle even sizzle around the edges",
        "visualZh": "边缘发出均匀的轻响",
        "signal": "Skin looks dry and flat against the pan",
        "signalZh": "表皮平贴锅面，看着干爽",
        "heat": "medium-low"
      }
    },
    {
      "text": "Render 10 minutes until the skin is crisp and golden. Spoon out excess fat halfway through.",
      "textZh": "煎 10 分钟至皮脆金黄，中途舀出多余鸡油。",
      "zhHint": "煎脆表皮",
      "stateNote": {
        "visual": "Skin goes from pale to even amber",
        "visualZh": "表皮由浅黄转为均匀琥珀色",
        "signal": "Thigh slides when nudged with a spatula",
        "signalZh": "用铲轻推能滑动",
        "heat": "medium-low",
        "timeRef": "10 minutes"
      }
    },
    {
      "text": "Flip, add garlic and ginger to the fat, and cook 6 minutes, basting the skin with the pan fat.",
      "textZh": "翻面，下蒜片姜片，煎 6 分钟，用锅内鸡油淋皮。",
      "zhHint": "翻面上色",
      "stateNote": {
        "visual": "Garlic turns pale gold, not brown",
        "visualZh": "蒜片呈浅金色，不发褐",
        "signal": "Internal temperature reads 74°C / 165°F at the bone",
        "signalZh": "贴着骨头处中心温度达 74°C",
        "heat": "medium",
        "timeRef": "6 minutes"
      }
    },
    {
      "text": "Off the heat, dust with white pepper and squeeze over lemon. Rest 5 minutes.",
      "textZh": "离火撒白胡椒，挤柠檬汁，静置 5 分钟。",
      "zhHint": "撒胡椒柠檬"
    },
    {
      "text": "Slice along the bone, scatter scallion, and spoon the pan juices back over.",
      "textZh": "沿骨切开，撒葱花，淋回锅内肉汁。",
      "zhHint": "切块装盘"
    }
  ],
  "tips": [
    "Salt 15 minutes ahead, not overnight — longer makes the texture springy.",
    "Medium-low heat renders the fat slowly; high heat burns the skin before the meat cooks.",
    "Add pepper off the heat so its aroma stays bright."
  ],
  "tipsZh": [
    "提前 15 分钟撒盐即可，腌过夜肉质会发弹。",
    "中低火慢慢逼油；大火会皮焦肉生。",
    "胡椒离火后再撒，香气才冲。"
  ],
  "relatedSlugs": [
    "herb-roasted-chicken-thighs",
    "salt-baked-chicken-wings",
    "hongshao-chicken",
    "white-cut-chicken"
  ],
  "image": "/images/recipes/pan-fried-chicken.webp"
};
