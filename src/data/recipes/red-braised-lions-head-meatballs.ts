import type { Recipe } from "@/lib/types";

/** Red-Braised Lion's Head Meatballs (红烧狮子头) — Seed batch */
export const red_braised_lions_head_meatballs: Recipe = {
  "id": "hong-shao-shi-zi-tou",
  "slug": "red-braised-lions-head-meatballs",
  "titleEn": "Red-Braised Lion's Head Meatballs",
  "titleZh": "红烧狮子头",
  "pinyin": "hóng shāo shī zi tóu",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses gentle braising instead of deep-frying; tender, juicy meatballs with rich, glossy sauce — no food processor needed, just hand-chopped pork for authentic texture.",
  "versionNoteZh": "家常版省去油炸步骤，改用慢火焖烧；肉丸酥松多汁、酱汁浓亮；坚持手剁猪肉，拒绝料理机，还原本帮软糯弹牙口感。",
  "tags": [
    "comfort",
    "dinner-party",
    "make-ahead"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Yangpu District would make these every Chinese New Year — she’d sing while pounding pork shoulder with a wooden mallet, saying the rhythm kept the meat ‘alive’. She always served them nestled in blanched Shanghai bok choy, its green leaves soaking up the sauce like little sponges.",
  "storyZh": "我外婆住在上海杨浦区，每年春节必做这道菜——她边捶打猪肩肉边哼歌，说节奏能让肉‘活’起来。她总把肉丸卧在焯过水的上海青里上桌，碧绿菜叶像小海绵一样吸饱酱汁。",
  "ingredients": [
    {
      "id": "ls-01",
      "nameEn": "ground pork (shoulder, 20% fat)",
      "nameZh": "猪肉末（前腿肉，肥瘦比2:8）",
      "pinyin": "zhū ròu mò",
      "amountMetric": "500 g",
      "amountUS": "2 cups loosely packed",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for freshly ground pork shoulder — pre-ground supermarket pork is often too lean and dry.",
      "noteZh": "请肉铺现绞前腿肉——超市预包装猪肉通常太瘦，易柴。"
    },
    {
      "id": "ls-02",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry if unavailable — never cooking wine labeled 'for cooking' only.",
      "noteZh": "无绍兴酒可用干雪利酒替代；切勿用标有‘烹饪料酒’的廉价勾兑酒。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ls-03",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "For color and depth — not saltiness. Light soy handles seasoning.",
      "noteZh": "主调色增香，不主咸；咸味由生抽承担。",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "ls-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1 tbsp + 2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use naturally brewed, not chemical hydrolyzed.",
      "noteZh": "选天然酿造款，避开化学水解酱油。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ls-05",
      "nameEn": "ginger, finely minced",
      "nameZh": "生姜末",
      "pinyin": "shēng jiāng mò",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "note": "Peel and mince by hand — avoid grater or blender to prevent fibrous water release.",
      "noteZh": "去皮手剁，忌擦丝器或搅拌机，防姜汁析出变涩。",
      "termKey": "ginger"
    },
    {
      "id": "ls-06",
      "nameEn": "scallion whites, finely minced",
      "nameZh": "葱白末",
      "pinyin": "cōng bái mò",
      "amountMetric": "30 g",
      "amountUS": "3 tbsp",
      "category": "produce",
      "pantry": "local",
      "note": "Use only white parts — green tops go into braising liquid later.",
      "noteZh": "仅取葱白部分；葱绿留作炖煮时增香。",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "In a large bowl, combine pork, Shaoxing wine, dark soy, light soy, ginger, and scallion whites. Using clean hands, mix vigorously in one direction for 3 minutes until sticky and slightly springy.",
      "textZh": "大碗中放入猪肉末、绍兴酒、老抽、生抽、姜末、葱白末，用手按同一方向用力搅打3分钟，至肉馅黏稠、有弹性。",
      "zhHint": "单向搅打锁住水分",
      "stateNote": {
        "visual": "Meat mixture clings to fingers and pulls away cleanly when lifted.",
        "visualZh": "肉馅能粘附手指，提起时成团不散。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Mixture feels tacky, not crumbly.",
        "signalZh": "手感黏糯，不松散。"
      }
    },
    {
      "text": "Form into 4 large oval meatballs (about 180 g each). Gently press palms to smooth surface — do not compact tightly.",
      "textZh": "将肉馅分成4份，搓成椭圆形大肉丸（每颗约180克），掌心轻拍定型，切勿用力按实。",
      "zhHint": "轻拍定型，保持松软",
      "stateNote": {
        "visual": "Oval shape holds without cracking; surface looks moist and unbroken.",
        "visualZh": "椭圆形态完整无裂痕，表面湿润光洁。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No air pockets visible on surface.",
        "signalZh": "表面无明显气孔。"
      }
    },
    {
      "text": "Heat 2 tbsp neutral oil in a wide Dutch oven over medium heat. Carefully place meatballs in pan. Sear undisturbed for 4 minutes per side until deeply golden brown.",
      "textZh": "厚底锅中火加热中性油，轻轻放入肉丸，每面煎4分钟，至深金黄色，中途不翻动。",
      "zhHint": "中火慢煎上色",
      "stateNote": {
        "visual": "Crust is deeply caramelized, edges slightly curled.",
        "visualZh": "外壳焦糖化明显，边缘微卷。",
        "timeRef": "4 minutes per side",
        "timeRefZh": "每面4分钟",
        "heat": "medium",
        "signal": "Sizzling slows and turns low-hum; crust releases easily from pan.",
        "signalZh": "滋滋声转为低鸣，焦壳自然离锅。"
      }
    },
    {
      "text": "Add 500 ml water, 2 whole star anise, and reserved scallion greens. Bring to gentle simmer, then cover and braise on low heat for 60 minutes.",
      "textZh": "加清水500毫升、八角2颗、预留葱绿，烧开后转最小火，加盖焖煮60分钟。",
      "zhHint": "小火慢煨入味",
      "stateNote": {
        "visual": "Liquid bubbles faintly at edges; steam rises in thin wisps.",
        "visualZh": "汤汁边缘微泡，蒸汽呈细缕状。",
        "timeRef": "60 minutes",
        "timeRefZh": "60 分钟",
        "heat": "low",
        "signal": "Meatballs bob gently but do not break apart.",
        "signalZh": "肉丸轻微浮动，不散不裂。"
      }
    },
    {
      "text": "Uncover and increase heat to medium-low. Simmer uncovered 12–15 minutes until sauce reduces to thick, glossy glaze clinging to meatballs.",
      "textZh": "揭盖，转中小火收汁12–15分钟，至酱汁浓稠油亮，均匀裹住肉丸。",
      "zhHint": "收汁至油亮挂勺",
      "stateNote": {
        "visual": "Sauce coats back of spoon and leaves clear trail when dragged.",
        "visualZh": "酱汁挂勺，勺背划痕清晰不闭合。",
        "timeRef": "12–15 minutes",
        "timeRefZh": "12–15 分钟",
        "heat": "medium-low",
        "signal": "Bubbles become slow, viscous, and syrupy.",
        "signalZh": "气泡变慢、浓稠、如糖浆。"
      }
    }
  ],
  "tips": [
    "Hand-chopping pork shoulder before grinding yields superior texture — ask your butcher to coarsely chop first.",
    "Braising liquid doubles as excellent sauce for noodles or steamed rice.",
    "Make ahead: refrigerate fully cooled meatballs in sauce for up to 3 days — flavor deepens overnight."
  ],
  "tipsZh": [
    "手切猪肩肉再粗绞，口感更佳——请肉铺先粗斩再绞。",
    "炖煮原汁是拌面或浇饭的绝配酱汁。",
    "可提前制作：冷却后连汁冷藏，3日内食用，隔夜更入味。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/red-braised-lions-head-meatballs.webp"
};
