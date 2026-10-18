import type { Recipe } from "@/lib/types";

/** Dry Pot King Oyster Mushrooms (Gan Guo Xing Bao Gu) (干锅杏鲍菇) — Day batch */
export const dry_pot_king_oyster_mushrooms: Recipe = {
  "id": "gan-guo-xing-bao-gu",
  "slug": "dry-pot-king-oyster-mushrooms",
  "titleEn": "Dry Pot King Oyster Mushrooms (Gan Guo Xing Bao Gu)",
  "titleZh": "干锅杏鲍菇",
  "pinyin": "gān guō xìng bào gū",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan",
  "regionZh": "湖南",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version dry-sears the mushrooms in a wok and serves them in the same pan; restaurant gan guo arrives on a small cast-iron pot over a burner with a bed of raw onion and celery that keeps cooking as you eat.",
  "versionNoteZh": "家常版在炒锅里干煸后直接同锅上桌；餐馆干锅用小铸铁锅架在酒精炉上，底下垫生洋葱与芹菜，边吃边继续加热。",
  "tags": [
    "30-min",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Gan guo, or 'dry pot', is the Hunan answer to hot pot: no broth, just concentrated chilli, garlic and a small amount of everything. King oyster mushroom is the perfect candidate because its dense stem browns and chews like squid — which is why Chinese cooks nickname it 'the vegetarian abalone'.",
  "storyZh": "干锅是湖南人对火锅的回答：没有汤，只有浓缩的辣椒、蒜和少量主料。杏鲍菇是天选之材——致密菌柄煎后褐变、口感近鱿鱼，因此被叫作「素鲍鱼」。",
  "ingredients": [
    {
      "id": "gxbg-1",
      "nameEn": "king oyster mushrooms",
      "nameZh": "杏鲍菇",
      "pinyin": "xìng bào gū",
      "amountMetric": "500 g",
      "amountUS": "5–6 large",
      "category": "produce",
      "pantry": "local",
      "note": "Firm, unblemished stems. Wipe clean — do not soak.",
      "noteZh": "选结实无斑的菌柄；擦净即可，不要泡水。"
    },
    {
      "id": "gxbg-2",
      "nameEn": "celery",
      "nameZh": "西芹",
      "pinyin": "xī qín",
      "amountMetric": "120 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "note": "Cut into 4 cm batons — it stays crunchy at the bottom of the pot.",
      "noteZh": "切 4 厘米段，在锅底久热仍脆。"
    },
    {
      "id": "gxbg-3",
      "nameEn": "onion",
      "nameZh": "洋葱",
      "pinyin": "yáng cōng",
      "amountMetric": "100 g",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "gxbg-4",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "8 g",
      "amountUS": "10–12 chilies",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "gxbg-5",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "25 g",
      "amountUS": "5 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gxbg-6",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "gxbg-7",
      "nameEn": "doubanjiang (fermented chilli bean paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "20 g",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use a vegetarian brand if strict; it is the only umami source here.",
      "noteZh": "严格素食请选素豆瓣；这是本菜唯一鲜味来源。",
      "termKey": "doubanjiang"
    },
    {
      "id": "gxbg-8",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "2 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "gxbg-9",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gxbg-10",
      "nameEn": "toasted sesame oil",
      "nameZh": "芝麻香油",
      "pinyin": "zhī ma xiāng yóu",
      "amountMetric": "8 ml",
      "amountUS": "1 1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "gxbg-11",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "gxbg-12",
      "nameEn": "neutral cooking oil",
      "nameZh": "中性食用油",
      "pinyin": "zhōng xìng shí yòng yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Wipe mushrooms and tear lengthwise into thick strips (about 1.5 cm) rather than slicing — torn surfaces grip the sauce better.",
      "textZh": "杏鲍菇擦净，顺纹**手撕**成约 1.5 厘米粗条（不要切片）——撕裂面更能挂汁。",
      "zhHint": "手撕粗条，比切片挂汁",
      "stateNote": {
        "visual": "Strips have rough, fibrous edges; surfaces look dry and matte.",
        "visualZh": "条状边缘粗糙带纤维，表面干爽哑光。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Strips feel firm and springy, with no slick or wet coating.",
        "signalZh": "菇条手感紧实有弹，表面不滑不湿。"
      }
    },
    {
      "text": "Heat a dry wok over medium-high with no oil. Add mushrooms in a single layer and dry-sear 4 minutes, tossing twice, until they squeak and brown.",
      "textZh": "炒锅大火烧热**不放油**，杏鲍菇单层下锅干煸 4 分钟，中途翻两次，至出水收干、表面焦香。",
      "zhHint": "先干煸出水，逼出香味",
      "stateNote": {
        "visual": "Mushrooms shrink by about a third and take on golden-brown patches; released liquid has evaporated.",
        "visualZh": "菇条缩水约三分之一并现金褐斑，析出的水分已收干。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high",
        "signal": "Spreading them again produces a dry squeak rather than a wet sizzle.",
        "signalZh": "再次摊开时发出干爽的「吱吱」声，而非带水的滋声。"
      }
    },
    {
      "text": "Push mushrooms up the side of the wok. Add oil to the base, then dried chilies, garlic, ginger and Sichuan peppercorns; fry 45 seconds. Add doubanjiang and fry 1 minute until the oil reddens.",
      "textZh": "菇条拨到锅边；锅底放油，下干辣椒、蒜片、姜片与花椒煸 45 秒，再加豆瓣酱炒 1 分钟至油色红亮。",
      "zhHint": "拨边煸料，豆瓣炒出红油",
      "stateNote": {
        "visual": "Chillies glossy but not black; the oil at the base is a clean red.",
        "visualZh": "辣椒油亮不发黑，锅底油色清红。",
        "timeRef": "1 min 45 sec",
        "timeRefZh": "1 分 45 秒",
        "heat": "medium",
        "signal": "Sharp roasted chilli aroma with a faint numbing edge.",
        "signalZh": "煳辣香气浓郁，带轻微麻感。"
      }
    },
    {
      "text": "Add onion and celery. Stir-fry 90 seconds over medium-high until the onion edges soften but the celery stays bright and snappy.",
      "textZh": "下洋葱与西芹，中大火炒 90 秒，至洋葱边缘变软、西芹仍翠绿爽脆。",
      "zhHint": "配菜别炒过头，留住脆感",
      "stateNote": {
        "visual": "Onion turns translucent at the edges; celery remains vivid green with a glassy sheen.",
        "visualZh": "洋葱边缘转半透明，西芹依旧翠绿带亮泽。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium-high",
        "signal": "Biting a celery baton gives an audible snap.",
        "signalZh": "咬断西芹可听到清脆声。"
      }
    },
    {
      "text": "Return mushrooms to the centre. Drizzle light soy sauce around the wok wall and toss 60 seconds to glaze. Finish off heat with sesame oil and scallion.",
      "textZh": "菇条归拢锅中，沿锅壁淋生抽，翻拌 60 秒裹匀上味；离火后淋香油、撒葱花。",
      "zhHint": "酱沿锅壁淋，离火再点香油",
      "stateNote": {
        "visual": "Every strip is glossy and tinted red-brown; no liquid pools in the wok.",
        "visualZh": "每条菇都油亮红褐，锅底无积液。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "medium-high",
        "signal": "A dry, nutty aroma with a faint crackle as the strips hit the hot wok.",
        "signalZh": "菇条触热锅发出轻微干爆声，香气坚果般焦香。"
      }
    }
  ],
  "tips": [
    "Dry-searing before adding oil is the whole trick — it drives out water so the mushrooms brown instead of stewing.",
    "Tear, don't slice: ragged surfaces hold sauce and give a meatier chew.",
    "Serve in the wok or a cast-iron pan so residual heat keeps the edges crisp."
  ],
  "tipsZh": [
    "先干煸再放油是关键——逼出水分才能上色，否则只是水煮。",
    "手撕不切片：粗糙断面挂汁、口感更像肉。",
    "连炒锅或铸铁锅一起上桌，余温能让边缘保持酥香。"
  ],
  "relatedSlugs": [
    "dry-pot-cauliflower",
    "dry-pot-potato-slices",
    "kung-pao-xing-bao-gu"
  ],
  "image": "/images/recipes/dry-pot-cauliflower.webp"
};
