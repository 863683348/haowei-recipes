import type { Recipe } from "@/lib/types";

/** Salted Pork, Bamboo Shoot, and Fresh Pork Soup (腌笃鲜) — Seed batch */
export const yan_du_xian: Recipe = {
  "id": "yan-du-xian",
  "slug": "yan-du-xian",
  "titleEn": "Salted Pork, Bamboo Shoot, and Fresh Pork Soup",
  "titleZh": "腌笃鲜",
  "pinyin": "yān dǔ xiān",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Suzhou, Jiangsu",
  "regionZh": "江苏苏州",
  "difficulty": "medium",
  "timeMin": 150,
  "servings": 6,
  "version": "family",
  "versionNote": "My grandfather in Suzhou used only spring bamboo shoots he dug himself, cured his own ham in winter, and insisted on ‘fresh pork’ meaning same-day slaughtered. This version respects his ratios: 1:1:1 salted pork : fresh pork : bamboo shoot.",
  "versionNoteZh": "苏州外公只用自己春日挖的鲜笋、冬日自腌的咸肉，且坚持‘鲜肉’必须当日宰杀。本版恪守他定的1:1:1比例：咸肉:鲜肉:鲜笋。",
  "tags": [
    "spring",
    "soup",
    "clear-broth"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every March, my grandfather walked the hills outside Suzhou to dig ‘dragon beard’ bamboo shoots before sunrise. He’d cure pork belly with Sichuan peppercorns and rock sugar for 12 days, then simmer the trio—salted pork, fresh pork, and raw bamboo—with nothing but water and time. ‘The broth must taste like spring rain,’ he’d say.",
  "storyZh": "每年三月，外公天未亮就去苏州郊山挖‘龙须笋’。他用花椒与冰糖腌五花肉12天，再将咸肉、鲜肉、生笋三者同炖，仅加清水与时间。‘汤要喝出春雨的味道’，他常说。",
  "ingredients": [
    {
      "id": "yd-01",
      "nameEn": "salted pork belly (yān ròu), 12-day cured, rind removed, cubed",
      "nameZh": "腌肉（12天 cured，去皮切块）",
      "pinyin": "yān ròu",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for ‘Jiangsu-style salted pork’ or make your own: rub 300g pork belly with 15g coarse salt + 1 tsp Sichuan peppercorns + 10g rock sugar; refrigerate 12 days. Rinse well before use.",
      "noteZh": "找‘苏式腌肉’或自制：300克五花肉抹15克粗盐+1茶匙花椒+10克冰糖，冷藏12天。用前充分冲洗。"
    },
    {
      "id": "yd-02",
      "nameEn": "fresh pork shoulder, cut into 3 cm cubes",
      "nameZh": "鲜猪肩肉，切3厘米方块",
      "pinyin": "xiān zhū jiān ròu",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Must be freshly butchered (not pre-packaged). Ask for ‘blade shoulder’ or ‘chuck shoulder’ with visible marbling.",
      "noteZh": "须当日现宰（非预包装）。请肉铺提供‘肩胛肉’或‘肩颈肉’，带明显雪花纹。"
    },
    {
      "id": "yd-03",
      "nameEn": "fresh bamboo shoots, peeled and sliced 5 mm thick",
      "nameZh": "鲜笋（去壳切5毫米片）",
      "pinyin": "xiān sǔn",
      "amountMetric": "300 g",
      "amountUS": "2.5 cups sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute frozen bamboo shoots (thawed & rinsed) if fresh unavailable. Never use canned—they’re too soft and sweet.",
      "noteZh": "鲜笋缺货时可用冷冻笋（解冻冲洗）。禁用罐头笋——质地过软且带甜味。"
    },
    {
      "id": "yd-04",
      "nameEn": "ginger, smashed",
      "nameZh": "老姜，拍松",
      "pinyin": "lǎo jiāng",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "yd-05",
      "nameEn": "scallions, green parts only, knotted",
      "nameZh": "小葱葱绿，打结",
      "pinyin": "xiǎo cōng cōng lǜ",
      "amountMetric": "40 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse salted and fresh pork separately. Blanch salted pork in cold water 5 minutes; discard water. Blanch fresh pork 2 minutes in fresh cold water; discard water. Rinse both under cold water.",
      "textZh": "咸肉与鲜肉分开冲洗。咸肉冷水下锅焯5分钟，倒掉水；鲜肉另换冷水焯2分钟，倒掉水。两肉均冲净。",
      "zhHint": "咸肉久焯去咸，鲜肉短焯去腥",
      "stateNote": {
        "visual": "Salted pork water remains pale; fresh pork water turns faintly pink",
        "visualZh": "咸肉焯水仍淡；鲜肉焯水微粉",
        "timeRef": "5 min / 2 min",
        "timeRefZh": "咸肉5分钟／鲜肉2分钟",
        "heat": "high",
        "signal": "Fresh pork loses raw red hue",
        "signalZh": "鲜肉褪去生红血色"
      }
    },
    {
      "text": "Place both porks, fresh bamboo shoots, and smashed ginger in large stockpot. Cover with cold water (1.8 L). Bring slowly to first simmer.",
      "textZh": "将两种猪肉、鲜笋、拍姜一同放入大汤锅。加冷水1.8升，缓缓烧至初沸。",
      "zhHint": "冷水同煮，激发本味",
      "stateNote": {
        "visual": "Tiny bubbles form at bottom; surface still glassy",
        "visualZh": "锅底初现小泡；水面仍如镜面",
        "timeRef": "20–25 minutes",
        "timeRefZh": "20–25 分钟",
        "heat": "medium-low",
        "signal": "First bubble breaks surface with soft ‘pop’",
        "signalZh": "首个气泡轻‘噗’一声破面"
      }
    },
    {
      "text": "Skim foam immediately. Reduce heat to lowest setting. Cover partially and simmer gently for 1.5 hours. Do not stir—let layers settle.",
      "textZh": "初沸即撇浮沫。调至最小火，盖半盖，微沸慢炖1.5小时。全程勿搅，静待分层。",
      "zhHint": "静置慢炖，汤色才清",
      "stateNote": {
        "visual": "Broth remains perfectly clear; fat floats as single golden disc",
        "visualZh": "汤色始终澄澈；油脂聚成一枚金圆片",
        "timeRef": "1.5 hours",
        "timeRefZh": "1.5 小时",
        "heat": "low",
        "signal": "Steam rises in thin, almost invisible thread",
        "signalZh": "蒸汽细如游丝，几不可见"
      }
    },
    {
      "text": "Add knotted scallion greens. Simmer uncovered 20 minutes more. Skim any residual oil.",
      "textZh": "加入葱绿结。开盖再炖20分钟。撇净余油。",
      "zhHint": "最后加葱，保清香",
      "stateNote": {
        "visual": "Scallions turn vibrant jade-green; broth gains slight sheen",
        "visualZh": "葱结转为鲜翠玉色；汤面泛微光",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "medium-low",
        "signal": "Aroma shifts from meaty to floral-green",
        "signalZh": "香气由肉香转为清雅青草香"
      }
    },
    {
      "text": "Strain broth through fine-mesh sieve lined with cheesecloth. Discard solids except tender bamboo shoots and pork. Serve broth piping hot with reserved solids in bowls.",
      "textZh": "用垫纱布的细网筛过滤汤汁。弃渣，仅留软嫩笋片与肉块。热汤现盛，配料同上。",
      "zhHint": "滤汤去渣，唯留真味",
      "stateNote": {
        "visual": "Broth pours like liquid topaz—crystal clear, luminous",
        "visualZh": "汤如液态黄玉倾泻——晶莹剔透，光润生辉",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No sediment clouds the broth after 10 seconds",
        "signalZh": "静置10秒后汤中无丝毫浑浊"
      }
    }
  ],
  "tips": [
    "True yanduxian uses *only* these three ingredients—no chicken, no ham hock, no mushrooms.",
    "If using frozen bamboo shoots, blanch them 5 minutes before adding to pot to remove freezer taste.",
    "Serve in warmed porcelain bowls—the broth must arrive at the table steaming, not merely hot."
  ],
  "tipsZh": [
    "正宗腌笃鲜仅用此三味——不加鸡、不加火腿、不加菌菇。",
    "若用冷冻笋，入锅前须先焯5分钟，去冻味。",
    "务必用预热瓷碗盛汤——上桌时须是腾腾热气，而非仅温热。"
  ],
  "relatedSlugs": [
    "meicai-kourou",
    "sun-gan-ya-bao"
  ],
  "image": "/images/recipes/yan-du-xian.webp"
};
