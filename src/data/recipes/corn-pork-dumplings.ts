import type { Recipe } from "@/lib/types";

/** Corn Pork Dumplings (Yu Mi Zhu Rou Jiao) (玉米猪肉饺) — Day batch */
export const corn_pork_dumplings: Recipe = {
  "id": "corn-pork-dumplings",
  "slug": "corn-pork-dumplings",
  "titleEn": "Corn Pork Dumplings (Yu Mi Zhu Rou Jiao)",
  "titleZh": "玉米猪肉饺",
  "pinyin": "yù mǐ zhū ròu jiǎo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "easy",
  "timeMin": 60,
  "servings": 4,
  "version": "family",
  "versionNote": "Home versions use frozen or tinned sweet corn and keep the kernels whole so they pop between the teeth. Restaurant versions often blend half the corn into the pork for sweetness throughout, which tastes sweeter but loses the texture that makes the dumpling interesting.",
  "versionNoteZh": "家常版用冷冻或罐头甜玉米，保留整粒，咬下去会在齿间爆开。馆子常把一半玉米打进肉里让甜味更均匀，更甜但少了让这只饺子有意思的那份口感。",
  "tags": [
    "dumplings",
    "kid-friendly",
    "30-min",
    "beginner"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the dumpling you make for children, and it works because sweet corn does something no vegetable in a Chinese filling does: it stays sweet after boiling. Everything else — cabbage, chives, celery — turns savoury. So the filling needs almost no help: pork, corn, a little carrot for colour, and restraint with the salt so the sugar in the corn reads clearly.",
  "storyZh": "这是给孩子包的饺子，它成立的原因是甜玉米做了一件中国馅心里其他蔬菜都做不到的事：煮过之后依然是甜的。白菜、韭菜、芹菜——都会转成咸鲜。所以这馅几乎不需要帮手：猪肉、玉米、一点胡萝卜配色，盐要克制，好让玉米的糖分清楚地被尝出来。",
  "ingredients": [
    {
      "id": "cn-01",
      "nameEn": "round dumpling wrappers",
      "nameZh": "饺子皮",
      "amountMetric": "500 g",
      "amountUS": "about 40 wrappers",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "cn-02",
      "nameEn": "ground pork (20% fat)",
      "nameZh": "猪肉末（二分肥八分瘦）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "cn-03",
      "nameEn": "sweet corn kernels (frozen, thawed)",
      "nameZh": "甜玉米粒（冷冻解冻）",
      "amountMetric": "200 g",
      "amountUS": "1½ cups",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cn-04",
      "nameEn": "carrot, finely diced",
      "nameZh": "胡萝卜（切细丁）",
      "amountMetric": "80 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "cn-05",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "40 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cn-06",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cn-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cn-08",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "cn-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cn-10",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "cn-11",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Thaw the corn completely and pat it dry, then blanch the carrot dice 60 seconds and drain. Both must be dry before mixing.",
      "textZh": "玉米粒彻底解冻并吸干水分；胡萝卜丁汆水60秒后沥干。两者下馅前都必须干燥。",
      "zhHint": "处理玉米胡萝卜",
      "stateNote": {
        "visual": "Corn kernels are plump and bright yellow with no frost or surface water; carrot is a deeper orange and slightly softened",
        "visualZh": "玉米粒饱满亮黄，表面无冰霜和生水；胡萝卜转为更深的橙色并略微变软",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Pressed on paper towel the kernels leave no damp ring"
      }
    },
    {
      "text": "Stir pork with soy sauce, ginger, white pepper and salt in one direction 3 minutes until sticky and glossy.",
      "textZh": "猪肉末加生抽、姜末、白胡椒与盐，顺一个方向搅3分钟至发黏油亮。",
      "zhHint": "打肉上劲",
      "stateNote": {
        "visual": "Meat has become one cohesive mass that stretches rather than crumbles when lifted",
        "visualZh": "肉馅成为抱团的一整块，提起时是被拉长而不是散落",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "The spoon leaves a channel that slowly closes"
      }
    },
    {
      "text": "Fold in corn, carrot, cornstarch, scallions and sesame oil. Mix only until evenly distributed — overmixing bursts the kernels.",
      "textZh": "拌入玉米、胡萝卜、淀粉、葱花与香油，搅到分布均匀即停——过度搅拌会把玉米粒搅破。",
      "zhHint": "拌馅",
      "stateNote": {
        "visual": "Yellow kernels and orange carrot sit whole and clearly visible in pink meat; no milky starch streaks remain",
        "visualZh": "黄色玉米粒与橙色胡萝卜丁完整地嵌在粉色肉馅中清晰可见；没有白色淀粉条痕",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "A spoonful holds together but individual kernels still stand out from the surface",
        "signalZh": "舀一勺能成团，但单颗玉米粒仍清晰地凸出表面"
      },
      "tip": "Stir gently at this stage. Burst kernels leak starch and turn the filling gluey."
    },
    {
      "text": "Place 1 tbsp filling in each wrapper, wet the edge, fold and pleat closed, pressing out trapped air as you go.",
      "textZh": "每张饺子皮放1汤匙馅，边缘抹水对折捏褶收口，边包边挤出空气。",
      "zhHint": "包饺子",
      "stateNote": {
        "visual": "Dumplings sit flat with a pleated curved back and the wrapper is in contact with the filling all over, with no air pockets",
        "visualZh": "饺子平底坐稳、背部褶皱成弧形，面皮与馅心完全贴合，没有气泡",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Squeeze gently and the dumpling feels firm rather than puffy"
      }
    },
    {
      "text": "Boil in batches over high heat. Once they float, add a cup of cold water; on the second boil cook 2 minutes more and lift out.",
      "textZh": "大火分批煮。浮起后加一碗冷水，第二次沸腾后再煮2分钟捞出。",
      "zhHint": "煮饺子",
      "stateNote": {
        "visual": "Wrappers are glossy and slightly translucent and the kernels inside have swollen and turned a deeper gold",
        "visualZh": "面皮油亮微透，里面的玉米粒胀起并转为更深的金色",
        "timeRef": "6-8 minutes per batch",
        "timeRefZh": "每批6-8分钟",
        "heat": "high",
        "signal": "Bite one: the kernel pops and releases a sweet burst against the savoury pork",
        "signalZh": "咬一口：玉米粒爆开，在咸鲜的肉馅里迸出甜味"
      }
    }
  ],
  "tips": [
    "Dry the corn properly — frozen kernels carry a lot of surface water.",
    "Go easy on the salt; the corn is already sweet and oversalting kills it.",
    "Fold the corn in last and gently, so the kernels stay whole."
  ],
  "tipsZh": [
    "玉米一定要擦干——冷冻玉米粒表面带很多水。",
    "盐要少放；玉米本身就甜，咸了就全毁了。",
    "玉米最后放、轻手拌，这样颗粒才完整。"
  ],
  "relatedSlugs": [
    "celery-pork-dumplings",
    "pork-cabbage-dumplings",
    "chive-egg-dumplings"
  ],
  "image": "/images/recipes/cornmeal-buns-homestyle.webp"
};
