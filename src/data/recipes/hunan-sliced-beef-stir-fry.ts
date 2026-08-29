import type { Recipe } from "@/lib/types";

/** Hunan Sliced Beef Stir-Fry (小炒黄牛肉) — Seed batch */
export const hunan_sliced_beef_stir_fry: Recipe = {
  "id": "xiao-chao-huang-niu-rou",
  "slug": "hunan-sliced-beef-stir-fry",
  "titleEn": "Hunan Sliced Beef Stir-Fry",
  "titleZh": "小炒黄牛肉",
  "pinyin": "xiǎo chǎo huáng niú ròu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Liling",
  "regionZh": "醴陵",
  "difficulty": "medium",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Authentic Liling style uses locally raised yellow cattle beef — lean, dense, and deeply flavorful. We replicate it with grass-fed flank steak and double-wok-heating for true wok hei.",
  "versionNoteZh": "正宗醴陵做法用本地黄牛后腿肉——瘦而紧实、滋味浓烈。我们选用草饲牛腩肉，配合‘双旺火’技法还原锅气。",
  "tags": [
    "30-min",
    "weeknight",
    "beef"
  ],
  "dietary": [
    "none"
  ],
  "story": "At my uncle’s roadside stall in Liling, he’d hand-grind fresh beef on a stone mill every morning, then stir-fry it with home-dried chillies and fermented black beans — I still remember the smell of charred wok and beef fat mixing with morning mist.",
  "storyZh": "在我醴陵舅舅的路边摊，他每天清晨用石磨手碾新鲜牛肉，再配自晒干辣椒与豆豉快炒——至今记得焦锅气、牛油香与晨雾交织的味道。",
  "ingredients": [
    {
      "id": "bn-01",
      "nameEn": "beef flank steak, very thinly sliced (2 mm) against grain",
      "nameZh": "牛腩肉（逆纹切2毫米薄片）",
      "pinyin": "niú nǎn ròu",
      "amountMetric": "200 g",
      "amountUS": "¾ cup (thin slices)",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute sirloin if flank unavailable; freeze 20 min before slicing for clean cuts",
      "noteZh": "若无牛腩，可用西冷替代；切前冷冻20分钟更易切薄"
    },
    {
      "id": "bn-02",
      "nameEn": "fresh red chillies (e.g., Fresno or cayenne), sliced",
      "nameZh": "新鲜红辣椒（如弗雷斯诺或卡宴椒），切段",
      "pinyin": "xīn xiān hóng là jiāo",
      "amountMetric": "100 g",
      "amountUS": "1 cup (sliced)",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute with serrano + ½ tsp dried chilli flakes for depth",
      "noteZh": "可用塞拉诺辣椒+½茶匙干辣椒碎增香"
    },
    {
      "id": "bn-03",
      "nameEn": "fermented black beans (douchi), rinsed and lightly mashed",
      "nameZh": "豆豉（洗净，轻压碎）",
      "pinyin": "dòu chǐ",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for ‘Yue Bei’ or ‘Shaoxing’ brand; omit if unavailable — do NOT substitute with black bean sauce",
      "noteZh": "选‘粤北’或‘绍兴’牌；若无则省略——切勿用黑豆酱替代"
    },
    {
      "id": "bn-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bn-05",
      "nameEn": "ginger, julienned",
      "nameZh": "姜丝",
      "pinyin": "jiāng sī",
      "amountMetric": "8 g",
      "amountUS": "1 tsp (julienned)",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Heat wok over high heat until smoking. Swirl in 1 tbsp oil, then swirl again to coat. Remove and set aside — this is 'first heat' for seasoning.",
      "textZh": "旺火烧锅至冒青烟，淋1汤匙油并快速旋锅润壁，倒出备用——此为‘初热养锅’。",
      "zhHint": "初热养锅",
      "stateNote": {
        "visual": "Oil shimmers violently and forms thin, moving rivulets",
        "visualZh": "油面剧烈晃动，形成细密流动纹路",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Thin blue-white smoke rises continuously",
        "signalZh": "持续升起淡蓝白色烟"
      }
    },
    {
      "text": "Reheat wok to same smoking point. Add beef in single layer; sear 45 seconds without stirring.",
      "textZh": "再次烧锅至冒烟，肉单层下锅，静置煎45秒不翻动。",
      "zhHint": "二次旺火",
      "stateNote": {
        "visual": "Beef edges firm and slightly lift from wok surface",
        "visualZh": "牛肉边缘收紧、微翘离锅",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "Distinct 'hiss' sound as meat hits hot surface",
        "signalZh": "肉触热锅发出清晰‘嘶’声"
      }
    },
    {
      "text": "Flip and stir-fry 30 seconds until 80% cooked. Transfer to plate — do not overcook.",
      "textZh": "翻面再炒30秒至八成熟，盛出——切忌全熟。",
      "zhHint": "八成熟盛出",
      "stateNote": {
        "visual": "Beef turns light brown with faint pink core",
        "visualZh": "牛肉呈浅褐色，中心略带粉红",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Surface moisture evaporates fully",
        "signalZh": "表面水汽完全蒸发"
      }
    },
    {
      "text": "Add 1 tsp fresh oil. Stir in ginger, fresh chillies, and black beans; stir-fry 1 minute until chillies blister and beans sizzle.",
      "textZh": "加1茶匙新油，下姜丝、红椒段、豆豉，煸炒1分钟至椒皮起泡、豆豉噼啪作响。",
      "zhHint": "椒豆同煸",
      "stateNote": {
        "visual": "Chillies darken at edges; beans pop and release earthy aroma",
        "visualZh": "辣椒边缘变深；豆豉迸裂，散发泥土香",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-high",
        "signal": "Aroma shifts from raw to toasted and pungent",
        "signalZh": "气味由生辣转为烘烤辛香"
      }
    },
    {
      "text": "Return beef. Add light soy sauce. Stir-fry 40 seconds on highest heat. Serve immediately with steam rising from hot plate.",
      "textZh": "牛肉回锅，淋入生抽，最大火力翻炒40秒。趁热装盘，热气升腾即上桌。",
      "zhHint": "抢锅淋酱",
      "stateNote": {
        "visual": "Beef glistens with glossy, dark-brown coating; steam billows upward",
        "visualZh": "牛肉裹亮泽深褐色酱汁；热气蒸腾上涌",
        "timeRef": "40 seconds",
        "timeRefZh": "40 秒",
        "heat": "high",
        "signal": "Wok emits sharp, savory fragrance — unmistakably Hunan",
        "signalZh": "锅中迸发浓烈咸鲜香——纯正湘味"
      }
    }
  ],
  "tips": [
    "Freeze beef 20 minutes before slicing — essential for paper-thin, even cuts.",
    "Black beans must be rinsed well to remove excess salt; mash lightly to release umami.",
    "Never add water or broth — dry heat creates signature chewy-tender texture."
  ],
  "tipsZh": [
    "切肉前冷冻20分钟——薄而匀的关键。",
    "豆豉务必洗净去盐，轻压碎以释放鲜味。",
    "全程不加一滴水或高汤——干火爆炒才得韧嫩本味。"
  ],
  "relatedSlugs": [
    "farmhouse-one-bowl-fragrance",
    "chilli-pork"
  ],
  "image": "/images/recipes/hunan-sliced-beef-stir-fry.webp"
};
