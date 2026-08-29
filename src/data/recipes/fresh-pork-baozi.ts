import type { Recipe } from "@/lib/types";

/** Fresh Pork Baozi (鲜肉包) — Seed batch */
export const fresh_pork_baozi: Recipe = {
  "id": "xian-rou-bao",
  "slug": "fresh-pork-baozi",
  "titleEn": "Fresh Pork Baozi",
  "titleZh": "鲜肉包",
  "pinyin": "xiān ròu bāo",
  "cuisine": "面点小吃",
  "cuisineEn": "Steamed Bun",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 150,
  "servings": 12,
  "version": "family",
  "versionNote": "Family version uses hand-kneaded dough with natural fermentation—no instant yeast shortcuts. Filling is coarsely minced, not ground fine, for juicy texture.",
  "versionNoteZh": "家常版用手工揉面+自然发酵，不用即发干酵母。肉馅粗剁而非绞碎，保持多汁口感。",
  "tags": [
    "steamed-bun",
    "weekend-project",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Jinan ran a tiny baozi stall outside Baotu Spring Park for 37 years. Every morning at 4 a.m., he’d mince pork shoulder by hand while my grandmother folded each bun with exactly 18 pleats—never more, never less.",
  "storyZh": "我济南的舅舅在趵突泉公园外摆了37年包子摊。每天凌晨4点，他亲手剁猪肩肉，我奶奶则每个包子捏18道褶——不多不少。",
  "ingredients": [
    {
      "id": "frb-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Substitute bread flour (500 g) if dough feels too slack; add 10 g extra water",
      "noteZh": "若面团过软，可用高筋面粉（500 g）替代；加水10 g"
    },
    {
      "id": "frb-02",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "pinyin": "gān jiàomǔ",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Must be fresh—check expiry. Proof in warm milk before mixing",
      "noteZh": "须新鲜，查看保质期。先用温牛奶活化再拌入"
    },
    {
      "id": "frb-03",
      "nameEn": "ground pork shoulder (coarsely minced)",
      "nameZh": "猪前腿肉（粗剁）",
      "pinyin": "zhū qián tuǐ ròu",
      "amountMetric": "400 g",
      "amountUS": "1½ cups loosely packed",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher to coarsely mince—do NOT use pre-ground meat",
      "noteZh": "请肉铺粗剁，勿用现成绞肉"
    },
    {
      "id": "frb-04",
      "nameEn": "ginger",
      "nameZh": "姜",
      "pinyin": "jiāng",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp finely grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "frb-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "frb-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "frb-07",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "½ cup finely chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Proof yeast: Warm 120 ml whole milk to 35°C (95°F). Stir in yeast and 5 g sugar. Let sit 5–8 minutes until foamy and doubled in volume.",
      "textZh": "活化酵母：将全脂牛奶120 ml加热至35°C（95°F），加入酵母和5 g糖搅匀，静置5–8分钟至表面起泡、体积翻倍。",
      "zhHint": "酵母要活化",
      "stateNote": {
        "visual": "Creamy, bubbly foam covering surface",
        "visualZh": "表面浮起细腻泡沫",
        "timeRef": "5–8 minutes",
        "timeRefZh": "5–8 分钟",
        "heat": "medium-low",
        "signal": "Bubbles break steadily at surface",
        "signalZh": "表面持续冒出细密气泡"
      }
    },
    {
      "text": "Make dough: In a large bowl, mix flour and 5 g salt. Pour in yeast mixture and 180 ml warm water (35°C). Stir with chopsticks until shaggy, then knead 12 minutes by hand until smooth and elastic.",
      "textZh": "和面：大碗中混合面粉与5 g盐。倒入酵母液及180 ml温水（35°C），筷子搅成絮状后手揉12分钟至光滑有弹性。",
      "zhHint": "揉到能拉出薄膜",
      "stateNote": {
        "visual": "Dough pulls away cleanly from bowl and feels soft but taut",
        "visualZh": "面团离盆干净，触感柔软而紧实",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "Dough passes windowpane test (thin, translucent sheet when stretched)",
        "signalZh": "可拉出透光薄膜（扩展膜测试）"
      }
    },
    {
      "text": "First rise: Cover bowl with damp cloth. Let rest in warm spot (25–28°C) until doubled—about 90 minutes. Gently punch down and divide into 12 equal pieces (≈75 g each). Cover and rest 15 minutes.",
      "textZh": "第一次发酵：盖湿布，置于温暖处（25–28°C）发酵至两倍大，约90分钟。轻按排气，均分12份（每份约75 g），盖布松弛15分钟。",
      "zhHint": "发酵要到位",
      "stateNote": {
        "visual": "Dough puffs visibly; finger indentation holds slowly",
        "visualZh": "面团体积明显膨大；手指轻按缓慢回弹",
        "timeRef": "90 minutes",
        "timeRefZh": "90 分钟",
        "signal": "Dough springs back slowly when poked",
        "signalZh": "轻戳后缓慢回弹"
      }
    },
    {
      "text": "Make filling: Combine pork, ginger, light soy sauce, sesame oil, scallions, 5 g white pepper, and 10 g sugar. Stir vigorously in one direction for 3 minutes until sticky and glossy.",
      "textZh": "调馅：将猪肉、姜末、生抽、香油、葱末、白胡椒粉5 g、糖10 g混匀，顺一个方向搅打3分钟至黏稠发亮。",
      "zhHint": "顺一个方向搅上劲",
      "stateNote": {
        "visual": "Filling clings tightly to chopsticks and glistens",
        "visualZh": "馅料紧裹筷子，泛出油亮光泽",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "No liquid pools around edges when spooned onto plate",
        "signalZh": "勺盛起时无汁水渗出"
      }
    },
    {
      "text": "Assemble: Flatten each dough piece into 10 cm circle. Place 40 g filling in center. Pleat and pinch closed with 18 folds, twisting top to seal. Place seam-side down on parchment. Rest uncovered 20 minutes.",
      "textZh": "包制：将每块面团擀成10 cm圆皮，放40 g馅于中央，左手托底，右手沿边捏18道褶，收口拧紧。褶口朝下置于烘焙纸上，醒发20分钟。",
      "zhHint": "18褶是老济南标准",
      "stateNote": {
        "visual": "Buns swell slightly; surface looks taut and moist",
        "visualZh": "包子略鼓起，表面紧致微润",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Slight puffing at base; no visible cracks",
        "signalZh": "底部微鼓，无裂纹"
      }
    },
    {
      "text": "Steam: Bring water in bamboo steamer to rolling boil. Arrange buns with 3 cm space. Steam on high heat 12 minutes. Turn off heat—wait 3 minutes before lifting lid.",
      "textZh": "蒸制：竹蒸笼水烧滚。包子间隔3 cm码放。大火蒸12分钟。关火后焖3分钟再揭盖。",
      "zhHint": "关火焖3分钟防塌陷",
      "stateNote": {
        "visual": "Buns plump and gleam with subtle sheen",
        "visualZh": "包子饱满，表面泛微光",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "high",
        "signal": "Steam escapes thickly from lid edge",
        "signalZh": "蒸汽从盖边浓密涌出"
      }
    }
  ],
  "tips": [
    "Use room-temp pork—cold fat won’t emulsify properly",
    "Never skip the 3-minute stir—this builds binding protein",
    "Freeze unsteamed buns on tray first, then bag for up to 3 months"
  ],
  "tipsZh": [
    "猪肉需回温至室温，冷肉脂肪无法乳化",
    "搅打3分钟不可省，这是形成黏性蛋白的关键",
    "生坯冷冻先平铺速冻，再装袋，可存3个月"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/fresh-pork-baozi.webp"
};
