import type { Recipe } from "@/lib/types";

/** Dry-Fried Beef Shreds Sichuan-Style (干煸牛肉丝) (干煸牛肉丝) — Day batch */
export const dry_fried_beef_shreds: Recipe = {
  "id": "dry-fried-beef-shreds",
  "slug": "dry-fried-beef-shreds",
  "titleEn": "Dry-Fried Beef Shreds Sichuan-Style (干煸牛肉丝)",
  "titleZh": "干煸牛肉丝",
  "pinyin": "gan bian niu rou si",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan (四川)",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version dry-fries the beef in a wok over medium-low heat with modest oil. Restaurant versions use far more oil and higher heat to get the characteristic dehydrated, almost jerky chew in a fraction of the time.",
  "versionNoteZh": "家庭版用中小火、少油在锅里慢煸。餐厅版油多火猛，短时间内就能煸出那种接近牛肉干的干香嚼劲。",
  "tags": [
    "sichuan",
    "beef",
    "spicy",
    "numbling",
    "rice-pairing"
  ],
  "dietary": [
    "none"
  ],
  "story": "Gan bian means 'dry-fried' — a Sichuan technique where the ingredient is cooked in oil over patient, moderate heat until its moisture leaves and its flavour concentrates. Applied to beef shreds it produces something between a stir-fry and beef jerky: dark, chewy, humming with Sichuan peppercorn. It takes longer than most weeknight dishes, which is exactly why it tastes like a weekend.",
  "storyZh": "「干煸」是川菜的一种技法：用中火慢炒，把食材里的水分逼出来，让味道浓缩。用在牛肉丝上，成品介于小炒和牛肉干之间——深红、有嚼劲、带着花椒的麻。它比一般家常菜花时间，也正是为什么吃起来像周末的味道。",
  "ingredients": [
    {
      "id": "dfbs-1",
      "nameEn": "beef flank or sirloin, cut into matchsticks",
      "nameZh": "牛腩条 / 牛里脊（切火柴梗丝）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "dfbs-2",
      "nameEn": "celery, cut into 5 cm sticks",
      "nameZh": "芹菜（切 5 厘米段）",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "dfbs-3",
      "nameEn": "carrot, cut into matchsticks",
      "nameZh": "胡萝卜（切细丝）",
      "amountMetric": "80 g",
      "amountUS": "3 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "dfbs-4",
      "nameEn": "dried chilies, snipped",
      "nameZh": "干辣椒（剪段）",
      "amountMetric": "6 pieces",
      "amountUS": "6 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "dfbs-5",
      "nameEn": "sichuan peppercorn",
      "nameZh": "花椒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "dfbs-6",
      "nameEn": "ginger, shredded",
      "nameZh": "姜（切丝）",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "dfbs-7",
      "nameEn": "garlic cloves, sliced",
      "nameZh": "大蒜（切片）",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "dfbs-8",
      "nameEn": "shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "dfbs-9",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "dfbs-10",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "dfbs-11",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "dfbs-12",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Cut the beef across the grain into matchsticks about 6 cm long and 4 mm thick. Toss with shaoxing wine and half the light soy sauce, and set aside 10 minutes.",
      "textZh": "牛肉逆纹切成约 6 厘米长、4 毫米粗的丝，加绍兴酒和一半生抽抓匀，静置 10 分钟。",
      "stateNote": {
        "visual": "beef coated and no liquid pooling",
        "signal": "marinade absorbed",
        "timeRef": "10 min"
      }
    },
    {
      "text": "Heat 2 tbsp oil in a wok over medium heat. Add the beef shreds in a single layer and leave them alone for 2 minutes so moisture can escape rather than steam.",
      "textZh": "锅下 2 汤匙油，中火平铺牛肉丝，静置 2 分钟不要翻动，让水汽散出而不是被焖住。",
      "stateNote": {
        "visual": "surface browning, liquid collecting at the edges",
        "signal": "sizzle softens to a dry crackle",
        "timeRef": "2 min",
        "heat": "medium"
      }
    },
    {
      "text": "Continue stir-frying over medium-low heat for 8-10 minutes, stirring every minute, until the shreds have darkened, shrunk by about a third and squeak slightly against the wok.",
      "textZh": "转中小火继续煸炒 8-10 分钟，每分钟翻一次，煸到肉丝变深、体积缩小约三分之一、铲子碰上去有轻微「吱吱」感。",
      "stateNote": {
        "visual": "deep mahogany, visibly shrunken and dry",
        "signal": "wok sounds dry, no spattering",
        "timeRef": "8-10 min",
        "heat": "medium-low"
      }
    },
    {
      "text": "Push the beef up one side of the wok. Add the last tbsp oil to the bare surface, then dried chilies, sichuan peppercorn, ginger and garlic. Fry for 30 seconds until the kitchen smells toasted and numbing.",
      "textZh": "牛肉拨到锅一边，空处补 1 汤匙油，下干辣椒、花椒、姜丝、蒜片，爆香 30 秒至香气焦麻扑鼻。",
      "stateNote": {
        "visual": "chilies darkening but not black",
        "signal": "sharp toasted-numbing aroma",
        "timeRef": "30 sec",
        "heat": "medium-low"
      }
    },
    {
      "text": "Add celery and carrot sticks. Raise the heat and stir-fry for 2 minutes until the celery turns bright green and just loses its raw snap.",
      "textZh": "下芹菜段和胡萝卜丝，转大火翻炒 2 分钟，至芹菜变翠绿、刚断生。",
      "stateNote": {
        "visual": "celery glossy bright green",
        "signal": "vegetables squeak when bitten",
        "timeRef": "2 min",
        "heat": "high"
      }
    },
    {
      "text": "Return the beef, add remaining light soy sauce and dark soy sauce, and toss for 1 minute until everything is evenly coloured. Finish with sesame oil and serve with plain rice.",
      "textZh": "倒回牛肉，加剩余生抽和老抽，翻炒 1 分钟至均匀上色，淋香油出锅，配白米饭食用。",
      "stateNote": {
        "visual": "dark glossy shreds with no free sauce",
        "signal": "ready to serve",
        "timeRef": "1 min",
        "heat": "high"
      }
    }
  ],
  "tips": [
    "Cut across the grain, always. With the grain, dry-fried beef becomes impossible to chew.",
    "The dry-fry stage is slow on purpose. Rushing it gives you boiled beef, not gan bian beef.",
    "Keep the chilies dark red, not black. Black means burnt and bitter.",
    "It reheats well and tastes even better the next day — make a double batch."
  ],
  "tipsZh": [
    "一定要逆纹切。顺着纹路，干煸牛肉会嚼不动。",
    "干煸阶段慢是故意的。图快只会得到「煮牛肉」而不是干煸牛肉。",
    "辣椒保持深红别发黑。发黑就是糊了，会发苦。",
    "这道菜回热后更香，第二天更好吃——建议一次做两份。"
  ],
  "relatedSlugs": [
    "green-pepper-beef",
    "hunan-sliced-beef-stir-fry",
    "oyster-sauce-beef",
    "twice-cooked-pork"
  ],
  "image": "/images/recipes/hunan-sliced-beef-stir-fry.webp"
};
