import type { Recipe } from "@/lib/types";

/** Braised Pork Chop (Shanghai Dapai) (红烧大排) — Day batch */
export const braised_pork_chop_shanghai: Recipe = {
  "id": "braised-pork-chop-shanghai",
  "slug": "braised-pork-chop-shanghai",
  "titleEn": "Braised Pork Chop (Shanghai Dapai)",
  "titleZh": "红烧大排",
  "pinyin": "hóng shāo dà pái",
  "cuisine": "上海菜",
  "cuisineEn": "Shanghai home cooking",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 3,
  "version": "family",
  "versionNote": "Canteen 大排 is pounded paper-thin, coated in breadcrumbs and deep-fried before braising. The home version skips the breadcrumbs and shallow-fries, which keeps more pork flavour and far less oil.",
  "versionNoteZh": "食堂大排要捶成薄片、裹面包糠炸过再烧。家常版省掉面包糠、改成半煎，肉味更足油也少得多。",
  "tags": [
    "shanghai",
    "pork",
    "braise",
    "beginner",
    "meal-prep"
  ],
  "dietary": [
    "none"
  ],
  "story": "大排 is the chop that fed a generation of Shanghai schoolchildren — a single soy-dark slab laid over rice, with the braising liquor spooned on top until the rice turns brown. The cut is bone-in pork loin, and the trick is not tenderness but moisture: pound it, coat it, and never let it boil hard.",
  "storyZh": "大排是养大一代上海小囡的一块肉——酱红色的一大片盖在米饭上，浇一勺卤汁把饭染成褐色。用的是带骨猪里脊，诀窍不在嫩而在润：先捶、再上浆，煮的时候火不能太冲。",
  "ingredients": [
    {
      "id": "pork-chop",
      "nameEn": "bone-in pork loin chops, 2 cm thick",
      "nameZh": "带骨猪大排（2 cm 厚）",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-loin",
      "note": "Ask the butcher for centre-cut bone-in loin chops. Boneless works but dries out faster.",
      "noteZh": "让肉铺切带骨里脊中段。去骨也能做，但更容易柴。"
    },
    {
      "id": "egg",
      "nameEn": "egg, beaten",
      "nameZh": "鸡蛋（打散）",
      "amountMetric": "1",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "cornstarch",
      "nameEn": "cornstarch",
      "nameZh": "生粉",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "scallion",
      "nameEn": "scallions",
      "nameZh": "葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "15 g",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "light-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "dark-soy",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "rock-sugar",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "20 g",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "star-anise",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 pod",
      "amountUS": "1 pod",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    }
  ],
  "steps": [
    {
      "text": "Pound the chops on both sides with the back of a knife or a meat mallet until they spread to about 1.5 cm, then slash the fatty edge three times so they will not curl.",
      "textZh": "用刀背或肉锤把大排两面捶开到约 1.5 cm，再把肥肉边斜切三刀防止卷边。",
      "stateNote": {
        "visual": "The chop spreads noticeably and the surface shows a fine crosshatch",
        "visualZh": "肉排明显摊开，表面出现细密的交叉纹",
        "signal": "The meat feels slack and springs back slowly when pressed",
        "signalZh": "按下去发松，回弹很慢",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "medium"
      },
      "tip": "Slashing the fat edge is the whole secret to a chop that stays flat in the pan.",
      "tipZh": "肥肉边切三刀，是让大排下锅不卷的全部秘诀。"
    },
    {
      "text": "Coat the chops in beaten egg, then dredge lightly in cornstarch and shake off the excess.",
      "textZh": "大排先裹一层蛋液，再薄薄拍一层生粉，抖掉多余的粉。",
      "stateNote": {
        "visual": "A thin, even matte film with no wet patches or flour clumps",
        "visualZh": "薄而均匀的哑光浆，没有湿斑也没有粉疙瘩",
        "signal": "The coating no longer looks glossy or sticky to the touch",
        "signalZh": "表面不再发亮发黏",
        "timeRef": "3 minutes",
        "timeRefZh": "约 3 分钟",
        "heat": "medium"
      },
      "tip": "This is velveting for chops — it locks in moisture during the long braise.",
      "tipZh": "这就是给大排上浆，久烧也不干柴。"
    },
    {
      "text": "Shallow-fry the chops in a little oil over medium-high until both sides are golden, then set them aside.",
      "textZh": "锅中放少量油，中大火把大排两面煎至金黄后盛出。",
      "stateNote": {
        "visual": "An even golden-brown crust forms with darker edges",
        "visualZh": "表面结成均匀的金黄壳，边缘略深",
        "signal": "The chop releases cleanly from the pan when nudged",
        "signalZh": "轻推能整片脱离锅底",
        "timeRef": "2 minutes per side",
        "timeRefZh": "每面 2 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "In the same pan, fry scallion, ginger and star anise for 30 seconds, add both soy sauces, wine, rock sugar and 300 ml hot water, then return the chops.",
      "textZh": "原锅下葱姜八角爆香 30 秒，加生抽老抽、黄酒、冰糖和 300 ml 热水，放大排回锅。",
      "stateNote": {
        "visual": "The liquid is reddish-brown and barely trembling",
        "visualZh": "汤汁呈红褐色，只是微微颤动",
        "signal": "Only occasional bubbles rise — never a rolling boil",
        "signalZh": "只是偶尔冒小泡，绝不能大滚",
        "timeRef": "about 25 minutes",
        "timeRefZh": "约 25 分钟",
        "heat": "low"
      },
      "tip": "A hard boil seizes the muscle fibres. Keep it at a lazy simmer.",
      "tipZh": "大火滚会让肉纤维紧缩，一定保持微火慢煨。"
    },
    {
      "text": "Turn the chops once halfway through, then raise the heat at the end to reduce the sauce until it coats the meat, and spoon it over before serving.",
      "textZh": "中途翻面一次，最后转大火把汤汁收到挂肉，出锅前把汁浇在大排上。",
      "stateNote": {
        "visual": "The sauce turns glossy and thickens enough to ribbon off a spoon",
        "visualZh": "汤汁发亮变稠，能从勺上拉成一条线",
        "signal": "Trails left by a spatula on the pan bottom close slowly",
        "signalZh": "锅铲在锅底划出的痕迹缓慢合拢",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "medium-high"
      }
    }
  ],
  "tips": [
    "Spoon the braising liquor over plain rice — that is the actual point of the dish.",
    "Make a double batch; the chops taste even better reheated the next day.",
    "No rock sugar? Brown sugar works, but use a little less."
  ],
  "tipsZh": [
    "卤汁浇白米饭上——这才是这道菜的正经吃法。",
    "一次多做几块，第二天回锅更入味。",
    "没有冰糖可用红糖，量稍微减一点。"
  ],
  "relatedSlugs": [
    "hongshao-pork",
    "sweet-sour-ribs",
    "honey-rib-roast"
  ],
  "image": "/images/recipes/home-style-pork.webp"
};
