import type { Recipe } from "@/lib/types";

/** Potherb Mustard and Pork Noodles (雪菜肉丝面) — Day batch */
export const snow_vegetable_pork_noodles: Recipe = {
  "id": "snow-vegetable-pork-noodles",
  "slug": "snow-vegetable-pork-noodles",
  "titleEn": "Potherb Mustard and Pork Noodles",
  "titleZh": "雪菜肉丝面",
  "pinyin": "xuě cài ròu sī miàn",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangnan",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version stirs the topping straight into the noodle broth; restaurant versions serve the snow vegetable and pork separately on a small saucer so you can control how much goes into each spoonful.",
  "versionNoteZh": "家常版把浇头直接拌进面汤；餐厅版把雪菜肉丝另装小碟上桌，由你自己决定每口配多少。",
  "tags": [
    "25-min",
    "noodles",
    "shanghai",
    "weeknight",
    "savoury"
  ],
  "dietary": [
    "none"
  ],
  "story": "Xue cai — salted potherb mustard — is the winter preserve of the Yangtze delta, and this noodle is what Shanghai eats when the jar is opened. Paired with winter bamboo shoots it is the classic 'xue cai chun sun' combination, and the whole bowl tastes green and clean in a way that heavier northern noodle soups do not.",
  "storyZh": "雪菜是长三角的冬季腌菜，开坛的那一季，上海人吃的就是这碗面。配上冬笋便是最经典的『雪菜春笋』组合，整碗清鲜爽利，与北方浓汤面完全不同。",
  "ingredients": [
    {
      "id": "sv-01",
      "nameEn": "fresh thin wheat noodles",
      "nameZh": "细鲜面条",
      "pinyin": "xì xiān miàn",
      "amountMetric": "280 g",
      "amountUS": "9 oz",
      "category": "staple",
      "pantry": "asian",
      "note": "Shanghai-style fresh noodles; thin dried noodles are an acceptable substitute",
      "noteZh": "用上海式鲜细面；细干面也可替代"
    },
    {
      "id": "sv-02",
      "nameEn": "pork loin, cut into fine matchsticks",
      "nameZh": "猪里脊，切细丝",
      "pinyin": "zhū lǐ jǐ sī",
      "amountMetric": "180 g",
      "amountUS": "6 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-loin"
    },
    {
      "id": "sv-03",
      "nameEn": "pickled potherb mustard (xue cai), rinsed and squeezed dry",
      "nameZh": "雪菜，冲洗挤干",
      "pinyin": "xuě cài",
      "amountMetric": "120 g",
      "amountUS": "¾ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sold in cans or vacuum packs labelled 'salted mustard greens' or 雪菜; rinse and squeeze very dry",
      "noteZh": "罐头或真空装，标『雪菜』或 salted mustard greens；冲洗后务必挤干"
    },
    {
      "id": "sv-04",
      "nameEn": "bamboo shoots, sliced into thin strips",
      "nameZh": "竹笋，切细丝",
      "pinyin": "zhú sǔn sī",
      "amountMetric": "100 g",
      "amountUS": "¾ cup sliced",
      "category": "produce",
      "pantry": "asian",
      "note": "Canned or vacuum-packed sliced bamboo shoots are fine and widely available",
      "noteZh": "罐头或真空装笋片即可，随处可买",
      "termKey": "bamboo-shoots"
    },
    {
      "id": "sv-05",
      "nameEn": "fresh ginger, finely shredded",
      "nameZh": "鲜姜，切细丝",
      "pinyin": "jiāng sī",
      "amountMetric": "8 g",
      "amountUS": "2 tsp shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sv-06",
      "nameEn": "scallion, sliced",
      "nameZh": "小葱，切段",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sv-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sv-08",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "5 g",
      "amountUS": "½ tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "sv-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Rinse the xue cai under cold water for 20 seconds, then squeeze it as dry as you can in a clean towel. Chop it roughly.",
      "textZh": "雪菜用冷水冲洗20秒，用干净布尽量挤干，粗切几刀。",
      "zhHint": "雪菜挤干",
      "stateNote": {
        "visual": "Leaves look matte dark green and feel almost dry; no water drips when squeezed",
        "visualZh": "菜叶呈哑光深绿、手感近干，挤压时无水滴滴下",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "A handful springs back loosely instead of clumping into a wet ball",
        "signalZh": "抓一把松手能散开，而不是黏成湿团"
      }
    },
    {
      "text": "Toss the pork matchsticks with the cornstarch and 1 tsp of the soy sauce. Rest 10 minutes.",
      "textZh": "肉丝加淀粉与1茶匙生抽抓匀，静置10分钟。",
      "zhHint": "肉丝上浆",
      "stateNote": {
        "visual": "Pork looks glossy and slippery, strands separate",
        "visualZh": "肉丝油亮微滑，根根分明",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Strands feel silky rather than sticky when pressed",
        "signalZh": "按压时手感爽滑而非发黏"
      }
    },
    {
      "text": "Heat a wok over medium-high with oil. Stir-fry the pork for 90 seconds until it just loses its pink, then remove it to a plate.",
      "textZh": "锅烧热下油，肉丝炒90秒至刚断生，盛出备用。",
      "zhHint": "肉丝先炒",
      "stateNote": {
        "visual": "Strands are pale gold outside with no pink showing; they still look plump, not shrunken",
        "visualZh": "肉丝外表浅金无粉色，仍显饱满不缩水",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium-high",
        "signal": "The pork squeaks slightly against the wok rather than sticking",
        "signalZh": "肉丝在锅中发出轻微摩擦声而不粘锅"
      }
    },
    {
      "text": "In the same wok add the ginger, bamboo shoots and xue cai. Stir-fry 2 minutes over medium-high until the pickle smells toasty.",
      "textZh": "原锅下姜丝、笋丝与雪菜，中大火炒2分钟至腌菜透出焦香。",
      "zhHint": "雪菜爆香",
      "stateNote": {
        "visual": "Xue cai has darkened to olive and looks dry and fluffy; bamboo shoot edges are lightly golden",
        "visualZh": "雪菜转深橄榄色、干爽蓬松，笋丝边缘微金",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "The raw pickled tang has turned into a nutty, almost tea-like aroma",
        "signalZh": "生腌菜的冲味转为坚果般近似茶香"
      }
    },
    {
      "text": "Return the pork, pour in 700 ml (3 cups) boiling water, and simmer 4 minutes. Season with the remaining soy sauce.",
      "textZh": "倒回肉丝，加700毫升滚水，煮4分钟，用剩余生抽调味。",
      "zhHint": "合煮成汤",
      "stateNote": {
        "visual": "Broth is pale green-gold with flecks of dark pickle and pale bamboo suspended",
        "visualZh": "汤色浅绿带金，浮有深色腌菜碎与浅色笋丝",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "A spoonful tastes savoury and bright, with the sourness sitting behind the salt",
        "signalZh": "尝一口咸鲜明亮，酸味藏在咸味之后"
      }
    },
    {
      "text": "Cook the noodles in a separate pot of boiling water until just tender. Divide between bowls, ladle the boiling broth over, and finish with sesame oil and scallion.",
      "textZh": "另锅宽水煮面至刚熟，分装碗中，浇入滚烫汤汁，最后淋香油撒葱花。",
      "zhHint": "浇汤撒葱",
      "stateNote": {
        "visual": "Pale gold broth, dark green pickle shreds, pale noodles and floating scallion rings",
        "visualZh": "浅金汤汁、深绿腌菜丝、浅色面条与漂浮葱圈",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "high",
        "signal": "Steam rises in a steady column and the scallion smells fresh, not cooked",
        "signalZh": "蒸汽稳定成柱，葱香清新不带熟味"
      }
    }
  ],
  "tips": [
    "Squeeze the xue cai bone-dry. Wet pickle steams instead of frying and the whole dish tastes flat.",
    "Take the pork out before it is fully cooked and return it at the end — it finishes in the broth and stays tender.",
    "Winter bamboo shoots are worth seeking out in season; canned ones work but blanch them first to remove the tinny note."
  ],
  "tipsZh": [
    "雪菜一定要挤到极干。带水的腌菜只会蒸不会炒，整道菜都寡淡。",
    "肉丝炒到断生就盛出，最后再回锅——它在汤里会继续熟成，这样才嫩。",
    "当季冬笋值得专门去找；罐头笋可用，但先焯水去掉金属味。"
  ],
  "relatedSlugs": [
    "pickled-mustard-green-pork-shreds",
    "scallion-noodles"
  ],
  "image": "/images/recipes/pickled-beans-noodles.webp"
};
