import type { Recipe } from "@/lib/types";

/** Scallion Oil Noodles (葱油拌面) (葱油拌面) — Day batch */
export const scallion_noodles: Recipe = {
  "id": "scallion-noodles",
  "slug": "scallion-noodles",
  "titleEn": "Scallion Oil Noodles (葱油拌面)",
  "titleZh": "葱油拌面",
  "pinyin": "cōng yóu bàn miàn",
  "cuisine": "沪菜",
  "cuisineEn": "Shanghainese",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Shanghai street food classic. The scallion oil is made by slowly frying scallions in oil until deeply caramelized — the same oil becomes the sauce. Best made in batches and stored.",
  "versionNoteZh": "上海街头经典。用慢火将葱炸至深焦糖色，葱油就是酱汁本身。建议批量制作冷藏保存。",
  "tags": [
    "comfort",
    "vegetarian",
    "shanghai",
    "street-food"
  ],
  "dietary": [
    "vegetarian"
  ],
<<<<<<< HEAD
  tips: ["Use fresh ingredients."],
  tipsZh: ["使用新鲜食材。"],
  relatedSlugs: ["tomato-and-egg", "egg-fried-rice"],
  image: "/images/recipes/scallion-noodles.svg",
=======
  "story": "Born in Shanghai's street food stalls, scallion oil noodles are the ultimate fast comfort — noodles tossed in deeply fragrant scallion-infused oil with soy sauce. The trick is low and slow: scallions fried gently until they turn dark brown and sweet, not burnt.",
  "storyZh": "源于上海街头小吃摊，葱油拌面是最极致的快手 comfort food——面条拌入香气浓郁的葱油与酱油。秘诀是低温柔炸：葱炸至深褐色且甜，而非焦苦。",
  "image": "/images/recipes/scallion-noodles.svg",
  "ingredients": [
    {
      "id": "son-01",
      "nameEn": "large scallions (white and green parts)",
      "nameZh": "大葱（葱白葱绿）",
      "pinyin": "dà cōng",
      "amountMetric": "12 large stalks (about 300 g)",
      "amountUS": "12 large stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion",
      "note": "Use the whole stalk — white part for oil, green part for garnish. Welsh onion (negi) is the best substitute.",
      "noteZh": "整根都用——葱白炸油，葱绿做 garnish。威尔士葱（negi）是最佳替代。"
    },
    {
      "id": "son-02",
      "nameEn": "neutral oil (canola or peanut)",
      "nameZh": "无味油",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "son-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "son-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "son-05",
      "nameEn": "sugar",
      "nameZh": "糖",
      "amountMetric": "2 tsp",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "son-06",
      "nameEn": "wheat noodles (fresh)",
      "nameZh": "鲜面条",
      "pinyin": "xiǎn miàn tiáo",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "son-07",
      "nameEn": "sesame seeds, toasted",
      "nameZh": "熟芝麻",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut scallions into 5-cm lengths. Separate white and green parts. Pat white parts completely dry — water causes oil to splatter dangerously.",
      "textZh": "大葱切5厘米长段，葱白葱绿分开。葱白彻底擦干——生水会让热油危险飞溅。",
      "zhHint": "切葱擦干",
      "stateNote": {
        "visual": "Scallion pieces are rigid, deep green, with no moisture visible",
        "visualZh": "葱段挺硬、深绿，表面无水光",
        "signal": "No water droplets on scallion surface",
        "signalZh": "葱表面无水珠"
      }
    },
    {
      "text": "Combine oil, scallion white parts, and half the green parts in a wok or heavy pan. Heat over medium-low.",
      "textZh": "锅中倒入油、葱白和一半葱绿，中低温加热。",
      "zhHint": "冷油下葱"
    },
    {
      "text": "Slowly fry scallions, stirring occasionally, for 12–15 minutes until deeply dark brown and crispy. The oil should turn amber. Do not rush — burnt scallions taste bitter.",
      "textZh": "慢炸葱白，偶尔搅拌，12-15分钟直至深褐色酥脆。油会变成琥珀色。别急——烧焦的葱会发苦。",
      "zhHint": "慢炸至深褐",
      "stateNote": {
        "visual": "Scallions shrink and turn dark brown; oil is clear amber",
        "visualZh": "葱段收缩变深褐；油清澈琥珀色",
        "heat": "medium-low",
        "timeRef": "12–15 minutes",
        "timeRefZh": "12–15 分钟",
        "signal": "Scallions are crispy and dark, not black; oil smells sweet, not acrid",
        "signalZh": "葱酥脆深褐而非发黑；油香甜而非刺鼻"
      }
    },
    {
      "text": "Remove scallions with a slotted spoon. Reserve the scallion oil.",
      "textZh": "用漏勺捞出葱段，保留葱油。",
      "zhHint": "捞出葱段"
    },
    {
      "text": "To the warm scallion oil, whisk in soy sauces and sugar until dissolved.",
      "textZh": "趁葱油温热，搅入生抽、老抽和糖，至糖融化。",
      "zhHint": "调酱汁"
    },
    {
      "text": "Boil noodles in salted water according to package directions. Drain well.",
      "textZh": "面条沸水煮熟，充分沥干。",
      "zhHint": "煮面沥干"
    },
    {
      "text": "Toss hot noodles with the scallion oil sauce. Top with remaining scallion green parts and sesame seeds. Serve immediately.",
      "textZh": "热面条与葱油酱拌匀。撒剩余葱绿和芝麻，立即上桌。",
      "zhHint": "拌匀上桌",
      "stateNote": {
        "visual": "Noodles are glossy and evenly coated in dark amber sauce",
        "visualZh": "面条油亮均匀裹上深琥珀色酱汁",
        "signal": "Sweet scallion and soy aroma",
        "signalZh": "甜葱酱香扑鼻"
      }
    }
  ],
  "tips": [
    "The scallion oil keeps refrigerated for 2 weeks — make a big batch.",
    "Do not brown the scallions past dark amber — black bits are bitter.",
    "Use fresh wheat noodles if possible; dried noodles absorb sauce differently."
  ],
  "tipsZh": [
    "葱油冷藏可保存2周——一次多做点。",
    "葱不要炸过深——超过深琥珀色就会发苦。",
    "尽量用鲜面条；干面条吸酱方式不同。"
  ],
  "relatedSlugs": [
    "tomato-egg-noodles",
    "yangchun-noodles",
    "scallion-pancakes"
  ]
>>>>>>> origin/main
};
