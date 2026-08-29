import type { Recipe } from "@/lib/types";

/** Old-Vinegar Peanuts (老醋花生) — Seed batch */
export const laohu_cai_lao_cu_peanut: Recipe = {
  "id": "lao-cu-hua-sheng",
  "slug": "laohu-cai-lao-cu-peanut",
  "titleEn": "Old-Vinegar Peanuts",
  "titleZh": "老醋花生",
  "pinyin": "lǎo cù huā shēng",
  "cuisine": "汤羹凉菜",
  "cuisineEn": "Cold Dishes & Soups",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses gentle frying and double-marinade for balanced tang and crunch — no deep-fryer needed, just a wok or heavy skillet.",
  "versionNoteZh": "家常版用中小火慢炸+双层腌渍，酸香柔和、花生酥脆不腻，无需专业油炸设备。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "My aunt in Jinan always made this on summer evenings — she’d crack raw peanuts by hand while humming Shandong folk songs, then soak them in aged vinegar from her cellar. She said the trick was letting them rest overnight so the vinegar mellowed, not sharp.",
  "storyZh": "我济南的姑姑总在夏夜做这道菜——她一边哼着山东小调，一边亲手剥生花生，再用自家地窖里存的陈年醋浸泡。她说诀窍是隔夜腌渍，让醋香变醇厚，不刺鼻。",
  "ingredients": [
    {
      "id": "pea-01",
      "nameEn": "raw unsalted peanuts, skin-on",
      "nameZh": "带红衣生花生",
      "pinyin": "dài hóng yī shēng huā shēng",
      "amountMetric": "200 g",
      "amountUS": "1 ½ cups",
      "category": "protein",
      "pantry": "local",
      "note": "Look for fresh, plump peanuts with intact skins; avoid pre-roasted or salted.",
      "noteZh": "选饱满、红衣完整的鲜花生；勿用预烤或加盐款。"
    },
    {
      "id": "vin-01",
      "nameEn": "Chinese black vinegar (Zhenjiang style)",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "60 ml",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: balsamic vinegar + ½ tsp molasses if unavailable (not authentic but functional).",
      "noteZh": "替代：如无镇江醋，可用意大利黑醋+半茶匙糖蜜（非正宗但可用）。",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "sug-01",
      "nameEn": "granulated sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "oil-01",
      "nameEn": "peanut oil or neutral oil",
      "nameZh": "花生油或无味植物油",
      "pinyin": "huā shēng yóu huò wú wèi zhí wù yóu",
      "amountMetric": "200 ml",
      "amountUS": "¾ cup + 1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "scal-01",
      "nameEn": "scallions, finely sliced (green parts only)",
      "nameZh": "小葱绿段",
      "pinyin": "xiǎo cōng lǜ duàn",
      "amountMetric": "30 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse peanuts under cold water, then soak in room-temperature water for 2 hours. Drain well and pat completely dry with paper towels.",
      "textZh": "花生冷水冲洗，室温清水浸泡2小时；沥干后用厨房纸彻底擦干。",
      "zhHint": "务必擦干！水汽会导致溅油。",
      "stateNote": {
        "visual": "Peanuts look plump and moist but surface is matte, not glistening.",
        "visualZh": "花生饱满湿润，表面哑光无水光。",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "signal": "No visible droplets remain on peanut skins.",
        "signalZh": "花生表皮无可见水珠。"
      }
    },
    {
      "text": "Heat oil in a wok or heavy-bottomed skillet over medium heat. Test with one peanut — it should sizzle gently and rise slowly, not pop violently.",
      "textZh": "炒锅或厚底平底锅中火烧热油；丢一粒花生测试——应缓缓浮起、轻响，不爆裂。",
      "zhHint": "油温约140°C / 285°F。",
      "stateNote": {
        "visual": "Oil shimmers faintly; a drop of water dances and evaporates instantly.",
        "visualZh": "油面微泛涟漪；一滴水入锅即跳并瞬蒸。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium",
        "signal": "Single peanut rises steadily after 3 seconds.",
        "signalZh": "单粒花生入锅3秒后平稳上浮。"
      }
    },
    {
      "text": "Add peanuts in a single layer. Fry gently, stirring constantly with a wooden spoon, until golden brown and fragrant — about 6–8 minutes. Transfer to a wire rack to cool completely.",
      "textZh": "花生单层下锅，木勺不停翻动，炸至金黄微香（约6–8分钟）。捞出摊于晾架彻底放凉。",
      "zhHint": "全程中小火，防焦糊。",
      "stateNote": {
        "visual": "Peanuts turn uniform light amber; skins begin to curl slightly.",
        "visualZh": "花生呈均匀浅琥珀色；红衣微卷。",
        "timeRef": "6–8 minutes",
        "timeRefZh": "6–8 分钟",
        "heat": "medium-low",
        "signal": "Fragrant nutty aroma fills kitchen; no dark spots appear.",
        "signalZh": "满屋坚果香；无深色焦斑。"
      }
    },
    {
      "text": "In a bowl, whisk together black vinegar, sugar, and 1 tsp cold water until sugar dissolves. Add cooled peanuts and toss gently. Marinate at room temperature for 30 minutes.",
      "textZh": "碗中混合镇江醋、糖和1茶匙凉开水，搅至糖溶；加入晾凉的花生轻拌，室温腌30分钟。",
      "zhHint": "糖必须全化，否则腌不匀。",
      "stateNote": {
        "visual": "Liquid is glossy and clear, no granules visible.",
        "visualZh": "汁液透亮无颗粒。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "Sugar crystals fully dissolved upon stirring.",
        "signalZh": "搅拌后无糖粒残留。"
      }
    },
    {
      "text": "Drain excess liquid, then toss with scallion greens. Serve chilled or at cool room temperature.",
      "textZh": "倒掉多余醋汁，撒入葱绿段拌匀。冷藏或常温稍凉后上桌。",
      "zhHint": "现拌现吃，保持花生酥脆。",
      "stateNote": {
        "visual": "Peanuts glisten lightly; scallions are vivid green and crisp.",
        "visualZh": "花生泛柔光；葱段翠绿挺括。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "No pooling liquid remains in bowl.",
        "signalZh": "碗底无醋汁积聚。"
      }
    }
  ],
  "tips": [
    "Use raw, unblanched peanuts — roasted ones will burn.",
    "Never skip the drying step: residual water causes dangerous oil splatter.",
    "For best texture, serve within 2 hours — peanuts soften after longer marination."
  ],
  "tipsZh": [
    "务必用生花生（未烘烤），熟花生易焦糊。",
    "擦干步骤不可省：残留水汽导致热油飞溅危险。",
    "最佳口感在2小时内食用——久泡花生会回软。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/laohu-cai-lao-cu-peanut.webp"
};
