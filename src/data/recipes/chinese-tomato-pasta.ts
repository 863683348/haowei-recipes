import type { Recipe } from "@/lib/types";

/** Chinese-Style Tomato Pasta (中式番茄意面) (中式番茄意面) — Day batch */
export const chinese_tomato_pasta: Recipe = {
  "id": "zhong-shi-fan-qie-yi-mian",
  "slug": "chinese-tomato-pasta",
  "titleEn": "Chinese-Style Tomato Pasta (中式番茄意面)",
  "titleZh": "中式番茄意面",
  "pinyin": "zhōng shì fān qié yì miàn",
  "cuisine": "融合菜",
  "cuisineEn": "Chinese Fusion",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Shanghai-style tomato sauce is looser and sweeter than Italian marinara; the family version borrows the Chinese technique of frying tomato into a paste, then finishes with pasta water for the emulsion.",
  "versionNoteZh": "上海式番茄酱比意式 marinara 更稀更甜；家庭版借用中餐把番茄炒成酱的手法，最后用煮面水乳化收汁。",
  "tags": [
    "fusion",
    "25-min",
    "vegetarian",
    "pasta",
    "weeknight",
    "kid-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Every Chinese kid grew up on some version of tomato-and-egg over rice. Swapping the rice for spaghetti keeps the flavor memory intact while solving the 'what do I do with half a box of pasta' problem.",
  "storyZh": "每个中国小孩都是吃番茄炒蛋盖饭长大的。把米饭换成意面，味道记忆不变，还顺手解决了「半包意面怎么吃」的问题。",
  "ingredients": [
    {
      "id": "ing-pasta",
      "nameEn": "spaghetti",
      "nameZh": "意大利面",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "ing-tomato",
      "nameEn": "ripe tomatoes, diced",
      "nameZh": "成熟番茄（切丁）",
      "amountMetric": "4 medium (550 g)",
      "amountUS": "4 medium (1.2 lb)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "ing-egg",
      "nameEn": "eggs, beaten",
      "nameZh": "鸡蛋（打散）",
      "amountMetric": "2",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
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
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ing-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "6 g",
      "amountUS": "1.5 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ing-sesame",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
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
      "text": "Boil spaghetti in well-salted water until 1 minute short of the package time. Reserve 150 ml pasta water before draining.",
      "textZh": "意面下足盐水煮至比包装时间少 1 分钟。沥水前留 150 毫升煮面水。",
      "stateNote": {
        "visual": "Noodle is pliable but still has a chalky white core when bitten.",
        "visualZh": "面条柔软但咬开中心仍有一点白芯。",
        "signal": "It snaps rather than stretches when you bite a strand.",
        "signalZh": "咬断时是脆断而不是拉长。",
        "timeRef": "package time minus 1 minute",
        "timeRefZh": "包装时间减 1 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Heat 1.5 tbsp oil over medium-high. Add tomato and sugar, stir-fry 5 minutes until a thick, deep red paste forms.",
      "textZh": "中大火热 1.5 汤匙油，下番茄丁和糖，翻炒 5 分钟至成浓稠深红酱。",
      "stateNote": {
        "visual": "Mass reduces by about a third and turns brick red; oil pools at the edge.",
        "visualZh": "体积缩减约三分之一，颜色变砖红，边缘析油。",
        "signal": "A spatula dragged through leaves a clean line that holds.",
        "signalZh": "锅铲划过留下清晰且保持的痕迹。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Add garlic and light soy sauce, cook 30 seconds until fragrant, then pour in the beaten egg and let it set before folding.",
      "textZh": "下蒜末和生抽炒香 30 秒，倒入蛋液，待凝固后再翻拌。",
      "stateNote": {
        "visual": "Egg forms soft ribbons through the red sauce.",
        "visualZh": "蛋液在红酱中形成柔软蛋花。",
        "signal": "Garlic smells nutty, not sharp; egg surface turns matte.",
        "signalZh": "蒜香转为坚果香而非辛辣；蛋面变哑光。",
        "timeRef": "about 1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Add the drained pasta with 100 ml pasta water. Toss over medium heat 90 seconds until the sauce turns glossy and clings.",
      "textZh": "下沥好的意面和 100 毫升煮面水。中火翻拌 90 秒至酱汁发亮挂面。",
      "stateNote": {
        "visual": "Sauce coats each strand instead of pooling at the bottom of the pan.",
        "visualZh": "酱汁均匀裹住每根面条，而不是积在锅底。",
        "signal": "When you lift the tongs the sauce drips in a slow, creamy ribbon.",
        "signalZh": "提起面条时酱汁呈缓慢的乳状细流。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium"
      }
    },
    {
      "text": "Off the heat, add sesame oil and scallion, and add the remaining pasta water if it looks dry.",
      "textZh": "关火后淋香油撒葱花；如果偏干再补剩余煮面水。",
      "stateNote": {
        "visual": "Noodles look glossy and loose, not clumped.",
        "visualZh": "面条油亮松散，不结团。",
        "signal": "Tongs slide through the pasta without resistance.",
        "signalZh": "夹子能顺畅穿过面条无阻力。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Pasta water is the emulsifier — its starch binds the tomato paste to the noodles.",
    "Soy sauce replaces salt and adds the Chinese umami backbone; do not skip it.",
    "Undercook the pasta by a minute; it finishes in the sauce."
  ],
  "tipsZh": [
    "煮面水是乳化剂——其中的淀粉让番茄酱挂在面上。",
    "生抽代替盐并提供中式的鲜味底色，不能省。",
    "面要少煮 1 分钟，后面还要在酱里完成。"
  ],
  "relatedSlugs": [
    "tomato-egg-noodles",
    "tomato-tofu",
    "tomato-eggs",
    "moo-shu-tofu"
  ],
  "image": "/images/recipes/tomato-egg-noodles.webp"
};
