import type { Recipe } from "@/lib/types";

/** Shanghai-Style Sauce Duck (酱鸭) — Seed batch */
export const shanghai_style_sauce_duck: Recipe = {
  "id": "jiang-su-sauce-duck",
  "slug": "shanghai-style-sauce-duck",
  "titleEn": "Shanghai-Style Sauce Duck",
  "titleZh": "酱鸭",
  "pinyin": "jiàng yā",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version skips commercial maltose glaze — uses dark soy + sugar reduction for same lacquered shine and balanced sweet-salty depth.",
  "versionNoteZh": "家常版弃用市售麦芽糖浆，以老抽与冰糖熬制还原琥珀光泽与咸甜厚度。",
  "tags": [
    "make-ahead",
    "holiday",
    "cold-dish"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Jing'an cooked this for Mid-Autumn Festival — he’d marinate the duck overnight in his courtyard, hanging it from a bamboo pole so sparrows couldn’t steal the soy scent. He swore the city’s humid autumn air made the skin cling tighter to the meat.",
  "storyZh": "我静安区的舅舅中秋必做这道酱鸭——他把鸭子挂在院中竹竿上过夜腌渍，防麻雀偷嗅酱香。他说上海秋日的湿气，让鸭皮更紧贴肉身。",
  "ingredients": [
    {
      "id": "jd-01",
      "nameEn": "whole duck (2.2–2.5 kg), giblets removed",
      "nameZh": "整鸭（2.2–2.5公斤），去内脏",
      "pinyin": "zhěng yā",
      "amountMetric": "2300 g",
      "amountUS": "5 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher to remove excess fat around cavity; pat skin very dry before marinating.",
      "noteZh": "请肉铺剔除腔内多余脂肪；腌前务必擦干鸭皮。"
    },
    {
      "id": "jd-02",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Essential for mahogany color and umami backbone.",
      "noteZh": "赋予酱鸭标志性枣红色与醇厚底味。",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "jd-03",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "80 g",
      "amountUS": "1/3 cup crushed",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Crush with mortar or rolling pin — granulated sugar burns too easily.",
      "noteZh": "需碾碎；白砂糖易焦糊。"
    },
    {
      "id": "jd-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "50 ml",
      "amountUS": "3 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Do not substitute rice vinegar or apple cider vinegar — acidity disrupts gelatinization.",
      "noteZh": "不可用米醋或苹果醋替代——酸度破坏胶质形成。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "jd-05",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "4 pcs",
      "amountUS": "4 whole",
      "category": "spice",
      "pantry": "asian",
      "note": "Use whole, not ground — infuses slowly without bitterness.",
      "noteZh": "须用整颗，研磨易发苦。",
      "termKey": "star-anise"
    },
    {
      "id": "jd-06",
      "nameEn": "ginger, 3 thick slices",
      "nameZh": "生姜（3厚片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "3 slices (1 cm thick)",
      "category": "produce",
      "pantry": "local",
      "note": "Smash lightly with knife spine to release oils.",
      "noteZh": "刀背轻拍裂开，激出姜油。",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Rinse duck inside and out; pat *completely* dry with paper towels. Rub entire surface with 1 tbsp dark soy and let air-dry uncovered in fridge 2 hours.",
      "textZh": "鸭内外冲洗干净，用厨房纸彻底擦干。均匀抹1汤匙老抽，敞口冷藏风干2小时。",
      "zhHint": "风干去水，上色更匀",
      "stateNote": {
        "visual": "Skin appears taut, matte, and slightly wrinkled.",
        "visualZh": "鸭皮绷紧、哑光、略起皱。",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "signal": "No moisture beads visible under light.",
        "signalZh": "灯光下无水珠反光。"
      }
    },
    {
      "text": "Combine remaining dark soy, Shaoxing wine, rock sugar, star anise, ginger, 1 tsp white pepper, and 750 ml water in a stockpot large enough to submerge duck. Bring to simmer.",
      "textZh": "将剩余老抽、绍兴酒、冰糖、八角、姜片、白胡椒粉和750毫升水倒入深锅，烧至微沸。",
      "zhHint": "香料先煮出味",
      "stateNote": {
        "visual": "Surface shimmering with tiny, steady bubbles.",
        "visualZh": "水面浮现细密、均匀气泡。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium",
        "signal": "Aroma of star anise and ginger becomes unmistakable.",
        "signalZh": "八角与姜香清晰扑鼻。"
      }
    },
    {
      "text": "Carefully lower duck into pot. Weight down with heatproof plate to keep submerged. Simmer gently (barely bubbling) for 90 minutes, turning once halfway.",
      "textZh": "轻放鸭子入锅，压耐热盘使其完全浸没。保持微沸（水面 barely bubbling）慢煮90分钟，中途翻面一次。",
      "zhHint": "压重物确保浸透",
      "stateNote": {
        "visual": "Duck floats slightly but stays covered; liquid shivers, no rolling boil.",
        "visualZh": "鸭身微浮但始终浸没；汤面轻颤，无翻滚。",
        "timeRef": "90 minutes",
        "timeRefZh": "90 分钟",
        "heat": "low",
        "signal": "Leg joint moves freely when gently twisted.",
        "signalZh": "轻扭腿关节，可自由活动。"
      }
    },
    {
      "text": "Remove duck; strain braising liquid into clean saucepan. Skim off solidified fat. Simmer liquid over medium-high heat until reduced by half and syrupy (about 15 minutes).",
      "textZh": "捞出鸭子，卤汁滤入净锅，撇净凝固浮油，中大火收至一半量、呈糖浆状（约15分钟）。",
      "zhHint": "卤汁浓缩增亮",
      "stateNote": {
        "visual": "Liquid coats spoon thickly and drips slowly in single drops.",
        "visualZh": "酱汁浓稠挂勺，滴落成单滴。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-high",
        "signal": "Bubbles widen and pop with audible 'plink'.",
        "signalZh": "气泡变宽，发出清脆‘噗’声。"
      }
    },
    {
      "text": "Brush warm reduced sauce generously over duck while still hot. Let cool completely on rack, then refrigerate uncovered overnight.",
      "textZh": "趁热将浓缩卤汁均匀刷满鸭身。架上晾凉至室温，再敞口冷藏过夜。",
      "zhHint": "冷凝酱衣更亮",
      "stateNote": {
        "visual": "Surface glistens with deep amber lacquer, slightly tacky to touch.",
        "visualZh": "鸭身泛深琥珀光泽，触之微黏。",
        "timeRef": "overnight",
        "timeRefZh": "隔夜",
        "signal": "Sauce sets into firm, non-sticky film.",
        "signalZh": "酱层凝结成膜，不粘手。"
      }
    }
  ],
  "tips": [
    "Use a duck with tight, unblemished skin — avoid frozen-thawed if possible.",
    "Slice against the grain for maximum tenderness and clean cuts.",
    "Leftover sauce freezes well for braising tofu or eggs."
  ],
  "tipsZh": [
    "选皮紧致无破损的鸭子——尽量避免冻融鸭。",
    "逆纹切片，肉质更嫩、断面整齐。",
    "剩余卤汁冷冻保存，卤豆腐或鸡蛋风味绝佳。"
  ],
  "relatedSlugs": [
    "red-braised-lions-head-meatballs"
  ],
  "image": "/images/recipes/shanghai-style-sauce-duck.webp"
};
