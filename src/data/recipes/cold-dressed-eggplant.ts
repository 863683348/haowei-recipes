import type { Recipe } from "@/lib/types";

/** Cold-Dressed Steamed Eggplant (凉拌茄子) (凉拌茄子) — Day batch */
export const cold_dressed_eggplant: Recipe = {
  "id": "cold-dressed-eggplant",
  "slug": "cold-dressed-eggplant",
  "titleEn": "Cold-Dressed Steamed Eggplant (凉拌茄子)",
  "titleZh": "凉拌茄子",
  "pinyin": "liáng bàn qié zi",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "A restaurant either deep-fries the eggplant for a smoky skin or steams it whole and tears it; the tearing gives ragged surfaces that hold more sauce. The family version steams it — no oil, no splatter — and relies on a punchy garlic sauce rather than char for its flavor.",
  "versionNoteZh": "餐厅要么炸茄子取焦香外皮，要么整条蒸熟再手撕——撕出的毛边能挂住更多酱。家常版选择蒸：无油、不溅油，味道全靠蒜味酱汁而不是焦香。",
  "tags": [
    "sichuan",
    "cold dish",
    "vegetarian",
    "summer",
    "quick",
    "no-fry"
  ],
  "dietary": [
    "vegan",
    "vegetarian"
  ],
  "story": "In Sichuan, this is what lands on the table first on a hot evening — the one cold dish that requires no skill and yet is easy to get wrong. The trick is restraint: steam the eggplant whole so it never touches water, tear rather than cut it so the sauce has somewhere to hide, and pour a sauce raw garlic has already been sitting in. Five minutes of work, and the plate is always the first emptied.",
  "storyZh": "在四川，夏天的傍晚它是头一个上桌的菜——最简单的凉菜，也最容易做坏。诀窍在于克制：整条蒸，让它一滴水都不沾；不上刀切而用手撕，好让酱汁有地方藏；浇的那碗酱要提前让生蒜在里面泡着。五分钟的事，盘子却总是第一个见底。",
  "ingredients": [
    {
      "id": "cde-eggplant",
      "nameEn": "Chinese eggplant (long, thin-skinned)",
      "nameZh": "长茄子",
      "amountMetric": "2 large (about 500 g)",
      "amountUS": "2 large (about 1.1 lb)",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "cde-garlic",
      "nameEn": "garlic, finely minced",
      "nameZh": "蒜末",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "note": "Raw garlic is the point. Do not cook it.",
      "noteZh": "生蒜就是这道菜的灵魂，不要炒。"
    },
    {
      "id": "cde-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cde-vinegar",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: rice vinegar plus a pinch of sugar.",
      "noteZh": "替代：米醋加一小撮糖。",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "cde-chili-oil",
      "nameEn": "chili oil (with sediment)",
      "nameZh": "红油辣子（带辣椒面）",
      "amountMetric": "1–2 tsp",
      "amountUS": "1–2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Spoon from the bottom so you get the chili sediment too.",
      "noteZh": "要从底部舀，连辣椒面的沉淀一起。",
      "termKey": "chili-oil"
    },
    {
      "id": "cde-sesame-oil",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cde-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cde-scallion",
      "nameEn": "scallion greens, finely sliced",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cde-sesame",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟白芝麻",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-seeds"
    },
    {
      "id": "cde-cilantro",
      "nameEn": "cilantro leaves (optional)",
      "nameZh": "香菜（可选）",
      "amountMetric": "a small handful",
      "amountUS": "a small handful",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "While the water heats, mince the garlic and combine it with soy sauce, vinegar, sugar and sesame oil in a small bowl. Let it sit while the eggplant cooks — raw garlic mellows in acid.",
      "textZh": "烧水的同时把蒜切末，与生抽、香醋、糖、香油一起放进小碗拌匀。让它静置到茄子蒸好——生蒜在酸里会变得柔和。",
      "zhHint": "调蒜汁静置",
      "stateNote": {
        "visual": "Sauce is dark brown with garlic suspended in it; sugar has fully dissolved",
        "visualZh": "酱汁呈深褐色，蒜粒悬浮其中；糖完全化开",
        "timeRef": "rest 10–12 minutes while steaming",
        "timeRefZh": "蒸茄子期间静置 10–12 分钟",
        "signal": "The raw garlic bite softens — taste it; it should be pungent but not harsh",
        "signalZh": "生蒜的冲味变柔——尝一下，应该是浓郁但不刺喉"
      }
    },
    {
      "text": "Steam the whole eggplants, unpeeled, over high heat for 10–12 minutes. Do not cut them open first — waterlogging is what makes this dish bland.",
      "textZh": "整条茄子带皮大火蒸 10–12 分钟。不要事先切开口——进了水，这道菜就寡淡了。",
      "zhHint": "整条蒸制",
      "stateNote": {
        "visual": "Skins turn dull purple and wrinkle; the flesh collapses completely when pressed",
        "visualZh": "外皮变成哑光紫并起皱；按压时茄肉完全塌陷",
        "heat": "high",
        "timeRef": "10–12 minutes",
        "timeRefZh": "10–12 分钟",
        "signal": "A skewer slides through the middle with zero resistance and no pale core remains",
        "signalZh": "竹签毫无阻力穿透中心，且没有夹生的白芯"
      },
      "tip": "Keep the lid on and don't peek — every peek adds two minutes.",
      "tipZh": "盖紧锅盖别开缝——每看一次就多蒸两分钟。"
    },
    {
      "text": "Transfer to a plate and let cool until you can handle it, about 5 minutes. Cut off the stem.",
      "textZh": "取出装盘放凉到手能碰的程度，约 5 分钟。切掉蒂头。",
      "zhHint": "放凉去蒂",
      "stateNote": {
        "visual": "Eggplant is flabby and cool to the touch; no steam rises from it",
        "visualZh": "茄子瘫软、摸起来不烫；没有蒸汽冒出",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "You can hold the skin comfortably with your fingertips",
        "signalZh": "用指尖捏着外皮不觉得烫"
      }
    },
    {
      "text": "Tear the eggplant lengthwise into thick strips with your fingers or chopsticks — roughly 1.5 cm wide. Arrange them loosely on a shallow plate.",
      "textZh": "用筷子或手顺着纹理把茄子撕成约 1.5 厘米宽的粗条，蓬松地码在浅盘里。",
      "zhHint": "手撕成条",
      "stateNote": {
        "visual": "Strips have ragged, feathered edges rather than clean knife cuts",
        "visualZh": "茄条边缘毛糙带有绒边，而不是刀切的整齐边",
        "signal": "Nothing is neatly squared — ragged means more surface for sauce",
        "signalZh": "没有一块是整齐的——毛边才能多挂酱汁"
      },
      "tip": "Never dressing warm eggplant: it will go watery and dilute the sauce.",
      "tipZh": "千万别拌热的：会出水把酱汁冲淡。"
    },
    {
      "text": "Spoon the garlic sauce over the strips, then drizzle chili oil over the top. Garnish with scallion greens, sesame seeds and cilantro.",
      "textZh": "把蒜味酱汁浇在茄条上，再淋一圈红油。最后撒葱花、熟芝麻和香菜。",
      "zhHint": "浇汁点缀",
      "stateNote": {
        "visual": "Sauce runs into the gaps between strips; chili oil pools red at the lowest point",
        "visualZh": "酱汁渗进茄条的缝隙；红油在盘底最低处积成红色",
        "signal": "Every strip is streaked — you can see sauce touching each piece",
        "signalZh": "每条都挂上了酱痕——每块都能碰到酱汁"
      }
    },
    {
      "text": "Let the plate sit 3 minutes before serving so the salt draws a little moisture out and the flavors meet. Serve at room temperature, tossing at the table.",
      "textZh": "静置 3 分钟再上桌，让盐逼出一点水分、味道融合。常温食用，上桌时再拌匀。",
      "zhHint": "静置入味",
      "stateNote": {
        "visual": "A thin sauce film appears at the bottom of the plate; strips darken slightly",
        "visualZh": "盘底出现薄薄一层酱汁；茄条颜色略微变深",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "The plate smells of garlic and vinegar before you pick up the chopsticks",
        "signalZh": "还没动筷就能闻到蒜香醋香"
      }
    }
  ],
  "tips": [
    "Steam whole, never cut first — water that gets inside can never be seasoned out.",
    "Tear, don't slice. Torn edges drink up the dressing.",
    "Let the garlic sit in the vinegar and soy for ten minutes; raw garlic is harsh until it mellows.",
    "This is also excellent with charred eggplant: blacken the skin directly over a gas flame, then peel."
  ],
  "tipsZh": [
    "整条蒸，绝不先切——进到茄子里的水，事后再也腌不回来。",
    "手撕优于刀切，毛边才能吸足酱汁。",
    "让蒜在醋和生抽里泡十分钟；生蒜不泡会很冲。",
    "明火烤版也很棒：把茄子直接放燃气火上烧到皮焦黑，再剥皮。"
  ],
  "relatedSlugs": [
    "grilled-eggplant-with-garlic-sauce",
    "smashed-cucumber",
    "cold-wood-ear"
  ],
  "image": "/images/recipes/grilled-eggplant-with-garlic-sauce.webp"
};
