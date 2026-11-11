import type { Recipe } from "@/lib/types";

/** Chrysanthemum Tea (菊花茶) — Day batch */
export const chrysanthemum_tea: Recipe = {
  "id": "chrysanthemum-tea",
  "slug": "chrysanthemum-tea",
  "titleEn": "Chrysanthemum Tea",
  "titleZh": "菊花茶",
  "pinyin": "jú huā chá",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Zhejiang (Hangzhou)",
  "regionZh": "浙江杭州",
  "difficulty": "easy",
  "timeMin": 12,
  "servings": 2,
  "version": "family",
  "versionNote": "The home version is a three-minute steep in a glass so you can watch the flowers open; teahouses boil the buds with rock sugar and a pinch of licorice for a sweeter, heavier cup. The short steep is the whole point - bitterness arrives after five minutes.",
  "versionNoteZh": "家常版就是玻璃杯里泡三分钟，看花在水里开；茶馆会加冰糖和一小片甘草煮，更甜更厚重。短泡才是关键——五分钟之后苦味就出来了。",
  "tags": [
    "herbal-tea",
    "3-min",
    "beginner",
    "summer",
    "caffeine-free"
  ],
  "dietary": [
    "vegan",
    "gluten-free",
    "low-sodium"
  ],
  "story": "Hangzhou people drink this the way other cities drink coffee: a glass of dried Hangzhou white chrysanthemum on the desk, topped up with hot water all day. My aunt judged a teahouse by one thing - whether the flowers were rinsed first. Unrinsed buds carry field dust and a hard, soapy edge that no amount of sugar fixes.",
  "storyZh": "杭州人喝菊花茶就像别的城市喝咖啡：桌上一个玻璃杯，抓一把杭白菊，一整天不断续热水。姑妈评判茶馆只有一个标准——花有没有先洗。没洗过的花带着田间灰尘和一股硬邦邦的肥皂味，加多少糖都救不回来。",
  "ingredients": [
    {
      "id": "ct-01",
      "nameEn": "dried chrysanthemum buds",
      "nameZh": "干菊花（杭白菊）",
      "pinyin": "gān jú huā",
      "amountMetric": "2 g",
      "amountUS": "8-10 buds",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Hangzhou white buds are sweeter; the small yellow ones are more bitter and more cooling. Either works, but use the yellow ones sparingly.",
      "noteZh": "杭白菊更甜；小黄菊更苦、更「清热」。两种都行，黄的少放。",
      "termKey": "chrysanthemum"
    },
    {
      "id": "ct-02",
      "nameEn": "hot water, about 90°C",
      "nameZh": "约 90°C 热水",
      "pinyin": "rè shuǐ",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "other",
      "pantry": "local",
      "note": "Boiling water scalds the petals and releases bitterness; let the kettle sit 60 seconds after it clicks.",
      "noteZh": "滚水会烫坏花瓣、逼出苦味；水开后再等 60 秒再用。"
    },
    {
      "id": "ct-03",
      "nameEn": "yellow rock sugar",
      "nameZh": "黄冰糖",
      "pinyin": "huáng bīng táng",
      "amountMetric": "8 g",
      "amountUS": "1 small lump",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Optional. If you use honey instead, stir it in only when the tea is cool enough to drink.",
      "noteZh": "可省。若改用蜂蜜，等茶降到能入口再拌。",
      "termKey": "rock-sugar-raw"
    },
    {
      "id": "ct-04",
      "nameEn": "goji berries",
      "nameZh": "枸杞",
      "pinyin": "gǒu qǐ",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "For colour and a little roundness. They soften in the hot water in about two minutes.",
      "noteZh": "添色、添圆润。热水里两分钟就软。",
      "termKey": "goji-berries"
    },
    {
      "id": "ct-05",
      "nameEn": "dried red date, sliced",
      "nameZh": "红枣片",
      "pinyin": "hóng zǎo",
      "amountMetric": "6 g",
      "amountUS": "1 date",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Slice it thin so it gives sweetness in a three-minute steep; a whole date does nothing that fast.",
      "noteZh": "切薄片，三分钟泡才出甜；整颗这么短时间泡不出味。",
      "termKey": "jujube"
    },
    {
      "id": "ct-06",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "pinyin": "fēng mì",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Use honey or rock sugar, not both. Honey keeps the floral note; sugar keeps the tea clear.",
      "noteZh": "蜂蜜和冰糖二选一。蜂蜜留花香，冰糖让茶更清亮。",
      "termKey": "honey"
    }
  ],
  "steps": [
    {
      "text": "Put the chrysanthemum buds in a small sieve and pour a little hot water over them for five seconds, then discard that water.",
      "textZh": "菊花放小滤网里，用少量热水冲五秒，把这遍水倒掉。",
      "zhHint": "先洗花",
      "stateNote": {
        "visual": "The rinse water comes away faintly yellow and cloudy; the buds brighten to a cleaner yellow",
        "visualZh": "洗花水呈浅黄微浊；花蕾颜色变得更干净的黄",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "heat": "low",
        "signal": "The dusty, hay-like smell washes off - what is left is light and floral",
        "signalZh": "那股灰扑扑的干草味被冲掉，剩下的是清淡花香"
      },
      "tip": "This one step is why teahouse tea tastes clean and most home cups do not.",
      "tipZh": "就这一步决定了茶馆的茶干净、而多数家里的杯子里有杂味。"
    },
    {
      "text": "Warm a glass or small teapot with hot water, swirl and empty it, then add the rinsed buds, goji and sliced date.",
      "textZh": "玻璃杯或小茶壶先用热水烫一遍、转一圈倒掉，再放入洗好的菊花、枸杞与红枣片。",
      "zhHint": "温杯再投料",
      "stateNote": {
        "visual": "Dry petals sit light on the bottom of the warmed glass and start to open at the edges",
        "visualZh": "干花瓣轻落在温热杯底，边缘开始舒展",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "The glass is warm to the touch but not too hot to hold - that is the right starting temperature",
        "signalZh": "杯壁摸着温热但不烫手——这就是合适的起始温度"
      }
    },
    {
      "text": "Pour the 90°C water in a slow stream down the side of the glass so the buds tumble instead of being crushed to the bottom.",
      "textZh": "90°C 热水沿杯壁缓缓注入，让花蕾翻滚起来，而不是被冲压到杯底。",
      "zhHint": "沿壁缓注",
      "stateNote": {
        "visual": "Petals open into flat discs and drift upward, some floating petal-up",
        "visualZh": "花瓣舒成扁圆片、向上浮，有几朵正面朝上浮在表面",
        "timeRef": "20 seconds to pour",
        "timeRefZh": "注水约 20 秒",
        "heat": "medium-low",
        "signal": "Flowers rise and float within seconds - buds that sink and stay down are old stock",
        "signalZh": "花几秒内就浮起来——一直沉底的说明是陈货"
      }
    },
    {
      "text": "Steep for exactly 3 minutes. Do not stir, and do not walk away and leave it longer.",
      "textZh": "准准泡 3 分钟。不要搅，也别放着不管泡过头。",
      "zhHint": "3 分钟准时出汤",
      "stateNote": {
        "visual": "The water turns a clear pale gold; the petals go from bright yellow to translucent",
        "visualZh": "水转成清亮的浅金；花瓣从鲜黄变为半透明",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Smell it: floral and honeyed. Once you catch a soapy edge, it is already 2 minutes too late",
        "signalZh": "闻一下：花香带蜜。一旦闻到肥皂味，就已经多泡了两分钟"
      }
    },
    {
      "text": "Add the rock sugar now if using, let it dissolve for 30 seconds, and drink while warm. Top up with hot water for a second, milder cup.",
      "textZh": "此时放冰糖，等 30 秒化开，趁温喝。之后续热水，第二泡更淡更柔。",
      "zhHint": "后调糖再续水",
      "stateNote": {
        "visual": "Sugar sinks and dissolves in a slow spiral; the tea stays completely clear",
        "visualZh": "冰糖下沉、缓缓螺旋化开，茶汤依然完全清亮",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "The sweetness arrives after the floral note rather than smothering it",
        "signalZh": "甜味在花香之后才出现，而不是把花香盖掉"
      }
    }
  ],
  "tips": [
    "Never steep chrysanthemum longer than five minutes; the bitterness is not something sugar can hide.",
    "Yellow chrysanthemum is considered more 'cooling' and is stronger - use half the amount you would of white buds.",
    "A covered cup keeps the volatile oils in, but take the lid off to smell it before you drink."
  ],
  "tipsZh": [
    "菊花不要泡超过五分钟；那股苦不是糖能盖住的。",
    "黄菊「清热」更强、味道更冲——用量按白菊的一半算。",
    "盖着杯子能留住挥发油，但喝之前要揭盖闻一下。"
  ],
  "relatedSlugs": [
    "goji-red-date-tea",
    "longan-tea",
    "luo-han-guo-tea"
  ],
  "image": "/images/recipes/rock-sugar-pear-soup.webp"
};
