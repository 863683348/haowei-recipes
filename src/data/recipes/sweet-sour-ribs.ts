import type { Recipe } from "@/lib/types";

/** 糖醋排骨 Sweet and Sour Pork Ribs (糖醋排骨) — Day 11 糖醋家族 */
export const sweet_sour_ribs: Recipe = {
  "id": "sweet-sour-ribs",
  "slug": "sweet-sour-ribs",
  "titleEn": "Sweet and Sour Pork Ribs (糖醋排骨)",
  "titleZh": "糖醋排骨",
  "pinyin": "táng cù pái gǔ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 3,
  "version": "family",
  "versionNote": "家常红烧法，糖醋比例 2:1。上海本帮风格偏甜，江浙做法会加少许醋提亮。",
  "versionNoteZh": "家常红烧法，糖醋比例 2:1。上海本帮风格偏甜，江浙做法会加少许醋提亮。",
  "tags": ["comfort", "shanghai", "family-dinner", "special-occasion"],
  "dietary": ["none"],
  "story": "Sweet and sour ribs (糖醋排骨) are a cornerstone of Shanghai home cooking — glossy, sticky, and deeply savory-sweet. Unlike the crispy fried American version, this is a braise: ribs slow-cooked in a tangy-sweet sauce until the meat falls off the bone. It is the dish that appears at every family gathering along the Yangtze delta.",
  "storyZh": "糖醋排骨是上海家常菜的灵魂——光泽诱人、黏糯入味、咸甜交织。不同于美式炸排骨，这是焖烧做法：排骨在酸甜汁中慢炖至骨肉分离。是长江三角洲家庭聚会的必备菜。",
  "ingredients": [
    { "id": "ssr-ribs", "nameEn": "pork ribs (spare ribs or baby back), cut into 5 cm pieces", "nameZh": "猪肋排，切 5cm 段", "amountMetric": "600 g", "amountUS": "about 1.3 lbs", "category": "protein", "pantry": "local", "termKey": "pork-ribs" },
    { "id": "ssr-rock-sugar", "nameEn": "rock sugar (or white sugar)", "nameZh": "冰糖（或白糖）", "amountMetric": "2 tbsp", "amountUS": "2 tbsp", "category": "western-pantry", "pantry": "local", "termKey": "rock-sugar" },
    { "id": "ssr-vinegar", "nameEn": "Chinkiang black vinegar", "nameZh": "镇江香醋", "amountMetric": "3 tbsp", "amountUS": "3 tbsp", "category": "asian-pantry", "pantry": "asian", "termKey": "chinkiang-vinegar" },
    { "id": "ssr-soy-light", "nameEn": "light soy sauce", "nameZh": "生抽", "amountMetric": "2 tbsp", "amountUS": "2 tbsp", "category": "asian-pantry", "pantry": "asian", "termKey": "light-soy-sauce" },
    { "id": "ssr-soy-dark", "nameEn": "dark soy sauce (for color)", "nameZh": "老抽（上色用）", "amountMetric": "1 tbsp", "amountUS": "1 tbsp", "category": "asian-pantry", "pantry": "asian", "termKey": "dark-soy-sauce" },
    { "id": "ssr-shaoxing", "nameEn": "Shaoxing wine", "nameZh": "料酒", "amountMetric": "2 tbsp", "amountUS": "2 tbsp", "category": "asian-pantry", "pantry": "asian", "termKey": "shaoxing-wine" },
    { "id": "ssr-ginger", "nameEn": "ginger, sliced into 3 pieces", "nameZh": "生姜，拍扁 3 片", "amountMetric": "3 slices", "amountUS": "3 slices", "category": "produce", "pantry": "local" },
    { "id": "ssr-scallion", "nameEn": "scallion, cut into 3-inch sections", "nameZh": "大葱段，3 寸长", "amountMetric": "2 stalks", "amountUS": "2 stalks", "category": "produce", "pantry": "local" },
    { "id": "ssr-water", "nameEn": "hot water", "nameZh": "热水", "amountMetric": "400 ml", "amountUS": "about 1 2/3 cup", "category": "other", "pantry": "local" },
    { "id": "ssr-oil", "nameEn": "neutral oil", "nameZh": "食用油", "amountMetric": "1 tbsp", "amountUS": "1 tbsp", "category": "western-pantry", "pantry": "local" },
    { "id": "ssr-seeds", "nameEn": "white sesame seeds (garnish)", "nameZh": "白芝麻（装饰）", "amountMetric": "1 tsp", "amountUS": "1 tsp", "category": "spice", "pantry": "local" }
  ],
  "steps": [
    { "text": "Blanch ribs: put ribs in a pot with cold water, bring to a boil, skim scum, drain and rinse. This removes impurities and gamey odors.", "textZh": "排骨焯水：冷水下锅，烧开撇去浮沫，捞出冲洗。去除杂质和腥味。", "zhHint": "冷水焯去腥", "stateNote": { "visual": "Grey foam rises to the surface", "visualZh": "水面浮起灰色泡沫", "timeRef": "5 minutes", "timeRefZh": "5 分钟", "signal": "Water runs clear after rinsing", "signalZh": "冲洗后水变清" } },
    { "text": "Caramelize sugar: heat oil in a wok over medium-low. Add rock sugar and stir constantly until it melts and turns amber (about 2 minutes). Do not walk away — it burns fast.", "textZh": "炒糖色：中小火加热油，下冰糖搅动至融化变琥珀色（约 2 分钟）。不要离开——极易焦糊。", "zhHint": "炒糖色关键", "stateNote": { "visual": "Sugar melts, turns from white to pale gold to deep amber", "visualZh": "糖由白→浅金→深琥珀色", "heat": "medium-low", "timeRef": "2 minutes", "timeRefZh": "2 分钟", "signal": "Amber color with small bubbles — pull off heat immediately", "signalZh": "琥珀色冒小泡——立即离火" } },
    { "text": "Add blanched ribs to the caramelized sugar. Toss quickly to coat every piece in the glaze.", "textZh": "下入焯好的排骨，快速翻炒让每块均匀裹上糖色。", "zhHint": "快速裹糖色", "stateNote": { "visual": "Ribs turn glossy reddish-brown", "visualZh": "排骨变红亮褐色", "heat": "medium", "signal": "Every piece evenly colored", "signalZh": "每块均匀上色" } },
    { "text": "Add Shaoxing wine, light soy, dark soy, ginger, and scallion. Stir 30 seconds to release aroma.", "textZh": "加料酒、生抽、老抽、姜片、葱段。炒 30 秒出香。", "zhHint": "调味爆香", "stateNote": { "visual": "Sauce bubbles vigorously, aromatic steam rises", "visualZh": "酱汁冒泡，香气升腾", "heat": "medium-high", "timeRef": "30 seconds", "timeRefZh": "30 秒", "signal": "Wine smell dissipates, soy fragrance emerges", "signalZh": "酒气散尽，酱油香出来" } },
    { "text": "Pour in hot water until ribs are just submerged. Bring to a boil, then reduce to low heat. Cover and simmer 35 minutes.", "textZh": "加热水没过排骨，烧开转小火，盖盖焖 35 分钟。", "zhHint": "热水慢焖", "stateNote": { "visual": "Gentle bubbles break the surface occasionally", "visualZh": "酱汁微沸，偶有气泡破裂", "heat": "low", "timeRef": "35 minutes", "timeRefZh": "35 分钟", "signal": "Meat pulls back slightly from bone ends", "signalZh": "肉从骨端微微收缩" } },
    { "text": "Add vinegar and increase heat to medium-high. Uncover and reduce sauce until it coats the ribs in a thick glossy glaze (about 5-8 minutes).", "textZh": "加香醋，转中大火收汁，开盖收至浓稠裹汁（约 5-8 分钟）。", "zhHint": "加醋收汁", "stateNote": { "visual": "Sauce thickens to a syrupy consistency, coats the back of a spoon", "visualZh": "汁变浓稠如糖浆，勺背挂汁", "heat": "medium-high", "timeRef": "5-8 minutes", "timeRefZh": "5-8 分钟", "signal": "Sauce leaves a clean trail when stirred", "signalZh": "铲划锅底痕迹清晰" } },
    { "text": "Garnish with sesame seeds. Serve immediately while the glaze is still glossy and warm.", "textZh": "撒白芝麻点缀，趁热上桌。", "zhHint": "芝麻提香", "stateNote": { "visual": "Glaze has a deep amber shine, steam rising", "visualZh": "釉面深琥珀色光泽，热气腾腾", "signal": "Eat immediately — glaze sets as it cools", "signalZh": "趁热吃，凉了釉会凝固变硬" } }
  ],
  "tips": [
    "Rock sugar gives a glossier, less cloying sweetness than white sugar. If unavailable, white sugar works but the glaze will not be as shiny.",
    "The vinegar is added at the end — late vinegar preserves its bright tang. Early vinegar gets cooked away.",
    "The ribs are done when the meat easily separates from the bone with gentle pressure.",
    "Leftover ribs reheat beautifully in a steamer — the glaze re-glosses."
  ],
  "tipsZh": [
    "冰糖比白糖光泽更好、甜而不腻。没有冰糖可用白糖替代，但釉面光泽略逊。",
    "醋最后加——晚加醋保留明亮酸香，早加醋会被煮掉酸味。",
    "排骨炖好的标志：轻压骨肉自然分离。",
    "隔夜加热用蒸笼，釉面会重新恢复光泽。"
  ],
  "relatedSlugs": ["sweet-sour-pork", "hongshao-pork", "potato-beef-stew"],
  "image": "/images/recipes/sweet-sour-ribs.webp"
};
