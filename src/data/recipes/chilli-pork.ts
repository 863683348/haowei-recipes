import type { Recipe } from "@/lib/types";

/** Hunan Chilli Pork (辣椒炒肉) — Seed batch */
export const chilli_pork: Recipe = {
  "id": "la-jiao-chao-rou",
  "slug": "chilli-pork",
  "titleEn": "Hunan Chilli Pork",
  "titleZh": "辣椒炒肉",
  "pinyin": "là jiāo chǎo ròu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Changsha",
  "regionZh": "长沙",
  "difficulty": "easy",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "True home-style uses thin-sliced lean pork shoulder (not loin) and fresh long green chillies — no bean sprouts or bell peppers, which are restaurant shortcuts.",
  "versionNoteZh": "地道家常版用猪前腿瘦肉薄片（非里脊），配本地长青椒——不加豆芽、彩椒等餐馆速成配料。",
  "tags": [
    "30-min",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Yuhua District taught me this at age 9: he’d slice pork against the grain with a cleaver, then stir-fry it in his blackened wok while humming a Xiang opera tune — always served with steamed rice and pickled mustard greens.",
  "storyZh": "我雨花区的爷爷9岁时教我这道菜：他用菜刀逆纹切猪肉，再在那口熏黑的铁锅里快炒，一边哼着湘剧小调——永远配白米饭和酸辣雪里蕻。",
  "ingredients": [
    {
      "id": "lp-01",
      "nameEn": "pork shoulder, thinly sliced (3 mm), against grain",
      "nameZh": "猪前腿肉（逆纹切3毫米薄片）",
      "pinyin": "zhū qián tuǐ ròu",
      "amountMetric": "220 g",
      "amountUS": "3/4 cup (thin slices)",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute pork loin if shoulder unavailable; marinate 10 min in 1 tsp light soy + 1 tsp Shaoxing wine",
      "noteZh": "若无前腿肉，可用里脊替代；需用1茶匙生抽+1茶匙绍兴酒腌10分钟"
    },
    {
      "id": "lp-02",
      "nameEn": "long green chillies (e.g., Thai or Hungarian wax), sliced diagonally",
      "nameZh": "长青椒（如泰国椒或匈牙利蜡椒），斜切段",
      "pinyin": "cháng qīng jiāo",
      "amountMetric": "180 g",
      "amountUS": "1½ cups (sliced)",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute with jalapeños (seeds removed) for milder heat",
      "noteZh": "怕辣可选去籽的墨西哥哈拉佩纽辣椒"
    },
    {
      "id": "lp-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "12 ml",
      "amountUS": "¾ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "lp-04",
      "nameEn": "garlic, finely minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "10 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "garlic"
    },
    {
      "id": "lp-05",
      "nameEn": "scallions, white and green parts separated, green parts cut into 3-cm lengths",
      "nameZh": "小葱（葱白葱绿分开，葱绿切3厘米段）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "½ cup (green parts)",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Heat wok over high heat until wisps of smoke rise. Add pork in single layer; sear 1 minute without stirring.",
      "textZh": "旺火烧热炒锅至冒青烟，肉平铺入锅，静置煎1分钟不翻动。",
      "zhHint": "单层静煎",
      "stateNote": {
        "visual": "Pork edges curl slightly and develop light caramelization",
        "visualZh": "肉片边缘微卷，出现浅焦糖色",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Audible sizzle becomes steady and loud",
        "signalZh": "滋滋声由弱转强且持续"
      }
    },
    {
      "text": "Stir-fry pork vigorously for 1 more minute until just cooked through (no pink remains). Transfer to a plate.",
      "textZh": "猛火翻炒1分钟至全熟无粉红，盛出备用。",
      "zhHint": "全熟盛出",
      "stateNote": {
        "visual": "Pork turns opaque pale grey with faint sheen",
        "visualZh": "肉片呈不透明浅灰色，泛微光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Meat releases easily from wok surface",
        "signalZh": "肉片轻松脱离锅底"
      }
    },
    {
      "text": "Add 1 tsp oil to same wok. Toss in garlic and scallion whites; stir 10 seconds until aromatic.",
      "textZh": "锅中加1茶匙油，下蒜末与葱白，煸香10秒。",
      "zhHint": "爆香葱蒜",
      "stateNote": {
        "visual": "Garlic softens but stays pale; whites turn translucent",
        "visualZh": "蒜末变软但未上色；葱白变半透明",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "medium-high",
        "signal": "Fragrance lifts immediately",
        "signalZh": "香气即刻升腾"
      }
    },
    {
      "text": "Add green chillies. Stir-fry on high heat for 1½ minutes until blistered and slightly softened but still crisp.",
      "textZh": "下青椒段，大火翻炒1分半钟至表皮起皱、略软但保持脆感。",
      "zhHint": "青椒起皱",
      "stateNote": {
        "visual": "Chillies develop dark green blisters and slight gloss",
        "visualZh": "青椒表面浮现深绿泡点，泛微光",
        "timeRef": "1½ minutes",
        "timeRefZh": "1分半钟",
        "heat": "high",
        "signal": "Edges begin to darken and curl inward",
        "signalZh": "边缘微焦、向内微卷"
      }
    },
    {
      "text": "Return pork to wok. Add light soy sauce. Stir-fry 45 seconds. Finish with scallion greens and serve hot.",
      "textZh": "肉回锅，淋入生抽，猛火翻炒45秒；撒葱绿段，即刻出锅。",
      "zhHint": "淋酱抢锅",
      "stateNote": {
        "visual": "All ingredients glisten with unified, light-brown sheen",
        "visualZh": "所有食材裹匀浅褐色油亮光泽",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "Wok emits audible 'pop' as sauce hits hot surface",
        "signalZh": "酱汁遇热锅发出清脆‘啪’声"
      }
    }
  ],
  "tips": [
    "Slice pork while partially frozen — easier, thinner, more uniform.",
    "Never rinse chillies after slicing; residual moisture helps create steam and tenderize.",
    "Serve within 2 minutes — this dish loses its crisp-tender magic fast."
  ],
  "tipsZh": [
    "猪肉半冻时切——更易切薄、均匀。",
    "青椒切后勿冲洗，表面水分有助蒸汽生成与脆嫩平衡。",
    "出锅2分钟内上桌——此菜‘脆中带韧’的精华稍纵即逝。"
  ],
  "relatedSlugs": [
    "farmhouse-one-bowl-fragrance"
  ],
  "image": "/images/recipes/chilli-pork.webp"
};
