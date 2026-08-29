import type { Recipe } from "@/lib/types";

/** Boat Noodle-Style 'Tingzai' Congee (艇仔粥) — Seed batch */
export const tingzai_congee: Recipe = {
  "id": "tingzai-zhou",
  "slug": "tingzai-congee",
  "titleEn": "Boat Noodle-Style 'Tingzai' Congee",
  "titleZh": "艇仔粥",
  "pinyin": "tǐng zǎi zhōu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version simplifies the classic ‘boat people’ recipe: uses accessible proteins (shrimp, fish, pork) instead of dried squid or abalone, and skips deep-frying garnishes—opting for quick-seared toppings instead.",
  "versionNoteZh": "家常版简化水上人家原方：以易购虾仁、鱼片、瘦肉替代干鱿、鲍片，省去炸酥料工序，改用快煎配料提升香气。",
  "tags": [
    "55-min",
    "seafood",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle ran a floating breakfast boat on the Pearl River in the 1980s—he’d paddle up at dawn with steaming cauldrons of tingzai zhou, topped with crisp fried peanuts and fresh scallions. I remember him saying, ‘The best congee doesn’t need fancy things—just good rice, clean water, and what the river gives.’",
  "storyZh": "八十年代，我叔父在珠江上撑早饭船，天未亮就摇橹而来，船头大锅盛着热腾腾的艇仔粥，撒满脆花生与青葱。他常说：‘最好的粥不用贵料，好米、清水、河里给的，足矣。’",
  "ingredients": [
    {
      "id": "tz-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "120 g",
      "amountUS": "3/4 cup",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until water runs clear; soak 30 minutes for ideal creaminess",
      "noteZh": "淘至水清，浸泡30分钟达最佳绵滑度"
    },
    {
      "id": "tz-02",
      "nameEn": "raw shrimp, peeled and deveined",
      "nameZh": "鲜虾仁",
      "pinyin": "xiān xiā rén",
      "amountMetric": "120 g",
      "amountUS": "4 oz (½ cup)",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tz-03",
      "nameEn": "white fish fillet (cod or tilapia), cut into 1 cm dice",
      "nameZh": "白身鱼块（鳕鱼或罗非鱼）",
      "pinyin": "bái shēn yú kuài",
      "amountMetric": "100 g",
      "amountUS": "3.5 oz (½ cup)",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tz-04",
      "nameEn": "lean pork loin, very thin slices",
      "nameZh": "猪里脊薄片",
      "pinyin": "zhū lǐ jǐ bó piàn",
      "amountMetric": "100 g",
      "amountUS": "3.5 oz (½ cup)",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tz-05",
      "nameEn": "fresh ginger, finely grated",
      "nameZh": "鲜姜末",
      "pinyin": "xiān jiāng mò",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tz-06",
      "nameEn": "scallions, finely chopped (green parts only)",
      "nameZh": "小葱绿段，切细",
      "pinyin": "xiǎo cōng lǜ duàn, qiē xì",
      "amountMetric": "30 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse rice and soak in 800 ml (3⅓ cups) cold water for 30 minutes. Drain, reserving soaking water.",
      "textZh": "大米淘净，加800毫升冷水浸泡30分钟，沥干并保留泡米水。",
      "zhHint": "泡米留水"
    },
    {
      "text": "Bring reserved soaking water and rice to a rolling boil in a heavy pot. Reduce heat to low, cover partially, and simmer 35 minutes, stirring every 8 minutes.",
      "textZh": "将泡米水与米倒入厚底锅，大火烧至翻滚，转小火半盖盖子炖35分钟，每8分钟轻搅一次。",
      "zhHint": "大火滚后转小火"
    },
    {
      "text": "While congee simmers, quickly sear shrimp, fish, and pork in a nonstick pan with 1 tsp oil over medium-high heat until just opaque (2–3 min). Remove and set aside.",
      "textZh": "粥炖煮时，另起不粘锅，加1茶匙油中高火快煎虾仁、鱼块与肉片至刚断生（2–3分钟），盛出备用。",
      "zhHint": "配料快煎"
    },
    {
      "text": "Stir grated ginger into congee. Simmer 3 more minutes to infuse aroma.",
      "textZh": "将姜末拌入粥中，再煮3分钟激发香气。",
      "zhHint": "姜末增香",
      "stateNote": {
        "visual": "Surface shimmers with tiny ginger specks and steam rises steadily",
        "visualZh": "粥面浮着细密姜末，蒸汽持续平稳升腾",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Aromatic ginger scent fills the kitchen clearly",
        "signalZh": "厨房弥漫清晰的姜香"
      }
    },
    {
      "text": "Gently fold in seared proteins and half the scallions. Simmer 2 more minutes—do not overcook seafood.",
      "textZh": "轻拌入煎好的食材与一半葱花，再煮2分钟——切勿久煮海鲜。",
      "zhHint": "海鲜最后下"
    }
  ],
  "tips": [
    "For authentic crunch, toast unsalted peanuts in a dry pan until golden—cool before sprinkling.",
    "If fish sticks to pan, ensure pan is hot and oil is shimmering before adding.",
    "This congee is best served immediately—top with remaining scallions and a drizzle of sesame oil."
  ],
  "tipsZh": [
    "为地道酥脆感，干锅焙香无盐花生至金黄，晾凉后再撒。",
    "鱼片易粘锅？务必热锅热油（油面微涟漪）再下。",
    "此粥宜即煮即食，上桌前撒余下葱花，淋几滴芝麻油。"
  ],
  "relatedSlugs": [
    "pidan-shourou-congee",
    "jidi-congee"
  ],
  "image": "/images/recipes/tingzai-congee.webp"
};
