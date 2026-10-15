import type { Recipe } from "@/lib/types";

/** Braised Pork Baozi (Jiang Rou Bao) (酱肉包) — Day batch */
export const braised_pork_baozi: Recipe = {
  "id": "braised-pork-baozi",
  "slug": "braised-pork-baozi",
  "titleEn": "Braised Pork Baozi (Jiang Rou Bao)",
  "titleZh": "酱肉包",
  "pinyin": "jiàng ròu bāo",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "hard",
  "timeMin": 185,
  "servings": 12,
  "version": "family",
  "versionNote": "Home versions dice pork belly by hand and braise it in a single pan with sweet bean sauce, keeping the fat in for flavour. Beijing shop versions mince the meat finer and chill the filling overnight so it sets firm enough to wrap fast and leak nothing.",
  "versionNoteZh": "家常版手切五花肉丁，一锅用甜面酱烧到底，保留肥肉提香；北京店里把肉绞得更细，并冷藏一夜让馅凝固变硬，这样包得快且不漏汤。",
  "tags": [
    "baozi",
    "braised",
    "make-ahead",
    "freezer-friendly"
  ],
  "dietary": [
    "none"
  ],
  "story": "Jiang rou bao is the Beijing breakfast that ruined plain pork buns for a lot of people. The filling is not raw mince steamed inside dough — it is a proper braise, cooked down with sweet bean sauce until it goes dark and glossy. The non-negotiable step is chilling it solid: warm filling slides out of the pleats and puddles in the steamer.",
  "storyZh": "酱肉包是让很多人从此看不上白肉包的北京早点。它的馅不是生肉直接包进面里蒸，而是规规矩矩用甜面酱烧到深黑油亮的一锅酱肉。不可省的一步是冷藏定型：温热的馅会从褶子里滑出来，在蒸笼里积成一滩。",
  "ingredients": [
    {
      "id": "bp-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "bp-02",
      "nameEn": "warm water (35°C)",
      "nameZh": "温水（35°C）",
      "amountMetric": "265 ml",
      "amountUS": "1 cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "bp-03",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "bp-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "bp-05",
      "nameEn": "pork belly, 8 mm dice",
      "nameZh": "五花肉（切8毫米丁）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly",
      "note": "Keep the fat — a lean braise turns dry and stringy",
      "noteZh": "肥肉要留着——全瘦的酱肉会又柴又散"
    },
    {
      "id": "bp-06",
      "nameEn": "sweet bean sauce (tianmianjiang)",
      "nameZh": "甜面酱",
      "pinyin": "tián miàn jiàng",
      "amountMetric": "45 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "tianmianjiang"
    },
    {
      "id": "bp-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bp-08",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bp-09",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "bp-10",
      "nameEn": "scallions, sliced",
      "nameZh": "小葱（切片）",
      "amountMetric": "60 g",
      "amountUS": "6 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bp-11",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "amountMetric": "15 g",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bp-12",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    }
  ],
  "steps": [
    {
      "text": "Mix flour, sugar and yeast dissolved in the warm water, knead 12 minutes until smooth, then rise 70 minutes while you make the filling.",
      "textZh": "面粉、糖与溶于温水的酵母混匀，揉12分钟至光滑，然后发酵70分钟（此间做馅）。",
      "zhHint": "和面一发",
      "stateNote": {
        "visual": "Dough is smooth, ivory and satin-matt, pulling cleanly off the bowl",
        "visualZh": "面团光滑象牙白、缎面哑光，能干净脱离碗壁",
        "timeRef": "70 minutes",
        "timeRefZh": "70 分钟",
        "signal": "Stretched thin it forms a translucent windowpane; a finger dent holds 3 seconds",
        "signalZh": "抻薄成透光薄膜；指印静止3秒"
      }
    },
    {
      "text": "Blanch the pork dice in boiling water 2 minutes, drain and pat dry.",
      "textZh": "五花肉丁沸水焯2分钟，捞出沥干擦干。",
      "zhHint": "焯水去腥",
      "stateNote": {
        "visual": "Grey scum floats on the water and the dice have tightened and turned opaque",
        "visualZh": "水面浮起灰色浮沫，肉丁收紧变为不透明",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No pink remains in the centre of a cut cube and the meat smells clean",
        "signalZh": "切开肉丁中心无粉色，闻起来清爽无腥"
      }
    },
    {
      "text": "Dry-fry the pork in a hot wok over medium heat 5 minutes, stirring, until the fat renders.",
      "textZh": "热锅不放油，中火下肉丁煸5分钟至出油。",
      "zhHint": "煸出油脂",
      "stateNote": {
        "visual": "Clear fat pools in the wok and the dice have gilded edges with translucent fat centres",
        "visualZh": "锅中积起清亮的油，肉丁边缘焦黄、肥肉部分变半透明",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "The sizzle deepens and the fat runs freely rather than sticking",
        "signalZh": "滋滋声变沉，油脂流动自如不再粘锅"
      }
    },
    {
      "text": "Add ginger and half the scallions, then the sweet bean sauce; fry 1 minute until fragrant. Add both soy sauces, rock sugar and 150 ml water, bring to a simmer and cook 25 minutes.",
      "textZh": "下姜片与一半葱花、甜面酱炒香1分钟。加生抽、老抽、冰糖和150毫升水，烧开后小火煮25分钟。",
      "zhHint": "炒酱与红烧",
      "stateNote": {
        "visual": "Sauce has reduced to a dark mahogany glaze that coats the dice and the fat is glossy, not separated",
        "visualZh": "汤汁收成深红褐色的亮芡包住肉丁，油脂发亮不析离",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "low",
        "signal": "A spoon dragged across the pan base leaves a channel that fills in slowly",
        "signalZh": "勺子刮过锅底留下缓慢合拢的沟"
      },
      "tip": "Fry the sweet bean sauce for a full minute. Raw tianmianjiang tastes flat and slightly metallic.",
      "tipZh": "甜面酱要炒满1分钟。生甜面酱发闷带一点金属味。"
    },
    {
      "text": "Slurry the cornstarch with 2 tbsp cold water, stir in and cook 1 minute until the sauce clings. Turn off, fold in the remaining scallions, then chill 40 minutes until firm.",
      "textZh": "淀粉加2汤匙冷水调成水淀粉，勾芡煮1分钟至挂汁。关火拌入余下葱花，冷藏40分钟至凝固。",
      "zhHint": "勾芡定型",
      "stateNote": {
        "visual": "Filling holds a scoop shape, the sauce is set and jelly-like around the dice, with no free liquid",
        "visualZh": "馅料能整勺成形，芡汁在肉丁间呈果冻状，没有流动的汤水",
        "timeRef": "40 minutes chill",
        "timeRefZh": "冷藏40分钟",
        "signal": "Turn the bowl upside down and nothing drips out",
        "signalZh": "碗倒扣过来也不会滴出汤汁"
      },
      "tip": "Chilling is not optional. Warm filling will slide out of the pleats and puddle in the steamer.",
      "tipZh": "冷藏不可省。温热的馅会从褶口滑出，在蒸笼里积成水洼。"
    },
    {
      "text": "Divide the dough into 12, flatten each to a 10 cm disc with a thinner rim, wrap 2 tbsp filling, pleat and pinch closed. Proof 25 minutes, then steam over vigorously boiling water 15 minutes; rest 5 minutes before opening.",
      "textZh": "面团分12份，每份擀成直径10厘米、边薄心厚的圆皮，包2汤匙馅，捏褶收口。醒发25分钟后沸水大火蒸15分钟，焖5分钟再开盖。",
      "zhHint": "包制与蒸制",
      "stateNote": {
        "visual": "Buns are plump and pale ivory with closed pleats on top and no sauce seeping from the seam",
        "visualZh": "包子饱满呈浅象牙白，顶部褶口闭合，接缝处没有渗汁",
        "timeRef": "25 minutes proof + 15 minutes steam + 5 minutes rest",
        "timeRefZh": "醒25分钟 + 蒸15分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts out on opening and the bun base peels cleanly off the parchment",
        "signalZh": "开盖蒸汽喷涌，包子底部能干净撕离纸"
      }
    }
  ],
  "tips": [
    "Chill the braise until set. This is the single biggest difference between a baozi that holds and one that leaks.",
    "Keep the pleats on the thinner side and the base slightly thicker — thin bases burst in the steamer.",
    "Freeze uncooked baozi on a tray, then bag; steam 18 minutes from frozen without thawing."
  ],
  "tipsZh": [
    "酱肉一定要冷藏到凝固。包子漏不漏汤，全在这一步。",
    "收口处皮要薄、底部略厚——底部太薄蒸时必破。",
    "生包子摆盘冻硬后装袋，吃时无需解冻直接蒸18分钟。"
  ],
  "relatedSlugs": [
    "fresh-pork-baozi",
    "three-umami-baozi",
    "shanghai-shengjian-bao"
  ],
  "image": "/images/recipes/fresh-pork-baozi.webp"
};
