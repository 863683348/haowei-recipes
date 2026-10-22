import type { Recipe } from "@/lib/types";

/** Chinese Steamed Egg Custard | Zheng Shui Dan (蒸水蛋) — Day batch */
export const steamed_egg_custard: Recipe = {
  "id": "steamed-egg-custard",
  "slug": "steamed-egg-custard",
  "titleEn": "Chinese Steamed Egg Custard | Zheng Shui Dan",
  "titleZh": "蒸水蛋",
  "pinyin": "zhēng shuǐ dàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version steams it in a covered bowl on a rack; restaurant versions strain the custard twice and steam it in individual bowls at a lower temperature for a glass-smooth surface.",
  "versionNoteZh": "家庭版碗上加盖、架蒸；餐厅版会过筛两次并用小火分盅蒸，表面更光洁如镜。",
  "tags": [
    "home-style",
    "steamed",
    "egg",
    "kid-friendly",
    "beginner"
  ],
  "dietary": [
    "none"
  ],
  "story": "Zheng shui dan is often the first dish a Chinese child learns to cook. Three ingredients, one ratio, and a texture that is somewhere between flan and silken tofu. The whole skill lies in the water ratio and in keeping the steam gentle.",
  "storyZh": "蒸水蛋常是中国孩子学会的第一道菜。三样材料、一个比例，口感介于布丁和嫩豆腐之间。全部诀窍在水蛋比例和火候要柔。",
  "ingredients": [
    {
      "id": "se-01",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "3 pieces",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "se-02",
      "nameEn": "warm water or light stock, 1.5x the egg volume",
      "nameZh": "温水或清汤（蛋液的 1.5 倍）",
      "amountMetric": "225 ml",
      "amountUS": "1 cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "se-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "se-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "se-05",
      "nameEn": "scallion, finely chopped",
      "nameZh": "葱花",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "se-06",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Beat the eggs with the salt just until the yolk and white are combined — do not whisk in air.",
      "textZh": "鸡蛋加盐打散至蛋清蛋黄混合即可，不要打进空气。",
      "stateNote": {
        "visual": "The mixture is a uniform pale yellow with no streaks of white and almost no foam on top.",
        "visualZh": "蛋液呈均匀浅黄、无白色蛋清纹，表面几乎无泡沫。",
        "signal": "Lifting the whisk produces no persistent froth",
        "signalZh": "提起打蛋器不留持久泡沫",
        "timeRef": "1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "low"
      },
      "tip": "Froth is what causes the pitted surface later — beat gently and skim any bubbles."
    },
    {
      "text": "Stir in the warm water or cooled stock at a 1:1.5 egg-to-liquid ratio, then strain the mixture through a fine sieve into a shallow bowl.",
      "textZh": "按蛋液 1 : 液体 1.5 的比例加入温水或放凉的高汤，过细筛滤入浅碗。",
      "stateNote": {
        "visual": "The strained liquid is completely translucent yellow with no bubbles or chalaza strands.",
        "visualZh": "滤后蛋液完全透亮微黄，无气泡和系带。",
        "signal": "Nothing is left in the sieve except a thin membrane",
        "signalZh": "筛中只剩一层薄膜",
        "timeRef": "2 minutes",
        "timeRefZh": "约 2 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Cover the bowl tightly with a plate or heatproof film and set it on a rack in the steamer once the water is at a full boil.",
      "textZh": "碗口用盘子或耐热保鲜膜盖严，待水大滚后放入蒸锅架子上。",
      "stateNote": {
        "visual": "The cover is sealed so no condensation can drip back; steam escapes in a steady, even column.",
        "visualZh": "盖子密封、冷凝水不会回滴；蒸汽成均匀柱状外冒。",
        "signal": "Water in the steamer is at a rolling boil before the bowl goes in",
        "signalZh": "放碗前锅水已大滚",
        "timeRef": "1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Lower to medium heat and steam for 10-12 minutes, until the centre is just set with a slight wobble.",
      "textZh": "转中火蒸 10-12 分钟，至中心刚凝固、轻晃仍有微颤。",
      "stateNote": {
        "visual": "The surface is smooth and pale gold; the centre still jiggles like set jelly in a 2 cm circle.",
        "visualZh": "表面平整浅金；中心约 2 厘米范围仍像果冻般轻晃。",
        "signal": "A toothpick inserted in the centre comes out clean",
        "signalZh": "牙签插入中心拔出干净",
        "timeRef": "10-12 minutes",
        "timeRefZh": "10-12 分钟",
        "heat": "medium"
      },
      "tip": "If it is fully firm in the centre it is already overcooked — the residual heat will finish it."
    },
    {
      "text": "Drizzle with light soy sauce and sesame oil, scatter the scallion over and serve warm.",
      "textZh": "淋生抽和香油，撒葱花，趁热上桌。",
      "stateNote": {
        "visual": "The sauce runs into a thin amber layer over the pale custard and the green scallion sits bright on top.",
        "visualZh": "酱汁在浅色蛋羹上流成琥珀薄层，葱花碧绿点缀。",
        "signal": "A spoon cuts through with no resistance and no weeping water",
        "signalZh": "勺子切下无阻力、不出水",
        "timeRef": "1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Use warm (about 40 C) liquid, not cold — it sets faster and smoother.",
    "The classic ratio is 1 part egg to 1.5 parts liquid by volume.",
    "Add shrimp, minced pork or clams on top in the last 4 minutes for a one-dish meal."
  ],
  "tipsZh": [
    "用约 40℃ 的温水，别用冷水——凝固更快更细。",
    "经典比例是蛋液 1 : 液体 1.5（体积比）。",
    "最后 4 分钟放虾仁、肉末或蛤蜊，就是一菜一餐。"
  ],
  "relatedSlugs": [
    "minced-pork-steamed-egg",
    "shrimp-steamed-egg",
    "chopped-chili-steamed-egg",
    "minced-pork-steamed-tofu"
  ],
  "image": "/images/recipes/minced-pork-steamed-egg.webp"
};
