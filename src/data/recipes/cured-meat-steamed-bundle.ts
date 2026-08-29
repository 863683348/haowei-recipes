import type { Recipe } from "@/lib/types";

/** Cured Meat Steamed Bundle (腊味合蒸) — Seed batch */
export const cured_meat_steamed_bundle: Recipe = {
  "id": "la-wei-he-zheng",
  "slug": "cured-meat-steamed-bundle",
  "titleEn": "Cured Meat Steamed Bundle",
  "titleZh": "腊味合蒸",
  "pinyin": "là wèi hé zhēng",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Changsha",
  "regionZh": "长沙",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses less fat and skips restaurant-style lard basting—just clean steam and natural umami from layered cured meats.",
  "versionNoteZh": "家常版减少肥油，不刷猪油，靠腊味叠蒸自然出香。",
  "tags": [
    "45-min",
    "dinner-party",
    "traditional"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Changsha’s Kaifu District still steams this every Lunar New Year Eve using her mother’s bamboo steamer—she layers the cured meats with a single slice of fresh ginger to cut richness, just like Grandma did in the 1970s.",
  "storyZh": "我长沙开福区的姑妈每逢除夕夜必做这道菜，用她母亲传下的竹蒸笼；腊肉、腊鸡、腊鱼层层叠放，只垫一片鲜姜去腻，和奶奶七十年代的做法一模一样。",
  "ingredients": [
    {
      "id": "lw-01",
      "nameEn": "Hunan-style cured pork belly (larou)",
      "nameZh": "湖南腊肉（腊肉）",
      "pinyin": "là ròu",
      "amountMetric": "180 g",
      "amountUS": "6 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for firm, deep amber slices with visible fat marbling; substitute smoked bacon if unavailable (blanch 2 min first).",
      "noteZh": "选质地紧实、琥珀色深、肥瘦分明者；无湘式腊肉可用烟熏培根替代（先焯水2分钟）。",
      "termKey": "none"
    },
    {
      "id": "lw-02",
      "nameEn": "Cured chicken thigh (laji)",
      "nameZh": "腊鸡腿",
      "pinyin": "là jī tuǐ",
      "amountMetric": "150 g",
      "amountUS": "5.3 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Available frozen at Asian grocers; thaw fully and pat dry. Substitute smoked turkey leg (skin-on, pre-cooked) if needed.",
      "noteZh": "亚超常售冷冻装，需完全解冻并擦干；可选烟熏火鸡腿（带皮熟制）替代。",
      "termKey": "none"
    },
    {
      "id": "lw-03",
      "nameEn": "Cured fish fillet (layu)",
      "nameZh": "腊鱼",
      "pinyin": "là yú",
      "amountMetric": "120 g",
      "amountUS": "4.2 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Thin, dried slices—soak 10 min in warm water to rehydrate. Substitute smoked mackerel fillet (low-salt, skin-off).",
      "noteZh": "薄干片状，温水泡10分钟回软；可选低盐烟熏鲭鱼片（去皮）替代。",
      "termKey": "none"
    },
    {
      "id": "lw-04",
      "nameEn": "Fresh ginger, thinly sliced",
      "nameZh": "鲜姜片",
      "pinyin": "xiān jiāng piàn",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp, thinly sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Use young ginger for mild heat; peel only if skin is fibrous.",
      "noteZh": "嫩姜更温和；仅表皮粗老时去皮。",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Rinse all cured meats under cold water, then gently scrub with a soft brush to remove surface dust and salt crystals. Pat thoroughly dry with paper towels.",
      "textZh": "将所有腊味用冷水冲洗，用软毛刷轻刷表面浮尘与盐粒，再用厨房纸彻底吸干水分。",
      "zhHint": "洗净擦干是去咸关键",
      "stateNote": {
        "visual": "Meats look matte, not glistening; no water beads remain on surface.",
        "visualZh": "腊味表面哑光，无水珠残留。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Surface feels completely dry to touch.",
        "signalZh": "触感完全干燥。"
      }
    },
    {
      "text": "Arrange larou (bottom), layu (middle), and laji (top) in a shallow heatproof dish, overlapping slightly. Tuck 3–4 ginger slices between layers.",
      "textZh": "在浅耐热盘中自下而上铺腊肉、腊鱼、腊鸡腿，稍重叠；姜片嵌入层间。",
      "zhHint": "姜片藏在夹层里",
      "stateNote": {
        "visual": "Three distinct layers visible; ginger barely peeking through gaps.",
        "visualZh": "三层清晰可见，姜片隐约露于缝隙。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "No raw meat exposed on top layer.",
        "signalZh": "最上层无裸露生肉面。"
      }
    },
    {
      "text": "Steam over vigorously boiling water for 35 minutes, covered tightly with lid or foil. Do not open during steaming.",
      "textZh": "大火沸水入锅，盖严盖子或封锡纸，全程蒸35分钟，中途勿揭盖。",
      "zhHint": "全程密闭蒸透",
      "stateNote": {
        "visual": "Steam pours steadily from edges of lid; condensation drips back into pot.",
        "visualZh": "蒸汽持续从盖边涌出；冷凝水滴回锅中。",
        "timeRef": "35 minutes",
        "timeRefZh": "35 分钟",
        "heat": "high",
        "signal": "Steam remains thick and continuous after first 5 minutes.",
        "signalZh": "起蒸5分钟后蒸汽仍浓密持续。"
      }
    },
    {
      "text": "Carefully remove dish from steamer. Let rest uncovered for 3 minutes to allow steam to escape and flavors to settle.",
      "textZh": "小心取出蒸碗，敞盖静置3分钟，让余汽散尽、滋味沉稳。",
      "zhHint": "静置定味",
      "stateNote": {
        "visual": "Surface glistens faintly with rendered fat; aroma intensifies.",
        "visualZh": "表面泛微润油光；腊香明显变浓。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Fat pools lightly around edges but doesn’t pool in center.",
        "signalZh": "油脂轻聚盘边，不积于中心。"
      }
    },
    {
      "text": "Slice each layer diagonally into 1.5 cm pieces. Re-stack neatly on a serving plate, alternating meats and garnishing with reserved ginger slices.",
      "textZh": "将三层腊味分别斜切成1.5厘米厚片，在盘中交错叠码，插回原姜片作点缀。",
      "zhHint": "斜切显层次",
      "stateNote": {
        "visual": "Clean, even slices with defined grain; no crumbling or tearing.",
        "visualZh": "切面整齐、纹理清晰，无碎裂或拉丝。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "Knife glides smoothly without resistance.",
        "signalZh": "刀刃顺滑无阻滞。"
      }
    }
  ],
  "tips": [
    "Always rinse and dry cured meats before steaming—it removes excess salt and prevents bitterness.",
    "If using substitutions, reduce steaming time by 5 minutes for smoked turkey or mackerel.",
    "Leftovers keep 4 days refrigerated; slice thin and stir-fry with garlic greens next day."
  ],
  "tipsZh": [
    "蒸前务必洗净擦干腊味，可去咸涩味。",
    "若用替代品（如烟熏火鸡腿、鲭鱼），蒸制时间减5分钟。",
    "剩菜冷藏4天；次日切薄片，配蒜苗快炒即成新菜。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/cured-meat-steamed-bundle.webp"
};
