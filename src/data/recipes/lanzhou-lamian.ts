import type { Recipe } from "@/lib/types";

/** Lanzhou Hand-Pulled Noodles (兰州拉面) — Seed batch */
export const lanzhou_lamian: Recipe = {
  "id": "lanzhou-lamian",
  "slug": "lanzhou-lamian",
  "titleEn": "Lanzhou Hand-Pulled Noodles",
  "titleZh": "兰州拉面",
  "pinyin": "Lánzhōu lāmiàn",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Snack",
  "region": "Lanzhou, Gansu",
  "regionZh": "甘肃省兰州市",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses rested dough and hand-stretched noodles — no machine required. Restaurant versions often add alkaline water (jian shui); we substitute baking soda + potassium carbonate (available in Asian grocers) for authentic chew.",
  "versionNoteZh": "家常版用静置面团手工拉制，无需机器。餐馆版常用碱水（碱水），我们以小苏打+碳酸钾替代（亚洲超市有售），确保筋道口感。",
  "tags": [
    "make-ahead",
    "noodle",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle Li Wei ran a small lamian stall near Baiyun Mountain in Lanzhou until 2012. Every Sunday morning, he’d teach me to knead the dough while my grandmother simmered the beef bone broth — she insisted the broth must bubble gently for 6 full hours, never boil hard, or it turns cloudy.",
  "storyZh": "我舅舅李伟2012年前在兰州白云山附近经营一家小型拉面摊。每个周日清晨，他教我揉面，外婆则在一旁慢炖牛骨汤——她坚持汤必须微沸6小时，绝不可大火翻滚，否则汤色浑浊。",
  "ingredients": [
    {
      "id": "lm-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Use unbleached for best elasticity",
      "noteZh": "推荐使用未漂白面粉，延展性更佳"
    },
    {
      "id": "lm-02",
      "nameEn": "baking soda",
      "nameZh": "小苏打",
      "pinyin": "xiǎo sū dǎ",
      "amountMetric": "2 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Must be food-grade; do not substitute with baking powder",
      "noteZh": "须为食品级；不可用泡打粉替代"
    },
    {
      "id": "lm-03",
      "nameEn": "potassium carbonate (jian shui substitute)",
      "nameZh": "碳酸钾（碱水替代）",
      "pinyin": "tàn suān jiǎ",
      "amountMetric": "1 g",
      "amountUS": "1/8 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Found in Asian grocers as 'jian shui powder' or 'ramen alkaline salt'; omit if unavailable — dough will be softer but still workable",
      "noteZh": "亚洲超市常标为‘碱水粉’或‘拉面碱盐’；若无，可省略——面团稍软但仍可拉制"
    },
    {
      "id": "lm-04",
      "nameEn": "beef shank bones",
      "nameZh": "牛腱骨",
      "pinyin": "niú jiàn gǔ",
      "amountMetric": "1000 g",
      "amountUS": "2.2 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for marrow-rich knuckle or shank bones; rinse well before use",
      "noteZh": "请肉贩提供富含骨髓的牛膝骨或牛腱骨；使用前充分冲洗"
    },
    {
      "id": "lm-05",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "50 g",
      "amountUS": "½ cup, sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Make the dough: In a large bowl, whisk flour, baking soda, and potassium carbonate. Gradually add 240 ml (1 cup) cold water while mixing with chopsticks until shaggy. Knead 10 minutes until smooth and elastic. Cover and rest at room temperature for 1 hour.",
      "textZh": "和面：大碗中混合面粉、小苏打和碳酸钾。边用筷子搅拌边缓慢加入240毫升（1杯）冷水，至呈絮状。揉面10分钟至光滑有弹性。盖保鲜膜，室温醒发1小时。",
      "zhHint": "面团要揉透、醒足",
      "stateNote": {
        "visual": "Dough forms a smooth, slightly tacky ball that springs back when poked",
        "visualZh": "面团成光滑略粘手的球状，轻按后迅速回弹",
        "timeRef": "10 minutes kneading + 1 hour rest",
        "timeRefZh": "揉面10分钟 + 醒发1小时",
        "signal": "Surface is no longer dusty and feels uniformly supple",
        "signalZh": "表面无干粉，触感均匀柔韧"
      }
    },
    {
      "text": "Prepare broth: Rinse beef bones under cold water. Place in stockpot with 3 L (12.7 cups) cold water, ginger slices, and 2 star anise. Bring to a gentle simmer over medium heat, then reduce to low. Skim foam for first 15 minutes. Simmer uncovered for 6 hours, adding hot water as needed to maintain level.",
      "textZh": "熬汤：牛骨冷水冲洗。入汤锅，加3升（12.7杯）冷水、姜片、2颗八角。中火煮至微沸，转小火。前15分钟撇净浮沫。敞盖小火慢炖6小时，适时补热水保持水量。",
      "zhHint": "汤要清亮不浑浊",
      "stateNote": {
        "visual": "Broth remains pale gold with tiny bubbles rising steadily — no vigorous boiling",
        "visualZh": "汤色呈淡金色，气泡细密匀稳，无剧烈翻滚",
        "timeRef": "6 hours",
        "timeRefZh": "6小时",
        "heat": "low",
        "signal": "Surface shows gentle shimmer, not rolling bubbles",
        "signalZh": "汤面微光浮动，无大泡翻腾"
      }
    },
    {
      "text": "Stretch noodles: Divide rested dough into 4 equal pieces. Roll each into 2-cm (¾-inch) thick ropes. Let rest 15 minutes. Holding both ends, gently bounce and stretch rope downward, folding in half and repeating until ~1.5 m (5 ft) long and 4 mm thick. Cut into 40-cm (16-inch) lengths.",
      "textZh": "拉面：将醒好面团分4等份。每份搓成直径2厘米粗条，松弛15分钟。双手持两端，轻弹下坠拉长，对折再拉，反复至长约1.5米、粗约4毫米。切成40厘米段。",
      "zhHint": "拉时手腕放松，靠重力延展",
      "stateNote": {
        "visual": "Rope becomes translucent and glossy, thinning evenly without snapping",
        "visualZh": "面条渐呈半透明光泽，均匀变细且不断裂",
        "timeRef": "2–3 minutes per rope",
        "timeRefZh": "每根约2–3分钟",
        "signal": "Noodle vibrates smoothly when held taut and released",
        "signalZh": "拉直后松手，面条自然轻颤即为到位"
      }
    },
    {
      "text": "Cook noodles: Bring a large pot of water to rolling boil. Add noodles one portion at a time. Stir gently. Cook 60–90 seconds until just tender but still chewy. Drain immediately and rinse under cold running water to stop cooking.",
      "textZh": "煮面：大锅水烧沸。分次下面，轻搅防粘。煮60–90秒至断生仍带嚼劲。立即捞出，冲凉水降温止熟。",
      "zhHint": "宁短勿长，保持筋道",
      "stateNote": {
        "visual": "Noodles float and curl slightly at edges; core is no longer opaque white",
        "visualZh": "面条浮起，边缘微卷；中心不再呈不透明白色",
        "timeRef": "60–90 seconds",
        "timeRefZh": "60–90秒",
        "heat": "high",
        "signal": "A single strand bends easily but snaps cleanly when pulled",
        "signalZh": "单根面条易弯，但拉断时清脆利落"
      }
    },
    {
      "text": "Assemble bowls: Reheat broth to just below simmer. Ladle 450 ml (2 cups) hot broth into each bowl. Arrange 120 g (4.2 oz) noodles, 60 g (2.1 oz) sliced boiled beef, pickled mustard greens, cilantro, and a drizzle of chili oil. Serve immediately.",
      "textZh": "装碗：将汤重新加热至微沸。每碗舀入450毫升（2杯）热汤，铺120克（4.2盎司）面条、60克（2.1盎司）卤牛肉片、腌雪里蕻、香菜，淋少许辣油。即刻上桌。",
      "zhHint": "汤要滚烫，面要现拉现煮",
      "stateNote": {
        "visual": "Steam rises vigorously from broth; noodles glisten with light oil sheen",
        "visualZh": "热气蒸腾，面条泛着薄油光",
        "timeRef": "under 2 minutes",
        "timeRefZh": "2分钟内",
        "heat": "medium-high",
        "signal": "Broth surface shimmers but does not bubble",
        "signalZh": "汤面微光浮动，未见气泡"
      }
    }
  ],
  "tips": [
    "For gluten-free option, use buckwheat + rice flour blend (70/30) — texture will be denser but still authentic to some rural Gansu households",
    "If short on time, simmer broth 3 hours, then pressure-cook 45 minutes at high pressure — flavor remains deep",
    "Always store stretched noodles on floured tray, not stacked — they’ll fuse"
  ],
  "tipsZh": [
    "如需无麸质版本，可用荞麦粉+大米粉（7:3）混合，口感更密实，但符合甘肃部分乡村做法",
    "时间紧张时，先小火熬3小时，再高压锅高火压45分钟——风味依然醇厚",
    "拉好面条务必平铺撒粉托盘，切勿叠放，否则会粘连"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/lanzhou-lamian.webp"
};
