import type { Recipe } from "@/lib/types";

/** Cantonese Ginger Milk Curd (Jiang Zhuang Nai) (姜撞奶) — Seed batch */
export const ginger_milk_curd: Recipe = {
  "id": "ginger-milk-curd",
  "slug": "ginger-milk-curd",
  "titleEn": "Cantonese Ginger Milk Curd (Jiang Zhuang Nai)",
  "titleZh": "姜撞奶",
  "pinyin": "jiāng zhuàng nǎi",
  "cuisine": "甜品饮品",
  "cuisineEn": "Desserts & Beverages",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses fresh ginger juice pressed by hand—not grated-and-squeezed—and full-fat milk heated precisely to 70–80°C for clean, tender curds.",
  "versionNoteZh": "家常版强调手榨姜汁（非擦丝挤汁），牛奶必须精准加热至70–80°C，方得嫩滑凝乳。",
  "tags": [
    "15-min",
    "no-cook-set",
    "dairy"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Guangzhou’s Liwan District taught me this at age 12: she’d grate ginger on a ceramic grater, press juice through cheesecloth into a small bowl, and whisper, 'The milk must kiss the ginger—not fight it.' She served it in white porcelain bowls with a spoonful of candied ginger on top.",
  "storyZh": "12岁时，广州荔湾的姑妈教我这道点心：她用瓷 grater 擦姜，纱布手挤姜汁入小碗，轻声说‘奶要亲姜，不能斗姜’。盛在白瓷碗里，顶上放一勺蜜渍姜片。",
  "ingredients": [
    {
      "id": "jm-01",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "80 g",
      "amountUS": "1/3 cup grated",
      "category": "produce",
      "pantry": "local",
      "note": "Must be young, juicy ginger—older roots yield less juice and harsher bite.",
      "noteZh": "须用鲜嫩多汁嫩姜，老姜出汁少、辛辣味重。",
      "termKey": "ginger"
    },
    {
      "id": "jm-02",
      "nameEn": "whole milk (full-fat, 3.25% fat)",
      "nameZh": "全脂牛奶",
      "pinyin": "quán zhī niú nǎi",
      "amountMetric": "500 ml",
      "amountUS": "2¼ cups",
      "category": "dairy",
      "pantry": "local",
      "note": "Ultra-pasteurized or UHT milk will not set—use pasteurized only.",
      "noteZh": "超高温灭菌奶（UHT）无法凝结，仅可用巴氏杀菌奶。"
    },
    {
      "id": "jm-03",
      "nameEn": "granulated sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Adjust to taste—traditional ratio is 1:16 (sugar:milk by weight).",
      "noteZh": "按口味调整，传统比例为糖:奶=1:16（重量比）。"
    },
    {
      "id": "jm-04",
      "nameEn": "candied ginger (optional garnish)",
      "nameZh": "蜜渍姜片",
      "pinyin": "mì zì jiāng piàn",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Substitute: finely minced fresh ginger soaked in 1 tsp honey for 5 minutes.",
      "noteZh": "若无蜜渍姜，可用鲜姜末+蜂蜜1茶匙，浸泡5分钟替代。"
    }
  ],
  "steps": [
    {
      "text": "Peel and finely grate 80 g fresh ginger. Press juice through double-layered cheesecloth into a small heatproof bowl—yield should be ~20 ml (4 tsp). Discard pulp.",
      "textZh": "去皮细磨80克鲜姜，双层纱布手挤取汁约20毫升，弃渣。",
      "zhHint": "手榨姜汁是成败关键",
      "stateNote": {
        "visual": "Pale yellow, slightly cloudy liquid with tiny fibers visible.",
        "visualZh": "淡黄色微浊液体，可见细纤维。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "Juice drips steadily—not watery, not thick.",
        "signalZh": "汁液匀速滴落，不稀不稠。"
      }
    },
    {
      "text": "Warm milk and sugar in a saucepan over medium heat until steaming (70–80°C / 158–176°F). Do NOT boil—use a thermometer or test by swirling: surface should shimmer but show no bubbles.",
      "textZh": "将牛奶与糖用中火加热至微沸前状态（70–80°C），切勿煮沸；可用温度计，或观察表面微漾无泡。",
      "zhHint": "控温是凝乳核心",
      "stateNote": {
        "visual": "Surface shimmers with fine ripples; tiny vapor wisps rise.",
        "visualZh": "表面泛细纹，有细微水汽升腾。",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "heat": "medium",
        "signal": "Thermometer reads 75°C ± 2°C; no bubbles at edges.",
        "signalZh": "温度计显示75°C±2°C，锅边无气泡。"
      }
    },
    {
      "text": "Immediately pour hot milk from a height of 30 cm (12 inches) directly into the ginger juice bowl—this ‘collision’ (zhuang) triggers coagulation.",
      "textZh": "趁热，从30厘米高处将牛奶直冲入姜汁碗中——此‘撞’法激发凝乳。",
      "zhHint": "高冲激撞促凝",
      "stateNote": {
        "visual": "Milk foams briefly on contact, then calms into opaque surface.",
        "visualZh": "冲入时短暂起泡，随即转为乳白静面。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "First ripple forms across surface within 3 seconds.",
        "signalZh": "3秒内表面初现涟漪。"
      }
    },
    {
      "text": "Cover bowl with a plate and let stand undisturbed at room temperature for 10 minutes. Do NOT stir or shake.",
      "textZh": "盖盘静置10分钟，全程勿搅勿晃。",
      "zhHint": "静待天然凝结",
      "stateNote": {
        "visual": "Surface becomes completely smooth and matte-white.",
        "visualZh": "表面完全平滑、呈哑光乳白。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No liquid seeps around edges when tilted slightly.",
        "signalZh": "稍倾斜碗体，边缘无液体渗出。"
      }
    },
    {
      "text": "Gently spoon into serving bowls. Top with candied ginger. Serve at room temperature—never chilled.",
      "textZh": "轻舀入碗，撒蜜渍姜片。室温食用，忌冷藏。",
      "zhHint": "室温食，风味足",
      "stateNote": {
        "visual": "Curd holds clean spoon shape; slight jiggle like soft tofu.",
        "visualZh": "凝乳成形完整，如嫩豆腐般微颤。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Edges pull cleanly away from bowl side.",
        "signalZh": "边缘与碗壁自然分离。"
      }
    }
  ],
  "tips": [
    "Ginger juice must be freshly extracted—pre-bottled juice lacks active enzymes.",
    "If curd fails, milk was too hot (>85°C) or too cool (<65°C).",
    "For richer texture, replace 50 ml milk with heavy cream."
  ],
  "tipsZh": [
    "姜汁必须现榨，瓶装汁无活性酶，无法凝乳。",
    "若不成形，多因牛奶过热（>85°C）或过凉（<65°C）。",
    "追求更丰润口感，可用50毫升高脂奶油替换等量牛奶。"
  ],
  "relatedSlugs": [
    "sour-plum-drink"
  ],
  "image": "/images/recipes/ginger-milk-curd.webp"
};
