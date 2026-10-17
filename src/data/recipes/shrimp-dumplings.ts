import type { Recipe } from "@/lib/types";

/** Shrimp Dumplings (Xia Ren Jiao) (虾仁饺) — Day batch */
export const shrimp_dumplings: Recipe = {
  "id": "shrimp-dumplings",
  "slug": "shrimp-dumplings",
  "titleEn": "Shrimp Dumplings (Xia Ren Jiao)",
  "titleZh": "虾仁饺",
  "pinyin": "xiā rén jiǎo",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 80,
  "servings": 4,
  "version": "family",
  "versionNote": "Home versions keep the shrimp roughly chopped so you get distinct bites of prawns, and add a little ground pork to bind. Cantonese teahouse har gow use a wheat-starch wrapper that turns translucent, and the shrimp are beaten to a paste — prettier, but a completely different texture.",
  "versionNoteZh": "家常版把虾仁粗剁成粒，能吃出明显的虾块，并加一点猪肉末黏合。茶楼虾饺用澄面皮做到半透明，虾仁则打成胶状——更漂亮，但口感是另一回事。",
  "tags": [
    "dumplings",
    "seafood",
    "cantonese",
    "make-ahead"
  ],
  "dietary": [
    "none"
  ],
  "story": "The whole point of a shrimp dumpling is that it should taste of shrimp and nothing else, which sounds easy and is not. Anything strongly seasoned — garlic, five-spice, dark soy — flattens it. So the filling is deliberately quiet: white pepper, a whisper of sesame oil, salt, and a binder of pork and cornstarch to hold the juices in. Bamboo shoots are there for crunch, not flavour.",
  "storyZh": "虾仁饺的全部意义就是只吃出虾味，听上去简单，其实不然。任何重味的东西——蒜、五香粉、老抽——都会把它压平。所以馅心刻意做得安静：白胡椒、一点点香油、盐，再加猪肉和淀粉锁住汁水。笋丁只为脆感，不为味道。",
  "ingredients": [
    {
      "id": "sd-01",
      "nameEn": "round dumpling wrappers",
      "nameZh": "饺子皮",
      "amountMetric": "500 g",
      "amountUS": "about 40 wrappers",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "sd-02",
      "nameEn": "raw shrimp, peeled and deveined",
      "nameZh": "鲜虾仁（去壳去虾线）",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp"
    },
    {
      "id": "sd-03",
      "nameEn": "ground pork (fatty)",
      "nameZh": "猪肉末（略肥）",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "sd-04",
      "nameEn": "bamboo shoots, finely diced",
      "nameZh": "竹笋（切细丁）",
      "amountMetric": "100 g",
      "amountUS": "¾ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "bamboo-shoots"
    },
    {
      "id": "sd-05",
      "nameEn": "scallion whites, minced",
      "nameZh": "葱白（切末）",
      "amountMetric": "25 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sd-06",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sd-07",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "amountMetric": "30 g",
      "amountUS": "1 white",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sd-08",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "sd-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "12 ml",
      "amountUS": "2½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "sd-10",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "3 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sd-11",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "amountMetric": "6 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat the shrimp completely dry, then chop them by hand into rough ½ cm pieces — leave about a third in bigger chunks. Do not puree.",
      "textZh": "虾仁彻底吸干水分，手剁成约半厘米的粗粒——留三分之一成大块。不要打成泥。",
      "zhHint": "剁虾仁",
      "stateNote": {
        "visual": "Shrimp are uneven, glossy and pale pink-grey with visible chunky pieces among the mince",
        "visualZh": "虾粒大小不均、油亮呈粉灰色，碎肉之间能看到明显的大块",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Pressed against paper, the shrimp leave no wet mark"
      }
    },
    {
      "text": "Mix shrimp, pork, salt and egg white, then stir hard in one direction 3 minutes until the mixture turns sticky and slightly springy.",
      "textZh": "虾仁、猪肉末、盐与蛋清混合，顺一个方向用力搅3分钟至发黏并略带弹性。",
      "zhHint": "打虾胶",
      "stateNote": {
        "visual": "Mixture goes from loose and separate to one cohesive, slightly elastic mass that clings to the spoon",
        "visualZh": "馅料由松散分离变为抱团略带弹性、能挂在勺上",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Flick the bowl and the mass wobbles as one piece"
      }
    },
    {
      "text": "Fold in bamboo shoots, scallion whites, ginger, cornstarch, white pepper and sesame oil. Chill 20 minutes.",
      "textZh": "拌入笋丁、葱白末、姜末、淀粉、白胡椒与香油，冷藏20分钟。",
      "zhHint": "拌馅冷藏",
      "stateNote": {
        "visual": "Filling is pale with ivory bamboo flecks and feels firm and cold rather than sloppy",
        "visualZh": "馅料色泽浅淡，散布象牙白笋粒，手感紧实冰凉而不稀烂",
        "timeRef": "5 minutes + 20 minutes chilling",
        "timeRefZh": "5分钟 + 冷藏20分钟",
        "signal": "A spoonful holds a peak without slumping",
        "signalZh": "舀一勺能立尖不塌"
      },
      "tip": "Chilling firms the filling so it scoops cleanly, and it keeps the wrappers from going soggy while you work."
    },
    {
      "text": "Place 1 tbsp filling in each wrapper, wet the edge, fold and pleat firmly. Keep finished dumplings under a damp cloth.",
      "textZh": "每张饺子皮放1汤匙馅，边缘抹水，对折并捏紧褶。包好的饺子用湿布盖住。",
      "zhHint": "包饺子",
      "stateNote": {
        "visual": "Dumplings sit flat with a pleated curved back, filling fully enclosed and wrappers still pliable",
        "visualZh": "饺子平底坐稳、背部褶皱成弧形，馅心完全包住，面皮仍然柔韧",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "The seam stays shut when the dumpling is lifted by one pleat"
      }
    },
    {
      "text": "Boil in batches over high heat. After they float, add a cup of cold water; when it returns to a boil, cook 2 minutes more and lift out with a slotted spoon.",
      "textZh": "大火分批煮。饺子浮起后加一碗冷水，再次沸腾后煮2分钟，用漏勺捞出。",
      "zhHint": "煮饺子",
      "stateNote": {
        "visual": "Wrappers are glossy and slightly translucent and the shrimp inside have turned opaque pink-orange",
        "visualZh": "面皮油亮微透，里面的虾仁已变为不透明的粉橙色",
        "timeRef": "6-8 minutes per batch",
        "timeRefZh": "每批6-8分钟",
        "heat": "high",
        "signal": "Cut one open: the centre is steaming and the shrimp is firm, not translucent"
      }
    }
  ],
  "tips": [
    "Dry the shrimp thoroughly — wet shrimp makes a filling that will not bind and leaks in the pot.",
    "Keep the seasoning quiet. No garlic, no five-spice; they bury the shrimp.",
    "Leave some shrimp in big chunks; that uneven texture is what makes the dumpling worth eating."
  ],
  "tipsZh": [
    "虾仁必须彻底吸干——带水的虾仁搅不上劲，下锅还会漏馅。",
    "调味要克制。别放蒜、别放五香粉，会把虾味埋掉。",
    "留一部分大块虾肉，这种不均匀的口感正是虾仁饺的价值所在。"
  ],
  "relatedSlugs": [
    "three-delicacies-dumplings",
    "fresh-pork-wonton",
    "pork-cabbage-dumplings"
  ],
  "image": "/images/recipes/chive-egg-dumplings.webp"
};
