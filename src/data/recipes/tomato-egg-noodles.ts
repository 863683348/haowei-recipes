import type { Recipe } from "@/lib/types";

/** Tomato Egg Noodles (番茄鸡蛋面) */
export const tomato_egg_noodles: Recipe = {
  "id": "tomato-egg-noodles",
  "slug": "tomato-egg-noodles",
  "titleEn": "Tomato Egg Noodles (番茄鸡蛋面)",
  "titleZh": "番茄鸡蛋面",
  "pinyin": "fan qie ji dan mian",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Northern Chinese comfort food — sweet-tart tomato broth with silky egg ribbons over wheat noodles. The tomato must be peeled and broken down into a sauce.",
  "versionNoteZh": "北方家常 comfort food——酸甜番茄汤底配嫩滑蛋花，浇在小麦面上。番茄必须去皮并炒成酱。",
  "tags": ["comfort", "quick", "weeknight", "30-min"],
  "dietary": ["none"],
  "story": "Tomato egg noodles (番茄鸡蛋面) are the ultimate Northern Chinese comfort food — a simple one-bowl meal that tastes like home. The secret is breaking down the tomatoes into a rich, slightly sweet sauce that clings to the noodles, then swirling in silky egg ribbons. It is the dish every Chinese child learns to make.",
  "storyZh": "番茄鸡蛋面是北方家常 comfort food 的终极代表——一碗暖心的家常味道。秘诀是把番茄炒化成浓稠微甜的酱汁裹住面条，再淋入嫩滑的蛋花。这是每个中国孩子学会做的第一道菜。",
  "ingredients": [
    { "id": "ten-noodles", "nameEn": "wheat noodles (or ramen)", "nameZh": "小麦面（或拉面）", "amountMetric": "200 g", "amountUS": "7 oz", "category": "staple", "pantry": "local" },
    { "id": "ten-tomato", "nameEn": "ripe tomatoes, peeled and diced", "nameZh": "熟番茄，去皮切丁", "amountMetric": "2 large", "amountUS": "2 large", "category": "produce", "pantry": "local" },
    { "id": "ten-egg", "nameEn": "eggs, beaten", "nameZh": "鸡蛋，打散", "amountMetric": "2", "amountUS": "2 large", "category": "dairy", "pantry": "local" },
    { "id": "ten-oil", "nameEn": "neutral oil", "nameZh": "食用油", "amountMetric": "1 tbsp", "amountUS": "1 tbsp", "category": "western-pantry", "pantry": "local" },
    { "id": "ten-soy", "nameEn": "light soy sauce", "nameZh": "生抽", "amountMetric": "1 tsp", "amountUS": "1 tsp", "category": "asian-pantry", "pantry": "asian", "termKey": "light-soy-sauce" },
    { "id": "ten-sugar", "nameEn": "sugar", "nameZh": "白糖", "amountMetric": "1 tsp", "amountUS": "1 tsp", "category": "western-pantry", "pantry": "local" },
    { "id": "ten-water", "nameEn": "water", "nameZh": "水", "amountMetric": "400 ml", "amountUS": "about 1 2/3 cup", "category": "other", "pantry": "local" },
    { "id": "ten-scallion", "nameEn": "scallion, chopped (garnish)", "nameZh": "葱花（装饰）", "amountMetric": "2 stalks", "amountUS": "2 stalks", "category": "produce", "pantry": "local" }
  ],
  "steps": [
    { "text": "Score an X on the bottom of each tomato and blanch in boiling water for 30 seconds. Transfer to ice water, then peel off the skin. Dice the tomatoes.", "textZh": "番茄底部划十字，沸水焯30秒后过冰水，去皮切丁。", "zhHint": "番茄去皮切丁", "stateNote": { "visual": "Skin curls up at the corners and slips off easily", "visualZh": "皮边缘卷起，轻松剥落", "timeRef": "30 seconds", "timeRefZh": "30 秒", "signal": "Skin separates from flesh cleanly", "signalZh": "皮肉分离清晰" } },
    { "text": "Cook noodles in salted boiling water according to package directions. Reserve 1/2 cup noodle water, then drain.", "textZh": "面条沸水加盐煮熟，保留半杯面汤，沥干。", "zhHint": "煮面留汤", "stateNote": { "visual": "Noodles are tender but still firm (al dente)", "visualZh": "面条软但仍有弹性", "signal": "No hard center when bitten", "signalZh": "咬开无硬芯" } },
    { "text": "Heat oil in a wok over medium-high. Pour in beaten eggs and scramble until just set but still soft. Remove and set aside.", "textZh": "锅中放油中大火加热。倒入蛋液，滑炒至刚凝固但仍嫩滑，盛出备用。", "zhHint": "滑炒蛋液", "stateNote": { "visual": "Eggs puff up and set in soft curds", "visualZh": "蛋液膨胀成软嫩块状", "heat": "medium-high", "timeRef": "30 seconds", "timeRefZh": "30 秒", "signal": "Eggs are 90% set but still glossy", "signalZh": "蛋九分熟，表面仍光亮" } },
    { "text": "In the same wok, add diced tomatoes. Cook 3-4 minutes, pressing against the wok to break them down into a sauce.", "textZh": "同锅下番茄丁，中火炒3-4分钟，用锅铲压碎成酱。", "zhHint": "炒番茄出酱", "stateNote": { "visual": "Tomatoes break down into a thick, saucy consistency", "visualZh": "番茄炒化成浓稠酱汁", "heat": "medium", "timeRef": "3-4 minutes", "timeRefZh": "3-4 分钟", "signal": "Oils separate and surface glistens", "signalZh": "番茄油析出，表面泛油光" } },
    { "text": "Add noodle water, soy sauce, and sugar. Bring to a boil, then add noodles and scrambled eggs. Toss to coat.", "textZh": "加入面汤、生抽、糖，烧开。下面条和炒蛋，翻匀。", "zhHint": "调味拌匀", "stateNote": { "visual": "Sauce thickens and coats noodles evenly", "visualZh": "酱汁变浓裹住面条", "signal": "Sauce clings to noodles, no pooling", "signalZh": "酱汁挂面，锅底无积液" } },
    { "text": "Garnish with scallions. Serve immediately in deep bowls.", "textZh": "撒葱花，深碗上桌。", "zhHint": "撒葱上桌", "stateNote": { "visual": "Steam rises, sauce glossy, eggs golden", "visualZh": "热气升腾，酱汁光亮，蛋金黄", "signal": "Eat immediately for best texture", "signalZh": "立即食用口感最佳" } }
  ],
  "tips": [
    "Use very ripe tomatoes — they are sweeter and break down easier.",
    "Reserve the noodle water — the starch helps thicken the sauce naturally.",
    "Do not overcook the eggs — they finish cooking in the sauce.",
    "This dish is naturally gluten-free if you use GF noodles."
  ],
  "tipsZh": [
    "用熟透的番茄——更甜更易化开。",
    "保留面汤——淀粉帮助自然浓稠酱汁。",
    "不要炒老蛋——它们在酱汁里还会继续熟。",
    "如果用无麸质面条，这道菜天生无麸质。"
  ],
  "relatedSlugs": ["tomato-and-egg", "egg-fried-rice", "scallion-noodles"],
  "image": "/images/recipes/tomato-and-egg.webp"
};
