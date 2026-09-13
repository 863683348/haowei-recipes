import type { Recipe } from "@/lib/types";

/** Ginger-Scallion Steamed Grouper (姜葱清蒸石斑鱼) — Day batch */
export const ginger_scallion_steamed_grouper: Recipe = {
  "id": "ginger-scallion-steamed-grouper",
  "slug": "ginger-scallion-steamed-grouper",
  "titleEn": "Ginger-Scallion Steamed Grouper",
  "titleZh": "姜葱清蒸石斑鱼",
  "pinyin": "jiāng cōng qīng zhēng shí bān yú",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Grouper is firmer than sea bass; may need 1 extra minute of steaming.",
  "versionNoteZh": "石斑鱼肉质比鲈鱼紧实，蒸制时间可多1分钟。",
  "tags": [
    "healthy",
    "seafood",
    "cantonese",
    "celebration"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "In Cantonese banquets, steamed grouper is the centerpiece — a symbol of prosperity and freshness. The ginger-scallion dressing is simple but demands precision: the ginger must be paper-thin, the scallions julienned fine as hair.",
  "storyZh": "粤式宴席上，清蒸石斑是头菜——象征丰盛与新鲜。姜葱汁看似简单，讲究却在细节：姜要片薄如纸，葱要切细如发。",
  "ingredients": [
    {
      "id": "grouper-01",
      "nameEn": "whole grouper, scaled and gutted",
      "nameZh": "整石斑鱼（已去鳞去内脏）",
      "pinyin": "shí bān yú",
      "amountMetric": "800 g",
      "amountUS": "1.8 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask for a whole fish; if only fillets, reduce steam time to 6 minutes",
      "noteZh": "整鱼为佳；如用鱼片，蒸制时间减至6分钟"
    },
    {
      "id": "ginger-02",
      "nameEn": "ginger, cut into paper-thin matchsticks",
      "nameZh": "生姜，切极细丝",
      "pinyin": "shēng jiāng",
      "amountMetric": "50 g",
      "amountUS": "3.5 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "scallion-03",
      "nameEn": "scallions, cut into fine julienne",
      "nameZh": "小葱，切细丝",
      "pinyin": "xiǎo cōng",
      "amountMetric": "4 stalks",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "light-soy-04",
      "nameEn": "light soy sauce (steaming soy)",
      "nameZh": "蒸鱼豉油",
      "pinyin": "zhēng yú chǐ yóu",
      "amountMetric": "40 ml",
      "amountUS": "2½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "oil-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Score the grouper deeply on both sides. Rub with a splash of Shaoxing wine and stuff the cavity with half the ginger and scallion.",
      "textZh": "鱼身两侧深切的三刀，抹少许绍酒，鱼腹内塞入一半姜葱。",
      "zhHint": "切刀要深，姜葱塞腹中去腥增香"
    },
    {
      "text": "Bring steamer water to a full boil. Place fish on a heatproof plate, set in steamer, cover tightly.",
      "textZh": "蒸锅水烧开，鱼放盘中入蒸锅，盖紧锅盖。",
      "zhHint": "水开再上锅，大火足汽"
    },
    {
      "text": "Steam on high heat for 10 minutes. The fish is done when the eyes bulge slightly and flesh flakes easily at the thickest part.",
      "textZh": "大火蒸10分钟，鱼眼微凸、最厚处用筷能轻松插入即熟。",
      "zhHint": "石斑比鲈鱼厚，蒸10分钟",
      "stateNote": {
        "visual": "Fish eyes turn white and bulge; flesh at the bone separates easily",
        "visualZh": "鱼眼变白突出，骨边肉轻易分离",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "high",
        "signal": "Fork or chopstick slides into the thickest part with no resistance",
        "signalZh": "筷尖插入鱼身最厚处毫无阻力"
      }
    },
    {
      "text": "Remove fish, discard old aromatics and any liquid. Pattern new ginger and scallion strips over the top in a decorative fan shape.",
      "textZh": "取出鱼，去掉旧姜葱，倒掉腥水，重新摆上鲜姜丝葱丝。",
      "zhHint": "倒腥水是清蒸鱼的精髓"
    },
    {
      "text": "Heat oil until smoking. Pour over the ginger-scallion arrangement — listen for the loud sizzle. Drizzle soy sauce around the plate edge. Serve immediately.",
      "textZh": "油烧至冒烟淋上，滋啦一声，沿盘边淋入豉油，立即上桌。",
      "zhHint": "淋油的声音是这道菜的 BGM",
      "stateNote": {
        "visual": "Oil smokes; scallion strips curl and darken on contact",
        "visualZh": "油冒青烟，葱丝接触热油后立即卷曲变深",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Oil temperature ~200°C — chopstick bubbles immediately",
        "signalZh": "油温约200°C——木筷入油立即冒泡"
      }
    }
  ],
  "tips": [
    "Grouper is firmer than sea bass — adjust time based on thickness.",
    "The visual of curling scallion strips in hot oil is the signature move.",
    "This dish is a banquet centerpiece — make it for guests."
  ],
  "tipsZh": [
    "石斑比鲈鱼紧实，蒸制时间视厚度调整。",
    "葱丝在热油中卷曲是这道菜的标志性瞬间。",
    "宴席头菜，招待客人必做。"
  ],
  "relatedSlugs": [
    "scallion-oil-steamed-sea-bass",
    "garlic-vermicelli-steamed-scallops",
    "squirrel-fish",
    "duojiao-fish-head",
    "tin-foil-grilled-fish"
  ],
  "image": "/images/recipes/ginger-scallion-steamed-grouper.webp"
};
