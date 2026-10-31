import type { Recipe } from "@/lib/types";

/** Cilantro Garlic Dipping Sauce (Xiāngcài Suànní Dié) (香菜蒜泥碟) — Day batch */
export const cilantro_garlic_dipping_sauce: Recipe = {
  "id": "xiang-cai-suan-ni-die",
  "slug": "cilantro-garlic-dipping-sauce",
  "titleEn": "Cilantro Garlic Dipping Sauce (Xiāngcài Suànní Dié)",
  "titleZh": "香菜蒜泥碟",
  "pinyin": "xiāng cài suàn ní dié",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 12,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version mashes the garlic to a wet paste with a pinch of salt so it melts into the sauce, instead of the restaurant shortcut of garlic powder. We also use far more cilantro than most restaurants do — it is the point of the dish.",
  "versionNoteZh": "家庭版把蒜加一点盐捣成湿泥，让蒜味融进酱汁，而不是餐馆用蒜粉图省事的做法。香菜用量也比多数餐馆更足——这本来就是这道蘸碟的主角。",
  "tags": [
    "15-min",
    "dipping-sauce",
    "garlic",
    "cantonese",
    "no-cook"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Cantonese steamboat dinners finish with the broth, but they start with this bowl. My mother-in-law makes it in a small porcelain dish with a flat spoon, and she has one rule: the cilantro goes in last and never gets stirred more than twice, or 'it goes dark and sad.'",
  "storyZh": "广东打边炉以喝汤收尾，却以这碗蘸料开场。家婆用一只小瓷碟配扁勺来调，只有一条规矩：香菜最后放，最多拌两下——'拌多了发黑发蔫'。",
  "ingredients": [
    {
      "id": "xs-01",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "30 g",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic",
      "note": "Fresh cloves only — jarred minced garlic is too mild and slightly sour here.",
      "noteZh": "必须用新鲜蒜瓣；瓶装蒜末在此处味道过淡且略带酸味。"
    },
    {
      "id": "xs-02",
      "nameEn": "fresh cilantro, leaves and tender stems",
      "nameZh": "香菜（连嫩茎）",
      "pinyin": "xiāng cài",
      "amountMetric": "30 g",
      "amountUS": "1 cup packed",
      "category": "produce",
      "pantry": "local",
      "note": "Tender upper stems carry more aroma than the leaves — chop them together. Sub: flat-leaf parsley plus 1 tsp lime zest if cilantro is unavailable.",
      "noteZh": "上部嫩茎比叶子更香，一起切碎即可。替代：香菜买不到可用平叶欧芹加1茶匙青柠皮屑。"
    },
    {
      "id": "xs-03",
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
      "id": "xs-04",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "pinyin": "mǐ cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar",
      "note": "Rice vinegar keeps the sauce delicate. Chinkiang vinegar will overpower the cilantro — use only if you prefer it.",
      "noteZh": "米醋能保持蘸料清雅。镇江香醋会盖过香菜味，除非个人偏好，否则不建议。"
    },
    {
      "id": "xs-05",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油（芝麻油）",
      "pinyin": "xiāng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "xs-06",
      "nameEn": "chili oil",
      "nameZh": "辣椒油",
      "pinyin": "là jiāo yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "xs-07",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "xs-08",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "2 g",
      "amountUS": "1/3 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Peel the garlic and place it in a mortar with the salt. Pound and grind until you have a wet, sticky paste with no visible chunks.",
      "textZh": "蒜去皮放入石臼，加盐一起捣成黏稠湿泥，看不到蒜粒为止。",
      "zhHint": "加盐捣成湿泥",
      "stateNote": {
        "visual": "Sticky pale paste that clings to the pestle; no white chunks remain",
        "visualZh": "黏稠的浅色蒜泥，粘在杵上；无白色蒜粒残留",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "The garlic smells sharply pungent and looks slightly frothy from the released juices",
        "signalZh": "蒜味辛辣冲鼻，因汁水释出而表面略起细沫"
      },
      "tip": "The salt acts as an abrasive — without it the garlic slides around instead of breaking down.",
      "tipZh": "盐在这里起研磨剂的作用——不加盐蒜瓣只会打滑，捣不烂。"
    },
    {
      "text": "Roughly chop the cilantro, including the tender upper stems, into pieces about 3 mm / 1/8 in. Do not use a blender.",
      "textZh": "香菜连上部嫩茎一起粗切成约3毫米的碎段。不要用料理机。",
      "zhHint": "手切成碎段，不用机器",
      "stateNote": {
        "visual": "Bright green, dry-looking pieces with no dark bruised edges or puddles of juice",
        "visualZh": "翠绿干爽的碎段，无发黑压伤的边缘或渗出的汁水",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "The cutting board smells strongly of cilantro but stays dry",
        "signalZh": "砧板香菜味浓郁但保持干爽"
      }
    },
    {
      "text": "In a small bowl, whisk light soy sauce, rice vinegar, sugar and chili oil for 20 seconds until the sugar dissolves completely.",
      "textZh": "小碗中加入生抽、米醋、白糖和辣椒油，搅打20秒至糖完全化开。",
      "zhHint": "先化开糖再下蒜泥",
      "stateNote": {
        "visual": "Clear amber liquid with no sugar crystals; a thin red layer of chili oil floats on top",
        "visualZh": "清亮琥珀色液体，无糖粒；表面浮一层红色辣油",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "Liquid looks uniform when swirled and no grains catch on the spoon",
        "signalZh": "晃动时液体均匀一致，勺面不挂糖粒"
      }
    },
    {
      "text": "Add the garlic paste to the seasoned liquid and stir well, then whisk in the sesame oil. The sauce should look slightly cloudy from the garlic.",
      "textZh": "把蒜泥加入调味汁中充分搅匀，再搅入香油。酱汁应因蒜泥而略显浑浊。",
      "zhHint": "蒜泥打散后再加香油",
      "stateNote": {
        "visual": "Slightly cloudy tan liquid; sesame oil gives the surface a soft sheen",
        "visualZh": "略浑浊的浅褐色液体；香油让表面泛起柔光",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Garlic no longer settles to the bottom within a few seconds of stirring",
        "signalZh": "搅拌后蒜泥数秒内不再沉底"
      }
    },
    {
      "text": "Fold in the cilantro with no more than two or three strokes. Serve immediately — this sauce is at its best within 20 minutes.",
      "textZh": "拌入香菜，最多翻拌两三下。立即上桌——这碗蘸料最好在20分钟内吃完。",
      "zhHint": "香菜最后放，拌两下就上桌",
      "stateNote": {
        "visual": "Vivid green flecks suspended in cloudy sauce; no darkened or wilted cilantro",
        "visualZh": "鲜绿碎叶悬浮在浑浊酱汁中；香菜不发黑、不发蔫",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "signal": "The cilantro smells fresh and grassy, not bruised or metallic",
        "signalZh": "香菜闻起来清新带草香，无压伤或金属味"
      },
      "tip": "Scale the garlic to your tolerance — 6 cloves is the Cantonese standard, but 3 is plenty if you are sensitive.",
      "tipZh": "蒜量按个人承受度调整——6瓣是广东标准，怕辣的话3瓣就够。"
    }
  ],
  "tips": [
    "Serve with plain poached chicken, steamed fish, or hot pot — anything mild enough to let the garlic and cilantro lead.",
    "Make the garlic paste and the liquid ahead, but add cilantro only at the table.",
    "Leftovers keep 2 days refrigerated, though the cilantro will darken — still fine for cooking, less pretty for dipping."
  ],
  "tipsZh": [
    "配白切鸡、清蒸鱼或火锅最合适——食材本身要清淡，才能衬出蒜香与香菜味。",
    "蒜泥和调味汁可提前调好，香菜一定上桌前再放。",
    "剩的冷藏可存2天，香菜会发黑——做菜尚可，蘸食就不好看了。"
  ],
  "relatedSlugs": [
    "sesame-sauce-dipping-sauce",
    "mala-spicy-dipping-sauce",
    "seafood-dipping-sauce"
  ],
  "image": "/images/recipes/oil-dipping-bowl.webp"
};
