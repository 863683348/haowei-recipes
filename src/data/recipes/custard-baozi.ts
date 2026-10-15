import type { Recipe } from "@/lib/types";

/** Custard Baozi (Nai Huang Bao) (奶黄包) — Day batch */
export const custard_baozi: Recipe = {
  "id": "custard-baozi",
  "slug": "custard-baozi",
  "titleEn": "Custard Baozi (Nai Huang Bao)",
  "titleZh": "奶黄包",
  "pinyin": "nǎi huáng bāo",
  "cuisine": "粤式茶点",
  "cuisineEn": "Cantonese Dim Sum",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 155,
  "servings": 12,
  "version": "family",
  "versionNote": "Home versions make a stovetop custard with cornstarch so it is firm enough to portion. Cantonese teahouse versions add custard powder and evaporated milk, and steam the baozi shorter so the filling is deliberately molten and runs when you bite in.",
  "versionNoteZh": "家常版用玉米淀粉在炉台上炒一份较硬的奶黄，方便分份；广东茶楼加吉士粉和淡奶，蒸的时间更短，要的就是咬开时馅会流心。",
  "tags": [
    "baozi",
    "dim-sum",
    "sweet",
    "kid-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Nai huang bao is the bun children order first at dim sum and the one adults secretly want too. The filling is a proper cooked custard, not a raw pour-in: you stir it in the pan until it thickens into ribbons, then chill it hard so you can roll it into balls. Skip the chill and you cannot wrap it at all.",
  "storyZh": "奶黄包是小孩在茶楼第一个点的包子，也是大人心心念念的那一个。它的馅是正经炒出来的奶黄，不是生浆灌进去的：要在锅里搅到能挂旗，再冷藏到发硬才好搓成球。不冷藏，根本包不起来。",
  "ingredients": [
    {
      "id": "cb-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "400 g",
      "amountUS": "3⅓ cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "cb-02",
      "nameEn": "warm water (35°C)",
      "nameZh": "温水（35°C）",
      "amountMetric": "215 ml",
      "amountUS": "¾ cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "cb-03",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "4 g",
      "amountUS": "1¼ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "cb-04",
      "nameEn": "caster sugar (dough)",
      "nameZh": "细砂糖（面团用）",
      "amountMetric": "30 g",
      "amountUS": "2½ tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cb-05",
      "nameEn": "caster sugar (filling)",
      "nameZh": "细砂糖（馅用）",
      "amountMetric": "70 g",
      "amountUS": "⅓ cup",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cb-06",
      "nameEn": "whole milk",
      "nameZh": "全脂牛奶",
      "amountMetric": "200 ml",
      "amountUS": "¾ cup + 1 tbsp",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "cb-07",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "150 g",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "cb-08",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "25 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "cb-09",
      "nameEn": "custard powder",
      "nameZh": "吉士粉",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "asian",
      "note": "Optional but gives the classic teahouse colour and aroma",
      "noteZh": "可选，但能做出茶楼那种颜色和香气"
    },
    {
      "id": "cb-10",
      "nameEn": "unsalted butter",
      "nameZh": "无盐黄油",
      "amountMetric": "50 g",
      "amountUS": "3½ tbsp",
      "category": "dairy",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Mix flour, dough sugar and yeast in the warm water, knead 10 minutes until smooth, then rise 70 minutes.",
      "textZh": "面粉、面团用糖与溶于温水的酵母混匀，揉10分钟至光滑，发酵70分钟。",
      "zhHint": "和面一发",
      "stateNote": {
        "visual": "Dough is smooth, pale and springs back slowly when pressed",
        "visualZh": "面团光滑色浅，按压缓慢回弹",
        "timeRef": "70 minutes",
        "timeRefZh": "70 分钟",
        "signal": "A floured finger dent stays for 3 seconds",
        "signalZh": "沾粉手指按出的凹坑静止3秒"
      }
    },
    {
      "text": "Whisk the eggs with the filling sugar until pale, then whisk in the milk, cornstarch and custard powder until completely smooth. Strain through a fine sieve.",
      "textZh": "鸡蛋与馅用糖打至发白，再倒入牛奶、玉米淀粉和吉士粉搅至完全顺滑，过细筛。",
      "zhHint": "调奶黄浆",
      "stateNote": {
        "visual": "Mixture is a smooth pale yellow cream with no lumps, and the sieve catches only a thin membrane",
        "visualZh": "浆液呈顺滑淡黄色奶液，无颗粒，筛上只留一层薄膜",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "A spoonful poured back into the bowl leaves no streak",
        "signalZh": "倒回碗里的浆液不留任何纹路"
      },
      "tip": "Strain it. Any lump of cornstarch becomes a floury pocket in the finished custard.",
      "tipZh": "一定要过筛。任何淀粉疙瘩蒸出来都是一包粉。"
    },
    {
      "text": "Cook the custard in a heavy pan over low heat with the butter, stirring constantly with a spatula, 8 minutes.",
      "textZh": "厚底锅小火，加黄油不停用刮刀搅拌，炒8分钟。",
      "zhHint": "炒奶黄",
      "stateNote": {
        "visual": "Custard has thickened to a glossy mass that holds ribbon trails from the spatula and pulls away from the pan base",
        "visualZh": "奶黄变稠发亮，刮刀划过留下飘带状纹路，并能脱离锅底",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "A channel drawn across the base stays open for 2 seconds before closing",
        "signalZh": "锅底划出的沟能保持2秒才合拢"
      },
      "tip": "Low heat and constant stirring. Turn it up and you get sweet scrambled eggs.",
      "tipZh": "小火并不断搅拌。火一大就变成甜的炒蛋。"
    },
    {
      "text": "Transfer to a flat dish, press cling film onto the surface and chill 40 minutes until firm, then roll into 12 balls.",
      "textZh": "倒入平盘，保鲜膜贴面覆盖，冷藏40分钟至发硬，再搓成12个小球。",
      "zhHint": "冷藏搓球",
      "stateNote": {
        "visual": "Custard is a dense, saturated yellow block that holds a clean edge when cut and rolls without sticking",
        "visualZh": "奶黄凝成结实的浓黄色块，切边干净，搓球不粘手",
        "timeRef": "40 minutes chill",
        "timeRefZh": "冷藏40分钟",
        "signal": "A ball pressed between finger and thumb keeps its shape and feels cool and firm",
        "signalZh": "指腹捏压小球能保持形状，手感凉而结实"
      }
    },
    {
      "text": "Divide the dough into 12, flatten to a 10 cm disc, wrap one custard ball each, pleat closed seam-side down, and proof 25 minutes.",
      "textZh": "面团分12份，擀成10厘米圆皮，每份包一颗奶黄球，捏褶收口后褶面朝下，醒发25分钟。",
      "zhHint": "包制二发",
      "stateNote": {
        "visual": "Buns are smooth domes with the seam hidden underneath, visibly puffed and velvety",
        "visualZh": "包子是光洁的圆丘，收口藏在底下，明显胀起、表面如绒",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "A light press springs back slowly leaving a shallow dent",
        "signalZh": "轻按缓慢回弹，留下浅坑"
      }
    },
    {
      "text": "Steam over medium-high boiling water 12 minutes with a cloth-wrapped lid, rest 5 minutes, then open the lid away from you.",
      "textZh": "笼布包锅盖、中大火沸水蒸12分钟，焖5分钟后向反方向开盖。",
      "zhHint": "蒸制",
      "stateNote": {
        "visual": "Buns are plump and snow-white with no yellow leaking from the seam; cut open, the custard is molten and glossy",
        "visualZh": "包子饱满雪白，接缝处没有黄色渗出；切开后奶黄呈流心油亮状",
        "timeRef": "12 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸12分钟 + 焖5分钟",
        "heat": "medium-high",
        "signal": "Steam bursts out on opening and the bun lifts cleanly off the paper",
        "signalZh": "开盖蒸汽喷涌，包子能干净脱离纸"
      },
      "tip": "Do not steam past 12 minutes — over-steamed custard baozi split at the pleats.",
      "tipZh": "蒸超过12分钟会过头——奶黄包会从褶口处裂开。"
    }
  ],
  "tips": [
    "Chill the custard until genuinely firm; soft custard cannot be wrapped.",
    "Strain the custard base before cooking to avoid floury pockets.",
    "Serve warm, not piping hot — straight from the steamer the filling is molten enough to burn."
  ],
  "tipsZh": [
    "奶黄要冷藏到真正发硬，软塌塌的根本包不住。",
    "奶黄浆下锅前先过筛，避免成品里夹生粉。",
    "要温热吃，别趁滚烫——刚出锅的馅是流心的，会烫嘴。"
  ],
  "relatedSlugs": [
    "sweet-red-bean-baozi",
    "three-umami-baozi",
    "milk-mantou"
  ],
  "image": "/images/recipes/sweet-red-bean-baozi.webp"
};
