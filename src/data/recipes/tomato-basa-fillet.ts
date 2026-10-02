import type { Recipe } from "@/lib/types";

/** Tomato Basa Fillet (番茄龙利鱼) (番茄龙利鱼) — Day batch */
export const tomato_basa_fillet: Recipe = {
  "id": "fan-qie-long-li-yu",
  "slug": "tomato-basa-fillet",
  "titleEn": "Tomato Basa Fillet (番茄龙利鱼)",
  "titleZh": "番茄龙利鱼",
  "pinyin": "fān qié lóng lì yú",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurants use whole grass carp sliced thin and blanched; the home version uses frozen basa fillet — no bones, no deboning, and it holds together in the sauce just as well.",
  "versionNoteZh": "餐厅用整条草鱼起薄片汆熟；家庭版用冷冻龙利鱼柳——无刺、不用起片，在酱汁里一样不散。",
  "tags": [
    "30-min",
    "seafood",
    "fish",
    "tomato",
    "kid-friendly",
    "one-pan"
  ],
  "dietary": [
    "none"
  ],
  "story": "Basa is what made fish weeknight-friendly in our house: it comes frozen, it has no bones, and it never fails. Simmered in tomato sauce it tastes like the sweet-and-sour fish from a neighbourhood restaurant.",
  "storyZh": "龙利鱼让我们家周中也能吃鱼：冷冻常备、无刺、从不失败。用番茄汁一煮，就是楼下小馆那种糖醋鱼的味道。",
  "ingredients": [
    {
      "id": "ing-basa",
      "nameEn": "basa fillet, cut in 3 cm chunks",
      "nameZh": "龙利鱼柳（切 3 厘米块）",
      "amountMetric": "450 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Thaw fully and pat very dry before cooking.",
      "noteZh": "完全解冻并擦干水分。",
      "termKey": "white-fish"
    },
    {
      "id": "ing-tomato",
      "nameEn": "ripe tomatoes, diced",
      "nameZh": "成熟番茄（切丁）",
      "amountMetric": "4 medium (550 g)",
      "amountUS": "4 medium (1.2 lb)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "ing-cornstarch",
      "nameEn": "cornstarch (for coating + slurry)",
      "nameZh": "玉米淀粉（裹粉+勾芡）",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ing-egg",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "amountMetric": "1",
      "amountUS": "1 white",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ing-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ing-shaoxing",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ing-lss",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ing-scallion",
      "nameEn": "scallion, chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Thaw the fillet completely, pat dry and cut into 3 cm chunks. Toss with egg white, 1 tbsp cornstarch and a pinch of salt; rest 10 minutes.",
      "textZh": "鱼柳完全解冻、擦干切 3 厘米块。加蛋清、1 汤匙淀粉和一点盐抓匀，静置 10 分钟。",
      "stateNote": {
        "visual": "Each chunk is coated in a thin, glossy white film.",
        "visualZh": "每块鱼都裹上一层薄亮白浆。",
        "signal": "The surface feels slippery but not wet, and no liquid pools.",
        "signalZh": "表面滑但不湿，盆底无积液。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Heat 1.5 tbsp oil over medium-high. Add tomato and ginger; stir-fry 5 minutes until a thick red sauce forms.",
      "textZh": "中大火热 1.5 汤匙油，下番茄丁和姜片，翻炒 5 分钟至成浓稠红酱。",
      "stateNote": {
        "visual": "Mixture reduces and darkens to brick red with oil separating.",
        "visualZh": "体积缩小、颜色变砖红，油分分离。",
        "signal": "The spoon leaves a channel that slowly fills in.",
        "signalZh": "勺子划出的沟会缓慢回填。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Add 300 ml hot water and Shaoxing wine. Bring to a boil and season with light soy sauce and a little sugar.",
      "textZh": "加 300 毫升热水和黄酒。煮开后用生抽和少许糖调味。",
      "stateNote": {
        "visual": "Broth is a light red-orange with small bubbles around the edge.",
        "visualZh": "汤色淡橙红，边缘冒小泡。",
        "signal": "It tastes balanced: sour first, then sweet, with no raw wine bite.",
        "signalZh": "味道平衡：先酸后甜，没有生酒味。",
        "timeRef": "2-3 minutes",
        "timeRefZh": "2-3 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Slide the fish chunks in one at a time and lower to medium-low. Simmer 4 minutes without stirring — only swirl the pan.",
      "textZh": "鱼块逐块下锅，转中小火煮 4 分钟，不要搅动——只转锅。",
      "stateNote": {
        "visual": "Fish turns from translucent grey to opaque white and flakes at a touch.",
        "visualZh": "鱼肉由半透明灰白转为不透明白，轻触即分层。",
        "signal": "A fork separates the thickest chunk into clean flakes.",
        "signalZh": "叉子能把最厚的鱼块分成整齐的蒜瓣状。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-low"
      }
    },
    {
      "text": "Thicken with slurry over medium heat for 30 seconds, then finish with scallion off the heat.",
      "textZh": "中火勾薄芡 30 秒，关火后撒葱花。",
      "stateNote": {
        "visual": "Sauce turns glossy and clings to the fish; scallion stays bright green.",
        "visualZh": "酱汁油亮挂在鱼块上，葱花保持翠绿。",
        "signal": "The sauce coats the back of a spoon in a thin even layer.",
        "signalZh": "勺背挂上一层薄而均匀的酱汁。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium"
      }
    }
  ],
  "tips": [
    "Never stir the fish with a spoon — it will break. Swirl the pan instead.",
    "Dry the fillet well; excess water thins the sauce and washes off the coating.",
    "Swap basa for tilapia or cod if you prefer; the timing stays the same."
  ],
  "tipsZh": [
    "千万别用勺子搅鱼——会碎。转锅代替。",
    "鱼块一定擦干；多余水分会稀释酱汁并冲掉浆。",
    "不喜欢龙利鱼可用罗非鱼或鳕鱼，时间不变。"
  ],
  "relatedSlugs": [
    "tomato-fish-slices",
    "tomato-fish-ball-soup",
    "tomato-tofu",
    "tomato-beef-roll-pot"
  ],
  "image": "/images/recipes/iron-pot-fish-stew.webp"
};
