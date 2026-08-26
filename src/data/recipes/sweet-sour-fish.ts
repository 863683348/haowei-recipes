import type { Recipe } from "@/lib/types";

/** 糖醋鱼 Sweet and Sour Fish (糖醋鱼) — Day 11 糖醋家族 */
export const sweet_sour_fish: Recipe = {
  "id": "sweet-sour-fish",
  "slug": "sweet-sour-fish",
  "titleEn": "Sweet and Sour Fish (糖醋鱼)",
  "titleZh": "糖醋鱼",
  "pinyin": "táng cù yú",
  "cuisine": "鲁菜",
  "cuisineEn": "Shandong",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "hard",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "家常整鱼版，鲁菜经典。餐厅版会做牡丹花刀让鱼形更夸张。",
  "versionNoteZh": "家常整鱼版，鲁菜经典。餐厅版会做牡丹花刀让鱼形更夸张。",
  "tags": ["special-occasion", "shandong", "festive", "fish"],
  "dietary": ["none"],
  "story": "Sweet and sour fish (糖醋鱼) is a showpiece of Shandong (Lu) cuisine — a whole fish, scored and deep-fried until the flesh fans out like petals, then drenched in a vibrant sweet-sour glaze. It is a mandatory dish for Chinese New Year and weddings because the whole fish symbolizes abundance (年年有余). The trick is the scoring technique and the two-stage fry.",
  "storyZh": "糖醋鱼是鲁菜的代表作——整鱼改刀炸制后鱼肉绽开花瓣状，淋上鲜亮的糖醋汁。是春节和婚宴的必备菜，寓意年年有余。关键在刀工和两次炸制。",
  "ingredients": [
    { "id": "ssf-fish", "nameEn": "whole fish (sea bass or tilapia), about 500 g", "nameZh": "整鱼（鲈鱼或罗非鱼）约 500g", "amountMetric": "500 g", "amountUS": "about 1.1 lbs", "category": "protein", "pantry": "local", "termKey": "whole-fish" },
    { "id": "ssf-cornstarch", "nameEn": "cornstarch", "nameZh": "玉米淀粉", "amountMetric": "4 tbsp", "amountUS": "4 tbsp", "category": "western-pantry", "pantry": "local", "termKey": "cornstarch" },
    { "id": "ssf-egg", "nameEn": "egg white (or 1 whole egg)", "nameZh": "蛋清（或 1 个全蛋）", "amountMetric": "1", "amountUS": "1 large", "category": "dairy", "pantry": "local" },
    { "id": "ssf-vinegar", "nameEn": "Chinkiang black vinegar", "nameZh": "镇江香醋", "amountMetric": "3 tbsp", "amountUS": "3 tbsp", "category": "asian-pantry", "pantry": "asian", "termKey": "chinkiang-vinegar" },
    { "id": "ssf-sugar", "nameEn": "white sugar", "nameZh": "白糖", "amountMetric": "2 tbsp", "amountUS": "2 tbsp", "category": "western-pantry", "pantry": "local" },
    { "id": "ssf-ketchup", "nameEn": "ketchup", "nameZh": "番茄酱", "amountMetric": "2 tbsp", "amountUS": "2 tbsp", "category": "western-pantry", "pantry": "local" },
    { "id": "ssf-soy", "nameEn": "light soy sauce", "nameZh": "生抽", "amountMetric": "1 tbsp", "amountUS": "1 tbsp", "category": "asian-pantry", "pantry": "asian", "termKey": "light-soy-sauce" },
    { "id": "ssf-garlic", "nameEn": "garlic, minced", "nameZh": "蒜末", "amountMetric": "3 cloves", "amountUS": "3 cloves", "category": "produce", "pantry": "local" },
    { "id": "ssf-ginger", "nameEn": "ginger, minced", "nameZh": "姜末", "amountMetric": "1 tsp", "amountUS": "1 tsp", "category": "produce", "pantry": "local" },
    { "id": "ssf-scallion", "nameEn": "scallion, julienned for garnish", "nameZh": "大葱丝（装饰用）", "amountMetric": "1 stalk", "amountUS": "1 stalk", "category": "produce", "pantry": "local" },
    { "id": "ssf-oil", "nameEn": "neutral oil for deep frying", "nameZh": "食用油（炸用）", "amountMetric": "500 ml", "amountUS": "about 2 cup", "category": "western-pantry", "pantry": "local" }
  ],
  "steps": [
    { "text": "Clean the fish: remove scales and gills. Make 3-4 deep diagonal cuts (about 2 cm deep) on each side, stopping at the backbone. Pat completely dry inside and out.", "textZh": "处理鱼：去鳞去鳃。每侧斜切 3-4 刀（深约 2cm，停于脊骨）。内外擦干。", "zhHint": "改刀深度到脊骨", "stateNote": { "visual": "Cuts go through the flesh to but not through the backbone", "visualZh": "刀工切透鱼肉但不切断脊骨", "signal": "Fish can lay relatively flat when scored", "signalZh": "改刀后鱼身可相对平铺" } },
    { "text": "Marinate: rub salt and Shaoxing wine inside the cuts and on the surface. Rest 10 minutes. Pat dry again — surface moisture prevents crispy skin.", "textZh": "腌制：在切口和表面抹盐、料酒。静置 10 分钟。再次擦干——水分影响脆皮。", "zhHint": "盐酒去腥", "stateNote": { "visual": "Fish flesh looks opaque where salt touched it", "visualZh": "盐接触处鱼肉变白", "timeRef": "10 minutes", "timeRefZh": "10 分钟", "signal": "Surface dry to touch", "signalZh": "表面摸起来干燥" } },
    { "text": "Coat the fish: dust cornstarch generously inside and outside the cuts, pressing gently so it adheres. Shake off excess. The cornstarch creates the crispy crust and helps the cuts fan out.", "textZh": "裹粉：切口内外 generously 裹上玉米淀粉，轻压使其附着。抖掉多余粉。淀粉形成脆壳并帮助切口绽放。", "zhHint": "淀粉要拍实", "stateNote": { "visual": "Fish is uniformly white with a powdery coat", "visualZh": "鱼身均匀白色粉层", "signal": "Coating looks dry and matte", "signalZh": "粉层干燥不湿粘" } },
    { "text": "Heat oil to 180°C. Hold the fish by the tail and lower it into the oil, curling slightly. Fry the first side 2 minutes until golden, then carefully flip and fry the other side 2 minutes. The cuts should open up like petals.", "textZh": "油烧 180 度，拎鱼尾入锅。先炸正面 2 分钟至金黄，再翻面炸反面 2 分钟。切口应绽开如花。", "zhHint": "高温快炸定型", "stateNote": { "visual": "Oil bubbles vigorously around fish, cuts begin to separate", "visualZh": "油面剧烈冒泡，切口开始分开", "heat": "high", "timeRef": "2 minutes per side", "timeRefZh": "每面 2 分钟", "signal": "Crust is golden and firm, fish floats", "signalZh": "外壳金黄坚硬，鱼浮起" } },
    { "text": "Drain on a wire rack. Increase oil heat to 190°C. Fry again for 30 seconds — this double-fry ensures maximum crunch.", "textZh": "捞出沥油。油温升至 190 度，复炸 30 秒——两次炸制确保极致酥脆。", "zhHint": "复炸 30 秒", "stateNote": { "visual": "Second fry deepens color to golden amber", "visualZh": "复炸后颜色加深为金琥珀色", "heat": "high", "timeRef": "30 seconds", "timeRefZh": "30 秒", "signal": "Crust sounds hollow when tapped", "signalZh": "轻敲外壳发出空心声" } },
    { "text": "Make the sauce: in a clean wok, combine vinegar, sugar, ketchup, soy sauce, and 3 tbsp water. Bring to a boil over medium heat. Add garlic and ginger, stir 10 seconds.", "textZh": "调糖醋汁：锅中加香醋、糖、番茄酱、生抽、3 汤匙水。中火烧开。下蒜姜末，炒 10 秒。", "zhHint": "快调糖醋汁", "stateNote": { "visual": "Sauce bubbles vigorously, turns pink-orange", "visualZh": "汁冒大泡，呈粉橙色", "heat": "medium", "signal": "Sugar fully dissolved, sauce is uniform", "signalZh": "糖完全融化，汁均匀" } },
    { "text": "When sauce thickens slightly (30 seconds), pour over the fried fish immediately. Garnish with scallion julienne and a sprinkle of sesame seeds. Serve at once.", "textZh": "汁微稠（30 秒）后立即淋在炸好的鱼上。撒葱丝和芝麻。立即上桌。", "zhHint": "淋汁快上", "stateNote": { "visual": "Sauce coats the fish with a bright gloss, steam rises", "visualZh": "汁均匀光亮地裹在鱼身，热气升腾", "signal": "Eat immediately — crispy crust degrades within minutes", "signalZh": "立即吃，脆壳几分钟内就会变软" } }
  ],
  "tips": [
    "Sea bass (鲈鱼) is ideal — firm flesh that holds its shape. Tilapia works too but is softer. Avoid flaky fish like cod.",
    "The double-fry is non-negotiable: first fry cooks through, second fry creates the glass-like crunch.",
    "Pour the sauce right at the table for maximum drama — or ladle it over just before serving.",
    "Whole fish symbolizes abundance in Chinese culture — this dish is mandatory for celebrations."
  ],
  "tipsZh": [
    "鲈鱼最佳——肉质紧实不易散。罗非鱼也可，肉质偏软。避免用鳕鱼等易散的鱼。",
    "两次炸制不可省略：初炸熟透，复炸酥脆。",
    "上桌时淋汁最有仪式感——或在餐桌上现场浇汁。",
    "整鱼寓意年年有余，是节庆必备菜。"
  ],
  "relatedSlugs": ["sweet-sour-pork", "sweet-sour-ribs", "winter-melon-soup"],
  "image": "/images/recipes/sweet-sour-fish.webp"
};
