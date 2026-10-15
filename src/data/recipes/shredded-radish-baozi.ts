import type { Recipe } from "@/lib/types";

/** Shredded Daikon Baozi (Luo Bo Si Bao) (萝卜丝包) — Day batch */
export const shredded_radish_baozi: Recipe = {
  "id": "shredded-radish-baozi",
  "slug": "shredded-radish-baozi",
  "titleEn": "Shredded Daikon Baozi (Luo Bo Si Bao)",
  "titleZh": "萝卜丝包",
  "pinyin": "luó bo sī bāo",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 175,
  "servings": 12,
  "version": "family",
  "versionNote": "Home versions use lard and dried shrimp to give a lean vegetable filling some backbone. Restaurant versions often add a little minced pork and blanch the radish twice, which removes more of the raw bite and makes the filling sweeter and softer.",
  "versionNoteZh": "家常版用猪油和虾皮给清淡的素馅撑起骨架；店里常加一点肉末并把萝卜焯两次，进一步去除生涩味，馅更甜更软。",
  "tags": [
    "baozi",
    "winter",
    "savoury",
    "make-ahead"
  ],
  "dietary": [
    "none"
  ],
  "story": "Winter daikon is sweet and enormous, and northern households deal with the surplus the same way: shred it, salt it, squeeze the life out of it, and turn it into buns. The double squeeze is the technique worth learning — one squeeze gives you a filling that steams into a soggy pocket.",
  "storyZh": "冬天的白萝卜又甜又大，北方人家处理过剩萝卜的办法都一样：擦丝、盐杀、攥干水分，再包成包子。值得学的是「攥两次」——只攥一次，蒸出来就是一包水。",
  "ingredients": [
    {
      "id": "sr-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "sr-02",
      "nameEn": "warm water (35°C)",
      "nameZh": "温水（35°C）",
      "amountMetric": "265 ml",
      "amountUS": "1 cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "sr-03",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "sr-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sr-05",
      "nameEn": "daikon radish",
      "nameZh": "白萝卜",
      "amountMetric": "600 g",
      "amountUS": "1½ lb",
      "category": "produce",
      "pantry": "local",
      "note": "Winter daikon is sweeter and less fibrous than summer",
      "noteZh": "冬萝卜比夏萝卜更甜、纤维更少"
    },
    {
      "id": "sr-06",
      "nameEn": "dried shrimp",
      "nameZh": "虾皮",
      "amountMetric": "25 g",
      "amountUS": "⅓ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shrimp"
    },
    {
      "id": "sr-07",
      "nameEn": "scallions, sliced",
      "nameZh": "小葱（切片）",
      "amountMetric": "50 g",
      "amountUS": "5 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sr-08",
      "nameEn": "ginger, minced",
      "nameZh": "姜（切末）",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sr-09",
      "nameEn": "lard (or neutral oil)",
      "nameZh": "猪油（或食用油）",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "other",
      "pantry": "local",
      "note": "Lard gives the classic northern flavour; oil keeps it vegetarian",
      "noteZh": "猪油是北方经典风味；用素油则成为素馅"
    },
    {
      "id": "sr-10",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sr-11",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sr-12",
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
      "text": "Mix flour, sugar and yeast in the warm water, knead 12 minutes until smooth, then rise 70 minutes.",
      "textZh": "面粉、糖与溶于温水的酵母混匀，揉12分钟至光滑，发酵70分钟。",
      "zhHint": "和面一发",
      "stateNote": {
        "visual": "Dough is smooth, ivory and springs back slowly when pressed",
        "visualZh": "面团光滑象牙白，按压缓慢回弹",
        "timeRef": "70 minutes",
        "timeRefZh": "70 分钟",
        "signal": "A floured finger dent holds for 3 seconds",
        "signalZh": "沾粉手指按出的凹坑静止3秒"
      }
    },
    {
      "text": "Shred the daikon on the coarse side of a box grater, toss with 8 g of the salt and leave 15 minutes, then squeeze out as much liquid as you can.",
      "textZh": "白萝卜用擦丝器粗面擦丝，拌8克盐腌15分钟，然后尽力攥干。",
      "zhHint": "盐杀攥干",
      "stateNote": {
        "visual": "Shreds have gone floppy and translucent and the bowl holds a noticeable pool of cloudy liquid",
        "visualZh": "萝卜丝变软发半透明，碗里积起明显的浑浊汁水",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "A handful squeezed hard gives only a few last drops",
        "signalZh": "用力攥一把只剩最后几滴"
      }
    },
    {
      "text": "Blanch the squeezed shreds in boiling water 45 seconds to strip the raw bite, drain and squeeze again, hard.",
      "textZh": "攥过的萝卜丝沸水焯45秒去生涩味，捞出再次用力攥干。",
      "zhHint": "焯水二次攥干",
      "stateNote": {
        "visual": "Shreds are limp and glassy and the squeezed mass springs back slightly instead of holding a wet shape",
        "visualZh": "萝卜丝瘫软透亮，攥紧后会略微回弹而不是结成湿团",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "No water runs from a fist squeezed over the sink",
        "signalZh": "在水槽上方攥拳，不再有水滴下"
      },
      "tip": "Squeeze twice. A single squeeze leaves enough water to steam into a soggy pocket inside the bun.",
      "tipZh": "一定要攥两次。只攥一次残留的水分，蒸的时候会在包子里积成水窝。"
    },
    {
      "text": "Melt the lard in a wok over medium heat, add the dried shrimp and ginger and fry 2 minutes until fragrant.",
      "textZh": "锅中猪油中火化开，下虾皮与姜末煸香2分钟。",
      "zhHint": "爆香虾皮",
      "stateNote": {
        "visual": "Shrimp have plumped and turned pink-translucent and the fat is glossy and speckled with golden ginger",
        "visualZh": "虾皮胀大转为粉红透亮，油脂油亮并点缀着金色姜末",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "The kitchen smells strongly of toasted seafood and nothing is sticking",
        "signalZh": "满屋浓郁的干海鲜焦香，锅底不粘"
      }
    },
    {
      "text": "Add the radish, soy sauce, white pepper and remaining salt, toss over medium heat 2 minutes, then take off the heat, fold in the scallions and cool completely.",
      "textZh": "下萝卜丝、生抽、白胡椒与余下盐，中火翻炒2分钟，关火拌入葱花彻底放凉。",
      "zhHint": "合炒调味",
      "stateNote": {
        "visual": "Shreds are coated and glossy, the pan base is dry, and the filling holds together when pressed in a spoon",
        "visualZh": "萝卜丝挂汁油亮，锅底干爽，用勺按压馅料能成团",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Tilt the wok and no liquid runs to the low side",
        "signalZh": "倾斜炒锅没有汁水往低处流"
      }
    },
    {
      "text": "Divide the dough into 12, wrap 2 tbsp filling each, pleat closed, proof 25 minutes, then steam over vigorously boiling water 14 minutes and rest 5 minutes.",
      "textZh": "面团分12份，每份包2汤匙馅并捏褶收口，醒发25分钟后沸水大火蒸14分钟，焖5分钟。",
      "zhHint": "包制与蒸制",
      "stateNote": {
        "visual": "Buns are plump and pale with closed pleats and no damp patch showing through the base",
        "visualZh": "包子饱满色浅、褶口闭合，底部没有透出湿印",
        "timeRef": "25 minutes proof + 14 minutes steam + 5 minutes rest",
        "timeRefZh": "醒25分钟 + 蒸14分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts out on opening and the base peels cleanly off the parchment",
        "signalZh": "开盖蒸汽喷涌，底部能干净撕离纸"
      }
    }
  ],
  "tips": [
    "Salt, rest, squeeze, blanch, squeeze again. Two squeezes is what keeps the bun dry.",
    "Lard is worth it here — a lean radish filling needs the fat to carry the flavour.",
    "Cool the filling fully before wrapping; warm filling slackens the dough and the pleats slip open."
  ],
  "tipsZh": [
    "盐腌、静置、攥干、焯水、再攥一次。包子不积水靠的就是这第二次攥。",
    "这里值得用猪油——清淡的萝卜馅需要油脂托住味道。",
    "馅必须彻底放凉再包；温热的馅会让面团发软、褶口松开。"
  ],
  "relatedSlugs": [
    "three-umami-baozi",
    "fresh-pork-baozi",
    "braised-pork-baozi"
  ],
  "image": "/images/recipes/pork-cabbage-dumplings.webp"
};
