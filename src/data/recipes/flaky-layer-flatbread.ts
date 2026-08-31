import type { Recipe } from "@/lib/types";

/** Flaky Layer Pastry (酥皮烧饼) (酥皮烧饼) — Day batch */
export const flaky_layer_flatbread: Recipe = {
  "id": "flaky-layer-flatbread",
  "slug": "flaky-layer-flatbread",
  "titleEn": "Flaky Layer Pastry (酥皮烧饼)",
  "titleZh": "酥皮烧饼",
  "pinyin": "sū pí shāo bǐng",
  "cuisine": "江浙家常菜",
  "cuisineEn": "Jiangsu-Zhejiang Home Cooking",
  "region": "Jiangsu (English)",
  "regionZh": "江苏",
  "difficulty": "hard",
  "timeMin": 60,
  "servings": 6,
  "version": "family",
  "versionNote": "家庭酥皮版：多次折叠产生数百层酥皮",
  "versionNoteZh": "家庭酥皮版：多次折叠产生数百层酥皮",
  "tags": [
    "pastry",
    "breakfast",
    "snack",
    "baking",
    "laminated"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the technique that impressed my mother-in-law — a pastry so flaky it crumbles into golden shards. The multiple-fold method comes from French puff pastry but uses Chinese lard and technique. Each bite releases a cloud of layers.",
  "storyZh": "这道菜让岳母印象深刻——酥皮薄如蝉翼，咬下即碎成金片。多次折叠技法源自法式千层酥，但用中式猪油。每口都是层层面粉与油脂的交响。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "All-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "300 g",
      "amountUS": "2½ cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "Lard (for dough)",
      "nameZh": "猪油（和面用）",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Lard (for paste)",
      "nameZh": "猪油（油酥用）",
      "amountMetric": "150 g",
      "amountUS": "⅔ cup",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "All-purpose flour (for paste)",
      "nameZh": "面粉（油酥用）",
      "amountMetric": "150 g",
      "amountUS": "1¼ cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Warm water",
      "nameZh": "温水",
      "amountMetric": "140 ml",
      "amountUS": "½ cup + 1 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "White sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "30 g",
      "amountUS": "3 tbsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "7",
      "nameEn": "Salt",
      "nameZh": "盐",
      "amountMetric": "4 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Make dough: combine flour, salt, 30g lard and warm water. Knead 10 minutes until very smooth. Rest covered 30 minutes.",
      "textZh": "和面：面粉、盐、30g猪油、温水揉10分钟至极光滑。盖盖静置30分钟。",
      "stateNote": {
        "visual": "Dough should pass the 'windowpane test' — stretch thin without tearing",
        "visualZh": "面团应能通过薄透测试——拉薄不破",
        "signal": "面团光滑如橡皮"
      }
    },
    {
      "text": "Make oil paste: mix 150g softened lard with 150g flour until smooth. Should be plasticine-like.",
      "textZh": "制作油酥：150g软化猪油+150g面粉搅匀，呈橡皮泥状。",
      "stateNote": {
        "visual": "Paste should be smooth and hold shape when squeezed",
        "visualZh": "油酥应顺滑握之成团",
        "signal": "油酥不粘手"
      }
    },
    {
      "text": "Roll dough into large rectangle (30x20cm). Spread oil paste evenly, leaving 1cm border.",
      "textZh": "面团擀成大长方形（30x20cm），均匀涂抹油酥，留1cm边框。",
      "stateNote": {
        "visual": "Oil paste layer should be uniform, no bare flour spots",
        "visualZh": "油酥层应均匀无露白",
        "signal": "油酥覆盖完整"
      }
    },
    {
      "text": "Fold like letter: left third over center, right third over. Roll again, fold again. Repeat 3 times total.",
      "textZh": "三折法：左边1/3折向中心，右边1/3盖上。再擀开，再折。共重复3次。",
      "stateNote": {
        "visual": "After each fold, dough should be cool — if warm, chill 10 minutes",
        "visualZh": "每次折叠后面团应凉爽——若发热需冷藏10分钟",
        "signal": "层次分明不混粘"
      }
    },
    {
      "text": "Final roll into 30x20cm rectangle. Cut into 6 squares. Brush with water, press sesame on top.",
      "textZh": "最后擀成30x20cm长方形，切6块。刷水沾芝麻。",
      "stateNote": {
        "visual": "Cut edge should show clear layers — if blurred, folds were uneven",
        "visualZh": "切面应见清晰层次——若模糊说明折叠不均",
        "signal": "切面层次清晰"
      }
    },
    {
      "text": "Bake at 190°C (375°F) for 22-25 minutes. Rotate halfway. Cool on rack 5 minutes.",
      "textZh": "190°C烤22-25分钟，中途转盘。架上冷却5分钟。",
      "stateNote": {
        "visual": "Pastry should puff significantly and turn golden amber",
        "visualZh": "酥皮应大幅膨胀呈金琥珀色",
        "timeRef": "约22-25分钟",
        "heat": "medium-high",
        "signal": "敲底声音清脆如空鼓"
      }
    }
  ],
  "tips": [
    "Keep everything cold — warm lard makes heavy pastry",
    "The 3-fold method creates 3^3 = 27 layers minimum; more folds = more layers",
    "If dough springs back, rest it 5 more minutes — gluten needs to relax",
    "These freeze well — reheat straight from freezer at 180°C for 10 minutes"
  ],
  "tipsZh": [
    "保持低温——暖猪油会让酥皮沉重",
    "三折法产生至少27层；折叠越多层数越多",
    "面团回缩就再静置5分钟——面筋需要放松",
    "可冷冻保存——从冷冻直接180°C烤10分钟"
  ],
  "relatedSlugs": [
    "sesame-flatbread",
    "red-sugar-flatbread",
    "egg-yolk-pastry",
    "peach-cake"
  ],
  "image": "/images/recipes/flaky-layer-flatbread.webp"
};
