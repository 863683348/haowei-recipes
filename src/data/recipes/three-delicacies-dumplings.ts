import type { Recipe } from "@/lib/types";

/** Three Delicacies Dumplings (San Xian Jiao) (三鲜饺) — Day batch */
export const three_delicacies_dumplings: Recipe = {
  "id": "three-delicacies-dumplings",
  "slug": "three-delicacies-dumplings",
  "titleEn": "Three Delicacies Dumplings (San Xian Jiao)",
  "titleZh": "三鲜饺",
  "pinyin": "sān xiān jiǎo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 85,
  "servings": 4,
  "version": "family",
  "versionNote": "Home versions build the filling from shrimp, scrambled egg and wood ear with a little pork to hold it. Shandong banquet versions use sea cucumber, scallop and shrimp — genuinely three delicacies, and genuinely restaurant food; the home version is the one people actually make on a Sunday.",
  "versionNoteZh": "家常版用虾仁、炒蛋和木耳，配一点猪肉黏合。山东宴席版用海参、干贝和虾仁——那才是真正的「三鲜」，但那确实是馆子里的菜；家常版才是人们周日真会在家做的那一种。",
  "tags": [
    "dumplings",
    "seafood",
    "shandong",
    "family"
  ],
  "dietary": [
    "none"
  ],
  "story": "San xian means three delicacies and it is the most argued-about filling in China, because every region claims a different three. The Shandong home version — shrimp, egg, wood ear — is the one that travelled, and it works because the three do three different jobs: shrimp gives sweetness, egg gives body, wood ear gives a snap that survives the boiling water. Leave any one out and the filling goes flat.",
  "storyZh": "「三鲜」到底是哪三鲜，全中国都能吵起来，因为每个地方都认自己的三样。山东家常版——虾仁、鸡蛋、木耳——是流传最广的一种，它成立的原因是这三样各司其职：虾仁给鲜甜，鸡蛋给分量，木耳给一记在沸水里也煮不烂的脆响。少放任何一样，馅就平了。",
  "ingredients": [
    {
      "id": "td-01",
      "nameEn": "round dumpling wrappers",
      "nameZh": "饺子皮",
      "amountMetric": "500 g",
      "amountUS": "about 40 wrappers",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "td-02",
      "nameEn": "raw shrimp, peeled and chopped",
      "nameZh": "鲜虾仁（剁粒）",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp"
    },
    {
      "id": "td-03",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "150 g",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "td-04",
      "nameEn": "dried wood ear mushrooms, soaked",
      "nameZh": "干木耳（泡发）",
      "amountMetric": "20 g dried",
      "amountUS": "1 cup soaked",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "wood-ear"
    },
    {
      "id": "td-05",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "td-06",
      "nameEn": "napa cabbage, finely diced and salted",
      "nameZh": "大白菜（切细丁盐渍）",
      "amountMetric": "200 g",
      "amountUS": "2 cups",
      "category": "produce",
      "pantry": "local",
      "termKey": "napa-cabbage"
    },
    {
      "id": "td-07",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "40 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "td-08",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "12 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "td-09",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "td-10",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "20 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "td-11",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "3 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "td-12",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "amountMetric": "6 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Beat the eggs with a pinch of salt and scramble over medium heat until soft and just set, then break into small curds and cool completely.",
      "textZh": "鸡蛋加一小撮盐打散，中火炒到柔软刚凝固，划成小碎块并彻底放凉。",
      "zhHint": "炒蛋碎",
      "stateNote": {
        "visual": "Curd pieces are soft pale yellow with no browning and no liquid weeping onto the plate",
        "visualZh": "蛋碎柔软淡黄，无焦色，盘中也不渗水",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "They look slightly underdone in the pan and finish setting as they cool"
      }
    },
    {
      "text": "Soak the wood ear 25 minutes, trim, shred finely and squeeze dry. Dice the napa cabbage, toss with 1 tsp salt, rest 10 minutes and squeeze hard.",
      "textZh": "木耳泡25分钟后剪蒂切细丝并挤干；白菜切丁加1茶匙盐腌10分钟，用力挤干。",
      "zhHint": "处理木耳白菜",
      "stateNote": {
        "visual": "Wood ear is glossy and shred-thin; the cabbage has collapsed to a third of its volume and looks dull and wet-matte",
        "visualZh": "木耳透亮细如丝；白菜收缩到三分之一体积，色泽变暗、呈湿哑光",
        "timeRef": "35 minutes",
        "timeRefZh": "35 分钟",
        "signal": "A handful squeezed over the sink gives a steady stream, then stops"
      }
    },
    {
      "text": "Stir pork with soy sauce, ginger and white pepper in one direction 2 minutes until sticky, then fold in shrimp, egg, wood ear, cabbage and scallions. Finish with sesame oil. Chill 20 minutes.",
      "textZh": "猪肉末加生抽、姜末、白胡椒顺一个方向搅2分钟至发黏，再拌入虾仁、蛋碎、木耳、白菜与葱花，最后淋香油。冷藏20分钟。",
      "zhHint": "拌馅冷藏",
      "stateNote": {
        "visual": "Filling is a speckled mix of pink, yellow, black and white that holds together when squeezed, with no liquid in the bowl",
        "visualZh": "馅料粉、黄、黑、白四色斑驳，攥紧能成团，碗底没有汁水",
        "timeRef": "8 minutes + 20 minutes chilling",
        "timeRefZh": "8分钟 + 冷藏20分钟",
        "signal": "Tilt the bowl and nothing runs to the low side",
        "signalZh": "倾斜碗时没有汁水往低处流"
      }
    },
    {
      "text": "Place 1 tbsp filling in each wrapper, wet the edge, fold and pleat closed. Keep them covered with a damp cloth while you work.",
      "textZh": "每张饺子皮放1汤匙馅，边缘抹水，对折捏褶收口。包制过程中用湿布盖住。",
      "zhHint": "包饺子",
      "stateNote": {
        "visual": "Dumplings are plump, sit flat and have a pleated curved back with no filling at the seam",
        "visualZh": "饺子饱满、能平底坐稳，背部褶皱成弧形，收口处无馅外露",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "The pleats stay raised after the dumpling is set down"
      }
    },
    {
      "text": "Boil in batches over high heat. Once they float, add a cup of cold water; when it returns to the boil, cook 2 minutes more and lift out.",
      "textZh": "大火分批煮。浮起后加一碗冷水，再次沸腾后煮2分钟捞出。",
      "zhHint": "煮饺子",
      "stateNote": {
        "visual": "Wrappers are glossy and slightly translucent, and the dumplings look swollen and buoyant rather than dense",
        "visualZh": "面皮油亮微透，饺子饱满浮起而不是沉实",
        "timeRef": "6-8 minutes per batch",
        "timeRefZh": "每批6-8分钟",
        "heat": "high",
        "signal": "Cut one open and steam escapes; the shrimp is opaque and the egg still yellow"
      }
    }
  ],
  "tips": [
    "Salt and squeeze the cabbage properly. It is mostly water and it will flood the filling otherwise.",
    "Cool the scrambled egg before mixing — hot egg cooks the shrimp and the filling goes grainy.",
    "Wood ear is not optional; it is the crunch that survives boiling that cabbage loses."
  ],
  "tipsZh": [
    "白菜一定要盐渍挤干。它几乎全是水，不然会把馅心泡成汤。",
    "炒蛋放凉再拌——热蛋会把虾仁烫熟，馅心就发沙了。",
    "木耳不能省；白菜在沸水里失掉的脆，正是木耳还留着的那口。"
  ],
  "relatedSlugs": [
    "shrimp-dumplings",
    "three-umami-baozi",
    "celery-pork-dumplings"
  ],
  "image": "/images/recipes/shanghai-style-guotie.webp"
};
