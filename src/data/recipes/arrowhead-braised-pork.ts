import type { Recipe } from "@/lib/types";

/** Arrowhead Braised Pork | Chinese Cigua Shao Rou (茨菇烧肉) — Day batch */
export const arrowhead_braised_pork: Recipe = {
  "slug": "arrowhead-braised-pork",
  "id": "arrowhead-braised-pork",
  "titleEn": "Arrowhead Braised Pork | Chinese Cigua Shao Rou",
  "titleZh": "茨菇烧肉",
  "pinyin": "cí gū shāo ròu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Jiangnan",
  "regionZh": "江南",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Arrowhead (cigua) has a sweet, chestnut-like flavor — a Jiangnan winter specialty.",
  "versionNoteZh": "茨菇有清甜板栗风味，江南冬季特色。",
  "tags": [
    "winter",
    "braised",
    "jiangnan"
  ],
  "dietary": [
    "none"
  ],
  "story": "Cigua (arrowhead) is a winter vegetable popular in Jiangnan. Its sweet, nutty flavor complements braised pork perfectly. This dish is a seasonal treasure from the rice paddies.",
  "storyZh": "茨菇是江南冬季特色蔬菜，味道清甜似板栗，与红烧肉完美搭配。这是稻田里的季节珍馐。",
  "ingredients": [
    {
      "id": "ah-01",
      "nameEn": "pork belly",
      "nameZh": "五花肉",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ah-02",
      "nameEn": "arrowhead (cigua)",
      "nameZh": "茨菇",
      "amountMetric": "250 g",
      "amountUS": "2 cups",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ah-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ah-04",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "ah-05",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "2 slices",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Cut pork belly into 3-cm cubes. Blanch 3 minutes. Drain.",
      "textZh": "五花肉切方块，焯水3分钟，捞出。",
      "zhHint": "五花肉焯水",
      "stateNote": {
        "visual": "Pork firm and pale.",
        "visualZh": "肉块紧实发白。",
        "timeRef": "3 minutes",
        "signal": "Surface firm; no pink remaining."
      }
    },
    {
      "text": "Trim arrowhead ends, peel outer layer if tough. Halve large pieces.",
      "textZh": "茨菇切去根部，剥去老皮，大块对半切。",
      "zhHint": "茨菇处理",
      "stateNote": {
        "visual": "Arrowhead is white and firm.",
        "visualZh": "茨菇洁白紧实。",
        "signal": "No soft or moldy spots; snaps cleanly."
      }
    },
    {
      "text": "Heat oil, add rock sugar, melt to amber. Add pork, toss to coat.",
      "textZh": "热油下冰糖炒至琥珀色，下五花肉翻炒上色。",
      "zhHint": "炒糖色",
      "stateNote": {
        "visual": "Pork coated in amber glaze.",
        "visualZh": "肉块裹上琥珀色。",
        "timeRef": "2 minutes",
        "heat": "medium",
        "signal": "Caramel scent; sugar bubbles amber."
      }
    },
    {
      "text": "Add arrowhead, soy sauce, ginger. Add hot water to cover. Braise 30 minutes.",
      "textZh": "下茨菇、生抽、姜片，加热水没过，焖30分钟。",
      "zhHint": "小火焖煮",
      "stateNote": {
        "visual": "Sauce reducing, arrowhead tender.",
        "visualZh": "酱汁收浓，茨菇软。",
        "timeRef": "30 minutes",
        "heat": "low",
        "signal": "Fork slides into arrowhead easily."
      }
    },
    {
      "text": "Increase heat to reduce sauce. Serve when glossy.",
      "textZh": "转大火收汁，光亮即可出锅。",
      "zhHint": "收汁出锅",
      "stateNote": {
        "visual": "Sauce thick and glossy.",
        "visualZh": "酱汁浓稠光亮。",
        "signal": "Coats spoon thickly; no watery pool."
      }
    }
  ],
  "tips": [
    "Arrowhead has a natural sweetness — reduce added sugar.",
    "Select firm, white arrowhead without spots.",
    "Can substitute with water chestnuts if unavailable."
  ],
  "tipsZh": [
    "茨菇自带甜味——少放糖。",
    "选洁白紧实无斑点的。",
    "可用荸荠替代。"
  ],
  "relatedSlugs": [
    "pumpkin-braised-pork",
    "chestnut-braised-pork",
    "home-style-pork"
  ],
  "image": "/images/recipes/arrowhead-braised-pork.webp"
};
