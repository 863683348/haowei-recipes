import type { Recipe } from "@/lib/types";

/** Almond Tofu (杏仁豆腐) — Day batch */
export const almond_tofu_dessert: Recipe = {
  "id": "almond-tofu-dessert",
  "slug": "almond-tofu-dessert",
  "titleEn": "Almond Tofu",
  "titleZh": "杏仁豆腐",
  "pinyin": "xìng rén dòu fǔ",
  "cuisine": "京味甜品",
  "cuisineEn": "Beijing",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version sets it with agar so it is firm enough to cut into clean diamonds and holds up in syrup for a day; restaurant versions sometimes use gelatin, which is softer and wobblier but melts at room temperature, so it has to be served straight from the fridge.",
  "versionNoteZh": "家常版用琼脂凝，够硬能切成利落的菱形块，泡在糖水里一天也不塌；餐厅有的用吉利丁，更软更颤，但室温会化，必须现从冰箱端出来吃。",
  "tags": [
    "30-min",
    "dessert",
    "chilled",
    "vegetarian",
    "gluten-free",
    "make-ahead"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "Almond tofu is a Beijing sweetshop classic with a deliberately misleading name - there is no soy and no tofu in it, just milk, sugar and almond. The old shops made it with ground apricot kernels, which give a sharper, more medicinal almond note; almost every home cook now uses almond extract, which is sweeter and rounder and much easier to find outside China.",
  "storyZh": "杏仁豆腐是北京甜品铺的经典，名字故意骗人——里面既没有豆腐也没有黄豆，只有牛奶、糖和杏仁。老铺子用磨碎的杏仁（南北杏）做，杏仁味更冲、更有药香；如今家里几乎都用杏仁香精，更甜更圆润，在海外也容易买到。",
  "ingredients": [
    {
      "id": "atd-01",
      "nameEn": "whole milk",
      "nameZh": "全脂牛奶",
      "pinyin": "quán zhī niú nǎi",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "dairy",
      "pantry": "local",
      "note": "Use full-fat; skim milk sets into something watery and thin-tasting",
      "noteZh": "必须用全脂；脱脂奶凝出来发水、味薄"
    },
    {
      "id": "atd-02",
      "nameEn": "agar powder",
      "nameZh": "琼脂粉",
      "pinyin": "qióng zhī fěn",
      "amountMetric": "5 g",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Agar must be boiled for a full 2 minutes to activate; agar flakes need 3 times the amount. Gelatin is a softer substitute at 8 g",
      "noteZh": "琼脂粉必须煮沸2分钟才起作用；琼脂条用量要三倍。可用8克吉利丁替代，口感更软"
    },
    {
      "id": "atd-03",
      "nameEn": "granulated sugar",
      "nameZh": "细砂糖",
      "pinyin": "xì shā táng",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Goes into the milk; the syrup is seasoned separately",
      "noteZh": "加入牛奶中；糖水另外单独调"
    },
    {
      "id": "atd-04",
      "nameEn": "almond extract",
      "nameZh": "杏仁香精",
      "pinyin": "xìng rén xiāng jīng",
      "amountMetric": "3 ml",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Added off the heat or it evaporates; start with half and taste, it is potent",
      "noteZh": "离火后加，否则会挥发；先加一半尝味，劲儿很大"
    },
    {
      "id": "atd-05",
      "nameEn": "water, for the agar and syrup",
      "nameZh": "水，化琼脂与糖水用",
      "pinyin": "shuǐ",
      "amountMetric": "250 ml",
      "amountUS": "1 cup",
      "category": "other",
      "pantry": "local",
      "note": "50 ml to bloom the agar, 200 ml for the syrup",
      "noteZh": "50毫升泡琼脂，200毫升做糖水"
    },
    {
      "id": "atd-06",
      "nameEn": "rock sugar, for the syrup",
      "nameZh": "冰糖，糖水用",
      "pinyin": "bīng táng",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rock sugar keeps the syrup clear; granulated works but the syrup clouds slightly",
      "noteZh": "冰糖能让糖水清亮；白砂糖也可用但略浑浊",
      "termKey": "rock-sugar"
    },
    {
      "id": "atd-07",
      "nameEn": "dried goji berries",
      "nameZh": "枸杞",
      "pinyin": "gǒu qǐ",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in warm water 5 minutes to plump before adding",
      "noteZh": "温水泡5分钟至胀开再用"
    },
    {
      "id": "atd-08",
      "nameEn": "flaked almonds, lightly toasted",
      "nameZh": "杏仁片，微烘",
      "pinyin": "xìng rén piàn",
      "amountMetric": "10 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Optional garnish; toasting brings back the crunch and the aroma",
      "noteZh": "可选装饰；烘一下能恢复脆度与香气"
    }
  ],
  "steps": [
    {
      "text": "Sprinkle the agar powder over 50 ml of cold water and leave it to bloom for 5 minutes while you heat the milk.",
      "textZh": "琼脂粉撒入50毫升冷水，静置泡发5分钟，同时加热牛奶。",
      "zhHint": "琼脂先泡发",
      "stateNote": {
        "visual": "The powder absorbs the water and swells into a soft translucent gel with no dry pockets",
        "visualZh": "粉末吸水膨胀成柔软半透明胶状，无干粉团",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Tilt the bowl - the mass holds its shape rather than slumping like liquid",
        "signalZh": "倾斜碗身——胶体能保持形状而不是像液体一样塌陷"
      },
      "tip": "Blooming in cold water first is what stops agar from forming stubborn lumps later.",
      "tipZh": "先用冷水泡发，是避免琼脂后面结硬块的关键。"
    },
    {
      "text": "Warm the milk with the granulated sugar over medium heat, stirring, until the sugar has dissolved and the milk is steaming. Do not let it boil.",
      "textZh": "牛奶加细砂糖中火加热搅拌，至糖溶化、牛奶冒热气。不要煮沸。",
      "zhHint": "牛奶加热不煮沸",
      "stateNote": {
        "visual": "A thin skin begins to form at the edge and steam lifts steadily; no bubbles break the surface",
        "visualZh": "锅边开始结薄奶皮，蒸汽稳定上腾；表面无气泡破裂",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "Rub a drop between your fingers - no sugar grains, and it feels silky rather than watery",
        "signalZh": "取一滴在指间搓——无糖粒，触感如丝而非如水"
      }
    },
    {
      "text": "Add the bloomed agar to the hot milk and bring it to a boil, then hold it at a gentle boil for a full 2 minutes, whisking constantly.",
      "textZh": "泡发的琼脂加入热牛奶中煮开，保持微沸整整2分钟，持续搅打。",
      "zhHint": "琼脂须沸2分钟",
      "stateNote": {
        "visual": "The mixture goes glossy and slightly thicker; any remaining agar granules have vanished into the liquid",
        "visualZh": "液体变得油亮略稠；残留的琼脂颗粒全部消失",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Dip in a cold spoon - the film that clings should look completely clear, with no specks",
        "signalZh": "插入冷勺再提起——挂上的薄膜应完全透明、无颗粒"
      },
      "tip": "Agar that has not boiled for 2 minutes will not set. This is the single most common failure with this dessert.",
      "tipZh": "琼脂没煮够2分钟就凝不住。这是这道甜品最常见的失败原因。"
    },
    {
      "text": "Take the pan off the heat, stir in the almond extract, and strain the mixture through a fine sieve into a shallow container.",
      "textZh": "离火，加入杏仁香精搅匀，过细筛滤入浅盘容器。",
      "zhHint": "离火加香精过筛",
      "stateNote": {
        "visual": "The liquid is ivory, glossy and perfectly smooth; what stays in the sieve is only a thin milk skin",
        "visualZh": "液体呈象牙白、油亮顺滑；筛中只留下薄薄一层奶皮",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "You can smell the almond clearly as you lean over the pan",
        "signalZh": "俯身靠近锅边能清楚闻到杏仁香"
      }
    },
    {
      "text": "Let it cool to room temperature, then refrigerate uncovered for at least 2 hours until completely firm.",
      "textZh": "放凉至室温，再不加盖冷藏至少2小时至完全凝固。",
      "zhHint": "冷藏2小时至硬",
      "stateNote": {
        "visual": "The surface is matte and pale; pressing the centre with a finger leaves a dent that springs straight back",
        "visualZh": "表面哑光浅白；手指按压中心留下凹痕后立刻弹回",
        "timeRef": "2 hours chilling",
        "timeRefZh": "冷藏 2 小时",
        "heat": "low",
        "signal": "Tilt the container - the whole block holds firm and pulls slightly from the sides",
        "signalZh": "倾斜容器——整块保持不动并微微脱离侧壁"
      }
    },
    {
      "text": "Simmer 200 ml water with the rock sugar for 3 minutes to make a light syrup, then cool it completely. Cut the set almond tofu into diamonds and slide them into the cold syrup with the soaked goji and toasted almonds.",
      "textZh": "200毫升水加冰糖煮3分钟成淡糖水，彻底放凉；凝固的杏仁豆腐切菱形块，放入冷糖水中，加泡发枸杞与烘香杏仁片。",
      "zhHint": "糖水放凉再泡块",
      "stateNote": {
        "visual": "Cut edges are clean and sharp; the diamonds float in clear syrup with red goji and pale gold almond flakes against the white cubes",
        "visualZh": "切口干净利落；菱形块浮在清亮糖水中，红色枸杞与浅金杏仁片衬着白色方块",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Warm syrup will soften and haze the surface of the cubes - it must be completely cold",
        "signalZh": "温糖水会让方块表面发软发浑——必须彻底放凉"
      }
    }
  ],
  "tips": [
    "Boil the agar for the full 2 minutes. Under-boiled agar is why most home batches stay liquid.",
    "Add the almond extract off the heat; on the heat most of it evaporates before you ever taste it.",
    "Cut with a knife dipped in hot water and wiped dry between cuts for perfectly clean diamond edges."
  ],
  "tipsZh": [
    "琼脂必须煮沸满2分钟。煮不够是家里做出来不凝固的头号原因。",
    "杏仁香精离火再加；在火上大部分会挥发掉，根本尝不到。",
    "切块时用热水烫过的刀、每切一次擦干，切口才干净利落。"
  ],
  "relatedSlugs": [
    "double-layer-milk-pudding-shuang-pi-nai",
    "ginger-milk-curd",
    "fried-milk"
  ],
  "image": "/images/recipes/double-layer-milk-pudding-shuang-pi-nai.webp"
};
