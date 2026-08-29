import type { Recipe } from "@/lib/types";

/** Buddha Jumps Over the Wall (佛跳墙) — Seed batch */
export const fo_tiao_qiang: Recipe = {
  "id": "fo-tiao-qiang",
  "slug": "fo-tiao-qiang",
  "titleEn": "Buddha Jumps Over the Wall",
  "titleZh": "佛跳墙",
  "pinyin": "fó tiào qiáng",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Fuzhou",
  "regionZh": "福州",
  "difficulty": "hard",
  "timeMin": 360,
  "servings": 6,
  "version": "family",
  "versionNote": "This home version uses accessible ingredients and a simplified multi-layered steaming method instead of traditional clay-pot double-boiling—retaining depth, aroma, and prestige without restaurant-level equipment.",
  "versionNoteZh": "家庭版采用分层蒸制法替代传统陶罐隔水煨炖，用易购食材还原醇厚香气与宴席气韵，无需专业灶具。",
  "tags": [
    "family-feast",
    "special-occasion",
    "slow-cooked"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Fuzhou prepared this for Lunar New Year, layering dried abalone, sea cucumber, and chicken feet she soaked overnight. She’d say, 'If Buddha smells it, he’ll leap the wall just to taste it'—then wink as we snuck slivers of tender jellyfish.",
  "storyZh": "我福州的祖母每逢春节必做这道菜，将干鲍、海参和鸡爪提前一晚泡发。她总笑着说：‘佛闻香味，跳墙来尝’，说完就眨眨眼，任我们偷掐一小块脆嫩的海蜇。",
  "ingredients": [
    {
      "id": "ftq-01",
      "nameEn": "dried abalone (small, grade A)",
      "nameZh": "干鲍（小只，一级）",
      "pinyin": "gān bào",
      "amountMetric": "40 g",
      "amountUS": "2 pieces",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for golden-brown, plump pieces; soak 48 hrs in fridge",
      "noteZh": "选金黄饱满者；冷藏浸泡48小时"
    },
    {
      "id": "ftq-02",
      "nameEn": "dried sea cucumber (medium, rehydrated)",
      "nameZh": "干海参（中等，已泡发）",
      "pinyin": "gān hǎi shēn",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup, chopped",
      "category": "protein",
      "pantry": "asian",
      "note": "Soak 48 hrs, simmer 2 hrs until tender; substitute with frozen pre-cooked sea cucumber (thawed, rinsed)",
      "noteZh": "泡发48小时，文火煨2小时至软糯；可用冷冻即食海参（解冻洗净）替代"
    },
    {
      "id": "ftq-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ftq-04",
      "nameEn": "chicken thigh (bone-in, skin-on)",
      "nameZh": "鸡腿肉（带骨带皮）",
      "pinyin": "jī tuǐ ròu",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Use organic for richer broth",
      "noteZh": "优选有机鸡腿以提升汤色与醇香"
    },
    {
      "id": "ftq-05",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "pinyin": "gān xiāng gū",
      "amountMetric": "20 g",
      "amountUS": "1/4 cup, soaked & sliced",
      "category": "produce",
      "pantry": "asian",
      "note": "Soak 30 min in warm water; reserve soaking liquid",
      "noteZh": "温水泡发30分钟；保留泡发水"
    }
  ],
  "steps": [
    {
      "text": "Rinse dried abalone and sea cucumber. Place both in a heatproof bowl with 120 ml Shaoxing wine and 120 ml reserved shiitake soaking liquid. Cover tightly and steam over boiling water for 2 hours.",
      "textZh": "洗净干鲍与海参，同120毫升绍酒、120毫升香菇泡发水入耐热碗，封严，沸水蒸2小时。",
      "zhHint": "密封蒸制锁鲜",
      "stateNote": {
        "visual": "Liquid reduces by one-third; abalone edges curl slightly and feel yielding when pressed",
        "visualZh": "液体减少约三分之一；鲍鱼边缘微卷，按压有弹性",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "heat": "medium",
        "signal": "Steam remains steady and vigorous under lid",
        "signalZh": "盖内蒸汽持续饱满有力"
      }
    },
    {
      "text": "Meanwhile, blanch chicken thighs in boiling water for 2 minutes. Drain, rinse, then place in a clean pot with 1.5 L cold water, ginger slices (20 g), and scallion whites (2 stalks). Bring to gentle boil, skim foam, then reduce heat to low.",
      "textZh": "另起锅，鸡腿冷水下锅焯水2分钟，捞出冲洗；入净锅，加1.5升冷水、姜片（20克）、葱白（2根），大火烧开后撇浮沫，转小火。",
      "zhHint": "去腥稳汤底",
      "stateNote": {
        "visual": "Surface shows tiny, steady bubbles—not rolling boil",
        "visualZh": "汤面泛细密匀泡，非大滚",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Foam stops rising after first 3 minutes",
        "signalZh": "浮沫在头3分钟后不再上涌"
      }
    },
    {
      "text": "Add soaked shiitakes, 30 ml Shaoxing wine, and 1 tsp light soy sauce. Simmer uncovered for 1 hour, skimming occasionally. Strain broth through fine mesh; discard solids except mushrooms.",
      "textZh": "加入泡发香菇、30毫升绍酒、1茶匙生抽，敞盖小火煨1小时，期间撇沫。滤去渣滓，仅留香菇。",
      "zhHint": "取清汤留菇增味",
      "stateNote": {
        "visual": "Broth is pale amber, glossy, and coats spoon lightly",
        "visualZh": "汤色浅琥珀，油亮，挂勺成薄膜",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "heat": "low",
        "signal": "Aromatic steam carries deep umami and wine fragrance",
        "signalZh": "蒸汽散发浓郁酱香与酒香"
      }
    },
    {
      "text": "Combine abalone-sea cucumber mixture (including liquid), strained broth, mushrooms, and 100 g pork belly (blanched, diced). Layer carefully in a deep ceramic steamer dish: mushrooms bottom, then pork, then abalone-sea cucumber mixture.",
      "textZh": "将鲍参混合液、滤清高汤、香菇、焯过切丁的五花肉（100克）分层铺入深瓷蒸碗：香菇垫底，五花肉居中，鲍参液覆顶。",
      "zhHint": "分层铺放保形提香",
      "stateNote": {
        "visual": "Layers remain distinct; no liquid overflow at rim",
        "visualZh": "各层清晰分明，无汁液漫过碗沿",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "Steam rises evenly from all sides of dish",
        "signalZh": "蒸气从碗周均匀升腾"
      }
    },
    {
      "text": "Cover with parchment-lined lid or foil. Steam over brisk boiling water for 90 minutes. Let rest 15 minutes before serving hot, garnished with fresh scallion greens.",
      "textZh": "盖烘焙纸+盖或锡纸封严，旺火沸水蒸90分钟。关火焖15分钟再揭盖，撒葱绿上桌。",
      "zhHint": "焖透锁香不散气",
      "stateNote": {
        "visual": "Liquid glistens like lacquer; abalone yields to gentle pressure",
        "visualZh": "汤汁如漆光亮；鲍鱼轻压即软",
        "timeRef": "90 minutes + 15 min rest",
        "timeRefZh": "90 分钟 + 焖15分钟",
        "heat": "high",
        "signal": "Parchment swells gently but does not burst",
        "signalZh": "烘焙纸微微鼓起但未破裂"
      }
    }
  ],
  "tips": [
    "Soak abalone and sea cucumber together—they share flavor synergy",
    "Use only glass or ceramic for final steaming; metal alters taste",
    "Leftover broth freezes beautifully for future dumpling fillings"
  ],
  "tipsZh": [
    "干鲍与海参同水泡发，风味相生",
    "最终蒸制务必用玻璃或陶瓷器皿，金属器会串味",
    "余汤冷冻保存，是绝佳饺子馅汤底"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/fo-tiao-qiang.webp"
};
