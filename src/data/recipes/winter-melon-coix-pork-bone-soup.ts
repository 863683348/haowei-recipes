import type { Recipe } from "@/lib/types";

/** Winter Melon & Coix Seed Pork Bone Soup (冬瓜薏米排骨汤) — Seed batch */
export const winter_melon_coix_pork_bone_soup: Recipe = {
  "id": "dong-gua-yi-mi-pai-gu-tang",
  "slug": "winter-melon-coix-pork-bone-soup",
  "titleEn": "Winter Melon & Coix Seed Pork Bone Soup",
  "titleZh": "冬瓜薏米排骨汤",
  "pinyin": "dōng guā yì mǐ pái gǔ tāng",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Yueyang",
  "regionZh": "岳阳",
  "difficulty": "easy",
  "timeMin": 105,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses toasted coix seed for nutty aroma and avoids excessive diuretic effect—restaurant versions often over-toast or omit toon seed entirely.",
  "versionNoteZh": "家常版焙炒薏米增香减寒性；餐馆版常焙过头或省略，失其健脾之功。",
  "tags": [
    "light",
    "detox",
    "summer"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Yueyang grew coix seed in her courtyard plot and toasted it weekly in a wok over charcoal—she said ‘toasted yimi warms the spleen, raw chills it,’ and served this soup after rainy days to lift dampness.",
  "storyZh": "我岳阳外婆在院里种薏米，每周炭火铁锅焙炒；她说‘炒薏米暖脾，生薏米寒脾’，每逢阴雨后必煮此汤祛湿。",
  "ingredients": [
    {
      "id": "wm-01",
      "nameEn": "pork neck bones (with marrow)",
      "nameZh": "猪颈骨（带骨髓）",
      "pinyin": "zhū jǐng gǔ",
      "amountMetric": "450 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Same as lotus root soup—prefer marrow-rich neck bones.",
      "noteZh": "同莲藕汤，优选带骨髓颈骨。"
    },
    {
      "id": "wm-02",
      "nameEn": "dried coix seed (yi mi)",
      "nameZh": "炒薏米",
      "pinyin": "chǎo yì mǐ",
      "amountMetric": "40 g",
      "amountUS": "¼ cup, pre-toasted",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Buy raw coix seed and toast yourself: dry-fry in skillet 5–7 min until golden and fragrant. Sub: store-bought toasted coix (check label says 'roasted' or 'fried').",
      "noteZh": "购生薏米自焙：干锅小火焙5–7分钟至金黄微香。替代：市售炒薏米（确认标‘炒制’或‘焙炒’）。"
    },
    {
      "id": "wm-03",
      "nameEn": "winter melon",
      "nameZh": "冬瓜",
      "pinyin": "dōng guā",
      "amountMetric": "600 g",
      "amountUS": "4 cups, peeled, seeded, 2 cm cubes",
      "category": "produce",
      "pantry": "local",
      "note": "Use mature winter melon with waxy green skin. Sub: peeled zucchini (less cooling, but acceptable in pinch).",
      "noteZh": "选表皮蜡质厚、青绿老冬瓜。替代：西葫芦（清热力弱，应急可用）。"
    },
    {
      "id": "wm-04",
      "nameEn": "scallion greens",
      "nameZh": "小葱绿",
      "pinyin": "xiǎo cōng lǜ",
      "amountMetric": "20 g",
      "amountUS": "¼ cup, finely chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse pork bones and blanch as in lotus root soup: cold water, boil, skim foam 3 minutes, rinse well.",
      "textZh": "猪骨同莲藕汤法焯水：冷水下锅，沸后撇沫3分钟，温水洗净。",
      "zhHint": "去腥定调",
      "stateNote": {
        "visual": "Clean white foam, minimal sediment",
        "visualZh": "泡沫洁白，沉渣极少",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Water surface calms after initial boil, foam subsides",
        "signalZh": "初沸后水面平复，浮沫渐消"
      }
    },
    {
      "text": "In clean pot, combine bones, toasted coix seed, and 2 L cold water. Bring to gentle simmer and cook covered on low heat for 60 minutes.",
      "textZh": "净锅中放骨、炒薏米、冷水2升。烧至微沸，盖盖小火炖60分钟。",
      "zhHint": "先炖薏米出药香",
      "stateNote": {
        "visual": "Coix seeds plumping, water turning faintly milky",
        "visualZh": "薏米微胀，水呈淡乳白",
        "timeRef": "60 minutes",
        "timeRefZh": "60 分钟",
        "heat": "low",
        "signal": "Fragrance shifts from raw grain to warm, nutty, toasted",
        "signalZh": "香气由生涩转为暖香、焙香"
      }
    },
    {
      "text": "Add winter melon cubes. Simmer uncovered on medium-low heat for 25 minutes until melon is translucent and tender but intact.",
      "textZh": "下冬瓜块，敞盖中火炖25分钟，至瓜肉透亮、软而不塌。",
      "zhHint": "冬瓜后下防烂",
      "stateNote": {
        "visual": "Melon cubes semi-transparent, edges softening but holding shape",
        "visualZh": "瓜块半透亮，边缘柔化但不散",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium-low",
        "signal": "A chopstick pierces easily with slight spring-back",
        "signalZh": "筷子轻插即入，略有回弹"
      }
    },
    {
      "text": "Skim any surface oil. Season only with fine sea salt—never soy sauce or wine, to preserve the soup’s light, cooling nature.",
      "textZh": "撇净浮油。仅用海盐调味，忌酱油与料酒，以保清润本性。",
      "zhHint": "清补忌浊",
      "stateNote": {
        "visual": "Broth clear pale jade, no oil sheen",
        "visualZh": "汤色清浅碧玉，无油光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Salt dissolves fully, no graininess remains",
        "signalZh": "盐粒全溶，无颗粒感"
      }
    },
    {
      "text": "Ladle hot soup into bowls. Garnish generously with scallion greens just before serving.",
      "textZh": "趁热盛碗，上桌前撒足量葱绿。",
      "zhHint": "葱绿提神醒脾",
      "stateNote": {
        "visual": "Vibrant green flecks against pale broth",
        "visualZh": "翠绿葱花浮于素汤之上",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "high",
        "signal": "Scallions release bright, grassy aroma upon contact with hot broth",
        "signalZh": "葱遇热汤瞬发青草香"
      }
    }
  ],
  "tips": [
    "Toasting coix seed cuts its natural coldness—critical in humid Hunan summers.",
    "Winter melon skin is edible and nutrient-dense; peel only if waxed or bitter.",
    "This soup tastes best within 2 hours of cooking—do not reboil after garnishing."
  ],
  "tipsZh": [
    "焙炒薏米减其寒性，对湿热湘南夏季尤为关键。",
    "冬瓜皮可食且富含营养；仅当表皮打蜡或发苦时才去皮。",
    "此汤2小时内风味最佳，撒葱后切勿回锅煮沸。"
  ],
  "relatedSlugs": [
    "lotus-root-pork-bone-soup"
  ],
  "image": "/images/recipes/winter-melon-coix-pork-bone-soup.webp"
};
