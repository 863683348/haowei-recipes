import type { Recipe } from "@/lib/types";

/** Farmhouse One-Bowl Fragrance (农家一碗香) — Seed batch */
export const farmhouse_one_bowl_fragrance: Recipe = {
  "id": "nong-jia-yi-wan-xiang",
  "slug": "farmhouse-one-bowl-fragrance",
  "titleEn": "Farmhouse One-Bowl Fragrance",
  "titleZh": "农家一碗香",
  "pinyin": "nóng jiā yī wǎn xiāng",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Changsha",
  "regionZh": "长沙",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses fresh local pork belly and seasonal greens—no pre-marinated meats or MSG. Restaurant versions often add dried shrimp; we skip it for simplicity and authenticity.",
  "versionNoteZh": "家常版用新鲜五花肉和时令青菜，不腌肉、不加味精；餐馆版有时加虾米提鲜，我们为简化操作与本真风味而省略。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Wangcheng District, Changsha, cooked this every rainy afternoon—she’d fry the pork belly until golden, then toss in whatever was left in the garden: bitter greens, green beans, and last summer’s dried chillies. She called it 'the bowl that chases away damp cold'.",
  "storyZh": "我在长沙望城区的姑妈每逢阴雨天下午必做这道菜——她先把五花肉煸至金黄，再下园子里现摘的苦菜、四季豆和去年晒的干辣椒。她说这是‘驱湿寒的一碗香’。",
  "ingredients": [
    {
      "id": "nw-01",
      "nameEn": "pork belly, skinless, diced 1.5 cm",
      "nameZh": "五花肉（去皮，1.5 厘米见方）",
      "pinyin": "wǔ huā ròu",
      "amountMetric": "250 g",
      "amountUS": "1 cup (diced)",
      "category": "protein",
      "pantry": "local",
      "note": "Choose meat with even fat-meat ratio (3:7); avoid pre-sliced deli-style",
      "noteZh": "选肥瘦均匀（三七开）的五花肉；勿用冷切肉片"
    },
    {
      "id": "nw-02",
      "nameEn": "Chinese celery, chopped (stems only)",
      "nameZh": "西芹（只取茎，切段）",
      "pinyin": "xī qín",
      "amountMetric": "120 g",
      "amountUS": "1 cup (chopped)",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute with regular celery if Chinese celery unavailable",
      "noteZh": "若无西芹，可用普通西芹替代"
    },
    {
      "id": "nw-03",
      "nameEn": "dried red chillies, crushed",
      "nameZh": "干红辣椒（剪碎）",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Use medium-heat Hunan chillies like ‘Xiangjiao’; substitute with Korean gochugaru + 1/4 tsp Sichuan peppercorn if needed",
      "noteZh": "优选湖南‘湘椒’干辣椒；若无，可用韩式粗辣椒粉+1/4 茶匙花椒替代",
      "termKey": "dried-chili"
    },
    {
      "id": "nw-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "nw-05",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "12 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "garlic"
    }
  ],
  "steps": [
    {
      "text": "Heat a wok over medium-high heat. Add pork belly and stir-fry without oil until fat renders and edges turn golden brown.",
      "textZh": "旺火加热炒锅，下五花肉，不放油干煸至出油、边缘微焦黄。",
      "zhHint": "干煸出油",
      "stateNote": {
        "visual": "Small pools of clear pork fat shimmering around golden-brown cubes",
        "visualZh": "金黄肉丁周围渗出清亮猪油小泡",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium-high",
        "signal": "A rich, nutty aroma rises and the wok begins to smoke lightly",
        "signalZh": "散发坚果香气，锅面微微冒青烟"
      },
      "tip": "Do not rush — proper rendering ensures tender texture and deep flavor.",
      "tipZh": "不可心急——充分煸出油才能肉质软嫩、香味醇厚。"
    },
    {
      "text": "Push pork to one side. Add crushed dried chillies and minced garlic to the empty space; stir 15 seconds until fragrant.",
      "textZh": "将肉拨至锅边，空出位置下干辣椒碎和蒜末，煸香15秒。",
      "zhHint": "单侧爆香",
      "stateNote": {
        "visual": "Garlic turns pale gold; chillies puff slightly and darken at edges",
        "visualZh": "蒜末呈浅金色；辣椒边缘微深、略膨起",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "high",
        "signal": "Sharp, spicy fragrance fills the kitchen",
        "signalZh": "厨房内瞬间充满辛辣香气"
      }
    },
    {
      "text": "Return pork to center. Add light soy sauce and stir-fry 30 seconds to coat evenly.",
      "textZh": "将肉回中，淋入生抽，快速翻炒30秒至均匀裹色。",
      "zhHint": "淋酱快炒",
      "stateNote": {
        "visual": "Sauce coats each cube with glossy amber sheen",
        "visualZh": "每块肉裹上透亮琥珀色酱汁",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Sizzling intensifies and steam rises sharply",
        "signalZh": "滋滋声变响，白气骤升"
      }
    },
    {
      "text": "Add chopped Chinese celery. Stir-fry on high heat for 2 minutes until stalks soften but retain crunch.",
      "textZh": "下西芹段，大火快炒2分钟，至断生但仍脆嫩。",
      "zhHint": "脆嫩断生",
      "stateNote": {
        "visual": "Celery turns bright green and begins to curl slightly at tips",
        "visualZh": "西芹转鲜绿色，尖端微卷",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Edges of celery become translucent",
        "signalZh": "芹菜边缘变半透明"
      }
    },
    {
      "text": "Taste and adjust salt only if needed (soy sauce is usually sufficient). Serve immediately in a warm bowl.",
      "textZh": "尝味，仅在必要时补少许盐（通常生抽已足够咸度）。趁热盛入预热碗中。",
      "zhHint": "尝味慎盐",
      "stateNote": {
        "visual": "Steam rises steadily from steaming hot bowl",
        "visualZh": "热气从滚烫碗中持续升腾",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Aromatic steam carries scent of chilli, garlic, and pork fat",
        "signalZh": "热气裹挟着辣椒、蒜香与脂香扑鼻"
      }
    }
  ],
  "tips": [
    "Use a carbon-steel or cast-iron wok — nonstick won’t achieve proper wok hei.",
    "If using regular celery, reduce cooking time by 30 seconds to preserve crunch.",
    "Leftovers taste better the next day — reheat in wok with 1 tsp oil."
  ],
  "tipsZh": [
    "务必用熟铁或铸铁炒锅——不粘锅无法形成锅气。",
    "若用普通西芹，缩短30秒炒制时间以保脆嫩。",
    "隔夜再热更香：用1茶匙油在锅中复炒即可。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/farmhouse-one-bowl-fragrance.webp"
};
