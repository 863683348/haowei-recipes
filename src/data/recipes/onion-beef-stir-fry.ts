import type { Recipe } from "@/lib/types";

/** Onion Beef Stir-fry (洋葱炒牛肉) (洋葱炒牛肉) — Day batch */
export const onion_beef_stir_fry: Recipe = {
  "id": "onion-beef-stir-fry",
  "slug": "onion-beef-stir-fry",
  "titleEn": "Onion Beef Stir-fry (洋葱炒牛肉)",
  "titleZh": "洋葱炒牛肉",
  "pinyin": "yáng cōng chǎo niú ròu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version is a one-pan 20-minute dinner: velveted beef, sweet caramelized onion, savory glaze. Restaurant version adds a slow-oil beef fry and a splash of dark soy for deeper color.",
  "versionNoteZh": "家常版是 20 分钟一锅出：上浆牛肉、甜软洋葱、咸香酱汁。餐厅版会滑油并加一点老抽提色。",
  "tags": [
    "20-min",
    "weeknight",
    "beef",
    "kid-friendly",
    "one-pan"
  ],
  "dietary": [
    "none"
  ],
  "story": "Onion beef is the fastest bridge between a busy weekday and a proper Chinese dinner: two ingredients, one pan, twenty minutes. In northern Chinese kitchens it's the dish a child learns first — because the onion sweetens on its own, the sauce forgives mistakes, and it pairs with rice, noodles, or bread equally well. My grandmother called it 'the beginner's beef' for a reason.",
  "storyZh": "洋葱炒牛肉是忙碌工作日和一顿正经中餐之间最快的桥：两种食材、一口锅、二十分钟。北方厨房里这是孩子学的第一道牛肉菜——因为洋葱自己会变甜，酱汁容错率高，配饭、配面、配馒头都行。我奶奶管它叫“入门牛肉”，不是没道理。",
  "ingredients": [
    {
      "id": "ob-beef",
      "nameEn": "beef sirloin or flank, thinly sliced against the grain",
      "nameZh": "牛肉片",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Flank or sirloin both work; slice thin, against the grain.",
      "noteZh": "牛腩排或牛里脊都行；切薄、逆纹。"
    },
    {
      "id": "ob-onion",
      "nameEn": "onion, cut into thick strips",
      "nameZh": "洋葱",
      "amountMetric": "2 (about 300 g)",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "note": "Yellow or red onion; thick strips so they don't vanish.",
      "noteZh": "黄皮或红皮洋葱；切粗条才不会炒没影。"
    },
    {
      "id": "ob-garlic",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ob-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ob-dark-soy",
      "nameEn": "dark soy sauce (optional, for color)",
      "nameZh": "老抽",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "ob-shaoxing",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ob-oyster",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "ob-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Echoes the onion's natural sweetness.",
      "noteZh": "呼应洋葱本身的甜味。"
    },
    {
      "id": "ob-starch",
      "nameEn": "cornstarch (for velveting + slurry)",
      "nameZh": "玉米淀粉",
      "amountMetric": "2 tbsp total",
      "amountUS": "2 tbsp total",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ob-oil",
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
      "text": "Slice beef thinly against the grain. Velvet: mix with 1 tbsp soy, Shaoxing, and 1 tbsp cornstarch. Rest 10 minutes.",
      "textZh": "牛肉逆纹切薄片。上浆：与 1 汤匙生抽、料酒、1 汤匙淀粉拌匀，静置 10 分钟。",
      "zhHint": "牛肉上浆",
      "stateNote": {
        "visual": "Beef thinly coated, tacky to the touch",
        "visualZh": "牛肉裹料薄而均匀，摸起来微黏",
        "timeRef": "10 minutes rest",
        "timeRefZh": "静置 10 分钟",
        "signal": "No free liquid in the bowl",
        "signalZh": "碗底没有游离汁水"
      }
    },
    {
      "text": "In a small bowl mix: remaining 1/2 tbsp soy, dark soy, oyster sauce, sugar, 1/3 cup water (80 ml), 1 tbsp cornstarch.",
      "textZh": "调碗汁：剩余半汤匙生抽、老抽、蚝油、糖、三分之一杯水（80 毫升）、1 汤匙淀粉，搅匀。",
      "zhHint": "调碗汁",
      "stateNote": {
        "visual": "Deep brown sauce, sugar dissolved",
        "visualZh": "深棕色酱汁，糖已融化",
        "signal": "Taste: savory-sweet balance",
        "signalZh": "尝一口：咸甜平衡"
      }
    },
    {
      "text": "Heat 2 tbsp oil over high until shimmering. Add beef in one layer, sear 30 seconds without moving, then stir-fry 1 minute until mostly browned. Remove.",
      "textZh": "锅放 2 汤匙油，大火烧至泛光。牛肉单层下锅，静置 30 秒再翻动，翻炒 1 分钟至大部分变色。盛出。",
      "zhHint": "大火快煎牛肉",
      "stateNote": {
        "visual": "Beef browns fast; faint pink remains in the center",
        "visualZh": "牛肉快速上色，中心还剩一点粉色",
        "heat": "high",
        "timeRef": "1 minute after the 30-second sear",
        "timeRefZh": "静置 30 秒后再炒 1 分钟",
        "signal": "Beef releases easily from the pan",
        "signalZh": "牛肉能轻松离锅"
      }
    },
    {
      "text": "Add remaining 1 tbsp oil, then onion and garlic. Stir-fry 2-3 minutes until onion turns translucent and sweet.",
      "textZh": "加剩余 1 汤匙油，下洋葱和蒜片，翻炒 2-3 分钟至洋葱变半透明、变甜。",
      "zhHint": "炒软洋葱",
      "stateNote": {
        "visual": "Onion turns from white to translucent gold with caramelized edges",
        "visualZh": "洋葱从白色变成半透明金色，边缘微微焦糖化",
        "heat": "medium-high",
        "timeRef": "2-3 minutes",
        "timeRefZh": "2-3 分钟",
        "signal": "Onion smells sweet — the raw pungency is gone",
        "signalZh": "洋葱散发出甜香——生辣味已消失"
      },
      "tip": "This is where the dish gets its sweetness. Don't rush the onion.",
      "tipZh": "这道菜的甜味就来自这里。别催洋葱。"
    },
    {
      "text": "Return the beef, give the sauce a stir, pour it in. Toss 30 seconds until glossy and everything is coated.",
      "textZh": "放回牛肉，搅一下碗汁倒入，翻炒 30 秒至油亮裹匀。",
      "zhHint": "回锅挂汁",
      "stateNote": {
        "visual": "Sauce turns glossy and clings; beef and onion glisten together",
        "visualZh": "酱汁油亮挂壁，牛肉与洋葱一起泛着光",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Sauce thickens to a glaze — done",
        "signalZh": "酱汁变稠成釉——完成"
      }
    },
    {
      "text": "Serve immediately over rice or noodles. The onion keeps sweetening as it sits — leftovers are great cold in a sandwich.",
      "textZh": "立刻配米饭或面条上桌。洋葱放置后会越来越甜——剩下的夹三明治也很好吃。",
      "zhHint": "出锅",
      "stateNote": {
        "visual": "Glossy beef and golden onion in a shiny sauce",
        "visualZh": "油亮牛肉与金色洋葱裹着闪亮酱汁",
        "signal": "Serve hot",
        "signalZh": "趁热上桌"
      }
    }
  ],
  "tips": [
    "The 30-second untouched sear is non-negotiable for tender beef.",
    "Onion + high heat = sweet; onion + low heat = mushy. Keep it medium-high.",
    "Swap oyster sauce for mushroom stir-fry sauce to make it vegetarian-friendly (serve with tofu).",
    "Leftover onion beef makes a brilliant sandwich filling the next day."
  ],
  "tipsZh": [
    "前 30 秒静置不翻是牛肉嫩的关键，别省。",
    "洋葱+大火=甜；洋葱+小火=烂糊。保持中大火。",
    "蚝油换成菌菇炒酱、配豆腐，就变成素食友好版。",
    "剩的洋葱炒牛肉第二天夹三明治，绝了。"
  ],
  "relatedSlugs": [
    "beef-and-broccoli",
    "green-pepper-beef",
    "egg-fried-rice"
  ],
  "image": "/images/recipes/beef-and-broccoli.webp"
};
