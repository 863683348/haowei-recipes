import type { Recipe } from "@/lib/types";

/** Grilled Enoki Mushrooms (Kǎo Jīnzhēngū) (烤金针菇) — Day batch */
export const grilled_enoki_mushrooms: Recipe = {
  "id": "kao-jin-zhen-gu",
  "slug": "grilled-enoki-mushrooms",
  "titleEn": "Grilled Enoki Mushrooms (Kǎo Jīnzhēngū)",
  "titleZh": "烤金针菇",
  "pinyin": "kǎo jīn zhēn gū",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version grills the enoki in flat foil packets so the mushrooms steam in their own juices before charring, instead of the street-stall method of grilling loose bundles directly over coals, which dries them out fast and loses half the mushrooms through the grate.",
  "versionNoteZh": "家庭版把金针菇用锡纸包成扁平的袋子烤，让菇先在自身汁水里焖熟再上焦色；街边摊是直接把散把菇架在炭火上烤，很快就干，还会从烤网缝里漏掉一半。",
  "tags": [
    "25-min",
    "grill",
    "vegetarian",
    "skewer",
    "sichuan"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Enoki is the mushroom that Chinese night-market grills always sell, because it is cheap, holds sauce in its thin strands, and gets this wonderful chewy-tender texture. My sister orders two portions every time and eats them straight off the skewer, which everyone tells her is rude and which she ignores completely.",
  "storyZh": "金针菇是夜市烧烤摊必有的一样——便宜、细丝挂得住酱，烤出来又是那种又韧又嫩的好口感。我妹每次都要两份，直接从签子上撸着吃，谁说她不雅她都不理。",
  "ingredients": [
    {
      "id": "kj-01",
      "nameEn": "enoki mushrooms",
      "nameZh": "金针菇",
      "pinyin": "jīn zhēn gū",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "produce",
      "pantry": "asian",
      "note": "Look for tight, white bundles with dry caps. Sub: oyster mushrooms torn into strips, or shimeji.",
      "noteZh": "选菌盖干爽、菌柄紧实洁白的。替代：平菇撕成条，或用本占地菇（shimeji）。"
    },
    {
      "id": "kj-02",
      "nameEn": "garlic, finely minced",
      "nameZh": "大蒜（切细末）",
      "pinyin": "dà suàn",
      "amountMetric": "20 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "kj-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "kj-04",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油（芝麻油）",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "kj-05",
      "nameEn": "chili flakes",
      "nameZh": "辣椒面",
      "pinyin": "là jiāo miàn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "kj-06",
      "nameEn": "cumin powder",
      "nameZh": "孜然粉",
      "pinyin": "zī rán fěn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "kj-07",
      "nameEn": "neutral vegetable oil",
      "nameZh": "无味植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "kj-08",
      "nameEn": "scallion greens, chopped",
      "nameZh": "小葱绿（切碎）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Trim about 1 cm / 1/2 in off the root end of the enoki and separate the bundle into 6–8 flat clusters about 3 cm / 1.25 in wide. Rinse briefly and pat very dry with a towel.",
      "textZh": "切掉金针菇根部约1厘米，把整把分成6–8个宽约3厘米的扁平小簇。快速冲洗后用厨纸彻底吸干水分。",
      "zhHint": "分成小簇，务必吸干",
      "stateNote": {
        "visual": "Clusters hold together as flat fans; no water droplets on the surface",
        "visualZh": "小簇呈扁平扇形聚拢；表面无水珠",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Squeezed gently, the mushrooms feel dry and spring back rather than feeling slick",
        "signalZh": "轻捏时菇身干爽、能回弹，而不是滑腻湿冷"
      },
      "tip": "Wet mushrooms steam instead of browning. Dry them properly or you will get pale, soggy results.",
      "tipZh": "带水的菇只会出水蒸熟、上不了色。一定擦干，否则成品发白发软。"
    },
    {
      "text": "Whisk light soy sauce, sesame oil, minced garlic, chili flakes and cumin in a bowl. Let it sit 3 minutes so the garlic softens and the spices hydrate.",
      "textZh": "碗中混合生抽、香油、蒜末、辣椒面和孜然粉，静置3分钟让蒜味柔和、香料吸水。",
      "zhHint": "调酱静置3分钟",
      "stateNote": {
        "visual": "Sauce thickens slightly as flakes absorb liquid; a thin layer of red oil sits on top",
        "visualZh": "辣椒面吸汁后酱汁略稠；表面浮一层红油",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Raw garlic sharpness mellows into a rounded savoury aroma",
        "signalZh": "生蒜的辛辣转为圆润的咸鲜香气"
      }
    },
    {
      "text": "Toss the enoki clusters with the vegetable oil, then brush or spoon half the sauce over them. Keep the rest for basting later.",
      "textZh": "金针菇小簇拌上植物油，再刷（或淋）上一半酱汁；剩下的留作后期补刷。",
      "zhHint": "先拌油再上酱，留一半补刷",
      "stateNote": {
        "visual": "Strands glisten and separate; sauce clings in thin streaks rather than pooling",
        "visualZh": "菌丝油亮分明；酱汁呈细条状附着，不积在底部",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Every cluster is coated but the tray underneath stays almost clean",
        "signalZh": "每簇都裹上酱，但盘底几乎无积液"
      }
    },
    {
      "text": "Wrap the clusters in two flat foil packets, leaving a little headspace, and place on a grill or under a broiler about 10 cm / 4 in from the heat. Cook 6 minutes sealed, then open the packets and cook 4 more minutes.",
      "textZh": "把小簇分装进两个扁平锡纸包（留少许空隙），置于烤架或烤箱上火下方约10厘米处。密封烤6分钟，再打开锡纸补烤4分钟。",
      "zhHint": "先密封焖烤再开包上色",
      "stateNote": {
        "visual": "Sealed stage: packets puff up and mushrooms look wet and pale. Open stage: surfaces dry, edges brown and slight char appears on the tips",
        "visualZh": "密封阶段：锡纸包鼓起，菇身湿润发白。开包阶段：表面变干，边缘发褐，菇尖出现轻微焦色",
        "timeRef": "10 minutes total",
        "timeRefZh": "共10分钟",
        "heat": "high",
        "signal": "Liquid in the packet bubbles audibly during the sealed stage; in the open stage you hear gentle sizzling",
        "signalZh": "密封阶段能听到包内液体咕嘟作响；开包后转为轻微滋滋声"
      },
      "tip": "Opening the foil for the last few minutes is what gives you char instead of boiled mushrooms.",
      "tipZh": "最后几分钟打开锡纸，才能得到焦香而不是水煮菇。"
    },
    {
      "text": "Brush with the reserved sauce, transfer to a plate and scatter scallion over the top. Serve hot, straight from the packet.",
      "textZh": "刷上预留的酱汁，装盘后撒葱花。趁热食用，直接从锡纸包里夹出来吃。",
      "zhHint": "补刷酱汁趁热吃",
      "stateNote": {
        "visual": "Glossy browned strands with bright green scallion on top; juices thickened into a light glaze",
        "visualZh": "菌丝油亮带褐，上面撒着翠绿葱花；汁水收成薄薄一层亮芡",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Strands are tender but still offer slight resistance when bitten — soft and squeaky, not mushy",
        "signalZh": "菌丝变软但咬下去仍略有回弹——柔韧弹牙，而非软烂"
      },
      "tip": "Enoki cooks fast and turns rubbery if overdone; check at the 8-minute mark if your grill runs hot.",
      "tipZh": "金针菇熟得快，过头会变橡皮；火力猛的话8分钟就该检查一下。"
    }
  ],
  "tips": [
    "Foil packets are the cleanest home method — no mushrooms lost through the grate and far easier cleanup.",
    "Add a spoon of doubanjiang to the sauce if you want the fuller, bean-paste version sold at Sichuan stalls.",
    "Serve with other grilled skewers; the mild mushroom is a good palate break between spicy items."
  ],
  "tipsZh": [
    "锡纸包是家庭做法里最省事的——不会漏进烤网、也好清洗。",
    "想要四川摊子上那种更浓郁的酱香，可在酱里加一勺豆瓣酱。",
    "适合和其他烤串一起上；菇味清淡，正好中和辣味串的刺激。"
  ],
  "relatedSlugs": [
    "garlic-vermicelli-enoki",
    "enoki-tofu-clay-pot",
    "duojiao-golden-needle-mushrooms"
  ],
  "image": "/images/recipes/duojiao-golden-needle-mushrooms.webp"
};
