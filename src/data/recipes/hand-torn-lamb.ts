import type { Recipe } from "@/lib/types";

/** Hand-Torn Lamb (手抓羊肉) (手抓羊肉) — Day batch */
export const hand_torn_lamb: Recipe = {
  "id": "shou-zhua-yang-rou",
  "slug": "hand-torn-lamb",
  "titleEn": "Hand-Torn Lamb (手抓羊肉)",
  "titleZh": "手抓羊肉",
  "pinyin": "shǒu zhuā yáng ròu",
  "cuisine": "西北菜",
  "cuisineEn": "Northwest Chinese",
  "region": "Xinjiang",
  "regionZh": "新疆",
  "difficulty": "easy",
  "timeMin": 70,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version poaches whole lamb ribs in plain water with onion and cumin, then serves them to be eaten by hand with salt — the purest lamb there is.",
  "versionNoteZh": "家常版清水加洋葱孜然白煮整排羊肋，撒盐手抓而食，最本真的羊肉。",
  "tags": [
    "lamb",
    "boiled",
    "weekend",
    "halal-feast"
  ],
  "dietary": [
    "halal"
  ],
  "story": "In a yurt outside Turpan, the host laid a whole rack on the table and said 'eat with your hands, that's how you taste it.' No sauce, no fuss — just lamb and salt.",
  "storyZh": "吐鲁番城外毡房里，主人整架羊排上桌：'用手抓着吃，才尝得到味。'无酱无饰，只有羊肉与盐。",
  "ingredients": [
    {
      "id": "ht-01",
      "nameEn": "lamb ribs (whole rack)",
      "nameZh": "羊肋排（整架）",
      "pinyin": "yáng lèi pái",
      "amountMetric": "900 g",
      "amountUS": "2 lb",
      "category": "protein",
      "pantry": "local",
      "note": "A single rack poached whole stays juicier than pieces.",
      "noteZh": "整架白煮比切块更锁汁。"
    },
    {
      "id": "ht-02",
      "nameEn": "onion, halved",
      "nameZh": "洋葱（对半）",
      "pinyin": "yáng cōng",
      "amountMetric": "100 g",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "ht-03",
      "nameEn": "cumin seeds",
      "nameZh": "孜然籽",
      "pinyin": "zī rán zǐ",
      "amountMetric": "6 g",
      "amountUS": "2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "ht-04",
      "nameEn": "salt (for dipping)",
      "nameZh": "盐（蘸食）",
      "pinyin": "yán",
      "amountMetric": "8 g",
      "amountUS": "1.5 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ht-05",
      "nameEn": "garlic, crushed",
      "nameZh": "蒜（拍碎）",
      "pinyin": "suàn",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ht-06",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "生姜（切片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Place lamb, onion, ginger, garlic, and cumin in a pot with cold water to cover. Bring slowly to a boil.",
      "textZh": "羊肉、洋葱、姜、蒜、孜然冷水入锅没过，慢火煮沸。",
      "zhHint": "冷水下料",
      "stateNote": {
        "visual": "Water clouds slightly from released proteins.",
        "visualZh": "水因析出的蛋白略浊。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium",
        "signal": "First foam appears as it nears boil.",
        "signalZh": "将沸时初现浮沫。"
      }
    },
    {
      "text": "Skim foam, then lower to a bare simmer and poach 50 minutes until meat pulls from the bone.",
      "textZh": "撇沫后转微火白煮50分钟，至肉离骨。",
      "zhHint": "撇沫慢煮",
      "stateNote": {
        "visual": "Broth clears to pale gold; meat firms but stays springy.",
        "visualZh": "汤转淡金，肉紧而弹。",
        "timeRef": "50 minutes",
        "timeRefZh": "50 分钟",
        "heat": "low",
        "signal": "A clean lamb aroma, no gaminess.",
        "signalZh": "清新羊香，无膻。"
      }
    },
    {
      "text": "Lift the rack out; rest 5 minutes so it slices cleanly.",
      "textZh": "整架捞出静置5分钟，便于利落分切。",
      "zhHint": "捞出静切",
      "stateNote": {
        "visual": "Surface stops weeping; fibers set.",
        "visualZh": "表面止渗，纤维定型。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No pink gush when cut.",
        "signalZh": "切开不涌血水。"
      }
    },
    {
      "text": "Cut between ribs into hand-held pieces; arrange on a platter.",
      "textZh": "沿骨缝切成手抓大小，装盘。",
      "zhHint": "分切装盘",
      "stateNote": {
        "visual": "Pink-medium interior framed by cooked rim.",
        "visualZh": "粉嫩中心外圈熟边。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Tender, easily torn by hand.",
        "signalZh": "软嫩，手可撕开。"
      }
    },
    {
      "text": "Serve with a small dish of salt (mixed with cumin if you like) for dipping.",
      "textZh": "配一小碟盐（可拌孜然）蘸食。",
      "zhHint": "蘸盐上桌",
      "stateNote": {
        "visual": "Salt glistens; lamb steams gently on the plate.",
        "visualZh": "盐粒发亮，羊肉在盘上轻冒热气。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Pure lamb aroma dominates.",
        "signalZh": "纯正羊香为主。"
      }
    }
  ],
  "tips": [
    "Poach, never boil hard — gentle heat keeps the meat silky.",
    "Onion and cumin in the water are the only 'seasoning' you need.",
    "Eat warm; cold hand-torn lamb loses its appeal fast."
  ],
  "tipsZh": [
    "白煮勿猛沸，文火才嫩滑。",
    "水里的洋葱孜然就是全部调味。",
    "趁热吃，凉了风味尽失。"
  ],
  "relatedSlugs": [
    "roast-lamb-chops",
    "cumin-lamb",
    "lamb-skewers-chinese-bbq",
    "lamb-pilaf"
  ],
  "image": "/images/recipes/og-default.webp"
};
