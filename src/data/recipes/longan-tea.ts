import type { Recipe } from "@/lib/types";

/** Longan Tea (桂圆茶) — Day batch */
export const longan_tea: Recipe = {
  "id": "longan-tea",
  "slug": "longan-tea",
  "titleEn": "Longan Tea",
  "titleZh": "桂圆茶",
  "pinyin": "guì yuán chá",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Fujian",
  "regionZh": "福建",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version simmers dried longan with dates until the liquid turns the colour of strong tea; the teahouse version adds a spoon of honey and serves it iced. Hot is the traditional way - the whole point is the warmth.",
  "versionNoteZh": "家常版把桂圆干与红枣煮到汤色像浓茶；茶馆版加一勺蜂蜜做成冰饮。传统是热饮——重点就是那股暖。",
  "tags": [
    "herbal-tea",
    "25-min",
    "beginner",
    "warming",
    "caffeine-free"
  ],
  "dietary": [
    "vegan",
    "gluten-free",
    "low-sodium"
  ],
  "story": "In Fujian, dried longan is sold still on the branch in winter markets, and every household keeps a jar of the shelled amber flesh for tea. My uncle's rule: buy the ones that are still slightly soft and sticky. Bone-dry longan has been in the warehouse too long and gives a flat, woody tea with none of the honeyed depth.",
  "storyZh": "福建冬天的市场上，桂圆还成串挂着卖，家家都存一罐剥好的琥珀色果肉用来煮茶。叔叔的挑法是：要选还带点软、带点黏的。干得发硬的在仓库放太久，煮出来只有木头味，没有那股蜜香。",
  "ingredients": [
    {
      "id": "lt-01",
      "nameEn": "dried longan flesh",
      "nameZh": "桂圆肉",
      "pinyin": "guì yuán ròu",
      "amountMetric": "25 g",
      "amountUS": "12 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Slightly soft and sticky is right. If the pieces rattle dryly in the bag, they will taste woody.",
      "noteZh": "微软带黏最好。袋子里晃起来哗啦响的，煮出来是木头味。",
      "termKey": "longan"
    },
    {
      "id": "lt-02",
      "nameEn": "dried red dates",
      "nameZh": "红枣",
      "pinyin": "hóng zǎo",
      "amountMetric": "20 g",
      "amountUS": "4 dates",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Dates keep the longan from tasting one-dimensionally sweet.",
      "noteZh": "红枣让桂圆的甜不至于单调。",
      "termKey": "jujube"
    },
    {
      "id": "lt-03",
      "nameEn": "ginger, sliced",
      "nameZh": "生姜片",
      "pinyin": "shēng jiāng",
      "amountMetric": "8 g",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "note": "Two slices, no more. Ginger and longan are both warming and can overpower each other.",
      "noteZh": "两片，别多。姜和桂圆都偏温，容易互相压味。",
      "termKey": "ginger"
    },
    {
      "id": "lt-04",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "600 ml",
      "amountUS": "2 1/2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "lt-05",
      "nameEn": "goji berries",
      "nameZh": "枸杞",
      "pinyin": "gǒu qǐ",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Last-minute only, for colour.",
      "noteZh": "只最后放，为了颜色。",
      "termKey": "goji-berries"
    },
    {
      "id": "lt-06",
      "nameEn": "yellow rock sugar",
      "nameZh": "黄冰糖",
      "pinyin": "huáng bīng táng",
      "amountMetric": "8 g",
      "amountUS": "1 small lump",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Often unnecessary - longan is sweeter than most people expect.",
      "noteZh": "多半不需要——桂圆比大多数人以为的更甜。",
      "termKey": "rock-sugar-raw"
    },
    {
      "id": "lt-07",
      "nameEn": "aged dried tangerine peel",
      "nameZh": "陈皮",
      "pinyin": "chén pí",
      "amountMetric": "1 g",
      "amountUS": "1 small piece",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "A scrap of peel lifts a heavy, honeyed drink so it does not taste like syrup.",
      "noteZh": "一小片陈皮能托起这杯厚重的蜜甜，免得喝起来像糖浆。",
      "termKey": "dried-tangerine-peel"
    }
  ],
  "steps": [
    {
      "text": "Rinse the longan flesh quickly in cold water and pick out any stray shell fragments or hard bits.",
      "textZh": "桂圆肉用冷水快速冲洗，顺便挑掉碎壳与硬块。",
      "zhHint": "冲洗挑杂质",
      "stateNote": {
        "visual": "The flesh darkens slightly and looks glossy rather than dusty",
        "visualZh": "果肉颜色略深，看起来油亮而不是蒙灰",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Smell it - honey and a faint musky note. A sour or fermented smell means the stock has turned",
        "signalZh": "闻一下：蜜香加一点麝香气息。若有酸味或酒味，说明已经变质"
      }
    },
    {
      "text": "Slit the dates and put them with the longan, ginger and tangerine peel into a small pot with the cold water.",
      "textZh": "红枣划口，与桂圆、姜、陈皮一起放入小锅，加冷水。",
      "zhHint": "冷水同下锅",
      "stateNote": {
        "visual": "Amber longan and dark red dates sink to the bottom in a layer",
        "visualZh": "琥珀色桂圆与深红红枣沉在锅底成一层",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Starting from cold water pulls the aroma out gradually instead of sealing the outside",
        "signalZh": "从冷水开始煮，香气是慢慢出来的，而不是把表面封住"
      }
    },
    {
      "text": "Bring to a boil, then lower the heat and simmer gently for 15 minutes with the lid ajar.",
      "textZh": "煮开后转小火，盖子留一条缝，微沸 15 分钟。",
      "zhHint": "小火微沸 15 分钟",
      "stateNote": {
        "visual": "The liquid turns a deep reddish brown, almost the colour of weak black tea",
        "visualZh": "汤色转为深红棕，接近淡红茶的颜色",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "A longan piece looks swollen and translucent at the edges, opaque only in the centre",
        "signalZh": "桂圆块边缘胀成半透明，只有中心还不透光"
      },
      "tip": "Lid ajar, not closed - closed, the musky note concentrates and the tea smells of dried fruit rather than honey.",
      "tipZh": "留缝而不盖严——盖严了那股麝香味会浓缩，喝起来像干果而不是蜜。"
    },
    {
      "text": "Taste and add the rock sugar only if it needs it; stir until dissolved, then simmer 3 more minutes.",
      "textZh": "尝味，需要才加冰糖，搅至化开后再煮 3 分钟。",
      "zhHint": "尝后再加糖",
      "stateNote": {
        "visual": "Sugar dissolves and the surface takes on a faint sheen",
        "visualZh": "糖化开后表面泛出淡淡的光泽",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "The tea coats the back of a spoon thinly - any thicker and it is heading for syrup",
        "signalZh": "能在勺背挂一层薄浆——再稠就快变糖浆了"
      }
    },
    {
      "text": "Switch off, drop in the goji, cover for 3 minutes, then strain into cups and serve hot, eating the softened longan with a spoon.",
      "textZh": "关火放枸杞，盖 3 分钟，滤入杯中热饮，煮软的桂圆可以用勺吃。",
      "zhHint": "关火焖后热饮",
      "stateNote": {
        "visual": "Clear reddish-brown tea; goji bright red on top, softened longan left in the sieve",
        "visualZh": "清亮的红棕茶汤，表面浮鲜红枸杞，滤网里是煮软的桂圆",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "The first sip feels warm all the way down rather than just hot on the tongue",
        "signalZh": "第一口是暖到胃里，而不只是舌头上烫"
      }
    }
  ],
  "tips": [
    "Longan is very sweet; if you add sugar out of habit the drink turns cloying fast.",
    "Iced version: strain, chill, then add a squeeze of lemon - the acidity stops it tasting like fruit syrup.",
    "The spent longan and dates are the best part; eat them rather than binning them."
  ],
  "tipsZh": [
    "桂圆很甜，习惯性加糖会让整杯很快发腻。",
    "冰饮版：滤出冷藏，喝前挤一点柠檬——酸度能压住「水果糖浆」的感觉。",
    "煮过的桂圆和红枣才是精华，吃掉别扔。"
  ],
  "relatedSlugs": [
    "goji-red-date-tea",
    "chrysanthemum-tea",
    "ginger-brown-sugar-tea"
  ],
  "image": "/images/recipes/double-layer-milk-pudding-shuang-pi-nai.webp"
};
