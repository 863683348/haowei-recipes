import type { Recipe } from "@/lib/types";

/** Huai'an Soft-Back Eel (Ruandou Changyu) (软兜长鱼) — Day batch */
export const huai_an_soft_eel: Recipe = {
  "id": "huai-an-soft-eel",
  "slug": "huai-an-soft-eel",
  "titleEn": "Huai'an Soft-Back Eel (Ruandou Changyu)",
  "titleZh": "软兜长鱼",
  "pinyin": "ruǎn dōu cháng yú",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang",
  "region": "Jiangsu (Huai'an)",
  "regionZh": "江苏（淮安）",
  "difficulty": "hard",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Huai'an masters blanch live rice-field eel for exactly 90 seconds and dress it with a raw-garlic-vinegar sauce. At home we use frozen or vacuum-packed eel and blanch a little longer; the garlic is bloomed in oil so the raw bite softens.",
  "versionNoteZh": "淮安师傅把活笔杆鳝烫 90 秒，配生蒜醋汁。家常版用冷冻或真空包装鳝鱼，烫的时间略长，蒜也在油里爆一下，去掉生蒜的冲味。",
  "tags": [
    "huaiyang",
    "eel",
    "quick",
    "garlic",
    "vinegar"
  ],
  "dietary": [
    "none"
  ],
  "story": "软兜 means 'soft pouch' — the way the eel back curls when it hits the water, and the way you lift it out with a spoon, cradled. Huai'an claims this as the first dish of the Huaiyang canon. The flavour is not subtle: black vinegar, a great deal of garlic, white pepper and the slick richness of eel fat.",
  "storyZh": "「软兜」是说鳝背遇水自然卷成兜状，也指用勺子兜着出锅的样子。淮安人把它列为淮扬菜的头一道。味道毫不含蓄：镇江香醋、大量蒜末、白胡椒，加上鳝鱼油脂的滑润。",
  "ingredients": [
    {
      "id": "eel",
      "nameEn": "eel back sections (rice-field eel or frozen unagi), cut into 8 cm lengths",
      "nameZh": "鳝背（笔杆鳝或冷冻鳝段，切 8 cm）",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "asian",
      "note": "Chinese markets sell frozen deboned eel. Unagi (grilled eel) is too sweet — use raw or blanched if possible.",
      "noteZh": "中式超市有冷冻去骨鳝段。日式蒲烧鳗太甜，尽量用生的或水煮的。"
    },
    {
      "id": "garlic",
      "nameEn": "garlic, finely minced",
      "nameZh": "蒜末",
      "amountMetric": "30 g",
      "amountUS": "8 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "15 g",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "scallion",
      "nameEn": "scallion, finely chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "light-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "chinkiang-vinegar",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "white-pepper",
      "nameEn": "white pepper, ground",
      "nameZh": "白胡椒粉",
      "amountMetric": "3 g",
      "amountUS": "3/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper",
      "note": "Huai'an cooking is generous with white pepper here — it is the signature note.",
      "noteZh": "淮安做法这里白胡椒放得很大方，是这道菜的标志。"
    },
    {
      "id": "cornstarch",
      "nameEn": "cornstarch slurry (1:2 with water)",
      "nameZh": "水淀粉",
      "amountMetric": "8 g + 16 ml water",
      "amountUS": "1 1/2 tsp + 1 tbsp water",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "pork-fat-oil",
      "nameEn": "lard or neutral oil",
      "nameZh": "猪油或食用油",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "other",
      "pantry": "asian",
      "note": "Lard is traditional and noticeably better here; neutral oil is fine.",
      "noteZh": "传统用猪油，香味明显更好；普通油也行。"
    }
  ],
  "steps": [
    {
      "text": "Bring a large pot of water with ginger slices and half the wine to a rolling boil, then slide in the eel and blanch briefly until the pieces curl and just turn opaque.",
      "textZh": "一大锅水加姜片和一半黄酒大火烧开，下鳝段汆烫至卷曲、刚刚变白。",
      "stateNote": {
        "visual": "The eel curls into loose C shapes and the surface turns from translucent grey to opaque",
        "visualZh": "鳝段卷成松松的 C 形，颜色由半透明的灰变成不透明",
        "signal": "The flesh firms slightly but still gives when pinched",
        "signalZh": "肉质略微收紧，捏下去仍有弹性",
        "timeRef": "60-90 seconds",
        "timeRefZh": "60-90 秒",
        "heat": "high"
      },
      "tip": "Overcook here and the eel turns rubbery — set a timer.",
      "tipZh": "烫过火鳝鱼就会发橡皮筋，一定要计时。"
    },
    {
      "text": "Lift the eel out with a slotted spoon, drain well and arrange it on a warm plate while you make the sauce.",
      "textZh": "用漏勺把鳝段捞出沥干，摆在温热的盘子里，同时调酱汁。",
      "stateNote": {
        "visual": "No water pools on the plate and the eel surface looks velvety",
        "visualZh": "盘底不积水，鳝段表面呈绒面质感",
        "signal": "The pieces hold their curl instead of unrolling flat",
        "signalZh": "鳝段保持卷曲而不是摊平",
        "timeRef": "1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Heat the lard in a clean wok, add the garlic and remaining ginger, and fry only until fragrant — the garlic should stay pale.",
      "textZh": "干净炒锅下猪油烧热，加蒜末和剩下的姜片，只炒到出香即可，蒜要保持浅色。",
      "stateNote": {
        "visual": "The garlic turns opaque white with barely any colour, and the oil looks cloudy with aroma",
        "visualZh": "蒜末变成不透明白色、几乎不上色，油因香气变得浑浊",
        "signal": "A sharp, sweet garlic smell rises within about 20 seconds",
        "signalZh": "约 20 秒内升起又冲又甜的蒜香",
        "timeRef": "20-30 seconds",
        "timeRefZh": "20-30 秒",
        "heat": "medium"
      },
      "tip": "Browned garlic turns bitter and will bully the vinegar. Pull it early.",
      "tipZh": "蒜炒黄会发苦、盖掉醋香，早点起锅。"
    },
    {
      "text": "Add the remaining wine, soy sauce, vinegar, white pepper and 100 ml water, bring to a boil, then thicken with the slurry until the sauce is glossy and loose.",
      "textZh": "加剩下的黄酒、生抽、香醋、白胡椒和 100 ml 水烧开，用水淀粉勾成薄而亮的芡。",
      "stateNote": {
        "visual": "The sauce darkens to reddish-brown and coats a spoon in a thin glossy film",
        "visualZh": "酱汁变成红褐色，在勺上挂一层薄亮的膜",
        "signal": "The vinegar smell softens from sharp to rounded and fruity",
        "signalZh": "醋味由尖锐转为圆润带果香",
        "timeRef": "2 minutes",
        "timeRefZh": "约 2 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Return the eel to the wok and toss gently for 20 seconds so each piece is coated, then plate and shower with scallion.",
      "textZh": "鳝段回锅轻轻翻拌 20 秒让每块都裹上芡汁，装盘撒葱花。",
      "stateNote": {
        "visual": "Each curl is lacquered and glossy, with the sauce still loose in the pan",
        "visualZh": "每段鳝鱼都被芡汁包住发亮，锅里芡汁仍是流动状态",
        "signal": "The eel stays intact when you lift it — no breaking at the fold",
        "signalZh": "夹起时鳝段完整，弯折处不断",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high"
      }
    }
  ],
  "tips": [
    "White pepper, not black. The floral heat is what makes this taste like Huai'an.",
    "Add the vinegar off the heat if you want it brighter and sharper.",
    "Frozen eel is often pre-cooked — cut the blanching time to 30 seconds."
  ],
  "tipsZh": [
    "用白胡椒不是黑胡椒，那股清冽的辛辣才是淮安味。",
    "想要醋味更冲更亮，可以关火后再放醋。",
    "冷冻鳝段多半是熟的，汆烫时间缩到 30 秒。"
  ],
  "relatedSlugs": [
    "crispy-eel-with-sizzling-oil",
    "sauce-braised-crucian-carp",
    "home-style-braised-common-carp"
  ],
  "image": "/images/recipes/crispy-eel-with-sizzling-oil.webp"
};
