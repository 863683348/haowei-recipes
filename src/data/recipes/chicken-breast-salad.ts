import type { Recipe } from "@/lib/types";

/** Shanghai-Style Chicken Breast Salad (上海风味鸡胸肉沙拉) — Seed batch */
export const chicken_breast_salad: Recipe = {
  "id": "ji-xiong-rou-sha-la",
  "slug": "chicken-breast-salad",
  "titleEn": "Shanghai-Style Chicken Breast Salad",
  "titleZh": "上海风味鸡胸肉沙拉",
  "pinyin": "shang hai feng wei ji xiong rou sha la",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses blanched chicken and minimal dressing—no mayonnaise or heavy sauces, unlike Western-style versions.",
  "versionNoteZh": "家常版用白灼鸡胸配清爽酱汁，不加蛋黄酱或浓稠酱料，区别于西式鸡胸沙拉。",
  "tags": [
    "30-min",
    "weeknight",
    "healthy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Yangpu District made this every Sunday after morning market runs—she’d shred leftover boiled chicken breast into crisp lettuce and cucumber ribbons, then toss with a whisper of sesame oil and rice vinegar. It was our 'cooling' summer lunch before afternoon naps.",
  "storyZh": "我杨浦区的姑妈每逢周日早市回来就做这道菜——把隔夜白煮鸡胸撕成细丝，拌上脆生菜和黄瓜条，只淋一点点芝麻油和米醋。这是我们在午睡前三伏天的‘清热’午餐。",
  "ingredients": [
    {
      "id": "cr-01",
      "nameEn": "boneless, skinless chicken breast",
      "nameZh": "去骨去皮鸡胸肉",
      "pinyin": "qu gu qu pi ji xiong rou",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Look for pale pink, firm texture; avoid grayish or slimy surface.",
      "noteZh": "选淡粉色、质地紧实者；避免发灰或黏滑表面。"
    },
    {
      "id": "cr-02",
      "nameEn": "cucumber, julienned",
      "nameZh": "黄瓜（切细丝）",
      "pinyin": "huang gua",
      "amountMetric": "150 g",
      "amountUS": "1 cup",
      "category": "produce",
      "pantry": "local",
      "note": "English or Persian cucumbers preferred; no need to peel if thin-skinned.",
      "noteZh": "推荐英国黄瓜或波斯黄瓜；若表皮薄嫩，无需去皮。"
    },
    {
      "id": "cr-03",
      "nameEn": "romaine lettuce, torn",
      "nameZh": "罗马生菜（手撕）",
      "pinyin": "luo ma sheng cai",
      "amountMetric": "120 g",
      "amountUS": "4 cups loosely packed",
      "category": "produce",
      "pantry": "local",
      "note": "Crisp hearts only; avoid wilted outer leaves.",
      "noteZh": "只取脆嫩菜心；弃用萎蔫外叶。"
    },
    {
      "id": "cr-04",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "pinyin": "mi cu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "cr-05",
      "nameEn": "toasted sesame oil",
      "nameZh": "熟芝麻油",
      "pinyin": "shu zhi ma you",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Place chicken breast in a small pot; cover with cold water by 2 cm. Add 1 tsp light soy sauce and 1 tsp Shaoxing wine (optional). Bring to a gentle simmer over medium heat.",
      "textZh": "鸡胸肉入小锅，加冷水没过肉2厘米；加1茶匙生抽和1茶匙绍兴酒（可选）。中火加热至微沸。",
      "zhHint": "水沸即转小火",
      "stateNote": {
        "visual": "Small bubbles rise steadily around edges, not rolling boil.",
        "visualZh": "锅边持续冒小泡，非大滚。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium",
        "signal": "Surface turns opaque white with faint foam.",
        "signalZh": "表面变不透明乳白，浮起薄层泡沫。"
      }
    },
    {
      "text": "Reduce heat to low, cover, and poach gently for 12 minutes. Turn off heat and let rest, covered, for 10 more minutes.",
      "textZh": "转最小火，盖盖焖煮12分钟；关火后加盖静置10分钟。",
      "zhHint": "利用余热焖熟，肉质更嫩",
      "stateNote": {
        "visual": "Chicken is fully opaque with no pink near bone line (though boneless).",
        "visualZh": "鸡肉完全不透明，无粉红色泽。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Internal temp reaches 65°C (149°F) when checked with thermometer.",
        "signalZh": "用温度计测中心达65°C（149°F）。"
      }
    },
    {
      "text": "Drain chicken, rinse briefly under cool water, then pat dry. Chill in fridge for 15 minutes — this firms texture for clean shredding.",
      "textZh": "捞出鸡胸，用凉水快速冲一下，吸干水分。冷藏15分钟，使肉质紧实易撕。",
      "zhHint": "冷处理是关键，防散碎",
      "stateNote": {
        "visual": "Surface feels cool and slightly tacky, not wet.",
        "visualZh": "表面微凉略黏，不湿滑。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Firm to light press with finger.",
        "signalZh": "手指轻按有弹性。"
      }
    },
    {
      "text": "Shred chilled chicken crosswise into 2-mm-wide strips using two forks or fingers. Place in a large bowl.",
      "textZh": "将冷藏后的鸡胸横纹撕成2毫米宽细丝，用双叉或手指操作。放入大碗中。",
      "zhHint": "逆纹撕更易断纤维",
      "stateNote": {
        "visual": "Strips are even, springy, and separate cleanly—not mushy or clumped.",
        "visualZh": "细丝均匀、有弹性，不黏连不糊烂。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "No resistance when pulling apart with forks.",
        "signalZh": "用叉子轻拉即散开。"
      }
    },
    {
      "text": "Add cucumber and romaine. Whisk rice vinegar, sesame oil, ¼ tsp white pepper, and ½ tsp salt. Pour over salad and toss gently with chopsticks.",
      "textZh": "加入黄瓜丝和生菜。将米醋、芝麻油、¼茶匙白胡椒粉、½茶匙盐搅匀，淋入 salad 中，用筷子轻拌。",
      "zhHint": "筷子拌防压碎蔬菜",
      "stateNote": {
        "visual": "Dressing coats ingredients evenly but doesn’t pool at bottom.",
        "visualZh": "酱汁均匀裹住食材，底部无积液。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Lettuce leaves glisten lightly, not soaked.",
        "signalZh": "生菜叶泛微光，不湿透。"
      }
    }
  ],
  "tips": [
    "Poaching time depends on thickness—use a meat thermometer: 65°C (149°F) is perfect.",
    "For extra umami, add ½ tsp oyster sauce to dressing (termKey: oyster-sauce).",
    "Serve within 30 minutes—this salad loses crispness if dressed too early."
  ],
  "tipsZh": [
    "焖煮时间依厚度而定，建议用温度计确认中心达65°C（149°F）为佳。",
    "如需增鲜，可在酱汁中加½茶匙蚝油（termKey: oyster-sauce）。",
    "建议拌好30分钟内食用，久置会失脆。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/chicken-breast-salad.webp"
};
