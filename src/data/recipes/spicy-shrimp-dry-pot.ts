import type { Recipe } from "@/lib/types";

/** Spicy Shrimp Dry Pot (香辣虾) — Seed batch */
export const spicy_shrimp_dry_pot: Recipe = {
  "id": "xiang-la-xia",
  "slug": "spicy-shrimp-dry-pot",
  "titleEn": "Spicy Shrimp Dry Pot",
  "titleZh": "香辣虾",
  "pinyin": "xiāng là xiā",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses less oil and no deep-frying—shrimp are pan-seared then stir-braised for tender-crisp texture, just like Aunt Mei’s wok in her Qingyang District apartment.",
  "versionNoteZh": "家常版少油不油炸，虾仁先煎后焖，保持鲜嫩弹牙，正如青羊区梅姨家铁锅里的味道。",
  "tags": [
    "30-min",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle ran a small dry-pot stall near Jianshe Road in Chengdu in the 1990s. He’d toss fresh river shrimp with fermented broad-bean paste and Sichuan peppercorns before sizzling them in lard—he always said the key was ‘hot wok, cold oil’ to lock in sweetness without toughness.",
  "storyZh": "我舅舅20世纪90年代在成都建设路摆干锅摊，专挑活蹦乱跳的河虾，用郫县豆瓣和花椒腌一腌，再用猪油猛火快炒——他总说‘锅要烫、油要凉’，才能锁住虾肉清甜又不老韧。",
  "ingredients": [
    {
      "id": "xlx-01",
      "nameEn": "large shrimp, peeled and deveined (with tails on)",
      "nameZh": "大虾（去壳去线，留尾）",
      "pinyin": "dà xiā",
      "amountMetric": "300 g",
      "amountUS": "1 ¼ cups (approx.)",
      "category": "protein",
      "pantry": "local",
      "note": "Use fresh or fully thawed frozen; pat very dry before cooking.",
      "noteZh": "选用鲜虾或完全解冻的冷冻虾；下锅前务必擦干水分。"
    },
    {
      "id": "xlx-02",
      "nameEn": "Sichuan doubanjiang (fermented broad-bean chili paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "xlx-03",
      "nameEn": "fresh ginger, julienned",
      "nameZh": "鲜姜丝",
      "pinyin": "xiān jiāng sī",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp, finely julienned",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "xlx-04",
      "nameEn": "garlic cloves, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "12 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "xlx-05",
      "nameEn": "dried red chilies, stemmed and roughly broken",
      "nameZh": "干红辣椒（去梗掰段）",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "10 g",
      "amountUS": "15-20 pieces",
      "category": "spice",
      "pantry": "asian",
      "note": "Substitute crushed red pepper flakes (6 g / 1 tsp) if unavailable — but reduce by half for heat control.",
      "noteZh": "如无干辣椒，可用红椒碎替代（6克/1茶匙），但减半使用以控辣度。"
    },
    {
      "id": "xlx-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "xlx-07",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Pat shrimp completely dry with paper towels. Season lightly with white pepper (optional) and set aside.",
      "textZh": "用厨房纸将虾仁彻底吸干；可轻撒少许白胡椒粉，静置备用。",
      "zhHint": "务必擦干！"
    },
    {
      "text": "Heat 30 ml (2 tbsp) neutral oil in a heavy-bottomed wok or skillet over medium-high heat until shimmering but not smoking.",
      "textZh": "厚底炒锅或深煎锅中倒入30毫升（2汤匙）无味油，中大火加热至油面微泛涟漪、未冒烟。",
      "zhHint": "热锅凉油",
      "stateNote": {
        "visual": "Oil shimmers with faint ripples, no smoke rising",
        "visualZh": "油面微微泛起涟漪，无青烟升腾",
        "timeRef": "45–60 seconds",
        "timeRefZh": "45–60 秒",
        "heat": "medium-high",
        "signal": "A drop of water sizzles and vanishes instantly",
        "signalZh": "滴入一滴水立即爆裂汽化"
      }
    },
    {
      "text": "Add shrimp in a single layer. Sear undisturbed for 1 minute, then flip and cook 30 seconds more until edges turn pink and opaque. Remove and set aside.",
      "textZh": "虾平铺入锅，静置煎1分钟；翻面再煎30秒，至边缘微粉、断生即盛出。",
      "zhHint": "单层煎，不翻动",
      "stateNote": {
        "visual": "Shrimp edges blush pink, bodies curl slightly, no gray translucency remains",
        "visualZh": "虾边泛粉红，虾身微卷，无灰白半透明区域",
        "timeRef": "1½ minutes total",
        "timeRefZh": "共约1分30秒",
        "heat": "medium-high",
        "signal": "Shrimp release easily from pan when lifted with chopsticks",
        "signalZh": "筷子轻提，虾仁轻松离锅不粘底"
      }
    },
    {
      "text": "Reduce heat to medium. Add doubanjiang, ginger, garlic, and dried chilies. Stir-fry 1 minute until fragrant and oil turns reddish.",
      "textZh": "转中火，下豆瓣酱、姜丝、蒜末、干辣椒段，煸炒1分钟至香气迸发、油色微红。",
      "zhHint": "小火煸香酱料",
      "stateNote": {
        "visual": "Oil separates slightly and gains a deep red-orange hue",
        "visualZh": "油开始微析出，呈深橙红色",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Aromatic steam rises, no burning or blackening at edges",
        "signalZh": "升腾浓郁辛香蒸汽，边缘无焦糊变黑"
      }
    },
    {
      "text": "Return shrimp to wok. Add light soy sauce and Shaoxing wine. Toss constantly over medium-high heat for 1½ minutes until sauce coats evenly and shrimp are glossy and hot through.",
      "textZh": "虾倒回锅中，淋入生抽与绍酒，中大火快速翻炒1分30秒，至酱汁均匀裹附、虾身油亮、热透。",
      "zhHint": "快炒收汁",
      "stateNote": {
        "visual": "Shrimp glisten with a thin, clinging glaze; no pooling liquid remains",
        "visualZh": "虾身油亮泛光，酱汁薄而紧裹，锅底无多余汁水",
        "timeRef": "1½ minutes",
        "timeRefZh": "1分30秒",
        "heat": "medium-high",
        "signal": "A faint caramelized aroma emerges, not burnt",
        "signalZh": "飘出轻微焦糖香，非焦糊味"
      }
    }
  ],
  "tips": [
    "For best texture, never overcrowd the wok when searing shrimp—cook in batches if needed.",
    "Doubanjiang must be stir-fried long enough to mellow its raw bean taste; undercooking leaves bitterness.",
    "Serve immediately in a pre-warmed clay pot or heavy bowl—the dish cools fast and loses its 'dry pot' character."
  ],
  "tipsZh": [
    "煎虾时切勿堆叠，虾多则分批操作，确保每只受热均匀。",
    "豆瓣酱需充分煸炒至豆腥味散尽，否则成品带苦涩。",
    "务必趁热上桌，推荐用预热过的砂锅或厚壁碗盛装——冷了就失了‘干锅’神韵。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/spicy-shrimp-dry-pot.webp"
};
