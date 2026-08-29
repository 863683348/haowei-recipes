import type { Recipe } from "@/lib/types";

/** Pickled Beans Stir-Fried with Chicken Gizzards (酸豆角炒鸡胗) — Seed batch */
export const pickled_beans_chicken_gizzards: Recipe = {
  "id": "suan-dou-jiao-chao-ji-zhen",
  "slug": "pickled-beans-chicken-gizzards",
  "titleEn": "Pickled Beans Stir-Fried with Chicken Gizzards",
  "titleZh": "酸豆角炒鸡胗",
  "pinyin": "suān dòu jiǎo chǎo jī zhēn",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Changsha",
  "regionZh": "长沙",
  "difficulty": "medium",
  "timeMin": 32,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version parboils gizzards first for tenderness—no tough chew. Uses minimal oil and no cornstarch, unlike restaurant versions that rely on velveting.",
  "versionNoteZh": "家常版先焯水去腥增嫩，不靠淀粉上浆；餐馆版常用淀粉+蛋清滑炒保嫩。",
  "tags": [
    "30-min",
    "offal",
    "bold-flavor"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle ran a night-market stall in Changsha’s Pozi Street—he’d slice chicken gizzards paper-thin on a bamboo block while my cousin rinsed acid beans in a blue enamel bowl. Their secret? A 10-second blanch in ginger-water before stir-frying.",
  "storyZh": "我舅舅曾在长沙坡子街夜市摆摊——他蹲在竹砧板前把鸡胗片成薄如纸的片，我表妹则在蓝搪瓷盆里淘洗酸豆角。他们的诀窍？姜水焯烫10秒，再炒。",
  "ingredients": [
    {
      "id": "bd-01",
      "nameEn": "pickled long beans (suan dou jiao)",
      "nameZh": "酸豆角",
      "pinyin": "suān dòu jiǎo",
      "amountMetric": "100 g",
      "amountUS": "¾ cup, chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Same as above—firm, olive-green, mildly sour.",
      "noteZh": "同上：质地紧实、橄榄绿、微酸。"
    },
    {
      "id": "pr-02",
      "nameEn": "chicken gizzards",
      "nameZh": "鸡胗",
      "pinyin": "jī zhēn",
      "amountMetric": "180 g",
      "amountUS": "¾ cup, thinly sliced",
      "category": "protein",
      "pantry": "local",
      "note": "Buy fresh or thawed frozen. Slice against grain into 2 mm strips. Ask butcher to slice if unsure.",
      "noteZh": "选新鲜或解冻鸡胗；逆纹切成2毫米宽条；不确定可请肉贩代切。"
    },
    {
      "id": "in-01",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp, julienned",
      "category": "produce",
      "pantry": "local",
      "note": "Young ginger preferred—peel and julienne fine. Avoid dried ginger powder.",
      "noteZh": "优选嫩姜，去皮切细丝；禁用干姜粉。",
      "termKey": "ginger"
    },
    {
      "id": "sc-02",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp, sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Green parts only for garnish—add at end.",
      "noteZh": "仅取葱绿作最后点缀。",
      "termKey": "scallion"
    },
    {
      "id": "cw-01",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry if unavailable. Never use cooking wine with salt.",
      "noteZh": "缺货可用干雪莉酒代替；禁用含盐料酒。",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Bring 500 ml water to boil with 10 g ginger (thin slices). Add gizzards; blanch 10 seconds. Drain and rinse under cold water. Pat dry.",
      "textZh": "500毫升水加10克姜片煮沸，下鸡胗焯10秒；捞出过凉水，彻底擦干。",
      "zhHint": "姜水焯10秒",
      "stateNote": {
        "visual": "Gizzards turn opaque ivory; surface tightens slightly.",
        "visualZh": "鸡胗转为不透明象牙色，表面微收紧。",
        "timeRef": "10 seconds",
        "timeRefZh": "10秒",
        "heat": "high",
        "signal": "Edges curl just barely—no gray foam or cloudiness.",
        "signalZh": "边缘微微卷起——无灰白浮沫或浑浊。"
      }
    },
    {
      "text": "Heat wok over high heat until smoking lightly. Add 10 ml (2 tsp) peanut oil.",
      "textZh": "铁锅烧至微冒青烟，下10毫升（2茶匙）花生油。",
      "zhHint": "锅要见烟",
      "stateNote": {
        "visual": "Thin veil of smoke rises steadily from center of wok.",
        "visualZh": "锅心持续升起一缕细烟。",
        "timeRef": "45–60 seconds",
        "timeRefZh": "45–60秒",
        "heat": "high",
        "signal": "Oil flows like water—not thick or sluggish.",
        "signalZh": "油流动如水，不粘滞。"
      }
    },
    {
      "text": "Add gizzards in single layer. Let sear 30 seconds untouched, then stir-fry 1 minute until edges brown and centers remain springy.",
      "textZh": "鸡胗平铺锅底，静置30秒不翻动，再猛火快炒1分钟至边缘微褐、中心仍弹牙。",
      "zhHint": "先煎后炒",
      "stateNote": {
        "visual": "Golden-brown sear marks appear; gizzards spring back when pressed.",
        "visualZh": "出现金棕色焦痕；按压后迅速回弹。",
        "timeRef": "1 minute 30 seconds total",
        "timeRefZh": "共1分30秒",
        "heat": "high",
        "signal": "Audible sizzle remains constant—no steam burst.",
        "signalZh": "持续响亮‘滋啦’声——无蒸汽爆发。"
      }
    },
    {
      "text": "Push gizzards aside. Add remaining ginger juliennes to hot oil; stir 10 seconds until fragrant.",
      "textZh": "将鸡胗拨至锅边，在余油中下剩余姜丝，煸10秒至辛香。",
      "zhHint": "姜丝爆香",
      "stateNote": {
        "visual": "Ginger softens at edges but stays pale; oil shimmers with golden flecks.",
        "visualZh": "姜丝边缘微软但未变色；油面浮着金点。",
        "timeRef": "10 seconds",
        "timeRefZh": "10秒",
        "heat": "high",
        "signal": "Sharp, clean ginger scent fills air—no bitterness.",
        "signalZh": "空气充满清冽姜香——无苦涩味。"
      }
    },
    {
      "text": "Add pickled beans and Shaoxing wine. Stir-fry 3 minutes on high heat until beans darken and gizzards absorb tangy aroma. Finish with scallion greens.",
      "textZh": "下酸豆角和绍兴酒，高火猛炒3分钟至豆角色深、鸡胗吸饱酸香；撒葱绿出锅。",
      "zhHint": "高火抢炒",
      "stateNote": {
        "visual": "Beans cling to gizzards; steam carries sharp, fermented brightness.",
        "visualZh": "豆角裹附鸡胗；蒸气透出明亮发酵酸香。",
        "timeRef": "3 minutes",
        "timeRefZh": "3分钟",
        "heat": "high",
        "signal": "Acid aroma cuts through oil scent—bright, not sour-rotten.",
        "signalZh": "酸香穿透油味——清亮，非腐败酸臭。"
      }
    }
  ],
  "tips": [
    "Blanching gizzards is non-negotiable—it removes gamey notes and ensures even cooking.",
    "Slice gizzards *against* the grain: look for parallel muscle fibers and cut perpendicular.",
    "If gizzards are tough after stir-frying, they were either under-blanch or overcooked later—adjust timing."
  ],
  "tipsZh": [
    "鸡胗焯水不可省——去腥且保熟度均匀。",
    "切鸡胗务必逆纹：看清平行肌纤维，垂直下刀。",
    "若炒后仍韧，说明焯水不足或后续火候过长——请调整时间。"
  ],
  "relatedSlugs": [
    "pickled-beans-pork"
  ],
  "image": "/images/recipes/pickled-beans-chicken-gizzards.webp"
};
