import type { Recipe } from "@/lib/types";

/** Roast Lamb Chops (烤羊排) (烤羊排) — Day batch */
export const roast_lamb_chops: Recipe = {
  "id": "kao-yang-pai",
  "slug": "roast-lamb-chops",
  "titleEn": "Roast Lamb Chops (烤羊排)",
  "titleZh": "烤羊排",
  "pinyin": "kǎo yáng pái",
  "cuisine": "西北菜",
  "cuisineEn": "Northwest Chinese",
  "region": "Xinjiang",
  "regionZh": "新疆",
  "difficulty": "easy",
  "timeMin": 50,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version roasts lamb rib chops in the oven with a cumin-garlic rub — no special grill needed. A quick sear first locks in juices.",
  "versionNoteZh": "家常版用孜然蒜蓉腌料烤箱烤羊肋排，无需专用烤炉；先煎封汁再烤。",
  "tags": [
    "roast",
    "lamb",
    "weeknight",
    "oven"
  ],
  "dietary": [
    "halal"
  ],
  "story": "At a Uyghur wedding in Kashgar I watched the pitmaster pull whole racks of lamb from the tandoor, glistening with cumin. This oven version captures that fragrant crust without the 200-person feast.",
  "storyZh": "在喀什的维吾尔婚礼上，我看烤匠从馕坑拽出整架孜然油亮的羊排。这烤箱版不办两百人宴也能复刻那层香脆。",
  "ingredients": [
    {
      "id": "rc-01",
      "nameEn": "lamb rib chops",
      "nameZh": "羊肋排",
      "pinyin": "yáng lèi pái",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Frenched or not, just ensure even thickness for even roasting.",
      "noteZh": "修边与否皆可，关键在于厚薄均一。"
    },
    {
      "id": "rc-02",
      "nameEn": "ground cumin",
      "nameZh": "孜然粉",
      "pinyin": "zī rán fěn",
      "amountMetric": "10 g",
      "amountUS": "1.5 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "rc-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（剁碎）",
      "pinyin": "suàn",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "rc-04",
      "nameEn": "neutral oil",
      "nameZh": "植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "rc-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "pinyin": "yán",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "rc-06",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Pat lamb dry. Mix cumin, garlic, oil, salt, and white pepper into a paste; rub all over the chops. Marinate 20 minutes at room temperature.",
      "textZh": "羊肉擦干。将孜然、蒜、油、盐、白胡椒调成糊，均匀抹在排上，室温腌20分钟。",
      "zhHint": "抹料腌制",
      "stateNote": {
        "visual": "Chops glisten with a thin even coat of paste.",
        "visualZh": "排面裹一层薄而匀的料糊，微微发亮。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Aroma of toasted cumin begins to bloom.",
        "signalZh": "焙香孜然气息渐起。"
      }
    },
    {
      "text": "Heat a skillet over high heat. Sear chops 60 seconds per side until well browned.",
      "textZh": "平底锅大火烧热，每面煎60秒至深褐。",
      "zhHint": "高温封煎",
      "stateNote": {
        "visual": "Surface forms a dark crust; juices bead on top.",
        "visualZh": "表面结深褐脆壳，肉面渗出汁珠。",
        "timeRef": "2 minutes total",
        "timeRefZh": "共2分钟",
        "heat": "high",
        "signal": "Sizzle is loud and steady.",
        "signalZh": "滋啦声大而持续。"
      }
    },
    {
      "text": "Transfer to a 200°C (400°F) oven and roast 12–15 minutes for medium, until internal temp reaches 60°C (140°F).",
      "textZh": "移入200°C烤箱烤12–15分钟至五分熟，中心温度达60°C。",
      "zhHint": "入炉烤制",
      "stateNote": {
        "visual": "Edges crisp; center springs back lightly when pressed.",
        "visualZh": "边缘焦脆；中心轻按回弹。",
        "timeRef": "12–15 minutes",
        "timeRefZh": "12–15 分钟",
        "heat": "high",
        "signal": "Fat renders and sizzles at the bone.",
        "signalZh": "油脂在骨边渗出滋响。"
      }
    },
    {
      "text": "Tent with foil and rest 5 minutes so juices redistribute.",
      "textZh": "锡纸松盖静置5分钟，让肉汁回渗。",
      "zhHint": "静汁回渗",
      "stateNote": {
        "visual": "Juices drawn inward; surface stops weeping.",
        "visualZh": "汁液向肉内回流，表面不再渗水。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Temperature equalizes; no pink gush when cut.",
        "signalZh": "温度均一，切开不再涌血水。"
      }
    },
    {
      "text": "Slice between bones and serve with extra cumin sprinkled on top.",
      "textZh": "沿骨缝切开，表面再撒孜然即可上桌。",
      "zhHint": "分切装盘",
      "stateNote": {
        "visual": "Pink-medium center framed by a browned rim.",
        "visualZh": "粉嫩五分中心外圈焦褐。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aroma of roasted lamb and cumin fills the room.",
        "signalZh": "烤羊与孜然的香气充满厨房。"
      }
    }
  ],
  "tips": [
    "Sear first, roast second — it keeps the center juicy while the outside crisps.",
    "Don't overcook; lamb chops dry out fast past medium.",
    "Resting is non-negotiable for tender slices."
  ],
  "tipsZh": [
    "先煎后烤，外脆里嫩、锁汁不柴。",
    "勿过熟，超过五分熟羊排易干。",
    "静置一步不可省，切片才嫩。"
  ],
  "relatedSlugs": [
    "cumin-lamb",
    "hand-torn-lamb",
    "lamb-skewers-chinese-bbq",
    "lamb-pilaf"
  ],
  "image": "/images/recipes/og-default.webp"
};
