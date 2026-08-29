import type { Recipe } from "@/lib/types";

/** Lamb Roll Platter for Hot Pot (Yáng Ròu Juǎn Pīn Pán) (羊肉卷拼盘) — Seed batch */
export const lamb_roll_platter: Recipe = {
  "id": "yang-rou-juan-pin-pan",
  "slug": "lamb-roll-platter",
  "titleEn": "Lamb Roll Platter for Hot Pot (Yáng Ròu Juǎn Pīn Pán)",
  "titleZh": "羊肉卷拼盘",
  "pinyin": "yang rou juan pin pan",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Snack",
  "region": "Hohhot",
  "regionZh": "呼和浩特",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses freshly sliced, lightly marinated lamb shoulder—not pre-packaged rolls with phosphates. We slice against the grain by hand for tenderness, not machine-thin uniformity.",
  "versionNoteZh": "家常版用现切、轻腌羊肩肉，非含磷酸盐的市售卷；手工逆纹切片保嫩，不追求机器般薄匀。",
  "tags": [
    "15-min",
    "weeknight",
    "hot-pot-sides"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Hohhot ran a small mutton stall near Dazhao Temple. Every morning he’d hand-slice frozen lamb shoulder on a marble counter, sprinkling each layer with cumin and salt before rolling—'The fat must melt into the lean while cooking, not pool in the pot,' he’d say.",
  "storyZh": "我呼和浩特的舅舅在大召寺旁摆羊肉摊。每天清晨他在大理石案板上手切冻羊肩，每铺一层就撒孜然和盐再卷紧——‘肥要融进瘦里，不能在锅里浮油。’",
  "ingredients": [
    {
      "id": "yr-01",
      "nameEn": "boneless lamb shoulder, partially frozen",
      "nameZh": "去骨羊肩肉（半冻状态）",
      "pinyin": "qu gu yang jian rou",
      "amountMetric": "250 g",
      "amountUS": "1 cup (thin slices, packed)",
      "category": "protein",
      "pantry": "local",
      "note": "Must be partially frozen (1–1.5 hours in freezer) for clean slicing. Avoid pre-sliced 'hot pot lamb'—often treated with sodium tripolyphosphate.",
      "noteZh": "须半冻（冷冻1–1.5小时）才易切；避用市售‘火锅羊肉卷’，多含三聚磷酸钠。"
    },
    {
      "id": "yr-02",
      "nameEn": "ground cumin",
      "nameZh": "孜然粉",
      "pinyin": "zi ran fen",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Toast whole cumin seeds in dry pan, then grind—far more aromatic.",
      "noteZh": "整粒孜然干锅焙香后现磨，风味更浓。"
    },
    {
      "id": "yr-03",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xi hai yan",
      "amountMetric": "2 g",
      "amountUS": "⅓ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Salt draws out moisture and helps binding.",
      "noteZh": "盐可析出水分，助肉片粘合。"
    },
    {
      "id": "yr-04",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhi ma you",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use toasted sesame oil—not plain 'sesame oil' labeled for frying.",
      "noteZh": "须用焙香芝麻油，非标‘炒菜用芝麻油’。",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Partially freeze lamb shoulder for 60–90 minutes until firm but not solid—knife should glide without cracking meat.",
      "textZh": "羊肩肉冷冻60–90分钟，至硬而不脆——刀切顺滑、无裂痕。",
      "zhHint": "半冻切片",
      "stateNote": {
        "visual": "Surface feels rigid but yields slightly under thumb pressure.",
        "visualZh": "表面坚硬，但拇指按压略有回弹。",
        "timeRef": "60–90 minutes",
        "timeRefZh": "60–90 分钟",
        "signal": "Knife cuts cleanly with minimal resistance.",
        "signalZh": "刀切顺畅，阻力极小。"
      }
    },
    {
      "text": "Slice meat *against* the grain into 2-mm-thick pieces using a sharp chef’s knife. Stack 3–4 slices neatly.",
      "textZh": "逆着纹理，用锋利主厨刀切成2毫米薄片；整齐叠放3–4片。",
      "zhHint": "逆纹切片",
      "stateNote": {
        "visual": "Grain runs horizontally across slices; edges are clean, not shredded.",
        "visualZh": "纹理横向贯穿薄片；边缘整齐，无撕裂。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "Slice bends without breaking when lifted.",
        "signalZh": "单片提起时可微弯不断。"
      }
    },
    {
      "text": "Sprinkle each stack evenly with cumin, salt, and sesame oil. Gently press layers together to adhere.",
      "textZh": "每叠肉片均匀撒孜然、盐和芝麻油，轻压使各层贴合。",
      "zhHint": "分层调味",
      "stateNote": {
        "visual": "Oil sheen appears on surface; spices cling evenly, no pooling.",
        "visualZh": "表面泛油光；香料均匀附着，无结块或油洼。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Stack holds shape when tilted 45°.",
        "signalZh": "叠片倾斜45度不散开。"
      }
    },
    {
      "text": "Roll each stack tightly into a cylinder, starting from one short end. Wrap snugly in plastic wrap and chill 10 minutes.",
      "textZh": "从短边起紧卷成圆柱体，用保鲜膜裹紧，冷藏10分钟定型。",
      "zhHint": "卷紧冷藏",
      "stateNote": {
        "visual": "Rolls hold tight coil with no gaps; plastic wrap hugs surface smoothly.",
        "visualZh": "卷体紧密无空隙；保鲜膜服帖包裹。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Roll feels firm and cool, not soft or warm.",
        "signalZh": "触感紧实冰凉，不松软或温热。"
      }
    },
    {
      "text": "Unwrap and slice crosswise into 8-mm-thick rounds. Arrange on chilled plate—keep refrigerated until hot pot is boiling.",
      "textZh": "拆膜，横切成8毫米厚圆片，码入冰镇盘中——待火锅沸腾前再取出。",
      "zhHint": "冰盘盛放",
      "stateNote": {
        "visual": "Rounds separate cleanly; fat marbling stays embedded, not smeared.",
        "visualZh": "圆片分离清晰；脂肪纹路完整嵌在肉中，不糊开。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No moisture weeps from cut surfaces.",
        "signalZh": "切面无渗水。"
      }
    }
  ],
  "tips": [
    "Freeze leftover lamb trimmings for future stock—never discard flavorful scraps.",
    "If your knife slips, return meat to freezer for 5 more minutes.",
    "Serve with a small dish of cumin salt (1:1 cumin:sea salt) for extra dusting."
  ],
  "tipsZh": [
    "羊排边角料冷冻留作高汤底料，切勿丢弃风味精华。",
    "若刀滑难切，肉回冻5分钟再试。",
    "配一小碟孜然盐（孜然：海盐=1:1）供蘸食增香。"
  ],
  "relatedSlugs": [
    "hand-beaten-shrimp-paste"
  ],
  "image": "/images/recipes/lamb-roll-platter.webp"
};
