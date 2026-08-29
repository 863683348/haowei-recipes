import type { Recipe } from "@/lib/types";

/** White Cut Chicken (白斩鸡) — Seed batch */
export const white_cut_chicken_2: Recipe = {
  "id": "bai-zhan-ji",
  "slug": "white-cut-chicken-2",
  "titleEn": "White Cut Chicken",
  "titleZh": "白斩鸡",
  "pinyin": "bái zhǎn jī",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses whole chicken pieces (thighs + drumsticks) for easier handling and even cooking — no need for a whole bird or professional cleaver skills.",
  "versionNoteZh": "家常版选用鸡腿和鸡翅中分切，更易操作、受热均匀，无需整鸡与专业刀工。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Guangzhou made this every Lunar New Year’s Eve — she’d poach the chicken in ginger-scallion broth, then plunge it into ice water while humming Cantonese opera. She said the crisp skin and tender meat meant ‘a smooth start to the year’.",
  "storyZh": "我广州的姑妈每年除夕都做这道菜——她用姜葱高汤慢浸鸡肉，再迅速浸入冰水，边做边哼粤剧。她说脆皮嫩肉，寓意‘新年顺遂’。",
  "ingredients": [
    {
      "id": "chicken-01",
      "nameEn": "bone-in, skin-on chicken thighs and drumsticks",
      "nameZh": "带骨带皮鸡腿肉和鸡翅中",
      "pinyin": "dài gǔ dài pí jī tuǐ ròu hé jī chì zhōng",
      "amountMetric": "800 g",
      "amountUS": "2 lbs (about 6 pieces)",
      "category": "protein",
      "pantry": "local",
      "note": "Use thighs + drumsticks for best texture and juiciness; avoid breast-only cuts.",
      "noteZh": "推荐鸡腿+鸡翅中组合，口感最佳；避免纯鸡胸肉。"
    },
    {
      "id": "ginger-02",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "50 g",
      "amountUS": "½ cup, thinly sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Unpeeled is fine — just scrub well.",
      "noteZh": "可不去皮，洗净即可。",
      "termKey": "ginger"
    },
    {
      "id": "scallion-03",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "½ cup, cut into 5-cm lengths",
      "category": "produce",
      "pantry": "local",
      "note": "Use both white and green parts.",
      "noteZh": "葱白葱绿均使用。",
      "termKey": "scallion"
    },
    {
      "id": "water-04",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "2000 ml",
      "amountUS": "8½ cups",
      "category": "staple",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken pieces under cold water. Place in a large pot with ginger slices, scallion lengths, and cold water to cover by 5 cm.",
      "textZh": "鸡块冷水冲洗；放入大锅，加姜片、葱段，注入足量冷水（没过鸡肉5厘米）。",
      "zhHint": "冷水下锅",
      "stateNote": {
        "visual": "Water is clear and cold; chicken fully submerged.",
        "visualZh": "水清冷，鸡肉完全浸没。",
        "timeRef": "0 minutes",
        "timeRefZh": "0 分钟",
        "heat": "high",
        "signal": "First bubbles appear at edges of pot.",
        "signalZh": "锅边初现小气泡。"
      },
      "tip": "Never add salt yet — it tightens muscle fibers and makes meat tough.",
      "tipZh": "切勿此时加盐——会使肉质变柴。"
    },
    {
      "text": "Bring to a gentle simmer over high heat, then immediately reduce to low. Skim off any gray foam that rises to surface.",
      "textZh": "大火烧至微沸，立刻转最小火；撇去浮起的灰白色浮沫。",
      "zhHint": "微沸即转小火",
      "stateNote": {
        "visual": "Tiny bubbles break softly at surface; no rolling boil.",
        "visualZh": "水面泛起细密小泡，无剧烈翻滚。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "low",
        "signal": "Foam stops forming after skimming twice.",
        "signalZh": "撇沫两次后不再新生浮沫。"
      }
    },
    {
      "text": "Cover and poach gently for 25 minutes. Do not stir or lift lid unnecessarily.",
      "textZh": "盖盖，保持微沸状态焖煮25分钟。中途勿开盖、勿搅动。",
      "zhHint": "盖盖焖煮",
      "stateNote": {
        "visual": "Surface barely trembles; steam escapes only from lid edge.",
        "visualZh": "水面仅微微颤动；蒸汽仅从锅盖边缘逸出。",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "low",
        "signal": "Chicken thigh registers 74°C (165°F) when probed deeply.",
        "signalZh": "鸡腿最厚处测温达74°C（165°F）。"
      }
    },
    {
      "text": "Turn off heat. Let chicken rest in hot liquid, covered, for 15 minutes.",
      "textZh": "关火，加盖静置15分钟，让余热均匀渗透。",
      "zhHint": "关火焖浸",
      "stateNote": {
        "visual": "Liquid remains steaming but not bubbling.",
        "visualZh": "汤面仍冒热气但无气泡。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Skin begins to tighten and turn translucent.",
        "signalZh": "鸡皮开始收紧、略呈半透明。"
      }
    },
    {
      "text": "Carefully remove chicken and submerge immediately into a large bowl of ice water for 10 minutes. Drain and pat dry thoroughly.",
      "textZh": "小心捞出鸡肉，立刻浸入满盆冰水，浸泡10分钟。取出沥干，用厨房纸彻底拍干。",
      "zhHint": "冰水激冷",
      "stateNote": {
        "visual": "Skin turns glossy and taut; flesh feels firm but yielding.",
        "visualZh": "鸡皮光亮紧绷；肉质坚实而柔韧。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Skin makes a light 'snap' sound when gently tapped.",
        "signalZh": "轻叩鸡皮发出清脆‘啪’声。"
      }
    }
  ],
  "tips": [
    "For authentic texture, never skip the ice bath — it locks in juices and firms the skin.",
    "Serve chilled or at cool room temperature — never warm.",
    "Pair with ginger-scallion oil: mix 2 tbsp light soy sauce, 1 tsp sesame oil, 1 tbsp finely minced ginger & scallion."
  ],
  "tipsZh": [
    "冰水浸泡不可省略——锁住汁水、紧致鸡皮，方得正宗口感。",
    "宜冷食或室温食用，切忌加热上桌。",
    "搭配姜葱油：2 tbsp 生抽 + 1 tsp 芝麻油 + 1 tbsp 姜末葱末拌匀。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/white-cut-chicken-2.webp"
};
