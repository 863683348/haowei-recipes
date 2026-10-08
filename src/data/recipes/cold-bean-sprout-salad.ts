import type { Recipe } from "@/lib/types";

/** Cold Bean Sprout Salad (凉拌豆芽) (凉拌豆芽) — Day batch */
export const cold_bean_sprout_salad: Recipe = {
  "id": "cold-bean-sprout-salad",
  "slug": "cold-bean-sprout-salad",
  "titleEn": "Cold Bean Sprout Salad (凉拌豆芽)",
  "titleZh": "凉拌豆芽",
  "pinyin": "liáng bàn dòu yá",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: blanch the sprouts for 45 seconds, then toss with a garlicky vinegar dressing. Restaurant version chills the sprouts in ice water for 5 minutes and finishes with a spoon of hot chili oil poured over the garlic to bloom it.",
  "versionNoteZh": "家庭版：豆芽焯水 45 秒后拌蒜香醋汁。餐厅版会把豆芽冰镇 5 分钟，并在蒜末上淋一勺热辣椒油激香。",
  "tags": [
    "cold",
    "quick",
    "30-min",
    "beginner",
    "vegan",
    "healthy"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "Bean sprouts (豆芽, dòu yá) are the cheapest, fastest vegetable in the Chinese kitchen — a bag costs pennies and cooks in under a minute. The cold tossed version is what northern families put on the table in July, when nobody wants to stand over a hot wok. The whole dish lives or dies on one thing: how briefly you blanch them. Thirty seconds too long and the sprouts collapse into limp, watery strings. Get it right and they stay audibly crunchy.",
  "storyZh": "豆芽是中国厨房最便宜、最快的蔬菜——一袋几毛钱，不到一分钟就熟。凉拌版是北方家庭七月的常客，那时候没人愿意守着热锅。这道菜成败全在一件事上：焯水时间。多焯 30 秒，豆芽就塌成软烂的水条；掐准了，就是听得见的脆。",
  "ingredients": [
    {
      "id": "cbs-sprouts",
      "nameEn": "mung bean sprouts, roots trimmed",
      "nameZh": "绿豆芽，掐去根须",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "produce",
      "pantry": "local",
      "note": "Mung bean sprouts are thin and crisp; soybean sprouts are thicker and need 30 seconds more blanching.",
      "noteZh": "绿豆芽细脆；黄豆芽更粗，需多焯 30 秒。"
    },
    {
      "id": "cbs-garlic",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cbs-scallion",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱，切细花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cbs-vinegar",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "cbs-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cbs-sesame-oil",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cbs-chili-flakes",
      "nameEn": "chili flakes",
      "nameZh": "辣椒面",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "cbs-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse the bean sprouts in cold water and drain. Pinch or snap off the brown root tips if you have the patience — it takes 3 minutes and makes the salad look restaurant-clean. Skipping it is fine for a weeknight.",
      "textZh": "豆芽冷水冲洗沥干。有耐心的话掐掉褐色根须——3 分钟，卖相立刻像餐厅。赶时间可省。",
      "stateNote": {
        "visual": "Sprouts are pearly white and translucent, with the pale tan seed heads still attached",
        "visualZh": "豆芽呈珍珠白、半透明，还带着浅褐色的豆瓣头",
        "signal": "No slimy film or sour smell — fresh sprouts smell faintly of raw peas",
        "signalZh": "表面无黏液、无酸味——新鲜豆芽有淡淡的生豌豆香"
      },
      "tip": "Soggy sprouts mean they are past their prime. Buy them the day you cook them.",
      "tipZh": "发软的豆芽说明不新鲜了。当天买当天做。"
    },
    {
      "text": "Bring a large pot of water to a full rolling boil and add 1/2 tsp salt. Drop in the sprouts all at once and blanch for exactly 45 seconds, stirring once. The goal is to kill the raw edge without cooking the crunch out.",
      "textZh": "大锅水烧至剧烈沸腾，加 1/2 茶匙盐。豆芽一次全部下锅，焯 45 秒，中途搅一次。目的是去掉生味又保住脆感。",
      "stateNote": {
        "visual": "Sprouts turn from opaque white to a glassy translucency and shrink by about a third",
        "visualZh": "豆芽由白浊转为玻璃般半透明，体积缩水约三分之一",
        "heat": "high",
        "timeRef": "45 seconds at a rolling boil",
        "timeRefZh": "沸腾状态下 45 秒",
        "signal": "A sprout snapped between your fingers still cracks instead of bending",
        "signalZh": "用手掐断仍会脆裂，而不是弯曲"
      }
    },
    {
      "text": "Drain immediately and plunge into a bowl of ice water for 1 minute. This stops the residual heat from softening them. Drain again very thoroughly — press gently in a colander, because any leftover water will wash out the dressing.",
      "textZh": "立刻捞出投入冰水 1 分钟，阻断余温继续软化。再次彻底沥干——在滤网里轻压，残留水分会稀释酱汁。",
      "stateNote": {
        "visual": "Sprouts are firm, no steam rising, and no water drips from the colander after 10 seconds",
        "visualZh": "豆芽挺实、不再冒热气，静置 10 秒后滤网不再滴水",
        "timeRef": "1 minute in ice water",
        "timeRefZh": "冰水 1 分钟",
        "signal": "When you squeeze a handful, no water runs between your fingers",
        "signalZh": "抓一把轻捏，指缝间不渗水"
      }
    },
    {
      "text": "Put the drained sprouts in a mixing bowl. Scatter the minced garlic and chili flakes on top. Heat the 1 tsp sesame oil in a small pan until it just shimmers, then pour it over the garlic — it should sizzle. This blooms the aromatics instead of leaving them raw and harsh.",
      "textZh": "沥干的豆芽放入拌碗，蒜末和辣椒面撒在最上面。小锅把 1 茶匙香油烧至微微冒纹，浇在蒜末上——应该滋啦作响。这样能激出香气，而不是留生蒜的辛辣。",
      "stateNote": {
        "visual": "The oil hits the garlic and immediately foams; the chili flakes darken to a deep red and the kitchen smells nutty and pungent",
        "visualZh": "热油接触蒜末立刻起泡，辣椒面转为深红，厨房里弥漫坚果般的辛香",
        "heat": "medium-high",
        "timeRef": "about 30 seconds to heat the oil",
        "timeRefZh": "烧油约 30 秒",
        "signal": "Audible sizzle that fades within 5 seconds — if it smokes, the oil was too hot",
        "signalZh": "听到滋啦声并在 5 秒内减弱——若冒烟说明油太热"
      }
    },
    {
      "text": "Add rice vinegar, light soy sauce, the remaining salt, and the scallions. Toss with chopsticks or clean hands until every sprout is glossy and coated. Rest 5 minutes, toss once more, and serve at cool room temperature.",
      "textZh": "加入米醋、生抽、剩余盐和葱花。用筷子或净手拌匀，让每根豆芽都油亮裹汁。静置 5 分钟，上桌前再拌一次，微凉食用最佳。",
      "stateNote": {
        "visual": "Sprouts are glossy and slightly translucent, speckled with red chili and green scallion; a thin amber liquid pools at the bottom of the bowl",
        "visualZh": "豆芽油亮微透，点缀红辣椒面与绿葱花，碗底积薄薄一层琥珀色汁水",
        "timeRef": "5 minutes resting",
        "timeRefZh": "静置 5 分钟",
        "signal": "The raw garlic bite has mellowed into a rounded savory aroma",
        "signalZh": "生蒜的辛辣变柔和，转为圆润的咸香"
      }
    }
  ],
  "tips": [
    "Never blanch bean sprouts longer than 60 seconds — they go from crunchy to limp in that window.",
    "Dry the sprouts harder than you think is necessary. Water is the number one reason this salad tastes bland.",
    "Pouring hot oil over raw garlic is the single biggest flavor upgrade here. Do not skip it.",
    "Add a handful of blanched spinach or shredded carrot for color if you want to make it a proper side dish.",
    "Best eaten the day it is made. Leftovers soften overnight but still make a decent cold noodle topping."
  ],
  "tipsZh": [
    "豆芽焯水绝不超过 60 秒——脆到软烂的临界点就在这个区间。",
    "沥水要比你以为的更用力。水分是这道凉拌菜寡淡的头号原因。",
    "热油淋生蒜是这里最大的提香手段，别省。",
    "想做成正经配菜，可加一把焯过的菠菜或胡萝卜丝配色。",
    "最好当天吃完。隔夜会变软，但作为凉面浇头还不错。"
  ],
  "relatedSlugs": [
    "cold-wood-ear",
    "smashed-cucumber",
    "lao-hu-cai-tiger-salad",
    "kou-shui-chicken"
  ],
  "image": "/images/recipes/lao-hu-cai-tiger-salad.webp"
};
