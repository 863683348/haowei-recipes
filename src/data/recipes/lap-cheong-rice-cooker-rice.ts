import type { Recipe } from "@/lib/types";

/** Lap Cheong Rice Cooker Rice (Lachang Menfan) (腊肠焖饭) — Day batch */
export const lap_cheong_rice_cooker_rice: Recipe = {
  "id": "la-chang-men-fan",
  "slug": "lap-cheong-rice-cooker-rice",
  "titleEn": "Lap Cheong Rice Cooker Rice (Lachang Menfan)",
  "titleZh": "腊肠焖饭",
  "pinyin": "là cháng mèn fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "The family version tucks raw sausage on top of the rice so the fat renders down through the grains as it cooks; the restaurant version uses a clay pot and starts the sausage in a hot pan, which gives a smokier top but a less evenly flavoured pot of rice.",
  "versionNoteZh": "家庭版把生腊肠直接铺在米上，让油脂在煮的过程中一层层渗进饭里；餐馆版用砂锅并先把腊肠爆香，表面更焦香，但整锅饭的味道不如家庭版均匀。",
  "tags": [
    "45-min",
    "one-pot",
    "rice",
    "cantonese",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Guangdong family has a version of this, and the argument is always about when the sausage goes in. My mother-in-law insists on slicing it thin and burying it halfway down the pot so the top stays pale and the bottom gets all the fat. It is the dish we make the day a new batch of lap cheong arrives from the market.",
  "storyZh": "每个广东家庭都有自己的版本，争论的永远是腊肠什么时候下锅。我婆婆坚持切薄片埋在米的中层，这样上层颜色浅、下层吸足油。每年市场新腊肠到货那天，我们家必做这一锅。",
  "ingredients": [
    {
      "id": "lc-01",
      "nameEn": "jasmine rice",
      "nameZh": "茉莉香米",
      "pinyin": "dà mǐ",
      "amountMetric": "300 g",
      "amountUS": "1.5 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until the water runs nearly clear. Sub: any medium-grain white rice.",
      "noteZh": "淘洗至水近乎清澈。替代：任意中粒白米。"
    },
    {
      "id": "lc-02",
      "nameEn": "Chinese sausage (lap cheong)",
      "nameZh": "腊肠",
      "pinyin": "là cháng",
      "amountMetric": "3 links (about 150 g)",
      "amountUS": "3 links (about 5.3 oz)",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for the firm, dark-red Cantonese style, not the soft sweet Thai variety. Sub: Chinese bacon or a good smoked sausage.",
      "noteZh": "选硬质深红的广式腊肠，不要用偏甜的泰式腊肠。替代：腊肉或优质烟熏香肠。"
    },
    {
      "id": "lc-03",
      "nameEn": "dried shiitake mushrooms, soaked",
      "nameZh": "干香菇（泡发）",
      "pinyin": "gān xiāng gū",
      "amountMetric": "4 (about 30 g dried)",
      "amountUS": "4 (about 1 oz dried)",
      "category": "produce",
      "pantry": "asian",
      "termKey": "dried-shiitake",
      "note": "Soak in warm water 30 minutes and slice; keep the soaking liquid as part of the cooking water.",
      "noteZh": "温水泡30分钟后切片；泡菇水留着当煮饭水的一部分。"
    },
    {
      "id": "lc-04",
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
      "id": "lc-05",
      "nameEn": "frozen green peas",
      "nameZh": "冷冻青豆",
      "pinyin": "qīng dòu",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "lc-06",
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
      "id": "lc-07",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce",
      "note": "Only for colour. Sub: 1 extra tbsp light soy plus 1/2 tsp molasses.",
      "noteZh": "只为上色。替代：多1汤匙生抽加1/2茶匙糖蜜。"
    },
    {
      "id": "lc-08",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "lc-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "lc-10",
      "nameEn": "scallion greens, chopped",
      "nameZh": "小葱绿（切碎）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse the rice in cold water until the water runs mostly clear, then drain for 2 minutes in a sieve.",
      "textZh": "大米用冷水淘洗至水基本清澈，捞出沥水2分钟。",
      "zhHint": "淘米至水清，沥干",
      "stateNote": {
        "visual": "Wash water goes from milky to nearly transparent; drained grains look matte, not glossy",
        "visualZh": "淘米水由乳白转为近乎透明；沥干的米粒呈哑光而非发亮",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "You can count individual grains through the water",
        "signalZh": "透过水能数清一颗颗米粒"
      },
      "tip": "Draining properly matters more than rinsing here — surface water dilutes the sausage fat.",
      "tipZh": "这里沥干比淘洗更重要——表面水分会稀释腊肠油。"
    },
    {
      "text": "Slice the lap cheong on a slight diagonal into 3 mm / 1/8 in coins, and slice the soaked shiitake thinly. Dice the carrot to the size of a pea.",
      "textZh": "腊肠斜刀切成3毫米厚的圆片，泡发的香菇切薄片，胡萝卜切成青豆大小的丁。",
      "zhHint": "腊肠斜切薄片",
      "stateNote": {
        "visual": "Sausage slices show alternating ruby-red lean and translucent white fat; shiitake slices are evenly brown with no hard core",
        "visualZh": "腊肠片可见红瘦肉与半透明白脂肪相间；香菇片颜色均匀、无硬芯",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "signal": "A slice of sausage bends without cracking; the knife goes through the shiitake with no resistance",
        "signalZh": "腊肠片可弯折不断裂；刀切香菇毫无阻力"
      },
      "tip": "A slightly warm sausage slices cleaner — 10 minutes in the fridge first firms the fat up.",
      "tipZh": "腊肠稍冰一下更好切——先冷藏10分钟让脂肪变硬。"
    },
    {
      "text": "Put the drained rice in the rice cooker pot. Add water to the 1.5-cup mark, then pour off 60 ml / 1/4 cup and replace it with strained shiitake soaking liquid. Stir in light soy sauce, dark soy sauce and oyster sauce.",
      "textZh": "沥好的米放入电饭煲内锅，加水至1.5杯刻度，再舀出60毫升，用过滤后的泡菇水补回。加入生抽、老抽和蚝油拌匀。",
      "zhHint": "米加水后调味再铺料",
      "stateNote": {
        "visual": "Cooking liquid is a clear amber-brown, not murky; rice is evenly tinted beige",
        "visualZh": "煮饭水呈清亮的琥珀褐色不发浑；米粒均匀染成浅褐色",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Dipping a spoon in and lifting it, the liquid runs off in a thin amber stream",
        "signalZh": "勺子舀起再提起，液体呈细琥珀色流下"
      },
      "tip": "Strain the mushroom water through a coffee filter or fine sieve — the grit at the bottom will ruin the texture.",
      "tipZh": "泡菇水要用咖啡滤纸或细筛过滤——底部沉沙会毁掉口感。"
    },
    {
      "text": "Scatter carrot and shiitake over the surface, then lay the sausage slices on top in a single layer. Do not stir them in.",
      "textZh": "把胡萝卜丁和香菇片撒在表面，再将腊肠片单层铺在最上面，不要拌进去。",
      "zhHint": "腊肠铺面不拌入",
      "stateNote": {
        "visual": "Sausage sits proud of the water line in a neat layer; vegetables are visible but submerged",
        "visualZh": "腊肠片整齐浮在水位线之上；蔬菜可见但已浸没",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "From above you see sausage, not rice",
        "signalZh": "从上往下看到的是腊肠而不是米"
      },
      "tip": "Laying the sausage on top is what makes the fat travel down through the rice instead of pooling at the bottom.",
      "tipZh": "腊肠铺面才能让油脂自上而下渗透，而不是积在锅底。"
    },
    {
      "text": "Cook on the standard white rice setting. When the cooker switches to keep-warm, scatter the frozen peas over the top, close the lid and let it stand 10 minutes.",
      "textZh": "按电饭煲标准煮饭档。跳闸保温后把冷冻青豆撒在表面，盖盖再焖10分钟。",
      "zhHint": "跳闸后撒青豆焖10分钟",
      "stateNote": {
        "visual": "Sausage slices have shrunk slightly and turned glossy; rendered orange-red fat has stained the rice around each slice",
        "visualZh": "腊肠片略微收缩并变得油亮；析出的橙红色油脂把周围米饭染上色",
        "timeRef": "10 minutes resting",
        "timeRefZh": "焖10分钟",
        "signal": "The surface rice around each sausage slice is darker and slightly oily",
        "signalZh": "每片腊肠周围的米饭颜色更深、略带油光"
      },
      "tip": "Add the peas only at the end so they stay bright green and sweet instead of grey and mushy.",
      "tipZh": "青豆最后才放，才能保持翠绿清甜，不会发灰发烂。"
    },
    {
      "text": "Drizzle with sesame oil, scatter the scallion, and fold everything through from the bottom of the pot with a rice paddle, cutting rather than stirring so the grains stay whole.",
      "textZh": "淋上香油、撒葱花，用饭勺从锅底向上翻拌，用切拌而非搅动，保持米粒完整。",
      "zhHint": "淋香油撒葱，切拌均匀",
      "stateNote": {
        "visual": "Rice is evenly speckled red, orange and green; no white patches and no dry crusty clumps",
        "visualZh": "米饭均匀点缀红、橙、绿三色；无白色斑块，也无干硬结块",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Lifting the paddle brings up a mixed spoonful with sausage, mushroom and pea in one scoop",
        "signalZh": "饭勺提起时一勺里同时有腊肠、香菇和青豆"
      },
      "tip": "Fold, do not stir — stirring breaks the grains and turns a fluffy pot into a paste.",
      "tipZh": "要翻拌不要搅动——搅动会把米粒打碎，把松软的饭搅成糊。"
    }
  ],
  "tips": [
    "A spoonful of crispy fried shallots on top adds crunch that cuts the richness of the sausage fat.",
    "For a crisp bottom crust, finish in a heavy pot on the stove over low heat for 5 extra minutes.",
    "Leftovers make better fried rice than fresh rice does, because the grains are drier and already seasoned."
  ],
  "tipsZh": [
    "撒一勺炸香的干葱酥，脆口感能解腊肠油的腻。",
    "想要锅巴，改厚底锅在炉上小火多煮5分钟。",
    "剩饭炒饭比新饭更好，因为米粒更干且已入味。"
  ],
  "relatedSlugs": [
    "lap-cheong-claypot-rice",
    "electric-rice-cooker-claypot-style-rice",
    "clay-pot-rice"
  ],
  "image": "/images/recipes/lap-cheong-claypot-rice.webp"
};
