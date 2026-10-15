import type { Recipe } from "@/lib/types";

/** Red Date Mantou (Jujube Buns) (枣馒头) — Day batch */
export const jujube_mantou: Recipe = {
  "id": "jujube-mantou",
  "slug": "jujube-mantou",
  "titleEn": "Red Date Mantou (Jujube Buns)",
  "titleZh": "枣馒头",
  "pinyin": "zǎo mántou",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 165,
  "servings": 10,
  "version": "family",
  "versionNote": "Home versions chop the dates coarsely so you get jammy pockets in every bite. Shandong bakery versions steam the dates into a smooth paste and swirl it in, giving a marbled bun with an even sweetness throughout.",
  "versionNoteZh": "家常版把红枣粗粗剁碎，每一口都能咬到果酱般的枣块；山东面点铺把枣蒸成细腻枣泥再旋进去，做出来是大理石纹、甜度均匀的馒头。",
  "tags": [
    "steamed-buns",
    "naturally-sweet",
    "festive",
    "make-ahead"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Red date mantou is festival food in Shandong — the dates mean sweetness and the red means luck, so these appear at New Year and at every wedding breakfast. The dates are simmered first rather than chopped in raw, because a dry date will suck moisture out of the dough and leave you with hard lumps.",
  "storyZh": "枣馒头在山东是节庆食物——枣寓意甜蜜，红色寓意吉利，所以过年和每场喜酒早饭都少不了。红枣要先煮过而不是生着切进去，因为干枣会反过来吸面团的水分，蒸出来变成硬疙瘩。",
  "ingredients": [
    {
      "id": "jm-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "450 g",
      "amountUS": "3¾ cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "jm-02",
      "nameEn": "dried red dates (jujube)",
      "nameZh": "红枣",
      "pinyin": "hóng zǎo",
      "amountMetric": "120 g",
      "amountUS": "about 14 dates",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "jujube",
      "note": "Look for plump, glossy dates; shrivelled ones will not soften",
      "noteZh": "选饱满油亮的枣，干瘪的煮不软"
    },
    {
      "id": "jm-03",
      "nameEn": "water for simmering",
      "nameZh": "清水（煮枣用）",
      "amountMetric": "250 ml",
      "amountUS": "1 cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "jm-04",
      "nameEn": "brown sugar",
      "nameZh": "红糖",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Adds molasses depth that white sugar cannot",
      "noteZh": "带来白糖没有的焦糖醇厚感"
    },
    {
      "id": "jm-05",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "jm-06",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "12 ml",
      "amountUS": "2½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "jm-07",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Simmer the dates in the water over low heat 10 minutes until plump and glossy. Reserve every drop of the cooking liquid and cool it to 35°C.",
      "textZh": "红枣加水小火煮10分钟至饱满油亮。煮枣水一滴不留地留着，放凉至35°C。",
      "zhHint": "煮枣",
      "stateNote": {
        "visual": "Dates have swollen, the skins are taut and shiny, and the liquid is a clear amber",
        "visualZh": "枣胀大，表皮紧绷发亮，汤汁呈清澈琥珀色",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "A date pierced with a fork offers no resistance in the centre",
        "signalZh": "叉子扎入枣心毫无阻力"
      },
      "tip": "That amber liquid is the sweetener and the colour. Do not throw it out.",
      "tipZh": "那锅琥珀色汤汁既是甜味又是颜色，千万别倒。"
    },
    {
      "text": "Pit the dates and chop them coarsely, then mash a third of them to a rough paste so the dough gets both chunks and jam.",
      "textZh": "红枣去核粗剁，取三分之一压成粗泥，这样面团里既有枣块又有枣酱。",
      "zhHint": "去核剁碎",
      "stateNote": {
        "visual": "Mixture is dark red-black, sticky and holds together when pressed, with visible chunky pieces",
        "visualZh": "混合物呈深红黑、发粘，按压能成团，并能看到明显枣块",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "The paste clings to the knife and the chunks stay distinct rather than smearing",
        "signalZh": "枣泥粘刀，枣块依然粒粒分明不糊"
      }
    },
    {
      "text": "Mix flour, sugar, salt and yeast. Pour in 200 ml of the cooled date liquid and the oil, knead 8 minutes, then knead in the date mixture 3 more minutes.",
      "textZh": "面粉、糖、盐、酵母混匀，倒入200毫升凉至35°C的煮枣水和油揉8分钟，再加入枣料揉3分钟。",
      "zhHint": "和面与拌入枣料",
      "stateNote": {
        "visual": "Dough is a warm beige mottled with dark date pieces, smooth and no longer tacky",
        "visualZh": "面团呈暖米色并散布深红枣块，光滑且不粘手",
        "timeRef": "11 minutes",
        "timeRefZh": "11 分钟",
        "signal": "Chunks are evenly distributed and none are exposed on the surface",
        "signalZh": "枣块分布均匀，表面没有裸露在外的"
      }
    },
    {
      "text": "Cover and rise at room temperature until doubled, about 75 minutes.",
      "textZh": "加盖室温发酵约75分钟至两倍大。",
      "zhHint": "一发",
      "stateNote": {
        "visual": "Dough has domed and the surface is speckled with dark date pieces under a taut skin",
        "visualZh": "面团隆起，绷紧的表皮下透出深色的枣斑",
        "timeRef": "75 minutes",
        "timeRefZh": "75 分钟",
        "signal": "A floured finger dent stays for 3 seconds",
        "signalZh": "沾粉手指按出的凹坑静止3秒"
      }
    },
    {
      "text": "Degassing knead 2 minutes, cut into 10, shape into tall balls and proof 25 minutes on parchment.",
      "textZh": "排气揉2分钟，切10份收成高圆球，垫纸醒发25分钟。",
      "zhHint": "成形二发",
      "stateNote": {
        "visual": "Buns have grown by half and the date speckles have softened into the surface",
        "visualZh": "生坯胀大半，枣斑与表面融合得更柔和",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "A light press springs back slowly leaving a shallow dent",
        "signalZh": "轻按缓慢回弹，留下浅坑"
      }
    },
    {
      "text": "Steam over vigorously boiling water 16 minutes with a cloth-wrapped lid, rest 5 minutes, then open the lid away from you.",
      "textZh": "笼布包锅盖、沸水大火蒸16分钟，焖5分钟后向反方向开盖。",
      "zhHint": "大火蒸+焖制",
      "stateNote": {
        "visual": "Buns are plump with a pale tan skin, and the date pieces have darkened to near-black jammy pockets",
        "visualZh": "馒头饱满外皮浅褐，枣块蒸成近黑的果酱状小窝",
        "timeRef": "16 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸16分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts out on opening and the bun lifts cleanly off the paper",
        "signalZh": "开盖蒸汽喷涌，馒头能干净脱离纸"
      }
    }
  ],
  "tips": [
    "Simmer the dates before chopping — raw dried dates stay hard and steal water from the dough.",
    "Use the date cooking liquid instead of plain water for both sweetness and colour.",
    "Chop rather than blend all of it; fully puréed dates make the crumb heavy and gummy."
  ],
  "tipsZh": [
    "红枣先煮再剁——生干枣蒸完还是硬的，还会抢走面团水分。",
    "用煮枣水代替清水，既添甜又上色。",
    "不要全部打成泥，全打泥的组织会又沉又黏。"
  ],
  "relatedSlugs": [
    "brown-sugar-mantou",
    "pumpkin-mantou",
    "milk-mantou"
  ],
  "image": "/images/recipes/brown-sugar-mantou.webp"
};
