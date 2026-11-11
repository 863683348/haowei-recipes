import type { Recipe } from "@/lib/types";

/** Goji and Red Date Tea (枸杞红枣茶) — Day batch */
export const goji_red_date_tea: Recipe = {
  "id": "goji-red-date-tea",
  "slug": "goji-red-date-tea",
  "titleEn": "Goji and Red Date Tea",
  "titleZh": "枸杞红枣茶",
  "pinyin": "gǒu qǐ hóng zǎo chá",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Ningxia",
  "regionZh": "宁夏",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version simmers the dates for body and drops the goji in at the end; the office version is just both thrown into a thermos with boiling water, which works but tastes thinner and loses the date's caramel edge.",
  "versionNoteZh": "家常版先把红枣煮出厚度、枸杞最后下；办公室版是两样一起丢进保温杯冲滚水，能喝但薄，红枣的焦糖边也没了。",
  "tags": [
    "herbal-tea",
    "25-min",
    "beginner",
    "winter",
    "warming"
  ],
  "dietary": [
    "vegan",
    "gluten-free",
    "low-sodium"
  ],
  "story": "Ningxia grows most of China's goji, and locals treat the two ingredients as a pair the way other places treat tea and milk. The trick everyone there knows: dry-toast the dates in the pan before adding water. It takes two minutes and turns the drink from vaguely sweet water into something that smells like caramel.",
  "storyZh": "中国大部分枸杞产自宁夏，当地人把这两样当成天生一对，就像别处把茶和奶配在一起。那里人人都会的一招：下锅前先把红枣在干锅里焙一下，两分钟就能把这杯从「有点甜的水」变成带焦糖香的东西。",
  "ingredients": [
    {
      "id": "grdt-01",
      "nameEn": "dried red dates",
      "nameZh": "红枣",
      "pinyin": "hóng zǎo",
      "amountMetric": "30 g",
      "amountUS": "6 dates",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Slightly soft, deep-red dates are sweeter. Hard, dusty ones need longer simmering.",
      "noteZh": "略软、深红的更甜；又硬又起灰的要煮久一点。",
      "termKey": "jujube"
    },
    {
      "id": "grdt-02",
      "nameEn": "goji berries",
      "nameZh": "枸杞",
      "pinyin": "gǒu qǐ",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Big, bright red Ningxia berries are worth the small premium here; the pale orange ones taste of nothing.",
      "noteZh": "宁夏大颗鲜红的值得多花那点钱；浅橘色的小粒基本没味。",
      "termKey": "goji-berries"
    },
    {
      "id": "grdt-03",
      "nameEn": "ginger, sliced",
      "nameZh": "生姜片",
      "pinyin": "shēng jiāng",
      "amountMetric": "8 g",
      "amountUS": "2 thin slices",
      "category": "produce",
      "pantry": "local",
      "note": "Just enough to warm the drink without turning it into ginger tea.",
      "noteZh": "刚刚好暖身，又不至于变成姜茶。",
      "termKey": "ginger"
    },
    {
      "id": "grdt-04",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "600 ml",
      "amountUS": "2 1/2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "grdt-05",
      "nameEn": "yellow rock sugar",
      "nameZh": "黄冰糖",
      "pinyin": "huáng bīng táng",
      "amountMetric": "10 g",
      "amountUS": "1 lump",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Optional. Dates and goji are already sweet; taste before you add any.",
      "noteZh": "可省。枣和枸杞本就有甜味，先尝再决定加不加。",
      "termKey": "rock-sugar-raw"
    },
    {
      "id": "grdt-06",
      "nameEn": "dried longan",
      "nameZh": "桂圆肉",
      "pinyin": "guì yuán",
      "amountMetric": "8 g",
      "amountUS": "4 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Optional but it is what makes the drink taste round rather than flat-sweet.",
      "noteZh": "可省，但加了它，这杯才圆润，不然只是单薄的甜。",
      "termKey": "longan"
    }
  ],
  "steps": [
    {
      "text": "Slit each date twice lengthways with a knife - right through the skin, not all the way through the fruit.",
      "textZh": "每颗红枣纵向划两刀——划破皮即可，不要切断。",
      "zhHint": "红枣划口",
      "stateNote": {
        "visual": "Two thin slits open along each date, showing a paler, sticky interior",
        "visualZh": "每颗枣上开两道细口，露出浅色黏稠的果肉",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "The date flexes slightly when you squeeze it - the slits have broken the tight skin",
        "signalZh": "捏一下会微弯——说明紧皮已被划开"
      },
      "tip": "Unslit dates stay sealed and give up almost no sweetness in a short simmer.",
      "tipZh": "不划口的枣是「封住」的，短时间煮几乎不出甜。"
    },
    {
      "text": "Dry-toast the dates and ginger in a dry pan over medium-low heat for 2 minutes, moving them constantly, until they smell of caramel.",
      "textZh": "红枣与姜片放干锅，中小火焙 2 分钟，不停翻动，闻到焦糖香就停。",
      "zhHint": "干锅焙出焦糖香",
      "stateNote": {
        "visual": "The date skins darken a shade and go slightly glossy at the slits",
        "visualZh": "枣皮颜色深一档，划口处泛出微微油亮",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "A toasty, almost burnt-sugar smell rises - pull the pan off before it turns acrid",
        "signalZh": "飘出烘烤、近乎焦糖的气味——一旦转成焦糊味就立刻离火"
      }
    },
    {
      "text": "Add the water, bring to a boil, then simmer uncovered for 15 minutes.",
      "textZh": "倒入清水煮开，不加盖小火煮 15 分钟。",
      "zhHint": "小火煮 15 分钟",
      "stateNote": {
        "visual": "The liquid goes from clear to a warm reddish brown; dates float and soften",
        "visualZh": "水从清澈转为温暖的红棕色，红枣浮起变软",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "A date crushed against the pot wall gives way with no resistance",
        "signalZh": "枣抵住锅壁一压就烂，没有阻力"
      }
    },
    {
      "text": "Add the longan, if using, and simmer 5 more minutes so it sweetens the liquid without disintegrating.",
      "textZh": "加桂圆肉（如用），再煮 5 分钟，让甜味化开又不敢煮散。",
      "zhHint": "桂圆后下 5 分钟",
      "stateNote": {
        "visual": "Longan flesh plumps from amber to a translucent gold",
        "visualZh": "桂圆肉从琥珀色胀成半透明金黄",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "The pieces are still whole but a fork goes straight through",
        "signalZh": "整块还在，但叉子一戳就透"
      }
    },
    {
      "text": "Switch off the heat, add the goji berries and put the lid on for 3 minutes - they plump in residual heat and never turn sour.",
      "textZh": "关火，放入枸杞，盖盖焖 3 分钟——靠余温胀开，绝不发酸。",
      "zhHint": "关火焖枸杞",
      "stateNote": {
        "visual": "Goji berries swell and float, bright scarlet against the brown tea",
        "visualZh": "枸杞胀起上浮，猩红色衬在褐色茶汤上",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "A berry feels soft and juicy between your fingers, not leathery",
        "signalZh": "捏起来软而多汁，不是皮革感"
      }
    },
    {
      "text": "Taste, add the rock sugar only if it needs it, stir to dissolve, and strain into cups. The dates and goji can be eaten with a spoon.",
      "textZh": "尝味，确实需要才加冰糖，搅化后滤入杯中。枣和枸杞可以用勺吃掉。",
      "zhHint": "先尝再加糖",
      "stateNote": {
        "visual": "Deep amber tea, clear, with softened fruit left in the sieve",
        "visualZh": "深琥珀色茶汤清亮，滤网里留下煮软的果肉",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "The sweetness sits at the back of the sip rather than hitting immediately - that is dates, not sugar",
        "signalZh": "甜味停在咽下之后而非入口即甜——那是枣的甜，不是糖"
      }
    }
  ],
  "tips": [
    "Toasting the dates is the single upgrade most people skip; without it the tea tastes flat.",
    "For a thermos version at work, still slit the dates and use boiling water, but expect a thinner cup.",
    "Do not simmer goji for the whole time - it turns sour and stains the tea an odd orange."
  ],
  "tipsZh": [
    "焙枣是大多数人省掉的那一步；少了它，整杯就是平的。",
    "在办公室用保温杯泡，也要划口、用滚水，但要有心理准备会淡一些。",
    "枸杞不要全程煮——会发酸，还会把茶染成奇怪的橘色。"
  ],
  "relatedSlugs": [
    "chrysanthemum-tea",
    "longan-tea",
    "ginger-brown-sugar-tea"
  ],
  "image": "/images/recipes/red-bean-soup-hong-dou-sha.webp"
};
