import type { Recipe } from "@/lib/types";

/** Beef with Soft Scrambled Egg (滑蛋牛肉) (滑蛋牛肉) — Day batch */
export const scrambled_egg_beef: Recipe = {
  "id": "scrambled-egg-beef",
  "slug": "scrambled-egg-beef",
  "titleEn": "Beef with Soft Scrambled Egg (滑蛋牛肉)",
  "titleZh": "滑蛋牛肉",
  "pinyin": "huá dàn niú ròu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version cooks the eggs just set and pulls them off early. Restaurant version adds a starch slurry to the egg for an even silkier set.",
  "versionNoteZh": "家常版蛋液刚凝固就离火。餐厅版蛋液里加淀粉水，口感更滑。",
  "tags": [
    "beef",
    "egg",
    "scrambled",
    "canton",
    "20-min",
    "quick"
  ],
  "dietary": [
    "none"
  ],
  "story": "滑蛋 means \"slippery egg\" — the Cantonese technique of cooking eggs over gentle heat with constant folding so they set in soft ribbons instead of dry curds. Paired with velveted beef, it is a five-minute dish hiding behind a restaurant-sounding name.",
  "storyZh": "「滑蛋」是粤菜技法——小火慢推，让蛋液结成柔软的绸带而不是干硬的蛋块。配上上浆牛肉，这是一道名字唬人、其实五分钟就能出锅的家常菜。",
  "ingredients": [
    {
      "id": "seb-1",
      "nameEn": "beef, sliced thin",
      "nameZh": "牛肉薄片",
      "amountMetric": "250 g",
      "amountUS": "about 9 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "seb-2",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "5 large",
      "amountUS": "5 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "seb-3",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "2 tsp",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "seb-4",
      "nameEn": "water, for the slurry",
      "nameZh": "清水",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "seb-5",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "seb-6",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "seb-7",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "seb-8",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "seb-9",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2.5 tbsp",
      "amountUS": "2.5 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "seb-10",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Mix the beef with soy sauce, wine and 1 tsp cornstarch. Rest 10 minutes.",
      "textZh": "牛肉加生抽、绍酒和 1 小勺淀粉抓匀，静置 10 分钟。",
      "zhHint": "腌牛肉"
    },
    {
      "text": "Beat the eggs with the remaining cornstarch slurry, oyster sauce, salt and scallion until just combined — do not over-whip.",
      "textZh": "鸡蛋加剩下的淀粉水、蚝油、盐和葱花轻轻打匀，不要过度搅拌。",
      "zhHint": "调蛋液",
      "stateNote": {
        "visual": "Yolks and whites blended, few bubbles on top",
        "visualZh": "蛋黄蛋白刚混匀，表面少泡",
        "signal": "Mixture pours in one smooth ribbon",
        "signalZh": "蛋液能顺滑成一条线流下"
      }
    },
    {
      "text": "Heat 1.5 tbsp oil in a wok over high heat. Sear the beef 60 seconds until just browned, then remove.",
      "textZh": "锅中 1.5 勺油大火，牛肉煎 60 秒刚上色盛出。",
      "zhHint": "滑炒牛肉",
      "stateNote": {
        "visual": "Beef edges brown, centre still pink",
        "visualZh": "牛肉边缘上色，中心带粉",
        "signal": "No pink liquid runs when pressed",
        "signalZh": "按压不出血水",
        "heat": "high",
        "timeRef": "60 seconds"
      }
    },
    {
      "text": "Wipe the wok, lower to medium-low, add remaining oil and pour in the egg mixture.",
      "textZh": "擦净锅，转中小火，加剩余油倒入蛋液。",
      "zhHint": "倒蛋液",
      "stateNote": {
        "visual": "Egg starts setting at the edges within 10 seconds",
        "visualZh": "10 秒内边缘开始凝固",
        "signal": "No harsh sizzle — gentle bubbling only",
        "signalZh": "只有轻响不狂炸",
        "heat": "medium-low"
      }
    },
    {
      "text": "Push the set egg from the edges to the centre with a spatula, letting raw egg flow underneath. Repeat for about 40 seconds.",
      "textZh": "用铲把凝固的蛋从边缘推向中间，让生蛋液流到底部，重复约 40 秒。",
      "zhHint": "推蛋成绸",
      "stateNote": {
        "visual": "Soft folds form, still slightly wet on top",
        "visualZh": "形成柔软褶皱，表面仍微湿",
        "signal": "About 80% set with visible shine",
        "signalZh": "约八成凝固，仍见光泽",
        "heat": "medium-low",
        "timeRef": "40 seconds"
      }
    },
    {
      "text": "Scatter the beef back in, fold twice, and take the wok off the heat while the egg is still glossy.",
      "textZh": "牛肉倒回，翻两下，蛋还油亮时就离火。",
      "zhHint": "合炒离火",
      "stateNote": {
        "visual": "Egg looks creamy, not dry or rubbery",
        "visualZh": "蛋体呈奶油状，不发干不橡胶",
        "signal": "Residual heat finishes the set",
        "signalZh": "靠余温完成最后凝固",
        "heat": "low"
      }
    },
    {
      "text": "Finish with sesame oil and serve immediately over rice.",
      "textZh": "淋香油，立刻浇在米饭上。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Pull it off the heat while the egg still looks underdone — it keeps cooking in the pan.",
    "Low heat is not optional; high heat gives you dry, rubbery curds.",
    "The cornstarch slurry is what makes it \"slippery\". Don't skip it."
  ],
  "tipsZh": [
    "蛋看起来还嫩的时候就要离火，余温会继续熟。",
    "必须小火，大火只会得到干硬蛋块。",
    "淀粉水是「滑」的来源，不能省。"
  ],
  "relatedSlugs": [
    "shrimp-scrambled-eggs",
    "cucumber-scrambled-eggs",
    "garlic-chives-scrambled-eggs",
    "wok-egg-beef-claypot-rice"
  ],
  "image": "/images/recipes/wok-egg-beef-claypot-rice.webp"
};
