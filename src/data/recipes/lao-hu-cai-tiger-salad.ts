import type { Recipe } from "@/lib/types";

/** Tiger Salad (老虎菜) — Seed batch */
export const lao_hu_cai_tiger_salad: Recipe = {
  "id": "lao-hu-cai",
  "slug": "lao-hu-cai-tiger-salad",
  "titleEn": "Tiger Salad",
  "titleZh": "老虎菜",
  "pinyin": "lǎo hǔ cài",
  "cuisine": "汤羹凉菜",
  "cuisineEn": "Cold Dishes & Soups",
  "region": "Heilongjiang",
  "regionZh": "黑龙江",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "True Harbin-style tiger salad uses raw garlic and scallion — bold, pungent, and uncooked. No blanching, no oil — just crispness and bite.",
  "versionNoteZh": "哈尔滨正宗老虎菜生蒜生葱，辛辣爽利，不焯水、不淋油，只靠本味脆辣。",
  "tags": [
    "15-min",
    "no-cook",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "My grandfather in Harbin kept a frost-hardy scallion patch in his balcony garden year-round. He’d chop garlic and scallions so fine they looked like confetti, mix with cucumber ribbons, and say, 'This is how tigers eat — fierce and fresh.'",
  "storyZh": "我哈尔滨的爷爷在阳台种耐寒小葱，全年不断。他把蒜和葱切得像彩屑般细，配黄瓜丝一拌，说：‘老虎就该这么吃——又猛又鲜。’",
  "ingredients": [
    {
      "id": "cuc-01",
      "nameEn": "English cucumber, julienned (peeled, seeds removed)",
      "nameZh": "水果黄瓜（去皮去籽，切细条）",
      "pinyin": "shuǐ guǒ huáng guā",
      "amountMetric": "200 g",
      "amountUS": "1 large cucumber",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute Persian or regular cucumber — scoop out seeds to prevent sogginess.",
      "noteZh": "可用波斯黄瓜或普通黄瓜——务必挖净籽防出水。"
    },
    {
      "id": "scal-01",
      "nameEn": "scallions, very finely chopped (white and green parts)",
      "nameZh": "小葱（白绿全用，极细切）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "⅔ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "gar-01",
      "nameEn": "garlic, minced to paste",
      "nameZh": "大蒜（剁成茸）",
      "pinyin": "dà suàn",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "vin-01",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "pinyin": "mǐ cù",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "salt-01",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Place julienned cucumber in a colander, sprinkle with 1 g salt, and toss. Let drain 5 minutes, then squeeze gently to remove excess water.",
      "textZh": "黄瓜条入滤网，撒1克盐拌匀，静置5分钟；轻攥挤掉多余水分。",
      "zhHint": "去水是脆爽关键。",
      "stateNote": {
        "visual": "Cucumber ribbons look bright green and slightly translucent.",
        "visualZh": "黄瓜条翠绿微透。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Water beads visibly on colander surface.",
        "signalZh": "滤网表面明显渗出水珠。"
      }
    },
    {
      "text": "In a bowl, combine scallions and garlic. Use the side of your knife to crush garlic into the scallions until aromatic and slightly pasty.",
      "textZh": "碗中混合葱末与蒜末，用刀侧反复碾压，直至散发浓香、略成膏状。",
      "zhHint": "不用刀切，用压碾释放辛辣素。",
      "stateNote": {
        "visual": "Mixture turns pale green with flecks of white garlic pulp.",
        "visualZh": "混合物呈淡绿色，夹杂白色蒜茸碎。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Sharp, clean garlic scent rises immediately.",
        "signalZh": "立刻升腾清冽蒜香。"
      }
    },
    {
      "text": "Add drained cucumber, rice vinegar, and remaining salt. Toss vigorously with hands or tongs for 45 seconds until evenly coated and slightly glossy.",
      "textZh": "加入挤干的黄瓜、米醋和余下盐，用手或夹子大力拌45秒，至均匀裹汁、微泛光泽。",
      "zhHint": "手拌更易感知脆度。",
      "stateNote": {
        "visual": "Cucumber glistens; no dry patches remain.",
        "visualZh": "黄瓜泛光，无干粉区域。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "Vinegar aroma intensifies and becomes rounded.",
        "signalZh": "醋香转醇厚圆润。"
      }
    },
    {
      "text": "Taste and adjust: add a pinch more salt if flat, or ½ tsp vinegar if too harsh. Do not add sugar — authenticity requires clean acidity.",
      "textZh": "尝味调整：若寡淡则加一小撮盐；若过冲可补半茶匙醋。切勿加糖——真味只靠纯粹酸香。",
      "zhHint": "老虎菜不甜，只酸辣醒神。",
      "stateNote": {
        "visual": "No undissolved salt crystals visible on surface.",
        "visualZh": "表面无未溶盐粒。",
        "timeRef": "immediate",
        "timeRefZh": "即刻",
        "signal": "Tongue tingles lightly, not burns.",
        "signalZh": "舌尖微麻，不灼痛。"
      }
    },
    {
      "text": "Transfer to a shallow dish. Serve immediately — this salad loses its tiger-like ferocity if left sitting longer than 10 minutes.",
      "textZh": "盛入浅盘，即刻上桌——久置超10分钟，‘虎气’尽失，风味钝化。",
      "zhHint": "现拌现吃，方显生猛本色。",
      "stateNote": {
        "visual": "Scallions stand upright; cucumber retains firm snap.",
        "visualZh": "葱段挺立；黄瓜咬断有脆响。",
        "timeRef": "within 10 minutes",
        "timeRefZh": "10 分钟内",
        "signal": "No liquid pools around ingredients.",
        "signalZh": "食材周围无汁液积聚。"
      }
    }
  ],
  "tips": [
    "Use young, tender scallions — older ones taste fibrous and bitter.",
    "Garlic must be minced to paste, not just chopped — essential for pungent integration.",
    "Serve in a chilled bowl for maximum refreshment on hot days."
  ],
  "tipsZh": [
    "选嫩小葱，老葱纤维粗、味涩苦。",
    "蒜必须剁成茸，非粗切——辛辣才融洽。",
    "天热时用冰镇小碗盛装，更提神。"
  ],
  "relatedSlugs": [
    "laohu-cai-lao-cu-peanut"
  ],
  "image": "/images/recipes/lao-hu-cai-tiger-salad.webp"
};
