import type { Recipe } from "@/lib/types";

/** Scallion Oil Steamed Sea Bass (葱油清蒸鲈鱼) — Day batch */
export const scallion_oil_steamed_sea_bass: Recipe = {
  "id": "scallion-oil-steamed-sea-bass",
  "slug": "scallion-oil-steamed-sea-bass",
  "titleEn": "Scallion Oil Steamed Sea Bass",
  "titleZh": "葱油清蒸鲈鱼",
  "pinyin": "cōng yóu qīng zhēng lú yú",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Restaurant version uses a whole fish steamed in a bamboo steamer; home version uses a plate and a wok.",
  "versionNoteZh": "餐馆版用竹笼蒸整鱼；家常版用盘子和炒锅即可。",
  "tags": [
    "healthy",
    "cantonese",
    "seafood",
    "weeknight"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "My mother made this every Sunday. The fish must be steamed in one go — no peeking, no opening the lid. The entire magic is in the hot oil poured over scallions at the end, which sings as it hits the soy sauce.",
  "storyZh": "我妈每周日必做这道。蒸鱼绝不能中途开盖——全凭最后淋热油那一下，油碰到酱油滋滋作响，香气就出来了。",
  "ingredients": [
    {
      "id": "sea-bass-01",
      "nameEn": "whole sea bass (perch), scaled and gutted",
      "nameZh": "整鲈鱼（已去鳞去内脏）",
      "pinyin": "lú yú",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask the fishmonger to scale and gut; a whole fish 25-30 cm long is ideal",
      "noteZh": "请鱼贩处理干净；整鱼25-30厘米为佳"
    },
    {
      "id": "scallion-02",
      "nameEn": "scallions, cut into 5 cm strips",
      "nameZh": "小葱，切5厘米段",
      "pinyin": "xiǎo cōng",
      "amountMetric": "4 stalks",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ginger-03",
      "nameEn": "ginger, cut into thin matchsticks",
      "nameZh": "生姜，切细丝",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "light-soy-04",
      "nameEn": "light soy sauce (steaming soy)",
      "nameZh": "蒸鱼豉油 / 生抽",
      "pinyin": "zhēng yú chǐ yóu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cooking-wine-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "oil-06",
      "nameEn": "neutral oil (canola or vegetable)",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Score the fish: make 3 diagonal cuts on each side, down to the bone. Rub with 1 tbsp Shaoxing wine and 5 slices of ginger. Let rest 10 minutes.",
      "textZh": "鱼身两侧各斜切三刀至骨，抹上1汤匙绍酒和5片姜，静置10分钟去腥。",
      "zhHint": "切刀深度要到骨，蒸的时候才入味"
    },
    {
      "text": "Bring water to a rolling boil in a wok or steamer. Place a plate in the steamer, lay fish on it, scatter remaining ginger slices on top.",
      "textZh": "蒸锅水烧开，盘中铺姜片和葱段，放上鱼，鱼身上再铺几片姜。",
      "zhHint": "水开后再放鱼，这是关键"
    },
    {
      "text": "Steam on high heat for exactly 8 minutes for a 600g fish. Do NOT open the lid during steaming.",
      "textZh": "大火蒸8分钟（600g鱼），中途严禁开盖。",
      "zhHint": "时间精准，8分钟正好",
      "stateNote": {
        "visual": "Fish flesh turns opaque white along the cuts",
        "visualZh": "切口处鱼肉变白不透明",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "high",
        "signal": "Steam is vigorous and constant",
        "signalZh": "蒸汽强劲持续"
      }
    },
    {
      "text": "Remove fish, discard old ginger and scallions. Pour out any watery liquid from the plate. Lay new scallion strips and ginger matchsticks on the fish.",
      "textZh": "取出鱼，丢掉旧姜葱，倒掉盘中的汤水，铺上新鲜葱丝和姜丝。",
      "zhHint": "倒掉腥水，是清蒸鱼不腥的关键"
    },
    {
      "text": "Heat oil until it just begins to smoke. Pour directly over the scallions and ginger — it should sizzle loudly. Drizzle soy sauce around (not directly on the fish). Serve immediately.",
      "textZh": "油烧至微冒烟，淋在葱姜丝上，会发出滋滋声。沿盘边淋入豉油，立即上桌。",
      "zhHint": "油温够高，滋啦一声才是正宗",
      "stateNote": {
        "visual": "Oil smokes faintly, scallions wilt instantly upon contact",
        "visualZh": "油面微冒青烟，葱丝接触油即蔫软",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Oil is at 200°C — a wooden chopstick inserted bubbles vigorously",
        "signalZh": "油温约200°C——木筷插入后气泡密集"
      }
    }
  ],
  "tips": [
    "The fish must be fresh — look for clear eyes and bright red gills.",
    "Never steam longer than 8-10 minutes for a 600g fish; overcooked fish is dry.",
    "The hot oil pour is theatrical — do it at the table if you have guests."
  ],
  "tipsZh": [
    "鱼要新鲜——眼睛清澈、鳃鲜红。",
    "600g鱼蒸8-10分钟即止，久蒸必柴。",
    "淋热油是仪式感，有客人时可在桌上操作。"
  ],
  "relatedSlugs": [
    "garlic-vermicelli-steamed-scallops",
    "ginger-scallion-steamed-grouper",
    "steamed-hairy-crab",
    "clear-steamed-prawns",
    "tin-foil-grilled-fish"
  ],
  "image": "/images/recipes/scallion-oil-steamed-sea-bass.webp"
};
