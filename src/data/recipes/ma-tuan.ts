import type { Recipe } from "@/lib/types";

/** Sesame Glutinous Ball (麻团) (麻团) — Day batch */
export const ma_tuan: Recipe = {
  "id": "ma-tuan",
  "slug": "ma-tuan",
  "titleEn": "Sesame Glutinous Ball (麻团)",
  "titleZh": "麻团",
  "pinyin": "má tuán",
  "cuisine": "粤式点心",
  "cuisineEn": "Cantonese Dim Sum",
  "region": "Guangdong (English)",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 10,
  "version": "family",
  "versionNote": "家庭版：糯米外层芝麻，内包豆沙",
  "versionNoteZh": "家庭版：糯米外层芝麻，内包豆沙",
  "tags": [
    "pastry",
    "dessert",
    "cantonese",
    "fried",
    "festive"
  ],
  "dietary": [
    "none"
  ],
  "story": "麻团 is the Cantonese cousin of Japanese mochi — glutinous rice dough rolled in sesame, deep-fried until puffed. The hollow center is filled with sweet red bean paste. A dim sum restaurant staple.",
  "storyZh": "麻团是日本大福的粤语表亲——糯米团裹芝麻，炸至膨胀。空心内包红豆沙。茶楼必备。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Glutinous rice flour",
      "nameZh": "糯米粉",
      "amountMetric": "200 g",
      "amountUS": "1¾ cups",
      "category": "staple",
      "pantry": "asian",
      "termKey": "glutinous-rice"
    },
    {
      "id": "2",
      "nameEn": "Warm water",
      "nameZh": "温水",
      "amountMetric": "180 ml",
      "amountUS": "¾ cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "White sugar",
      "nameZh": "白糖",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Red bean paste",
      "nameZh": "红豆沙",
      "amountMetric": "150 g",
      "amountUS": "⅔ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "red-bean-paste"
    },
    {
      "id": "5",
      "nameEn": "White sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "80 g",
      "amountUS": "⅓ cup",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "Vegetable oil (for frying)",
      "nameZh": "植物油（炸用）",
      "amountMetric": "1 liter",
      "amountUS": "4 cups",
      "category": "asian-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Make dough: mix糯米粉, sugar, warm water. Knead until smooth and elastic. Rest 20 minutes.",
      "textZh": "和面：糯米粉、糖、温水揉匀至光滑有弹性。静置20分钟。",
      "stateNote": {
        "visual": "Dough should be soft, stretchy, like mochi — not crumbly",
        "visualZh": "面团应柔软有延展性，如麻糬——不碎",
        "signal": "面团光滑有弹性"
      }
    },
    {
      "text": "Divide dough into 10 pieces (35g each). Form into balls.",
      "textZh": "面团分10份（每份35g）。滚圆。",
      "stateNote": {
        "visual": "Balls should be smooth, no cracks",
        "visualZh": "球应光滑无裂纹",
        "signal": "球体紧实"
      }
    },
    {
      "text": "Flatten each ball, place 15g red bean paste in center, wrap and seal.",
      "textZh": "每球压扁，包入15g红豆沙，收口密封。",
      "stateNote": {
        "visual": "Seam must be fully closed — any gap = paste leaks during frying",
        "visualZh": "收口必须完全封闭——有缝隙炸时会漏",
        "signal": "收口捏紧无裂缝"
      }
    },
    {
      "text": "Roll each ball in water, then coat thoroughly in sesame seeds.",
      "textZh": "每球蘸水，滚满芝麻。",
      "stateNote": {
        "visual": "Sesame should cover 100% of surface — gaps look uneven",
        "visualZh": "芝麻应覆盖100%表面——有空隙不匀",
        "signal": "芝麻均匀覆盖"
      }
    },
    {
      "text": "Heat oil to 150°C (300°F). Fry balls, pressing gently, for 8-10 minutes until puffed and golden.",
      "textZh": "油150°C。炸球，轻压，8-10分钟至膨胀金黄。",
      "stateNote": {
        "visual": "Balls should double in size and float — pressing helps even puffing",
        "visualZh": "球应膨胀两倍并浮起——轻压助均匀膨胀",
        "timeRef": "约8-10分钟",
        "heat": "medium",
        "signal": "膨胀浮起、金黄"
      }
    },
    {
      "text": "Drain on paper towel. Serve warm.",
      "textZh": "厨房纸吸油。趁热食用。",
      "stateNote": {
        "visual": "Finished麻团 should be golden, puffed, with sesame adhering well",
        "visualZh": "成品应金黄膨胀，芝麻粘牢",
        "signal": "外壳酥脆内里软糯"
      }
    }
  ],
  "tips": [
    "Oil at 150°C — too hot and sesame burns before interior cooks",
    "Gently pressing with slotted spoon helps even puffing",
    "The hollow center is characteristic — don't worry if it collapses slightly",
    "Best fresh — overnight麻团 lose their puff"
  ],
  "tipsZh": [
    "油150°C——太热芝麻先焦里面未熟",
    "漏勺轻压帮助均匀膨胀",
    "空心是特征——微塌不必担心",
    "新鲜最佳——隔夜失 puff"
  ],
  "relatedSlugs": [
    "kai-kou-xiao",
    "egg-yolk-pastry",
    "wife-cake"
  ],
  "image": "/images/recipes/ma-tuan.webp"
};
