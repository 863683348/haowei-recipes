import type { Recipe } from "@/lib/types";

/** Home-Style Braised Chicken Feet (Lǔ Jī Zhǎo) (卤鸡爪) — Seed batch */
export const braised_chicken_feet_luwei: Recipe = {
  "id": "lu-ji-zhao",
  "slug": "braised-chicken-feet-luwei",
  "titleEn": "Home-Style Braised Chicken Feet (Lǔ Jī Zhǎo)",
  "titleZh": "卤鸡爪",
  "pinyin": "lǔ jī zhǎo",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 120,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses minimal sugar and emphasizes gelatinous texture — no cornstarch or artificial thickeners. My aunt in Liwan District boiled hers twice to remove toughness.",
  "versionNoteZh": "家常版少糖，突出胶质口感，不用淀粉或增稠剂。荔湾阿姨习惯两次焯水去韧。",
  "tags": [
    "snack",
    "party-appetizer",
    "collagen-rich"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Lunar New Year in Guangzhou’s old city, my great-aunt would braise 20 pounds of chicken feet in her wok-shaped clay pot — she said the crunch of cleaned claws meant ‘grasping prosperity’ for the coming year.",
  "storyZh": "每年广州老城过年，我姑婆都在她那只镬形陶锅里卤二十斤鸡爪——她说爪子洗得咔嚓响，寓意来年‘抓财’。",
  "ingredients": [
    {
      "id": "cj-01",
      "nameEn": "chicken feet (fresh or thawed frozen)",
      "nameZh": "鸡爪",
      "pinyin": "jī zhǎo",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb (about 12–14 feet)",
      "category": "protein",
      "pantry": "local",
      "note": "Look for plump, pale pink feet with intact nails — avoid yellow or shriveled skin.",
      "noteZh": "选饱满粉嫩、趾甲完整的鸡爪，忌发黄或干瘪。"
    },
    {
      "id": "cj-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cj-03",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "cj-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cj-05",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "30 g",
      "amountUS": "4 cloves, smashed",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cj-06",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp, thickly sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cj-07",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "3 pcs",
      "amountUS": "3 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    }
  ],
  "steps": [
    {
      "text": "Trim nails from chicken feet using kitchen shears. Rub with 1 tbsp salt and 1 tbsp vinegar; scrub vigorously for 2 minutes. Rinse well.",
      "textZh": "剪去鸡爪趾甲，用1大勺盐+1大勺醋搓揉2分钟去角质；冲净。",
      "zhHint": "去腥去垢第一步"
    },
    {
      "text": "Blanch feet in boiling water for 3 minutes. Drain, rinse under cold water, then repeat blanching for another 3 minutes.",
      "textZh": "沸水焯烫3分钟，捞出冲凉；再重复焯烫一次。",
      "zhHint": "双焯去韧保胶质"
    },
    {
      "text": "In a heavy pot, combine garlic, ginger, star anise, light soy, dark soy, Shaoxing wine, and 900 ml water. Bring to a simmer over medium heat.",
      "textZh": "厚底锅中放入蒜瓣、姜片、八角、生抽、老抽、绍酒和900毫升水，中火煮至微沸。",
      "zhHint": "香料与酱汁先融合"
    },
    {
      "text": "Add chicken feet. Simmer uncovered on medium-low heat for 1 hour — stir gently every 15 minutes to prevent sticking.",
      "textZh": "放入鸡爪，中低火敞盖慢炖1小时，每15分钟轻搅防粘。",
      "zhHint": "敞盖炖出胶质",
      "stateNote": {
        "visual": "Liquid reduces by ~⅓; surface glistens with golden-brown oil droplets.",
        "visualZh": "卤汁减少约三分之一，表面浮现金褐色油星。",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "heat": "medium-low",
        "signal": "Claws curl slightly and feel tender when pierced with a fork.",
        "signalZh": "爪尖微卷，叉子轻刺即透。"
      }
    },
    {
      "text": "Turn off heat. Let feet cool fully in broth (minimum 1 hour). For best texture, refrigerate overnight before serving chilled or at room temperature.",
      "textZh": "关火，鸡爪在卤汁中自然冷却（至少1小时）；冷藏过夜风味更浓，冷食或室温食用皆宜。",
      "zhHint": "冷卤更入味",
      "stateNote": {
        "visual": "Gelatinous layer forms around each claw; broth sets to a soft jelly when chilled.",
        "visualZh": "每只鸡爪裹上胶质层；冷藏后卤汁呈软冻状。",
        "timeRef": "1–12 hours",
        "timeRefZh": "1–12 小时",
        "signal": "Claws glisten and hold shape without splitting.",
        "signalZh": "鸡爪油亮完整，不裂不散。"
      }
    }
  ],
  "tips": [
    "Use fresh chicken feet if possible — frozen ones may have added phosphates that inhibit gelatin formation.",
    "Skim fat from the surface before cooling for clearer, more delicate flavor.",
    "Serve with pickled mustard greens (suan cai) for contrast — available at most Asian grocers."
  ],
  "tipsZh": [
    "尽量用鲜鸡爪——冻鸡爪可能含磷酸盐，影响胶质析出。",
    "冷却前撇去浮油，卤味更清爽。",
    "搭配酸菜同食解腻，多数亚洲超市有售。"
  ],
  "relatedSlugs": [
    "braised-beef-luwei"
  ],
  "image": "/images/recipes/braised-chicken-feet-luwei.webp"
};
