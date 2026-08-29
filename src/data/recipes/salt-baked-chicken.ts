import type { Recipe } from "@/lib/types";

/** Salt-Baked Chicken (盐焗鸡) — Seed batch */
export const salt_baked_chicken: Recipe = {
  "id": "yan-ju-ji",
  "slug": "salt-baked-chicken",
  "titleEn": "Salt-Baked Chicken",
  "titleZh": "盐焗鸡",
  "pinyin": "yán jú jī",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Meizhou",
  "regionZh": "梅州",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Authentic Meizhou home version uses coarse sea salt + star anise + ginger—no commercial salt-bake powder. Chicken is wrapped in parchment *and* foil to trap steam, then buried in salt like a rustic oven.",
  "versionNoteZh": "正宗梅州家常版仅用粗海盐+八角+姜片，不用市售盐焗粉；鸡用烘焙纸+锡纸双层包裹锁汽，再埋入盐中，仿古法‘土窑’。",
  "tags": [
    "oven-bake",
    "impressive",
    "make-ahead"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Meizhou’s Fengshun County baked this in a brick oven behind his tea shop—every Sunday, he’d dig out a 1.2 kg chicken buried under 5 kg of salt, still steaming inside its parchment cocoon. He said, 'The salt isn’t seasoning—it’s insulation. Like my mother’s quilt.'",
  "storyZh": "我梅州丰顺县的叔父在茶铺后砖窑里烤这道菜——每逢周日，他从5公斤粗盐下挖出一只1.2公斤的鸡，仍裹着烘焙纸‘茧’热气腾腾。他说：‘盐不是调味，是保温，像我妈的棉被。’",
  "ingredients": [
    {
      "id": "sb-01",
      "nameEn": "whole chicken (1.2–1.4 kg), giblets removed",
      "nameZh": "整鸡（1.2–1.4公斤），去内脏",
      "pinyin": "zhěng jī (1.2–1.4 gōng jīn), qù nèi zàng",
      "amountMetric": "1200 g",
      "amountUS": "42 oz (1 small whole chicken)",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher to spatchcock if too tall for your oven; otherwise use breast-up position",
      "noteZh": "若鸡过高，可请肉贩开背摊平；否则保持胸朝上"
    },
    {
      "id": "sb-02",
      "nameEn": "coarse sea salt (not iodized)",
      "nameZh": "粗海盐（非加碘）",
      "pinyin": "cū hǎi yán (fēi jiā diǎn)",
      "amountMetric": "2500 g",
      "amountUS": "9 cups (packed)",
      "category": "spice",
      "pantry": "local",
      "note": "Substitute kosher salt if coarse sea salt unavailable",
      "noteZh": "如无粗海盐，可用犹太盐替代"
    },
    {
      "id": "sb-03",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "8 g",
      "amountUS": "4 whole pods",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "sb-04",
      "nameEn": "fresh ginger, sliced 3 mm thick",
      "nameZh": "鲜姜片（3毫米厚）",
      "pinyin": "xiān jiāng piàn (3 háo mǐ hòu)",
      "amountMetric": "40 g",
      "amountUS": "¼ cup slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken inside and out; pat extremely dry. Rub cavity and skin with ginger slices and 2 star anise pods. Tie legs together with kitchen twine.",
      "textZh": "鸡内外冲洗干净，务必彻底擦干；腔内与表皮塞入姜片及2颗八角，用棉绳捆紧鸡腿。",
      "zhHint": "洗净→擦干→塞料→捆腿"
    },
    {
      "text": "Wrap chicken tightly in two layers: first parchment paper, then heavy-duty aluminum foil. Seal seams completely.",
      "textZh": "双层包裹：先包烘焙纸，再覆厚款锡纸，所有接缝严密封死。",
      "zhHint": "纸→箔→封严"
    },
    {
      "text": "In a large Dutch oven or heavy roasting pan, heat 1 kg salt over medium heat 5 minutes until warm (not hot). Add remaining salt, star anise, and ginger slices; stir to combine.",
      "textZh": "厚底锅或烤盘中，中火加热1公斤盐5分钟至微温（勿烫）；加入余盐、八角与姜片拌匀。",
      "zhHint": "预热盐→加料→拌匀",
      "stateNote": {
        "visual": "Salt looks dry and grainy, with no visible moisture or clumping",
        "visualZh": "盐粒干爽分明，无潮润或结块",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "Salt emits a faint mineral scent, not burnt or smoky",
        "signalZh": "散发淡淡矿物香，无焦糊或烟熏味"
      }
    },
    {
      "text": "Bury wrapped chicken completely in warm salt mixture. Cover pan tightly with lid or foil. Bake at 180°C (350°F) for 60 minutes.",
      "textZh": "将双层包裹鸡完全埋入温盐中；盖紧锅盖或锡纸，180°C（350°F）烤60分钟。",
      "zhHint": "埋鸡→盖严→定时"
    },
    {
      "text": "Carefully remove chicken from salt (wear oven mitts). Unwrap—steam will escape. Let rest 10 minutes before carving. Discard salt mixture.",
      "textZh": "戴隔热手套小心取出鸡；拆开包裹（热气会喷出）。静置10分钟再切块。废弃盐混合物。",
      "zhHint": "取鸡→拆包→静置→弃盐"
    }
  ],
  "tips": [
    "Do NOT reuse the salt—it absorbs moisture and poultry odor and cannot be sterilized.",
    "For easier carving, chill unwrapped chicken 20 minutes before slicing—meat firms up but stays juicy.",
    "Serve with plain steamed rice and a simple scallion-ginger dipping sauce (2 tsp light soy + 1 tsp rice vinegar + 1 tsp minced scallion)."
  ],
  "tipsZh": [
    "切勿重复使用盐——已吸水吸味，无法彻底消毒。",
    "想更好切片？拆包后冷藏20分钟再切，肉质变韧但汁水仍在。",
    "配白米饭，蘸料推荐：生抽2茶匙 + 米醋1茶匙 + 葱末1茶匙。"
  ],
  "relatedSlugs": [
    "honey-glazed-roast-chicken",
    "herb-roasted-chicken-thighs"
  ],
  "image": "/images/recipes/salt-baked-chicken.webp"
};
