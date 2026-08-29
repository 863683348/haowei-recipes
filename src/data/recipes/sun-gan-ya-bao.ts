import type { Recipe } from "@/lib/types";

/** Dried Bamboo Shoot and Old Duck Pot-au-Feu (笋干老鸭煲) — Seed batch */
export const sun_gan_ya_bao: Recipe = {
  "id": "sun-gan-ya-bao",
  "slug": "sun-gan-ya-bao",
  "titleEn": "Dried Bamboo Shoot and Old Duck Pot-au-Feu",
  "titleZh": "笋干老鸭煲",
  "pinyin": "sǔn gān lǎo yā bāo",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Hangzhou, Zhejiang",
  "regionZh": "浙江杭州",
  "difficulty": "medium",
  "timeMin": 240,
  "servings": 6,
  "version": "family",
  "versionNote": "This is my aunt’s Hangzhou version—she uses a 3-year-old duck from Xixi wetlands and sun-dried bamboo shoots from Lin’an. No MSG, no stock cubes: only time and firewood smoke.",
  "versionNoteZh": "这是杭州姨妈的做法——选用西溪湿地养满三年的老鸭，配临安日晒笋干。不放味精、不放高汤块，只靠时间与柴火烟气。",
  "tags": [
    "slow-cooked",
    "soup",
    "winter"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every October, my aunt in Hangzhou would ride her bicycle to Xixi Wetland to collect wild duck eggs, then raise the ducklings herself. At age three, she’d slaughter one, soak the dried bamboo shoots for 48 hours, and simmer the pot over a low wood fire for an entire day—until the broth turned amber and clung to the spoon.",
  "storyZh": "每年十月，杭州姨妈骑自行车去西溪湿地捡野鸭蛋，自己孵养小鸭。养到第三年宰杀一只，笋干泡足48小时，再用柴火灶文火慢煨一整天——直至汤色琥珀、挂勺成线。",
  "ingredients": [
    {
      "id": "sy-01",
      "nameEn": "whole old duck (3+ years), cut into 8 pieces, giblets reserved",
      "nameZh": "三年以上老鸭，斩成8块（含鸭肫鸭肝）",
      "pinyin": "sān nián yǐ shàng lǎo yā",
      "amountMetric": "1.8 kg",
      "amountUS": "4 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for ‘old laying duck’ or ‘breeding duck’. If unavailable, use 2.2 lb bone-in duck leg/thigh mix + 1 duck neck.",
      "noteZh": "请肉铺提供‘老母鸭’或‘种鸭’。若无，可用2.2磅带骨鸭腿/鸭 thighs混合1根鸭颈替代。"
    },
    {
      "id": "sy-02",
      "nameEn": "dried bamboo shoots (sun-gan sun), soaked 48h, sliced 3 mm thick",
      "nameZh": "日晒笋干（泡发48小时后切3毫米片）",
      "pinyin": "rì shài sǔn gān",
      "amountMetric": "150 g",
      "amountUS": "1.5 cups shredded",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for ‘Lin’an sun-dried bamboo shoots’ (not canned or vacuum-packed soft ones). Soak in cool water, changing twice daily.",
      "noteZh": "认准‘临安日晒笋干’（非罐头或软包装款）。凉水浸泡，每日换水两次。"
    },
    {
      "id": "sy-03",
      "nameEn": "ginger, smashed",
      "nameZh": "老姜，拍松",
      "pinyin": "lǎo jiāng",
      "amountMetric": "60 g",
      "amountUS": "¼ cup sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sy-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "60 ml",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sy-05",
      "nameEn": "scallions, white parts only, tied in bundle",
      "nameZh": "小葱葱白，扎成束",
      "pinyin": "xiǎo cōng cōng bái",
      "amountMetric": "80 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse duck pieces under cold water. Blanch in large pot with ginger slices and 2 tbsp Shaoxing wine for 5 minutes. Discard water, rinse duck, and pat dry.",
      "textZh": "鸭块冷水冲洗。加姜片、2大勺黄酒，冷水下锅焯5分钟。倒掉血水，鸭块洗净擦干。",
      "zhHint": "冷水焯鸭，去尽血沫",
      "stateNote": {
        "visual": "Water turns cloudy pink; foam rises steadily",
        "visualZh": "水变粉浊；浮沫持续上涌",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Foam peaks then stabilizes",
        "signalZh": "浮沫升至最高点后趋于平稳"
      }
    },
    {
      "text": "Heat oil in heavy-bottomed pot over medium heat. Sear duck pieces until deeply browned on all sides (8–10 min). Remove and set aside.",
      "textZh": "厚底锅烧热油，中火将鸭块各面煎至深褐（8–10分钟）。盛出备用。",
      "zhHint": "煎至鸭皮焦香微裂",
      "stateNote": {
        "visual": "Skin blisters and curls at edges; rich mahogany color develops",
        "visualZh": "鸭皮边缘起泡卷曲；呈浓郁枣红色",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "heat": "medium",
        "signal": "Duck releases naturally when ready to flip",
        "signalZh": "鸭块自动脱锅即为翻面时机"
      }
    },
    {
      "text": "Add soaked bamboo shoots to same pot. Stir-fry 3 minutes until aroma intensifies. Return duck, add remaining Shaoxing wine, scallion bundle, and enough boiling water to cover by 3 cm.",
      "textZh": "原锅下笋干，中火煸炒3分钟至香气更浓。回鸭块，加余下黄酒、葱束及沸水，水量没过食材3厘米。",
      "zhHint": "笋干先煸再炖，去涩增香",
      "stateNote": {
        "visual": "Shoots darken to tan; fragrance shifts from grassy to toasted nut",
        "visualZh": "笋干转为浅褐色；香气由青草味转为烘烤坚果香",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Small wisps of steam rise continuously",
        "signalZh": "持续有细小蒸汽升腾"
      }
    },
    {
      "text": "Bring to bare simmer (tiny bubbles), then cover and reduce heat to lowest possible setting. Simmer gently for 3 hours, skimming foam occasionally.",
      "textZh": "烧至微沸（汤面仅冒细泡），盖盖，调至最小火。慢炖3小时，期间撇去浮沫。",
      "zhHint": "全程微沸，忌大滚",
      "stateNote": {
        "visual": "Surface shimmers with intermittent pinprick bubbles",
        "visualZh": "汤面偶见针尖大小气泡闪动",
        "timeRef": "3 hours",
        "timeRefZh": "3 小时",
        "heat": "low",
        "signal": "Lid trembles faintly but no steam escapes",
        "signalZh": "锅盖微微颤动，但无蒸汽逸出"
      }
    },
    {
      "text": "Uncover, increase heat to medium. Simmer uncovered 30 minutes to concentrate broth. Skim excess oil. Taste and adjust only with salt—if needed.",
      "textZh": "开盖，中火收汤30分钟。撇净浮油。仅按需补盐调味。",
      "zhHint": "最后收汁，只加盐",
      "stateNote": {
        "visual": "Broth coats back of spoon thickly; reduces by ~⅓ volume",
        "visualZh": "汤汁能厚厚裹住勺背；总量减少约三分之一",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "medium",
        "signal": "Steam rises in steady, dense plume",
        "signalZh": "蒸汽呈稳定浓密柱状升起"
      }
    }
  ],
  "tips": [
    "Soaking time is non-negotiable: 48 hours ensures bitterness is fully leached.",
    "Never add salt early—it toughens duck protein. Season only in final 5 minutes.",
    "Strain broth through cheesecloth after cooking for crystal-clear clarity—true Hangzhou style."
  ],
  "tipsZh": [
    "泡发48小时不可省：彻底去除苦涩味。",
    "切勿早加盐——会使鸭肉变柴。仅最后5分钟酌情补盐。",
    "炖好后用纱布过滤汤汁，得澄澈如镜的杭帮清汤。"
  ],
  "relatedSlugs": [
    "meicai-kourou"
  ],
  "image": "/images/recipes/sun-gan-ya-bao.webp"
};
