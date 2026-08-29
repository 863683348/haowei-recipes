import type { Recipe } from "@/lib/types";

/** Oil-Braised Bamboo Shoots (油焖笋) — Seed batch */
export const oil_braised_bamboo_shoots: Recipe = {
  "id": "oil-braised-bamboo-shoots",
  "slug": "oil-braised-bamboo-shoots",
  "titleEn": "Oil-Braised Bamboo Shoots",
  "titleZh": "油焖笋",
  "pinyin": "yóu mèn sǔn",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Huzhou",
  "regionZh": "湖州",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips sugar syrup — relies on natural sweetness of spring bamboo and caramelized oil for depth.",
  "versionNoteZh": "家常版不熬糖色，靠春笋本甜与油焖焦香成味，清爽不腻。",
  "tags": [
    "30-min",
    "vegetarian",
    "spring"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Grandfather in Huzhou’s Nanxun town kept a bamboo grove behind his courtyard. Every April, he’d dig tender ‘baby bamboo’ shoots at dawn, then braise them in aged rapeseed oil — never soy sauce, he insisted, ‘so the earth speaks.’",
  "storyZh": "湖州南浔的祖父在院后种一片竹林，每年四月拂晓挖‘婴儿笋’，只用陈年菜籽油焖烧——从不放酱油，他说：‘要让泥土自己开口说话。’",
  "ingredients": [
    {
      "id": "bamboo-01",
      "nameEn": "fresh bamboo shoots, peeled and julienned (or canned, rinsed well)",
      "nameZh": "鲜笋（去壳切条）或水煮笋（沥干）",
      "pinyin": "xiān sǔn",
      "amountMetric": "300 g",
      "amountUS": "2 cups",
      "category": "produce",
      "pantry": "local",
      "note": "Fresh: blanch 3 min in salted water first. Canned: rinse thoroughly to remove tin taste.",
      "noteZh": "鲜笋需盐水焯3分钟；罐头笋务必冲净金属味。"
    },
    {
      "id": "oil-02",
      "nameEn": "rapeseed oil (or light olive oil)",
      "nameZh": "菜籽油（或清淡橄榄油）",
      "pinyin": "cài zǐ yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Rapeseed oil preferred for authentic nutty depth",
      "noteZh": "菜籽油更地道，风味醇厚带坚果香"
    },
    {
      "id": "light-soy-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "shaoxing-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sugar-05",
      "nameEn": "granulated sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "8 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat bamboo shoots completely dry. Heat wok over medium-high heat until just smoking. Add oil and swirl to coat.",
      "textZh": "笋条彻底擦干。锅烧至微冒青烟，下油旋匀。",
      "zhHint": "干笋遇热油才易上色",
      "stateNote": {
        "visual": "Oil flows smoothly with thin, even film",
        "visualZh": "油膜薄而均匀，顺锅壁流淌",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium-high",
        "signal": "Thin wisp of smoke rises steadily",
        "signalZh": "细烟持续匀升"
      }
    },
    {
      "text": "Add bamboo shoots in single layer. Press gently with spatula and let sear 2 minutes without stirring — until golden-brown spots appear.",
      "textZh": "笋条平铺入锅，稍压，静置2分钟勿翻动，至底面呈金斑。",
      "zhHint": "一次定型，才有油焖光泽",
      "stateNote": {
        "visual": "Edges curl slightly; underside develops rich amber spots",
        "visualZh": "笋边微翘，底面显琥珀色焦斑",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Faint nutty aroma rises, no burning smell",
        "signalZh": "浮起淡淡坚果香，无焦糊气"
      }
    },
    {
      "text": "Flip all pieces. Sear another 90 seconds. Push to one side of wok.",
      "textZh": "全部翻面，再煎90秒。推至锅边留空位。",
      "zhHint": "单面焦香后翻面，受热更均",
      "stateNote": {
        "visual": "Second side shows uniform light golden color",
        "visualZh": "另一面呈均一浅金色",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium-high",
        "signal": "Slight sizzle resumes upon contact",
        "signalZh": "接触锅底即发出轻微滋滋声"
      }
    },
    {
      "text": "Add Shaoxing wine to center of wok. Let it bubble 15 seconds, then add light soy sauce and sugar. Stir to dissolve sugar.",
      "textZh": "锅中央淋绍酒，爆香15秒；加生抽、糖，搅至糖溶。",
      "zhHint": "酒先激香，再融糖提鲜",
      "stateNote": {
        "visual": "Liquid simmers vigorously with glossy bubbles",
        "visualZh": "汁液剧烈冒泡，泛亮泽",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "high",
        "signal": "Alcohol fumes rise sharply, then soften",
        "signalZh": "酒气先冲后敛"
      }
    },
    {
      "text": "Return all bamboo shoots to center. Toss constantly 1 minute until evenly coated and glossy. Reduce heat to low, cover and steam 3 minutes — until tender-crisp. Uncover and cook 30 seconds to glaze.",
      "textZh": "笋回锅中心，翻匀1分钟至裹亮汁；转小火加盖焖3分钟至脆嫩；开盖收汁30秒即成。",
      "zhHint": "焖是软嫩关键，收是亮泽点睛",
      "stateNote": {
        "visual": "Shiny, lacquered surface coats every piece; no excess liquid",
        "visualZh": "每根笋裹透琥珀亮汁，盘底无余液",
        "timeRef": "4 minutes total (3 + 0.5)",
        "timeRefZh": "共4分钟（焖3分+收30秒）",
        "heat": "low",
        "signal": "Steam condenses lightly on lid, then clears",
        "signalZh": "锅盖凝少量水汽，继而散尽"
      }
    }
  ],
  "tips": [
    "Choose thick, ivory-colored spring bamboo shoots — avoid hollow or fibrous ones.",
    "Do not substitute dark soy sauce — it overwhelms the delicate sweetness.",
    "Serve warm, not hot — flavors bloom at 55°C (131°F)."
  ],
  "tipsZh": [
    "选粗壮、象牙色春笋，避空心或纤维粗者。",
    "禁用老抽——会压住笋的天然清甜。",
    "宜温食（55°C），风味最舒展。"
  ],
  "relatedSlugs": [
    "longjing-shrimp"
  ],
  "image": "/images/recipes/oil-braised-bamboo-shoots.webp"
};
