import type { Recipe } from "@/lib/types";

/** Man-Han Family Feast Combo (满汉家宴组合) — Seed batch */
export const man_han_family_feast_combo: Recipe = {
  "id": "man-han-jia-yan-zu-he",
  "slug": "man-han-family-feast-combo",
  "titleEn": "Man-Han Family Feast Combo",
  "titleZh": "满汉家宴组合",
  "pinyin": "mǎn hàn jiā yàn zǔ hé",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 120,
  "servings": 6,
  "version": "family",
  "versionNote": "Simplified from imperial banquet dishes—no live pheasant or bear paw, just tender braised pork belly, steamed fish with ginger-scallion oil, and sweet lotus root cakes. All adapted for home wok and oven.",
  "versionNoteZh": "源自清代满汉全席的简化家庭版——不用野禽熊掌，只用五花肉、鲈鱼和藕饼，适配家用灶具与烤箱。",
  "tags": [
    "chinese-new-year-feast",
    "make-ahead",
    "celebration"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Beijing’s Hutong used to prepare this trio every Spring Festival Eve—she’d braise the pork belly overnight in a sandpot, steam the fish at dawn while singing old opera tunes, and let us kids press lotus root patties into round molds shaped like coins. 'Fullness first, then harmony,' she’d say.",
  "storyZh": "我北京胡同里的奶奶每年除夕都做这三道菜——五花肉砂锅慢炖整夜，清晨蒸鱼时哼着老戏，还让我们小孩把藕泥压进铜钱模子。'先满，再圆。'",
  "ingredients": [
    {
      "id": "mh-01",
      "nameEn": "pork belly, skin-on, cut into 4 cm cubes",
      "nameZh": "带皮五花肉，切4厘米方块",
      "pinyin": "dài pí wǔ huā ròu",
      "amountMetric": "800 g",
      "amountUS": "28 oz (about 1 large slab)",
      "category": "protein",
      "pantry": "local",
      "note": "Look for even marbling; avoid pre-sliced thin cuts.",
      "noteZh": "选肥瘦均匀的整块，勿用超市预切薄片。"
    },
    {
      "id": "mh-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "mh-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "mh-04",
      "nameEn": "dried shiitake mushrooms, rehydrated",
      "nameZh": "干香菇，泡发",
      "pinyin": "gān xiāng gū",
      "amountMetric": "50 g",
      "amountUS": "1/2 cup (about 8 large caps)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute fresh shiitakes if unavailable — add 5 min earlier.",
      "noteZh": "无干香菇可用鲜香菇替代——提前5分钟下锅。"
    },
    {
      "id": "mh-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp granulated sugar (substitute)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use granulated sugar if rock sugar unavailable; color will be lighter.",
      "noteZh": "无冰糖可用白砂糖替代；上色略浅。"
    }
  ],
  "steps": [
    {
      "text": "Blanch pork belly in boiling water with 1 tbsp Shaoxing wine for 3 minutes; drain and rinse under cold water.",
      "textZh": "五花肉冷水下锅，加1汤匙绍酒，水沸后煮3分钟，捞出冲凉水。",
      "zhHint": "去腥定型",
      "stateNote": {
        "visual": "Foam rises, meat turns opaque pink at edges",
        "visualZh": "水面浮沫，肉块边缘变不透明粉红",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Water returns to full boil within 90 seconds",
        "signalZh": "水在90秒内重新沸腾"
      }
    },
    {
      "text": "Heat wok over medium-high heat; add 1 tsp oil and sear pork until golden on all sides (~5 min). Transfer to slow cooker or heavy pot.",
      "textZh": "中大火烧热锅，加1茶匙油，将肉块煎至六面金黄（约5分钟），盛出备用。",
      "zhHint": "锁汁上色",
      "stateNote": {
        "visual": "Deep amber crust forms, minimal splatter",
        "visualZh": "形成深琥珀色脆壳，溅油少",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "Meat releases easily from pan when crust is set",
        "signalZh": "脆壳形成后肉块自动离锅"
      }
    },
    {
      "text": "In same wok, stir-fry sliced rehydrated shiitakes and 1 tbsp minced ginger until fragrant (1 min). Add light soy sauce, Shaoxing wine, rock sugar, and 500 ml water. Simmer 10 min.",
      "textZh": "原锅爆香姜末与泡发香菇片（1分钟）；加生抽、绍酒、冰糖、500毫升水，小火煮10分钟。",
      "zhHint": "激香酱汁",
      "stateNote": {
        "visual": "Sauce bubbles gently, aroma intensifies",
        "visualZh": "酱汁微滚，香气明显增强",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "Surface shows fine, steady bubbles—not vigorous boil",
        "signalZh": "表面细密匀泡，非大滚"
      }
    },
    {
      "text": "Return pork to pot. Cover and braise on stove (or in oven at 160°C/320°F) for 1 hour 45 minutes, until fork-tender and sauce reduces by half.",
      "textZh": "肉块回锅，加盖焖煮1小时45分钟（或160°C烤箱同温），至筷子可轻松插入，酱汁收浓一半。",
      "zhHint": "文火入味",
      "stateNote": {
        "visual": "Sauce coats spoon thickly; meat fibers separate slightly when probed",
        "visualZh": "酱汁挂勺浓稠；筷子轻戳即散纤维",
        "timeRef": "1 hour 45 minutes",
        "timeRefZh": "1 小时 45 分钟",
        "heat": "low",
        "signal": "Sauce darkens to mahogany and clings to meat",
        "signalZh": "酱汁呈深褐色，紧裹肉块"
      }
    },
    {
      "text": "Gently stir in blanched bok choy stems (optional garnish) and simmer 2 more minutes. Serve hot in deep bowl with steamed rice.",
      "textZh": "轻拌入焯水的菜心梗（可选装饰），再煮2分钟。热盛深碗，配白米饭。",
      "zhHint": "清鲜点睛",
      "tip": "Braise up to 2 days ahead—flavor deepens. Reheat gently with splash of water.",
      "tipZh": "可提前2天做好，风味更醇；复热时加少许水防焦。"
    }
  ],
  "tips": [
    "Use a heavy-bottomed pot to prevent scorching during long braise",
    "Reserve 2 tbsp braising liquid to glaze steamed fish later",
    "Serve with lotus root cakes and whole steamed fish for full Man-Han combo"
  ],
  "tipsZh": [
    "务必用厚底锅，防长时间炖煮糊底",
    "留2汤匙卤汁，稍后淋在清蒸鱼上",
    "搭配藕饼与整条清蒸鱼，组成完整满汉家宴组合"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/man-han-family-feast-combo.webp"
};
