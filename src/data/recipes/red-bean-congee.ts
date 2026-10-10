import type { Recipe } from "@/lib/types";

/** Adzuki Bean and Rice Congee (红豆粥) — Day batch */
export const red_bean_congee: Recipe = {
  "id": "red-bean-congee",
  "slug": "red-bean-congee",
  "titleEn": "Adzuki Bean and Rice Congee",
  "titleZh": "红豆粥",
  "pinyin": "hóng dòu zhōu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-Style",
  "region": "Southern China",
  "regionZh": "华南",
  "difficulty": "easy",
  "timeMin": 70,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version cooks beans and rice together in one pot for a homely, slightly loose texture; restaurant versions cook the beans to a paste first, then fold in a separately cooked rice porridge for a smoother finish.",
  "versionNoteZh": "家常版豆米同锅煮，质地松散家常；餐厅版先把豆煮成沙，再拌入另煮的米粥，口感更细腻。",
  "tags": [
    "70-min",
    "congee",
    "vegetarian",
    "batch-cook",
    "breakfast"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "Red bean congee sits on the line between breakfast and dessert, and every family argues about which side it belongs on. My mother's version had only a whisper of sugar and was eaten with salted duck eggs and pickles — savoury all the way, and I still think that is the right answer.",
  "storyZh": "红豆粥站在早餐与甜品的分界线上，每家都为它属于哪边争论不休。我妈的版本只放一丁点糖，配咸鸭蛋和酱菜吃——彻头彻尾的咸口，我至今仍认为那才是对的。",
  "ingredients": [
    {
      "id": "hd-01",
      "nameEn": "dried adzuki beans",
      "nameZh": "干红豆（赤小豆）",
      "pinyin": "chì xiǎo dòu",
      "amountMetric": "150 g",
      "amountUS": "¾ cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak overnight, or quick-soak: boil 5 minutes, then rest covered 1 hour",
      "noteZh": "提前一夜浸泡；快泡法：煮5分钟后加盖闷1小时"
    },
    {
      "id": "hd-02",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "80 g",
      "amountUS": "⅓ cup + 1 tbsp",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "hd-03",
      "nameEn": "glutinous (sweet) rice",
      "nameZh": "糯米",
      "pinyin": "nuò mǐ",
      "amountMetric": "30 g",
      "amountUS": "2½ tbsp",
      "category": "staple",
      "pantry": "asian",
      "note": "Gives the congee a sticky, glossy finish",
      "noteZh": "让粥黏稠发亮"
    },
    {
      "id": "hd-04",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "1.4 L",
      "amountUS": "6 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "hd-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar",
      "note": "Use less or none if serving with savoury sides",
      "noteZh": "配咸味小菜时减量或不加"
    },
    {
      "id": "hd-06",
      "nameEn": "dried tangerine peel (chenpi), optional",
      "nameZh": "陈皮，可选",
      "pinyin": "chén pí",
      "amountMetric": "2 g",
      "amountUS": "1 small piece",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds a citrus note that cuts the bean richness; omit if unavailable",
      "noteZh": "增添柑橘香，化解豆的厚重；没有可省略"
    }
  ],
  "steps": [
    {
      "text": "Soak the adzuki beans overnight in plenty of water, then drain. Quick-soak alternative: boil 5 minutes and rest covered for 1 hour.",
      "textZh": "红豆加足量水浸泡一夜后沥干；快泡法：煮5分钟后加盖闷1小时。",
      "zhHint": "红豆提前泡透",
      "stateNote": {
        "visual": "Beans roughly double in size and the wrinkles smooth out",
        "visualZh": "豆粒体积约翻倍，表皮褶皱变平",
        "timeRef": "8 hours or 1 hour quick",
        "timeRefZh": "8 小时，或快泡 1 小时",
        "heat": "low",
        "signal": "A bean crushes easily between your thumbnail and forefinger",
        "signalZh": "用指甲一掐豆子即碎"
      }
    },
    {
      "text": "Put the drained beans in a pot with 1 L water and the tangerine peel. Bring to a boil, then lower to medium-low and simmer 30 minutes.",
      "textZh": "沥干的红豆加1升水与陈皮入锅，大火烧沸后转中小火煮30分钟。",
      "zhHint": "豆先煮30分",
      "stateNote": {
        "visual": "Water stains deep red-brown; a few bean skins float loose",
        "visualZh": "水染成深红褐色，少量豆皮浮起脱落",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "medium-low",
        "signal": "A bean squashes flat against the pot wall with light pressure",
        "signalZh": "豆子在锅壁轻压即扁"
      }
    },
    {
      "text": "Rinse both rices, add them to the pot with the remaining 400 ml water, and simmer 25 minutes, stirring every 5 minutes.",
      "textZh": "两种米淘净后连同剩余400毫升水下锅，小火煮25分钟，每5分钟搅一次。",
      "zhHint": "后下米同煮",
      "stateNote": {
        "visual": "Rice grains burst and the liquid thickens into a red-brown porridge",
        "visualZh": "米粒爆开，汤汁变稠成红褐色粥",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium-low",
        "signal": "Spoon leaves a trail that fills in over about two seconds",
        "signalZh": "勺痕约两秒内回填"
      }
    },
    {
      "text": "Press about a quarter of the beans against the pot side and stir them back in — this releases starch and makes the porridge creamy.",
      "textZh": "取约四分之一豆子在锅壁压成沙再拌回，释放淀粉使粥绵密。",
      "zhHint": "压沙自然增稠",
      "stateNote": {
        "visual": "Porridge deepens to a uniform mahogany with flecks of bean paste throughout",
        "visualZh": "粥色转均匀红木色，遍布豆沙细点",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Texture feels velvety on the tongue rather than grainy",
        "signalZh": "舌面触感绒滑而非颗粒感"
      }
    },
    {
      "text": "Add rock sugar and stir 3 minutes until fully dissolved. Remove the tangerine peel.",
      "textZh": "加冰糖搅3分钟至完全溶化，拣出陈皮。",
      "zhHint": "冰糖最后调",
      "stateNote": {
        "visual": "No crystals left; the surface takes on a soft sheen",
        "visualZh": "无糖粒残留，表面泛柔和光泽",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Sweetness is rounded and clean, with a faint citrus note in the finish",
        "signalZh": "甜味圆润干净，尾韵带一丝柑橘香"
      }
    },
    {
      "text": "Rest 5 minutes off the heat before serving — it thickens noticeably as it settles.",
      "textZh": "关火静置5分钟再吃——粥会明显继续变稠。",
      "zhHint": "静置5分更稠",
      "stateNote": {
        "visual": "A thin skin forms on top and the surface holds a shallow spoon mark",
        "visualZh": "表面结薄皮，勺痕能浅浅留住",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Spoon stands at a slight angle rather than sinking flat",
        "signalZh": "勺子斜立不倒，而非平躺下沉"
      }
    }
  ],
  "tips": [
    "Salt the soaking water lightly — it helps the bean skins soften evenly.",
    "Serve savoury with salted duck egg and pickled mustard greens, or sweet with a splash of coconut milk.",
    "Freezes well for up to 3 months; thaw overnight and reheat with a splash of water."
  ],
  "tipsZh": [
    "泡豆水里加少许盐，能帮助豆皮均匀软化。",
    "咸吃配咸鸭蛋与酱菜，甜吃可兑一点椰奶。",
    "可冷冻保存3个月，隔夜解冻后兑水回热。"
  ],
  "relatedSlugs": [
    "eight-treasure-congee",
    "pumpkin-congee"
  ],
  "image": "/images/recipes/red-bean-soup-hong-dou-sha.webp"
};
