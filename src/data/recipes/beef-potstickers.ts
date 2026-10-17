import type { Recipe } from "@/lib/types";

/** Beef Potstickers (Niu Rou Guo Tie) (牛肉锅贴) — Day batch */
export const beef_potstickers: Recipe = {
  "id": "beef-potstickers",
  "slug": "beef-potstickers",
  "titleEn": "Beef Potstickers (Niu Rou Guo Tie)",
  "titleZh": "牛肉锅贴",
  "pinyin": "niú ròu guō tiē",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 65,
  "servings": 4,
  "version": "family",
  "versionNote": "Home potstickers use a beef-and-onion filling with a little cornstarch and water beaten in, and are pan-fried in a covered skillet until the base is lacy. Northern shop versions add beef fat and bake them in long trays so the whole underside crisps, which gives a deeper crust but a much heavier bite.",
  "versionNoteZh": "家常锅贴用牛肉洋葱馅，打进少许淀粉和水，加盖平底锅煎到锅底结出蕾丝脆壳。北方铺子加牛油、用长铁盘整盘烘烤，底部整体焦脆，壳更厚但明显更腻口。",
  "tags": [
    "dumplings",
    "pan-fried",
    "beef",
    "crispy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Guotie — literally pot-stick — is what happens when yesterday's boiled dumplings meet a hot pan, and the beef version is the Moslem quarter's answer to the pork original. The technique is not frying, it is steaming then frying: you brown the base, add water and lid it, and the steam cooks the filling while the water boils away and the base re-crisps. Get that order wrong and you get either raw centres or a burnt, leathery bottom.",
  "storyZh": "锅贴——字面意思就是「贴在锅上」——是昨天的水饺遇上热锅的产物，而牛肉版是回民街区对猪肉原版的回应。它的技法不是煎，而是先蒸后煎：先把底面煎黄，加水盖盖，蒸汽把馅心焖熟，水收干后底面重新变脆。顺序搞错，要么馅心生，要么锅底焦成皮革。",
  "ingredients": [
    {
      "id": "bp-01",
      "nameEn": "round dumpling wrappers",
      "nameZh": "饺子皮",
      "amountMetric": "450 g",
      "amountUS": "about 36 wrappers",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "bp-02",
      "nameEn": "ground beef (15% fat)",
      "nameZh": "牛肉末（略带肥）",
      "amountMetric": "450 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "bp-03",
      "nameEn": "yellow onion, finely minced",
      "nameZh": "黄洋葱（切细末）",
      "amountMetric": "120 g",
      "amountUS": "¾ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "bp-04",
      "nameEn": "napa cabbage, minced and squeezed",
      "nameZh": "大白菜（切末挤干）",
      "amountMetric": "150 g",
      "amountUS": "1½ cups squeezed",
      "category": "produce",
      "pantry": "local",
      "termKey": "napa-cabbage"
    },
    {
      "id": "bp-05",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bp-06",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜（切末）",
      "amountMetric": "10 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "bp-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "25 ml",
      "amountUS": "1 tbsp + 2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bp-08",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "bp-09",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "bp-10",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "bp-11",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "3 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "bp-12",
      "nameEn": "neutral oil, for frying",
      "nameZh": "食用油（煎制用）",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Mince the cabbage, salt it lightly, rest 10 minutes and squeeze dry. Mince the onion and squeeze it too — both must be dry.",
      "textZh": "白菜切末略腌10分钟后挤干；洋葱切末也挤干——两者都必须干燥。",
      "zhHint": "处理白菜洋葱",
      "stateNote": {
        "visual": "Cabbage has collapsed and dulled; the onion is translucent and no longer weeping liquid when pressed",
        "visualZh": "白菜塌缩变暗；洋葱呈半透明，按压时不再渗水",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Both squeezed in a towel come away barely damp"
      }
    },
    {
      "text": "Combine beef, soy sauce, wine, ginger, garlic, white pepper and cornstarch. Stir in one direction 3 minutes, then beat in 60 ml cold water a spoonful at a time.",
      "textZh": "牛肉末加生抽、黄酒、姜末、蒜末、白胡椒与淀粉，顺一个方向搅3分钟，再分次打进60毫升冷水。",
      "zhHint": "打水馅",
      "stateNote": {
        "visual": "Meat turns from crumbly to a glossy, hydrated paste that clings and slaps against the bowl",
        "visualZh": "肉馅由松散变为油亮含水的糊状，能挂在碗上并有拍打感",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "signal": "Lift the spoon and the paste falls in a slow ribbon"
      }
    },
    {
      "text": "Fold in the onion, cabbage and sesame oil, then chill 15 minutes so the filling firms up for wrapping.",
      "textZh": "拌入洋葱、白菜与香油，冷藏15分钟让馅心变紧便于包制。",
      "zhHint": "拌馅冷藏",
      "stateNote": {
        "visual": "Filling is cohesive and matte-glossy with visible pale onion and cabbage flecks; no liquid pools",
        "visualZh": "馅料抱团、呈哑光带油，能看到浅色的洋葱与白菜粒；碗底不积汁",
        "timeRef": "3 minutes + 15 minutes chilling",
        "timeRefZh": "3分钟 + 冷藏15分钟",
        "signal": "A spoonful holds a firm peak"
      }
    },
    {
      "text": "Place 1 tbsp filling in each wrapper, wet the edge and pleat closed, leaving the ends open in the classic guotie shape. Flatten the base slightly.",
      "textZh": "每张皮放1汤匙馅，抹水捏褶收口，两端留口成经典锅贴造型，底部略压平。",
      "zhHint": "包锅贴",
      "stateNote": {
        "visual": "Potstickers are elongated with a flat base, an open seam at both ends and a pleated top ridge",
        "visualZh": "锅贴呈长条形，底面平整，两端开口，顶部有捏褶的脊",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "They stand upright on their flat base without tipping",
        "signalZh": "能以平底竖立不倒"
      },
      "tip": "Leave the ends open. That is the guotie shape, and it lets steam escape instead of splitting the wrapper."
    },
    {
      "text": "Heat 2 tbsp oil in a heavy non-stick skillet over medium-high. Arrange the potstickers flat-side down and fry 2 minutes, then pour in 150 ml water, cover immediately and steam 8 minutes.",
      "textZh": "厚底不粘锅中火预热，放2汤匙油，锅贴底面朝下摆好煎2分钟，倒入150毫升水并立即加盖，焖蒸8分钟。",
      "zhHint": "煎后加水焖",
      "stateNote": {
        "visual": "After frying, the bases are pale gold; after steaming, the tops have gone translucent and slightly swollen while the water is nearly gone",
        "visualZh": "煎后底面呈浅金色；焖蒸后顶部变半透明并微微鼓起，锅中水分基本收干",
        "timeRef": "2 minutes fry + 8 minutes steam",
        "timeRefZh": "煎2分钟 + 焖8分钟",
        "heat": "medium-high",
        "signal": "The sizzle changes from a soft hiss to a sharp, dry crackle as the last water evaporates",
        "signalZh": "最后的水分蒸发时，声音由柔和的滋滋声转为清脆干燥的爆响"
      }
    },
    {
      "text": "Uncover, drizzle the remaining oil around the edges, and fry 2 more minutes until the base is deep golden and lacy. Invert onto a plate.",
      "textZh": "开盖，沿锅边淋入剩下的油，再煎2分钟至底面金黄起蕾丝脆壳，倒扣入盘。",
      "zhHint": "收干起脆",
      "stateNote": {
        "visual": "The base is one connected golden-brown lace sheet; the tops are soft and translucent and the filling is set",
        "visualZh": "底面连成一片金褐色蕾丝脆壳；顶部柔软半透明，馅心已熟透定型",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "The potstickers release from the pan as a single piece when inverted",
        "signalZh": "倒扣时锅贴能整片脱离锅底"
      }
    }
  ],
  "tips": [
    "Beat water into the beef. Beef is leaner than pork and will steam up dry without it.",
    "Keep the lid on until the water is gone; peeking drops the steam and the filling stays raw.",
    "Use a heavy non-stick pan — thin pans scorch the base before the filling cooks."
  ],
  "tipsZh": [
    "牛肉要打水。牛肉比猪肉瘦，不打水蒸出来就是干的。",
    "水收干前别揭盖；一揭蒸汽散了，馅心还是生的。",
    "用厚底不粘锅——薄锅会在馅熟之前就把锅底烧焦。"
  ],
  "relatedSlugs": [
    "shanghai-style-guotie",
    "pork-cabbage-dumplings",
    "celery-beef-stir-fry"
  ],
  "image": "/images/recipes/shanghai-style-guotie.webp"
};
