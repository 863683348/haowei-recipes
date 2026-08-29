import type { Recipe } from "@/lib/types";

/** Hubei Pork Rib and Lotus Root Soup (排骨藕汤) — Seed batch */
export const hubei_pork_rib_and_lotus_root_soup: Recipe = {
  "id": "pai-gu-ou-tang",
  "slug": "hubei-pork-rib-and-lotus-root-soup",
  "titleEn": "Hubei Pork Rib and Lotus Root Soup",
  "titleZh": "排骨藕汤",
  "pinyin": "Pái Gǔ Ǒu Tāng",
  "cuisine": "汤羹凉菜",
  "cuisineEn": "Soup & Cold Dishes",
  "region": "Wuhan, Hubei",
  "regionZh": "湖北武汉",
  "difficulty": "easy",
  "timeMin": 150,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version simmers gently for hours to extract collagen and sweetness from ribs and lotus root — no MSG, no shortcuts.",
  "versionNoteZh": "家常版以文火慢炖数小时，充分析出排骨胶原与藕粉甜味——不加味精，不走捷径。",
  "tags": [
    "slow-cook",
    "comfort",
    "winter"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Hankou boiled this soup every Sunday afternoon in his clay pot — he’d say the lotus root’s holes ‘let good fortune flow through’, and the milky broth was our winter immunity ritual.",
  "storyZh": "我汉口的爷爷每周日下午都在砂锅里熬这汤——他说莲藕的孔洞‘让福气穿行而过’，乳白汤色是我们过冬的免疫力仪式。",
  "ingredients": [
    {
      "id": "pg-01",
      "nameEn": "pork spare ribs (cut into 4-cm pieces)",
      "nameZh": "猪肋排（切4厘米段）",
      "pinyin": "Zhū Lèi Pái",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for meaty, non-fatty ribs; blanch first to remove impurities.",
      "noteZh": "请肉贩选肉多、肥少的肋排；焯水去浮沫。"
    },
    {
      "id": "pg-02",
      "nameEn": "fresh lotus root",
      "nameZh": "鲜莲藕",
      "pinyin": "Xiān Lián Ǒu",
      "amountMetric": "400 g",
      "amountUS": "2 medium roots (~2 cups sliced)",
      "category": "produce",
      "pantry": "local",
      "note": "Choose firm, unblemished roots with smooth brown skin; substitute with jicama if unavailable.",
      "noteZh": "选表皮光滑、无斑点、手感沉实者；无鲜藕可用豆薯替代。"
    },
    {
      "id": "pg-03",
      "nameEn": "ginger",
      "nameZh": "老姜",
      "pinyin": "Lǎo Jiāng",
      "amountMetric": "40 g",
      "amountUS": "3 thick slices, unpeeled",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pg-04",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "Qīng Shuǐ",
      "amountMetric": "2000 ml",
      "amountUS": "8.5 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse ribs and place in a large pot with cold water. Bring to a boil, then simmer 3 minutes. Drain and rinse under cold water.",
      "textZh": "排骨冷水下锅，煮沸后转小火焯3分钟，捞出用冷水冲洗干净。",
      "zhHint": "冷水下锅去血水，勿久煮防柴",
      "stateNote": {
        "visual": "Water turns pale pink with fine gray foam on surface",
        "visualZh": "水面泛淡粉色，浮起细灰沫",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Foam rises steadily but does not overflow",
        "signalZh": "浮沫匀速上升，未溢出锅沿"
      }
    },
    {
      "text": "Peel lotus root, slice 0.5 cm thick, and soak in vinegar-water (1 tsp vinegar per 2 cups water) for 10 minutes to prevent browning.",
      "textZh": "莲藕去皮切0.5厘米厚片，浸入醋水（2杯水+1茶匙醋）10分钟防氧化变黑。",
      "zhHint": "醋水护色，切后即泡",
      "stateNote": {
        "visual": "Slices retain creamy-white color with no gray edges",
        "visualZh": "藕片呈乳白色，边缘无灰暗",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No discoloration visible when lifted from liquid",
        "signalZh": "捞起后无颜色变化"
      }
    },
    {
      "text": "Return ribs to clean pot. Add ginger, lotus root, and water. Bring to a gentle boil, then lower heat to bare simmer.",
      "textZh": "排骨回锅，加姜片、藕片和清水；大火烧开后转最小火保持微沸。",
      "zhHint": "水沸即转小火，防藕碎汤浑",
      "stateNote": {
        "visual": "Tiny bubbles rise singly from bottom, no rolling surface motion",
        "visualZh": "锅底单个气泡缓慢升起，水面静止无翻滚",
        "timeRef": "2 minutes to adjust heat",
        "timeRefZh": "调火约2分钟",
        "heat": "low",
        "signal": "Surface remains still except for occasional bubble break",
        "signalZh": "仅偶有气泡破裂，水面整体平静"
      }
    },
    {
      "text": "Simmer uncovered for 2 hours, skimming foam occasionally. After 1.5 hours, add 1 tsp salt.",
      "textZh": "敞盖小火慢炖2小时，中途撇去浮沫；炖至1.5小时时加盐1茶匙。",
      "zhHint": "盐后放，防肉柴藕硬",
      "stateNote": {
        "visual": "Broth turns creamy ivory with tender rib edges curling slightly",
        "visualZh": "汤色呈乳白象牙色，排骨边缘微卷、软烂",
        "timeRef": "2 hours total",
        "timeRefZh": "共2小时",
        "heat": "low",
        "signal": "Lotus root slices yield gently to chopstick pressure but hold shape",
        "signalZh": "藕片用筷子轻压即软，仍保持完整形态"
      }
    },
    {
      "text": "Taste and adjust salt. Serve hot, with ribs, lotus root, and broth — no garnish needed.",
      "textZh": "尝味补盐，趁热盛出：排骨、藕片、汤同上，无需点缀。",
      "zhHint": "原汤原味，暖胃养人",
      "stateNote": {
        "visual": "Broth coats spoon lightly and glistens with natural fat sheen",
        "visualZh": "汤汁微挂勺，泛天然脂光",
        "timeRef": "immediately before serving",
        "timeRefZh": "上桌前即刻",
        "heat": "medium",
        "signal": "Steam rises steadily and carries sweet, earthy aroma",
        "signalZh": "热气稳定升腾，带清甜泥土香"
      }
    }
  ],
  "tips": [
    "Blanching ribs removes blood and impurities — never skip it.",
    "Use unpeeled ginger: its skin adds depth and prevents bitterness.",
    "This soup tastes better the next day — refrigerate overnight and reheat gently."
  ],
  "tipsZh": [
    "排骨焯水去血沫杂质——不可省略。",
    "姜带皮使用：增加醇厚感，避免苦涩。",
    "隔夜更佳——冷藏过夜后小火复热即可。"
  ],
  "relatedSlugs": [
    "wuchang-fish-hubei-style"
  ],
  "image": "/images/recipes/hubei-pork-rib-and-lotus-root-soup.webp"
};
