import type { Recipe } from "@/lib/types";

/** Garlic-Mashed Pork Belly Slices (蒜泥白肉) — Seed batch */
export const suan_ni_bai_rou: Recipe = {
  "id": "suan-ni-bai-rou",
  "slug": "suan-ni-bai-rou",
  "titleEn": "Garlic-Mashed Pork Belly Slices",
  "titleZh": "蒜泥白肉",
  "pinyin": "suàn ní bái ròu",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Leshan",
  "regionZh": "乐山",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses skin-on pork belly boiled plain — no five-spice or star anise — then chilled and sliced. The garlic paste is pounded fresh, not minced, for true pungent depth.",
  "versionNoteZh": "家常版用带皮五花肉清水煮熟，不加五香、八角；冷却切片。蒜泥必须现捣，非刀剁，方得辛香醇厚。",
  "tags": [
    "30-min",
    "weeknight",
    "garlicky"
  ],
  "dietary": [
    "none"
  ],
  "story": "My great-aunt in Leshan’s Wuyue Village made this every Lunar New Year Eve. She’d pound garlic in a stone mortar with a pinch of salt until it became a creamy, sticky paste — ‘like river mud clinging to your fingers.’ She forbade garlic press use: ‘It bruises the cells, not releases the soul.’",
  "storyZh": "我乐山五通桥村的姑婆每年除夕必做这道菜。她用石臼加盐捶蒜，直至成绵密黏稠糊——‘像河泥沾满手指’。她严禁用压蒜器：‘那伤的是细胞，不是释放灵魂。’",
  "ingredients": [
    {
      "id": "sr-01",
      "nameEn": "pork belly with skin (skin scored)",
      "nameZh": "带皮五花肉（猪皮划刀）",
      "pinyin": "dài pí wǔ huā ròu",
      "amountMetric": "500 g",
      "amountUS": "17.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Choose belly with even fat/muscle layers (1:1 ratio). Score skin deeply in 1-cm grid.",
      "noteZh": "选肥瘦层均匀（1:1）者；猪皮深划1厘米方格。"
    },
    {
      "id": "sr-02",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "40 g",
      "amountUS": "1/2 cup minced (but will be pounded)",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sr-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1 tbsp + 2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sr-04",
      "nameEn": "chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "sr-05",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Place pork belly in a large pot. Cover with cold water. Bring to boil over high heat, then reduce to medium-low and simmer uncovered for 40 minutes. Skim foam regularly. Meat is done when a chopstick pierces the fattiest part with no resistance.",
      "textZh": "五花肉入大锅，冷水没过。大火烧开后转中低火敞盖炖40分钟，勤撇浮沫。竹筷可无阻刺入最肥处即熟。",
      "zhHint": "清水慢炖",
      "stateNote": {
        "visual": "Fat layer turns opaque white; skin blisters slightly at scored lines.",
        "visualZh": "肥肉层转为乳白；猪皮划痕处微起泡。",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "medium-low",
        "signal": "Surface bubbles steadily but does not roar.",
        "signalZh": "汤面持续微泡，不翻滚。"
      }
    },
    {
      "text": "Remove from heat. Transfer belly to a wire rack. Cool completely at room temperature (about 20 minutes), then refrigerate uncovered for 1 hour until fully chilled and firm.",
      "textZh": "离火，肉置晾架。室温放凉约20分钟，再敞盖冷藏1小时至彻底冷却紧实。",
      "zhHint": "晾凉再冷藏",
      "stateNote": {
        "visual": "Skin contracts tightly; fat layer firms into a glossy, jellied sheet.",
        "visualZh": "猪皮紧缩；肥肉凝成油亮胶质层。",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "signal": "Fingertip leaves no dent when pressed firmly on fat.",
        "signalZh": "指尖用力按肥肉不留凹痕。"
      }
    },
    {
      "text": "Pound garlic with 1/4 tsp salt in a mortar until smooth and sticky — about 2 minutes. Do not use food processor or press.",
      "textZh": "蒜瓣加1/4茶匙盐，石臼中舂至细腻黏稠——约2分钟。禁用料理机或压蒜器。",
      "zhHint": "石臼舂泥",
      "stateNote": {
        "visual": "Paste glistens with released oils; no granular bits remain.",
        "visualZh": "蒜泥泛油光；无颗粒残留。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Aroma shifts from raw pungency to warm, nutty sweetness.",
        "signalZh": "气味由生辣转为暖香微甜。"
      }
    },
    {
      "text": "Slice chilled pork belly into 3-mm-thick, 4-cm-long rectangles. Arrange overlapping on a chilled plate.",
      "textZh": "将冷透五花肉切成3毫米厚、4厘米长方片，叠放于冰镇盘中。",
      "zhHint": "薄片叠摆",
      "stateNote": {
        "visual": "Each slice curls slightly at edges; fat and lean layers remain distinct and aligned.",
        "visualZh": "每片边缘微卷；肥瘦层分明且走向一致。",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "signal": "Knife glides silently — no squeak or drag.",
        "signalZh": "刀过无声，无滞涩或尖啸。"
      }
    },
    {
      "text": "Whisk together light soy sauce, Chinese black vinegar, and sesame oil. Spoon garlic paste over meat, then drizzle sauce evenly. Serve immediately.",
      "textZh": "生抽、陈醋、香油搅匀成汁。蒜泥铺于肉片上，再均匀淋汁，即刻上桌。",
      "zhHint": "蒜泥在上，汁在下",
      "stateNote": {
        "visual": "Sauce pools subtly between slices; garlic paste stays mounded, not dissolving.",
        "visualZh": "酱汁在片隙间微聚；蒜泥隆起不化散。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "First bite delivers cool fat, sharp garlic, and umami tang in sequence.",
        "signalZh": "初尝依次呈现凉润肥肉、辛烈蒜香、咸鲜酸韵。"
      }
    }
  ],
  "tips": [
    "Chill the serving plate for 10 minutes before arranging — keeps fat firm and prevents sauce dilution.",
    "If garlic paste separates, stir in 1/2 tsp cold water — never warm — to re-emulsify.",
    "This dish tastes best within 20 minutes of assembly; garlic mellows quickly."
  ],
  "tipsZh": [
    "装盘前冰镇盘子10分钟——保肥肉挺立，防酱汁稀释。",
    "若蒜泥出水，加1/2茶匙冷水搅匀复乳化，切勿用热水。",
    "此菜最佳赏味期为装盘后20分钟内；蒜香随时间迅速柔化。"
  ],
  "relatedSlugs": [
    "fu-qi-fei-pian",
    "hong-you-er-si"
  ],
  "image": "/images/recipes/suan-ni-bai-rou.webp"
};
