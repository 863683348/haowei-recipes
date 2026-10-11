import type { Recipe } from "@/lib/types";

/** Qishan Minced Pork Noodles (岐山臊子面) — Day batch */
export const qishan_saozi_noodles: Recipe = {
  "id": "qishan-saozi-noodles",
  "slug": "qishan-saozi-noodles",
  "titleEn": "Qishan Minced Pork Noodles",
  "titleZh": "岐山臊子面",
  "pinyin": "qí shān sào zi miàn",
  "cuisine": "陕菜",
  "cuisineEn": "Shaanxi",
  "region": "Shaanxi",
  "regionZh": "陕西",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version makes one braised 'saozi' pot that sits in the fridge for days and gets spooned over fresh noodles; restaurant versions keep the broth, the chilli oil and the pork separate and assemble each bowl to order.",
  "versionNoteZh": "家常版一次炖一锅臊子，冷藏可存数日，随吃随舀浇在现煮面上；餐厅版把汤、油泼辣子和肉臊分开，按碗现调。",
  "tags": [
    "45-min",
    "noodles",
    "shaanxi",
    "sour-and-spicy",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "Qishan, the birthplace of Zhou dynasty cooking, is famous for a noodle that is deliberately sour before it is spicy. The 'saozi' — a richly vinegared pork and vegetable braise — is the soul of it, and locals will tell you the vinegar must be splashed into the hot wok so it hits the metal and vapourises; that flash is the whole point.",
  "storyZh": "岐山是周代烹饪的发源地，以『先酸后辣』的一碗面闻名。灵魂是臊子——重醋炖出的肉菜卤。当地人会告诉你，醋必须泼进热锅里让它撞上金属瞬间汽化，那一下才是关键。",
  "ingredients": [
    {
      "id": "qs-01",
      "nameEn": "fresh thin wheat noodles",
      "nameZh": "细鲜面条",
      "pinyin": "xì xiān miàn",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "staple",
      "pantry": "asian",
      "note": "Fresh lo-mein style noodles from the chilled case; dried thin noodles work but cook them a minute less",
      "noteZh": "用冷藏柜里的鲜细面；干细面也可，煮时少煮1分钟"
    },
    {
      "id": "qs-02",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "note": "80/20 ground pork gives enough fat to carry the vinegar; very lean pork turns grainy",
      "noteZh": "八分瘦二分肥的肉末油脂足够带住醋香；太瘦会发柴",
      "termKey": "pork-mince"
    },
    {
      "id": "qs-03",
      "nameEn": "wood ear mushrooms, soaked and shredded",
      "nameZh": "木耳，泡发切丝",
      "pinyin": "mù ěr",
      "amountMetric": "15 g dried",
      "amountUS": "½ cup dried",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak 20 minutes in warm water, trim the hard knot at the base",
      "noteZh": "温水泡发20分钟，剪去根部硬结",
      "termKey": "wood-ear"
    },
    {
      "id": "qs-04",
      "nameEn": "carrot, cut into fine dice",
      "nameZh": "胡萝卜，切细丁",
      "pinyin": "hú luó bo",
      "amountMetric": "80 g",
      "amountUS": "½ cup diced",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "qs-05",
      "nameEn": "firm tofu, cut into 1 cm dice",
      "nameZh": "老豆腐，切1厘米丁",
      "pinyin": "lǎo dòu fǔ",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "asian",
      "termKey": "tofu"
    },
    {
      "id": "qs-06",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "This is the defining ingredient — do not substitute rice vinegar, which is too mild",
      "noteZh": "这道菜的灵魂——不要用米醋替代，酸度太弱",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "qs-07",
      "nameEn": "chilli flakes",
      "nameZh": "辣椒面",
      "pinyin": "là jiāo miàn",
      "amountMetric": "8 g",
      "amountUS": "1½ tbsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Coarse Shaanxi-style flakes, not cayenne powder",
      "noteZh": "用陕西粗辣椒面，不是细卡宴粉",
      "termKey": "chili-flakes"
    },
    {
      "id": "qs-08",
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
      "id": "qs-09",
      "nameEn": "scallion, sliced, white and green parts separated",
      "nameZh": "小葱，切段，葱白葱绿分开",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "qs-10",
      "nameEn": "fresh ginger, minced",
      "nameZh": "鲜姜，切末",
      "pinyin": "jiāng mò",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Heat a dry wok over medium-high heat. Add the ground pork and press it flat; leave it alone for 2 minutes before breaking it up.",
      "textZh": "空锅烧热，下肉末压平，静置2分钟再炒散。",
      "zhHint": "先煎后炒",
      "stateNote": {
        "visual": "The underside is deeply browned and the fat has rendered into a clear pool",
        "visualZh": "贴锅面深褐上色，油脂析出成清亮油池",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "The pork sizzles loudly and releases easily from the metal when you lift it",
        "signalZh": "肉末发出响亮滋声，铲起时能轻松脱离锅面"
      }
    },
    {
      "text": "Add ginger and the scallion whites and stir-fry 1 minute until fragrant, then break the pork into fine crumbs.",
      "textZh": "下姜末与葱白爆香1分钟，再把肉末炒散成细粒。",
      "zhHint": "爆香炒散",
      "stateNote": {
        "visual": "Pork crumbs are separate, dry-looking and evenly coloured; the wok smells nutty",
        "visualZh": "肉粒分明干爽上色均匀，锅中透出坚果香",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "No large pink clumps remain when you sweep the spatula through",
        "signalZh": "铲子扫过锅底，无大块粉色肉团"
      }
    },
    {
      "text": "Pour the Chinkiang vinegar down the side of the hot wok in one go. Stand back — it will vapourise in a sharp cloud. Scrape the base as it reduces.",
      "textZh": "沿热锅边一次淋入镇江香醋，退后一步——酸雾会瞬间腾起。边收汁边刮锅底。",
      "zhHint": "泼醋汽化",
      "stateNote": {
        "visual": "A pale steam cloud rises instantly; the liquid darkens and clings glossily to the pork",
        "visualZh": "白色蒸汽瞬间腾起，汤汁转深亮并挂在肉上",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "high",
        "signal": "The harsh raw-vinegar smell softens into a rounded, fruity sourness",
        "signalZh": "刺鼻的生醋味转为圆润果酸香"
      }
    },
    {
      "text": "Add the carrot, wood ear and tofu, pour in 600 ml (2½ cups) water and the soy sauce. Bring to a boil, then simmer 15 minutes.",
      "textZh": "下胡萝卜、木耳与豆腐，倒入600毫升水与生抽，烧沸后小火煮15分钟。",
      "zhHint": "加水慢炖",
      "stateNote": {
        "visual": "The broth is reddish-brown and clear; carrot dice are bright orange and just tender at the corners",
        "visualZh": "汤汁红褐清亮，胡萝卜丁橙亮、边角刚软",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "A carrot die gives way with no resistance when pressed against the wok wall",
        "signalZh": "胡萝卜丁压向锅壁毫无阻力"
      }
    },
    {
      "text": "While the sauce simmers, cook the noodles in plenty of boiling water until just tender, then drain well and divide between two deep bowls.",
      "textZh": "卤汁炖煮时另起锅，宽水煮面至刚熟，沥干分装两只深碗。",
      "zhHint": "另锅煮面",
      "stateNote": {
        "visual": "Noodles are pale, swollen and limp, with no opaque white core when bitten",
        "visualZh": "面条发白胀起变软，咬开无白色硬心",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "high",
        "signal": "A strand stretches without snapping and tastes clean, not starchy",
        "signalZh": "面条拉伸不断，口感爽净不发黏"
      }
    },
    {
      "text": "Ladle the boiling sauce over the noodles, scatter the scallion greens on top, and finish with a spoonful of chilli flakes heated in hot oil. Serve immediately.",
      "textZh": "把滚烫臊子浇在面上，撒葱绿，最后淋一勺热油泼辣子，趁热即食。",
      "zhHint": "浇臊泼辣",
      "stateNote": {
        "visual": "Reddish broth glistening with chilli oil, pork crumbs suspended, green scallion on the surface",
        "visualZh": "红亮汤汁浮着辣油，肉粒悬浮，表面点缀葱绿",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "The chilli oil beads up in distinct red pools rather than blending into the broth",
        "signalZh": "辣油聚成清晰红色油珠，而非与汤混为一体"
      }
    }
  ],
  "tips": [
    "The vinegar goes into a dry, screaming-hot wok — that flash-vapourising step is what separates Qishan saozi from ordinary minced pork sauce.",
    "Make a double batch of the saozi. It keeps a week in the fridge and is better on day two.",
    "Qishan noodles are served in a shallow pool of broth, not swimming in it — the bowl should be barely half full of liquid."
  ],
  "tipsZh": [
    "醋要泼进干烧到冒烟的热锅——这下瞬间汽化，正是岐山臊子区别于普通肉末酱的关键。",
    "臊子一次做双倍。冷藏可存一周，第二天味道更好。",
    "岐山面用浅汤——汤只到碗的一半，不是把面泡在汤里。"
  ],
  "relatedSlugs": [
    "you-po-noodles",
    "yangchun-noodles"
  ],
  "image": "/images/recipes/daluma-dan-rou-noodles.webp"
};
