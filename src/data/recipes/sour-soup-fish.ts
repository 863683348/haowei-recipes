import type { Recipe } from "@/lib/types";

/** Guizhou Sour Soup Fish (Suan Tang Yu) (酸汤鱼) — Day batch */
export const sour_soup_fish: Recipe = {
  "id": "suan-tang-yu",
  "slug": "sour-soup-fish",
  "titleEn": "Guizhou Sour Soup Fish (Suan Tang Yu)",
  "titleZh": "酸汤鱼",
  "pinyin": "suān tāng yú",
  "cuisine": "黔菜",
  "cuisineEn": "Guizhou",
  "region": "Guizhou",
  "regionZh": "贵州",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 4,
  "version": "family",
  "versionNote": "The family version builds its sourness from fresh tomatoes and rice vinegar, which you can buy anywhere. Authentic Guizhou versions ferment rice-washing water or tomatoes for days with a mother culture, and perfume the pot with the citrusy Sichuan pepper relative known as wood ginger oil.",
  "versionNoteZh": "家庭版用新鲜番茄加米醋调酸，随处可买。贵州正宗做法需用淘米水或番茄加老酸汤母水发酵数日，并以木姜子油提香。",
  "tags": [
    "one-pot",
    "seafood",
    "sour",
    "comfort-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "A Miao family in Kaili fed me this on a rainy night, ladling the red broth straight from a clay pot. The sourness was so clean and fruity that I asked three times what was in it — tomatoes, they said, and time. This home version borrows the brightness of rice vinegar to stand in for the time.",
  "storyZh": "凯里一户苗族人家在雨夜请我吃这道菜，直接从陶锅里舀红汤。那股酸味清爽又带果香，我问了三遍里面到底有什么——他们说，番茄，还有时间。这份家庭版用米醋的明亮酸味来替代那份时间。",
  "ingredients": [
    {
      "id": "sty-01",
      "nameEn": "white fish fillets",
      "nameZh": "白肉鱼片（草鱼/罗非鱼）",
      "amountMetric": "800 g",
      "amountUS": "1 3/4 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "white-fish",
      "note": "Grass carp is traditional; tilapia, cod or bass all work. Cut into 1 cm thick slices."
    },
    {
      "id": "sty-02",
      "nameEn": "ripe tomatoes",
      "nameZh": "成熟番茄",
      "amountMetric": "400 g",
      "amountUS": "3 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato",
      "note": "Very ripe tomatoes give the broth its body and fruity sweetness."
    },
    {
      "id": "sty-03",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar",
      "note": "Add in two stages so you can tune the sourness at the end."
    },
    {
      "id": "sty-04",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "25 g",
      "amountUS": "1 knob",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sty-05",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "20 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sty-06",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "amountMetric": "30 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sty-07",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch",
      "note": "Used to velvet the fish so the slices stay whole in the simmering broth."
    },
    {
      "id": "sty-08",
      "nameEn": "bean sprouts",
      "nameZh": "绿豆芽",
      "amountMetric": "200 g",
      "amountUS": "2 cups",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sty-09",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "8 g",
      "amountUS": "1 1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sty-10",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Toss the fish slices with half the cornstarch, 1 tsp salt and 1 tbsp rice vinegar. Rest 10 minutes while you build the broth.",
      "textZh": "鱼片加一半玉米淀粉、1茶匙盐和1汤匙米醋抓匀，腌10分钟，同时准备汤底。",
      "zhHint": "鱼片上浆腌10分钟",
      "stateNote": {
        "visual": "Each slice wears a thin, slippery film; no liquid pools at the bottom of the bowl",
        "visualZh": "每片鱼裹上一层薄滑的浆，碗底无积水",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Fish feels slightly tacky and springs back when pressed"
      },
      "tip": "This is the velveting step — it keeps the fish from shredding in the soup."
    },
    {
      "text": "Dice two tomatoes and blend or mash the third. Heat a little oil in a pot over medium heat and cook the diced tomatoes with ginger and garlic for 5 minutes until they collapse into a jammy sauce.",
      "textZh": "两个番茄切丁，第三个打成泥。锅中放少许油中火，下番茄丁、姜蒜炒5分钟至软烂成酱状。",
      "zhHint": "番茄炒成酱状",
      "stateNote": {
        "visual": "Tomatoes break down completely into a deep red, slightly thickened paste with oil pooling at the edges",
        "visualZh": "番茄完全化开成深红色浓酱，边缘析出油分",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "Skins slip off easily and the mixture no longer looks chunky"
      }
    },
    {
      "text": "Add the mashed tomato and 900 ml water. Bring to a boil, then simmer uncovered for 12 minutes to build a clean, fruity sour base.",
      "textZh": "加入番茄泥和900毫升清水。大火煮沸后转小火不加盖炖12分钟，煮出清爽果酸的汤底。",
      "zhHint": "小火炖12分钟出酸汤",
      "stateNote": {
        "visual": "Broth turns a translucent orange-red with fine tomato pulp suspended throughout",
        "visualZh": "汤色转为透亮的橙红，悬浮细密番茄果肉",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low",
        "signal": "Surface barely trembles; steam smells sweet-tart rather than raw"
      }
    },
    {
      "text": "Stir in 2 tbsp rice vinegar and salt. Taste — the broth should be assertively sour, sharper than you think you want, because the fish will mellow it.",
      "textZh": "加入2汤匙米醋和盐调味。试味——汤要酸得明确，比你以为的更酸一些，因为鱼下锅后会中和酸度。",
      "zhHint": "酸度要比预期更冲",
      "stateNote": {
        "visual": "Broth brightens to a clear red and smells sharply fruity",
        "visualZh": "汤色变得更红亮，果酸香气锐利",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Your mouth waters immediately after the first sip"
      }
    },
    {
      "text": "Add bean sprouts and cook 2 minutes. Slide the fish slices in one at a time and simmer gently for 4 minutes without stirring.",
      "textZh": "下豆芽煮2分钟。鱼片逐片滑入锅中，小火浸煮4分钟，不要搅动。",
      "zhHint": "鱼片逐片下，别搅动",
      "stateNote": {
        "visual": "Fish turns from translucent pink to opaque white; slices hold their shape",
        "visualZh": "鱼片由半透明粉白转为不透明乳白，形态完整不散",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-low",
        "signal": "A thin skewer slides through the thickest slice with no resistance"
      },
      "tip": "Do not boil hard — a rolling boil will break the fish apart."
    },
    {
      "text": "Turn off the heat, scatter scallion and white pepper, and ladle into bowls. Serve with rice and a small dish of chilli-soy for dipping.",
      "textZh": "关火，撒葱花和白胡椒粉，盛入碗中。配米饭和一碟酱油辣椒蘸食。",
      "zhHint": "关火撒葱花白胡椒",
      "stateNote": {
        "visual": "Clear red broth, intact white fish slices, crisp pale sprouts and bright green scallion",
        "visualZh": "红汤清澈，鱼片完整洁白，豆芽脆嫩，葱花翠绿",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aroma is sour first, then sweet, with a gentle peppery finish"
      }
    }
  ],
  "tips": [
    "Use the ripest tomatoes you can find — they carry most of the flavour.",
    "Simmer the fish gently; never let the pot come to a rolling boil.",
    "Leftover broth makes an excellent base for noodles the next day."
  ],
  "tipsZh": [
    "番茄越熟越好，汤的大部分风味来自它。",
    "浸煮鱼片时火要小，绝不能大滚。",
    "剩下的酸汤第二天煮面，是极好的汤底。"
  ],
  "relatedSlugs": [
    "suan-cai-yu-hot-sour-fish-stew",
    "shui-zhu-fish",
    "sour-soup-beef"
  ],
  "image": "/images/recipes/suan-cai-yu-hot-sour-fish-stew.webp"
};
