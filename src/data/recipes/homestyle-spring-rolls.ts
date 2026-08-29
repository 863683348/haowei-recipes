import type { Recipe } from "@/lib/types";

/** Homestyle Spring Rolls (家常春卷) — Seed batch */
export const homestyle_spring_rolls: Recipe = {
  "id": "chun-juan",
  "slug": "homestyle-spring-rolls",
  "titleEn": "Homestyle Spring Rolls",
  "titleZh": "家常春卷",
  "pinyin": "jiā cháng chūn juǎn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses fresh cabbage and lean pork—no pre-cooked fillings or MSG. Crisp, golden, and lightly seasoned, unlike restaurant versions that often deep-fry twice or use thick wrappers.",
  "versionNoteZh": "家庭版用新鲜卷心菜和瘦肉，不加味精或预制馅料；外皮酥脆金黄、调味清淡，区别于餐馆常见的复炸或厚皮做法。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Yangpu District made these every Lunar New Year Eve—she’d roll them on a floured bamboo mat while telling stories about her mother selling spring rolls from a pushcart near Fuxing Park in the 1950s.",
  "storyZh": "我杨浦区的阿姨每年除夕都做这个，她一边在竹案板上撒粉擀卷，一边讲她母亲1950年代在复兴公园附近推车卖春卷的故事。",
  "ingredients": [
    {
      "id": "cj-01",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "200 g",
      "amountUS": "1 cup loosely packed",
      "category": "protein",
      "pantry": "local",
      "note": "85% lean preferred; substitute ground chicken if pork unavailable",
      "noteZh": "建议选用八分瘦肉；若无猪肉，可用鸡胸肉末替代"
    },
    {
      "id": "cj-02",
      "nameEn": "Napa cabbage",
      "nameZh": "大白菜",
      "pinyin": "dà bái cài",
      "amountMetric": "250 g",
      "amountUS": "3 cups shredded",
      "category": "produce",
      "pantry": "local",
      "note": "Core removed, finely shredded, then salted and squeezed dry",
      "noteZh": "去芯后切细丝，加盐腌10分钟并挤干水分"
    },
    {
      "id": "cj-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cj-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cj-05",
      "nameEn": "spring roll wrappers",
      "nameZh": "春卷皮",
      "pinyin": "chūn juǎn pí",
      "amountMetric": "16 sheets",
      "amountUS": "16 sheets (approx. 18 cm square)",
      "category": "staple",
      "pantry": "asian",
      "note": "Frozen or refrigerated; look for 'wonton wrappers' labeled 'spring roll' — NOT egg roll wrappers (thicker)",
      "noteZh": "冷冻或冷藏装；选标有‘春卷皮’的薄型面皮，勿用美式蛋卷皮（过厚）"
    }
  ],
  "steps": [
    {
      "text": "Finely shred Napa cabbage, toss with 1 tsp salt, and let sit 10 minutes. Squeeze firmly in a clean towel until no liquid drips out.",
      "textZh": "将大白菜切细丝，加1茶匙盐拌匀，静置10分钟；攥紧挤干水分。",
      "zhHint": "挤干是关键！",
      "stateNote": {
        "visual": "Cabbage shreds are pale green, limp, and very dry to the touch",
        "visualZh": "白菜丝呈浅绿色，柔软且触感干爽无水渍",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No moisture beads when twisted in towel",
        "signalZh": "拧毛巾时不见水珠渗出"
      }
    },
    {
      "text": "In a bowl, combine pork, drained cabbage, light soy sauce, sesame oil, 1/4 tsp white pepper, and 1 tsp minced scallion. Mix vigorously in one direction for 90 seconds until sticky and cohesive.",
      "textZh": "将猪肉末、挤干的白菜、生抽、香油、白胡椒粉和葱末放入碗中，顺同一方向用力搅打90秒至粘稠起胶。",
      "zhHint": "单向搅打才上劲",
      "stateNote": {
        "visual": "Mixture clings to chopsticks and leaves faint streaks on bowl sides",
        "visualZh": "馅料能挂住筷子，碗壁留下淡淡纹路",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "signal": "Resists separation when lifted with chopsticks",
        "signalZh": "用筷子挑起时不易散开"
      }
    },
    {
      "text": "Place 1 wrapper on clean surface with one corner pointing toward you. Spoon 2 tbsp filling near bottom corner. Fold bottom up over filling, fold sides inward, then roll tightly upward to seal.",
      "textZh": "取一张春卷皮，尖角朝前铺平；底部放2汤匙馅料，向上折底边，再折左右两边，最后向上卷紧封口。",
      "zhHint": "卷时轻压排气",
      "stateNote": {
        "visual": "Roll is compact, seam-side down, no bulging at ends",
        "visualZh": "春卷紧实，封口朝下，两端无鼓胀",
        "timeRef": "20 seconds per roll",
        "timeRefZh": "每只约20秒",
        "signal": "Wrapper adheres without extra water or egg wash",
        "signalZh": "面皮自然粘合，无需额外刷水或蛋液"
      }
    },
    {
      "text": "Heat neutral oil (e.g., canola) in a wok or deep skillet to 170°C / 340°F. Fry rolls in batches of 4, turning gently, until golden brown and crisp — about 3–4 minutes total.",
      "textZh": "锅中倒油，烧至170°C（340°F）；分批炸制，每批4只，轻翻至周身金黄酥脆，约3–4分钟。",
      "zhHint": "油温宁低勿高",
      "stateNote": {
        "visual": "Bubbles rise steadily around rolls; surface turns even light gold",
        "visualZh": "春卷周围持续冒细泡；表面呈均匀浅金色",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium-high",
        "signal": "First bubbles appear within 5 seconds of adding roll",
        "signalZh": "下锅5秒内即见细密气泡"
      }
    },
    {
      "text": "Drain on wire rack set over paper towels. Serve warm with light soy sauce or chili oil for dipping.",
      "textZh": "捞出放在铺纸巾的网架上沥油。趁热配生抽或辣椒油蘸食。",
      "zhHint": "现炸现吃最脆",
      "stateNote": {
        "visual": "Rolls glisten slightly but show no oil pooling",
        "visualZh": "春卷微泛油光，但无浮油积聚",
        "timeRef": "immediately after frying",
        "timeRefZh": "刚出锅时",
        "signal": "Edges audibly crisp when tapped lightly",
        "signalZh": "轻叩边缘发出清脆声"
      }
    }
  ],
  "tips": [
    "Use day-old cabbage—it’s drier and less watery than fresh.",
    "Fry at consistent medium-high heat: too low = greasy, too high = burnt outside/raw inside.",
    "Freeze uncooked rolls on parchment-lined tray, then bag—they fry straight from frozen (add 1 min)."
  ],
  "tipsZh": [
    "用隔夜大白菜，水分更少不易出水。",
    "保持中高火稳定油温：太低易吸油，太高则外焦里生。",
    "生胚可平铺烘焙纸冷冻定型，再装袋保存；无需解冻，直接炸，多炸1分钟即可。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/homestyle-spring-rolls.webp"
};
