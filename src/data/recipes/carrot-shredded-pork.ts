import type { Recipe } from "@/lib/types";

/** Carrot Shredded Pork (胡萝卜炒肉丝) (胡萝卜炒肉丝) — Day batch */
export const carrot_shredded_pork: Recipe = {
  "id": "carrot-shredded-pork",
  "slug": "carrot-shredded-pork",
  "titleEn": "Carrot Shredded Pork (胡萝卜炒肉丝)",
  "titleZh": "胡萝卜炒肉丝",
  "pinyin": "hú luó bo chǎo ròu sī",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "North China (华北)",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version: simple stir-fry with pork and carrots, a touch of garlic.",
  "versionNoteZh": "家常版：肉丝胡萝卜简单快炒，一点蒜香。",
  "tags": [
    "30-min",
    "weeknight",
    "pork",
    "colorful",
    "kids"
  ],
  "dietary": [
    "none"
  ],
  "story": "Carrot shredded pork is one of those unglamorous-but-addictive dishes that appears on almost every Chinese family's weekly rotation.",
  "storyZh": "胡萝卜炒肉丝是那些不张扬但让人上瘾的菜——几乎每个中国家庭的每周菜单上都会出现。",
  "ingredients": [
    {
      "id": "cp-pork",
      "nameEn": "pork tenderloin, julienned",
      "nameZh": "猪里脊切丝",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-tenderloin"
    },
    {
      "id": "cp-carrot",
      "nameEn": "carrots, julienned",
      "nameZh": "胡萝卜切丝",
      "amountMetric": "2 medium (~200 g)",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "cp-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cp-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cp-starch",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "cp-garlic",
      "nameEn": "garlic cloves, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cp-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cp-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "¼ tsp",
      "amountUS": "¼ tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut pork into 4 cm × 3 mm strips. Toss with Shaoxing wine and cornstarch. Rest 10 minutes.",
      "textZh": "猪里脊切4厘米长细丝，加料酒和玉米淀粉抓匀，静置10分钟。",
      "stateNote": {
        "visual": "Pork coated in glossy slurry",
        "visualZh": "肉丝裹上晶莹浆液",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Surface is tacky"
      }
    },
    {
      "text": "Peel carrots and cut into matchstick strips, similar width to the pork. Mince garlic.",
      "textZh": "胡萝卜去皮切细丝，宽度与肉丝相近。蒜切末。",
      "stateNote": {
        "visual": "Carrot strips are uniform orange matchsticks",
        "visualZh": "胡萝卜丝均匀橙红如细棍",
        "signal": "Uniform width and thickness"
      }
    },
    {
      "text": "Heat oil in a wok over high heat. Add pork and sear 30 seconds. Stir-fry until white.",
      "textZh": "热锅下油，大火烧至冒烟。下肉丝先煎30秒不翻，再翻炒至变白。",
      "stateNote": {
        "visual": "Pork edges opaque white, fat rendered",
        "visualZh": "肉丝边缘变白，肥肉出油",
        "heat": "high",
        "timeRef": "30-45 seconds",
        "timeRefZh": "30-45 秒",
        "signal": "Pork sizzles and releases from pan"
      }
    },
    {
      "text": "Add carrots and garlic. Stir-fry 2 minutes until carrots soften but retain crunch.",
      "textZh": "下胡萝卜和蒜末，翻炒2分钟至胡萝卜变软但仍脆。",
      "stateNote": {
        "visual": "Carrots turn vibrant orange and slightly glossy",
        "visualZh": "胡萝卜变鲜亮橙色，表面微油亮",
        "heat": "high",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Carrot snaps with slight give, not raw-hard"
      }
    },
    {
      "text": "Add soy sauce and salt. Toss 15 seconds. Serve immediately.",
      "textZh": "加生抽和盐，翻匀15秒出锅。",
      "stateNote": {
        "visual": "Everything glossy and well-coated",
        "visualZh": "菜肴油亮、均匀挂汁",
        "signal": "No watery pool at the bottom"
      }
    }
  ],
  "tips": [
    "Carrots are denser than most stir-fry vegetables — cut them thin.",
    "A touch of oil helps release the beta-carotene in carrots.",
    "This is a great kid-friendly dish.",
    "Leftover carrots and pork can be wrapped in a rice paper roll."
  ],
  "tipsZh": [
    "胡萝卜比一般炒蔬菜密度高——切细才能快速熟透。",
    "一点油能帮助胡萝卜中的β-胡萝卜素释放。",
    "这是道很适合小孩的菜。",
    "剩胡萝卜和肉丝可以卷进米纸里当quick lunch。"
  ],
  "relatedSlugs": [
    "pepper-pork",
    "garlic-sprout-shredded-pork",
    "home-style-pork",
    "yu-xiang-pork"
  ],
  "image": "/images/recipes/pepper-pork.webp"
};
