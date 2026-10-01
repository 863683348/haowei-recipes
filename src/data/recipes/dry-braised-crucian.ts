import type { Recipe } from "@/lib/types";

/** Dry-Braised Crucian Carp (干烧鲫鱼) (干烧鲫鱼) — Day batch */
export const dry_braised_crucian: Recipe = {
  "id": "gan-shao-ji-yu",
  "slug": "dry-braised-crucian",
  "titleEn": "Dry-Braised Crucian Carp (干烧鲫鱼)",
  "titleZh": "干烧鲫鱼",
  "pinyin": "gān shāo jī yú",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan Cuisine",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version simmers crucian with minced pork and pickled chilies until the sauce nearly disappears into a sticky red glaze.",
  "versionNoteZh": "家常版把鲫鱼与肉末、泡椒同烧，汁水收得将尽，裹成红亮浓芡。",
  "tags": [
    "crucian",
    "sichuan",
    "dry-braised",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Dry-braised (gan shao) is Sichuan's answer to a sauce that refuses to quit — it clings, it glows, it lingers on the plate.",
  "storyZh": "干烧是川菜里不肯退场的汁：挂得住、亮得起来、在盘底留香。",
  "ingredients": [
    {
      "id": "dbc-01",
      "nameEn": "crucian carp (about 300 g each)",
      "nameZh": "鲫鱼（每条约300克）",
      "pinyin": "jī yú",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Score both sides.",
      "noteZh": "两面打花刀。"
    },
    {
      "id": "dbc-02",
      "nameEn": "minced pork",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "80 g",
      "amountUS": "3 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "dbc-03",
      "nameEn": "doubanjiang (fermented chili bean paste)",
      "nameZh": "豆瓣酱",
      "pinyin": "dòu bàn jiàng",
      "amountMetric": "25 g",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "dbc-04",
      "nameEn": "ginger, minced",
      "nameZh": "姜（剁末）",
      "pinyin": "jiāng",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "dbc-05",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（剁末）",
      "pinyin": "suàn",
      "amountMetric": "8 g",
      "amountUS": "1.5 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "dbc-06",
      "nameEn": "dried red chilies, halved",
      "nameZh": "干红辣椒（剪段）",
      "pinyin": "gān là jiāo",
      "amountMetric": "8 g",
      "amountUS": "3 peppers",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "dbc-07",
      "nameEn": "scallion, minced",
      "nameZh": "葱（剁末）",
      "pinyin": "cōng",
      "amountMetric": "15 g",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "dbc-08",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "pinyin": "liào jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cooking-wine"
    }
  ],
  "steps": [
    {
      "text": "Pat carp dry; sear in hot oil 2 minutes per side until skin sets; remove.",
      "textZh": "鲫鱼擦干，热油每面煎2分钟至皮定，盛出。",
      "zhHint": "煎鱼",
      "stateNote": {
        "visual": "Skin turns opaque and releases cleanly.",
        "visualZh": "鱼皮转白、离锅利落。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "high",
        "signal": "No sticking when lifted.",
        "signalZh": "轻抬不粘。"
      }
    },
    {
      "text": "In the same oil, fry doubanjiang, chilies, ginger, and garlic until the oil reddens.",
      "textZh": "原锅下豆瓣酱、辣椒、姜蒜，炒至油色转红。",
      "zhHint": "炒红油",
      "stateNote": {
        "visual": "Oil turns deep red and fragrant.",
        "visualZh": "油色深红、香气扑鼻。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium-high",
        "signal": "Aroma is savory and slightly funky, not burnt.",
        "signalZh": "香气咸鲜带酵、未焦。"
      }
    },
    {
      "text": "Add minced pork; stir-fry until it loses pink and crisps at the edges.",
      "textZh": "下肉末炒至变色、边缘微焦。",
      "zhHint": "炒肉末",
      "stateNote": {
        "visual": "Pork grains separate and turn golden.",
        "visualZh": "肉粒散开转金。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "No clumps remain.",
        "signalZh": "无结块。"
      }
    },
    {
      "text": "Return fish; add cooking wine and 200 ml water; simmer 12 minutes, turning once.",
      "textZh": "回鱼，加料酒与200毫升水，小火烧12分钟，中途翻一次。",
      "zhHint": "烧制",
      "stateNote": {
        "visual": "Sauce reduces and thickens around the fish.",
        "visualZh": "汤汁收浓裹鱼。",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low",
        "signal": "Fish flakes at the spine.",
        "signalZh": "脊骨处肉易离。"
      }
    },
    {
      "text": "Raise heat to dry the sauce to a sticky glaze; shower with scallion and serve.",
      "textZh": "转大火收干成黏亮芡，撒葱末出锅。",
      "zhHint": "收干亮芡",
      "stateNote": {
        "visual": "Sauce clings as a red lacquer.",
        "visualZh": "汁如红漆般挂住。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Pan looks nearly dry but glossy.",
        "signalZh": "锅见干而亮。"
      }
    }
  ],
  "tips": [
    "Dry-braised means almost no sauce left — keep reducing.",
    "Doubanjiang is salty; taste before adding salt.",
    "Turn the fish gently with two spatulas to avoid breaking it."
  ],
  "tipsZh": [
    "干烧就是汁将尽，别怕收干。",
    "豆瓣酱咸，加盐前先尝。",
    "用两把铲轻翻，免得断鱼。"
  ],
  "commonMistakes": [
    {
      "mistake": "Not drying the fish so it sticks and tears.",
      "mistakeZh": "不擦干导致粘锅破皮。",
      "fix": "Press dry and sear in a properly hot pan.",
      "fixZh": "擦干、热锅再煎。"
    },
    {
      "mistake": "Over-watering so it never reaches dry-braised texture.",
      "mistakeZh": "水太多，永远收不到干烧。",
      "fix": "Use just enough liquid to braise, then reduce hard.",
      "fixZh": "液体刚好没过，最后猛收。"
    }
  ],
  "variations": [
    "Add pickled mustard greens for extra sour depth.",
    "Swap crucian for tilapia fillets for a boneless version."
  ],
  "variationsZh": [
    "加榨菜碎，酸味更有层次。",
    "鲫鱼换龙利鱼片，去骨版。"
  ],
  "relatedSlugs": [
    "braised-fish-cubes",
    "sweet-sour-carp",
    "sauce-braised-croaker",
    "pan-fried-hairtail",
    "scallion-oil-turbot",
    "tomato-fish-slices",
    "salt-pepper-croaker",
    "stir-fried-shrimp",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
