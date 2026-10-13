import type { Recipe } from "@/lib/types";

/** Scallion Flower Rolls (葱油花卷) — Day batch */
export const scallion_flower_rolls: Recipe = {
  "id": "scallion-flower-rolls",
  "slug": "scallion-flower-rolls",
  "titleEn": "Scallion Flower Rolls",
  "titleZh": "葱油花卷",
  "pinyin": "cōng yóu huā juǎn",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 150,
  "servings": 10,
  "version": "family",
  "versionNote": "Home cooks brush oil and scallion onto a rolled sheet, then roll and cut. Northern street stalls twist each piece a second time and press it down from the top, which builds the tall layered crown that gives the roll its name — the layers are what separate a flower roll from a scallion bun.",
  "versionNoteZh": "家常版是擀成大薄片刷油撒葱，再卷起切段；北方摊贩会再把每段二次拧转并从上往下压，做出那种高挺分层的花冠状，这也正是「花卷」之名的由来——层次才是花卷区别于葱包的地方。",
  "tags": [
    "steamed-buns",
    "scallion",
    "make-ahead",
    "freezer-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "花卷 is mantou's savoury sibling, and the whole difference is one extra step: the dough is rolled flat, oiled, and rolled back up so that steaming separates dozens of paper-thin layers. Any northern Chinese breakfast table runs on these, torn apart along the spiral and eaten alongside congee.",
  "storyZh": "花卷是馒头的咸口兄弟，全部区别只在多一步：把面团擀开、刷油、再卷回去，蒸的时候就会分离出几十层薄如纸的层次。北方人家的早餐桌上离不开它，顺着漩涡撕开，配着粥吃。",
  "ingredients": [
    {
      "id": "sfr-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "sfr-02",
      "nameEn": "warm water (35°C)",
      "nameZh": "温水（35°C）",
      "pinyin": "wēn shuǐ",
      "amountMetric": "270 ml",
      "amountUS": "1 cup + 2 tbsp",
      "category": "other",
      "pantry": "local",
      "note": "Water not milk — the layers stay more distinct without the dairy fat",
      "noteZh": "用水不用奶——少了乳脂，层次更分明"
    },
    {
      "id": "sfr-03",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "pinyin": "gān jiàomǔ",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "sfr-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "pinyin": "xì shā táng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Just enough to feed the yeast without sweetening the roll",
      "noteZh": "刚好够养酵母，不会让花卷发甜"
    },
    {
      "id": "sfr-05",
      "nameEn": "neutral oil, for brushing",
      "nameZh": "食用油（刷面用）",
      "pinyin": "shí yòng yóu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "The oil is what keeps the layers from fusing in the steamer",
      "noteZh": "这层油是防止层次在蒸制中黏合的关键"
    },
    {
      "id": "sfr-06",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱，切细葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "90 g",
      "amountUS": "1 bunch",
      "category": "produce",
      "pantry": "local",
      "note": "Both white and green parts; dry them thoroughly first",
      "noteZh": "葱白葱绿都用；务必先彻底擦干",
      "termKey": "scallion"
    },
    {
      "id": "sfr-07",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Sprinkled over the oiled sheet, not into the dough",
      "noteZh": "撒在刷了油的薄片上，而不是加进面团"
    },
    {
      "id": "sfr-08",
      "nameEn": "toasted sesame oil (optional)",
      "nameZh": "芝麻香油（可选）",
      "pinyin": "zhī má yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Brushed on with the neutral oil for depth",
      "noteZh": "与素油一起刷上调底味",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Proof the yeast with the sugar in the warm water 8 minutes. Add to the flour with the salt, mix to a shaggy mass, then knead 12 minutes until smooth and elastic.",
      "textZh": "酵母与糖溶于温水静置8分钟，加进面粉与盐搅成絮状，再揉12分钟至光滑有弹性。",
      "zhHint": "合面揉制",
      "stateNote": {
        "visual": "Dough is smooth and pale, pulls cleanly off the board and holds a smooth round ball shape",
        "visualZh": "面团光滑偏白，能干净脱离案板，能收成光滑圆球",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "A stretched piece forms a translucent windowpane instead of tearing",
        "signalZh": "抻开能形成透光薄膜而不是破裂"
      }
    },
    {
      "text": "Cover and rise at room temperature 75 minutes until doubled.",
      "textZh": "加盖室温发酵75分钟至两倍大。",
      "zhHint": "一发",
      "stateNote": {
        "visual": "Dough domes above the bowl rim with a taut, faintly glossy surface",
        "visualZh": "面团高过碗口，表面紧绷微亮",
        "timeRef": "75 minutes",
        "timeRefZh": "75 分钟",
        "signal": "A finger indentation stays put rather than springing back",
        "signalZh": "指印保持原状而不回弹"
      }
    },
    {
      "text": "Roll the dough into a 40 × 30 cm rectangle about 4 mm thick. Brush evenly with the oil (mixed with sesame oil if using), then scatter salt and scallion over the whole surface, leaving a 1 cm border.",
      "textZh": "面团擀成约40×30厘米、厚4毫米的长方形薄片。均匀刷油（若用则混合香油），再满面撒盐与葱花，四周留1厘米边。",
      "zhHint": "擀片刷油撒葱",
      "stateNote": {
        "visual": "The whole sheet glistens with a thin even film of oil, and green scallion is visible edge to edge",
        "visualZh": "整张薄片都泛着均匀的薄油光，葱花从一头到另一头分布可见",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Lifting a corner shows translucent stretched dough rather than a thick bready sheet",
        "signalZh": "掀起一角呈半透明的薄片，而不是厚实的面包质感"
      },
      "tip": "Dry the scallions with a towel before slicing. Wet scallion makes the layers steam apart into a soggy mess.",
      "tipZh": "切葱前先用布擦干。带水的葱会让层次在蒸制时被水汽泡烂。"
    },
    {
      "text": "Starting from a long edge, roll the sheet up tightly into a log. Press the seam closed and roll the log gently to even it out to about 5 cm thick.",
      "textZh": "从长边开始把薄片紧紧卷成长条，捏紧收口，轻轻滚动搓至约5厘米粗。",
      "zhHint": "卷长条",
      "stateNote": {
        "visual": "The spiral is tight and even with no gaps between the layers; the seam is sealed along its whole length",
        "visualZh": "漩涡紧密均匀，层与层之间没有空隙；收口整条捏紧",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "The cut end shows a tight coil, and the log does not unwind when you set it down",
        "signalZh": "切面呈现紧密的漩涡纹，放下后不会松开"
      }
    },
    {
      "text": "Cut into 10 equal pieces. Stack two pieces, press a chopstick down across the middle to make a deep crease, then lift and pinch the two ends together underneath to form the classic twisted roll.",
      "textZh": "切成10等份。取两份叠放，用筷子在中间横压出深痕，再提起把两端在底部捏合，做成经典的花卷造型。",
      "zhHint": "压痕拧花",
      "stateNote": {
        "visual": "The layers fan open at the cut edges and each roll stands with a visible crown of separated spirals",
        "visualZh": "切面处的层次呈扇形张开，每个花卷都立着可见的分层「花冠」",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "The roll keeps the crease when picked up rather than springing back flat",
        "signalZh": "拿起来时压痕保持不散，不会弹回原状"
      },
      "tip": "Press firmly with the chopstick and do not worry about flattening it — the layers always reopen in the steamer.",
      "tipZh": "筷子要用力压下去，别怕压扁——层次在蒸锅里一定还会重新张开。"
    },
    {
      "text": "Arrange on parchment squares, cover loosely and proof 25 minutes. Steam 15 minutes over vigorously boiling water with a cloth-wrapped lid, then rest 5 minutes off the heat before opening.",
      "textZh": "摆在烘焙纸方块上盖松布醒发25分钟。笼布包盖大火沸水蒸15分钟，关火焖5分钟后再开盖。",
      "zhHint": "二发与蒸制",
      "stateNote": {
        "visual": "Rolls are plump and white with green scallion visible between clearly separated layers",
        "visualZh": "花卷饱满洁白，分明的层次之间看得到碧绿葱花",
        "timeRef": "25 minutes proof + 15 minutes steam + 5 minutes rest",
        "timeRefZh": "醒25分钟 + 蒸15分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Pulling one apart along the spiral reveals distinct sheets rather than a solid crumb",
        "signalZh": "顺着漩涡撕开能看到分明的层片，而不是实心组织"
      }
    }
  ],
  "tips": [
    "Every layer needs oil. Miss a patch and that section fuses into plain dough.",
    "Water, not milk, in the dough — the layers separate more cleanly without dairy fat.",
    "Re-steam leftovers for 6 minutes; microwaving turns them rubbery in seconds."
  ],
  "tipsZh": [
    "每一层都要刷到油。漏刷一处，那块就会黏成实心面团。",
    "面团用水不用奶——少了乳脂，层次分离得更干脆。",
    "剩的回蒸6分钟；微波只要几秒就会让它们变得像橡皮。"
  ],
  "relatedSlugs": [
    "flower-rolls-steamed-buns",
    "scallion-pancakes"
  ],
  "image": "/images/recipes/flower-rolls-steamed-buns.webp"
};
