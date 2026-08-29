import type { Recipe } from "@/lib/types";

/** Shanghai-Style Pan-Fried Soup Dumplings (Shengjian) (上海生煎包) — Seed batch */
export const shanghai_shengjian_bao: Recipe = {
  "id": "shengjian-bao-shanghai",
  "slug": "shanghai-shengjian-bao",
  "titleEn": "Shanghai-Style Pan-Fried Soup Dumplings (Shengjian)",
  "titleZh": "上海生煎包",
  "pinyin": "shàng hǎi shēng jiān bāo",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "hard",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses store-bought high-gluten flour and simplified broth gelatin technique—no need for homemade aspic. Texture stays juicy, not runny.",
  "versionNoteZh": "家常版用市售高筋面粉+简易冻胶法替代传统肉皮冻，汁水丰盈不流泻。",
  "tags": [
    "90-min",
    "weekend",
    "special-occasion"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather ran a small shengjian stall near Yuyuan Garden in the 1950s—he taught me to test dough elasticity by stretching a small piece until translucent, whispering, 'If you see the streetlights through it, it’s ready.'",
  "storyZh": "我祖父上世纪50年代在豫园附近摆生煎小摊，他教我拉一小块面团扯到透光，轻声说：‘能看见街灯影儿，这面就到了。’",
  "ingredients": [
    {
      "id": "sj-01",
      "nameEn": "high-gluten flour (bread flour)",
      "nameZh": "高筋面粉（面包粉）",
      "pinyin": "gāo jīn miàn fěn",
      "amountMetric": "300 g",
      "amountUS": "2 ½ cups",
      "category": "staple",
      "pantry": "local",
      "note": "Substitute: 270g all-purpose + 30g vital wheat gluten (mix well before adding water)",
      "noteZh": "替换：270克中筋粉 + 30克谷朊粉（先混匀再加水）"
    },
    {
      "id": "sj-02",
      "nameEn": "pork aspic (broth gelatin), finely minced",
      "nameZh": "猪肉冻（高汤凝冻），切细粒",
      "pinyin": "zhū ròu dòng",
      "amountMetric": "150 g",
      "amountUS": "¾ cup finely diced",
      "category": "protein",
      "pantry": "asian",
      "note": "Make ahead: Simmer pork bones + skin 6h, chill overnight. Or buy pre-made ‘shengjian aspic’ at Asian grocers.",
      "noteZh": "提前制作：猪骨+猪皮炖6小时，冷藏过夜凝冻；或购亚洲超市‘生煎冻’"
    },
    {
      "id": "sj-03",
      "nameEn": "scallions, finely chopped",
      "nameZh": "小葱末",
      "pinyin": "xiǎo cōng mò",
      "amountMetric": "30 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sj-04",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Mix flour and 180 ml warm water (40°C) to form shaggy dough. Knead 10 minutes until smooth and elastic. Cover and rest 45 minutes.",
      "textZh": "将面粉与180毫升温水（40°C）混合成絮状，揉面10分钟至光滑有弹性，盖湿布醒发45分钟。",
      "zhHint": "揉至光滑，盖布醒发"
    },
    {
      "text": "Combine pork aspic, scallions, white pepper, and 5 ml light soy sauce. Chill mixture 20 minutes so fat firms up.",
      "textZh": "将猪肉冻、葱末、白胡椒粉和5毫升生抽拌匀，冷藏20分钟使冻粒变硬。",
      "zhHint": "拌馅后冷藏定型"
    },
    {
      "text": "Divide dough into 16 equal pieces (≈25 g each). Roll each into 10 cm circle, place 15 g filling in center, pleat 16–18 times, pinch sealed. Rest 10 minutes.",
      "textZh": "将面团分16等份（每份约25克），擀成直径10厘米圆皮，包入15克馅，捏16–18褶，收口朝下，静置10分钟。",
      "zhHint": "16–18褶，收口朝下静置"
    },
    {
      "text": "Heat 20 ml oil in heavy skillet over medium heat. Arrange buns seam-side down. Fry 3 minutes until bottoms lightly golden.",
      "textZh": "厚底锅中火加热20毫升油，生煎包收口朝下码入，煎3分钟至底部微黄。",
      "zhHint": "收口朝下，煎至微黄",
      "stateNote": {
        "visual": "Edges of buns begin to puff slightly; bottoms show faint golden lattice",
        "visualZh": "包子边缘微微鼓起；底部初现淡金网纹",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Faint sizzle becomes steady, not aggressive",
        "signalZh": "滋滋声由弱转稳，非暴烈"
      }
    },
    {
      "text": "Add 180 ml cold water, cover immediately, and steam 8 minutes. Uncover, cook uncovered 3–4 minutes until water gone and bottoms deeply golden and crisp. Sprinkle with sesame seeds and scallions.",
      "textZh": "沿锅边淋入180毫升冷水，立刻盖盖焖蒸8分钟。揭盖，无盖煎3–4分钟至水干、底色深金酥脆，撒熟芝麻与葱花。",
      "zhHint": "淋水焖蒸，收干至深金脆底",
      "stateNote": {
        "visual": "Steam surges when lid lifted; bottom crust develops dark amber spots",
        "visualZh": "揭盖时蒸汽喷涌；脆底浮现深琥珀色斑点",
        "timeRef": "8 minutes covered + 3–4 minutes uncovered",
        "timeRefZh": "盖盖焖8分钟 + 开盖煎3–4分钟",
        "heat": "medium-low",
        "signal": "Water sputters violently then falls silent",
        "signalZh": "水声由爆裂转寂静"
      }
    }
  ],
  "tips": [
    "Aspic must be chilled solid before chopping—warm fat melts and leaks during frying.",
    "Don’t overcrowd pan: buns need space to steam evenly and crisp separately.",
    "Serve with black vinegar and ginger slivers—never soy sauce, which overwhelms the delicate broth."
  ],
  "tipsZh": [
    "肉冻必须彻底冷藏凝固后再切粒，温热会化油漏汁。",
    "切勿挤满锅：包子需留空隙，才能均匀受汽、独立酥脆。",
    "配陈醋+姜丝食用，禁用酱油，会掩盖清鲜汤汁。"
  ],
  "relatedSlugs": [
    "shanghai-style-guotie"
  ],
  "image": "/images/recipes/shanghai-shengjian-bao.webp"
};
