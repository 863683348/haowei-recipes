import type { Recipe } from "@/lib/types";

/** Three-Treasure 'Jidi' Congee (及第粥) — Seed batch */
export const jidi_congee: Recipe = {
  "id": "jidi-zhou",
  "slug": "jidi-congee",
  "titleEn": "Three-Treasure 'Jidi' Congee",
  "titleZh": "及第粥",
  "pinyin": "jí dì zhōu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Foshan",
  "regionZh": "佛山",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version omits offal (liver/kidney) used in some traditional versions—uses only lean pork, pork liver (optional), and century egg for accessibility and gentler flavor.",
  "versionNoteZh": "家常版省略部分传统配方中的腰片、心片等内脏，仅用瘦肉、猪肝（可选）与皮蛋，更易购得且口味温和。",
  "tags": [
    "50-min",
    "comfort",
    "traditional"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Foshan—a retired school principal—named this ‘Jidi’ (‘passing the imperial exam’) because he served it to students before exams. He always added a sliver of pork liver ‘for sharp thinking’ and a pinch of white pepper ‘to wake the brain’.",
  "storyZh": "佛山祖父是退休校长，每逢学生大考前必煮此粥，取名‘及第’寓意金榜题名。他总放一片猪肝‘助思敏’，再撒少许白胡椒‘提神醒脑’。",
  "ingredients": [
    {
      "id": "jd-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "120 g",
      "amountUS": "3/4 cup",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse well; soak 30 minutes for creamier texture",
      "noteZh": "充分淘洗，浸泡30分钟口感更绵滑"
    },
    {
      "id": "jd-02",
      "nameEn": "lean pork loin, thinly sliced then shredded",
      "nameZh": "猪里脊肉，薄片切丝",
      "pinyin": "zhū lǐ jǐ ròu, báo piàn qiē sī",
      "amountMetric": "150 g",
      "amountUS": "5 oz (¾ cup)",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "jd-03",
      "nameEn": "pork liver, very thin slices (optional but traditional)",
      "nameZh": "猪肝，极薄片（传统可选）",
      "pinyin": "zhū gān, jí bó piàn",
      "amountMetric": "80 g",
      "amountUS": "2.8 oz (½ cup)",
      "category": "protein",
      "pantry": "local",
      "note": "Soak in cold water 10 min to remove blood; pat dry before slicing. Substitute chicken breast if pork liver unavailable.",
      "noteZh": "冷水中浸泡10分钟去血水，吸干再切。若无猪肝，可用鸡胸肉替代。"
    },
    {
      "id": "jd-04",
      "nameEn": "century egg (pidan), peeled and chopped",
      "nameZh": "皮蛋（松花蛋），去壳切碎",
      "pinyin": "pí dàn, qù ké qiē suì",
      "amountMetric": "1 large (80 g)",
      "amountUS": "1 large (about 2.8 oz)",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "jd-05",
      "nameEn": "fresh ginger, finely grated",
      "nameZh": "鲜姜末",
      "pinyin": "xiān jiāng mò",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "jd-06",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "xiàn mó bái hú jiāo fěn",
      "amountMetric": "1.5 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Rinse rice and soak in 750 ml (3¼ cups) cold water for 30 minutes. Drain, reserving soaking water.",
      "textZh": "大米淘净，加750毫升冷水浸泡30分钟，沥干并保留泡米水。",
      "zhHint": "泡米留水"
    },
    {
      "text": "In a bowl, combine pork shreds, 1 tsp grated ginger, ½ tsp white pepper, and 1 tsp light soy sauce. Marinate 10 minutes.",
      "textZh": "将猪肉丝、1茶匙姜末、½茶匙白胡椒粉、1茶匙生抽拌匀，腌10分钟。",
      "zhHint": "肉丝先腌"
    },
    {
      "text": "Bring reserved soaking water and rice to a vigorous boil in a heavy pot. Reduce heat to low, cover partially, and simmer 30 minutes, stirring occasionally.",
      "textZh": "将泡米水与米倒入厚底锅，大火烧沸后转小火，半盖盖子慢炖30分钟，期间偶尔搅拌。",
      "zhHint": "半盖慢炖"
    },
    {
      "text": "Add marinated pork and pork liver (if using). Stir gently and simmer 5 minutes until pork turns opaque and liver loses its raw pink tint.",
      "textZh": "加入腌好的肉丝与猪肝（如用），轻搅后煮5分钟，至肉色转白、肝片褪去粉红生色。",
      "zhHint": "肉肝同煮",
      "stateNote": {
        "visual": "Pork shreds are separated and no longer clumped; liver slices turn uniform pale brown",
        "visualZh": "肉丝散开不结块；肝片呈均一浅褐色",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Liver surface loses glossy sheen and appears matte",
        "signalZh": "肝片表面光泽消失，呈现哑光质感"
      }
    },
    {
      "text": "Fold in chopped century egg and remaining ginger. Simmer 2 more minutes. Season with extra white pepper to taste.",
      "textZh": "拌入皮蛋碎与剩余姜末，再煮2分钟。依口味补少许白胡椒粉。",
      "zhHint": "皮蛋最后拌"
    }
  ],
  "tips": [
    "If using pork liver, slice it while partially frozen—it’s easier to cut paper-thin.",
    "This congee tastes even better the next day; reheat gently with a splash of water.",
    "Traditional garnish: fried shallots and dried shrimp (sub: toasted sesame seeds if unavailable)."
  ],
  "tipsZh": [
    "猪肝半冻时切片最薄易控。",
    "隔夜再热风味更醇，复热时加少许水防干。",
    "传统点缀：炸干葱头与虾皮（无可用烤香芝麻替代）。"
  ],
  "relatedSlugs": [
    "pidan-shourou-congee"
  ],
  "image": "/images/recipes/jidi-congee.webp"
};
