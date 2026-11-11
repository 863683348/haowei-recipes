import type { Recipe } from "@/lib/types";

/** Black Rice Congee (黑米粥) — Day batch */
export const black_rice_congee: Recipe = {
  "id": "black-rice-congee",
  "slug": "black-rice-congee",
  "titleEn": "Black Rice Congee",
  "titleZh": "黑米粥",
  "pinyin": "hēi mǐ zhōu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Shaanxi",
  "regionZh": "陕西",
  "difficulty": "easy",
  "timeMin": 70,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version soaks the black rice overnight and cooks it long and slow until the grains burst and bleed their purple into the pot; restaurant versions often add a pinch of alkali to force the colour out in half the time, which gives a darker bowl but a flatter, slightly soapy taste.",
  "versionNoteZh": "家常版黑米隔夜浸泡，小火慢熬至米粒开花、紫色渗满整锅；餐厅常加一点碱逼色，半小时就能熬到很深，但味道偏平、略带碱味。",
  "tags": [
    "70-min",
    "congee",
    "breakfast",
    "vegan",
    "gluten-free",
    "make-ahead"
  ],
  "dietary": [
    "vegan",
    "gluten-free"
  ],
  "story": "Black rice from Yangxian in Shaanxi was tribute rice for emperors, which is a grand way of saying it was too expensive for anyone else. My mother-in-law cooks it on the first cold day of autumn and stirs in walnuts, because the grain is chewy and needs something rich against it. She judges the pot by the colour on the spoon: pale purple means keep going, inky purple means it is ready.",
  "storyZh": "陕西洋县的黑米曾是贡米，说白了就是别人吃不起。婆婆每年入秋头一个冷天就熬一锅，必配核桃仁——黑米有嚼劲，得有油润的东西配。她看勺上的颜色判断：淡紫就继续熬，浓紫发黑才算好。",
  "ingredients": [
    {
      "id": "brc-01",
      "nameEn": "black rice (forbidden rice), soaked overnight",
      "nameZh": "黑米，隔夜浸泡",
      "pinyin": "hēi mǐ",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Sold as black rice or forbidden rice; the soaking water will turn deep purple - pour it into the pot, do not throw it away",
      "noteZh": "亚洲超市标『黑米』、西人超市标 forbidden rice；泡米水会变深紫，倒进锅里别扔"
    },
    {
      "id": "brc-02",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "30 g",
      "amountUS": "2 1/2 tbsp",
      "category": "staple",
      "pantry": "local",
      "note": "Black rice alone stays chewy and never thickens; a little white rice gives the pot body",
      "noteZh": "纯黑米始终有嚼劲也不出稠；加一点白米才能熬出粥体"
    },
    {
      "id": "brc-03",
      "nameEn": "water",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "1.3 L",
      "amountUS": "5 1/2 cups",
      "category": "other",
      "pantry": "local",
      "note": "Add more during cooking if it tightens up; congee should stay loose enough to pour",
      "noteZh": "煮稠了中途补热水；粥要保持能倾倒的稀度"
    },
    {
      "id": "brc-04",
      "nameEn": "dried red dates (jujube), pitted",
      "nameZh": "红枣，去核",
      "pinyin": "hóng zǎo",
      "amountMetric": "4",
      "amountUS": "4 dates",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Pit them so they do not dry your throat - traditional Chinese cooking holds that the pits are heating",
      "noteZh": "去核再下锅，传统认为枣核性燥",
      "termKey": "jujube"
    },
    {
      "id": "brc-05",
      "nameEn": "walnut halves, lightly toasted",
      "nameZh": "核桃仁，微烘",
      "pinyin": "hé táo rén",
      "amountMetric": "20 g",
      "amountUS": "1/4 cup",
      "category": "other",
      "pantry": "local",
      "note": "Toast them dry for 3 minutes first; raw walnuts taste flat and slightly astringent in the bowl",
      "noteZh": "先干锅烘3分钟；生核桃在粥里味平且略涩"
    },
    {
      "id": "brc-06",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Add to taste at the end; for a savoury pot leave it out and serve with pickles",
      "noteZh": "最后按口味加；做咸粥则不加，配小菜吃",
      "termKey": "rock-sugar"
    },
    {
      "id": "brc-07",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "other",
      "pantry": "local",
      "note": "A few drops stop the pot boiling over and keep the surface from forming a skin too early",
      "noteZh": "几滴可防溢锅，也避免过早结皮"
    }
  ],
  "steps": [
    {
      "text": "Rinse the black rice once in cold water, then drain it into the pot through a sieve, keeping the deep purple soaking liquid if you soaked it separately.",
      "textZh": "黑米用冷水快速淘洗一次，沥入锅中；若另盆浸泡，深紫色的泡米水要留着一起倒入。",
      "zhHint": "淘一次，泡米水留用",
      "stateNote": {
        "visual": "Grains are hard, slender and near-black with a purple sheen; the runoff is deep purple rather than muddy grey",
        "visualZh": "米粒细硬近黑、带紫色光泽；淘洗水呈深紫而非灰浊",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "No grit or broken husks sit in the bottom of the sieve",
        "signalZh": "筛底无沙粒或碎壳残留"
      },
      "tip": "Rinse once only. Every extra rinse washes away the anthocyanin that gives the pot its colour.",
      "tipZh": "只淘一次。多淘一次就把花青素洗掉了，粥色会淡。"
    },
    {
      "text": "Bring the water and oil to a full rolling boil, add both rices in a slow stream while stirring, and boil uncovered over medium-high heat for 10 minutes.",
      "textZh": "水与油大火烧至完全沸腾，边搅边缓缓冲入黑米与白米，中大火敞盖煮10分钟。",
      "zhHint": "滚水下米敞盖煮",
      "stateNote": {
        "visual": "Water is at a hard boil before the grain goes in; once added, a purple foam lifts to the rim and the grains tumble freely",
        "visualZh": "下米前水剧烈沸腾；下米后紫色浮沫涌向锅边，米粒自由翻滚",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-high",
        "signal": "The water has already taken on a grey-purple tint, not clear",
        "signalZh": "水已呈灰紫色而非清透"
      }
    },
    {
      "text": "Add the pitted dates, drop to the lowest heat, cover with the lid ajar and simmer 40 minutes, stirring every 10 minutes so nothing sticks.",
      "textZh": "下入去核红枣，转最小火，锅盖留缝加盖，小火熬40分钟，每10分钟搅一次防粘底。",
      "zhHint": "小火慢熬40分钟",
      "stateNote": {
        "visual": "Liquid has deepened from grey-purple to inky violet; dates have swollen and wrinkled; a few grains have split open",
        "visualZh": "汤色由灰紫转为浓墨紫；红枣胀起起皱；部分米粒已裂开",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "low",
        "signal": "Bubbles break slowly and heavily in the centre with a thick plop rather than a hiss",
        "signalZh": "中心气泡缓慢沉重地「噗」一声破裂，而不是滋滋作响"
      },
      "tip": "Simmer, do not boil. A hard boil shreds the grains and you get coloured water with rice in it.",
      "tipZh": "要「熬」不要「煮」。大火滚会把米粒煮烂，变成有颜色的米汤。"
    },
    {
      "text": "Stir in the toasted walnuts and rock sugar and cook 5 minutes more, until the sugar has dissolved and the walnuts have softened slightly at the edges.",
      "textZh": "加入烘香的核桃仁与冰糖，再煮5分钟，至糖完全溶化、核桃边缘微软。",
      "zhHint": "核桃冰糖后放",
      "stateNote": {
        "visual": "Walnut pieces are glossy and dark against the violet porridge; no sugar crystals catch the spoon",
        "visualZh": "核桃块在紫色粥中油亮色深；勺上无糖粒残留",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Taste it - the sweetness should sit behind the nuttiness, and the walnut should still have some bite",
        "signalZh": "尝一口——甜味应在坚果香之后，核桃仍要保留一点嚼劲"
      }
    },
    {
      "text": "Turn off the heat and let it stand covered for 10 minutes. The congee will thicken noticeably as it sits; loosen with a splash of hot water and serve.",
      "textZh": "关火加盖静置10分钟。静置期间粥会明显变稠；加少许热水调开即可食用。",
      "zhHint": "关火静置再调稠",
      "stateNote": {
        "visual": "Surface has a faint purple skin; the porridge holds a spoon trail for a second before closing over",
        "visualZh": "表面结出淡紫薄皮；勺痕可停留一秒才合拢",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "The spoon stands upright in the middle of the pot for a moment before leaning",
        "signalZh": "勺子插在锅中央能立住片刻才倾倒"
      }
    }
  ],
  "tips": [
    "Soak the black rice overnight - unsoaked grain stays stubbornly chewy no matter how long you cook it.",
    "Keep the soaking water; most of the colour and a lot of the aroma live in it.",
    "It sets almost solid in the fridge. Reheat with hot water over low heat, stirring, and it comes back exactly right."
  ],
  "tipsZh": [
    "黑米一定隔夜浸泡——不泡的米粒再怎么熬都顽固地有嚼劲。",
    "泡米水别倒，大半的颜色和不少香气都在里面。",
    "冷藏后几乎凝固成块。回锅加热水小火搅拌，能完全恢复原样。"
  ],
  "relatedSlugs": [
    "millet-congee",
    "eight-treasure-congee",
    "red-bean-congee"
  ],
  "image": "/images/recipes/pidan-shourou-congee.webp"
};
