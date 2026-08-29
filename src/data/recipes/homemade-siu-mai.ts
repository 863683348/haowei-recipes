import type { Recipe } from "@/lib/types";

/** Homemade Siu Mai (Open-Topped Pork & Shrimp Dumplings) (烧卖) — Seed batch */
export const homemade_siu_mai: Recipe = {
  "id": "siu-mai-homestyle",
  "slug": "homemade-siu-mai",
  "titleEn": "Homemade Siu Mai (Open-Topped Pork & Shrimp Dumplings)",
  "titleZh": "烧卖",
  "pinyin": "shāo mài",
  "cuisine": "面点小吃",
  "cuisineEn": "Dim Sum",
  "region": "Shenzhen",
  "regionZh": "深圳",
  "difficulty": "medium",
  "timeMin": 60,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks in Shenzhen use ground pork instead of whole-muscle cuts, and skip the traditional yellow egg yolk topping — substituting a dot of carrot for color and sweetness, just like Auntie Mei did in her Shekou kitchen.",
  "versionNoteZh": "深圳家庭常用绞肉代替整块肉，且省去传统蛋黄点缀——改用胡萝卜丁增色添甜，正如蛇口梅姨厨房里的做法。",
  "tags": [
    "60-min",
    "weeknight",
    "dim-sum"
  ],
  "dietary": [
    "none"
  ],
  "story": "When my cousin moved from Shenzhen to San Francisco, she mailed me a handwritten recipe card stained with soy sauce — ‘No fancy wrappers, no fancy tools. Just good pork, good shrimp, and one red dot that says “I’m ready”’. That dot was always a tiny piece of carrot.",
  "storyZh": "表姐从深圳搬去旧金山时，寄来一张酱油渍手写食谱卡——‘不用高级皮，不用高级工具。只要好猪肉、好虾仁，和一个红点，它说“我准备好了”’。那个红点，永远是一粒小胡萝卜丁。",
  "ingredients": [
    {
      "id": "sm-01",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "150 g",
      "amountUS": "1/2 cup (85% lean)",
      "category": "protein",
      "pantry": "local",
      "note": "Use 85% lean for best juiciness. Avoid pre-seasoned blends.",
      "noteZh": "选用85%瘦肉比例，汁水最足。勿用已调味肉馅。"
    },
    {
      "id": "sm-02",
      "nameEn": "shrimp",
      "nameZh": "虾仁",
      "pinyin": "xiā rén",
      "amountMetric": "100 g",
      "amountUS": "2/3 cup (peeled, deveined)",
      "category": "protein",
      "pantry": "local",
      "note": "Fresh or frozen — finely chopped by hand, not minced.",
      "noteZh": "鲜虾或冷冻虾——手工切碎，非剁茸。"
    },
    {
      "id": "sm-03",
      "nameEn": "water chestnuts",
      "nameZh": "荸荠",
      "pinyin": "bí qí",
      "amountMetric": "60 g",
      "amountUS": "1/4 cup (finely diced)",
      "category": "produce",
      "pantry": "asian",
      "note": "Adds crunch and sweetness. Substitute jicama if unavailable.",
      "noteZh": "增添爽脆与清甜。无荸荠可用菊芋替代。"
    },
    {
      "id": "sm-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Balances richness — use low-sodium if preferred.",
      "noteZh": "平衡肥腻感——如需低钠，可选减盐款。",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Combine pork, shrimp, water chestnuts, light soy sauce, 1/4 tsp white pepper, and 1 tsp sesame oil in a bowl. Stir vigorously in one direction for 2 minutes until sticky and glossy.",
      "textZh": "将猪肉末、虾仁、荸荠丁、生抽、1/4茶匙白胡椒粉和1茶匙芝麻油放入碗中，朝同一方向用力搅打2分钟至黏稠发亮。",
      "zhHint": "单向搅打上劲",
      "stateNote": {
        "visual": "Mixture clings to bowl sides and forms ribbons when lifted.",
        "visualZh": "馅料能挂壁，提起呈带状。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Resists falling off chopsticks when lifted.",
        "signalZh": "提起筷子时馅料不脱落。"
      },
      "tip": "Cold ingredients help binding — chill bowl and utensils beforehand.",
      "tipZh": "冷食材更易起胶——可提前冷藏碗和工具。"
    },
    {
      "text": "Wrap 1 tbsp filling in a round wonton wrapper (9 cm diameter), pressing edges to form a cup shape with open top. Do not seal — leave center exposed.",
      "textZh": "取1汤匙馅料，包入9厘米圆形云吞皮中，捏紧边缘成杯状，顶部敞开不封口。",
      "zhHint": "捏成小杯，顶部敞开",
      "stateNote": {
        "visual": "Wrapper stands upright with firm base; filling fills 3/4 of cup height.",
        "visualZh": "皮杯直立稳当；馅料达杯高3/4。",
        "timeRef": "1 minute per dumpling",
        "timeRefZh": "每只约1分钟",
        "signal": "Base doesn’t sag or split when lifted gently.",
        "signalZh": "轻提不塌陷、不裂底。"
      },
      "tip": "Wet fingertips lightly to prevent sticking while shaping.",
      "tipZh": "指尖蘸水防粘，便于塑形。"
    },
    {
      "text": "Top each siu mai with a 3-mm cube of carrot (for color) and a tiny pinch of minced scallion greens.",
      "textZh": "每只烧卖顶上放一颗3毫米见方胡萝卜丁（增色）和少许葱绿末。",
      "zhHint": "红点+葱花点睛",
      "stateNote": {
        "visual": "Carrot cube sits centered, bright orange against pale filling.",
        "visualZh": "胡萝卜丁居中，橙红鲜亮映衬浅色馅料。",
        "timeRef": "30 seconds per dumpling",
        "timeRefZh": "每只约30秒",
        "signal": "Carrot adheres without glue — natural tack from filling moisture.",
        "signalZh": "胡萝卜靠馅料微湿自然粘附，无需额外粘合。"
      },
      "tip": "Blanch carrot cubes 10 seconds in boiling water to soften slightly and intensify color.",
      "tipZh": "胡萝卜丁沸水焯10秒，可软化并增色。"
    },
    {
      "text": "Steam over high heat for 8 minutes until pork is cooked through and internal temperature reaches 71°C (160°F).",
      "textZh": "大火蒸8分钟，至猪肉全熟，中心温度达71°C（160°F）。",
      "zhHint": "蒸透不夹生",
      "stateNote": {
        "visual": "Filling is firm and opaque; no pink juices seep out.",
        "visualZh": "馅料坚实不透明；无粉红汁水渗出。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "high",
        "signal": "Steam rises steadily; dumplings feel springy when gently pressed.",
        "signalZh": "蒸汽持续稳定；轻按有弹性。"
      },
      "tip": "Line steamer with cabbage or lettuce leaves to prevent sticking and add subtle aroma.",
      "tipZh": "蒸笼垫白菜叶或生菜叶，防粘且添清香。"
    },
    {
      "text": "Serve immediately with light soy sauce for dipping. Optional: drizzle with 1/2 tsp toasted sesame oil.",
      "textZh": "趁热上桌，配生抽蘸食。可选：淋1/2茶匙焙香芝麻油。",
      "zhHint": "现蒸现吃最鲜",
      "stateNote": {
        "visual": "Siu mai glisten faintly; carrot stays vivid, not faded.",
        "visualZh": "烧卖泛微光；胡萝卜色泽鲜亮不褪。",
        "timeRef": "within 2 minutes of steaming",
        "timeRefZh": "出锅2分钟内",
        "signal": "Steam still rises gently from surface.",
        "signalZh": "表面仍有微弱热气升腾。"
      },
      "tip": "For restaurant-style sheen, brush lightly with oyster sauce mixed with 1 tsp water before serving.",
      "tipZh": "追求茶楼光泽感，可于上桌前薄刷蚝油+1茶匙水调和汁。"
    }
  ],
  "tips": [
    "Use a mix of pork shoulder and belly (70/30) for ideal fat-to-lean ratio",
    "Chill shaped siu mai 15 minutes before steaming — helps retain shape",
    "Leftovers reheat beautifully in a bamboo steamer for 3 minutes"
  ],
  "tipsZh": [
    "猪肩肉与五花肉按7:3混合，肥瘦比最佳",
    "整形后冷藏15分钟再蒸，定型更佳",
    "剩菜用竹蒸笼回蒸3分钟，风味如初"
  ],
  "relatedSlugs": [
    "homemade-cheung-fun",
    "homemade-har-gow"
  ],
  "image": "/images/recipes/homemade-siu-mai.webp"
};
