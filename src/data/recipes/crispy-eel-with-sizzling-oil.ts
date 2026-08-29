import type { Recipe } from "@/lib/types";

/** Crispy Eel with Sizzling Oil (响油鳝糊) — Seed batch */
export const crispy_eel_with_sizzling_oil: Recipe = {
  "id": "sheng-you-shan-hu",
  "slug": "crispy-eel-with-sizzling-oil",
  "titleEn": "Crispy Eel with Sizzling Oil",
  "titleZh": "响油鳝糊",
  "pinyin": "xiǎng yóu shàn hú",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses pre-cut eel fillets (sold frozen in Asian markets) and skips live eel handling — achieves same glossy, silky texture and dramatic 'sizzle' finish.",
  "versionNoteZh": "家常版采用亚洲超市冷冻鳝鱼片，免去活鳝处理；成菜依然滑嫩油亮，淋热油时‘滋啦’声十足。",
  "tags": [
    "quick",
    "restaurant-style",
    "impressive"
  ],
  "dietary": [
    "none"
  ],
  "story": "My cousin in Xuhui ran a tiny noodle shop where this was the house special — he’d cook it tableside during dinner rush, pouring hot oil right onto the plate so guests heard the crackle before smelling the garlic. He said that sound meant ‘the dish was breathing’.",
  "storyZh": "我徐汇区的表哥经营一家小面馆，这道菜是镇店之宝——他常在晚餐高峰时当桌烹制，热油直淋盘中，食客先闻‘滋啦’声，再嗅蒜香。他说那声响，是菜在呼吸。",
  "ingredients": [
    {
      "id": "eh-01",
      "nameEn": "freshwater eel fillets, skinless, cut into 3-cm strips",
      "nameZh": "去骨鳝鱼段（淡水，去皮，3厘米长条）",
      "pinyin": "shàn yú duàn",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Frozen eel fillets are widely available in Asian supermarkets — thaw overnight in fridge.",
      "noteZh": "亚洲超市常见冷冻鳝鱼段——冷藏室隔夜解冻。"
    },
    {
      "id": "eh-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds saltiness and umami without overpowering eel’s natural sweetness.",
      "noteZh": "提鲜增咸，不掩鳝鱼本味甘甜。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "eh-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Marinates and deodorizes — essential for clean flavor.",
      "noteZh": "去腥提香，成菜风味纯净。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "eh-04",
      "nameEn": "ginger, julienned",
      "nameZh": "姜丝",
      "pinyin": "jiāng sī",
      "amountMetric": "10 g",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "note": "Matchstick-thin for even cooking and texture contrast.",
      "noteZh": "切细丝，确保熟度一致并增添口感层次。",
      "termKey": "ginger"
    },
    {
      "id": "eh-05",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "10 g",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "note": "Freshly minced — pre-minced garlic lacks punch.",
      "noteZh": "现剁蒜末——瓶装蒜蓉风味不足。",
      "termKey": "garlic"
    },
    {
      "id": "eh-06",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use toasted sesame oil — added *after* cooking for aroma.",
      "noteZh": "用焙炒芝麻油，出锅后淋入激发香气。",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Marinate eel strips with light soy, Shaoxing wine, and ginger for 10 minutes. Pat *very* dry with paper towels — moisture prevents crispness.",
      "textZh": "鳝鱼段用生抽、绍酒、姜丝腌10分钟，取出后务必用厨房纸彻底吸干水分——水分是酥脆大敌。",
      "zhHint": "吸干水分保酥脆",
      "stateNote": {
        "visual": "No damp patches remain on eel surface; paper towels stay dry after pressing.",
        "visualZh": "鳝段表面无湿斑；按压后纸巾仍干爽。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Eel feels slightly tacky, not slippery.",
        "signalZh": "鳝段微黏，不滑手。"
      }
    },
    {
      "text": "Heat 3 tbsp neutral oil in wok over high heat until shimmering (190°C / 375°F). Add eel in single layer; fry 1 minute per side until edges curl and turn golden.",
      "textZh": "炒锅大火烧油至微烟（190°C），鳝段单层下锅，每面炸1分钟至边缘微卷、呈金黄色。",
      "zhHint": "高温快炸锁鲜",
      "stateNote": {
        "visual": "Oil ripples intensely; eel sizzles violently on contact.",
        "visualZh": "油面剧烈波动；鳝段入锅即爆响。",
        "timeRef": "1 minute per side",
        "timeRefZh": "每面1分钟",
        "heat": "high",
        "signal": "Edges lift and curl visibly.",
        "signalZh": "边缘明显翘起卷曲。"
      }
    },
    {
      "text": "Push eel to sides; add garlic to center. Stir-fry 20 seconds until fragrant but not browned.",
      "textZh": "将鳝段拨至锅边，蒜末入锅中心，煸炒20秒至出香但未上色。",
      "zhHint": "蒜末爆香不过火",
      "stateNote": {
        "visual": "Garlic softens and turns translucent, no browning at edges.",
        "visualZh": "蒜末变软透明，边缘无焦色。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Aroma rises sharply, clean and pungent.",
        "signalZh": "蒜香骤然升腾，辛香清爽。"
      }
    },
    {
      "text": "Return eel to center. Add 2 tbsp water, 1 tsp sugar, and 1 tsp cornstarch slurry (1 tsp cornstarch + 1 tsp water). Toss constantly 1 minute until glossy, thickened sauce coats every piece.",
      "textZh": "鳝段回锅中心，加入2汤匙水、1茶匙糖、1茶匙水淀粉（玉米淀粉+水各1茶匙），持续翻炒1分钟，至酱汁油亮浓稠、均匀裹住每段鳝鱼。",
      "zhHint": "快速裹芡保滑嫩",
      "stateNote": {
        "visual": "Sauce turns translucent and clings like silk; no pooling liquid remains.",
        "visualZh": "酱汁透亮如丝，无游离水渍。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Tossing creates audible 'shhh' as sauce thickens.",
        "signalZh": "翻炒时发出清晰‘嘶嘶’声。"
      }
    },
    {
      "text": "Transfer to preheated serving plate. Top with extra julienned ginger and scallion greens. Heat 2 tbsp sesame oil until just smoking (180°C); pour *directly* over dish — it should sizzle loudly.",
      "textZh": "盛入预热盘中，撒姜丝、葱绿。芝麻油烧至微冒青烟（180°C），直淋盘中——须听见响亮‘滋啦’声。",
      "zhHint": "热油淋响是灵魂",
      "stateNote": {
        "visual": "Oil spreads rapidly, creating shimmering ripple and white vapor.",
        "visualZh": "热油迅疾漫开，泛起涟漪并升腾白汽。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "high",
        "signal": "Loud, sharp 'shhh-CRACKLE' upon contact.",
        "signalZh": "接触瞬间发出响亮‘滋啦啪’声。"
      }
    }
  ],
  "tips": [
    "Preheat plate in oven (100°C) for 5 minutes — ensures oil sizzles longer.",
    "Use a carbon-steel or seasoned cast-iron wok for best sear and heat retention.",
    "Serve immediately — the 'sound' fades within 30 seconds."
  ],
  "tipsZh": [
    "上菜盘提前烤箱100°C预热5分钟，延长热油滋滋声。",
    "推荐碳钢锅或熟铁锅，锁温强、受热匀。",
    "务必即刻上桌——‘响声’仅持续30秒。"
  ],
  "relatedSlugs": [
    "red-braised-lions-head-meatballs",
    "shanghai-style-sauce-duck"
  ],
  "image": "/images/recipes/crispy-eel-with-sizzling-oil.webp"
};
