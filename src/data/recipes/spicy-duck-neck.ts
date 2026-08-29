import type { Recipe } from "@/lib/types";

/** Spicy Duck Neck (香辣鸭脖) — Seed batch */
export const spicy_duck_neck: Recipe = {
  "id": "xiang-la-ya-bo",
  "slug": "spicy-duck-neck",
  "titleEn": "Spicy Duck Neck",
  "titleZh": "香辣鸭脖",
  "pinyin": "xiāng là yā bó",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses fewer dried chilies and less Sichuan peppercorn than restaurant versions—balanced heat, deep aroma, not numbing.",
  "versionNoteZh": "家常版比餐馆版减少干辣椒和花椒用量，辣度适中、香气浓郁，麻味温和。",
  "tags": [
    "make-ahead",
    "snack",
    "party"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Chengdu’s Jianshe Road market used to cure duck necks in his tiny stall every Tuesday. He’d let me taste-test the brine—just a lick—and say, 'If your tongue tingles but smiles, it’s ready.' That balance is what I chase today.",
  "storyZh": "我在成都建设路市场的舅舅每周二都在他小小的摊位上卤鸭脖。他总让我舔一口卤汁尝味，说：‘舌尖微麻还带笑，就对了。’这种平衡感，我至今还在追寻。",
  "ingredients": [
    {
      "id": "dl-01",
      "nameEn": "duck necks",
      "nameZh": "鸭脖",
      "pinyin": "yā bó",
      "amountMetric": "500 g",
      "amountUS": "1 lb 2 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Look for fresh or frozen duck necks with skin intact; avoid pre-salted or cured versions.",
      "noteZh": "选新鲜或冷冻鸭脖，带皮完整；勿用已腌制或预卤过的。"
    },
    {
      "id": "dl-02",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "15 g",
      "amountUS": "1/4 cup (loosely packed)",
      "category": "spice",
      "pantry": "asian",
      "note": "Use mild-to-medium heat chilies like Chongqing or Korean gochugaru if Sichuan chilies are unavailable.",
      "noteZh": "若无四川二荆条或灯笼椒，可用重庆辣椒或韩式粗辣椒粉替代（中低辣度）。"
    },
    {
      "id": "dl-03",
      "nameEn": "Sichuan peppercorn",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "5 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "dl-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "dl-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "dl-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "dl-07",
      "nameEn": "ginger",
      "nameZh": "姜",
      "pinyin": "jiāng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp, sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "dl-08",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "1/2 cup, cut into 3-cm lengths",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "dl-09",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "3 pcs",
      "amountUS": "3 pcs",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    }
  ],
  "steps": [
    {
      "text": "Rinse duck necks under cold water; soak in cold water with 1 tbsp salt for 30 minutes to draw out blood. Drain and scrub gently with coarse salt.",
      "textZh": "鸭脖用冷水冲洗，加1汤匙盐浸泡30分钟去血水；捞出后用粗盐轻轻搓洗。",
      "zhHint": "去腥关键步骤",
      "stateNote": {
        "visual": "Water turns faintly pink, then clears after rinsing.",
        "visualZh": "水呈淡粉色，冲洗后变清。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "No dark blood clots remain on surface.",
        "signalZh": "表面无深色血块残留。"
      }
    },
    {
      "text": "Place duck necks in a pot with enough cold water to cover. Bring to a boil over high heat, then reduce to medium-low and simmer 5 minutes. Skim off all foam and discard.",
      "textZh": "鸭脖入锅，加足量冷水没过；大火烧开后转中低火煮5分钟，撇净浮沫并弃去。",
      "zhHint": "焯水去杂味",
      "stateNote": {
        "visual": "Grayish-white foam rises steadily to the surface.",
        "visualZh": "灰白色浮沫持续浮起。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Foam stops forming after skimming twice.",
        "signalZh": "撇两次后不再有新浮沫生成。"
      }
    },
    {
      "text": "Drain and rinse duck necks again. Return to clean pot. Add all remaining ingredients except scallions. Pour in enough water to just cover (about 1.2 L). Bring to gentle boil, then lower heat to maintain bare simmer.",
      "textZh": "鸭脖沥干再冲洗一遍，放回干净锅中；加入除小葱外所有调料，加水刚好没过（约1.2升），大火烧开后转最小火保持微沸。",
      "zhHint": "卤汁要刚好没过",
      "stateNote": {
        "visual": "Small bubbles break softly at edges, no rolling boil.",
        "visualZh": "锅边冒细小气泡，无翻滚沸腾。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Surface shimmers without vigorous bubbling.",
        "signalZh": "水面微漾，无剧烈翻腾。"
      }
    },
    {
      "text": "Simmer uncovered for 1 hour 30 minutes, turning duck necks every 20 minutes. After 1 hour, add scallions. Continue simmering until meat pulls cleanly from bone with light pressure (not falling apart).",
      "textZh": "敞盖小火卤90分钟，每20分钟翻动一次；卤1小时后加入小葱，继续卤至肉能轻压离骨（不散烂）。",
      "zhHint": "卤到肉嫩骨松",
      "stateNote": {
        "visual": "Skin turns deep mahogany; liquid reduces by ~1/3.",
        "visualZh": "表皮呈深棕褐色；卤汁减少约三分之一。",
        "timeRef": "1 hour 30 minutes",
        "timeRefZh": "1 小时 30 分钟",
        "heat": "low",
        "signal": "Meat fibers separate easily when poked with chopsticks.",
        "signalZh": "筷子轻戳，肉丝自然分离。"
      }
    },
    {
      "text": "Turn off heat. Let duck necks cool fully in broth (at least 2 hours, ideally overnight in fridge). Remove, pat dry, and serve at room temperature or chilled.",
      "textZh": "关火，鸭脖在卤汁中自然冷却（至少2小时，冷藏过夜更佳）；捞出擦干，室温或冷藏后食用。",
      "zhHint": "浸泡入味是精髓",
      "stateNote": {
        "visual": "Broth thickens slightly and coats spoon lightly.",
        "visualZh": "卤汁微稠，能薄薄挂勺。",
        "timeRef": "2–12 hours",
        "timeRefZh": "2–12 小时",
        "signal": "Duck necks feel plump and glossy, not shriveled.",
        "signalZh": "鸭脖饱满油亮，不干瘪。"
      }
    }
  ],
  "tips": [
    "For deeper color and gloss, add 1 tsp dark soy sauce during last 15 minutes of simmering.",
    "Store in airtight container with 2–3 tbsp cooled broth: keeps 5 days refrigerated, 3 months frozen.",
    "Serve with cold beer or jasmine tea to balance heat."
  ],
  "tipsZh": [
    "最后15分钟加1茶匙老抽，可增色提亮。",
    "密封冷藏保存（带2–3汤匙冷卤汁），可存5天；冷冻可存3个月。",
    "配冰啤酒或茉莉花茶，解辣又清爽。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/spicy-duck-neck.webp"
};
