import type { Recipe } from "@/lib/types";

/** Eight-Treasure Congee (Lababa Zhou) (八宝粥) — Day batch */
export const eight_treasure_congee: Recipe = {
  "id": "eight-treasure-congee",
  "slug": "eight-treasure-congee",
  "titleEn": "Eight-Treasure Congee (Lababa Zhou)",
  "titleZh": "八宝粥",
  "pinyin": "bā bǎo zhōu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-Style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 6,
  "version": "family",
  "versionNote": "Family version uses whatever eight ingredients are in the cupboard; restaurant versions follow a fixed list and simmer it for hours until it is almost jam-like, then sweeten heavily and serve in small bowls.",
  "versionNoteZh": "家常版用橱柜里任意八样食材；餐厅版按固定配方熬数小时至近果酱状，重糖小碗上桌。",
  "tags": [
    "90-min",
    "congee",
    "vegetarian",
    "festive",
    "batch-cook"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "Traditionally eaten on the eighth day of the twelfth lunar month, eight-treasure congee is less a recipe than a rule: eight things from the cupboard, cooked long and slow. My family's version always included red dates and peanuts because my grandmother said a New Year without them would be 'a plain year.'",
  "storyZh": "传统上在腊月初八食用，八宝粥与其说是菜谱不如说是规矩：橱柜里凑八样，慢慢熬。我家那锅总有红枣和花生，因为我奶奶说过年没有它们就是『素年』。",
  "ingredients": [
    {
      "id": "bb-01",
      "nameEn": "glutinous (sweet) rice",
      "nameZh": "糯米",
      "pinyin": "nuò mǐ",
      "amountMetric": "100 g",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "asian",
      "note": "The base that makes the congee sticky and glossy",
      "noteZh": "让粥黏稠发亮的基底"
    },
    {
      "id": "bb-02",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "bái mǐ",
      "amountMetric": "60 g",
      "amountUS": "⅓ cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "bb-03",
      "nameEn": "dried adzuki beans",
      "nameZh": "干红豆",
      "pinyin": "chì xiǎo dòu",
      "amountMetric": "60 g",
      "amountUS": "⅓ cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak overnight or quick-soak before using",
      "noteZh": "提前一夜浸泡或快泡"
    },
    {
      "id": "bb-04",
      "nameEn": "raw peanuts, skin on",
      "nameZh": "带衣生花生",
      "pinyin": "huā shēng",
      "amountMetric": "60 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "note": "Soak with the beans; they stay pleasantly firm after long cooking",
      "noteZh": "与豆同泡；久煮后仍保有口感"
    },
    {
      "id": "bb-05",
      "nameEn": "dried red dates (jujube), pitted and halved",
      "nameZh": "干红枣，去核对半",
      "pinyin": "hóng zǎo",
      "amountMetric": "60 g",
      "amountUS": "about 8 dates",
      "category": "produce",
      "pantry": "asian",
      "note": "The main sweetener — buy pitted to save time",
      "noteZh": "主要甜味来源，买去核的更省事"
    },
    {
      "id": "bb-06",
      "nameEn": "dried lotus seeds",
      "nameZh": "干莲子",
      "pinyin": "lián zǐ",
      "amountMetric": "40 g",
      "amountUS": "⅓ cup",
      "category": "produce",
      "pantry": "asian",
      "note": "Soak 1 hour; check for and remove any bitter green cores",
      "noteZh": "泡1小时；挑掉发苦的绿色莲芯"
    },
    {
      "id": "bb-07",
      "nameEn": "dried longan flesh",
      "nameZh": "桂圆肉",
      "pinyin": "guì yuán ròu",
      "amountMetric": "30 g",
      "amountUS": "3 tbsp",
      "category": "produce",
      "pantry": "asian",
      "note": "Adds a deep raisin-like sweetness",
      "noteZh": "增添类似葡萄干的浓厚甜味"
    },
    {
      "id": "bb-08",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar",
      "note": "Adjust to taste — the dates and longan already bring sweetness",
      "noteZh": "按口味调整——红枣桂圆本身已有甜味"
    },
    {
      "id": "bb-09",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "1.8 L",
      "amountUS": "7½ cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak adzuki beans, peanuts and lotus seeds in cold water for at least 4 hours or overnight. Drain, and remove any green cores from the lotus seeds.",
      "textZh": "红豆、花生与莲子加冷水浸泡至少4小时或过夜。沥干，并挑去莲子中的绿色莲芯。",
      "zhHint": "豆类莲子泡透",
      "stateNote": {
        "visual": "Beans and lotus seeds are plump and smooth-skinned; peanuts look swollen",
        "visualZh": "豆与莲子饱满、表皮光滑；花生涨大",
        "timeRef": "4 hours or overnight",
        "timeRefZh": "4 小时或过夜",
        "heat": "low",
        "signal": "A lotus seed splits cleanly and shows no hard chalky centre",
        "signalZh": "莲子掰开断面干净，无干粉硬芯"
      }
    },
    {
      "text": "Put beans, peanuts and lotus seeds in a heavy pot with 1.8 L water. Boil, then lower to medium-low and simmer 40 minutes.",
      "textZh": "红豆、花生、莲子入厚底锅加1.8升水，烧沸后转中小火煮40分钟。",
      "zhHint": "硬料先煮40分",
      "stateNote": {
        "visual": "Beans split their skins and the water turns faintly pink-brown",
        "visualZh": "豆皮裂开，水呈淡粉褐色",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "medium-low",
        "signal": "A bean and a lotus seed both mash easily against the pot wall",
        "signalZh": "豆与莲子在锅壁都能轻松压碎"
      }
    },
    {
      "text": "Rinse both rices and add them to the pot with the red dates and longan. Simmer 35 minutes, stirring every 8 minutes so nothing sticks.",
      "textZh": "两种米淘净，连同红枣、桂圆下锅，小火煮35分钟，每8分钟搅一次防粘。",
      "zhHint": "米与果料后下",
      "stateNote": {
        "visual": "Rice grains burst, dates plump up and wrinkle, and the porridge turns rosy brown",
        "visualZh": "米粒爆开，红枣涨起起皱，粥转玫瑰褐色",
        "timeRef": "35 minutes",
        "timeRefZh": "35 分钟",
        "heat": "medium-low",
        "signal": "Spoon dragged along the bottom meets resistance and the trail fills slowly",
        "signalZh": "勺子刮底有阻力，勺痕缓慢回填"
      }
    },
    {
      "text": "Add rock sugar and stir 5 minutes until dissolved and the congee has thickened to a spoon-coating consistency.",
      "textZh": "加冰糖搅5分钟至溶化，粥已稠到能挂勺。",
      "zhHint": "冰糖后加",
      "stateNote": {
        "visual": "Surface is glossy and no sugar crystals catch the light",
        "visualZh": "表面发亮，无糖粒反光",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "A spoon drawn through leaves a channel that holds for about two seconds",
        "signalZh": "勺子划过留下的沟槽约两秒才合拢"
      }
    },
    {
      "text": "Turn the heat to the lowest setting and cook 10 minutes more, stirring often, until the congee is thick, jammy and uniform.",
      "textZh": "转最小火再煮10分钟并勤搅，至粥浓稠如酱、质地均匀。",
      "zhHint": "最小火收稠",
      "stateNote": {
        "visual": "Porridge is deep amber, thick enough that a spoon stands briefly upright",
        "visualZh": "粥呈深琥珀色，稠到勺子能短暂直立",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Bubbles plop slowly and the whole mass moves as one when stirred",
        "signalZh": "气泡缓慢鼓起，搅拌时整体一起移动"
      }
    },
    {
      "text": "Rest off the heat for 10 minutes before serving warm, or chill for a firmer, pudding-like bowl.",
      "textZh": "关火静置10分钟后温食，或冷藏后得到更挺的布丁质地。",
      "zhHint": "静置后更稠",
      "stateNote": {
        "visual": "A thin film forms on top; dates and longan sit evenly distributed, not sunk",
        "visualZh": "表面结薄皮，红枣桂圆分布均匀未沉底",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Spoon holds a shape when the congee is scooped, rather than spreading flat",
        "signalZh": "舀起时能保持形状，不会摊平"
      }
    }
  ],
  "tips": [
    "There is no fixed list — eight means 'several'; use millet, barley, walnuts or raisins to fill gaps.",
    "Stir more often as it thickens; the sugar makes it catch on the bottom fast.",
    "Canned eight-treasure congee exists, but homemade has far better texture and half the sugar."
  ],
  "tipsZh": [
    "并无固定配方——『八』只是虚数；缺什么可用小米、薏米、核桃或葡萄干补。",
    "越稠越要勤搅，加糖后极易糊底。",
    "市售罐头八宝粥很方便，但自制的口感好得多、糖也少一半。"
  ],
  "relatedSlugs": [
    "red-bean-congee",
    "pumpkin-congee"
  ],
  "image": "/images/recipes/jidi-congee.webp"
};
