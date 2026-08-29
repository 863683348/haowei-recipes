import type { Recipe } from "@/lib/types";

/** Honey-Glazed Roast Pork Ribs (蜜汁烤肋排) — Seed batch */
export const honey_rib_roast: Recipe = {
  "id": "honey-rib-roast",
  "slug": "honey-rib-roast",
  "titleEn": "Honey-Glazed Roast Pork Ribs",
  "titleZh": "蜜汁烤肋排",
  "pinyin": "mì zhī kǎo lèi pái",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shenzhen",
  "regionZh": "深圳",
  "difficulty": "medium",
  "timeMin": 150,
  "servings": 4,
  "version": "family",
  "versionNote": "No wok hei here—we roast low and slow in the oven, finishing with honey and star anise for Cantonese sweetness without cloyingness. Inspired by my cousin’s Dongmen street stall.",
  "versionNoteZh": "不用镬气，靠烤箱低温慢烤，最后以蜂蜜与八角收汁，甜而不腻，源自深圳东门表哥的街边摊。",
  "tags": [
    "weeknight",
    "oven-roast",
    "sticky-sweet"
  ],
  "dietary": [
    "none"
  ],
  "story": "My cousin ran a tiny rib stall near Dongmen Market in Shenzhen. Every evening he’d pull ribs from a stainless steel steamer, slather them in honey-starch glaze, and flash-roast under a broiler—smoke alarms be damned. I still taste that crackle when I bite into the caramelized edge.",
  "storyZh": "我表哥在深圳东门市场旁摆了个小肋排摊。每晚他都从不锈钢蒸锅里捞出肋排，抹上蜂蜜淀粉酱，再进烤箱猛火炙烤——警报器响了也顾不上。至今咬到焦糖脆边时，那‘咔嚓’声还在舌尖回响。",
  "ingredients": [
    {
      "id": "hr-01",
      "nameEn": "pork baby back ribs",
      "nameZh": "猪小排（带软骨）",
      "pinyin": "zhū xiǎo pái",
      "amountMetric": "800 g",
      "amountUS": "1.75 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher to remove membrane for tenderness.",
      "noteZh": "请师傅去掉背膜，肉质更酥软。"
    },
    {
      "id": "hr-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hr-03",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "pinyin": "fēng mì",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "hr-04",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "2 g",
      "amountUS": "2 whole pods",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "hr-05",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Rinse ribs and pat dry. In a large pot, cover ribs with cold water. Add ginger and star anise. Bring to boil, then reduce heat and simmer gently for 45 minutes.",
      "textZh": "肋排洗净擦干；大锅冷水下肋排，加姜片、八角，大火烧开后转小火慢炖45分钟。",
      "zhHint": "先焯再烤更嫩"
    },
    {
      "text": "Drain ribs and reserve 60 ml of cooking liquid. Let ribs cool completely on a wire rack—this prevents steaming and ensures crisp edges.",
      "textZh": "捞出沥干，保留60毫升原汤；肋排完全放凉于烤架上，避免水汽积聚影响上色。",
      "zhHint": "彻底放凉才入烤箱"
    },
    {
      "text": "In a saucepan, combine light soy sauce, honey, and reserved cooking liquid. Simmer over medium-low heat for 5 minutes until reduced by one-third and slightly thickened.",
      "textZh": "小锅中混合生抽、蜂蜜与预留汤汁，中低火熬5分钟，至体积减少三分之一、略浓稠。",
      "zhHint": "酱汁需熬浓才挂得住"
    },
    {
      "text": "Brush ribs generously with warm glaze. Place on a foil-lined baking sheet, spaced apart. Roast at 180°C (350°F) for 25 minutes.",
      "textZh": "趁热刷满酱汁；铺锡纸烤盘，肋排间距摆放，180°C（350°F）烤25分钟。",
      "zhHint": "酱汁温热易附着"
    },
    {
      "text": "Increase oven to 220°C (425°F). Brush again with glaze and roast 8–10 minutes until edges are dark amber and sauce forms a sticky, glossy crust.",
      "textZh": "调高烤箱至220°C（425°F），再刷酱，烤8–10分钟，至边缘呈深琥珀色、酱汁凝成油亮粘稠脆壳。",
      "zhHint": "最后高温定型",
      "stateNote": {
        "visual": "Deep amber edges with visible syrup sheen and fine sugar crystallization",
        "visualZh": "深琥珀色边缘，酱汁反光明显，可见细微糖晶",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "heat": "high",
        "signal": "Fragrant caramelized aroma fills kitchen; ribs sizzle faintly as sauce sets",
        "signalZh": "满屋焦糖香气；酱汁凝固时发出细微滋滋声"
      }
    }
  ],
  "tips": [
    "Simmering first removes impurities and yields tender, pull-apart ribs—no pressure cooker needed.",
    "Use a silicone brush: stiff bristles can tear delicate meat fibers.",
    "Glaze thickens further upon cooling—serve ribs within 10 minutes of roasting for ideal stickiness."
  ],
  "tipsZh": [
    "先炖再烤，既去浮沫又使肉质酥烂，无需高压锅。",
    "用硅胶刷：硬毛刷易扯断嫩肉纤维。",
    "酱汁冷却后更黏稠，建议出炉10分钟内上桌，口感最佳。"
  ],
  "relatedSlugs": [
    "char-siu-pork"
  ],
  "image": "/images/recipes/honey-rib-roast.webp"
};
