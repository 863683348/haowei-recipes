import type { Recipe } from "@/lib/types";

/** Homemade Shacha Sauce (Sha Cha Jiang) (沙茶酱) — Day batch */
export const homemade_shacha_sauce: Recipe = {
  "id": "sha-cha-jiang",
  "slug": "homemade-shacha-sauce",
  "titleEn": "Homemade Shacha Sauce (Sha Cha Jiang)",
  "titleZh": "沙茶酱",
  "pinyin": "shā chá jiàng",
  "cuisine": "潮汕菜",
  "cuisineEn": "Teochew (Chaozhou)",
  "region": "Guangdong",
  "regionZh": "广东潮汕",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 16,
  "version": "family",
  "versionNote": "The family version uses unsweetened peanut butter and dried shrimp for the savoury backbone, avoiding hard-to-source ingredients like fried shallot crisps made from scratch. Teochew restaurant versions add more dried shrimp, sometimes dried flatfish powder, and cook the sauce much longer for a deeper, almost caramelised base.",
  "versionNoteZh": "家庭版用无糖花生酱和虾米打底，不追求自制油葱酥这类难备的原料。潮汕餐馆版虾米用量更大，有时加大地鱼粉，并炒制更久，酱底更深、近乎焦糖化。",
  "tags": [
    "condiment",
    "make-ahead",
    "umami",
    "pantry-staple"
  ],
  "dietary": [
    "none"
  ],
  "story": "Shacha sauce came back to Chaozhou with Teochew merchants who had tasted satay in Southeast Asia, and the name itself is a transliteration of that word. My family used it two ways: a spoonful stirred into noodle soup, and a bigger spoonful rubbed onto beef before it hit the grill.",
  "storyZh": "沙茶酱是潮汕商人从南洋尝到沙爹后带回的，「沙茶」二字正是 satay 的音译。我家有两种用法：一勺搅进汤面里，或者一大勺抹在牛肉上再拿去烤。",
  "ingredients": [
    {
      "id": "sc-01",
      "nameEn": "dried shrimp",
      "nameZh": "虾米",
      "amountMetric": "40 g",
      "amountUS": "1/3 cup",
      "category": "protein",
      "pantry": "asian",
      "termKey": "shrimp",
      "note": "Soak in warm water 20 minutes, drain and chop finely. This is the umami backbone."
    },
    {
      "id": "sc-02",
      "nameEn": "shallots",
      "nameZh": "红葱头",
      "amountMetric": "150 g",
      "amountUS": "5-6 shallots",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute with 1 large onion if shallots are unavailable, though the flavour is sweeter."
    },
    {
      "id": "sc-03",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "60 g",
      "amountUS": "12 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sc-04",
      "nameEn": "dried red chillies",
      "nameZh": "干辣椒",
      "amountMetric": "20 g",
      "amountUS": "8-10 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "sc-05",
      "nameEn": "unsweetened peanut butter",
      "nameZh": "无糖花生酱",
      "amountMetric": "80 g",
      "amountUS": "1/3 cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Must be unsweetened and unsalted; sweetened peanut butter will ruin the sauce."
    },
    {
      "id": "sc-06",
      "nameEn": "toasted sesame paste",
      "nameZh": "芝麻酱",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-paste"
    },
    {
      "id": "sc-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sc-08",
      "nameEn": "fish sauce",
      "nameZh": "鱼露",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "fish-sauce"
    },
    {
      "id": "sc-09",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "sc-10",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sc-11",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "200 ml",
      "amountUS": "3/4 cup + 1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak dried shrimp in warm water for 20 minutes until softened. Drain, pat dry and mince finely. Finely chop shallots, garlic and chillies, or blitz in a food processor to a coarse paste.",
      "textZh": "虾米用温水泡20分钟至回软。沥干吸干水分后剁细。红葱头、大蒜和干辣椒切细，或用料理机打成粗泥。",
      "zhHint": "虾米泡软剁细，葱蒜椒打粗泥",
      "stateNote": {
        "visual": "Shrimp is pliable and deep orange; aromatics form a coarse, moist paste",
        "visualZh": "虾米柔软呈深橙色；辛香料成湿润的粗泥状",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "Shrimp has no hard centre left and smells strongly of the sea"
      },
      "tip": "Dry the shrimp well — any water will make the oil spit violently."
    },
    {
      "text": "Pour the oil into a heavy pan over medium-low heat. Add shallots and garlic and fry gently for 12 minutes, stirring often, until golden and soft.",
      "textZh": "厚底锅倒入食用油，中小火下红葱头和蒜末，慢炸12分钟，勤加搅拌至金黄变软。",
      "zhHint": "中小火慢炸12分钟",
      "stateNote": {
        "visual": "Shallots and garlic turn even golden; oil is clear and fragrant",
        "visualZh": "葱蒜均匀变金黄，油色清亮且香气浓郁",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low",
        "signal": "Bubbling is slow and steady; nothing has browned past golden"
      },
      "tip": "Keep the heat low. Burnt garlic turns the whole jar bitter."
    },
    {
      "text": "Add minced dried shrimp and chillies. Fry for 5 minutes until the shrimp is crisp and the oil smells strongly of seafood.",
      "textZh": "加入虾米末和辣椒，继续炸5分钟，至虾米微脆、油中透出浓郁海鲜香。",
      "zhHint": "下虾米辣椒炸5分钟",
      "stateNote": {
        "visual": "Shrimp deepens to brownish-orange and looks slightly crisped; chillies darken",
        "visualZh": "虾米转为褐橙、略显焦脆；辣椒颜色变深",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Oil surface is dotted with tiny even bubbles and smells of toasted shrimp"
      }
    },
    {
      "text": "Lower the heat. Add peanut butter, sesame paste, five-spice and sugar, and stir constantly for 4 minutes until the pastes melt into the oil.",
      "textZh": "转小火，加入花生酱、芝麻酱、五香粉和白糖，不停搅拌4分钟至酱料融进油中。",
      "zhHint": "小火搅入酱料4分钟",
      "stateNote": {
        "visual": "Mixture becomes a uniform reddish-brown paste with oil beginning to separate at the edges",
        "visualZh": "混合物变成均匀的赭红色酱体，边缘开始析出油分",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "low",
        "signal": "Spatula leaves a clear trail that slowly closes; no dry lumps remain"
      }
    },
    {
      "text": "Stir in light soy sauce and fish sauce. Cook for 3 more minutes, stirring, until the sauce darkens and the raw soy edge cooks off.",
      "textZh": "加入生抽和鱼露，继续搅拌煮3分钟，至酱色变深、生酱油味散去。",
      "zhHint": "加酱油鱼露再煮3分钟",
      "stateNote": {
        "visual": "Sauce is dark, glossy mahogany with a layer of red oil floating on top",
        "visualZh": "酱体呈深亮赭红，表面浮起一层红油",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Smell is rounded and savoury rather than sharply salty"
      }
    },
    {
      "text": "Cool completely, then spoon into a sterilised glass jar. Press a layer of the separated oil over the surface, seal, and refrigerate.",
      "textZh": "完全冷却后装入消毒玻璃罐。把析出的红油盖在表面封住，密封冷藏。",
      "zhHint": "冷却装罐，红油封面冷藏",
      "stateNote": {
        "visual": "Jar contents are a thick dark paste under a clear red-orange oil seal",
        "visualZh": "罐中是浓稠深酱，上面覆着一层橙红清油封层",
        "timeRef": "30 minutes cooling",
        "timeRefZh": "冷却30分钟",
        "signal": "Sauce is completely at room temperature before the lid goes on; no condensation forms"
      },
      "tip": "Keeps 3 months refrigerated. Always use a clean dry spoon."
    }
  ],
  "tips": [
    "Keep the heat low throughout — high heat makes garlic bitter and ruins the jar.",
    "The oil layer on top is a natural seal; do not stir it away.",
    "Use it to marinate beef or lamb, or stir a spoonful into noodle soup."
  ],
  "tipsZh": [
    "全程小火，火大则蒜发苦、整罐报废。",
    "表面那层红油是天然封层，别搅掉。",
    "可用来腌牛羊肉，或舀一勺搅进汤面里。"
  ],
  "relatedSlugs": [
    "shacha-beef-brisket",
    "sesame-sauce-dipping-sauce",
    "oil-dipping-bowl"
  ],
  "image": "/images/recipes/oil-dipping-bowl.webp"
};
