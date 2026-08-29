import type { Recipe } from "@/lib/types";

/** White Mantou (Plain Steamed Buns) (白馒头) — Seed batch */
export const white_mantou_steamed_buns: Recipe = {
  "id": "bai-mantou",
  "slug": "white-mantou-steamed-buns",
  "titleEn": "White Mantou (Plain Steamed Buns)",
  "titleZh": "白馒头",
  "pinyin": "bái mántou",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 12,
  "version": "family",
  "versionNote": "Family version uses natural fermentation with a small starter dough (mianzhong) for tender, airy texture—no instant yeast shortcuts. Restaurant versions often add milk powder or sugar for gloss and speed.",
  "versionNoteZh": "家常版用面种自然发酵，蓬松柔软；餐馆版常加奶粉或糖提速增亮。",
  "tags": [
    "steamed-buns",
    "make-ahead",
    "freezer-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother in Xi’an always made mantou on Sunday mornings—she’d wake before dawn to feed the sourdough-like mianzhong, then steam batches in her black iron wok over boiling water. She said real mantou should ‘bloom like a lotus’ when split open: soft, white, and cloud-light.",
  "storyZh": "我西安的奶奶总在周日清晨做馒头——天没亮就喂养面种，再用黑铁锅隔水蒸。她说真正的馒头掰开要‘如莲花绽放’：雪白、绵软、轻如云朵。",
  "ingredients": [
    {
      "id": "bm-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Substitute bread flour (480 g) + cornstarch (20 g) if all-purpose is too weak",
      "noteZh": "若中筋粉筋度不足，可用高筋粉480g+玉米淀粉20g替代"
    },
    {
      "id": "bm-02",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "pinyin": "gān jiàomǔ",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Ensure expiration date is current; proof in warm milk if unsure of potency",
      "noteZh": "注意保质期；若活性存疑，可用温牛奶活化测试"
    },
    {
      "id": "bm-03",
      "nameEn": "warm whole milk",
      "nameZh": "温全脂牛奶",
      "pinyin": "wēn quán zhī niú nǎi",
      "amountMetric": "240 ml",
      "amountUS": "1 cup",
      "category": "dairy",
      "pantry": "local",
      "note": "Substitute warm water + 10 g powdered milk (1 tbsp) if fresh milk unavailable",
      "noteZh": "鲜奶缺货时，可用温水240ml+奶粉10g（1大勺）替代"
    },
    {
      "id": "bm-04",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "4 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Do not substitute iodized table salt—it inhibits yeast activity",
      "noteZh": "勿用含碘精制盐，会抑制酵母活性"
    }
  ],
  "steps": [
    {
      "text": "Make the mianzhong (starter dough): Mix 100 g flour, 5 g yeast, and 100 ml warm milk. Cover and rest at room temperature (22–25°C) for 12–16 hours until bubbly and doubled.",
      "textZh": "制作面种：将100克面粉、5克酵母和100毫升温牛奶混合。盖好，在室温（22–25°C）下发酵12–16小时，至体积翻倍、表面布满气泡。",
      "zhHint": "面种需前夜准备",
      "stateNote": {
        "visual": "Dough puffed, glossy, with visible bubbles breaking the surface",
        "visualZh": "面团体积膨大，表面光亮，布满破裂气泡",
        "timeRef": "12–16 hours",
        "timeRefZh": "12–16 小时",
        "signal": "Surface domes gently and releases a mild sweet-sour aroma",
        "signalZh": "表面微隆起，散发轻微甜酸香"
      }
    },
    {
      "text": "In a large bowl, combine mianzhong, remaining 400 g flour, salt, and remaining 140 ml warm milk. Mix until shaggy, then knead by hand 12 minutes until smooth and elastic.",
      "textZh": "大碗中加入面种、剩余400克面粉、盐和剩余140毫升温牛奶，拌成絮状后手揉12分钟至光滑有弹性。",
      "zhHint": "揉至能拉出薄膜",
      "stateNote": {
        "visual": "Dough pulls away cleanly from bowl and feels supple, not sticky",
        "visualZh": "面团离盆干净，手感柔韧不粘手",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "When stretched, forms a translucent 'windowpane' without tearing",
        "signalZh": "抻开可成透光薄膜，无破洞"
      }
    },
    {
      "text": "Place dough in oiled bowl, cover with damp cloth, and let rise at room temperature until doubled (≈90 minutes). Gently press finger: indentation should hold.",
      "textZh": "面团放入抹油大碗，盖湿布，室温发酵约90分钟至两倍大；轻按指印缓慢回弹即为发好。",
      "zhHint": "手指按压测试",
      "stateNote": {
        "visual": "Dough visibly puffed, surface taut and slightly glossy",
        "visualZh": "面团体积明显膨大，表面紧绷微亮",
        "timeRef": "90 minutes",
        "timeRefZh": "90 分钟",
        "signal": "Finger indentation holds for 2 seconds without springing back",
        "signalZh": "指印保持2秒不回弹"
      }
    },
    {
      "text": "Punch down dough, divide into 12 equal pieces (≈75 g each). Roll each into tight ball: cup hand, drag dough across counter in circular motion while rotating.",
      "textZh": "排气后均分12份（每份约75克）。手掌成杯状，将面团在台面上顺时针拖转收圆。",
      "zhHint": "掌心收圆法",
      "stateNote": {
        "visual": "Smooth, seam-free balls with taut, shiny skin",
        "visualZh": "表面光滑无接缝，皮紧亮",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No visible seams or cracks; bounce lightly when dropped from 5 cm",
        "signalZh": "无裂纹无接缝；从5厘米高落下轻弹"
      }
    },
    {
      "text": "Place buns on parchment-lined steamer trays, cover loosely, and proof 20 minutes until slightly puffy. Steam over vigorously boiling water for 15 minutes. Turn off heat, wait 5 minutes before opening lid.",
      "textZh": "馒头摆入铺烘焙纸的蒸屉，盖松布醒发20分钟至微胀；大火沸水蒸15分钟，关火焖5分钟再揭盖。",
      "zhHint": "关火焖制防塌陷",
      "stateNote": {
        "visual": "Buns plump and gleaming, with faint steam rising from surface",
        "visualZh": "馒头饱满光亮，表面泛微汽",
        "timeRef": "15 minutes steaming + 5 minutes resting",
        "timeRefZh": "蒸15分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam escapes forcefully when lid lifted; buns spring back when lightly pressed",
        "signalZh": "揭盖时蒸汽喷涌；轻按即回弹"
      }
    }
  ],
  "tips": [
    "Use a bamboo steamer lined with cabbage leaves instead of parchment for authentic fragrance",
    "Freeze fully cooled mantou in zip bags for up to 3 months—re-steam 8 minutes from frozen",
    "For extra whiteness, brush cooled mantou with diluted rice vinegar (1:3) before storing"
  ],
  "tipsZh": [
    "用竹蒸笼垫卷心菜叶代替烘焙纸，增清香",
    "完全冷却后装密封袋冷冻，保质3个月；冻品直接蒸8分钟复热",
    "追求雪白外观，可将冷却馒头刷稀释米醋（1:3）再储存"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/white-mantou-steamed-buns.webp"
};
