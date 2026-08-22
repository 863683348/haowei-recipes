import type { Recipe } from "@/lib/types";

/** Oyster Sauce Lettuce (蚝油生菜) (蚝油生菜) — Day batch */
export const oyster_sauce_lettuce: Recipe = {
  "id": "oyster-sauce-lettuce",
  "slug": "oyster-sauce-lettuce",
  "titleEn": "Oyster Sauce Lettuce (蚝油生菜)",
  "titleZh": "蚝油生菜",
  "pinyin": "háo yóu shēng cài",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Restaurant version blanches whole heads and plates with sauce poured at the table. Home version uses romaine hearts for easier handling and faster cooking.",
  "versionNoteZh": "餐厅版整棵白灼后淋汁；家常版用罗马生菜心，更易操作、更快熟。",
  "tags": [
    "quick",
    "vegetarian",
    "cantonese",
    "weeknight"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "A Cantonese bistro staple that appears on nearly every family dinner table. The key is blanching the lettuce just long enough to stay crisp-tender, then drowning it in a glossy oyster-sauce glaze. Cantonese cooks call this 白灼 — the purest expression of Cantonese vegetable cookery.",
  "storyZh": "粤式茶餐厅和家庭餐桌的常客。秘诀是白灼时间刚好保持脆嫩，然后淋上光泽感十足的蚝油汁。这是粤菜中最纯粹的蔬菜烹饪方式。",
  "image": "/images/recipes/oyster-sauce-lettuce.svg",
  "ingredients": [
    {
      "id": "osl-01",
      "nameEn": "romaine lettuce hearts",
      "nameZh": "罗马生菜",
      "pinyin": "luó mà shēng cài",
      "amountMetric": "2 large hearts (about 400 g)",
      "amountUS": "2 large hearts (about 14 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "",
      "note": "Romaine is sturdier than butter lettuce. If unavailable, use bok choy or choy sum.",
      "noteZh": "罗马生菜比黄油生菜更耐煮。买不到可用小白菜或菜心代替。"
    },
    {
      "id": "osl-02",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "osl-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "osl-04",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "osl-05",
      "nameEn": "sugar",
      "nameZh": "糖",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "osl-06",
      "nameEn": "water or chicken stock",
      "nameZh": "水或高汤",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "osl-07",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "osl-08",
      "nameEn": "neutral cooking oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Trim the tough outer base of each lettuce heart, then cut lengthwise into 4 wedges. Wash thoroughly — sand hides in the tight folds.",
      "textZh": "削去生菜底部硬蒂，纵向切成4瓣。彻底清洗——泥沙藏在紧密的叶褶里。",
      "zhHint": "处理生菜",
      "stateNote": {
        "visual": "Each wedge should be pale green at the base, dark green at the tips, with no brown or wilted outer leaves",
        "visualZh": "每瓣底部淡绿、尖端深绿，外层无褐变或萎蔫叶片",
        "signal": "Leaves are crisp and taut when you bend them",
        "signalZh": "叶片脆挺、弯曲时不软塌"
      }
    },
    {
      "text": "Make the sauce: whisk together oyster sauce, soy sauce, sugar, sesame oil, and water in a small bowl until the sugar dissolves.",
      "textZh": "调酱汁：将蚝油、生抽、糖、香油和水在小碗中搅匀，至糖融化。",
      "zhHint": "调蚝油汁"
    },
    {
      "text": "Bring a large pot of salted water to a rolling boil. Add lettuce, submerge fully, and blanch for exactly 30 seconds.",
      "textZh": "大锅盐水烧至滚沸。放入生菜，完全浸没，白灼恰好30秒。",
      "zhHint": "白灼生菜",
      "stateNote": {
        "visual": "Leaves turn a vivid, glossy bright green and begin to wilt slightly at the edges",
        "visualZh": "叶片变成鲜艳有光泽的亮绿色，边缘开始微塌",
        "heat": "high",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Color is electric green — if it turns olive, you have overcooked it",
        "signalZh": "颜色是电光绿——如果变橄榄绿就说明煮过头了"
      }
    },
    {
      "text": "Remove lettuce with tongs and arrange on a serving plate. Do not drain — the water dripping off is fine.",
      "textZh": "用夹子取出生菜，摆盘。不用沥干——滴落的水没关系。",
      "zhHint": "摆盘"
    },
    {
      "text": "In the same pot (or a small pan), heat neutral oil over medium. Add minced garlic and fry for 10 seconds until fragrant but not browned.",
      "textZh": "原锅（或小平底锅）中火加热食用油。下蒜末爆香10秒，不要煎黄。",
      "zhHint": "爆香蒜末",
      "stateNote": {
        "visual": "Garlic sizzles and releases a sharp, toasted aroma",
        "visualZh": "蒜末滋滋作响，释放辛辣焦香",
        "heat": "medium",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "Aroma is sharp and fragrant — if it starts smoking, it is too hot",
        "signalZh": "香气尖锐芬芳——如果开始冒烟说明火太大了"
      }
    },
    {
      "text": "Pour in the oyster sauce mixture. Let it bubble for 15 seconds until slightly thickened and glossy.",
      "textZh": "倒入蚝油汁。煮沸15秒，至略微浓稠、有光泽。",
      "zhHint": "煮酱汁",
      "stateNote": {
        "visual": "Sauce bubbles and coats the back of a spoon with a glossy sheen",
        "visualZh": "酱汁冒泡，勺背挂上光泽的薄层",
        "heat": "medium",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "signal": "Sauce has thickened just enough to cling, not run thin like water",
        "signalZh": "酱汁刚好能挂住，不会像水一样稀"
      }
    },
    {
      "text": "Pour the hot sauce evenly over the lettuce. Serve immediately.",
      "textZh": "将热酱汁均匀淋在生菜上。立即上桌。",
      "zhHint": "淋汁上桌"
    }
  ],
  "tips": [
    "30 seconds is the sweet spot — any longer and the lettuce turns mushy and loses its signature crunch.",
    "Never salt the blanching water heavily — the oyster sauce is already salty enough.",
    "For a restaurant finish, add a tiny drizzle of sesame oil right before pouring over the lettuce."
  ],
  "tipsZh": [
    "30秒是最佳时长——再长就会软烂，失去脆爽口感。",
    "焯水时盐不要放多——蚝油本身已经够咸了。",
    "餐厅做法：淋汁前再滴几滴香油，风味更突出。"
  ],
<<<<<<< HEAD
  relatedSlugs: ["garlic-romaine", "stir-fried-bok-choy", "tomato-eggs"],
  image: "/images/recipes/oyster-sauce-lettuce.svg",
=======
  "relatedSlugs": [
    "garlic-chives-scrambled-eggs",
    "cucumber-scrambled-eggs",
    "tomato-eggs"
  ]
>>>>>>> origin/main
};
