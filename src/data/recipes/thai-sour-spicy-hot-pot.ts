import type { Recipe } from "@/lib/types";

/** Thai-Style Sour-Spicy Hot Pot (泰式酸辣锅) — Seed batch */
export const thai_sour_spicy_hot_pot: Recipe = {
  "id": "tai-shi-suan-la-guo",
  "slug": "thai-sour-spicy-hot-pot",
  "titleEn": "Thai-Style Sour-Spicy Hot Pot",
  "titleZh": "泰式酸辣锅",
  "pinyin": "tài shì suān là guō",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "This is Chongqing’s home adaptation of Thai tom yum — using local doubanjiang and Sichuan peppercorn instead of lemongrass or kaffir lime leaves, keeping it pantry-friendly without sacrificing brightness or heat.",
  "versionNoteZh": "重庆家庭版冬阴功：以郫县豆瓣与花椒替代香茅、青柠叶，保留酸辣鲜亮，全靠本地调料实现。",
  "tags": [
    "30-min",
    "bold",
    "vegetable-forward"
  ],
  "dietary": [
    "none"
  ],
  "story": "When my cousin moved from Bangkok to Chongqing in 2008, she missed tom yum so much she reverse-engineered it using what she could find — doubanjiang for umami depth, Sichuan peppercorn for tingle, and rice vinegar for clean acidity. Her version became our Lunar New Year ‘cross-border pot’.",
  "storyZh": "2008年表姐从曼谷搬来重庆，太想念冬阴功，就用能买到的调料复刻：郫县豆瓣提醇、花椒增麻、米醋赋酸。这锅‘跨国年味’成了我家春节固定节目。",
  "ingredients": [
    {
      "id": "ts-01",
      "nameEn": "doubanjiang (spicy fermented broad bean paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for ‘Pixian’ label and red-brown color. Sub: Korean gochujang (2 tbsp) + ½ tsp sugar.",
      "noteZh": "认准‘郫县’标与红褐色；可替代：韩式辣酱2汤匙+糖½茶匙。",
      "termKey": "doubanjiang"
    },
    {
      "id": "ts-02",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Toasted lightly before use. Sub: ½ tsp ground Sichuan pepper (add at end).",
      "noteZh": "使用前微焙；可替代：花椒粉½茶匙（关火前加）。",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "ts-03",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "pinyin": "mǐ cù",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sub: apple cider vinegar (same amount) — milder but works.",
      "noteZh": "可替代：苹果醋（等量），风味稍柔。",
      "termKey": "rice-vinegar"
    },
    {
      "id": "ts-04",
      "nameEn": "tofu puffs (fried tofu cubes)",
      "nameZh": "油豆腐泡",
      "pinyin": "yóu dòu fu pào",
      "amountMetric": "200 g",
      "amountUS": "2 cups, loosely packed",
      "category": "staple",
      "pantry": "asian",
      "note": "Pre-fried, spongy texture absorbs broth well. Sub: firm tofu, cubed & pan-fried until golden.",
      "noteZh": "已炸制，蜂窝结构吸汤力强；可替代：老豆腐切块煎至金黄。"
    },
    {
      "id": "ts-05",
      "nameEn": "dried chili flakes",
      "nameZh": "干辣椒碎",
      "pinyin": "gān là jiāo suì",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Adjust to taste. Sub: ½ tsp cayenne pepper.",
      "noteZh": "依口味调整；可替代：卡宴辣椒粉½茶匙。",
      "termKey": "dried-chili"
    }
  ],
  "steps": [
    {
      "text": "Heat 15 ml (1 tbsp) neutral oil in a wok over medium heat. Add doubanjiang and stir-fry 2 minutes until oil turns red and fragrance blooms.",
      "textZh": "中火加热中性油15毫升。下郫县豆瓣酱，炒2分钟至油色变红、香气迸发。",
      "zhHint": "煸透豆瓣，红油初成",
      "stateNote": {
        "visual": "Oil separates and reddens around edges of paste; tiny bubbles pop steadily.",
        "visualZh": "油沿酱边析出并泛红；酱面持续细泡迸裂。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Aroma shifts from raw bean to toasted, fermented warmth.",
        "signalZh": "气味由生豆味转为烘烤发酵暖香。"
      }
    },
    {
      "text": "Add Sichuan peppercorns and dried chili flakes. Stir 1 minute until fragrant — do not burn.",
      "textZh": "下花椒与干辣椒碎，炒1分钟至香而不焦。",
      "zhHint": "激香辛料，忌糊锅",
      "stateNote": {
        "visual": "Peppercorns swell slightly; chili flakes deepen in color.",
        "visualZh": "花椒微胀；辣椒碎颜色加深。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Sharp citrusy-tingle rises from pan — that’s the Sichuan pepper blooming.",
        "signalZh": "鼻尖跃起柑橘麻香——正是花椒绽放时刻。"
      }
    },
    {
      "text": "Pour in 1.5 L water and bring to a vigorous simmer. Add tofu puffs and simmer 10 minutes to infuse.",
      "textZh": "倒入1.5升水，大火烧至翻滚。下油豆腐泡，中火浸煮10分钟。",
      "zhHint": "水沸入料，充分吸味",
      "stateNote": {
        "visual": "Tofu puffs plump and darken slightly; broth froths lightly.",
        "visualZh": "油豆腐泡胀大微深；汤面轻泛泡沫。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium",
        "signal": "Tofu feels tender but resilient when pressed with chopsticks.",
        "signalZh": "筷压豆腐泡柔软而有弹性。"
      }
    },
    {
      "text": "Stir in rice vinegar and simmer 2 more minutes. Taste — adjust with ½ tsp sugar (2 g) if too sharp, or ½ tsp light soy sauce (7 ml) if too flat.",
      "textZh": "加入米醋，再煮2分钟。尝味：若过酸加糖2克，若寡淡加生抽7毫升。",
      "zhHint": "酸度平衡，鲜味托底",
      "stateNote": {
        "visual": "Broth bubbles with fine, active foam; steam carries bright tang.",
        "visualZh": "汤面泛细密活泡；蒸气裹着清冽酸香。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Acidity lifts the tongue without stinging — you taste sourness first, then warmth.",
        "signalZh": "酸味提神不刺舌——先觉酸，后觉暖。"
      }
    },
    {
      "text": "Transfer to hot pot. Serve with raw additions: sliced mushrooms, baby corn, snow peas, and fresh cilantro. Optional protein: quick-poached shrimp or thinly sliced pork belly.",
      "textZh": "转入热锅。配烫食材：鲜菇片、玉米段、豌豆苗、香菜。可选荤料：虾仁或薄五花肉片快烫。",
      "zhHint": "素鲜为主，荤料随心",
      "stateNote": {
        "visual": "Broth ripples with crimson oil swirls; tofu puffs bob like buoys.",
        "visualZh": "汤面漾着红油漩涡；豆腐泡如浮标起伏。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "medium-high",
        "signal": "First ladleful releases steam with unmistakable sour-spicy lift.",
        "signalZh": "第一勺舀起，热气裹着酸辣鲜香扑面而来。"
      }
    }
  ],
  "tips": [
    "Toast Sichuan peppercorns in a dry pan 30 seconds before grinding — enhances numbing effect.",
    "For deeper umami, add 1 tsp fish sauce (15 ml) at the end — it won’t taste fishy, just richer.",
    "Serve with jasmine rice on the side — the broth soaks in beautifully."
  ],
  "tipsZh": [
    "花椒干锅焙30秒再碾碎，麻感更鲜明。",
    "增鲜可选：关火前加鱼露15毫升——不显鱼腥，只添醇厚。",
    "配茉莉香米饭同食，汤汁浸润尤佳。"
  ],
  "relatedSlugs": [
    "lamb-scorpion-hot-pot",
    "da-bian-lu"
  ],
  "image": "/images/recipes/thai-sour-spicy-hot-pot.webp"
};
