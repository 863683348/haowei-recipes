import type { Recipe } from "@/lib/types";

/** Chopped Chili Fish Head (剁椒鱼头) — Seed batch */
export const duojiao_fish_head: Recipe = {
  "id": "duojiao-yu-tou",
  "slug": "duojiao-fish-head",
  "titleEn": "Chopped Chili Fish Head",
  "titleZh": "剁椒鱼头",
  "pinyin": "duò jiāo yú tóu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Changsha",
  "regionZh": "长沙",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses whole fish head (not split), steamed gently to retain tenderness—no deep-frying or restaurant-style oil blasts.",
  "versionNoteZh": "家常版用整鱼头（不劈开），清蒸保留嫩滑，不用油炸或餐厅式重油泼制。",
  "tags": [
    "45-min",
    "dinner-party",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Changsha always made this for summer reunions at her riverside apartment—she’d buy silver carp heads from the Xiangjiang market before dawn, saying the freshest heads give the cleanest flavor and best texture.",
  "storyZh": "我长沙的姑妈每逢夏日家庭聚会必做这道菜，她总在湘江市场天未亮就去买银鲤鱼头，说最新鲜的鱼头味道最清、口感最嫩。",
  "ingredients": [
    {
      "id": "fy-01",
      "nameEn": "silver carp fish head (whole, scaled, gills removed)",
      "nameZh": "白鲢鱼头（整只，已刮鳞去鳃）",
      "pinyin": "bái lián yú tóu",
      "amountMetric": "750 g",
      "amountUS": "1.5 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask fishmonger to split head horizontally but keep intact; look for clear eyes and firm flesh.",
      "noteZh": "请鱼贩横向剖开但不切断；选眼球清澈、鱼肉紧实者。"
    },
    {
      "id": "fy-02",
      "nameEn": "homemade Hunan chopped chili (duōjiāo)",
      "nameZh": "湖南自制剁椒",
      "pinyin": "hún nán zì zhì duò jiāo",
      "amountMetric": "120 g",
      "amountUS": "½ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: Lee Kum Kee 'Hunan Style Chopped Chili' (check label for no added sugar or MSG).",
      "noteZh": "替代：李锦记‘湖南风味剁椒’（确认无添加糖或味精）。"
    },
    {
      "id": "fy-03",
      "nameEn": "ginger",
      "nameZh": "姜",
      "pinyin": "jiāng",
      "amountMetric": "25 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "note": "Use young ginger if possible—milder and juicier.",
      "noteZh": "优选嫩姜，辣度低、汁水足。",
      "termKey": "ginger"
    },
    {
      "id": "fy-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "fy-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: dry sherry (not cooking wine).",
      "noteZh": "替代：干雪利酒（非料酒）。",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Rinse fish head under cold water; pat dry. Score both sides of the head deeply with a knife (3–4 diagonal cuts per side) to allow steam and seasoning penetration.",
      "textZh": "鱼头冷水冲洗，擦干。两面斜刀深划3–4道，便于入味和受热均匀。",
      "zhHint": "斜刀深划",
      "stateNote": {
        "visual": "Clean, glistening surface with visible knife marks",
        "visualZh": "表面光洁湿润，刀痕清晰可见",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Flesh springs back when pressed lightly",
        "signalZh": "轻按鱼肉有弹性回弹"
      }
    },
    {
      "text": "Place fish head on a heatproof plate large enough to hold it flat. Tuck thin slices of ginger into all cuts and under the gills.",
      "textZh": "将鱼头平铺于耐热大盘中，在每道刀口及鱼鳃下塞入姜片。",
      "zhHint": "姜片塞入刀口",
      "stateNote": {
        "visual": "Ginger peeking from cuts, head lying flat without pooling liquid",
        "visualZh": "姜片从刀口微露，鱼头平卧无积水",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No water pooling beneath head",
        "signalZh": "盘底无积水"
      }
    },
    {
      "text": "Evenly spread chopped chili over entire fish head, mounding slightly over the thickest part (the crown). Drizzle with light soy sauce and Shaoxing wine.",
      "textZh": "将剁椒均匀铺满鱼头全身，厚铺于最厚处（头顶部位），再淋入生抽与绍酒。",
      "zhHint": "剁椒厚铺头顶",
      "stateNote": {
        "visual": "Vibrant red chili layer covering white flesh completely",
        "visualZh": "鲜红剁椒完全覆盖鱼肉，色泽饱满",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No bare patches of fish visible",
        "signalZh": "无鱼肉裸露"
      }
    },
    {
      "text": "Steam over vigorously boiling water for 22–25 minutes, until fish flesh flakes easily with a fork and turns opaque white throughout.",
      "textZh": "大火沸水蒸22–25分钟，至鱼肉用叉可轻松分离、通体呈不透明乳白色。",
      "zhHint": "大火沸水蒸透",
      "stateNote": {
        "visual": "Steam rising steadily; flesh pearly white and slightly separating at edges",
        "visualZh": "蒸汽持续升腾；鱼肉呈珠光乳白，边缘微离骨",
        "timeRef": "22–25 minutes",
        "timeRefZh": "22–25 分钟",
        "heat": "high",
        "signal": "Fork slides in and out cleanly; no translucent pink remains",
        "signalZh": "叉子进出顺畅；无半透明粉红色残留"
      }
    },
    {
      "text": "Carefully remove plate from steamer. Discard excess liquid pooled at bottom. Garnish with finely sliced scallion greens.",
      "textZh": "小心取出蒸盘，倒掉盘底多余汤汁，撒上葱绿丝即成。",
      "zhHint": "倒掉汤汁再撒葱",
      "stateNote": {
        "visual": "Clear, pale pink broth in bottom of plate, now discarded",
        "visualZh": "盘底浅粉色清汤已被倒净",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Liquid separates clearly from fish surface",
        "signalZh": "汤汁与鱼肉表面明显分离"
      }
    }
  ],
  "tips": [
    "Always use fresh fish head — never frozen; texture suffers badly.",
    "If using store-bought duōjiāo, rinse briefly in cold water to reduce saltiness.",
    "Serve immediately — this dish loses its delicate steam-softened texture after 5 minutes."
  ],
  "tipsZh": [
    "务必用鲜鱼头，禁用冷冻——口感严重受损。",
    "若用市售剁椒，可用冷水快速冲一下减咸。",
    "出锅即食，放置超5分钟会失其软嫩蒸香。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/duojiao-fish-head.webp"
};
