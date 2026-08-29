import type { Recipe } from "@/lib/types";

/** Sichuan-Style Cold Shredded Chicken (川味凉拌鸡丝) — Seed batch */
export const cold_shredded_chicken: Recipe = {
  "id": "liang-ban-ji-si",
  "slug": "cold-shredded-chicken",
  "titleEn": "Sichuan-Style Cold Shredded Chicken",
  "titleZh": "川味凉拌鸡丝",
  "pinyin": "chuan wei liang ban ji si",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses boiled (not poached) chicken for deeper flavor and avoids chili oil—relies on toasted Sichuan peppercorn and fresh chili for layered heat.",
  "versionNoteZh": "家常版用白煮鸡（非焯水）提味，不用辣椒油，靠焙香花椒与新鲜小米辣呈现层次辣感。",
  "tags": [
    "30-min",
    "make-ahead",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My mother in Jinniu District made this for my father’s birthday every year—he’d sit on the balcony eating it with cold beer while she pounded Sichuan peppercorns in a mortar. She always said, 'The numbing must bloom *after* the first bite, not hit you all at once.'",
  "storyZh": "我在金牛区的母亲每年父亲生日都做这道菜——他坐在阳台喝冰啤酒吃鸡丝，母亲则在石臼里现舂花椒。她总说：‘麻味要等第一口之后才慢慢泛上来，不能一入口就冲。’",
  "ingredients": [
    {
      "id": "lb-01",
      "nameEn": "boneless, skinless chicken breast",
      "nameZh": "去骨去皮鸡胸肉",
      "pinyin": "qu gu qu pi ji xiong rou",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "lb-02",
      "nameEn": "Sichuan peppercorns, toasted and ground",
      "nameZh": "花椒（焙香后研磨）",
      "pinyin": "hua jiao",
      "amountMetric": "3 g",
      "amountUS": "1 tsp whole, ground",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn",
      "note": "Toast in dry skillet 1 minute until fragrant; cool before grinding.",
      "noteZh": "干锅焙香1分钟至出香，晾凉后研磨。"
    },
    {
      "id": "lb-03",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chen cu",
      "amountMetric": "12 ml",
      "amountUS": "2½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "lb-04",
      "nameEn": "fresh red chili (e.g., Fresno), finely minced",
      "nameZh": "新鲜红辣椒（如弗雷斯诺椒），切细末",
      "pinyin": "xin xian hong la jiao",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute with 1 tsp gochugaru + ½ tsp minced garlic if unavailable.",
      "noteZh": "若无，可用1茶匙韩式辣粉+½茶匙蒜末替代。"
    },
    {
      "id": "lb-05",
      "nameEn": "scallions, green parts only, julienned",
      "nameZh": "小葱绿段（切细丝）",
      "pinyin": "xiao cong",
      "amountMetric": "30 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken and place in pot with enough water to cover by 3 cm. Add 1 tsp salt and 1 tsp light soy sauce. Bring to boil over high heat, then reduce to low and simmer uncovered 18 minutes.",
      "textZh": "鸡胸洗净入锅，加水没过3厘米；加1茶匙盐、1茶匙生抽。大火烧沸后转小火，敞盖慢煮18分钟。",
      "zhHint": "敞盖煮防肉质过软",
      "stateNote": {
        "visual": "Water maintains slow bubble rhythm—no vigorous rolling.",
        "visualZh": "水面保持缓泡节奏，不翻滚。",
        "timeRef": "18 minutes",
        "timeRefZh": "18 分钟",
        "heat": "low",
        "signal": "Skin-side surface shows fine white curds and slight shrinkage.",
        "signalZh": "朝上一面浮现细密白色絮状物，边缘微缩。"
      }
    },
    {
      "text": "Turn off heat. Leave chicken submerged in hot water for 12 minutes—this ensures tenderness without toughness.",
      "textZh": "关火，让鸡胸继续浸在热水中12分钟——保证嫩度不柴。",
      "zhHint": "浸烫法锁住内部汁水",
      "stateNote": {
        "visual": "Chicken floats slightly; surface remains pale ivory, not gray.",
        "visualZh": "鸡胸略浮起；表面仍呈淡象牙白，不发灰。",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "No steam rises from surface when lifted.",
        "signalZh": "提起时表面无热气升腾。"
      }
    },
    {
      "text": "Drain and rinse under cold running water for 30 seconds. Pat *thoroughly* dry, then chill uncovered for 20 minutes.",
      "textZh": "捞出，用流水冲30秒。彻底吸干水分，敞口冷藏20分钟。",
      "zhHint": "冷透才易撕成细丝",
      "stateNote": {
        "visual": "Surface feels cool and completely non-tacky.",
        "visualZh": "表面冰凉，完全不黏手。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Slight condensation forms on fridge shelf beneath plate.",
        "signalZh": "盘底冰箱架上凝出细微水珠。"
      }
    },
    {
      "text": "Shred chicken lengthwise into thin, even strands using fingers or two forks. Place in serving bowl.",
      "textZh": "顺纹理撕成细长均匀丝条，用手指或双叉操作。放入盛碗。",
      "zhHint": "顺纹撕防断，更显筋道",
      "stateNote": {
        "visual": "Strands are 8–10 cm long and 1–2 mm wide, uniform and glossy.",
        "visualZh": "鸡丝长8–10厘米，宽1–2毫米，粗细均匀、泛光泽。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "No short fragments or clumps remain.",
        "signalZh": "无碎屑或结块。"
      }
    },
    {
      "text": "Whisk together black vinegar, toasted Sichuan pepper, minced chili, scallions, ½ tsp salt, and 1 tsp sesame oil. Pour over chicken and toss with chopsticks until evenly coated.",
      "textZh": "将陈醋、焙香花椒粉、小米辣末、葱丝、½茶匙盐、1茶匙芝麻油搅匀，淋入鸡丝中，用筷子拌匀。",
      "zhHint": "最后淋油增香提亮",
      "stateNote": {
        "visual": "Chicken glistens with dark amber sheen; chili bits cling to strands.",
        "visualZh": "鸡丝泛深琥珀光泽，辣粒均匀附着。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aroma of toasted pepper blooms within 10 seconds of mixing.",
        "signalZh": "拌匀10秒内即散发焙椒香气。"
      }
    }
  ],
  "tips": [
    "Toasting Sichuan peppercorns unlocks citrusy, numbing notes—don’t skip this step.",
    "For authentic Chengdu balance, serve with a wedge of pickled mustard tuber (zha cai) on the side.",
    "This keeps well refrigerated for up to 2 days—flavor deepens overnight."
  ],
  "tipsZh": [
    "焙香花椒是激发柑橘香与麻感的关键步骤，不可省略。",
    "为还原成都本味，可配一小碟榨菜丁同食。",
    "冷藏可保存2天，隔夜后风味更融合。"
  ],
  "relatedSlugs": [
    "chicken-breast-salad",
    "pan-seared-chicken-breast"
  ],
  "image": "/images/recipes/cold-shredded-chicken.webp"
};
