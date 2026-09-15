import type { Recipe } from "@/lib/types";

/** Sauerkraut Pork Claypot (酸菜白肉煲) (酸菜白肉煲) — Day batch */
export const sauerkraut_pork_claypot: Recipe = {
  "id": "sauerkraut-pork-claypot",
  "slug": "sauerkraut-pork-claypot",
  "titleEn": "Sauerkraut Pork Claypot (酸菜白肉煲)",
  "titleZh": "酸菜白肉煲",
  "pinyin": "suān cài bái ròu bāo",
  "cuisine": "东北菜",
  "cuisineEn": "Northeastern",
  "region": "Liaoning",
  "regionZh": "辽宁",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "东北家常酸菜白肉，猪肉与酸菜互为提味，汤汁乳白。",
  "versionNoteZh": "东北家常酸菜白肉，猪肉与酸菜互为提味，汤汁乳白。",
  "tags": [
    "claypot",
    "pork",
    "sauerkraut",
    "northeastern",
    "winter"
  ],
  "dietary": [
    "none"
  ],
  "story": "In my grandfather's Liaoning home, this claypot was the hallmark of winter. Fermented cabbage and pork belly, slow-simmered until the fat melted into the sour broth — a dish that warmed you from the inside out.",
  "storyZh": "在祖父的辽宁老家，这道砂锅是冬天的标志。酸菜与五花肉慢炖，脂肪融入酸汤——从内而外暖身的菜。",
  "ingredients": [
    {
      "id": "scp-1",
      "nameEn": "pork belly, 1cm slices",
      "nameZh": "五花肉片",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "scp-2",
      "nameEn": "Chinese cabbage (sauerkraut), chopped",
      "nameZh": "酸菜",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "scp-3",
      "nameEn": "garlic cloves, whole",
      "nameZh": "整瓣大蒜",
      "amountMetric": "5 cloves",
      "amountUS": "5 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "scp-4",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 piece",
      "amountUS": "1 piece",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "scp-5",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "scp-6",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Sear pork belly slices in dry claypot 2 minutes per side until golden.",
      "textZh": "砂锅干煎五花肉片，每面2分钟至金黄。",
      "stateNote": {
        "visual": "Fat renders, surface crisps golden.",
        "visualZh": "脂肪析出，表面金黄酥脆。",
        "timeRef": "2 minutes per side",
        "timeRefZh": "每面 2 分钟",
        "heat": "medium-high",
        "signal": "Sizzle is loud, not smoky.",
        "signalZh": "滋滋声大但不冒烟。"
      }
    },
    {
      "text": "Add garlic, star anise, peppercorns, stir 30 seconds.",
      "textZh": "下大蒜、八角、花椒，翻炒30秒。",
      "stateNote": {
        "visual": "Spices release aroma, oil turns golden.",
        "visualZh": "香料出香，油变金黄。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Pungent spice aroma.",
        "signalZh": "香料辛辣香气。"
      }
    },
    {
      "text": "Add sauerkraut, stir-fry 2 minutes until wilted.",
      "textZh": "下酸菜翻炒2分钟至软。",
      "stateNote": {
        "visual": "Sauerkraut softens, releases sour aroma.",
        "visualZh": "酸菜变软，酸香释放。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Acid aroma is bright, not sour.",
        "signalZh": "酸香鲜亮，不刺鼻。"
      }
    },
    {
      "text": "Pour in 500ml hot water, bring to boil.",
      "textZh": "冲入500毫升热水，大火烧开。",
      "stateNote": {
        "visual": "Broth turns milky white.",
        "visualZh": "汤汁变乳白色。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Rolling boil, white broth.",
        "signalZh": "滚沸，汤色乳白。"
      }
    },
    {
      "text": "Reduce to low, cover and simmer 20 minutes.",
      "textZh": "转小火，盖盖焖20分钟。",
      "stateNote": {
        "visual": "Broth simmers gently, pork is tender.",
        "visualZh": "汤汁微滚，猪肉软嫩。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low",
        "signal": "Steam escapes steadily.",
        "signalZh": "蒸汽匀速逸出。"
      }
    },
    {
      "text": "Season with soy sauce, simmer 3 more minutes. Serve.",
      "textZh": "加生抽调味，再煮3分钟，热盛。",
      "stateNote": {
        "visual": "Broth is rich, pork yields to chopsticks.",
        "visualZh": "汤汁浓郁，猪肉筷子可入。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Chopsticks slide into meat easily.",
        "signalZh": "筷子轻松插入肉中。"
      }
    }
  ],
  "tips": [
    "Render pork fat first — it flavors the entire pot.",
    "Acid from sauerkraut tenderizes meat naturally."
  ],
  "tipsZh": [
    "先煎出猪油——它奠定整锅风味。",
    "酸菜的酸自然软化肉质。"
  ],
  "relatedSlugs": [
    "dan-dang-pork",
    "pickled-cabbage-pork"
  ],
  "image": "/images/recipes/sauerkraut-pork-claypot.webp"
};
