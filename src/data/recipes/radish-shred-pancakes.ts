import type { Recipe } from "@/lib/types";

/** Shredded Radish Pancakes (Luo Bo Si Bing) (萝卜丝饼) — Day batch */
export const radish_shred_pancakes: Recipe = {
  "id": "luo-bo-si-bing",
  "slug": "radish-shred-pancakes",
  "titleEn": "Shredded Radish Pancakes (Luo Bo Si Bing)",
  "titleZh": "萝卜丝饼",
  "pinyin": "luó bo sī bǐng",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version pan-fries small patties in a skillet; the classic Jiangnan street version is deep-fried in a ladle mould, producing a rounder, hollower shell.",
  "versionNoteZh": "家常版平底锅煎小饼；江南街头版用铁勺模具入油炸，外形更圆、内里更空。",
  "tags": [
    "30-min",
    "vegetarian",
    "winter"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Winter daikon is sweet and juicy, and in the Jiangnan region it gets shredded, salted and fried into these crisp little cakes sold from street carts with a paper sleeve. The radish loses its raw bite and turns almost translucent and honeyed inside the crunchy shell.",
  "storyZh": "冬萝卜清甜多汁，江南一带把它切丝腌过再煎成小饼，街边推车论个卖、套个纸筒拿着吃。萝卜去尽生辣，在脆壳里变得半透明、带蜜甜。",
  "ingredients": [
    {
      "id": "lbs-1",
      "nameEn": "daikon radish",
      "nameZh": "白萝卜",
      "pinyin": "bái luó bo",
      "amountMetric": "500 g",
      "amountUS": "1 small (about 1 lb)",
      "category": "produce",
      "pantry": "local",
      "note": "Winter daikon is sweeter and less fibrous than summer.",
      "noteZh": "冬萝卜比夏萝卜更甜、纤维更少。"
    },
    {
      "id": "lbs-2",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "7 g",
      "amountUS": "1 1/4 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "5 g for draining, 2 g for seasoning.",
      "noteZh": "5 克杀水，2 克调味。"
    },
    {
      "id": "lbs-3",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "70 g",
      "amountUS": "1/2 cup + 1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "lbs-4",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Cornstarch is what makes the shell glassy-crisp rather than bready.",
      "noteZh": "淀粉决定外壳是玻璃脆而非面饼感。",
      "termKey": "cornstarch"
    },
    {
      "id": "lbs-5",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3–4 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "lbs-6",
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
      "id": "lbs-7",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "White pepper echoes daikon's own gentle heat.",
      "noteZh": "白胡椒呼应萝卜自身的微辛。",
      "termKey": "white-pepper"
    },
    {
      "id": "lbs-8",
      "nameEn": "neutral cooking oil",
      "nameZh": "中性食用油",
      "pinyin": "zhōng xìng shí yòng yóu",
      "amountMetric": "40 ml",
      "amountUS": "2 tbsp + 2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Peel daikon and shred on the coarse side of a grater. Toss with 5 g salt; rest 10 minutes until it releases liquid and turns flexible.",
      "textZh": "白萝卜去皮刨粗丝，拌 5 克盐静置 10 分钟，至出水、丝条变柔软。",
      "zhHint": "粗丝盐腌，去生辣",
      "stateNote": {
        "visual": "Shreds slump and look glossy; roughly 120 ml liquid collects.",
        "visualZh": "丝条塌软发亮，析出水分约 120 毫升。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "A strand bends fully without snapping.",
        "signalZh": "单根萝卜丝可对折不断。"
      }
    },
    {
      "text": "Squeeze the shreds firmly in a towel until barely damp. Keep about 2 tbsp of the drained liquid to loosen the batter if needed.",
      "textZh": "用布用力挤至几乎不湿；留约 2 汤匙挤出的萝卜水备用，需要时调糊。",
      "zhHint": "挤到微湿，留点萝卜水",
      "stateNote": {
        "visual": "Shreds hold their shape in a compact ball, no dripping.",
        "visualZh": "丝条能攥成紧实球状，不滴水。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Towel comes away only slightly damp after the final wring.",
        "signalZh": "最后一次拧挤，毛巾仅微潮。"
      }
    },
    {
      "text": "Mix shreds with flour, cornstarch, scallion, sesame oil, white pepper and remaining salt. Add reserved radish water a teaspoon at a time until the shreds are coated but not soupy.",
      "textZh": "萝卜丝加面粉、淀粉、葱花、香油、白胡椒粉与余盐拌匀；每次一小茶匙加入预留萝卜水，至丝条挂糊但不稀。",
      "zhHint": "少量多次加水，能挂糊即可",
      "stateNote": {
        "visual": "Each strand is filmed with batter; no loose liquid at the bowl base.",
        "visualZh": "每根丝条都裹上薄糊，碗底无游离水。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "A handful squeezed in the fist holds together and slowly relaxes.",
        "signalZh": "握拳攥紧可成团，松手缓慢散开。"
      }
    },
    {
      "text": "Heat 10 ml oil in a skillet over medium. Scoop 1/4 of the mixture per cake, press into a 8 cm round about 1.5 cm thick, and fry 3 minutes.",
      "textZh": "平底锅中火放 10 毫升油，每次取四分之一糊料压成直径 8 厘米、厚 1.5 厘米的圆饼，煎 3 分钟。",
      "zhHint": "压成 1.5 厘米厚，别太薄",
      "stateNote": {
        "visual": "Underside is even golden; the top edge begins to look glassy.",
        "visualZh": "底面均匀金黄，上缘开始透出玻璃感。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Cake releases cleanly when nudged with a thin spatula.",
        "signalZh": "薄铲轻推即可整片脱离。"
      }
    },
    {
      "text": "Flip and fry 3 minutes more, pressing gently, until both sides are deep gold and the edges look lacy and crisp. Drain briefly and serve hot.",
      "textZh": "翻面再煎 3 分钟，轻压，至两面深金、边缘呈网状酥脆；稍沥油趁热食用。",
      "zhHint": "翻面轻压，两面都要脆",
      "stateNote": {
        "visual": "Shell is amber with crisp lacy frills; interior looks translucent and steamy.",
        "visualZh": "外壳琥珀色带网状脆边，内部半透明冒热气。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Tapping the cake gives a hollow, brittle sound.",
        "signalZh": "轻敲饼身发出中空脆响。"
      }
    }
  ],
  "tips": [
    "Do not blanch the radish — salt-draining keeps more flavour than boiling does.",
    "Cornstarch is the crispness insurance; skipping it gives a soft, doughy cake.",
    "A pinch of dried shrimp or crumbled cooked bacon turns this into a savoury non-vegetarian version."
  ],
  "tipsZh": [
    "萝卜不要焯水——盐腌比水煮更能留住风味。",
    "淀粉是脆度保险；省掉就变软塌面饼。",
    "加一小把虾米或熟培根碎，即成荤香版本。"
  ],
  "relatedSlugs": [
    "cornmeal-flatcakes-northern-style",
    "potato-pancakes",
    "shredded-radish-baozi"
  ],
  "image": "/images/recipes/cornmeal-flatcakes-northern-style.webp"
};
