import type { Recipe } from "@/lib/types";

/** Dry Pot Potato Slices (干锅土豆片) — Seed batch */
export const dry_pot_potato_slices: Recipe = {
  "id": "gan-guo-tu-dou-pian",
  "slug": "dry-pot-potato-slices",
  "titleEn": "Dry Pot Potato Slices",
  "titleZh": "干锅土豆片",
  "pinyin": "gān guō tǔ dòu piān",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Xi'an",
  "regionZh": "西安",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses thin pan-fried potato slices instead of deep-fried — crisp outside, tender inside, with minimal oil.",
  "versionNoteZh": "家常版改用薄片煎制代替油炸——外脆里糯，用油量减半。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandfather in Xi’an cooked this every winter using potatoes dug from his courtyard plot — he’d slice them paper-thin on a bamboo board, then fry them in lard until they curled like little boats. He called them ‘earth flowers’.",
  "storyZh": "我西安的爷爷每年冬天都做这道菜，用自家院里挖的新土豆——竹砧板上切得薄如纸，猪油煎至卷边如小舟，他管这叫‘地里开的花’。",
  "ingredients": [
    {
      "id": "pot-01",
      "nameEn": "Yukon Gold potatoes",
      "nameZh": "黄心土豆",
      "pinyin": "huáng xīn tǔ dòu",
      "amountMetric": "400 g",
      "amountUS": "2 medium potatoes",
      "category": "produce",
      "pantry": "local",
      "note": "Yukon Gold preferred for creaminess and crispability. Russet works but may brown faster.",
      "noteZh": "优选黄心土豆（尤康金）；褐皮土豆亦可，但易焦。",
    },
    {
      "id": "gar-02",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp julienned",
      "category": "produce",
      "pantry": "local",
      "note": "Peel and cut into matchstick strips — fresh ginger adds brightness, not heat.",
      "noteZh": "去皮切姜丝——取鲜香，非辛辣。",
      "termKey": "ginger"
    },
    {
      "id": "chi-02",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "6 g",
      "amountUS": "8 whole chilies",
      "category": "spice",
      "pantry": "asian",
      "note": "Mild-to-medium heat; deseed if preferred. Sub: 3/4 tsp crushed red pepper.",
      "noteZh": "中低辣度；怕辣可去籽。替代：红椒碎 3/4 茶匙。",
      "termKey": "dried-chili"
    },
    {
      "id": "soy-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "12 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Do not substitute with dark soy — color and salt balance rely on light soy’s clarity.",
      "noteZh": "不可用老抽替代——上色与咸鲜全靠生抽清亮本味。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "oil-01",
      "nameEn": "neutral cooking oil",
      "nameZh": "中性食用油",
      "pinyin": "zhōng xìng shí yòng yóu",
      "amountMetric": "25 ml",
      "amountUS": "1 tbsp + 2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Canola, grapeseed, or peanut oil. Avoid olive oil — low smoke point.",
      "noteZh": "芥花籽油、葡萄籽油或花生油。忌橄榄油（烟点低）。",
    }
  ],
  "steps": [
    {
      "text": "Peel potatoes and slice crosswise into 2-mm-thick rounds using a mandoline or sharp knife. Soak slices in cold water for 5 minutes, then drain and pat *completely* dry.",
      "textZh": "土豆去皮，用刨片器或快刀切成 2 毫米厚圆片；冷水浸泡 5 分钟去淀粉，捞出彻底擦干。",
      "zhHint": "薄切+去淀+擦干=不粘不糊",
      "stateNote": {
        "visual": "Slices are translucent at edges and hold no visible moisture.",
        "visualZh": "片边缘微透光，无可见水珠。",
        "timeRef": "5 minutes soak + 2 min drying",
        "timeRefZh": "浸泡 5 分钟 + 擦干 2 分钟",
        "signal": "Paper towel shows no dampness after pressing a slice.",
        "signalZh": "纸巾按压土豆片后无湿痕。"
      }
    },
    {
      "text": "Heat 15 ml (1 tbsp) oil in a nonstick or well-seasoned wok over medium heat. Arrange potato slices in a single layer. Cook undisturbed 3–4 minutes until golden and crisp underneath.",
      "textZh": "不粘锅或熟铁锅中放 15 毫升油，中火加热；土豆片单层铺满锅底，静置煎 3–4 分钟至底面金黄酥脆。",
      "zhHint": "单层铺开，静置定型",
      "stateNote": {
        "visual": "Edges curl upward and underside turns rich golden-brown.",
        "visualZh": "边缘微翘，底面呈浓郁金褐色。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium",
        "signal": "Slices release easily when nudged with spatula.",
        "signalZh": "锅铲轻推即松动，不粘锅。"
      }
    },
    {
      "text": "Flip slices carefully using tongs or spatula. Cook another 2–3 minutes until second side is crisp and lightly mottled.",
      "textZh": "用筷子或锅铲小心翻面，再煎 2–3 分钟至另一面酥脆带浅斑。",
      "zhHint": "翻面要稳，防碎防叠",
      "stateNote": {
        "visual": "Both sides show crisp texture; centers remain slightly yielding to touch.",
        "visualZh": "两面酥脆，中心轻按仍略软。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium",
        "signal": "Faint sizzle resumes immediately after flipping.",
        "signalZh": "翻面后立即恢复细微滋滋声。"
      }
    },
    {
      "text": "Push potatoes to one side. Add remaining 10 ml oil, dried chilies, and ginger. Stir-fry 45 seconds until chilies darken slightly and ginger becomes aromatic.",
      "textZh": "将土豆拨至锅一侧，余油中下干辣椒与姜丝，煸炒 45 秒至辣椒微深、姜香四溢。",
      "zhHint": "拨边炝料，免土豆过火",
      "stateNote": {
        "visual": "Ginger shreds soften and turn translucent; chilies puff and deepen in color.",
        "visualZh": "姜丝变软透亮，辣椒微膨色深。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium",
        "signal": "Fragrance fills the kitchen — warm, spicy, and gingery.",
        "signalZh": "满屋暖香，辛香伴姜气。"
      }
    },
    {
      "text": "Return all potatoes to center. Drizzle light soy sauce evenly. Toss over medium heat 60 seconds. Garnish with scallion greens (not listed — use leftover from cauliflower recipe) and serve hot.",
      "textZh": "土豆归拢至锅中，沿边淋入生抽，中火翻匀 60 秒。撒葱绿（可复用前一道菜剩余）即食。",
      "zhHint": "酱沿边淋，防焦防咸",
      "stateNote": {
        "visual": "Sauce glazes slices without steaming; no pooling or clumping.",
        "visualZh": "酱汁薄裹不积水，不结块不返潮。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "medium",
        "signal": "Potatoes sizzle softly and emit a savory, roasted scent.",
        "signalZh": "土豆轻滋滋作响，散发咸鲜烘烤香。"
      }
    }
  ],
  "tips": [
    "Don’t skip soaking — it removes excess starch and prevents sticking.",
    "For authentic texture, use a wok, not a flat skillet — curved shape concentrates heat.",
    "Leftovers re-crisp beautifully in a toaster oven at 180°C (350°F) for 4 minutes."
  ],
  "tipsZh": [
    "浸泡不可省——去多余淀粉，防粘锅。",
    "追求地道口感？务必用炒锅而非平底锅——弧形聚热更均匀。",
    "剩菜复脆：烤箱/空气炸锅 180°C 烤 4 分钟，酥如初。"
  ],
  "relatedSlugs": [
    "dry-pot-cauliflower"
  ],
  "image": "/images/recipes/dry-pot-potato-slices.webp"
};
