import type { Recipe } from "@/lib/types";

/** Zhenjiang Crystal Pork (Shuijing Yaorou) (水晶肴肉) — Day batch */
export const crystal_pork_zhenjiang: Recipe = {
  "id": "crystal-pork-zhenjiang",
  "slug": "crystal-pork-zhenjiang",
  "titleEn": "Zhenjiang Crystal Pork (Shuijing Yaorou)",
  "titleZh": "水晶肴肉",
  "pinyin": "shuǐ jīng yáo ròu",
  "cuisine": "江苏菜",
  "cuisineEn": "Jiangsu",
  "region": "Jiangsu (Zhenjiang)",
  "regionZh": "江苏（镇江）",
  "difficulty": "medium",
  "timeMin": 150,
  "servings": 6,
  "version": "family",
  "versionNote": "Traditional curing uses saltpetre for the rosy colour. The home version skips it entirely — the meat is paler but the flavour is the same, and it is safer to make in quantity.",
  "versionNoteZh": "传统做法加硝石上色。家常版完全不加，肉色偏白但味道不变，做多了也更安心。",
  "tags": [
    "jiangsu",
    "pork",
    "cold-dish",
    "make-ahead",
    "appetizer"
  ],
  "dietary": [
    "none"
  ],
  "story": "Set the plate down and it trembles: amber jelly shot through with pink meat, translucent enough to read a newspaper through. Zhenjiang people eat it at breakfast with a bowl of rice porridge and a splash of their black vinegar — the vinegar is sold in the same shops, and the pairing is not negotiable.",
  "storyZh": "端上桌时会抖：琥珀色的冻里嵌着粉红的肉，透得能隔着看报纸。镇江人拿它配早上的稀饭，再淋一点香醋——醋就摆在隔壁铺子里卖，这个搭配没有商量余地。",
  "ingredients": [
    {
      "id": "pork-knuckle",
      "nameEn": "pork knuckle / hock, split",
      "nameZh": "猪蹄（劈开）",
      "amountMetric": "1.2 kg",
      "amountUS": "2.6 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly",
      "note": "Knuckle gives the collagen that sets the jelly. Ask the butcher to split it lengthwise.",
      "noteZh": "猪蹄的胶质是成冻的关键，让肉铺顺长劈开。"
    },
    {
      "id": "salt",
      "nameEn": "coarse salt",
      "nameZh": "粗盐",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "scallion",
      "nameEn": "scallions",
      "nameZh": "葱",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "30 g",
      "amountUS": "8 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "star-anise",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "2 pods",
      "amountUS": "2 pods",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "five-spice",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "chinkiang-vinegar",
      "nameEn": "Chinkiang black vinegar, to serve",
      "nameZh": "镇江香醋（蘸食用）",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar",
      "note": "Non-negotiable. Zhenjiang vinegar and 肴肉 are sold together for a reason.",
      "noteZh": "不能少。镇江香醋和肴肉从来是一起卖的。"
    },
    {
      "id": "ginger-shoots",
      "nameEn": "young ginger, shredded, to serve",
      "nameZh": "嫩姜丝（配食）",
      "amountMetric": "30 g",
      "amountUS": "1/4 cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Rub the knuckle all over with the coarse salt, cover and refrigerate for at least 2 hours or overnight to firm the meat and draw out water.",
      "textZh": "猪蹄用粗盐里外搓匀，盖上冷藏至少 2 小时或过夜，让肉紧实并逼出水分。",
      "stateNote": {
        "visual": "The skin looks dry and slightly translucent; beads of moisture sit in the dish",
        "visualZh": "猪皮发干、略微透亮，盘底积出水分",
        "signal": "The flesh feels firm and springy rather than soft when pressed",
        "signalZh": "按下去紧实有弹性，不再松软",
        "timeRef": "2 hours or overnight",
        "timeRefZh": "2 小时或过夜",
        "heat": "low"
      }
    },
    {
      "text": "Rinse off the salt, then simmer the knuckle with scallion, ginger, wine, star anise and five-spice in water to cover until the meat is tender but not falling apart.",
      "textZh": "冲净盐分，猪蹄加葱姜、黄酒、八角、五香粉和水没过，小火煮到肉软但不散。",
      "stateNote": {
        "visual": "The broth turns cloudy and a thin layer of fat floats on top",
        "visualZh": "汤变浑浊，表面浮起一层薄油",
        "signal": "A chopstick pierces the thickest part easily but the meat still holds its shape",
        "signalZh": "筷子能轻松扎透最厚处，但肉仍保持完整",
        "timeRef": "75-90 minutes",
        "timeRefZh": "75-90 分钟",
        "heat": "low"
      },
      "tip": "Do not let it boil hard, or the broth emulsifies and the jelly turns cloudy.",
      "tipZh": "别大火滚，汤一乳化，冻就会发浑。"
    },
    {
      "text": "Lift out the knuckle, remove the bones while still warm, and pack the meat skin-side down into a loaf tin or deep tray.",
      "textZh": "捞出猪蹄趁热去骨，肉皮朝下码进吐司模或深盘里。",
      "stateNote": {
        "visual": "The meat fills the tin with no big gaps and the skin lies flat against the base",
        "visualZh": "肉填满模具没有大空隙，皮平贴底部",
        "signal": "The meat is hot enough to handle but holds together when pressed",
        "signalZh": "热度能下手，按压时肉能抱成团",
        "timeRef": "10 minutes",
        "timeRefZh": "约 10 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Strain the cooking liquid, skim the fat, reduce it by a third over high heat, then pour it over the meat until just covered. Cool, then refrigerate overnight.",
      "textZh": "煮汤过滤撇油，大火收掉三分之一，浇在肉上刚好没过，放凉后冷藏过夜。",
      "stateNote": {
        "visual": "The liquid is clear amber and sets to a firm wobble in the fridge",
        "visualZh": "汤汁清亮琥珀色，冷藏后凝成结实的冻",
        "signal": "A finger pressed on the surface bounces back and leaves no dent",
        "signalZh": "手指按表面会回弹、不留凹痕",
        "timeRef": "overnight, minimum 6 hours",
        "timeRefZh": "冷藏过夜，至少 6 小时",
        "heat": "high"
      },
      "tip": "If it has not set after 8 hours, the liquid was too thin — reheat, reduce further and chill again.",
      "tipZh": "8 小时还没凝固说明汤太稀，重新加热收浓再冷藏。"
    },
    {
      "text": "Turn out the terrine, slice it thin so each slice shows both pink meat and clear jelly, and serve with shredded young ginger and a small dish of Zhenjiang vinegar.",
      "textZh": "倒扣脱模，切成薄片，每片都要有粉红的肉和透明的冻，配嫩姜丝和一碟镇江香醋上桌。",
      "stateNote": {
        "visual": "Slices hold a clean edge, glisten in the light and wobble when the plate is nudged",
        "visualZh": "薄片边缘整齐、透光发亮，碰一下盘子还会抖",
        "signal": "The slice lifts with a spatula without breaking",
        "signalZh": "用铲子能把薄片完整铲起不碎",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Slice it as thin as you can — 3 mm is the Zhenjiang standard.",
    "Keep the aspic scraps: they melt into an extraordinary bowl of noodle soup.",
    "Serve cold, straight from the fridge. Warm 肴肉 is a different, lesser thing."
  ],
  "tipsZh": [
    "越薄越好，镇江标准是 3 毫米。",
    "切下的碎冻别扔，煮面时化进汤里鲜得离谱。",
    "一定要冷藏后冷吃，温热的肴肉完全是另一回事。"
  ],
  "relatedSlugs": [
    "master-stock-assorted-platter",
    "hongshao-pork",
    "sweet-sour-ribs"
  ],
  "image": "/images/recipes/master-stock-assorted-platter.webp"
};
