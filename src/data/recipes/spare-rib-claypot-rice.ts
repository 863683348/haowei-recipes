import type { Recipe } from "@/lib/types";

/** Spare Rib Clay Pot Rice (排骨煲仔饭) — Day batch */
export const spare_rib_claypot_rice: Recipe = {
  "id": "spare-rib-claypot-rice",
  "slug": "spare-rib-claypot-rice",
  "titleEn": "Spare Rib Clay Pot Rice",
  "titleZh": "排骨煲仔饭",
  "pinyin": "pái gǔ bāo zǎi fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 2,
  "version": "family",
  "versionNote": "At home the rice is cooked in a heavy pot or a rice cooker and finished under the broiler to fake the crust. A Cantonese clay pot shop cooks it over charcoal in individual pots, rotating them so the crust forms evenly all round, and the soccarat comes out in one sheet you can lift with a spoon.",
  "versionNoteZh": "家常版用厚底锅或电饭煲煮饭，最后用烤箱上火逼出锅巴；粤式煲仔饭店是一人一煲在炭火上转着烤，让锅巴均匀结成一层，能用勺子整片掀起来。",
  "tags": [
    "55-min",
    "claypot",
    "pork-ribs",
    "cantonese",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "The whole point of clay pot rice is the bottom. Rice cooked in a clay pot over direct heat forms a golden, faintly smoky crust that you scrape up with the edge of a spoon, and the broth from the marinated ribs drips down through the grains on the way. In Guangzhou people order it by the pot, one per person, and eat it straight from the clay with the lid off.",
  "storyZh": "煲仔饭的重点全在锅底。米饭在砂锅里直接受热，会结出一层金黄、微带烟熏的锅巴，用勺子边沿刮着吃；腌排骨的汁水在下渗的过程中浸透每一粒米。广州人是一人一煲点，开盖后直接就着砂锅吃。",
  "ingredients": [
    {
      "id": "src-01",
      "nameEn": "jasmine rice, rinsed",
      "nameZh": "茉莉香米，淘洗",
      "pinyin": "xiāng mǐ",
      "amountMetric": "220 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinse until the water runs clear, then drain well",
      "noteZh": "淘到水清，然后彻底沥干"
    },
    {
      "id": "src-02",
      "nameEn": "pork ribs, cut into 4 cm pieces",
      "nameZh": "猪排骨，斩4厘米块",
      "pinyin": "pái gǔ",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Ask the butcher to chop across the bone; small pieces cook in the time the rice takes",
      "noteZh": "请肉铺横骨斩小块；小块才能在煮饭的时间里熟透",
      "termKey": "pork-ribs"
    },
    {
      "id": "src-03",
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
      "id": "src-04",
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
      "id": "src-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Gives the ribs their mahogany colour",
      "noteZh": "让排骨带上红木色",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "src-06",
      "nameEn": "shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "src-07",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Thin coating that keeps the ribs from drying while the rice cooks",
      "noteZh": "薄薄一层，煮饭过程中保住排骨水分",
      "termKey": "cornstarch"
    },
    {
      "id": "src-08",
      "nameEn": "fresh ginger, shredded",
      "nameZh": "鲜姜，切丝",
      "pinyin": "jiāng sī",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "src-09",
      "nameEn": "scallion, cut into lengths",
      "nameZh": "小葱，切段",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "src-10",
      "nameEn": "baby bok choy, halved",
      "nameZh": "小白菜，剖半",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "120 g",
      "amountUS": "2–3 heads",
      "category": "produce",
      "pantry": "asian",
      "note": "Blanched separately and added at the table",
      "noteZh": "另锅焯水，上桌时才放",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "src-11",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "src-12",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "A film of oil in the pot is what makes the crust",
      "noteZh": "锅里一层油膜是锅巴形成的关键"
    }
  ],
  "steps": [
    {
      "text": "Toss the ribs with oyster sauce, light soy, dark soy, shaoxing wine, sugar, cornstarch and half the ginger. Marinate 20 minutes at room temperature.",
      "textZh": "排骨加蚝油、生抽、老抽、黄酒、白糖、淀粉与一半姜丝抓匀，室温腌20分钟。",
      "zhHint": "排骨腌制",
      "stateNote": {
        "visual": "Ribs are evenly coated in a glossy dark brown film; the marinade clings instead of running off",
        "visualZh": "排骨均匀裹着油亮的深褐酱膜；腌料挂得住不往下流",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low",
        "signal": "No thin watery liquid collects at the bottom of the bowl",
        "signalZh": "碗底没有稀薄的积液"
      },
      "tip": "Twenty minutes is enough and overnight is too much — the salt draws out too much water and the ribs turn dry.",
      "tipZh": "20分钟就够，腌过夜反而太多——盐会把水分抽干，排骨会柴。"
    },
    {
      "text": "Rinse the rice until the water runs clear. Put it in the clay pot with 300 ml (1¼ cups) water and 1 tbsp oil, and bring to a boil over medium heat, stirring once.",
      "textZh": "香米淘至水清，放入砂锅，加300毫升水与1汤匙油，中火烧沸，搅动一次。",
      "zhHint": "砂锅下米加水",
      "stateNote": {
        "visual": "The water is milky and bubbling around the edges, and the grains are moving sluggishly",
        "visualZh": "水色乳白，边缘冒泡，米粒缓慢翻动",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "Bubbles break through the surface across the whole pot, not just at the rim",
        "signalZh": "整个锅面都有气泡冒出，不只是锅边"
      }
    },
    {
      "text": "Lay the marinated ribs on top of the rice in a single layer with the remaining ginger. Cover and drop to the lowest heat. Cook 15 minutes.",
      "textZh": "腌好的排骨连余下姜丝单层铺在饭面上。加盖转最小火，煮15分钟。",
      "zhHint": "铺排骨小火焖",
      "stateNote": {
        "visual": "Steam pushes steadily from under the lid and the ribs have started to darken and shrink slightly",
        "visualZh": "蒸汽从盖边稳定冒出，排骨开始变深并略微收缩",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "The water level has dropped below the rice surface and the pot smells of soy and ginger",
        "signalZh": "水位已降到饭面以下，锅里飘出酱油与姜香"
      }
    },
    {
      "text": "Do not lift the lid. Raise the heat slightly to medium-low and cook 8–10 minutes more, until you smell a faint toasty aroma.",
      "textZh": "不要开盖。略升至中小火再煮8–10分钟，直到闻到淡淡焦香。",
      "zhHint": "逼出锅巴",
      "stateNote": {
        "visual": "Steam has thinned to wisps and the aroma has changed from clean rice to something toasty and slightly nutty",
        "visualZh": "蒸汽变稀薄，气味从清米香转为微焦的坚果香",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "You can hear a faint crackle from the bottom of the pot — that is the crust forming",
        "signalZh": "能听到锅底传来轻微爆裂声——那就是锅巴在形成"
      },
      "tip": "The nose knows. Faint toasty smell means crust; a sharp burnt smell means you went 2 minutes too far.",
      "tipZh": "靠鼻子判断。淡淡焦香是锅巴，刺鼻焦味就是多煮了两分钟。"
    },
    {
      "text": "While the rice finishes, blanch the bok choy in salted boiling water for 60 seconds and drain.",
      "textZh": "米饭收尾时，小白菜下盐水锅焯60秒，捞出沥干。",
      "zhHint": "青菜焯水",
      "stateNote": {
        "visual": "Stems are bright jade and still have some snap; the leaves are deep green and wilted",
        "visualZh": "菜帮鲜翠仍带脆感；菜叶深绿塌软",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "A stem bends before it snaps, and the colour is vivid rather than dull olive",
        "signalZh": "菜帮能弯而不断，颜色鲜亮而非暗橄榄"
      }
    },
    {
      "text": "Take the pot off the heat and rest 5 minutes covered. Then open, arrange the bok choy on top, scatter scallion, and serve with extra soy sauce at the table.",
      "textZh": "离火加盖静置5分钟。开盖码上小白菜，撒葱段，配额外生抽上桌。",
      "zhHint": "静置开盖码菜",
      "stateNote": {
        "visual": "Rice is glossy tan with mahogany ribs on top, jade greens beside them, and a golden crust visible where you scrape the bottom",
        "visualZh": "米饭油亮浅褐，上面是红木色排骨，旁边翠绿青菜；刮开锅底可见金色锅巴",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "A spoon scraped along the bottom lifts a sheet of crisp golden rice rather than loose grains",
        "signalZh": "勺子刮过锅底能掀起整片金黄锅巴，而不是散粒"
      }
    }
  ],
  "tips": [
    "Oil in the pot before the rice goes in. It is the difference between a crust and a stuck, burnt layer.",
    "Resist lifting the lid during the last 10 minutes. Every look costs you the steam that cooks the ribs.",
    "Rest it 5 minutes off the heat before opening — the crust releases from the pot wall during that time."
  ],
  "tipsZh": [
    "下米前先在锅里放油。这是『锅巴』和『糊底』的区别。",
    "最后10分钟千万别开盖。每看一次都在放走蒸熟排骨的蒸汽。",
    "离火后静置5分钟再开盖——这段时间里锅巴会自己脱离锅壁。"
  ],
  "relatedSlugs": [
    "clay-pot-rice",
    "red-braised-pork-ribs"
  ],
  "image": "/images/recipes/clay-pot-rice.webp"
};
