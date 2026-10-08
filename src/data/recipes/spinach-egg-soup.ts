import type { Recipe } from "@/lib/types";

/** Spinach and Egg Soup (菠菜鸡蛋汤) (菠菜鸡蛋汤) — Day batch */
export const spinach_egg_soup: Recipe = {
  "id": "spinach-egg-soup",
  "slug": "spinach-egg-soup",
  "titleEn": "Spinach and Egg Soup (菠菜鸡蛋汤)",
  "titleZh": "菠菜鸡蛋汤",
  "pinyin": "bō cài jī dàn tāng",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: a quick clear soup with ribbons of beaten egg and whole spinach leaves, seasoned only with salt, sesame oil, and white pepper. Restaurant version starts with a brief ginger-scallion fry and finishes with a few drops of sesame oil off the heat for a rounder aroma.",
  "versionNoteZh": "家庭版：快手清汤，蛋液拉成蛋花、整片菠菜叶下锅，只以盐、香油、白胡椒调味。餐厅版会先用姜葱爆一下锅，离火后滴几滴香油，香气更圆润。",
  "tags": [
    "soup",
    "15-min",
    "beginner",
    "healthy",
    "comfort-food"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This is the soup that appears on a Chinese table when nobody planned a soup. Ten minutes, two ingredients beyond salt, and it turns a meal of three dry stir-fries into dinner. Every family has a version and every family argues about the order: egg first and spinach last for tender leaves, or spinach first for a deeper green broth. This version does egg first, because the ribbons stay silky when they set in plain boiling water rather than in a broth already full of vegetable solids.",
  "storyZh": "这是中国餐桌上「没人打算做汤」时出现的汤。十分钟、除盐外两样食材，就能把三个干炒菜变成一顿饭。家家都有版本，家家都争顺序：先蛋后菠菜则菜叶嫩，先菠菜则汤色更绿。这里用先蛋法，因为蛋液在清沸水中定型更滑嫩，而不是在已经充满菜碎的汤里。",
  "ingredients": [
    {
      "id": "ses-spinach",
      "nameEn": "baby spinach",
      "nameZh": "嫩菠菜",
      "amountMetric": "200 g",
      "amountUS": "about 7 oz",
      "category": "produce",
      "pantry": "local",
      "note": "Baby spinach needs no blanching. Mature spinach should be blanched 20 seconds first to remove oxalic bite.",
      "noteZh": "嫩菠菜无需焯水。老菠菜建议先焯 20 秒去涩。"
    },
    {
      "id": "ses-egg",
      "nameEn": "large eggs, beaten",
      "nameZh": "鸡蛋，打散",
      "amountMetric": "2 eggs",
      "amountUS": "2 eggs",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ses-ginger",
      "nameEn": "fresh ginger, finely shredded",
      "nameZh": "生姜，切细丝",
      "amountMetric": "3 slices worth",
      "amountUS": "about 1 tsp shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ses-scallion",
      "nameEn": "scallion, sliced",
      "nameZh": "小葱，切花",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ses-stock",
      "nameEn": "chicken stock or water",
      "nameZh": "鸡汤或清水",
      "amountMetric": "800 ml",
      "amountUS": "about 3.4 cups",
      "category": "other",
      "pantry": "local",
      "note": "Stock gives a fuller soup; water keeps it clean and lets the spinach taste through.",
      "noteZh": "高汤更醇厚；清水更清爽，能吃出菠菜本味。"
    },
    {
      "id": "ses-cornstarch",
      "nameEn": "cornstarch slurry (cornstarch + 2 tbsp water)",
      "nameZh": "水淀粉（淀粉 + 2 汤匙水）",
      "amountMetric": "1 tsp cornstarch + 30 ml water",
      "amountUS": "1 tsp + 2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ses-sesame-oil",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "ses-pepper",
      "nameEn": "ground white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "ses-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "3/4 tsp",
      "amountUS": "3/4 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Bring the stock (or water) to a boil in a medium pot with the shredded ginger. Beat the eggs in a bowl until completely uniform — no streaks of white remaining — and stir the cornstarch slurry once more so it has not settled.",
      "textZh": "中等锅里把高汤（或清水）与姜丝烧开。鸡蛋在碗中打至完全均匀——不留一丝蛋清纹路——水淀粉再搅一次防止沉底。",
      "stateNote": {
        "visual": "Beaten egg is a uniform pale yellow with a fine layer of foam on top; the pot surface is at a steady boil with small even bubbles",
        "visualZh": "蛋液呈均匀的浅黄色、表面浮一层细泡；锅内稳定沸腾、气泡细密均匀",
        "heat": "high",
        "signal": "Lifting the whisk leaves no separate strand of egg white",
        "signalZh": "提起打蛋器时不再挂出分离的蛋清丝"
      }
    },
    {
      "text": "Lower the heat so the surface is barely moving. Pour the beaten egg in a slow thin stream in a circular motion, and wait 10 seconds before touching it. This is how you get long silky ribbons instead of cloudy scraps.",
      "textZh": "转小火让汤面几乎不动。蛋液以细流画圈缓缓倒入，倒完静置 10 秒不要碰它。这样才会得到细长的滑蛋花，而不是浑浊的蛋絮。",
      "stateNote": {
        "visual": "The egg sets instantly on contact into pale golden ribbons and sheets that float; the broth stays mostly clear",
        "visualZh": "蛋液一接触汤面就凝固成浅金色的蛋丝蛋片漂浮起来，汤体基本保持清澈",
        "heat": "low",
        "timeRef": "10 seconds undisturbed after pouring",
        "timeRefZh": "倒完后静置 10 秒",
        "signal": "Ribbons hold together when you gently push them — they are set, not still liquid",
        "signalZh": "轻推蛋花时能整片移动——已经定型而非流动"
      },
      "tip": "Do not stir while pouring. Stirring shreds the ribbons into mush.",
      "tipZh": "倒蛋液时不要搅。一搅蛋花就碎成絮。"
    },
    {
      "text": "Add the spinach all at once and press it under the surface with a ladle. Cook for just 45 seconds — spinach collapses fast and overcooked spinach turns olive-drab and sulfurous.",
      "textZh": "菠菜一次全部下锅，用勺子压入汤面下。只煮 45 秒——菠菜塌得极快，煮过头会变橄榄褐并有硫味。",
      "stateNote": {
        "visual": "Leaves wilt within 15 seconds and turn a vivid glossy green; the broth takes on a faint green tint",
        "visualZh": "菜叶 15 秒内塌软，转为鲜亮的油绿色，汤汁带上淡淡绿意",
        "heat": "medium",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "Leaves are fully limp but still bright green — any dull olive color means it went too long",
        "signalZh": "菜叶完全塌软但仍鲜绿——泛橄榄褐就是煮过了"
      }
    },
    {
      "text": "Give the slurry a final stir and drizzle it in while stirring gently in one direction. Stop as soon as the soup turns barely glossy and coats the back of a spoon. A thin body is correct here — this is a clean soup, not a thickened one.",
      "textZh": "水淀粉最后搅一次，边淋边朝一个方向轻搅。汤刚开始泛出光泽、能挂住勺背就立刻停。这里要的是薄芡——这是清汤不是浓汤。",
      "stateNote": {
        "visual": "The broth shifts from watery to a faint sheen; bubbles at the edge turn smaller and slower",
        "visualZh": "汤体由水感转为微有光泽，边缘气泡变小变慢",
        "heat": "medium",
        "timeRef": "20-30 seconds of stirring",
        "timeRefZh": "搅 20-30 秒",
        "signal": "A spoon dipped and lifted leaves a thin film that runs off slowly, not a heavy coating",
        "signalZh": "勺子蘸汤提起会挂一层薄膜缓慢流下，而不是厚厚一层"
      }
    },
    {
      "text": "Turn off the heat. Season with salt and white pepper, then add the sesame oil and scallion. Do not boil after adding sesame oil — its aroma is volatile and disappears within a minute of bubbling.",
      "textZh": "关火。加盐和白胡椒调味，再淋香油、撒葱花。加香油后不要再煮——它的香气极易挥发，煮开一分钟就没了。",
      "stateNote": {
        "visual": "Golden beads of sesame oil float on the surface; scallion greens are bright and uncooked-looking on top",
        "visualZh": "香油在汤面浮成金色油珠，葱花鲜亮如生地铺在表面",
        "signal": "You smell toasted sesame the moment the bowl reaches the table — if you cannot, it was added too early",
        "signalZh": "汤碗上桌那一刻就能闻到焙芝麻香——闻不到说明加早了"
      }
    }
  ],
  "tips": [
    "Pour the egg into barely-moving liquid and wait 10 seconds. That is the whole secret to silky ribbons.",
    "Spinach cooks in under a minute. Set a timer rather than eyeballing it.",
    "Add sesame oil off the heat only. Boiling destroys the aroma you added it for.",
    "Blanch mature spinach first; baby spinach can go straight in.",
    "A spoonful of rehydrated glass noodles turns this into a light one-bowl meal."
  ],
  "tipsZh": [
    "蛋液要在几乎不动的汤里倒，倒完等 10 秒。这就是蛋花滑嫩的全部秘诀。",
    "菠菜不到一分钟就熟。定个计时器，别靠眼睛估。",
    "香油只能关火后加。一煮就把你加它的那份香气煮没了。",
    "老菠菜先焯；嫩菠菜可直接下锅。",
    "加一把泡发的粉丝，就成了清爽的一碗管饱。"
  ],
  "relatedSlugs": [
    "egg-drop-soup",
    "tomato-egg-drop-soup",
    "winter-melon-soup",
    "minced-pork-steamed-egg"
  ],
  "image": "/images/recipes/egg-drop-soup.webp"
};
