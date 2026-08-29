import type { Recipe } from "@/lib/types";

/** Taiwanese Salt-Fried Chicken (Popcorn Chicken) (台式盐酥鸡) — Seed batch */
export const taiwanese_salt_fried_chicken: Recipe = {
  "id": "tai-wan-yan-su-ji",
  "slug": "taiwanese-salt-fried-chicken",
  "titleEn": "Taiwanese Salt-Fried Chicken (Popcorn Chicken)",
  "titleZh": "台式盐酥鸡",
  "pinyin": "tái shì yán sū jī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Taipei",
  "regionZh": "台北",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses shallow-fry technique in a heavy skillet — no deep fryer needed — and skips MSG, relying on five-spice and fresh aromatics for depth.",
  "versionNoteZh": "家庭版采用厚底锅浅炸法（无需油炸机），不添加味精，靠五香粉与新鲜香料提味。",
  "tags": [
    "30-min",
    "snack",
    "popcorn-chicken"
  ],
  "dietary": [
    "none"
  ],
  "story": "My cousin ran a night market stall near Raohe Street in Taipei. Her secret was marinating bite-sized chicken in rice wine and white pepper overnight, then coating it in potato starch mixed with toasted Sichuan peppercorns — ‘the crunch is in the spice, not just the starch,’ she’d wink.",
  "storyZh": "我表姐在台北饶河街夜市摆摊。她的秘诀是将鸡丁用米酒和白胡椒粉腌一夜，再裹上混入焙香花椒的土豆淀粉——‘酥脆来自香料，不只靠粉’，她总眨眨眼说。",
  "ingredients": [
    {
      "id": "sf-01",
      "nameEn": "boneless, skinless chicken thighs",
      "nameZh": "去骨去皮鸡腿肉",
      "pinyin": "qù gǔ qù pí jī tuǐ ròu",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Cut into 2.5 cm cubes; blot dry thoroughly",
      "noteZh": "切2.5厘米方块；务必吸干水分"
    },
    {
      "id": "sf-02",
      "nameEn": "potato starch",
      "nameZh": "土豆淀粉",
      "pinyin": "tǔ dòu diàn fěn",
      "amountMetric": "60 g",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Substitute cornstarch if unavailable — less crisp but works",
      "noteZh": "若无土豆淀粉，可用玉米淀粉替代（酥脆度略减）"
    },
    {
      "id": "sf-03",
      "nameEn": "Sichuan peppercorns, toasted and finely ground",
      "nameZh": "花椒（焙香研磨）",
      "pinyin": "huā jiāo",
      "amountMetric": "3 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "sf-04",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wǔ xiāng fěn",
      "amountMetric": "2 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "sf-05",
      "nameEn": "cooking wine (or dry sherry)",
      "nameZh": "料酒（或干雪利酒）",
      "pinyin": "liào jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cooking-wine"
    },
    {
      "id": "sf-06",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "白胡椒粉（现磨）",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "sf-07",
      "nameEn": "neutral frying oil (e.g., canola or peanut)",
      "nameZh": "中性炸油（如菜籽油或花生油）",
      "pinyin": "zhōng xìng zhá yóu",
      "amountMetric": "300 ml",
      "amountUS": "1¼ cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "In a bowl, combine chicken cubes, cooking wine, and white pepper. Marinate 15 minutes at room temperature.",
      "textZh": "碗中混合鸡丁、料酒、白胡椒粉，室温腌15分钟。",
      "zhHint": "短时去腥提鲜",
      "stateNote": {
        "visual": "Chicken absorbs liquid; surface looks damp but not wet",
        "visualZh": "鸡丁吸汁；表面微润不积水",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "No raw alcohol smell remains",
        "signalZh": "无生酒气残留"
      }
    },
    {
      "text": "In a separate bowl, mix potato starch, ground Sichuan peppercorns, and five-spice powder. Add marinated chicken and toss until evenly coated.",
      "textZh": "另取碗，混合土豆淀粉、焙香花椒粉、五香粉。倒入腌好鸡丁，抓匀至每块裹粉均匀。",
      "zhHint": "粉料先混匀再裹",
      "stateNote": {
        "visual": "Each cube coated in fine, opaque white layer",
        "visualZh": "每块鸡丁裹上均匀哑光白粉层",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Starch clings without dripping or pooling",
        "signalZh": "淀粉附着牢固，不滴落不结块"
      }
    },
    {
      "text": "Heat oil in a heavy skillet (e.g., cast iron) to 170°C / 340°F. Test with a wooden chopstick: tiny bubbles form around tip.",
      "textZh": "厚底锅（如铸铁锅）倒油，加热至170°C（340°F）。用木筷测试：筷尖冒出细密小泡。",
      "zhHint": "油温宁低勿高",
      "stateNote": {
        "visual": "Oil surface still, no smoke; chopstick emits steady stream of tiny bubbles",
        "visualZh": "油面平静无烟；筷尖持续冒出细密气泡",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium",
        "signal": "Bubbles rise continuously, not sporadically",
        "signalZh": "气泡持续上涌，非零星迸发"
      }
    },
    {
      "text": "Fry chicken in batches, without crowding. Cook 3–4 minutes until golden and crisp. Remove with slotted spoon; drain on wire rack.",
      "textZh": "分批下锅炸，避免堆叠。炸3–4分钟至金黄酥脆。漏勺捞出，架上晾网沥油。",
      "zhHint": "分批保油温稳",
      "stateNote": {
        "visual": "Chicken floats and bubbles vigorously; edges turn deep gold",
        "visualZh": "鸡块浮起并剧烈冒泡；边缘呈深金色",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium",
        "signal": "Sizzle deepens; bubbles slow as crispness sets",
        "signalZh": "滋滋声变沉；气泡渐缓，酥脆感成型"
      }
    },
    {
      "text": "While still hot, transfer chicken to a clean bowl. Sprinkle with 1 tsp fine sea salt and toss gently. Serve immediately.",
      "textZh": "趁热移入干净碗中，撒入1茶匙细海盐，轻拌匀。即刻上桌。",
      "zhHint": "热时撒盐才入味",
      "stateNote": {
        "visual": "Salt crystals glisten on golden, craggy surface",
        "visualZh": "细盐晶粒在金黄粗粝表面闪亮",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Salt adheres without dissolving or clumping",
        "signalZh": "盐粒附着不化、不结团"
      }
    }
  ],
  "tips": [
    "Pat chicken *very* dry before marinating — wet chicken = soggy coating.",
    "Toast Sichuan peppercorns in dry pan 1 minute until fragrant, then grind — never skip this step.",
    "For authentic street-style crunch, double-fry: cool 5 minutes, then re-fry 30 seconds at 180°C.",
    "Serve with pickled mustard greens or cucumber slices to cut richness."
  ],
  "tipsZh": [
    "腌前务必把鸡丁擦得极干——湿鸡=软塌涂层。",
    "花椒须干锅焙香1分钟至出香再研磨——此步不可省。",
    "追求夜市级酥脆？冷却5分钟后，180°C复炸30秒。",
    "配酸辣芥菜或爽脆黄瓜片，解腻提神。"
  ],
  "relatedSlugs": [
    "taiwanese-three-cup-chicken",
    "beer-duck"
  ],
  "image": "/images/recipes/taiwanese-salt-fried-chicken.webp"
};
