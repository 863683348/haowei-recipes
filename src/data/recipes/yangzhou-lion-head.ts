import type { Recipe } from "@/lib/types";

/** Yangzhou Lion Head Meatballs (扬州狮子头) — Seed batch */
export const yangzhou_lion_head: Recipe = {
  "id": "yangzhou-shizi-tou",
  "slug": "yangzhou-lion-head",
  "titleEn": "Yangzhou Lion Head Meatballs",
  "titleZh": "扬州狮子头",
  "pinyin": "yáng zhōu shī zi tóu",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu",
  "region": "Yangzhou",
  "regionZh": "扬州",
  "difficulty": "medium",
  "timeMin": 65,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses hand-chopped pork for tender, porous texture—no food processor. Restaurant versions often add starch or egg; this one relies only on fat, gentle mixing, and slow simmering.",
  "versionNoteZh": "家常版用刀剁肉，保留纤维蓬松感；不加淀粉或蛋清。餐馆版常添加以增强黏性。",
  "tags": [
    "one-pot",
    "comfort",
    "dinner"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Yangzhou’s Dongguan Street made these every Lunar New Year Eve. She’d let me press the meatballs into shape while she told stories about how the name came from their resemblance to temple lion sculptures—round, dignified, and full of quiet strength.",
  "storyZh": "我祖母住在扬州东关街，每年除夕夜都做这道菜。她让我帮忙团肉丸，一边讲狮子头名字的由来：形似庙门口的石狮，圆润庄重，内里柔韧有力。",
  "ingredients": [
    {
      "id": "yt-01",
      "nameEn": "pork shoulder (fat ratio ~30%)",
      "nameZh": "猪前腿肉（肥瘦比约3:7）",
      "pinyin": "zhū qián tuǐ ròu",
      "amountMetric": "500 g",
      "amountUS": "1.25 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Must include fat cap—substitute ground pork blend (70% lean/30% fat) if fresh unavailable",
      "noteZh": "需带肥膘；若无新鲜肉，可用现成绞肉（七分瘦三分肥）替代"
    },
    {
      "id": "yt-02",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp finely grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "yt-03",
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
      "id": "yt-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "yt-05",
      "nameEn": "Napa cabbage leaves",
      "nameZh": "大白菜叶",
      "pinyin": "dà bái cài yè",
      "amountMetric": "200 g",
      "amountUS": "4 large leaves",
      "category": "produce",
      "pantry": "local",
      "note": "Use outer, thick-ribbed leaves—substitute Savoy cabbage if Napa unavailable",
      "noteZh": "选外层厚帮叶片；若无大白菜，可用卷心菜替代"
    }
  ],
  "steps": [
    {
      "text": "Finely chop pork shoulder by hand—first slice thin strips, then mince crosswise until coarse but cohesive (do not overwork). Place in a bowl with ginger, light soy sauce, Shaoxing wine, 1 tsp white pepper, and 1 tsp salt.",
      "textZh": "手工切猪肉：先切细条，再横切成粗粒状（勿剁成泥）。放入碗中，加姜末、生抽、绍酒、白胡椒粉和盐。",
      "zhHint": "手切是关键",
      "stateNote": {
        "visual": "Meat should look grainy, not pasty; small clumps hold together when pressed lightly",
        "visualZh": "肉粒分明，轻压可聚，不黏腻成糊",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "signal": "Grains separate cleanly when stirred with chopsticks",
        "signalZh": "筷子拨动时颗粒分明、不结块"
      }
    },
    {
      "text": "Using wet hands, gently mix ingredients in one direction for 2 minutes until slightly sticky. Cover and chill 15 minutes.",
      "textZh": "双手沾凉水，顺一个方向轻搅2分钟至微黏。盖保鲜膜冷藏15分钟。",
      "zhHint": "单向搅打，水手防粘",
      "stateNote": {
        "visual": "Surface looks moist but not wet; mixture holds shape when scooped",
        "visualZh": "表面微润不渗水，勺起成团不散",
        "timeRef": "2 minutes mixing + 15 minutes chilling",
        "timeRefZh": "搅拌2分钟 + 冷藏15分钟",
        "signal": "Mixture springs back slightly when tapped",
        "signalZh": "轻拍表面略有回弹"
      }
    },
    {
      "text": "Form 4 large meatballs (150 g each), gently pressing to flatten slightly at base. Place each on a folded Napa leaf in a heatproof dish.",
      "textZh": "取150克肉馅，轻团成球，底部略压平。每颗置于一张对折的大白菜叶上，摆入耐热盘中。",
      "zhHint": "肉丸要松软，勿紧实",
      "stateNote": {
        "visual": "Balls are round with soft, dimpled surfaces—not smooth or tight",
        "visualZh": "丸子浑圆，表面微凹松软，非光滑紧实",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "Leaves curl slightly under weight without tearing",
        "signalZh": "菜叶承重微卷，不破裂"
      }
    },
    {
      "text": "Pour 500 ml hot water (just below boiling) around—not over—the meatballs. Cover tightly with lid or foil.",
      "textZh": "沿盘边缓缓注入500毫升近沸热水（勿冲淋肉丸），盖严锅盖或锡纸。",
      "zhHint": "水不没过，只围浸",
      "stateNote": {
        "visual": "Water reaches halfway up meatballs; surface is still",
        "visualZh": "水面至肉丸中部，水面平静无泡",
        "timeRef": "immediately after pouring",
        "timeRefZh": "注水后即刻",
        "signal": "No steam escapes from edges of cover",
        "signalZh": "盖严无蒸汽逸出"
      }
    },
    {
      "text": "Steam over medium-low heat for 50 minutes. Do not open lid during cooking. After steaming, carefully lift meatballs with slotted spoon onto warm plates; spoon broth and cabbage leaf over top.",
      "textZh": "中低温隔水蒸50分钟，中途勿揭盖。蒸好后用漏勺轻托出肉丸，连同菜叶与汤汁一同盛盘。",
      "zhHint": "全程密闭慢蒸",
      "stateNote": {
        "visual": "Broth is clear pale amber; meatballs are plump and jiggle softly when shaken",
        "visualZh": "汤色清亮微黄；肉丸饱满，轻晃微颤",
        "timeRef": "50 minutes",
        "timeRefZh": "50 分钟",
        "heat": "medium-low",
        "signal": "Steam vents steadily but quietly—no vigorous bubbling",
        "signalZh": "蒸汽匀缓排出，无剧烈沸腾声"
      }
    }
  ],
  "tips": [
    "Chill meat and hands before shaping—cold fat stays firm and yields tender texture.",
    "Use only Napa or Savoy cabbage leaves—they soften perfectly without disintegrating.",
    "Never boil the broth; gentle steam preserves the delicate porosity of the meatballs."
  ],
  "tipsZh": [
    "肉馅和手均需冷藏后再团丸——冷脂肪更易保持蓬松口感。",
    "仅用大白菜或卷心菜叶——久蒸不烂，柔韧裹汁。",
    "切忌煮沸汤汁；文火蒸制才能维持肉丸内部蜂窝结构。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/yangzhou-lion-head.webp"
};
