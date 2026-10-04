import type { Recipe } from "@/lib/types";

/** Tiger-Skin Blistered Chilies (虎皮尖椒) (虎皮尖椒) — Day batch */
export const tiger_skin_chili: Recipe = {
  "id": "tiger-skin-chili",
  "slug": "tiger-skin-chili",
  "titleEn": "Tiger-Skin Blistered Chilies (虎皮尖椒)",
  "titleZh": "虎皮尖椒",
  "pinyin": "hu pi jian jiao",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan (湖南)",
  "regionZh": "湖南",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version dry-char the whole chilies in a wok and season them in the pan. Restaurant versions flash-fry them in hot oil for a blistered, almost deep-fried skin, then braise briefly in a heavier sauce.",
  "versionNoteZh": "家庭版整只尖椒干锅干煸至起虎皮，再在锅里调味。餐厅版用热油快速炸出近似虎皮的泡皮，再用更浓的汁短暂烧制。",
  "tags": [
    "hunan",
    "vegetarian",
    "vegan",
    "spicy",
    "rice-pairing"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "The name is literal: dry-roasting long green chilies in a hot wok blisters their skin into pale stripes, like tiger markings. Nothing else is needed — no batter, no deep-frying, no meat. This is the dish that convinced a friend of mine, who swore he disliked vegetables, to ask for the recipe.",
  "storyZh": "名字是实打实的：长青椒在热锅里干煸，表皮鼓起浅色斑纹，像虎皮。不需要别的——不挂糊、不油炸、不放肉。我有个朋友号称讨厌蔬菜，吃完这道菜主动来要方子。",
  "ingredients": [
    {
      "id": "tsc-1",
      "nameEn": "long green chilies (anaheim or cubanelle)",
      "nameZh": "长尖椒",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tsc-2",
      "nameEn": "garlic cloves, sliced",
      "nameZh": "大蒜（切片）",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tsc-3",
      "nameEn": "fermented black soybeans (douchi), rinsed and chopped",
      "nameZh": "豆豉（洗后略剁）",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "douchi"
    },
    {
      "id": "tsc-4",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tsc-5",
      "nameEn": "chinkiang vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "tsc-6",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "tsc-7",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "tsp"
    },
    {
      "id": "tsc-8",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "1 1/2 tbsp",
      "amountUS": "1 1/2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Wash the chilies and dry them thoroughly. Leave the stems on but slit each chili once lengthwise so steam can escape and the seasoning can get in.",
      "textZh": "尖椒洗净彻底擦干。保留蒂部，每只纵向划一刀，便于出汽和入味。",
      "stateNote": {
        "visual": "dry whole chilies with one long slit",
        "signal": "prep complete",
        "timeRef": "3 min"
      }
    },
    {
      "text": "Heat a dry wok over medium heat with no oil. Add the whole chilies and press them against the hot surface with a spatula, turning every 2 minutes.",
      "textZh": "干锅中火烧热（不放油），放入整只尖椒，用锅铲压住贴紧锅面，每 2 分钟翻面。",
      "stateNote": {
        "visual": "skin puffing into pale blistered patches",
        "signal": "dry crackling sound",
        "timeRef": "6-8 min",
        "heat": "medium"
      }
    },
    {
      "text": "Keep going until most of the surface is covered in pale blistered stripes and the chilies have slumped and softened. Remove and set aside.",
      "textZh": "煸到大部分表面起浅色虎皮斑、尖椒变软塌陷，盛出备用。",
      "stateNote": {
        "visual": "tiger-stripe blisters over most of the skin",
        "signal": "chilies bend easily",
        "timeRef": "2-3 min",
        "heat": "medium"
      }
    },
    {
      "text": "Add oil to the same wok over medium heat. Fry garlic and douchi for 30 seconds until the beans smell savoury and the garlic is pale gold.",
      "textZh": "同一口锅中火下油，爆香蒜片和豆豉 30 秒，至豆豉出酱香、蒜片微黄。",
      "stateNote": {
        "visual": "garlic pale gold, beans glossy",
        "signal": "deep savoury aroma",
        "timeRef": "30 sec",
        "heat": "medium"
      }
    },
    {
      "text": "Return the chilies to the wok. Add light soy sauce, chinkiang vinegar, sugar and salt, plus 2 tbsp water. Toss gently for 1 minute so the blistered skin drinks up the sauce without tearing.",
      "textZh": "倒回尖椒，加生抽、镇江香醋、白糖、盐和 2 汤匙水，轻轻翻动 1 分钟，让虎皮吸汁但不破皮。",
      "stateNote": {
        "visual": "chilies glossy, sauce nearly absorbed",
        "signal": "sauce bubbling and thickening",
        "timeRef": "1 min",
        "heat": "medium"
      }
    },
    {
      "text": "Taste the sauce — it should be salty-sour with a faint sweetness. Serve the chilies whole with plenty of plain rice.",
      "textZh": "尝一下汁——咸酸为主、带回甜。尖椒整只装盘，配足量白米饭上桌。",
      "stateNote": {
        "visual": "shiny dark-green chilies, almost no free sauce",
        "signal": "ready to serve"
      }
    }
  ],
  "tips": [
    "Completely dry chilies are non-negotiable — water makes them steam and the skin stays smooth.",
    "Choose long, thin-walled peppers; thick bell peppers will not blister.",
    "Slit once so they do not burst in the pan.",
    "Add a spoon of minced pork to the sauce if you want the classic Sichuan variation."
  ],
  "tipsZh": [
    "尖椒必须彻底擦干——有水就会变蒸，表皮起不了泡。",
    "选细长薄皮椒，厚肉甜椒煸不出虎皮。",
    "划一刀防止下锅爆开。",
    "想要经典川式变体，可以在汁里加一勺猪肉末。"
  ],
  "relatedSlugs": [
    "smashed-peppers-lei-la-jiao",
    "tiger-skin-pepper-stuffed-pork",
    "chilli-pork",
    "dry-pot-potato-slices"
  ],
  "image": "/images/recipes/dry-fried-green-beans.webp"
};
