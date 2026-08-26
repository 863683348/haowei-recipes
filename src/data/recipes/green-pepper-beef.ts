import type { Recipe } from "@/lib/types";

/** Green Pepper Beef (青椒牛柳) (青椒牛柳) — Day batch */
export const green_pepper_beef: Recipe = {
  "id": "green-pepper-beef",
  "slug": "green-pepper-beef",
  "titleEn": "Green Pepper Beef (青椒牛柳)",
  "titleZh": "青椒牛柳",
  "pinyin": "qīng jiāo niú liǔ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National favorite",
  "regionZh": "全国流行",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurant version velvet-fries the beef in warm oil (slow-oil method). The family version sears marinated beef over high heat in one pan — the secret is cutting against the grain and not overcooking.",
  "versionNoteZh": "餐厅版用温油滑牛肉。家常版把腌好的牛肉直接大火快煎——秘诀是逆纹切肉、别炒过头。",
  "tags": [
    "30-min",
    "weeknight",
    "beef",
    "gluten-free-ok"
  ],
  "dietary": [
    "none"
  ],
  "story": "青椒牛柳 is the weekday beef dish of northern Chinese cities: tender strips of beef against the sharp, fresh bite of green pepper. It exists to solve the two great weeknight problems — beef that turns to rubber, and dinners that take an hour. Velvet the meat, heat the pan until it whispers, and the whole thing is done before the rice cooker beeps.",
  "storyZh": "青椒牛柳是北方城市工作日晚上的牛肉担当：嫩牛肉条遇上青椒的爽脆微辣。它专治两大工作日难题——一炒就老的牛肉，和一做就一小时的家常饭。把肉上浆、把锅烧到微冒烟，电饭煲还没响，这道菜就出锅了。",
  "ingredients": [
    {
      "id": "gb-beef",
      "nameEn": "beef sirloin or flank, thinly sliced against the grain",
      "nameZh": "牛里脊/牛柳",
      "amountMetric": "350 g",
      "amountUS": "about 12 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Slicing against the grain is the #1 tenderness trick.",
      "noteZh": "逆纹切是嫩肉的第一秘诀。"
    },
    {
      "id": "gb-pepper",
      "nameEn": "green bell peppers, cut into strips",
      "nameZh": "青椒",
      "amountMetric": "2 (about 250 g)",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gb-onion",
      "nameEn": "onion, cut into strips (optional)",
      "nameZh": "洋葱",
      "amountMetric": "1/2 (about 80 g)",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gb-garlic",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gb-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "gb-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gb-shaoxing",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "gb-oyster",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "gb-baking",
      "nameEn": "baking soda (optional, for extra tenderizing)",
      "nameZh": "小苏打",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "The 'velvet beef at home' trick — 15 min, then rinse. Optional.",
      "noteZh": "在家嫩化牛肉的小妙招——腌 15 分钟后冲掉。可选。"
    },
    {
      "id": "gb-starch",
      "nameEn": "cornstarch (for velveting + slurry)",
      "nameZh": "玉米淀粉",
      "amountMetric": "2 tbsp total",
      "amountUS": "2 tbsp total",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "gb-black-pepper",
      "nameEn": "black pepper",
      "nameZh": "黑胡椒",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "gb-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Slice beef thinly against the grain. Velvet: mix with 1 tbsp soy, Shaoxing, 1 tbsp cornstarch, and (optional) baking soda. Rest 15 minutes.",
      "textZh": "牛肉逆纹切薄片。上浆：与 1 汤匙生抽、料酒、1 汤匙淀粉和（可选）小苏打拌匀，静置 15 分钟。",
      "zhHint": "逆纹切肉 + 上浆",
      "stateNote": {
        "visual": "Beef strips are evenly coated, slightly sticky",
        "visualZh": "牛肉条裹料均匀，微微发黏",
        "timeRef": "15 minutes rest",
        "timeRefZh": "静置 15 分钟",
        "signal": "Marinade absorbed; no pooled liquid at the bottom",
        "signalZh": "料汁被吸收，碗底无积液"
      },
      "tip": "If using baking soda, rinse the beef quickly and re-pad dry before cooking.",
      "tipZh": "用了小苏打的话，下锅前快速冲洗并重新擦干。"
    },
    {
      "text": "In a small bowl mix: remaining 1/2 tbsp soy, oyster sauce, black pepper, 1/2 cup water (125 ml), 1 tbsp cornstarch.",
      "textZh": "调碗汁：剩余半汤匙生抽、蚝油、黑胡椒、半杯水（125 毫升）、1 汤匙淀粉，搅匀。",
      "zhHint": "调好碗汁",
      "stateNote": {
        "visual": "Uniform dark-brown sauce, cornstarch dissolved",
        "visualZh": "均匀的深棕色酱汁，淀粉化开",
        "signal": "No lumps at the bottom",
        "signalZh": "碗底无结块"
      }
    },
    {
      "text": "Heat 2 tbsp oil in a wok until it just starts to shimmer (about 30 seconds over high). Add beef in one layer — let it sear 30 seconds before moving it.",
      "textZh": "锅中放 2 汤匙油，大火烧到微微泛光（约 30 秒）。牛肉单层下锅——先让它煎 30 秒再翻动。",
      "zhHint": "高温快煎牛肉",
      "stateNote": {
        "visual": "Oil shimmers; beef edges brown within seconds of contact",
        "visualZh": "油面泛光；牛肉接触锅面后边缘几秒内上色",
        "heat": "high",
        "timeRef": "30 seconds undisturbed",
        "timeRefZh": "先静置 30 秒",
        "signal": "Beef releases from the pan — that's the sear, now toss",
        "signalZh": "牛肉能离锅了——煎到位了，现在开始翻"
      },
      "tip": "Leave the beef alone for 30 seconds. Moving it too early = gray, rubbery beef.",
      "tipZh": "前 30 秒别碰它。翻太早 = 灰白橡皮牛肉。"
    },
    {
      "text": "Stir-fry until beef is about 80% cooked (mostly brown, tiny pink center), about 1 minute. Remove to a plate.",
      "textZh": "翻炒至牛肉约八成熟（大部分变棕，中心一点粉色），约 1 分钟，盛出。",
      "zhHint": "牛肉八成熟盛出",
      "stateNote": {
        "visual": "Beef is browned outside with a faint pink core",
        "visualZh": "牛肉外棕里微粉",
        "timeRef": "about 1 minute",
        "timeRefZh": "约 1 分钟",
        "signal": "Slight pink remains — it will finish cooking in the sauce",
        "signalZh": "还带一点粉色——会在酱汁里焖熟"
      }
    },
    {
      "text": "Add remaining 1 tbsp oil. Stir-fry garlic, ginger, onion (30 sec), then green peppers (1-2 min) until bright green with charred edges.",
      "textZh": "加剩余 1 汤匙油。下蒜片、姜片、洋葱炒 30 秒，再下青椒炒 1-2 分钟，至颜色鲜绿、边缘微焦。",
      "zhHint": "炒青椒",
      "stateNote": {
        "visual": "Peppers turn glossy bright green with golden-brown char spots",
        "visualZh": "青椒油亮翠绿，带金褐色焦斑",
        "heat": "high",
        "timeRef": "1-2 minutes",
        "timeRefZh": "1-2 分钟",
        "signal": "Peppers still crisp but starting to soften at the edges",
        "signalZh": "青椒依然脆，边缘开始变软"
      },
      "tip": "A little char on the peppers is wok hei in disguise — don't be shy.",
      "tipZh": "青椒上的微焦其实是镬气的化身——别客气。"
    },
    {
      "text": "Return the beef. Give the sauce a stir and pour it in. Toss 30 seconds until everything is glossy.",
      "textZh": "放回牛肉。搅一下碗汁倒入，翻炒 30 秒至全部油亮。",
      "zhHint": "回锅挂汁",
      "stateNote": {
        "visual": "Sauce turns glossy and coats beef and peppers evenly",
        "visualZh": "酱汁油亮，均匀裹住牛肉和青椒",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Sauce thickens and clings — beef is exactly done",
        "signalZh": "酱汁变稠挂壁——牛肉火候刚好"
      }
    },
    {
      "text": "Serve immediately over steamed rice. Don't leave it in the pan — carryover heat keeps cooking the beef.",
      "textZh": "立刻盛出配米饭。别留在锅里——余热会继续把牛肉焖老。",
      "zhHint": "立刻出锅",
      "stateNote": {
        "visual": "Shiny sauce, tender beef, bright peppers — steam rising",
        "visualZh": "油亮酱汁、嫩牛肉、鲜亮青椒——热气腾腾",
        "signal": "Plate now",
        "signalZh": "现在就装盘"
      }
    }
  ],
  "tips": [
    "Slice against the grain — this single habit fixes 90% of tough beef.",
    "A screaming-hot pan and 30 seconds of patience is the whole secret.",
    "Don't skip the brief rest in the marinade; 15 minutes matters more than you think.",
    "Green peppers: use 1 hot + 1 sweet for a gentle kick."
  ],
  "tipsZh": [
    "逆纹切肉——这一个习惯能解决九成的牛肉老硬问题。",
    "锅要烧到冒烟，再给肉 30 秒耐心，这就是全部秘诀。",
    "别省腌制那 15 分钟；它比你想象的更重要。",
    "青椒：1 个微辣的+1 个甜椒，能带出一点俏皮的辣味。"
  ],
  "relatedSlugs": [
    "beef-and-broccoli",
    "onion-beef-stir-fry",
    "cashew-chicken"
  ],
  "image": "/images/recipes/green-pepper-beef.webp"
};
