import type { Recipe } from "@/lib/types";

/** Steamed Sea Bass with Scallion Oil (葱油鲈鱼) — Seed batch */
export const steamed_bass_with_scallion_oil: Recipe = {
  "id": "cong-you-lu-yu",
  "slug": "steamed-bass-with-scallion-oil",
  "titleEn": "Steamed Sea Bass with Scallion Oil",
  "titleZh": "葱油鲈鱼",
  "pinyin": "cōng yóu lú yú",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips MSG and pre-made sauces — scallion oil is freshly infused, and fish is seasoned only with salt, wine, and ginger before steaming.",
  "versionNoteZh": "家常版不用味精与市售酱料，葱油现炸，鱼仅以盐、料酒、姜片腌制后清蒸。",
  "tags": [
    "30-min",
    "weeknight",
    "healthy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Guangzhou ran a tiny fish stall near Huangsha Market — he’d pick live sea bass at dawn and steam them for lunch with scallions from his rooftop garden. He always said, 'The fish must swim into the pot, not float in it.'",
  "storyZh": "我广州的祖父在黄沙市场旁经营小鱼摊，每天清晨挑活海鲈，中午用自家天台种的葱清蒸。他常说：“鱼要游进锅里，不能泡在锅里。”",
  "ingredients": [
    {
      "id": "bass-01",
      "nameEn": "whole sea bass (skin-on, scaled, gutted, ~500 g)",
      "nameZh": "整条海鲈鱼（带皮、已刮鳞去内脏，约500克）",
      "pinyin": "zhěng tiáo hǎi lú yú",
      "amountMetric": "1 pc",
      "amountUS": "1 fish",
      "category": "protein",
      "pantry": "local",
      "note": "Ask fishmonger to scale and gut. Substitute: whole tilapia or snapper (firmer flesh, milder flavor).",
      "noteZh": "请鱼贩代为刮鳞去内脏。替代：整条罗非鱼或鲷鱼（肉质紧实，味道较淡）。"
    },
    {
      "id": "bass-02",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "½ cup thinly sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bass-03",
      "nameEn": "peanut oil or vegetable oil",
      "nameZh": "花生油或植物油",
      "pinyin": "huā shēng yóu",
      "amountMetric": "60 ml",
      "amountUS": "¼ cup",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "bass-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Score both sides of fish with three 1-cm-deep diagonal cuts. Rub inside and out with ½ tsp salt and 1 tsp Shaoxing wine. Stuff cavity with 2 slices ginger and 2 scallion whites.",
      "textZh": "鱼身两面各斜切三刀（深1厘米）；内外抹½茶匙盐、1茶匙料酒；鱼腹内塞入姜片2片、葱白2段。",
      "zhHint": "划刀、抹盐酒、塞姜葱",
      "stateNote": {
        "visual": "Cuts gape slightly; fish surface feels tacky, not wet.",
        "visualZh": "刀口微张，鱼身表面微黏不湿。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Salt crystals dissolve completely upon rubbing.",
        "signalZh": "盐粒经揉搓后完全溶解。"
      }
    },
    {
      "text": "Place fish on a heatproof plate. Steam over high heat for 10 minutes (for 500 g fish) until flesh flakes easily with a fork and turns opaque white.",
      "textZh": "鱼置耐热盘中，大火蒸10分钟（500克鱼）；至鱼肉雪白不透明，用叉轻拨即散。",
      "zhHint": "大火足时",
      "stateNote": {
        "visual": "Flesh is pearly white and separates cleanly along muscle lines.",
        "visualZh": "鱼肉呈珍珠白，沿肌理自然分离。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "high",
        "signal": "Clear liquid pools around fish (not milky or cloudy).",
        "signalZh": "盘底渗出清亮汁水（非乳白浑浊）。"
      }
    },
    {
      "text": "Carefully pour off any accumulated water from the plate. Discard ginger and scallion whites. Scatter ¼ cup fresh scallion greens over hot fish.",
      "textZh": "小心倒掉盘中蒸出的水；弃去姜片与葱白；趁热铺上¼杯新鲜葱绿。",
      "zhHint": "倒汁、去姜葱、铺新葱",
      "stateNote": {
        "visual": "Scallions wilt slightly but retain bright green color.",
        "visualZh": "葱绿微蔫但仍鲜绿。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Fish surface steams visibly beneath scallions.",
        "signalZh": "葱下鱼身仍明显冒热气。"
      }
    },
    {
      "text": "Heat oil in a small saucepan over medium-high heat until shimmering (170°C / 340°F). Immediately pour hot oil over scallions — it should sizzle loudly and bubble vigorously.",
      "textZh": "小锅烧油至微冒青烟（约170°C），离火即淋于葱丝上，应发出响亮‘滋啦’声并剧烈起泡。",
      "zhHint": "热油激香",
      "stateNote": {
        "visual": "Oil ripples and shimmers; thin wisps of smoke rise.",
        "visualZh": "油面微泛涟漪并泛光，见细缕青烟。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium-high",
        "signal": "A loud, sustained sizzle occurs on contact.",
        "signalZh": "淋油瞬间发出持续响亮‘滋啦’声。"
      }
    },
    {
      "text": "Drizzle light soy sauce evenly over fish. Let rest 1 minute before serving with steamed rice.",
      "textZh": "均匀淋入生抽，静置1分钟，配米饭上桌。",
      "zhHint": "生抽提鲜，稍候入味",
      "stateNote": {
        "visual": "Soy sauce pools lightly in fish crevices without flooding.",
        "visualZh": "生抽在鱼纹间形成薄层，不漫溢。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aroma shifts from raw scallion to toasted, savory-sweet.",
        "signalZh": "葱香由生辣转为焦香微甜。"
      }
    }
  ],
  "tips": [
    "Pat fish dry before seasoning — moisture prevents proper steaming and dilutes flavor.",
    "Use only the green parts of scallions for garnish; white parts go into the cavity for aroma.",
    "If using frozen bass, thaw fully and pat *very* dry — excess water causes mushy texture."
  ],
  "tipsZh": [
    "腌前务必擦干鱼身，水分影响蒸制效果并稀释风味。",
    "装饰仅用葱绿部分；葱白段用于鱼腹增香。",
    "若用冷冻鲈鱼，须彻底解冻并用力擦干——多余水分导致肉质松散。"
  ],
  "relatedSlugs": [
    "steamed-hairy-crab"
  ],
  "image": "/images/recipes/steamed-bass-with-scallion-oil.webp"
};
