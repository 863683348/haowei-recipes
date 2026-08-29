import type { Recipe } from "@/lib/types";

/** Yunnan Steamed Pot Chicken (云南汽锅鸡) — Seed batch */
export const yunnan_qi_guo_ji: Recipe = {
  "id": "yunnan-qi-guo-ji",
  "slug": "yunnan-qi-guo-ji",
  "titleEn": "Yunnan Steamed Pot Chicken",
  "titleZh": "云南汽锅鸡",
  "pinyin": "Yúnnán qì guō jī",
  "cuisine": "汤羹凉菜",
  "cuisineEn": "Soup & Cold Dishes",
  "region": "Kunming, Yunnan",
  "regionZh": "云南省昆明市",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses a true clay steamer pot (qi guo) with tight-fitting lid and central chimney — steam condenses inside and drips directly onto chicken, preserving nutrients and clarity. No electric pressure cookers or stovetop steamers allowed.",
  "versionNoteZh": "家常版须用真陶汽锅（带严实盖与中央导气管）——蒸汽冷凝后滴落鸡身，锁营养、保清汤。禁用电压锅或普通蒸锅。",
  "tags": [
    "healthy",
    "make-ahead",
    "traditional"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Kunming’s old city used the same 40-year-old Yunnan clay pot passed down from her mother. She’d place it over a wok of simmering water, fill the chicken cavity with goji berries and dried yam, and let it steam overnight — ‘the steam whispers secrets into the meat,’ she told me, tapping the warm lid.",
  "storyZh": "昆明老城的外婆用着母亲传下的40年云南陶汽锅。她把枸杞、干山药塞进鸡腹，置于沸水锅上整夜蒸——‘蒸汽会把秘密说给鸡肉听’，她轻叩温热锅盖对我说。",
  "ingredients": [
    {
      "id": "qg-01",
      "nameEn": "whole free-range chicken (1.2 kg)",
      "nameZh": "散养整鸡（1.2公斤）",
      "pinyin": "sàn yǎng zhěng jī",
      "amountMetric": "1200 g",
      "amountUS": "2.6 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Preferably air-chilled, not frozen; remove excess fat but keep skin intact",
      "noteZh": "优选气冷鸡，非冷冻；去余脂但留鸡皮完整"
    },
    {
      "id": "qg-02",
      "nameEn": "goji berries",
      "nameZh": "枸杞子",
      "pinyin": "gǒu qǐ zǐ",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse briefly in cool water to remove dust",
      "noteZh": "凉水快速冲洗去浮尘"
    },
    {
      "id": "qg-03",
      "nameEn": "dried yam slices",
      "nameZh": "干山药片",
      "pinyin": "gān shān yào piàn",
      "amountMetric": "30 g",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Available in Asian grocers as 'huai shan yao'; soak 10 minutes if very brittle",
      "noteZh": "亚洲超市称‘怀山药’；若过脆，可清水泡10分钟"
    },
    {
      "id": "qg-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "Shàoxīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "qg-05",
      "nameEn": "fresh ginger",
      "nameZh": "鲜姜",
      "pinyin": "xiān jiāng",
      "amountMetric": "40 g",
      "amountUS": "4 slices, 3-mm thick",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Prepare chicken: Rinse chicken inside and out. Pat dry. Rub cavity with 1 tsp salt and 15 ml (1 tbsp) Shaoxing wine. Stuff with goji berries, dried yam, and 4 thin ginger slices.",
      "textZh": "处理鸡：内外洗净，擦干。腔内抹1茶匙盐、15毫升绍兴酒。填入枸杞、干山药、4片薄姜。",
      "zhHint": "酒盐揉腔，去腥增香",
      "stateNote": {
        "visual": "Cavity walls glisten faintly; ginger slices lie flat without curling",
        "visualZh": "鸡腔内壁微泛光；姜片平铺不卷边",
        "timeRef": "3 minutes",
        "timeRefZh": "3分钟",
        "signal": "No raw poultry smell remains after rubbing",
        "signalZh": "揉搓后无生禽腥气"
      }
    },
    {
      "text": "Set up steamer: Fill wok with 5 cm (2 inches) water. Bring to gentle simmer over medium heat. Place qi guo pot centered on wok. Ensure lid fits snugly and chimney is unobstructed.",
      "textZh": "架汽锅：锅中加水5厘米。中火烧至微沸。汽锅居中置于锅上。确保盖严实、导气管畅通。",
      "zhHint": "水位勿高过锅脚，防溢入",
      "stateNote": {
        "visual": "Steam rises steadily through chimney without hissing or leaking around lid",
        "visualZh": "蒸汽从导气管匀稳升腾，盖缘无嘶嘶漏气",
        "timeRef": "2 minutes to stabilize",
        "timeRefZh": "2分钟稳定蒸汽",
        "heat": "medium",
        "signal": "Condensation beads visibly on underside of lid",
        "signalZh": "锅盖内侧可见均匀水珠凝结"
      }
    },
    {
      "text": "Steam: Place stuffed chicken upright in qi guo pot. Cover tightly. Steam continuously for 3 hours — replenish wok water with hot water every 45 minutes to maintain level.",
      "textZh": "蒸制：填料鸡竖立放入汽锅。盖紧。连续蒸3小时——每45分钟补热水维持水位。",
      "zhHint": "全程小火稳汽，忌掀盖",
      "stateNote": {
        "visual": "Clear droplets form and fall rhythmically into chicken cavity every 5–8 seconds",
        "visualZh": "清亮水珠每5–8秒规律滴入鸡腹",
        "timeRef": "3 hours",
        "timeRefZh": "3小时",
        "heat": "medium-low",
        "signal": "Steam flows silently through chimney — no turbulence or spluttering",
        "signalZh": "蒸汽静默穿管——无湍流或噗噗声"
      }
    },
    {
      "text": "Check doneness: After 3 hours, carefully lift lid. Insert chopstick into thickest part of thigh — it should slide in with no resistance and juices run clear. If not, steam 15–30 minutes more.",
      "textZh": "验熟：3小时后小心揭盖。竹筷插入鸡腿最厚处——应毫无阻力、汁水清亮。若未达，续蒸15–30分钟。",
      "zhHint": "勿用刀切，防汁流失",
      "stateNote": {
        "visual": "Meat parts cleanly from bone; surface glistens with pure, golden broth",
        "visualZh": "鸡肉离骨易脱；表面泛纯金清汤光泽",
        "timeRef": "1 minute inspection",
        "timeRefZh": "1分钟检查",
        "signal": "No pink tissue visible at bone joint",
        "signalZh": "骨节处不见粉红组织"
      }
    },
    {
      "text": "Serve: Carefully lift chicken from pot. Pour accumulated broth into serving bowl. Slice chicken and return to broth. Garnish with extra goji and scallion rings. Serve piping hot with steamed rice.",
      "textZh": "上桌：小心取出整鸡。将锅中积聚清汤倒入碗中。鸡肉切块回汤。撒枸杞、葱圈。配热米饭趁烫食用。",
      "zhHint": "汤清如水，味厚如乳",
      "stateNote": {
        "visual": "Broth is crystal-clear, pale amber, with no oil slick or cloudiness",
        "visualZh": "汤色晶莹澄澈、淡琥珀色，无浮油无浑浊",
        "timeRef": "under 2 minutes",
        "timeRefZh": "2分钟内",
        "signal": "Aroma is clean, sweet, and deeply savory — no boiled poultry odor",
        "signalZh": "香气清甜醇厚，无煮禽腥气"
      }
    }
  ],
  "tips": [
    "No authentic qi guo? Use a heavy-bottomed stainless steel pot with tight lid and inverted heat-proof bowl in center — less efficient but works",
    "Freeze leftover broth in ice cube trays — perfect for quick soups or deglazing",
    "Add 2 dried red dates (jujubes) with goji for subtle sweetness — common in Kunming homes"
  ],
  "tipsZh": [
    "无正宗汽锅？可用厚底不锈钢锅+严实盖+锅心倒扣耐热碗——效率低但可行",
    "剩余清汤冻成冰格块，随时取用煮汤或炝锅",
    "与枸杞同加2颗红枣（大枣），微甜更显昆明家常风"
  ],
  "relatedSlugs": [
    "lanzhou-lamian",
    "xinjiang-da-pan-ji"
  ],
  "image": "/images/recipes/yunnan-qi-guo-ji.webp"
};
