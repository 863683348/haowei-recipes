import type { Recipe } from "@/lib/types";

/** Sichuan Street-Style Malatang (Customizable Spicy Hotpot Skewers) (麻辣烫) — Seed batch */
export const sichuan_malatang: Recipe = {
  "id": "malatang-sichuan-street-style",
  "slug": "sichuan-malatang",
  "titleEn": "Sichuan Street-Style Malatang (Customizable Spicy Hotpot Skewers)",
  "titleZh": "麻辣烫",
  "pinyin": "Málàtàng",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version uses a simplified, one-pot broth with fresh aromatics — no commercial 'malatang base' needed.",
  "versionNoteZh": "家常版仅用新鲜香料与基础调料自制汤底，无需市售‘麻辣烫底料’。",
  "tags": [
    "30-min",
    "customizable",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My cousin Wei ran a tiny malatang stall near Jiefangbei Square in Chongqing. He’d let me choose 5 skewers each visit — always including lotus root and beef tendon — and taught me how to balance ‘ma’ (numbing) and ‘la’ (spicy) by adjusting chili oil at the table.",
  "storyZh": "我表哥伟曾在重庆解放碑旁摆麻辣烫小摊。每次我去都挑5串——必有莲藕和牛筋——他还教我在桌上用辣椒油微调‘麻’与‘辣’的平衡。",
  "ingredients": [
    {
      "id": "mt-01",
      "nameEn": "Beef tendon, pre-cooked & sliced",
      "nameZh": "卤牛筋",
      "pinyin": "lǔ niú jīn",
      "amountMetric": "120 g",
      "amountUS": "1 cup sliced",
      "category": "protein",
      "pantry": "asian",
      "note": "Substitute pre-cooked oxtail or stewed pork belly slices"
    },
    {
      "id": "mt-02",
      "nameEn": "Lotus root, peeled & thinly sliced",
      "nameZh": "莲藕",
      "pinyin": "lián ǒu",
      "amountMetric": "150 g",
      "amountUS": "1 ½ cups",
      "category": "produce",
      "pantry": "asian",
      "note": "Soak slices in 1 tsp rice vinegar + 1 cup water for 5 min to prevent browning"
    },
    {
      "id": "mt-03",
      "nameEn": "Dried shiitake mushrooms, soaked & quartered",
      "nameZh": "干香菇",
      "pinyin": "gān xiānggū",
      "amountMetric": "20 g dried (≈80 g rehydrated)",
      "amountUS": "¼ cup dried (≈¾ cup rehydrated)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use porcini or cremini mushrooms if unavailable"
    },
    {
      "id": "mt-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "Shàoxīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "mt-05",
      "nameEn": "Dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "mt-06",
      "nameEn": "Fresh cilantro sprigs",
      "nameZh": "香菜",
      "pinyin": "xiāngcài",
      "amountMetric": "15 g",
      "amountUS": "¼ cup packed",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "In a large pot, combine 750 ml (3 ¼ cups) water, soaked shiitakes (reserve soaking liquid), dark soy, Shaoxing wine, 1 tsp Sichuan peppercorns, and 6 dried chilies. Bring to gentle boil.",
      "textZh": "大锅中加750 ml水、泡发香菇（保留泡发水）、老抽、绍酒、1 tsp 花椒、6枚干辣椒，煮沸。",
      "zhHint": "煮沸汤底",
      "stateNote": {
        "visual": "Small bubbles rise steadily across surface",
        "visualZh": "水面持续升起细密气泡",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "high",
        "signal": "Steam rises steadily; aroma of earthy mushrooms emerges",
        "signalZh": "蒸汽稳定升腾；香菇泥土香初显"
      }
    },
    {
      "text": "Reduce heat to low. Simmer uncovered 10 minutes, adding reserved mushroom soaking liquid and 1 tsp light soy sauce.",
      "textZh": "转小火，敞盖慢炖10分钟，加入香菇水与1 tsp 生抽。",
      "zhHint": "慢炖提鲜",
      "stateNote": {
        "visual": "Liquid reduces ~10%; broth darkens slightly",
        "visualZh": "汤汁略减10%；色泽微深",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Surface shimmers but does not bubble vigorously",
        "signalZh": "汤面微漾，不剧烈翻滚"
      }
    },
    {
      "text": "Add beef tendon and lotus root. Simmer 6 minutes until lotus root slices are tender-crisp (test with fork).",
      "textZh": "下牛筋与莲藕片，小火煮6分钟至藕片断生仍脆。",
      "zhHint": "烫煮主料",
      "stateNote": {
        "visual": "Lotus root turns opaque ivory with faint pink edges",
        "visualZh": "藕片呈乳白微透，边缘泛淡粉",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium-low",
        "signal": "Fork pierces easily but offers slight resistance",
        "signalZh": "叉子可轻松插入，略有阻力"
      }
    },
    {
      "text": "Stir in 1 tsp Chinese black vinegar and ½ tsp white pepper. Taste and adjust salt with ½ tsp light soy if needed.",
      "textZh": "淋入1 tsp 陈醋与½ tsp 白胡椒粉；尝味，淡则补½ tsp 生抽。",
      "zhHint": "调酸提味",
      "stateNote": {
        "visual": "Broth glistens with subtle sheen",
        "visualZh": "汤汁泛起柔和光泽",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "Tangy, rounded aroma lifts immediately",
        "signalZh": "酸香圆润，气息即刻上扬"
      }
    },
    {
      "text": "Ladle into bowls. Top with fresh cilantro and optional chili oil (1 tsp per bowl). Serve immediately with toothpicks.",
      "textZh": "盛入碗中，撒香菜，可选淋辣油（每碗1 tsp）。即食，配竹签。",
      "zhHint": "装碗点睛",
      "stateNote": {
        "visual": "Cilantro leaves rest vibrantly atop steaming broth",
        "visualZh": "香菜翠绿鲜亮，浮于热汤之上",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Steam rises in visible wisps",
        "signalZh": "热气袅袅升腾"
      }
    }
  ],
  "tips": [
    "Skewer ingredients on bamboo sticks before cooking for true street-style experience",
    "Keep broth simmering while serving — add more hot water if it reduces too much",
    "For vegetarian version, omit beef tendon and double mushrooms and lotus root"
  ],
  "tipsZh": [
    "煮前用竹签串好食材，还原街头风味",
    "食用时保持汤底微沸；若汤汁过少，可酌加热水",
    "素食版：去掉牛筋，蘑菇与莲藕加倍"
  ],
  "relatedSlugs": [
    "chengdu-maocai"
  ],
  "image": "/images/recipes/sichuan-malatang.webp"
};
