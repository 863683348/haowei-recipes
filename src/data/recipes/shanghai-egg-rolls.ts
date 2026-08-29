import type { Recipe } from "@/lib/types";

/** Shanghai Egg Rolls (上海蛋卷) — Seed batch */
export const shanghai_egg_rolls: Recipe = {
  "id": "dan-juan",
  "slug": "shanghai-egg-rolls",
  "titleEn": "Shanghai Egg Rolls",
  "titleZh": "上海蛋卷",
  "pinyin": "shàng hǎi dàn juǎn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "True Shanghai egg rolls are thin, delicate, and folded like crepes—not deep-fried cylinders. Made with just eggs, scallions, and a whisper of soy, they’re served at room temperature as a side or snack.",
  "versionNoteZh": "正宗上海蛋卷薄如纸、形似蛋饼，非美式粗卷；仅用鸡蛋、葱花与微量酱油，室温切段上桌，是家常小食或佐餐配菜。",
  "tags": [
    "30-min",
    "vegetarian-option",
    "lunch"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother in Jing’an cooked these every Sunday morning while listening to Shanghai Opera on her radio—she’d fold each one with a bamboo chopstick handle, saying, 'A good dan juan must whisper when you bite it.'",
  "storyZh": "静安区的外婆每周日清晨边听沪剧边做蛋卷，用竹筷柄辅助折叠，常说：‘好蛋卷咬下去得有声音——是轻轻的‘嘶’一声。’",
  "ingredients": [
    {
      "id": "dj-01",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "4 large",
      "amountUS": "4 large",
      "category": "dairy",
      "pantry": "local",
      "note": "Room temperature preferred for even setting",
      "noteZh": "推荐使用室温鸡蛋，受热更均匀"
    },
    {
      "id": "dj-02",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "1/3 cup finely chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "dj-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "dj-04",
      "nameEn": "neutral oil",
      "nameZh": "无味植物油",
      "pinyin": "wú wèi zhí wù yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Canola, grapeseed, or sunflower oil",
      "noteZh": "可用葵花籽油、葡萄籽油或菜籽油"
    }
  ],
  "steps": [
    {
      "text": "Whisk eggs, scallions, light soy sauce, and 1/4 tsp salt in a bowl until fully blended and slightly frothy.",
      "textZh": "将鸡蛋、葱花、生抽和1/4茶匙盐同入碗中，顺一个方向搅打至均匀起泡。",
      "zhHint": "要搅打出细腻泡沫",
      "stateNote": {
        "visual": "Surface shows fine, even bubbles; no streaks of yolk or white remain",
        "visualZh": "蛋液表面布满细密均匀气泡，无蛋清或蛋黄条纹",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "Mixture coats back of spoon evenly",
        "signalZh": "蛋液能均匀挂住勺背"
      }
    },
    {
      "text": "Heat 1 tsp oil in a nonstick 20-cm (8-inch) pan over medium heat. Pour in 1/3 cup egg mixture, tilting pan to spread thinly and evenly.",
      "textZh": "中火加热不粘平底锅，倒入1茶匙油；舀1/3杯蛋液入锅，迅速晃动锅体使蛋液铺成薄圆。",
      "zhHint": "锅要热但油不冒烟",
      "stateNote": {
        "visual": "Oil shimmers but no smoke rises; egg sets at edges within 5 seconds",
        "visualZh": "油面微漾无青烟；蛋液边缘5秒内即凝固",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "heat": "medium",
        "signal": "Thin film forms instantly at pan edge",
        "signalZh": "锅边瞬间结出薄膜"
      }
    },
    {
      "text": "When top is ~80% set (still slightly glossy), lift one edge with spatula and gently roll toward center. Slide onto plate and let cool 1 minute.",
      "textZh": "当蛋皮表面约八成凝固（仍略带光泽），用铲轻揭一边，顺势向中心卷起；滑入盘中，静置1分钟。",
      "zhHint": "八成凝固才卷，太湿易散",
      "stateNote": {
        "visual": "Center remains faintly translucent but holds shape when nudged",
        "visualZh": "中心仍微透光，但轻推已不流动",
        "timeRef": "30–45 seconds",
        "timeRefZh": "30–45 秒",
        "heat": "medium",
        "signal": "Edge lifts cleanly without tearing",
        "signalZh": "边缘可完整掀起不破"
      }
    },
    {
      "text": "Repeat with remaining oil and egg mixture to make 3 more rolls. Stack cooled rolls and slice into 2-cm (3/4-inch) pieces.",
      "textZh": "用余油和余蛋液重复操作，共做4卷；叠放冷却后切成2厘米宽段。",
      "zhHint": "叠放防干裂",
      "stateNote": {
        "visual": "Rolls retain soft sheen; slices hold clean edges without crumbling",
        "visualZh": "蛋卷保持柔润光泽；切面整齐不碎裂",
        "timeRef": "1 minute cooling between rolls",
        "timeRefZh": "每卷间隔冷却1分钟",
        "signal": "Slices release easily from knife without sticking",
        "signalZh": "切片时刀面不粘连"
      }
    },
    {
      "text": "Arrange on a small plate. Drizzle with 1/2 tsp light soy sauce and garnish with extra scallion. Serve at room temperature.",
      "textZh": "摆入小碟，淋半茶匙生抽，撒少许葱花。室温食用。",
      "zhHint": "冷热皆宜，但室温最显嫩",
      "stateNote": {
        "visual": "Slices glisten under light; scallions sit upright, not wilted",
        "visualZh": "蛋卷段泛柔光；葱花挺立不蔫软",
        "timeRef": "immediately before serving",
        "timeRefZh": "上桌前即刻",
        "signal": "No steam rises from plate",
        "signalZh": "碟中无热气升腾"
      }
    }
  ],
  "tips": [
    "For extra tenderness, add 1 tsp cornstarch to egg mixture.",
    "Roll while still warm—the residual heat helps seal layers.",
    "Store covered in fridge up to 2 days; slice just before serving to prevent drying."
  ],
  "tipsZh": [
    "加1茶匙玉米淀粉可使蛋卷更嫩滑。",
    "趁温热卷制，余温有助层间自然贴合。",
    "冷藏密封保存最多2天；食用前再切，防风干变韧。"
  ],
  "relatedSlugs": [
    "homestyle-spring-rolls"
  ],
  "image": "/images/recipes/shanghai-egg-rolls.webp"
};
