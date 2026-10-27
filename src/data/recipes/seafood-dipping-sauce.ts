import type { Recipe } from "@/lib/types";

/** Seafood Dipping Sauce (Hai Xian Zhan Liao) (海鲜蘸料) — Day batch */
export const seafood_dipping_sauce: Recipe = {
  "id": "hai-xian-zhan-liao",
  "slug": "seafood-dipping-sauce",
  "titleEn": "Seafood Dipping Sauce (Hai Xian Zhan Liao)",
  "titleZh": "海鲜蘸料",
  "pinyin": "hǎi xiān zhàn liào",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 10,
  "servings": 4,
  "version": "family",
  "versionNote": "The family version builds on finely shredded ginger and scallion with soy and vinegar, bright and clean. Cantonese restaurant versions often add a spoonful of the poaching liquid from the shrimp and a little sugar, giving a rounder, slightly sweet dip that matches steamed seafood.",
  "versionNoteZh": "家庭版以极细的姜丝葱丝配酱油和香醋，清爽利落。粤菜餐馆常加一勺白灼虾的汤汁和少许糖，味道更圆润微甜，与清蒸海鲜更搭。",
  "tags": [
    "10-min",
    "condiment",
    "dipping-sauce",
    "seafood"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "In Guangzhou, every seafood restaurant sets down this sauce before the fish arrives, and the ginger is always cut finer than you think possible. My uncle judged a restaurant entirely by its ginger: too thick, and he said the kitchen had stopped caring.",
  "storyZh": "在广州，海鲜酒楼总是在鱼上桌前先摆上这碟蘸料，姜丝细得超乎想象。我舅舅判断一家店只看姜丝：切得粗了，他就说后厨已经不上心了。",
  "ingredients": [
    {
      "id": "hx-01",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp finely shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger",
      "note": "Peel and cut into hair-thin shreds; the finer the better."
    },
    {
      "id": "hx-02",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "amountMetric": "25 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion",
      "note": "Slice the greens into fine rings."
    },
    {
      "id": "hx-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hx-04",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar",
      "note": "Sub: Chinkiang vinegar for a deeper, maltier tang."
    },
    {
      "id": "hx-05",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "hx-06",
      "nameEn": "fresh red chilli",
      "nameZh": "鲜红辣椒",
      "amountMetric": "15 g",
      "amountUS": "1 small",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "hx-07",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "8 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "hx-08",
      "nameEn": "hot water",
      "nameZh": "热开水",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "other",
      "pantry": "local",
      "note": "Warm water melts the sugar and softens the raw bite of the soy."
    },
    {
      "id": "hx-09",
      "nameEn": "fresh coriander",
      "nameZh": "香菜",
      "amountMetric": "10 g",
      "amountUS": "2 tbsp chopped",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Peel the ginger and cut it into paper-thin slices, then shred into hair-fine threads. Slice the scallion greens into thin rings and thinly slice the chilli.",
      "textZh": "生姜去皮切成薄片，再切成发丝般的细丝。葱绿切细圈，辣椒切薄片。",
      "zhHint": "姜切发丝，葱切细圈",
      "stateNote": {
        "visual": "Ginger shreds are translucent and separate freely; scallion rings are even and bright",
        "visualZh": "姜丝呈半透明且根根分明；葱圈均匀翠绿",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "A pinch of ginger shreds falls apart rather than clumping"
      },
      "tip": "Chill the ginger first — firm cold ginger is much easier to cut finely."
    },
    {
      "text": "In a small bowl, combine hot water and sugar. Stir for 30 seconds until the sugar is completely dissolved, then let it cool for 1 minute.",
      "textZh": "小碗中加入热开水和白糖，搅拌30秒至糖完全溶化，静置1分钟降温。",
      "zhHint": "热水化糖后稍降温",
      "stateNote": {
        "visual": "Liquid is completely clear with no grains settled at the bottom",
        "visualZh": "液体完全澄清，碗底无糖粒沉淀",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Spoon meets no grit on the bowl base"
      }
    },
    {
      "text": "Add light soy sauce and rice vinegar to the sweetened water and stir to combine.",
      "textZh": "在糖水中加入生抽和米醋，搅匀。",
      "zhHint": "加生抽米醋调匀",
      "stateNote": {
        "visual": "Sauce is a clear reddish-brown with no separation",
        "visualZh": "酱汁呈清亮红褐色，无分层",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "Aroma is malty-sour rather than sharply acidic"
      }
    },
    {
      "text": "Stir in sesame oil. It should form a very fine, evenly dispersed sheen rather than floating in blobs.",
      "textZh": "加入香油搅匀，应形成细腻均匀的光泽，而不是浮成一团团油花。",
      "zhHint": "香油要搅成细密光泽",
      "stateNote": {
        "visual": "Tiny even oil droplets suspended throughout; surface shows a light sheen",
        "visualZh": "细密均匀的油滴悬浮其中，表面泛轻亮光泽",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "No large oil circles remain on the surface after stirring"
      }
    },
    {
      "text": "Fold in the ginger shreds, scallion rings, chilli and coriander. Rest 3 minutes so the aromatics release into the sauce.",
      "textZh": "拌入姜丝、葱圈、辣椒和香菜，静置3分钟让香气渗入酱汁。",
      "zhHint": "拌入姜葱椒香菜静置3分钟",
      "stateNote": {
        "visual": "Herbs are evenly distributed and slightly softened; sauce smells of fresh ginger",
        "visualZh": "香料分布均匀、略微软化，酱汁散出鲜姜香气",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Dipping a spoon brings out a warm ginger aroma before the soy"
      },
      "tip": "Serve with steamed fish, blanched shrimp or poached chicken."
    }
  ],
  "tips": [
    "Cut the ginger as finely as you can — that is what defines this sauce.",
    "Dissolve the sugar in hot water first or it will stay gritty.",
    "Add a spoonful of the shrimp poaching liquid for the restaurant-style version."
  ],
  "tipsZh": [
    "姜要切到最细，这是这碟蘸料的灵魂。",
    "糖先用热水化开，否则会有颗粒感。",
    "加一勺白灼虾的汤汁，就是餐馆版风味。"
  ],
  "relatedSlugs": [
    "seafood-geda-soup",
    "sesame-sauce-dipping-sauce",
    "oil-dipping-bowl"
  ],
  "image": "/images/recipes/seafood-geda-soup.webp"
};
