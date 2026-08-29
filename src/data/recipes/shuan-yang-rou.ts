import type { Recipe } from "@/lib/types";

/** Beijing Hot Pot Lamb (涮羊肉) — Seed batch */
export const shuan_yang_rou: Recipe = {
  "id": "shuan-yang-rou",
  "slug": "shuan-yang-rou",
  "titleEn": "Beijing Hot Pot Lamb",
  "titleZh": "涮羊肉",
  "pinyin": "shuàn yáng ròu",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses a simple broth and quick-simmered lamb—no restaurant-grade copper hot pot or aged mutton. Simmered just until pink disappears, preserving tenderness.",
  "versionNoteZh": "家常版用简易清汤与现切羊肉，无需铜锅或陈年羔羊肉；涮至粉红色消失即捞出，保持鲜嫩。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle Li in Xicheng District used to host winter gatherings where he’d set up a portable gas burner and a small copper pot—filled with clear broth made from dried shrimp, scallion whites, and ginger—then pass around platters of paper-thin lamb shoulder. We kids would giggle as we dipped our chopsticks, racing to catch the first tender bite before it turned grey.",
  "storyZh": "我西城区的李叔叔冬天常在家办聚会，架起便携煤气灶和小铜锅，锅里是用干虾米、葱白和姜片熬的清汤；再端上一盘盘薄如纸的羊肩肉。我们小孩总笑着抢着下筷，比谁先夹到那第一口刚变色、还泛着粉红的嫩肉。",
  "ingredients": [
    {
      "id": "lam-01",
      "nameEn": "lamb shoulder, very thinly sliced (frozen 20 min for easier slicing)",
      "nameZh": "羊肩肉，极薄片（冷冻20分钟更易切）",
      "pinyin": "yáng jiān ròu",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for 'hot pot cut' or slice yourself: partially freeze, then use sharp knife at 45° angle.",
      "noteZh": "请肉铺师傅切‘涮锅片’，或自行处理：肉半冻后，以锋利刀按45度角斜切。"
    },
    {
      "id": "bro-01",
      "nameEn": "dried shrimp",
      "nameZh": "海米",
      "pinyin": "hǎi mǐ",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for small, golden, fragrant dried shrimp (not fishy); substitute with 1 tsp shrimp paste + ½ tsp light soy sauce if unavailable.",
      "noteZh": "选金黄、香气清鲜的小虾米（无腥味）；缺货时可用1茶匙虾酱+½茶匙生抽替代。"
    },
    {
      "id": "bro-02",
      "nameEn": "fresh ginger, thickly sliced",
      "nameZh": "老姜，厚片",
      "pinyin": "lǎo jiāng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp, sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Peel only if skin is fibrous; leave skin on for clearer broth.",
      "noteZh": "仅当姜皮粗硬时去皮；留皮可使汤更清亮。",
      "termKey": "ginger"
    },
    {
      "id": "bro-03",
      "nameEn": "scallion whites, bruised",
      "nameZh": "小葱葱白，拍松",
      "pinyin": "xiǎo cōng cōng bái",
      "amountMetric": "60 g",
      "amountUS": "½ cup, chopped",
      "category": "produce",
      "pantry": "local",
      "note": "Use only white parts; gently crush with side of knife to release aroma.",
      "noteZh": "仅用葱白部分；用刀面轻拍裂开以释放香气。",
      "termKey": "scallion"
    },
    {
      "id": "dip-01",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Toasted sesame oil only—never substitute with plain vegetable oil.",
      "noteZh": "必须用焙炒芝麻油，不可用普通植物油替代。",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Rinse dried shrimp under cold water; soak in 100 ml warm water for 10 minutes. Reserve both shrimp and soaking liquid.",
      "textZh": "干虾米冷水冲洗，用100毫升温水浸泡10分钟；保留虾米及泡发水。",
      "zhHint": "泡发并留水",
      "stateNote": {
        "visual": "Shrimp plump and opaque, liquid slightly cloudy and fragrant",
        "visualZh": "虾米饱满不透明，泡水微浊且有鲜香",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Liquid smells ocean-fresh—not fishy",
        "signalZh": "泡水散发海洋清香，非腥臭味"
      }
    },
    {
      "text": "In a medium pot, combine soaked shrimp, soaking liquid, ginger slices, and scallion whites. Bring to a gentle simmer over medium heat, then reduce to low and simmer uncovered for 15 minutes.",
      "textZh": "将泡好的虾米、泡水、姜片、葱白一同入锅，中火煮沸后转小火，敞盖慢煨15分钟。",
      "zhHint": "清汤慢煨",
      "stateNote": {
        "visual": "Broth remains pale gold and clear, with tiny bubbles breaking softly at edges",
        "visualZh": "汤色呈淡金色、清澈见底，边缘有细小气泡缓慢破裂",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Surface shows no vigorous rolling boil—only occasional bubble clusters",
        "signalZh": "汤面无翻滚大泡，仅偶有小泡群浮起"
      }
    },
    {
      "text": "Strain broth into a clean pot or electric hot pot insert. Discard solids. Taste broth—it should be clean, savory, and subtly sweet; add a pinch of white pepper if needed.",
      "textZh": "滤去渣滓，将清汤倒入干净锅或电热火锅内胆；尝味——应清鲜微甜带咸鲜，不足则加少许白胡椒提味。",
      "zhHint": "滤清汤，调咸鲜",
      "stateNote": {
        "visual": "Broth perfectly transparent, no sediment or cloudiness",
        "visualZh": "汤体完全透亮，无任何沉淀或浑浊",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "signal": "No floating particles visible when held to light",
        "signalZh": "迎光观察无悬浮颗粒"
      }
    },
    {
      "text": "Bring broth to a steady simmer over medium-high heat. Hold one lamb slice by its edge with chopsticks, submerge fully, and swirl gently for exactly 10–12 seconds until edges curl and center turns from deep red to light pink.",
      "textZh": "将汤烧至持续微沸；用筷子夹住一片羊肉边缘，完全浸入汤中，轻旋10–12秒，至边缘微卷、中心由深红转为浅粉即捞出。",
      "zhHint": "涮10–12秒，粉红即熟",
      "stateNote": {
        "visual": "Lamb edges curl slightly; surface color shifts uniformly from crimson to pale rose",
        "visualZh": "羊肉边缘微卷，表面颜色由深红均匀转为浅玫瑰粉",
        "timeRef": "10–12 seconds",
        "timeRefZh": "10–12 秒",
        "heat": "medium-high",
        "signal": "Center loses all glossy raw sheen and gains matte tenderness",
        "signalZh": "中心失去生肉光泽，呈现哑光柔嫩质感"
      }
    },
    {
      "text": "Dip hot lamb into a small bowl of pure toasted sesame oil. Eat immediately while steaming and tender.",
      "textZh": "将烫好的羊肉蘸纯焙炒芝麻油，趁热入口，鲜嫩多汁。",
      "zhHint": "即涮即蘸即食",
      "stateNote": {
        "visual": "Lamb glistens with golden oil, steam rising visibly",
        "visualZh": "羊肉裹着金黄油光，热气清晰升腾",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Steam rises steadily—no cooling delay",
        "signalZh": "热气持续升腾，不可稍作等待"
      }
    }
  ],
  "tips": [
    "Slice lamb against the grain for maximum tenderness—even thinner than typical hot pot cuts (1–2 mm).",
    "Never reuse broth beyond one meal: Beijing families discard it after serving to preserve purity of flavor.",
    "For authentic texture, avoid pre-packaged ‘hot pot lamb’—it’s often treated with phosphates and lacks clean lamb fragrance."
  ],
  "tipsZh": [
    "逆纹切羊肉，厚度控制在1–2毫米，口感最嫩。",
    "老北京人家绝不重复使用涮锅汤——一餐即弃，只为保证汤味纯粹。",
    "勿用市售预包装‘涮羊肉卷’：多含磷酸盐保水剂，失却本真羊香。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/shuan-yang-rou.webp"
};
