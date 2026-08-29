import type { Recipe } from "@/lib/types";

/** Cantonese-Style Char Siu Roast Pork (叉烧肉) — Seed batch */
export const char_siu_pork: Recipe = {
  "id": "char-siu-pork",
  "slug": "char-siu-pork",
  "titleEn": "Cantonese-Style Char Siu Roast Pork",
  "titleZh": "叉烧肉",
  "pinyin": "chā shāo ròu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "This is the home version—no red food coloring, no commercial maltose glaze. We use honey and light soy sauce for depth and shine, just like Aunt Mei did in her Liwan District kitchen.",
  "versionNoteZh": "这是家常版本——不添加红曲色素，也不用市售麦芽糖浆。我们用蜂蜜和生抽调出醇厚光泽，就像广州荔湾的梅姨厨房里那样。",
  "tags": [
    "weeknight",
    "grill-oven",
    "make-ahead"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Guangzhou’s Xiguan neighborhood marinated pork belly every Sunday before heading to the temple fair. He’d hang the strips on bamboo rods over a charcoal brazier—smoke curling into the humid air—while I watched from the balcony, waiting for that sweet-savory scent to mean dinner was coming.",
  "storyZh": "我在广州西关的舅舅每个周日都会腌好五花肉，再拿到庙会前的炭火炉上烤。他把肉条挂在竹竿上，青烟袅袅升入湿热空气，我总在阳台踮脚张望，只等那股甜咸香气一飘来，就知道晚饭快好了。",
  "ingredients": [
    {
      "id": "cs-01",
      "nameEn": "pork shoulder (boneless, trimmed)",
      "nameZh": "猪梅肉（去骨去筋）",
      "pinyin": "zhū méi ròu",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Choose well-marbled cuts—fat renders and keeps meat tender during roasting.",
      "noteZh": "选肥瘦相间、纹理清晰的梅肉，脂肪在烘烤中融化，让肉质柔嫩多汁。"
    },
    {
      "id": "cs-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cs-03",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "pinyin": "fēng mì",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Substitute with maple syrup if unavailable (slightly less glossy finish).",
      "noteZh": "如无蜂蜜，可用枫糖浆替代（光泽略减）。"
    },
    {
      "id": "cs-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cs-05",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wǔ xiāng fěn",
      "amountMetric": "2 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    }
  ],
  "steps": [
    {
      "text": "Cut pork into 2.5 cm thick × 5 cm wide strips. Pat dry thoroughly with paper towels.",
      "textZh": "将猪肉切成2.5厘米厚、5厘米宽的长条，用厨房纸彻底吸干表面水分。",
      "zhHint": "擦干是上色关键"
    },
    {
      "text": "In a bowl, whisk together light soy sauce, honey, Shaoxing wine, and five-spice powder until smooth. Add pork strips and massage marinade into each piece. Cover and refrigerate at least 8 hours (overnight preferred).",
      "textZh": "碗中混合生抽、蜂蜜、绍酒和五香粉，搅匀成酱汁；放入肉条，充分揉捏按摩，盖保鲜膜冷藏至少8小时（隔夜更佳）。",
      "zhHint": "揉匀入味"
    },
    {
      "text": "Preheat oven to 200°C (390°F). Line a wire rack over a baking sheet with foil. Arrange marinated pork in a single layer, reserving marinade.",
      "textZh": "烤箱预热至200°C（390°F）；烤盘铺锡纸，放烤架，将腌好的肉条单层码放其上，酱汁另留。",
      "zhHint": "单层摆放防蒸煮"
    },
    {
      "text": "Roast pork for 20 minutes. Flip strips, brush generously with reserved marinade, then roast another 15 minutes.",
      "textZh": "先烤20分钟；翻面，刷上预留酱汁，再烤15分钟。",
      "zhHint": "中途刷酱增亮"
    },
    {
      "text": "Increase oven temperature to 220°C (425°F). Brush again with marinade and roast 5–7 more minutes until surface is deeply caramelized and slightly blistered.",
      "textZh": "调高烤箱至220°C（425°F），再刷一次酱汁，继续烤5–7分钟，至表面深棕焦糖化、微起泡。",
      "zhHint": "最后高温上色",
      "stateNote": {
        "visual": "Glossy, mahogany-brown surface with tiny amber bubbles",
        "visualZh": "油亮深棕色表面，泛起细小琥珀色气泡",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "heat": "high",
        "signal": "Edges curl slightly and emit rich, toasted-sugar aroma",
        "signalZh": "边缘微卷，散发焦糖与肉香交织的气息"
      }
    }
  ],
  "tips": [
    "For best texture, chill marinated pork 15 minutes before roasting—it helps sear cleanly.",
    "Leftover char siu freezes beautifully for up to 3 months; slice thin and stir-fry with broccoli or rice.",
    "If your oven runs hot, reduce final high-heat stage by 2 minutes to avoid burning."
  ],
  "tipsZh": [
    "烤前冷藏腌肉15分钟，利于表面快速锁汁定型。",
    "剩叉烧冷冻可存3个月；解冻后切薄片，快炒西兰花或拌饭极香。",
    "若烤箱偏热，最后高温阶段减2分钟，防止焦糊。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/char-siu-pork.webp"
};
