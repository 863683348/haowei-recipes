import type { Recipe } from "@/lib/types";

/** Sweet Red Bean Baozi (豆沙包) — Seed batch */
export const sweet_red_bean_baozi: Recipe = {
  "id": "dou-sha-bao",
  "slug": "sweet-red-bean-baozi",
  "titleEn": "Sweet Red Bean Baozi",
  "titleZh": "豆沙包",
  "pinyin": "dòu shā bāo",
  "cuisine": "甜品饮品",
  "cuisineEn": "Dessert",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 120,
  "servings": 12,
  "version": "family",
  "versionNote": "Traditional Beijing style: smooth, lightly sweetened adzuki paste—not overly oily or gritty. Made with real beans, not canned paste.",
  "versionNoteZh": "老北京风味：细腻柔滑、甜度适中的赤豆沙，非油腻或颗粒感重。用真豆自制，非罐装豆沙。",
  "tags": [
    "vegetarian",
    "dessert",
    "breakfast"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Every winter, my great-aunt in Beijing’s Hutong would soak red beans overnight, then simmer them with rock sugar for 3 hours while telling stories about the Forbidden City. She strained the beans through cheesecloth—never a blender—to keep the paste velvety.",
  "storyZh": "每年冬天，北京胡同里的姑婆都会泡红小豆过夜，加冰糖小火熬3小时，边熬边讲紫禁城故事。豆沙必过纱布，从不用料理机，只为绵密口感。",
  "ingredients": [
    {
      "id": "dsb-01",
      "nameEn": "adzuki beans",
      "nameZh": "赤小豆",
      "pinyin": "chì xiǎo dòu",
      "amountMetric": "250 g",
      "amountUS": "1¼ cups dried",
      "category": "staple",
      "pantry": "asian",
      "note": "Do NOT substitute kidney beans—they lack sweetness and texture",
      "noteZh": "不可用花豆替代，缺甜味与沙感"
    },
    {
      "id": "dsb-02",
      "nameEn": "granulated sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "120 g",
      "amountUS": "⅔ cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Adjust to taste—traditional Beijing version is subtly sweet",
      "noteZh": "可依口味调整，老北京版偏清甜"
    },
    {
      "id": "dsb-03",
      "nameEn": "neutral oil (e.g., grapeseed or canola)",
      "nameZh": "无味植物油",
      "pinyin": "wú wèi zhí wù yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Prevents sticking and adds sheen—do not omit",
      "noteZh": "防粘增亮，不可省略"
    },
    {
      "id": "dsb-04",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Same dough as other baozi—use identical fermentation method",
      "noteZh": "面团同其他包子，发酵法一致"
    },
    {
      "id": "dsb-05",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "pinyin": "gān jiàomǔ",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Must be fresh—proof in warm water with 5 g sugar",
      "noteZh": "须新鲜，用温水+5 g糖活化"
    }
  ],
  "steps": [
    {
      "text": "Soak beans: Rinse adzuki beans, cover with 600 ml cold water. Soak 8 hours or overnight.",
      "textZh": "泡豆：赤小豆淘净，加600 ml冷水浸泡8小时或过夜。",
      "zhHint": "务必泡透",
      "stateNote": {
        "visual": "Beans plump to nearly double size and feel soft when pressed",
        "visualZh": "豆粒胀大近一倍，按压柔软",
        "timeRef": "8 hours",
        "timeRefZh": "8 小时",
        "signal": "Skin slips easily when rubbed between fingers",
        "signalZh": "指搓即脱皮"
      }
    },
    {
      "text": "Cook beans: Drain, then simmer in fresh water (1:3 ratio) with 10 g sugar for 2 hours until very soft. Skim foam; add more hot water if needed to keep covered.",
      "textZh": "煮豆：倒掉泡水，换清水（豆:水=1:3），加糖10 g，小火煮2小时至酥烂。撇浮沫；水少时添热水保持没过。",
      "zhHint": "小火慢煮不掀盖",
      "stateNote": {
        "visual": "Beans collapse into thick slurry; liquid reduces by half",
        "visualZh": "豆粒化为浓稠糊状，汤汁减半",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "heat": "low",
        "signal": "Spoon leaves thick coating on bottom of pot",
        "signalZh": "勺背挂厚浆"
      }
    },
    {
      "text": "Strain and mash: Press cooked beans through fine-mesh sieve or cheesecloth into bowl. Discard skins. Mash smooth with wooden spoon.",
      "textZh": "过筛碾泥：煮豆连汤倒入细网筛或纱布，用力挤压滤出豆沙，弃豆皮。木勺碾压至顺滑。",
      "zhHint": "纱布过筛最正宗",
      "stateNote": {
        "visual": "Paste is uniform, deep burgundy, and free of specks",
        "visualZh": "豆沙呈均一深枣红色，无颗粒",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No resistance when spoon glides through",
        "signalZh": "勺子滑过无阻力"
      }
    },
    {
      "text": "Cook bean paste: Transfer paste to nonstick pan. Add sugar and oil. Cook over medium-low heat, stirring constantly, until thick, glossy, and pulls away from pan—about 15 minutes.",
      "textZh": "炒豆沙：豆沙入不粘锅，加糖与油，中小火不停翻炒15分钟至浓稠油亮、锅底见纹。",
      "zhHint": "炒透才不返生",
      "stateNote": {
        "visual": "Paste forms ridges in pan and glistens with oil sheen",
        "visualZh": "锅底现纹路，豆沙泛油光",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "Spoon leaves clean trail that doesn’t fill in",
        "signalZh": "勺划痕不回流"
      }
    },
    {
      "text": "Cool and portion: Spread paste on parchment-lined tray. Cool completely (1 hour). Portion into 35 g balls. Cover with damp cloth.",
      "textZh": "冷却分剂：豆沙摊平晾凉（1小时）。分12份，每份35 g，搓圆，湿布盖严。",
      "zhHint": "必须彻底放凉再包",
      "stateNote": {
        "visual": "Paste feels firm and cool to touch; no residual warmth",
        "visualZh": "触感冰凉坚实，无余温",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "signal": "No condensation under cloth",
        "signalZh": "湿布下无水汽凝结"
      }
    },
    {
      "text": "Assemble and steam: Use same dough as other baozi. Wrap 35 g bean paste in 75 g dough. Pleat 18 times. Steam 10 minutes on high heat. Rest 3 minutes before serving.",
      "textZh": "包制蒸制：同其他包子面团。35 g豆沙包入75 g面皮，18褶收口。大火蒸10分钟，关火焖3分钟。",
      "zhHint": "甜包蒸时短，防塌",
      "stateNote": {
        "visual": "Buns are round, pale ivory, with faint pink blush from bean color",
        "visualZh": "包子浑圆，象牙白，透淡粉豆色",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "high",
        "signal": "Aroma of warm caramelized beans fills air",
        "signalZh": "暖甜豆香弥漫"
      }
    }
  ],
  "tips": [
    "Never use canned red bean paste—it contains preservatives and excess oil",
    "Bean paste must cool fully before wrapping—warm paste melts dough",
    "Serve warm, not hot—the flavor opens at 40°C"
  ],
  "tipsZh": [
    "禁用罐装豆沙，含防腐剂与过多油脂",
    "豆沙必须完全冷却再包，余温会融坏面皮",
    "宜温食（40°C），风味最佳"
  ],
  "relatedSlugs": [
    "fresh-pork-baozi",
    "three-umami-baozi"
  ],
  "image": "/images/recipes/sweet-red-bean-baozi.webp"
};
