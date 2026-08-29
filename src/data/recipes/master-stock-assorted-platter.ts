import type { Recipe } from "@/lib/types";

/** Master-Stock Assorted Platter (Lǔ Wèi Pīn Pán) (卤味拼盘) — Seed batch */
export const master_stock_assorted_platter: Recipe = {
  "id": "lu-wei-platter",
  "slug": "master-stock-assorted-platter",
  "titleEn": "Master-Stock Assorted Platter (Lǔ Wèi Pīn Pán)",
  "titleZh": "卤味拼盘",
  "pinyin": "lǔ wèi pīn pán",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 190,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses one unified master stock (lǔ shuǐ) to braise multiple proteins and tofu — built from scratch, no pre-made powders or bouillon.",
  "versionNoteZh": "家庭版以自制老卤水统一批次卤制多种食材，不依赖市售卤料包或高汤块。",
  "tags": [
    "make-ahead",
    "party",
    "shareable"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Beijing’s Hutong ran a tiny takeout window in the ’90s — her lǔ wèi platter was legendary: she’d start the stock at dawn, then add each item at precise intervals so everything finished perfectly tender by noon.",
  "storyZh": "北京胡同里的姑姑90年代经营一家小卤味窗口——她的卤味拼盘极有名：凌晨开始熬卤，每样食材按精确时间下锅，确保正午出锅时所有食材酥软恰到好处。",
  "ingredients": [
    {
      "id": "lw-01",
      "nameEn": "pork shank bones (with marrow, ~5 cm thick)",
      "nameZh": "猪棒骨（带骨髓，约5厘米厚）",
      "pinyin": "zhū bàng gǔ",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Smaller portion than solo recipes — shares stock with other items.",
      "noteZh": "用量减半，与其他食材共用一锅卤水。"
    },
    {
      "id": "lw-02",
      "nameEn": "firm tofu, cut into 3 cm cubes",
      "nameZh": "老豆腐（切3厘米方块）",
      "pinyin": "lǎo dòu fu",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Press tofu 15 min between towels to remove excess water.",
      "noteZh": "豆腐用厨房纸夹压15分钟去水，更易吸味。"
    },
    {
      "id": "lw-03",
      "nameEn": "hard-boiled eggs, peeled",
      "nameZh": "熟鸡蛋（剥壳）",
      "pinyin": "shú jī dàn",
      "amountMetric": "6 pcs",
      "amountUS": "6 eggs",
      "category": "protein",
      "pantry": "local",
      "note": "Use older eggs — shells peel easier.",
      "noteZh": "选用存放3–5天的鸡蛋，剥壳更顺滑。"
    },
    {
      "id": "lw-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "lw-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "lw-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "lw-07",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "4 pcs",
      "amountUS": "4 pcs",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "lw-08",
      "nameEn": "Sichuan peppercorn",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "lw-09",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "20 g",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Rinse pork bones and blanch in boiling water 3 minutes. Drain and rinse under cool water.",
      "textZh": "猪骨冷水冲洗，沸水焯3分钟，捞出冲凉。",
      "zhHint": "去浮沫",
      "stateNote": {
        "visual": "Foam ceases entirely and water remains clear after rinsing",
        "visualZh": "冲洗后水面清澈，无残留浮沫",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "No gray residue clings to bone surface",
        "signalZh": "骨头表面无灰白残渣附着"
      }
    },
    {
      "text": "In large stockpot, combine bones, 2000 ml water, dark soy, light soy, Shaoxing wine, star anise, Sichuan peppercorn, and rock sugar. Bring to boil, then reduce to bare simmer.",
      "textZh": "大汤锅中放入骨头、2000 ml水、老抽、生抽、绍酒、八角、花椒、冰糖，煮沸后转微沸。",
      "zhHint": "卤水初成",
      "stateNote": {
        "visual": "Tiny bubbles rise steadily from bottom; surface barely trembles",
        "visualZh": "锅底持续冒小泡，汤面仅微颤",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Steam rises in faint, continuous veil",
        "signalZh": "蒸汽呈淡薄匀速薄雾状"
      }
    },
    {
      "text": "Simmer uncovered 1 hour, skimming foam occasionally. Strain stock through fine-mesh sieve into clean pot — discard solids except bones.",
      "textZh": "敞盖微沸1小时，偶撇浮沫；滤去香料渣，只留骨头与卤水。",
      "zhHint": "滤渣留汤",
      "stateNote": {
        "visual": "Stock turns deep mahogany, translucent, with faint oily sheen",
        "visualZh": "卤水呈深棕褐色，清亮透光，泛微油光",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "heat": "low",
        "signal": "Aroma shifts from raw spice to warm, rounded umami",
        "signalZh": "香气由辛辣转为温润醇厚的酱香"
      }
    },
    {
      "text": "Return bones to strained stock. Simmer 1.5 hours. Add tofu cubes and boiled eggs; simmer 30 more minutes.",
      "textZh": "骨头回卤水，续炖1.5小时；加入豆腐块与熟蛋，再炖30分钟。",
      "zhHint": "分批下料",
      "stateNote": {
        "visual": "Tofu puffs slightly and absorbs deep brown color; eggs develop marbled skin",
        "visualZh": "豆腐微膨、染成深褐色；蛋壳显虎皮纹",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "Tofu edges soften but hold shape when lifted with chopsticks",
        "signalZh": "豆腐边缘变软，但筷夹不散形"
      }
    },
    {
      "text": "Turn off heat. Let platter cool completely in stock (minimum 2 hours, ideally overnight). Chill before slicing and arranging.",
      "textZh": "关火，食材完全浸于卤水中冷却（至少2小时，隔夜更佳）。冷藏后切片摆盘。",
      "zhHint": "冷卤入味",
      "stateNote": {
        "visual": "Stock thickens slightly and coats ingredients like light glaze",
        "visualZh": "卤水微稠，如薄釉裹住所有食材",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "signal": "Ingredients feel firm yet yielding when pressed",
        "signalZh": "轻按食材有弹性，不绵软"
      }
    }
  ],
  "tips": [
    "Save the cooled, strained stock — it’s your master lǔ shuǐ. Freeze half for future use.",
    "Slice eggs and tofu just before serving — prevents crumbling.",
    "Garnish with toasted sesame seeds and fresh cilantro — optional but traditional in Beijing style."
  ],
  "tipsZh": [
    "滤净冷却的卤水即为老卤，可冷冻一半留作下次使用。",
    "鸡蛋与豆腐临上桌再切，防碎裂。",
    "撒熟白芝麻与新鲜香菜——京式传统点睛之笔。"
  ],
  "relatedSlugs": [
    "braised-pork-shank-bones",
    "sweet-sour-pork-shank-bones"
  ],
  "image": "/images/recipes/master-stock-assorted-platter.webp"
};
