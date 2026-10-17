import type { Recipe } from "@/lib/types";

/** Suan Cai Pork Dumplings (Suan Cai Zhu Rou Jiao) (酸菜饺) — Day batch */
export const suan_cai_pork_dumplings: Recipe = {
  "id": "suan-cai-pork-dumplings",
  "slug": "suan-cai-pork-dumplings",
  "titleEn": "Suan Cai Pork Dumplings (Suan Cai Zhu Rou Jiao)",
  "titleZh": "酸菜饺",
  "pinyin": "suān cài zhū ròu jiǎo",
  "cuisine": "东北菜",
  "cuisineEn": "Northeastern Chinese",
  "region": "Heilongjiang",
  "regionZh": "黑龙江",
  "difficulty": "easy",
  "timeMin": 70,
  "servings": 4,
  "version": "family",
  "versionNote": "Home dumplings use about one part suan cai to one part pork and add pork fat so the lean mixture stays juicy. Northeastern restaurant versions push the cabbage to two parts and fry the suan cai with lard first, which is more aromatic but noticeably greasier.",
  "versionNoteZh": "家常饺子用约一份酸菜配一份猪肉，并加点猪油让瘦肉馅保持润。东北馆子把酸菜提到两份，并先用猪大油把酸菜炒香，更香但也明显更腻。",
  "tags": [
    "dumplings",
    "northeastern",
    "beginner",
    "freezer-friendly"
  ],
  "dietary": [
    "none"
  ],
  "story": "Suan cai is napa cabbage fermented in a crock through a winter when there was nothing else to eat, and it is the reason the northeast has a food culture at all. It arrives sour, crunchy and smelling faintly of the cellar, and pork is the only sensible answer: the fat carries the acid and the acid cuts the fat. Rinse it too hard and you are left with wet cabbage — rinse it once, taste it, and stop.",
  "storyZh": "酸菜是大白菜在坛子里发酵一整个冬天的产物，那时地里再没有别的吃食，东北的饮食文化可以说就是从它开始的。它出场时又酸又脆，带一点地窖的气息，而猪肉是唯一合理的回应：脂肪托住酸，酸反过来解掉腻。洗得太狠就只剩湿白菜——洗一遍，尝一口，就停手。",
  "ingredients": [
    {
      "id": "sc-01",
      "nameEn": "round dumpling wrappers",
      "nameZh": "饺子皮",
      "amountMetric": "500 g",
      "amountUS": "about 40 wrappers",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "sc-02",
      "nameEn": "suan cai (pickled napa cabbage), rinsed and squeezed",
      "nameZh": "东北酸菜（洗净挤干）",
      "amountMetric": "350 g",
      "amountUS": "2½ cups squeezed",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Jarred or vacuum-packed in Asian groceries; rinse once only, or you lose the sourness",
      "noteZh": "亚洲超市有罐装或真空装；只冲一遍，冲多了酸味就没了"
    },
    {
      "id": "sc-03",
      "nameEn": "ground pork (25% fat)",
      "nameZh": "猪肉末（三分肥七分瘦）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "sc-04",
      "nameEn": "pork belly, finely diced",
      "nameZh": "五花肉（切细丁）",
      "amountMetric": "80 g",
      "amountUS": "3 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "sc-05",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "50 g",
      "amountUS": "¾ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sc-06",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sc-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "25 ml",
      "amountUS": "1 tbsp + 2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sc-08",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "sc-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "sc-10",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "3 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sc-11",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "amountMetric": "4 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse the suan cai once under cold water, taste a shred, then squeeze it as dry as you can and chop finely.",
      "textZh": "酸菜用冷水冲一遍，尝一根，然后尽量挤干并切细。",
      "zhHint": "洗切酸菜",
      "stateNote": {
        "visual": "Cabbage shreds are pale translucent yellow with a wiry, almost stringy look, and no brine drips when squeezed",
        "visualZh": "酸菜丝呈半透明的浅黄色，质地韧而近乎丝状，攥紧时不再滴卤水",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "A squeezed handful springs back loosely instead of dripping"
      }
    },
    {
      "text": "Render the diced pork belly in a dry pan over medium-low 6 minutes until the fat runs and the pieces are golden, then cool 5 minutes with the fat.",
      "textZh": "五花肉丁下干锅，中小火煸6分钟至出油、肉丁金黄，连油一起放凉5分钟。",
      "zhHint": "煸猪油渣",
      "stateNote": {
        "visual": "Cubes are amber and shrunken with a clear pool of rendered fat around them",
        "visualZh": "肉丁琥珀色、体积收缩，四周积着一层清亮的猪油",
        "timeRef": "6 minutes + 5 minutes cooling",
        "timeRefZh": "6分钟 + 放凉5分钟",
        "heat": "medium-low",
        "signal": "The sizzle softens and the fat stops spitting"
      },
      "tip": "Do not discard the rendered fat. Suan cai needs it — lean pork alone makes a dry, sour dumpling."
    },
    {
      "text": "Mix pork mince with soy sauce, five-spice, ginger, white pepper and salt, stir in one direction 3 minutes until sticky, then fold in the suan cai, crackling, rendered fat, scallions and sesame oil.",
      "textZh": "猪肉末加生抽、五香粉、姜末、白胡椒与盐，顺一个方向搅3分钟至发黏，再拌入酸菜、油渣、猪油、葱花与香油。",
      "zhHint": "拌馅",
      "stateNote": {
        "visual": "Filling is cohesive and glossy with pale yellow cabbage threaded through pink meat",
        "visualZh": "馅料抱团油亮，浅黄色酸菜丝穿插在粉色肉馅中",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "signal": "A squeezed ball holds shape and the bowl bottom stays dry",
        "signalZh": "攥成团能保持形状，碗底依然干燥"
      }
    },
    {
      "text": "Place 1 tbsp filling in each wrapper, wet the edge, fold and pleat closed. Sit them on a floured tray under a damp cloth.",
      "textZh": "每张饺子皮放1汤匙馅，边缘抹水，对折捏褶收口，摆在撒粉的盘上并用湿布盖住。",
      "zhHint": "包饺子",
      "stateNote": {
        "visual": "Dumplings are plump and sit flat with a raised pleated back and no moisture leaking through the wrapper",
        "visualZh": "饺子饱满、平底坐稳，背部褶皱隆起，面皮没有渗出湿痕",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "The seam stays sealed when you lift the dumpling by its pleats"
      }
    },
    {
      "text": "Boil in batches over high heat. When they float, add a cup of cold water; on the second boil cook 2 minutes more, then lift out and drain well.",
      "textZh": "大火分批煮。浮起后加一碗冷水，第二次沸腾后再煮2分钟，捞出沥干。",
      "zhHint": "煮饺子",
      "stateNote": {
        "visual": "Wrappers are glossy and faintly translucent and the dumplings ride high in the water rather than sitting low",
        "visualZh": "面皮油亮微透，饺子高高地浮在水面而不是沉在下面",
        "timeRef": "7-9 minutes per batch",
        "timeRefZh": "每批7-9分钟",
        "heat": "high",
        "signal": "Cut one open: the filling smells sour and porky at once and the fat is liquid and clear",
        "signalZh": "切开一个：馅心同时冒出酸香与肉香，油脂清亮流动"
      }
    }
  ],
  "tips": [
    "Rinse suan cai once, not three times. You paid for the sourness.",
    "Add the rendered pork fat back in. A fat-free suan cai filling is the classic home mistake.",
    "These freeze beautifully — tray-freeze first, then bag, and boil from frozen with one extra cold-water splash."
  ],
  "tipsZh": [
    "酸菜冲一遍就够，别冲三遍——酸味是你花钱买来的。",
    "煸出的猪油要倒回馅里。酸菜馅一点油都不放，是最典型的家常失误。",
    "这馅特别适合冷冻——先摆盘冻硬再装袋，冻着下锅多激一次冷水即可。"
  ],
  "relatedSlugs": [
    "sour-cabbage-stewed-pork",
    "sauerkraut-pork-claypot",
    "pork-cabbage-dumplings"
  ],
  "image": "/images/recipes/pork-cabbage-dumplings.webp"
};
