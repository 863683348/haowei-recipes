import type { Recipe } from "@/lib/types";

/** Suan Luo Bo Lao Ya Tang (Pickled Radish & Aged Duck Soup) (酸萝卜老鸭汤) — Seed batch */
export const suan_luo_bo_lao_ya_tang_pickled_radish_duck_soup: Recipe = {
  "id": "suan-luo-bo-lao-ya-tang",
  "slug": "suan-luo-bo-lao-ya-tang-pickled-radish-duck-soup",
  "titleEn": "Suan Luo Bo Lao Ya Tang (Pickled Radish & Aged Duck Soup)",
  "titleZh": "酸萝卜老鸭汤",
  "pinyin": "suān luó bo lǎo yā tāng",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 6,
  "version": "family",
  "versionNote": "Family version uses slow-simmered duck leg instead of whole aged duck — easier to source and cooks evenly in home pots.",
  "versionNoteZh": "家常版用鸭腿替代整只老鸭，更易采购且受热均匀，无需专业灶具。",
  "tags": [
    "slow-cooked",
    "soup",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Wanzhou made this every winter solstice — he’d bury the duck in rice wine lees for 3 days, then simmer it with his own fermented radishes in a black iron wok over charcoal. I now use my Dutch oven, but keep his 3-day prep ritual.",
  "storyZh": "我万州的祖父每年冬至必做此汤——他将鸭子埋入酒糟腌3日，再与自酿酸萝卜同入铁锅炭火慢煨。如今我改用铸铁锅，却仍恪守他三日腌制的规矩。",
  "ingredients": [
    {
      "id": "slb-01",
      "nameEn": "duck legs (bone-in, skin-on)",
      "nameZh": "带皮带骨鸭腿",
      "pinyin": "dài pí dài gǔ yā tuǐ",
      "amountMetric": "800 g",
      "amountUS": "1.75 lb (about 4 legs)",
      "category": "protein",
      "pantry": "local",
      "note": "Bone-in adds collagen-rich body to soup — do not substitute boneless.",
      "noteZh": "带骨可释放胶原质，使汤体醇厚；禁用去骨鸭腿。"
    },
    {
      "id": "slb-02",
      "nameEn": "Sichuan-style fermented daikon radish (suan luo bo)",
      "nameZh": "四川酸萝卜（坛装）",
      "pinyin": "sì chuān suān luó bo",
      "amountMetric": "400 g",
      "amountUS": "4 cups, chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Must be lacto-fermented, not vinegar-pickled — look for cloudy brine and slight effervescence.",
      "noteZh": "须为乳酸发酵型，非醋泡；观察坛水是否微浊、有细微气泡。"
    },
    {
      "id": "slb-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry if unavailable — never use cooking wine with salt.",
      "noteZh": "无绍兴酒可用干雪莉酒替代；忌用含盐料酒。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "slb-04",
      "nameEn": "ginger",
      "nameZh": "老姜",
      "pinyin": "lǎo jiāng",
      "amountMetric": "50 g",
      "amountUS": "3 tbsp, smashed",
      "category": "produce",
      "pantry": "local",
      "note": "Use mature ginger — fibrous and pungent — for depth and clarity.",
      "noteZh": "必须用老姜，纤维粗、辛香足，可去腥增清。",
      "termKey": "ginger"
    },
    {
      "id": "slb-05",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "3 pcs",
      "amountUS": "3 whole",
      "category": "spice",
      "pantry": "asian",
      "note": "Whole star anise only — ground loses nuance and clouds broth.",
      "noteZh": "仅用整颗八角；研磨后风味单薄且易浑汤。",
      "termKey": "star-anise"
    }
  ],
  "steps": [
    {
      "text": "Rinse duck legs under cold water. Blanch in boiling water 3 minutes; skim foam. Drain and rinse again.",
      "textZh": "鸭腿冷水冲洗，沸水焯3分钟去浮沫，捞出再冲净。",
      "zhHint": "去腥初处理",
      "stateNote": {
        "visual": "Water turns grey-brown with gray foam rising steadily.",
        "visualZh": "水呈灰褐色，持续泛起灰白浮沫。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Foam rises continuously — stop when it begins to subside.",
        "signalZh": "浮沫持续上涌，初减即停。"
      }
    },
    {
      "text": "In a Dutch oven, combine duck legs, suan luo bo, ginger, star anise, and Shaoxing wine. Add enough water to cover by 5 cm (about 2 L). Bring to boil, then reduce to bare simmer.",
      "textZh": "铸铁锅中放入鸭腿、酸萝卜、姜、八角、黄酒，加水没过食材5厘米（约2升），煮沸后转极小火。",
      "zhHint": "合料入锅",
      "stateNote": {
        "visual": "Surface barely trembles; tiny bubbles rise singly from bottom.",
        "visualZh": "汤面微颤，锅底单个气泡缓缓上浮。",
        "timeRef": "5 minutes to reach simmer",
        "timeRefZh": "5 分钟达微沸",
        "heat": "low",
        "signal": "Steam rises in thin, steady ribbons — no rolling bubbles.",
        "signalZh": "蒸汽呈细而匀的缕状，无翻滚气泡。"
      }
    },
    {
      "text": "Skim any residual foam. Cover partially and simmer gently 2.5 hours — add warm water if level drops below duck.",
      "textZh": "撇净残沫，半盖盖子，小火慢煨2.5小时；若水位低于鸭肉，补入热水。",
      "zhHint": "慢煨出醇",
      "stateNote": {
        "visual": "Duck skin blisters and pulls away from bone; broth turns pale amber.",
        "visualZh": "鸭皮起泡、微离骨；汤色呈淡琥珀。",
        "timeRef": "2.5 hours",
        "timeRefZh": "2.5 小时",
        "heat": "low",
        "signal": "Fragrance shifts from meaty to layered — sour, sweet, herbal.",
        "signalZh": "香气由肉香转为复合香：酸、微甜、药香交织。"
      }
    },
    {
      "text": "Remove duck legs. Strain broth through fine-mesh sieve into clean pot. Discard solids except suan luo bo — return it to broth.",
      "textZh": "捞出鸭腿，汤液过细筛入净锅；弃渣（酸萝卜除外），酸萝卜回汤。",
      "zhHint": "滤清留味",
      "stateNote": {
        "visual": "Broth flows clear and glossy; suan luo bo retains crisp-tender texture.",
        "visualZh": "汤液清亮油润；酸萝卜仍保脆嫩。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "No sediment passes through sieve — broth is bright, not cloudy.",
        "signalZh": "滤网无渣，汤色明澈不浊。"
      }
    },
    {
      "text": "Shred duck meat off bones, discarding skin and large bones. Return meat to broth. Simmer 10 more minutes. Taste and adjust salt — suan luo bo contributes saltiness.",
      "textZh": "拆鸭肉去皮剔骨，肉回汤，再煨10分钟。尝味补盐——酸萝卜已带咸。",
      "zhHint": "拆肉回汤",
      "stateNote": {
        "visual": "Meat shreds easily with fork; broth coats spoon lightly.",
        "visualZh": "鸭肉叉即可撕，汤汁轻挂勺背。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Sourness balances richness — neither overwhelms the other.",
        "signalZh": "酸味与脂香平衡，互不压味。"
      }
    }
  ],
  "tips": [
    "Ferment your own suan luo bo: pack peeled daikon in brine (5% salt by weight) with garlic and chili; ferment 7–10 days at room temp.",
    "For clearer broth, chill overnight and skim solidified fat before reheating.",
    "Serve with steamed rice and a side of chili oil — the fat cuts acidity beautifully."
  ],
  "tipsZh": [
    "自制酸萝卜：白萝卜去皮切块，用5%盐水（盐重占水重）加蒜片、辣椒泡7–10天。",
    "如求汤清，可冷藏过夜，凝固浮油后再撇净。",
    "配米饭与一碟红油同食——油脂恰能中和酸冽。"
  ],
  "relatedSlugs": [
    "suan-cai-yu-hot-sour-fish-stew"
  ],
  "image": "/images/recipes/suan-luo-bo-lao-ya-tang-pickled-radish-duck-soup.webp"
};
