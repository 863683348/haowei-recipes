import type { Recipe } from "@/lib/types";

/** Pan-Fried Dumplings (Jian Jiao) (煎饺) — Day batch */
export const pan_fried_dumplings: Recipe = {
  "id": "jian-jiao",
  "slug": "pan-fried-dumplings",
  "titleEn": "Pan-Fried Dumplings (Jian Jiao)",
  "titleZh": "煎饺",
  "pinyin": "jiān jiǎo",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version starts from already-cooked (boiled or leftover) dumplings and simply crisps one face in a skillet; the restaurant 'water-fried' method cooks raw dumplings in the pan with a flour slurry to build a lacy crust.",
  "versionNoteZh": "家常版用煮熟（或剩的）饺子，只需在锅里把一面煎脆；餐馆「水煎」法是把生饺子下锅加面粉水，煎出网状脆底。",
  "tags": [
    "30-min",
    "weeknight",
    "leftover-makeover"
  ],
  "dietary": [
    "none"
  ],
  "story": "Northern Chinese households almost always boil more dumplings than they can eat, and the cold leftovers are never reheated by steaming — they go into a hot oiled skillet so the bottoms turn crisp while the tops stay soft. That texture contrast is the whole point of jian jiao.",
  "storyZh": "北方人家包饺子几乎总会煮多，剩饺子从不上笼蒸——而是下热油锅，把底面煎得焦脆、上盖依旧软韧。这一脆一软的反差，正是煎饺的全部意义。",
  "ingredients": [
    {
      "id": "jj-1",
      "nameEn": "cooked pork & cabbage dumplings",
      "nameZh": "猪肉白菜熟饺子",
      "pinyin": "zhū ròu bái cài shú jiǎo zi",
      "amountMetric": "20 pieces (about 500 g)",
      "amountUS": "20 pieces",
      "category": "protein",
      "pantry": "local",
      "note": "Boiled, cooled and surface-dry. Fresh or frozen-thawed both work.",
      "noteZh": "煮熟放凉、表面干爽；现包或解冻的均可。"
    },
    {
      "id": "jj-2",
      "nameEn": "neutral cooking oil",
      "nameZh": "中性食用油",
      "pinyin": "zhōng xìng shí yòng yóu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "jj-3",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "jj-4",
      "nameEn": "all-purpose flour (for slurry)",
      "nameZh": "中筋面粉（调浆）",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Mixed with the water to make the lacy crisp skirt.",
      "noteZh": "与水调成面粉水，煎出网状脆裙。"
    },
    {
      "id": "jj-5",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "20 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "For dipping. Rice vinegar is acceptable but flatter.",
      "noteZh": "蘸食用。米醋可替代但层次略薄。",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "jj-6",
      "nameEn": "chili oil",
      "nameZh": "辣椒油",
      "pinyin": "là jiāo yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Add to the vinegar dip to taste.",
      "noteZh": "按口味调入醋碟。",
      "termKey": "chili-oil"
    },
    {
      "id": "jj-7",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "15 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "note": "Finely sliced for garnish.",
      "noteZh": "切葱花作点缀。",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Pat the cooked dumplings completely dry with paper towel. Any surface water will splatter and stop browning.",
      "textZh": "熟饺子用厨房纸彻底擦干；表面有水会爆油、也上不了色。",
      "zhHint": "先擦干，防溅防不上色",
      "stateNote": {
        "visual": "Dumpling skins look matte, with no visible beads of moisture.",
        "visualZh": "饺子皮呈哑光，无可见水珠。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Paper towel comes away dry after pressing a dumpling.",
        "signalZh": "纸巾按压饺子后无湿痕。"
      }
    },
    {
      "text": "Heat a nonstick or well-seasoned skillet over medium with 15 ml oil. Arrange dumplings flat-side down in concentric circles, leaving 5 mm gaps. Fry undisturbed 3 minutes.",
      "textZh": "不粘锅或熟铁锅中火放 15 毫升油，饺子平底面朝下呈同心圆摆开，间隔 5 毫米；静置煎 3 分钟。",
      "zhHint": "平底朝下，静置别动",
      "stateNote": {
        "visual": "Bottoms turn even golden-brown; the arrangement holds its pattern.",
        "visualZh": "底面均匀金褐，摆盘纹路不乱。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Sizzling quiets to a steady low hiss as moisture leaves.",
        "signalZh": "滋滋声由急转稳，水汽渐干。"
      }
    },
    {
      "text": "Whisk flour into the 60 ml water. Pour it around the edge of the pan (not over the dumplings). It should hiss and foam immediately.",
      "textZh": "面粉调入 60 毫升清水搅匀，沿锅边淋入（不要浇在饺子上）；应立即滋滋起泡。",
      "zhHint": "沿边淋浆，别浇饺子",
      "stateNote": {
        "visual": "Liquid turns cloudy, bubbles up, and starts to climb the dumpling sides.",
        "visualZh": "浆水转白起泡，并沿饺身向上爬。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Immediate loud sizzle on contact with the pan wall.",
        "signalZh": "浆液触锅壁时立刻发出响亮滋声。"
      }
    },
    {
      "text": "Cover and steam 5–6 minutes over medium-low until the water has almost evaporated and dumplings are heated through.",
      "textZh": "盖盖，中小火焖 5–6 分钟，至水分基本收干、饺子热透。",
      "zhHint": "加盖焖透，火别大",
      "stateNote": {
        "visual": "Lid fogs heavily, then clears; the slurry dries into a thin film.",
        "visualZh": "锅盖先起浓雾后转清，浆水收成薄膜。",
        "timeRef": "5–6 minutes",
        "timeRefZh": "5–6 分钟",
        "heat": "medium-low",
        "signal": "Sizzling turns from wet sputtering to a dry crackle.",
        "signalZh": "声音由带水的爆响转为干爽的脆响。"
      }
    },
    {
      "text": "Uncover, drizzle the remaining 5 ml oil around the edge, and cook 1–2 more minutes until the lace skirt is deep gold and rigid.",
      "textZh": "开盖，沿锅边补淋余下 5 毫升油，再煎 1–2 分钟至脆裙深金、质地挺硬。",
      "zhHint": "补油收脆，别过火",
      "stateNote": {
        "visual": "Skirt is amber, lacy and lifts in one piece; bottoms are deep brown, not black.",
        "visualZh": "脆裙琥珀色呈网眼状，可整片掀起；底面深褐不焦黑。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium",
        "signal": "Tapping the skirt with a spatula gives a crisp, paper-like sound.",
        "signalZh": "锅铲轻敲脆裙，发出纸张般的脆响。"
      }
    },
    {
      "text": "Slide onto a plate crust-side up. Mix vinegar with chili oil, scatter scallion, and serve at once while the crust is still crisp.",
      "textZh": "整片滑入盘中、脆面朝上；香醋调辣椒油，撒葱花，趁脆立即上桌。",
      "zhHint": "脆面朝上，趁热吃",
      "stateNote": {
        "visual": "Skirt sits on top, intact and glossy; dumpling tops are plump and pale.",
        "visualZh": "脆裙完整覆于表面带光泽，饺身饱满色浅。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Steam rises thinly; crust stays audibly crisp for the first 3 minutes.",
        "signalZh": "热气细匀外冒，前三分钟脆度依旧。"
      }
    }
  ],
  "tips": [
    "Never crowd the pan — dumplings that touch will steam each other and stay pale.",
    "A cast-iron or carbon-steel pan gives a far better crust than thin nonstick; preheat it properly.",
    "If the skirt sticks, the slurry was too thick: aim for milk consistency, 1 tbsp flour per 1/4 cup water."
  ],
  "tipsZh": [
    "锅里别挤——饺子相贴会互相蒸，颜色一定白。",
    "生铁锅/熟铁锅的脆底远胜薄不粘锅，但务必充分预热。",
    "脆裙发粘说明浆太稠：以牛奶状为准，1 汤匙面粉配 1/4 杯水。"
  ],
  "relatedSlugs": [
    "pork-cabbage-dumplings",
    "shrimp-dumplings",
    "shanghai-shengjian-bao"
  ],
  "image": "/images/recipes/pork-cabbage-dumplings.webp"
};
