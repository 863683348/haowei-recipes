import type { Recipe } from "@/lib/types";

/** Steamed Spare Ribs with Taro | Cantonese Yu Tou Zheng Pai Gu (芋头蒸排骨) — Day batch */
export const taro_steamed_spare_ribs: Recipe = {
  "id": "taro-steamed-spare-ribs",
  "slug": "taro-steamed-spare-ribs",
  "titleEn": "Steamed Spare Ribs with Taro | Cantonese Yu Tou Zheng Pai Gu",
  "titleZh": "芋头蒸排骨",
  "pinyin": "yù tou zhēng pái gǔ",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version steams the ribs directly on a plate; dim sum kitchens serve it in individual small steamers with a spoonful of the taro mashed into the sauce.",
  "versionNoteZh": "家庭版直接在盘上蒸；茶楼则用小蒸笼单份上桌，并把芋头压进酱汁里。",
  "tags": [
    "cantonese",
    "steamed",
    "dim-sum",
    "one-dish",
    "kid-friendly"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the home version of the dim sum classic. Taro does two jobs: it soaks up the pork fat and it partially dissolves into the sauce, thickening it without any cornstarch. Choose a taro that feels heavy and shows purple flecks at the cut end.",
  "storyZh": "这是茶楼经典的家常版。芋头有两个作用：吸走猪油，同时部分化进汤汁、不用勾芡自然浓稠。挑芋头要选手感沉、切口带紫筋的。",
  "ingredients": [
    {
      "id": "ts-01",
      "nameEn": "pork spare ribs, cut into 4 cm pieces",
      "nameZh": "猪肋排（4 厘米段）",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs"
    },
    {
      "id": "ts-02",
      "nameEn": "taro, cut into 3 cm chunks",
      "nameZh": "芋头块",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "ts-03",
      "nameEn": "fermented black beans, rinsed",
      "nameZh": "豆豉（洗过）",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "douchi"
    },
    {
      "id": "ts-04",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ts-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ts-06",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "ts-07",
      "nameEn": "cornstarch",
      "nameZh": "生粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "other",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ts-08",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ts-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "ts-10",
      "nameEn": "scallion, chopped",
      "nameZh": "葱花",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Soak the rib pieces in cold water for 20 minutes, changing the water once, then drain and pat very dry.",
      "textZh": "排骨冷水浸泡 20 分钟，中途换一次水，沥干并彻底吸干水分。",
      "stateNote": {
        "visual": "The water goes from pink to nearly clear and the meat looks paler.",
        "visualZh": "水由淡红转为接近清澈，肉色变浅。",
        "signal": "Second soak water stays almost clear",
        "signalZh": "第二次泡的水几乎无色",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low"
      },
      "tip": "Skipping the soak leaves a metallic note in the finished sauce."
    },
    {
      "text": "Toss the ribs with soy sauce, oyster sauce, Shaoxing wine, white pepper, garlic, black beans and cornstarch. Marinate 15 minutes.",
      "textZh": "排骨加生抽、蚝油、料酒、白胡椒、蒜、豆豉、生粉抓匀，腌 15 分钟。",
      "stateNote": {
        "visual": "Each piece carries a thin glossy coat and no liquid pools at the bottom of the bowl.",
        "visualZh": "每块都裹上薄亮浆，碗底无积液。",
        "signal": "The marinade clings when you lift a piece",
        "signalZh": "提起排骨时酱汁挂得住",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Spread the taro chunks over the base of a heatproof deep plate and arrange the marinated ribs on top in a single layer.",
      "textZh": "耐热深盘底部铺芋头块，腌好的排骨单层码在上面。",
      "stateNote": {
        "visual": "The taro forms a bed with visible gaps between chunks so steam can circulate.",
        "visualZh": "芋头铺成带空隙的底，让蒸汽能循环。",
        "signal": "Chunks are not stacked on top of each other",
        "signalZh": "芋头块没有互相叠压",
        "timeRef": "2 minutes",
        "timeRefZh": "约 2 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Bring the steamer to a full rolling boil, set the plate in, cover and steam over high heat for 25 minutes.",
      "textZh": "蒸锅上汽至大滚，放入盘子加盖，大火蒸 25 分钟。",
      "stateNote": {
        "visual": "Steam jets steadily from the lid seam and the ribs shrink slightly away from the bone.",
        "visualZh": "锅盖缝持续冒汽，排骨略微缩离骨头。",
        "signal": "Constant, rhythmic steam from the lid",
        "signalZh": "锅盖持续有节奏地冒汽",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "high"
      },
      "tip": "Top up with boiling water only — cold water drops the temperature and toughens the meat."
    },
    {
      "text": "Check that a chopstick slides into a taro chunk with no resistance and the meat at the bone is no longer pink, then scatter the scallion over and serve in the plate.",
      "textZh": "筷子能无阻力插入芋头、贴近骨头处无血色，撒葱花连盘上桌。",
      "stateNote": {
        "visual": "Taro edges have slumped and turned creamy; the sauce underneath is thickened and glossy.",
        "visualZh": "芋头边缘塌软呈奶油状，盘底汤汁浓稠发亮。",
        "signal": "Chopstick enters taro like soft butter",
        "signalZh": "筷子插入芋头像插奶油",
        "timeRef": "1 minute check",
        "timeRefZh": "检查 1 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Wear gloves when peeling raw taro — the sap irritates skin.",
    "Frozen taro works fine and is already peeled; add 5 minutes to the steam.",
    "A dash of sesame oil at the end lifts the aroma without changing the sauce."
  ],
  "tipsZh": [
    "削生芋头要戴手套，黏液会刺激皮肤。",
    "冷冻芋头可以直接用、已去皮，蒸时多加 5 分钟。",
    "出锅滴几滴香油提香，不会改变酱汁。"
  ],
  "relatedSlugs": [
    "black-bean-pork-ribs",
    "duojiao-steamed-taro",
    "steamed-ribbonfish-with-black-beans",
    "red-braised-pork-ribs"
  ],
  "image": "/images/recipes/sweet-sour-ribs.webp"
};
