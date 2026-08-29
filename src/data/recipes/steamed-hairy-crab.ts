import type { Recipe } from "@/lib/types";

/** Steamed Hairy Crab (清蒸大闸蟹) — Seed batch */
export const steamed_hairy_crab: Recipe = {
  "id": "qing-zheng-da-zhai-xie",
  "slug": "steamed-hairy-crab",
  "titleEn": "Steamed Hairy Crab",
  "titleZh": "清蒸大闸蟹",
  "pinyin": "qīng zhēng dà zhá xiè",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Suzhou",
  "regionZh": "苏州",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses minimal seasoning to highlight the crab’s natural sweetness and umami — no soy or vinegar dip served at the table, just a small dish of ginger-vinegar sauce on the side.",
  "versionNoteZh": "家常版仅用最简调味，突出蟹肉本味鲜甜；不直接淋酱，仅配一小碟姜醋汁蘸食。",
  "tags": [
    "30-min",
    "special-occasion",
    "seafood"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Suzhou still steams crabs in a bamboo basket over boiling water every Mid-Autumn Festival — she says her mother taught her to tie each crab belly-up with cotton string so the roe stays sealed inside. We eat them bare-handed, cracking shells with chopsticks and sipping warm chrysanthemum tea.",
  "storyZh": "我苏州的姑妈每逢中秋节仍用竹蒸笼清蒸大闸蟹——她说母亲教她用棉线将每只蟹腹朝上捆扎，这样蟹黄不会流失。我们徒手剥食，用筷子敲开蟹壳，配着温热的菊花茶。",
  "ingredients": [
    {
      "id": "crab-01",
      "nameEn": "live hairy crab (female, ~150 g each)",
      "nameZh": "鲜活母大闸蟹（约150克/只）",
      "pinyin": "xiān huó mǔ dà zhá xiè",
      "amountMetric": "4 pcs",
      "amountUS": "4 crabs",
      "category": "protein",
      "pantry": "local",
      "note": "Look for deep orange-red shell, plump abdomen, and firm, heavy feel. Substitute: live blue crab (smaller, less roe) if unavailable.",
      "noteZh": "选深橙红色蟹壳、腹部饱满、手感沉实者。替代：鲜活青蟹（个头较小，膏少）。"
    },
    {
      "id": "crab-02",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "crab-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "crab-04",
      "nameEn": "Chinese black vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Rinse crabs under cold running water; use a soft brush to gently scrub shells and legs. Pat dry with paper towels.",
      "textZh": "冷水冲洗大闸蟹，用软毛刷轻刷蟹壳与蟹脚；沥干后用厨房纸吸去表面水分。",
      "zhHint": "刷净、擦干",
      "stateNote": {
        "visual": "Crabs are clean, shiny, and free of visible debris.",
        "visualZh": "蟹体洁净发亮，无泥沙附着。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No grit remains when rubbing shell with thumb.",
        "signalZh": "拇指轻搓蟹壳无砂砾感。"
      }
    },
    {
      "text": "Grate 20 g ginger (reserve remaining 10 g). Place crabs belly-up on a heatproof plate. Tuck 1 tsp grated ginger and ½ tsp Shaoxing wine into the cavity of each crab.",
      "textZh": "取20克姜切末（余下10克留用），将蟹腹朝上摆于耐热盘中，每只蟹脐盖内塞入1茶匙姜末和½茶匙绍兴酒。",
      "zhHint": "腹朝上，姜酒入脐",
      "stateNote": {
        "visual": "Ginger is evenly distributed in the crab's abdominal cavity.",
        "visualZh": "姜末均匀填入蟹腹腔内。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Crab legs remain tightly tucked, not splayed.",
        "signalZh": "蟹腿自然收拢，未散开。"
      }
    },
    {
      "text": "Bring a wok or large pot with 5 cm water to a vigorous boil over high heat. Place crabs on a bamboo steamer lined with cabbage leaves (to prevent sticking), then set steamer over wok.",
      "textZh": "炒锅或深锅加水至5厘米高，大火烧沸；竹蒸笼垫卷心菜叶防粘，放入蟹后覆于锅口。",
      "zhHint": "水沸再上笼",
      "stateNote": {
        "visual": "Water bubbles vigorously; steam rises thick and white.",
        "visualZh": "水面剧烈沸腾，白雾状蒸汽升腾。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "high",
        "signal": "Steam escapes steadily from lid edges.",
        "signalZh": "锅盖边缘持续稳定冒汽。"
      }
    },
    {
      "text": "Cover and steam over high heat for 15 minutes for 150 g crabs (add 2 minutes per additional 25 g). Do not lift lid during steaming.",
      "textZh": "盖严盖子，大火蒸15分钟（150克蟹）；每增加25克增蒸2分钟。全程勿揭盖。",
      "zhHint": "全程勿开盖",
      "stateNote": {
        "visual": "Crab shells turn bright orange-red, and roe becomes opaque golden-yellow.",
        "visualZh": "蟹壳转为鲜亮橙红，蟹黄呈不透明金黄色。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "high",
        "signal": "A rich, sweet-crustacean aroma fills the kitchen.",
        "signalZh": "厨房弥漫浓郁清甜蟹香。"
      }
    },
    {
      "text": "Meanwhile, make ginger-vinegar sauce: finely mince remaining 10 g ginger, mix with black vinegar and a pinch of white pepper. Serve alongside hot crabs.",
      "textZh": "另取10克姜切极细末，与香醋、少许白胡椒粉拌匀，作蘸汁随蟹上桌。",
      "zhHint": "现拌姜醋汁",
      "stateNote": {
        "visual": "Sauce is pale amber with visible ginger flecks.",
        "visualZh": "酱汁呈浅琥珀色，浮有细姜粒。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Ginger aroma is sharp and clean, not cooked.",
        "signalZh": "姜味清新辛香，未经加热。"
      }
    }
  ],
  "tips": [
    "Always steam crabs belly-up to retain roe and juices.",
    "Use only female crabs in autumn (Sept–Nov) for maximum roe.",
    "Never reheat steamed crab — serve immediately while hot."
  ],
  "tipsZh": [
    "务必腹朝上蒸，锁住蟹黄与汁水。",
    "秋季（9–11月）选用母蟹，膏满黄肥。",
    "清蒸蟹不可回锅复热，须趁热食用。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/steamed-hairy-crab.webp"
};
