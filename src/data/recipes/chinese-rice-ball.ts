import type { Recipe } from "@/lib/types";

/** Chinese Rice Ball (Fantuan) (饭团) — Day batch */
export const chinese_rice_ball: Recipe = {
  "id": "fan-tuan",
  "slug": "chinese-rice-ball",
  "titleEn": "Chinese Rice Ball (Fantuan)",
  "titleZh": "饭团",
  "pinyin": "fàn tuán",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Taiwan, China",
  "regionZh": "中国台湾",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "The family version is a hand-pressed ball of warm seasoned rice with a simple filling; the breakfast-shop version wraps it around a youtiao and picks the rice with sesame and sugar, which is a different, sweeter thing entirely.",
  "versionNoteZh": "家庭版是手捏的温热调味饭团配简单馅料；早餐店版会裹一根油条，并用芝麻白糖拌饭，那是完全不同的另一回事。",
  "tags": [
    "30-min",
    "breakfast",
    "no-cook-filling",
    "lunchbox",
    "kid-friendly"
  ],
  "dietary": [
    "none"
  ],
  "story": "Fantuan is breakfast in a hand. In Taiwan the classic version has a fried dough stick inside, so the soft rice and the crisp youtiao are eaten in the same bite. At home we usually made a smaller, plainer version with whatever was in the fridge, wrapped in cling film so it could be eaten on the way to school.",
  "storyZh": "饭团是握在手里的早餐。台湾的经典版本里面裹一根油条，软饭和脆油条在同一口里一起咬。家里通常做得更小更朴素，馅是冰箱里有什么放什么，用保鲜膜包好，好在上学路上吃。",
  "ingredients": [
    {
      "id": "ft-01",
      "nameEn": "short-grain or sushi rice, freshly cooked",
      "nameZh": "短粒米／寿司米（新煮）",
      "pinyin": "duǎn lì mǐ",
      "amountMetric": "400 g cooked",
      "amountUS": "2.5 cups cooked",
      "category": "staple",
      "pantry": "local",
      "note": "Short-grain rice sticks together, which is what you need here. Sub: jasmine rice, pressed harder.",
      "noteZh": "短粒米黏性好，正适合捏团。替代：茉莉香米，但要捏得更用力。"
    },
    {
      "id": "ft-02",
      "nameEn": "cooked chicken breast, shredded",
      "nameZh": "熟鸡胸肉（撕丝）",
      "pinyin": "jī xiōng ròu",
      "amountMetric": "120 g",
      "amountUS": "1 cup shredded",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ft-03",
      "nameEn": "pickled mustard greens or zha cai, chopped",
      "nameZh": "榨菜（切碎）",
      "pinyin": "zhà cài",
      "amountMetric": "40 g",
      "amountUS": "1/4 cup chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sub: well-drained sauerkraut or chopped cornichons.",
      "noteZh": "替代：沥干的德式酸菜或切碎的小酸黄瓜。"
    },
    {
      "id": "ft-04",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟白芝麻",
      "pinyin": "zhī ma",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-seeds"
    },
    {
      "id": "ft-05",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "ft-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ft-07",
      "nameEn": "scallion greens, finely chopped",
      "nameZh": "小葱绿（切细）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ft-08",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "2 g",
      "amountUS": "1/3 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ft-09",
      "nameEn": "nori sheets, cut into strips",
      "nameZh": "海苔（切条）",
      "pinyin": "hǎi tái",
      "amountMetric": "4 sheets",
      "amountUS": "4 sheets",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "seaweed"
    }
  ],
  "steps": [
    {
      "text": "Cook the rice according to the package, then let it stand covered 10 minutes so the surface moisture evens out. It should be warm, not piping hot, when you shape it.",
      "textZh": "按包装说明煮好米饭，盖盖静置10分钟让表面水分均匀。捏制时饭应是温热的，而不是滚烫。",
      "zhHint": "煮好焖10分钟至温热",
      "stateNote": {
        "visual": "Rice is fluffy with a uniform sheen; no wet patches on the surface and no dry crust",
        "visualZh": "米饭松软、光泽均匀；表面无湿斑也无干皮",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Grains separate with a fork but stick together when pressed",
        "signalZh": "用叉子能拨散，但用手压能黏合"
      },
      "tip": "Rice that is too hot burns your hands and too cold will not stick. Warm is the window.",
      "tipZh": "太烫会烫手，太冷黏不住。温热是唯一的窗口期。"
    },
    {
      "text": "Fold sesame oil, soy sauce, salt and sesame seeds through the warm rice with a cutting motion, keeping the grains whole.",
      "textZh": "趁饭温热，用切拌手法把香油、生抽、盐和芝麻拌入，保持米粒完整。",
      "zhHint": "温饭拌入芝麻与调味",
      "stateNote": {
        "visual": "Rice is evenly speckled with sesame; every grain has a faint gloss; colour is uniform beige",
        "visualZh": "米饭均匀点缀芝麻；每粒米都略有光泽；色泽均匀米色",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "No pockets of plain white rice remain when you part the mass with a spoon",
        "signalZh": "用勺拨开饭团，不再有纯白色的饭块"
      },
      "tip": "Cut and fold rather than stir — stirring mashes the grains and you lose the texture that makes a rice ball pleasant.",
      "tipZh": "要切拌不要搅拌——搅拌会把米粒压烂，失去饭团该有的口感。"
    },
    {
      "text": "Mix the shredded chicken with the chopped pickled mustard greens and scallion in a small bowl.",
      "textZh": "小碗中把鸡丝、榨菜碎和葱花拌匀。",
      "zhHint": "鸡丝榨菜葱花拌馅",
      "stateNote": {
        "visual": "Filling looks moist but not wet; when squeezed in a fist no liquid runs out",
        "visualZh": "馅料湿润但不湿答；握紧拳头挤压时无汁水流出",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "A pinch of filling holds together in a small clump",
        "signalZh": "捏起一小撮馅料能成小团不散"
      },
      "tip": "Keep the filling dry. Any liquid in the middle will seep out and the ball will fall apart in your hand.",
      "tipZh": "馅料一定要干。中间有水就会渗出，饭团会直接在手里散掉。"
    },
    {
      "text": "Lay a sheet of cling film on the work surface, spoon half the rice onto it and flatten into a 12 cm / 5 in disc. Put half the filling in the centre.",
      "textZh": "案板上铺一张保鲜膜，把一半米饭铺上并压成12厘米的圆片，中间放一半馅料。",
      "zhHint": "保鲜膜上铺饭压圆片",
      "stateNote": {
        "visual": "Rice disc is even in thickness with no holes; filling sits in a compact mound in the middle, at least 2 cm from the edge",
        "visualZh": "饭片厚薄均匀无破洞；馅料在中间堆成紧实小丘，距边缘至少2厘米",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Looking from the side, the rice layer is level all the way across",
        "signalZh": "从侧面看饭片整体平整无高低"
      },
      "tip": "Leave a good margin of plain rice around the filling, or it will burst through when you close the ball.",
      "tipZh": "馅料周围要留出足够多的纯米饭边，否则收口时会破出来。"
    },
    {
      "text": "Lift the edges of the cling film and gather the rice up and over the filling, then twist the film closed and squeeze firmly through the film to form a tight ball. Repeat with the rest.",
      "textZh": "提起保鲜膜四边把米饭向上收拢盖住馅料，然后拧紧保鲜膜并在膜外用力捏成紧实的饭团。剩下的材料同样操作。",
      "zhHint": "保鲜膜收口拧紧捏实",
      "stateNote": {
        "visual": "Ball is smooth and spherical with no cracks on the surface; filling is completely enclosed",
        "visualZh": "饭团光滑呈球形、表面无裂纹；馅料完全被包住",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "The ball feels firm all over when pressed, with no soft spots",
        "signalZh": "整体按压时处处紧实，没有松软的地方"
      },
      "tip": "Twist the film to tighten before you squeeze — the film does the compressing work that your hands cannot.",
      "tipZh": "先拧保鲜膜收紧再捏——压实的工作交给膜，手做不到这么紧。"
    },
    {
      "text": "Unwrap, wrap a strip of nori around the middle of each ball, and serve at once while the rice is still warm.",
      "textZh": "拆开保鲜膜，在每个饭团中部围一条海苔，趁饭还温热立刻食用。",
      "zhHint": "围海苔即食",
      "stateNote": {
        "visual": "Nori clings to the rice and darkens slightly where it absorbs moisture; rice is still steaming faintly",
        "visualZh": "海苔贴住米饭并因吸湿略微变深；米饭仍微微冒热气",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "The nori has gone from crisp and flat to slightly soft and curved to the ball",
        "signalZh": "海苔由脆硬平整变为略软并贴合饭团弧度"
      },
      "tip": "Add the nori at the very last second — it goes soft quickly and the whole point is the contrast with crisp seaweed.",
      "tipZh": "海苔最后一刻才加——它软得很快，而脆海苔的对比正是关键。"
    }
  ],
  "tips": [
    "Wrap finished balls in cling film and refrigerate overnight; microwave 40 seconds wrapped before eating.",
    "Swap the chicken for canned tuna mixed with a little mayonnaise for a five-minute version.",
    "Wet your hands and the cling film with a little water if the rice starts sticking while you shape."
  ],
  "tipsZh": [
    "做好的饭团用保鲜膜包好冷藏过夜，吃时连膜微波40秒。",
    "把鸡肉换成金枪鱼罐头拌少许蛋黄酱，五分钟就能做好。",
    "捏制时若米饭开始粘手或粘膜，手上和膜上蘸点水即可。"
  ],
  "relatedSlugs": [
    "fried-rice-ball",
    "pearl-meatballs-sticky-rice",
    "egg-fried-rice"
  ],
  "image": "/images/recipes/bamboo-tube-rice.webp"
};
