import type { Recipe } from "@/lib/types";

/** Chestnut Chicken Braise (栗子烧鸡) — Seed batch */
export const chestnut_chicken_braise: Recipe = {
  "id": "li-zi-shao-ji",
  "slug": "chestnut-chicken-braise",
  "titleEn": "Chestnut Chicken Braise",
  "titleZh": "栗子烧鸡",
  "pinyin": "lì zi shāo jī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Nanjing",
  "regionZh": "南京",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses gentle browning and slow simmering—no wok hei required, just deep umami from chestnuts and dark soy. Restaurant versions often add MSG or pre-fry chicken for crispness.",
  "versionNoteZh": "家常版重在慢炖入味，不追求镬气；餐厅版常加味精或提前炸鸡块增香。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Nanjing cooked this every winter solstice—she’d roast chestnuts over charcoal first, then braise them with free-range chicken from the Xuanwu Lake market. She said the chestnuts ‘hold the warmth of the earth’ while the chicken ‘carries the family’s strength’.",
  "storyZh": "我南京的外婆每逢冬至必做这道菜——她先用炭火烤栗子，再配上玄武湖集市买的散养鸡同炖。她说栗子‘存着土地的暖意’，鸡肉‘带着一家人的筋骨’。",
  "ingredients": [
    {
      "id": "ch-01",
      "nameEn": "bone-in chicken thighs",
      "nameZh": "带骨鸡腿肉",
      "pinyin": "dài gǔ jī tuǐ ròu",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Skin-on, cut into 4–5 cm pieces; bone adds richness",
      "noteZh": "带皮，切4–5厘米块；骨头增香提味"
    },
    {
      "id": "ch-02",
      "nameEn": "roasted chestnuts (vacuum-packed, unsalted)",
      "nameZh": "熟栗子（真空包装，无盐）",
      "pinyin": "shú lì zi",
      "amountMetric": "300 g",
      "amountUS": "2 cups (shelled)",
      "category": "produce",
      "pantry": "asian",
      "note": "Substitute: peeled boiled chestnuts (fresh or frozen); avoid sweetened canned",
      "noteZh": "替代：新鲜或冷冻煮栗子（去壳）；禁用糖水罐头栗子"
    },
    {
      "id": "ch-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ch-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "ch-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ch-06",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "25 g",
      "amountUS": "1-inch knob, sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken pieces and pat dry. Heat 1 tbsp neutral oil in a heavy-bottomed pot or Dutch oven over medium-high heat.",
      "textZh": "鸡块洗净擦干。厚底锅或搪瓷铸铁锅中火高油量热油。",
      "zhHint": "擦干防溅油",
      "stateNote": {
        "visual": "Oil shimmers but no smoke",
        "visualZh": "油面微 shimmer，无青烟",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-high",
        "signal": "Oil surface ripples lightly",
        "signalZh": "油面泛起细纹"
      }
    },
    {
      "text": "Add chicken skin-side down; sear without moving until golden brown (4–5 min). Flip and sear second side 2 min. Remove and set aside.",
      "textZh": "鸡皮朝下放入锅中，不翻动煎至金黄（4–5分钟）；翻面再煎2分钟，盛出备用。",
      "zhHint": "定型再翻面",
      "stateNote": {
        "visual": "Deep golden crust on skin, edges curl slightly",
        "visualZh": "鸡皮呈深金黄色，边缘微卷",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "heat": "medium-high",
        "signal": "Chicken releases easily from pan",
        "signalZh": "鸡肉轻松离锅"
      }
    },
    {
      "text": "In same pot, add ginger slices and stir 30 seconds until fragrant. Pour in Shaoxing wine, light and dark soy sauces, and 300 ml water.",
      "textZh": "原锅放姜片煸香30秒；倒入绍兴酒、生抽、老抽和300毫升水。",
      "zhHint": "酒去腥，酱油上色",
      "stateNote": {
        "visual": "Liquid simmers gently at edges",
        "visualZh": "液体边缘微冒小泡",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aromatic steam rises",
        "signalZh": "升腾清香蒸汽"
      }
    },
    {
      "text": "Return chicken to pot. Bring to a gentle boil, then reduce heat to low. Cover and simmer 25 minutes.",
      "textZh": "鸡块回锅，大火烧开后转小火，加盖焖炖25分钟。",
      "zhHint": "小火慢炖才酥软",
      "stateNote": {
        "visual": "Soft bubbles break surface slowly",
        "visualZh": "汤面缓慢冒小泡",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "low",
        "signal": "Chicken meat pulls away from bone with light pressure",
        "signalZh": "轻压鸡肉即离骨"
      }
    },
    {
      "text": "Add chestnuts. Simmer uncovered 10 more minutes until sauce thickens to glossy coat. Adjust salt only if needed (soy is salty enough).",
      "textZh": "加入栗子，开盖再炖10分钟至酱汁浓亮裹身；尝味后再决定是否加盐（酱油已足咸）。",
      "zhHint": "栗子后放防烂",
      "stateNote": {
        "visual": "Sauce coats back of spoon and glistens",
        "visualZh": "酱汁挂勺、油亮有光泽",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "Sauce reduces by ~⅓ and clings to chestnuts",
        "signalZh": "酱汁减少约三分之一，均匀裹住栗子"
      }
    }
  ],
  "tips": [
    "Use vacuum-packed roasted chestnuts—they hold shape better than canned.",
    "If using fresh chestnuts, score & boil 15 min, then peel before adding.",
    "For deeper color, add ½ tsp caramelized sugar with the soy sauces."
  ],
  "tipsZh": [
    "优选真空包装熟栗子，不易炖烂。",
    "若用鲜栗子，需划口、沸水煮15分钟再剥壳。",
    "喜深色可加半茶匙焦糖糖色同酱油一起下锅。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/chestnut-chicken-braise.webp"
};
