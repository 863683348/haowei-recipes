import type { Recipe } from "@/lib/types";

/** Chicken Congee (鸡肉粥) — Day batch */
export const chicken_congee: Recipe = {
  "id": "chicken-congee",
  "slug": "chicken-congee",
  "titleEn": "Chicken Congee",
  "titleZh": "鸡肉粥",
  "pinyin": "jī ròu zhōu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version simmers bone-in chicken in the porridge so the broth comes from the bird itself; restaurant versions start with a separate chicken stock and add poached, shredded breast at the end for a cleaner look.",
  "versionNoteZh": "家常版把带骨鸡肉直接煮进粥里，鲜味来自鸡本身；餐厅版另备鸡高汤，最后放入水煮拆丝的鸡胸，卖相更清爽。",
  "tags": [
    "55-min",
    "congee",
    "comfort",
    "breakfast",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "Chicken congee is what a Cantonese household makes when someone is sick, hungover, or simply had a long week. My mother-in-law insisted on thigh meat over breast, because breast 'cooks into straw' — after one dry, stringy attempt I never argued with her again.",
  "storyZh": "鸡肉粥是广东人家在有人生病、宿醉，或者单纯熬过漫长一周时会煮的东西。我婆婆坚持用鸡腿肉不用鸡胸，因为鸡胸『煮出来像稻草』——试过一次又干又柴之后，我再没跟她争过。",
  "ingredients": [
    {
      "id": "jr-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "120 g",
      "amountUS": "¾ cup",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until clear and soak 30 minutes",
      "noteZh": "淘至水清后泡30分钟"
    },
    {
      "id": "jr-02",
      "nameEn": "boneless chicken thigh, cut into 2 cm pieces",
      "nameZh": "去骨鸡腿肉，切2厘米块",
      "pinyin": "jī tuǐ ròu",
      "amountMetric": "300 g",
      "amountUS": "10½ oz",
      "category": "protein",
      "pantry": "local",
      "note": "Thigh stays juicy through long simmering; breast dries out",
      "noteZh": "鸡腿久煮仍多汁，鸡胸会发柴"
    },
    {
      "id": "jr-03",
      "nameEn": "fresh ginger, half shredded, half in slices",
      "nameZh": "鲜姜，一半切丝一半切片",
      "pinyin": "jiāng",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp shredded + 3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "jr-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine",
      "note": "Sub: dry sherry",
      "noteZh": "可用干雪利酒替代"
    },
    {
      "id": "jr-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "jr-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "5 g",
      "amountUS": "½ tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "jr-07",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切细",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "2–3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "jr-08",
      "nameEn": "toasted sesame oil",
      "nameZh": "芝麻香油",
      "pinyin": "zhī má xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "jr-09",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Rinse the rice until the runoff is clear, then soak in 1.2 L (5 cups) cold water for 30 minutes without draining.",
      "textZh": "大米淘洗至水清，加1.2升冷水浸泡30分钟，不要倒掉泡米水。",
      "zhHint": "淘净泡透30分",
      "stateNote": {
        "visual": "Grains are opaque white and the water has a faint milky cast",
        "visualZh": "米粒呈不透明乳白，水略带乳光",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "A grain crushes with no resistance between finger and thumb",
        "signalZh": "米粒在指腹间一碾即碎，毫无阻力"
      }
    },
    {
      "text": "Toss the chicken pieces with cornstarch, Shaoxing wine, half the shredded ginger and 1 tsp soy sauce. Rest 15 minutes.",
      "textZh": "鸡块加淀粉、绍兴黄酒、一半姜丝与1茶匙生抽抓匀，静置15分钟。",
      "zhHint": "鸡肉腌15分",
      "stateNote": {
        "visual": "Chicken is glossy and coated in a thin translucent film",
        "visualZh": "鸡肉发亮，裹着一层薄薄的透明浆",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Pieces feel slippery and spring back when pressed",
        "signalZh": "按压时手感滑嫩并回弹"
      }
    },
    {
      "text": "Bring the rice and soaking water to a boil with the ginger slices. Lower to medium-low and simmer uncovered 25 minutes, stirring every 5 minutes.",
      "textZh": "米连泡米水加姜片大火烧沸，转中小火不加盖煮25分钟，每5分钟搅一次。",
      "zhHint": "米先熬25分",
      "stateNote": {
        "visual": "Grains split and the liquid turns into a milky, loosened porridge",
        "visualZh": "米粒裂开，汤汁变为乳白稀粥",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium-low",
        "signal": "Spoon scrapes the bottom with slight drag — time to stir",
        "signalZh": "勺子刮底略有拖滞——该搅拌了"
      }
    },
    {
      "text": "Scatter in the marinated chicken and remaining ginger. Stir to separate, and simmer 8 minutes until the pieces are just cooked through.",
      "textZh": "撒入腌好的鸡块与剩余姜丝，搅散后小火煮8分钟至刚好熟透。",
      "zhHint": "鸡肉最后8分",
      "stateNote": {
        "visual": "Chicken turns opaque white with no pink at the centre; broth picks up a pale gold tint",
        "visualZh": "鸡肉变不透明白色、中心无粉色，汤染上淡金色",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-low",
        "signal": "A piece cuts cleanly with a spoon and the juices run clear, not pink",
        "signalZh": "勺子可利落切开，汁水清澈不带粉色"
      }
    },
    {
      "text": "Season with the remaining soy sauce and white pepper, then taste and add salt if needed.",
      "textZh": "以剩余生抽与白胡椒粉调味，尝味后按需补盐。",
      "zhHint": "轻调味",
      "stateNote": {
        "visual": "Porridge takes on a light beige gloss and small oil beads float up",
        "visualZh": "粥泛浅米色光泽，浮起细小油珠",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Flavour is savoury and rounded with a gentle pepper warmth",
        "signalZh": "味道鲜香圆润，带柔和胡椒暖意"
      }
    },
    {
      "text": "Turn off the heat. Stir in sesame oil and scallion, and serve immediately while it is still silky.",
      "textZh": "关火后拌入芝麻油与葱花，趁质地最滑时立即上桌。",
      "zhHint": "关火收尾",
      "stateNote": {
        "visual": "Ivory congee with tender chicken pieces, green scallion and a sheen of sesame oil",
        "visualZh": "象牙白粥中可见嫩鸡块与绿色葱花，表面浮一层香油光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Aroma is clean chicken and rice with a nutty top note",
        "signalZh": "香气清鲜的鸡与米香，上层带坚果香"
      }
    }
  ],
  "tips": [
    "Thigh meat over breast, always — breast turns stringy in congee.",
    "For deeper flavour, simmer a chicken carcass in the water for 20 minutes first, then remove it and add the rice.",
    "Top with crispy fried shallots, sliced chili in soy sauce, or a soft-boiled tea egg."
  ],
  "tipsZh": [
    "永远用鸡腿肉，鸡胸在粥里会变成丝丝柴肉。",
    "想更鲜，先用鸡架在水里煮20分钟，捞出后再下米。",
    "可配炸红葱酥、酱油辣椒圈或溏心茶叶蛋。"
  ],
  "relatedSlugs": [
    "pidan-shourou-congee",
    "yam-lean-pork-congee"
  ],
  "image": "/images/recipes/chicken-broth-noodle-soup.webp"
};
