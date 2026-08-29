import type { Recipe } from "@/lib/types";

/** Smartweed Stirred with Cured Pork (藜蒿炒腊肉) — Seed batch */
export const smartweed_stirred_cured_pork: Recipe = {
  "id": "li-hao-stirred-larou",
  "slug": "smartweed-stirred-cured-pork",
  "titleEn": "Smartweed Stirred with Cured Pork",
  "titleZh": "藜蒿炒腊肉",
  "pinyin": "lí hāo chǎo là ròu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Jiujiang",
  "regionZh": "九江",
  "difficulty": "medium",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses whole sprigs (not chopped) for texture contrast and omits chili—relying solely on larou’s smokiness and lihao’s grassy perfume.",
  "versionNoteZh": "家常版保留藜蒿整枝（不切段）以显口感对比，且不放辣椒，全靠腊肉烟香与藜蒿清气交融。",
  "tags": [
    "30-min",
    "spring-season",
    "vegetable-forward"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Jiujiang’s Poyang Lake area would forage wild lihao at dawn in March—then stir-fry it with last winter’s larou over a wood fire, serving it still crackling hot in a blue-and-white porcelain bowl he’d brought from Changsha.",
  "storyZh": "我九江鄱阳湖边的舅舅每年三月清晨采野生藜蒿，配去年冬腌的腊肉，在柴火灶上快炒，盛在从长沙带来的青花瓷碗里，上桌还滋滋作响。",
  "ingredients": [
    {
      "id": "lh-01",
      "nameEn": "Hunan-style cured pork belly (larou)",
      "nameZh": "湖南腊肉（腊肉）",
      "pinyin": "là ròu",
      "amountMetric": "140 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Slice 4 mm thick, on slight diagonal. Blanch 60 seconds in simmering water if very salty.",
      "noteZh": "斜切4毫米厚片；若过咸，沸水焯60秒。",
      "termKey": "none"
    },
    {
      "id": "lh-02",
      "nameEn": "Fresh smartweed (lihao)",
      "nameZh": "藜蒿",
      "pinyin": "lí hāo",
      "amountMetric": "200 g",
      "amountUS": "2 loosely packed cups",
      "category": "produce",
      "pantry": "local",
      "note": "Look for tender, bright green stems with purple-tinged tips; substitute asparagus tips + fresh tarragon (1 tsp) if unavailable.",
      "noteZh": "选嫩绿茎、紫尖者；无藜蒿可用芦笋尖+新鲜龙蒿叶（1茶匙）替代。",
      "termKey": "none"
    },
    {
      "id": "lh-03",
      "nameEn": "Scallions, white and light green parts, cut into 3 cm lengths",
      "nameZh": "小葱段（葱白及淡绿段）",
      "pinyin": "xiǎo cōng duàn",
      "amountMetric": "40 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "note": "Adds aromatic lift—use only fresh scallions, not dried.",
      "noteZh": "提香增鲜，禁用干葱。",
      "termKey": "scallion"
    },
    {
      "id": "lh-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Essential for lifting gaminess—do not substitute cooking wine; use dry sherry if unavailable.",
      "noteZh": "去膻提香关键，禁用料酒；无绍酒可用干雪莉酒替代。",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Blanch larou slices in simmering water for 60 seconds. Drain well and pat dry with paper towels.",
      "textZh": "腊肉片沸水焯烫60秒，捞出沥干并吸净表面水分。",
      "zhHint": "焯水去咸定型",
      "stateNote": {
        "visual": "Water bubbles gently around slices; no vigorous boil.",
        "visualZh": "水面轻泡裹肉片，非滚沸。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "medium",
        "signal": "Edges of larou turn opaque and slightly firm.",
        "signalZh": "腊肉边缘转不透明、略挺实。"
      }
    },
    {
      "text": "Heat wok over high heat until smoking lightly. Add larou and stir-fry 90 seconds until edges begin to crisp but centers stay tender.",
      "textZh": "旺火烧至微冒青烟，下腊肉猛炒90秒，边微脆而中柔韧。",
      "zhHint": "旺火锁香",
      "stateNote": {
        "visual": "Larou edges develop fine golden lace; surface glistens with rendered fat.",
        "visualZh": "腊肉边缘呈细金边；表面泛腊油光泽。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "Distinct smoky aroma fills kitchen—no burning odor.",
        "signalZh": "满屋烟香，无焦糊气。"
      }
    },
    {
      "text": "Push larou to wok perimeter. Add scallions to center and stir-fry 20 seconds until fragrant and slightly softened.",
      "textZh": "腊肉拨至锅边，葱段下中心，煸香20秒至微软。",
      "zhHint": "葱段先爆香",
      "stateNote": {
        "visual": "Scallions turn glossy and brighter green; no browning.",
        "visualZh": "葱段油亮、翠色更鲜，无褐变。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Sharp, sweet onion scent rises clearly.",
        "signalZh": "清甜葱香明显上扬。"
      }
    },
    {
      "text": "Add lihao sprigs in batches. Stir-fry 1 minute per batch, tossing constantly, until stems turn vibrant green and feel springy when pressed.",
      "textZh": "藜蒿分批下锅，每批猛炒1分钟，不停翻动，至茎秆转鲜绿、按压有弹性。",
      "zhHint": "分批炒保翠嫩",
      "stateNote": {
        "visual": "Stems brighten to emerald; tips retain purple hue; no wilting or blackening.",
        "visualZh": "茎秆转翡翠色；尖端紫晕尚存；无萎蔫或焦黑。",
        "timeRef": "1 minute per batch",
        "timeRefZh": "每批1分钟",
        "heat": "high",
        "signal": "Lihao releases clean, herbal steam—not vegetal or sour.",
        "signalZh": "藜蒿散发清草本蒸汽，非青涩或酸腐气。"
      }
    },
    {
      "text": "Drizzle Shaoxing wine around inner rim of wok. Toss 30 seconds until alcohol cooks off and aroma blooms.",
      "textZh": "沿锅边淋绍酒，猛火翻匀30秒，至酒气挥发、香气迸发。",
      "zhHint": "锅边淋酒激香",
      "stateNote": {
        "visual": "Brief flame may leap up; steam carries floral, nutty fragrance.",
        "visualZh": "偶有火苗跃起；蒸汽携花果坚果香。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Sharp alcohol sting disappears; replaced by warm, complex aroma.",
        "signalZh": "辛辣酒气散尽，转为温润复合香。"
      }
    }
  ],
  "tips": [
    "Never chop lihao—whole sprigs give signature crunch and release aroma gradually.",
    "If using asparagus-tarragon substitute, add tarragon only in final 10 seconds to preserve freshness.",
    "This dish shines best within 10 minutes of cooking—serve immediately with steamed rice."
  ],
  "tipsZh": [
    "藜蒿切段会失风味，务必用整枝保脆与缓释清香。",
    "若用芦笋+龙蒿替代，龙蒿须最后10秒下锅，护其鲜气。",
    "此菜最佳赏味期仅出锅后10分钟内，即炒即食，配米饭尤佳。"
  ],
  "relatedSlugs": [
    "cured-meat-steamed-bundle",
    "radish-pickle-stirred-cured-pork"
  ],
  "image": "/images/recipes/smartweed-stirred-cured-pork.webp"
};
