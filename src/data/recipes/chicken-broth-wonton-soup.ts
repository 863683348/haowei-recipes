import type { Recipe } from "@/lib/types";

/** Chicken Broth Wonton Soup (鸡汤小馄饨) — Seed batch */
export const chicken_broth_wonton_soup: Recipe = {
  "id": "ji-tang-xiao-hun-tun",
  "slug": "chicken-broth-wonton-soup",
  "titleEn": "Chicken Broth Wonton Soup",
  "titleZh": "鸡汤小馄饨",
  "pinyin": "jī tāng xiǎo hún tún",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses hand-folded small wontons and clear, gently simmered broth—no MSG, no pre-made stock cubes.",
  "versionNoteZh": "家庭版使用手工包的小馄饨，清汤慢炖，不加味精、不使用市售高汤块。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Yangpu District, Shanghai, made this every rainy winter morning. She’d wake at 5 a.m. to grind pork by hand with ginger and scallion, saying ‘small wrappers hold big warmth’—a phrase I still whisper while folding.",
  "storyZh": "我上海杨浦区的外婆每逢冬日雨晨必做这道汤。她五点起床手剁猪肉，拌入姜葱，说‘小皮子裹大暖意’——这句话我至今包馄饨时还会轻声念。",
  "ingredients": [
    {
      "id": "ht-01",
      "nameEn": "skinless boneless chicken thighs",
      "nameZh": "鸡腿肉（去皮去骨）",
      "pinyin": "jī tuǐ ròu",
      "amountMetric": "500 g",
      "amountUS": "1.25 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Use thighs for richer broth; breast dries out.",
      "noteZh": "推荐用鸡腿肉，汤更醇厚；鸡胸易柴。"
    },
    {
      "id": "ht-02",
      "nameEn": "wonton wrappers (square, ~8 cm)",
      "nameZh": "小馄饨皮（方形，约8厘米）",
      "pinyin": "xiǎo hún tún pí",
      "amountMetric": "30 pieces",
      "amountUS": "30 pieces",
      "category": "staple",
      "pantry": "asian",
      "note": "Look for 'fresh wonton skins' in refrigerated section; substitute round dumpling wrappers if needed—cut into squares.",
      "noteZh": "冷藏柜找‘鲜馄饨皮’；若只有圆皮，可剪成方块替代。"
    },
    {
      "id": "ht-03",
      "nameEn": "ground pork (lean 70%)",
      "nameZh": "猪绞肉（瘦7肥3）",
      "pinyin": "zhū jiǎo ròu",
      "amountMetric": "200 g",
      "amountUS": "¾ cup (loosely packed)",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for freshly ground; avoid pre-seasoned meat.",
      "noteZh": "请肉铺现绞；勿用已调味肉末。"
    },
    {
      "id": "ht-04",
      "nameEn": "fresh ginger",
      "nameZh": "鲜姜",
      "pinyin": "xiān jiāng",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ht-05",
      "nameEn": "scallions (green and white parts)",
      "nameZh": "小葱（葱白+葱绿）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup finely chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ht-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken thighs under cold water; place in a pot with 1.8 L cold water. Bring to a gentle boil over high heat, then immediately reduce to low and skim off grayish foam for 2 minutes.",
      "textZh": "鸡腿肉冷水冲洗，放入锅中加1.8升冷水。大火烧开后立刻转小火，撇去浮沫2分钟。",
      "zhHint": "去腥关键步骤",
      "stateNote": {
        "visual": "Surface shows fine gray foam; liquid remains pale and clear beneath.",
        "visualZh": "水面浮起细灰沫，汤底仍呈淡色清澈状。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Foam stops rising rapidly; broth smells clean, not metallic.",
        "signalZh": "浮沫不再大量涌出；汤味清新无铁腥气。"
      }
    },
    {
      "text": "Add 10 g sliced ginger and 2 scallion whites to the pot. Simmer uncovered for 40 minutes on low heat. Strain broth through a fine-mesh sieve into a clean bowl; reserve cooked chicken.",
      "textZh": "加入10克姜片和2根葱白，小火不盖盖炖40分钟。用细网筛滤出清汤，鸡肉另放。",
      "zhHint": "保留原汁原味",
      "stateNote": {
        "visual": "Broth is pale gold and translucent, with no oil droplets on surface.",
        "visualZh": "汤色浅金透亮，表面无油星。",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "low",
        "signal": "Gentle bubbles barely break surface every 3–4 seconds.",
        "signalZh": "每3–4秒仅微泡破面。"
      }
    },
    {
      "text": "Finely shred reserved chicken; mix with ground pork, remaining grated ginger, chopped scallions, light soy sauce, and ½ tsp white pepper. Stir vigorously in one direction for 2 minutes until sticky and cohesive.",
      "textZh": "将煮熟鸡肉撕成细丝，与猪肉末、剩余姜蓉、葱末、生抽、½茶匙白胡椒粉混合，顺一个方向搅打2分钟至粘稠上劲。",
      "zhHint": "上劲是馅料弹牙的关键",
      "stateNote": {
        "visual": "Mixture clings to chopsticks when lifted; glossy and slightly tacky.",
        "visualZh": "馅料能挂住筷子；泛光泽且微黏手。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Resists falling off chopsticks when lifted 15 cm.",
        "signalZh": "筷子离碗15厘米提起，馅料不脱落。"
      }
    },
    {
      "text": "Place 1 tsp filling in center of each wrapper; fold corners to center like a gift box, pressing edges to seal tightly. Repeat until all 30 wrappers are filled.",
      "textZh": "每张皮中央放1茶匙馅，四角向中心折叠如礼盒状，边缘捏紧封口。重复至30张包完。",
      "zhHint": "小馄饨要封严防漏",
      "tip": "Keep wrappers covered with damp cloth to prevent drying.",
      "tipZh": "用湿布盖住未用的馄饨皮，防干裂。"
    },
    {
      "text": "Bring reserved broth back to a gentle simmer. Drop wontons in one at a time; cook 3–4 minutes until wrappers turn translucent and float. Serve hot, garnished with scallion greens.",
      "textZh": "将滤好的清汤回锅微沸，逐个下入馄饨；煮3–4分钟至皮变透明、浮起即熟。趁热盛碗，撒葱绿。",
      "zhHint": "浮起即熟，勿久煮",
      "stateNote": {
        "visual": "Wonton skins become glassy; filling is no longer pink inside.",
        "visualZh": "馄饨皮呈玻璃状；馅心无粉红色。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium-low",
        "signal": "All wontons bob steadily at surface.",
        "signalZh": "所有馄饨在水面匀速轻浮。"
      }
    }
  ],
  "tips": [
    "Use a bamboo steamer rack to hold wontons before cooking—they won’t stick.",
    "For clearer broth, chill strained soup overnight; skim solidified fat from top before reheating.",
    "Freeze uncooked wontons on parchment-lined tray, then bag—they cook straight from frozen."
  ],
  "tipsZh": [
    "煮前将包好的馄饨平铺竹蒸架上，不粘连。",
    "隔夜冷藏滤好的汤，凝固浮油可轻松刮除，汤更清。",
    "生馄饨单层铺烘焙纸冷冻定型，再装袋；可直接下锅煮。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/chicken-broth-wonton-soup.webp"
};
