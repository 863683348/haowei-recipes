import type { Recipe } from "@/lib/types";

/** Jianbing (Chinese Crepe) (煎饼果子) — Day batch */
export const jianbing: Recipe = {
  "titleEn": "Jianbing (Chinese Crepe)",
  "titleZh": "煎饼果子",
  "pinyin": "jiān bing guǒ zi",
  "cuisine": "北方早餐",
  "cuisineEn": "Northern Breakfast",
  "region": "天津",
  "regionZh": "天津",
  "difficulty": "medium",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Tianjin-style morning crepe with crispy wonton cracker",
  "versionNoteZh": "天津风格早餐煎饼，配脆脆的薄脆",
  "tags": [
    "breakfast",
    "street-food",
    "quick"
  ],
  "dietary": [
    "none"
  ],
  "story": "Tianjin's iconic breakfast, jianbing is a savory crepe folded around a crispy cracker (baocui) or fried dough stick (youtiao). Vendors spread millet batter on hot griddles, crack eggs on top, then fold with sauce before wrapping.",
  "storyZh": "天津标志性早餐，煎饼是咸香薄饼卷入酥脆薄脆或油条。摊贩在热铁板上摊开小米面糊，打鸡蛋摊平，刷酱卷起，是北方人清晨的标配。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Millet flour",
      "nameZh": "小米粉",
      "amountMetric": "100g",
      "amountUS": "2/3 cup",
      "category": "staple",
      "pantry": "asian"
    },
    {
      "id": "2",
      "nameEn": "All-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "50g",
      "amountUS": "1/3 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "2 large",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Baocui (wonton crackers)",
      "nameZh": "薄脆",
      "amountMetric": "2 pcs",
      "amountUS": "2 pcs",
      "category": "staple",
      "pantry": "asian"
    },
    {
      "id": "5",
      "nameEn": "Sweet bean sauce",
      "nameZh": "甜面酱",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "6",
      "nameEn": "Fermented tofu sauce",
      "nameZh": "腐乳汁",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "7",
      "nameEn": "Cilantro",
      "nameZh": "香菜",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "8",
      "nameEn": "Sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Mix millet flour, all-purpose flour, and water to form a thin pourable batter (like crepe batter).",
      "textZh": "小米粉、面粉和清水调成稀面糊，能流动但不过稀。",
      "stateNote": {
        "visual": "smooth fluid batter, no lumps",
        "signal": "crepe consistency"
      }
    },
    {
      "text": "Heat a flat griddle over medium heat, lightly oil the surface.",
      "textZh": "平底铁板或煎锅烧热，表面刷薄薄一层油。",
      "stateNote": {
        "visual": "surface shimmering",
        "signal": "ready"
      }
    },
    {
      "text": "Pour a ladle of batter onto center, quickly swirl to spread into a thin round crepe.",
      "textZh": "倒一勺面糊在锅中央，快速转动锅子摊成圆形薄饼。",
      "zhHint": "动作要快，面糊流动性好",
      "stateNote": {
        "visual": "thin translucent crepe forming",
        "signal": "30 seconds"
      }
    },
    {
      "text": "Crack egg on top, spread evenly, sprinkle sesame seeds. Cook 1 minute until set.",
      "textZh": "打入鸡蛋摊平，撒白芝麻，煎1分钟至蛋液凝固。",
      "stateNote": {
        "visual": "egg opaque, edges lifting",
        "signal": "set"
      }
    },
    {
      "text": "Flip crepe, brush with sweet bean sauce and fermented tofu sauce, add baocui and cilantro.",
      "textZh": "翻面，刷甜面酱和腐乳汁，放薄脆和香菜。",
      "stateNote": {
        "visual": "sauce glistening",
        "signal": "aromatic"
      }
    },
    {
      "text": "Fold into a rectangle, slide onto plate, cut in half and serve immediately.",
      "textZh": "折叠成长方形，装盘对半切开，趁热食用。",
      "stateNote": {
        "visual": "crispy layers visible",
        "signal": "ready to eat"
      }
    }
  ],
  "tips": [
    "Millet flour gives authentic texture — don't substitute entirely with wheat",
    "Baocui must be crisp; replace if soggy",
    "Add diced pickled daikon for authentic Tianjin tang"
  ],
  "tipsZh": [
    "小米粉是正宗口感的关键，不要全用面粉替代",
    "薄脆必须酥脆，受潮及时更换",
    "可加酸萝卜丁增加天津特色"
  ],
  "relatedSlugs": [
    "grilled-cold-noodles-day88-1",
    "zhajiliu-day88-10"
  ],
  "image": "/images/recipes/jianbing-day88.webp",
  "slug": "jianbing",
  "id": "jianbing"
};
