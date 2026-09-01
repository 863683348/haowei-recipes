import type { Recipe } from "@/lib/types";

/** Soft Fried Pork Tenderloin (软炸里脊) (软炸里脊) — Day batch */
export const soft_fried_pork: Recipe = {
  "id": "soft-fried-pork",
  "slug": "soft-fried-pork",
  "titleEn": "Soft Fried Pork Tenderloin (软炸里脊)",
  "titleZh": "软炸里脊",
  "pinyin": "ruǎn zhà lǐ ji",
  "cuisine": "鲁菜",
  "cuisineEn": "Shandong",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版用蛋清糊，外酥里嫩；餐馆版有时加泡打粉追求更蓬松外壳。",
  "versionNoteZh": "家庭版用蛋清糊，外酥里嫩；餐馆版有时加泡打粉追求更蓬松外壳。",
  "tags": [
    "fried",
    "comfort",
    "weeknight",
    "pork"
  ],
  "dietary": [
    "none"
  ],
  "story": "Soft fried pork tenderloin is the Shandong answer to chicken tenders—tender meat wrapped in a light, airy crust. My Shandong uncle made these at family gatherings, and they always disappeared first.",
  "storyZh": "软炸里脊是山东版的鸡柳——嫩肉配蓬松外壳。 uncle 在家宴上必做，永远第一个光盘。",
  "ingredients": [
    {
      "id": "sp-01",
      "nameEn": "pork tenderloin",
      "nameZh": "猪里脊",
      "amountMetric": "400 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-tenderloin"
    },
    {
      "id": "sp-02",
      "nameEn": "egg whites",
      "nameZh": "蛋清",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sp-03",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "60 g",
      "amountUS": "1/2 cup",
      "category": "staple",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "sp-04",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "40 g",
      "amountUS": "1/3 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "sp-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sp-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sp-07",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "中性油（炸用）",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut pork into 2cm x 5cm strips. Marinate with wine, soy sauce, and pinch of salt for 15 minutes.",
      "textZh": "猪肉切2×5厘米条，加绍兴酒、生抽、少许盐腌15分钟。",
      "stateNote": {
        "visual": "Meat turns slightly opaque at edges",
        "visualZh": "肉边缘微微发白",
        "signal": "Surface feels slightly tacky",
        "signalZh": "表面微粘"
      }
    },
    {
      "text": "Beat egg whites until foamy, fold in cornstarch and flour to make batter.",
      "textZh": "蛋清打至起泡，拌入淀粉和面粉成糊。",
      "stateNote": {
        "visual": "Batter is thick, glossy, holds peaks",
        "visualZh": "面糊浓稠有光泽，能立尖",
        "signal": "Trails when spoon lifted",
        "signalZh": "勺提留痕"
      }
    },
    {
      "text": "Heat oil to 160°C, dip pork strips in batter, fry 3-4 minutes until golden and cooked through.",
      "textZh": "油温160°C，肉条挂糊下锅，炸3-4分钟至金黄熟透。",
      "stateNote": {
        "visual": "Crust puffs and turns light golden",
        "visualZh": "外壳膨胀，浅金黄",
        "signal": "Internal temperature reaches 63°C (145°F)",
        "signalZh": "中心温度达63°C"
      }
    },
    {
      "text": "Drain, sprinkle with salt and pepper, serve with plum sauce.",
      "textZh": "沥油，撒盐椒，配梅子酱上桌。",
      "stateNote": {
        "visual": "Crust stays matte and crackly",
        "visualZh": "外壳哑光酥脆",
        "signal": "Juices run clear when pierced",
        "signalZh": "刺穿流出清澈汁水"
      }
    },
    {
      "text": "Prepare plum sauce dipping sauce: mix plum jam with a splash of rice vinegar and a pinch of sugar.",
      "textZh": "准备梅子酱：梅子酱加少许米醋和糖调味。",
      "stateNote": {
        "visual": "Sauce is glossy and aromatic",
        "visualZh": "酱料光泽 aromatic",
        "signal": "Vinegar and sugar fully incorporated",
        "signalZh": "醋和糖完全融合"
      }
    }
  ],
  "tips": [
    "Don't overmix batter—lumps are fine, overmixing develops gluten and makes crust tough",
    "Keep oil at 160°C—not too hot or outside burns before inside cooks",
    "Double fry at 180°C for 30 seconds for extra crispness"
  ],
  "tipsZh": [
    "面糊不要过度搅拌——有小疙瘩没关系，过度搅拌会让外壳变硬",
    "油温保持160°C——太高会外焦里生",
    "想更脆可二次复炸：180°C再炸30秒"
  ],
  "relatedSlugs": [
    "homestyle-spring-rolls",
    "fried-eggplant-box",
    "fried-wontons"
  ],
  "image": "/images/recipes/char-siu-pork.webp"
};
