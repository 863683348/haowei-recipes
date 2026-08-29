import type { Recipe } from "@/lib/types";

/** Sour Radish Stir-Fried Chicken Offal (酸萝卜炒鸡杂) — Seed batch */
export const sour_radish_stir_fried_chicken_offal: Recipe = {
  "id": "suan-luo-bo-chao-ji-za",
  "slug": "sour-radish-stir-fried-chicken-offal",
  "titleEn": "Sour Radish Stir-Fried Chicken Offal",
  "titleZh": "酸萝卜炒鸡杂",
  "pinyin": "suān luó bo chǎo jī zá",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 26,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses pre-salted, fermented daikon (suan luo bo) from Asian grocers — no fermentation required. Chicken gizzards are parboiled and sliced thin for quick, even cooking.",
  "versionNoteZh": "家庭版采用亚超现成酸萝卜（无需自制发酵），鸡胗焯水切薄片，熟得快、口感匀。",
  "tags": [
    "30-min",
    "tangy",
    "offal"
  ],
  "dietary": [
    "none"
  ],
  "story": "My mother’s neighbor in Wuhou District, Chengdu, kept a 30-year-old earthenware crock of sour radish brine. Every winter solstice, she’d share a jar with us — the crunchiest, most pungent ones went straight into stir-fries with chicken gizzards. I still hear her laugh: 'The sourer the radish, the happier the stomach!'",
  "storyZh": "我在成都武侯区的邻居阿姨，有一口三十年老陶坛酸萝卜卤水。每年冬至，她必送我们一坛——最脆最冲的几块，直接下锅炒鸡杂。我还记得她笑说：‘萝卜越酸，胃越欢喜！’",
  "ingredients": [
    {
      "id": "xx-01",
      "nameEn": "fermented sour radish (daikon, Sichuan style)",
      "nameZh": "四川酸萝卜",
      "pinyin": "sì chuān suān luó bo",
      "amountMetric": "120 g",
      "amountUS": "1 cup, drained and julienned",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for ‘suan luo bo’ in refrigerated section of Asian markets. Sub: Korean kkakdugi (cut smaller) + 1/2 tsp Chinese black vinegar",
      "noteZh": "亚超冷藏区找‘酸萝卜’。替代：韩式萝卜泡菜（切细）+1/2茶匙中国黑醋"
    },
    {
      "id": "xx-02",
      "nameEn": "chicken gizzards",
      "nameZh": "鸡胗",
      "pinyin": "jī zhēn",
      "amountMetric": "140 g",
      "amountUS": "5 oz (cleaned, sliced 3 mm)",
      "category": "protein",
      "pantry": "local",
      "note": "Pre-cleaned preferred. If whole, remove yellow membrane and rinse well.",
      "noteZh": "优选预处理鸡胗；若买整只，务必撕净黄膜并冲洗"
    },
    {
      "id": "xx-03",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "pinyin": "suàn",
      "amountMetric": "10 g",
      "amountUS": "2 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "garlic"
    },
    {
      "id": "xx-04",
      "nameEn": "ginger",
      "nameZh": "姜",
      "pinyin": "jiāng",
      "amountMetric": "8 g",
      "amountUS": "1 tsp, minced",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "ginger"
    },
    {
      "id": "xx-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "xx-06",
      "nameEn": "Chinese black vinegar",
      "nameZh": "中国黑醋",
      "pinyin": "zhōng guó hēi cù",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute balsamic vinegar (use 3/4 tsp) — less smoky, but works",
      "noteZh": "可用意大利香醋替代（减至3/4茶匙），烟熏味略淡但可用",
      "termKey": "chinese-black-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Rinse gizzards, slice into 3-mm thick half-moons. Blanch in boiling water with 5 ml (1 tsp) Shaoxing wine for 90 seconds. Drain, rinse under cold water, and squeeze dry.",
      "textZh": "鸡胗洗净切3毫米半圆片，沸水加5毫升绍兴酒焯90秒，过凉水后挤干。",
      "zhHint": "焯水去腥，挤干防溅油",
      "stateNote": {
        "visual": "Gizzard slices firm up and shrink slightly",
        "visualZh": "鸡胗片变紧实、略有收缩",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "Water resumes gentle boil within 10 seconds of adding gizzards",
        "signalZh": "下胗后10秒内水重归微沸"
      }
    },
    {
      "text": "Julienne sour radish into 3-cm × 2-mm strips. Lightly squeeze to remove excess brine — keep 1 tsp brine for seasoning.",
      "textZh": "酸萝卜切3厘米×2毫米细条，轻挤去多余卤汁，留1茶匙卤汁调味。",
      "zhHint": "挤卤汁控水，防菜肴过咸",
      "stateNote": {
        "visual": "Radish shreds hold shape without dripping",
        "visualZh": "萝卜丝成型不滴水",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No pooling liquid remains in bowl",
        "signalZh": "碗底无卤汁积聚"
      }
    },
    {
      "text": "Heat wok over medium-high heat. Add 10 ml (2 tsp) neutral oil. When shimmering, add ginger and garlic. Stir 30 seconds until golden and aromatic.",
      "textZh": "中大火烧热锅，下10毫升油，油热后下姜蒜末，煸30秒至金黄出香。",
      "zhHint": "姜蒜先爆香，奠定风味基底",
      "stateNote": {
        "visual": "Garlic edges turn pale gold; tiny bubbles form around ginger",
        "visualZh": "蒜末边缘微黄，姜末周围冒细泡",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "Warm, sweet-spicy aroma rises — no browning",
        "signalZh": "温甜辛香升腾，未焦糊"
      }
    },
    {
      "text": "Add gizzards. Stir-fry 1½ minutes over high heat until lightly browned and springy. Push to sides.",
      "textZh": "下鸡胗，大火快炒1分30秒至微褐、有弹性，拨至锅边。",
      "zhHint": "猛火锁汁，保持嚼劲",
      "stateNote": {
        "visual": "Gizzards develop light caramel spots; surface dries slightly",
        "visualZh": "鸡胗出现浅焦斑，表面略收干",
        "timeRef": "1½ minutes",
        "timeRefZh": "1分30秒",
        "heat": "high",
        "signal": "Slight sizzle resumes when gizzards contact hot oil",
        "signalZh": "鸡胗触热油时再次发出轻微滋滋声"
      }
    },
    {
      "text": "Add sour radish and reserved brine. Stir-fry 1 minute — just until radish softens slightly but retains crunch. Drizzle with light soy sauce and black vinegar. Toss once, turn off heat, and serve immediately.",
      "textZh": "下酸萝卜及预留卤汁，大火炒1分钟至萝卜微软仍脆。淋生抽与黑醋，翻匀即关火上桌。",
      "zhHint": "最后调味，突出酸鲜本味",
      "stateNote": {
        "visual": "Radish deepens to translucent amber; steam carries sharp, clean sourness",
        "visualZh": "萝卜转为透亮琥珀色；蒸汽带清爽酸香",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Taste reveals bright tang before any saltiness",
        "signalZh": "入口先觉明快酸香，后有咸鲜"
      }
    }
  ],
  "tips": [
    "Sour radish brine is key — it adds depth no vinegar alone can match. Don’t skip the reserved teaspoon.",
    "Cut gizzards uniformly — uneven slices cause some to overcook while others stay tough.",
    "This dish tastes best within 2 minutes of cooking. The radish’s crispness fades fast."
  ],
  "tipsZh": [
    "酸萝卜卤汁是灵魂，不可省略预留的那1茶匙。",
    "鸡胗切片务必均匀，否则易出现部分过老、部分偏韧。",
    "此菜最佳赏味期仅出锅后2分钟——萝卜脆感散失极快。"
  ],
  "relatedSlugs": [
    "west-china-celery-stir-fried-chicken-strip",
    "spicy-pickled-pepper-stir-fried-chicken-offal"
  ],
  "image": "/images/recipes/sour-radish-stir-fried-chicken-offal.webp"
};
