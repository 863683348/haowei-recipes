import type { Recipe } from "@/lib/types";

/** Wok-Egg Beef Claypot Rice (窝蛋牛肉煲) — Seed batch */
export const wok_egg_beef_claypot_rice: Recipe = {
  "id": "wo-dan-niu-rou-bao",
  "slug": "wok-egg-beef-claypot-rice",
  "titleEn": "Wok-Egg Beef Claypot Rice",
  "titleZh": "窝蛋牛肉煲",
  "pinyin": "wō dàn niú ròu bāo",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Hong Kong",
  "regionZh": "香港",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses thinly sliced flank steak instead of expensive sirloin, and cooks the egg directly on rice — no separate wok hei required, just clean heat control and timing.",
  "versionNoteZh": "家常版选用平价牛腩肉片代替高价西冷，鸡蛋直接卧于饭面——无需猛火镬气，靠精准控温与时机成就滑嫩溏心。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle ran a dai pai dong in Mong Kok during the 1980s. He served this dish at midnight — raw egg cracked onto hot rice, then covered to poach gently in residual steam. I still remember the sound of the egg sizzle fading into silence as the yolk set just right — not runny, not firm.",
  "storyZh": "我叔父上世纪八十年代在旺角经营大排档，这道菜是他的午夜招牌——生蛋现磕在滚烫米饭上，盖盖借余温慢煨。我至今记得蛋液滋滋声渐弱、蛋黄恰成半凝半流的瞬间。",
  "ingredients": [
    {
      "id": "wd-01",
      "nameEn": "flank steak, very thinly sliced against grain",
      "nameZh": "牛腩肉（逆纹薄切）",
      "pinyin": "niú nǎn ròu",
      "amountMetric": "180 g",
      "amountUS": "6.3 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Partially freeze beef for 20 minutes before slicing — makes thin cuts easier",
      "noteZh": "牛肉冷冻20分钟再切，易得薄片"
    },
    {
      "id": "wd-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "wd-03",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "wd-04",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "wd-05",
      "nameEn": "large egg",
      "nameZh": "大号鸡蛋",
      "pinyin": "dà hào jī dàn",
      "amountMetric": "1",
      "amountUS": "1",
      "category": "dairy",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Marinate beef slices with light soy sauce, white pepper, and cornstarch for 15 minutes at room temperature — mix gently until sticky and coated.",
      "textZh": "将牛肉片与生抽、白胡椒粉、玉米淀粉拌匀，室温腌15分钟，至表面发黏、裹匀酱汁。",
      "zhHint": "淀粉锁汁，牛肉更嫩"
    },
    {
      "text": "Rinse jasmine rice and soak in cold water for 20 minutes. Drain well. Heat claypot over medium-low heat for 1 minute, add 1 tsp oil, then stir-fry beef until edges just curl and turn brown at tips (~1.5 minutes). Remove and set aside.",
      "textZh": "大米淘净冷浸20分钟，沥干。砂锅中小火预热1分钟，加1茶匙油，下牛肉片快炒至边缘微卷、尖端初现褐色（约1.5分钟），盛出备用。",
      "zhHint": "牛肉只炒至初熟，余热续烹",
      "stateNote": {
        "visual": "Beef is mostly pink with slight browning at edges; no gray or dry patches",
        "visualZh": "牛肉主体粉红，边缘微褐；无灰白或干涩斑块",
        "timeRef": "1.5 minutes",
        "timeRefZh": "1.5 分钟",
        "heat": "medium-low",
        "signal": "Sizzle is steady but not aggressive; meat releases clear juice",
        "signalZh": "滋滋声平稳不爆烈；渗出清亮汁液"
      }
    },
    {
      "text": "Add soaked rice and 360 ml (1 ½ cups) boiling water to pot. Bring to boil, cover, reduce heat to low, and simmer 12 minutes.",
      "textZh": "砂锅中加入沥干大米与360毫升（1½杯）沸水，大火烧开后盖盖，转最小火焖12分钟。",
      "zhHint": "沸水助米粒快速吸胀"
    },
    {
      "text": "Uncover, scatter beef evenly over rice. Crack egg directly onto center of hot rice. Cover immediately and cook on low heat for 3 minutes — steam gently poaches the egg.",
      "textZh": "揭盖，将牛肉片均匀铺于饭面，将生蛋直接磕在米饭中央。立刻盖盖，最小火焖3分钟——蒸汽轻柔煨熟蛋液。",
      "zhHint": "蛋要现磕，盖盖锁汽"
    },
    {
      "text": "Turn off heat. Rest covered for 3 minutes — yolk will thicken to creamy, jammy consistency while white sets fully. Drizzle with sesame oil (optional) and serve immediately with chopsticks.",
      "textZh": "关火，加盖静置3分钟——蛋黄转为绵密流心状，蛋白完全凝固。淋芝麻油（可选），立即用筷子拌匀上桌。",
      "zhHint": "静置是溏心成败关键",
      "stateNote": {
        "visual": "Egg white is fully opaque and set; yolk is glossy, slightly trembling, not runny nor solid",
        "visualZh": "蛋白全熟不透明；蛋黄油亮微颤，非稀流亦非凝固",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Lid fogs lightly; faint eggy aroma without sulfur note",
        "signalZh": "锅盖微雾；蛋香清鲜，无硫磺味"
      }
    }
  ],
  "tips": [
    "Use fresh eggs — older eggs have thinner whites that spread too much on hot rice.",
    "If your stove runs hot, place a heat diffuser under the claypot during the final steam phase to prevent overcooking the egg.",
    "Serve with a splash of dark soy sauce on the side — adds depth and balances the richness of the yolk."
  ],
  "tipsZh": [
    "务必用新鲜鸡蛋——陈蛋蛋清太稀，在热饭上易散开。",
    "若灶火偏旺，最后蒸蛋阶段可在砂锅下垫导热板，防蛋过熟。",
    "配一小碟老抽蘸食——增色提香，平衡蛋黄丰腴感。"
  ],
  "relatedSlugs": [
    "lap-cheong-claypot-rice",
    "slippery-chicken-claypot-rice"
  ],
  "image": "/images/recipes/wok-egg-beef-claypot-rice.webp"
};
