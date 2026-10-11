import type { Recipe } from "@/lib/types";

/** Preserved Mustard Root and Pork Noodles (榨菜肉丝面) — Day batch */
export const zha_cai_pork_noodles: Recipe = {
  "id": "zha-cai-pork-noodles",
  "slug": "zha-cai-pork-noodles",
  "titleEn": "Preserved Mustard Root and Pork Noodles",
  "titleZh": "榨菜肉丝面",
  "pinyin": "zhà cài ròu sī miàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version builds a quick broth in the same pot by deglazing the pork with hot water; restaurant versions use a standing stock pot and blanch the noodles to order, which tastes cleaner but needs an hour of prep.",
  "versionNoteZh": "家常版在同一口锅里用热水冲开肉香做快手汤底；餐厅版用常备高汤锅、面按单现煮，味道更清爽但需备汤一小时。",
  "tags": [
    "25-min",
    "noodles",
    "weeknight",
    "savoury",
    "sichuan"
  ],
  "dietary": [
    "none"
  ],
  "story": "Zha cai — the salt-pressed mustard root knob from Fuling, near Chongqing — is one of the great flavour bombs of Chinese pantry cooking. A spoonful turns a plain bowl of noodles into something that tastes like it simmered for hours. This is the bowl students and night-shift workers eat across Sichuan, ready in the time it takes the water to boil.",
  "storyZh": "榨菜——重庆涪陵一带用盐压榨而成的青菜头——是中餐干货柜里最厉害的鲜味炸弹之一。一勺下去，清汤面立刻有了炖了几个小时的厚度。这是四川学生和夜班工人常吃的一碗，水开的功夫就能上桌。",
  "ingredients": [
    {
      "id": "zc-01",
      "nameEn": "fresh thin wheat noodles",
      "nameZh": "细鲜面条",
      "pinyin": "xì xiān miàn",
      "amountMetric": "280 g",
      "amountUS": "9 oz",
      "category": "staple",
      "pantry": "asian",
      "note": "Chilled fresh lo-mein noodles; or use dried spaghetti in a pinch — it is closer to Chinese noodles than you would think",
      "noteZh": "用冷藏鲜细面；应急可用干意面——比想象中更接近中式面条"
    },
    {
      "id": "zc-02",
      "nameEn": "pork loin, cut into fine matchsticks",
      "nameZh": "猪里脊，切细丝",
      "pinyin": "zhū lǐ jǐ sī",
      "amountMetric": "180 g",
      "amountUS": "6 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-loin"
    },
    {
      "id": "zc-03",
      "nameEn": "preserved mustard root (zha cai), rinsed and shredded",
      "nameZh": "榨菜，冲洗后切丝",
      "pinyin": "zhà cài",
      "amountMetric": "80 g",
      "amountUS": "½ cup shredded",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Comes in small foil packets or vacuum packs; rinse 30 seconds or it will be too salty",
      "noteZh": "常见小袋真空装；冲洗30秒，否则过咸"
    },
    {
      "id": "zc-04",
      "nameEn": "fresh ginger, finely shredded",
      "nameZh": "鲜姜，切细丝",
      "pinyin": "jiāng sī",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "zc-05",
      "nameEn": "scallion, sliced, white and green separated",
      "nameZh": "小葱，切段，葱白葱绿分开",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "2–3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "zc-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "5 g",
      "amountUS": "½ tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "note": "This is the velveting step — it keeps the pork silky in the broth",
      "noteZh": "这是上浆步骤——让肉丝在汤里保持滑嫩",
      "termKey": "cornstarch"
    },
    {
      "id": "zc-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "zc-08",
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
      "id": "zc-09",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Toss the pork matchsticks with the cornstarch, 1 tsp of the soy sauce and half the ginger. Rest 10 minutes while you bring a large pot of water to a boil.",
      "textZh": "肉丝加淀粉、1茶匙生抽与一半姜丝抓匀，静置10分钟，同时烧一大锅水。",
      "zhHint": "肉丝上浆",
      "stateNote": {
        "visual": "Pork looks glossy and slightly slippery, every strand separate",
        "visualZh": "肉丝油亮微滑，根根分明",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Strands feel silky rather than sticky when pressed between your fingers",
        "signalZh": "手指按压手感爽滑而非发黏"
      }
    },
    {
      "text": "Heat a wok over medium-high heat with a thin film of oil. Add the scallion whites and remaining ginger and stir-fry 30 seconds until fragrant.",
      "textZh": "锅烧热抹薄油，下葱白与剩余姜丝爆香30秒。",
      "zhHint": "爆香葱姜",
      "stateNote": {
        "visual": "Aromatics are pale gold at the edges and the oil looks glossy and shimmering",
        "visualZh": "葱姜边缘浅金，油面明亮晃动",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "The fragrance hits you before the smoke does",
        "signalZh": "香气先于油烟扑鼻而来"
      }
    },
    {
      "text": "Add the shredded zha cai and stir-fry 1 minute, then push everything to one side and add the pork in a single layer.",
      "textZh": "下榨菜丝炒1分钟，把料推到一边，肉丝单层下锅。",
      "zhHint": "榨菜先炒",
      "stateNote": {
        "visual": "Zha cai looks glossy and slightly darkened; pork turns opaque white at the base",
        "visualZh": "榨菜油亮略转深，肉丝贴锅面变白",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium-high",
        "signal": "The sharp pickled smell has softened into a savoury, slightly sweet aroma",
        "signalZh": "冲鼻腌菜味转为咸鲜微甜香"
      }
    },
    {
      "text": "Stir the pork into the zha cai and pour in 700 ml (3 cups) boiling water all at once. It should hiss and turn cloudy within seconds.",
      "textZh": "把肉丝与榨菜炒匀，一次倒入700毫升滚水，应立刻发出滋声并变浑浊。",
      "zhHint": "滚水冲汤",
      "stateNote": {
        "visual": "The liquid turns opaque and pale within about 10 seconds of hitting the hot wok",
        "visualZh": "滚水落入热锅约10秒内汤汁即转为乳白浑浊",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "A rolling boil returns within 30 seconds and the surface is covered in small white foam",
        "signalZh": "30秒内重新滚沸，表面浮满细白泡沫"
      }
    },
    {
      "text": "Cook the noodles in the separate pot of boiling water until just tender, then lift them straight into two bowls.",
      "textZh": "另锅宽水煮面至刚熟，直接捞入两只碗中。",
      "zhHint": "另锅煮面",
      "stateNote": {
        "visual": "Noodles are swollen and limp with no white core when bitten",
        "visualZh": "面条胀起变软，咬开无白心",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "high",
        "signal": "A strand stretches without snapping and tastes clean, not starchy",
        "signalZh": "面条拉伸不断，口感爽净不发黏"
      }
    },
    {
      "text": "Season the broth with the remaining soy sauce and white pepper, then pour it boiling hot over the noodles. Finish with sesame oil and scallion greens.",
      "textZh": "汤汁用剩余生抽与白胡椒调味，滚烫浇在面上，最后淋香油撒葱绿。",
      "zhHint": "浇汤淋香油",
      "stateNote": {
        "visual": "Pale broth with crisp pale zha cai shreds, tender pork and floating green scallion",
        "visualZh": "浅色汤中有爽脆浅色榨菜丝、嫩肉丝与漂浮葱绿",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "The bowl is hot enough that steam fogs your glasses when you lean over it",
        "signalZh": "凑近时蒸汽能糊住眼镜"
      }
    }
  ],
  "tips": [
    "Rinse the zha cai for 30 seconds under cold water. Straight from the packet it will overwhelm the whole bowl.",
    "Velveting the pork with cornstarch is not optional — without it the strands turn stringy in the broth.",
    "Boiling water into the hot wok is what emulsifies the fat into a pale broth; cold water gives you a thin, clear one."
  ],
  "tipsZh": [
    "榨菜用冷水冲30秒。直接开袋下锅会咸到盖住整碗味。",
    "肉丝上浆这步不能省——不上浆在汤里会又老又柴。",
    "滚水冲进热锅才能把油脂乳化成奶白汤；冷水只能得到清汤。"
  ],
  "relatedSlugs": [
    "pickled-mustard-root-pork-shreds",
    "yangchun-noodles"
  ],
  "image": "/images/recipes/yangchun-noodles.webp"
};
