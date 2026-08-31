import type { Recipe } from "@/lib/types";

/** Sesame Flatbread (芝麻烧饼) (芝麻烧饼) — Day batch */
export const sesame_flatbread: Recipe = {
  "id": "sesame-flatbread",
  "slug": "sesame-flatbread",
  "titleEn": "Sesame Flatbread (芝麻烧饼)",
  "titleZh": "芝麻烧饼",
  "pinyin": "zhī ma shāo bǐng",
  "cuisine": "北方家常菜",
  "cuisineEn": "Northern Chinese Home Cooking",
  "region": "Beijing (English)",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭快手版：用现成油酥简化操作，适合周末制作",
  "versionNoteZh": "家庭快手版：用现成油酥简化操作，适合周末制作",
  "tags": [
    "pastry",
    "breakfast",
    "snack",
    "baking",
    "chinese-bakery"
  ],
  "dietary": [
    "none"
  ],
  "story": "Sesame flatbread is a beloved Northern Chinese street food, crisp on the outside and soft inside. My grandmother used to make these every Sunday morning, the kitchen filling with the nutty aroma of toasted sesame. The secret is in the lamination — folding the dough multiple times creates thousands of flaky layers.",
  "storyZh": "芝麻烧饼是北方人最爱的街头小吃，外酥里软。祖母每个周日清晨都会做，厨房里满是烤芝麻的坚果香气。秘诀在于开酥——多次折叠面团能形成数千层酥皮。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "All-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "250 g",
      "amountUS": "2 cups",
      "category": "staple",
      "pantry": "local",
      "termKey": "flour-types"
    },
    {
      "id": "2",
      "nameEn": "White sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "30 g",
      "amountUS": "3 tbsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "sesame"
    },
    {
      "id": "3",
      "nameEn": "Lard or vegetable oil",
      "nameZh": "猪油或植物油",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Warm water",
      "nameZh": "温水",
      "amountMetric": "130 ml",
      "amountUS": "½ cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Salt",
      "nameZh": "盐",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "Dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Make the dough: mix flour and salt, add lard and warm water. Knead until smooth (about 8 minutes). Cover and rest for 20 minutes.",
      "textZh": "和面：将面粉和盐混合，加入猪油和温水，揉至光滑（约8分钟）。盖上盖静置20分钟。",
      "stateNote": {
        "visual": "Dough should be soft and slightly tacky, like an earlobe",
        "visualZh": "面团应柔软微粘，如耳垂质感",
        "timeRef": "约8分钟揉面",
        "heat": "medium",
        "signal": "面团光滑不粘手"
      }
    },
    {
      "text": "Prepare the oil paste (油酥): mix 40g flour with 40g melted lard into a smooth paste.",
      "textZh": "制作油酥：将40g面粉与40g融化的猪油混合成顺滑糊状。",
      "stateNote": {
        "visual": "Paste should be creamy and spreadable, like peanut butter",
        "visualZh": "糊状应如花生酱般顺滑可涂抹",
        "signal": "油酥无颗粒"
      }
    },
    {
      "text": "Roll the dough into a rectangle. Spread oil paste evenly, then roll up tightly like a jelly roll.",
      "textZh": "将面团擀成长方形，均匀涂抹油酥，像卷蛋糕卷一样卷紧。",
      "stateNote": {
        "visual": "Layers should be visible when you cut the roll",
        "visualZh": "切开时应能看到分层",
        "signal": "卷紧不松散"
      }
    },
    {
      "text": "Cut into 4 equal pieces. Take one piece, stretch slightly, then coil into a spiral. Flatten with palm.",
      "textZh": "切成4等份。取一份轻轻拉长，盘成螺旋状，用手掌压扁。",
      "stateNote": {
        "visual": "Spiral layers should be visible on the cut surface",
        "visualZh": "切面应能看到螺旋分层",
        "signal": "压扁后不回缩"
      }
    },
    {
      "text": "Brush top with water, press firmly into sesame seeds. Place seam-side down on baking sheet.",
      "textZh": "表面刷水，正面按入芝麻。芝麻面朝下放在烤盘上。",
      "stateNote": {
        "visual": "Sesame seeds should adhere well, not falling off",
        "visualZh": "芝麻应粘牢不易脱落",
        "signal": "轻拍不掉芝麻"
      }
    },
    {
      "text": "Bake at 200°C (400°F) for 18-20 minutes until golden. Cool 5 minutes before serving.",
      "textZh": "200°C烤18-20分钟至金黄。冷却5分钟食用。",
      "stateNote": {
        "visual": "Bottom should be deep golden brown",
        "visualZh": "底部应呈深金黄色",
        "timeRef": "约18-20分钟",
        "heat": "high",
        "signal": "底部金黄、敲起来有空响"
      }
    }
  ],
  "tips": [
    "Use lard for authentic flakiness — vegetable oil works but layers won't be as crisp",
    "Rest the dough well — under-rested dough will shrink when rolling",
    "Sesame seeds: toast them lightly first for deeper flavor",
    "Eat same day — day-old flatbread reheats well in a dry pan"
  ],
  "tipsZh": [
    "用猪油才能达到正宗酥层——植物油也行，但酥层不够脆",
    "面团要充分静置——静置不足擀时会回缩",
    "芝麻可先用干锅焙香，风味更浓",
    "当天吃最好——隔夜烧饼干锅烘一下也好吃"
  ],
  "relatedSlugs": [
    "red-sugar-flatbread",
    "scallion-flatbread",
    "egg-yolk-pastry",
    "peach-cake"
  ],
  "image": "/images/recipes/sesame-flatbread.webp"
};
