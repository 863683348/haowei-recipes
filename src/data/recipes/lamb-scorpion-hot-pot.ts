import type { Recipe } from "@/lib/types";

/** Lamb Scorpion Hot Pot (羊蝎子火锅) — Seed batch */
export const lamb_scorpion_hot_pot: Recipe = {
  "id": "yang-xie-zi-huo-guo",
  "slug": "lamb-scorpion-hot-pot",
  "titleEn": "Lamb Scorpion Hot Pot",
  "titleZh": "羊蝎子火锅",
  "pinyin": "yáng xiē zi huǒ guō",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses slow-simmered lamb spine bones (not pre-boiled or pressure-cooked) for deep collagen-rich broth — just like Aunt Mei’s apartment in Xicheng, Beijing.",
  "versionNoteZh": "家庭版用羊蝎子慢炖3小时出胶质浓汤，不加味精，不压锅，还原西城区梅姨家灶台味道。",
  "tags": [
    "slow-cooked",
    "winter",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Beijing’s hutong used to simmer lamb spine bones overnight every winter solstice — the marrow would melt into the broth, and we’d huddle around the charcoal brazier, dipping boiled cabbage and hand-pulled noodles. He called it 'bone-warmth soup' — not fancy, but it kept us warm for days.",
  "storyZh": "我北京胡同里的舅舅每年冬至都熬羊蝎子到凌晨——骨髓融进汤里，我们围着炭火炉涮白菜和手擀面。他管这叫‘骨头暖汤’，不花哨，但暖了我们好几天。",
  "ingredients": [
    {
      "id": "yx-01",
      "nameEn": "lamb spine bones (with cartilage & marrow)",
      "nameZh": "羊蝎子（带软骨与骨髓）",
      "pinyin": "yáng xiē zi",
      "amountMetric": "800 g",
      "amountUS": "1.75 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for 'lamb neck spine' or 'lamb scorpion' — avoid pre-cut small pieces; whole segments hold up better. Sub: lamb neck bones (600 g / 1.3 lb).",
      "noteZh": "请肉铺切整段羊蝎子（带脊椎骨节），勿剁小块；可替代：羊颈骨（600 克）。"
    },
    {
      "id": "yx-02",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "50 g",
      "amountUS": "½ cup, thinly sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Use young ginger if available; peel only if skin is fibrous.",
      "noteZh": "优选嫩姜；老姜需去皮。",
      "termKey": "ginger"
    },
    {
      "id": "yx-03",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "4 pcs",
      "amountUS": "4 pcs",
      "category": "spice",
      "pantry": "asian",
      "note": "Whole, not ground. Sub: ½ tsp ground star anise (less aromatic).",
      "noteZh": "用整颗，非粉状；可替代：八角粉 ½ 茶匙（香气略弱）。",
      "termKey": "star-anise"
    },
    {
      "id": "yx-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds salt & umami without darkening broth excessively.",
      "noteZh": "提咸鲜而不使汤色过深。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "yx-05",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sub: balsamic vinegar (milder, less sharp) — add at end.",
      "noteZh": "可替代：意大利黑醋（风味较柔和），最后淋入。",
      "termKey": "chinese-black-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Rinse lamb spine bones under cold water. Place in a large pot with enough cold water to cover by 5 cm. Bring to a rolling boil over high heat, then immediately reduce to medium and skim foam vigorously for 3 minutes.",
      "textZh": "羊蝎子冷水冲洗。入大锅，加足量冷水没过骨头5厘米。大火烧沸后转中火，持续撇浮沫3分钟。",
      "zhHint": "去腥关键步骤",
      "stateNote": {
        "visual": "Greyish foam rises steadily; surface clears as skimming continues.",
        "visualZh": "灰白色浮沫持续上涌；撇净后汤面渐清。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Foam stops rising significantly and broth looks pale amber.",
        "signalZh": "浮沫明显减少，汤色呈浅琥珀色。"
      },
      "tip": "Do not stir while boiling — gentle skimming preserves marrow integrity.",
      "tipZh": "焯水时勿搅动，轻捞浮沫以保骨髓完整。"
    },
    {
      "text": "Drain bones, rinse again under cool water, then return to clean pot. Add ginger slices, star anise, light soy sauce, and 2 L cold water. Bring to a gentle simmer over medium-high heat, then reduce to low and cover partially.",
      "textZh": "捞出羊蝎子，凉水冲洗一遍，放回干净锅中。加姜片、八角、生抽和2升冷水。中大火烧开后转小火，盖半盖慢炖。",
      "zhHint": "重新炖煮，去尽余腥",
      "stateNote": {
        "visual": "Tiny bubbles break gently at edges; steam rises softly from lid gap.",
        "visualZh": "锅边冒细泡；蒸汽从盖缝缓缓溢出。",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "heat": "low",
        "signal": "Bones are tender but still hold shape; broth reduces slightly and turns golden.",
        "signalZh": "骨头酥软但不散架；汤色微金黄，略收浓。"
      }
    },
    {
      "text": "Add Chinese black vinegar and simmer uncovered for 10 more minutes. Taste broth — it should be deeply savory, slightly sweet from marrow, with balanced warmth.",
      "textZh": "加入陈醋，敞盖再炖10分钟。尝汤：应有骨髓甘甜、咸鲜醇厚、微辛回甘。",
      "zhHint": "最后调酸增香",
      "stateNote": {
        "visual": "Broth shimmers with light gloss; aroma becomes round and layered.",
        "visualZh": "汤面泛微光；香气变得圆润丰沛。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "Vinegar tang lifts without overpowering — smell should evoke warm spice and caramelized bone.",
        "signalZh": "醋香提神而不抢味——闻之似暖香料与焦化骨香交融。"
      }
    },
    {
      "text": "Transfer hot pot to a portable electric hot plate or traditional charcoal brazier. Serve with raw accompaniments: blanched napa cabbage, fresh tofu cubes, hand-pulled noodles, and cilantro.",
      "textZh": "将热汤连骨转入电陶炉或炭炉锅具。配烫食：烫白菜、鲜豆腐块、手擀面、香菜。",
      "zhHint": "围炉即食，暖意升腾",
      "stateNote": {
        "visual": "Steam curls upward from center of pot; bones rest upright in rich golden broth.",
        "visualZh": "热气自锅心袅袅升腾；羊蝎子立于金黄浓汤之中。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "medium-high",
        "signal": "Broth maintains steady gentle bubble at rim.",
        "signalZh": "锅沿保持匀速微泡。"
      }
    },
    {
      "text": "Let guests dip and simmer their own ingredients directly in the pot. Remind them to scoop marrow from cracked bones with chopsticks — it’s the richest part.",
      "textZh": "客人自行涮烫食材。提醒用筷子挑出裂口中的骨髓——最浓香所在。",
      "zhHint": "互动式吃法",
      "stateNote": {
        "visual": "Marrow glistens ivory-white inside split vertebrae.",
        "visualZh": "椎骨裂口中，骨髓呈乳白莹润光泽。",
        "timeRef": "as served",
        "timeRefZh": "随食随取",
        "heat": "medium",
        "signal": "Marrow yields easily when pressed with chopstick tip.",
        "signalZh": "筷尖轻压即软糯流出。"
      }
    }
  ],
  "tips": [
    "Soak dried goji berries (10 g / 1 tbsp) in warm water 10 min — stir into broth 5 min before serving for subtle sweetness.",
    "For extra depth, toast 1 tsp Sichuan peppercorns (3 g) in dry pan until fragrant, then crush and stir in at end.",
    "Leftover broth freezes beautifully — strain, cool, portion, and use within 3 months for noodle soups or braises."
  ],
  "tipsZh": [
    "枸杞10克（1汤匙）温水泡10分钟，起锅前5分钟拌入，添清甜。",
    "增香可选：3克花椒干锅焙香后碾碎，关火前撒入。",
    "剩余高汤滤渣冷却分装冷冻，3个月内可用于煮面或红烧。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/lamb-scorpion-hot-pot.webp"
};
