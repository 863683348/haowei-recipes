import type { Recipe } from "@/lib/types";

/** Sizzling Iron-Plate Squid (铁板鱿鱼) — Seed batch */
export const sizzling_iron_plate_squid: Recipe = {
  "id": "tie-ban-you-yu",
  "slug": "sizzling-iron-plate-squid",
  "titleEn": "Sizzling Iron-Plate Squid",
  "titleZh": "铁板鱿鱼",
  "pinyin": "tie ban you yu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Qingdao",
  "regionZh": "青岛",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips deep-frying—squid is briefly blanched then stir-seared on hot iron plate with minimal oil and quick-cooked aromatics, preserving tenderness.",
  "versionNoteZh": "家常版不油炸，先焯水再铁板快煸，少油重火候，保持鱿鱼脆嫩。",
  "tags": [
    "30-min",
    "weeknight",
    "sizzling"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle ran a seafood stall near Qingdao’s Badaguan park in the ’90s. He’d toss cleaned squid onto a scorching iron plate with garlic and scallions—'The sizzle must sound like rain on a tin roof,' he’d say—and serve it straight onto warmed plates so the crust crackled for 90 seconds.",
  "storyZh": "上世纪90年代，我舅舅在青岛八大关公园旁卖海鲜。他把处理好的鱿鱼扔上烧红铁板，加蒜末葱花爆炒——‘滋啦声要像雨打铁皮’，盛盘时还烫得盘边冒烟，脆壳能响足90秒。",
  "ingredients": [
    {
      "id": "sq-01",
      "nameEn": "cleaned squid tubes and tentacles",
      "nameZh": "去内脏鱿鱼筒及须",
      "pinyin": "qu nei zang you yu tong ji xu",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz (about 2 medium squid)",
      "category": "protein",
      "pantry": "local",
      "note": "Frozen pre-cleaned squid is widely available; rinse thoroughly and pat dry.",
      "noteZh": "冷冻预处理鱿鱼常见；彻底冲洗并吸干水分。"
    },
    {
      "id": "sq-02",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "da suan",
      "amountMetric": "15 g",
      "amountUS": "3 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "note": "Use fresh garlic—jarred paste lacks volatile oils for sizzle.",
      "noteZh": "必须用鲜蒜，瓶装蒜蓉失挥发油，难出锅气。",
      "termKey": "garlic"
    },
    {
      "id": "sq-03",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiao cong",
      "amountMetric": "40 g",
      "amountUS": "3 stalks, cut into 3-cm lengths",
      "category": "produce",
      "pantry": "local",
      "note": "Separate white and green parts—white goes in first, green at end.",
      "noteZh": "葱白葱绿分切，白段先下，绿段最后放。",
      "termKey": "scallion"
    },
    {
      "id": "sq-04",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "pinyin": "liao jiu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry if Chinese cooking wine unavailable.",
      "noteZh": "无料酒可用干雪莉酒替代。",
      "termKey": "cooking-wine"
    }
  ],
  "steps": [
    {
      "text": "Bring 1 L water to boil in a pot. Add 1 tsp salt and squid. Blanch 45 seconds only—remove immediately and plunge into ice water. Drain well and pat completely dry.",
      "textZh": "锅中烧沸1升水，加1茶匙盐，下鱿鱼焯45秒即捞出，浸冰水。沥干并彻底擦干。",
      "zhHint": "短焯+冰镇+擦干",
      "stateNote": {
        "visual": "Squid curls tightly and turns opaque white-pink, not gray or rubbery.",
        "visualZh": "鱿鱼卷曲紧实，呈不透明粉白色，不灰暗、不橡皮状。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "Edges begin to curl upward within 20 seconds.",
        "signalZh": "20秒内边缘明显上翘卷曲。"
      }
    },
    {
      "text": "Heat a cast-iron skillet or flat griddle over high heat until smoking lightly (2–3 minutes). Swirl in 1 tbsp neutral oil.",
      "textZh": "铸铁锅或平底铁板大火烧至微冒青烟（2–3分钟），旋入1汤匙无味油。",
      "zhHint": "铁板烧烟+旋油",
      "stateNote": {
        "visual": "Oil shimmers and forms thin, fast-moving ripples.",
        "visualZh": "油面泛光，形成细密快速流动的波纹。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "high",
        "signal": "A drop of water dances and evaporates instantly on contact.",
        "signalZh": "滴水入锅即弹跳汽化。"
      }
    },
    {
      "text": "Add white parts of scallions and minced garlic. Stir-fry 15 seconds until fragrant but not browned.",
      "textZh": "下葱白和蒜末，大火煸炒15秒至出香但未焦黄。",
      "zhHint": "葱白蒜末快煸",
      "stateNote": {
        "visual": "Garlic pieces turn glossy and release visible aromatic steam.",
        "visualZh": "蒜粒油亮，散发可见香气白汽。",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "high",
        "signal": "Fragrance fills kitchen within 8 seconds.",
        "signalZh": "8秒内满屋飘香。"
      }
    },
    {
      "text": "Add squid and 2 tsp cooking wine. Toss constantly over high heat for 60–75 seconds until edges crisp and center remains springy.",
      "textZh": "下鱿鱼和2茶匙料酒，全程大火猛颠60–75秒，至边缘微脆、中心仍弹牙。",
      "zhHint": "猛火快颠+控时",
      "stateNote": {
        "visual": "Squid develops golden-brown speckles at edges while staying plump.",
        "visualZh": "鱿鱼边缘呈金褐斑点，整体仍饱满。",
        "timeRef": "60–75 seconds",
        "timeRefZh": "60–75 秒",
        "heat": "high",
        "signal": "Sizzle becomes rapid, continuous, and slightly higher-pitched.",
        "signalZh": "滋啦声变急促连贯、音调略高。"
      }
    },
    {
      "text": "Remove from heat. Immediately add green scallion parts and toss once. Serve sizzling-hot directly from pan onto pre-warmed plates.",
      "textZh": "离火即撒葱绿，轻翻一次。趁铁板嘶鸣未歇，盛入预热盘中上桌。",
      "zhHint": "离火撒葱+热盘",
      "stateNote": {
        "visual": "Green scallions retain vivid color; steam rises vigorously from plate.",
        "visualZh": "葱绿鲜亮不蔫；盘中白汽升腾不止。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Sizzle continues for ≥60 seconds on plate.",
        "signalZh": "盘中持续嘶鸣≥60秒。"
      }
    }
  ],
  "tips": [
    "Never overcrowd the pan—cook in batches if needed.",
    "For authentic street texture, score squid tubes diagonally in a crosshatch pattern before blanching.",
    "Serve with warm mantou or plain steamed rice to soak up juices."
  ],
  "tipsZh": [
    "切勿堆叠，量大需分批炒。",
    "追求市井口感，可在焯水前对鱿鱼筒做菱形花刀。",
    "配热馒头或白米饭吸汁更佳。"
  ],
  "relatedSlugs": [
    "tin-foil-grilled-fish"
  ],
  "image": "/images/recipes/sizzling-iron-plate-squid.webp"
};
