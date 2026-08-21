import type { Recipe } from "@/lib/types";

/** Stir-Fried Baby Bok Choy (清炒小白菜) (清炒小白菜) — Day batch */
export const stir_fried_bok_choy: Recipe = {
  "id": "stir-fried-bok-choy",
  "slug": "stir-fried-bok-choy",
  "titleEn": "Stir-Fried Baby Bok Choy (清炒小白菜)",
  "titleZh": "清炒小白菜",
  "pinyin": "qīng chǎo xiǎo bái cài",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National favorite",
  "regionZh": "全国流行",
  "difficulty": "easy",
  "timeMin": 10,
  "servings": 2,
  "version": "family",
  "versionNote": "Simple garlic stir-fry — the purest expression of bok choy's natural sweetness. No oyster sauce, no complicated seasoning, just salt and garlic.",
  "versionNoteZh": "蒜蓉清炒——小白菜天然甜味的最纯粹表达。不加蚝油，不复杂调味，只靠盐和蒜。",
  "tags": [
    "quick",
    "vegetarian",
    "weeknight",
    "15-min",
    "5-ingredients"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "小白菜 is the most ubiquitous green in Chinese home cooking. Whether it is baby bok choy from a supermarket or the slightly more robust Chinese cabbage variant, the principle is the same: high heat, minimal seasoning, and respect for the vegetable's natural sweetness.",
  "storyZh": "小白菜是中国家庭餐桌最常见的绿叶菜。无论超市里的小白菜还是稍粗壮的菜心，做法原则一致：大火、少调味、尊重蔬菜本身的清甜。",
  "image": "/images/recipes/stir-fried-bok-choy.svg",
  "ingredients": [
    {
      "id": "sbk-01",
      "nameEn": "baby bok choy",
      "nameZh": "小白菜",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "400 g",
      "amountUS": "1 large bunch (about 14 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "baby-bok-choy",
      "note": "Halve lengthwise if large; keep small ones whole. Look for crisp white stems and dark green leaves.",
      "noteZh": "大棵对半切，小棵整颗用。选白茎脆嫩、叶色深绿者。"
    },
    {
      "id": "sbk-02",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sbk-03",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sbk-04",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sbk-05",
      "nameEn": "white pepper (optional)",
      "nameZh": "白胡椒粉",
      "amountMetric": "¼ tsp",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Wash bok choy thoroughly. Halve lengthwise if large, leave small ones whole. Shake dry — excess water dilutes the stir-fry.",
      "textZh": "小白菜彻底洗净。大棵对半切，小棵整颗用。甩干——多余水分会稀释炒菜风味。",
      "zhHint": "洗净甩干",
      "stateNote": {
        "visual": "Leaves are perky and stems are crisp-white, no slime or yellowing",
        "visualZh": "叶片挺立、白茎脆嫩，无黏液或黄叶",
        "signal": "Stems snap cleanly when bent",
        "signalZh": "茎部折断时发出清脆声"
      }
    },
    {
      "text": "Mince garlic. Set near the stove — you will need it in 30 seconds.",
      "textZh": "蒜切末，放灶台边备用——30秒后就要用。",
      "zhHint": "备蒜末"
    },
    {
      "text": "Heat oil in a wok over high heat until shimmering (about 30 seconds).",
      "textZh": "大火烧锅至油微微泛光（约30秒）。",
      "zhHint": "热锅",
      "stateNote": {
        "visual": "Oil flows like liquid glass with faint ripples",
        "visualZh": "油如流质玻璃，泛起细微涟漪",
        "heat": "high",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "A drop of water sizzles and evaporates instantly",
        "signalZh": "水滴入锅即刻嘶嘶汽化"
      }
    },
    {
      "text": "Add garlic. Stir 5 seconds until fragrant. Add bok choy stems first — they take longer — and stir-fry 30 seconds.",
      "textZh": "下蒜末，快炒5秒至出香。先下小白菜茎部——更难熟——大火快炒30秒。",
      "zhHint": "先炒茎",
      "stateNote": {
        "visual": "Garlic bubbles and turns pale gold at edges",
        "visualZh": "蒜末冒泡，边缘微呈浅金",
        "heat": "high",
        "timeRef": "5 seconds + 30 seconds",
        "timeRefZh": "5 秒 + 30 秒",
        "signal": "Garlic aroma is sharp and sweet, not burnt",
        "signalZh": "蒜香尖锐甘甜，非焦苦"
      }
    },
    {
      "text": "Add leaves and salt. Toss continuously for 60 seconds until leaves are glossy and wilted but stems still snap.",
      "textZh": "下叶片和盐，持续翻炒60秒，至叶片油亮塌软但茎部依然脆断。",
      "zhHint": "大火快炒60秒",
      "stateNote": {
        "visual": "Leaves are wilted and glossy; stems retain bright white color",
        "visualZh": "叶片塌软油亮；茎部保持亮白色",
        "heat": "high",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "signal": "No green steam or raw vegetable smell; stems bend without snapping",
        "signalZh": "无青涩蒸汽味或生青味；茎部可弯不断"
      }
    },
    {
      "text": "Add white pepper if using. Toss 10 seconds and serve immediately.",
      "textZh": "加白胡椒粉（可选），翻10秒立即上桌。",
      "zhHint": "调味出锅"
    }
  ],
  "tips": [
    "The wok must be screaming hot — this dish is over in 2 minutes total.",
    "Do not cover — trapped moisture ruins the texture.",
    "Salt goes on at the end, not the beginning; early salting draws out water too fast."
  ],
  "tipsZh": [
    "锅必须烧到冒烟——这道菜总共只花2分钟。",
    "不要盖锅盖——蒸汽会毁掉口感。",
    "盐最后放，不是最先放——早放盐会逼出太多水分。"
  ],
  "relatedSlugs": [
    "oyster-sauce-lettuce",
    "garlic-romaine",
    "garlic-chives-scrambled-eggs"
  ]
};
