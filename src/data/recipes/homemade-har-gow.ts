import type { Recipe } from "@/lib/types";

/** Homemade Har Gow (Shrimp Dumplings) (虾饺) — Seed batch */
export const homemade_har_gow: Recipe = {
  "id": "har-gow-homestyle",
  "slug": "homemade-har-gow",
  "titleEn": "Homemade Har Gow (Shrimp Dumplings)",
  "titleZh": "虾饺",
  "pinyin": "xiā jiǎo",
  "cuisine": "面点小吃",
  "cuisineEn": "Dim Sum",
  "region": "Foshan",
  "regionZh": "佛山",
  "difficulty": "hard",
  "timeMin": 90,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses a simple wheat-starch-and-tapioca wrapper boiled in water first (not steamed), then filled — yielding translucent, chewy skins without a specialized steamer or dough press.",
  "versionNoteZh": "家常版采用小麦淀粉+木薯淀粉皮，先煮后包，无需专业蒸具或压模，成品晶莹剔透、Q弹有嚼劲。",
  "tags": [
    "90-min",
    "special-occasion",
    "dim-sum"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Foshan made har gow every Lunar New Year — he’d boil the wrappers in hot water while reciting Cantonese proverbs, saying ‘transparency means honesty’. His secret? A pinch of salt in the dough and 3-second blanching — no more, no less.",
  "storyZh": "佛山的舅舅每逢春节必做虾饺——他边烧开水边念粤语谚语，说‘通透即诚’。他的秘诀？面团加一小撮盐，烫面仅3秒，多一秒少一秒都不行。",
  "ingredients": [
    {
      "id": "hg-01",
      "nameEn": "wheat starch",
      "nameZh": "小麦淀粉",
      "pinyin": "xiǎo mài diàn fěn",
      "amountMetric": "100 g",
      "amountUS": "3/4 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Also labeled ‘澄面’ (chéng miàn) — essential for transparency. Not all-purpose flour.",
      "noteZh": "亦称‘澄面’，是透明度关键，不可用普通面粉替代。"
    },
    {
      "id": "hg-02",
      "nameEn": "tapioca starch",
      "nameZh": "木薯淀粉",
      "pinyin": "mù shǔ diàn fěn",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "staple",
      "pantry": "asian",
      "note": "Adds suppleness. Cornstarch may be substituted but yields less elasticity.",
      "noteZh": "增加柔韧度。玉米淀粉可代用，但弹性较差。"
    },
    {
      "id": "hg-03",
      "nameEn": "boiling water",
      "nameZh": "沸水",
      "pinyin": "fèi shuǐ",
      "amountMetric": "120 ml",
      "amountUS": "1/2 cup",
      "category": "other",
      "pantry": "local",
      "note": "",
      "noteZh": ""
    },
    {
      "id": "hg-04",
      "nameEn": "shrimp",
      "nameZh": "虾仁",
      "pinyin": "xiā rén",
      "amountMetric": "200 g",
      "amountUS": "1 1/3 cups (peeled, deveined)",
      "category": "protein",
      "pantry": "local",
      "note": "Use fresh or thawed frozen shrimp — devein and pat dry thoroughly.",
      "noteZh": "用鲜虾或解冻冷冻虾——去线、彻底吸干水分。"
    }
  ],
  "steps": [
    {
      "text": "Sift wheat starch and tapioca starch into a heatproof bowl. Pour boiling water in a slow, steady stream while stirring rapidly with chopsticks.",
      "textZh": "将小麦淀粉与木薯淀粉过筛入耐热碗中，边快速搅动边缓慢注入沸水。",
      "zhHint": "沸水冲拌同步进行",
      "stateNote": {
        "visual": "Mixture forms a shaggy, pale-yellow mass with no dry pockets.",
        "visualZh": "面团呈蓬松淡黄色，无干粉颗粒。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Starch granules visibly swell and bind into clumps.",
        "signalZh": "淀粉颗粒明显膨大并聚集成团。"
      },
      "tip": "Work fast — the dough sets within 1 minute.",
      "tipZh": "动作要快——面团1分钟内即凝固。"
    },
    {
      "text": "Knead the hot dough on an oiled surface until smooth and pliable (about 2 minutes). Cover with a damp cloth and rest 10 minutes.",
      "textZh": "在抹油台面上揉烫面团约2分钟至光滑柔韧，盖湿布静置10分钟。",
      "zhHint": "揉匀后静置回软",
      "stateNote": {
        "visual": "Dough is glossy, elastic, and leaves no residue on fingers.",
        "visualZh": "面团油亮、有弹性，手指不留残渣。",
        "timeRef": "2 minutes kneading + 10 minutes rest",
        "timeRefZh": "揉2分钟 + 静置10分钟",
        "signal": "It stretches 3 cm without snapping back.",
        "signalZh": "可拉伸3厘米不断裂。"
      },
      "tip": "If dough cracks while rolling, add 1 tsp warm water and knead briefly.",
      "tipZh": "若擀制时开裂，加1茶匙温水揉匀即可。"
    },
    {
      "text": "Finely mince shrimp by hand (do not puree). Mix with 1/2 tsp salt, 1/4 tsp white pepper, and 1 tsp sesame oil. Chill 15 minutes.",
      "textZh": "手工细剁虾仁（勿打成泥），加入1/2茶匙盐、1/4茶匙白胡椒粉和1茶匙芝麻油拌匀，冷藏15分钟。",
      "zhHint": "虾馅冷藏定型",
      "stateNote": {
        "visual": "Shrimp pieces are distinct, not pasty; mixture feels cool and cohesive.",
        "visualZh": "虾粒分明不糊烂；馅料冰凉且成团。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "No liquid pools at bottom of bowl.",
        "signalZh": "碗底无渗水。"
      },
      "tip": "Chilling firms up the shrimp and prevents leaking during folding.",
      "tipZh": "冷藏可令虾肉紧实，防止包制时出水。"
    },
    {
      "text": "Divide dough into 12 equal portions. Roll each into a 7-cm circle, 1 mm thick, with a thin edge and slightly thicker center.",
      "textZh": "将面团分成12等份，每份擀成直径7厘米、厚1毫米的圆皮，边缘薄、中心略厚。",
      "zhHint": "皮要中间厚边缘薄",
      "stateNote": {
        "visual": "Wrapper is translucent enough to see faint shadow of finger behind it.",
        "visualZh": "皮薄至可隐约看见指影。",
        "timeRef": "5 minutes per 3 dumplings",
        "timeRefZh": "每3只约5分钟",
        "signal": "Edge tears easily if stretched — indicates correct thinness.",
        "signalZh": "边缘轻拉即断——说明厚度达标。"
      },
      "tip": "Use a small rolling pin and rotate dough frequently to maintain roundness.",
      "tipZh": "用小擀面杖，边擀边转动面皮以保持圆形。"
    },
    {
      "text": "Place 1 tbsp shrimp filling in center. Pleat and pinch to seal into a crescent shape with ≥6 pleats. Steam over high heat for 5 minutes until wrapper turns crystal-clear.",
      "textZh": "取1汤匙虾馅置于皮中央，捏褶收口成月牙形（至少6褶）。大火蒸5分钟至皮体晶莹通透。",
      "zhHint": "褶数越多越正宗",
      "stateNote": {
        "visual": "Wrapper is fully transparent, revealing pink shrimp inside; no cloudiness remains.",
        "visualZh": "外皮完全透明，可见粉红虾肉；无丝毫浑浊。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Edges look taut and glassy, not matte or wrinkled.",
        "signalZh": "边缘紧绷透亮，无哑光或皱缩。"
      },
      "tip": "Don’t overcrowd the steamer — leave 1 cm between dumplings for even steam circulation.",
      "tipZh": "蒸笼勿挤——每只间隔1厘米，确保蒸汽流通均匀。"
    }
  ],
  "tips": [
    "Always use chilled filling — warm shrimp melts the wrapper",
    "Pleat away from yourself for better control",
    "Freeze uncooked har gow on parchment — steam directly from frozen (+1 min extra)"
  ],
  "tipsZh": [
    "馅料务必冷藏——温热虾肉会使皮融化",
    "向身体外侧捏褶，更易掌控",
    "生虾饺可垫烘焙纸冷冻——无需解冻直接蒸（+1分钟）"
  ],
  "relatedSlugs": [
    "homemade-cheung-fun"
  ],
  "image": "/images/recipes/homemade-har-gow.webp"
};
