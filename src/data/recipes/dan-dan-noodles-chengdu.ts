import type { Recipe } from "@/lib/types";

/** Chengdu-Style Dan Dan Noodles (成都担担面) — Seed batch */
export const dan_dan_noodles_chengdu: Recipe = {
  "id": "dan-dan-noodles-chengdu",
  "slug": "dan-dan-noodles-chengdu",
  "titleEn": "Chengdu-Style Dan Dan Noodles",
  "titleZh": "成都担担面",
  "pinyin": "Chéngdū dàndàn miàn",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "This is the original Chengdu home version—no meat broth, just a rich, nutty, spicy-savory sauce clinging to chewy noodles. Restaurants often add broth or sesame paste; our family never does.",
  "versionNoteZh": "这是原汁原味的成都家常版——无高汤，仅靠香浓酱汁裹面。餐馆常加汤或芝麻酱，我家从不加。",
  "tags": [
    "30-min",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt Mei in Qingyang District, Chengdu, stirred this sauce every Tuesday after market day—she’d toast Sichuan peppercorns in her wok until they smelled like citrus and pine, then grind them by hand with roasted peanuts. I still use her chipped granite mortar.",
  "storyZh": "我住在成都青羊区的梅姨每周二赶完菜市就做这碗面——她把花椒在铁锅里焙到散发柑橘与松针香，再和烤花生一起用石臼手舂。我至今还用着她那口豁了边的石臼。",
  "ingredients": [
    {
      "id": "dd-01",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "四川花椒",
      "pinyin": "Sìchuān huājiāo",
      "amountMetric": "6 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Look for deep red, plump berries—not dusty or brown",
      "noteZh": "选深红色、饱满颗粒，忌灰暗或碎末状",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "dd-02",
      "nameEn": "roasted unsalted peanuts",
      "nameZh": "熟花生仁",
      "pinyin": "shú huāshēng rén",
      "amountMetric": "40 g",
      "amountUS": "1/4 cup",
      "category": "staple",
      "pantry": "local",
      "note": "Substitute toasted sunflower seeds if unavailable",
      "noteZh": "无花生可用烤葵花籽替代"
    },
    {
      "id": "dd-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēngchōu",
      "amountMetric": "25 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "dd-04",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "dd-05",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "pinyin": "zhūròu mò",
      "amountMetric": "200 g",
      "amountUS": "¾ cup (loosely packed)",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "dd-06",
      "nameEn": "fresh wheat noodles",
      "nameZh": "鲜切面",
      "pinyin": "xiān qiē miàn",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz (about 2 bundles)",
      "category": "staple",
      "pantry": "local",
      "note": "Substitute dried alkaline noodles (ramen-style) if fresh unavailable",
      "noteZh": "无鲜面可用干碱水面（日式拉面型）替代"
    }
  ],
  "steps": [
    {
      "text": "Toast Sichuan peppercorns in a dry wok over medium heat until fragrant and slightly smoking, about 2 minutes. Cool completely, then grind with roasted peanuts into a coarse powder using a mortar or spice grinder.",
      "textZh": "干锅中火焙香花椒约2分钟，至微冒青烟、香气迸发；晾凉后与烤花生同捣成粗粉。",
      "zhHint": "焙香→晾凉→合捣",
      "stateNote": {
        "visual": "Peppercorns puff slightly and darken at edges",
        "visualZh": "花椒边缘微鼓、颜色略深",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Aromatic citrus-pine scent fills the kitchen",
        "signalZh": "厨房弥漫柑橘与松针清香"
      }
    },
    {
      "text": "Heat 1 tbsp neutral oil in same wok over medium-high heat. Add ground pork and stir-fry until crumbled and no pink remains (~3 min). Push pork to side; add 1 tsp doubanjiang and stir-fry 30 seconds until oil turns brick-red.",
      "textZh": "同一锅烧热油，中大火下肉末炒散至断生（约3分钟）；拨至锅边，加1茶匙郫县豆瓣酱，煸炒30秒至红油渗出。",
      "zhHint": "先炒肉，再煸酱",
      "stateNote": {
        "visual": "Oil shimmers and reddens around the edges of the paste",
        "visualZh": "酱料边缘油色转砖红并泛光",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "Deep fermented aroma rises sharply",
        "signalZh": "浓郁酱香骤然升腾"
      }
    },
    {
      "text": "Return pork to center. Stir in light soy sauce, Chinese black vinegar, 1 tsp sugar, and 2 tbsp water. Simmer 2 minutes until thickened and glossy. Remove from heat; stir in Sichuan-peanut powder.",
      "textZh": "将肉末回锅中心，加入生抽、陈醋、糖和水，小火焖2分钟至酱汁油亮浓稠；离火拌入花椒花生粉。",
      "zhHint": "合酱→焖收→拌粉",
      "stateNote": {
        "visual": "Sauce coats spoon thickly and leaves clear trail",
        "visualZh": "酱汁浓稠挂勺，划痕清晰",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Bubbles pop slowly and evenly",
        "signalZh": "气泡缓慢均匀破裂"
      }
    },
    {
      "text": "Cook noodles in plenty of boiling salted water until just tender (al dente), ~3 minutes for fresh noodles. Drain well—do not rinse.",
      "textZh": "宽水滚盐煮面至断生（鲜面约3分钟），捞出沥干，勿过凉水。",
      "zhHint": "宽水·滚盐·断生·沥干",
      "stateNote": {
        "visual": "Noodles separate easily and show slight white core when bitten",
        "visualZh": "面条易散，咬开见微白芯",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Water returns to vigorous boil within 15 seconds of adding noodles",
        "signalZh": "下面后15秒内水重沸"
      }
    },
    {
      "text": "Divide noodles between two bowls. Spoon warm sauce generously over top. Garnish with chopped scallions and a drizzle of sesame oil.",
      "textZh": "面条分装两碗，趁热铺满酱料，撒葱花，淋香油。",
      "zhHint": "热面·热酱·冷葱·温油",
      "stateNote": {
        "visual": "Sauce glistens and clings without pooling",
        "visualZh": "酱汁油亮裹面，不积底油",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "medium-low",
        "signal": "Steam rises steadily from noodles",
        "signalZh": "面条持续升腾热气"
      }
    }
  ],
  "tips": [
    "Use a heavy-bottomed wok—it retains heat better for even toasting and stir-frying.",
    "Never skip toasting the Sichuan peppercorns: raw ones taste bitter and flat.",
    "The sauce keeps refrigerated for 5 days—double batch and freeze half in ice cube trays."
  ],
  "tipsZh": [
    "务必用厚底锅，受热均匀，焙椒炒酱更稳。",
    "花椒必须焙香，生椒苦涩寡淡。",
    "酱料可冷藏5天；建议一次做双份，冻成冰格块备用。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/dan-dan-noodles-chengdu.webp"
};
