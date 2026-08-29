import type { Recipe } from "@/lib/types";

/** Spring Pancake with Assorted Vegetables (春饼卷菜) — Seed batch */
export const spring_pancake_vegetable_wrap: Recipe = {
  "id": "chun-bing-juan-cai",
  "slug": "spring-pancake-vegetable-wrap",
  "titleEn": "Spring Pancake with Assorted Vegetables",
  "titleZh": "春饼卷菜",
  "pinyin": "chūn bǐng juǎn cài",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Snack",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses hand-rolled, thin, chewy pancakes — no pre-made wrappers. Filling is lightly seasoned and served at room temperature for authentic texture contrast.",
  "versionNoteZh": "家常版坚持手擀薄饼，不使用市售春饼皮；配菜微盐清炒或焯水后室温拌匀，突出食材本味与口感层次。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Beijing’s Hutong still rolls spring pancakes every Lichun (Start of Spring) using her mother’s bamboo rolling pin. She says the pancake must be thin enough to see the newspaper print through it — a test my cousins always giggled over while fighting for the first wrap.",
  "storyZh": "我北京胡同里的姑妈每年立春都用她母亲留下的竹擀面杖手擀春饼。她说饼要擀到能透出报纸字迹才算合格——这个测试总惹得表弟妹们笑着抢第一个卷饼。",
  "ingredients": [
    {
      "id": "cb-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "250 g",
      "amountUS": "2 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Substitute with bread flour if available; avoid cake flour (too weak)",
      "noteZh": "可用高筋面粉替代；忌用低筋面粉（筋度不足）"
    },
    {
      "id": "cb-02",
      "nameEn": "boiling water",
      "nameZh": "沸水",
      "pinyin": "fèi shuǐ",
      "amountMetric": "150 ml",
      "amountUS": "2/3 cup",
      "category": "other",
      "pantry": "local",
      "note": "Must be freshly boiled — critical for tender, pliable dough",
      "noteZh": "必须现烧沸水——决定面饼柔韧不破的关键"
    },
    {
      "id": "cb-03",
      "nameEn": "carrot, julienned",
      "nameZh": "胡萝卜（切细丝）",
      "pinyin": "hú luó bo",
      "amountMetric": "120 g",
      "amountUS": "1 cup",
      "category": "produce",
      "pantry": "local",
      "note": "Use young carrots for crispness; no need to peel",
      "noteZh": "选用嫩胡萝卜，爽脆不柴；无需去皮"
    },
    {
      "id": "cb-04",
      "nameEn": "bean sprouts, rinsed",
      "nameZh": "绿豆芽",
      "pinyin": "lǜ dòu yá",
      "amountMetric": "150 g",
      "amountUS": "1 ½ cups",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute with mung bean sprouts from Asian aisle or health food store",
      "noteZh": "超市亚洲区或健康食品区可购绿豆芽替代"
    },
    {
      "id": "cb-05",
      "nameEn": "scallion, finely sliced",
      "nameZh": "小葱（切细末）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "In a large bowl, pour boiling water into flour in two batches. Stir with chopsticks until shaggy clumps form, then knead by hand for 3 minutes until smooth and elastic.",
      "textZh": "大碗中分两次倒入沸水至面粉中，用筷子搅成絮状，再徒手揉面3分钟至光滑有弹性。",
      "zhHint": "烫面揉匀",
      "stateNote": {
        "visual": "Dough forms a single cohesive ball with no dry bits",
        "visualZh": "面团聚成光滑无干粉的整球",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Dough springs back slightly when poked",
        "signalZh": "轻按面团略有回弹"
      }
    },
    {
      "text": "Cover dough with a damp cloth and rest at room temperature for 30 minutes. Meanwhile, blanch carrot and bean sprouts separately in salted boiling water for 30 seconds each; drain and cool completely.",
      "textZh": "面团盖湿布室温醒发30分钟。同时将胡萝卜丝和豆芽分别在盐水中焯烫30秒，捞出彻底晾凉。",
      "zhHint": "面醒菜焯",
      "stateNote": {
        "visual": "Carrots retain bright orange color; sprouts are crisp-tender",
        "visualZh": "胡萝卜色泽鲜亮，豆芽脆嫩不软",
        "timeRef": "30 seconds per vegetable",
        "timeRefZh": "每样蔬菜焯水30秒",
        "heat": "high",
        "signal": "Water returns to boil immediately after adding vegetables",
        "signalZh": "下菜后水迅速复沸"
      }
    },
    {
      "text": "Divide rested dough into 8 equal pieces. Roll each into a 15-cm (6-inch) round. Stack two rounds, brush top with neutral oil, then roll again into one thin 20-cm (8-inch) pancake.",
      "textZh": "将醒好的面团分成8等份。每份擀成15厘米圆片；叠放两片，上层刷油，再共同擀成20厘米薄饼。",
      "zhHint": "双层叠擀",
      "stateNote": {
        "visual": "Pancake is translucent when held up to light",
        "visualZh": "饼皮对光可见纹理透亮",
        "timeRef": "1–2 minutes per pancake",
        "timeRefZh": "每张饼1–2分钟",
        "signal": "Edges lift easily from surface without tearing",
        "signalZh": "边缘自然翘起、不粘不裂"
      }
    },
    {
      "text": "Cook stacked pancakes in a dry nonstick skillet over medium heat for 45 seconds per side, flipping once, until pale golden and puffed slightly.",
      "textZh": "无油平底锅中火加热，放入双层饼坯，每面烙45秒，至浅金黄微鼓起即翻面。",
      "zhHint": "干烙微鼓",
      "stateNote": {
        "visual": "Surface shows faint golden speckles and gentle puffing",
        "visualZh": "表面浮现淡金斑点，饼体微微鼓起",
        "timeRef": "45 seconds per side",
        "timeRefZh": "每面45秒",
        "heat": "medium",
        "signal": "Edges begin to curl upward slightly",
        "signalZh": "饼边开始轻微上翘"
      }
    },
    {
      "text": "Peel apart warm pancakes into two layers. Fill each with carrot, bean sprouts, scallions, and a pinch of white pepper. Roll tightly like a burrito and serve immediately.",
      "textZh": "趁热揭成两张单饼，铺上胡萝卜丝、豆芽、葱末和少许白胡椒粉，卷成筒状即食。",
      "zhHint": "热揭冷卷",
      "stateNote": {
        "visual": "Pancakes remain soft and pliable, not brittle",
        "visualZh": "饼皮柔软不脆、延展性好",
        "timeRef": "within 2 minutes of cooking",
        "timeRefZh": "出锅后2分钟内完成",
        "signal": "Steam rises gently from wrapped pancake",
        "signalZh": "卷饼表面仍有微汽升腾"
      }
    }
  ],
  "tips": [
    "Roll pancakes as thin as possible — authenticity hinges on translucency.",
    "Serve fillings at room temperature so they don’t soften the pancake.",
    "Leftover dough can be refrigerated overnight; bring to room temp before rolling."
  ],
  "tipsZh": [
    "饼越薄越好——透光是正宗春饼的灵魂。",
    "配菜务必室温食用，避免烫软饼皮。",
    "多余面团可冷藏过夜，使用前回温至室温再擀。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/spring-pancake-vegetable-wrap.webp"
};
