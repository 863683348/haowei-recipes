import type { Recipe } from "@/lib/types";

/** Minced Pork Steamed Egg (肉末蒸蛋) — Seed batch */
export const minced_pork_steamed_egg: Recipe = {
  "id": "rou-mo-zheng-dan",
  "slug": "minced-pork-steamed-egg",
  "titleEn": "Minced Pork Steamed Egg",
  "titleZh": "肉末蒸蛋",
  "pinyin": "ròu mò zhēng dàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses lean pork only, no cornstarch slurry or heavy soy — just a whisper of ginger and light soy to lift the meat. Restaurants often add Shaoxing wine or oyster sauce.",
  "versionNoteZh": "家庭版仅用瘦猪肉末，不加淀粉水或重口味酱油，仅以姜末与生抽提鲜；餐馆版常加绍兴酒或蚝油。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Jinniu District stirred minced pork into his steamed egg every winter — he’d marinate it with a pinch of white pepper and a dash of light soy, then press it lightly into the surface so it stayed tender. He called it 'winter’s warmth in a bowl'.",
  "storyZh": "我在成都金牛区的爷爷每年冬天都做这道菜——他先用少许白胡椒粉和生抽腌肉末，再轻轻按压入蛋液表面，确保肉质嫩滑。他管这叫‘一碗冬暖’。",
  "ingredients": [
    {
      "id": "eg-02",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "200 g",
      "amountUS": "4 large",
      "category": "protein",
      "pantry": "local",
      "note": "Room-temperature eggs prevent separation",
      "noteZh": "室温鸡蛋防分层"
    },
    {
      "id": "po-01",
      "nameEn": "lean ground pork",
      "nameZh": "瘦猪肉末",
      "pinyin": "shòu zhū ròu mò",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup loosely packed",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute ground turkey or chicken if pork unavailable",
      "noteZh": "如无猪肉，可用火鸡末或鸡末替代"
    },
    {
      "id": "wa-02",
      "nameEn": "cool boiled water or filtered water",
      "nameZh": "凉开水或过滤水",
      "pinyin": "liáng kāi shuǐ huò guò lǜ shuǐ",
      "amountMetric": "160 ml",
      "amountUS": "2/3 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "gi-01",
      "nameEn": "fresh ginger, finely minced",
      "nameZh": "生姜末",
      "pinyin": "shēng jiāng mò",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ls-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Marinate ground pork with minced ginger and 2 ml (½ tsp) light soy sauce for 5 minutes.",
      "textZh": "将猪肉末与姜末、2毫升（½茶匙）生抽拌匀，腌制5分钟。",
      "zhHint": "先腌肉末"
    },
    {
      "text": "Whisk eggs gently in a bowl. Add cool boiled water and whisk again until uniform. Strain into a shallow heatproof dish.",
      "textZh": "轻柔搅打鸡蛋，加入凉开水搅匀，过细网筛滤入浅碗。",
      "zhHint": "蛋水同搅，过筛"
    },
    {
      "text": "Spread marinated pork evenly over the surface of the egg mixture. Use the back of a spoon to gently press it down so it stays embedded.",
      "textZh": "将腌好的肉末均匀铺于蛋液表面，用勺背轻压使其嵌入蛋液。",
      "zhHint": "肉末轻压入蛋"
    },
    {
      "text": "Cover dish tightly with foil. Steam over medium-low heat for 14–16 minutes.",
      "textZh": "盖紧铝箔纸，中火转小火蒸14–16分钟。",
      "zhHint": "封严，小火蒸",
      "stateNote": {
        "visual": "Egg surface is firm and smooth, pork is opaque and no longer pink",
        "visualZh": "蛋面凝固光滑，肉末呈灰白色，无粉红血色",
        "timeRef": "14–16 minutes",
        "timeRefZh": "14–16 分钟",
        "heat": "medium-low",
        "signal": "Slight jiggle only at center when gently shaken; no liquid visible on surface",
        "signalZh": "轻晃碗时仅中心微颤；表面无水珠"
      }
    },
    {
      "text": "Drizzle remaining light soy sauce over top. Let rest 2 minutes before serving. Optional: garnish with scallion greens.",
      "textZh": "淋入剩余生抽，静置2分钟再食用。可选：撒葱绿丝。",
      "zhHint": "出锅淋酱，稍候再吃"
    }
  ],
  "tips": [
    "Press pork gently — too much pressure pushes it into the egg, making layers indistinct.",
    "Ginger must be very finely minced to avoid fibrous bites.",
    "If using ground turkey, reduce steaming time by 1–2 minutes — it cooks faster than pork."
  ],
  "tipsZh": [
    "肉末轻压即可，用力过猛会沉入蛋液，失去层次感。",
    "姜末需切极细，避免咀嚼时有纤维感。",
    "若用火鸡末，蒸制时间减少1–2分钟，因其熟得比猪肉快。"
  ],
  "relatedSlugs": [
    "shrimp-steamed-egg"
  ],
  "image": "/images/recipes/minced-pork-steamed-egg.webp"
};
