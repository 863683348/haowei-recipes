import type { Recipe } from "@/lib/types";

/** Three-Layer Stuffed Duck (Santaoya) (三套鸭) — Day batch */
export const three_layer_stuffed_duck: Recipe = {
  "id": "three-layer-stuffed-duck",
  "slug": "three-layer-stuffed-duck",
  "titleEn": "Three-Layer Stuffed Duck (Santaoya)",
  "titleZh": "三套鸭",
  "pinyin": "sān tào yā",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang",
  "region": "Jiangsu (Yangzhou)",
  "regionZh": "江苏（扬州）",
  "difficulty": "hard",
  "timeMin": 180,
  "servings": 6,
  "version": "family",
  "versionNote": "The canonical version bones a wild duck inside a domestic duck inside a pigeon, all three deboned without breaking the skin. The home version keeps the duck whole but fills it with deboned chicken thighs and quail eggs — three layers of flavour and texture without a knife-skill exam.",
  "versionNoteZh": "正宗三套鸭是家鸭套野鸭再套鸽子，三只都要整只去骨而皮不破。家常版保留整鸭，里面塞去骨鸡腿肉和鹌鹑蛋——同样三层滋味，但不用考刀工。",
  "tags": [
    "huaiyang",
    "duck",
    "stew",
    "banquet",
    "showstopper",
    "weekend-project"
  ],
  "dietary": [
    "none"
  ],
  "story": "Three birds, one dish: each is boned, nested inside the next, and simmered for hours in a clear broth until the three meats taste like one animal with three textures. A Yangzhou banquet is not complete without it, and no home cook makes it more than once or twice in a lifetime — which is precisely why you should.",
  "storyZh": "三只禽，一道菜：各自去骨、层层相套，在清汤里煨几个小时，最后三种肉吃出三种口感却又浑然一体。扬州的宴席少了它就不算完整，家厨一辈子也做不了几次——正因为如此，才值得做一次。",
  "ingredients": [
    {
      "id": "whole-duck",
      "nameEn": "whole duck, 2.2 kg, giblets removed",
      "nameZh": "整鸭（约 2.2 kg，去内脏）",
      "amountMetric": "2.2 kg",
      "amountUS": "4.8 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Keep the skin intact. Ask the butcher to leave the neck skin long for tying.",
      "noteZh": "鸭皮要完整，让店家把颈皮留长便于扎口。"
    },
    {
      "id": "chicken-thigh",
      "nameEn": "boneless chicken thighs, cut in strips",
      "nameZh": "去骨鸡腿肉（切条）",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-loin"
    },
    {
      "id": "quail-eggs",
      "nameEn": "quail eggs, boiled and peeled",
      "nameZh": "鹌鹑蛋（煮熟去壳）",
      "amountMetric": "12",
      "amountUS": "12",
      "category": "protein",
      "pantry": "asian",
      "termKey": "egg"
    },
    {
      "id": "dried-shiitake",
      "nameEn": "dried shiitake, rehydrated",
      "nameZh": "干香菇（泡发）",
      "amountMetric": "25 g",
      "amountUS": "5 mushrooms",
      "category": "produce",
      "pantry": "asian",
      "termKey": "dried-shiitake"
    },
    {
      "id": "jinhua-ham",
      "nameEn": "Jinhua ham or prosciutto, sliced",
      "nameZh": "金华火腿或帕尔马火腿片",
      "amountMetric": "60 g",
      "amountUS": "2 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Jinhua ham is traditional and much saltier; prosciutto is a fair substitute, use a bit more.",
      "noteZh": "传统用金华火腿、咸得多；帕尔马火腿是合格的替代，可以稍微多放。"
    },
    {
      "id": "scallion",
      "nameEn": "scallions",
      "nameZh": "葱",
      "amountMetric": "4 stalks",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "30 g",
      "amountUS": "8 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "white-pepper",
      "nameEn": "white pepper, ground",
      "nameZh": "白胡椒粉",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "star-anise",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 pod",
      "amountUS": "1 pod",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    }
  ],
  "steps": [
    {
      "text": "Blanch the whole duck in boiling water for 3 minutes, then rinse it inside and out and pat dry. This firms the skin and removes any gamey smell.",
      "textZh": "整鸭下开水汆 3 分钟，里外冲洗干净并擦干。这一步让鸭皮收紧、去掉腥味。",
      "stateNote": {
        "visual": "The skin tightens and turns pale beige; grey scum floats on the water",
        "visualZh": "鸭皮收紧变成浅米色，水面浮起灰色浮沫",
        "signal": "The duck no longer smells raw when you bring it close",
        "signalZh": "凑近闻不再有生腥味",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Toss the chicken strips, shiitake and ham with half the wine and the white pepper, then pack the mixture into the duck cavity along with the quail eggs, tucking them down the middle.",
      "textZh": "鸡腿肉条、香菇、火腿用一半黄酒和白胡椒拌匀，连鹌鹑蛋一起塞进鸭腔，蛋顺着中间往下排。",
      "stateNote": {
        "visual": "The cavity is filled level with the opening, eggs visible in cross-section",
        "visualZh": "鸭腔填到与开口齐平，横切面能看到鹌鹑蛋",
        "signal": "The duck sits upright and the filling does not spill when you tilt it",
        "signalZh": "鸭子能立住，倾斜时填料不洒出来",
        "timeRef": "10 minutes",
        "timeRefZh": "约 10 分钟",
        "heat": "medium"
      },
      "tip": "Do not pack too tightly — the filling expands as it cooks and will split the skin.",
      "tipZh": "别塞太满，加热时填料会膨胀把鸭皮撑破。"
    },
    {
      "text": "Close the cavity with a skewer or sew it with kitchen twine, tuck the wings behind, and set the duck breast-up in a tall stockpot.",
      "textZh": "用竹签封口或用棉线缝合，翅膀别到背后，鸭胸朝上放进深汤锅。",
      "stateNote": {
        "visual": "The duck is a neat closed parcel with no gaps at the neck or tail",
        "visualZh": "鸭子收成整齐密封的一只，颈尾无缝隙",
        "signal": "You can lift the whole bird by the neck without anything shifting",
        "signalZh": "拎着鸭颈能整只提起，里面的东西不会移位",
        "timeRef": "10 minutes",
        "timeRefZh": "约 10 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Add scallion, ginger, star anise and the remaining wine, then cold water to cover. Bring to a bare tremble and keep it there for 2 hours — never let it boil.",
      "textZh": "加葱姜、八角、剩下的黄酒和没过的冷水，煮到似开非开后保持 2 小时，绝不能滚。",
      "stateNote": {
        "visual": "The broth stays almost clear, with only a thin film of golden duck fat on top",
        "visualZh": "汤色几乎清亮，表面只浮一层薄薄的金黄鸭油",
        "signal": "Bubbles break at the surface one at a time, not in a stream",
        "signalZh": "气泡一个一个地破，不是成串翻滚",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "heat": "low"
      },
      "tip": "A rolling boil clouds the broth and shreds the skin. This is the one rule you cannot break.",
      "tipZh": "大滚会把汤煮浑、把皮煮破。这条规矩绝对不能破。"
    },
    {
      "text": "Skim the fat, season the broth with salt only, then lift the duck out into a deep bowl and pour the clear broth over. Carve at the table so the three layers fall out together.",
      "textZh": "撇净浮油，只用盐给汤调味，把鸭子捞进深碗、浇上清汤。上桌现拆，三层一起落下。",
      "stateNote": {
        "visual": "The broth is pale gold and clear enough to see the bottom of the bowl; the duck skin is intact and glossy",
        "visualZh": "汤色淡金清澈见底，鸭皮完整油亮",
        "signal": "A chopstick slides through the breast with no resistance and the juices run clear",
        "signalZh": "筷子毫无阻力插进鸭胸，流出的是清汁不是血水",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Skim, skim, skim. The clarity of that broth is the entire bragging right.",
    "Save the duck fat — it makes the best fried rice or braised greens you will ever have.",
    "Turn the duck once halfway through if your pot does not cover it completely."
  ],
  "tipsZh": [
    "撇油、撇油、撇油。这锅汤的清亮度就是全部的排面。",
    "鸭油别倒，拿来炒饭或烧青菜是天花板级别。",
    "汤没完全没过鸭子的话，中途翻面一次。"
  ],
  "relatedSlugs": [
    "ba-bao-ya",
    "yan-du-xian",
    "lotus-leaf-steamed-chicken"
  ],
  "image": "/images/recipes/ba-bao-ya.webp"
};
