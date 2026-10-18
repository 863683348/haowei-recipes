import type { Recipe } from "@/lib/types";

/** Zucchini Shred Pancakes (Xi Hu Lu Si Bing) (西葫芦丝饼) — Day batch */
export const zucchini_shred_pancakes: Recipe = {
  "id": "xi-hu-lu-si-bing",
  "slug": "zucchini-shred-pancakes",
  "titleEn": "Zucchini Shred Pancakes (Xi Hu Lu Si Bing)",
  "titleZh": "西葫芦丝饼",
  "pinyin": "xī hú lú sī bǐng",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Hebei",
  "regionZh": "河北",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses a shallow pan-fry with about 10 ml oil per pancake; street vendors deep-fry in a well of hot oil for a puffier, greasier result.",
  "versionNoteZh": "家常版每张饼约 10 毫升油浅煎；摊贩版在热油里半炸，更蓬松但更油。",
  "tags": [
    "30-min",
    "vegetarian",
    "kid-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "When summer zucchini overruns the garden, northern Chinese kitchens turn it into these shredded fritters. Salt draws out the water, the shreds collapse into a sticky mass, and a handful of flour plus an egg is all it takes to bind them into a crisp-edged cake.",
  "storyZh": "夏天西葫芦疯长，北方厨房就把它擦成丝煎饼。盐杀出水分、瓜丝塌成黏团，只需一把面粉加个蛋就能黏合，煎出边缘焦脆的饼。",
  "ingredients": [
    {
      "id": "xhl-1",
      "nameEn": "zucchini",
      "nameZh": "西葫芦",
      "pinyin": "xī hú lú",
      "amountMetric": "400 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "note": "Young, firm zucchini with thin skin; no need to peel.",
      "noteZh": "选嫩而结实的西葫芦，皮薄无需削。",
      "termKey": "zucchini"
    },
    {
      "id": "xhl-2",
      "nameEn": "carrot",
      "nameZh": "胡萝卜",
      "pinyin": "hú luó bo",
      "amountMetric": "60 g",
      "amountUS": "1 small",
      "category": "produce",
      "pantry": "local",
      "note": "Mainly for colour contrast; a little sweetness too.",
      "noteZh": "主要为配色，也添一点清甜。",
      "termKey": "carrot"
    },
    {
      "id": "xhl-3",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "6 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "4 g for drawing water, 2 g for seasoning.",
      "noteZh": "4 克杀水，2 克调味。"
    },
    {
      "id": "xhl-4",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "xhl-5",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "80 g",
      "amountUS": "2/3 cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Just enough to bind. More flour makes a bready, dull cake.",
      "noteZh": "以能黏合为度；粉多则发面饼口感，香味被压住。"
    },
    {
      "id": "xhl-6",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "xhl-7",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "xhl-8",
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
      "text": "Coarsely shred zucchini and carrot on a box grater. Toss with 4 g salt and let stand 8 minutes.",
      "textZh": "西葫芦与胡萝卜用擦丝器刨粗丝，拌 4 克盐静置 8 分钟。",
      "zhHint": "刨粗丝，盐杀 8 分钟",
      "stateNote": {
        "visual": "A pool of pale green liquid forms at the bottom of the bowl; shreds wilt.",
        "visualZh": "碗底积起淡绿水液，瓜丝变软塌。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Squeezing a handful releases a steady trickle of water.",
        "signalZh": "手攥一把即有水流持续渗出。"
      }
    },
    {
      "text": "Transfer to cheesecloth or a clean towel and squeeze hard until the shreds feel almost dry and spring back slowly.",
      "textZh": "倒入纱布或干净毛巾，用力挤干至几乎无水、松手后缓慢回弹。",
      "zhHint": "务必挤干，否则不成形",
      "stateNote": {
        "visual": "Shreds look compacted and matte; expelled liquid totals roughly 150 ml.",
        "visualZh": "瓜丝紧实哑光，挤出水分约 150 毫升。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No more than occasional drips fall when you wring repeatedly.",
        "signalZh": "反复拧挤仅偶有滴落。"
      }
    },
    {
      "text": "Return shreds to the bowl. Add eggs, flour, scallion, white pepper and the remaining 2 g salt. Stir in one direction 30 seconds into a thick, tacky batter.",
      "textZh": "瓜丝回盆，加鸡蛋、面粉、葱花、白胡椒粉与余下 2 克盐；朝一个方向搅 30 秒成浓稠发黏的糊。",
      "zhHint": "单向搅匀，稠到能挂住",
      "stateNote": {
        "visual": "Batter clings to the chopsticks in clumps rather than running off.",
        "visualZh": "面糊成团挂在筷子上而不滑落。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Lifting chopsticks lifts the whole mass slightly.",
        "signalZh": "提起筷子能带起整团面糊。"
      }
    },
    {
      "text": "Heat 10 ml oil in a nonstick skillet over medium. Scoop one-third of the batter in, flatten to a 1 cm thick disc with a spatula, and cook undisturbed 3 minutes.",
      "textZh": "不粘锅中火放 10 毫升油，舀入三分之一面糊，用锅铲压成 1 厘米厚圆饼，静置煎 3 分钟。",
      "zhHint": "压平 1 厘米，静置定型",
      "stateNote": {
        "visual": "Edge sets and turns translucent-gold; the surface still looks moist.",
        "visualZh": "边缘定型转半透明金色，表面仍带湿光。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Pancake slides as one piece when you shake the pan.",
        "signalZh": "晃动锅体时整饼可滑动。"
      }
    },
    {
      "text": "Slide the pancake onto a plate, invert it back into the pan, and cook the second side 3 minutes until deep gold. Repeat with remaining batter.",
      "textZh": "把饼滑入盘中，翻扣回锅，第二面再煎 3 分钟至深金；余糊照此煎完。",
      "zhHint": "借盘翻面，防散防溅",
      "stateNote": {
        "visual": "Both sides are even amber with crisp lacy edges; the centre yields slightly.",
        "visualZh": "两面均匀琥珀色、边缘酥脆，中心轻按略软。",
        "timeRef": "3 minutes per side",
        "timeRefZh": "每面 3 分钟",
        "heat": "medium",
        "signal": "A spatula pressed on the edge gives a light crackle.",
        "signalZh": "锅铲压边缘可听到轻微脆响。"
      }
    }
  ],
  "tips": [
    "Squeezing out water is the single most important step — a wet batter steams instead of crisping.",
    "Grate on the coarse side; fine shreds turn mushy and lose their bite.",
    "Serve with a dip of soy sauce, black vinegar and a few drops of chili oil."
  ],
  "tipsZh": [
    "挤干水分是最关键的一步——带水的糊只会蒸熟，不会脆。",
    "用粗孔擦丝；细丝会烂、失去口感。",
    "蘸碟：生抽 + 香醋 + 几滴辣椒油。"
  ],
  "relatedSlugs": [
    "zucchini-scrambled-eggs",
    "potato-pancakes",
    "scallion-pancakes"
  ],
  "image": "/images/recipes/scallion-pancakes.webp"
};
