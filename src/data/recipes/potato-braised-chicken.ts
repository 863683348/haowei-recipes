import type { Recipe } from "@/lib/types";

/** Braised Chicken with Potatoes (土豆烧鸡) (土豆烧鸡) — Day batch */
export const potato_braised_chicken: Recipe = {
  "id": "potato-braised-chicken",
  "slug": "potato-braised-chicken",
  "titleEn": "Braised Chicken with Potatoes (土豆烧鸡)",
  "titleZh": "土豆烧鸡",
  "pinyin": "tǔ dòu shāo jī",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide (China / Northeast)",
  "regionZh": "全国（东北家常）",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurants (and every 东北 stew house) brown the chicken hard, add boiling water, and hold it at a rolling simmer so the broth emulsifies opaque and gold. The home version browns less aggressively and simmers gentler, which keeps the broth clearer and the potato chunks intact — worth losing a little richness for.",
  "versionNoteZh": "餐馆和东北炖菜馆会把鸡块猛煎上色，加滚水大火滚煮，让汤汁乳化成奶白金色。家常版上色温和、小火慢炖，汤色更清、土豆块也不散——少一点浓香换来完整的土豆，值得。",
  "tags": [
    "home-style",
    "chicken",
    "potato",
    "braise",
    "one-pot",
    "family-dinner"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Chinese family has a version of this, usually learned by watching rather than measuring. The potatoes are not a vegetable side; they are half the point. They go in late enough to stay whole, absorb the chicken fat and soy, and come out tasting more interesting than the chicken. The trick nobody writes down: pour the gravy over rice and give the potatoes a head start.",
  "storyZh": "中国家家都有这道菜，多半是看会的而不是量出来的。土豆不是配菜，它占了半壁江山。它下得够晚所以能保持完整，吸足鸡油和酱油，最后比鸡还好吃。没人写进食谱的诀窍是：把汤汁浇在饭上，先给土豆留个位置。",
  "ingredients": [
    {
      "id": "pbc-chicken",
      "nameEn": "bone-in chicken thighs, cut into 4 cm pieces",
      "nameZh": "带骨鸡腿（斩成 4 厘米块）",
      "amountMetric": "700 g",
      "amountUS": "about 1.5 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Bone-in thighs stay juicy through a 30-minute braise. Boneless breast will dry out.",
      "noteZh": "带骨鸡腿炖半小时也不柴。鸡胸肉会发干。"
    },
    {
      "id": "pbc-potato",
      "nameEn": "waxy potatoes, cut into 3 cm chunks",
      "nameZh": "土豆（切 3 厘米滚刀块）",
      "amountMetric": "2 large (about 400 g)",
      "amountUS": "2 large (about 14 oz)",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pbc-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pbc-garlic",
      "nameEn": "garlic cloves, smashed",
      "nameZh": "蒜瓣（拍扁）",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "pbc-scallion",
      "nameEn": "scallion, cut into 3 cm lengths",
      "nameZh": "葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "pbc-lightsoy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pbc-darksoy",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "pbc-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: dry sherry.",
      "noteZh": "替代：干雪利酒。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "pbc-sugar",
      "nameEn": "rock sugar (or granulated)",
      "nameZh": "冰糖（或白糖）",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "pbc-anise",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1",
      "amountUS": "1",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "pbc-chili",
      "nameEn": "dried red chilies (optional)",
      "nameZh": "干辣椒（可选）",
      "amountMetric": "2",
      "amountUS": "2",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "pbc-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse the chicken pieces and pat very dry. If there is time, leave them uncovered in the fridge 20 minutes — dry skin browns much better.",
      "textZh": "鸡块冲洗后彻底擦干。有时间的话放冰箱敞口 20 分钟——表皮越干越容易上色。",
      "zhHint": "擦干鸡块",
      "stateNote": {
        "visual": "No moisture on the surface; the skin looks taut and slightly tacky",
        "visualZh": "表面无水分；鸡皮紧绷、略带黏感",
        "timeRef": "20 minutes optional air-dry",
        "timeRefZh": "可选：晾 20 分钟",
        "signal": "Paper towel comes away clean and dry after pressing",
        "signalZh": "厨房纸按压后仍然干爽洁净"
      }
    },
    {
      "text": "Heat oil in a heavy pot over medium-high. Sear the chicken skin-side down without moving it for 4 minutes, then turn and brown the other sides, about 3 minutes total.",
      "textZh": "厚底锅中大火热油，鸡块皮朝下不动煎 4 分钟，再翻面把其余面煎上色，共约 3 分钟。",
      "zhHint": "煎香鸡块",
      "stateNote": {
        "visual": "Skin turns even golden brown and starts to crisp; rendered fat pools clear",
        "visualZh": "鸡皮变成均匀的金黄并开始变脆；逼出的油清澈",
        "heat": "medium-high",
        "timeRef": "7 minutes",
        "timeRefZh": "7 分钟",
        "signal": "The pieces release from the pot bottom easily — if they stick, they are not ready",
        "signalZh": "鸡块能轻松脱离锅底——如果粘住说明还没到时候"
      },
      "tip": "Do not crowd the pot or the chicken steams instead of browning. Sear in two batches.",
      "tipZh": "锅别挤，否则鸡块是蒸熟而不是煎香。分两批下。"
    },
    {
      "text": "Lower the heat to medium. Add ginger, garlic, scallion, star anise and chilies. Stir 30 seconds until fragrant.",
      "textZh": "转中火，下姜片、蒜瓣、葱段、八角和干辣椒，炒 30 秒爆香。",
      "zhHint": "下香料爆香",
      "stateNote": {
        "visual": "Oil takes on a light golden tint; aromatics soften without browning",
        "visualZh": "油色泛出淡淡金黄；香料变软但没有焦黑",
        "heat": "medium",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "A clear anise and ginger aroma rises before any smoke",
        "signalZh": "八角和姜的香气清晰窜出，还没有冒烟"
      }
    },
    {
      "text": "Pour the Shaoxing wine down the side of the pot and let it bubble 20 seconds. Add both soy sauces and the sugar; stir to coat every piece.",
      "textZh": "沿锅边淋黄酒，让它沸腾 20 秒。加生抽、老抽和糖，翻炒让每块都裹上酱色。",
      "zhHint": "烹酒调味",
      "stateNote": {
        "visual": "Chicken takes on a glossy reddish-brown coat; liquid at the bottom is dark but not thick",
        "visualZh": "鸡块裹上红亮酱色；锅底液体颜色深但不稠",
        "heat": "medium",
        "timeRef": "about 40 seconds",
        "timeRefZh": "约 40 秒",
        "signal": "The harsh alcohol smell cooks off and leaves sweetness behind",
        "signalZh": "刺鼻的酒味挥发后留下甜香"
      }
    },
    {
      "text": "Add 400 ml hot water — it should come about two-thirds up the chicken. Bring to a boil, then cover and simmer over low heat 15 minutes.",
      "textZh": "加 400 毫升热水——水量约到鸡块的三分之二高。大火煮开后加盖，小火炖 15 分钟。",
      "zhHint": "加热水慢炖",
      "stateNote": {
        "visual": "Broth turns amber and faintly opaque; tiny bubbles break slowly at the rim",
        "visualZh": "汤汁转为琥珀色、略带乳白；锅边缓慢冒细泡",
        "heat": "low",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "A chopstick pierces the thickest thigh piece with little resistance",
        "signalZh": "筷子能轻松扎透最厚的鸡腿肉"
      },
      "tip": "Hot water, never cold: cold water seizes the meat and stops the collagen breaking down.",
      "tipZh": "一定加热水：冷水会让肉质紧缩，胶原蛋白就不再转化了。"
    },
    {
      "text": "Add the potato chunks, pushing them into the broth. Cover and simmer another 12–15 minutes, until they are tender but still hold their corners.",
      "textZh": "下土豆块，让它们浸进汤里。加盖再炖 12–15 分钟，炖到软但不散。",
      "zhHint": "下土豆同炖",
      "stateNote": {
        "visual": "Potato edges soften slightly but don't crumble; broth thickens with their starch",
        "visualZh": "土豆边缘略软但没有散开；汤汁因土豆淀粉变得浓稠",
        "heat": "low",
        "timeRef": "12–15 minutes",
        "timeRefZh": "12–15 分钟",
        "signal": "A chopstick slides into a cube and meets only slight resistance at the center",
        "signalZh": "筷子扎进土豆块，只在中心遇到轻微阻力"
      }
    },
    {
      "text": "Uncover, raise the heat to medium-high, and reduce 4–5 minutes until the sauce is glossy and coats the chicken. Taste and adjust salt. Finish with scallion greens and serve in a deep bowl over rice.",
      "textZh": "开盖转中大火，收汁 4–5 分钟到酱汁发亮并挂住鸡块。尝味补盐，撒葱绿，连汤盛进深碗里配米饭。",
      "zhHint": "大火收汁",
      "stateNote": {
        "visual": "Sauce reduces by about a third and turns dark glossy; it clings instead of running",
        "visualZh": "酱汁收掉约三分之一，转为深褐发亮；能挂住食材而不是流散",
        "heat": "medium-high",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "signal": "The spatula leaves a visible trail on the pot bottom for a second",
        "signalZh": "锅铲划过锅底的痕迹能停留一秒"
      }
    }
  ],
  "tips": [
    "Hot water only. Cold water tightens the meat and you lose tenderness.",
    "Potatoes go in at the halfway point — earlier and they dissolve into the sauce.",
    "Reduce uncovered at the end; that glossy finish is what separates a braise from a stew.",
    "Even better reheated the next day — keep the leftover gravy and toss it with noodles."
  ],
  "tipsZh": [
    "只能加热水。冷水会让肉紧缩，口感就柴了。",
    "土豆在时间点的一半才下——早了就化进汤里了。",
    "最后一定要开盖收汁；那层亮芡是「烧」和「炖」的区别。",
    "隔天回热更好吃——剩下的汤汁拌面条是一绝。"
  ],
  "relatedSlugs": [
    "potato-beef-stew",
    "huangmen-chicken",
    "hongshao-chicken"
  ],
  "image": "/images/recipes/chicken-mushroom-stew.webp"
};
