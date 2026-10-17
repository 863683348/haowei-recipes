import type { Recipe } from "@/lib/types";

/** Celery Pork Dumplings (Qin Cai Zhu Rou Jiao) (芹菜猪肉饺) — Day batch */
export const celery_pork_dumplings: Recipe = {
  "id": "celery-pork-dumplings",
  "slug": "celery-pork-dumplings",
  "titleEn": "Celery Pork Dumplings (Qin Cai Zhu Rou Jiao)",
  "titleZh": "芹菜猪肉饺",
  "pinyin": "qín cài zhū ròu jiǎo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "easy",
  "timeMin": 75,
  "servings": 4,
  "version": "family",
  "versionNote": "Home cooks blanch the celery briefly and squeeze it out, which tames the raw edge but keeps the crunch. Northern restaurant versions use raw celery for a sharper, greener bite and add much more pork fat, so the filling stays juicier but tastes considerably heavier.",
  "versionNoteZh": "家常做法把芹菜快速汆水并挤干，去掉生青味但留下脆感。北方馆子用生芹菜，味道更冲更青，还会多加猪油，馅心更润但明显更腻。",
  "tags": [
    "dumplings",
    "30-min",
    "beginner",
    "freezer-friendly"
  ],
  "dietary": [
    "none"
  ],
  "story": "Celery is the northern answer to cabbage in dumplings, and it behaves completely differently: it does not collapse, it does not release much water, and it fights back with a green, almost peppery note. That means you can get away with less salt and more white pepper, and the finished dumpling tastes clean rather than sweet. It is the filling to make when you want dumplings that do not sit heavy.",
  "storyZh": "芹菜是北方人对白菜馅的回答，而它的脾气完全不同：不塌、不出水，还带着一股发青、近乎胡椒的冲劲。所以盐可以少放、白胡椒可以多放，成品吃着清爽而不甜腻。想让饺子不压胃的时候，就用这个馅。",
  "ingredients": [
    {
      "id": "cp-01",
      "nameEn": "round dumpling wrappers",
      "nameZh": "饺子皮",
      "amountMetric": "500 g",
      "amountUS": "about 40 wrappers",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for round (not square) wrappers in the chilled or frozen section of an Asian grocery",
      "noteZh": "在亚洲超市冷藏或冷冻区找圆形（非方形）饺子皮"
    },
    {
      "id": "cp-02",
      "nameEn": "ground pork (20% fat)",
      "nameZh": "猪肉末（二分肥八分瘦）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "cp-03",
      "nameEn": "celery, finely diced",
      "nameZh": "芹菜（切细丁）",
      "amountMetric": "300 g",
      "amountUS": "3 cups",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cp-04",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "40 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cp-05",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "12 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cp-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "25 ml",
      "amountUS": "1 tbsp + 2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cp-07",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cp-08",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cp-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "3 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "cp-10",
      "nameEn": "large egg",
      "nameZh": "鸡蛋",
      "amountMetric": "50 g",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "cp-11",
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
      "text": "Bring a pot of water to the boil, blanch the diced celery 45 seconds, then drain and rinse under cold water. Squeeze out as much water as you can in a tea towel.",
      "textZh": "烧一锅水，芹菜丁汆45秒，捞出过冷水，用茶巾尽量挤干水分。",
      "zhHint": "汆水挤干",
      "stateNote": {
        "visual": "Celery has gone from pale to a bright, almost fluorescent green and the dice look slightly shrunken",
        "visualZh": "芹菜由浅色转为鲜亮近荧光的绿，菜丁略微收缩",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "Wrung in a towel, the celery yields no more than a trickle"
      }
    },
    {
      "text": "Combine pork, soy sauce, wine, ginger, white pepper and salt. Stir hard in one direction 3 minutes until the meat turns sticky.",
      "textZh": "猪肉末加生抽、黄酒、姜末、白胡椒与盐，顺一个方向用力搅3分钟至发黏。",
      "zhHint": "打肉上劲",
      "stateNote": {
        "visual": "Meat has gone from crumbly to one glossy, cohesive mass that pulls away from the bowl in a sheet",
        "visualZh": "肉馅由松散变为整体油亮抱团，能从碗壁整片拉起",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "A spoon dragged through leaves a channel that slowly fills back in"
      }
    },
    {
      "text": "Beat in the egg, then fold in the celery, scallions and sesame oil. Do not overmix once the celery is in.",
      "textZh": "打入鸡蛋搅匀，再拌入芹菜、葱花与香油。芹菜下锅后不要过度搅拌。",
      "zhHint": "拌馅",
      "stateNote": {
        "visual": "Filling is speckled bright green on pink and holds together when squeezed, with no liquid pooling",
        "visualZh": "馅料在粉色中散布着鲜绿颗粒，捏紧能成团，碗底不积汁",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "A squeezed ball keeps its shape after you open your hand",
        "signalZh": "攥成团松手后能保持形状"
      }
    },
    {
      "text": "Place 1 tbsp filling in each wrapper, wet the edge, fold into a half-moon and pleat the top edge. Sit them on a floured tray.",
      "textZh": "每张饺子皮放1汤匙馅，边缘抹水，对折成半月形并捏出褶边，摆在撒了粉的盘子上。",
      "zhHint": "包饺子",
      "stateNote": {
        "visual": "Dumplings sit flat on their base with a curved pleated back and no air pockets under the wrapper",
        "visualZh": "饺子能平底坐稳，背部褶皱成弧形，皮与馅之间没有鼓起的气泡",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Pinch the seam and it holds without the wrapper tearing"
      },
      "tip": "Squeeze the air out as you close. Trapped air expands in the pot and splits the dumpling."
    },
    {
      "text": "Boil in batches in a wide pot of boiling water. When they float, add a cup of cold water; repeat once more, then cook 1 minute after the second boil and lift out.",
      "textZh": "宽水沸后分批下饺子。浮起后加一碗冷水，再重复一次，第二次沸腾后煮1分钟捞出。",
      "zhHint": "煮饺子",
      "stateNote": {
        "visual": "Dumplings are plump and faintly translucent, the wrapper glossy and no longer doughy-white, with green showing faintly through",
        "visualZh": "饺子饱满微透，面皮油亮不再生白，隐约透出绿色",
        "timeRef": "6-8 minutes per batch",
        "timeRefZh": "每批6-8分钟",
        "heat": "high",
        "signal": "They float, and the pleats stay puffy rather than deflating"
      }
    }
  ],
  "tips": [
    "Blanch and squeeze the celery well — this is the only step between crunchy filling and a watery one.",
    "Stir the pork in one direction only. Reversing direction breaks the protein web you just built.",
    "Freeze uncooked dumplings on a tray first, then bag them; they will not stick together."
  ],
  "tipsZh": [
    "芹菜一定要汆透挤干——脆馅和水馅之间只差这一步。",
    "肉馅只朝一个方向搅。来回换方向会把刚搅出的筋打散。",
    "生饺子先摆盘冻硬再装袋，就不会互相粘连。"
  ],
  "relatedSlugs": [
    "pork-cabbage-dumplings",
    "chive-egg-dumplings",
    "stir-fried-dried-tofu-with-celery"
  ],
  "image": "/images/recipes/pork-cabbage-dumplings.webp"
};
