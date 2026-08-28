import type { Recipe } from '@/lib/types';

/\*\* Minced Pork Steamed Egg (肉末蒸蛋) (肉末蒸蛋) — Day 15 batch \*/
export const minced_pork_steamed_egg: Recipe = {
  "id": "minced-pork-steamed-egg",
  "slug": "minced-pork-steamed-egg",
  "titleEn": "Minced Pork Steamed Egg (肉末蒸蛋)",
  "titleZh": "肉末蒸蛋",
  "pinyin": "ròu mò zhēng dàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国家常",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: pork crumbs on top of silky egg custard — humble comfort food that tastes like home.",
  "versionNoteZh": "家庭版：蛋羹上铺肉末——朴素但充满家常味的慰藉菜。",
  "tags": [
    "steamed",
    "quick",
    "protein",
    "comfort",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "Minced pork steamed egg is the ultimate comfort food in Chinese homes — a tender custard topped with savory, garlic-kissed pork crumbles. It is especially popular in southern China, where steam-cooked dishes preserve the natural moisture of ingredients. This is the kind of dish that appears on every family table, whether it is a weeknight dinner or a recovery meal after illness.",
  "storyZh": "肉末蒸蛋是中国家庭终极慰藉菜——嫩滑蛋羹上铺满咸香蒜香的肉末。在中国南方尤其流行，蒸制保留食材天然水分。无论是工作日晚餐还是病后恢复，这道菜总会出现在每个家庭桌上。",
  "ingredients": [
    {
      "id": "mp-1",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "3 large",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "mp-2",
      "nameEn": "ground pork (5 percent fat)",
      "nameZh": "猪肉末",
      "amountMetric": "150 g",
      "amountUS": "about 5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "mp-3",
      "nameEn": "warm water",
      "nameZh": "温水",
      "amountMetric": "300 ml",
      "amountUS": "1 1/4 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "mp-4",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "mp-5",
      "nameEn": "shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "mp-6",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "mp-7",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "mp-8",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "mp-9",
      "nameEn": "scallions, chopped",
      "nameZh": "小葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "mp-10",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "a pinch",
      "amountUS": "a pinch",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "mp-11",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    }
  ],
  "steps": [
    {
      "text": "Beat eggs with a pinch of salt in a bowl. Add warm water (40C) and mix gently. Strain through a sieve into a steaming dish for a silky texture. Cover with plastic wrap and poke a few holes.",
      "textZh": "碗中鸡蛋加少许盐打散，加温水轻轻拌匀，过筛入蒸碗以确保丝滑。覆保鲜膜扎几个小孔。",
      "stateNote": {
        "visual": "Egg-water mixture smooth and opaque",
        "visualZh": "蛋水混合物均匀不透明",
        "signal": "Surface is glass-smooth with no bubbles"
      }
    },
    {
      "text": "Steam on medium-low heat for 10 minutes until the egg is just set but still slightly wobbly in the center.",
      "textZh": "中火蒸10分钟，蛋羹刚凝固但中心仍微晃。",
      "stateNote": {
        "visual": "Set around edges, slight jiggle in center",
        "visualZh": "边缘凝固，中心微晃",
        "signal": "Skewer test: clean when inserted"
      }
    },
    {
      "text": "While egg steams, heat sesame oil in a small pan over medium heat. Add minced pork, breaking it apart with a spatula. Cook until crumbly and no pink remains, about 4 minutes.",
      "textZh": "蒸蛋同时，小锅中加热香油，下肉末用锅铲拨散。中火炒至碎散无粉色，约4分钟。",
      "stateNote": {
        "visual": "Pork turns from pink to light brown, crispy edges visible",
        "visualZh": "肉从粉红转为浅褐，边缘微脆",
        "signal": "No pink meat remains, crumbs separate easily"
      }
    },
    {
      "text": "Add minced garlic, ginger, and a splash of Shaoxing wine to the pork. Stir for 30 seconds until fragrant. Add light soy sauce and a splash of water. Stir in cornstarch slurry to thicken. Cook 1 more minute until glossy.",
      "textZh": "加蒜末、姜末、少许料酒入锅，炒香30秒。加生抽和少许水，勾薄芡。再煮1分钟至光亮。",
      "stateNote": {
        "visual": "Sauce thickens and coats the pork crumbs with a glossy sheen",
        "visualZh": "酱汁变稠，肉末裹上亮泽",
        "signal": "Sauce clings to spoon, not watery"
      }
    },
    {
      "text": "Remove steamed egg from pot. Pour the pork topping evenly over the custard. Garnish with scallions. Serve immediately with steamed rice.",
      "textZh": "取出蒸蛋，均匀铺上肉末，撒葱花，配白米饭立刻上桌。",
      "stateNote": {
        "visual": "Glossy brown pork on pale yellow custard with green scallion flecks",
        "visualZh": "棕黄油亮的肉末铺在淡黄蛋羹上，翠绿葱花点缀",
        "signal": "Steam rises when uncovered"
      }
    }
  ],
  "tips": [
    "Straining the egg mixture is the single most important step for silky texture.",
    "Use warm water, not hot — hot water will partially cook the eggs before steaming.",
    "The pork topping can be made ahead and reheated; assemble just before serving.",
    "For a richer version, add a teaspoon of lard to the pork while frying."
  ],
  "tipsZh": [
    "过筛蛋液是丝滑口感最关键的一步。",
    "用温水而非热水——热水会在蒸前就把蛋预熟。",
    "肉末 topping 可提前制作，食用前再组装。",
    "加一茶匙猪油同炒肉末，风味更丰富。"
  ],
  "relatedSlugs": [
    "shrimp-steamed-egg",
    "egg-drop-soup",
    "winter-melon-soup"
  ],
  "image": "/images/recipes/minced-pork-steamed-egg.webp"
};
