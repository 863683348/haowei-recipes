import type { Recipe } from "@/lib/types";

/** Garlic Clam with Chives (韭菜花炒蚬) — Day 137 贝壳鲜味 */
export const garlic_clam_with_chives: Recipe = {
  "id": "garlic-clam-with-chives",
  "slug": "garlic-clam-with-chives",
  "titleEn": "Garlic Clam with Chives",
  "titleZh": "韭菜花炒蚬",
  "pinyin": "jiǔ cài huā chǎo xiǎn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Quick stir-fry with garlic and chive flowers—Cantonese home cooking at its finest.",
  "versionNoteZh": "快速爆炒配蒜和韭菜花——粤式家常菜的精华。",
  "tags": [
    "30-min",
    "seafood",
    "cantonese",
    "quick"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Chive flowers (韭菜花) are a Cantonese specialty, slightly sweeter and more fragrant than regular chives. Paired with clams, they make a perfect weeknight dish.",
  "storyZh": "韭菜花是粤式特色，比常规韭菜更甜更香。配蚬肉，是绝佳的工作日晚餐。",
  "image": "/images/recipes/garlic-clam-with-chives.webp",
  "relatedSlugs": [
    "scallion-steamed-clams",
    "garlic-romaine",
    "stir-fried-water-spinach"
  ],
  "ingredients": [
    {
      "id": "gc-clams-01",
      "nameEn": "fresh clams (little neck or similar)",
      "nameZh": "鲜蚬",
      "pinyin": "xiǎn",
      "amountMetric": "600 g",
      "amountUS": "about 1.3 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Soak in salted water 20 min to purge sand",
      "noteZh": "盐水浸泡20分钟吐沙"
    },
    {
      "id": "gc-chive-02",
      "nameEn": "chive flowers (韭菜花) or chive stems",
      "nameZh": "韭菜花/韭苔",
      "pinyin": "jiǔ cài huā",
      "amountMetric": "200 g",
      "amountUS": "about 7 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gc-garlic-03",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gc-soy-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gc-wine-05",
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
      "id": "gc-oil-06",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak clams in salted water for 20 minutes. Scrub shells. Prepare chive flowers by trimming tough ends and cutting into 3cm pieces.",
      "textZh": "蚬盐水浸泡20分钟吐沙，刷洗外壳。韭菜花 trim 去老根，切3厘米段。",
      "zhHint": "处理要快"
    },
    {
      "text": "Heat oil in a wok over high heat. Add minced garlic and stir-fry for 10 seconds until fragrant.",
      "textZh": "大火热锅冷油，下蒜末爆香10秒。",
      "zhHint": "蒜末不要炸焦",
      "stateNote": {
        "visual": "Garlic turns light gold and fragrant",
        "visualZh": "蒜末呈浅金色，香气四溢",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Aroma hits immediately",
        "signalZh": "香气立刻扑鼻"
      }
    },
    {
      "text": "Add clams and Shaoxing wine. Cover and stir-fry for 2 minutes until shells begin to open.",
      "textZh": "下蚬肉和绍兴酒，盖锅盖大火翻炒2分钟至贝壳开始张开。",
      "zhHint": "大火快炒",
      "stateNote": {
        "visual": "Shells start to pop open, steam escapes",
        "visualZh": "贝壳开始张开，蒸汽逸出",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "At least half shells opened",
        "signalZh": "一半以上贝壳已张开"
      }
    },
    {
      "text": "Add chive flowers and soy sauce. Toss everything together for 1 minute until chives wilt but stay crisp.",
      "textZh": "下韭菜花和生抽，翻炒1分钟至韭菜花软但保持脆感。",
      "zhHint": "韭菜花不要炒过软",
      "stateNote": {
        "visual": "Chive flowers turn bright green and slightly wilted",
        "visualZh": "韭菜花变翠绿，略微软化",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Chives are wilted but still vibrant green",
        "signalZh": "韭菜花软但颜色仍翠绿"
      }
    },
    {
      "text": "Taste and adjust seasoning. Serve immediately while clams are hot and chives are crisp-tender.",
      "textZh": "尝味调咸淡，立刻上桌。",
      "zhHint": "趁热吃"
    }
  ],
  "tips": [
    "Chive flowers cook fast—add them at the end to keep their crunch.",
    "Don't overcrowd the wok; cook in batches if needed for best results.",
    "If chive flowers are hard to find, regular chive stems work as a substitute."
  ],
  "tipsZh": [
    "韭菜花 cooking 快——最后放保持脆感。",
    "不要 overcrowd 锅；需要时分批炒。",
    "韭菜花难买可用韭菜茎替代。"
  ]
};
