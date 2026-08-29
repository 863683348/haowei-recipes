import type { Recipe } from "@/lib/types";

/** Napa Cabbage-Stewed Tofu (白菜炖豆腐) — Seed batch */
export const napa_cabbage_stewed_tofu: Recipe = {
  "id": "bai-cai-dun-dou-fu",
  "slug": "napa-cabbage-stewed-tofu",
  "titleEn": "Napa Cabbage-Stewed Tofu",
  "titleZh": "白菜炖豆腐",
  "pinyin": "bái cài dùn dòu fu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses soft tofu and gentle simmering — no frying, no cornstarch. The cabbage’s natural sweetness and tofu’s silkiness define the texture.",
  "versionNoteZh": "家常版用嫩豆腐、免煎炸、不勾芡，靠白菜清甜与豆腐滑润成味。",
  "tags": [
    "30-min",
    "vegetarian",
    "weeknight"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother in Jinan made this every winter solstice — she’d say, 'Cabbage warms the belly, tofu cools the lungs, and together they balance yin and yang like my marriage.' She stirred with a wooden spoon worn smooth by forty years.",
  "storyZh": "济南奶奶每年冬至必做这道菜，她说：‘白菜暖腹，豆腐润肺，合起来就像我的婚姻，阴阳相济。’那把木勺被用了四十年，磨得温润如玉。",
  "ingredients": [
    {
      "id": "bc-01",
      "nameEn": "napa cabbage",
      "nameZh": "大白菜",
      "pinyin": "dà bái cài",
      "amountMetric": "400 g",
      "amountUS": "4 cups (chopped, core removed)",
      "category": "produce",
      "pantry": "local",
      "note": "Use inner, pale-yellow leaves for tenderness",
      "noteZh": "取内层淡黄色菜叶，更嫩"
    },
    {
      "id": "bc-02",
      "nameEn": "soft tofu",
      "nameZh": "嫩豆腐",
      "pinyin": "nèn dòu fu",
      "amountMetric": "300 g",
      "amountUS": "1 block (approx. 12 oz)",
      "category": "protein",
      "pantry": "asian",
      "note": "Substitute silken tofu if soft tofu unavailable",
      "noteZh": "若无嫩豆腐，可用绢豆腐替代"
    },
    {
      "id": "bc-03",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup (thinly sliced, white + green parts)",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bc-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bc-05",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "bc-06",
      "nameEn": "vegetable broth",
      "nameZh": "素高汤",
      "pinyin": "sù gāo tāng",
      "amountMetric": "300 ml",
      "amountUS": "1¼ cups",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Use low-sodium store-bought or instant vegetable bouillon + water",
      "noteZh": "可用低钠市售素高汤或蔬菜高汤块冲调"
    }
  ],
  "steps": [
    {
      "text": "Core napa cabbage and chop into 3 cm wide ribbons. Rinse and drain well. Gently press excess water from tofu using paper towels — do not crumble.",
      "textZh": "去掉白菜硬芯，切3厘米宽条；洗净沥干。豆腐用厨房纸轻压吸水，勿揉碎。",
      "zhHint": "豆腐吸水防汤澥"
    },
    {
      "text": "Heat a nonstick or well-seasoned wok over medium-low heat. Add half the scallions (white parts only) and stir 30 seconds until aromatic.",
      "textZh": "不粘锅或熟铁锅小火加热，下一半葱白段煸香30秒。",
      "zhHint": "葱白提底味，小火防焦",
      "stateNote": {
        "visual": "White scallion pieces soften and release fragrance",
        "visualZh": "葱白段变软、香气弥漫",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-low",
        "signal": "No sizzling or browning",
        "signalZh": "无噼啪声，不焦黄"
      }
    },
    {
      "text": "Add cabbage and stir-fry 2 minutes until slightly wilted. Pour in vegetable broth and dark soy sauce. Bring to a gentle simmer.",
      "textZh": "下白菜中火煸2分钟至微蔫，倒入素高汤和老抽，烧至微沸。",
      "zhHint": "先煸再炖，去生涩增甜"
    },
    {
      "text": "Carefully slide tofu cubes into broth. Reduce heat to low, cover, and simmer 12 minutes — do not stir vigorously.",
      "textZh": "轻轻放入豆腐块，转最小火，盖盖焖12分钟，切忌大力翻动。",
      "zhHint": "豆腐娇嫩，静焖保形"
    },
    {
      "text": "Uncover, gently stir in remaining scallions and sesame oil. Simmer uncovered 2 more minutes to meld flavors.",
      "textZh": "开盖，轻拌入余下葱花和香油，再煮2分钟使香气融合。",
      "zhHint": "最后淋香油，锁香提韵",
      "stateNote": {
        "visual": "Broth glistens with oil sheen; tofu remains intact and plump",
        "visualZh": "汤面浮油光，豆腐饱满不碎",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Aroma intensifies and steam carries scallion scent",
        "signalZh": "葱香扑鼻，热气升腾带香"
      }
    }
  ],
  "tips": [
    "Tofu absorbs flavor best when gently simmered — never boiled hard.",
    "Reserve green scallion tops for garnish: they add freshness and color.",
    "For deeper umami, add 1 tsp dried shiitake soaking liquid (if available)."
  ],
  "tipsZh": [
    "豆腐需文火浸润入味，切忌滚沸猛煮。",
    "葱绿部分留作出锅前撒，增色添鲜。",
    "若有干香菇泡发水，可加1茶匙提鲜（可选）。"
  ],
  "relatedSlugs": [
    "potato-stewed-green-beans"
  ],
  "image": "/images/recipes/napa-cabbage-stewed-tofu.webp"
};
