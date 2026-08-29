import type { Recipe } from "@/lib/types";

/** Clear-Braised Lion’s Head Meatballs (清炖狮子头) — Seed batch */
export const qing_dun_shi_zi_tou: Recipe = {
  "id": "qing-dun-shi-zi-tou",
  "slug": "qing-dun-shi-zi-tou",
  "titleEn": "Clear-Braised Lion’s Head Meatballs",
  "titleZh": "清炖狮子头",
  "pinyin": "qīng dùn shī zi tóu",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Yangzhou",
  "regionZh": "扬州",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version skips the traditional hand-chopping—uses coarse-ground pork and gentle folding to preserve tenderness, and simmers in a wide stockpot instead of individual porcelain bowls.",
  "versionNoteZh": "家庭版免去费力手剁，选用粗绞猪肉，轻柔拌合保嫩；改用宽口汤锅清炖，省工不失本味。",
  "tags": [
    "family-feast",
    "comfort-food",
    "soup"
  ],
  "dietary": [
    "none"
  ],
  "story": "My great-aunt in Yangzhou made these every winter solstice—she’d shape them with wet hands, whispering ‘big head, soft heart’ as she lowered each into simmering broth. Her secret? A spoonful of mashed tofu to bind without gumminess.",
  "storyZh": "扬州姑婆每逢冬至必做此菜，湿手团丸，边放边念‘头大心软’。秘方只有一勺豆腐泥——粘而不韧，嫩而不散。",
  "ingredients": [
    {
      "id": "qdst-01",
      "nameEn": "pork shoulder (coarse-ground, 20% fat)",
      "nameZh": "猪前腿肉（粗绞，肥瘦比2:8）",
      "pinyin": "zhū qián tuǐ ròu",
      "amountMetric": "500 g",
      "amountUS": "17.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Grind twice at coarse setting; do not overmix",
      "noteZh": "粗绞两遍；切勿过度搅打"
    },
    {
      "id": "qdst-02",
      "nameEn": "soft tofu (silken, drained)",
      "nameZh": "嫩豆腐（绢豆腐，沥干）",
      "pinyin": "nèn dòu fu",
      "amountMetric": "150 g",
      "amountUS": "1/2 cup, mashed",
      "category": "protein",
      "pantry": "local",
      "note": "Press gently between paper towels for 5 min",
      "noteZh": "厨房纸轻压5分钟去水"
    },
    {
      "id": "qdst-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp, finely grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "qdst-04",
      "nameEn": "scallion (white and green parts, finely chopped)",
      "nameZh": "小葱（葱白葱绿切末）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "qdst-05",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Place pork in large bowl. Add mashed tofu, grated ginger, scallions, white pepper, and 10 ml Shaoxing wine. Using wet hands, gently fold 40 strokes—do not knead. Chill 30 minutes.",
      "textZh": "猪肉入大碗，加豆腐泥、姜末、葱末、白胡椒粉、绍酒10毫升。湿手轻柔抄拌40下（勿揉搓），冷藏30分钟。",
      "zhHint": "湿手防粘，轻拌保松",
      "stateNote": {
        "visual": "Mixture clings loosely; no stringy strands form",
        "visualZh": "肉糜松散附着，无筋丝拉扯",
        "timeRef": "40 strokes + 30 min chill",
        "timeRefZh": "40 下 + 冷藏30分钟",
        "signal": "Mixture feels cool and slightly tacky—not sticky",
        "signalZh": "触感凉润微黏，非胶黏"
      }
    },
    {
      "text": "Wet hands thoroughly. Scoop 120 g mixture per ball. Gently roll into smooth 8-cm spheres—no pressing. Place on parchment-lined tray.",
      "textZh": "双手浸湿，每份取120克肉糜，轻拢成直径8厘米圆球（勿按压），码于垫烘焙纸托盘。",
      "zhHint": "湿手团丸不破形",
      "stateNote": {
        "visual": "Surface is matte and unbroken; no cracks or seams visible",
        "visualZh": "表面哑光无裂痕，无缝隙",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Ball holds shape when lifted—no sagging",
        "signalZh": "丸子离盘悬空不塌陷"
      }
    },
    {
      "text": "Bring 2 L water and 10 g ginger slices to gentle simmer in wide stockpot. Carefully lower meatballs in, one at a time, using a slotted spoon. Maintain bare simmer (not boil).",
      "textZh": "宽口汤锅中烧2升水，加姜片（10克），烧至微沸。用漏勺逐个轻放肉丸，保持微沸（勿滚）。",
      "zhHint": "微沸定型不散",
      "stateNote": {
        "visual": "Water shimmers with faint bubbles; no surface agitation",
        "visualZh": "水面微颤泛泡，无翻滚",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Meatballs rise slightly then settle—no floating or breaking",
        "signalZh": "丸子微浮即沉，不漂不散"
      }
    },
    {
      "text": "Cover and simmer gently 1.5 hours. Skim any surface foam after first 15 minutes. Do not stir—only tilt pot to rotate if needed.",
      "textZh": "盖盖，微火慢炖1.5小时。头15分钟撇净浮沫。全程勿搅动，必要时轻晃锅体调位。",
      "zhHint": "静置慢炖保嫩",
      "stateNote": {
        "visual": "Broth remains crystal-clear; meatballs swell to 10 cm",
        "visualZh": "汤色澄澈见底；丸子膨至10厘米",
        "timeRef": "1.5 hours",
        "timeRefZh": "1.5 小时",
        "heat": "low",
        "signal": "Occasional tiny bubble rises from center of each ball",
        "signalZh": "每丸中心偶有细泡缓缓上浮"
      }
    },
    {
      "text": "Carefully lift meatballs with slotted spoon into warmed serving bowls. Ladle hot clear broth over. Garnish with fresh scallion greens and a drizzle of sesame oil.",
      "textZh": "漏勺轻托肉丸入预热碗中，浇滚烫清汤。撒葱绿，淋芝麻油。",
      "zhHint": "热汤激香提神",
      "stateNote": {
        "visual": "Broth is transparent, shimmering, with delicate oil swirls",
        "visualZh": "汤色通透，油花如丝游动",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Sesame oil scent blooms instantly upon contact with hot broth",
        "signalZh": "芝麻油遇热即迸发浓香"
      }
    }
  ],
  "tips": [
    "Chilling the mixture prevents fat smear and ensures clean texture",
    "Use a wide pot—the meatballs need space to poach, not crowd",
    "Freeze extra broth for instant 'clear soup' base later"
  ],
  "tipsZh": [
    "肉馅冷藏可防油脂析出，确保口感清爽",
    "务必用宽口锅——丸子需舒展浸煮，忌拥挤",
    "多余清汤冷冻，是速成清汤底的好帮手"
  ],
  "relatedSlugs": [
    "fo-tiao-qiang",
    "ba-bao-ya"
  ],
  "image": "/images/recipes/qing-dun-shi-zi-tou.webp"
};
