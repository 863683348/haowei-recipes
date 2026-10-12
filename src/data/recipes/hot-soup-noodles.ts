import type { Recipe } from "@/lib/types";

/** Hot Soup Noodles (热汤面) — Day batch */
export const hot_soup_noodles: Recipe = {
  "id": "hot-soup-noodles",
  "slug": "hot-soup-noodles",
  "titleEn": "Hot Soup Noodles",
  "titleZh": "热汤面",
  "pinyin": "rè tāng miàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "The family version builds the broth in the same pot in five minutes from scallion, ginger and soy sauce. A northern noodle shop keeps a pork-or-chicken bone stock at a rolling simmer all day, so the shop bowl tastes rounder but takes eight hours you do not have on a weeknight.",
  "versionNoteZh": "家常版用葱、姜、酱油在同一口锅里五分钟现吊汤；北方面馆则是猪骨或鸡骨汤全天滚着，所以店里那碗更醇厚，但要熬一整天——工作日晚上显然不现实。",
  "tags": [
    "20-min",
    "noodles",
    "soup",
    "beginner",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "Re tang mian is what northern Chinese families actually eat at night — not the famous regional noodles with a name and a history, just a bowl of hot broth with noodles in it. The trick is 'qiang guo': blooming scallion and ginger in a little hot oil until they smell nutty, then hitting the pan with liquid so the aroma goes into the soup instead of staying in the oil. Add greens and an egg and it is dinner in the time the water takes to boil.",
  "storyZh": "热汤面是北方家庭真正会在晚上吃的东西——不是那些有名有姓的地方名面，就是一碗热汤里煮着面条。诀窍在『炝锅』：葱姜用热油爆香到出坚果味，再下液体，让香气冲进汤里而不是留在油里。加把青菜、卧个蛋，水开的时间里这顿饭就好了。",
  "ingredients": [
    {
      "id": "htm-01",
      "nameEn": "fresh thin wheat noodles",
      "nameZh": "细鲜面条",
      "pinyin": "xì xiān miàn tiáo",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "staple",
      "pantry": "asian",
      "note": "From the chilled case; dried thin noodles or even spaghetti work in a pinch",
      "noteZh": "冷藏柜的细面；没有的话干细面甚至意面也能顶上"
    },
    {
      "id": "htm-02",
      "nameEn": "baby bok choy, halved lengthwise",
      "nameZh": "小白菜，纵向剖半",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "150 g",
      "amountUS": "3–4 heads",
      "category": "produce",
      "pantry": "asian",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "htm-03",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "100 g",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "note": "One goes into the broth as a poached egg, or whisk both in for egg ribbons",
      "noteZh": "一个直接卧进汤里做荷包蛋，或两个都打散淋成蛋花",
      "termKey": "egg"
    },
    {
      "id": "htm-04",
      "nameEn": "scallion, white and green parts separated",
      "nameZh": "小葱，葱白葱绿分开",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "htm-05",
      "nameEn": "fresh ginger, thinly sliced",
      "nameZh": "鲜姜，切薄片",
      "pinyin": "jiāng piàn",
      "amountMetric": "10 g",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "htm-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "This is the seasoning, not a garnish — the broth is only as good as the soy you use",
      "noteZh": "这是调味主体不是点缀——汤好不好喝全看你用什么酱油",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "htm-07",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "htm-08",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "htm-09",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "htm-10",
      "nameEn": "hot water or light chicken stock",
      "nameZh": "热水或清鸡汤",
      "pinyin": "rè shuǐ",
      "amountMetric": "1 L",
      "amountUS": "4¼ cups",
      "category": "other",
      "pantry": "local",
      "note": "Hot, not cold — it keeps the pan temperature up and the aroma blooming",
      "noteZh": "要热不要冷——能保住锅温，让香气继续释放"
    }
  ],
  "steps": [
    {
      "text": "Heat the neutral oil in a wok or saucepan over medium heat. Add the scallion whites and ginger and fry for 60–90 seconds.",
      "textZh": "炒锅或汤锅中火下食用油，放葱白与姜片爆香60–90秒。",
      "zhHint": "葱姜炝锅",
      "stateNote": {
        "visual": "Scallion whites turn translucent at the edges and the ginger slices look dry and slightly curled; the oil shimmers and smells nutty",
        "visualZh": "葱白边缘转半透明，姜片发干微卷；油面泛光并透出坚果香",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium",
        "signal": "You can smell the scallion from arm's length and the ginger no longer smells raw",
        "signalZh": "一臂之外就能闻到葱香，姜味不再生涩"
      },
      "tip": "Do not let the ginger brown. Burnt ginger turns the broth bitter and there is no fixing it.",
      "tipZh": "姜别烧焦。焦姜会让汤发苦，无法补救。"
    },
    {
      "text": "Pour in the light soy sauce around the edge of the pan and let it sizzle for 10 seconds, then add the hot water or stock all at once.",
      "textZh": "沿锅边淋入生抽，滋啦响10秒，随后一次性倒入热水或鸡汤。",
      "zhHint": "烹酱油冲汤",
      "stateNote": {
        "visual": "The soy sauce bubbles up against the hot pan wall and the liquid turns from dark streaks to an even light tan",
        "visualZh": "酱油在热锅壁上冒起，汤色由深条纹转为均匀的浅褐色",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "A sharp toasty-soy aroma rises and the surface breaks into a rolling boil within a minute",
        "signalZh": "冲出一股焦香酱油味，一分钟内汤面滚沸"
      }
    },
    {
      "text": "Bring to a boil over high heat and season with white pepper. Taste — it should be clearly savoury, slightly salty on its own, because the noodles will absorb salt.",
      "textZh": "大火烧沸，撒白胡椒调味。尝一下——空口喝要偏咸，因为面条会吸盐。",
      "zhHint": "调味偏咸一点",
      "stateNote": {
        "visual": "Broth is clear light tan with a few ginger slices floating; steam smells of soy and pepper",
        "visualZh": "汤色清亮浅褐，漂着几片姜；蒸汽带酱油与胡椒香",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Bubbles break continuously across the whole surface, not just at the edges",
        "signalZh": "整个汤面持续冒泡，不只是锅边"
      }
    },
    {
      "text": "Add the fresh noodles and cook, stirring once so they do not stick, until almost tender.",
      "textZh": "下鲜面条煮至将熟，中途拨动一次防粘。",
      "zhHint": "下面条",
      "stateNote": {
        "visual": "Noodles have swollen and turned from opaque cream to pale translucent; the broth has thickened slightly from their starch",
        "visualZh": "面条胀起，由不透明乳白转为半透明；汤因淀粉略变稠",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "high",
        "signal": "A noodle pulled out and cooled briefly bends without snapping and has no dry white core",
        "signalZh": "挑出一根稍凉后能弯而不断，中心无白芯"
      }
    },
    {
      "text": "Add the bok choy and crack in the eggs. Cook 90 seconds for a soft-poached egg, or whisk the eggs first and drizzle them in for ribbons.",
      "textZh": "下小白菜，磕入鸡蛋。煮90秒得溏心荷包蛋；或先打散蛋液淋入成蛋花。",
      "zhHint": "青菜卧蛋",
      "stateNote": {
        "visual": "Bok choy stems turn bright jade and the leaves wilt dark; egg white is set and opaque while the yolk still wobbles",
        "visualZh": "白菜帮转翠绿、叶色变深；蛋白凝固发白，蛋黄仍在颤动",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium",
        "signal": "The bok choy stem gives way easily when pressed with a chopstick",
        "signalZh": "筷子轻压白菜帮即软"
      }
    },
    {
      "text": "Turn off the heat, stir in the sesame oil, and scatter the scallion greens over the top. Ladle into deep bowls, noodles first, then broth.",
      "textZh": "关火，淋香油，撒葱绿。盛入深碗：先捞面，再浇汤。",
      "zhHint": "淋香油撒葱花",
      "stateNote": {
        "visual": "Clear tan broth, pale noodles, jade greens and a glossy golden yolk; small beads of sesame oil float on the surface",
        "visualZh": "清亮浅褐的汤中卧着浅色面条、翠绿青菜与油亮蛋黄，汤面浮着点点香油",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "The pepper and sesame aroma hits you as the bowl comes up to your face",
        "signalZh": "碗端到面前时，胡椒与香油味先冲上来"
      }
    }
  ],
  "tips": [
    "Bloom the scallion and ginger in oil before adding liquid. If you just boil them in water you get a flat, watery broth.",
    "Season the broth saltier than you think you want. Noodles are unsalted and will drink a surprising amount of seasoning.",
    "Use hot water, not cold. Cold water drops the pan temperature and kills the aroma you just built."
  ],
  "tipsZh": [
    "葱姜一定要先用油爆香再加水。直接水煮只能得到寡淡的清汤。",
    "汤要调得比你以为的更咸一点。面条本身无盐，会吸走大量咸味。",
    "用热水不要用冷水。冷水会让锅温骤降，刚爆出来的香气就没了。"
  ],
  "relatedSlugs": [
    "chicken-broth-noodle-soup",
    "yangchun-noodles"
  ],
  "image": "/images/recipes/chicken-broth-noodle-soup.webp"
};
