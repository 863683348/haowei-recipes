import type { Recipe } from "@/lib/types";

/** Seaweed Egg Drop Soup (紫菜蛋花汤) (紫菜蛋花汤) — Day batch */
export const egg_drop_soup: Recipe = {
  "id": "egg-drop-soup",
  "slug": "egg-drop-soup",
  "titleEn": "Seaweed Egg Drop Soup (紫菜蛋花汤)",
  "titleZh": "紫菜蛋花汤",
  "pinyin": "zi cai dan hua tang",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Quick 15-minute soup — the backbone of any Chinese home kitchen. Seaweed rehydrates in the hot broth while eggs form silky ribbons.",
  "versionNoteZh": "15 分钟快手汤——中式家常厨房的必备汤品。紫菜在热汤中泡发，蛋液形成丝滑蛋花。",
  "tags": [
    "soup",
    "quick",
    "30-min",
    "beginner"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Seaweed egg drop soup (紫菜蛋花汤) is the most common Chinese home soup — light, umami-rich, and ready in minutes. It is the soup every Chinese grandmother makes when someone is feeling under the weather. The trick is swirling the beaten egg into simmering broth to create delicate ribbons, not curds.",
  "storyZh": "紫菜蛋花汤是最常见的中式家常汤——清淡鲜美，几分钟搞定。是每位中国奶奶在家人身体不适时必做的汤。秘诀是将打散的蛋液旋入微沸的高汤中，形成细腻的蛋花而非蛋块。",
  "ingredients": [
    {
      "id": "eds-seaweed",
      "nameEn": "dried seaweed (zicai / laver sheets)",
      "nameZh": "干紫菜",
      "amountMetric": "5 g",
      "amountUS": "about 2 sheets",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "seaweed"
    },
    {
      "id": "eds-egg",
      "nameEn": "eggs, beaten",
      "nameZh": "鸡蛋，打散",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "eds-sesame-oil",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "eds-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "eds-scallion",
      "nameEn": "scallion, finely chopped (garnish)",
      "nameZh": "葱花（装饰）",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "eds-water",
      "nameEn": "hot water or chicken broth",
      "nameZh": "热水或鸡汤",
      "amountMetric": "500 ml",
      "amountUS": "about 2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "eds-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "eds-white-pepper",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Rehydrate the dried seaweed in a bowl of warm water for 2-3 minutes. Drain and tear into bite-sized pieces if needed.",
      "textZh": "干紫菜温水泡发 2-3 分钟，沥干，撕成适口大小。",
      "stateNote": {
        "visual": "Seaweed softens and expands, turning dark green",
        "visualZh": "紫菜变软膨胀，呈深绿色",
        "timeRef": "2-3 minutes",
        "timeRefZh": "2-3 分钟",
        "signal": "Seaweed is pliable, not brittle",
        "signalZh": "紫菜柔韧不脆硬"
      }
    },
    {
      "text": "Bring water or broth to a rolling boil in a pot. Season with soy sauce, salt, and white pepper.",
      "textZh": "锅中加水或鸡汤烧开，加入生抽、盐、白胡椒粉调味。",
      "stateNote": {
        "visual": "Broth is at a vigorous boil with large bubbles breaking the surface",
        "visualZh": "高汤剧烈沸腾，大泡翻滚",
        "heat": "high",
        "timeRef": "2-3 minutes",
        "timeRefZh": "2-3 分钟",
        "signal": "Surface is agitated and steaming heavily",
        "signalZh": "汤面翻滚，蒸汽充足"
      }
    },
    {
      "text": "Add the drained seaweed to the boiling broth. Cook for 30 seconds — seaweed only needs to heat through.",
      "textZh": "加入沥干的紫菜，煮 30 秒——紫菜只需热透即可。",
      "stateNote": {
        "visual": "Seaweed floats and swirls in the broth, releasing ocean aroma",
        "visualZh": "紫菜在汤中漂浮翻卷，释放海味香气",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Seaweed is warm and pliable",
        "signalZh": "紫菜温热柔软"
      }
    },
    {
      "text": "Reduce heat to medium-low so the broth is just simmering. Slowly drizzle the beaten eggs in a thin stream while gently stirring in one direction.",
      "textZh": "转中小火使汤保持微沸状态。沿锅边缓慢倒入蛋液，同时朝一个方向轻搅。",
      "stateNote": {
        "visual": "Eggs form long, delicate ribbons and clouds in the broth",
        "visualZh": "蛋液形成细长的丝状蛋花，如云朵般漂浮",
        "heat": "medium-low",
        "timeRef": "20-30 seconds",
        "timeRefZh": "20-30 秒",
        "signal": "Eggs are just set but still glossy and tender",
        "signalZh": "蛋花刚凝固，仍光亮嫩滑"
      }
    },
    {
      "text": "Immediately remove from heat. Drizzle with sesame oil, garnish with chopped scallions. Serve hot.",
      "textZh": "立即离火，淋香油，撒葱花。趁热上桌。",
      "stateNote": {
        "visual": "Sesame oil glistens on the surface, scallions bright green, egg ribbons floating",
        "visualZh": "香油浮面泛光，葱花翠绿，蛋花漂浮",
        "signal": "Eat immediately — egg ribbons will overcook if left on heat",
        "signalZh": "立即食用——蛋花久煮会变老"
      }
    }
  ],
  "tips": [
    "Do not boil after adding eggs — the residual heat will finish cooking them. Over-boiling makes eggs rubbery.",
    "Use the hottest broth possible when adding eggs for the fluffiest ribbons.",
    "Dried seaweed sheets (laver) are available in Asian supermarkets in the dried goods aisle. One sheet per person is plenty.",
    "For a richer version, use homemade chicken stock instead of water."
  ],
  "tipsZh": [
    "加蛋后不要继续沸腾——余温足以煮熟蛋花。久煮会让蛋变韧。",
    "倒蛋液时汤越滚越好——蛋花最蓬松。",
    "干紫菜片（海苔片）在亚超干货区有售，一人一片足够。",
    "想用浓郁版？用自制鸡汤代替清水。"
  ],
  "relatedSlugs": [
    "tomato-egg-drop-soup",
    "winter-melon-soup",
    "egg-fried-rice"
  ],
  "image": "/images/recipes/garlic-chives-scrambled-eggs.webp"
};
