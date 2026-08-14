import type { Recipe } from "@/lib/types";

/** Yangzhou Fried Rice (扬州炒饭) (扬州炒饭) — Day batch */
export const yangzhou_fried_rice: Recipe = {
  "id": "yangzhou-fried-rice",
  "slug": "yangzhou-fried-rice",
  "titleEn": "Yangzhou Fried Rice (扬州炒饭)",
  "titleZh": "扬州炒饭",
  "pinyin": "yáng zhōu chǎo fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Yangzhou, Jiangsu Province",
  "regionZh": "江苏省扬州市",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Restaurant versions load the wok with colorful bits — shrimp, char siu, ham, peas, egg ribbons. Home version trims to what's practical; same elegance, less work.",
  "versionNoteZh": "餐厅版会堆满五颜六色的配料——虾仁、叉烧、火腿、豌豆、蛋丝。家常版按需精简，同样的精致，更少的麻烦。",
  "tags": [
    "25-min",
    "cantonese",
    "family",
    "protein",
    "classic"
  ],
  "dietary": [
    "none"
  ],
  "story": "Yangzhou fried rice is the gold standard of Chinese banquet fried rice. Every Chinese restaurant worldwide has a version; this is the home-cooked truth: generous protein, bright color from pea and carrot, and that signature grain-by-grain gloss.",
  "storyZh": "扬州炒饭是中式宴席炒饭的标杆。全球每家中餐馆都有版本；这是家常的真实做法：配料丰富、豌豆胡萝卜点缀出鲜亮色彩、每粒米都油光锃亮。",
  "ingredients": [
    {
      "id": "yfr-rice",
      "nameEn": "day-old cold cooked jasmine rice",
      "nameZh": "隔夜粳米或香米",
      "amountMetric": "300 g (about 2 cups)",
      "amountUS": "2 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Cold rice = separate grains. Spread fresh rice on a tray and fridge 1 hour if needed."
    },
    {
      "id": "yfr-shrimp",
      "nameEn": "raw shrimp, peeled & deveined, chopped coarse",
      "nameZh": "鲜虾仁，去壳去肠线，粗切",
      "amountMetric": "100 g (about 3/4 cup)",
      "amountUS": "3/4 cup",
      "category": "protein",
      "pantry": "asian",
      "termKey": "shrimp"
    },
    {
      "id": "yfr-charsiu",
      "nameEn": "char siu (Chinese BBQ pork), diced 1 cm",
      "nameZh": "叉烧肉，切成 1 厘米丁",
      "amountMetric": "80 g (about 2/3 cup)",
      "amountUS": "2/3 cup",
      "category": "protein",
      "pantry": "asian",
      "termKey": "char-siu"
    },
    {
      "id": "yfr-egg",
      "nameEn": "eggs, beaten",
      "nameZh": "鸡蛋，打散",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "yfr-peas",
      "nameEn": "frozen peas",
      "nameZh": "冷冻青豆",
      "amountMetric": "60 g (1/2 cup)",
      "amountUS": "1/2 cup",
      "category": "produce",
      "pantry": "local",
      "note": "Thaw under warm water before using."
    },
    {
      "id": "yfr-carrot",
      "nameEn": "carrot, finely diced",
      "nameZh": "胡萝卜，切细丁",
      "amountMetric": "50 g (1/3 cup)",
      "amountUS": "1/3 cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "yfr-scallion",
      "nameEn": "scallions, chopped white & green separated",
      "nameZh": "小葱，白绿分开切",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "yfr-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1½ tbsp",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "yfr-sesame",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "yfr-oil",
      "nameEn": "neutral oil (vegetable or canola)",
      "nameZh": "食用油（玉米/葵花籽油）",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "yfr-pepper",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "yfr-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Prep everything first: dice char siu, chop shrimp coarse, dice carrot small, separate scallion whites from greens, beat eggs with salt, thaw peas under warm water. Mise en place is everything for fried rice.",
      "textZh": "先把所有配料备好：叉烧切丁，虾仁粗切，胡萝卜切小丁，小葱白绿分开，鸡蛋加盐打散，豌豆温水解冻。炒饭的精髓在准备阶段。",
      "zhHint": "备料：米、肉、蛋、菜分别备好"
    },
    {
      "text": "Heat 1 tbsp oil over medium-high. Pour in beaten eggs, let them set 10 seconds at the bottom, then gently push with spatula so uncooked egg flows to the pan surface. Cook until just set in soft curds, about 30 seconds. Remove to a plate.",
      "textZh": "中大火热锅，放 1 汤匙油。倒入蛋液，等底部定型约 10 秒后用锅铲轻轻推动，让未凝固的蛋液流到锅面。炒至柔软凝固，约 30 秒，盛出备用。",
      "zhHint": "滑炒鸡蛋",
      "stateNote": {
        "visual": "Eggs are soft curds, still glossy and moist inside",
        "visualZh": "鸡蛋呈柔软蛋花，表面有光泽、内部湿润",
        "heat": "medium-high",
        "timeRef": "30-40 seconds",
        "timeRefZh": "30-40 秒",
        "signal": "No runny liquid; curds still wet and soft",
        "signalZh": "没有流动蛋液；蛋块依然湿润柔软"
      }
    },
    {
      "text": "Add remaining 1 tbsp oil. Toss in shrimp and char siu. Stir-fry 1 minute until shrimp turn opaque on the outside.",
      "textZh": "再加 1 汤匙油。下虾仁和叉烧。翻炒 1 分钟，虾的表面变不透明。",
      "zhHint": "炒虾仁与叉烧",
      "stateNote": {
        "visual": "Shrimp edges turn pink; char siu edges slightly crisp",
        "visualZh": "虾仁边缘变粉红；叉烧边缘略焦脆",
        "heat": "high",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Shrimp no longer translucent at edges",
        "signalZh": "虾仁边缘不再透明"
      }
    },
    {
      "text": "Push protein to one side. Add carrot and peas to the empty side; stir-fry 30 seconds. Then fold everything together.",
      "textZh": "把蛋白推到一边。空处下胡萝卜和豌豆，翻炒 30 秒。再翻拌均匀。",
      "zhHint": "下蔬菜爆香",
      "stateNote": {
        "visual": "Carrot brightens to orange; peas turn vibrant green",
        "visualZh": "胡萝卜变亮橙色；豌豆变鲜绿色",
        "heat": "high",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Carrot edges softened but still crisp",
        "signalZh": "胡萝卜边缘变软但仍保持脆度"
      }
    },
    {
      "text": "Add the cold rice. Break up any clumps with spatula. Press rice against the wok side for 10 seconds to toast, then toss. Repeat until every grain is separate and glossy — about 2 minutes.",
      "textZh": "下隔夜冷饭。用锅铲搓散结块。把米饭压到锅边烙 10 秒再翻动。重复直到每粒米都分开且油亮——约 2 分钟。",
      "zhHint": "下米饭翻炒",
      "stateNote": {
        "visual": "Rice goes from matte white to glossy and slightly golden at edges",
        "visualZh": "米饭从哑光白色变成油亮，边缘略金黄",
        "heat": "high",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Grains 'dance' and separate; no wet clumps",
        "signalZh": "米粒在锅里'跳舞'分离；没有湿团"
      }
    },
    {
      "text": "Return the scrambled eggs. Add soy sauce along the hot wok side (let it sizzle 5 seconds), then fold everything through. Add white scallion parts, toss 15 seconds.",
      "textZh": "把炒蛋倒回。生抽沿锅边淋入（让它滋啦 5 秒），再翻拌均匀。下葱白，翻炒 15 秒。",
      "zhHint": "烹酱油，回蛋",
      "stateNote": {
        "visual": "Soy sizzles and steams with a toasty aroma; rice takes a light golden tint",
        "visualZh": "酱油滋啦作响，散发焦香；米饭染上浅金色",
        "heat": "high",
        "timeRef": "5-10 seconds",
        "timeRefZh": "5-10 秒",
        "signal": "Steam smells roasted not raw-soy",
        "signalZh": "蒸汽是焦香而不是生酱油味"
      }
    },
    {
      "text": "Remove from heat. Stir in sesame oil and green scallion parts. Taste and adjust salt or white pepper if needed. Serve immediately.",
      "textZh": "关火。拌入香油和葱花。尝味，按需补盐或白胡椒。立即出锅。",
      "zhHint": "撒葱花，淋香油出锅",
      "stateNote": {
        "visual": "Green scallions just wilted; rice glossy, all ingredients evenly distributed",
        "visualZh": "葱花微微塌软；米饭油亮，所有配料分布均匀",
        "signal": "Each grain separate, protein and veg in every spoonful",
        "signalZh": "粒粒分明，每勺都有蛋白和蔬菜"
      }
    }
  ],
  "tips": [
    "Cold jasmine rice is ideal — short-grain is stickier and harder to keep separate.",
    "Char siu can be swapped for any pre-cooked pork or ham; the sweetness balances the salt.",
    "For the restaurant look: fry the eggs separately, pull them into ribbons, and fold in at the end."
  ],
  "tipsZh": [
    "隔夜粳米最佳——短粒米更黏，不容易粒粒分明。",
    "叉烧可用任何预熟猪肉或火腿代替；甜味能平衡咸味。",
    "追求餐厅效果：鸡蛋单独炒成蛋丝，最后折入。"
  ],
  "relatedSlugs": [
    "egg-fried-rice",
    "kung-pao-chicken",
    "beef-and-broccoli"
  ],
  "image": "/images/recipes/yangzhou-fried-rice.webp"
};
