import type { Recipe } from "@/lib/types";

/** Pumpkin Rice Congee (南瓜粥) — Day batch */
export const pumpkin_congee: Recipe = {
  "id": "pumpkin-congee",
  "slug": "pumpkin-congee",
  "titleEn": "Pumpkin Rice Congee",
  "titleZh": "南瓜粥",
  "pinyin": "nán guā zhōu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-Style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version lets the pumpkin break down into the rice water for natural sweetness; restaurant versions add coconut milk or cream and pass it through a sieve for a velvety dessert-style bowl.",
  "versionNoteZh": "家常版让南瓜化进米汤自然回甜；餐厅版加椰奶或淡奶油并过筛，做成甜品般丝滑。",
  "tags": [
    "45-min",
    "congee",
    "vegetarian",
    "kid-friendly",
    "autumn"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "Autumn in northern China means squash piled outside every greengrocer, and half of it ends up in congee. My Beijing aunt swore the trick was to use a starchy, dense pumpkin rather than a watery one — 'the watery ones make soup, not porridge.'",
  "storyZh": "华北的秋天，每家菜店门口都堆着南瓜，其中一半最后都进了粥锅。北京的姑妈坚信要用粉糯的南瓜而不是水分多的——『水多的那只能做汤，做不成粥』。",
  "ingredients": [
    {
      "id": "ng-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "90 g",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "ng-02",
      "nameEn": "glutinous (sweet) rice",
      "nameZh": "糯米",
      "pinyin": "nuò mǐ",
      "amountMetric": "30 g",
      "amountUS": "2½ tbsp",
      "category": "staple",
      "pantry": "asian",
      "note": "A little sticky rice makes the congee glossier and creamier",
      "noteZh": "少量糯米让粥更亮更绵"
    },
    {
      "id": "ng-03",
      "nameEn": "dense orange pumpkin or kabocha, peeled and cubed",
      "nameZh": "粉糯南瓜／日本栗南瓜，去皮切块",
      "pinyin": "nán guā",
      "amountMetric": "350 g",
      "amountUS": "3 cups cubed",
      "category": "produce",
      "pantry": "local",
      "note": "Choose kabocha or sugar pumpkin — dense flesh, low water. Butternut works too",
      "noteZh": "选栗南瓜或糖南瓜，肉质粉、水分少；奶油南瓜也可以"
    },
    {
      "id": "ng-04",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "1.1 L",
      "amountUS": "4½ cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "ng-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar",
      "note": "Optional — a dense pumpkin is often sweet enough on its own",
      "noteZh": "可选——粉糯南瓜本身往往已够甜"
    },
    {
      "id": "ng-06",
      "nameEn": "fresh ginger, 2 thin slices",
      "nameZh": "鲜姜，2薄片",
      "pinyin": "jiāng piàn",
      "amountMetric": "6 g",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger",
      "note": "Balances the sweetness and keeps the bowl from tasting flat",
      "noteZh": "平衡甜味，避免整碗发闷"
    }
  ],
  "steps": [
    {
      "text": "Rinse both rices together until the water runs clear, then soak in the measured water for 20 minutes.",
      "textZh": "两种米一起淘至水清，加定量水浸泡20分钟。",
      "zhHint": "两米同泡20分",
      "stateNote": {
        "visual": "Rice looks chalky and opaque; the water is faintly milky",
        "visualZh": "米呈粉白不透明，水微乳白",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low",
        "signal": "Grains crush easily between your fingers",
        "signalZh": "手指轻碾米粒即碎"
      }
    },
    {
      "text": "Bring the rice and water to a boil with the ginger slices, then lower to medium-low and simmer 15 minutes, stirring occasionally.",
      "textZh": "米与水加姜片大火烧沸，转中小火煮15分钟，不时搅动。",
      "zhHint": "姜片同煮",
      "stateNote": {
        "visual": "Grains begin to break open and the water turns starchy and cloudy",
        "visualZh": "米粒开始裂开，水变浆白浑浊",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "Spoon dragged across the pot bottom meets slight resistance",
        "signalZh": "勺子刮过锅底略有阻力感"
      }
    },
    {
      "text": "Add the pumpkin cubes and simmer 20 minutes, stirring gently, until the pumpkin edges melt into the porridge.",
      "textZh": "下南瓜块，小火煮20分钟并轻搅，至南瓜边缘化入粥中。",
      "zhHint": "南瓜煮到化边",
      "stateNote": {
        "visual": "Porridge turns golden-orange; pumpkin corners round off and some pieces dissolve",
        "visualZh": "粥变金黄橙色，南瓜棱角变圆，部分化开",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "medium-low",
        "signal": "A cube mashes with zero pressure against the pot wall",
        "signalZh": "南瓜块在锅壁一压即成泥，毫无阻力"
      }
    },
    {
      "text": "Mash about a third of the pumpkin against the side of the pot and stir it back in for a thicker, more even texture.",
      "textZh": "取约三分之一南瓜在锅壁压成泥，拌回粥中使质地更稠更匀。",
      "zhHint": "压泥增稠",
      "stateNote": {
        "visual": "Colour deepens to a uniform sunset orange with no separate white streaks",
        "visualZh": "颜色转为均匀的落日橙，无白色条纹",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Spoon stands upright in the centre for a second before tipping",
        "signalZh": "勺子能在中央直立一秒再倒下"
      }
    },
    {
      "text": "Add rock sugar if using and stir 2 minutes until dissolved. Fish out the ginger slices.",
      "textZh": "如需加冰糖，加入后搅2分钟至溶化，拣出姜片。",
      "zhHint": "冰糖后加",
      "stateNote": {
        "visual": "No sugar crystals remain when you rub a drop between your fingers",
        "visualZh": "取一滴在指尖揉搓无糖粒感",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Taste is rounded and sweet with a faint ginger warmth, not syrupy",
        "signalZh": "口感圆润微甜带姜暖，不发腻"
      }
    },
    {
      "text": "Rest off the heat for 3 minutes — the congee thickens as it settles. Serve warm or at room temperature.",
      "textZh": "关火静置3分钟——粥会随静置继续变稠。温热或常温食用皆可。",
      "zhHint": "静置3分再吃",
      "stateNote": {
        "visual": "Surface forms a thin golden skin and small craters where bubbles popped",
        "visualZh": "表面结一层薄金皮，气泡破裂处留下小坑",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Spoon leaves a clear trail that fills in slowly",
        "signalZh": "勺痕清晰且缓慢回填"
      }
    }
  ],
  "tips": [
    "Use kabocha or sugar pumpkin — watery carving pumpkins give a thin, bland bowl.",
    "Skip the sugar entirely and serve with a drizzle of honey at the table.",
    "Leftovers set almost solid in the fridge; reheat with a splash of water or oat milk."
  ],
  "tipsZh": [
    "用栗南瓜或糖南瓜，水分多的雕刻南瓜煮出来又稀又淡。",
    "可以完全不加糖，上桌时淋一点蜂蜜。",
    "冷藏后几乎会凝固，回热时兑一点水或燕麦奶。"
  ],
  "relatedSlugs": [
    "eight-treasure-congee",
    "red-bean-congee"
  ],
  "image": "/images/recipes/jidi-congee.webp"
};
