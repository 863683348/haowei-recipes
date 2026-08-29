import type { Recipe } from "@/lib/types";

/** Pickled Beans Stir-Fried with Pork Minced (酸豆角炒肉末) — Seed batch */
export const pickled_beans_pork: Recipe = {
  "id": "suan-dou-jiao-chao-rou-mo",
  "slug": "pickled-beans-pork",
  "titleEn": "Pickled Beans Stir-Fried with Pork Minced",
  "titleZh": "酸豆角炒肉末",
  "pinyin": "suān dòu jiǎo chǎo ròu mò",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Changsha",
  "regionZh": "长沙",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses less oil and no MSG—just fermented tang, umami from pork, and a whisper of garlic. Restaurant versions often add sugar or extra chili oil.",
  "versionNoteZh": "家常版少油无味精，靠酸豆角本味、猪肉鲜香和蒜末提神；餐馆版常加糖或额外辣椒油。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Changsha kept a crock of sour beans fermenting under her kitchen window for over 40 years—she’d pull out a handful every Tuesday to stir-fry with leftover pork trimmings and scallions from the local market. I still use her ratio: 3:1 beans to meat, never more.",
  "storyZh": "我长沙的姑妈在厨房窗台下腌了一坛酸豆角，四十多年没断过——她每周二必捞一把，配上菜市场买来的猪颈肉碎和小葱快炒。我至今沿用她的比例：豆角三份，肉一份，绝不多放。",
  "ingredients": [
    {
      "id": "bd-01",
      "nameEn": "pickled long beans (suan dou jiao)",
      "nameZh": "酸豆角",
      "pinyin": "suān dòu jiǎo",
      "amountMetric": "120 g",
      "amountUS": "1 cup, chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for firm, olive-green beans with mild sour aroma; avoid mushy or overly salty batches. Rinse briefly if very salty.",
      "noteZh": "选质地紧实、呈橄榄绿、微酸清香者；避免软烂或过咸批次。若过咸，快速冲洗即可。"
    },
    {
      "id": "pr-01",
      "nameEn": "pork belly mince",
      "nameZh": "猪五花肉末",
      "pinyin": "zhū wǔ huā ròu mò",
      "amountMetric": "150 g",
      "amountUS": "½ cup loose",
      "category": "protein",
      "pantry": "local",
      "note": "Use 30% fat content for best texture. Ground pork shoulder works if belly unavailable.",
      "noteZh": "建议肥瘦比3:7（约30%脂肪）；若无五花，可用前腿肉末替代。"
    },
    {
      "id": "ar-01",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "3 cloves (15 g)",
      "amountUS": "1 tbsp, minced",
      "category": "produce",
      "pantry": "local",
      "note": "Fresh, pungent cloves only—avoid pre-minced jarred garlic.",
      "noteZh": "必须用新鲜蒜瓣，气味辛辣浓烈；禁用罐装蒜泥。",
      "termKey": "garlic"
    },
    {
      "id": "sc-01",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup, finely sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Use both white and green parts. Slice just before cooking.",
      "noteZh": "葱白葱绿全用；临炒前切。",
      "termKey": "scallion"
    },
    {
      "id": "ss-01",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds salt and umami without darkening color.",
      "noteZh": "提咸提鲜，不加重色泽。",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Rinse pickled beans under cold water for 10 seconds, then squeeze gently to remove excess moisture. Chop into 1 cm pieces.",
      "textZh": "酸豆角冷水冲10秒，轻轻攥干水分，切成1厘米小段。",
      "zhHint": "攥干再切",
      "stateNote": {
        "visual": "Beans look damp but not dripping; texture remains springy.",
        "visualZh": "豆角微潮但不滴水，手感仍具弹性。",
        "timeRef": "10 seconds",
        "timeRefZh": "10秒",
        "signal": "No pooling water on cutting board.",
        "signalZh": "砧板上无积水。"
      }
    },
    {
      "text": "Heat wok over medium-high heat until a drop of water sizzles and evaporates instantly. Add 15 ml (1 tbsp) neutral oil.",
      "textZh": "旺火烧热铁锅，滴水入锅即‘滋啦’爆裂蒸发，倒入15毫升（1汤匙）无味植物油。",
      "zhHint": "锅要烧热",
      "stateNote": {
        "visual": "Oil shimmers faintly with thin wisps of smoke rising.",
        "visualZh": "油面微泛涟漪，有细缕青烟升起。",
        "timeRef": "30–45 seconds",
        "timeRefZh": "30–45秒",
        "heat": "medium-high",
        "signal": "Water droplet dances and vanishes in <1 second.",
        "signalZh": "水珠弹跳并1秒内汽化。"
      }
    },
    {
      "text": "Add pork mince and stir-fry until no pink remains and edges begin to crisp, ~2 minutes. Break up clumps with spatula.",
      "textZh": "下肉末，中大火翻炒至无粉红色、边缘微焦，约2分钟；用锅铲压散结块。",
      "zhHint": "炒至断生微焦",
      "stateNote": {
        "visual": "Meat turns opaque gray-brown; tiny golden flecks appear at edges.",
        "visualZh": "肉色转为不透明灰褐色，边缘出现细小金点。",
        "timeRef": "2 minutes",
        "timeRefZh": "2分钟",
        "heat": "medium-high",
        "signal": "No raw odor; meat crumbles easily when pressed.",
        "signalZh": "无生腥气；按压易碎。"
      }
    },
    {
      "text": "Push meat to side. Add garlic and white parts of scallion to hot oil; stir 15 seconds until fragrant.",
      "textZh": "将肉拨至锅边，在余油中下蒜末和葱白，煸炒15秒至香气迸发。",
      "zhHint": "先爆香葱蒜",
      "stateNote": {
        "visual": "Garlic turns pale gold; oil glistens with aromatic steam.",
        "visualZh": "蒜末呈浅金色；油面蒸腾出辛香热气。",
        "timeRef": "15 seconds",
        "timeRefZh": "15秒",
        "heat": "medium-high",
        "signal": "Aroma rises sharply—no browning yet.",
        "signalZh": "香气骤然升腾，尚未上色。"
      }
    },
    {
      "text": "Add pickled beans. Stir-fry 3 minutes until beans darken slightly and release tangy aroma. Drizzle light soy sauce evenly over surface.",
      "textZh": "下酸豆角，猛火快炒3分钟至颜色略深、酸香扑鼻；沿锅边淋入生抽。",
      "zhHint": "猛火炒香",
      "stateNote": {
        "visual": "Beans deepen to olive-brown; steam carries sharp, clean sourness.",
        "visualZh": "豆角转为深橄榄褐；蒸气中透出清爽酸香。",
        "timeRef": "3 minutes",
        "timeRefZh": "3分钟",
        "heat": "high",
        "signal": "Sour smell intensifies—not fermented off-note, but bright and clean.",
        "signalZh": "酸香明显增强——非馊味，而是清亮爽利之气。"
      }
    }
  ],
  "tips": [
    "Rinse beans *only* if your brand is very salty—most Chinese brands are balanced for stir-frying.",
    "For deeper flavor, toast ½ tsp Sichuan peppercorns in dry wok 30 sec before step 2, then remove before oil.",
    "Serve immediately—the beans soften fast if held."
  ],
  "tipsZh": [
    "仅当所购酸豆角过咸时才冲洗；多数国产品牌已调好咸酸比，可直炒。",
    "追求更醇风味？可在步骤2前干锅焙香½茶匙花椒30秒，取出后再倒油。",
    "务必现炒现吃——久置后豆角会迅速变软失脆。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/pickled-beans-pork.webp"
};
