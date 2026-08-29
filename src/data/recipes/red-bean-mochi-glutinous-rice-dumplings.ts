import type { Recipe } from "@/lib/types";

/** Red Bean Mochi (Sweet Azuki Dumplings) (豆沙糯米糍) — Seed batch */
export const red_bean_mochi_glutinous_rice_dumplings: Recipe = {
  "id": "dousha-mochi",
  "slug": "red-bean-mochi-glutinous-rice-dumplings",
  "titleEn": "Red Bean Mochi (Sweet Azuki Dumplings)",
  "titleZh": "豆沙糯米糍",
  "pinyin": "dòu shā nuò mǐ cí",
  "cuisine": "甜品饮品",
  "cuisineEn": "Dessert & Beverage",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses homemade red bean paste cooked low-and-slow with minimal sugar—no canned fillings or preservatives. Texture is tender-chewy, not gummy.",
  "versionNoteZh": "家常版用慢熬自制红豆沙，少糖无添加；口感柔韧微弹，非胶质感。",
  "tags": [
    "30-min",
    "summer",
    "no-oven"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Suzhou taught me this on a humid July afternoon—she said her mother used to make these for children returning from school, dusted with roasted soybean flour so they wouldn’t stick, and always served with jasmine tea to cut the sweetness.",
  "storyZh": "苏州的姑妈在一个闷热七月午后教我这道点心——她说母亲从前专做给放学归来的孩童，裹上焙香的黄豆粉防粘，必配茉莉花茶解腻。",
  "ingredients": [
    {
      "id": "dm-01",
      "nameEn": "glutinous rice flour",
      "nameZh": "糯米粉",
      "pinyin": "nuò mǐ fěn",
      "amountMetric": "150 g",
      "amountUS": "1 ¼ cups",
      "category": "staple",
      "pantry": "asian",
      "note": "Must be labeled 'sweet rice flour' or 'glutinous rice flour'.",
      "noteZh": "必须标有‘甜米粉’或‘糯米粉’。"
    },
    {
      "id": "dm-02",
      "nameEn": "azuki beans (dried)",
      "nameZh": "赤小豆（干）",
      "pinyin": "chì xiǎo dòu",
      "amountMetric": "120 g",
      "amountUS": "¾ cup",
      "category": "produce",
      "pantry": "asian",
      "note": "Substitute: canned unsweetened adzuki beans (drained, rinsed, mashed).",
      "noteZh": "替代：无糖罐装赤豆（沥干、冲洗、压泥）。"
    },
    {
      "id": "dm-03",
      "nameEn": "granulated sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "45 g",
      "amountUS": "¼ cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "",
      "noteZh": ""
    },
    {
      "id": "dm-04",
      "nameEn": "roasted soybean flour (kinako)",
      "nameZh": "黄豆粉（焙香）",
      "pinyin": "huáng dòu fěn",
      "amountMetric": "30 g",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Find in Asian grocery or make by dry-toasting raw soy flour until golden and nutty.",
      "noteZh": "亚洲超市有售；或用生黄豆粉干锅焙至金黄带香。"
    }
  ],
  "steps": [
    {
      "text": "Soak dried azuki beans in cold water overnight (or 6 hours). Drain and rinse.",
      "textZh": "干赤豆冷水浸泡过夜（或至少6小时），捞出沥干冲洗。",
      "zhHint": "浸泡赤豆",
      "stateNote": {
        "visual": "Beans plump to nearly double size and feel soft when pinched",
        "visualZh": "豆子胀大近一倍，轻捏软糯",
        "timeRef": "6–8 hours",
        "timeRefZh": "6–8 小时",
        "signal": "Skin begins to loosen and water turns pale pink",
        "signalZh": "豆皮微松，泡水呈淡粉色"
      }
    },
    {
      "text": "Cook soaked beans in fresh water (3:1 ratio) over medium-low heat until very soft (about 45 minutes). Drain well, reserving 2 tbsp cooking liquid.",
      "textZh": "换清水（水量为豆量3倍），中小火煮至酥烂（约45分钟）。滤干，留2汤匙原汤。",
      "zhHint": "煮豆至酥烂",
      "stateNote": {
        "visual": "Beans mash easily with fork and release creamy starch",
        "visualZh": "豆子叉压即化，渗出绵密淀粉",
        "timeRef": "45 minutes",
        "timeRefZh": "45 分钟",
        "heat": "medium-low",
        "signal": "Most beans split open and liquid thickens slightly",
        "signalZh": "多数豆粒绽开，汤汁微稠"
      }
    },
    {
      "text": "Mash beans with sugar and reserved liquid in a pot over low heat, stirring constantly until thick, glossy, and pulls away from pan (10–12 minutes). Cool completely.",
      "textZh": "锅中以小火将豆泥、糖及预留汤汁同炒，不停搅动至浓稠油亮、离锅成片（10–12分钟）。彻底放凉。",
      "zhHint": "炒豆沙至离锅",
      "stateNote": {
        "visual": "Paste forms a cohesive sheet and leaves clear trail when scraped",
        "visualZh": "膏体成片，刮锅底留清晰痕迹",
        "timeRef": "10–12 minutes",
        "timeRefZh": "10–12 分钟",
        "heat": "low",
        "signal": "No steam rises and paste holds shape when lifted",
        "signalZh": "无水汽蒸腾，膏体提起成形不坠"
      }
    },
    {
      "text": "Mix glutinous rice flour with 120 ml (½ cup) warm water to form a smooth batter. Steam in a greased heatproof dish for 20 minutes until translucent and springy.",
      "textZh": "糯米粉加120 ml温水调成无颗粒米浆，倒入抹油耐热盘，上锅蒸20分钟至透亮弹牙。",
      "zhHint": "蒸制糯米皮",
      "stateNote": {
        "visual": "Surface is glossy and slightly jiggles like firm jelly",
        "visualZh": "表面油亮，轻晃如凝脂微颤",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "high",
        "signal": "Center is no longer cloudy and knife inserted comes out clean",
        "signalZh": "中心无白芯，竹签插入拔出洁净"
      }
    },
    {
      "text": "Knead warm steamed dough on a surface dusted with roasted soybean flour until smooth and pliable. Divide into 12 pieces, flatten, wrap 1 tbsp red bean paste, and seal into smooth balls. Roll in more soybean flour.",
      "textZh": "趁热在撒黄豆粉的案板上揉蒸熟的糯米团至柔韧光滑；分12份，包入1汤匙豆沙，搓圆后滚满黄豆粉。",
      "zhHint": "包馅裹粉",
      "stateNote": {
        "visual": "Balls are evenly coated and dough no longer sticks to hands",
        "visualZh": "汤圆均匀裹粉，手不沾黏",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "signal": "Dough feels warm but manageable and holds shape under light pressure",
        "signalZh": "面团微温易操作，轻压不变形"
      }
    }
  ],
  "tips": [
    "Freeze uncoated mochi for up to 1 month—thaw at room temp, then coat with kinako before serving.",
    "For smoother paste, pass cooked beans through a fine sieve before sweetening.",
    "Avoid over-kneading: it makes mochi tough."
  ],
  "tipsZh": [
    "未裹粉的糯米糍可冷冻1个月——食用前室温解冻，再裹黄豆粉。",
    "追求更细腻口感，可将煮好的豆子过细筛后再调味。",
    "忌过度揉搓，否则糯米糍会变硬。"
  ],
  "relatedSlugs": [
    "sesame-tangyuan-glutinous-rice-balls"
  ],
  "image": "/images/recipes/red-bean-mochi-glutinous-rice-dumplings.webp"
};
