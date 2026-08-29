import type { Recipe } from "@/lib/types";

/** Cold Noodles with Pickled Beans and Chili Oil (酸豆角拌面) — Seed batch */
export const pickled_beans_noodles: Recipe = {
  "id": "suan-dou-jiao-ban-mian",
  "slug": "pickled-beans-noodles",
  "titleEn": "Cold Noodles with Pickled Beans and Chili Oil",
  "titleZh": "酸豆角拌面",
  "pinyin": "suān dòu jiǎo bàn miàn",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern snack",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses hand-pulled wheat noodles boiled al dente, dressed with house-made chili oil and minimal vinegar—no sugar or sesame paste, unlike Sichuan-style versions.",
  "versionNoteZh": "家常版用手工拉面煮至弹牙，只拌自炼辣油与少许醋；无糖无芝麻酱，区别于川式红油面。",
  "tags": [
    "30-min",
    "no-cook-topping",
    "summer"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every summer in Beijing, my grandmother hung wet noodles on bamboo poles across our courtyard to cool. She’d mix them with sour beans, crushed roasted peanuts, and chili oil she made from last autumn’s chilies—never store-bought.",
  "storyZh": "每年夏天，奶奶都在四合院竹竿上挂湿面条晾凉。她拌面只用酸豆角、手碾烤花生和去年秋收自制的辣椒油——从不用瓶装。",
  "ingredients": [
    {
      "id": "no-01",
      "nameEn": "wheat noodles (fresh or dried)",
      "nameZh": "小麦面条（鲜面或干面）",
      "pinyin": "xiǎo mài miàn tiáo",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz (about 2 bundles)",
      "category": "staple",
      "pantry": "local",
      "note": "Use alkaline noodles (like 'lamian' or 'youmian') for authentic chew. Dried spaghetti works if boiled 1 min less than package says.",
      "noteZh": "优选碱水面（拉面/油面）；若用意面，按包装时间减煮1分钟。"
    },
    {
      "id": "bd-01",
      "nameEn": "pickled long beans (suan dou jiao)",
      "nameZh": "酸豆角",
      "pinyin": "suān dòu jiǎo",
      "amountMetric": "80 g",
      "amountUS": "⅔ cup, finely chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse only if salty. Pat dry thoroughly—excess water dilutes dressing.",
      "noteZh": "仅过咸时冲洗；务必攥干——水分会稀释酱汁。"
    },
    {
      "id": "co-01",
      "nameEn": "chili oil (homemade or high-quality store-bought)",
      "nameZh": "辣椒油",
      "pinyin": "là jiāo yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Must contain visible chili flakes and aromatic oil. Sub: 15 ml neutral oil + 1 tsp crushed red pepper flakes, heated 1 min.",
      "noteZh": "需见红油与浮沉辣椒碎；替代法：15毫升植物油+1茶匙辣椒碎，小火熬1分钟。"
    },
    {
      "id": "cv-01",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute balsamic vinegar only if aged ≥6 years and unsweetened.",
      "noteZh": "仅可用陈年≥6年、无添加糖的意大利黑醋替代。",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "pn-01",
      "nameEn": "roasted peanuts",
      "nameZh": "烤花生仁",
      "pinyin": "kǎo huā shēng rén",
      "amountMetric": "40 g",
      "amountUS": "¼ cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Unsalted, skin-on preferred. Crush coarsely with mortar or rolling pin.",
      "noteZh": "选原味带红衣花生；石臼或擀面杖粗碾。"
    }
  ],
  "steps": [
    {
      "text": "Boil noodles in plenty of salted water until just tender (al dente). Drain, rinse under cold running water, then shake vigorously in colander.",
      "textZh": "宽水下盐煮面至弹牙（八分熟），捞出过凉水，用力甩干水分。",
      "zhHint": "甩干防坨",
      "stateNote": {
        "visual": "Noodles glisten with moisture but no puddles form in colander.",
        "visualZh": "面条泛光但滤盆中无积水。",
        "timeRef": "1–2 minutes after boiling resumes",
        "timeRefZh": "水沸后煮1–2分钟",
        "heat": "high",
        "signal": "Noodle bends but snaps back when bent—no floppy bend.",
        "signalZh": "面条弯折后迅速回弹——不软塌。"
      }
    },
    {
      "text": "Toss noodles with 10 ml (2 tsp) neutral oil in a large bowl. Set aside uncovered.",
      "textZh": "面条入大碗，加10毫升（2茶匙）无味油拌匀，敞口静置。",
      "zhHint": "拌油防粘",
      "stateNote": {
        "visual": "Each strand coated with thin, glossy film; no clumping.",
        "visualZh": "每根面条裹薄亮油膜；不结团。",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "signal": "Noodles slide freely when bowl tilted.",
        "signalZh": "倾斜碗时面条自由滑动。"
      }
    },
    {
      "text": "In small bowl, whisk chili oil, black vinegar, and 2 g (½ tsp) light soy sauce until emulsified.",
      "textZh": "小碗中搅匀辣油、陈醋、生抽（2克/½茶匙），至酱汁乳化。",
      "zhHint": "乳化酱汁",
      "stateNote": {
        "visual": "Dressing thickens slightly; no oil separation visible.",
        "visualZh": "酱汁微稠，不见油水分离。",
        "timeRef": "30 seconds",
        "timeRefZh": "30秒",
        "signal": "Whisk leaves faint trail that holds for 2 seconds.",
        "signalZh": "打蛋器划痕停留2秒不消失。"
      }
    },
    {
      "text": "Add pickled beans and half the peanuts to noodle bowl. Pour dressing over top.",
      "textZh": "酸豆角与一半花生入面碗，浇入酱汁。",
      "zhHint": "先放料再浇汁",
      "stateNote": {
        "visual": "Beans and peanuts rest atop noodles; dressing pools lightly at bottom.",
        "visualZh": "豆角花生卧于面上；酱汁微聚碗底。",
        "timeRef": "10 seconds",
        "timeRefZh": "10秒",
        "signal": "No immediate absorption—dressing stays distinct.",
        "signalZh": "酱汁未立刻被吸走，保持独立形态。"
      }
    },
    {
      "text": "Toss vigorously with two chopsticks or tongs until noodles gleam and beans coat evenly. Top with remaining peanuts and extra chili oil if desired.",
      "textZh": "用两双筷子或夹子大力拌匀，至面条油亮、豆角均匀裹附；撒余下花生，喜辣可补辣油。",
      "zhHint": "大力拌匀",
      "stateNote": {
        "visual": "Noodles coil smoothly; each bean sticks to strands without sliding off.",
        "visualZh": "面条顺滑盘绕；每粒豆角吸附面身不脱落。",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "signal": "Surface glistens uniformly—no dry patches or pooling oil.",
        "signalZh": "表面均匀油亮——无干斑或油洼。"
      }
    }
  ],
  "tips": [
    "Never refrigerate noodles before tossing—they harden and won’t absorb dressing.",
    "For true Beijing style, add 1 tsp shredded preserved mustard tuber (zha cai) — check Asian grocers for ‘Sichuan preserved vegetable’.",
    "If using dried noodles, soak 10 min in cold water first to reduce boil time and improve texture."
  ],
  "tipsZh": [
    "拌面前切勿冷藏面条——会变硬难吸汁。",
    "地道京味可加1茶匙榨菜丝（查亚超‘四川榨菜’），提升层次。",
    "若用干面，先冷水泡10分钟，缩短煮制时间且口感更佳。"
  ],
  "relatedSlugs": [
    "pickled-beans-pork",
    "pickled-beans-chicken-gizzards"
  ],
  "image": "/images/recipes/pickled-beans-noodles.webp"
};
