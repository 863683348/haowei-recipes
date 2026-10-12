import type { Recipe } from "@/lib/types";

/** Olive Vegetable Fried Rice (橄榄菜炒饭) — Day batch */
export const olive_vegetable_fried_rice: Recipe = {
  "id": "olive-vegetable-fried-rice",
  "slug": "olive-vegetable-fried-rice",
  "titleEn": "Olive Vegetable Fried Rice",
  "titleZh": "橄榄菜炒饭",
  "pinyin": "gǎn lǎn cài chǎo fàn",
  "cuisine": "潮汕菜",
  "cuisineEn": "Teochew",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks use 1½ tablespoons of the preserved vegetable, which seasons without taking over. Teochew restaurant versions use closer to 3 and add diced salted fish or dried shrimp, giving a much darker, saltier plate that is meant to be eaten with plain congee.",
  "versionNoteZh": "家常放1.5汤匙橄榄菜，调味而不抢味；潮汕餐馆会用到近3汤匙，还会加咸鱼粒或虾米，得到颜色更深、更咸的一盘，那是配白粥吃的。",
  "tags": [
    "25-min",
    "fried-rice",
    "teochew",
    "preserved-vegetable",
    "umami"
  ],
  "dietary": [
    "none"
  ],
  "story": "Olive vegetable — mustard greens and olives braised slowly in soy until nearly black — is one of the great Teochew pantry secrets. Sold in small jars, it is simultaneously salty, bitter, sweet and oily. Two spoonfuls will season a whole wok of rice, which is exactly why hardly anyone outside Guangdong knows it exists.",
  "storyZh": "橄榄菜——芥菜与橄榄用酱油慢火熬到近乎发黑——是潮汕食材柜里最大的秘密之一。小罐装，同时咸、苦、甜、油。两勺就能调一整锅饭的味道，也正是广东之外几乎没人知道它的原因。",
  "ingredients": [
    {
      "id": "ovf-01",
      "nameEn": "cooked rice, cold and day-old",
      "nameZh": "米饭，隔夜冷饭",
      "pinyin": "lěng fàn",
      "amountMetric": "450 g",
      "amountUS": "3 cups cooked",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "ovf-02",
      "nameEn": "olive vegetable in soy (gan lan cai)",
      "nameZh": "橄榄菜",
      "pinyin": "gǎn lǎn cài",
      "amountMetric": "25 g",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sold in small jars in the Chinese grocery condiment aisle; keeps months refrigerated",
      "noteZh": "华人超市酱料区小罐装；冷藏可存数月"
    },
    {
      "id": "ovf-03",
      "nameEn": "pork mince (ground pork)",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "120 g",
      "amountUS": "4 oz",
      "category": "protein",
      "pantry": "local",
      "note": "A little fat is good here; very lean mince goes dry",
      "noteZh": "带点肥更好；太瘦的肉末会发柴",
      "termKey": "pork-mince"
    },
    {
      "id": "ovf-04",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "10 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ovf-05",
      "nameEn": "large egg, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "50 g",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ovf-06",
      "nameEn": "frozen corn kernels",
      "nameZh": "冷冻玉米粒",
      "pinyin": "yù mǐ lì",
      "amountMetric": "60 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ovf-07",
      "nameEn": "carrot, small dice",
      "nameZh": "胡萝卜，切小丁",
      "pinyin": "hú luó bo",
      "amountMetric": "50 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "ovf-08",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ovf-09",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Only if needed — the olive vegetable is already very salty",
      "noteZh": "只在需要时加——橄榄菜本身已经很咸",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ovf-10",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Heat 1 tbsp oil over high. Add the pork mince and break it up with the spatula, cooking 2 minutes until the fat renders and the meat browns at the edges.",
      "textZh": "大火下1汤匙油，猪肉末下锅用锅铲压散，炒2分钟至出油、边缘焦黄。",
      "zhHint": "煸香肉末",
      "stateNote": {
        "visual": "Mince has separated into small crumbs with browned tips and the rendered fat is clear, not cloudy",
        "visualZh": "肉末散成小粒、尖端焦黄，逼出的油脂清亮不浑浊",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "The hissing turns to a gentle fry — that means the water has gone and browning has begun",
        "signalZh": "滋滋声转为平缓的煎声——说明水汽已干，开始上色"
      }
    },
    {
      "text": "Add the garlic and the olive vegetable. Stir-fry 60 seconds over medium heat until everything is dark and glossy.",
      "textZh": "下蒜末与橄榄菜，中火炒60秒至全部变深色油亮。",
      "zhHint": "爆香橄榄菜",
      "stateNote": {
        "visual": "The mince is now coated near-black and shiny; the garlic has disappeared into the mix",
        "visualZh": "肉末被裹成近黑发亮；蒜末已融进其中",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "medium",
        "signal": "A deep savoury-salty aroma comes up that is clearly stronger than plain soy sauce",
        "signalZh": "冲起一股明显比生抽更醇厚的咸鲜香"
      },
      "tip": "Fry the olive vegetable in oil briefly. Straight from the jar into rice it stays clumpy and tastes flat.",
      "tipZh": "橄榄菜要在油里炒一下。从罐里直接拌饭会结块，味道也不开。"
    },
    {
      "text": "Push the mixture to one side, pour in the beaten egg and let it set 15 seconds, then fold through.",
      "textZh": "把料拨到一边，淋入蛋液静置15秒后翻匀。",
      "zhHint": "炒蛋拌匀",
      "stateNote": {
        "visual": "Egg has set into dark-flecked pale curds mixed with the blackened mince",
        "visualZh": "蛋液凝成带深色斑点的小块，与发黑的肉末混在一起",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "No wet egg remains and the pan looks dry",
        "signalZh": "没有湿蛋液，锅面干爽"
      }
    },
    {
      "text": "Add carrot and corn and stir-fry 90 seconds over high heat.",
      "textZh": "下胡萝卜丁与玉米粒，大火炒90秒。",
      "zhHint": "炒蔬菜丁",
      "stateNote": {
        "visual": "Carrot is glossy orange and the corn has plumped and brightened",
        "visualZh": "胡萝卜油亮橙红，玉米粒饱满鲜亮",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "The raw carrot smell is gone and the kernels squeak against the wok",
        "signalZh": "生胡萝卜味消失，玉米粒在锅里擦出响声"
      }
    },
    {
      "text": "Add the cold rice and press-and-fold 2–3 minutes until the grains are separate and evenly speckled dark.",
      "textZh": "下冷饭压散翻炒2–3分钟，至米粒散开并均匀沾上深色斑点。",
      "zhHint": "炒饭上色",
      "stateNote": {
        "visual": "Grains are dry and separate, each carrying small dark specks; the overall colour is a mottled tan and near-black",
        "visualZh": "米粒干爽分明，每粒都带着细小深色斑点；整体呈斑驳的浅褐与近黑",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Rice crackles at the wok edge and nothing sticks to the bottom",
        "signalZh": "米饭在锅边爆响，锅底不粘"
      }
    },
    {
      "text": "Taste before seasoning, add soy sauce only if needed, and toss 30 seconds. Off the heat, fold in the scallion.",
      "textZh": "先尝味再决定，需要才加生抽，翻炒30秒。关火拌入葱花。",
      "zhHint": "尝味收尾",
      "stateNote": {
        "visual": "Dark-flecked rice with green scallion on top; the plate has almost no free oil",
        "visualZh": "带深色斑点的米饭上覆翠绿葱花；盘底几乎没有浮油",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "The flavour is salty-savoury with a faint bitter finish — that bitterness is correct, not a fault",
        "signalZh": "味道咸鲜并带淡淡苦韵——这点苦是对的，不是问题"
      }
    }
  ],
  "tips": [
    "Olive vegetable is a seasoning, not a vegetable. Start with 1½ tablespoons and taste.",
    "Fry it in oil with the pork before the rice goes in — that is where the aroma comes from.",
    "No salt needed until you have tasted it at the end. It is very easy to oversalt this dish."
  ],
  "tipsZh": [
    "橄榄菜是调味料不是配菜。先从1.5汤匙起步，边做边尝。",
    "要和肉末一起在油里先炒，再下饭——香味就是从这一步出来的。",
    "起锅前尝过再加盐。这道菜极容易过咸。"
  ],
  "relatedSlugs": [
    "egg-fried-rice",
    "kimchi-fried-rice"
  ],
  "image": "/images/recipes/kimchi-fried-rice.webp"
};
