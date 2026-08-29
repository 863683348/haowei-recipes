import type { Recipe } from "@/lib/types";

/** Hakka Bamboo Tube Rice (Zhu Tong Fan) (竹筒饭) — Seed batch */
export const bamboo_tube_rice: Recipe = {
  "id": "zhu-tong-fan",
  "slug": "bamboo-tube-rice",
  "titleEn": "Hakka Bamboo Tube Rice (Zhu Tong Fan)",
  "titleZh": "竹筒饭",
  "pinyin": "zhú tǒng fàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Meizhou",
  "regionZh": "梅州",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version replaces fresh bamboo tubes with reusable stainless steel bamboo-shaped molds lined with parchment — retains aroma while eliminating food-safety concerns of charred bamboo leaching.",
  "versionNoteZh": "家常版用可重复使用的不锈钢竹筒模具+烘焙纸替代鲜竹筒，既保留竹香又规避炭化竹材析出风险。",
  "tags": [
    "50-min",
    "outdoor",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every summer in Meizhou, my grandfather would split green bamboo stalks, pack them with glutinous rice, dried shiitakes, and cured pork belly, then roast them over open pine embers. He taught me to listen for the hollow ‘thump’ — that meant the rice was tender and the bamboo had released its fragrance into every grain.",
  "storyZh": "每年夏天在梅州，祖父都会劈开青翠竹筒，填入糯米、干香菇和五花腊肉，架在松木炭火上烤。他教我听那声空洞的‘咚’——那是米已软糯、竹香沁入每一粒的信号。",
  "ingredients": [
    {
      "id": "bt-01",
      "nameEn": "glutinous rice",
      "nameZh": "圆糯米",
      "pinyin": "yuán nuò mǐ",
      "amountMetric": "250 g",
      "amountUS": "1 ¼ cups",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak overnight or at least 6 hours; drain well",
      "noteZh": "需隔夜或至少浸泡6小时，彻底沥干"
    },
    {
      "id": "bt-02",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "pinyin": "gān xiāng gū",
      "amountMetric": "30 g",
      "amountUS": "¼ cup, rehydrated & sliced",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in warm water 30 min; reserve 60 ml soaking liquid",
      "noteZh": "温水泡发30分钟；留60毫升泡发水"
    },
    {
      "id": "bt-03",
      "nameEn": "cured pork belly (meat-only, no skin)",
      "nameZh": "腊五花肉（去皮）",
      "pinyin": "là wǔ huā ròu (qù pí)",
      "amountMetric": "100 g",
      "amountUS": "½ cup, diced 1 cm",
      "category": "protein",
      "pantry": "asian",
      "note": "Substitute smoked bacon if unavailable (reduce salt in seasoning)",
      "noteZh": "无货时可用烟熏培根替代（酌减盐量）"
    },
    {
      "id": "bt-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bt-05",
      "nameEn": "scallion greens",
      "nameZh": "小葱绿叶",
      "pinyin": "xiǎo cōng lǜ yè",
      "amountMetric": "20 g",
      "amountUS": "¼ cup, finely chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Soak glutinous rice overnight. Drain thoroughly. Mix with rehydrated shiitakes (sliced), cured pork belly, light soy sauce, and 30 ml reserved mushroom soaking liquid.",
      "textZh": "糯米隔夜浸泡，彻底沥干。与泡发切片的香菇、腊五花肉、生抽及30毫升香菇水混合拌匀。",
      "zhHint": "米必须沥干，防蒸塌",
      "stateNote": {
        "visual": "Rice clings lightly to fingers but no free moisture remains",
        "visualZh": "米粒微黏手指，但无游离水分",
        "timeRef": "overnight soaking",
        "timeRefZh": "隔夜浸泡",
        "signal": "Grains remain distinct, not broken",
        "signalZh": "米粒完整不碎"
      }
    },
    {
      "text": "Pack mixture tightly into two 15 cm stainless steel bamboo molds (or parchment-lined 15 cm × 7 cm loaf pans), pressing down firmly with spoon handle.",
      "textZh": "将混合料紧密填入两个15厘米不锈钢竹筒模具（或铺烘焙纸的15×7厘米吐司模）中，用勺柄压实。",
      "zhHint": "压实防空洞",
      "stateNote": {
        "visual": "Surface is smooth and compact, no air pockets visible",
        "visualZh": "表面平整密实，无可见气孔",
        "timeRef": "2 minutes packing",
        "timeRefZh": "压实约2分钟",
        "signal": "Mixture holds shape when mold inverted briefly",
        "signalZh": "模具短暂倒扣，料不脱落"
      }
    },
    {
      "text": "Steam over boiling water in a large pot fitted with rack. Cover molds with foil; steam 40 minutes, checking water level halfway.",
      "textZh": "置于大蒸锅沸水上，模具覆锡纸，大火蒸40分钟，中途检查水量。",
      "zhHint": "水足火旺保汽足",
      "stateNote": {
        "visual": "Constant thick steam escapes from pot lid seams",
        "visualZh": "锅盖缝隙持续涌出浓白蒸汽",
        "timeRef": "40 minutes",
        "timeRefZh": "40分钟",
        "heat": "high",
        "signal": "Rice grains become translucent and soft to touch",
        "signalZh": "米粒呈半透明状，按压柔软"
      }
    },
    {
      "text": "Carefully remove molds. Unmold onto cutting board. Slice each tube crosswise into 3 thick rounds.",
      "textZh": "小心取出模具，在砧板上脱模。每根竹筒饭横切成3厚片。",
      "zhHint": "稍晾2分钟再脱模",
      "stateNote": {
        "visual": "Rounds hold clean shape with slight sheen",
        "visualZh": "切片轮廓清晰，表面微润有光泽",
        "timeRef": "2 minutes cooling",
        "timeRefZh": "冷却2分钟",
        "signal": "Steam no longer rises from cut surface",
        "signalZh": "切面不再冒热气"
      }
    },
    {
      "text": "Sprinkle generously with scallion greens. Serve warm. Optional: drizzle with ½ tsp toasted sesame oil per slice.",
      "textZh": "撒大量葱绿。趁热上桌。可选：每片淋½茶匙焙香芝麻油。",
      "zhHint": "葱绿最后撒，保鲜香",
      "stateNote": {
        "visual": "Scallions retain bright green color and crisp texture",
        "visualZh": "葱绿鲜亮翠绿，质地爽脆",
        "timeRef": "immediately before serving",
        "timeRefZh": "上桌前即刻",
        "signal": "Aroma of fresh scallion rises distinctly",
        "signalZh": "葱香清新扑鼻"
      }
    }
  ],
  "tips": [
    "If using real bamboo, scrub inner surface with rice vinegar first to neutralize bitterness.",
    "Add 1 star anise pod to steaming water for subtle aromatic depth (remove before serving).",
    "Leftovers reheat best in bamboo steamer — restores moisture and fragrance."
  ],
  "tipsZh": [
    "若用真竹筒，先用米醋搓洗内壁以去除涩味。",
    "蒸锅水中可加1颗八角增香（上桌前捞出）。",
    "剩饭回热首选竹蒸笼——锁水复香效果最佳。"
  ],
  "relatedSlugs": [
    "clay-pot-rice"
  ],
  "image": "/images/recipes/bamboo-tube-rice.webp"
};
