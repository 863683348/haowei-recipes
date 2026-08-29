import type { Recipe } from "@/lib/types";

/** Spicy Sauce-Cured Duck (酱板鸭) — Seed batch */
export const spicy_sauce_cured_duck: Recipe = {
  "id": "jiang-ban-ya",
  "slug": "spicy-sauce-cured-duck",
  "titleEn": "Spicy Sauce-Cured Duck",
  "titleZh": "酱板鸭",
  "pinyin": "Jiàng bǎn yā",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Changsha, Hunan",
  "regionZh": "湖南长沙",
  "difficulty": "hard",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version air-dries duck 2 days (not 7) and uses stovetop steaming instead of smokehouse — retains authentic fermented-savory depth without special equipment.",
  "versionNoteZh": "家常版晾鸭2天（非7天），改用蒸锅代替熏房——保留酱香醇厚，无需专业设备。",
  "tags": [
    "make-ahead",
    "project-cooking",
    "charcuterie"
  ],
  "dietary": [
    "none"
  ],
  "story": "My great-aunt in Changsha’s Yuhua District made this for Lunar New Year since 1953. She’d hang duck halves in her tiled courtyard, brushing them daily with fermented soy paste — I still have her bamboo brush, stained black with decades of sauce.",
  "storyZh": "我姑婆自1953年起，每年春节前都在长沙雨花区天井里做这酱板鸭。鸭半只悬挂，每日刷一遍发酵豆酱——我至今留着她的竹刷，酱色已浸透竹丝。",
  "ingredients": [
    {
      "id": "jb-01",
      "nameEn": "whole duck (3–3.5 kg), cleaned, cavity dried",
      "nameZh": "整鸭（1.4–1.6公斤），洗净腔内擦干",
      "pinyin": "zhěng yā",
      "amountMetric": "3200 g",
      "amountUS": "7 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher to remove excess fat and puncture thigh skin for even curing. Substitute: 2 large duck breasts (boneless, skin-on) for smaller batch",
      "noteZh": "请肉铺去余脂，并在大腿皮上扎孔利入味。小量可代：2块带皮鸭胸肉"
    },
    {
      "id": "jb-02",
      "nameEn": "fermented soybean paste (doubanjiang), coarse-ground",
      "nameZh": "粗粒豆瓣酱",
      "pinyin": "cū lì dòu bàn jiàng",
      "amountMetric": "120 g",
      "amountUS": "½ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "jb-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "jb-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "Shàoxīng jiǔ",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "jb-05",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wǔ xiāng fěn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "jb-06",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒",
      "pinyin": "xiàn mó bái hú jiāo",
      "amountMetric": "3 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Rinse duck inside/out. Pat *extremely* dry with paper towels — especially cavity and wing joints. Let air-dry uncovered on wire rack 1 hour at room temp.",
      "textZh": "鸭内外冲洗，用厨房纸*彻底*吸干——尤其腹腔与翅关节。室温敞口架上风干1小时。",
      "zhHint": "越干越入味",
      "stateNote": {
        "visual": "Skin feels tight and parchment-like; no damp patches visible",
        "visualZh": "鸭皮紧绷如羊皮纸；无任何湿斑",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "signal": "No moisture beads form on surface when touched",
        "signalZh": "触之无水珠凝结"
      }
    },
    {
      "text": "Mix doubanjiang, light soy sauce, Shaoxing wine, five-spice, and white pepper into smooth paste. Rub *all* surfaces — inside cavity, under wings, between legs — massaging 3 minutes.",
      "textZh": "将豆瓣酱、生抽、绍酒、五香粉、白胡椒调成糊；抹遍鸭全身——腔内、翅下、腿缝，揉搓3分钟。",
      "zhHint": "揉到位才透骨",
      "stateNote": {
        "visual": "Paste adheres evenly; no streaks or bare spots remain",
        "visualZh": "酱糊均匀附着；无条纹或漏抹处",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Skin yields slightly under finger pressure",
        "signalZh": "鸭皮按压微有弹性"
      }
    },
    {
      "text": "Place duck breast-up in non-reactive container. Cover tightly. Refrigerate 48 hours, turning once at 24 hours.",
      "textZh": "鸭脯朝上放入非金属容器，密封严实。冷藏48小时，24小时时翻面一次。",
      "zhHint": "低温慢腌",
      "stateNote": {
        "visual": "Surface glistens with deep red-brown sheen; no liquid pooling",
        "visualZh": "表面泛深红褐油光；无酱汁积聚",
        "timeRef": "48 hours",
        "timeRefZh": "48 小时",
        "signal": "Aroma is rich, fermented, and savory — not sour or off",
        "signalZh": "气味醇厚酱香，无酸败异味"
      }
    },
    {
      "text": "Remove duck from fridge. Rinse off excess paste under cool water. Pat *very* dry. Hang or lay on wire rack in cool, dry, ventilated space (e.g., garage or pantry) for 48 hours.",
      "textZh": "鸭取出，凉水冲净酱糊。用厨房纸*极用力*擦干。悬挂或置于通风凉爽处（如车库、储藏室）晾48小时。",
      "zhHint": "晾干是酱板关键",
      "stateNote": {
        "visual": "Skin contracts and wrinkles slightly; surface matte and tacky",
        "visualZh": "鸭皮微皱收缩；表面哑光微黏",
        "timeRef": "48 hours",
        "timeRefZh": "48 小时",
        "signal": "Weight drops ~15% (≈480 g loss)",
        "signalZh": "重量减轻约15%（约480克）"
      }
    },
    {
      "text": "Steam duck over boiling water in covered wok or steamer 60 minutes. Check internal temp: thickest part must reach 74°C (165°F). Cool completely before slicing.",
      "textZh": "沸水蒸锅/蒸笼，加盖蒸60分钟。测最厚处中心温度达74°C（165°F）。彻底冷却后切片。",
      "zhHint": "蒸透保安全",
      "stateNote": {
        "visual": "Steam rises steadily; duck skin tightens further and glistens",
        "visualZh": "蒸汽持续升腾；鸭皮更紧致泛光",
        "timeRef": "60 minutes",
        "timeRefZh": "60 分钟",
        "heat": "high",
        "signal": "Juices run clear (not pink) when thigh pierced",
        "signalZh": "叉入大腿，渗出汁水清亮（无粉红）"
      }
    },
    {
      "text": "Slice thinly against grain. Arrange on platter. Serve at room temperature with steamed rice and pickled mustard greens.",
      "textZh": "逆纹切薄片，摆盘。室温食用，配白米饭与雪里蕻。",
      "zhHint": "冷切才劲道"
    }
  ],
  "tips": [
    "Do NOT skip the 48-hour air-drying — it concentrates flavor and creates signature chewy-crisp skin.",
    "Use only coarse-ground doubanjiang — smooth versions lack texture and depth.",
    "Store sliced duck in airtight container in fridge up to 5 days — flavor improves on Day 2."
  ],
  "tipsZh": [
    "48小时风干绝不可省——浓缩风味，成就标志性韧脆鸭皮。",
    "只用粗粒豆瓣酱——细腻款失口感与层次。",
    "切片后密封冷藏，5日内食用；第2天风味更醇厚。"
  ],
  "relatedSlugs": [
    "yong-zhou-blood-duck",
    "dried-duck-and-radish-braise"
  ],
  "image": "/images/recipes/spicy-sauce-cured-duck.webp"
};
