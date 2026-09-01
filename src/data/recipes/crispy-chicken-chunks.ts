import type { Recipe } from "@/lib/types";

/** Crispy Fried Chicken Chunks (香炸鸡块) (香炸鸡块) — Day batch */
export const crispy_chicken_chunks: Recipe = {
  "id": "crispy-chicken-chunks",
  "slug": "crispy-chicken-chunks",
  "titleEn": "Crispy Fried Chicken Chunks (香炸鸡块)",
  "titleZh": "香炸鸡块",
  "pinyin": "xiāng zhà jī kuài",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "北方",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版用鸡胸切块，薄糊快炸；餐馆版有时用鸡腿肉更嫩。",
  "versionNoteZh": "家庭版用鸡胸切块，薄糊快炸；餐馆版有时用鸡腿肉更嫩。",
  "tags": [
    "fried",
    "quick",
    "protein",
    "weeknight",
    "party"
  ],
  "dietary": [
    "none"
  ],
  "story": "Chinese crispy chicken chunks are the ultimate comfort food—crispy outside, juicy inside, with a whisper of five-spice. My office in Beijing had a takeout spot that made these, and I'd order them weekly.",
  "storyZh": "香炸鸡块是终极 comfort food——外酥里嫩，隐约有五香。北京办公室楼下有家外卖专做这个，我每周必点。",
  "ingredients": [
    {
      "id": "cc-01",
      "nameEn": "chicken breast",
      "nameZh": "鸡胸肉",
      "amountMetric": "500 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "chicken-breast"
    },
    {
      "id": "cc-02",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "80 g",
      "amountUS": "2/3 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "cc-03",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "40 g",
      "amountUS": "1/3 cup",
      "category": "staple",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "cc-04",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "five-spice"
    },
    {
      "id": "cc-05",
      "nameEn": "garlic powder",
      "nameZh": "蒜粉",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "cc-06",
      "nameEn": "egg",
      "nameZh": "鸡蛋",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "cc-07",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "中性油（炸用）",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut chicken into 3cm cubes, marinate with soy sauce, wine, and half the spices for 20 minutes.",
      "textZh": "鸡胸切3厘米块，加生抽、绍兴酒、一半香料腌20分钟。",
      "stateNote": {
        "visual": "Meat absorbs marinade, surface becomes glossy",
        "visualZh": "肉吸 marinade，表面泛光泽",
        "signal": "Surface feels slightly sticky",
        "signalZh": "表面微粘"
      }
    },
    {
      "text": "Mix flour, cornstarch, and remaining spices. Dredge chicken pieces until lightly coated.",
      "textZh": "面粉、淀粉、剩余香料混合，鸡块轻裹一层粉。",
      "stateNote": {
        "visual": "White coating visible, not thick",
        "visualZh": "白色涂层可见，不厚",
        "signal": "Powder adheres without clumping",
        "signalZh": "粉粘附不结块"
      }
    },
    {
      "text": "Dip floured chicken in beaten egg, then coat again in flour mixture.",
      "textZh": "裹粉鸡块过蛋液，再裹一层粉。",
      "stateNote": {
        "visual": "Second coating is textured, not smooth",
        "visualZh": "第二层有纹理，不平滑",
        "signal": "Coating holds shape when handled",
        "signalZh": "持握不散"
      }
    },
    {
      "text": "Heat oil to 170°C, fry chicken 4-5 minutes until golden and cooked through (165°F/74°C internal).",
      "textZh": "油温170°C，炸4-5分钟至金黄熟透（中心74°C）。",
      "stateNote": {
        "visual": "Crust deep golden, bubbles moderate",
        "visualZh": "外壳深金黄，气泡适中",
        "signal": "Internal temp 74°C, juices clear",
        "signalZh": "中心温度74°C，汁水清澈"
      }
    },
    {
      "text": "Drain on rack, sprinkle with extra five-spice and salt. Serve with sweet chili sauce.",
      "textZh": "架上沥油，撒五香粉和盐，配甜辣酱。",
      "stateNote": {
        "visual": "Crust crackles when tapped, steam escapes",
        "visualZh": "外壳敲击酥脆，冒热气",
        "signal": "Juices run clear when pierced",
        "signalZh": "刺穿流出清澈汁水"
      }
    }
  ],
  "tips": [
    "Don't overcrowd the pan—fry in batches for even cooking",
    "Internal temp must reach 74°C for food safety",
    "Double fry at 190°C for 30 seconds for extra crunch"
  ],
  "tipsZh": [
    "不要一次炸太多——分批炸受热均匀",
    "中心温度必须达74°C以确保食品安全",
    "想更脆可二次复炸：190°C再炸30秒"
  ],
  "relatedSlugs": [
    "air-fryer-chicken-wings",
    "pan-fried-chicken",
    "crispy-chicken-chunks"
  ],
  "image": "/images/recipes/air-fryer-chicken-wings.webp"
};
