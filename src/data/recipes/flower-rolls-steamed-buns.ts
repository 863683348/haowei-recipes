import type { Recipe } from "@/lib/types";

/** Flower Rolls (Huā Juǎn) (花卷) — Seed batch */
export const flower_rolls_steamed_buns: Recipe = {
  "id": "hua-juan",
  "slug": "flower-rolls-steamed-buns",
  "titleEn": "Flower Rolls (Huā Juǎn)",
  "titleZh": "花卷",
  "pinyin": "huā juǎn",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 210,
  "servings": 12,
  "version": "family",
  "versionNote": "Family version layers lard or neutral oil with scallion and salt for rich, flaky separation—no commercial shortening. Restaurant versions may use refined lard substitute for consistency.",
  "versionNoteZh": "家常版用猪油或植物油与葱盐层层叠制，起酥分明；餐馆版常用精炼猪油确保稳定。",
  "tags": [
    "steamed-buns",
    "savory",
    "scallion"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My uncle in Jinan taught me this during Lunar New Year—he rolled each huā juǎn with his left hand while pinching pleats with his right, saying, 'A good flower roll must bloom like a chrysanthemum, not crumble like ash.' He kept his lard in a blue-glazed crock buried in cellar sand.",
  "storyZh": "济南舅舅教我过年做花卷——左手卷右手捏褶，说‘好花卷要如菊花绽开，不可似灰散落’。他把猪油封在青釉坛里，埋在地窖沙中保存。",
  "ingredients": [
    {
      "id": "hj-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "450 g",
      "amountUS": "3½ cups",
      "category": "staple",
      "pantry": "local",
      "note": "Substitute bread flour (430 g) + cornstarch (20 g) if needed",
      "noteZh": "筋度不足时可用高筋粉430g+玉米淀粉20g替代"
    },
    {
      "id": "hj-02",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "pinyin": "gān jiàomǔ",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Proof in 30 ml warm milk first to confirm activity",
      "noteZh": "先用30ml温牛奶活化验证活性"
    },
    {
      "id": "hj-03",
      "nameEn": "warm whole milk",
      "nameZh": "温全脂牛奶",
      "pinyin": "wēn quán zhī niú nǎi",
      "amountMetric": "220 ml",
      "amountUS": "¾ cup + 2 tbsp",
      "category": "dairy",
      "pantry": "local",
      "note": "Substitute warm water + 10 g powdered milk (1 tbsp)",
      "noteZh": "可用温水220ml+奶粉10g（1大勺）替代"
    },
    {
      "id": "hj-04",
      "nameEn": "scallions, finely chopped",
      "nameZh": "小葱，切碎",
      "pinyin": "xiǎo cōng, qiē suì",
      "amountMetric": "60 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "hj-05",
      "nameEn": "neutral oil or lard",
      "nameZh": "无味植物油或猪油",
      "pinyin": "wú wèi zhí wù yóu huò zhū yóu",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Lard preferred for authentic flavor; substitute refined coconut oil if vegetarian lard unavailable",
      "noteZh": "猪油风味最佳；纯素者可用精炼椰子油替代"
    },
    {
      "id": "hj-06",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Dissolve yeast in 30 ml warm milk. In large bowl, mix 100 g flour, yeast mixture, and remaining milk. Cover and ferment 1 hour until bubbly.",
      "textZh": "酵母溶于30毫升温牛奶。大碗中混入100克面粉、酵母液及剩余牛奶，盖好发酵1小时至起泡。",
      "zhHint": "酵头发酵",
      "stateNote": {
        "visual": "Surface covered in fine, frothy bubbles",
        "visualZh": "表面布满细密泡沫",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "signal": "Slight tangy aroma and gentle rise",
        "signalZh": "微酸香，体积略升"
      }
    },
    {
      "text": "Add remaining 350 g flour and salt. Knead 10 minutes until smooth. Place in oiled bowl, cover, and rise 90 minutes until doubled.",
      "textZh": "加入剩余350克面粉和盐，揉10分钟至光滑；抹油入盆，盖布发酵90分钟至两倍大。",
      "zhHint": "主面团发酵",
      "stateNote": {
        "visual": "Dough domed and airy, surface taut",
        "visualZh": "面团隆起蓬松，表面紧绷",
        "timeRef": "90 minutes",
        "timeRefZh": "90 分钟",
        "signal": "Finger poke leaves slow-receding indentation",
        "signalZh": "指压后凹陷缓慢回弹"
      }
    },
    {
      "text": "Roll dough into 30 × 25 cm rectangle. Brush evenly with oil/lard, then scatter scallions and salt. Tightly roll lengthwise into cylinder.",
      "textZh": "面团擀成30×25厘米长方形，均匀刷油/猪油，撒葱花和盐，自长边紧密卷成圆筒。",
      "zhHint": "刷油撒料卷筒",
      "stateNote": {
        "visual": "Even green speckling, no bare patches or pooling oil",
        "visualZh": "葱粒分布均匀，无裸露或油洼",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Roll holds shape without uncoiling when lifted",
        "signalZh": "提起不松散"
      }
    },
    {
      "text": "Cut cylinder into 12 equal pieces (≈5 cm thick). Press each piece flat, then twist ends in opposite directions to form flower shape.",
      "textZh": "圆筒切12等份（厚约5厘米）；每块按扁，两端反向拧转成花朵形。",
      "zhHint": "拧转塑花",
      "stateNote": {
        "visual": "Distinct petal-like layers radiating from center",
        "visualZh": "中心放射出清晰花瓣层",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Edges stay tightly twisted, no unraveling",
        "signalZh": "边缘紧拧不松散"
      }
    },
    {
      "text": "Place on parchment-lined steamer trays, cover, and proof 25 minutes. Steam over high heat for 16 minutes. Rest covered 5 minutes before serving.",
      "textZh": "摆入铺烘焙纸蒸屉，盖布醒发25分钟；大火沸水蒸16分钟，关火焖5分钟。",
      "zhHint": "二次醒发后蒸制",
      "stateNote": {
        "visual": "Flowers slightly expanded, edges softened but defined",
        "visualZh": "花朵微胀，边缘柔润但轮廓清晰",
        "timeRef": "16 minutes steaming + 5 minutes resting",
        "timeRefZh": "蒸16分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts upward when lid opened; petals hold shape",
        "signalZh": "揭盖蒸汽上冲；花瓣不塌"
      }
    }
  ],
  "tips": [
    "Chill rolled cylinder 15 minutes before cutting for cleaner slices",
    "For deeper color, add 1 tsp toasted sesame oil to scallion layer",
    "Store in fridge up to 3 days—re-steam 6 minutes before eating"
  ],
  "tipsZh": [
    "卷筒冷藏15分钟再切，断面更整齐",
    "追求色泽可于葱油层加1小勺焙香芝麻油",
    "冷藏保存3天内，食用前复蒸6分钟"
  ],
  "relatedSlugs": [
    "white-mantou-steamed-buns"
  ],
  "image": "/images/recipes/flower-rolls-steamed-buns.webp"
};
