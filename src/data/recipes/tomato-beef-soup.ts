import type { Recipe } from "@/lib/types";

/** Tomato Beef Soup (番茄牛肉汤) (番茄牛肉汤) — Day batch */
export const tomato_beef_soup: Recipe = {
  "id": "fan-qie-niu-rou-tang",
  "slug": "tomato-beef-soup",
  "titleEn": "Tomato Beef Soup (番茄牛肉汤)",
  "titleZh": "番茄牛肉汤",
  "pinyin": "fān qié niú ròu tāng",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "easy",
  "timeMin": 70,
  "servings": 4,
  "version": "family",
  "versionNote": "Restaurant versions simmer beef bones for hours for a cloudy white broth; the family version builds flavor from tomato and a short simmer, giving a clear red broth in about an hour.",
  "versionNoteZh": "餐厅版要吊牛骨几小时得奶白汤；家庭版靠番茄提味、短时炖煮，约一小时出清亮红汤。",
  "tags": [
    "soup",
    "one-pot",
    "beef",
    "tomato",
    "comfort-food",
    "make-ahead"
  ],
  "dietary": [
    "none"
  ],
  "story": "A red, slightly sour broth that cuts through winter heaviness. My grandmother ladled it over rice the next morning — the tomato keeps brightening overnight, so the second bowl is always better than the first.",
  "storyZh": "一碗红亮微酸的汤，正好化解冬天的油腻。奶奶总留一勺第二天早上浇饭——番茄过夜后味道更鲜亮，第二碗永远比第一碗好喝。",
  "ingredients": [
    {
      "id": "ing-beef",
      "nameEn": "beef shank or chuck, cut in 3 cm cubes",
      "nameZh": "牛腱/牛肩肉（切 3 厘米块）",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ing-tomato",
      "nameEn": "ripe tomatoes, chopped",
      "nameZh": "成熟番茄（切块）",
      "amountMetric": "4 medium (550 g)",
      "amountUS": "4 medium (1.2 lb)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "ing-onion",
      "nameEn": "onion, roughly chopped",
      "nameZh": "洋葱（粗切）",
      "amountMetric": "1 medium",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "ing-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "amountMetric": "15 g",
      "amountUS": "3 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ing-shaoxing",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ing-lss",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ing-wp",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "ing-scallion",
      "nameEn": "scallion, chopped for garnish",
      "nameZh": "葱花（装饰）",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Put beef cubes in a pot with cold water, bring to a boil, and blanch 2 minutes. Skim the grey foam, drain and rinse the beef.",
      "textZh": "牛肉块冷水下锅，煮开后焯 2 分钟。撇净灰色浮沫，捞出冲洗干净。",
      "stateNote": {
        "visual": "Grey-brown foam collects on the surface and the water turns murky.",
        "visualZh": "水面浮起灰褐色浮沫，水体变浑。",
        "signal": "Once the foam turns white and sparse, the blood scum is mostly gone.",
        "signalZh": "浮沫变白变稀，说明血沫基本出尽。",
        "timeRef": "2 minutes at a rolling boil",
        "timeRefZh": "大火滚煮 2 分钟",
        "heat": "high"
      },
      "tip": "Starting in cold water pulls out more impurities than dropping beef into boiling water.",
      "tipZh": "冷水下锅比沸水下锅能逼出更多血水杂质。"
    },
    {
      "text": "Heat 1 tbsp oil in the cleaned pot over medium. Add onion, ginger and half the tomato; cook 5 minutes until the tomatoes collapse into a thick paste.",
      "textZh": "洗净的锅加 1 汤匙油中火加热，下洋葱、姜片和一半番茄，炒 5 分钟至番茄塌成浓酱。",
      "stateNote": {
        "visual": "Mixture darkens to brick red and oil separates at the edges.",
        "visualZh": "混合物变成砖红色，边缘析出油分。",
        "signal": "The spoon leaves a clear trail that holds for a second.",
        "signalZh": "勺子划过留下清晰痕迹，能保持一秒。",
        "timeRef": "5 minutes on medium",
        "timeRefZh": "中火 5 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Return the beef, add Shaoxing wine and 1.2 L hot water. Bring to a boil, then cover and simmer on low 45 minutes.",
      "textZh": "牛肉回锅，加黄酒和 1.2 升热水。煮开后盖盖转小火炖 45 分钟。",
      "stateNote": {
        "visual": "Surface barely trembles; small bubbles rise steadily, never a rolling boil.",
        "visualZh": "汤面几乎不动，持续冒小泡，绝不滚沸。",
        "signal": "A chopstick slides into a beef cube with slight resistance.",
        "signalZh": "筷子能插入肉块但略有阻力。",
        "timeRef": "45 minutes on low",
        "timeRefZh": "小火 45 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Add the remaining tomato chunks and light soy sauce. Simmer uncovered another 12 minutes so the fresh tomato keeps its shape.",
      "textZh": "下剩余番茄块和生抽，不盖盖再煮 12 分钟，让鲜番茄保持形状。",
      "stateNote": {
        "visual": "Broth turns clear red-orange with a thin layer of orange oil on top; tomato pieces stay intact.",
        "visualZh": "汤色清亮橙红，表面浮一层橙色油；番茄块仍完整。",
        "signal": "Tomato skins float loose and slip off the flesh.",
        "signalZh": "番茄皮浮起、与果肉分离。",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low"
      }
    },
    {
      "text": "Season with white pepper and salt to taste, then scatter scallion and serve hot.",
      "textZh": "加白胡椒粉和盐调味，撒葱花趁热上桌。",
      "stateNote": {
        "visual": "Scallion greens float bright on the red broth.",
        "visualZh": "翠绿葱花浮在红汤上。",
        "signal": "Steam carries a sweet-sour tomato aroma with no raw metallic note.",
        "signalZh": "蒸腾的热气是番茄酸甜香，没有生涩的金属味。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Two-stage tomato: half cooked down for depth, half added late for freshness.",
    "Beef shank gives the best texture for soup — it stays tender without shredding apart.",
    "Make it a day ahead; the flavor rounds out and the fat is easy to lift off."
  ],
  "tipsZh": [
    "番茄分两次放：一半炒出浓味，一半后放保新鲜。",
    "汤用牛腱最好——久炖不散且保持弹性。",
    "提前一天做更香，冷藏后浮油也更好撇。"
  ],
  "relatedSlugs": [
    "tomato-beef-brisket",
    "tomato-beef-claypot",
    "potato-beef-stew",
    "tomato-fish-ball-soup"
  ],
  "image": "/images/recipes/potato-beef-stew.webp"
};
