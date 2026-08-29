import type { Recipe } from "@/lib/types";

/** Clay Pot Meatballs (砂锅丸子) — Seed batch */
export const clay_pot_meatballs: Recipe = {
  "id": "sha-guo-wan-zi",
  "slug": "clay-pot-meatballs",
  "titleEn": "Clay Pot Meatballs",
  "titleZh": "砂锅丸子",
  "pinyin": "shā guō wán zi",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Xi'an",
  "regionZh": "西安",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses hand-mixed pork-and-scallion meatballs—no egg or cornstarch binder—relying on vigorous kneading for tenderness. My great-aunt in Beilin District shaped them while humming Qin opera, pressing each one firmly into the hot clay pot base so they'd sear and hold shape.",
  "versionNoteZh": "家常版用纯手搅猪肉葱花丸子，不加蛋或淀粉，靠反复摔打上劲。我碑林区的姑婆边哼秦腔边搓丸子，每个都用力按进热砂锅底，使其定型微煎。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Lunar New Year Eve in Xi’an, my father’s cousin would mix minced pork with ginger, scallion, and Shaoxing wine in a wide wooden bowl, then slap the mixture between his palms 50 times—'to wake up the meat,' he’d say—before dropping them into the sizzling clay pot with a soft *puff*.",
  "storyZh": "每年除夕，我父亲的堂叔都在西安用木盆搅肉馅：猪肉末加姜、葱、绍兴酒，再双手摔打五十下——‘叫肉醒过来’——最后‘噗’一声轻落进滋滋作响的砂锅里。",
  "ingredients": [
    {
      "id": "wz-01",
      "nameEn": "ground pork (70% lean)",
      "nameZh": "猪肉末（七分瘦）",
      "pinyin": "zhū ròu mò",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for fresh-ground pork shoulder or use 70/30 blend.",
      "noteZh": "请肉铺现绞猪前腿肉，或选肥瘦比7:3者。"
    },
    {
      "id": "wz-02",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "note": "Finely chopped, white and green parts separated.",
      "noteZh": "葱白葱绿分开切细末。",
      "termKey": "scallion"
    },
    {
      "id": "wz-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "10 g",
      "amountUS": "1 tsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "wz-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "In a bowl, combine pork, scallion whites, grated ginger, and Shaoxing wine. Mix vigorously in one direction for 2 minutes until sticky and cohesive.",
      "textZh": "碗中放猪肉末、葱白末、姜茸、绍兴酒，顺一个方向猛搅2分钟至黏稠抱团。",
      "zhHint": "顺向猛搅",
      "stateNote": {
        "visual": "Mixture pulls away from bowl sides and forms a glossy, tacky mass.",
        "visualZh": "肉馅离碗壁，呈亮泽黏稠团状。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Resists spoon separation—sticks firmly to fingers.",
        "signalZh": "抗拒勺分，牢牢粘指。"
      }
    },
    {
      "text": "Wet hands and form 6–8 oval meatballs (40 g each). Press each firmly into cold clay pot base.",
      "textZh": "手沾水，搓6–8个椭圆丸子（每颗40克），用力按进冷砂锅底。",
      "zhHint": "湿手、按压、冷锅",
      "stateNote": {
        "visual": "Meatballs flatten slightly, edges seal tightly against pot surface.",
        "visualZh": "丸子微扁，边缘紧贴锅底无缝隙。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "No air pockets visible under or around balls.",
        "signalZh": "丸子底部及四周无气泡空隙。"
      }
    },
    {
      "text": "Heat pot over medium heat 3 minutes until bottom of meatballs sizzles and begins to brown.",
      "textZh": "中火加热3分钟，至丸子底面滋滋响、初显焦黄。",
      "zhHint": "听声辨熟",
      "stateNote": {
        "visual": "Golden-brown crust forms evenly on contact surface.",
        "visualZh": "接触面均匀形成金黄脆壳。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Steady sizzle—no smoke or popping.",
        "signalZh": "持续滋滋声，无烟无爆裂。"
      }
    },
    {
      "text": "Add 300 ml hot water. Cover and simmer 10 minutes. Uncover and add scallion greens.",
      "textZh": "冲入300毫升热水，盖盖焖10分钟；开盖撒葱绿。",
      "zhHint": "热水焖煮",
      "stateNote": {
        "visual": "Broth simmers gently; meatballs swell slightly and float upright.",
        "visualZh": "汤微滚，丸子略膨，直立浮起。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "Steam escapes steadily from lid edge—not forcefully.",
        "signalZh": "蒸汽匀速自盖缝逸出，非喷涌。"
      }
    },
    {
      "text": "Simmer uncovered 3 more minutes. Skim any foam. Serve hot, garnished with extra scallion greens.",
      "textZh": "揭盖再煮3分钟，撇去浮沫；热盛，撒额外葱绿。",
      "zhHint": "撇沫、热盛",
      "stateNote": {
        "visual": "Broth is clear amber; meatballs are firm but yield to gentle pressure.",
        "visualZh": "汤色清亮琥珀色；丸子紧实但轻压即弹。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Foam stops forming—only clean bubbles remain.",
        "signalZh": "浮沫不再新生，仅余洁净小泡。"
      }
    }
  ],
  "tips": [
    "Never skip the hand-mixing—it builds texture no machine can replicate.",
    "If using store-bought ground pork, add 1 tsp cold water per 100 g to restore juiciness.",
    "Clay pot stew improves after resting 5 minutes off heat—flavors deepen and fat settles."
  ],
  "tipsZh": [
    "手搅万不可省——机器无法复制这种筋道口感。",
    "若用市售肉末，每100克加1茶匙冷水补润。",
    "砂锅关火后静置5分钟再吃，滋味更醇、浮油自沉。"
  ],
  "relatedSlugs": [
    "clay-pot-tofu",
    "clay-pot-bok-choy-vermicelli"
  ],
  "image": "/images/recipes/clay-pot-meatballs.webp"
};
