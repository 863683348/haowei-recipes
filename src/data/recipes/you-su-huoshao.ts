import type { Recipe } from "@/lib/types";

/** Sesame Oil Cracker (油酥火烧) (油酥火烧) — Day batch */
export const you_su_huoshao: Recipe = {
  "id": "you-su-huoshao",
  "slug": "you-su-huoshao",
  "titleEn": "Sesame Oil Cracker (油酥火烧)",
  "titleZh": "油酥火烧",
  "pinyin": "yóu sū huǒ shāo",
  "cuisine": "北方家常菜",
  "cuisineEn": "Northern Chinese Home Cooking",
  "region": "Hebei (English)",
  "regionZh": "河北",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版：油酥多层，酥脆掉渣",
  "versionNoteZh": "家庭版：油酥多层，酥脆掉渣",
  "tags": [
    "pastry",
    "snack",
    "baking",
    "savory",
    "crispy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Huoshao is Hebei's answer to the French baguette — everyday bread that's crispy outside, chewy inside. The oil paste (油酥) creates hundreds of paper-thin layers. My father's morning huoshao was dipped in congee, never fried.",
  "storyZh": "火烧是河北人的法棍——外脆内韧的日常主食。油酥创造数百层薄如纸的酥层。父亲早晨的火烧配粥，从不油炸。",
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
      "nameEn": "Vegetable oil",
      "nameZh": "植物油",
      "amountMetric": "60 g",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Warm water",
      "nameZh": "温水",
      "amountMetric": "160 ml",
      "amountUS": "⅔ cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Salt",
      "nameZh": "盐",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "White sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "25 g",
      "amountUS": "2½ tbsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "Flour (for oil paste)",
      "nameZh": "面粉（油酥用）",
      "amountMetric": "60 g",
      "amountUS": "5 tbsp",
      "category": "staple",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Make dough: mix flour, salt, 30ml oil and warm water. Knead 8 minutes. Rest 25 minutes covered.",
      "textZh": "和面：面粉、盐、30ml油、温水揉8分钟。盖盖静置25分钟。",
      "stateNote": {
        "visual": "Dough should be smooth and spring back when poked",
        "visualZh": "面团应光滑按压回弹",
        "signal": "面团光滑有弹性"
      }
    },
    {
      "text": "Make oil paste: mix 60g flour with 30ml hot oil until smooth paste forms.",
      "textZh": "制作油酥：60g面粉+30ml热油搅成顺滑糊状。",
      "stateNote": {
        "visual": "Paste should be thick but spreadable, like thick cream",
        "visualZh": "油酥应厚但可涂抹，如浓奶油",
        "signal": "油酥顺滑无粉粒"
      }
    },
    {
      "text": "Roll dough into large rectangle (40x30cm). Spread oil paste, leaving 2cm border.",
      "textZh": "面团擀成大长方形（40x30cm），涂抹油酥，留2cm边框。",
      "stateNote": {
        "visual": "Oil paste should be even, no gaps showing flour",
        "visualZh": "油酥应均匀无露白",
        "signal": "油酥层完整"
      }
    },
    {
      "text": "Cut into 3 long strips. Stack strips, press down with palm. Cut into 4 pieces.",
      "textZh": "切3长条。叠起，用手掌压。切4份。",
      "stateNote": {
        "visual": "Stack should be neat, not sliding",
        "visualZh": "叠层应整齐不滑动",
        "signal": "切面层次可见"
      }
    },
    {
      "text": "Stretch each piece, coil, flatten. Brush water, coat sesame. Bake at 200°C for 20 minutes.",
      "textZh": "每份拉长，盘起，压扁。刷水沾芝麻。200°C烤20分钟。",
      "stateNote": {
        "visual": "Pastry should puff and layers should separate slightly",
        "visualZh": "酥皮应膨胀，层间微分离",
        "timeRef": "约20分钟",
        "heat": "high",
        "signal": "敲底清脆空响"
      }
    }
  ],
  "tips": [
    "Hot oil for paste activates the flour's starch for better layering",
    "Don't skip the resting — under-rested dough shrinks and tears",
    "For extra crispiness, brush with oil after baking while still hot",
    "Store in paper bag, not plastic — plastic makes them soggy"
  ],
  "tipsZh": [
    "热油做油酥能激活面粉淀粉，层次更好",
    "别跳过静置——静置不足会回缩开裂",
    "烤后趁热刷油更脆",
    "用纸袋保存，塑料袋会返潮"
  ],
  "relatedSlugs": [
    "sesame-flatbread",
    "scallion-flatbread",
    "egg-yolk-pastry"
  ],
  "image": "/images/recipes/you-su-huoshao.webp"
};
