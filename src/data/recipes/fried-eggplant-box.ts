import type { Recipe } from "@/lib/types";

/** Fried Eggplant Stuffed with Pork (炸茄盒) (炸茄盒) — Day batch */
export const fried_eggplant_box: Recipe = {
  "id": "fried-eggplant-box",
  "slug": "fried-eggplant-box",
  "titleEn": "Fried Eggplant Stuffed with Pork (炸茄盒)",
  "titleZh": "炸茄盒",
  "pinyin": "zhà qié hé",
  "cuisine": "鲁菜",
  "cuisineEn": "Shandong",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版薄面糊快炸，保持茄子软嫩；餐馆版有时裹厚糊追求酥脆。",
  "versionNoteZh": "家庭版薄面糊快炸，保持茄子软嫩；餐馆版有时裹厚糊追求酥脆。",
  "tags": [
    "fried",
    "vegetable-forward",
    "comfort",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "Eggplant boxes are a Shandong winter staple—slices of eggplant sandwiched with pork, dipped in batter, and fried until golden. The contrast of crispy exterior and melting interior is pure comfort food.",
  "storyZh": "茄盒是山东冬季的家常菜——茄子夹肉、挂糊、炸至金黄。外酥里嫩的对比是纯粹的 comfort food。",
  "ingredients": [
    {
      "id": "fe-01",
      "nameEn": "eggplant, sliced 1cm thick",
      "nameZh": "茄子（1厘米厚片）",
      "amountMetric": "2 medium",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "fe-02",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "amountMetric": "150 g",
      "amountUS": "3/4 cup",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "fe-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "fe-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "fe-05",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "80 g",
      "amountUS": "2/3 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "fe-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "staple",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "fe-07",
      "nameEn": "water",
      "nameZh": "水",
      "amountMetric": "120 ml",
      "amountUS": "1/2 cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "fe-08",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "中性油（炸用）",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Slice eggplant into 1cm rounds, cut halfway through but not all the way—create a pocket.",
      "textZh": "茄子切1厘米厚片，切一半不停刀，做成口袋状。",
      "stateNote": {
        "visual": "Slice is connected at bottom, like a book",
        "visualZh": "底部相连，如书本状",
        "signal": "Can open and close like a hinge",
        "signalZh": "能像合页一样开合"
      }
    },
    {
      "text": "Season pork with soy sauce and garlic, stuff into eggplant pockets.",
      "textZh": "猪肉末加生抽蒜末调味，塞入茄盒。",
      "stateNote": {
        "visual": "Pork visible but not overflowing",
        "visualZh": "肉馅可见但未溢出",
        "signal": "Pocket closes with slight pressure",
        "signalZh": "轻压能闭合"
      }
    },
    {
      "text": "Mix flour, cornstarch, and water into smooth batter—consistency of heavy cream.",
      "textZh": "面粉、淀粉、水调成面糊，浓稠如重奶油。",
      "stateNote": {
        "visual": "Batter flows slowly off spoon in ribbons",
        "visualZh": "面糊缓慢流下呈 ribbon 状",
        "signal": "Coats back of spoon evenly",
        "signalZh": "能均匀挂住勺背"
      }
    },
    {
      "text": "Heat oil to 170°C, dip stuffed eggplant in batter, fry until golden 3-4 minutes per side.",
      "textZh": "油温170°C，茄盒挂糊下锅，每面炸3-4分钟至金黄。",
      "stateNote": {
        "visual": "Batter puffs and turns golden, oil bubbles vigorously",
        "visualZh": "面糊膨胀金黄，油泡剧烈",
        "signal": "Crackle sound softens, eggplant floats",
        "signalZh": "油炸声变轻，茄盒浮起"
      }
    },
    {
      "text": "Drain on rack (not paper towel—keeps bottom crisp), serve immediately.",
      "textZh": "架上沥油（不要放纸上，否则底部回软），趁热吃。",
      "stateNote": {
        "visual": "Crust stays matte and crackly",
        "visualZh": "外壳哑光酥脆",
        "signal": "Sound when tapped is hollow and crisp",
        "signalZh": "轻敲有空洞清脆声"
      }
    }
  ],
  "tips": [
    "Salt eggplant slices 10 minutes before stuffing to reduce oil absorption",
    "Use a wire rack for draining—paper towels trap steam and soften the crust",
    "Eggplant should be firm, not overly soft, for best results"
  ],
  "tipsZh": [
    "茄子片提前撒盐10分钟再炸，可减少吸油",
    "用网架沥油——纸 towel 会困住蒸汽使外壳回软",
    "选结实的茄子，太软的容易吸油过多"
  ],
  "relatedSlugs": [
    "homestyle-spring-rolls",
    "fried-eggplant-with-garlic",
    "yu-xiang-eggplant"
  ],
  "image": "/images/recipes/garlic-roasted-eggplant.webp"
};
