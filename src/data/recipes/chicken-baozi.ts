import type { Recipe } from "@/lib/types";

/** Chicken Baozi (Ji Rou Bao) (鸡肉包) — Day batch */
export const chicken_baozi: Recipe = {
  "id": "chicken-baozi",
  "slug": "chicken-baozi",
  "titleEn": "Chicken Baozi (Ji Rou Bao)",
  "titleZh": "鸡肉包",
  "pinyin": "jī ròu bāo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 175,
  "servings": 12,
  "version": "family",
  "versionNote": "Home versions use chicken thigh because breast turns chalky after steaming, and add wood ear for crunch plus a spoon of cornstarch to bind the juices. Chain-shop versions lean on chicken skin and chicken powder, which tastes rounder but goes gluey when reheated.",
  "versionNoteZh": "家常版用鸡腿肉，因为鸡胸蒸完发柴；配木耳增脆，再加一勺淀粉锁汁。连锁店的版本靠鸡皮和鸡粉提味，味道更圆润，但复热后会发黏。",
  "tags": [
    "baozi",
    "steamed",
    "poultry",
    "make-ahead"
  ],
  "dietary": [
    "none"
  ],
  "story": "Chicken baozi is the bun that exists because pork got expensive, and then stayed because it is genuinely lighter. The problem is that chicken has almost no fat and no collagen, so on its own it steams into a dry ball. The fix is a wet binder — stock beaten in a spoon at a time, plus cornstarch — which is the same logic as a wonton filling and works every time.",
  "storyZh": "鸡肉包的诞生是因为猪肉贵了，留下来则是因为它确实清爽。麻烦在于鸡肉几乎没有脂肪也没有胶质，单独蒸出来就是一颗干球。解法是湿性黏合剂——高汤一勺一勺打进去，再加淀粉——这和馄饨馅是同一个道理，每次都管用。",
  "ingredients": [
    {
      "id": "cb-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "cb-02",
      "nameEn": "warm water (35°C)",
      "nameZh": "温水（35°C）",
      "amountMetric": "265 ml",
      "amountUS": "1 cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "cb-03",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "cb-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cb-05",
      "nameEn": "boneless chicken thigh, hand-minced",
      "nameZh": "去骨鸡腿肉（手剁）",
      "amountMetric": "450 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cb-06",
      "nameEn": "dried wood ear mushrooms, soaked",
      "nameZh": "干木耳（泡发）",
      "amountMetric": "20 g dried",
      "amountUS": "1 cup soaked",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "wood-ear"
    },
    {
      "id": "cb-07",
      "nameEn": "fresh shiitake, small dice",
      "nameZh": "鲜香菇（切小丁）",
      "amountMetric": "100 g",
      "amountUS": "1½ cups",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cb-08",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "50 g",
      "amountUS": "¾ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cb-09",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cb-10",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "25 ml",
      "amountUS": "1 tbsp + 2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cb-11",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "cb-12",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "cb-13",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "20 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cb-14",
      "nameEn": "cold chicken stock",
      "nameZh": "冷鸡汤（或清水）",
      "amountMetric": "80 ml",
      "amountUS": "⅓ cup",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak the wood ear in warm water 25 minutes, trim the tough bases, then finely shred. Blanch 1 minute and squeeze very dry.",
      "textZh": "木耳温水泡25分钟，剪去硬蒂后切细丝，汆水1分钟并彻底挤干。",
      "zhHint": "处理木耳",
      "stateNote": {
        "visual": "Wood ear has expanded to several times its dried size and is glossy and translucent; after squeezing it feels almost dry to the touch",
        "visualZh": "木耳涨发到干品数倍大，透亮有光泽；挤干后手感近乎干燥",
        "timeRef": "25 minutes soaking",
        "timeRefZh": "泡25分钟",
        "signal": "Squeezing a handful yields no more than a few drops"
      }
    },
    {
      "text": "Hand-mince the chicken to a coarse paste — do not use a food processor. Add soy sauce, oyster sauce, ginger and scallion and stir hard in one direction 2 minutes.",
      "textZh": "鸡腿肉手剁成粗茸——不要用料理机。加生抽、蚝油、姜末葱花，顺一个方向用力搅2分钟。",
      "zhHint": "剁馅调味",
      "stateNote": {
        "visual": "Meat turns sticky and slightly translucent at the edges and starts to climb the spoon",
        "visualZh": "肉馅发黏、边缘微微透亮，并开始挂在勺子上",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Lift the spoon and the meat stretches in a strand before breaking"
      }
    },
    {
      "text": "Beat in the cold stock one tablespoon at a time, waiting until each is fully absorbed. Stir in the cornstarch, sesame oil, wood ear and shiitake. Chill 20 minutes.",
      "textZh": "冷高汤一次一汤匙打进去，每次都搅到完全吸收。加入淀粉、香油、木耳与香菇丁，冷藏20分钟。",
      "zhHint": "打水冷藏",
      "stateNote": {
        "visual": "Filling is glossy, loose and spoonable but holds a peak, with black wood ear and brown shiitake flecks throughout",
        "visualZh": "馅料油亮、松软可舀但能立尖，黑色木耳与褐色香菇粒分布均匀",
        "timeRef": "10 minutes + 20 minutes chilling",
        "timeRefZh": "10分钟 + 冷藏20分钟",
        "signal": "Tilt the bowl and the filling moves slowly as one mass instead of slumping",
        "signalZh": "倾斜碗时馅料整体缓慢移动而不是塌散"
      },
      "tip": "Cold stock and a cold bowl. Warm filling will start to set the cornstarch before you have wrapped anything."
    },
    {
      "text": "Knead flour, sugar and yeast into the warm water 12 minutes, then rise 70 minutes until doubled.",
      "textZh": "面粉加糖、酵母与温水揉12分钟，发酵70分钟至两倍大。",
      "zhHint": "和面一发",
      "stateNote": {
        "visual": "Dough is smooth and ivory with a fine, even web of bubbles when torn",
        "visualZh": "面团光滑象牙白，撕开可见细密均匀的气孔",
        "timeRef": "70 minutes",
        "timeRefZh": "70 分钟",
        "signal": "A floured finger dent holds for 3 seconds"
      }
    },
    {
      "text": "Divide the dough into 12, wrap 2 tbsp filling each, pleat closed, and proof 25 minutes.",
      "textZh": "面团分12份，每份包2汤匙馅，捏褶收口，醒发25分钟。",
      "zhHint": "包制醒发",
      "stateNote": {
        "visual": "Buns look slightly swollen with smooth, taut tops and no filling showing at the seam",
        "visualZh": "包子微微鼓胀，顶部光滑紧绷，收口处没有馅心外露",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "A gentle poke springs back slowly"
      }
    },
    {
      "text": "Steam over vigorously boiling water 15 minutes, then turn off the heat and rest 5 minutes before opening.",
      "textZh": "沸水大火蒸15分钟，关火焖5分钟再开盖。",
      "zhHint": "蒸制焖锅",
      "stateNote": {
        "visual": "Buns are plump and pale ivory and the base peels away from the parchment without tearing",
        "visualZh": "包子饱满呈象牙白，底部能完整撕离纸而不破",
        "timeRef": "15 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸15分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts out and the bun tops are dry rather than wet"
      }
    }
  ],
  "tips": [
    "Chicken thigh, not breast. Breast has no fat to protect it through 15 minutes of steam.",
    "Beat the stock in slowly — dump it in at once and the filling will not bind, it will just be wet.",
    "Chill the filling before wrapping; cold filling is dramatically easier to pleat."
  ],
  "tipsZh": [
    "用鸡腿肉，别用鸡胸——鸡胸没有脂肪撑不过15分钟的蒸汽。",
    "高汤要慢慢打进去——一次全倒只会让馅变湿，根本不上劲。",
    "包之前把馅冷藏，冷馅明显好捏褶。"
  ],
  "relatedSlugs": [
    "fresh-pork-baozi",
    "three-umami-baozi",
    "shiitake-greens-baozi"
  ],
  "image": "/images/recipes/fresh-pork-baozi.webp"
};
