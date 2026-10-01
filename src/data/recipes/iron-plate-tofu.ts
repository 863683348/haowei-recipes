import type { Recipe } from "@/lib/types";

/** Sizzling Iron Plate Tofu (铁板豆腐) (铁板豆腐) — Day batch */
export const iron_plate_tofu: Recipe = {
  "id": "tie-ban-dou-fu",
  "slug": "iron-plate-tofu",
  "titleEn": "Sizzling Iron Plate Tofu (铁板豆腐)",
  "titleZh": "铁板豆腐",
  "pinyin": "tiě bǎn dòu fu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Home",
  "regionZh": "家常",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses a heavy cast-iron skillet and finishes at the table; restaurant version brings a screaming-hot iron plate to the table and pours the sauce on in front of you.",
  "versionNoteZh": "家常版用厚铸铁锅、端上桌再收尾；酒楼版烧红铁板上桌，当面淋汁。",
  "tags": [
    "tofu",
    "sizzling",
    "weeknight",
    "vegetarian-friendly",
    "25-min"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "The sound is half the dish. Tofu crisped hard, then a dark savoury sauce poured onto a hot plate so it hisses and caramelises at the edges.",
  "storyZh": "这道菜一半是声音。豆腐煎到硬壳，酱汁浇上热铁板「刺啦」一声，边缘焦糖化。",
  "ingredients": [
    {
      "id": "tbdf-01",
      "nameEn": "firm tofu, cut into 2 cm cubes",
      "nameZh": "北豆腐（切2厘米块）",
      "pinyin": "běi dòu fu",
      "amountMetric": "450 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "tbdf-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "tbdf-03",
      "nameEn": "onion, cut into wedges",
      "nameZh": "洋葱（切块）",
      "pinyin": "yáng cōng",
      "amountMetric": "80 g",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "tbdf-04",
      "nameEn": "green pepper, cut into squares",
      "nameZh": "青椒（切块）",
      "pinyin": "qīng jiāo",
      "amountMetric": "60 g",
      "amountUS": "1/2 pepper",
      "category": "produce",
      "pantry": "local",
      "termKey": "green-pepper"
    },
    {
      "id": "tbdf-05",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（剁末）",
      "pinyin": "suàn",
      "amountMetric": "10 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tbdf-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tbdf-07",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "tbdf-08",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "tbdf-09",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Press tofu 15 minutes, cube it, then toss in cornstarch.",
      "textZh": "豆腐压15分钟后切块，裹匀淀粉。",
      "zhHint": "裹粉",
      "stateNote": {
        "visual": "Each cube wears a dry matte coat.",
        "visualZh": "每块裹上干爽薄粉。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "No wet shine left on the surface.",
        "signalZh": "表面不再湿亮。"
      }
    },
    {
      "text": "Pan-fry cubes in hot oil without moving for 3 minutes; turn and repeat until all sides are golden.",
      "textZh": "热油下豆腐块，静置3分钟不动，翻面至各面金黄。",
      "zhHint": "煎豆腐",
      "stateNote": {
        "visual": "A deep golden crust forms; cubes sound crisp when nudged.",
        "visualZh": "结成深金硬壳，铲动有脆响。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-high",
        "signal": "Cubes release from the pan easily.",
        "signalZh": "豆腐自然离锅。"
      }
    },
    {
      "text": "Push tofu aside; fry onion and green pepper 60 seconds until edges blister.",
      "textZh": "豆腐推边，下洋葱与青椒炒60秒至边缘微焦。",
      "zhHint": "炒配菜",
      "stateNote": {
        "visual": "Onion turns translucent with browned tips.",
        "visualZh": "洋葱转透、尖角微焦。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "Smell is sweet and slightly smoky.",
        "signalZh": "香气甜中带焦。"
      }
    },
    {
      "text": "Add garlic, soy sauces and oyster sauce; stir 20 seconds to glaze.",
      "textZh": "下蒜末、生抽、老抽与蚝油，翻20秒上色。",
      "zhHint": "调味",
      "stateNote": {
        "visual": "Sauce turns glossy dark brown and coats the cubes.",
        "visualZh": "酱汁转亮褐、裹住豆腐。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Aroma is deep and savoury.",
        "signalZh": "香气浓郁咸鲜。"
      }
    },
    {
      "text": "Transfer to a preheated cast-iron plate; the sauce should hiss and tighten for 30 seconds before serving.",
      "textZh": "倒入预热铁板，酱汁应「刺啦」作响并收30秒再上桌。",
      "zhHint": "上铁板",
      "stateNote": {
        "visual": "Sauce bubbles at the rim and thickens slightly.",
        "visualZh": "汁在边缘冒泡、略稠。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "A steady sizzle, not a splatter.",
        "signalZh": "持续滋响、不飞溅。"
      }
    }
  ],
  "tips": [
    "Let the crust form before you touch the cubes.",
    "Preheat the iron plate dry for 5 minutes — that is where the sizzle comes from.",
    "Use vegetarian oyster sauce to keep it meat-free."
  ],
  "tipsZh": [
    "别急着翻，壳结了再动。",
    "铁板空烧5分钟，响声全靠它。",
    "用素蚝油即可全素。"
  ],
  "commonMistakes": [
    {
      "mistake": "Stirring the tofu too early so the crust tears off.",
      "mistakeZh": "过早翻动，豆腐皮被铲破。",
      "fix": "Leave it alone 3 minutes per side.",
      "fixZh": "每面静置3分钟再翻。"
    },
    {
      "mistake": "Serving on a cold plate so the sauce never tightens.",
      "mistakeZh": "铁板没热，酱汁不收。",
      "fix": "Preheat the plate dry for 5 minutes.",
      "fixZh": "空烧铁板5分钟。"
    }
  ],
  "variations": [
    "Add sliced beef for a non-vegetarian version.",
    "Toss in dried chilies for heat.",
    "Finish with toasted sesame seeds."
  ],
  "variationsZh": [
    "加牛肉片，非素版。",
    "放干辣椒增辣。",
    "出锅撒熟芝麻。"
  ],
  "relatedSlugs": [
    "braised-tofu",
    "guota-tofu",
    "hakka-stuffed-tofu",
    "tomato-tofu",
    "enoki-tofu-clay-pot"
  ],
  "image": "/images/recipes/clay-pot-tofu.webp"
};
