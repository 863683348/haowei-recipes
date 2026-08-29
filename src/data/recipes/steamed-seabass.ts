import type { Recipe } from "@/lib/types";

/** Steamed Sea Bass (清蒸鲈鱼) — Seed batch */
export const steamed_seabass: Recipe = {
  "id": "qing-zheng-lu-yu",
  "slug": "steamed-seabass",
  "titleEn": "Steamed Sea Bass",
  "titleZh": "清蒸鲈鱼",
  "pinyin": "qīng zhēng lú yú",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses whole small sea bass (400–500 g), steamed with ginger-scallion aromatics and finished with hot oil — no heavy sauces or pre-marination. Restaurants often add oyster sauce or Shaoxing wine.",
  "versionNoteZh": "家庭版选用400–500克整条海鲈鱼，仅以姜葱去腥，最后泼热油激香；餐馆版常加蚝油或绍兴酒。",
  "tags": [
    "30-min",
    "weeknight",
    "dinner-party"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Liwan District steamed one whole sea bass every Lunar New Year Eve — he’d score the fish, tuck ginger and scallion inside the cavity, and serve it whole on a porcelain platter. 'First bite for elders,' he’d say, pouring hot oil just before lifting the chopsticks.",
  "storyZh": "我在广州荔湾区的舅舅每逢除夕必蒸一整条海鲈鱼——他会在鱼身划刀，塞入姜片与葱段，盛于青花瓷盘上。他说‘第一筷敬长辈’，并在动筷前才浇滚油。",
  "ingredients": [
    {
      "id": "fi-01",
      "nameEn": "whole sea bass (or striped bass), scaled and gutted, ~450 g",
      "nameZh": "海鲈鱼（或加州鲈），去鳞去内脏，约450克",
      "pinyin": "hǎi lú yú huò jiā zhōu lú yú",
      "amountMetric": "450 g",
      "amountUS": "1 lb (whole, ~12 inches)",
      "category": "protein",
      "pantry": "local",
      "note": "Ask fishmonger to scale and gut; substitute tilapia or cod if sea bass unavailable",
      "noteZh": "请鱼贩代为刮鳞去内脏；如无海鲈，可用罗非鱼或鳕鱼替代"
    },
    {
      "id": "gi-02",
      "nameEn": "fresh ginger, julienned",
      "nameZh": "生姜丝",
      "pinyin": "shēng jiāng sī",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sc-01",
      "nameEn": "scallions, white and green parts separated, both finely julienned",
      "nameZh": "小葱，葱白葱绿分开切丝",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ls-03",
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
      "id": "so-02",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Score both sides of fish with three diagonal cuts. Rub cavity and surface with 1 tsp ginger and 1 tsp scallion whites. Place remaining ginger and scallion whites inside cavity.",
      "textZh": "鱼身两面各斜切三刀。用1茶匙姜丝和1茶匙葱白丝搓揉鱼身及腹腔，余下姜葱白塞入鱼腹。",
      "zhHint": "划刀塞姜葱"
    },
    {
      "text": "Place fish on a heatproof plate lined with parchment or a steaming rack. Steam over high heat for 8 minutes (for 450 g fish).",
      "textZh": "将鱼置于垫烘焙纸或蒸架的耐热盘上，大火蒸8分钟（450克鱼）。",
      "zhHint": "垫纸防粘，大火蒸",
      "stateNote": {
        "visual": "Flesh turns opaque and flakes easily with a fork near the thickest part",
        "visualZh": "鱼肉最厚处呈乳白色，用叉子轻拨即散",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "high",
        "signal": "Clear liquid appears around edges, not milky or cloudy",
        "signalZh": "盘边渗出清亮汁水，非乳白浑浊"
      }
    },
    {
      "text": "Carefully remove fish. Pour off any accumulated liquid. Discard ginger and scallion inside cavity. Pat surface dry with paper towel.",
      "textZh": "小心取出鱼，倒掉盘中汁水；取出腹内姜葱，用厨房纸轻吸表面水汽。",
      "zhHint": "倒汁去姜，吸干水"
    },
    {
      "text": "Top fish with remaining scallion greens and 1 tsp fresh ginger. Drizzle evenly with light soy sauce and sesame oil.",
      "textZh": "鱼身铺上剩余葱绿丝和1茶匙鲜姜丝，均匀淋入生抽与香油。",
      "zhHint": "葱绿姜丝铺面，淋酱"
    },
    {
      "text": "Heat 15 ml (1 tbsp) neutral oil (e.g., canola or peanut) in a small pan until shimmering (170°C / 340°F). Immediately pour hot oil over scallions and ginger on fish.",
      "textZh": "另起小锅，将15毫升（1汤匙）无味油（如菜籽油或花生油）烧至微冒烟（约170°C），迅速淋在鱼身葱姜上。",
      "zhHint": "热油泼香",
      "stateNote": {
        "visual": "Oil sizzles vigorously and releases aromatic steam upon contact",
        "visualZh": "热油接触葱姜时剧烈嘶响，并升腾香气白雾",
        "timeRef": "Immediately after heating",
        "timeRefZh": "油热即泼",
        "heat": "high",
        "signal": "Light smoke just begins to rise from oil surface",
        "signalZh": "油面初见青烟"
      }
    }
  ],
  "tips": [
    "Always steam fish on a rack or parchment — direct contact with pooled water makes skin soggy.",
    "Pat dry before final oil pour — moisture prevents sizzle and aroma release.",
    "Use a kitchen thermometer: oil at 170°C gives ideal crispness without burning scallions."
  ],
  "tipsZh": [
    "蒸鱼务必垫蒸架或烘焙纸——直接接触积水会使鱼皮软塌。",
    "最终泼油前务必擦干鱼身——水分阻碍爆香与滋滋声。",
    "建议用厨房温度计：170°C油温可使葱姜酥香而不焦苦。"
  ],
  "relatedSlugs": [
    "shrimp-steamed-egg",
    "minced-pork-steamed-egg"
  ],
  "image": "/images/recipes/steamed-seabass.webp"
};
