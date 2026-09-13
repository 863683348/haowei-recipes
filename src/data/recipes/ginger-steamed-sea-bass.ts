import type { Recipe } from "@/lib/types";

/** Ginger Steamed Sea Bass (姜丝蒸鲈鱼) — Day batch */
export const ginger_steamed_sea_bass: Recipe = {
  "id": "ginger-steamed-sea-bass",
  "slug": "ginger-steamed-sea-bass",
  "titleEn": "Ginger Steamed Sea Bass",
  "titleZh": "姜丝蒸鲈鱼",
  "pinyin": "jiāng sī zhēng lú yú",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "Ginger-only version — no scallion, pure ginger heat.",
  "versionNoteZh": "纯姜版——无葱，只有姜的辛香。",
  "tags": [
    "healthy",
    "seafood",
    "cantonese",
    "weeknight"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Some people can't eat scallions. This version is for them — pure ginger heat without any onion family. The result is a cleaner, sharper flavor profile that lets the fish shine.",
  "storyZh": "有人不吃葱。这款是他们的选择——纯姜的辛香，没有任何葱蒜的干扰。风味更干净、更锐利，鱼的本味更突出。",
  "ingredients": [
    {
      "id": "sea-bass-01",
      "nameEn": "whole sea bass, scaled and gutted",
      "nameZh": "整鲈鱼（已去鳞去内脏）",
      "pinyin": "lú yú",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ginger-02",
      "nameEn": "ginger, cut into fine julienne",
      "nameZh": "生姜，切细丝",
      "pinyin": "shēng jiāng",
      "amountMetric": "60 g",
      "amountUS": "4 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "light-soy-03",
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
      "id": "cooking-wine-04",
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
      "id": "oil-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Score fish deeply on both sides. Rub with Shaoxing wine and stuff cavity with half the ginger.",
      "textZh": "鱼身两侧深切的三刀，抹绍酒，姜丝塞入鱼腹。",
      "zhHint": "姜是主角，量要给足"
    },
    {
      "text": "Scrape scales and remove gills. Ask the fishmonger to gut the fish, but rinse the cavity thoroughly.",
      "textZh": "去鳞去鳃，内脏已处理但需彻底冲洗腹腔。",
      "zhHint": "腹腔血污是腥味来源"
    },
    {
      "text": "Bring steamer water to a boil. Place fish in steamer, cover tightly.",
      "textZh": "蒸锅水烧开，鱼入锅，盖紧。",
      "zhHint": "水开再放鱼"
    },
    {
      "text": "Pat the fish completely dry inside and out. This is critical — moisture prevents proper steaming.",
      "textZh": "鱼身内外彻底吸干——这是清蒸不腥的关键。",
      "zhHint": "水分是敌人"
    },
    {
      "text": "Steam on high for 8 minutes. The fish is done when flesh flakes easily.",
      "textZh": "大火蒸8分钟，鱼肉能轻松拨开即熟。",
      "zhHint": "8分钟是600g鱼的黄金时间",
      "stateNote": {
        "visual": "Flesh turns opaque white along cut lines",
        "visualZh": "切口处鱼肉变白不透明",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "high",
        "signal": "Fork slides into thickest part easily",
        "signalZh": "叉尖插入鱼身最厚处轻松滑入"
      }
    },
    {
      "text": "Remove, discard old ginger. Cover fish with fresh ginger julienne. Pour hot oil over — it should sizzle. Drizzle soy sauce around the plate.",
      "textZh": "取出，去掉旧姜，铺满新姜丝。淋热油，滋啦作响。沿盘边淋酱油。",
      "zhHint": "热油淋姜丝，香气瞬间爆发"
    }
  ],
  "tips": [
    "This is for ginger lovers — don't skimp on the ginger.",
    "The gingerJulienne should be paper-thin for best texture.",
    "Serve immediately — the ginger continues cooking from residual heat."
  ],
  "tipsZh": [
    "这是姜控的菜——姜不要吝啬。",
    "姜丝要切得薄如纸，口感最佳。",
    "立即上桌——余温会继续烹饪姜丝。"
  ],
  "relatedSlugs": [
    "scallion-oil-steamed-sea-bass",
    "ginger-scallion-steamed-grouper",
    "garlic-vermicelli-steamed-scallops",
    "squirrel-fish",
    "wuchang-fish-hubei-style"
  ],
  "image": "/images/recipes/ginger-steamed-sea-bass.webp"
};
