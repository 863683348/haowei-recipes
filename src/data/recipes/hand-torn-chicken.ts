import type { Recipe } from "@/lib/types";

/** Hand-Torn Chicken (手撕鸡) — Seed batch */
export const hand_torn_chicken: Recipe = {
  "id": "shou-si-ji",
  "slug": "hand-torn-chicken",
  "titleEn": "Hand-Torn Chicken",
  "titleZh": "手撕鸡",
  "pinyin": "shǒu sī jī",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Shenzhen",
  "regionZh": "深圳",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses pre-poached white cut chicken (from the first recipe) — saves time and guarantees tender, flavorful base without guesswork.",
  "versionNoteZh": "家常版直接复用白斩鸡成品，省时省力，确保肉质软嫩、风味扎实。",
  "tags": [
    "30-min",
    "weeknight",
    "no-cook"
  ],
  "dietary": [
    "none"
  ],
  "story": "My cousin in Shenzhen served this at every summer reunion — she’d tear leftover white cut chicken by hand while chatting, then toss it with sesame oil and chili oil made from Sichuan peppercorns she brought back from Chengdu.",
  "storyZh": "我深圳表姐每逢夏日家庭聚会必做这道菜——边聊天边徒手撕鸡，再淋上她从成都带回的花椒辣椒油和芝麻油。",
  "ingredients": [
    {
      "id": "chicken-01",
      "nameEn": "cooked white cut chicken (from previous recipe)",
      "nameZh": "已煮熟的白斩鸡",
      "pinyin": "yǐ zhǔ shú de bái zhǎn jī",
      "amountMetric": "500 g",
      "amountUS": "18 oz (about 3 cups shredded)",
      "category": "protein",
      "pantry": "local",
      "note": "Use cooled, skin-on chicken for best texture and visual appeal.",
      "noteZh": "建议连皮撕制，口感与卖相俱佳。"
    },
    {
      "id": "light-soy-sauce-02",
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
      "id": "sesame-oil-03",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "garlic-04",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "15 g",
      "amountUS": "3 cloves, finely minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    }
  ],
  "steps": [
    {
      "text": "Using clean hands, pull cooled chicken (with skin) into thin, bite-sized shreds — follow the grain for tenderness.",
      "textZh": "徒手将冷却鸡块（带皮）沿肌理撕成细长条，约1 cm宽，保持纤维完整。",
      "zhHint": "顺纹手撕",
      "stateNote": {
        "visual": "Shreds are long, uniform, and slightly fibrous — not shredded into fluff.",
        "visualZh": "鸡丝细长均匀、略带纤维感，非绒絮状。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "Skin stays intact and glossy on each shred.",
        "signalZh": "每条鸡丝上皮层完整、油亮。"
      }
    },
    {
      "text": "In a medium bowl, whisk together light soy sauce, toasted sesame oil, and minced garlic until aromatic.",
      "textZh": "中碗中混合生抽、香油、蒜末，搅打至香气初显。",
      "zhHint": "调酱至香",
      "stateNote": {
        "visual": "Oil emulsifies slightly; mixture looks glossy and cohesive.",
        "visualZh": "油汁微乳化，整体泛光泽、质地均匀。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Fragrant garlic aroma rises distinctly.",
        "signalZh": "蒜香明显升腾。"
      }
    },
    {
      "text": "Add chicken shreds to the bowl. Toss gently with chopsticks or fingers until evenly coated.",
      "textZh": "将鸡丝倒入碗中，用筷子或手指轻柔翻拌，使酱汁均匀裹附。",
      "zhHint": "轻柔拌匀",
      "stateNote": {
        "visual": "Each shred glistens with a thin, even sheen.",
        "visualZh": "每根鸡丝泛薄而均匀油光。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "signal": "No pooling sauce at bottom of bowl.",
        "signalZh": "碗底无酱汁积聚。"
      }
    },
    {
      "text": "Let marinate at cool room temperature for 10 minutes to allow flavors to penetrate.",
      "textZh": "室温静置腌渍10分钟，让滋味自然沁入。",
      "zhHint": "静置入味",
      "stateNote": {
        "visual": "Chicken appears plumper; surface slightly tacky.",
        "visualZh": "鸡丝略显丰润，表面微黏。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Aroma deepens and becomes nuttier.",
        "signalZh": "香气转为醇厚、微带坚果香。"
      }
    },
    {
      "text": "Transfer to serving plate. Garnish with extra scallion greens and a drizzle of sesame oil.",
      "textZh": "装盘，撒上额外葱绿段，再淋少许香油增亮提香。",
      "zhHint": "装盘点缀",
      "stateNote": {
        "visual": "Glossy, vibrant green and golden-brown contrast on plate.",
        "visualZh": "盘中油亮金褐与鲜翠葱绿形成明快对比。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Oil forms delicate beads on surface.",
        "signalZh": "香油在鸡丝表面凝成细密油珠。"
      }
    }
  ],
  "tips": [
    "Tear chicken while still slightly cool — too cold makes it stiff; too warm makes it slippery.",
    "For extra depth, add ½ tsp Chinese black vinegar (substitute rice vinegar if unavailable).",
    "Best served within 2 hours — texture softens after prolonged marinating."
  ],
  "tipsZh": [
    "鸡块微凉时撕制最佳——过冷则僵硬，过热则滑手。",
    "如需增香，可加½ tsp 陈醋（无陈醋可用米醋替代）。",
    "建议2小时内食用完毕——久置后鸡丝吸汁变软。"
  ],
  "relatedSlugs": [
    "white-cut-chicken",
    "white-cut-chicken-2"
  ],
  "image": "/images/recipes/hand-torn-chicken.webp"
};
