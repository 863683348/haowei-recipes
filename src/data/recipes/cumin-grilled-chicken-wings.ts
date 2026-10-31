import type { Recipe } from "@/lib/types";

/** Cumin Grilled Chicken Wings (Zīrán Kǎochì) (孜然烤翅) — Day batch */
export const cumin_grilled_chicken_wings: Recipe = {
  "id": "zi-ran-kao-chi",
  "slug": "cumin-grilled-chicken-wings",
  "titleEn": "Cumin Grilled Chicken Wings (Zīrán Kǎochì)",
  "titleZh": "孜然烤翅",
  "pinyin": "zī rán kǎo chì",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Xinjiang",
  "regionZh": "新疆",
  "difficulty": "easy",
  "timeMin": 50,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses whole cumin seeds toasted and crushed, plus a short soy-and-wine marinade, finished in a home oven — the Xinjiang street version uses a heavier hand with cumin, skewers the wings over charcoal, and often adds a lamb-fat baste that is hard to source outside China.",
  "versionNoteZh": "家庭版用整粒孜然焙香舂碎，配短时的酱油黄酒腌料，家用烤箱完成；新疆街头版孜然用量更猛，把鸡翅穿签炭烤，还常刷羊油（海外不易得）。",
  "tags": [
    "50-min",
    "grill",
    "chicken",
    "cumin",
    "xinjiang"
  ],
  "dietary": [
    "none"
  ],
  "story": "Xinjiang barbecue treats cumin the way Sichuan treats chili — not as a seasoning but as the main event. A Uyghur grill man in Ürümqi once handed me a wing straight off the coals and said only one word, 'zīrán', as if that explained everything. It did.",
  "storyZh": "新疆烧烤对待孜然，就像四川对待辣椒——不是调味料，而是主角。乌鲁木齐一位维吾尔族烤肉师傅从炭上取下一只鸡翅递给我，只说了一个词：'孜然'，仿佛这就解释了一切。确实如此。",
  "ingredients": [
    {
      "id": "zr-01",
      "nameEn": "chicken wing mid-joints (or whole wings)",
      "nameZh": "鸡翅中（或整只鸡翅）",
      "pinyin": "jī chì zhōng",
      "amountMetric": "700 g",
      "amountUS": "1.5 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Mid-joints cook most evenly. If using whole wings, tuck the tips under so they do not burn.",
      "noteZh": "翅中受热最均匀。用整翅的话把翅尖折到下面，免得烤焦。"
    },
    {
      "id": "zr-02",
      "nameEn": "cumin seeds",
      "nameZh": "孜然粒",
      "pinyin": "zī rán lì",
      "amountMetric": "10 g",
      "amountUS": "1.5 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin",
      "note": "Whole seeds, toasted and crushed, are far more aromatic than pre-ground powder. Sub: 2 tsp ground cumin, added at the end.",
      "noteZh": "整粒孜然焙香舂碎远比现成孜然粉香。替代：2茶匙孜然粉，最后再加入。"
    },
    {
      "id": "zr-03",
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
      "id": "zr-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "zr-05",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜（切末）",
      "pinyin": "dà suàn",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "zr-06",
      "nameEn": "fresh ginger, grated",
      "nameZh": "生姜（磨末）",
      "pinyin": "shēng jiāng",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "zr-07",
      "nameEn": "chili flakes",
      "nameZh": "辣椒面",
      "pinyin": "là jiāo miàn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "zr-08",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "4 g",
      "amountUS": "3/4 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "zr-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油（芝麻油）",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Pat the wings completely dry with paper towels, then make two shallow cuts through the skin on the fleshier side of each piece, down to but not into the meat.",
      "textZh": "用厨纸把鸡翅彻底擦干，在肉厚的那一面斜划两道浅口，划破鸡皮但不要切到肉。",
      "zhHint": "擦干后划两道浅口",
      "stateNote": {
        "visual": "Skin looks matte and dry; cuts show pale fat beneath but no raw meat gaping open",
        "visualZh": "表皮哑光干爽；刀口下可见浅色脂肪，但没有生肉外翻",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Pressing the skin with a towel leaves no moisture behind",
        "signalZh": "厨纸按压表皮后不留水渍"
      },
      "tip": "Dry skin is the difference between crisp and rubbery. Do not skip the towel step.",
      "tipZh": "鸡皮干不干，决定了成品是脆还是韧。擦干这步不能省。"
    },
    {
      "text": "Toast the cumin seeds in a dry skillet over medium-low heat for 2 minutes until fragrant, then crush coarsely in a mortar. Combine with soy sauce, Shaoxing wine, garlic, ginger, salt and sesame oil.",
      "textZh": "孜然粒放入干锅，中小火焙2分钟至出香，取出粗舂碎。与生抽、黄酒、蒜末、姜末、盐和香油混合。",
      "zhHint": "焙香舂碎再调腌料",
      "stateNote": {
        "visual": "Seeds darken one shade and release a warm, earthy aroma; crushed into a coarse rubble",
        "visualZh": "孜然颜色略深，散出温厚的土壤香气；舂成粗颗粒",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "The smell becomes unmistakably cumin within about 90 seconds — remove before it smells dusty",
        "signalZh": "约90秒后孜然香变得极为明显——闻到尘土味之前就要离火"
      },
      "tip": "Toasting cumin is non-negotiable here; raw cumin tastes flat and slightly bitter by comparison.",
      "tipZh": "孜然必须焙香，这一步不能省；生的孜然相比之下又平淡又带苦。"
    },
    {
      "text": "Toss the wings in the marinade and refrigerate for 30 minutes, turning once halfway.",
      "textZh": "鸡翅放入腌料抓匀，冷藏30分钟，中途翻动一次。",
      "zhHint": "抓匀冷藏腌30分钟",
      "stateNote": {
        "visual": "Wings coated evenly in a dark, speckled marinade; cumin seeds visible on the surface",
        "visualZh": "鸡翅均匀裹上深色带颗粒的腌料；表面可见孜然碎粒",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "The marinade smells sharp with cumin and garlic; a little liquid remains but the meat has taken on colour",
        "signalZh": "腌料散出浓郁的孜然蒜香；碗里还剩少许液体，但肉已上色"
      },
      "tip": "Thirty minutes is plenty. Soy-based marinades do not penetrate deeply, so longer only salts the surface.",
      "tipZh": "30分钟足够。酱油腌料渗不深，腌更久只会让表面变咸。"
    },
    {
      "text": "Heat the oven to 200°C / 400°F. Arrange the wings skin-side up on a wire rack over a lined tray, leaving space between them, and roast 25 minutes.",
      "textZh": "烤箱预热至200°C。鸡翅皮面朝上摆在垫纸烤盘的烤网上，彼此留空隙，烤25分钟。",
      "zhHint": "皮面朝上，烤网留空隙",
      "stateNote": {
        "visual": "Skin turns opaque then golden; fat renders and drips onto the tray beneath",
        "visualZh": "鸡皮由半生转为金黄；油脂析出滴到下层烤盘",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "high",
        "signal": "Steady sizzling from the tray and the skin looks taut and slightly blistered",
        "signalZh": "烤盘中持续滋滋作响，鸡皮绷紧并微微起泡"
      },
      "tip": "Space them out. Crowded wings steam each other and the skin never crisps.",
      "tipZh": "要留出间距。挤在一起的鸡翅互相蒸，鸡皮永远脆不了。"
    },
    {
      "text": "Raise the heat to 230°C / 450°F (or switch to broiler) and cook 5 more minutes until the skin is deeply golden and crisp. Toss the hot wings with the chili flakes and serve immediately.",
      "textZh": "升温至230°C（或转上火）再烤5分钟，至鸡皮深金黄酥脆。趁热拌入辣椒面，立即上桌。",
      "zhHint": "升温上色后趁热拌辣椒面",
      "stateNote": {
        "visual": "Deep golden, blistered skin with crisp edges; juices run clear when pierced at the thickest point",
        "visualZh": "鸡皮深金黄起泡、边缘酥脆；最厚处扎下去流出清澈汁水",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Tapping the skin with tongs gives a dry, crisp sound rather than a soft one",
        "signalZh": "用夹子轻敲鸡皮发出干脆声，而不是沉闷的软声"
      },
      "tip": "Add the chili flakes off the heat — direct high heat burns them bitter within a minute.",
      "tipZh": "辣椒面要离火后再拌——直接上火烤，一分钟就焦苦。"
    }
  ],
  "tips": [
    "Baking powder (1 tsp per 500 g wings, no salt) added to the dry rub is the restaurant trick for extra-crisp skin.",
    "For a charcoal-style finish, rest the wings 5 minutes then blast them under the broiler for 90 seconds.",
    "Xinjiang style is generous with cumin — if it looks like too much, it is probably right."
  ],
  "tipsZh": [
    "干料里加泡打粉（每500克鸡翅1茶匙，选无铝无盐型）是餐馆让鸡皮更脆的诀窍。",
    "想要炭烤风味，静置5分钟后再用上火猛烤90秒即可。",
    "新疆做法的孜然就是要放得足——看着嫌多，多半才是对的。"
  ],
  "relatedSlugs": [
    "grilled-chicken-wings",
    "honey-glazed-grilled-chicken-wings",
    "air-fryer-chicken-wings"
  ],
  "image": "/images/recipes/grilled-chicken-wings.webp"
};
