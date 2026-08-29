import type { Recipe } from "@/lib/types";

/** Cantonese-Style Hot Pot (Da Bian Lu) (打边炉) — Seed batch */
export const da_bian_lu: Recipe = {
  "id": "da-bian-lu",
  "slug": "da-bian-lu",
  "titleEn": "Cantonese-Style Hot Pot (Da Bian Lu)",
  "titleZh": "打边炉",
  "pinyin": "dǎ biān lú",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "True Guangzhou da bian lu uses a clear, delicate broth built on dried seafood and poultry — no chili, no heavy spices. My grandmother in Liwan District made it weekly using her own dried shrimp stock.",
  "versionNoteZh": "正宗广州打边炉以干海产+鸡骨吊清汤，无辣无重料。荔湾奶奶每周用自晒虾米熬底汤。",
  "tags": [
    "weeknight",
    "light",
    "seafood"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Sunday at my grandmother’s Liwan apartment, she’d set up a brass da bian lu burner with a porcelain pot — first a clear chicken-and-shrimp broth, then thin-sliced beef, prawns, fish balls, and baby bok choy. She said, 'The pot sings when it’s ready — listen for the soft *pop-pop*.'",
  "storyZh": "每周日，奶奶在荔湾老屋摆起铜炉瓷锅：先吊一锅清鸡汤虾米汤，再涮薄牛肉、鲜虾、鱼丸和娃娃菜。她说：‘锅唱起来了——听那轻轻的‘噗噗’声。’",
  "ingredients": [
    {
      "id": "db-01",
      "nameEn": "chicken thighs (bone-in, skin-on)",
      "nameZh": "鸡腿（带骨带皮）",
      "pinyin": "jī tuǐ",
      "amountMetric": "400 g",
      "amountUS": "14 oz (2 thighs)",
      "category": "protein",
      "pantry": "local",
      "note": "Bone-in adds body to broth. Sub: chicken wings (300 g / 10.5 oz).",
      "noteZh": "带骨带皮增汤厚感；可替代：鸡翅（300 克）。"
    },
    {
      "id": "db-02",
      "nameEn": "dried shrimp",
      "nameZh": "虾米",
      "pinyin": "xiā mǐ",
      "amountMetric": "20 g",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for pinkish-orange, fragrant pieces. Sub: 1 tsp shrimp paste + 1 tsp fish sauce (add at end).",
      "noteZh": "选橙粉色、干香不霉者；可替代：虾酱1茶匙+鱼露1茶匙（关火前加）。"
    },
    {
      "id": "db-03",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "pinyin": "gān xiāng gū",
      "amountMetric": "8 g",
      "amountUS": "4 large caps",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in 200 ml warm water 20 min. Reserve soaking liquid.",
      "noteZh": "温水泡发20分钟；泡发水留用。"
    },
    {
      "id": "db-04",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "½ cup, cut into 3-cm lengths",
      "category": "produce",
      "pantry": "local",
      "note": "Use white and green parts separately — whites for broth, greens for garnish.",
      "noteZh": "葱白入汤，葱绿作饰。",
      "termKey": "scallion"
    },
    {
      "id": "db-05",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup, smashed",
      "category": "produce",
      "pantry": "local",
      "note": "Smash (don’t slice) to release oils slowly.",
      "noteZh": "拍松（勿切片），缓释姜油。",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken thighs and place in a large pot with 1.8 L cold water, dried shrimp, soaked shiitakes (with soaking liquid), ginger, and scallion whites. Bring to a gentle boil over medium-high heat, then immediately lower to low and skim any foam.",
      "textZh": "鸡腿洗净入锅，加1.8升冷水、虾米、泡发香菇（连水）、姜块、葱白。中大火烧开即转小火，撇净浮沫。",
      "zhHint": "清汤去浮沫是关键",
      "stateNote": {
        "visual": "Surface shows fine white foam; broth remains almost translucent.",
        "visualZh": "汤面浮细白沫；汤体几近透亮。",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "heat": "low",
        "signal": "Foam diminishes and broth clarifies — no cloudiness remains.",
        "signalZh": "浮沫减退，汤色澄澈无浑浊。"
      }
    },
    {
      "text": "Simmer uncovered for 40 minutes, stirring gently every 10 minutes. Skim fat occasionally — aim for a clean, golden broth with delicate aroma.",
      "textZh": "敞盖小火炖40分钟，每10分钟轻搅一次。适时撇浮油，追求清亮金汤与淡雅鲜香。",
      "zhHint": "文火慢吊，汤色澄亮",
      "stateNote": {
        "visual": "Broth glistens gold-yellow; tiny oil beads gather at surface edge.",
        "visualZh": "汤色金黄微亮；油珠聚于锅沿。",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "low",
        "signal": "Aroma is sweet, oceanic, and faintly earthy — no raw poultry scent.",
        "signalZh": "香气清甜带海味与微土香，无生禽腥气。"
      }
    },
    {
      "text": "Strain broth through a fine-mesh sieve into a clean pot. Discard solids except shiitake caps — slice them thinly and return to broth.",
      "textZh": "用细网筛滤汤入净锅。弃鸡骨、虾米、姜葱，唯留香菇切片回汤。",
      "zhHint": "滤渣留菇，汤更清爽",
      "stateNote": {
        "visual": "Broth pours clear and shimmering; sliced shiitakes float like petals.",
        "visualZh": "汤液清亮流淌；香菇片如花瓣浮游。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No sediment passes through sieve; broth feels silky on spoon.",
        "signalZh": "无渣漏下；汤挂勺成丝滑感。"
      }
    },
    {
      "text": "Bring strained broth back to a gentle simmer over medium-low heat. Stir in 1 tsp light soy sauce (15 ml) and ½ tsp white pepper (1 g) — just enough to lift flavor, not dominate.",
      "textZh": "滤清汤回锅，中低火微沸。加生抽15毫升、白胡椒粉1克，仅提味不抢鲜。",
      "zhHint": "点睛调味，不掩本味",
      "stateNote": {
        "visual": "Broth steams lightly; pepper specks disperse evenly.",
        "visualZh": "汤面轻冒热气；胡椒粒均匀弥散。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Aromas blend seamlessly — no single note overpowers.",
        "signalZh": "诸香交融，无一味独显。"
      }
    },
    {
      "text": "Transfer to a tabletop hot pot. Arrange raw ingredients around: paper-thin beef, peeled prawns, fish balls, enoki mushrooms, and baby bok choy. Serve with dipping sauce: light soy + sesame oil + minced scallion greens.",
      "textZh": "转入桌边炉。围摆食材：极薄牛肉片、去壳虾仁、鱼丸、金针菇、娃娃菜。蘸料：生抽+芝麻油+葱绿末。",
      "zhHint": "围炉而食，食材现烫",
      "stateNote": {
        "visual": "Broth simmers steadily at center; raw ingredients glisten on chilled plates.",
        "visualZh": "锅心汤稳沸；生鲜食材在冷盘中泛光。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "medium-high",
        "signal": "First dip of beef turns opaque in 8–10 seconds.",
        "signalZh": "牛肉片入锅8–10秒即变不透明。"
      }
    }
  ],
  "tips": [
    "For authentic texture, freeze beef 45 minutes before slicing — it firms up and allows paper-thin cuts with a chef’s knife.",
    "If dried shrimp is unavailable, use 10 g (¼ cup) finely chopped rehydrated dried scallops instead.",
    "Always serve broth piping hot — lukewarm da bian lu loses its soul."
  ],
  "tipsZh": [
    "为获薄片口感，牛肉冷冻45分钟再切——易得纸薄片。",
    "缺虾米可用10克（¼杯）泡发干贝碎替代。",
    "务必滚烫上桌——温吞的打边炉失其魂。"
  ],
  "relatedSlugs": [
    "lamb-scorpion-hot-pot"
  ],
  "image": "/images/recipes/da-bian-lu.webp"
};
