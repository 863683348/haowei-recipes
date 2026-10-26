import type { Recipe } from "@/lib/types";

/** Braised Fish Tail (Hongshao Huashui) (红烧划水) — Day batch */
export const braised_fish_tail_huashui: Recipe = {
  "id": "braised-fish-tail-huashui",
  "slug": "braised-fish-tail-huashui",
  "titleEn": "Braised Fish Tail (Hongshao Huashui)",
  "titleZh": "红烧划水",
  "pinyin": "hóng shāo huá shuǐ",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang",
  "region": "Jiangsu (Yangzhou / Suzhou)",
  "regionZh": "江苏（扬州 / 苏州）",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurants fan out a whole black-carp tail and plate it tail-up for drama. At home we cut the tail into thick cross-sections so it fits a 28 cm skillet and braises evenly without breaking apart.",
  "versionNoteZh": "餐厅用整条青鱼尾扇形摆盘、尾巴朝上讲究卖相。家常把鱼尾切成厚段，28 cm 炒锅放得下，受热均匀也不易散。",
  "tags": [
    "huaiyang",
    "fish",
    "braise",
    "dinner",
    "30-45-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "划水 literally means 'the part that paddles' — the tail fin of the black carp, the hardest-working muscle on the fish. Huaiyang cooks prize it for its springy flesh and thick collagen. My grandmother bought only the tail on market days: cheap, bony, and in her words 'where all the swimming lives.' Braised dark and glossy, the collagen turns sticky-sweet on the lips and the meat stays firm under the chopstick.",
  "storyZh": "「划水」就是鱼尾——青鱼身上运动最多的一块肉。淮扬厨子看重它弹牙、胶质厚。小时候外婆赶集只买鱼尾：便宜、刺多，但她说「鱼的味道全在尾巴上」。红烧后酱色油亮，胶质黏唇，筷子夹起来肉却不散。",
  "ingredients": [
    {
      "id": "grass-carp-tail",
      "nameEn": "grass carp tail (cut into 3 cm sections)",
      "nameZh": "青鱼尾（切 3 cm 段）",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "asian",
      "termKey": "white-fish",
      "note": "Ask for grass carp (鲩鱼/草鱼) tail at a Chinese market. A catfish or snapper tail works too.",
      "noteZh": "中式超市问「草鱼尾」。买不到可用鲶鱼尾或鲷鱼尾替代。"
    },
    {
      "id": "scallion",
      "nameEn": "scallions, whites and greens separated",
      "nameZh": "葱（葱白葱绿分开）",
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
      "amountMetric": "20 g",
      "amountUS": "4 thick slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
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
      "id": "dark-soy",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce",
      "note": "For colour only; too much turns the dish bitter.",
      "noteZh": "只用来上色，放多了会发苦。"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "rock-sugar",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "cornstarch",
      "nameEn": "cornstarch slurry (1:2 with water)",
      "nameZh": "水淀粉",
      "amountMetric": "5 g + 10 ml water",
      "amountUS": "1 tsp + 2 tsp water",
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
      "text": "Pat the fish tail sections completely dry with paper towel, then score the thickest part twice down to the bone so the braise can penetrate.",
      "textZh": "鱼尾段用厨房纸彻底擦干，在最厚处斜划两刀至骨，便于入味。",
      "stateNote": {
        "visual": "Surface looks matte and feels tacky under your fingers",
        "visualZh": "表面发哑、手指摸上去发黏",
        "signal": "A pressed paper towel comes away with no water beads",
        "signalZh": "厨房纸按上去不再出现水珠",
        "timeRef": "2 minutes",
        "timeRefZh": "约 2 分钟",
        "heat": "medium"
      },
      "tip": "Water is the enemy of a clean sear — dry it twice if you have time.",
      "tipZh": "有水就煎不出壳，有空就擦两遍。"
    },
    {
      "text": "Heat the oil in a wide skillet over medium-high and lay the tail sections skin-side down. Sear without moving them until the skin releases on its own.",
      "textZh": "炒锅倒油中高火烧热，鱼尾皮朝下入锅，不要翻动，煎到皮自己脱锅。",
      "stateNote": {
        "visual": "Skin turns deep golden brown and the edges crisp up",
        "visualZh": "鱼皮变成深金褐色，边缘焦脆",
        "signal": "The pan stops grabbing — the sections slide when you nudge them",
        "signalZh": "推一下鱼段能滑动，说明不再粘锅",
        "timeRef": "about 3 minutes per side",
        "timeRefZh": "每面约 3 分钟",
        "heat": "medium-high"
      },
      "tip": "Resist flipping early. Forcing it tears the skin and the collagen leaks out.",
      "tipZh": "别急着翻面，硬翻会撕破鱼皮、胶质流失。"
    },
    {
      "text": "Push the fish to one side, add the scallion whites and ginger to the bare oil, then splash the Shaoxing wine down the side of the pan.",
      "textZh": "鱼段推到一边，在空出的油里下葱白、姜片爆香，沿锅边淋入黄酒。",
      "stateNote": {
        "visual": "A sharp burst of steam rises and the raw alcohol smell sweetens",
        "visualZh": "腾起一股蒸汽，酒气由冲变甜",
        "signal": "The aggressive sizzle softens after about 20 seconds",
        "signalZh": "大约 20 秒后滋啦声由急转缓",
        "timeRef": "1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Add light soy, dark soy, rock sugar and enough hot water to come two-thirds up the fish. Cover and simmer gently.",
      "textZh": "加生抽、老抽、冰糖和热水至没过鱼身三分之二，加盖小火焖煮。",
      "stateNote": {
        "visual": "The liquid turns clear amber and small bubbles break the surface lazily",
        "visualZh": "汤汁变成清亮琥珀色，小泡缓慢冒上来",
        "signal": "A chopstick slides into the thickest part with no resistance",
        "signalZh": "筷子能毫无阻力插进最厚的部位",
        "timeRef": "12-15 minutes",
        "timeRefZh": "12-15 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Uncover, raise the heat and keep spooning the sauce over the fish until it thickens and clings, then finish with the cornstarch slurry and scatter the scallion greens.",
      "textZh": "开盖转大火，不断把汤汁淋在鱼上收浓，最后勾水淀粉芡，撒葱绿出锅。",
      "stateNote": {
        "visual": "Sauce coats the back of a spoon and leaves a clean line when you swipe it",
        "visualZh": "汤汁挂住勺背，手指划过留下清晰的一道",
        "signal": "Bubbles change from small and fast to slow, large and glossy",
        "signalZh": "气泡由小而急变成大而亮",
        "timeRef": "4-5 minutes",
        "timeRefZh": "4-5 分钟",
        "heat": "high"
      }
    }
  ],
  "tips": [
    "Never flip the tail more than once — the skin tears and the collagen leaches out.",
    "Working with fillets instead? Keep the skin on and shorten the braise to 8 minutes.",
    "A splash of Chinkiang vinegar right at the end brightens all that sweetness."
  ],
  "tipsZh": [
    "鱼尾最多翻一次面，皮破了胶质会流失。",
    "只有鱼柳也能做，带皮、焖煮缩到 8 分钟。",
    "起锅前沿锅边点一点香醋，甜味立刻变亮。"
  ],
  "relatedSlugs": [
    "dry-braised-crucian",
    "home-style-braised-common-carp",
    "duojiao-fish-head"
  ],
  "image": "/images/recipes/home-style-braised-common-carp.webp"
};
