import type { Recipe } from "@/lib/types";

/** Mei Gan Cai Baozi (Preserved Mustard Green Buns) (梅干菜包) — Day batch */
export const mei_gan_cai_baozi: Recipe = {
  "id": "mei-gan-cai-baozi",
  "slug": "mei-gan-cai-baozi",
  "titleEn": "Mei Gan Cai Baozi (Preserved Mustard Green Buns)",
  "titleZh": "梅干菜包",
  "pinyin": "méi gān cài bāo",
  "cuisine": "浙菜",
  "cuisineEn": "Zhejiang",
  "region": "Zhejiang (Shaoxing)",
  "regionZh": "浙江绍兴",
  "difficulty": "medium",
  "timeMin": 190,
  "servings": 12,
  "version": "family",
  "versionNote": "Home buns use a little sugar to round off the sour edge of the preserved greens and add diced pork belly for fat. Shaoxing shop versions are leaner and far saltier, and the greens are chopped almost to a paste so the filling packs hard and dark.",
  "versionNoteZh": "家常版加少许糖压住梅干菜的酸口，并放五花肉丁补油。绍兴铺子里的版本更瘦更咸，梅干菜几乎剁成茸，馅心压得又紧又黑。",
  "tags": [
    "baozi",
    "steamed",
    "make-ahead",
    "zhejiang"
  ],
  "dietary": [
    "none"
  ],
  "story": "Mei gan cai is napa cabbage mustard that has been salted, sun-dried and left to go almost black in a crock. It is Shaoxing in a jar — smoky, sour and sweet all at once — and it exists to be cooked with pork fat, which is why the baozi is the dish people actually buy. Soaking is not optional: dry, it is leather; soaked, it turns silky and doubles in weight.",
  "storyZh": "梅干菜是雪里蕻加盐晒干、在坛子里闷到发黑的东西。它是一整罐的绍兴味道——烟熏、酸、回甜，三者同时在嘴里。它的宿命就是配猪油，所以梅干菜包才是真正让人排队的那一只。泡发不能省：干的时候像皮革，泡透之后柔滑如绸，重量还会翻倍。",
  "ingredients": [
    {
      "id": "mg-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "mg-02",
      "nameEn": "warm water (35°C)",
      "nameZh": "温水（35°C）",
      "amountMetric": "265 ml",
      "amountUS": "1 cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "mg-03",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "mg-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "mg-05",
      "nameEn": "mei gan cai (dried preserved mustard greens)",
      "nameZh": "梅干菜",
      "amountMetric": "80 g",
      "amountUS": "2 cups loosely packed",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sold in Asian groceries in plastic bags; very sandy, wash in three changes of water",
      "noteZh": "亚洲超市塑料袋装售卖，沙子多，需换水三遍"
    },
    {
      "id": "mg-06",
      "nameEn": "pork belly, 1 cm dice",
      "nameZh": "五花肉（切1厘米丁）",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "mg-07",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "mg-08",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "40 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "mg-09",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "mg-10",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "mg-11",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "mg-12",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "20 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Rinse the mei gan cai in three changes of cold water, then soak it in warm water 40 minutes until soft. Squeeze dry and chop finely.",
      "textZh": "梅干菜用冷水换洗三遍，再用温水泡40分钟至软。挤干后切细。",
      "zhHint": "洗泡梅干菜",
      "stateNote": {
        "visual": "Greens have swollen to roughly double and gone from near-black to dark brown; chopping them releases a smoky, sweet-sour smell",
        "visualZh": "梅干菜涨发到约两倍大，颜色由近黑转为深褐；切碎时散发出烟熏的酸甜香",
        "timeRef": "40 minutes soaking",
        "timeRefZh": "泡40分钟",
        "signal": "A stem snaps instead of bending when you fold it"
      }
    },
    {
      "text": "Render the pork belly dice in a dry pan over medium-low 8 minutes until the fat runs clear and the pieces are gilded. Add ginger and scallion and fry 1 minute.",
      "textZh": "五花肉丁下干锅中，中小火煸8分钟至出油、肉丁焦黄。下姜末葱花炒1分钟。",
      "zhHint": "煸五花肉",
      "stateNote": {
        "visual": "A clear pool of fat has collected and the meat cubes have crisp amber edges",
        "visualZh": "锅底积起一层清亮猪油，肉丁边缘结出琥珀色的焦边",
        "timeRef": "9 minutes",
        "timeRefZh": "9 分钟",
        "heat": "medium-low",
        "signal": "The sizzle drops to a soft murmur and the fat no longer spits"
      }
    },
    {
      "text": "Add the chopped greens, both soy sauces, wine and sugar. Fry over medium 5 minutes, splash in 100 ml water, cover and simmer 15 minutes until nearly dry. Cool completely.",
      "textZh": "下梅干菜、两种酱油、黄酒与糖，中火炒5分钟，淋入100毫升水，加盖焖15分钟至将干。彻底放凉。",
      "zhHint": "炒焖馅心",
      "stateNote": {
        "visual": "Mixture is dark, glossy and almost jam-like with no free liquid running when the spoon is dragged through",
        "visualZh": "馅料乌亮、近乎酱状，用勺划过不留流动的汤汁",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "medium",
        "signal": "The spoon leaves a channel that holds its shape for a few seconds",
        "signalZh": "勺子划出的沟槽能保持形状几秒"
      },
      "tip": "It must be cold before wrapping — warm filling steams the dough from inside and the buns collapse."
    },
    {
      "text": "Knead flour, sugar and yeast into the warm water for 12 minutes, then rise 70 minutes until doubled.",
      "textZh": "面粉加糖、酵母与温水揉12分钟，发酵70分钟至两倍大。",
      "zhHint": "和面一发",
      "stateNote": {
        "visual": "Dough is smooth, ivory and satin-matt and pulls clean away from the bowl",
        "visualZh": "面团光滑象牙白、缎面哑光，能干净脱离碗壁",
        "timeRef": "70 minutes",
        "timeRefZh": "70 分钟",
        "signal": "A floured finger dent stays put instead of springing back"
      }
    },
    {
      "text": "Fold the sesame oil through the cold filling, divide the dough into 12, wrap about 2 tbsp each, pleat closed and proof 25 minutes.",
      "textZh": "馅心放凉后拌入香油；面团分12份，每份包约2汤匙馅，捏褶收口，醒发25分钟。",
      "zhHint": "包制醒发",
      "stateNote": {
        "visual": "Buns sit slightly puffed and feel like a firm marshmallow; seams are closed with no dark filling peeking out",
        "visualZh": "包子微微鼓起，手感像紧实的棉花糖；收口严密，没有深色馅心外露",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "A gentle press springs back slowly rather than instantly"
      }
    },
    {
      "text": "Steam over vigorously boiling water 14 minutes, then turn off the heat and rest 5 minutes before opening the lid.",
      "textZh": "沸水大火蒸14分钟，关火后焖5分钟再开盖。",
      "zhHint": "蒸制焖锅",
      "stateNote": {
        "visual": "Buns are plump and pale with a faint brown blush where the filling touches the dough",
        "visualZh": "包子饱满色浅，馅心贴着面皮处透出淡淡的褐色",
        "timeRef": "14 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸14分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Opening the lid releases a burst of steam and the bases lift cleanly off the parchment"
      }
    }
  ],
  "tips": [
    "Wash mei gan cai in three changes of water — it is packed with sand and one rinse is never enough.",
    "Cool the filling completely. Warm filling pre-cooks the dough and the buns wrinkle on opening.",
    "Sugar is not a mistake here: it is what turns the sour edge of the greens into sweetness."
  ],
  "tipsZh": [
    "梅干菜一定要换三遍水洗——里面全是沙，冲一遍绝对不够。",
    "馅心必须彻底放凉。热馅会把面皮烫熟，开锅时包子就皱了。",
    "加糖不是手滑：正是糖把梅干菜的酸边转成了回甜。"
  ],
  "relatedSlugs": [
    "meicai-kourou",
    "braised-pork-baozi",
    "three-umami-baozi"
  ],
  "image": "/images/recipes/three-umami-baozi.webp"
};
