import type { Recipe } from "@/lib/types";

/** Spicy Pickled Pepper Stir-Fried Chicken Offal (泡椒鸡杂) — Seed batch */
export const spicy_pickled_pepper_stir_fried_chicken_offal: Recipe = {
  "id": "pao-jiao-ji-za",
  "slug": "spicy-pickled-pepper-stir-fried-chicken-offal",
  "titleEn": "Spicy Pickled Pepper Stir-Fried Chicken Offal",
  "titleZh": "泡椒鸡杂",
  "pinyin": "pào jiāo jī zá",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses cleaned, parboiled chicken gizzards and livers — no tripe or intestines — for approachable texture and faster cook time.",
  "versionNoteZh": "家庭版仅用鸡胗、鸡肝，经焯水去腥，口感更易接受，省时省力。",
  "tags": [
    "30-min",
    "bold-flavor",
    "offal"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather ran a small street stall in Jiefangbei, Chongqing. He’d prep chicken gizzards at dawn, rubbing them with rice wine and salt — ‘to scrub away city dust,’ he’d say — then stir-fry them with his own fermented chili paste. We ate it standing up, chopsticks clinking on enamel bowls.",
  "storyZh": "我祖父在重庆解放碑摆小摊。他天不亮就处理鸡胗，用米酒和盐反复搓洗——‘洗掉城里灰尘’。再用自酿泡椒快炒。我们站着吃，搪瓷碗碰得叮当响。",
  "ingredients": [
    {
      "id": "xx-01",
      "nameEn": "chicken gizzards",
      "nameZh": "鸡胗",
      "pinyin": "jī zhēn",
      "amountMetric": "150 g",
      "amountUS": "5.3 oz (about 4 medium, cleaned)",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for pre-cleaned; if whole, remove yellow membrane and rinse thoroughly",
      "noteZh": "请摊主代为清理；若买整只，需撕去黄膜并反复冲洗"
    },
    {
      "id": "xx-02",
      "nameEn": "chicken livers",
      "nameZh": "鸡肝",
      "pinyin": "jī gān",
      "amountMetric": "80 g",
      "amountUS": "2.8 oz (about 3 small)",
      "category": "protein",
      "pantry": "local",
      "note": "Soak in cold milk 10 min to reduce bitterness, then pat dry",
      "noteZh": "冷牛奶浸泡10分钟去苦味，擦干"
    },
    {
      "id": "xx-03",
      "nameEn": "Sichuan pickled red chilies (whole or chopped)",
      "nameZh": "四川泡椒",
      "pinyin": "sì chuān pào jiāo",
      "amountMetric": "60 g",
      "amountUS": "1/4 cup, drained and roughly chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute Korean gochujang + 1 tsp rice vinegar (for tang), but flavor differs",
      "noteZh": "可用韩式辣酱+1茶匙米醋替代（风味略有不同）"
    },
    {
      "id": "xx-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "xx-05",
      "nameEn": "Sichuan peppercorn",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "1 g",
      "amountUS": "1/2 tsp, toasted and lightly crushed",
      "category": "spice",
      "pantry": "asian",
      "note": "Toasting unlocks citrusy aroma — do not skip",
      "noteZh": "焙香激发麻香，不可省略",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "xx-06",
      "nameEn": "scallion greens",
      "nameZh": "小葱绿段",
      "pinyin": "xiǎo cōng lǜ duàn",
      "amountMetric": "30 g",
      "amountUS": "1/4 cup, cut into 3-cm lengths",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse gizzards under cold water. Slice into 3-mm thick half-moons. Blanch in boiling water with 5 ml (1 tsp) Shaoxing wine for 90 seconds. Drain, rinse with cold water, and pat dry.",
      "textZh": "鸡胗冷水冲洗，切3毫米厚半圆片。沸水加5毫升绍兴酒焯90秒，捞出过凉水，挤干。",
      "zhHint": "焯水去腥定型",
      "stateNote": {
        "visual": "Gizzard edges curl slightly; surface turns matte white",
        "visualZh": "鸡胗边缘微卷，表面呈哑光白色",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "Foam subsides and water returns to gentle boil",
        "signalZh": "浮沫消退，水重归微沸"
      }
    },
    {
      "text": "Pat chicken livers dry. Cut into 1-cm cubes. Toss with 5 ml (1 tsp) light soy sauce and set aside 5 minutes.",
      "textZh": "鸡肝擦干，切1厘米方块，拌5毫升生抽，腌5分钟。",
      "zhHint": "轻腌去腥增底味",
      "stateNote": {
        "visual": "Liver cubes darken slightly and feel tacky",
        "visualZh": "鸡肝块颜色略深、表面微黏",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No blood seepage remains on plate",
        "signalZh": "盘中无血水渗出"
      }
    },
    {
      "text": "Heat wok over medium-high heat. Add 10 ml (2 tsp) neutral oil, then Sichuan peppercorns. Toast 30 seconds until fragrant and slightly darker.",
      "textZh": "中大火烧热锅，下10毫升油，放入花椒，焙香30秒至微深、出香。",
      "zhHint": "小火焙麻香，防焦苦",
      "stateNote": {
        "visual": "Peppercorns swell and shimmer with oil",
        "visualZh": "花椒粒微胀，油面泛光",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "Citrusy, floral aroma fills air",
        "signalZh": "空气弥漫柑橘花香"
      }
    },
    {
      "text": "Remove peppercorns with slotted spoon. Add gizzards and stir-fry 2 minutes until edges begin to crisp. Push aside, add chopped泡椒, stir 45 seconds until oil turns rosy and fragrant.",
      "textZh": "捞出花椒。下鸡胗炒2分钟至边缘微脆。拨至一边，下泡椒炒45秒至油色微红、香气四溢。",
      "zhHint": "先炒胗再炝泡椒，层次分明",
      "stateNote": {
        "visual": "Oil around chilies blushes pink; tiny bubbles rise steadily",
        "visualZh": "辣椒周围油泛粉红，持续冒细泡",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium-high",
        "signal": "Sharp, vinegary heat lifts from pan",
        "signalZh": "酸辣辛香直冲鼻腔"
      }
    },
    {
      "text": "Return gizzards to center. Add livers and stir-fry 1 minute — just until livers lose raw pink. Finish with scallions and a final drizzle of 5 ml (1 tsp) light soy sauce. Serve hot.",
      "textZh": "鸡胗回锅，下鸡肝快炒1分钟至刚断生（无粉红）。撒葱段，淋5毫升生抽，即出锅。",
      "zhHint": "肝易老，全程猛火快炒",
      "stateNote": {
        "visual": "Livers turn uniform tan-brown; no moisture pools in pan",
        "visualZh": "鸡肝呈均一浅褐色；锅底无汁水聚集",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Livers yield gently to chopstick pressure",
        "signalZh": "筷子轻压即软"
      }
    }
  ],
  "tips": [
    "Never substitute raw chicken gizzards — they must be parboiled for safety and tenderness.",
    "Use only the red brine from the泡椒 jar — not the whole jar — for balanced acidity.",
    "If your local market sells pre-cleaned, vacuum-packed gizzards (common in UK/Canada), skip blanching but still pat dry."
  ],
  "tipsZh": [
    "鸡胗必须焯水，不可生炒，确保安全且嫩滑。",
    "只取泡椒坛中的红油汁液，非整坛泡椒，酸度更均衡。",
    "若当地超市有预处理真空鸡胗（英/加常见），可省焯水，但仍需擦干。"
  ],
  "relatedSlugs": [
    "west-china-celery-stir-fried-chicken-strip"
  ],
  "image": "/images/recipes/spicy-pickled-pepper-stir-fried-chicken-offal.webp"
};
