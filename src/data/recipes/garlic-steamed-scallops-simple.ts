import type { Recipe } from "@/lib/types";

/** Simple Garlic Steamed Scallops (蒜蓉蒸扇贝（简版）) — Day batch */
export const garlic_steamed_scallops_simple: Recipe = {
  "id": "garlic-steamed-scallops-simple",
  "slug": "garlic-steamed-scallops-simple",
  "titleEn": "Simple Garlic Steamed Scallops",
  "titleZh": "蒜蓉蒸扇贝（简版）",
  "pinyin": "suàn róng zhēng shàn bèi",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 12,
  "servings": 2,
  "version": "family",
  "versionNote": "No vermicelli version — pure scallop and garlic focus.",
  "versionNoteZh": "无粉丝版——纯粹扇贝与蒜蓉。",
  "tags": [
    "quick",
    "healthy",
    "seafood",
    "cantonese"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "When you don't have vermicelli on hand, this is the stripped-back version. Pure scallop sweetness meets garlicky richness — nothing else needed.",
  "storyZh": "没有粉丝的时候，这是最纯粹的版本。扇贝的甜与蒜蓉的香相遇——无需多余。",
  "ingredients": [
    {
      "id": "scallops-01",
      "nameEn": "fresh scallops on the half shell",
      "nameZh": "鲜扇贝（半壳）",
      "pinyin": "xiān shàn bèi",
      "amountMetric": "6 large",
      "amountUS": "6 large",
      "category": "protein",
      "pantry": "local",
      "note": "Must be fresh; discard any with off smell",
      "noteZh": "必须新鲜；有异味的丢弃"
    },
    {
      "id": "garlic-02",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "8 cloves",
      "amountUS": "8 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "light-soy-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "oil-04",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "scallion-05",
      "nameEn": "scallions, chopped",
      "nameZh": "小葱，切碎",
      "pinyin": "xiǎo cōng",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Make garlic sauce: mix minced garlic with soy sauce and 1 tbsp oil.",
      "textZh": "蒜蓉酱：蒜末+生抽+1汤匙油拌匀。",
      "zhHint": "蒜蓉要足，扇贝吃蒜"
    },
    {
      "text": "Scrub scallop shells under running water. Remove any beard threads attached to the shell.",
      "textZh": "刷洗扇贝壳，去除附着的足丝。",
      "zhHint": "去足丝更干净"
    },
    {
      "text": "Spoon sauce over each scallop. Steam over high heat for 4 minutes.",
      "textZh": "每只扇贝浇上蒜蓉酱，大火蒸4分钟。",
      "zhHint": "4分钟是黄金时间",
      "stateNote": {
        "visual": "Scallop turns opaque white, edges curl slightly",
        "visualZh": "扇贝变白不透明，边缘微卷",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "high",
        "signal": "Meat puffs up and loses translucency",
        "signalZh": "肉质鼓起、失去透明感"
      }
    },
    {
      "text": "Separate the meat from the shell carefully. Keep the half-shell for serving — it holds juices.",
      "textZh": "小心分离蚝肉与壳，保留半壳盛装，锁住鲜汁。",
      "zhHint": "半壳是天然容器"
    },
    {
      "text": "Remove, sprinkle scallions, drizzle remaining hot oil over. Serve.",
      "textZh": "出锅撒葱花，淋热油，立即上桌。",
      "zhHint": "热油激香葱花的瞬间"
    }
  ],
  "tips": [
    "4 minutes is the limit — overcooked scallops are rubbery.",
    "This version is faster than the vermicelli version — perfect for a quick dinner.",
    "Garlic quantity is personal — go heavy if you love it."
  ],
  "tipsZh": [
    "4分钟是上限——蒸过头会变橡胶口感。",
    "这款比粉丝版更快——适合快手晚餐。",
    "蒜蓉的量看个人喜好——爱吃蒜就多加。"
  ],
  "relatedSlugs": [
    "garlic-vermicelli-steamed-scallops",
    "garlic-vermicelli-steamed-oysters",
    "clear-steamed-prawns",
    "garlic-steamed-prawns",
    "steamed-clams-with-garlic"
  ],
  "image": "/images/recipes/garlic-steamed-scallops-simple.webp"
};
