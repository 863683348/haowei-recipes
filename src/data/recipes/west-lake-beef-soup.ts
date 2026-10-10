import type { Recipe } from "@/lib/types";

/** West Lake Beef and Tofu Soup (西湖牛肉羹) — Day batch */
export const west_lake_beef_soup: Recipe = {
  "id": "west-lake-beef-soup",
  "slug": "west-lake-beef-soup",
  "titleEn": "West Lake Beef and Tofu Soup",
  "titleZh": "西湖牛肉羹",
  "pinyin": "xī hú niú ròu gēng",
  "cuisine": "浙菜",
  "cuisineEn": "Zhejiang",
  "region": "Hangzhou",
  "regionZh": "杭州",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses everyday chicken stock and soft tofu; restaurant versions build on a clarified superior broth and often finish with minced ham for extra savoriness.",
  "versionNoteZh": "家常版用普通鸡高汤与嫩豆腐；餐厅版以澄清上汤打底，常加火腿末提鲜。",
  "tags": [
    "30-min",
    "soup",
    "comfort",
    "banquet",
    "beginner"
  ],
  "dietary": [
    "none"
  ],
  "story": "Named after Hangzhou's West Lake, this soup is the gentle counterpoint to the region's richer braises — pale, silky, and barely seasoned so the beef stays in the foreground. A Hangzhou friend's mother always served it in a wide shallow bowl so the surface stayed warm to the last spoonful.",
  "storyZh": "得名于杭州西湖，这道羹是当地浓油赤酱类菜肴的温柔对照——色浅、滑嫩、调味极轻，让牛肉始终站在前排。一位杭州朋友的母亲总用宽口浅碗盛它，说这样汤面到最后一口都还是温的。",
  "ingredients": [
    {
      "id": "xh-01",
      "nameEn": "beef tenderloin or sirloin, finely minced",
      "nameZh": "牛里脊／西冷，细剁成末",
      "pinyin": "niú lǐ jǐ mò",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Freeze 20 minutes first — firm meat minces into clean grains instead of smearing",
      "noteZh": "先冷冻20分钟，肉变硬后能剁出利落颗粒而不是糊状"
    },
    {
      "id": "xh-02",
      "nameEn": "soft (silken) tofu, cut into 1 cm dice",
      "nameZh": "嫩豆腐，切1厘米丁",
      "pinyin": "nèn dòu fu",
      "amountMetric": "200 g",
      "amountUS": "1 cup diced",
      "category": "protein",
      "pantry": "asian",
      "termKey": "tofu"
    },
    {
      "id": "xh-03",
      "nameEn": "dried shiitake, rehydrated and finely diced",
      "nameZh": "干香菇，泡发后切细丁",
      "pinyin": "gān xiāng gū",
      "amountMetric": "4 caps (30 g dried)",
      "amountUS": "4 caps (about 1 oz dried)",
      "category": "produce",
      "pantry": "asian",
      "termKey": "dried-shiitake",
      "note": "Soak in warm water 30 minutes; reserve the soaking liquid as stock",
      "noteZh": "温水泡30分钟；泡菇水留作高汤"
    },
    {
      "id": "xh-04",
      "nameEn": "egg white, lightly beaten",
      "nameZh": "蛋清，略打散",
      "pinyin": "dàn qīng",
      "amountMetric": "1 large (35 g)",
      "amountUS": "1 large white",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "xh-05",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "24 g",
      "amountUS": "2½ tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "xh-06",
      "nameEn": "low-sodium chicken stock",
      "nameZh": "低盐鸡高汤",
      "pinyin": "jī gāo tāng",
      "amountMetric": "900 ml",
      "amountUS": "3¾ cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "xh-07",
      "nameEn": "fresh ginger, finely grated",
      "nameZh": "鲜姜末",
      "pinyin": "jiāng mò",
      "amountMetric": "10 g",
      "amountUS": "2 tsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "xh-08",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切细",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "xh-09",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Toss the minced beef with 1 tsp of the cornstarch, 1 tsp grated ginger and the egg white. Rest 10 minutes — this is the velveting step that keeps the beef silky.",
      "textZh": "牛肉末加1茶匙淀粉、1茶匙姜末与蛋清抓匀，静置10分钟——这一步上浆能让牛肉滑嫩。",
      "zhHint": "牛肉上浆10分钟",
      "stateNote": {
        "visual": "Beef looks glossy and slightly sticky, coated in a thin white film",
        "visualZh": "牛肉表面发亮微黏，裹着一层薄白浆",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "When you pinch it, the mince holds together instead of crumbling dry",
        "signalZh": "捏起时肉末成团，不会干散"
      }
    },
    {
      "text": "Bring stock to a bare simmer with the diced shiitake and remaining ginger. Cook 5 minutes so the mushroom flavour moves into the broth.",
      "textZh": "高汤加香菇丁与剩余姜末煮至将沸，小火煮5分钟，让菌香溶入汤中。",
      "zhHint": "香菇先煮出味",
      "stateNote": {
        "visual": "Broth takes on a light brown tint; shiitake dice float and bob gently",
        "visualZh": "汤色转浅褐，香菇丁轻轻浮动",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Steam smells earthy and savoury rather than plain stock",
        "signalZh": "蒸汽带土壤与鲜香味，不再是单调的高汤味"
      }
    },
    {
      "text": "Add the tofu dice and simmer 3 minutes, stirring only with the back of a spoon so the cubes stay whole.",
      "textZh": "下嫩豆腐丁煮3分钟，只用勺背轻推，保持豆腐完整。",
      "zhHint": "豆腐轻推勿搅",
      "stateNote": {
        "visual": "Tofu cubes stay square-edged and look slightly translucent at the corners",
        "visualZh": "豆腐丁棱角完整，边角略呈半透明",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Cubes jiggle when you tap the pot, but no white crumbs cloud the broth",
        "signalZh": "轻敲锅身豆腐会颤动，汤中没有白色碎屑浑浊"
      }
    },
    {
      "text": "Scatter the marinated beef into the simmering broth a little at a time, stirring gently to separate the grains. Cook 2 minutes.",
      "textZh": "将上浆牛肉分次撒入微沸的汤中，轻搅使颗粒散开，煮2分钟。",
      "zhHint": "牛肉分次下锅",
      "stateNote": {
        "visual": "Beef grains turn from pink to pale brown and stay separate, not clumped",
        "visualZh": "牛肉粒由粉转浅褐，颗粒分明不结团",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Broth stays nearly clear — if it turns grey and cloudy, the heat was too high",
        "signalZh": "汤仍近清澈——若发灰浑浊说明火太大"
      }
    },
    {
      "text": "Stir the remaining cornstarch with 3 tbsp cold water, pour it in slowly while stirring, and simmer 1 minute until the soup is lightly thickened.",
      "textZh": "剩余淀粉加3汤匙冷水调开，缓慢倒入并搅拌，小火煮1分钟至汤微稠。",
      "zhHint": "淀粉水勾薄芡",
      "stateNote": {
        "visual": "Soup becomes glossy and holds faint spoon trails for a second",
        "visualZh": "汤体变亮，勺痕能停留一瞬",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Bubbles turn from fast and small to slow and glassy",
        "signalZh": "气泡由细密急促转为缓慢透亮"
      }
    },
    {
      "text": "Season with white pepper and salt to taste. Turn off the heat, stir in scallion, and serve immediately in warmed bowls.",
      "textZh": "以白胡椒粉与盐调味，关火后拌入葱花，趁热盛入温过的碗中。",
      "zhHint": "关火再下葱花",
      "stateNote": {
        "visual": "Pale amber soup with suspended beef grains, white tofu and green scallion",
        "visualZh": "浅琥珀色汤中悬浮牛肉粒、白色豆腐与绿色葱花",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "First spoonful tastes savoury then warmly peppery, with no starchy aftertaste",
        "signalZh": "第一口先鲜后暖辣，无淀粉味残留"
      }
    }
  ],
  "tips": [
    "Slice the beef against the grain before mincing, or it will chew like rubber.",
    "Keep the soup at a bare simmer — a rolling boil will toughen the beef and cloud the broth.",
    "Add a handful of frozen peas or corn in step 3 for colour and sweetness."
  ],
  "tipsZh": [
    "剁之前先逆着纹理切，否则牛肉嚼起来像橡皮。",
    "全程保持将沸未沸的状态，大滚会让牛肉变老、汤色发浑。",
    "第3步可加一把冷冻青豆或玉米粒，增加颜色与甜味。"
  ],
  "relatedSlugs": [
    "three-delicacy-tofu-soup",
    "sweet-corn-cream-soup"
  ],
  "image": "/images/recipes/egg-drop-soup.webp"
};
