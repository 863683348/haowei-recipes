import type { Recipe } from "@/lib/types";

/** Spare Rib Rice Cooker Rice (Paigu Menfan) (排骨焖饭) — Day batch */
export const spare_rib_rice_cooker_rice: Recipe = {
  "id": "pai-gu-men-fan",
  "slug": "spare-rib-rice-cooker-rice",
  "titleEn": "Spare Rib Rice Cooker Rice (Paigu Menfan)",
  "titleZh": "排骨焖饭",
  "pinyin": "pái gǔ mèn fàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "easy",
  "timeMin": 50,
  "servings": 3,
  "version": "family",
  "versionNote": "The family version brown-queues the ribs briefly in the rice cooker pot before the rice goes in, so you get real Maillard colour without a second pan. Restaurants skip that step and rely on dark soy sauce alone, which looks right but tastes thin.",
  "versionNoteZh": "家庭版先把排骨在电饭煲内锅里煎出焦色再下米，不用第二个锅也能有真正的美拉德香气。餐馆省掉这步，只靠老抽上色，看着对但味道薄。",
  "tags": [
    "50-min",
    "one-pot",
    "rice",
    "pork",
    "family-dinner"
  ],
  "dietary": [
    "none"
  ],
  "story": "This was the Sunday reset meal in my house: one pot, one chopping board, and whatever vegetable was left in the drawer. The rule my father never broke was that the ribs had to be patted bone-dry before they hit the oil, because wet ribs steam instead of browning and the whole pot ends up grey.",
  "storyZh": "这是我家周日的收心饭：一口锅、一块砧板、冰箱里剩的任意蔬菜。我父亲从没破过的规矩是，排骨下锅前必须擦到全干，因为带水的排骨只会出水冒汽，整锅饭都会发灰。",
  "ingredients": [
    {
      "id": "pg-01",
      "nameEn": "jasmine rice",
      "nameZh": "茉莉香米",
      "pinyin": "dà mǐ",
      "amountMetric": "300 g",
      "amountUS": "1.5 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "pg-02",
      "nameEn": "pork spare ribs, cut into 4 cm pieces",
      "nameZh": "猪肋排（切4厘米段）",
      "pinyin": "zhū lèi pái",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs",
      "note": "Ask for ribs cut across the bone into short sections. Sub: country-style ribs or boneless pork shoulder cut in chunks.",
      "noteZh": "请摊主把肋排横着剁成小段。替代：厚切猪肩肉块。"
    },
    {
      "id": "pg-03",
      "nameEn": "potato, diced",
      "nameZh": "土豆（切丁）",
      "pinyin": "tǔ dòu",
      "amountMetric": "150 g",
      "amountUS": "1 cup diced",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pg-04",
      "nameEn": "carrot, diced",
      "nameZh": "胡萝卜（切丁）",
      "pinyin": "hú luó bo",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup diced",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "pg-05",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "pinyin": "jiāng",
      "amountMetric": "15 g",
      "amountUS": "4 thin slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pg-06",
      "nameEn": "scallion, cut into lengths",
      "nameZh": "小葱（切段）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "pg-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pg-08",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "pg-09",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine",
      "note": "Sub: dry sherry.",
      "noteZh": "替代：干型雪莉酒。"
    },
    {
      "id": "pg-10",
      "nameEn": "neutral vegetable oil",
      "nameZh": "无味植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat the rib pieces completely dry with paper towel, then toss with 1 tbsp of the light soy sauce and the Shaoxing wine. Leave them 10 minutes while you prepare the vegetables.",
      "textZh": "排骨用厨房纸吸到全干，加1汤匙生抽和黄酒抓匀，静置10分钟，同时准备蔬菜。",
      "zhHint": "排骨擦干腌10分钟",
      "stateNote": {
        "visual": "Rib surfaces go from wet and shiny to tacky; the marinade is absorbed with no liquid pooling in the bowl",
        "visualZh": "排骨表面由湿亮转为发黏；腌料被吸收，碗底无积液",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Pressing a piece with a finger leaves no wet film on the skin",
        "signalZh": "手指按压排骨不会在指上留下水膜"
      },
      "tip": "Dry ribs brown, wet ribs steam. This ten minutes is the whole difference between a grey pot and a golden one.",
      "tipZh": "干的排骨会焦化，湿的只会出汽。这10分钟决定了整锅是发灰还是金黄。"
    },
    {
      "text": "Rinse the rice until the water runs mostly clear and drain well. Dice the potato and carrot to about 1.5 cm / 1/2 in so they cook in the same time as the rice.",
      "textZh": "大米淘洗至水基本清澈并沥干。土豆和胡萝卜切成约1.5厘米的丁，使其与米饭同时熟。",
      "zhHint": "淘米沥干，配菜切1.5厘米丁",
      "stateNote": {
        "visual": "Potato dice are translucent at the edges when held to the light; carrot dice hold sharp corners",
        "visualZh": "土豆丁边缘透光；胡萝卜丁棱角分明",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "signal": "All the dice fit on a spoon without overlapping much",
        "signalZh": "所有丁块能同时落在一把勺上而不太重叠"
      },
      "tip": "Cut the potato slightly smaller than you think — undercooked potato in a rice pot is the classic failure.",
      "tipZh": "土豆要切得比你以为的更小——焖饭里土豆夹生是最常见的翻车。"
    },
    {
      "text": "Set the rice cooker to the saute or cook mode if it has one, add the oil, and brown the ribs cut-side down 4 minutes without moving them. Add ginger and scallion and cook 1 minute more.",
      "textZh": "电饭煲若有煎炒档就开启，加油，排骨切面朝下煎4分钟不要翻动。下姜片和葱段再煎1分钟。",
      "zhHint": "排骨下锅煎至焦香",
      "stateNote": {
        "visual": "Contact side turns deep golden-brown with a lacquered edge; the kitchen smells nutty rather than raw-pork",
        "visualZh": "贴锅一面变成深金褐色带焦亮边；厨房里是坚果香而非生肉味",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "The ribs release from the pot easily when nudged — they stop sticking once properly browned",
        "signalZh": "轻推排骨就能脱离锅底——煎到位后自然不粘"
      },
      "tip": "Do not crowd the pot or the ribs will steam in their own liquid; brown in two batches if needed.",
      "tipZh": "别把锅塞太满，否则排骨会在自身水分里蒸熟；必要时分两批煎。"
    },
    {
      "text": "Add the remaining light soy sauce and the dark soy sauce, then the drained rice, potato and carrot. Stir 1 minute so everything is coated, and add water to the 1.5-cup mark.",
      "textZh": "加入剩余生抽和老抽，再倒入沥干的米、土豆丁和胡萝卜丁，翻炒1分钟让所有食材裹上酱汁，加水至1.5杯刻度。",
      "zhHint": "调味后加水至刻度",
      "stateNote": {
        "visual": "Rice grains look glossy amber; liquid sits about 1 cm above the solid ingredients",
        "visualZh": "米粒呈琥珀色发亮；液面高出固体食材约1厘米",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Tilting the pot shows the liquid surface level, not a slope of dry rice",
        "signalZh": "倾斜锅体可见平整液面，而不是干米斜坡"
      },
      "tip": "Keep the water level as normal despite the extra vegetables — they release almost nothing and the rice still needs its full amount.",
      "tipZh": "尽管多了蔬菜，水量仍按常规——蔬菜几乎不出水，米仍需要足量水。"
    },
    {
      "text": "Cook on the standard white rice setting. When it finishes, leave it on keep-warm with the lid shut for 10 minutes before opening.",
      "textZh": "按电饭煲标准煮饭档。煮好后盖盖保温10分钟再开盖。",
      "zhHint": "跳闸后盖盖焖10分钟",
      "stateNote": {
        "visual": "Rice has risen slightly and the surface is dotted with browned rib pieces; no liquid pools at the edges",
        "visualZh": "米饭略微隆起，表面点缀着焦色排骨；边缘无积水",
        "timeRef": "10 minutes resting",
        "timeRefZh": "焖10分钟",
        "signal": "A chopstick pushed into the rice meets soft grains all the way to the potato, which yields without resistance",
        "signalZh": "筷子插入米饭一路松软，碰到土豆时毫无阻力即穿透"
      },
      "tip": "The rest is not optional — it lets the steam finish the potato and firm up the bottom layer.",
      "tipZh": "这10分钟不能省——蒸汽会把土豆焖透，也让底层成形。"
    },
    {
      "text": "Fold the whole pot through from the bottom with a rice paddle, lifting the ribs up from underneath and breaking up any clumps of rice.",
      "textZh": "用饭勺从锅底把整锅饭向上翻拌，从底部把排骨挑起，同时打散结块的饭。",
      "zhHint": "从锅底整体翻拌",
      "stateNote": {
        "visual": "Every spoonful carries rice, rib, potato and carrot; colour is uniform light brown with no white streaks",
        "visualZh": "每一勺都有饭、排骨、土豆和胡萝卜；色泽均匀浅褐，无白色条痕",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "The paddle comes up clean with no stuck layer of rice underneath",
        "signalZh": "饭勺提起不带黏在底部的饭层"
      },
      "tip": "If the ribs were bone-in, warn people at the table — the small bones hide in the rice.",
      "tipZh": "如果用的是带骨肋排，上桌时要提醒——小骨头会藏在饭里。"
    }
  ],
  "tips": [
    "Swap the potato for taro or sweet potato for a sweeter, softer pot.",
    "Add a star anise to the pot before cooking for a deeper, braised aroma.",
    "This reheats well with a splash of water in a covered pan over low heat."
  ],
  "tipsZh": [
    "把土豆换成芋头或红薯，整锅会更甜更软。",
    "煮前放一颗八角，香气更像炖菜。",
    "隔水复热时加少许水、盖盖小火，口感依旧很好。"
  ],
  "relatedSlugs": [
    "electric-rice-cooker-claypot-style-rice",
    "spare-rib-claypot-rice",
    "potato-beef-stew"
  ],
  "image": "/images/recipes/electric-rice-cooker-claypot-style-rice.webp"
};
