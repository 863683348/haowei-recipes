import type { Recipe } from "@/lib/types";

/** Tea-Braised Beef (茶香牛肉) (茶香牛肉) — Day batch */
export const tea_braised_beef: Recipe = {
  "id": "cha-xiang-niu-rou",
  "slug": "tea-braised-beef",
  "titleEn": "Tea-Braised Beef (茶香牛肉)",
  "titleZh": "茶香牛肉",
  "pinyin": "chá xiāng niú ròu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version braises beef chuck in strong black tea instead of water, finishing with rock sugar and star anise. No smoking step — just a long, gentle simmer that leaves the meat mahogany and fork-tender.",
  "versionNoteZh": "家常版用浓红茶代替水慢炖牛腩，收尾加冰糖与八角。无需熏制，只需久炖，肉色红亮、入口即化。",
  "tags": [
    "braise",
    "comfort-food",
    "weekend",
    "beef"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother kept a tin of broken black tea leaves just for cooking. 'Water makes meat plain,' she'd say, 'tea makes it remember where it came from.' Her tea-braised beef was the dish that warmed our coldest winters.",
  "storyZh": "外婆总留一罐碎红茶专门做菜。'白水炖肉寡淡，'她说，'茶能让肉记得来处。'那道茶香牛肉，是我们最冷冬日里的暖。",
  "ingredients": [
    {
      "id": "tb-01",
      "nameEn": "beef chuck, cut into 4 cm chunks",
      "nameZh": "牛腩（切4厘米块）",
      "pinyin": "niú nǎn",
      "amountMetric": "800 g",
      "amountUS": "1.75 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Well-marbled chuck stays tender after long braising; avoid lean cuts.",
      "noteZh": "带雪花纹的牛腩久炖不柴；勿用瘦肉。"
    },
    {
      "id": "tb-02",
      "nameEn": "strong black tea, brewed",
      "nameZh": "浓红茶（冲泡）",
      "pinyin": "hóng chá",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "other",
      "pantry": "local",
      "termKey": "black-tea"
    },
    {
      "id": "tb-03",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "tb-04",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "2 pods",
      "amountUS": "2 pods",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "tb-05",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "生姜（切片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tb-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Blanch beef chunks in cold water: bring to a boil, skim foam, then drain and rinse. This removes gamey impurities.",
      "textZh": "牛肉冷水下锅焯水：煮沸撇沫后捞出冲净，去腥去杂质。",
      "zhHint": "冷水焯肉",
      "stateNote": {
        "visual": "Surface foams grey; beef turns pale on the outside.",
        "visualZh": "表面浮起灰色泡沫；牛肉外层转白。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "Foam stops rising once it boils steadily.",
        "signalZh": "沸腾稳定后泡沫不再涌出。"
      }
    },
    {
      "text": "In a heavy pot, combine beef, brewed tea, ginger, star anise, and light soy. Bring to a boil over high heat.",
      "textZh": "厚底锅中放入牛肉、红茶、姜片、八角与生抽，大火煮沸。",
      "zhHint": "茶汁入锅",
      "stateNote": {
        "visual": "Liquid turns deep amber from the tea.",
        "visualZh": "茶汤将水染成深琥珀色。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Rolling boil with fragrant steam.",
        "signalZh": "翻滚沸腾，蒸汽带茶香。"
      }
    },
    {
      "text": "Lower heat to a bare simmer, cover, and braise 70 minutes until a chopstick slides in with little resistance.",
      "textZh": "转最小火加盖慢炖70分钟，至筷子可轻松插入。",
      "zhHint": "小火慢炖",
      "stateNote": {
        "visual": "Surface shows only tiny bubbles; fat renders into the broth.",
        "visualZh": "汤面仅现细小气泡；油脂融入汤中。",
        "timeRef": "70 minutes",
        "timeRefZh": "70 分钟",
        "heat": "low",
        "signal": "Beef fibers loosen; edges begin to separate.",
        "signalZh": "肉纤维松散，边缘微散。"
      }
    },
    {
      "text": "Add rock sugar, uncover, and simmer 10 minutes to glaze and slightly thicken the sauce.",
      "textZh": "加入冰糖，开盖再煮10分钟收汁上亮。",
      "zhHint": "加糖收汁",
      "stateNote": {
        "visual": "Sauce coats the back of a spoon and turns glossy mahogany.",
        "visualZh": "汤汁挂勺、呈亮红褐色。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium",
        "signal": "Bubbles become slow and syrupy.",
        "signalZh": "气泡变慢变稠。"
      }
    },
    {
      "text": "Taste and adjust salt. Rest 5 minutes off heat so flavors settle, then serve with steamed rice.",
      "textZh": "尝味调盐，离火静置5分钟让味道融合，配米饭食用。",
      "zhHint": "静置入味",
      "stateNote": {
        "visual": "Broth slightly thickens as it cools; beef glistens.",
        "visualZh": "稍凉后汤汁微稠，牛肉油润发亮。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Aroma mellows into sweet-tea warmth.",
        "signalZh": "香气转为茶甜暖意。"
      }
    }
  ],
  "tips": [
    "Use broken/cheap black tea — premium leaves waste money and taste the same after simmering.",
    "Don't skip the blanch; it is the difference between clean and muddy broth.",
    "Leftovers taste even better the next day as the tea deepens."
  ],
  "tipsZh": [
    "用碎红茶即可，好茶叶久炖后风味无差、徒增成本。",
    "焯水不可省，决定汤清不清。",
    "隔夜更入味，茶香更沉。"
  ],
  "relatedSlugs": [
    "red-braised-lamb",
    "cumin-lamb",
    "radish-lamb-stew",
    "lamb-pilaf"
  ],
  "image": "/images/recipes/og-default.webp"
};
