import type { Recipe } from "@/lib/types";

/** Eight-Treasure Duck (八宝鸭) — Seed batch */
export const ba_bao_ya: Recipe = {
  "id": "ba-bao-ya",
  "slug": "ba-bao-ya",
  "titleEn": "Eight-Treasure Duck",
  "titleZh": "八宝鸭",
  "pinyin": "bā bǎo yā",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 270,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version uses deboned duck leg meat instead of whole duck—easier to handle, faster to cook, and equally impressive when stuffed and braised in a lidded Dutch oven.",
  "versionNoteZh": "家庭版改用去骨鸭腿肉代替整鸭，操作便捷、耗时缩短，填料后砂锅焖烧仍具宴席风范。",
  "tags": [
    "family-feast",
    "impressive-main",
    "braised"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Shanghai ran a small banquet hall in the 1980s. He taught me to stuff duck with glutinous rice, chestnuts, and lotus seeds while humming old Shanghai opera—always saying, 'Eight treasures mean eight blessings, not eight ingredients.'",
  "storyZh": "我上海的舅舅上世纪80年代经营一家小型宴席馆。他边哼沪剧边教我填鸭：糯米、栗子、莲子……总说：‘八宝是八福，不是八样料。’",
  "ingredients": [
    {
      "id": "bb-01",
      "nameEn": "duck leg (skin-on, boneless, ~350 g per leg)",
      "nameZh": "鸭腿肉（带皮去骨，约350克/只）",
      "pinyin": "yā tuǐ ròu",
      "amountMetric": "700 g",
      "amountUS": "24.5 oz (2 legs)",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher to debone; keep skin intact",
      "noteZh": "请肉贩代为去骨，皮须完整"
    },
    {
      "id": "bb-02",
      "nameEn": "glutinous rice (soaked 4 hours)",
      "nameZh": "糯米（浸泡4小时）",
      "pinyin": "nuò mǐ",
      "amountMetric": "200 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinse until water runs clear",
      "noteZh": "淘洗至水清"
    },
    {
      "id": "bb-03",
      "nameEn": "dried chestnuts (pre-cooked, chopped)",
      "nameZh": "熟栗子干（切碎）",
      "pinyin": "shú lì zi gān",
      "amountMetric": "100 g",
      "amountUS": "1/2 cup",
      "category": "produce",
      "pantry": "asian",
      "note": "Substitute with canned chestnuts (drained, patted dry)",
      "noteZh": "可用罐装栗子（沥干拍干）替代"
    },
    {
      "id": "bb-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "bb-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Rinse soaked glutinous rice, drain well. Mix with chestnuts, 15 ml Shaoxing wine, 10 ml light soy sauce, 10 g minced ginger, and 10 g minced scallion. Set aside.",
      "textZh": "沥干泡好糯米，拌入栗子碎、15毫升绍酒、10毫升生抽、姜末（10克）、葱末（10克），静置10分钟。",
      "zhHint": "腌米增香入味",
      "stateNote": {
        "visual": "Rice grains glisten and cling slightly when stirred",
        "visualZh": "米粒油亮，搅拌时略黏连",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Aroma of ginger and wine becomes fragrant and rounded",
        "signalZh": "姜与酒香融合圆润"
      }
    },
    {
      "text": "Flatten duck legs on cutting board, skin-side down. Pat rice mixture evenly over each, leaving 2 cm border. Roll tightly into cylinders, tucking ends inward. Secure with kitchen twine.",
      "textZh": "鸭腿皮朝下铺平，将糯米料均匀铺于肉面，四周留2厘米边。卷成筒状，两端收口向内，棉线捆紧。",
      "zhHint": "卷紧防散保形",
      "stateNote": {
        "visual": "Rolls are compact, no rice oozing; twine lies flat against skin",
        "visualZh": "卷体紧实无漏米；棉线贴皮平整",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Skin stays taut and unbroken along seam",
        "signalZh": "接缝处鸭皮绷紧无裂"
      }
    },
    {
      "text": "Heat 15 ml oil in Dutch oven over medium-high. Sear rolls skin-side down until golden brown (3–4 min). Flip, sear other side 2 min. Remove and set aside.",
      "textZh": "荷兰锅中火烧热油15毫升，鸭卷皮面朝下煎至金黄（3–4分钟）；翻面再煎2分钟，取出备用。",
      "zhHint": "先煎皮面锁汁",
      "stateNote": {
        "visual": "Skin blisters lightly and releases easily from pan",
        "visualZh": "鸭皮微起泡，离锅轻松",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium-high",
        "signal": "Sizzling sound deepens and steadies",
        "signalZh": "滋滋声变沉稳"
      }
    },
    {
      "text": "In same pot, add 10 g minced garlic, 10 g minced ginger, and 1 star anise. Stir 1 minute until fragrant. Return rolls. Add remaining Shaoxing wine (15 ml), light soy sauce (15 ml), and 300 ml water. Bring to simmer.",
      "textZh": "锅中余油爆香蒜末（10克）、姜末（10克）、八角1颗（1分钟）。回放鸭卷，加余下绍酒（15毫升）、生抽（15毫升）、清水300毫升，烧至微沸。",
      "zhHint": "爆香增复合底味",
      "stateNote": {
        "visual": "Liquid simmers at edge with gentle bubbles",
        "visualZh": "锅边微泡，汤面平静",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Aroma shifts from raw spice to warm, sweet-nutty",
        "signalZh": "辛香转为暖甜坚果香"
      }
    },
    {
      "text": "Cover and braise on lowest heat for 2 hours. Uncover, increase heat to medium-low, reduce sauce 10 minutes until glossy and thickened. Rest 10 minutes before slicing.",
      "textZh": "盖盖，最小火焖2小时。揭盖，中低火收汁10分钟至浓亮。静置10分钟再切片。",
      "zhHint": "焖透收亮增光泽",
      "stateNote": {
        "visual": "Sauce coats back of spoon thickly and slowly drips",
        "visualZh": "酱汁浓稠挂勺，滴落缓慢",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "Edges of rolls shimmer with lacquered glaze",
        "signalZh": "鸭卷边缘泛琥珀亮泽"
      }
    }
  ],
  "tips": [
    "Use a heavy-bottomed Dutch oven—it mimics traditional clay pot heat retention",
    "Slice with a sharp knife dipped in hot water for clean cuts",
    "Serve with steamed baby bok choy to balance richness"
  ],
  "tipsZh": [
    "务必用厚底荷兰锅，蓄热均匀如砂锅",
    "刀刃蘸热水切片，断面整齐不散",
    "配清炒小棠菜解腻增鲜"
  ],
  "relatedSlugs": [
    "fo-tiao-qiang"
  ],
  "image": "/images/recipes/ba-bao-ya.webp"
};
