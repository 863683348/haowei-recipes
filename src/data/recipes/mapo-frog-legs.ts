import type { Recipe } from "@/lib/types";

/** Mapo Frog Legs (麻婆蛙腿) — Day 138 豆制品盛宴 */
export const mapo_frog_legs: Recipe = {
  "id": "mapo-frog-legs",
  "slug": "mapo-frog-legs",
  "titleEn": "Mapo Frog Legs",
  "titleZh": "麻婆蛙腿",
  "pinyin": "má pó wā tuǐ",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "A variation on classic mapo with frog legs instead of beef — silky, numbing, and spicy.",
  "versionNoteZh": "经典麻婆的变体——用牛蛙腿替代牛肉——丝滑、麻、辣。",
  "tags": [
    "30-min",
    "sichuan",
    "spicy",
    "protein"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Mapo frog legs is a Sichuan specialty that took the original mapo beancurd concept and applied it to frog. The result is incredibly tender with a signature numbing-spicy sauce.",
  "storyZh": "麻婆蛙腿是四川特色，将经典麻婆豆腐的概念应用于牛蛙。结果异常嫩滑，有标志性的麻麻辣辣酱汁。",
  "image": "/images/recipes/mapo-frog-legs.webp",
  "relatedSlugs": [
    "mapo-tofu",
    "spicy-diced-chicken",
    "shui-zhu-pork-slices"
  ],
  "ingredients": [
    {
      "id": "mf-frog-01",
      "nameEn": "frog legs, halved",
      "nameZh": "牛蛙腿",
      "pinyin": "wā tuǐ",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "mf-bean-02",
      "nameEn": "doubanjiang (spicy broad bean paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "mf-garlic-03",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "mf-jiang-04",
      "nameEn": "fermented black beans, chopped",
      "nameZh": "豆豉",
      "pinyin": "dòu chǐ",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "fermented-black-beans"
    },
    {
      "id": "mf-sichuan-05",
      "nameEn": "Sichuan peppercorns, ground",
      "nameZh": "花椒粉",
      "pinyin": "huā jiāo fěn",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "mf-corn-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    }
  ],
  "steps": [
    {
      "text": "Marinate frog legs with 1 tbsp Shaoxing wine and a pinch of salt for 10 minutes. Coat with cornstarch.",
      "textZh": "牛蛙腿用1汤匙绍兴酒和少许盐腌制10分钟。裹玉米淀粉。",
      "zhHint": "裹粉要薄"
    },
    {
      "text": "Heat oil in a wok over high heat. Fry frog legs for 2 minutes until golden. Remove and drain.",
      "textZh": "大火热锅冷油，炸牛蛙腿2分钟至金黄。捞出沥油。",
      "zhHint": "快炸锁汁",
      "stateNote": {
        "visual": "Frog legs turn golden",
        "visualZh": "牛蛙腿变金黄",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Oil bubbles vigorously",
        "signalZh": "油剧烈冒泡"
      }
    },
    {
      "text": "In the same wok, sauté doubanjiang, garlic, and fermented black beans for 30 seconds until fragrant.",
      "textZh": "同锅炒豆瓣酱、蒜末和豆豉30秒至香。",
      "zhHint": "炒出红油"
    },
    {
      "text": "Add 200ml water and bring to a boil. Return frog legs and simmer for 5 minutes.",
      "textZh": "加水200ml烧沸，放回牛蛙腿，小火煮5分钟。",
      "zhHint": "入味",
      "stateNote": {
        "visual": "Sauce thickens and coats frog legs",
        "visualZh": "酱汁变稠包裹牛蛙腿",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "Sauce reduces and clings",
        "signalZh": "酱汁收浓"
      }
    },
    {
      "text": "Sprinkle with Sichuan peppercorn powder and chopped scallions. Serve with steamed rice.",
      "textZh": "撒花椒粉和葱花，配米饭上桌。",
      "zhHint": "花椒粉最后放"
    }
  ],
  "tips": [
    "Don't overcook frog legs — they turn rubbery.",
    "Use good quality doubanjiang for authentic flavor.",
    "The sauce should be thick and clingy, not watery."
  ],
  "tipsZh": [
    "不要煮过头——牛蛙腿会变韧。",
    "用好豆瓣酱才有正宗味。",
    "酱汁要浓稠挂汁，不要稀。"
  ]
};
