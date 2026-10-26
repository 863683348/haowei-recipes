import type { Recipe } from "@/lib/types";

/** Deboned Braised Fish Head (Chaihui Yutou) (拆烩鱼头) — Day batch */
export const braised_fish_head_chaihui: Recipe = {
  "id": "braised-fish-head-chaihui",
  "slug": "braised-fish-head-chaihui",
  "titleEn": "Deboned Braised Fish Head (Chaihui Yutou)",
  "titleZh": "拆烩鱼头",
  "pinyin": "chāi huì yú tóu",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang",
  "region": "Jiangsu (Yangzhou)",
  "regionZh": "江苏（扬州）",
  "difficulty": "hard",
  "timeMin": 55,
  "servings": 3,
  "version": "family",
  "versionNote": "The banquet version debones a whole bighead carp head while keeping the skin intact, then re-forms it on the plate. At home we simply lift the meat off in large flakes and return it to the sauce — same dish, no surgery.",
  "versionNoteZh": "宴席版要把整个花鲢鱼头拆肉而保持鱼皮完整，再摆回原形。家常只把肉拆成大块回锅烩，同一道菜，不用动手术。",
  "tags": [
    "huaiyang",
    "fish",
    "braise",
    "banquet",
    "no-bones"
  ],
  "dietary": [
    "none"
  ],
  "story": "拆 means 'take apart'. The fish head is cooked whole, then every bone is lifted out by hand at the table, leaving only large flakes of cheek and collar meat swimming in a pale, peppery braise. It is the dish a Yangzhou host orders to show a guest that someone in the kitchen has time.",
  "storyZh": "「拆」就是拆骨。鱼头整个烧好，再用手把刺一根根剔掉，只留下大块的鱼脸肉和颈肉，浸在奶白微辣的汤汁里。扬州人请客点这道菜，是告诉客人：这家的厨房愿意花时间。",
  "ingredients": [
    {
      "id": "fish-head",
      "nameEn": "bighead carp head (or grass carp head), split in half",
      "nameZh": "花鲢鱼头（或草鱼头，劈半）",
      "amountMetric": "1 kg",
      "amountUS": "2.2 lb",
      "category": "protein",
      "pantry": "asian",
      "termKey": "whole-fish",
      "note": "Ask for a split fish head at a Chinese market; a halved salmon head is a workable substitute.",
      "noteZh": "中式超市请店家把鱼头劈半；买不到可用半个三文鱼头替代。"
    },
    {
      "id": "napa-cabbage",
      "nameEn": "napa cabbage or baby bok choy",
      "nameZh": "大白菜或小白菜",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "napa-cabbage"
    },
    {
      "id": "wood-ear",
      "nameEn": "dried wood ear fungus, rehydrated",
      "nameZh": "干木耳（泡发）",
      "amountMetric": "15 g",
      "amountUS": "1/2 cup",
      "category": "produce",
      "pantry": "asian",
      "termKey": "wood-ear"
    },
    {
      "id": "scallion",
      "nameEn": "scallions",
      "nameZh": "葱",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "25 g",
      "amountUS": "6 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "light-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "white-pepper",
      "nameEn": "white pepper, ground",
      "nameZh": "白胡椒粉",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "cornstarch",
      "nameEn": "cornstarch slurry (1:2 with water)",
      "nameZh": "水淀粉",
      "amountMetric": "10 g + 20 ml water",
      "amountUS": "2 tsp + 4 tsp water",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "neutral-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse the split fish head well, rub with a little salt and wine, and let it sit while you prepare the vegetables.",
      "textZh": "劈半的鱼头反复冲洗，用少许盐和黄酒抹匀腌着，同时准备配菜。",
      "stateNote": {
        "visual": "The gill area is pale pink and no blood clots remain in the crevices",
        "visualZh": "鳃部呈淡粉，缝隙里没有血块",
        "signal": "Rinsing water runs clear",
        "signalZh": "冲洗的水变清",
        "timeRef": "10 minutes",
        "timeRefZh": "约 10 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Sear the fish head cut-side down in hot oil until the surfaces are set and lightly golden.",
      "textZh": "热油把鱼头剖面朝下煎至定型、微微金黄。",
      "stateNote": {
        "visual": "The cut surfaces turn opaque and take on a light gold crust",
        "visualZh": "剖面变白并结上一层浅金色的壳",
        "signal": "The head releases from the pan when you slide a spatula underneath",
        "signalZh": "锅铲能从底部插入并整块铲起",
        "timeRef": "4 minutes",
        "timeRefZh": "约 4 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Add ginger, scallion and the remaining wine, then hot water to cover. Boil hard for 10 minutes — this is what turns the broth milky.",
      "textZh": "下姜片、葱段和剩下的黄酒，加没过的热水，大火滚 10 分钟——汤色变白靠的就是这一步。",
      "stateNote": {
        "visual": "The broth turns from clear to opaque and milky white",
        "visualZh": "汤从清澈变成不透明的奶白色",
        "signal": "The surface churns continuously and smells sweet, not fishy",
        "signalZh": "汤面持续翻滚，闻起来是甜香不是腥味",
        "timeRef": "10 minutes at a rolling boil",
        "timeRefZh": "大火滚 10 分钟",
        "heat": "high"
      },
      "tip": "Hard boiling emulsifies the collagen. A gentle simmer will give you a thin, clear broth instead.",
      "tipZh": "大火滚才能乳化胶质。小火慢炖只会得到清汤。"
    },
    {
      "text": "Lift the head out and, while it is still warm, pick the meat off the bones in large flakes, discarding every bone and the gills.",
      "textZh": "捞出鱼头趁热把肉拆成大块，剔净所有鱼骨和鱼鳃。",
      "stateNote": {
        "visual": "You have a plate of large, intact flakes with no small bones visible",
        "visualZh": "盘里是一块块完整的鱼肉，看不到细刺",
        "signal": "Running a finger through the flakes finds nothing hard",
        "signalZh": "手指在鱼肉里划过摸不到硬物",
        "timeRef": "10 minutes",
        "timeRefZh": "约 10 分钟",
        "heat": "medium"
      },
      "tip": "Warm meat separates cleanly. Once it cools, the flesh clings to the bones.",
      "tipZh": "趁热拆肉最利落，凉了肉就粘在骨上。"
    },
    {
      "text": "Return the strained broth to the pan with the cabbage, wood ear, soy and white pepper, simmer 5 minutes, then slide the fish flakes back in, thicken with slurry and finish with scallion.",
      "textZh": "滤出的汤回锅，加白菜、木耳、生抽和白胡椒煮 5 分钟，再滑入拆好的鱼肉，勾水淀粉芡，撒葱出锅。",
      "stateNote": {
        "visual": "The sauce turns glossy and the fish flakes stay whole and pale against the dark vegetables",
        "visualZh": "汤汁发亮，鱼肉块在深色蔬菜中保持完整洁白",
        "signal": "The sauce coats a spoon and the flakes do not break when stirred gently",
        "signalZh": "汤汁挂勺，轻搅时鱼肉块不碎",
        "timeRef": "8 minutes",
        "timeRefZh": "约 8 分钟",
        "heat": "medium"
      }
    }
  ],
  "tips": [
    "Serve it in a wide shallow bowl — the broth is half the dish.",
    "Be generous with white pepper; it is what keeps a rich fish braise from tasting flat.",
    "The cheeks are the prize. Whoever gets them got lucky."
  ],
  "tipsZh": [
    "用宽口的浅碗装，汤汁是这道菜的一半。",
    "白胡椒要大方，否则浓郁的鱼汤会发闷。",
    "鱼脸肉最金贵，谁夹到谁走运。"
  ],
  "relatedSlugs": [
    "duojiao-fish-head",
    "crucian-carp-tofu-soup",
    "home-style-braised-common-carp"
  ],
  "image": "/images/recipes/duojiao-fish-head.webp"
};
