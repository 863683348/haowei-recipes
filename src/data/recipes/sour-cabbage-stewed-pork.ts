import type { Recipe } from "@/lib/types";

/** Sour Cabbage-Stewed Pork (酸菜白肉) — Seed batch */
export const sour_cabbage_stewed_pork: Recipe = {
  "id": "suan-cai-bai-rou",
  "slug": "sour-cabbage-stewed-pork",
  "titleEn": "Sour Cabbage-Stewed Pork",
  "titleZh": "酸菜白肉",
  "pinyin": "suān cài bái ròu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Heilongjiang",
  "regionZh": "黑龙江",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses thick-cut pork belly, long slow blanching to remove gaminess, and no added sugar — sourness comes solely from fermented cabbage and time.",
  "versionNoteZh": "家常版用厚切五花肉，长时焯水去腻，不加糖，酸味全赖酸菜发酵与慢炖。",
  "tags": [
    "comfort",
    "winter",
    "hearty"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every New Year in Qiqihar, my uncle would dig aged suan cai from his buried crock — its sour tang cut through the Siberian cold. He taught me to taste the broth three times: before, mid-, and after stewing — ‘The acid must breathe, not shout.’",
  "storyZh": "齐齐哈尔过年，舅舅总从地窖陶瓮里挖出陈年酸菜——那股子酸香，能劈开西伯利亚寒气。他教我尝三回汤：炖前、炖中、炖后，‘酸要会呼吸，不能嚷嚷。’",
  "ingredients": [
    {
      "id": "sc-01",
      "nameEn": "pork belly, skin-on",
      "nameZh": "带皮五花肉",
      "pinyin": "dài pí wǔ huā ròu",
      "amountMetric": "500 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Choose even layers of fat and lean; avoid pre-sliced thin cuts",
      "noteZh": "选肥瘦均匀、层次分明者；勿用超市预切薄片"
    },
    {
      "id": "sc-02",
      "nameEn": "sour cabbage (fermented Chinese cabbage)",
      "nameZh": "酸菜",
      "pinyin": "suān cài",
      "amountMetric": "400 g",
      "amountUS": "4 cups (rinsed, squeezed dry, chopped)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute Korean kimchi (no chili) or German sauerkraut (rinse well to reduce salt)",
      "noteZh": "可用无辣韩式泡菜或德式酸卷心菜（充分冲洗减盐）替代"
    },
    {
      "id": "sc-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp (sliced, skin on)",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sc-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sc-05",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sc-06",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "1200 ml",
      "amountUS": "5 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Place pork belly in a large pot. Cover with cold water. Add ginger slices and 10 ml Shaoxing wine. Bring to boil, then reduce to low and simmer uncovered for 15 minutes. Skim foam thoroughly.",
      "textZh": "五花肉冷水下锅，加姜片、10毫升绍酒，大火烧开后转小火煮15分钟，全程撇净浮沫。",
      "zhHint": "去腥关键在冷下锅+勤撇沫"
    },
    {
      "text": "Remove pork, rinse under cool water, and pat dry. Cut into 4 mm thick slices — keep skin attached and aligned.",
      "textZh": "捞出肉块，凉水冲洗，擦干。连皮切4毫米厚片，皮肉不分离。",
      "zhHint": "皮肉一体切，炖后不脱层"
    },
    {
      "text": "Rinse sour cabbage under cold water 3 times. Squeeze firmly to remove excess water, then chop into 2 cm pieces.",
      "textZh": "酸菜冷水淘洗3遍，用力攥干，切2厘米段。",
      "zhHint": "攥干防汤过咸，利入味"
    },
    {
      "text": "In clean pot, layer half the sour cabbage, then pork slices skin-side up, then remaining cabbage. Pour in remaining Shaoxing wine, white pepper, and 1200 ml water — liquid should cover by 2 cm.",
      "textZh": "净锅铺半量酸菜，上摆五花肉片（皮朝上），再覆余下酸菜。淋余下绍酒、白胡椒，加水没过食材2厘米。",
      "zhHint": "酸菜垫底防糊，肉皮朝上保弹牙"
    },
    {
      "text": "Bring to gentle boil, then cover and simmer on low heat for 40 minutes. Uncover and cook 5 more minutes — broth should be clear, slightly tangy, and lightly oily.",
      "textZh": "烧沸后转最小火盖盖焖40分钟，开盖再煮5分钟——汤色清亮微酸，浮一层薄油。",
      "zhHint": "最后开盖收浮油，汤更醇正",
      "stateNote": {
        "visual": "Broth is translucent with fine oil droplets; meat slices curl slightly at edges",
        "visualZh": "汤清透、浮细油星；肉片边缘微卷",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "low",
        "signal": "Acidic aroma deepens but doesn’t sharpness",
        "signalZh": "酸香转醇厚，不刺鼻"
      }
    }
  ],
  "tips": [
    "Never skip the initial blanching — it removes blood impurities and gamey odor.",
    "Serve with steamed millet rice or plain steamed buns to balance acidity.",
    "Leftovers taste better the next day as flavors fully integrate."
  ],
  "tipsZh": [
    "初焯水不可省，去血沫、除膻气是关键。",
    "配小米饭或白馒头同食，解酸助消化。",
    "隔夜再热，风味更融合醇厚。"
  ],
  "relatedSlugs": [
    "potato-stewed-green-beans",
    "napa-cabbage-stewed-tofu"
  ],
  "image": "/images/recipes/sour-cabbage-stewed-pork.webp"
};
