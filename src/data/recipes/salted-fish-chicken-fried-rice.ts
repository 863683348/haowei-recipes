import type { Recipe } from "@/lib/types";

/** Salted Fish and Chicken Fried Rice (咸鱼鸡粒炒饭) — Day batch */
export const salted_fish_chicken_fried_rice: Recipe = {
  "id": "salted-fish-chicken-fried-rice",
  "slug": "salted-fish-chicken-fried-rice",
  "titleEn": "Salted Fish and Chicken Fried Rice",
  "titleZh": "咸鱼鸡粒炒饭",
  "pinyin": "xián yú jī lì chǎo fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks use 30 g of salted fish and soak it first, because the family version has to be edible alongside other dishes. A dai pai dong uses closer to 60 g, barely rinsed, and serves it as the whole meal with congee — a salt level that only works when nothing else is on the table.",
  "versionNoteZh": "家常只放30克咸鱼并先泡水，因为家常版要能和其他菜一起吃。大排档会用到近60克、几乎不泡，配粥当整顿饭——这种咸度只在桌上没别的菜时才成立。",
  "tags": [
    "35-min",
    "fried-rice",
    "cantonese",
    "salted-fish",
    "chicken"
  ],
  "dietary": [
    "none"
  ],
  "story": "The dish that separates people who grew up eating Cantonese food from people who merely like it. Salted fish is not a seasoning here, it is the point — a hard, amber-coloured fillet of mackerel salted until it smells like the sea and a cellar at once. Fried until crisp and broken into the rice, it turns an ordinary plate into something you crave at 1am.",
  "storyZh": "这道菜把『吃粤菜长大的人』和『只是喜欢粤菜的人』分开。咸鱼在这里不是调料，而是主角——一块硬邦邦、琥珀色的马鲛鱼干，盐渍到同时带着海与地窖的气味。煎到酥脆再揉碎拌进饭里，普通一盘饭就有了凌晨一点也会想念的味道。",
  "ingredients": [
    {
      "id": "sfc-01",
      "nameEn": "cooked rice, cold and day-old",
      "nameZh": "米饭，隔夜冷饭",
      "pinyin": "lěng fàn",
      "amountMetric": "450 g",
      "amountUS": "3 cups cooked",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "sfc-02",
      "nameEn": "salted fish fillet (mackerel), soaked 20 minutes",
      "nameZh": "咸鱼（马鲛）肉，泡水20分钟",
      "pinyin": "xián yú",
      "amountMetric": "30 g",
      "amountUS": "1 oz",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sold vacuum-packed or in the chilled case at Chinese grocers; soak to remove excess salt, then pat bone dry",
      "noteZh": "华人超市有真空装或冷藏装；泡水去多余盐分后一定擦干"
    },
    {
      "id": "sfc-03",
      "nameEn": "boneless chicken thigh, small dice",
      "nameZh": "去骨鸡腿肉，切小丁",
      "pinyin": "jī tuǐ ròu",
      "amountMetric": "180 g",
      "amountUS": "6 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "sfc-04",
      "nameEn": "fresh ginger, finely minced",
      "nameZh": "鲜姜，切细末",
      "pinyin": "jiāng mò",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "note": "Ginger is what keeps the salted fish from tasting flat",
      "noteZh": "姜是让咸鱼不发闷的关键",
      "termKey": "ginger"
    },
    {
      "id": "sfc-05",
      "nameEn": "large eggs, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "100 g",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sfc-06",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sfc-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Go easy — the fish is already salty. Taste before adding more",
      "noteZh": "别多放——鱼本身已经很咸。先尝再补",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sfc-08",
      "nameEn": "shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sfc-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "sfc-10",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak the salted fish in warm water for 20 minutes, then pat completely dry and cut into 5 mm dice, discarding skin and bones.",
      "textZh": "咸鱼用温水泡20分钟，彻底擦干后切成5毫米小丁，去皮去骨。",
      "zhHint": "咸鱼泡水切丁",
      "stateNote": {
        "visual": "The flesh looks firm, amber and slightly translucent; the dice hold sharp edges instead of crumbling",
        "visualZh": "鱼肉紧实琥珀色微透；切丁棱角分明不散碎",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low",
        "signal": "A pinch of the dice feels dry and firm, not wet or slimy",
        "signalZh": "捏起鱼丁干爽紧实，不湿不滑"
      },
      "tip": "Dry the fish thoroughly. Wet salted fish spits violently in hot oil and will not crisp.",
      "tipZh": "鱼一定要擦干。带水的咸鱼下热油会剧烈爆溅，也脆不起来。"
    },
    {
      "text": "Heat 1 tbsp oil over medium. Add the salted fish dice and fry 2–3 minutes, stirring, until crisp and deeply aromatic. Remove, leaving the oil.",
      "textZh": "中火下1汤匙油，咸鱼丁下锅煎2–3分钟至酥脆出味，盛出，油留在锅里。",
      "zhHint": "小火煎酥咸鱼",
      "stateNote": {
        "visual": "Dice have darkened to deep amber and look dry and slightly shrunken; the oil is fragrant and clear",
        "visualZh": "鱼丁转为深琥珀色、干爽微缩；油色清亮且带浓香",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "The fish rattles against the wok like small pebbles and the smell is strong but not scorched",
        "signalZh": "鱼丁在锅里像小石子般咔咔响，气味浓但不焦"
      }
    },
    {
      "text": "Raise to high. In the same oil, add the chicken dice and sear 2 minutes until golden. Splash in the shaoxing wine and let it evaporate.",
      "textZh": "转大火，用锅中余油下鸡丁煎炒2分钟至金黄，烹入黄酒让其挥发。",
      "zhHint": "鸡丁爆香烹酒",
      "stateNote": {
        "visual": "Chicken is opaque with browned edges; the wine hits the pan and disappears in a burst of steam within 10 seconds",
        "visualZh": "鸡丁不透明、边缘焦黄；黄酒入锅10秒内化为一阵蒸汽消失",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "No liquid remains in the wok and the raw alcohol smell is gone",
        "signalZh": "锅底无余液，酒的生味已散"
      }
    },
    {
      "text": "Add the ginger and stir 20 seconds, then push everything aside and pour in the beaten egg. Let it set 15 seconds and fold through.",
      "textZh": "下姜末炒20秒，把料拨到一边，淋入蛋液静置15秒后翻匀。",
      "zhHint": "姜末炒蛋",
      "stateNote": {
        "visual": "Ginger is fragrant and pale gold; the egg has set into soft pale curds mixed through the chicken",
        "visualZh": "姜末浅金出香；蛋液凝成浅色嫩块与鸡丁相混",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "The sharp ginger aroma rises and the egg is no longer wet",
        "signalZh": "姜的辛香冲起，蛋液不再湿润"
      }
    },
    {
      "text": "Add the cold rice and press-and-fold for 2–3 minutes until the grains separate and take on the colour of the oil.",
      "textZh": "下冷饭压散翻炒2–3分钟，至米粒散开并染上油色。",
      "zhHint": "炒散米饭",
      "stateNote": {
        "visual": "Grains are separate, dry and light gold; the wok bottom shows a clean dry surface when scraped",
        "visualZh": "米粒分明干爽呈浅金；锅铲刮过锅底是干净干爽的",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Rice crackles and jumps at the wok edge rather than steaming",
        "signalZh": "米饭在锅边爆响跳动，而不是冒蒸汽"
      }
    },
    {
      "text": "Return the crisp salted fish, add white pepper and soy sauce to taste, and toss 30 seconds. Off the heat, fold in most of the scallion and serve with the rest on top.",
      "textZh": "倒回酥咸鱼丁，按口味加白胡椒与生抽，翻炒30秒。关火拌入大部分葱花，余下撒面。",
      "zhHint": "咸鱼合炒",
      "stateNote": {
        "visual": "Pale gold rice with dark amber fish pieces, pale egg and green scallion; the fish is still visibly crisp, not soggy",
        "visualZh": "浅金米饭间有深琥珀鱼丁、浅色蛋块与翠绿葱花；鱼丁仍明显酥脆不发软",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "You can hear the fish dice crackle when you bite, and the salt level tastes round, not harsh",
        "signalZh": "咬到鱼丁能听到咔嚓声，咸味圆润不刺口"
      }
    }
  ],
  "tips": [
    "Soak and dry the salted fish. Soaking tames the salt; drying is what lets it crisp.",
    "Season last and taste first. Between the fish and the soy sauce it is very easy to oversalt this dish.",
    "Keep the fish crisp by folding it in at the very end, off the heat."
  ],
  "tipsZh": [
    "咸鱼要泡要擦干。泡水去咸，擦干才能煎脆。",
    "最后调味前一定先尝。鱼和酱油加起来，这道菜很容易过咸。",
    "关火时才拌入鱼丁，才能保住酥脆。"
  ],
  "relatedSlugs": [
    "egg-fried-rice",
    "soy-sauce-fried-rice"
  ],
  "image": "/images/recipes/soy-sauce-fried-rice.webp"
};
