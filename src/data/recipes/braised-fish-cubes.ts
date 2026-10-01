import type { Recipe } from "@/lib/types";

/** Braised Fish Cubes (红烧鱼块) (红烧鱼块) — Day batch */
export const braised_fish_cubes: Recipe = {
  "id": "hong-shao-yu-kuai",
  "slug": "braised-fish-cubes",
  "titleEn": "Braised Fish Cubes (红烧鱼块)",
  "titleZh": "红烧鱼块",
  "pinyin": "hóng shāo yú kuài",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Hubei",
  "regionZh": "湖北",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version cubes a firm white fish, pan-sears it, then braises in a soy-scallion sauce so the edges stay crisp while the inside stays tender.",
  "versionNoteZh": "家常版把结实白肉鱼切块，先煎定型，再用酱油葱香汁收汁——外焦里嫩。",
  "tags": [
    "fish",
    "home-style",
    "weeknight",
    "braised"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother made this on rainy Wuhan evenings. The trick was always the same: dry the cubes, sear hard, and never crowd the pan.",
  "storyZh": "武汉的雨天，外婆常做这道。秘诀一贯：鱼块擦干、猛火煎硬、绝不挤锅。",
  "ingredients": [
    {
      "id": "bfc-01",
      "nameEn": "firm white fish fillet (cod or catfish), cubed",
      "nameZh": "结实白肉鱼柳（鳕鱼或鲶鱼，切块）",
      "pinyin": "yú liǔ",
      "amountMetric": "500 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Pat bone-dry before searing.",
      "noteZh": "下锅前务必擦干。"
    },
    {
      "id": "bfc-02",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "pinyin": "jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bfc-03",
      "nameEn": "garlic, smashed",
      "nameZh": "蒜（拍碎）",
      "pinyin": "suàn",
      "amountMetric": "10 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "bfc-04",
      "nameEn": "scallion, cut into sections",
      "nameZh": "葱（切段）",
      "pinyin": "cōng",
      "amountMetric": "30 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bfc-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bfc-06",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "8 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bfc-07",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "pinyin": "liào jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cooking-wine"
    },
    {
      "id": "bfc-08",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    }
  ],
  "steps": [
    {
      "text": "Pat fish cubes bone-dry. Toss with cooking wine and cornstarch; rest 10 minutes.",
      "textZh": "鱼块擦干，加料酒与玉米淀粉拌匀，静置10分钟。",
      "zhHint": "腌鱼上浆",
      "stateNote": {
        "visual": "Surface looks matte and coated.",
        "visualZh": "表面哑光挂浆。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Slurry clings without dripping.",
        "signalZh": "浆液挂住不滴。"
      }
    },
    {
      "text": "Heat oil over high heat. Sear cubes in a single layer, undisturbed, 90 seconds per side until golden.",
      "textZh": "热油下鱼块单层铺开，每面静煎90秒至金黄。",
      "zhHint": "煎制定型",
      "stateNote": {
        "visual": "Crust turns deep gold; cubes release cleanly.",
        "visualZh": "外壳深金、轻松离锅。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "Sizzle steadies and sharpens.",
        "signalZh": "滋啦声转沉变脆。"
      }
    },
    {
      "text": "Push fish aside; add ginger, garlic, and scallion; stir-fry 20 seconds until aromatic.",
      "textZh": "鱼块拨一边，下姜蒜葱，翻炒20秒出香。",
      "zhHint": "爆香小料",
      "stateNote": {
        "visual": "Aromatics sizzle and brighten.",
        "visualZh": "小料滋响转亮。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Fragrance rises, not browned.",
        "signalZh": "香气上扬、未焦。"
      }
    },
    {
      "text": "Add light soy, dark soy, and 80 ml water; return fish; simmer 6 minutes.",
      "textZh": "加生抽、老抽与80毫升水，回鱼块，小火焖6分钟。",
      "zhHint": "调味焖煮",
      "stateNote": {
        "visual": "Sauce bubbles gently around cubes.",
        "visualZh": "汤汁在鱼块边轻沸。",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium-low",
        "signal": "Fish turns opaque through.",
        "signalZh": "鱼肉整体转白熟透。"
      }
    },
    {
      "text": "Raise heat to reduce until sauce glosses the cubes; scatter scallion rings.",
      "textZh": "转大火收汁至裹亮，撒葱圈。",
      "zhHint": "收汁出锅",
      "stateNote": {
        "visual": "Sauce thickens to a mirror glaze.",
        "visualZh": "汤汁收成镜面亮汁。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Coating shines and clings.",
        "signalZh": "挂汁发亮、紧贴。"
      }
    }
  ],
  "tips": [
    "Dry the fish thoroughly or the crust will steam off.",
    "Sear in batches rather than crowding the pan.",
    "Dark soy is only for color — a teaspoon is enough."
  ],
  "tipsZh": [
    "鱼务必擦干，否则外壳会蒸掉。",
    "分批煎，别挤锅。",
    "老抽只上色，一茶匙足够。"
  ],
  "commonMistakes": [
    {
      "mistake": "Skipping the dry step, so cubes fall apart.",
      "mistakeZh": "不擦干导致鱼块散碎。",
      "fix": "Press cubes with paper towel until no moisture shows.",
      "fixZh": "用厨房纸压到不见水。"
    },
    {
      "mistake": "Flipping too early and tearing the crust.",
      "mistakeZh": "翻太早撕破外壳。",
      "fix": "Wait until the cube releases on its own before turning.",
      "fixZh": "等鱼块自动离锅再翻。"
    }
  ],
  "variations": [
    "Add a few dried chilies for a hot-and-numbing twist.",
    "Swap white fish for tofu cubes for a vegetarian plate."
  ],
  "variationsZh": [
    "加几颗干辣椒，做成微麻辣版。",
    "白肉鱼换成豆腐块，素版同样好吃。"
  ],
  "relatedSlugs": [
    "sweet-sour-carp",
    "dry-braised-crucian",
    "sauce-braised-croaker",
    "pan-fried-hairtail",
    "scallion-oil-turbot",
    "tomato-fish-slices",
    "salt-pepper-croaker",
    "stir-fried-shrimp",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
