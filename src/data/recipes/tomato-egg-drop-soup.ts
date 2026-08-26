import type { Recipe } from "@/lib/types";

/** Tomato Egg Drop Soup (番茄蛋花汤) (番茄蛋花汤) — Day batch */
export const tomato_egg_drop_soup: Recipe = {
  "id": "tomato-egg-drop-soup",
  "slug": "tomato-egg-drop-soup",
  "titleEn": "Tomato Egg Drop Soup (番茄蛋花汤)",
  "titleZh": "番茄蛋花汤",
  "pinyin": "fan qie dan hua tang",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 18,
  "servings": 2,
  "version": "family",
  "versionNote": "A heartier cousin of plain seaweed egg drop soup — the tomatoes provide natural sweetness and body, eliminating the need for stock.",
  "versionNoteZh": "紫菜蛋花汤的浓稠版——番茄提供天然甜味和汤体，无需额外高汤。",
  "tags": [
    "soup",
    "quick",
    "30-min",
    "vegetarian-option"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "Tomato egg drop soup (番茄蛋花汤) combines the two most beloved Chinese home ingredients — tomatoes and eggs — into a soup that is simultaneously sour, sweet, and comforting. It is the soup Chinese people make when they want something warm and fast. The key is sautéing the tomatoes until they break down into a酱 before adding water, which creates a naturally thick and flavorful broth.",
  "storyZh": "番茄蛋花汤把中式家常菜最经典的两样食材——番茄和鸡蛋——融于一锅，酸、甜、暖。是中式家庭不想做饭时的首选。秘诀是先把番茄炒化成酱再加水，这样汤底自然浓稠鲜香。",
  "ingredients": [
    {
      "id": "teds-tomato",
      "nameEn": "ripe tomatoes, peeled and diced",
      "nameZh": "熟番茄，去皮切丁",
      "amountMetric": "2 large (400 g)",
      "amountUS": "2 large (14 oz)",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "teds-egg",
      "nameEn": "eggs, beaten",
      "nameZh": "鸡蛋，打散",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "teds-oil",
      "nameEn": "neutral cooking oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "teds-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "teds-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "teds-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "teds-water",
      "nameEn": "hot water",
      "nameZh": "热水",
      "amountMetric": "600 ml",
      "amountUS": "about 2 1/2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "teds-scallion",
      "nameEn": "scallion, chopped (garnish)",
      "nameZh": "葱花（装饰）",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "teds-sesame-oil",
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
      "text": "Score an X on the bottom of each tomato and blanch in boiling water for 30 seconds. Transfer to ice water, then peel off the skin. Dice the tomatoes into 1 cm pieces.",
      "textZh": "番茄底部划十字，沸水焯 30 秒后过冰水，去皮切 1 cm 丁。",
      "stateNote": {
        "visual": "Skin curls at the corners and slips off cleanly",
        "visualZh": "皮边缘卷起，轻松剥落",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Skin separates from flesh in one piece",
        "signalZh": "皮肉完整分离"
      }
    },
    {
      "text": "Heat oil in a wok or pot over medium-high. Add minced garlic and stir-fry for 10 seconds until fragrant.",
      "textZh": "锅中放油中大火加热，下蒜末爆香 10 秒。",
      "stateNote": {
        "visual": "Garlic sizzles and releases aromatic scent, edges just starting to golden",
        "visualZh": "蒜末滋滋作响，香气四溢，边缘微黄",
        "heat": "medium-high",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "Garlic is fragrant but not browned",
        "signalZh": "蒜香浓郁但未焦"
      }
    },
    {
      "text": "Add diced tomatoes and a pinch of salt. Cook 5-6 minutes, pressing against the wok to help them break down into a saucy consistency.",
      "textZh": "下番茄丁加一小撮盐，中火炒 5-6 分钟，用锅铲压番茄助其化开成酱。",
      "stateNote": {
        "visual": "Tomatoes collapse into a thick, rustic sauce with visible seeds and pulp",
        "visualZh": "番茄塌陷成浓稠酱状，可见籽和果肉",
        "heat": "medium",
        "timeRef": "5-6 minutes",
        "timeRefZh": "5-6 分钟",
        "signal": "Oils and tomato juices separate, mixture coats the wok",
        "signalZh": "番茄油和汁水析出，锅底挂酱"
      }
    },
    {
      "text": "Pour in hot water. Add sugar and salt to taste. Bring to a boil, then reduce to a steady simmer.",
      "textZh": "倒入热水，加糖和盐调味，烧开转中小火保持微沸。",
      "stateNote": {
        "visual": "Broth is a vibrant orange-red, slightly cloudy from the tomato pulp",
        "visualZh": "汤色橙红鲜亮，略带番茄果肉浑浊感",
        "signal": "Soup is bubbling gently across the surface",
        "signalZh": "汤面均匀小泡翻滚"
      }
    },
    {
      "text": "Slowly drizzle beaten eggs in a thin stream while stirring gently in one direction. Let sit for 10 seconds, then gently push the egg ribbons around.",
      "textZh": "沿锅边缓慢倒入蛋液，轻搅一圈。静置 10 秒让蛋花定型，再轻推散开。",
      "stateNote": {
        "visual": "Eggs bloom into large, soft flower-like shapes floating on the surface",
        "visualZh": "蛋液绽放成大片柔嫩的蛋花浮于汤面",
        "heat": "medium-low",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "Eggs are just set, still glossy and jiggly",
        "signalZh": "蛋花刚凝固，仍光亮颤动"
      }
    },
    {
      "text": "Drizzle with sesame oil, garnish with scallions. Serve immediately while hot.",
      "textZh": "淋香油，撒葱花，趁热上桌。",
      "stateNote": {
        "visual": "Sesame oil sheen, green scallion contrast, orange broth, white-gold egg ribbons",
        "visualZh": "香油浮光、葱花翠绿、橙红汤底、金黄蛋花",
        "signal": "Best eaten immediately for optimal egg texture",
        "signalZh": "立即食用蛋花口感最佳"
      }
    }
  ],
  "tips": [
    "The tomatoes must be very ripe — ripe tomatoes provide natural sweetness that balances the acid. Under-ripe tomatoes make the soup sour.",
    "Do not over-stir after adding eggs — let them set for 10 seconds before gently pushing. This creates large, showy ribbons instead of shreds.",
    "A pinch of sugar is essential — it balances the tomato acidity without making the soup sweet.",
    "For a restaurant-style version, add a teaspoon of cornstarch slurry at the end to slightly thicken the broth."
  ],
  "tipsZh": [
    "番茄一定要熟透——熟番茄的天然甜味能平衡酸度。生番茄会让汤过酸。",
    "加蛋后不要狂搅——先静置 10 秒再轻推，这样蛋花大且好看。",
    "一小撮糖必不可少——平衡番茄酸味，但不会让汤变甜。",
    "想要餐厅级浓稠口感？出锅前淋入半茶匙淀粉水勾薄芡。"
  ],
  "relatedSlugs": [
    "egg-drop-soup",
    "tomato-eggs",
    "winter-melon-soup"
  ],
  "image": "/images/recipes/tomato-egg-drop-soup.webp"
};
