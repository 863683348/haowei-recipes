import type { Recipe } from "@/lib/types";

/**
 * 凉拌木耳 Cold Wood Ear Mushroom — 脆爽口感的凉拌经典
 * 双版本：家庭快手版（默认）/ 餐厅正宗版
 * v1.1 多语言：英文为主，中文增量字段（storyZh/textZh/visualZh 等）。
 */
export const coldWoodEar: Recipe = {
  id: "cold-wood-ear",
  slug: "cold-wood-ear",
  titleEn: "Cold Wood Ear Mushroom (凉拌木耳)",
  titleZh: "凉拌木耳",
  pinyin: "liáng bàn mù ěr",
  cuisine: "家常菜",
  cuisineEn: "Home-style",
  region: "Northern China",
  regionZh: "华北",
  difficulty: "easy",
  timeMin: 20,
  servings: 2,
  version: "family",
  versionNote:
    "Family version: quick toss of rehydrated wood ear with a garlicky vinegar dressing. Restaurant version may blanch briefly and add a touch of sesame oil finish for extra gloss.",
  versionNoteZh:
    "家庭版：泡发木耳直接拌蒜香醋汁。餐厅版会快速焯水后过冷，淋香油增加光泽。",
  tags: ["cold", "quick", "30-min", "beginner", "vegan", "healthy"],
  dietary: ["vegan", "gluten-free"],
  story:
    "Wood ear mushroom (木耳, mù ěr) is one of the most widely used ingredients in Chinese cooking — not for its flavor (it's nearly neutral), but for its extraordinary crunch. Found dried in Asian grocers, it rehydrates in warm water in under 10 minutes. The cold tossed salad version (凉拌) is a staple on every Chinese dinner table in summer: crisp, tangy, garlicky, and impossibly light. It is often served alongside heavier meat dishes as a palate-cleansing counterpoint.",
  storyZh:
    "木耳是中国厨房最普及的食材之一——不是为了它的味道（近乎中性），而是为了它那绝妙的脆爽口感。亚超干货区有售干木耳，温水泡发不到 10 分钟。夏日凉拌木耳是每个中国家庭餐桌上的常客：脆、酸、蒜香、极轻口，常与厚重的肉类菜肴搭配，起到清口解腻的作用。",
  ingredients: [
    {
      id: "cwe-dried-wood-ear",
      nameEn: "dried wood ear mushrooms (木耳)",
      nameZh: "干木耳",
      amountMetric: "15 g (dry weight)",
      amountUS: "about 0.5 oz",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "wood-ear",
      note:
        "Will expand to about 150 g when rehydrated — a small amount goes a long way.",
      noteZh: "泡发后约 150 克，少许即可。",
    },
    {
      id: "cwe-garlic",
      nameEn: "garlic cloves, minced",
      nameZh: "大蒜，切末",
      amountMetric: "3 cloves",
      amountUS: "3 cloves",
      category: "produce",
      pantry: "local",
      termKey: "garlic",
    },
    {
      id: "cwe-scallion",
      nameEn: "scallions, finely sliced",
      nameZh: "小葱，切细丝",
      amountMetric: "2 stalks",
      amountUS: "2 stalks",
      category: "produce",
      pantry: "local",
      termKey: "scallion",
    },
    {
      id: "cwe-rice-vinegar",
      nameEn: "rice vinegar (or Chinkiang vinegar)",
      nameZh: "米醋（或镇江香醋）",
      amountMetric: "2 tbsp (30 ml)",
      amountUS: "2 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "rice-vinegar",
    },
    {
      id: "cwe-soy",
      nameEn: "light soy sauce",
      nameZh: "生抽",
      amountMetric: "1 tbsp (15 ml)",
      amountUS: "1 tbsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "light-soy-sauce",
    },
    {
      id: "cwe-sesame",
      nameEn: "toasted sesame oil",
      nameZh: "香油",
      amountMetric: "1 tsp (5 ml)",
      amountUS: "1 tsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "sesame-oil",
    },
    {
      id: "cwe-sugar",
      nameEn: "sugar",
      nameZh: "白糖",
      amountMetric: "1/2 tsp",
      amountUS: "1/2 tsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "cwe-salt",
      nameEn: "salt",
      nameZh: "盐",
      amountMetric: "1/4 tsp",
      amountUS: "1/4 tsp",
      category: "western-pantry",
      pantry: "local",
    },
    {
      id: "cwe-chili",
      nameEn: "chili oil (optional, for heat)",
      nameZh: "辣椒油（可选，增辣）",
      amountMetric: "1 tsp",
      amountUS: "1 tsp",
      category: "asian-pantry",
      pantry: "asian",
      termKey: "chili-oil",
      note: "Skip for a milder version; add more for Sichuan heat.",
      noteZh: "不吃辣可省；想吃辣多放。",
    },
  ],
  steps: [
    {
      text:
        "Place dried wood ear mushrooms in a bowl and cover with warm (not boiling) water. Let soak for 10–15 minutes until fully expanded and tender-crisp. Discard any tough core pieces. Rinse under cold water and tear or cut into bite-sized pieces if they are larger than a coin.",
      textZh: "干木耳放入碗中，加温水（非沸水）没过。泡 10–15 分钟至完全膨胀、脆嫩。丢弃任何过硬的根部。冷水冲洗，较大的撕成一口大小。",
      stateNote: {
        visual:
          "Dried shriveled ears transform into dark, gelatinous, frilly sheets — roughly 8–10× their dry volume",
        visualZh: "干瘪的木耳变成深色、胶质、边缘卷曲的片状，体积膨胀约 8–10 倍",
        timeRef: "10–15 minutes in warm water",
        timeRefZh: "温水泡 10–15 分钟",
        signal:
          "Pieces are flexible, not brittle; no hard centers remain",
        signalZh: "木耳柔韧不脆硬，中心无硬芯",
      },
    },
    {
      text:
        "Bring a pot of water to a boil. Add a pinch of salt. Blanch the rehydrated wood ear for exactly 30 seconds. Drain immediately and transfer to a bowl of ice water (or run under cold tap water) to shock and stop cooking.",
      textZh: "锅中烧开水，加一撮盐。木耳入沸水焯 30 秒后立即捞出，投入冰水（或冷水）快速冷却，锁定脆感。",
      stateNote: {
        visual:
          "Wood ear turns a deeper, more glossy black; edges curl slightly from the heat",
        visualZh: "木耳颜色更深、更油亮，边缘因受热微微卷曲",
        heat: "high",
        timeRef: "30 seconds",
        timeRefZh: "30 秒",
        signal:
          "Immediately transfer to cold water — overcooking makes wood ear slimy",
        signalZh: "立刻过冷——煮久会变黏",
      },
    },
    {
      text:
        "Drain the shocked wood ear thoroughly. Squeeze gently with clean hands to remove excess water — this is critical, as leftover water will dilute the dressing. Transfer to a mixing bowl.",
      textZh: "充分沥干木耳，用手轻捏挤出多余水分——这步很关键，多余水分会稀释酱汁。放入拌菜碗中。",
      stateNote: {
        visual:
          "No more water pooling at the bottom of the colander;木耳表面略干、有弹性",
        visualZh: "滤网底部无水积存，木耳表面略干、有弹性",
        signal:
          "When pressed lightly between fingers, no water droplets emerge",
        signalZh: "手指轻压无水渗出",
      },
    },
    {
      text:
        "Add minced garlic, sliced scallions, rice vinegar, soy sauce, sesame oil, sugar, salt, and chili oil (if using). Toss gently until every piece is evenly coated. The dressing will be thin and glossy.",
      textZh: "加入蒜末、葱花、米醋、生抽、香油、糖、盐和辣椒油，轻拌均匀。酱汁应稀薄油亮，包裹每一片木耳。",
      stateNote: {
        visual:
          "Wood ear pieces are glossy and dark, flecked with green scallion and minced garlic; a thin amber dressing pools at the bottom",
        visualZh: "木耳片油亮深黑，点缀绿色葱花和蒜末，碗底有薄薄一层琥珀色酱汁",
        signal:
          "Every piece is coated; no dry or pale patches remain",
        signalZh: "每片都裹上酱汁，无干涩空白处",
      },
    },
    {
      text:
        "Let the dressed wood ear rest for 10 minutes at room temperature to allow the flavors to penetrate. Toss once more before serving. The dish is best served at cool room temperature — not ice-cold, not warm. Pairs beautifully with roasted meats or fried rice.",
      textZh: "拌好的木耳室温静置 10 分钟入味。上桌前再拌一次。最佳食用温度：微凉（非冰镇）。与烤肉或炒饭绝配。",
      stateNote: {
        visual:
          "The dressing has been partially absorbed; the wood ear has taken on a slight translucency at the edges",
        visualZh: "部分酱汁已被吸收，木耳边缘略呈半透明",
        timeRef: "10 minutes",
        timeRefZh: "10 分钟",
        signal:
          "The garlic aroma is mellowed; the vinegar bite has softened",
        signalZh: "蒜味变柔和，醋的尖锐感减弱",
      },
    },
  ],
  tips: [
    "Do not soak wood ear in hot water — it makes the exterior mushy while the interior remains hard. Warm water (not hot) is the sweet spot.",
    "Always blanch for just 30 seconds. Over-blanching destroys the signature crunch that makes this dish worth making.",
    "Wood ear mushrooms have no strong flavor of their own — the dish relies entirely on the dressing. Make the dressing bold: extra garlic, a good splash of vinegar.",
    "Leftover dressed wood ear keeps in the refrigerator for up to 2 days. The crunch softens slightly but the flavor deepens.",
  ],
  tipsZh: [
    "千万别用热水泡——外烂内生。温水是最优解。",
    "焯水严格 30 秒。煮久会毁掉木耳的标志性脆感。",
    "木耳本身味淡——全靠酱汁撑场。酱汁要做足：多蒜、多醋。",
    "拌好的木耳冷藏可保存 2 天。脆感略降，但味道更融合。",
  ],
  relatedSlugs: [
    "smashed-cucumber",
    "kou-shui-chicken",
    "garlic-chives-scrambled-eggs",
    "egg-fried-rice",
  ],
  image: "/images/recipes/cold-wood-ear.webp",
};
