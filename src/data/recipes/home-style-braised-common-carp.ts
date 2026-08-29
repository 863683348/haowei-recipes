import type { Recipe } from "@/lib/types";

/** Home-Style Braised Common Carp (家常炖鲤鱼) — Seed batch */
export const home_style_braised_common_carp: Recipe = {
  "id": "jia-chang-dun-li-yu",
  "slug": "home-style-braised-common-carp",
  "titleEn": "Home-Style Braised Common Carp",
  "titleZh": "家常炖鲤鱼",
  "pinyin": "jiā cháng dùn lǐ yú",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Jinan",
  "regionZh": "济南",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version skips deep-frying — carp is parboiled first to remove fishiness and set shape, then gently braised with aromatics and minimal sugar.",
  "versionNoteZh": "家庭版不油炸，先焯水去腥定型，再以葱姜蒜与少量糖慢炖，更清爽健康。",
  "tags": [
    "45-min",
    "family-dinner",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Jinan’s Lixia District used a black iron cauldron over a coal brazier — he’d parboil carp with ginger and wine, then braise it slowly while telling stories about the Yellow River floods of ’58.",
  "storyZh": "我济南历下区的爷爷曾用黑铁锅架炭炉炖鲤鱼——先用姜酒焯水，再慢火细煨，边炖边讲1958年黄河发大水的故事。",
  "ingredients": [
    {
      "id": "jc-01",
      "nameEn": "common carp",
      "nameZh": "鲤鱼",
      "pinyin": "lǐ yú",
      "amountMetric": "750 g",
      "amountUS": "1.65 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Whole carp, scaled and gutted; head-on preferred. Substitute: silver carp (600–750 g), skin-on.",
      "noteZh": "整条鲤鱼，已刮鳞去内脏；带头更佳。替代：白鲢（600–750 克），带皮。"
    },
    {
      "id": "jc-02",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "25 g",
      "amountUS": "4 cloves, smashed",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "jc-03",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "40 g",
      "amountUS": "4 stalks, cut into 3-cm pieces",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "jc-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "jc-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "jc-06",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp granulated sugar (substitute)",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Use granulated sugar if rock sugar unavailable — same sweetness, slightly less gloss.",
      "noteZh": "若无冰糖，可用白砂糖等量替代——甜度一致，光泽略减。"
    }
  ],
  "steps": [
    {
      "text": "Rinse carp thoroughly. Rub cavity and skin with 1 tbsp Shaoxing wine and 5 g (1 tsp) salt. Let sit 10 minutes.",
      "textZh": "鲤鱼内外彻底冲洗。用1汤匙绍兴酒和5克（1茶匙）盐搓抹鱼腹及鱼身，静置10分钟。",
      "zhHint": "酒盐腌制去腥",
      "stateNote": {
        "visual": "Surface glistens lightly with moisture, no visible slime",
        "visualZh": "鱼身微润反光，无黏液残留",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Salt crystals dissolve visibly on skin",
        "signalZh": "鱼皮表面盐粒明显溶解"
      }
    },
    {
      "text": "Bring 1.5 L (6¼ cups) water to boil in a large pot. Add 10 g ginger (sliced), remaining Shaoxing wine, and 10 g scallion whites. Gently lower carp into boiling water. Parboil 3 minutes, skimming foam.",
      "textZh": "大锅中烧开1.5升（6¼杯）水，加入10克姜片、剩余绍兴酒及10克葱白段。轻放鲤鱼入沸水，焯烫3分钟，随时撇净浮沫。",
      "zhHint": "姜酒水焯鱼",
      "stateNote": {
        "visual": "Foam rises rapidly, then subsides after 1 min",
        "visualZh": "浮沫先大量涌起，1分钟后渐少",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "White foam forms thickly at surface, then clears",
        "signalZh": "水面聚起厚层白沫，随后逐渐变薄变清"
      }
    },
    {
      "text": "Remove carp with slotted spoon; rinse under cold water to stop cooking and remove residual scum. Pat dry.",
      "textZh": "用漏勺捞出鲤鱼，冷水冲净表面浮沫并降温，再用厨房纸彻底擦干。",
      "zhHint": "冷激 + 擦干",
      "stateNote": {
        "visual": "Fish surface is completely matte and cool to touch",
        "visualZh": "鱼身完全哑光，触之凉爽",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No steam rises from fish when held near face",
        "signalZh": "鱼身靠近面部无热气蒸腾"
      }
    },
    {
      "text": "Heat 15 ml (1 tbsp) oil in a clean pot over medium heat. Sauté garlic and scallion whites until fragrant (1 minute). Place carp on top. Add light soy, rock sugar, and 400 ml (1¾ cups) warm water.",
      "textZh": "洗净锅，中火加热15毫升（1汤匙）油。下蒜瓣与葱白段爆香（1分钟）。将鲤鱼平铺其上，淋入生抽、冰糖，加400毫升（1¾杯）温水。",
      "zhHint": "爆香 + 鱼入锅 + 加水",
      "stateNote": {
        "visual": "Garlic turns pale gold, edges just beginning to color",
        "visualZh": "蒜瓣呈浅金色，边缘初显焦黄",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Aroma fills kitchen within 20 seconds",
        "signalZh": "20秒内满屋飘香"
      }
    },
    {
      "text": "Bring to gentle boil, then cover and simmer on low heat 40 minutes. Uncover, add scallion greens, and reduce sauce 5 minutes until glossy and slightly syrupy.",
      "textZh": "烧开后转最小火，盖盖慢炖40分钟。开盖，撒入葱绿段，中火收汁5分钟至油亮微稠。",
      "zhHint": "小火焖 + 葱绿后放",
      "stateNote": {
        "visual": "Sauce clings to fish in thin, even layer; bubbles pop slowly",
        "visualZh": "酱汁薄而匀地裹住鱼身，气泡缓慢破裂",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "Liquid reduces by ~⅓ and coats spoon smoothly",
        "signalZh": "汤汁减少约三分之一，顺滑挂勺"
      }
    }
  ],
  "tips": [
    "Parboiling removes muddy flavor common in pond-raised carp.",
    "Use a wide, shallow pot so fish lies flat — prevents breaking during simmering.",
    "Add 1 tsp Chinese black vinegar (termKey: chinese-black-vinegar) at the end for brightness."
  ],
  "tipsZh": [
    "焯水可有效去除池塘养殖鲤鱼的土腥味。",
    "选用宽而浅的锅，使鱼身平铺——避免炖煮时碎裂。",
    "出锅前加1茶匙中国陈醋（termKey: chinese-black-vinegar），提香解腻。"
  ],
  "relatedSlugs": [
    "sauce-braised-crucian-carp"
  ],
  "image": "/images/recipes/home-style-braised-common-carp.webp"
};
