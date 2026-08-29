import type { Recipe } from "@/lib/types";

/** Clear Broth Daikon Beef (清炖萝卜牛腩) (清炖萝卜牛腩) — Day batch */
export const clear_broth_daikon_beef: Recipe = {
  "slug": "clear-broth-daikon-beef",
  "titleEn": "Clear Broth Daikon Beef (清炖萝卜牛腩)",
  "titleZh": "清炖萝卜牛腩",
  "pinyin": "qīng dùn luó bo niú ruǎn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 75,
  "servings": 4,
  "version": "family",
  "versionNote": "Cantonese clear-broth style — light, clean, highlights the natural sweetness of daikon and beef.",
  "versionNoteZh": "粤式清炖——清淡鲜美，突出白萝卜和牛肉的原味。",
  "tags": [
    "beef",
    "daikon",
    "soup",
    "light",
    "winter"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Cantonese cooking values the natural flavor of ingredients above all. This clear-broth beef and daikon soup is a temple to that philosophy — simple, clean, deeply satisfying.",
  "storyZh": "粤菜最重食材本味。这道清炖牛腩萝卜是这一哲学的体现——简单、干净、令人满足。",
  "ingredients": [
    {
      "id": "cbd-1",
      "nameEn": "beef brisket, 4cm chunks",
      "nameZh": "牛腩块",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cbd-2",
      "nameEn": "daikon radish, peeled and cut into thick rounds",
      "nameZh": "白萝卜",
      "amountMetric": "400 g",
      "amountUS": "about 0.9 lbs",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cbd-3",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cbd-4",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cbd-5",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "to taste",
      "amountUS": "to taste",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cbd-6",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "cbd-7",
      "nameEn": "hot water",
      "nameZh": "热水",
      "amountMetric": "1.5 L",
      "amountUS": "about 6 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "cbd-8",
      "nameEn": "cilantro leaves",
      "nameZh": "香菜",
      "amountMetric": "1 bunch",
      "amountUS": "1 bunch",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Blanch brisket: cold water, bring to boil, skim foam thoroughly, drain and rinse.",
      "textZh": "牛腩冷水下锅，烧开撇净浮沫，捞出冲洗干净。",
      "zhHint": "焯水",
      "stateNote": {
        "visual": "All gray foam removed",
        "visualZh": "灰色浮沫全部去除",
        "signal": "Water is clear",
        "signalZh": "水变清澈"
      }
    },
    {
      "text": "In a clean pot, add brisket, ginger, and cooking wine. Cover with hot water.",
      "textZh": "另取干净锅，放入牛腩、姜片、料酒，加热水没过食材。",
      "zhHint": "清炖",
      "stateNote": {
        "visual": "Water just covers meat",
        "visualZh": "水刚没过食材",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Bring to boil, then reduce to the lowest possible heat. Skim any foam that rises.",
      "textZh": "烧开转最小火，撇去浮沫。",
      "zhHint": "保持清汤",
      "stateNote": {
        "visual": "Broth is clear and pale",
        "visualZh": "汤汁清澈微黄",
        "heat": "low",
        "signal": "Gentle simmer, not rolling boil",
        "signalZh": "微微冒泡而非翻滚"
      }
    },
    {
      "text": "Simmer 45 min. Add daikon rounds. Cover and cook another 20-25 min until both are tender.",
      "textZh": "炖 45 分钟后加白萝卜，继续盖盖炖 20-25 分钟至都软烂。",
      "zhHint": "下萝卜",
      "stateNote": {
        "visual": "Daikon turns translucent",
        "visualZh": "萝卜变透明",
        "heat": "low",
        "timeRef": "20-25 minutes",
        "signal": "Pierce easily",
        "signalZh": "筷子能插入"
      }
    },
    {
      "text": "Season with salt and white pepper. Garnish with cilantro. Serve in bowls with broth.",
      "textZh": "盐和白胡椒调味，撒香菜，连汤带肉食用。",
      "zhHint": "调味出锅"
    }
  ],
  "tips": [
    "Keep the heat low — a rolling boil will make the broth cloudy.",
    "This soup is best when the broth is crystal clear.",
    "Daikon becomes sweeter the longer it cooks — don't rush it."
  ],
  "tipsZh": [
    "火要小——大火会让汤浑浊。",
    "汤要清澈才好喝。",
    "萝卜越炖越甜——别急。"
  ],
  "relatedSlugs": [
    "daikon-beef-brisket",
    "tomato-beef-brisket",
    "winter-melon-soup",
    "lotus-root-pork-bone-soup"
  ],
  "image": "/images/recipes/clear-broth-daikon-beef.webp",
  "id": "clear-broth-daikon-beef"
};
