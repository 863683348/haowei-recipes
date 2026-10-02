import type { Recipe } from "@/lib/types";

/** Tomato Beef Roll Pot (番茄肥牛锅) (番茄肥牛锅) — Day batch */
export const tomato_beef_roll_pot: Recipe = {
  "id": "fan-qie-fei-niu-guo",
  "slug": "tomato-beef-roll-pot",
  "titleEn": "Tomato Beef Roll Pot (番茄肥牛锅)",
  "titleZh": "番茄肥牛锅",
  "pinyin": "fān qié féi niú guō",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Hot pot restaurants serve it tableside with a richer beef-fat base; the home version uses thin-sliced beef rolls from the Asian grocery, which cook in seconds in the tomato broth.",
  "versionNoteZh": "火锅店会用更浓的牛油底料堂做；家庭版用亚洲超市的肥牛卷，在番茄汤里几秒即熟。",
  "tags": [
    "30-min",
    "one-pot",
    "hot-pot",
    "beef",
    "tomato",
    "comfort-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "The weeknight version of hot pot: one burner, one pot, and the beef cooked at the table in the last two minutes. It became our Friday ritual because it feels like an event but dirties only one pan.",
  "storyZh": "工作日晚上的火锅替代版：一个炉子一口锅，牛肉最后两分钟在桌上涮熟。它成了我们的周五仪式——有仪式感却只脏一口锅。",
  "ingredients": [
    {
      "id": "ing-beefroll",
      "nameEn": "thin-sliced beef rolls (hot pot style)",
      "nameZh": "肥牛卷",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Sold frozen, shaved thin; keep frozen until use for cleaner slices.",
      "noteZh": "冷冻薄切出售；用前保持冷冻状态更易分开。"
    },
    {
      "id": "ing-tomato",
      "nameEn": "ripe tomatoes, cut in wedges",
      "nameZh": "成熟番茄（切块）",
      "amountMetric": "4 medium (550 g)",
      "amountUS": "4 medium (1.2 lb)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "ing-napa",
      "nameEn": "napa cabbage, torn in pieces",
      "nameZh": "大白菜（撕块）",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "produce",
      "pantry": "asian",
      "termKey": "napa-cabbage"
    },
    {
      "id": "ing-vermicelli",
      "nameEn": "bean vermicelli",
      "nameZh": "龙口粉丝",
      "amountMetric": "60 g",
      "amountUS": "2 oz",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "vermicelli"
    },
    {
      "id": "ing-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜（切末）",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
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
      "nameEn": "scallion, chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Heat 1 tbsp oil over medium-high. Add tomato wedges and garlic; stir-fry 5 minutes until the tomatoes collapse into a thick sauce.",
      "textZh": "中大火热 1 汤匙油，下番茄块和蒜末，翻炒 5 分钟至番茄塌成浓酱。",
      "stateNote": {
        "visual": "Sauce turns deep red and separates slightly from the oil.",
        "visualZh": "酱汁变成深红，与油微微分离。",
        "signal": "The spoon leaves a channel that stays for a second.",
        "signalZh": "勺子划出的沟能保持一秒。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Pour in 900 ml hot water with the soy sauce and white pepper. Bring to a rolling boil.",
      "textZh": "倒入 900 毫升热水，加生抽和白胡椒粉，大火煮开。",
      "stateNote": {
        "visual": "Broth is a bright orange-red with bubbles breaking across the whole surface.",
        "visualZh": "汤色鲜亮橙红，气泡布满整个水面。",
        "signal": "Steam rises in a steady column from the center.",
        "signalZh": "蒸汽从中心稳定成柱上升。",
        "timeRef": "3-4 minutes",
        "timeRefZh": "3-4 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Add napa cabbage and simmer 4 minutes until the leaves turn translucent and the stems soften.",
      "textZh": "下大白菜，煮 4 分钟至菜叶变半透明、菜帮变软。",
      "stateNote": {
        "visual": "Leaf parts look glossy and wilted; stems bend instead of snapping.",
        "visualZh": "菜叶油亮发软；菜帮能弯折而不断。",
        "signal": "A chopstick pierces the thickest stem easily.",
        "signalZh": "筷子能轻松扎透最粗的菜帮。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Add the vermicelli and cook 3 minutes until soft and slippery.",
      "textZh": "下粉丝煮 3 分钟至柔软滑顺。",
      "stateNote": {
        "visual": "Vermicelli turns from opaque white to translucent and spreads out.",
        "visualZh": "粉丝由不透明白色转为半透明并散开。",
        "signal": "A strand slides off the chopsticks without springing back.",
        "signalZh": "挑起的粉丝顺滑滑落，不回弹。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Turn the heat to high, add the beef rolls in batches and swish for 20-30 seconds each until the color changes. Scatter scallion and serve at once.",
      "textZh": "转大火，肥牛卷分批下锅，每批涮 20-30 秒至变色。撒葱花立刻上桌。",
      "stateNote": {
        "visual": "Beef goes from bright red to pale brown with fat turning translucent.",
        "visualZh": "牛肉由鲜红转为浅褐，脂肪变半透明。",
        "signal": "Slices curl at the edges and the broth re-boils within seconds.",
        "signalZh": "肉片边缘卷起，汤在数秒内重新沸腾。",
        "timeRef": "20-30 seconds per batch",
        "timeRefZh": "每批 20-30 秒",
        "heat": "high"
      }
    }
  ],
  "tips": [
    "Keep the beef frozen until the last minute — it slices and separates more cleanly.",
    "Never boil the beef longer than 30 seconds or it turns tough.",
    "The vermicelli keeps drinking liquid; serve immediately or add a splash of hot water at the table."
  ],
  "tipsZh": [
    "肥牛用前一直冷冻——更好分卷也更整齐。",
    "牛肉千万别煮超过 30 秒，否则立刻变老。",
    "粉丝会持续吸汤；要立刻吃，或在桌上补一点热水。"
  ],
  "relatedSlugs": [
    "tomato-hot-pot-base",
    "tomato-beef-soup",
    "tomato-beef-claypot",
    "tomato-prawn-pot"
  ],
  "image": "/images/recipes/tomato-hot-pot-base.webp"
};
