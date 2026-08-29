import type { Recipe } from "@/lib/types";

/** Air Fryer Soy-Ginger Chicken Wings (空气炸锅鸡翅) — Seed batch */
export const air_fryer_chicken_wings: Recipe = {
  "id": "air-fryer-chicken-wings",
  "slug": "air-fryer-chicken-wings",
  "titleEn": "Air Fryer Soy-Ginger Chicken Wings",
  "titleZh": "空气炸锅鸡翅",
  "pinyin": "kōng qì zhá guō jī chì",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses no deep-frying—wings are tossed in soy-ginger marinade, air-fried crisp, then finished with light glaze for sticky-savory balance.",
  "versionNoteZh": "家常版免油炸，鸡翅用酱油姜汁腌制后空气炸至酥脆，最后淋薄芡提亮增味。",
  "tags": [
    "30-min",
    "weeknight",
    "air-fryer"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Wuhou District made these every Sunday during my childhood summers—she’d set the air fryer timer with her wristwatch, saying, 'Time is the real seasoning.' Her wings were never saucy, just deeply savory with a whisper of ginger.",
  "storyZh": "我武侯区的祖母在我童年每个夏天周日都做这道菜——她用手表掐准空气炸锅时间，说：‘时间才是真正的调味料。’她的鸡翅从不湿漉漉，只有浓郁咸鲜与一丝姜香。",
  "ingredients": [
    {
      "id": "wings-01",
      "nameEn": "chicken wing drumettes and flats",
      "nameZh": "鸡中翅（含翅根与翅中）",
      "pinyin": "jī zhōng chì",
      "amountMetric": "400 g",
      "amountUS": "14.1 oz (about 12 pieces)",
      "category": "protein",
      "pantry": "local",
      "note": "Pat dry thoroughly with paper towels before marinating",
      "noteZh": "腌制前务必用厨房纸彻底擦干"
    },
    {
      "id": "wings-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "wings-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "wings-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "wings-05",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "¼ tsp (0.5 g)",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Place wings in a bowl. Add light soy sauce, grated ginger, Shaoxing wine, and white pepper. Toss well. Marinate 15 minutes at room temperature.",
      "textZh": "鸡翅入碗，加入生抽、姜末、绍兴酒和白胡椒粉，充分抓匀，室温腌15分钟。",
      "zhHint": "手抓更入味",
      "stateNote": {
        "visual": "Wings are evenly coated; surface glistens with thin marinade film",
        "visualZh": "鸡翅均匀裹浆，表面泛薄亮酱色",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "No pooling liquid—marinade absorbed, not dripping",
        "signalZh": "无酱汁积聚，已吸收不滴落"
      }
    },
    {
      "text": "Preheat air fryer to 200°C (390°F) for 5 minutes.",
      "textZh": "空气炸锅预热至200°C（390°F），5分钟。",
      "zhHint": "空转预热",
      "stateNote": {
        "visual": "Heating element glows faintly orange",
        "visualZh": "发热管泛出淡橙色微光",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Fan runs steadily; interior feels hot to hand held 10 cm away",
        "signalZh": "风扇匀速运转；手距内腔10厘米即感热风"
      }
    },
    {
      "text": "Arrange wings in a single layer in air fryer basket—no overlapping. Cook at 200°C for 12 minutes.",
      "textZh": "鸡翅单层平铺于炸篮，不重叠，200°C烤12分钟。",
      "zhHint": "中途不翻动",
      "stateNote": {
        "visual": "Skin tightens and begins to blister slightly at edges",
        "visualZh": "表皮收紧，边缘略起小泡",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "Light browning appears on convex surfaces",
        "signalZh": "凸起部位初现浅褐"
      }
    },
    {
      "text": "Flip wings carefully. Cook another 8 minutes until golden-brown and crisp.",
      "textZh": "小心翻面，再烤8分钟至金黄酥脆。",
      "zhHint": "用夹子防烫",
      "stateNote": {
        "visual": "Skin is deeply golden with visible crisp ridges",
        "visualZh": "表皮深金黄，纹理清晰酥脆",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Audible crunch when tapped with tongs",
        "signalZh": "镊子轻敲发出清脆声"
      }
    },
    {
      "text": "Transfer wings to a clean plate. Let rest 2 minutes—this allows juices to redistribute and skin to firm further.",
      "textZh": "鸡翅移至洁净盘中，静置2分钟——锁住肉汁，表皮更脆。",
      "zhHint": "静置是关键",
      "stateNote": {
        "visual": "Steam rises gently; no visible juice leakage",
        "visualZh": "热气徐徐上升，无汁水渗出",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Surface feels dry and resilient to light touch",
        "signalZh": "轻触表皮干爽有弹性"
      }
    }
  ],
  "tips": [
    "Dry wings thoroughly before marinating—moisture is the enemy of crispness.",
    "For extra crispness, toss wings with 1 tsp cornstarch before air frying.",
    "Do not skip the resting step—it prevents juice loss and improves bite."
  ],
  "tipsZh": [
    "腌前务必擦干鸡翅，水分是酥脆最大敌人。",
    "追求更脆？可加1茶匙玉米淀粉同腌后入锅。",
    "静置2分钟不可省，锁汁增韧全靠它。"
  ],
  "relatedSlugs": [
    "oyster-sauce-beef",
    "garlic-shrimp-vermicelli"
  ],
  "image": "/images/recipes/air-fryer-chicken-wings.webp"
};
