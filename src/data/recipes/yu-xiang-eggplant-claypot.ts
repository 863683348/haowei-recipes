import type { Recipe } from "@/lib/types";

/** Fish-Flavored Eggplant Claypot (鱼香茄子煲) (鱼香茄子煲) — Day batch */
export const yu_xiang_eggplant_claypot: Recipe = {
  "id": "yu-xiang-eggplant-claypot",
  "slug": "yu-xiang-eggplant-claypot",
  "titleEn": "Fish-Flavored Eggplant Claypot (鱼香茄子煲)",
  "titleZh": "鱼香茄子煲",
  "pinyin": "yú xiāng qié zi bāo",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: less oil, claypot keeps everything bubbling at the table. Restaurant versions use a deep fry step that we skip for a healthier result.",
  "versionNoteZh": "家常版少油，砂锅上桌仍咕嘟冒泡。餐厅版常过油，我们省略更健康。",
  "tags": [
    "30-min",
    "spicy",
    "sichuan",
    "claypot",
    "weeknight"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "The claypot (煲) version of yu xiang eggplant is a social dish — it arrives bubbling and stays hot at the table. The signature yu xiang sauce (sour, sweet, salty, spicy) penetrates every sponge-like bite of eggplant. Eat it straight from the pot with rice.",
  "storyZh": "鱼香茄子煲是社交菜——端上来咕嘟冒泡，上桌持续滚烫。经典的鱼香汁（酸、甜、咸、辣）渗入每口海绵状茄子。直接从锅里配饭吃。",
  "ingredients": [
    {
      "id": "yxc-egg",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "amountMetric": "500 g",
      "amountUS": "3 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "yxc-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "6 cloves",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "yxc-ginger",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "yxc-scallion",
      "nameEn": "scallions, cut 2-inch pieces",
      "nameZh": "小葱段",
      "amountMetric": "4 stalks",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "yxc-douban",
      "nameEn": "doubanjiang (chili bean paste)",
      "nameZh": "郫县豆瓣酱",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "yxc-chili",
      "nameEn": "dried red chilies, whole",
      "nameZh": "干红辣椒",
      "amountMetric": "8 whole",
      "amountUS": "8 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "yxc-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "2 tsp",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "yxc-vinegar",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "陈醋",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "yxc-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "yxc-cornstarch",
      "nameEn": "cornstarch + 3 tbsp water",
      "nameZh": "淀粉水",
      "amountMetric": "1 tbsp cornstarch + 3 tbsp water",
      "amountUS": "1 tbsp cornstarch + 3 tbsp water",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "yxc-oil",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut eggplant into 5 cm chunks. Toss with 1 tsp salt and set 15 min. Squeeze dry. This reduces oil absorption during cooking and removes bitterness.",
      "textZh": "茄子切5cm块，撒1茶匙盐腌制15分钟，挤干。减少吸油并去涩。",
      "stateNote": {
        "visual": "eggplant releases clear yellow liquid",
        "visualZh": "茄子渗出清黄色液体",
        "signal": "chunks shrink slightly and feel firm — ready to cook",
        "signalZh": "块略缩小，手感紧实——可以下锅"
      }
    },
    {
      "text": "Mix the sauce: sugar, vinegar, soy sauce, and cornstarch water in a small bowl. Set aside.",
      "textZh": "调碗汁：糖、醋、生抽、淀粉水混合，备用。"
    },
    {
      "text": "Heat oil in a claypot or heavy pan over medium-high. Add dried chilies and stir 10 sec until fragrant but not burnt.",
      "textZh": "砂锅或厚锅烧热油，中大火，下干辣椒炝10秒至香但不焦。",
      "stateNote": {
        "visual": "oil shimmers, chilies darken slightly and release aroma",
        "visualZh": "油亮，辣椒微 darken，香气释放",
        "signal": "if chilies turn black, start over — burnt chili is bitter",
        "signalZh": "辣椒变黑则重来——糊辣发苦"
      }
    },
    {
      "text": "Add doubanjiang, garlic, and ginger. Stir-fry 30 sec until the oil turns deep red.",
      "textZh": "下豆瓣酱、蒜末、姜末，炒30秒至油色变深红。",
      "stateNote": {
        "visual": "oil separates and turns a deep, translucent crimson",
        "visualZh": "油析出，呈深透亮红色",
        "signal": "this 'red oil' (红油) is the flavor base — don't rush it",
        "signalZh": "红油是风味基底——不要急"
      }
    },
    {
      "text": "Add eggplant. Pour in the sauce mixture. Gently stir to coat — don't break the eggplant. Cover and simmer 8 min on medium-low.",
      "textZh": "下茄子，淋碗汁，轻翻裹匀——不要弄碎茄子。盖盖中火焖8分钟。",
      "stateNote": {
        "visual": "sauce bubbles and thickens around the eggplant; color deepens to glossy brown-red",
        "visualZh": "酱汁冒泡浓稠，包裹茄子，色深红亮",
        "signal": "eggplant is translucent and collapses when tilted in the pot",
        "signalZh": "茄子半透明塌软，倾斜锅时肉会流动——完成"
      }
    },
    {
      "text": "Add scallion pieces. Cover 1 min more. Serve the claypot directly at the table — it stays bubbling.",
      "textZh": "下葱段，盖盖再焖1分钟。连砂锅端上桌，持续咕嘟。"
    }
  ],
  "tips": [
    "Salt and squeeze the eggplant first — this is the #1 trick for less oil and better texture.",
    "The yu xiang sauce balance is key: equal parts sugar and vinegar, with salty soy and spicy doubanjiang framing them.",
    "Eat immediately — claypot eggplant continues to cook and can turn mushy if left sitting."
  ],
  "tipsZh": [
    "盐渍挤水是第一秘诀——省油且口感好。",
    "鱼香汁平衡关键：糖醋等量，酱油咸、豆瓣辣来衬托。",
    "趁热吃——砂锅会继续烹饪，放久变糊。"
  ],
  "relatedSlugs": [
    "yu-xiang-eggplant",
    "mapo-tofu",
    "sour-soup-dumplings"
  ],
  "image": "/images/recipes/yu-xiang-eggplant-claypot.webp"
};
