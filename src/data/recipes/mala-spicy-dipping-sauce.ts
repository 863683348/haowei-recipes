import type { Recipe } from "@/lib/types";

/** Mala Spicy Dipping Sauce (Málà Zhànliào) (麻辣蘸料) — Day batch */
export const mala_spicy_dipping_sauce: Recipe = {
  "id": "ma-la-zhan-liao",
  "slug": "mala-spicy-dipping-sauce",
  "titleEn": "Mala Spicy Dipping Sauce (Málà Zhànliào)",
  "titleZh": "麻辣蘸料",
  "pinyin": "má là zhàn liào",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version blooms whole Sichuan peppercorns in gently warmed chili oil instead of using restaurant-style pre-mixed mala paste, so the numbing note stays bright and clean rather than muddy. We also cut the oil by a third so the sauce clings to food instead of pooling.",
  "versionNoteZh": "家庭版用微温辣椒油现爆整粒花椒，不用餐馆的预制麻辣酱，麻味更清亮不浑浊；油量也比餐馆少三分之一，蘸料挂得住食材而不积油。",
  "tags": [
    "20-min",
    "dipping-sauce",
    "spicy",
    "hot-pot",
    "sichuan"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Every Sichuan hot pot table has one person in charge of the dipping bowl, and in my family that was my uncle. He kept a small iron pan just for toasting peppercorns, and he insisted the secret was never to let them smoke — 'once they smoke, the numbing turns bitter'. He'd grind them fresh at the table so the aroma hit you before the first bite.",
  "storyZh": "四川人吃火锅，桌上总有一个人负责调蘸碟，我家是我舅舅。他专门留了口小铁锅焙花椒，坚持不能焙到冒烟——'一冒烟，麻味就发苦'。他总在桌边现舂现磨，让香气抢在第一口之前扑上来。",
  "ingredients": [
    {
      "id": "ml-01",
      "nameEn": "chili oil, with sediment",
      "nameZh": "辣椒油（带辣椒面沉淀）",
      "pinyin": "là jiāo yóu",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil",
      "note": "Use a chili oil with visible chili sediment at the bottom; the sediment carries most of the aroma. Sub: 4 tbsp neutral oil heated with 2 tsp chili flakes, cooled 5 minutes.",
      "noteZh": "选瓶底有辣椒面沉淀的辣椒油，香气主要在沉淀里。替代：4汤匙无味油加2茶匙辣椒面加热后晾5分钟。"
    },
    {
      "id": "ml-02",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn",
      "note": "Red Sichuan peppercorns (hóng huājiāo) give the classic numbing note. Green ones are more floral and sharper — fine to use, but reduce to 2 tsp.",
      "noteZh": "红花椒是经典麻味来源。青花椒更清冽尖锐，可用但减至2茶匙。"
    },
    {
      "id": "ml-03",
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
      "id": "ml-04",
      "nameEn": "Chinkiang vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar",
      "note": "Sub: balsamic vinegar for a rounder, sweeter tang, or rice vinegar for a lighter one.",
      "noteZh": "替代：香醋可用意大利黑醋（更圆润回甜）或米醋（更清淡）。"
    },
    {
      "id": "ml-05",
      "nameEn": "garlic, finely minced",
      "nameZh": "大蒜（切细末）",
      "pinyin": "dà suàn",
      "amountMetric": "20 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ml-06",
      "nameEn": "scallion greens, finely chopped",
      "nameZh": "小葱绿（切细）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ml-07",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟白芝麻",
      "pinyin": "shú bái zhī ma",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-seeds"
    },
    {
      "id": "ml-08",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "8 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Put the Sichuan peppercorns in a dry small skillet over low heat. Toast, shaking constantly, for 2–3 minutes until they smell fragrant and one or two start to crackle. Stop well before any smoke appears.",
      "textZh": "花椒放入干燥小锅，小火焙炒，不停晃动2–3分钟，至香气溢出、有一两粒轻微爆响即停。务必在冒烟之前离火。",
      "zhHint": "小火慢焙，绝不能冒烟",
      "stateNote": {
        "visual": "Peppercorns turn slightly darker and glossy; the papery husks split open",
        "visualZh": "花椒颜色略加深并泛油光，外壳微裂张开",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "low",
        "signal": "A sharp citrus-floral aroma rises; husks crackle faintly — if you see smoke, discard and start over",
        "signalZh": "扑鼻的柑橘花香升起，外壳轻微爆响；一旦见烟即弃掉重来"
      },
      "tip": "Toast more than you need and store whole — ground peppercorns lose their numbing punch within a day.",
      "tipZh": "可一次多焙些整粒密封保存——磨成粉的花椒一天内麻味就散掉了。"
    },
    {
      "text": "Transfer the hot peppercorns to a mortar (or spice grinder) and grind to a coarse powder. You want visible flecks, not a fine dust.",
      "textZh": "将焙热的花椒倒入石臼（或研磨机）舂成粗粉。要保留可见颗粒感，不要打成细粉。",
      "zhHint": "舂成粗粉，保留颗粒",
      "stateNote": {
        "visual": "Coarse grey-brown powder with tiny darker husk flakes throughout",
        "visualZh": "灰褐色粗粉，间杂深色外壳碎片",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Grinding releases a strong tingling smell that makes your nose prickle",
        "signalZh": "研磨时麻香冲鼻，鼻腔有微微刺感"
      }
    },
    {
      "text": "Warm the chili oil in a small saucepan over medium-low heat until it just begins to shimmer, about 60°C / 140°F — do not let it bubble. Pour it over the ground peppercorns in a heatproof bowl.",
      "textZh": "辣椒油倒入小锅，中小火加热至刚刚泛起油纹（约60°C），不可起泡。将热油浇在碗里的花椒粉上。",
      "zhHint": "油温刚起纹，不可沸腾",
      "stateNote": {
        "visual": "Oil surface shows faint moving ripples; a thin ring of fine bubbles forms at the peppercorns",
        "visualZh": "油面泛起细密流动油纹；花椒周围浮出一圈细泡",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium-low",
        "signal": "A drop of water flicked in would hiss softly — if it crackles hard, the oil is too hot and will scorch the spice",
        "signalZh": "甩一滴水进去会轻柔作响；若剧烈爆响则油太热，会烫糊花椒"
      },
      "tip": "If you overheat the oil, let it cool 3 minutes before pouring — burnt peppercorns taste bitter and dusty.",
      "tipZh": "万一油过热，离火晾3分钟再浇；烫糊的花椒发苦带尘土味。"
    },
    {
      "text": "Add light soy sauce, Chinkiang vinegar, sugar, minced garlic and half the scallion to the bloomed chili oil. Whisk for 30 seconds until the sugar dissolves and the sauce is uniform.",
      "textZh": "在爆香的辣油中加入生抽、镇江香醋、白糖、蒜末和一半葱花，搅打30秒至糖化开、酱汁均匀。",
      "zhHint": "搅打至糖化、酱汁一体",
      "stateNote": {
        "visual": "Deep red-brown sauce with no sugar crystals on the bottom of the bowl",
        "visualZh": "深红褐色酱汁，碗底无糖粒残留",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Sauce coats the back of a spoon in a thin even film and drips in a steady ribbon",
        "signalZh": "酱汁能薄而均匀地挂住勺背，落下时呈连续细流"
      }
    },
    {
      "text": "Let the sauce rest 5 minutes, then stir in the sesame seeds and remaining scallion. Taste and adjust — more vinegar to cut richness, more soy sauce if it tastes flat. Serve at room temperature.",
      "textZh": "静置5分钟后拌入白芝麻与剩余葱花。试味调整：过腻加醋，发闷加生抽。室温食用。",
      "zhHint": "静置醒味后再调咸酸",
      "stateNote": {
        "visual": "Sauce looks slightly thickened and glossy, with sesame and scallion suspended evenly",
        "visualZh": "酱汁略稠发亮，芝麻与葱花均匀悬浮",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "First the numbing tingle spreads across the tongue, then the soy savouriness and vinegar tang arrive behind it",
        "signalZh": "舌尖先起麻感，随后酱香与醋香依次跟上"
      },
      "tip": "This sauce is built to be strong — it is meant to season bland boiled or steamed food, so it will taste too salty on its own.",
      "tipZh": "此蘸料本就调得重口，是为白灼、清蒸这类寡淡食材设计的，空口尝会偏咸。"
    }
  ],
  "tips": [
    "Make a double batch of the toasted peppercorn powder and keep it in a sealed jar — it keeps its punch for about 2 weeks.",
    "For a milder bowl, use only the oil and skip the peppercorn sediment at the bottom.",
    "Excellent with dumplings, cold noodles, and plain steamed vegetables, not just hot pot."
  ],
  "tipsZh": [
    "焙好的花椒粉可一次多做些密封保存，麻味约能留两周。",
    "想要温和些，只取上层辣油、弃掉底部花椒粉即可。",
    "除了火锅，配饺子、凉面、白灼蔬菜同样出彩。"
  ],
  "relatedSlugs": [
    "sesame-sauce-dipping-sauce",
    "fermented-tofu-dipping-sauce",
    "seafood-dipping-sauce"
  ],
  "image": "/images/recipes/dry-chili-dipping-bowl.webp"
};
