import type { Recipe } from "@/lib/types";

/** Black Pepper Grilled Steak (黑椒烤牛排) — Seed batch */
export const black_pepper_grilled_steak: Recipe = {
  "id": "hei-jiao-kao-niu-pai",
  "slug": "black-pepper-grilled-steak",
  "titleEn": "Black Pepper Grilled Steak",
  "titleZh": "黑椒烤牛排",
  "pinyin": "hēi jiāo kǎo niú pái",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses affordable flank steak, quick pan-sear + grill finish, and freshly cracked black pepper — no fancy cuts or sous-vide.",
  "versionNoteZh": "家庭版选用平价牛 flank 牛肉，先煎后烤，现磨黑胡椒提香，无需高级部位或真空低温设备。",
  "tags": [
    "30-min",
    "date-night",
    "family-bbq"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Haidian cooked this every National Day weekend — he’d crack whole Sichuan peppercorns *and* black peppercorns together in his old mortar, saying ‘two peppers make one courage’ before lighting the charcoal.",
  "storyZh": "我海淀的叔叔每逢国庆假期必做这道菜——他总把花椒和黑胡椒一起放进旧石臼里现舂，说‘双椒合鸣，勇气倍增’，然后才点起炭火。",
  "ingredients": [
    {
      "id": "bs-01",
      "nameEn": "flank steak",
      "nameZh": "牛腩排（或牛肩肉）",
      "pinyin": "niú nǎn pái",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for flank steak cut 1.5 cm thick; if unavailable, use top blade steak.",
      "noteZh": "请肉贩切1.5厘米厚牛腩排；若无，可用板腱牛排替代。"
    },
    {
      "id": "bs-02",
      "nameEn": "black peppercorns (whole)",
      "nameZh": "黑胡椒粒（整粒）",
      "pinyin": "hēi hú jiāo lì",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "local",
      "note": "Must be whole — pre-ground loses aroma too fast. Use a mortar or pepper mill.",
      "noteZh": "必须用整粒——现磨才够辛香；用石臼或研磨器现压。"
    },
    {
      "id": "bs-03",
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
      "id": "bs-04",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Pat steak dry. Score both sides diagonally with shallow 1-cm cuts — helps tenderize and absorb marinade.",
      "textZh": "牛排擦干，两面斜向浅切1厘米刀口（十字花），助嫩并吸味。",
      "zhHint": "浅切不深割"
    },
    {
      "text": "In a mortar, crush black peppercorns until coarsely ground (not powder). Transfer to a small bowl.",
      "textZh": "用石臼将黑胡椒粒粗略压碎（非细粉），倒入小碗。",
      "zhHint": "粗粒才够香"
    },
    {
      "text": "Mix crushed pepper, light soy sauce, and sesame oil. Rub mixture all over steak. Marinate 15 minutes at room temperature.",
      "textZh": "混合黑椒、生抽、芝麻油，均匀涂抹牛排，室温腌15分钟。",
      "zhHint": "室温腌更透"
    },
    {
      "text": "Heat grill to medium-high (200°C / 390°F). Grill steak 4–5 minutes per side for medium-rare, pressing lightly with tongs to check springiness.",
      "textZh": "烤架烧至中高火（200°C / 390°F），每面烤4–5分钟至五分熟，用夹子轻按测弹力。",
      "zhHint": "中高火锁汁"
    },
    {
      "text": "Rest steak on a warm plate, loosely covered, for 8 minutes before slicing thinly against the grain.",
      "textZh": "牛排放在温盘上，松盖静置8分钟，再逆纹切成薄片。",
      "zhHint": "静置保肉汁",
      "stateNote": {
        "visual": "Juices pool slightly at the surface but don’t run clear when sliced.",
        "visualZh": "切开时表面微渗汁水，但无清水状渗出。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Internal temp holds at 55–60°C (130–140°F).",
        "signalZh": "中心温度稳定在55–60°C（130–140°F）。"
      }
    }
  ],
  "tips": [
    "Never skip resting — it redistributes juices and prevents dryness.",
    "Slice *against* the grain: look for parallel muscle fibers and cut perpendicular to them.",
    "Pair with grilled scallions and a splash of Chinese black vinegar on the side."
  ],
  "tipsZh": [
    "静置不可省——让肉汁回流，避免切开即干。",
    "逆纹切：看清肌理走向，垂直下刀。",
    "配烤小葱，佐一小勺中国陈醋同食。"
  ],
  "relatedSlugs": [
    "honey-glazed-grilled-chicken-wings"
  ],
  "image": "/images/recipes/black-pepper-grilled-steak.webp"
};
