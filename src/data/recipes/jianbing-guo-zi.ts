import type { Recipe } from "@/lib/types";

/** Crispy Savory Crepe with Crispy Youtiao (煎饼果子) — Seed batch */
export const jianbing_guo_zi: Recipe = {
  "id": "jian-bing-guo-zi",
  "slug": "jianbing-guo-zi",
  "titleEn": "Crispy Savory Crepe with Crispy Youtiao",
  "titleZh": "煎饼果子",
  "pinyin": "jiān bǐng guǒ zi",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Street Snack",
  "region": "Tianjin",
  "regionZh": "天津",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "This home version uses a simplified batter and pan-fried youtiao (fried dough sticks) instead of deep-fried — same crunch, less oil.",
  "versionNoteZh": "家庭版用简化面糊和平底锅复炸油条替代传统现炸，酥脆不减，更省油易操作。",
  "tags": [
    "30-min",
    "street-food",
    "breakfast"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Tianjin ran a jianbing cart near Nankai University for 27 years. He taught me to swirl the batter with one wrist flick — no electric spreader, just muscle memory and morning fog.",
  "storyZh": "我在天津的舅舅在南开大学旁卖煎饼果子27年。他教我单手甩摊的手势——不用电动刮板，全靠手腕记忆和清晨薄雾里的手感。",
  "ingredients": [
    {
      "id": "jb-01",
      "nameEn": "mung bean flour",
      "nameZh": "绿豆粉",
      "pinyin": "lǜ dòu fěn",
      "amountMetric": "120 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Must be 100% mung bean — not soy or rice blend. Look for 'Lü Dou Fen' on yellow bag.",
      "noteZh": "必须是纯绿豆粉（非豆类/大米混合粉），包装袋为黄色，标有‘绿豆粉’。"
    },
    {
      "id": "jb-02",
      "nameEn": "wheat flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "80 g",
      "amountUS": "2/3 cup",
      "category": "staple",
      "pantry": "local",
      "note": "All-purpose flour works perfectly here.",
      "noteZh": "普通中筋面粉即可，无需高筋或低筋。"
    },
    {
      "id": "jb-03",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "1/4 cup, finely chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "jb-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "jb-05",
      "nameEn": "crispy youtiao (fried dough stick)",
      "nameZh": "油条",
      "pinyin": "yóu tiáo",
      "amountMetric": "100 g",
      "amountUS": "2 sticks (approx. 5 cm each)",
      "category": "staple",
      "pantry": "asian",
      "note": "Buy frozen or fresh youtiao at Asian markets. If unavailable, substitute 100g day-old baguette, sliced thin, pan-fried until golden and crisp.",
      "noteZh": "可在亚超购冷冻或新鲜油条；若无，可用100g隔夜法棍切片，干锅煎至金黄酥脆替代。"
    }
  ],
  "steps": [
    {
      "text": "Whisk mung bean flour, wheat flour, and 250 ml cold water into a smooth, thin batter — no lumps. Let rest 20 minutes at room temperature.",
      "textZh": "将绿豆粉、中筋面粉与250ml冷水搅匀成顺滑无颗粒的稀面糊，静置室温醒发20分钟。",
      "zhHint": "面糊要像脱脂牛奶般稀",
      "stateNote": {
        "visual": "Batter coats back of spoon thinly but doesn’t drip off immediately.",
        "visualZh": "面糊能薄薄挂住勺背，但不会立刻滴落。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Surface appears slightly glossy; tiny bubbles may form at edges.",
        "signalZh": "表面微亮，边缘偶有细小气泡。"
      }
    },
    {
      "text": "Heat a nonstick 26-cm crepe pan over medium heat. Lightly brush with neutral oil (e.g., canola). Pour 60 ml batter into center, then immediately tilt and swirl to coat evenly.",
      "textZh": "中火加热26厘米不粘平底锅，薄刷一层无味油（如菜籽油）。倒入60ml面糊，迅速倾斜并旋转锅体，使面糊均匀铺满锅底。",
      "zhHint": "动作要快，一气呵成",
      "stateNote": {
        "visual": "Batter spreads into a translucent, lacy circle with fine speckles.",
        "visualZh": "面糊延展成半透明薄圆，带细微颗粒感。",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "heat": "medium",
        "signal": "Edges begin to lift slightly; surface loses wet shine.",
        "signalZh": "边缘微微翘起，表面失去水光。"
      }
    },
    {
      "text": "When surface is set but still slightly tacky (about 45 seconds), crack one egg onto center, then quickly spread and flatten with spatula. Sprinkle scallions and drizzle light soy sauce evenly.",
      "textZh": "约45秒后，表面已定型但仍微黏，磕入一颗鸡蛋，用铲背快速摊匀压平，撒上葱花，淋入生抽。",
      "zhHint": "蛋液要趁热摊开，别等凝固",
      "stateNote": {
        "visual": "Egg white turns opaque at edges while yolk remains glossy.",
        "visualZh": "蛋清边缘变白，蛋黄仍泛光泽。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium",
        "signal": "First tiny bubbles appear in egg white near perimeter.",
        "signalZh": "蛋清边缘出现第一颗细小气泡。"
      }
    },
    {
      "text": "Flip carefully using a wide spatula. Cook second side 30–45 seconds until golden and crisp. Transfer to plate, top with youtiao pieces and optional fermented bean paste (doubanjiang) if desired.",
      "textZh": "用宽铲小心翻面，再烙30–45秒至底面金黄酥脆。取出装盘，放上油条段，可选加豆瓣酱提味。",
      "zhHint": "翻面时轻压，让油条嵌入蛋层",
      "stateNote": {
        "visual": "Bottom shows even golden-brown lattice pattern with slight blistering.",
        "visualZh": "底面呈均匀金棕色网状纹，略带微泡。",
        "timeRef": "30–45 seconds",
        "timeRefZh": "30–45 秒",
        "heat": "medium",
        "signal": "Edges curl up slightly when lifted with spatula.",
        "signalZh": "铲起边缘时，饼边自然微卷。"
      }
    },
    {
      "text": "Fold in half, then fold again into quarters. Serve immediately while hot and crisp.",
      "textZh": "对折后再对折成四分之一扇形，趁热即食。",
      "zhHint": "趁热吃，凉了会软",
      "stateNote": {
        "visual": "Steam rises faintly from folded edges; crust shatters audibly when bitten.",
        "visualZh": "折叠边缘微微冒热气；咬下时酥壳发出清晰碎裂声。",
        "timeRef": "immediately",
        "timeRefZh": "立即",
        "signal": "Crust gives audible ‘snap’ when pressed lightly with finger.",
        "signalZh": "指尖轻按即发出清脆‘咔’声。"
      }
    }
  ],
  "tips": [
    "Use a flat-bottomed ladle for consistent 60ml pours.",
    "If batter thickens while resting, stir in 1 tsp water — never more.",
    "Youtiao must be fully crisp before folding; soft ones make the jianbing soggy."
  ],
  "tipsZh": [
    "用平底量勺确保每次60ml面糊，厚薄一致。",
    "面糊静置后若变稠，仅加1茶匙水搅匀，切勿多加。",
    "油条务必彻底酥脆再包入，软塌油条会让煎饼吸潮变韧。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/jianbing-guo-zi.webp"
};
