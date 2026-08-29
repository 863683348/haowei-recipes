import type { Recipe } from "@/lib/types";

/** Cold-Dressed Dried Tofu (Liang Ban Fu Zhu) (凉拌腐竹) — Seed batch */
export const cold_dressed_dried_tofu: Recipe = {
  "id": "liang-ban-fu-zhu",
  "slug": "cold-dressed-dried-tofu",
  "titleEn": "Cold-Dressed Dried Tofu (Liang Ban Fu Zhu)",
  "titleZh": "凉拌腐竹",
  "pinyin": "liang ban fu zhu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses blanched, not raw, dried tofu skin for safety and tenderness — no restaurant-style alkaline soak.",
  "versionNoteZh": "家常版用沸水焯烫腐竹，不使用碱水泡发，更安全、口感柔韧适中。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "My aunt in Shanghai’s Jing’an district always made this on summer evenings — she’d hang the soaked fu zhu over bamboo poles to air-dry just enough so it held its shape when tossed with sesame oil and scallions. She said it reminded her of her mother’s courtyard in the 1960s, where every dish had to be light, quick, and full of texture.",
  "storyZh": "我上海静安区的姑妈总在夏夜做这道菜——她把泡好的腐竹搭在竹竿上稍晾，让口感柔韧不塌；她说这让她想起1960年代母亲院子里的滋味：清爽、快手、富有嚼劲。",
  "ingredients": [
    {
      "id": "fb-01",
      "nameEn": "dried tofu skin (fu zhu)",
      "nameZh": "腐竹",
      "pinyin": "fu zhu",
      "amountMetric": "80 g",
      "amountUS": "1 cup (broken pieces)",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for pale golden, flexible sheets — avoid brittle or yellowed ones.",
      "noteZh": "选淡金色、柔韧有弹性的片状腐竹；避免发脆或泛黄者。"
    },
    {
      "id": "fb-02",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiao cong",
      "amountMetric": "30 g",
      "amountUS": "¼ cup, finely sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Use both white and green parts for layered aroma.",
      "noteZh": "葱白与葱绿都要用，香气更立体。"
    },
    {
      "id": "fb-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "sheng chou",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "fb-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiang you",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "fb-05",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chen cu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Rinse dried tofu skin under cool water, then soak in warm (40°C / 104°F) water for 20 minutes until plump and flexible but still resilient — do not over-soak.",
      "textZh": "腐竹用冷水冲洗后，放入40°C温水中浸泡20分钟，至饱满柔韧但仍有弹性，不可泡软烂。",
      "zhHint": "温水泡发，勿过久",
      "stateNote": {
        "visual": "Fu zhu is ivory-colored, slightly translucent, and bends without breaking.",
        "visualZh": "腐竹呈象牙色，微透光，弯曲不断裂。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "When a piece springs back lightly when pressed between fingers.",
        "signalZh": "手指轻压后能微微回弹。"
      }
    },
    {
      "text": "Bring a small pot of water to a rolling boil, add soaked fu zhu, and blanch for exactly 90 seconds — then drain and rinse immediately under cold running water.",
      "textZh": "另起小锅烧沸水，下泡好的腐竹焯烫90秒，立刻捞出冲凉水。",
      "zhHint": "沸水快焯，保韧度",
      "stateNote": {
        "visual": "Fu zhu turns slightly glossy and tightens in texture.",
        "visualZh": "腐竹表面微亮，质地收紧。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "Water returns to vigorous boil within 10 seconds of adding fu zhu.",
        "signalZh": "下锅后10秒内水重新大沸。"
      }
    },
    {
      "text": "Squeeze gently to remove excess water, then cut into 4-cm batons.",
      "textZh": "轻轻挤干水分，切成4厘米长段。",
      "zhHint": "轻挤不拧，保形态",
      "stateNote": {
        "visual": "No droplets form when held upright; surface feels damp but not wet.",
        "visualZh": "竖立时无水滴，表面微潮不湿。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "A gentle press yields only a few drops — never wring tightly.",
        "signalZh": "轻压仅出几滴水，切勿用力拧绞。"
      }
    },
    {
      "text": "In a mixing bowl, combine light soy sauce, sesame oil, and Chinese black vinegar. Whisk until emulsified.",
      "textZh": "小碗中混合生抽、香油和陈醋，搅匀至乳化。",
      "zhHint": "先调汁，再拌料",
      "stateNote": {
        "visual": "Dressing looks uniformly shiny, no oil separation.",
        "visualZh": "汁液均匀透亮，无油星浮散。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Stirring leaves a thin film on the bowl’s surface.",
        "signalZh": "搅拌后碗壁挂薄层油膜。"
      }
    },
    {
      "text": "Add fu zhu and scallions to the dressing. Toss gently with chopsticks for 1 minute until evenly coated and fragrant.",
      "textZh": "将腐竹与葱段倒入酱汁，用筷子轻拌1分钟，至均匀裹汁、香气四溢。",
      "zhHint": "筷子轻拌，防断碎",
      "stateNote": {
        "visual": "Each piece glistens with a thin, even sheen.",
        "visualZh": "每段腐竹泛匀薄油光。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Fragrance of toasted sesame rises clearly when lifted near nose.",
        "signalZh": "凑近可闻到明显焙香芝麻味。"
      }
    }
  ],
  "tips": [
    "Soaked fu zhu can be refrigerated up to 2 days before blanching — store in sealed container with just enough water to cover.",
    "For extra depth, toast ½ tsp white sesame seeds in dry pan until golden before adding to final toss.",
    "If Chinese black vinegar is unavailable, substitute ½ tsp balsamic vinegar + ½ tsp rice vinegar."
  ],
  "tipsZh": [
    "泡好的腐竹可冷藏保存2天（浸没于清水），密封防干。",
    "加½茶匙白芝麻干锅焙香至微黄，拌入成品增香。",
    "若无陈醋，可用½茶匙意大利黑醋+½茶匙米醋替代。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/cold-dressed-dried-tofu.webp"
};
