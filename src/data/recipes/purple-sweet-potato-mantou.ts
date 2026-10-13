import type { Recipe } from "@/lib/types";

/** Purple Sweet Potato Mantou (紫薯馒头) — Day batch */
export const purple_sweet_potato_mantou: Recipe = {
  "id": "purple-sweet-potato-mantou",
  "slug": "purple-sweet-potato-mantou",
  "titleEn": "Purple Sweet Potato Mantou",
  "titleZh": "紫薯馒头",
  "pinyin": "zǐ shǔ mántou",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 165,
  "servings": 10,
  "version": "family",
  "versionNote": "Home versions steam and mash real purple sweet potato, which gives a muted lavender-grey crumb and genuine sweetness. Bakery versions almost always lean on ube or purple food colouring because the natural anthocyanin pigment turns bluish in alkaline dough and grey-brown with too much baking soda.",
  "versionNoteZh": "家常版用真紫薯蒸熟压泥，组织呈柔和的灰紫、甜度真实； bakery 版几乎都靠紫薯香精或紫色食用色素，因为天然花青素在碱性面团里会偏蓝，碱多了还会发灰褐。",
  "tags": [
    "steamed-buns",
    "make-ahead",
    "kid-friendly",
    "freezer-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Purple sweet potato mantou exists because it is the easiest way to get a child to eat a steamed bun. There is no filling to leak and no technique to master — mash the potato, swap it for most of the liquid, and the dough turns lavender on its own. The colour is the point, and so is the fact that it tastes like something.",
  "storyZh": "紫薯馒头之所以存在，是因为它是让小孩愿意吃馒头的最简单办法。没有馅料会漏、没有难掌握的技法——把紫薯压泥替代大部分液体，面团自己就变成淡紫色。颜色是重点，但它也确实有味道，这点同样重要。",
  "ingredients": [
    {
      "id": "psm-01",
      "nameEn": "purple sweet potato, steamed and mashed",
      "nameZh": "紫薯，蒸熟压泥",
      "pinyin": "zǐ shǔ",
      "amountMetric": "220 g",
      "amountUS": "1 cup packed",
      "category": "produce",
      "pantry": "asian",
      "note": "Steam whole and unpeeled, then peel and mash while hot",
      "noteZh": "整颗带皮蒸熟，趁热去皮压泥"
    },
    {
      "id": "psm-02",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "420 g",
      "amountUS": "3⅓ cups",
      "category": "staple",
      "pantry": "local",
      "note": "Adjust by feel — mash wetness varies a lot between batches",
      "noteZh": "按手感调整——每批紫薯泥的湿度差别很大"
    },
    {
      "id": "psm-03",
      "nameEn": "whole milk, warmed to 35°C",
      "nameZh": "全脂牛奶，加热至35°C",
      "pinyin": "niú nǎi",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "dairy",
      "pantry": "local",
      "note": "Use the smaller amount first; the mash supplies most of the water",
      "noteZh": "先少加；大部分水分由薯泥提供"
    },
    {
      "id": "psm-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "pinyin": "xì shā táng",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "psm-05",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "pinyin": "gān jiàomǔ",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "psm-06",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "12 ml",
      "amountUS": "2½ tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Also stops the dough sticking to your hands",
      "noteZh": "同时防止面团粘手"
    },
    {
      "id": "psm-07",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "psm-08",
      "nameEn": "rice vinegar (optional, for the colour)",
      "nameZh": "米醋（可选，调色用）",
      "pinyin": "mǐ cù",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "A few drops keep the anthocyanin on the violet side rather than blue-grey",
      "noteZh": "几滴醋能让花青素保持紫色而不是发蓝灰",
      "termKey": "rice-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Steam the whole unpeeled sweet potatoes 20 minutes until a skewer slides through with no resistance. Peel while hot and mash until completely smooth.",
      "textZh": "整颗带皮紫薯蒸20分钟，直到竹签能毫无阻力地插入。趁热去皮，压至完全细腻。",
      "zhHint": "蒸紫薯压泥",
      "stateNote": {
        "visual": "The flesh is deep violet throughout with no pale core, and the mash is glossy and free of lumps",
        "visualZh": "薯肉通体深紫没有浅色芯，薯泥油亮无颗粒",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "high",
        "signal": "A fork mashes it with no resistance and no stringy fibres remain",
        "signalZh": "叉子压下毫无阻力，也没有筋络残留"
      },
      "tip": "Mash it hot. Cold purple sweet potato goes gluey and will never smooth out again.",
      "tipZh": "一定要趁热压泥。紫薯冷了会发黏，再也压不细腻。"
    },
    {
      "text": "Proof the yeast with 1 tsp sugar in the warm milk 8 minutes. Combine mash, flour, remaining sugar, salt, oil, vinegar and the yeast milk. Knead 12 minutes, adding flour 1 tbsp at a time if it stays sticky.",
      "textZh": "酵母加1茶匙糖溶于温牛奶静置8分钟。把薯泥、面粉、余下糖、盐、油、醋与酵母奶液混合揉12分钟，若仍粘手就每次加1汤匙面粉。",
      "zhHint": "合面成团",
      "stateNote": {
        "visual": "A smooth lavender dough that springs back when pressed and no longer leaves colour on your palm",
        "visualZh": "淡紫色的光滑面团，按压回弹，掌心不再沾色",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "Kneading it feels tacky rather than wet, and the surface does not tear",
        "signalZh": "揉起来是微黏而非湿手，表面不会扯裂"
      },
      "tip": "The colour deepens noticeably once it steams. If the raw dough looks too pale, do not add anything.",
      "tipZh": "蒸完之后颜色会明显加深。如果生面团看起来偏淡，什么都别加。"
    },
    {
      "text": "Cover and rise 80 minutes at room temperature until nearly doubled.",
      "textZh": "加盖室温发酵80分钟至接近两倍大。",
      "zhHint": "一发",
      "stateNote": {
        "visual": "Dough has domed with a smooth, slightly grey-lavender surface and fine bubbles at the edges",
        "visualZh": "面团隆起，表面光滑呈略灰的淡紫色，边缘可见细密气泡",
        "timeRef": "80 minutes",
        "timeRefZh": "80 分钟",
        "signal": "A finger indentation holds without springing back",
        "signalZh": "指印不回弹地保持原状"
      }
    },
    {
      "text": "Knead out the air 3 minutes, roll into a log and divide into 10 equal pieces.",
      "textZh": "排气揉3分钟，搓成长条分成10等份。",
      "zhHint": "排气分剂",
      "stateNote": {
        "visual": "The cut face shows a uniform dense crumb with even violet colour and no streaks of unmixed mash",
        "visualZh": "切面紫色均匀、组织致密，没有未拌开的薯泥条纹",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Each piece weighs roughly the same in your palm and resists stretching",
        "signalZh": "每份手感重量相近，拉扯时有阻力"
      }
    },
    {
      "text": "Shape into tall rounds with taut skins, arrange on parchment squares, cover loosely and proof 25 minutes.",
      "textZh": "逐个收成高挺圆球、绷紧表皮，摆在烘焙纸方块上，盖松布醒发25分钟。",
      "zhHint": "收圆二发",
      "stateNote": {
        "visual": "Buns have puffed by about half and their surface has a soft velvety sheen",
        "visualZh": "生坯胀大约一半，表面呈现柔和的绒光",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "A light press leaves a shallow dent that slowly fills back in",
        "signalZh": "轻按留下浅坑，会缓慢填平"
      }
    },
    {
      "text": "Steam 16 minutes over vigorously boiling water with a cloth-wrapped lid, then rest 5 minutes off the heat before opening.",
      "textZh": "笼布包盖大火沸水蒸16分钟，关火焖5分钟后再开盖。",
      "zhHint": "大火蒸+焖制",
      "stateNote": {
        "visual": "Buns are plump and a clear violet, the skins smooth, and torn crumb shows fine even holes",
        "visualZh": "馒头饱满呈明显的紫色，表皮光滑，撕开可见细密均匀的气孔",
        "timeRef": "16 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸16分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts from under the lid and the buns spring back when pressed",
        "signalZh": "开盖蒸汽喷涌，轻按压即回弹"
      }
    }
  ],
  "tips": [
    "A teaspoon of rice vinegar in the dough keeps the purple purple. Alkaline tap water turns it blue-grey.",
    "Steam whole, never boil. Boiled sweet potato is waterlogged and ruins the flour ratio.",
    "Do not be tempted to add purple food colouring — real mash gives a gentler colour and actual flavour."
  ],
  "tipsZh": [
    "面团里加一茶匙米醋能让紫色保持紫色。偏碱的自来水会让它发蓝灰。",
    "一定要蒸不要水煮。水煮紫薯含水量过高，会毁掉面粉配比。",
    "别动加紫色食用色素的念头——真薯泥的颜色更柔和，而且真的有味道。"
  ],
  "relatedSlugs": [
    "white-mantou-steamed-buns",
    "milk-mantou"
  ],
  "image": "/images/recipes/brown-sugar-mantou.webp"
};
