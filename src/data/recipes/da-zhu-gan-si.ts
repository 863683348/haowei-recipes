import type { Recipe } from "@/lib/types";

/** Grandfather’s Braised Dried Tofu Shreds (大煮干丝) — Seed batch */
export const da_zhu_gan_si: Recipe = {
  "id": "da-zhu-gan-si",
  "slug": "da-zhu-gan-si",
  "titleEn": "Grandfather’s Braised Dried Tofu Shreds",
  "titleZh": "大煮干丝",
  "pinyin": "dà zhǔ gān sī",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu",
  "region": "Yangzhou",
  "regionZh": "扬州",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version skips chicken stock powder and uses real poached chicken breast and shrimp. The tofu is hand-cut into fine shreds—no pre-sliced 'gan si' packages—and blanched twice to remove beany taste.",
  "versionNoteZh": "家常版不用鸡精，用真材实料的鸡胸肉与虾仁；豆腐干全手工切丝，并两次焯水去豆腥。",
  "tags": [
    "soup",
    "protein-rich",
    "classic"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather ran a small teahouse near Slender West Lake. He taught me to cut dried tofu into hair-thin shreds with a cleaver—'If your knife slips, you’re not ready,' he’d say—then simmer them slowly in rich chicken broth with bamboo shoots and shrimp.",
  "storyZh": "祖父在瘦西湖边开小茶馆。他教我用菜刀将豆腐干片成发丝细缕——‘刀滑了，就还没练熟’。再配笋丝、虾仁，用老母鸡汤慢煨。",
  "ingredients": [
    {
      "id": "ds-01",
      "nameEn": "dried tofu sheets (firm, yellow-bean, ~2 mm thick)",
      "nameZh": "方豆腐干（厚约2毫米，淡黄色）",
      "pinyin": "fāng dòu fu gān",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for 'yellow bean dried tofu' or 'Jiangsu-style gan si'; avoid seasoned or smoked varieties",
      "noteZh": "选‘黄豆方干’或‘江苏式豆腐干’；忌五香或熏制款"
    },
    {
      "id": "ds-02",
      "nameEn": "bone-in chicken thigh",
      "nameZh": "带骨鸡腿",
      "pinyin": "dài gǔ jī tuǐ",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute boneless, skinless chicken breast if preferred (reduce simmer time to 25 min)",
      "noteZh": "可换去皮鸡胸肉（炖煮时间减至25分钟）"
    },
    {
      "id": "ds-03",
      "nameEn": "fresh bamboo shoots (sliced thin)",
      "nameZh": "鲜冬笋（切薄片）",
      "pinyin": "xiān dōng sǔn",
      "amountMetric": "150 g",
      "amountUS": "1.5 cups sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute canned bamboo shoots, rinsed well—blanch 2 min first",
      "noteZh": "可用罐装笋片替代，需冲洗并焯水2分钟"
    },
    {
      "id": "ds-04",
      "nameEn": "dried shrimp",
      "nameZh": "海米",
      "pinyin": "hǎi mǐ",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "protein",
      "pantry": "asian",
      "note": "Rinse and soak in warm water 10 min before use",
      "noteZh": "用温水浸泡10分钟，洗净沥干"
    },
    {
      "id": "ds-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Soak dried tofu in cold water 30 minutes. Drain, then cut into 5 cm × 5 cm squares. Stack 3–4 squares and slice lengthwise into 2 mm wide shreds. Rinse shreds under cold water.",
      "textZh": "豆腐干冷水泡30分钟。沥干后切5厘米见方块，叠3–4层，顺长切2毫米细丝。流水冲洗。",
      "zhHint": "泡软再切，防碎裂",
      "stateNote": {
        "visual": "Shreds are uniform, flexible, and separate easily—not clumped or broken",
        "visualZh": "丝条均匀柔韧，根根分明，不黏连不断裂",
        "timeRef": "30 minutes soaking + 10 minutes cutting",
        "timeRefZh": "浸泡30分钟 + 切丝10分钟",
        "signal": "Water runs clear after rinsing",
        "signalZh": "冲洗后水流变清"
      }
    },
    {
      "text": "Bring 1 L water to boil. Blanch tofu shreds 2 minutes, drain, rinse with cold water. Repeat blanching once more.",
      "textZh": "烧开1升水，豆腐丝焯烫2分钟，捞出过凉水。重复焯烫一次。",
      "zhHint": "双焯去豆腥",
      "stateNote": {
        "visual": "Shreds turn ivory-white and feel springy—not mushy or gray",
        "visualZh": "丝色转为乳白，手感弹韧，不软烂泛灰",
        "timeRef": "2 minutes × 2",
        "timeRefZh": "每次2分钟，共两次",
        "heat": "high",
        "signal": "Water returns to full boil within 30 seconds of adding shreds",
        "signalZh": "下丝后30秒内水复滚"
      }
    },
    {
      "text": "In a clean pot, add chicken thigh, 1.2 L cold water, 1 scallion (white part only), and 1 slice ginger. Bring to gentle simmer, skim foam, then cover and cook 40 minutes.",
      "textZh": "净锅加鸡腿、1.2升冷水、葱白段、姜片。煮至微沸，撇浮沫，加盖小火炖40分钟。",
      "zhHint": "冷水下锅，慢出鲜味",
      "stateNote": {
        "visual": "Broth is pale gold with tiny oil droplets; chicken meat pulls away easily from bone",
        "visualZh": "汤色浅金，浮细油星；鸡肉离骨即烂",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "low",
        "signal": "Small bubbles rise steadily from bottom—no rolling boil",
        "signalZh": "锅底持续冒小泡，无翻滚"
      }
    },
    {
      "text": "Strain broth through fine mesh; discard solids. Return broth to pot. Add blanched tofu shreds, bamboo shoots, soaked dried shrimp, light soy sauce, and 1/4 tsp white pepper. Simmer uncovered 12 minutes.",
      "textZh": "滤去鸡骨渣，留清汤回锅。加入豆腐丝、笋片、海米、生抽、白胡椒粉，敞盖小火煨12分钟。",
      "zhHint": "清汤煨丝，忌加盖",
      "stateNote": {
        "visual": "Tofu shreds swell slightly and absorb broth; liquid reduces by ~1/4",
        "visualZh": "豆腐丝微胀吸汁，汤量减少约1/4",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low",
        "signal": "Edges of shreds glisten with broth but no steam rises vigorously",
        "signalZh": "丝边挂汁发亮，无大量蒸汽升腾"
      }
    },
    {
      "text": "Taste and adjust seasoning with a pinch of salt only if needed. Ladle into bowls, garnish with scallion greens and a few drops of sesame oil.",
      "textZh": "尝味，仅必要时补少许盐。盛入碗中，撒葱绿，滴香油。",
      "zhHint": "宁淡勿咸，突出本味",
      "stateNote": {
        "visual": "Broth coats spoon lightly; shreds remain distinct, not tangled",
        "visualZh": "汤汁轻挂勺背；豆腐丝根根清晰，不缠绕",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aroma is clean, savory, and subtly sweet—no raw soy or fishiness",
        "signalZh": "香气清鲜微甜，无生酱或腥气"
      }
    }
  ],
  "tips": [
    "Always use bone-in chicken for depth—skin and marrow enrich the broth naturally.",
    "Cut tofu shreds *before* blanching: warm tofu is too slippery to control.",
    "Dried shrimp must be rinsed thoroughly—residual salt can overpower the delicate balance."
  ],
  "tipsZh": [
    "务必用带骨鸡腿——皮与骨髓自然增鲜提醇。",
    "豆腐丝务必先切后焯：温豆腐太滑，难控刀。",
    "海米须彻底冲洗——残留盐分易破坏清鲜平衡。"
  ],
  "relatedSlugs": [
    "yangzhou-lion-head"
  ],
  "image": "/images/recipes/da-zhu-gan-si.webp"
};
