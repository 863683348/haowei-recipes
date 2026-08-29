import type { Recipe } from "@/lib/types";

/** Whole Family Blessing Casserole (全家福) — Seed batch */
export const whole_family_blessing_casserole: Recipe = {
  "id": "quan-jia-fu",
  "slug": "whole-family-blessing-casserole",
  "titleEn": "Whole Family Blessing Casserole",
  "titleZh": "全家福",
  "pinyin": "quán jiā fú",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Restaurant versions use shark fin or abalone—this one swaps in affordable, tender chicken breast, shrimp, and tofu skin, bound with clear chicken broth and egg white. Texture stays silky, not rubbery.",
  "versionNoteZh": "餐馆版用鱼翅鲍鱼，本版改用鸡胸、虾仁与豆腐皮，以清鸡汤与蛋清凝合——口感滑嫩不柴。",
  "tags": [
    "chinese-new-year-feast",
    "one-pot",
    "vegetable-forward"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Shanghai’s French Concession made this every New Year’s lunch—she’d lay each ingredient in concentric rings: pale shrimp, golden tofu skin, ivory chicken, emerald peas, and ruby ham slices, all floating in shimmering broth. 'Every color is a blessing,' she told me, stirring with chopsticks held like a brush.",
  "storyZh": "我上海法租界的小姨每年年夜饭必做这道菜——虾仁、豆腐皮、鸡片、豌豆、火腿，一圈圈铺成同心圆，浮在清亮汤里。'每种颜色都是福气。'",
  "ingredients": [
    {
      "id": "qj-01",
      "nameEn": "boneless, skinless chicken breast, finely diced",
      "nameZh": "鸡胸肉，切细丁",
      "pinyin": "jī xiōng ròu",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Soak in 1 tsp Shaoxing wine + 1 tsp cornstarch for 10 min before dicing.",
      "noteZh": "切丁前用1茶匙绍酒+1茶匙淀粉腌10分钟。"
    },
    {
      "id": "qj-02",
      "nameEn": "large shrimp, peeled and deveined",
      "nameZh": "大虾仁，去壳去线",
      "pinyin": "xiā rén",
      "amountMetric": "150 g",
      "amountUS": "5 oz (about 12–14 pieces)",
      "category": "protein",
      "pantry": "local",
      "note": "Thaw frozen shrimp in cold water; pat dry thoroughly.",
      "noteZh": "冻虾仁用冷水解冻，彻底吸干水分。"
    },
    {
      "id": "qj-03",
      "nameEn": "dried tofu skin (yuba), soaked 10 min, cut into 3 cm strips",
      "nameZh": "干豆腐皮（腐竹），泡发10分钟，切3厘米段",
      "pinyin": "fǔ zhú",
      "amountMetric": "40 g",
      "amountUS": "1/3 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute soft tofu cubes if yuba unavailable.",
      "noteZh": "无腐竹可用嫩豆腐块替代。"
    },
    {
      "id": "qj-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "qj-05",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "pinyin": "dàn qīng",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "dairy",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Marinate chicken and shrimp separately: chicken with 1 tsp Shaoxing wine, 1 tsp cornstarch, 1/2 tsp salt; shrimp with 1 tsp light soy sauce, 1 tsp cornstarch, 1/4 tsp white pepper.",
      "textZh": "鸡丁与虾仁分碗腌制：鸡丁用1茶匙绍酒、1茶匙淀粉、1/2茶匙盐；虾仁用1茶匙生抽、1茶匙淀粉、1/4茶匙白胡椒。",
      "zhHint": "双料分腌",
      "stateNote": {
        "visual": "Chicken glistens lightly; shrimp turn translucent-pink",
        "visualZh": "鸡丁泛微光；虾仁转为半透粉红",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Liquid fully absorbed, no pooling",
        "signalZh": "液体完全吸收，无积水"
      }
    },
    {
      "text": "Bring 600 ml high-quality chicken broth to gentle simmer in wide skillet. Carefully slide in marinated chicken and shrimp in small batches—do not stir yet.",
      "textZh": "600毫升优质鸡汤烧至微沸，分批轻滑入腌好的鸡丁与虾仁——暂勿搅动。",
      "zhHint": "定型再搅",
      "stateNote": {
        "visual": "Broth shimmers with tiny pearls of steam",
        "visualZh": "汤面浮起细密蒸汽珠",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium-low",
        "signal": "Edges of shrimp curl slightly, chicken firms but stays pale",
        "signalZh": "虾仁边缘微卷，鸡丁变硬但仍浅色"
      }
    },
    {
      "text": "After 2 minutes, gently fold in tofu skin strips, frozen peas (no thawing), and thinly sliced cooked ham (optional). Simmer 3 more minutes.",
      "textZh": "2分钟后，轻拌入腐竹段、冷冻豌豆（不需解冻）、熟火腿薄片（可选）。再煮3分钟。",
      "zhHint": "后放易熟",
      "stateNote": {
        "visual": "Peas brighten to vivid green; tofu skin plumps visibly",
        "visualZh": "豌豆转为鲜绿；腐竹明显吸水膨起",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Broth remains barely bubbling at edges",
        "signalZh": "汤边仅微泡"
      }
    },
    {
      "text": "Whisk egg white with 1 tbsp cold broth until frothy. Slowly drizzle into casserole while stirring *very* gently in one direction—do not scramble.",
      "textZh": "蛋清加1汤匙冷高汤打至起泡，缓缓淋入锅中，沿同一方向极轻搅动——勿成蛋花。",
      "zhHint": "蛋清挂汤",
      "stateNote": {
        "visual": "Silky white ribbons form and suspend in broth",
        "visualZh": "蛋清呈丝缕状悬浮于汤中",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "low",
        "signal": "Broth thickens slightly but stays clear",
        "signalZh": "汤略稠但仍清澈"
      }
    },
    {
      "text": "Stir in remaining light soy sauce and sesame oil. Taste and adjust with white pepper only—no salt needed. Serve immediately in warmed bowls.",
      "textZh": "淋入余下生抽与芝麻油，尝味后仅用白胡椒调整——无需额外盐。趁热盛入暖碗。",
      "zhHint": "临出点睛",
      "tip": "For authentic Shanghai clarity, strain broth before adding proteins—or use homemade chicken stock with fat skimmed.",
      "tipZh": "追求沪式清亮，可先滤高汤；或自制去油鸡汤。"
    }
  ],
  "tips": [
    "Use freshly made chicken broth—the umami lifts all ingredients",
    "Tofu skin must be fully rehydrated but not mushy",
    "This dish shines best served within 10 minutes of finishing"
  ],
  "tipsZh": [
    "务必用现熬鸡汤——鲜味托起所有食材",
    "腐竹需泡透但不能软烂",
    "出锅10分钟内食用风味最佳"
  ],
  "relatedSlugs": [
    "man-han-family-feast-combo"
  ],
  "image": "/images/recipes/whole-family-blessing-casserole.webp"
};
