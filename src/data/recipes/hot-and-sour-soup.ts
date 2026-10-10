import type { Recipe } from "@/lib/types";

/** Hot and Sour Soup (酸辣汤) — Day batch */
export const hot_and_sour_soup: Recipe = {
  "id": "hot-and-sour-soup",
  "slug": "hot-and-sour-soup",
  "titleEn": "Hot and Sour Soup",
  "titleZh": "酸辣汤",
  "pinyin": "suān là tāng",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version balances vinegar and white pepper to taste at the table; restaurant versions go heavier on both and thicken to a glossy, almost spoon-standing consistency.",
  "versionNoteZh": "家常版把醋与白胡椒的量留到上桌再调；餐厅版两者都下得更重，并勾芡到近乎立勺的浓稠度。",
  "tags": [
    "35-min",
    "soup",
    "spicy",
    "comfort",
    "banquet"
  ],
  "dietary": [
    "none"
  ],
  "story": "In Sichuan, hot and sour means pepper heat, not chilli heat — the warmth comes from white pepper and the sourness from Chinkiang vinegar, in a balance you adjust bowl by bowl. My Sichuanese neighbour taught me to add the vinegar off the heat, because 'vinegar cooked too long loses its nose and only keeps its bite.'",
  "storyZh": "在四川，酸辣的『辣』来自胡椒而非辣椒——暖意出自白胡椒，酸味出自镇江香醋，两者比例要一碗一碗地调。四川邻居教我醋要关火后再放，理由是『醋煮久了只剩冲劲，丢了香气』。",
  "ingredients": [
    {
      "id": "sl-01",
      "nameEn": "pork loin, cut into matchsticks",
      "nameZh": "猪里脊，切细丝",
      "pinyin": "zhū lǐ jǐ sī",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-loin",
      "note": "Slice across the grain as thinly as you can; partially frozen meat slices easiest",
      "noteZh": "尽量逆纹切细；半冷冻状态最好切"
    },
    {
      "id": "sl-02",
      "nameEn": "dried wood ear mushrooms, rehydrated and shredded",
      "nameZh": "干木耳，泡发后切丝",
      "pinyin": "mù ěr",
      "amountMetric": "15 g dried",
      "amountUS": "½ oz dried (about 1 cup soaked)",
      "category": "produce",
      "pantry": "asian",
      "termKey": "wood-ear",
      "note": "Soak in cold water 30 minutes; trim the hard nub before shredding",
      "noteZh": "冷水泡30分钟，切丝前剪掉硬蒂"
    },
    {
      "id": "sl-03",
      "nameEn": "bamboo shoots, shredded",
      "nameZh": "竹笋，切丝",
      "pinyin": "zhú sǔn sī",
      "amountMetric": "100 g",
      "amountUS": "¾ cup",
      "category": "produce",
      "pantry": "asian",
      "termKey": "bamboo-shoots",
      "note": "Canned water-packed shoots are fine — rinse well first",
      "noteZh": "清水罐头笋可以，先用清水冲净"
    },
    {
      "id": "sl-04",
      "nameEn": "soft tofu, cut into matchsticks",
      "nameZh": "嫩豆腐，切细条",
      "pinyin": "nèn dòu fu",
      "amountMetric": "150 g",
      "amountUS": "¾ cup",
      "category": "protein",
      "pantry": "asian",
      "termKey": "tofu"
    },
    {
      "id": "sl-05",
      "nameEn": "large egg, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "1 large (50 g)",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sl-06",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar",
      "note": "Add off the heat; substitute balsamic plus a splash of rice vinegar in a pinch",
      "noteZh": "关火后加入；临时可用香醋加少许米醋替代"
    },
    {
      "id": "sl-07",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "3 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper",
      "note": "The real heat of this soup — do not swap for black pepper",
      "noteZh": "此汤真正的辣味来源，不要换成黑胡椒"
    },
    {
      "id": "sl-08",
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
      "id": "sl-09",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "24 g",
      "amountUS": "2½ tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "sl-10",
      "nameEn": "chicken stock",
      "nameZh": "鸡高汤",
      "pinyin": "jī gāo tāng",
      "amountMetric": "1 L",
      "amountUS": "4¼ cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "sl-11",
      "nameEn": "chili oil, for finishing",
      "nameZh": "辣椒油，出锅用",
      "pinyin": "là jiāo yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "sl-12",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切细",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rehydrate wood ear in cold water for 30 minutes. Trim the hard base and shred into thin strips; shred bamboo shoots and tofu the same way so everything cooks evenly.",
      "textZh": "木耳冷水泡30分钟，剪去硬蒂切细丝；竹笋与嫩豆腐同样切细条，使受热均匀。",
      "zhHint": "三丝切均匀",
      "stateNote": {
        "visual": "Wood ear is glossy black and springy, shreds are roughly the same thickness as the bamboo",
        "visualZh": "木耳乌黑发亮有弹性，丝的粗细与笋丝相近",
        "timeRef": "30 minutes soaking",
        "timeRefZh": "泡发 30 分钟",
        "heat": "low",
        "signal": "Wood ear feels rubbery-firm and snaps when bent, not slimy",
        "signalZh": "木耳手感弹韧，折之即断，不发黏"
      }
    },
    {
      "text": "Toss pork matchsticks with 1 tsp cornstarch and 1 tsp light soy sauce. Rest 10 minutes.",
      "textZh": "猪肉丝加1茶匙淀粉与1茶匙生抽抓匀，静置10分钟。",
      "zhHint": "肉丝上浆",
      "stateNote": {
        "visual": "Pork looks slick and slightly tacky, each strand separate",
        "visualZh": "肉丝油亮微黏，根根分明",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Strands pull apart easily between chopsticks without sticking",
        "signalZh": "筷子一挑即散开，不粘连"
      }
    },
    {
      "text": "Bring stock to a gentle simmer. Add wood ear and bamboo shoots, and cook 5 minutes to build the base flavour.",
      "textZh": "高汤煮至微沸，下木耳与笋丝煮5分钟，打底味。",
      "zhHint": "木耳笋丝先煮",
      "stateNote": {
        "visual": "Broth is pale amber; shreds move slowly in the convection",
        "visualZh": "汤呈浅琥珀色，细丝随热流缓缓翻动",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Steam smells earthy and clean; bamboo loses its raw tinny edge",
        "signalZh": "蒸汽气息干净带土香，笋无生涩金属味"
      }
    },
    {
      "text": "Add tofu and the marinated pork, stirring gently to separate. Simmer 3 minutes until pork turns opaque and tofu is heated through.",
      "textZh": "下嫩豆腐与腌好的肉丝，轻搅散开，煮3分钟至肉丝变白、豆腐热透。",
      "zhHint": "肉丝豆腐后下",
      "stateNote": {
        "visual": "Pork strands are pale and separated; tofu sticks stay intact and slightly translucent",
        "visualZh": "肉丝变白分明，豆腐条完整微透",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "No pink remains on the pork and no tofu crumbs cloud the surface",
        "signalZh": "肉丝无粉色残留，汤面无豆腐碎屑浑浊"
      }
    },
    {
      "text": "Stir cornstarch with 4 tbsp cold water and pour in slowly while stirring. Simmer 1 minute until the soup lightly coats a spoon.",
      "textZh": "淀粉加4汤匙冷水调开，缓慢倒入并搅拌，小火煮1分钟至汤能薄薄挂勺。",
      "zhHint": "勾芡不要太厚",
      "stateNote": {
        "visual": "Soup turns glossy; a drawn line on the spoon back holds for about a second",
        "visualZh": "汤变亮，勺背划痕可停留约一秒",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Surface bubbles turn slow and glassy rather than fast and foamy",
        "signalZh": "表面气泡由急密转为缓慢透亮"
      }
    },
    {
      "text": "Turn off the heat. Drizzle in the beaten egg in a thin stream while stirring slowly, then rest 20 seconds so the ribbons set.",
      "textZh": "关火。蛋液细流淋入并缓慢搅拌，静置20秒让蛋丝定型。",
      "zhHint": "关火淋蛋成丝",
      "stateNote": {
        "visual": "Pale yellow egg ribbons drift through the dark amber broth",
        "visualZh": "淡黄色蛋丝漂在深琥珀色汤中",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "Ribbons look silky and long, not broken into fine froth",
        "signalZh": "蛋丝柔滑绵长，未被搅成细沫"
      }
    },
    {
      "text": "Stir in Chinkiang vinegar, white pepper and remaining soy sauce off the heat. Ladle out, then top with scallion and a spoon of chili oil.",
      "textZh": "关火后拌入镇江香醋、白胡椒粉与剩余生抽。盛碗，撒葱花并淋一勺辣椒油。",
      "zhHint": "醋最后放",
      "stateNote": {
        "visual": "Soup is dark amber and glossy with green scallion and red oil floating on top",
        "visualZh": "汤色深琥珀油亮，表面浮绿色葱花与红色辣油",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "First taste is sour then warmly peppery, and the vinegar aroma is sharp and fresh",
        "signalZh": "入口先酸后暖辣，醋香尖锐清新"
      }
    }
  ],
  "tips": [
    "Vinegar and white pepper go in off the heat — cooking destroys their aroma.",
    "Too sour? Add a pinch of sugar. Too mild? More white pepper, not more chilli.",
    "It thickens as it sits; loosen with hot stock when reheating leftovers."
  ],
  "tipsZh": [
    "醋与白胡椒都要关火后放，久煮会损失香气。",
    "太酸加一小撮糖；不够辣要加白胡椒，而不是加辣椒。",
    "放久了会更稠，回热时兑热高汤调开。"
  ],
  "relatedSlugs": [
    "egg-drop-soup",
    "suan-la-fen-hot-and-sour-noodles"
  ],
  "image": "/images/recipes/suan-la-fen-hot-and-sour-noodles.webp"
};
