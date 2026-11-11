import type { Recipe } from "@/lib/types";

/** Sugarcane and Water Chestnut Drink (竹蔗马蹄水) — Day batch */
export const sugarcane_water_chestnut_drink: Recipe = {
  "id": "sugarcane-water-chestnut-drink",
  "slug": "sugarcane-water-chestnut-drink",
  "titleEn": "Sugarcane and Water Chestnut Drink",
  "titleZh": "竹蔗马蹄水",
  "pinyin": "zhú zhè mǎ tí shuǐ",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 70,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version simmers sugarcane, water chestnuts and carrot for an hour and drinks it warm or chilled; the herbal-shop version adds imperata root and is sold as a 'cooling' remedy. The home version is the one children actually drink.",
  "versionNoteZh": "家常版把竹蔗、马蹄、胡萝卜煮一小时，温饮或冷藏；凉茶铺会加茅根，当作「清热」方子卖。小孩子真正愿意喝的是家常版。",
  "tags": [
    "cooling-drink",
    "cantonese",
    "1-hour",
    "summer",
    "kid-friendly"
  ],
  "dietary": [
    "vegan",
    "gluten-free",
    "low-sodium"
  ],
  "story": "This is the drink Cantonese mothers make instead of soda. It shows up at hot-pot dinners, at children's birthday parties and in thermoses on school trips, always the same pale gold colour. The sugarcane is there for a clean sweetness that never cloys, and the water chestnuts for a faint starchy roundness you cannot get from sugar alone.",
  "storyZh": "这是广东母亲用来代替汽水的那一杯。火锅桌上、小孩生日会、上学的水壶里，都是它，永远是同一种浅金色。竹蔗提供干净不腻的甜，马蹄提供一种单靠糖做不出的、带粉质的圆润。",
  "ingredients": [
    {
      "id": "swcd-01",
      "nameEn": "sugarcane, cut into sticks",
      "nameZh": "竹蔗",
      "pinyin": "zhú zhè",
      "amountMetric": "300 g",
      "amountUS": "2 long sticks",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sold pre-cut in Asian groceries, usually vacuum-packed. Split each stick lengthways so the juice can escape.",
      "noteZh": "亚超有切好的真空装。每根纵向劈开，甜汁才出得来。",
      "termKey": "sugarcane"
    },
    {
      "id": "swcd-02",
      "nameEn": "fresh water chestnuts",
      "nameZh": "马蹄",
      "pinyin": "mǎ tí",
      "amountMetric": "150 g",
      "amountUS": "8 pieces",
      "category": "produce",
      "pantry": "asian",
      "note": "Peel them and cut in half. Canned ones work if you rinse off the brine, but they are softer and sweeter.",
      "noteZh": "去皮对半切。罐装可用（冲掉盐水），但更软更甜。",
      "termKey": "water-chestnut"
    },
    {
      "id": "swcd-03",
      "nameEn": "carrot",
      "nameZh": "胡萝卜",
      "pinyin": "hú luó bo",
      "amountMetric": "120 g",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "note": "Classic in the home version - it sweetens the drink and gives it the amber colour.",
      "noteZh": "家常版的经典配料——增甜，也带来那层琥珀色。",
      "termKey": "carrot"
    },
    {
      "id": "swcd-04",
      "nameEn": "imperata root (mao gen), fresh or dried",
      "nameZh": "茅根",
      "pinyin": "máo gēn",
      "amountMetric": "20 g",
      "amountUS": "a small bundle",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Optional. It is the 'cooling' component in the herbal-shop version; skip it for a purely sweet drink.",
      "noteZh": "可省。这是凉茶铺版的「清热」主角；想喝纯甜的就别放。",
      "termKey": "sugarcane"
    },
    {
      "id": "swcd-05",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "1.5 litres",
      "amountUS": "6 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "swcd-06",
      "nameEn": "yellow rock sugar",
      "nameZh": "黄冰糖",
      "pinyin": "huáng bīng táng",
      "amountMetric": "15 g",
      "amountUS": "1-2 lumps",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Often unnecessary - the sugarcane and carrot sweeten it fully.",
      "noteZh": "通常不必加——竹蔗和胡萝卜已经够甜。",
      "termKey": "rock-sugar-raw"
    },
    {
      "id": "swcd-07",
      "nameEn": "aged dried tangerine peel",
      "nameZh": "陈皮",
      "pinyin": "chén pí",
      "amountMetric": "2 g",
      "amountUS": "1 small piece",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "One piece gives the drink a citrus lift and, Cantonese cooks insist, helps it 'go down'.",
      "noteZh": "一片就够了，添一层柑橘清气；广东师傅也坚持它能「顺气」。",
      "termKey": "dried-tangerine-peel"
    }
  ],
  "steps": [
    {
      "text": "Scrub the sugarcane sticks, then split each one lengthways into quarters with a heavy knife so the fibrous interior is exposed.",
      "textZh": "竹蔗刷洗干净，用厚刀每根纵向劈成四瓣，露出纤维内部。",
      "zhHint": "竹蔗劈开",
      "stateNote": {
        "visual": "Pale green skin on the outside, white fibrous pith inside once split",
        "visualZh": "外皮淡青，劈开后是白色纤维状蔗肉",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "A drop of juice beads on the cut face and tastes cleanly sweet - that is the whole flavour of the drink",
        "signalZh": "切面渗出汁珠，尝起来是干净的甜——这就是整杯的味道来源"
      },
      "tip": "Unsplit sticks release almost nothing; the fibre has to be cut through.",
      "tipZh": "不劈开的蔗几乎不出味，必须切断纤维。"
    },
    {
      "text": "Peel the water chestnuts and halve them; peel the carrot and cut it into thick coins.",
      "textZh": "马蹄去皮对半切；胡萝卜去皮切厚片。",
      "zhHint": "马蹄去皮对切",
      "stateNote": {
        "visual": "Water chestnuts are white and glossy, carrots bright orange",
        "visualZh": "马蹄洁白有光，胡萝卜橙亮",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "A cut chestnut is crisp enough to snap when you bite it; a soft one has been stored too long",
        "signalZh": "切开咬一下应该是脆断的；软的说明放太久了"
      }
    },
    {
      "text": "Put everything except the sugar into a large pot with the cold water, bring to a boil, then cover and simmer gently for 50 minutes.",
      "textZh": "除糖外全部材料加冷水入大锅，煮开后盖盖小火煮 50 分钟。",
      "zhHint": "小火煮 50 分钟",
      "stateNote": {
        "visual": "The liquid slowly turns from clear to a light golden amber; carrots go pale and the chestnuts dull",
        "visualZh": "汤色由清转浅金琥珀；胡萝卜褪色，马蹄失去光泽",
        "timeRef": "50 minutes",
        "timeRefZh": "50 分钟",
        "heat": "medium-low",
        "signal": "A sugarcane stick has gone from hard to slightly pliable - all its sugar is in the water now",
        "signalZh": "竹蔗从硬变到略能弯——糖分已经全煮进水里了"
      },
      "tip": "A bare simmer, not a rolling boil; hard boiling makes the drink cloudy.",
      "tipZh": "保持微沸，不要大滚；大滚会把汤煮浑。"
    },
    {
      "text": "Taste. Add the rock sugar only if it genuinely needs it, stir to dissolve, and simmer 5 more minutes.",
      "textZh": "尝味。真的不够甜才加冰糖，搅化后再煮 5 分钟。",
      "zhHint": "尝后再决定加糖",
      "stateNote": {
        "visual": "Sugar dissolves without clouding the liquid",
        "visualZh": "糖化开后汤依然清亮",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Sweetness arrives late in the sip, not immediately - that is sugarcane, not added sugar",
        "signalZh": "甜味是咽下之后才上来，而不是入口就甜——那是蔗的甜，不是加的糖"
      }
    },
    {
      "text": "Strain through a sieve, pressing the solids with the back of a ladle to get the last of the liquid out.",
      "textZh": "用筛过滤，勺背压渣把最后的汤汁挤出来。",
      "zhHint": "压渣取汁",
      "stateNote": {
        "visual": "A clear pale gold drink; spent fibre and pale vegetables left in the sieve",
        "visualZh": "清亮的浅金饮品，滤网里留下煮透的纤维与褪色的蔬菜",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Hold a glass up to the light: translucent, with no suspended starch",
        "signalZh": "举杯对光：透亮，没有悬浮的淀粉"
      }
    },
    {
      "text": "Serve warm in winter, or chill thoroughly and serve over ice in summer. Keeps three days in the fridge.",
      "textZh": "冬天温饮；夏天彻底冷藏后加冰。冰箱可存三天。",
      "zhHint": "冷热皆宜",
      "stateNote": {
        "visual": "Iced, it goes a shade paler and beads condensation on the glass",
        "visualZh": "加冰后颜色更浅，杯壁凝出水珠",
        "timeRef": "2 hours to chill",
        "timeRefZh": "冷藏约 2 小时",
        "heat": "low",
        "signal": "Cold, the sugarcane sweetness reads cleaner and the chestnut starch disappears - most people prefer it this way",
        "signalZh": "冰镇后蔗甜更干净、马蹄的粉感几乎消失——多数人更喜欢这样喝"
      }
    }
  ],
  "tips": [
    "Do not skip splitting the sugarcane; whole sticks give a drink that tastes of plain water.",
    "If you add imperata root, reduce the simmering time to 40 minutes - it turns the drink medicinal if cooked longer.",
    "The spent carrot and chestnuts are edible and mildly sweet; children usually eat them."
  ],
  "tipsZh": [
    "竹蔗一定要劈开；整根下锅煮出来就是白水味。",
    "加了茅根的话，煮的时间减到 40 分钟——煮久了会有药味。",
    "煮过的胡萝卜和马蹄可以吃，还带甜味，小孩子通常抢着吃。"
  ],
  "relatedSlugs": [
    "luo-han-guo-tea",
    "winter-melon-tea",
    "rock-sugar-pear-soup"
  ],
  "image": "/images/recipes/sour-plum-drink.webp"
};
