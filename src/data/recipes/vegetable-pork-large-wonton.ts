import type { Recipe } from "@/lib/types";

/** Vegetable-Pork Large Wonton (菜肉大馄饨) — Seed batch */
export const vegetable_pork_large_wonton: Recipe = {
  "id": "cai-rou-da-hun-tun",
  "slug": "vegetable-pork-large-wonton",
  "titleEn": "Vegetable-Pork Large Wonton",
  "titleZh": "菜肉大馄饨",
  "pinyin": "cài ròu dà hún tún",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Ningbo",
  "regionZh": "宁波",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses larger wrappers (10 cm) and includes napa cabbage—salted and squeezed—to add crunch and balance richness. No oyster sauce or MSG, unlike many restaurant versions.",
  "versionNoteZh": "家庭版用10厘米大方皮，加入盐渍挤干的大白菜，增脆爽、解油腻；不用蚝油或味精。",
  "tags": [
    "30-min",
    "vegetarian-friendly",
    "soup"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Ningbo’s old port district made these for winter solstice. She’d shred napa cabbage, rub with salt, wait 10 minutes, then wring it out in a cotton cloth—‘like squeezing tears from the vegetable,’ she’d say—before mixing with pork and bamboo shoots. The wrappers were always handmade from scratch, stretched thin with a rolling pin.",
  "storyZh": "宁波老港区的姑妈冬至必做这道菜。她将大白菜切丝，加盐揉10分钟，再用棉布拧干——‘像把菜的眼泪挤出来’。馅里拌入猪肉和笋丁，皮则是手擀薄如纸。",
  "ingredients": [
    {
      "id": "cr-01",
      "nameEn": "ground pork (shoulder, 25% fat)",
      "nameZh": "猪前腿肉末（肥瘦比2.5:7.5）",
      "pinyin": "zhū qián tuǐ ròu mò",
      "amountMetric": "250 g",
      "amountUS": "1 1/8 cups",
      "category": "protein",
      "pantry": "local",
      "note": "Higher fat than standard wonton—needed to offset cabbage’s water loss",
      "noteZh": "肥肉比例略高，平衡白菜脱水后的干涩"
    },
    {
      "id": "cr-02",
      "nameEn": "napa cabbage",
      "nameZh": "大白菜",
      "pinyin": "dà bái cài",
      "amountMetric": "200 g",
      "amountUS": "2 cups shredded",
      "category": "produce",
      "pantry": "local",
      "note": "Core removed, leaves shredded fine; substitute green cabbage if unavailable",
      "noteZh": "去硬芯，细切；若无，可用圆白菜替代"
    },
    {
      "id": "cr-03",
      "nameEn": "bamboo shoots (canned, rinsed, minced)",
      "nameZh": "笋丁（罐装，洗净切碎）",
      "pinyin": "sǔn dīng",
      "amountMetric": "100 g",
      "amountUS": "1/2 cup minced",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse well to remove tinny taste; pat dry",
      "noteZh": "充分冲洗去金属味；吸干水分"
    },
    {
      "id": "cr-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cr-05",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Toss shredded napa cabbage with 1 tsp (5 g) salt. Let sit 10 minutes in a colander, then squeeze *hard* in a clean kitchen towel until 1/4 cup liquid is expelled.",
      "textZh": "大白菜丝加1茶匙盐拌匀，盆中静置10分钟；用洁净厨房巾用力拧干，挤出约1/4杯水。",
      "zhHint": "盐腌去水，拧干是关键",
      "stateNote": {
        "visual": "Cabbage turns pale green and feels springy, not wet or limp",
        "visualZh": "白菜变浅绿，手感弹韧，不湿不塌",
        "timeRef": "10 minutes + 1 minute squeezing",
        "timeRefZh": "10分钟腌 + 1分钟拧干",
        "signal": "Towel shows no dampness after squeezing",
        "signalZh": "拧干后毛巾无湿痕"
      }
    },
    {
      "text": "In a bowl, combine pork, drained cabbage, minced bamboo shoots, light soy, and white pepper. Stir 2 minutes clockwise until mixture springs back when pressed.",
      "textZh": "碗中混合猪肉、挤干白菜、笋丁、生抽、白胡椒粉，顺时针搅打2分钟至馅料按压后回弹。",
      "zhHint": "顺时针搅打，上劲回弹",
      "stateNote": {
        "visual": "Filling clings to spoon and forms ridges when scraped",
        "visualZh": "馅料挂勺，刮勺显纹路",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Press thumb into mixture—it rebounds within 2 seconds",
        "signalZh": "拇指按压，2秒内回弹"
      }
    },
    {
      "text": "Place 1.5 tbsp (20 g) filling onto each large square wrapper (10 cm). Fold into ‘envelope’ shape: fold top edge down, left/right corners inward, then seal bottom flap.",
      "textZh": "每张大方皮（10厘米）放1.5汤匙（20克）馅；折成信封形——上边向下折，左右角向内收，最后封底边。",
      "zhHint": "信封包法，皮厚馅足",
      "stateNote": {
        "visual": "Wrapper fully encloses filling with no bulges or gaps",
        "visualZh": "皮完全包裹馅料，无鼓包或缝隙",
        "timeRef": "5–6 seconds per wonton",
        "timeRefZh": "每个馄饨5–6秒",
        "signal": "Bottom seam holds firm when lifted by top corner",
        "signalZh": "拎顶角，底边不松脱"
      }
    },
    {
      "text": "Bring broth (water + 1 small dried shrimp + 1 slice ginger) to gentle simmer. Add wontons and poach at medium-low heat for 6 minutes—do not boil hard.",
      "textZh": "清汤（水+1颗干虾米+1片姜）微沸，下馄饨，中低火浸煮6分钟——忌滚沸。",
      "zhHint": "微沸浸煮，皮不破馅不散",
      "stateNote": {
        "visual": "Tiny bubbles rise slowly around each wonton; surface barely shivers",
        "visualZh": "馄饨周围缓慢冒小泡；汤面仅微颤",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium-low",
        "signal": "Wontons move gently—not bouncing or spinning",
        "signalZh": "馄饨轻移，不弹跳不打转"
      }
    },
    {
      "text": "Ladle soup and 6 wontons per bowl. Garnish with minced scallion and a drop of sesame oil.",
      "textZh": "每碗舀入热汤与6只馄饨，撒葱花，滴香油。",
      "zhHint": "汤宽馅足，香油点睛",
      "stateNote": {
        "visual": "Wontons rest upright in broth, not floating or sinking",
        "visualZh": "馄饨直立汤中，不浮不沉",
        "timeRef": "immediately after poaching",
        "timeRefZh": "出锅即盛",
        "signal": "Steam carries scent of bamboo and ginger",
        "signalZh": "热气带出竹香与姜香"
      }
    }
  ],
  "tips": [
    "Salt cabbage *before* mixing—adding salt later draws out moisture mid-prep and ruins texture.",
    "Large wrappers stretch best when rested 10 minutes after rolling—cover with damp cloth.",
    "Poach, don’t boil: high heat makes wrappers tough and causes filling to leak."
  ],
  "tipsZh": [
    "白菜必须先盐腌再拌馅，后放盐会中途出水，毁质地。",
    "大方皮擀好后盖湿布醒10分钟，延展性更佳。",
    "浸煮勿滚沸：大火使皮韧、馅漏。"
  ],
  "relatedSlugs": [
    "fresh-pork-wonton",
    "spicy-red-oil-chao-shou"
  ],
  "image": "/images/recipes/vegetable-pork-large-wonton.webp"
};
