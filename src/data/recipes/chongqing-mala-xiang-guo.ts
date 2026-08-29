import type { Recipe } from "@/lib/types";

/** Chongqing-Style Mala Xiang Guo (Dry-Fried Spicy Numbing Wok Heap) (麻辣香锅) — Seed batch */
export const chongqing_mala_xiang_guo: Recipe = {
  "id": "mala-xiang-guo-chongqing-style",
  "slug": "chongqing-mala-xiang-guo",
  "titleEn": "Chongqing-Style Mala Xiang Guo (Dry-Fried Spicy Numbing Wok Heap)",
  "titleZh": "麻辣香锅",
  "pinyin": "Málà xiāng guō",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version uses less oil than restaurant style and swaps high-heat blast-frying for controlled medium-high wok-searing.",
  "versionNoteZh": "家常版减油，以中大火控温煸炒替代餐馆猛火爆炒。",
  "tags": [
    "30-min",
    "wok",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle Lin’s apartment kitchen in Nan’an District had a wok ring permanently stained red from decades of mala xiang guo. He insisted the secret was ‘dry-frying each ingredient separately’ — especially the lotus root — so nothing steamed, only crisped.",
  "storyZh": "我南岸区林叔家的灶台，铁锅圈常年染着麻辣香锅的红渍。他坚持‘每样食材单炒’——尤其是莲藕——务求不焖不软，只脆不绵。",
  "ingredients": [
    {
      "id": "mx-01",
      "nameEn": "Lotus root, peeled & matchstick-cut",
      "nameZh": "莲藕丝",
      "pinyin": "lián ǒu sī",
      "amountMetric": "180 g",
      "amountUS": "2 cups",
      "category": "produce",
      "pantry": "asian",
      "note": "Soak in 1 tsp rice vinegar + 1 cup water for 5 min to prevent browning"
    },
    {
      "id": "mx-02",
      "nameEn": "Dried chili threads (or crushed dried chilies)",
      "nameZh": "辣椒丝/碎干椒",
      "pinyin": "làjiāo sī / suì gān jiāo",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "mx-03",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huājiāo",
      "amountMetric": "4 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "mx-04",
      "nameEn": "Oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "mx-05",
      "nameEn": "Cooking wine (dry sherry or mirin)",
      "nameZh": "料酒",
      "pinyin": "liào jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cooking-wine"
    },
    {
      "id": "mx-06",
      "nameEn": "Baby corn, drained & halved lengthwise",
      "nameZh": "甜玉米粒（罐头）",
      "pinyin": "tián yùmǐ lì",
      "amountMetric": "120 g",
      "amountUS": "¾ cup",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Heat 2 tbsp neutral oil in a wok over medium-high heat. Add Sichuan peppercorns and dried chilies; stir-fry 45 seconds until chilies darken and release fragrance.",
      "textZh": "旺火热锅下2 tbsp油，入花椒与干辣椒，煸炒45秒至辣椒变深、香气迸发。",
      "zhHint": "炝锅香料",
      "stateNote": {
        "visual": "Chilies curl slightly and deepen to burnt orange",
        "visualZh": "辣椒微卷，转为焦橙色",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium-high",
        "signal": "Citrusy-numbing aroma fills kitchen instantly",
        "signalZh": "花椒麻香与辣椒辛香即刻弥漫厨房"
      }
    },
    {
      "text": "Remove spice mix with slotted spoon and set aside. Keep oil hot in wok.",
      "textZh": "用漏勺捞出香料，沥油备用；锅中余油保持高温。",
      "zhHint": "留油炝锅",
      "stateNote": {
        "visual": "Oil shimmers with visible heat waves",
        "visualZh": "油面泛起清晰热浪",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "medium-high",
        "signal": "A drop of water sizzles violently on contact",
        "signalZh": "滴水入锅即爆响"
      }
    },
    {
      "text": "Add lotus root sticks to hot oil. Stir-fry 3 minutes until edges crisp and color turns pale gold.",
      "textZh": "下藕丝大火快炒3分钟，至边缘微脆、呈浅金色。",
      "zhHint": "单炒藕丝",
      "stateNote": {
        "visual": "Strips appear dry, not wet; edges begin to curl and brown lightly",
        "visualZh": "藕丝干爽不湿；边缘微卷、浅褐",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Audible sizzle remains constant, no steam",
        "signalZh": "持续清脆爆响，无水汽蒸腾"
      }
    },
    {
      "text": "Push lotus root to sides. Add baby corn and stir-fry 2 minutes until corn kernels blister slightly.",
      "textZh": "将藕丝拨至锅边，下玉米粒炒2分钟至颗粒微鼓。",
      "zhHint": "分批入料",
      "stateNote": {
        "visual": "Corn kernels develop faint golden blisters",
        "visualZh": "玉米粒表面浮现淡金小泡",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Kernels emit faint popping sound",
        "signalZh": "颗粒发出细微噼啪声"
      }
    },
    {
      "text": "Return reserved spice mix to wok. Add oyster sauce, cooking wine, and 1 tsp light soy sauce. Toss 1 minute until glossy and evenly coated. Serve hot.",
      "textZh": "回入香料，加蚝油、料酒、1 tsp 生抽，翻炒1分钟至油亮裹匀。即食。",
      "zhHint": "合炒收汁",
      "stateNote": {
        "visual": "All ingredients glisten with thin, sticky glaze",
        "visualZh": "所有食材裹上薄而油亮的酱膜",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Aroma shifts from raw to deeply savory and toasted",
        "signalZh": "气味由生辣转为焦香咸鲜"
      }
    }
  ],
  "tips": [
    "Always dry ingredients well before stir-frying — moisture = steaming, not crisping",
    "Add leafy greens (like spinach) in last 30 seconds to retain color and texture",
    "Store leftover spice mix in airtight jar — reuse in soups or fried rice"
  ],
  "tipsZh": [
    "所有食材下锅前务必擦干——水汽会致闷软而非酥脆",
    "绿叶菜（如菠菜）最后30秒下锅，保色保脆",
    "剩余香料渣密封冷藏，可复用于汤品或炒饭"
  ],
  "relatedSlugs": [
    "chengdu-maocai",
    "sichuan-malatang"
  ],
  "image": "/images/recipes/chongqing-mala-xiang-guo.webp"
};
