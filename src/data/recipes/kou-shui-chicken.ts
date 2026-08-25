import type { Recipe } from "@/lib/types";

/**
 * 口水鸡 Kou Shui Chicken — 麻辣鲜香的川式凉鸡
 * 双版本：家庭快手版（默认）/ 餐厅正宗版
 * v1.1 多语言：英文为主，中文增量字段（storyZh/textZh/visualZh 等）。
 */
export const kouShuiChicken: Recipe = {
  id: "kou-shui-chicken",
  slug: "kou-shui-chicken",
  titleEn: "Kou Shui Chicken (口水鸡)",
  titleZh: "口水鸡",
  pinyin: "kǒu shuǐ jī",
  cuisine: "川菜",
  cuisineEn: "Sichuan",
  region: "Sichuan Province",
  regionZh: "四川省",
  difficulty: "medium",
  timeMin: 45,
  servings: 4,
  version: "family",
  versionNote:
    "Family version: poach a whole chicken leg or boneless thighs in aromatic broth, shock in ice water, then drench in a fiery Sichuan chili-sesame sauce. Restaurant version may brine the chicken overnight and use free-range Sichuan white chickens for firmer meat.",
  versionNoteZh:
    "家庭版：用香料卤水煮整只鸡腿或去骨鸡腿，冰水激冷后淋麻辣红油酱汁。餐厅版会隔夜卤水，用四川土白鸡，肉质更紧实。",
  tags: ["cold", "spicy", "Sichuan", "party", "make-ahead"],
  dietary: ["none"],
  story:
    "Kou Shui Chicken (口水鸡) is named for the effect it has on diners — the sight and aroma are so irresistible that saliva flows involuntarily ('kou shui' literally means 'mouth water'). Originating from Chengdu street food stalls in the 1930s, it is now a staple of Sichuan cold dish menus. The technique is elegant: a gentle poach preserves the chicken's juiciness, an ice bath locks in firm texture, and the sauce — a balance of chili oil heat, Sichuan peppercorn numbness, soy saltiness, and sesame aroma — is where the magic lives. Serve at a restaurant, and it arrives glistening in its own red oil, studded with crushed peanuts and fresh scallion.",
  storyZh:
    "口水鸡因其让人垂涎欲滴的效果而得名——看一眼、闻一闻，口水就不受控制地流（口水鸡字面即「口水」）。起源于 1930 年代成都街头小吃摊，如今已是川菜凉菜菜单上的标配。技法优雅：温柔卤煮锁住鸡肉汁水，冰水激冷定格紧实口感，而 sauce——辣椒油的辣、花椒的麻、生抽的咸、香油的香——是灵魂的所在。餐厅端上桌时，鸡块在红油中泛着光泽，撒满碎花生和葱花。",
  ingredients: [
    {
      id: "ks-chicken",
      nameEn: "bone-in chicken thighs (or whole legs)",
      nameZh: "带骨鸡腿（或整鸡腿）",
      amountMetric: "2 whole legs (~800 g)",
      amountUS: "2 whole legs",
      category: "protein",
      pantry: "local",
      note:
        "Bone-in, skin-on thighs stay juicier than breast. If using breasts, reduce poaching time to 12 minutes.",
      noteZh: "带骨带皮鸡腿更嫩多汁。用鸡胸肉则卤煮时间缩短至 12 分钟。",
    },
    {
      id: "ks-ginger",
      nameEn: "fresh ginger, sliced",
      nameZh: "生姜，切片",
      amountMetric: "4 slices",
      amountUS: "4 slices",
      category: "produce",
      pantry: "local",
      termKey: "ginger",
    },
    {
      id: "ks-scallion",
      nameEn: "scallions, knotted",
      nameZh: "小葱，打结",
      amountMetric: "3 stalks",
      amountUS: "3 stalks",
      category: "produce",
      pantry: "local",
      termKey: "scallion",
    },
    {
      id: "ks-shaoxing",
      nameEn: "Shaoxing wine",
      nameZh: "料酒",
      amountMetric: "2 tbsp (30 ml)",
      amountUS: "2 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "shaoxing-wine",
    },
    {
      id: "ks-chili-oil",
      nameEn: "chili oil (红油, with sediment)",
      nameZh: "辣椒油（含辣椒碎）",
      amountMetric: "3 tbsp (45 ml)",
      amountUS: "3 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "chili-oil",
    },
    {
      id: "ks-sichuan-peppercorn",
      nameEn: "Sichuan peppercorns, toasted and ground",
      nameZh: "花椒，焙香磨粉",
      amountMetric: "1 tsp (2 g)",
      amountUS: "1/2 tsp",
      category: "spice",
      pantry: "asian",
      termKey: "sichuan-peppercorn",
    },
    {
      id: "ks-sesame-oil",
      nameEn: "toasted sesame oil",
      nameZh: "香油",
      amountMetric: "1 tbsp (15 ml)",
      amountUS: "1 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "sesame-oil",
    },
    {
      id: "ks-light-soy",
      nameEn: "light soy sauce",
      nameZh: "生抽",
      amountMetric: "2 tbsp (30 ml)",
      amountUS: "2 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "light-soy-sauce",
    },
    {
      id: "ks-chinkiang",
      nameEn: "Chinkiang (black) vinegar",
      nameZh: "镇江香醋",
      amountMetric: "1 tbsp (15 ml)",
      amountUS: "1 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "chinkiang-vinegar",
    },
    {
      id: "ks-garlic",
      nameEn: "garlic cloves, minced",
      nameZh: "大蒜，切末",
      amountMetric: "4 cloves",
      amountUS: "4 cloves",
      category: "produce",
      pantry: "local",
      termKey: "garlic",
    },
    {
      id: "ks-sugar",
      nameEn: "sugar",
      nameZh: "白糖",
      amountMetric: "1 tsp",
      amountUS: "1 tsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "ks-salt",
      nameEn: "salt (for poaching)",
      nameZh: "盐（卤煮用）",
      amountMetric: "1 tbsp",
      amountUS: "1 tbsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "ks-peanuts",
      nameEn: "roasted peanuts, roughly crushed",
      nameZh: "烤花生，粗碎",
      amountMetric: "2 tbsp",
      amountUS: "2 tbsp",
      category: "produce",
      pantry: "local",
      note: "Garnish — adds crunch and richness.",
      noteZh: "装饰用——增加酥脆口感和油脂香。",
    },
    {
      id: "ks-fresh-scallion",
      nameEn: "scallions, finely sliced (garnish)",
      nameZh: "小葱，切细丝（装饰）",
      amountMetric: "2 stalks",
      amountUS: "2 stalks",
      category: "produce",
      pantry: "local",
      termKey: "scallion",
    },
  ],
  steps: [
    {
      text:
        "Prepare the poaching liquid. Fill a pot large enough to hold the chicken in a single layer with about 1.5 L water. Add ginger slices, knotted scallions, Shaoxing wine, and 1 tbsp salt. Bring to a boil over high heat, then reduce to a gentle simmer.",
      textZh: "准备卤煮液。取一足够大的锅，加入约 1.5 升水。放入姜片、葱结、料酒和 1 汤匙盐。大火烧开，转中小火保持微沸。",
      stateNote: {
        visual:
          "Small bubbles break the surface intermittently; the liquid is lightly aromatic with ginger and scallion",
        visualZh: "汤面间歇冒小泡，液体带着姜葱的香气",
        heat: "medium",
        timeRef: "about 3 minutes to reach simmer",
        timeRefZh: "约 3 分钟至微沸",
        signal: "Surface is gently agitated, not a rolling boil",
        signalZh: "汤面微滚，非大沸",
      },
    },
    {
      text:
        "Lower the chicken legs into the simmering liquid. Cover and poach for 12–15 minutes (for bone-in thighs) or 10–12 minutes (for boneless). Do not boil aggressively — a vigorous boil will tighten the meat and make it dry.",
      textZh: "将鸡腿放入微沸卤水中。盖上锅盖，卤 12–15 分钟（带骨鸡腿）或 10–12 分钟（去骨鸡腿）。不要大火沸腾——剧烈沸腾会让肉质收紧变干。",
      stateNote: {
        visual:
          "Chicken skin turns opaque white-gold; juices run clear when the thickest part is pierced with a skewer",
        visualZh: "鸡皮呈不透明的白金色；最厚处用签子穿刺，流出清澈汁水",
        heat: "medium-low",
        timeRef: "12–15 minutes",
        timeRefZh: "12–15 分钟",
        signal:
          "Internal temperature reaches 74°C / 165°F; juices run clear, not pink",
        signalZh: "内部温度达 74°C；汁水清澈不泛粉",
      },
    },
    {
      text:
        "Immediately transfer the cooked chicken to a bowl of ice water. Submerge completely and leave for at least 10 minutes — this shocks the skin into contracting, creating the signature gelatinous, bouncy texture. Leave until completely cool.",
      textZh: "立即将熟鸡腿转入冰水碗中。完全浸没，冰镇至少 10 分钟——让鸡皮急速收缩，形成标志性的胶质弹牙口感。完全冷却后再取出。",
      stateNote: {
        visual:
          "Chicken skin appears plump, smooth, and slightly gelatinous — a visible shrink-wrap effect from the thermal shock",
        visualZh: "鸡皮饱满光滑，略带胶质光泽——热冲击后的收缩效果",
        timeRef: "10–15 minutes in ice water",
        timeRefZh: "冰水中 10–15 分钟",
        signal:
          "Chicken is cold to the core; skin has tightened noticeably",
        signalZh: "鸡肉中心已冷，鸡皮明显收紧",
      },
    },
    {
      text:
        "Make the sauce. In a medium bowl, whisk together chili oil (with sediment), toasted ground Sichuan peppercorn, sesame oil, light soy sauce, Chinkiang vinegar, minced garlic, and sugar until the sugar dissolves. The sauce should be a deep red-orange, glossy, with a visible layer of chili oil on top.",
      textZh: "调 sauce。碗中混合辣椒油（含辣椒碎）、焙香花椒粉、香油、生抽、香醋、蒜末和糖，搅拌至糖融化。sauce 应呈深红橙色、油亮，表面浮着一层红油。",
      stateNote: {
        visual:
          "Deep red-orange liquid with a glossy sheen; tiny chili flakes and garlic bits suspended throughout",
        visualZh: "深红橙色液体，油亮光泽，悬浮辣椒碎和蒜末",
        signal:
          "Sugar is fully dissolved; the mixture is homogeneous with no grainy patches",
        signalZh: "糖完全溶解，质地均匀无颗粒",
      },
    },
    {
      text:
        "Remove chicken from ice water and pat dry with paper towels. Cut into bite-sized pieces (about 2-inch chunks) on a cutting board — the bone can stay in for easier handling. Arrange on a serving platter and generously ladle the chili-sesame sauce over the top, ensuring every piece is coated. Sprinkle with crushed peanuts and sliced scallions. Serve immediately or chill for up to 2 hours for deeper flavor.",
      textZh: "鸡腿捞出沥干，切一口大小块（约 5 厘米，带骨更好切）。摆盘， generously 淋上红油酱汁，每块都要裹上。撒碎花生和葱花。立即上桌或冷藏 2 小时让味道更深入。",
      stateNote: {
        visual:
          "Platter is glistening with red oil; peanuts and green scallion provide color contrast against the deep red chicken",
        visualZh: "盘中鸡块红油泛光，花生和葱花点缀出红绿对比",
        signal:
          "Each piece has a visible coating of chili oil; the sauce pools slightly at the base of the platter",
        signalZh: "每块鸡都裹上红油，盘底有少量酱汁汇集",
      },
    },
  ],
  tips: [
    "The ice bath is non-negotiable. Skipping it means the skin stays soft and the texture is disappointing. Ten minutes in ice water makes the difference between 'meh' and 'wow'.",
    "Use good-quality chili oil with visible sediment (辣椒碎). The sediment is where the flavor lives — oil alone is just heat without complexity.",
    "Toasted Sichuan peppercorn (花椒) is essential for the 'má' (numbing) sensation. Dry-toast whole peppercorns in a pan until fragrant (1 minute), then grind coarsely. Pre-ground loses potency within weeks.",
    "Kou Shui Chicken tastes even better the next day — the sauce has penetrated deeper into the meat. Make it ahead for maximum impact.",
  ],
  tipsZh: [
    "冰水激冷这步不能省。跳过就是软皮鸡，口感大打折扣。冰水 10 分钟，决定是「还行」还是「惊艳」。",
    "用带辣椒碎的辣椒油—— sediment 是风味的核心，光油只有辣没有层次。",
    "花椒必须焙香——干锅焙 1 分钟至出香，粗磨。预磨花椒粉几周就失效。",
    "口水鸡隔夜更入味——酱汁渗入肉里更深。提前做效果最佳。",
  ],
  relatedSlugs: [
    "smashed-cucumber",
    "cold-wood-ear",
    "kung-pao-chicken",
    "spicy-potato-shreds",
  ],
  image: "/images/recipes/kou-shui-chicken.svg",
};
