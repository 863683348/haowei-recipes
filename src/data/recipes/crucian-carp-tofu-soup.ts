import type { Recipe } from "@/lib/types";

/** Crucian Carp and Tofu Soup (鲫鱼豆腐汤) (鲫鱼豆腐汤) — Day batch */
export const crucian_carp_tofu_soup: Recipe = {
  "id": "crucian-carp-tofu-soup",
  "slug": "crucian-carp-tofu-soup",
  "titleEn": "Crucian Carp and Tofu Soup (鲫鱼豆腐汤)",
  "titleZh": "鲫鱼豆腐汤",
  "pinyin": "jì yú dòu fu tāng",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Jiangnan (Yangtze Delta)",
  "regionZh": "江南",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version: the fish is pan-fried until golden, then simmered with tofu in boiling water until the broth turns milky white. Restaurant version adds a splash of milk or a pork bone to force the emulsion, and finishes with a little lard for a rounder mouthfeel.",
  "versionNoteZh": "家庭版：鱼煎至金黄，加沸水与豆腐同炖至汤色奶白。餐厅版会加少许牛奶或猪骨来加速乳化，并淋一点猪油让口感更圆润。",
  "tags": [
    "soup",
    "fish",
    "jiangnan",
    "comfort-food",
    "protein"
  ],
  "dietary": [
    "none"
  ],
  "story": "The famous trick in this soup is not an ingredient, it is a temperature: you pour boiling water over a fish that has just been fried in hot oil, and the broth turns opaque white in under ten minutes. It looks like cream and it is nothing but emulsified fish fat and collagen. Crucian carp (鲫鱼) is the traditional choice in Jiangnan — small, bony, and far more flavorful than any fillet — and the tofu is there to soak up that broth and to make the soup a meal. Nursing mothers across China are given this soup, which tells you something about what it is believed to do.",
  "storyZh": "这道汤出名的诀窍不在食材而在温度：把沸水浇在刚用热油煎过的鱼上，汤十分钟内就变成不透明的奶白。看着像奶油，其实只是被乳化的鱼脂和胶原。江南传统用鲫鱼——个头小、刺多，但比任何鱼片都有味——豆腐在这里是吸汤的，也把这道汤变成一道菜。全国各地坐月子的产妇都被喂这碗汤，由此可知它在民间被赋予的分量。",
  "ingredients": [
    {
      "id": "cct-fish",
      "nameEn": "whole crucian carp, cleaned and scaled",
      "nameZh": "鲫鱼，宰杀去鳞洗净",
      "amountMetric": "2 fish (about 400 g each)",
      "amountUS": "about 1.8 lb total",
      "category": "protein",
      "pantry": "asian",
      "termKey": "whole-fish",
      "note": "Any small whole freshwater fish works: tilapia, sea bream, or white carp. Ask the fishmonger to gut and scale it.",
      "noteZh": "任何小型整条淡水鱼都行：罗非鱼、鲷鱼或白鲢。请鱼贩代为去内脏去鳞。"
    },
    {
      "id": "cct-tofu",
      "nameEn": "firm tofu, cut into 2.5 cm cubes",
      "nameZh": "老豆腐，切 2.5 厘米方块",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "produce",
      "pantry": "asian",
      "termKey": "tofu"
    },
    {
      "id": "cct-ginger",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "生姜，切片",
      "amountMetric": "6 slices",
      "amountUS": "6 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cct-scallion",
      "nameEn": "scallions, cut into lengths plus extra for garnish",
      "nameZh": "小葱，切段（另备葱花）",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cct-oil",
      "nameEn": "neutral oil for frying",
      "nameZh": "煎鱼用油（清淡油）",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cct-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cct-water",
      "nameEn": "boiling water",
      "nameZh": "沸水",
      "amountMetric": "1.5 L",
      "amountUS": "about 6.3 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "cct-pepper",
      "nameEn": "ground white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "cct-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1.25 tsp",
      "amountUS": "1.25 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat the fish completely dry inside and out with paper towels — water on the skin is what makes fish stick and tear. Score two shallow diagonal cuts on each side. Rub a little salt over the skin and let it sit 5 minutes, then pat dry again.",
      "textZh": "用厨房纸把鱼里外彻底擦干——鱼皮上的水正是粘锅破皮的元凶。每面斜划两刀浅口。鱼皮抹少许盐静置 5 分钟，再擦干一次。",
      "stateNote": {
        "visual": "Skin looks matte and dry rather than glossy-wet; the cuts are about 3 mm deep, just through the skin",
        "visualZh": "鱼皮呈哑光干燥而非湿亮；刀口约 3 毫米深，刚好划透鱼皮",
        "timeRef": "5 minutes salting",
        "timeRefZh": "抹盐静置 5 分钟",
        "signal": "Press a finger on the skin — it feels tacky and dry, not slippery",
        "signalZh": "手指按压鱼皮——感觉发黏干涩，而不是滑腻"
      }
    },
    {
      "text": "Heat the oil in a wok or heavy pan over medium-high heat until it shimmers. Lay the fish in and do not touch it for 3 minutes. It should release cleanly when the skin has set. Fry until deep golden, then turn once and repeat on the other side.",
      "textZh": "锅中中大火烧油至微微冒纹。鱼下锅后 3 分钟内不要碰它。鱼皮定型后会自然脱离。煎至深金黄，翻面一次，另一面同样处理。",
      "stateNote": {
        "visual": "Skin turns from translucent grey to opaque golden-brown with crisp edges; the flesh at the cut lines has gone opaque white",
        "visualZh": "鱼皮由半透明灰白转为不透明的金褐色、边缘焦脆，刀口处的肉已变乳白",
        "heat": "medium-high",
        "timeRef": "3 minutes per side",
        "timeRefZh": "每面 3 分钟",
        "signal": "Slide a spatula under the fish — it lifts without resistance and no skin stays behind on the pan",
        "signalZh": "锅铲伸到鱼身下——能无阻力地铲起，锅底不留鱼皮"
      },
      "tip": "A dry, hot pan and a patient 3 minutes beats any non-stick coating.",
      "tipZh": "干锅、热油、耐心等 3 分钟，胜过任何不粘涂层。"
    },
    {
      "text": "Add the ginger slices and scallion lengths around the fish, then splash in the Shaoxing wine and let it sizzle for 20 seconds. Now pour in the boiling water all at once — cold water here gives a thin, grey broth instead of a white one. This is the step that decides the whole dish.",
      "textZh": "把姜片和葱段摆在鱼周围，淋入黄酒滋啦 20 秒。此刻一次倒入沸水——这里用冷水只会得到稀薄的灰汤而非白汤。这一步决定整道菜的成败。",
      "stateNote": {
        "visual": "The moment the boiling water hits the hot oil it clouds over; within 2 minutes the whole pot turns opaque and ivory",
        "visualZh": "沸水接触热油的瞬间汤面泛白，2 分钟内整锅转为不透明的象牙白",
        "heat": "high",
        "timeRef": "bring to a rolling boil and hold for 10 minutes",
        "timeRefZh": "大火滚沸保持 10 分钟",
        "signal": "The broth is genuinely opaque — you cannot see the fish through it",
        "signalZh": "汤真正不透明——隔着汤看不见鱼"
      }
    },
    {
      "text": "Hold at a rolling boil for 10 minutes, then add the tofu cubes, reduce to a medium simmer, and cook 15 minutes more. Keep it moving gently; hard stirring will break the fish into the broth.",
      "textZh": "大火滚沸 10 分钟，然后下豆腐块，转中火微沸再煮 15 分钟。轻晃锅保持微动；大力搅动会把鱼肉搅散进汤里。",
      "stateNote": {
        "visual": "Broth stays milky and thick-looking; tofu cubes turn slightly swollen and take on a pale ivory tint from the broth",
        "visualZh": "汤保持奶白浓稠感；豆腐块略微胀大并染上汤的象牙白",
        "heat": "medium",
        "timeRef": "10 minutes boiling, then 15 minutes simmering",
        "timeRefZh": "滚沸 10 分钟 + 微沸 15 分钟",
        "signal": "Tofu is hot all the way through — break one open and steam escapes from the center",
        "signalZh": "豆腐里外都热——掰开一块中心冒热气"
      }
    },
    {
      "text": "Season with salt and white pepper, taste, and adjust. Skim any surface foam if needed. Ladle into bowls with a piece of fish and several cubes of tofu each, spoon the broth over, and finish with scallion. Serve very hot.",
      "textZh": "加盐和白胡椒调味，尝味调整。需要时撇去浮沫。分盛入碗，每碗一块鱼肉和几块豆腐，浇上汤汁，撒葱花。要非常热地端上桌。",
      "stateNote": {
        "visual": "Bowl of ivory broth, golden-skinned fish, pale tofu cubes, and bright scallion rings floating on top",
        "visualZh": "碗中是象牙白的汤、金皮的鱼、浅白的豆腐块，表面浮着鲜亮的葱圈",
        "signal": "The broth tastes rich and faintly sweet with no fishy note; the white pepper warmth arrives a second after swallowing",
        "signalZh": "汤味浓郁微甜、无腥气；咽下后一秒才泛起白胡椒的暖意"
      }
    }
  ],
  "tips": [
    "Dry the fish thoroughly before it hits the pan. Water is what makes skin tear.",
    "Boiling water, never cold. The temperature shock against hot oil is what creates the white emulsion.",
    "Hold a hard boil for the first 10 minutes — that is when the broth turns white. Drop to a simmer afterward.",
    "Crucian carp is bony. Warn anyone eating it, and spoon broth over rice rather than picking at the fine bones.",
    "Add a splash of milk if your fish is very lean and the broth refuses to whiten."
  ],
  "tipsZh": [
    "鱼下锅前必须彻底擦干。有水才会破皮。",
    "一定用沸水，绝不能冷水。沸水与热油的温度冲击才产生白色乳化。",
    "前 10 分钟保持大火滚沸——汤就是这时候变白的。之后转小火。",
    "鲫鱼刺多。吃之前提醒一声，用汤泡饭比挑细刺省事。",
    "如果鱼太瘦、汤怎么都不白，可加一点牛奶救场。"
  ],
  "relatedSlugs": [
    "sauce-braised-crucian-carp",
    "tomato-tofu-soup",
    "hubei-pork-rib-and-lotus-root-soup",
    "yan-du-xian"
  ],
  "image": "/images/recipes/sauce-braised-crucian-carp.webp"
};
