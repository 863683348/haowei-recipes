import type { Recipe } from "@/lib/types";

/** Sesame Tangyuan (Black Sesame Glutinous Rice Balls) (芝麻汤圆) — Seed batch */
export const sesame_tangyuan_glutinous_rice_balls: Recipe = {
  "id": "zhima-tangyuan",
  "slug": "sesame-tangyuan-glutinous-rice-balls",
  "titleEn": "Sesame Tangyuan (Black Sesame Glutinous Rice Balls)",
  "titleZh": "芝麻汤圆",
  "pinyin": "zhī ma tāng yuán",
  "cuisine": "甜品饮品",
  "cuisineEn": "Dessert & Beverage",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses freshly ground black sesame paste—no pre-made fillings or stabilizers. Restaurant versions often add sugar syrup or corn syrup for shelf life; we use only natural sweetness.",
  "versionNoteZh": "家常版现磨黑芝麻馅，不添加预拌馅料或稳定剂；餐馆版常加糖浆或玉米糖浆延长保质期，我们只用天然甜味。",
  "tags": [
    "30-min",
    "winter",
    "festive"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother in Shanghai made these every Winter Solstice, rolling each ball by hand while telling stories about the ‘Yuan Xiao Festival’—she said the round shape meant family reunion, and the warm black sesame filling was her secret to chasing away the damp cold.",
  "storyZh": "我上海的外婆每逢冬至必做这道点心，亲手搓每个汤圆，边做边讲‘元宵节’的故事——她说圆形象征团圆，温润的黑芝麻馅是她驱散江南湿冷的秘密。",
  "ingredients": [
    {
      "id": "zt-01",
      "nameEn": "glutinous rice flour",
      "nameZh": "糯米粉",
      "pinyin": "nuò mǐ fěn",
      "amountMetric": "200 g",
      "amountUS": "1 ⅔ cups",
      "category": "staple",
      "pantry": "asian",
      "note": "Must be labeled 'sweet rice flour' or 'glutinous rice flour'—not regular rice flour.",
      "noteZh": "必须标有‘甜米粉’或‘糯米粉’，不可用普通大米粉。"
    },
    {
      "id": "zt-02",
      "nameEn": "black sesame seeds",
      "nameZh": "黑芝麻",
      "pinyin": "hēi zhī ma",
      "amountMetric": "80 g",
      "amountUS": "½ cup",
      "category": "spice",
      "pantry": "asian",
      "note": "Toasted is preferred; if raw, toast in dry pan until fragrant and slightly puffed.",
      "noteZh": "推荐用已烤香的；若为生芝麻，需干锅小火焙至微膨、香气溢出。"
    },
    {
      "id": "zt-03",
      "nameEn": "granulated sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "60 g",
      "amountUS": "¼ cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "",
      "noteZh": ""
    },
    {
      "id": "zt-04",
      "nameEn": "warm water",
      "nameZh": "温水",
      "pinyin": "wēn shuǐ",
      "amountMetric": "130 ml",
      "amountUS": "½ cup + 2 tbsp",
      "category": "other",
      "pantry": "local",
      "note": "Not hot—just warm to touch (≈40°C / 105°F). Too hot will cook the flour.",
      "noteZh": "非烫手温水（约40°C），过热会使糯米粉提前糊化。"
    }
  ],
  "steps": [
    {
      "text": "Toast black sesame seeds in a dry skillet over medium-low heat, stirring constantly, until fragrant and lightly golden (about 3–4 minutes). Cool completely.",
      "textZh": "干锅小火焙黑芝麻，不停翻动，至香气四溢、略呈金黄（约3–4分钟）。彻底放凉。",
      "zhHint": "焙香放凉",
      "stateNote": {
        "visual": "Seeds are uniformly light brown with visible oil sheen",
        "visualZh": "芝麻均匀浅褐色，表面泛油光",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium-low",
        "signal": "A nutty aroma rises and seeds begin to pop softly",
        "signalZh": "散发坚果香，芝麻轻微噼啪作响"
      },
      "tip": "Use a mortar and pestle or high-speed blender for finest, smoothest paste—no grit.",
      "tipZh": "用研钵或高速破壁机可得最细腻无渣的芝麻酱。"
    },
    {
      "text": "Grind toasted sesame seeds with sugar into a fine, oily paste. Set aside to cool to room temperature.",
      "textZh": "将焙香芝麻与糖一起研磨成细腻油润的膏状，放至室温。",
      "zhHint": "研磨成膏",
      "stateNote": {
        "visual": "Smooth, glossy paste that holds its shape when scooped",
        "visualZh": "膏体顺滑油亮，勺起成团不塌",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "signal": "Paste pulls away from blender sides and clumps cleanly",
        "signalZh": "膏体脱离杯壁，能整块聚拢"
      }
    },
    {
      "text": "In a bowl, gradually mix warm water into glutinous rice flour until a soft, pliable dough forms. Knead gently for 1 minute until smooth and no longer crumbly.",
      "textZh": "碗中将温水缓缓倒入糯米粉，边倒边搅，揉成柔软可塑面团；轻揉1分钟至表面光滑、不掉渣。",
      "zhHint": "和面成团",
      "stateNote": {
        "visual": "Dough is cohesive, slightly tacky but doesn’t stick to fingers",
        "visualZh": "面团成团，微黏但不粘手",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No dry flour remains and dough springs back when pressed",
        "signalZh": "无干粉残留，按压后缓慢回弹"
      }
    },
    {
      "text": "Divide dough into 12 equal portions (~25 g each). Flatten each into a disc, place 1 tsp sesame paste in center, then seal and roll into smooth balls.",
      "textZh": "将面团均分12份（每份约25 g），压成小圆片，包入1茶匙芝麻馅，收口搓圆。",
      "zhHint": "包馅搓圆",
      "stateNote": {
        "visual": "Balls are perfectly round with no cracks or seams visible",
        "visualZh": "汤圆浑圆饱满，无裂纹、无缝隙",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "signal": "Filling stays fully enclosed and dough feels elastic",
        "signalZh": "馅料完全包裹，面皮具弹性不破"
      }
    },
    {
      "text": "Bring a large pot of water to gentle boil. Add tangyuan one at a time. Cook until they float, then simmer 2 more minutes. Remove with slotted spoon.",
      "textZh": "大锅烧水至微沸，逐个下汤圆。浮起后转小火再煮2分钟，捞出沥水。",
      "zhHint": "煮至浮起再煮2分钟",
      "stateNote": {
        "visual": "Tangyuan rise to surface and bob steadily without breaking",
        "visualZh": "汤圆浮起，平稳轻颤，不破裂",
        "timeRef": "3–4 minutes total",
        "timeRefZh": "共3–4 分钟",
        "heat": "medium",
        "signal": "All balls float and maintain round shape after 15 seconds",
        "signalZh": "全部浮起，15秒内保持浑圆不塌"
      }
    }
  ],
  "tips": [
    "Make extra filling—it keeps refrigerated for 1 week and works in pancakes or buns.",
    "If dough cracks while shaping, dip fingers in warm water to seal.",
    "Serve warm in plain hot water or light ginger-sugar broth."
  ],
  "tipsZh": [
    "芝麻馅可多做些，冷藏保存1周，亦可用于煎饼或包子馅。",
    "若搓球时开裂，手指蘸温水轻抹即可封合。",
    "趁热食用，可配清汤或姜糖水。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/sesame-tangyuan-glutinous-rice-balls.webp"
};
