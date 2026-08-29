import type { Recipe } from "@/lib/types";

/** Lotus Leaf Steamed Chicken (荷叶蒸鸡) — Seed batch */
export const lotus_leaf_steamed_chicken: Recipe = {
  "id": "he-ye-zheng-ji",
  "slug": "lotus-leaf-steamed-chicken",
  "titleEn": "Lotus Leaf Steamed Chicken",
  "titleZh": "荷叶蒸鸡",
  "pinyin": "hé yè zhēng jī",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses fresh lotus leaf (frozen is acceptable), wrapped loosely—not sealed tight—to allow gentle steam penetration and prevent sogginess.",
  "versionNoteZh": "家庭版用新鲜荷叶（冷冻亦可），松包不封严，让蒸汽缓入，防湿烂。",
  "tags": [
    "45-min",
    "special-occasion",
    "aromatic"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Mid-Autumn in Guangzhou, my uncle would buy fresh lotus leaves from Zhujiang New Town market, soak them in ginger-salt water, then wrap chicken parcels for our family reunion dinner—he said the leaf ‘breathes life back into tired meat’.",
  "storyZh": "每年中秋，广州的叔父都会去珠江新城市场买新鲜荷叶，用姜盐水浸泡后包裹鸡肉蒸制，作为团圆饭主菜——他说荷叶能‘为疲惫的肉注入生气’。",
  "ingredients": [
    {
      "id": "hy-01",
      "nameEn": "boneless chicken thigh",
      "nameZh": "去骨鸡腿肉",
      "pinyin": "qù gǔ jī tuǐ ròu",
      "amountMetric": "350 g",
      "amountUS": "12.3 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Cut into 3 cm chunks; include some fat for aroma",
      "noteZh": "切3厘米块；保留适量脂肪增香"
    },
    {
      "id": "hy-02",
      "nameEn": "dried lotus leaf",
      "nameZh": "干荷叶",
      "pinyin": "gān hé yè",
      "amountMetric": "1 large leaf (approx. 25 cm diameter)",
      "amountUS": "1 large leaf (approx. 10 inch)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in warm water 45 min until pliable; substitute frozen fresh leaf if available (thawed, blanched 1 min)",
      "noteZh": "温水泡45分钟至柔软；如有冷冻鲜荷叶（解冻+焯水1分钟），可替代"
    },
    {
      "id": "hy-03",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks, cut into 3 cm lengths",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "hy-04",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "hy-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Soak dried lotus leaf in 500 ml warm water (40°C) for 45 minutes until flexible and deep green. Drain, rinse under cold water, and pat dry with towel.",
      "textZh": "干荷叶用500毫升40°C温水浸泡45分钟至柔韧、呈深绿色。捞出，冷水冲洗，用厨房纸吸干。",
      "zhHint": "泡发荷叶",
      "stateNote": {
        "visual": "Leaf uncurls fully, veins prominent, no brittle edges",
        "visualZh": "叶片完全舒展，叶脉清晰，边缘无脆裂",
        "timeRef": "45 minutes",
        "timeRefZh": "45 分钟",
        "signal": "Leaf bends easily without snapping",
        "signalZh": "叶片可轻松弯折而不脆断"
      }
    },
    {
      "text": "In a bowl, combine chicken, oyster sauce, Shaoxing wine, 1 tsp salt, and white pepper. Mix well for 3 minutes until sticky. Fold in scallion lengths gently.",
      "textZh": "碗中放入鸡块、蚝油、绍兴酒、1茶匙盐及白胡椒，用力拌3分钟至黏稠。再轻拌入葱段。",
      "zhHint": "腌制鸡肉",
      "stateNote": {
        "visual": "Marinade coats chicken thickly; scallions remain bright green",
        "visualZh": "酱汁浓稠裹满鸡块；葱段翠绿未蔫",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Bowl feels slightly warm from friction",
        "signalZh": "碗壁因摩擦微温"
      }
    },
    {
      "text": "Lay soaked lotus leaf flat on clean surface. Place marinated chicken in center, leaving 5 cm border. Gather leaf edges loosely over chicken—do not seal tightly.",
      "textZh": "泡好的荷叶平铺于洁净台面。将腌鸡置于中央，四周留5厘米边距。将叶边松拢覆于鸡肉上方——勿压紧密封。",
      "zhHint": "荷叶包鸡",
      "stateNote": {
        "visual": "Chicken mound is fully concealed; leaf overlaps naturally like a cradle",
        "visualZh": "鸡块完全被遮盖；荷叶自然交叠如摇篮",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No gaps larger than 1 cm visible at seams",
        "signalZh": "接缝处无大于1厘米空隙"
      }
    },
    {
      "text": "Place parcel in steamer basket over boiling water. Cover and steam on medium heat for 30 minutes—steam must penetrate leaf, not just cook outside.",
      "textZh": "将荷叶包置于蒸笼中，沸水上中火蒸30分钟——须确保蒸汽渗入叶内，而非仅加热外层。",
      "zhHint": "上锅蒸制",
      "stateNote": {
        "visual": "Leaf darkens slightly at edges; faint green aroma rises steadily",
        "visualZh": "叶缘微深，淡雅青香持续升腾",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "medium",
        "signal": "Leaf surface develops fine, even condensation—not pooling",
        "signalZh": "叶面凝结细密均匀水珠，不聚成滴"
      }
    },
    {
      "text": "Carefully unwrap parcel at table—steam will release dramatically. Transfer chicken to plate, pour accumulated juices over top, and serve with steamed rice.",
      "textZh": "餐桌上小心掀开荷叶包——热气将瞬间涌出。将鸡肉移至盘中，淋入盘底积聚的原汁，配米饭同食。",
      "zhHint": "揭叶上桌",
      "stateNote": {
        "visual": "Steam billows upward in a single, fragrant cloud; chicken glistens with glossy, amber juice",
        "visualZh": "热气如云升腾，清香四溢；鸡肉泛琥珀光泽，汁水丰盈",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "First breath reveals layered scent: lotus, scallion, and deep chicken umami",
        "signalZh": "初闻即分三层香：荷香、葱香、醇厚鸡鲜"
      }
    }
  ],
  "tips": [
    "Never use aluminum foil or plastic wrap under the leaf—it blocks aroma transfer and traps moisture.",
    "If using frozen fresh lotus leaf, blanch 1 minute in boiling water with 1 tsp salt to remove grassiness.",
    "Leftover lotus leaf water makes excellent poaching liquid for tofu or fish."
  ],
  "tipsZh": [
    "荷叶下切勿垫锡纸或保鲜膜——会阻隔香气传递并积聚水汽。",
    "若用冷冻鲜荷叶，须用1茶匙盐沸水焯烫1分钟，以去青涩味。",
    "剩余荷叶泡水是绝佳豆腐或鱼肉焯煮液。"
  ],
  "relatedSlugs": [
    "cordyceps-flowers-steamed-chicken",
    "winter-mushroom-steamed-chicken"
  ],
  "image": "/images/recipes/lotus-leaf-steamed-chicken.webp"
};
