import type { Recipe } from "@/lib/types";

/** Spicy Tofu Noodle Soup (辣豆腐汤面) — Day 138 豆制品盛宴 */
export const tofu_broth_noodle: Recipe = {
  "id": "tofu-broth-noodle",
  "slug": "tofu-broth-noodle",
  "titleEn": "Spicy Tofu Noodle Soup",
  "titleZh": "辣豆腐汤面",
  "pinyin": "là dòu fu tāng miàn",
  "cuisine": "四川面食",
  "cuisineEn": "Sichuan Noodles",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "A spicy, warming noodle soup with crispy tofu — perfect for cold days.",
  "versionNoteZh": "辣味暖身面条汤配酥脆豆腐——寒冷日子的完美选择。",
  "tags": [
    "30-min",
    "sichuan",
    "noodles",
    "soup",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This noodle soup combines the warmth of a spicy broth with the texture contrast of crispy tofu and soft noodles.",
  "storyZh": "这道面条汤将辣汤的温暖与酥脆豆腐和软面条的口感对比相结合。",
  "image": "/images/recipes/tofu-broth-noodle.webp",
  "relatedSlugs": [
    "spicy-sichuan-noodles",
    "dan-dan-noodles",
    "mapo-tofu"
  ],
  "ingredients": [
    {
      "id": "tn-tofu-01",
      "nameEn": "firm tofu, cubed",
      "nameZh": "老豆腐，切块",
      "pinyin": "lǎo dòu fu",
      "amountMetric": "200 g",
      "amountUS": "about 7 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "tn-noodle-02",
      "nameEn": "wheat noodles",
      "nameZh": "小麦面",
      "pinyin": "xiǎo mài miàn",
      "amountMetric": "200 g",
      "amountUS": "about 7 oz",
      "category": "staple",
      "pantry": "local",
      "termKey": "noodles"
    },
    {
      "id": "tn-douban-03",
      "nameEn": "doubanjiang",
      "nameZh": "豆瓣酱",
      "pinyin": "dòu bàn jiàng",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "tn-garlic-04",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tn-chili-05",
      "nameEn": "chili oil",
      "nameZh": "红油",
      "pinyin": "hóng yóu",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "tn-broth-06",
      "nameEn": "vegetable broth",
      "nameZh": "蔬菜高汤",
      "pinyin": "shū cài gāo tāng",
      "amountMetric": "500 ml",
      "amountUS": "about 2 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Fry tofu cubes in oil until golden. Set aside.",
      "textZh": "豆腐块煎至金黄，备用。",
      "zhHint": "先煎豆腐"
    },
    {
      "text": "In the same pot, sauté doubanjiang and garlic for 30 seconds.",
      "textZh": "同锅炒豆瓣酱和蒜末30秒。",
      "zhHint": "炒出红油"
    },
    {
      "text": "Add broth and bring to a boil. Cook noodles in the broth for 3-4 minutes.",
      "textZh": "加高汤烧沸，下面煮3-4分钟。",
      "zhHint": "面汤一体",
      "stateNote": {
        "visual": "Broth is deep red and aromatic",
        "visualZh": "汤汁深红芬芳",
        "timeRef": "3-4 minutes",
        "timeRefZh": "3-4 分钟",
        "heat": "high",
        "signal": "Noodles are tender but still chewy",
        "signalZh": "面条软但仍有嚼劲"
      }
    },
    {
      "text": "Return tofu to pot. Add chili oil. Divide into bowls and top with scallions.",
      "textZh": "豆腐回锅，加红油。分碗，撒葱花。",
      "zhHint": "最后加葱"
    }
  ],
  "tips": [
    "Use good quality doubanjiang for the best flavor.",
    "The broth should be spicy and savory, not watery.",
    "Add a soft-boiled egg for extra protein."
  ],
  "tipsZh": [
    "用好豆瓣酱才有最佳风味。",
    "汤汁要辣咸，不要稀。",
    "加一颗溏心蛋增加蛋白。"
  ]
};
