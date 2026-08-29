import type { Recipe } from "@/lib/types";

/** Scallion Oil Thin Pancake (葱油薄饼) — Seed batch */
export const cong_you_bao_bing: Recipe = {
  "id": "cong-you-bao-bing",
  "slug": "cong-you-bao-bing",
  "titleEn": "Scallion Oil Thin Pancake",
  "titleZh": "葱油薄饼",
  "pinyin": "cōng yóu bó bǐng",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Unlike restaurant versions with laminated fat layers, this omits lard and uses only toasted sesame oil — lighter, crisper, and achievable with one bowl and one pan.",
  "versionNoteZh": "区别于餐馆版的猪油起酥，本版仅用烤香芝麻油，更清爽酥脆，一盆一锅即可完成。",
  "tags": [
    "30-min",
    "vegetarian",
    "weeknight"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Shanghai’s French Concession made these every rainy afternoon. She kept a jar of toasted sesame oil infused with scallion trimmings — ‘the secret breath of the pancake,’ she called it.",
  "storyZh": "我上海法租界的小姨每逢雨天午后必做此饼。她常年存着一罐用葱头熬的香油——‘饼的灵魂呼吸’，她总这么说。",
  "ingredients": [
    {
      "id": "cb-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "200 g",
      "amountUS": "1 2/3 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Standard all-purpose flour works best — no substitutions needed.",
      "noteZh": "普通中筋面粉效果最佳，无需替换。"
    },
    {
      "id": "cb-02",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cb-03",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "40 g",
      "amountUS": "1/3 cup, finely chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cb-04",
      "nameEn": "boiling water",
      "nameZh": "沸水",
      "pinyin": "fèi shuǐ",
      "amountMetric": "120 ml",
      "amountUS": "1/2 cup",
      "category": "other",
      "pantry": "local",
      "note": "Water must be freshly boiled — not just hot — to properly gelatinize starch for tenderness.",
      "noteZh": "必须是现烧沸水（非保温壶热水），才能充分糊化淀粉，成就柔韧口感。"
    }
  ],
  "steps": [
    {
      "text": "Pour boiling water into flour in a heatproof bowl. Stir with chopsticks until shaggy clumps form. Add remaining cool water (30 ml) gradually, kneading into soft, pliable dough. Rest 15 minutes covered.",
      "textZh": "沸水冲入面粉，用筷子搅成絮状；再逐次加入30ml凉水，揉成柔软可拉伸面团，盖湿布醒发15分钟。",
      "zhHint": "烫面+凉水面，柔韧不粘",
      "stateNote": {
        "visual": "Dough is cohesive but leaves slight residue on fingers — not sticky, not dry.",
        "visualZh": "面团成团，手指略沾粉但不粘手，也不干裂。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Surface feels uniformly moist, no dry patches.",
        "signalZh": "表面湿润均匀，无干粉斑。"
      }
    },
    {
      "text": "Roll dough into 20-cm round. Brush evenly with 15 ml sesame oil, then scatter scallions. Roll tightly into log, coil into spiral, then flatten gently into 15-cm disc.",
      "textZh": "将面团擀成20厘米圆饼，均匀刷15ml香油，撒满葱花；卷成细长条，盘成蜗牛状，再轻轻压扁成15厘米圆饼。",
      "zhHint": "卷得越紧，层次越多",
      "stateNote": {
        "visual": "Spiral layers visible at edge; surface glistens with oil and green flecks.",
        "visualZh": "边缘可见螺旋层纹；表面油润泛光，缀点点翠绿。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Coil holds shape without unrolling when lifted.",
        "signalZh": "提起时不松散、不回弹。"
      }
    },
    {
      "text": "Heat a nonstick skillet over medium heat. Cook pancake 2 minutes per side, pressing gently with spatula to encourage even browning and layer separation.",
      "textZh": "不粘锅中火加热，烙饼每面2分钟，用铲背轻压助其均匀上色、层次分离。",
      "zhHint": "压时从中心向外推",
      "stateNote": {
        "visual": "Golden-brown spots bloom across surface; edges lift slightly.",
        "visualZh": "表面绽开金棕色斑点，边缘微微翘起。",
        "timeRef": "2 minutes per side",
        "timeRefZh": "每面2分钟",
        "heat": "medium",
        "signal": "Faint nutty aroma rises; underside sounds crisp when tapped.",
        "signalZh": "飘出淡淡坚果香；轻叩底面有脆响。"
      }
    },
    {
      "text": "Reduce heat to low. Drizzle remaining 15 ml sesame oil around rim of pancake. Cook 60 seconds more — oil will sizzle and seep into layers.",
      "textZh": "转小火，沿饼边淋入剩余15ml香油，再烙60秒——油会滋滋作响并渗入层间。",
      "zhHint": "油要淋在锅边，借热气熏入",
      "stateNote": {
        "visual": "Oil pools in ridges between layers; surface darkens to rich amber.",
        "visualZh": "油聚于层间沟壑；表面转为浓郁琥珀色。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "low",
        "signal": "Oil stops sizzling actively and begins to shimmer steadily.",
        "signalZh": "油声由爆裂转为持续微 shimmer 光泽。"
      }
    },
    {
      "text": "Transfer to cutting board. Let rest 1 minute — this firms layers. Slice into 6 wedges and serve warm, with extra scallions on the side.",
      "textZh": "移至砧板静置1分钟——让层次定型。切成6块，配额外葱花同上。",
      "zhHint": "静置是酥脆关键",
      "stateNote": {
        "visual": "Steam rises steadily; layers separate cleanly when cut with serrated knife.",
        "visualZh": "热气匀速上升；锯齿刀切下，层次分明不粘连。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Outer edge cools just enough to hold shape without crumbling.",
        "signalZh": "外缘微凉，持形不散。"
      }
    }
  ],
  "tips": [
    "Toast raw sesame oil in a small pan over low heat for 2 minutes before using — deepens flavor without burning.",
    "For extra crispness, brush top with oil before final rest — creates a lacquer-like finish.",
    "Store uncooked dough balls wrapped in parchment for up to 2 days refrigerated."
  ],
  "tipsZh": [
    "使用前将生香油小火焙烤2分钟，增香不焦苦。",
    "追求极致酥脆？静置前刷一层油，成‘釉面’质感。",
    "未擀面团可包烘焙纸冷藏保存2天。"
  ],
  "relatedSlugs": [
    "jianbing-guo-zi",
    "ji-dan-guan-bing"
  ],
  "image": "/images/recipes/cong-you-bao-bing.webp"
};
