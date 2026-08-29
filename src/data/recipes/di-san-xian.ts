import type { Recipe } from "@/lib/types";

/** Three-Braised Delights (Potato, Eggplant, Green Pepper) (地三鲜) — Seed batch */
export const di_san_xian: Recipe = {
  "id": "di-san-xian",
  "slug": "di-san-xian",
  "titleEn": "Three-Braised Delights (Potato, Eggplant, Green Pepper)",
  "titleZh": "地三鲜",
  "pinyin": "dì sān xiān",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Heilongjiang",
  "regionZh": "黑龙江",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "True family-style di san xian uses shallow-frying for texture contrast — not deep-fried like restaurant versions. The sauce is light, savory, and glossy, never gloppy.",
  "versionNoteZh": "地道家常版‘地三鲜’用浅油煎出外酥里糯，非餐馆式深炸。酱汁清亮咸鲜，绝不糊口。",
  "tags": [
    "vegetable-forward",
    "wok-hei",
    "30-min"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "In Harbin, my uncle ran a tiny breakfast stall where he served di san xian over rice every Tuesday. He’d fry each vegetable separately in the same oil — potatoes first, then eggplant, then peppers — saying, ‘Each one must breathe its own breath before they marry in the wok.’",
  "storyZh": "哈尔滨的舅舅开过一家小早餐摊，每周二必卖地三鲜盖饭。他坚持三种蔬菜分锅煎：先土豆、再茄子、最后青椒，说‘每样得先喘口气，才能进锅成亲’。",
  "ingredients": [
    {
      "id": "potato-01",
      "nameEn": "Yukon Gold potatoes",
      "nameZh": "黄心土豆",
      "pinyin": "huáng xīn tǔ dòu",
      "amountMetric": "300 g",
      "amountUS": "2 medium potatoes (~10.5 oz)",
      "category": "produce",
      "pantry": "local",
      "note": "Cut into 2 cm cubes; rinse and pat dry thoroughly",
      "noteZh": "切2厘米方块，冲洗后彻底擦干"
    },
    {
      "id": "eggplant-02",
      "nameEn": "Chinese eggplant",
      "nameZh": "长茄",
      "pinyin": "cháng qié",
      "amountMetric": "250 g",
      "amountUS": "1 medium eggplant (~9 oz)",
      "category": "produce",
      "pantry": "local",
      "note": "Slice into 2 cm thick half-moons; salt lightly and drain 10 min",
      "noteZh": "切2厘米厚半圆片，轻盐腌10分钟挤水"
    },
    {
      "id": "pepper-03",
      "nameEn": "green bell peppers",
      "nameZh": "青椒",
      "pinyin": "qīng jiāo",
      "amountMetric": "150 g",
      "amountUS": "1 large pepper",
      "category": "produce",
      "pantry": "local",
      "note": "Core and seed; cut into 2 cm diamond shapes",
      "noteZh": "去籽去筋，切2厘米菱形片"
    },
    {
      "id": "garlic-04",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "10 g",
      "amountUS": "2 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "soy-05",
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
      "id": "vinegar-06",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Heat 3 tbsp neutral oil in a wok over medium-high heat. Fry potato cubes in batches until golden and crisp-edged — about 3 minutes per batch. Drain on paper towels.",
      "textZh": "炒锅倒3汤匙中性油，中高火加热。分批炸土豆块至金黄、边缘微脆（每批约3分钟）。捞出沥油。",
      "zhHint": "分批炸，防降温失脆",
      "stateNote": {
        "visual": "Potatoes float actively and bubble vigorously around edges",
        "visualZh": "土豆浮起，边缘剧烈冒泡",
        "timeRef": "3 minutes per batch",
        "timeRefZh": "每批3分钟",
        "heat": "medium-high",
        "signal": "Bubbling quiets slightly as crust forms",
        "signalZh": "起壳后气泡声略微减弱"
      }
    },
    {
      "text": "Lower heat to medium. Add eggplant and fry until softened and lightly browned — about 2.5 minutes. Remove and drain.",
      "textZh": "转中火，下茄子片炸至变软、微褐（约2.5分钟）。捞出沥油。",
      "zhHint": "茄子吸油快，控温防焦",
      "stateNote": {
        "visual": "Eggplant turns matte light brown; surface loses shine",
        "visualZh": "茄子转为哑光浅褐色；失去油亮反光",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3分钟",
        "heat": "medium",
        "signal": "Edges curl slightly and release from oil surface",
        "signalZh": "边缘微卷，脱离油面"
      }
    },
    {
      "text": "Pour off all but 1 tbsp oil. Add minced garlic and stir 15 seconds until fragrant. Add green peppers and stir-fry 1 minute until bright and slightly blistered.",
      "textZh": "倒出多余油，只留1汤匙。下蒜末爆香15秒。加青椒片，大火快炒1分钟至鲜亮微皱。",
      "zhHint": "控油减腻，突出清鲜",
      "stateNote": {
        "visual": "Peppers glisten with oil but remain vivid green",
        "visualZh": "青椒油润发亮，但翠绿不褪",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "heat": "high",
        "signal": "Pepper skins puff slightly and develop fine wrinkles",
        "signalZh": "椒皮微鼓，出现细密褶皱"
      }
    },
    {
      "text": "Return potatoes and eggplant to wok. Add light soy sauce and Chinese black vinegar. Stir constantly 1 minute until sauce coats everything evenly and begins to glaze.",
      "textZh": "将土豆、茄子倒回锅中。淋入生抽和陈醋，持续翻炒1分钟，至酱汁均匀包裹、泛起亮光。",
      "zhHint": "后下酱醋，保香气",
      "stateNote": {
        "visual": "Sauce transforms from liquid to glossy film on vegetables",
        "visualZh": "酱汁由液态转为包裹食材的亮膜",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "heat": "high",
        "signal": "Faint tangy aroma rises — vinegar sharpness mellows instantly",
        "signalZh": "微酸香气飘起——醋的尖锐感瞬间柔和"
      }
    },
    {
      "text": "Taste and add a pinch of sugar (optional) to balance acidity. Serve immediately while hot and crisp-tender.",
      "textZh": "尝味，按需加一小撮糖调和酸度。趁热上桌，保持外脆里糯。",
      "zhHint": "糖为点睛，非必需",
      "stateNote": {
        "visual": "Steam rises in dense, fragrant waves",
        "visualZh": "热气浓密、香气扑鼻",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "high",
        "signal": "Vegetables glisten without pooling liquid",
        "signalZh": "食材油亮，无酱汁积聚"
      }
    }
  ],
  "tips": [
    "Always use Yukon Gold or Yellow Finn potatoes — russets get too mealy",
    "Do not overcrowd the wok when frying — it lowers oil temp and steams instead of crisping",
    "For gluten-free, verify your light soy sauce is tamari-based"
  ],
  "tipsZh": [
    "务必用尤金黄金薯或黄芬土豆——褐皮土豆易粉烂",
    "炸制时切勿堆叠，否则油温骤降，变成蒸煮而非酥脆",
    "如需无麸质，请确认所用生抽为木鱼花酱油（tamari）"
  ],
  "relatedSlugs": [
    "da-pan-ji",
    "dong-bei-luan-dun"
  ],
  "image": "/images/recipes/di-san-xian.webp"
};
