import type { Recipe } from "@/lib/types";

/** Homestyle Tomato Hot Pot Base (Northern China) (家常番茄火锅底料（北方版）) — Seed batch */
export const tomato_hot_pot_base: Recipe = {
  "id": "tomato-hot-pot-base",
  "slug": "tomato-hot-pot-base",
  "titleEn": "Homestyle Tomato Hot Pot Base (Northern China)",
  "titleZh": "家常番茄火锅底料（北方版）",
  "pinyin": "jia chang fan qie huo guo di liao",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "Not sweet-and-sour like Western tomato soup — this is savory, umami-forward, with fermented soybean paste and slow-cooked tomatoes. My grandma in Xicheng used summer heirloom tomatoes, but canned San Marzano works perfectly year-round.",
  "versionNoteZh": "非西式酸甜番茄汤——此版重咸鲜、重发酵感，慢炖番茄配豆酱。西城奶奶只用伏天番茄，但全年可用圣马扎诺罐头。",
  "tags": [
    "30-min",
    "vegetable-forward",
    "kid-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Every August, my grandmother would haul crates of ‘Red Lantern’ tomatoes from Tongzhou farms to her Beijing apartment. She’d peel them by blanching, then simmer them for hours with yellow soybean paste — we’d eat the base with handmade noodles and fried tofu puffs.",
  "storyZh": "每年八月，奶奶都从通州农场扛回几筐‘红灯笼’番茄，焯水去皮后加黄豆酱慢煨数小时——我们配手擀面与炸豆腐泡涮食。",
  "ingredients": [
    {
      "id": "tm-01",
      "nameEn": "Canned whole plum tomatoes (San Marzano preferred)",
      "nameZh": "罐装整颗罗马番茄（优选圣马扎诺）",
      "pinyin": "guan zhuang zheng ke luo ma fan qie",
      "amountMetric": "400 g",
      "amountUS": "1 (14-oz) can",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Substitute fresh ripe tomatoes: 600 g, peeled & seeded",
      "noteZh": "鲜番茄替代：600克熟透番茄，去皮去籽"
    },
    {
      "id": "tm-02",
      "nameEn": "Yellow soybean paste (doujiang)",
      "nameZh": "黄豆酱",
      "pinyin": "huang dou jiang",
      "amountMetric": "40 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for thick, amber-brown, fermented paste — not sweet hoisin",
      "noteZh": "选浓稠琥珀色发酵豆酱，非甜面酱"
    },
    {
      "id": "tm-03",
      "nameEn": "Garlic, minced",
      "nameZh": "大蒜（切末）",
      "pinyin": "da suan",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "note": "Fresh only — no garlic powder",
      "noteZh": "必须新鲜蒜末，禁用蒜粉",
      "termKey": "garlic"
    },
    {
      "id": "tm-04",
      "nameEn": "Cooking wine",
      "nameZh": "料酒",
      "pinyin": "liao jiu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry or omit if avoiding alcohol",
      "noteZh": "可用干雪利酒替代，或省略",
      "termKey": "cooking-wine"
    },
    {
      "id": "tm-05",
      "nameEn": "Sugar",
      "nameZh": "白糖",
      "pinyin": "bai tang",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Balances acidity — do not skip, even in vegetarian version",
      "noteZh": "中和酸度，素食版亦不可省"
    }
  ],
  "steps": [
    {
      "text": "Drain canned tomatoes, reserving liquid. Crush tomatoes by hand into coarse pulp. Set aside.",
      "textZh": "番茄罐头沥汁（汁留用），手捏成粗茸备用。",
      "zhHint": "手捏不打浆",
      "stateNote": {
        "visual": "Tomatoes break into chunky, juicy pieces — not smooth puree",
        "visualZh": "番茄呈粗颗粒多汁状，非顺滑泥状",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Seeds remain intact, skins separate easily",
        "signalZh": "籽粒完整，皮肉易离"
      }
    },
    {
      "text": "Heat 15 ml neutral oil in wide pot over medium heat. Add minced garlic and stir 30 seconds until fragrant.",
      "textZh": "宽底锅中火加热15毫升中性油，下蒜末爆香30秒。",
      "zhHint": "蒜香即转",
      "stateNote": {
        "visual": "Garlic softens and turns translucent at edges",
        "visualZh": "蒜末边缘微透亮",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aroma lifts sharply — no browning yet",
        "signalZh": "蒜香骤扬，未见焦色"
      }
    },
    {
      "text": "Add yellow soybean paste and cook 2 minutes, stirring constantly, until paste darkens slightly and oil begins to separate.",
      "textZh": "加入黄豆酱，持续搅动炒2分钟，至酱色微深、油稍析出。",
      "zhHint": "酱色微深油微出",
      "stateNote": {
        "visual": "Paste thickens, turns deeper amber, and glistens",
        "visualZh": "酱体增稠、色转深琥珀、泛油光",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Earthy, fermented aroma intensifies",
        "signalZh": "豆类发酵香明显增强"
      }
    },
    {
      "text": "Add crushed tomatoes and reserved liquid. Bring to gentle simmer, then reduce heat to low. Cook uncovered 15 minutes, stirring occasionally.",
      "textZh": "下番茄茸与预留汁，煮至微沸后转小火，敞盖慢煮15分钟，偶拌。",
      "zhHint": "敞盖慢煮15分钟",
      "stateNote": {
        "visual": "Mixture reduces slightly, surface shimmers with red oil",
        "visualZh": "体积略收，表面泛红油光",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Bubbles rise lazily, not vigorously",
        "signalZh": "气泡慵懒上浮，非剧烈翻滚"
      }
    },
    {
      "text": "Stir in sugar and cooking wine. Simmer 2 more minutes. Taste and adjust — it should be rich, tangy, and deeply savory, not sweet.",
      "textZh": "拌入糖与料酒，再小火煮2分钟。尝味调整——应浓郁、微酸、咸鲜，非甜味主导。",
      "zhHint": "尝味重咸鲜",
      "stateNote": {
        "visual": "Broth deepens to vibrant rust-red",
        "visualZh": "汤色转为明丽铁锈红",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Taste reveals layered umami — no single note dominates",
        "signalZh": "入口鲜味分层，无单一支配味"
      }
    }
  ],
  "tips": [
    "For richer texture, blend half the finished base and stir back in.",
    "Add 1 tsp rice vinegar at end for brightness — optional but traditional in Beijing homes.",
    "This base keeps 5 days refrigerated — reheat gently before serving."
  ],
  "tipsZh": [
    "口感更醇厚：将一半成品打碎后拌回。",
    "临出锅加1茶匙米醋提亮风味——北京家庭常用，非必需。",
    "冷藏可存5天，食用前文火复热。"
  ],
  "relatedSlugs": [
    "mala-hot-pot-base",
    "clear-broth-hot-pot-base"
  ],
  "image": "/images/recipes/tomato-hot-pot-base.webp"
};
