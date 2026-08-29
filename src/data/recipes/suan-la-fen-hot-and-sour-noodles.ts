import type { Recipe } from "@/lib/types";

/** Suan La Fen (Hot & Sour Noodles) (酸辣粉) — Seed batch */
export const suan_la_fen_hot_and_sour_noodles: Recipe = {
  "id": "suan-la-fen",
  "slug": "suan-la-fen-hot-and-sour-noodles",
  "titleEn": "Suan La Fen (Hot & Sour Noodles)",
  "titleZh": "酸辣粉",
  "pinyin": "suān là fěn",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses soaked sweet potato starch noodles instead of deep-fried ones — faster, healthier, and achieves perfect chew without splatter.",
  "versionNoteZh": "家常版用泡发红薯粉条替代炸粉，更省时健康，泡发后嚼劲恰到好处，无油溅风险。",
  "tags": [
    "30-min",
    "noodle",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My cousin in Jiefangbei ran a street cart for 18 years — her secret was adding a spoonful of aged black vinegar *after* cooking, not before. ‘Acidity must breathe,’ she’d say, tapping the bottle. I still hear her tap when I uncork mine.",
  "storyZh": "我在解放碑摆摊十八年的表姐有个秘诀：陈年香醋绝不入锅，只在出锅后淋入一勺。‘酸味要喘口气’，她总边说边叩瓶底。如今我开瓶，仍听见那声轻叩。",
  "ingredients": [
    {
      "id": "slf-01",
      "nameEn": "dried sweet potato starch noodles (fen si)",
      "nameZh": "干红薯粉条",
      "pinyin": "gān hóng shǔ fěn tiáo",
      "amountMetric": "200 g",
      "amountUS": "2 bundles (approx. 7 oz)",
      "category": "staple",
      "pantry": "asian",
      "note": "Must be 100% sweet potato starch — look for translucent, ivory-white strands. Sub: glass noodles (mung bean) if unavailable.",
      "noteZh": "须为纯红薯淀粉制成，呈半透明象牙白；无则用绿豆粉丝替代。"
    },
    {
      "id": "slf-02",
      "nameEn": "Chinese black vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Do not substitute balsamic or rice vinegar — black vinegar’s mellow acidity is irreplaceable.",
      "noteZh": "禁用意大利香醋或米醋——镇江醋的醇厚酸韵不可替代。",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "slf-03",
      "nameEn": "ground Sichuan peppercorn",
      "nameZh": "花椒粉",
      "pinyin": "huā jiāo fěn",
      "amountMetric": "3 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Grind whole Sichuan peppercorns just before use — store in fridge up to 1 week.",
      "noteZh": "现磨最佳；密封冷藏可存一周。",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "slf-04",
      "nameEn": "chili oil with sediment",
      "nameZh": "红油（带油渣）",
      "pinyin": "hóng yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use chili oil that includes fried chili bits — adds texture and layered heat.",
      "noteZh": "需含辣椒碎渣的红油，增香添层次。"
    },
    {
      "id": "slf-05",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "20 g",
      "amountUS": "3 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "note": "Mince finely — raw garlic must integrate fully, not punch.",
      "noteZh": "需剁极细，生蒜需融于汤中，不可突兀。",
      "termKey": "garlic"
    }
  ],
  "steps": [
    {
      "text": "Soak noodles in room-temp water 20 minutes until pliable but still slightly stiff. Drain well — do not rinse.",
      "textZh": "粉条室温水泡20分钟至柔韧微硬，沥干不冲水。",
      "zhHint": "泡发粉条",
      "stateNote": {
        "visual": "Noodles turn translucent ivory; bend easily without snapping.",
        "visualZh": "粉条呈半透明象牙色，弯曲不断。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "No chalky residue when rubbed between fingers.",
        "signalZh": "指捻无粉感。"
      }
    },
    {
      "text": "Bring 1.2 L water to boil in a large pot. Add drained noodles and cook 2–3 minutes until tender but chewy — taste test at 2 min.",
      "textZh": "大锅烧沸1.2升水，下粉条煮2–3分钟至柔韧有嚼劲，2分钟即试味。",
      "zhHint": "煮粉控时",
      "stateNote": {
        "visual": "Noodles float freely; surface glistens with starch sheen.",
        "visualZh": "粉条自由浮起，表面泛淀粉光泽。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "high",
        "signal": "Bite reveals springy resistance — not slippery or gummy.",
        "signalZh": "咬之弹牙不滑、不粘牙。"
      }
    },
    {
      "text": "Drain noodles thoroughly. Rinse *once* with hot water (not cold) to remove surface starch — shake dry in colander.",
      "textZh": "粉条彻底沥干，用热水（非冷水）快速冲淋一次去浮粉，甩干。",
      "zhHint": "热烫去粉",
      "stateNote": {
        "visual": "Water runs clear after single rinse; noodles separate cleanly.",
        "visualZh": "冲一次即见清水，粉条根根分明。",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "signal": "No sticky film remains on noodle surface.",
        "signalZh": "粉条表面无黏膜残留。"
      }
    },
    {
      "text": "In a bowl, combine black vinegar, chili oil, Sichuan peppercorn powder, minced garlic, and 1/2 tsp salt. Whisk until emulsified.",
      "textZh": "碗中混合香醋、红油、花椒粉、蒜末、盐，搅匀成乳化酱汁。",
      "zhHint": "调酸辣汁",
      "stateNote": {
        "visual": "Mixture thickens slightly; red oil suspends evenly, no separation.",
        "visualZh": "酱汁微稠，红油均匀悬浮，不分层。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aroma sharpens — vinegar tang lifts, chili heat blooms.",
        "signalZh": "醋香上扬，辣香渐盛。"
      }
    },
    {
      "text": "Divide noodles between bowls. Pour hot sauce over. Top with crushed roasted peanuts, fresh cilantro, and scallion greens.",
      "textZh": "粉条分装碗中，浇上热酱汁，撒烤花生碎、香菜、葱绿。",
      "zhHint": "装碗激香",
      "stateNote": {
        "visual": "Sauce sizzles faintly on noodles; steam rises with layered aroma.",
        "visualZh": "酱汁浇上微嘶，热气裹着复合香气升腾。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Vinegar aroma cuts through chili oil — clean, bright, and present.",
        "signalZh": "醋香破油而出，清冽鲜活。"
      }
    }
  ],
  "tips": [
    "For authentic chew, never overcook noodles — they soften further when hot sauce is poured.",
    "Make chili oil at home: heat 1/2 cup neutral oil to 120°C, pour over 3 tbsp coarse chili flakes and 1 tsp Sichuan peppercorns.",
    "Add a splash of light soy sauce *only* if broth tastes flat — never before tasting."
  ],
  "tipsZh": [
    "追求地道嚼劲，切忌煮过头——热汁浇上还会继续软化。",
    "自制红油：中性油半杯加热至120°C，冲入粗辣椒面3大勺+花椒粉1小勺。",
    "仅当尝后觉汤底寡淡，才补少许生抽；切勿未尝先加。"
  ],
  "relatedSlugs": [
    "suan-cai-yu-hot-sour-fish-stew",
    "suan-luo-bo-lao-ya-tang-pickled-radish-duck-soup"
  ],
  "image": "/images/recipes/suan-la-fen-hot-and-sour-noodles.webp"
};
