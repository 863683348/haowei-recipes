import type { Recipe } from "@/lib/types";

/** 糖醋里脊 Sweet and Sour Pork (糖醋里脊) */
export const sweet_sour_pork: Recipe = {
  "id": "sweet-sour-pork",
  "slug": "sweet-sour-pork",
  "titleEn": "Sweet and Sour Pork (糖醋里脊)",
  "titleZh": "糖醋里脊",
  "pinyin": "táng cù lǐ jǐ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "China",
  "regionZh": "中国",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "家庭快手版，糖醋汁一次调好，裹粉快炸。餐厅版会先复炸一次让外壳更脆。",
  "versionNoteZh": "家庭快手版，糖醋汁一次调好，裹粉快炸。餐厅版会先复炸一次让外壳更脆。",
  "tags": ["comfort", "special-occasion", "kid-friendly"],
  "dietary": ["none"],
  "story": "Sweet and sour pork is the dish that introduced Chinese food to the West. The real Chinese version is not the thick orange glaze of American takeout — it is a bright, tangy-sweet balance with a thin crispy crust. This home version uses a quick cornstarch coating and a pan-made sauce that comes together in minutes.",
  "storyZh": "糖醋里脊是向西方介绍中餐的代表菜。正宗中式做法不是美式外卖那种浓稠的橙色酱汁——它是明亮酸甜、外壳薄脆的平衡风味。这份家常快手版用玉米淀粉薄裹，酱汁现调现烹。",
  "ingredients": [
    { "id": "ssp-pork", "nameEn": "pork tenderloin or loin, cut into 2 cm strips", "nameZh": "猪里脊或梅花肉，切 2cm 长条", "amountMetric": "400 g", "amountUS": "about 14 oz", "category": "protein", "pantry": "local", "termKey": "pork-tenderloin" },
    { "id": "ssp-egg", "nameEn": "egg", "nameZh": "鸡蛋", "amountMetric": "1", "amountUS": "1 large", "category": "dairy", "pantry": "local" },
    { "id": "ssp-cornstarch", "nameEn": "cornstarch", "nameZh": "玉米淀粉", "amountMetric": "4 tbsp", "amountUS": "4 tbsp", "category": "western-pantry", "pantry": "local", "termKey": "cornstarch" },
    { "id": "ssp-flour", "nameEn": "all-purpose flour", "nameZh": "中筋面粉", "amountMetric": "2 tbsp", "amountUS": "2 tbsp", "category": "western-pantry", "pantry": "local" },
    { "id": "ssp-soy", "nameEn": "light soy sauce", "nameZh": "生抽", "amountMetric": "1 tbsp", "amountUS": "1 tbsp", "category": "asian-pantry", "pantry": "asian", "termKey": "light-soy-sauce" },
    { "id": "ssp-shaoxing", "nameEn": "Shaoxing wine", "nameZh": "料酒", "amountMetric": "1 tbsp", "amountUS": "1 tbsp", "category": "asian-pantry", "pantry": "asian", "termKey": "shaoxing-wine" },
    { "id": "ssp-vinegar", "nameEn": "Chinkiang black vinegar (or rice vinegar)", "nameZh": "镇江香醋（或米醋）", "amountMetric": "3 tbsp", "amountUS": "3 tbsp", "category": "asian-pantry", "pantry": "asian", "termKey": "chinkiang-vinegar" },
    { "id": "ssp-sugar", "nameEn": "white sugar", "nameZh": "白糖", "amountMetric": "2 tbsp", "amountUS": "2 tbsp", "category": "western-pantry", "pantry": "local" },
    { "id": "ssp-ketchup", "nameEn": "ketchup (for color + tang)", "nameZh": "番茄酱", "amountMetric": "2 tbsp", "amountUS": "2 tbsp", "category": "western-pantry", "pantry": "local" },
    { "id": "ssp-oil", "nameEn": "neutral oil for frying", "nameZh": "食用油（炸用）", "amountMetric": "300 ml", "amountUS": "about 1 1/4 cup", "category": "western-pantry", "pantry": "local" },
    { "id": "ssp-pepper", "nameEn": "white pepper", "nameZh": "白胡椒", "amountMetric": "1/4 tsp", "amountUS": "1/4 tsp", "category": "spice", "pantry": "local" }
  ],
  "steps": [
    { "text": "Cut pork into 2 cm strips. Pat dry with paper towels — surface moisture is the enemy of crispy coating.", "textZh": "猪里脊切 2cm 长条，用厨房纸吸干表面水分——水分是脆壳的大敌。", "zhHint": "肉条吸干水分", "stateNote": { "visual": "Surface looks matte, not wet or glossy", "visualZh": "表面呈哑光，不反光", "signal": "No liquid beads on meat", "signalZh": "肉表面无水珠" } },
    { "text": "Marinate pork: toss with soy sauce, Shaoxing wine, and white pepper. Rest 10 minutes.", "textZh": "腌制：加生抽、料酒、白胡椒抓匀。静置 10 分钟。", "zhHint": "生抽料酒去腥入味", "stateNote": { "visual": "Meat glistens, liquid absorbed", "visualZh": "肉表面挂汁，液体已被吸收", "timeRef": "10 minutes", "timeRefZh": "10 分钟", "signal": "No free liquid in the bowl", "signalZh": "碗底无游离液体" } },
    { "text": "Make the coating: mix cornstarch and flour in a shallow bowl. Dredge each strip, shaking off excess.", "textZh": "裹粉：将玉米淀粉和中筋面粉混合铺平。逐条裹粉，抖掉多余粉。", "zhHint": "干粉裹薄层", "stateNote": { "visual": "Each strip has a thin powdery white coat, no clumps", "visualZh": "每根条均匀裹上薄薄白粉，无结块", "signal": "Coating looks dry, not pasty", "signalZh": "粉层干燥，不呈糊状" } },
    { "text": "Mix the sweet and sour sauce in a small bowl: vinegar, sugar, ketchup, and 2 tbsp water. Stir until sugar dissolves.", "textZh": "调糖醋汁：香醋、糖、番茄酱、2 汤匙清水搅匀至糖融化。", "zhHint": "提前调好碗汁", "stateNote": { "visual": "Sauce is pink-orange, uniform, no sugar granules visible", "visualZh": "汁呈粉橙色均匀，无糖粒", "signal": "Spoon leaves a clean trail", "signalZh": "勺背划过碗底无糖粒残留" } },
    { "text": "Heat oil to 170°C — a wooden chopstick inserted should bubble steadily around it. Fry pork in batches 2-3 minutes until golden. Remove and drain.", "textZh": "油烧至 170 度，筷子插入冒细密气泡。分批炸 2-3 分钟至金黄，捞出沥油。", "zhHint": "中温初炸", "stateNote": { "visual": "Coating turns golden, bubbles slow down", "visualZh": "外壳金黄，气泡变缓", "heat": "medium-high", "timeRef": "2-3 minutes", "timeRefZh": "2-3 分钟", "signal": "Floats to surface, crust set", "signalZh": "浮起，外壳定型" } },
    { "text": "In a wok, pour in the sauce. Bring to a simmer over medium heat. When it thickens (about 30 seconds), add the fried pork. Toss quickly 10 seconds to coat — do NOT over-stir or the crust will soften.", "textZh": "锅中倒入糖醋汁，中火煮至微稠（约 30 秒）。下炸好的肉条，快速翻 10 秒裹匀——不要久翻，否则脆壳变软。", "zhHint": "快翻裹汁", "stateNote": { "visual": "Sauce becomes glossy and clings to pork, no pooling", "visualZh": "汁变亮且挂在肉上，锅底无积液", "heat": "medium", "timeRef": "30 seconds", "timeRefZh": "30 秒", "signal": "Sauce coats a spoon cleanly, trail holds", "signalZh": "勺背挂汁清晰，划痕不立即消失" } },
    { "text": "Serve immediately on a warm plate. The crust stays crispy for about 2 minutes after saucing.", "textZh": "趁热上桌。裹汁后脆壳保持约 2 分钟最佳口感。", "zhHint": "上桌趁热吃", "stateNote": { "visual": "Steam rises, glaze has a satin sheen", "visualZh": "热气升腾，釉面有缎光", "signal": "Eaten within 2 minutes for best crunch", "signalZh": "2 分钟内吃完口感最佳" } }
  ],
  "tips": [
    "The key to crispy sweet and sour pork is double-frying: first fry at 160°C to cook through, then fry again at 180°C right before saucing for maximum crunch.",
    "Do not skip the paper-towel step — wet meat equals soggy coating.",
    "Chinese black vinegar (Chinkiang) gives the characteristic tang. Rice vinegar is a decent substitute if unavailable.",
    "This dish pairs perfectly with egg fried rice and a simple stir-fried green vegetable."
  ],
  "tipsZh": [
    "脆的关键是复炸：160 度初炸熟透，再 180 度复炸上色，最后裹汁。",
    "肉条一定要吸干水分，否则裹粉会脱落、口感发软。",
    "镇江香醋是灵魂，没有可用米醋替代，风味略逊。",
    "搭配蛋炒饭和清炒时蔬，经典一餐。"
  ],
  "relatedSlugs": ["kung-pao-chicken", "twice-cooked-pork", "egg-fried-rice"],
  "image": "/images/recipes/kung-pao-chicken.webp"
};
