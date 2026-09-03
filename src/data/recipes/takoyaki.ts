import type { Recipe } from "@/lib/types";

/** Takoyaki (章鱼小丸子) (章鱼小丸子) — Day batch */
export const takoyaki: Recipe = {
  "titleEn": "Takoyaki (章鱼小丸子)",
  "titleZh": "章鱼小丸子",
  "pinyin": "zhāng yú xiǎo wán zi",
  "cuisine": "日式中华融合",
  "cuisineEn": "Japanese-Chinese Fusion",
  "region": "大阪风格",
  "regionZh": "大阪风味",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version using takoyaki pan or mini muffin tin",
  "versionNoteZh": "家庭版，用章鱼烧模具或迷你玛芬模",
  "tags": [
    "street-food",
    "snack",
    "interactive"
  ],
  "dietary": [
    "none"
  ],
  "story": "Osaka's signature street food, takoyaki are crispy-on-the-outside, custardy-on-the-inside spheres studded with octopus pieces. The special hemispherical pan creates the iconic round shape with a caramelized crust.",
  "storyZh": "大阪代表性街头美食，外酥里嫩的球状小点心，内藏章鱼块。专用半球模具烤出标志性的圆形外壳和焦糖色脆皮。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Octopus (chopped)",
      "nameZh": "章鱼丁",
      "amountMetric": "150g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "2",
      "nameEn": "All-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "150g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Dashi stock",
      "nameZh": "出汁高汤",
      "amountMetric": "300ml",
      "amountUS": "1.25 cups",
      "category": "other",
      "pantry": "asian"
    },
    {
      "id": "4",
      "nameEn": "Eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Beni shoga (red ginger)",
      "nameZh": "红姜丝",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "6",
      "nameEn": "Aonori (seaweed flakes)",
      "nameZh": "海苔粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "7",
      "nameEn": "Takoyaki sauce",
      "nameZh": "章鱼烧酱",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "8",
      "nameEn": "Japanese mayo",
      "nameZh": "日式蛋黄酱",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Whisk eggs and dashi together, then sift in flour and mix until smooth batter forms.",
      "textZh": "鸡蛋打散后加入出汁高汤搅拌均匀，筛入面粉搅成顺滑面糊。",
      "stateNote": {
        "visual": "smooth lump-free batter",
        "signal": "well mixed"
      },
      "tip": "面糊过筛口感更细腻"
    },
    {
      "text": "Dice octopus into 1cm pieces and fold into the batter.",
      "textZh": "章鱼切1厘米小丁拌入面糊中。",
      "stateNote": {
        "visual": "octopus pieces evenly distributed",
        "signal": "folded in"
      }
    },
    {
      "text": "Heat takoyaki pan over medium-high, brush each mold with oil.",
      "textZh": "章鱼烧烤盘中火烧热，每个半球模具刷一层薄油。",
      "stateNote": {
        "visual": "oil shimmering in molds",
        "signal": "hot and ready"
      }
    },
    {
      "text": "Pour batter into each mold 3/4 full, rotate every 2 minutes until golden and round.",
      "textZh": "倒入面糊至七分工，每2分钟翻转一次，烤至金黄圆整。",
      "zhHint": "用签子快速旋转帮助成型",
      "stateNote": {
        "visual": "golden brown crispy shell",
        "signal": "5-6 minutes per side"
      }
    },
    {
      "text": "Arrange on plate, drizzle with sauce and mayo, sprinkle aonori and red ginger.",
      "textZh": "装盘后淋上章鱼烧酱和蛋黄酱，撒上海苔粉和红姜丝。",
      "stateNote": {
        "visual": "sauce glossy, garnish colorful",
        "signal": "ready to eat"
      }
    }
  ],
  "tips": [
    "No takoyaki pan? Use a mini muffin tin at 200°C for 12 minutes",
    "Keep heat medium-high for crispy exterior, low for gooey interior",
    "Octopus can be substituted with surimi sticks for affordability"
  ],
  "tipsZh": [
    "没有专用烤盘？用迷你玛芬模200度烤12分钟",
    "火候控制：外脆内嫩的关键",
    "章鱼可替换为蟹柳棒降低成本"
  ],
  "relatedSlugs": [
    "jianbing-day88-8",
    "grilled-cold-noodles-day88-1"
  ],
  "image": "/images/recipes/takoyaki-day88.webp",
  "slug": "takoyaki",
  "id": "takoyaki"
};
