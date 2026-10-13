import type { Recipe } from "@/lib/types";

/** Salted Egg & Pork Patty Clay Pot Rice (咸蛋肉饼煲仔饭) — Day batch */
export const salted_egg_pork_patty_claypot_rice: Recipe = {
  "id": "salted-egg-pork-patty-claypot-rice",
  "slug": "salted-egg-pork-patty-claypot-rice",
  "titleEn": "Salted Egg & Pork Patty Clay Pot Rice",
  "titleZh": "咸蛋肉饼煲仔饭",
  "pinyin": "xián dàn ròu bǐng bāo zǎi fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 60,
  "servings": 2,
  "version": "family",
  "versionNote": "Home versions steam the pork patty on top of the rice in one covered pot. Cantonese clay pot shops hand-chop the pork with a cleaver instead of using ground meat, so the patty stays springy with visible flecks of fat, and they crack the raw salted egg right over the rice so the yolk runs down into the grains.",
  "versionNoteZh": "家常版把肉饼铺在饭面上一锅焖熟；粤式煲仔饭店是拿刀手工剁肉而不是用绞肉，肉饼才弹牙并看得见肥肉粒，而且生咸蛋直接磕在饭上，让蛋黄流下去浸到米粒里。",
  "tags": [
    "60-min",
    "claypot",
    "cantonese",
    "pork",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "咸蛋肉饼饭 is the Cantonese home-cooking answer to a dinner that needs no side dishes. The pork patty seasons the rice as it steams, and the salted egg does the rest — one raw yolk cracked on top turns into a rich, sandy sauce that you stir through everything at the table. Every Hong Kong household has its own rule about whether the egg goes in raw or pre-cooked.",
  "storyZh": "咸蛋肉饼饭是广东人家「不用另做菜」的一锅晚饭答案。肉饼在蒸的过程中给米饭调味，咸蛋负责剩下的一切——磕在上面的生蛋黄会化成浓郁起沙的酱汁，上桌时拌进每一粒饭里。每家香港人对于咸蛋到底该生磕还是先煮都有各自的规矩。",
  "ingredients": [
    {
      "id": "sep-01",
      "nameEn": "jasmine rice, rinsed",
      "nameZh": "茉莉香米，淘洗",
      "pinyin": "xiāng mǐ",
      "amountMetric": "220 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinse until the water runs clear, then drain well",
      "noteZh": "淘到水清后彻底沥干"
    },
    {
      "id": "sep-02",
      "nameEn": "ground pork, 20% fat",
      "nameZh": "猪肉糜，二成肥",
      "pinyin": "zhū ròu mí",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Lean pork makes a dry patty; ask for shoulder or hand-chop pork shoulder yourself",
      "noteZh": "瘦肉会让肉饼发柴；用猪肩肉，或自己手剁肩肉",
      "termKey": "pork-mince"
    },
    {
      "id": "sep-03",
      "nameEn": "salted duck eggs, raw",
      "nameZh": "生咸鸭蛋",
      "pinyin": "xián yā dàn",
      "amountMetric": "2 eggs",
      "amountUS": "2 eggs",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Raw salted eggs sold in the Asian grocery refrigerated case, not the cooked vacuum-packed kind",
      "noteZh": "买亚洲超市冷藏柜里的生咸蛋，不是真空包装的熟咸蛋",
      "termKey": "salted-egg-yolk"
    },
    {
      "id": "sep-04",
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
      "id": "sep-05",
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
      "id": "sep-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Binds the patty so it does not crumble when you spoon it out",
      "noteZh": "让肉饼成型，勺子舀起来不散",
      "termKey": "cornstarch"
    },
    {
      "id": "sep-07",
      "nameEn": "fresh ginger, finely shredded",
      "nameZh": "鲜姜，切细丝",
      "pinyin": "jiāng sī",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sep-08",
      "nameEn": "scallion, sliced",
      "nameZh": "小葱，切葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sep-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sep-10",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Some goes in the pork, some films the pot for the crust",
      "noteZh": "一半拌进肉里，一半给锅上油膜做锅巴"
    }
  ],
  "steps": [
    {
      "text": "Rinse the rice until the water runs clear, then leave it to drain in a sieve for 10 minutes while you mix the patty.",
      "textZh": "香米淘至水清，放筛网里沥10分钟，这段时间来拌肉饼。",
      "zhHint": "淘米沥水",
      "stateNote": {
        "visual": "Grains look chalky-white and matte rather than translucent; no cloudy water drips from the sieve",
        "visualZh": "米粒呈哑光的白垩色而不再半透明；筛网滴下的水不再浑浊",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Shaking the sieve produces no milky liquid",
        "signalZh": "晃动筛网不再有乳白色液体滴出"
      }
    },
    {
      "text": "Mix the pork with light soy, oyster sauce, white pepper, cornstarch, half the ginger and 1 tbsp of the oil. Stir in one direction for 2 minutes, then slap it against the bowl 8–10 times.",
      "textZh": "猪肉加生抽、蚝油、白胡椒粉、淀粉、一半姜丝和1汤匙油，顺一个方向搅2分钟，再抓起摔打8–10次。",
      "zhHint": "单向搅打上劲",
      "stateNote": {
        "visual": "The mixture turns sticky and pale, pulls away from the bowl in one mass, and holds a peak when you lift the spoon",
        "visualZh": "肉馅变得发黏、颜色转浅，整团能脱离碗壁，提起勺子能立尖",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "The paste makes a soft slapping sound and no longer separates when pressed",
        "signalZh": "摔打时有柔和的啪啪声，按压后不再散开"
      },
      "tip": "Slapping is not theatre. It aligns the protein strands so the patty bounces instead of crumbling.",
      "tipZh": "摔打不是花架子。它能让蛋白纤维排列整齐，肉饼才会弹而不散。"
    },
    {
      "text": "Tip the drained rice into the clay pot with 300 ml (1¼ cups) water and 1 tsp oil. Bring to a boil over medium heat, stirring once to stop the grains sticking.",
      "textZh": "沥干的米倒入砂锅，加300毫升水与1茶匙油。中火烧沸，搅一次防止粘底。",
      "zhHint": "砂锅下米加水",
      "stateNote": {
        "visual": "Water is milky and boiling across the whole surface, not just at the rim",
        "visualZh": "水色乳白，整个锅面都在沸腾，不只是锅边",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "Bubbles break through the middle of the pot continuously",
        "signalZh": "锅中央持续有气泡冒出破裂"
      }
    },
    {
      "text": "Flatten the pork into a 2 cm-thick disc that fits inside the pot, lay it on the rice, and crack the two salted eggs on top. Cover and drop to the lowest heat. Cook 18 minutes.",
      "textZh": "把肉压成约2厘米厚、能放进锅里的圆饼，铺在饭面上，两个咸蛋直接磕在上面。加盖转最小火，煮18分钟。",
      "zhHint": "铺肉饼磕咸蛋",
      "stateNote": {
        "visual": "Steam pushes steadily from under the lid; the raw yolks have Set to a dull orange dome and the patty has firmed and shrunk slightly",
        "visualZh": "蒸汽从盖边稳定冒出；生蛋黄凝成暗橙色的半球，肉饼定型并略微收缩",
        "timeRef": "18 minutes",
        "timeRefZh": "18 分钟",
        "heat": "low",
        "signal": "No watery liquid pools around the patty edge and the water line has dropped below the rice surface",
        "signalZh": "肉饼边缘没有积水，水位已降到饭面以下"
      },
      "tip": "Press a shallow well into the centre of the patty before cracking the eggs — it keeps the yolks from sliding off.",
      "tipZh": "磕蛋前先在肉饼中间按个小坑——蛋黄就不会滑落。"
    },
    {
      "text": "Without lifting the lid, raise the heat to medium-low and cook 8–10 minutes until you catch a faint toasty smell.",
      "textZh": "不要开盖，转中小火再煮8–10分钟，直到闻到淡淡焦香。",
      "zhHint": "小火逼锅巴",
      "stateNote": {
        "visual": "Steam thins to wisps and the aroma shifts from clean rice to something nutty and slightly smoky",
        "visualZh": "蒸汽变稀薄，气味从清米香转为坚果与微烟熏味",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "A faint dry crackle comes from the bottom of the pot",
        "signalZh": "锅底传来轻微的干裂爆声"
      }
    },
    {
      "text": "Off the heat, rest 5 minutes covered. Open, scatter the remaining ginger and the scallion, then break the yolks and fold everything together from the bottom up.",
      "textZh": "离火加盖静置5分钟。开盖撒上余下的姜丝与葱花，把蛋黄戳破，从锅底往上把整锅拌匀。",
      "zhHint": "静置拌饭",
      "stateNote": {
        "visual": "Grains are glossy amber and coated in sandy yolk; scraping the bottom lifts a golden sheet of crust",
        "visualZh": "米粒油亮琥珀色、裹着起沙的蛋黄；刮开锅底能掀起整片金黄锅巴",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "The spoon meets resistance at the base and comes up with a rigid, crisp layer rather than loose grains",
        "signalZh": "勺子在底部感受到阻力，翻上来是硬挺脆片而不是散粒"
      }
    }
  ],
  "tips": [
    "Salt adjust last: the salted egg seasons the whole pot, so taste after folding, never before.",
    "20% fat pork is non-negotiable — lean mince steams into a dry, crumbly puck.",
    "If you only have the cooked vacuum-packed salted eggs, halve them and lay them cut-side down for the last 6 minutes."
  ],
  "tipsZh": [
    "最后再调咸淡：咸蛋会给整锅调味，一定拌匀后再尝，别提前加盐。",
    "二成肥的猪肉不能妥协——纯瘦肉蒸出来会又干又散。",
    "如果只有真空包装的熟咸蛋，就剖半、切面朝下，在最后6分钟放进去。"
  ],
  "relatedSlugs": [
    "clay-pot-rice",
    "spare-rib-claypot-rice"
  ],
  "image": "/images/recipes/clay-pot-rice.webp"
};
