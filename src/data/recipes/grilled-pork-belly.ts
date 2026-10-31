import type { Recipe } from "@/lib/types";

/** Grilled Pork Belly (Kǎo Wǔhuāròu) (烤五花肉) — Day batch */
export const grilled_pork_belly: Recipe = {
  "id": "kao-wu-hua-rou",
  "slug": "grilled-pork-belly",
  "titleEn": "Grilled Pork Belly (Kǎo Wǔhuāròu)",
  "titleZh": "烤五花肉",
  "pinyin": "kǎo wǔ huā ròu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version slices the belly thin, marinates briefly and cooks it on a rack in a home oven so the fat renders out and drains away — the street version grills thick slabs over charcoal, where the fat drips onto the coals and the smoke flavours the meat. Our version is cleaner and less smoky but still crisp.",
  "versionNoteZh": "家庭版把五花肉切薄片、短时腌制后架在烤箱烤网上，让油脂析出滴落；街边版是把厚块架在炭火上，油滴到炭上、烟熏回肉里。家庭版更清爽、烟熏味淡，但一样香脆。",
  "tags": [
    "45-min",
    "grill",
    "pork",
    "skewer",
    "sichuan"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the skewer that anchors every Sichuan barbecue order, and the reason is simple: pork belly has enough fat to stay juicy over fierce heat. My father's rule was to slice it thinner than felt comfortable — 'if you can see the knife marks on the board, it is still too thick.'",
  "storyZh": "这是四川烧烤必点的头牌，道理很简单：五花肉油够多，猛火烤也不柴。我爸的规矩是切得比心里觉得合适的还要薄——'砧板上还能看见刀印，就还是太厚'。",
  "ingredients": [
    {
      "id": "kw-01",
      "nameEn": "pork belly, skin off",
      "nameZh": "五花肉（去皮）",
      "pinyin": "wǔ huā ròu",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly",
      "note": "Ask for a slab with even fat layers. Chilling it 30 minutes makes thin slicing much easier.",
      "noteZh": "选肥瘦层次均匀的五花肉。冷藏30分钟后更容易切薄片。"
    },
    {
      "id": "kw-02",
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
      "id": "kw-03",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce",
      "note": "This is mostly for colour. Skip if you do not have it.",
      "noteZh": "主要用于上色。没有也可省略。"
    },
    {
      "id": "kw-04",
      "nameEn": "hoisin sauce",
      "nameZh": "海鲜酱",
      "pinyin": "hǎi xiān jiàng",
      "amountMetric": "20 g",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "hoisin-sauce"
    },
    {
      "id": "kw-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine",
      "note": "Sub: dry sherry, or chicken stock if avoiding alcohol.",
      "noteZh": "替代：干雪利酒，或用鸡高汤（不饮酒时）。"
    },
    {
      "id": "kw-06",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜（切末）",
      "pinyin": "dà suàn",
      "amountMetric": "20 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "kw-07",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wǔ xiāng fěn",
      "amountMetric": "4 g",
      "amountUS": "3/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "kw-08",
      "nameEn": "cumin powder",
      "nameZh": "孜然粉",
      "pinyin": "zī rán fěn",
      "amountMetric": "6 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "kw-09",
      "nameEn": "chili flakes",
      "nameZh": "辣椒面",
      "pinyin": "là jiāo miàn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    }
  ],
  "steps": [
    {
      "text": "Chill the pork belly for 30 minutes, then slice across the grain into pieces about 4 mm / 1/6 in thick and 6 cm / 2.5 in wide.",
      "textZh": "五花肉冷藏30分钟，逆纹切成厚约4毫米、宽约6厘米的片。",
      "zhHint": "冷藏后逆纹切薄片",
      "stateNote": {
        "visual": "Thin slices where you can see alternating pale fat and deep pink lean layers, and light passes through the fatty parts",
        "visualZh": "薄片上可见浅色脂肪与深粉瘦肉交替的层次，脂肪处透光",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "A slice drapes over your finger rather than standing rigid",
        "signalZh": "一片肉搭在手指上会自然垂下，而不是硬挺不弯"
      },
      "tip": "Partially freezing is the single biggest help here — warm belly squirms and tears instead of slicing.",
      "tipZh": "半冷冻是这里最大的帮手——肉温高会打滑撕裂，根本切不薄。"
    },
    {
      "text": "Mix light soy, dark soy, hoisin, Shaoxing wine, garlic, five-spice, cumin and chili flakes. Toss the slices in the marinade and refrigerate 20 minutes — no longer, or the salt will start to cure the meat.",
      "textZh": "混合生抽、老抽、海鲜酱、黄酒、蒜末、五香粉、孜然粉和辣椒面，放入肉片抓匀，冷藏腌制20分钟——别更久，否则盐分会把肉腌出火腿味。",
      "zhHint": "抓匀后冷藏腌20分钟",
      "stateNote": {
        "visual": "Slices coated in a dark reddish-brown film; marinade absorbed, with only a little liquid left in the bowl",
        "visualZh": "肉片裹上深红褐色薄浆；酱汁被吸收，碗里只剩少许液体",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "The meat feels slightly tacky and smells of five-spice and garlic rather than raw pork",
        "signalZh": "肉片手感略黏，闻起来是五香蒜香而非生肉味"
      },
      "tip": "Twenty minutes is enough for thin slices. Overnight marinating in soy sauce makes the surface tough and salty.",
      "tipZh": "薄片腌20分钟就够。用酱油腌过夜会让表面又韧又咸。"
    },
    {
      "text": "Heat the oven to 220°C / 425°F with a rack in the upper third. Lift the slices out of the marinade, letting excess drip off, and lay them flat on a wire rack set over a lined baking tray. Reserve the marinade.",
      "textZh": "烤箱预热至220°C，烤网置于上层三分之一处。肉片捞出沥去多余酱汁，平铺在垫了烘焙纸的烤盘上的烤网，酱汁留用。",
      "zhHint": "沥干后平铺烤网，酱汁留用",
      "stateNote": {
        "visual": "Slices lie flat without overlapping; marinade no longer drips off in streams",
        "visualZh": "肉片平铺不重叠；酱汁不再成流滴落",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "The oven is fully preheated — a drop of water on the tray sizzles and vanishes instantly",
        "signalZh": "烤箱已充分预热——烤盘上滴一滴水会立刻滋响蒸发"
      },
      "tip": "The wire rack is essential. Slices sitting in their own rendered fat will poach instead of crisping.",
      "tipZh": "烤网必不可少。肉片泡在自己析出的油里就变成油煮，不会变脆。"
    },
    {
      "text": "Roast 12 minutes, then flip the slices, brush with the reserved marinade and roast another 8–10 minutes until the edges are browned and slightly crisp.",
      "textZh": "烤12分钟，翻面并刷上预留酱汁，再烤8–10分钟至边缘焦褐、微微发脆。",
      "zhHint": "翻面补刷酱汁再烤",
      "stateNote": {
        "visual": "Fat layers turn translucent and the lean edges deepen to a glossy mahogany brown; fat renders and drips onto the tray below",
        "visualZh": "脂肪层转为半透明，瘦肉边缘变成油亮的红褐色；油脂析出滴到下层烤盘",
        "timeRef": "20–22 minutes",
        "timeRefZh": "20–22 分钟",
        "heat": "high",
        "signal": "Edges curl slightly and the slices sizzle steadily; the rendered fat in the tray is clear, not milky",
        "signalZh": "边缘微微卷起，肉片持续滋滋作响；烤盘里析出的油清亮不发白"
      },
      "tip": "Watch for the moment the fat layers go from opaque white to translucent — that is when the texture turns from chewy to crisp.",
      "tipZh": "盯住脂肪层由白浊转为半透明的那一刻——口感就是从韧变脆的分界。"
    },
    {
      "text": "Rest 3 minutes on the rack, then pile onto a plate. Serve hot with extra cumin and chili flakes for dipping, and something crisp and raw alongside to cut the richness.",
      "textZh": "在烤网上静置3分钟后装盘。趁热上桌，另备孜然粉和辣椒面蘸食，配点爽脆的生蔬解腻。",
      "zhHint": "静置3分钟，配生蔬解腻",
      "stateNote": {
        "visual": "Slices glisten with a lacquered crust; the lean is browned at the edges while the fat looks glassy",
        "visualZh": "肉片表面油亮如涂漆；瘦肉边缘焦褐，脂肪呈玻璃般透亮",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Biting in gives a crisp, caramelised edge then a juicy, melting interior",
        "signalZh": "咬下去先有焦糖化的脆边，接着是多汁化口的内里"
      },
      "tip": "Wrap pieces in lettuce leaves with a slice of raw garlic — this is how it is eaten at Sichuan barbecue and it works.",
      "tipZh": "用生菜叶裹着肉片加一片生蒜吃——四川烧烤就是这么吃的，确实搭。"
    }
  ],
  "tips": [
    "Line the tray under the rack with foil — rendered pork fat is the worst thing to scrub off a baking sheet.",
    "For an air fryer version, cook at 200°C / 390°F for 12 minutes, shaking the basket twice.",
    "Slice leftovers thin and reheat in a dry skillet for the best pork fried rice you will make."
  ],
  "tipsZh": [
    "烤网下的烤盘要垫锡纸——烤五花肉析出的油是烤盘上最难洗的东西。",
    "空气炸锅版：200°C烤12分钟，中途晃两次炸篮。",
    "剩下的切薄片，干锅回热，能做出你做过最好的一份炒饭。"
  ],
  "relatedSlugs": [
    "air-fryer-pork-belly",
    "fermented-tofu-steamed-pork-belly",
    "twice-cooked-pork"
  ],
  "image": "/images/recipes/twice-cooked-pork.webp"
};
