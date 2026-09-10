import type { Recipe } from "@/lib/types";

/** Cucumber Stir-Fried Chicken Dice (黄瓜炒鸡丁) (黄瓜炒鸡丁) — Day batch */
export const cucumber_stir_fried_chicken_dice: Recipe = {
  "id": "cucumber-stir-fried-chicken-dice",
  "slug": "cucumber-stir-fried-chicken-dice",
  "titleEn": "Cucumber Stir-Fried Chicken Dice (黄瓜炒鸡丁)",
  "titleZh": "黄瓜炒鸡丁",
  "pinyin": "huáng guā chǎo jī dīng",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Quick home stir-fry with tender chicken and crisp cucumber.",
  "versionNoteZh": "快手家常小炒，鸡丁嫩滑、黄瓜清脆。",
  "tags": [
    "30-min",
    "weeknight",
    "chicken",
    "quick"
  ],
  "dietary": [
    "none"
  ],
  "story": "Cucumber stir-fried with chicken dice is a humble home-style dish you will find on weeknight tables across China. The cucumber adds a refreshing crunch that balances the savory chicken. It is fast, forgiving, and requires ingredients you already have.",
  "storyZh": "黄瓜炒鸡丁是中国家庭餐桌上的家常菜，快手上手、不娇气。黄瓜的清爽与鸡肉的咸鲜形成对比，是工作日晚餐的理想选择。",
  "ingredients": [
    {
      "id": "cs-01",
      "nameEn": "boneless chicken thighs, cut into 2 cm dice",
      "nameZh": "鸡腿肉丁",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cs-02",
      "nameEn": "cucumber, diced",
      "nameZh": "黄瓜丁",
      "amountMetric": "1 large (about 200 g)",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cs-03",
      "nameEn": "carrot, diced",
      "nameZh": "胡萝卜丁",
      "amountMetric": "1/2 medium (about 60 g)",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cs-04",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cs-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "cs-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "cs-07",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cs-08",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Marinate chicken: mix with 1/2 tbsp soy, Shaoxing, and 1/2 tbsp cornstarch. Rest 10 minutes.",
      "textZh": "鸡丁加半汤匙生抽、料酒和半汤匙淀粉抓匀，腌10分钟。",
      "zhHint": "鸡丁上浆",
      "stateNote": {
        "visual": "Chicken is coated in a thin glossy film",
        "visualZh": "鸡丁裹上薄亮浆膜",
        "timeRef": "10 minutes",
        "signal": "Coating feels tacky, not dry"
      }
    },
    {
      "text": "Cut cucumber into 1.5 cm dice (keep skin on for color). Cut carrot into matching dice.",
      "textZh": "黄瓜切1.5厘米丁（留皮更绿），胡萝卜切同样大小丁。",
      "zhHint": "切蔬菜丁",
      "stateNote": {
        "visual": "Uniform dice, vibrant green and orange colors",
        "visualZh": "大小均匀的丁，翠绿与橙色分明",
        "signal": "Crisp, no soft spots"
      }
    },
    {
      "text": "Heat oil in wok over high heat. Add chicken and stir-fry 2 minutes until color changes.",
      "textZh": "热锅高火，加鸡丁翻炒2分钟至变色。",
      "zhHint": "大火炒鸡",
      "stateNote": {
        "visual": "Chicken turns from pink to opaque white",
        "visualZh": "鸡丁从粉红变为白亮",
        "heat": "high",
        "timeRef": "2 minutes",
        "signal": "No pink remains"
      }
    },
    {
      "text": "Add garlic, stir 15 seconds until fragrant. Add cucumber and carrot, stir-fry 1 minute.",
      "textZh": "下蒜末炒香15秒，加黄瓜胡萝卜丁翻炒1分钟。",
      "zhHint": "爆香下菜",
      "stateNote": {
        "visual": "Vegetables glisten and stay bright",
        "visualZh": "蔬菜油亮色泽鲜艳",
        "heat": "high",
        "timeRef": "1 minute",
        "signal": "Cucumber still crisp"
      }
    },
    {
      "text": "Mix remaining soy and cornstarch with 2 tbsp water, pour in. Toss 30 seconds until sauce thickens.",
      "textZh": "剩余生抽和淀粉加水调匀倒入，翻30秒至酱汁浓稠。",
      "zhHint": "勾芡出锅",
      "stateNote": {
        "visual": "Sauce turns glossy and coats all ingredients",
        "visualZh": "酱汁油亮包裹食材",
        "signal": "Sauce clings to spoon"
      }
    },
    {
      "text": "Serve immediately while cucumber is still crisp.",
      "textZh": "趁黄瓜脆嫩时立刻上桌。",
      "zhHint": "趁热吃",
      "stateNote": {
        "visual": "Glossy chicken and colorful vegetables steaming",
        "visualZh": "油亮鸡丁配彩色蔬菜，热气腾腾",
        "signal": "Ready to serve"
      }
    }
  ],
  "tips": [
    "Cucumber should stay crisp — do not overcook.",
    "Chicken thighs stay juicier than breast.",
    "Prep all ingredients before heating the wok."
  ],
  "tipsZh": [
    "黄瓜要脆——别炒过头。",
    "鸡腿肉比鸡胸肉更嫩。",
    "开火前把所有食材备齐。"
  ],
  "relatedSlugs": [
    "cashew-chicken",
    "black-pepper-chicken-dice",
    "cucumber-scrambled-eggs"
  ],
  "image": "/images/recipes/cucumber-stir-fried-chicken-dice.webp"
};
