import type { Recipe } from "@/lib/types";

/** Lotus Root & Pork Bone Soup (莲藕排骨汤) — Seed batch */
export const lotus_root_pork_bone_soup: Recipe = {
  "id": "lian-ou-pai-gu-tang",
  "slug": "lotus-root-pork-bone-soup",
  "titleEn": "Lotus Root & Pork Bone Soup",
  "titleZh": "莲藕排骨汤",
  "pinyin": "lián ǒu pái gǔ tāng",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Changsha",
  "regionZh": "长沙",
  "difficulty": "easy",
  "timeMin": 120,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses no MSG, slow-simmered for depth—not boiled hard like some restaurant versions that sacrifice clarity for speed.",
  "versionNoteZh": "家常版不加味精，小火慢炖出清甜本味；餐馆版常大火猛煮，汤色浑浊、藕易粉烂。",
  "tags": [
    "slow-cooked",
    "comfort",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Changsha made this every winter solstice—she’d peel lotus roots with a bamboo knife while humming Hunan folk songs, saying the pink-tinged slices meant ‘good fortune blooming’.",
  "storyZh": "我长沙的姑妈每年冬至都做这道汤——她用竹刀削藕，哼着湖南民谣，说藕片泛粉红，是‘福气开花’的吉兆。",
  "ingredients": [
    {
      "id": "lr-01",
      "nameEn": "pork neck bones (with marrow)",
      "nameZh": "猪颈骨（带骨髓）",
      "pinyin": "zhū jǐng gǔ",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for 'neck bones' or 'soup bones'; avoid pre-cut 'riblets'—they lack collagen.",
      "noteZh": "请肉贩提供猪颈骨或煲汤骨；勿用预切肋排块，胶原不足。"
    },
    {
      "id": "lr-02",
      "nameEn": "fresh lotus root",
      "nameZh": "新鲜莲藕",
      "pinyin": "xiān lián ǒu",
      "amountMetric": "300 g",
      "amountUS": "2 cups, sliced 5 mm thick",
      "category": "produce",
      "pantry": "asian",
      "note": "Choose firm, unblemished roots with tight pores; avoid brown or hollow centers. Sub: frozen lotus root slices (thawed, rinsed).",
      "noteZh": "选表皮紧实、无褐斑者；孔隙细密为佳。替代：冷冻藕片（解冻后冲洗）。"
    },
    {
      "id": "lr-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "3 tbsp, smashed",
      "category": "spice",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "lr-04",
      "nameEn": "dried goji berries",
      "nameZh": "枸杞子",
      "pinyin": "gǒu qǐ zǐ",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds subtle sweetness and color; optional but traditional in Hunan home kitchens.",
      "noteZh": "增微甜与色泽；湘人家厨常用，可省略但不推荐。"
    }
  ],
  "steps": [
    {
      "text": "Rinse pork bones under cold water. Place in a large pot with enough cold water to cover by 5 cm. Bring to a rolling boil over high heat, then immediately reduce to medium-high and skim foam vigorously for 3 minutes.",
      "textZh": "猪骨冷水冲洗。入大锅，加足量冷水没过骨头5厘米。大火烧沸，即转中大火，持续撇浮沫3分钟。",
      "zhHint": "去腥关键步",
      "stateNote": {
        "visual": "Grayish foam rising to surface, water turning slightly cloudy",
        "visualZh": "灰白色浮沫上涌，水微浑",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Foam stops forming and water clears slightly",
        "signalZh": "浮沫停止生成，水稍变清"
      }
    },
    {
      "text": "Drain bones, rinse again under warm water, and return to clean pot. Add fresh cold water (2 L), smashed ginger, and goji berries.",
      "textZh": "捞出骨头，温水再冲一遍，放回干净锅中。加新冷水2升、拍姜、枸杞。",
      "zhHint": "换水去杂味",
      "stateNote": {
        "visual": "Clear water with ginger pieces and floating goji berries",
        "visualZh": "清水见姜块与浮起的枸杞",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Water just begins to shimmer at edges",
        "signalZh": "水边沿初现微纹"
      }
    },
    {
      "text": "Bring to a gentle simmer (small bubbles barely breaking surface), then cover partially and cook on low heat for 90 minutes.",
      "textZh": "烧至微沸（水面仅冒小泡），盖半盖，小火炖90分钟。",
      "zhHint": "文火出清汤",
      "stateNote": {
        "visual": "Tiny bubbles rising steadily at pot’s base, no vigorous bubbling",
        "visualZh": "锅底持续升起细小气泡，无翻滚",
        "timeRef": "90 minutes",
        "timeRefZh": "90 分钟",
        "heat": "low",
        "signal": "Aromas of ginger and pork deepen, broth remains pale gold",
        "signalZh": "姜与肉香渐浓，汤色呈淡金"
      }
    },
    {
      "text": "Add lotus root slices. Simmer uncovered for 30 more minutes until roots are tender but still hold shape—test with chopstick: slight resistance, not mushy.",
      "textZh": "下藕片，敞盖再炖30分钟，至藕熟而不烂——筷子轻戳有微韧感，非软烂。",
      "zhHint": "后下藕保脆润",
      "stateNote": {
        "visual": "Lotus slices translucent at edges, pale ivory center",
        "visualZh": "藕片边缘微透亮，中心呈淡象牙色",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "medium-low",
        "signal": "Slices yield gently to chopstick pressure but retain structure",
        "signalZh": "筷子轻压微韧，不散形"
      }
    },
    {
      "text": "Season lightly with salt only—no soy sauce or wine. Ladle hot into bowls, ensuring each serving gets both bone,藕, and broth.",
      "textZh": "仅用盐调味（不加酱油或料酒）。趁热盛碗，确保每份含骨、藕、汤。",
      "zhHint": "本味至上",
      "stateNote": {
        "visual": "Clear amber broth with floating lotus slices and glossy bone marrow",
        "visualZh": "清透琥珀色汤，藕片浮游，骨髓油亮",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "high",
        "signal": "Steam rises steadily, aroma clean and earthy",
        "signalZh": "热气匀升，气息清冽带土香"
      }
    }
  ],
  "tips": [
    "Blanching is non-negotiable—it removes blood residue and ensures crystal-clear broth.",
    "Use a clay pot or heavy-bottomed Dutch oven for even heat retention.",
    "Leftovers improve overnight—the collagen-rich broth gels slightly when chilled."
  ],
  "tipsZh": [
    "焯水不可省，去血水才能得清汤。",
    "宜用砂锅或厚底珐琅锅，受热稳、不糊底。",
    "隔夜更佳：胶原析出，冷后微凝如琥珀冻。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/lotus-root-pork-bone-soup.webp"
};
