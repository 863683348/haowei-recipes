import type { Recipe } from "@/lib/types";

/** Wife Cake (老婆饼) (老婆饼) — Day batch */
export const wife_cake: Recipe = {
  "id": "wife-cake",
  "slug": "wife-cake",
  "titleEn": "Wife Cake (老婆饼)",
  "titleZh": "老婆饼",
  "pinyin": "lǎo pó bǐng",
  "cuisine": "粤式点心",
  "cuisineEn": "Cantonese Dim Sum",
  "region": "Guangdong (English)",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 8,
  "version": "family",
  "versionNote": "家庭版：冬瓜蓉馅，皮脆馅糯",
  "versionNoteZh": "家庭版：冬瓜蓉馅，皮脆馅糯",
  "tags": [
    "pastry",
    "dessert",
    "cantonese",
    "dim-sum",
    "sweet"
  ],
  "dietary": [
    "none"
  ],
  "story": "Legend says a wife in Guangdong perfected this pastry for her traveling husband. The winter melon filling is sweet, chewy, and surprisingly complex. Despite the name, it's enjoyed by everyone — it's about love, not gender.",
  "storyZh": "传说广东一位妻子为远行丈夫 perfected 这道点心。冬瓜蓉馅甜糯，风味复杂。虽名老婆饼，人人皆爱——这是关于爱的点心。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Low-protein flour (cake flour)",
      "nameZh": "低筋面粉",
      "amountMetric": "150 g",
      "amountUS": "1¼ cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "Winter melon paste (冬瓜蓉)",
      "nameZh": "冬瓜蓉",
      "amountMetric": "200 g",
      "amountUS": "1 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "winter-melon"
    },
    {
      "id": "3",
      "nameEn": "White sugar",
      "nameZh": "白糖",
      "amountMetric": "50 g",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Lard or shortening",
      "nameZh": "猪油或起酥油",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Water",
      "nameZh": "水",
      "amountMetric": "70 ml",
      "amountUS": "¼ cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "White sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "7",
      "nameEn": "Egg yolk (for wash)",
      "nameZh": "蛋黄（刷面）",
      "amountMetric": "1",
      "amountUS": "1",
      "category": "protein",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Make dough: mix flour, lard, water. Knead until smooth. Rest 30 minutes covered.",
      "textZh": "和面：面粉、猪油、水揉匀。盖盖静置30分钟。",
      "stateNote": {
        "visual": "Dough should be soft, like earlobe, not stiff",
        "visualZh": "面团应柔软如耳垂，不硬",
        "signal": "面团光滑不粘手"
      }
    },
    {
      "text": "Prepare filling: if winter melon paste is dry, warm with sugar and 10ml water until spreadable.",
      "textZh": "准备馅心：若冬瓜蓉太干，加糖和10ml水加热至可涂抹。",
      "stateNote": {
        "visual": "Filling should be glossy and hold shape, not runny",
        "visualZh": "馅心应光泽能成型不流动",
        "signal": "馅心顺滑不稀"
      }
    },
    {
      "text": "Divide dough into 8 pieces. Roll each into circle. Place filling, wrap like dumpling, seal well.",
      "textZh": "面团分8份。擀圆，包入馅心，像包饺子收口。",
      "stateNote": {
        "visual": "Seam must be completely sealed — any crack = leaking during baking",
        "visualZh": "收口必须完全密封——有裂缝烤时会漏",
        "signal": "收口捏紧无裂缝"
      }
    },
    {
      "text": "Place seam-side down. Brush with water, press sesame seeds on top. Make 3 shallow slashes on top.",
      "textZh": "收口朝下。刷水沾芝麻。表面划3道浅口。",
      "stateNote": {
        "visual": "Slashes should be shallow — deep cuts will leak filling",
        "visualZh": "刀口应浅——深了会漏馅",
        "signal": "芝麻粘牢"
      }
    },
    {
      "text": "Brush with egg yolk. Bake at 180°C (350°F) for 20-22 minutes until golden.",
      "textZh": "刷蛋黄液。180°C烤20-22分钟至金黄。",
      "stateNote": {
        "visual": "Pastry should puff and turn light golden — dark = burnt sugar",
        "visualZh": "酥皮应膨胀呈浅金黄色——深了会焦",
        "timeRef": "约20-22分钟",
        "heat": "medium",
        "signal": "表面金黄、边缘微起"
      }
    }
  ],
  "tips": [
    "Winter melon paste is available at Asian supermarkets — look for 'dong gua rong'",
    "The 3 slashes let steam escape — don't skip",
    "Egg yolk wash gives the signature golden color — whole egg makes it darker",
    "These are best day-of — they lose crispiness quickly"
  ],
  "tipsZh": [
    "冬瓜蓉在亚洲超市有售——找'dong gua rong'",
    "3道刀口让蒸汽排出——不可省",
    "蛋黄液给标志性的金黄——全蛋会烤深色",
    "当天吃最佳——放久会失脆"
  ],
  "relatedSlugs": [
    "egg-yolk-pastry",
    "peach-cake",
    "sesame-flatbread"
  ],
  "image": "/images/recipes/wife-cake.webp"
};
