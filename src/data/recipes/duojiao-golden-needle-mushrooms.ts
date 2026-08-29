import type { Recipe } from "@/lib/types";

/** Chopped Chili Golden Needle Mushrooms (剁椒金针菇) — Seed batch */
export const duojiao_golden_needle_mushrooms: Recipe = {
  "id": "duojiao-jin-zhen-gu",
  "slug": "duojiao-golden-needle-mushrooms",
  "titleEn": "Chopped Chili Golden Needle Mushrooms",
  "titleZh": "剁椒金针菇",
  "pinyin": "duò jiāo jīn zhēn gū",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Yueyang",
  "regionZh": "岳阳",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses minimal oil and no meat—just mushrooms, chili, and aromatics, steamed then finished with hot oil for fragrance, not heat.",
  "versionNoteZh": "家常版少油无肉，仅用金针菇、剁椒与香辛料，蒸后泼热油激香，重香不重辣。",
  "tags": [
    "25-min",
    "vegetarian",
    "light-dinner"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My uncle in Yueyang—a retired dockworker—made this daily during winter, using dried golden needle mushrooms rehydrated in river water he collected himself from Dongting Lake’s southern inlet.",
  "storyZh": "我岳阳的舅舅是退休码头工人，冬天每天做这道菜，用他亲自从洞庭湖南口取的湖水泡发干金针菇。",
  "ingredients": [
    {
      "id": "jm-01",
      "nameEn": "fresh golden needle mushrooms (enoki, trimmed base removed)",
      "nameZh": "鲜金针菇（去根部）",
      "pinyin": "xiān jīn zhēn gū",
      "amountMetric": "200 g",
      "amountUS": "4 cups loosely packed",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute: 30 g dried enoki, soaked 20 min in warm water, drained well.",
      "noteZh": "替代：干金针菇30克，温水泡20分钟，挤干。"
    },
    {
      "id": "jm-02",
      "nameEn": "homemade Hunan chopped chili (duōjiāo)",
      "nameZh": "湖南自制剁椒",
      "pinyin": "hún nán zì zhì duò jiāo",
      "amountMetric": "60 g",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for coarse-cut, fermented chili with visible chili skins.",
      "noteZh": "选粗粒发酵型，可见辣椒皮。"
    },
    {
      "id": "jm-03",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks, finely sliced",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "scallion"
    },
    {
      "id": "jm-04",
      "nameEn": "cooking oil (peanut or canola)",
      "nameZh": "炒菜油（花生油或菜籽油）",
      "pinyin": "chǎo cài yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Must be heated to smoking point for final step.",
      "noteZh": "最后泼油需烧至冒烟。"
    },
    {
      "id": "jm-05",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: balsamic vinegar (only if black vinegar unavailable).",
      "noteZh": "替代：若无陈醋，可用意大利黑醋。",
      "termKey": "chinese-black-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Separate enoki into small clusters (4–5 stems each). Rinse briefly, shake dry, and arrange upright in a shallow steaming dish.",
      "textZh": "将金针菇分成4–5根一簇的小束，略洗甩干，直立码入浅蒸盘。",
      "zhHint": "直立码放",
      "stateNote": {
        "visual": "Uniform upright clusters, no clumping or splaying",
        "visualZh": "簇形整齐直立，不粘连不散开",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Stems stand freely without support",
        "signalZh": "茎秆可独立直立"
      }
    },
    {
      "text": "Sprinkle chopped chili evenly over mushrooms, ensuring some falls between clusters. Do not stir.",
      "textZh": "均匀撒上剁椒，让部分落入簇间缝隙，勿搅拌。",
      "zhHint": "剁椒落缝不搅",
      "stateNote": {
        "visual": "Red flecks visible between white clusters, no clumps",
        "visualZh": "白簇间可见红点，无结块",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Chili sits atop, not sinking in",
        "signalZh": "剁椒浮于表面，不沉底"
      }
    },
    {
      "text": "Steam over medium heat for 8 minutes—just until mushrooms soften slightly but retain springy bite.",
      "textZh": "中火蒸8分钟，至金针菇微软但仍具弹牙口感。",
      "zhHint": "中火微蒸",
      "stateNote": {
        "visual": "Mushrooms plump and slightly translucent at tips",
        "visualZh": "菇体饱满，尖端微透",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium",
        "signal": "Tip bends slightly when lifted with chopsticks",
        "signalZh": "筷夹尖端微弯"
      }
    },
    {
      "text": "Remove from steamer. Drizzle with Chinese black vinegar and scatter scallions over top.",
      "textZh": "出锅后淋陈醋，撒葱花。",
      "zhHint": "出锅淋醋撒葱",
      "stateNote": {
        "visual": "Vinegar glistens on red chili and white mushrooms",
        "visualZh": "陈醋在剁椒与白菇上泛光",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Aroma sharpens instantly",
        "signalZh": "香气瞬间转清冽"
      }
    },
    {
      "text": "Heat oil in a small pan until smoking. Immediately pour hot oil over scallions and chili—listen for the loud, fragrant sizzle.",
      "textZh": "油烧至冒烟，迅速泼在葱花与剁椒上，听响亮滋啦声。",
      "zhHint": "热油泼响滋啦",
      "stateNote": {
        "visual": "Oil shimmering, immediate curl of aromatic steam",
        "visualZh": "油光跃动，即刻升腾带香白汽",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "high",
        "signal": "Loud, sustained sizzle lasting 2+ seconds",
        "signalZh": "持续响亮滋啦声超2秒"
      }
    }
  ],
  "tips": [
    "Never overcook—golden needles turn slimy past 9 minutes.",
    "Use only fresh enoki for this dish; dried lacks the crisp-tender contrast.",
    "The vinegar must go on *before* hot oil—otherwise it evaporates too fast."
  ],
  "tipsZh": [
    "切勿久蒸——超9分钟金针菇变滑腻。",
    "本菜只用鲜金针菇；干品失脆嫩对比。",
    "陈醋必须泼油前淋入，否则挥发过快。"
  ],
  "relatedSlugs": [
    "duojiao-fish-head",
    "duojiao-steamed-taro"
  ],
  "image": "/images/recipes/duojiao-golden-needle-mushrooms.webp"
};
