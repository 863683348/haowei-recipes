import type { Recipe } from "@/lib/types";

/** Chestnut Braised Pork | Chinese Li Zi Shao Rou (板栗烧肉) — Day batch */
export const chestnut_braised_pork: Recipe = {
  "slug": "chestnut-braised-pork",
  "id": "chestnut-braised-pork",
  "titleEn": "Chestnut Braised Pork | Chinese Li Zi Shao Rou",
  "titleZh": "板栗烧肉",
  "pinyin": "lǐ zi shāo ròu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National",
  "regionZh": "全国",
  "difficulty": "medium",
  "timeMin": 60,
  "servings": 4,
  "version": "family",
  "versionNote": "Autumn chestnuts add sweetness and texture to braised pork.",
  "versionNoteZh": "秋季板栗增添清甜和粉糯口感。",
  "tags": [
    "autumn",
    "braised"
  ],
  "dietary": [
    "none"
  ],
  "story": "Chestnut and pork belly is a seasonal favorite in autumn. The chestnuts become sweet and powdery, absorbing the savory braising liquid. This dish represents the harmony of autumn harvest.",
  "storyZh": "板栗烧肉是秋季时令美味。板栗变得粉糯清甜，吸收咸鲜的酱汁。这道菜体现了秋季丰收的和谐。",
  "ingredients": [
    {
      "id": "cb-01",
      "nameEn": "pork belly",
      "nameZh": "五花肉",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cb-02",
      "nameEn": "chestnuts",
      "nameZh": "板栗",
      "amountMetric": "200 g",
      "amountUS": "2 cups",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cb-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cb-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "cb-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "cb-06",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "2 slices",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cb-07",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 pc",
      "amountUS": "1 pc",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
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
        "signal": "Scum rises; meat turns white."
      }
    },
    {
      "text": "Score chestnuts and blanch 2 minutes. Peel while warm.",
      "textZh": "板栗划十字，焯水2分钟，趁热剥壳。",
      "zhHint": "板栗划口去皮",
      "stateNote": {
        "visual": "Shells crack along score lines.",
        "visualZh": "壳沿刀口裂开。",
        "timeRef": "2 minutes",
        "signal": "Shell separates easily from kernel."
      }
    },
    {
      "text": "Heat wok with oil. Add rock sugar, melt to amber. Add pork, toss to coat.",
      "textZh": "热锅下油，冰糖炒至琥珀色，下五花肉翻炒上色。",
      "zhHint": "炒糖色",
      "stateNote": {
        "visual": "Pork coated in amber glaze.",
        "visualZh": "肉块裹上琥珀色。",
        "timeRef": "2 minutes",
        "heat": "medium",
        "signal": "Caramel aroma; sugar bubbles amber."
      }
    },
    {
      "text": "Add chestnuts, soy sauces, ginger, star anise. Pour hot water to cover. Bring to boil, then simmer 40 minutes.",
      "textZh": "下板栗、生抽、老抽、姜片、八角。加热水没过，大火烧开转小火焖40分钟。",
      "zhHint": "小火焖煮",
      "stateNote": {
        "visual": "Sauce reduced and glossy.",
        "visualZh": "酱汁收浓光亮。",
        "timeRef": "40 minutes",
        "heat": "low",
        "signal": "Pork fork-tender; sauce coats spoon."
      }
    },
    {
      "text": "Increase heat to reduce sauce. Serve when sauce coats pieces.",
      "textZh": "转大火收汁，酱汁包裹即可出锅。",
      "zhHint": "收汁出锅",
      "stateNote": {
        "visual": "Sauce glossy and thick.",
        "visualZh": "酱汁浓稠光亮。",
        "signal": "Sauce clings to spoon; no watery pool."
      }
    }
  ],
  "tips": [
    "Fresh chestnuts are best — peel while warm.",
    "Chestnuts cook faster than pork — add with meat.",
    "Don't over-reduce — chestnuts fall apart easily."
  ],
  "tipsZh": [
    "鲜板栗最佳——趁热剥壳。",
    "板栗比肉熟得快——和肉一起下。",
    "别收汁太干——板栗易碎。"
  ],
  "relatedSlugs": [
    "pumpkin-braised-pork",
    "hongshao-pork",
    "home-style-pork"
  ],
  "image": "/images/recipes/chestnut-braised-pork.webp"
};
