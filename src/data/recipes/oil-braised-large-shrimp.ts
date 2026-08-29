import type { Recipe } from "@/lib/types";

/** Oil-Braised Large Shrimp (油焖大虾) — Seed batch */
export const oil_braised_large_shrimp: Recipe = {
  "id": "you-men-da-xia",
  "slug": "oil-braised-large-shrimp",
  "titleEn": "Oil-Braised Large Shrimp",
  "titleZh": "油焖大虾",
  "pinyin": "yóu mèn dà xiā",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips caramelized sugar syrup — instead, natural shrimp juices meld with light soy and Shaoxing for balanced umami-sweetness without cloying richness.",
  "versionNoteZh": "家庭版不炒糖色，依靠虾壳胶质与酱油、黄酒自然融合，咸鲜微甜，不腻不齁。",
  "tags": [
    "30-min",
    "weeknight",
    "seafood"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Yantai cooked this every Lunar New Year Eve — he’d crack open the shrimp heads himself to extract roe, stirring it into the braising liquid for ‘golden depth.’ He said, 'A good oil-braise should taste like the sea at low tide — rich but clean.'",
  "storyZh": "烟台的爷爷每逢除夕必做这道菜——他亲手掰开虾头取卵，拌入卤汁，称作‘海之金’。他说：‘好油焖，要尝出退潮时的大海——浓而不浊。’",
  "ingredients": [
    {
      "id": "om-01",
      "nameEn": "large whole shrimp with shells and heads (preferably wild-caught)",
      "nameZh": "带壳带头大虾（优选野生）",
      "pinyin": "dà xiā",
      "amountMetric": "400 g",
      "amountUS": "14 oz (about 12–14 shrimp)",
      "category": "protein",
      "pantry": "local",
      "note": "Frozen wild-caught Pacific spot prawns work well — thaw fully.",
      "noteZh": "可用冷冻野生斑节虾替代，需完全解冻。"
    },
    {
      "id": "om-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use naturally brewed, low-sodium if sensitive.",
      "noteZh": "选用天然酿造、低钠款更佳。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "om-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry if unavailable.",
      "noteZh": "无绍兴酒可用干雪利酒替代。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "om-04",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Fine granulated only — avoids graininess in glaze.",
      "noteZh": "仅用细砂糖，防止酱汁起砂。"
    }
  ],
  "steps": [
    {
      "text": "Pat shrimp dry. Heat 30 ml neutral oil in a heavy-bottomed wok or skillet over medium-high heat until shimmering.",
      "textZh": "虾擦干水分。厚底炒锅或深煎锅中倒入30毫升无味油，中高火烧至微烟。",
      "zhHint": "虾要干，油要热",
      "stateNote": {
        "visual": "Oil surface ripples faintly, thin wisps of smoke appear.",
        "visualZh": "油面微漾，浮起极细青烟。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium-high",
        "signal": "Wood chopstick tip sizzles gently when dipped.",
        "signalZh": "木筷尖端浸入即轻微‘滋滋’响。"
      }
    },
    {
      "text": "Add shrimp in single layer, shell-side down. Press gently and sear 1.5 minutes without moving — until shells turn bright orange-red and edges crisp.",
      "textZh": "虾单层平铺，壳面朝下，轻压定型，静煎1.5分钟至壳色橙红、边缘微脆。",
      "zhHint": "定型不翻动",
      "stateNote": {
        "visual": "Shells blister slightly and emit nutty aroma.",
        "visualZh": "虾壳微起小泡，散发坚果香。",
        "timeRef": "1.5 minutes",
        "timeRefZh": "1.5 分钟",
        "heat": "medium-high",
        "signal": "Shell edges lift slightly off pan surface.",
        "signalZh": "虾壳边缘微微翘起离锅。"
      }
    },
    {
      "text": "Flip shrimp and cook 30 seconds. Push to one side; add light soy sauce, Shaoxing wine, and sugar to center. Stir once to combine liquids.",
      "textZh": "翻面煎30秒。将虾推至锅边，在中心倒入生抽、绍兴酒和糖，快速搅匀。",
      "zhHint": "酱酒糖汇于锅心",
      "stateNote": {
        "visual": "Liquid simmers instantly, releasing fragrant steam.",
        "visualZh": "酱汁遇热即冒香雾。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "medium-high",
        "signal": "Small bubbles burst rapidly in center.",
        "signalZh": "锅心小泡密集迸裂。"
      }
    },
    {
      "text": "Cover and reduce heat to medium-low. Braise 5 minutes — shaking pan gently every 60 seconds to coat evenly.",
      "textZh": "盖盖，转中小火焖5分钟，每60秒轻晃锅体使酱汁均匀裹虾。",
      "zhHint": "轻晃不揭盖",
      "stateNote": {
        "visual": "Sauce reduces to glossy, clinging film; shrimp glow amber.",
        "visualZh": "酱汁收至油亮挂膜，虾身泛琥珀光泽。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Steam condenses visibly on lid interior.",
        "signalZh": "锅盖内壁凝结明显水珠。"
      }
    },
    {
      "text": "Uncover, increase heat to medium. Cook 1 minute more, tossing constantly, until sauce thickens to syrupy sheen and coats each shrimp.",
      "textZh": "开盖，中火收汁1分钟，不停翻炒至酱汁浓稠油亮，均匀裹满每只虾。",
      "zhHint": "收汁见光",
      "stateNote": {
        "visual": "Sauce coats back of spoon like thin honey.",
        "visualZh": "酱汁挂勺成薄蜜状。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "No visible liquid pools when pan is tilted.",
        "signalZh": "锅倾斜时无游离液体积聚。"
      }
    }
  ],
  "tips": [
    "Crack shrimp heads before cooking — it releases roe and deepens flavor.",
    "Reserve 1 tbsp shrimp liquid after deveining for extra umami if using headless shrimp.",
    "Serve with steamed short-grain rice to soak up every drop of sauce."
  ],
  "tipsZh": [
    "烹制前捏碎虾头，释放虾黄，增香提味。",
    "若用去头虾，可保留1汤匙虾线冲洗水，增鲜。",
    "配短粒米饭同食，酱汁一滴不剩。"
  ],
  "relatedSlugs": [
    "white-boiled-shrimp"
  ],
  "image": "/images/recipes/oil-braised-large-shrimp.webp"
};
