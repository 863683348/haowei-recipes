import type { Recipe } from "@/lib/types";

/** Cashew Shrimp (腰果虾仁) — Seed batch */
export const cashew_shrimp: Recipe = {
  "id": "yao-guo-xia-ren",
  "slug": "cashew-shrimp",
  "titleEn": "Cashew Shrimp",
  "titleZh": "腰果虾仁",
  "pinyin": "yāo guǒ xiā rén",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses raw cashews toasted separately — no pre-fried or sugared commercial nuts. Sauce is light, savory, and just barely glossy, never sticky or sweetened.",
  "versionNoteZh": "家庭版用生腰果单独烘烤，不用市售油炸或糖衣腰果；酱汁清淡咸鲜、微亮不粘，绝不甜腻。",
  "tags": [
    "25-min",
    "weeknight",
    "quick-protein"
  ],
  "dietary": [
    "none"
  ],
  "story": "My mother in Shanghai made this every Sunday lunch during my middle school years — she’d toast cashews in a dry wok while I pounded garlic, and we’d eat it straight from the wok with chopsticks, laughing as shrimp bounced off the rim. 'Real cashew shrimp,' she’d say, 'should sound like rain on a tin roof.'",
  "storyZh": "中学时，上海的妈妈每周日午餐都做这道菜——她用干锅焙腰果，我则捣蒜泥，两人直接用筷子从锅里夹着吃，虾仁蹦跳着溅出锅沿，笑声不断。她说：‘正宗腰果虾仁，得听得出雨打铁皮棚的声音。’",
  "ingredients": [
    {
      "id": "cg-01",
      "nameEn": "large shrimp, peeled and deveined",
      "nameZh": "大虾仁（去壳去线）",
      "pinyin": "dà xiā rén",
      "amountMetric": "250 g",
      "amountUS": "8.8 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Thaw and pat *very* dry — moisture causes splatter and steaming.",
      "noteZh": "彻底解冻并用力擦干——水分会导致爆溅和蒸煮。"
    },
    {
      "id": "cg-02",
      "nameEn": "raw unsalted cashews",
      "nameZh": "生腰果（无盐）",
      "pinyin": "shēng yāo guǒ",
      "amountMetric": "60 g",
      "amountUS": "½ cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Pre-toasted cashews often burn — use raw for best control.",
      "noteZh": "市售熟腰果易焦糊，务必用生腰果。"
    },
    {
      "id": "cg-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds salt and umami without darkening color.",
      "noteZh": "提咸鲜而不加深色泽。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cg-04",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "staple",
      "pantry": "local",
      "note": "Mix with 15 ml water to make slurry — do not add dry.",
      "noteZh": "须与15毫升水调成芡汁，不可干粉下锅。"
    }
  ],
  "steps": [
    {
      "text": "Toss shrimp with 5 g cornstarch (½ tbsp) and set aside 5 minutes to marinate lightly.",
      "textZh": "虾仁加5克玉米淀粉抓匀，静置5分钟略腌。",
      "zhHint": "薄浆锁汁",
      "stateNote": {
        "visual": "Shrimp look slightly opaque and tacky to touch.",
        "visualZh": "虾仁略显不透明，触感微黏。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No pooling liquid in bowl.",
        "signalZh": "碗底无渗出水分。"
      }
    },
    {
      "text": "Heat 20 ml neutral oil in wok over medium-high heat. Toast cashews, stirring constantly, until golden and fragrant — about 2 minutes.",
      "textZh": "炒锅烧热20毫升无味油，中高火焙腰果，不停翻动至金黄酥香，约2分钟。",
      "zhHint": "腰果先焙",
      "stateNote": {
        "visual": "Cashews turn even pale gold with visible oil sheen.",
        "visualZh": "腰果呈均匀浅金色，表面泛油光。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Nutty aroma fills kitchen unmistakably.",
        "signalZh": "厨房弥漫清晰坚果香。"
      }
    },
    {
      "text": "Remove cashews and set aside. Add shrimp to same hot wok. Stir-fry 1 minute until just opaque and curled.",
      "textZh": "盛出腰果备用。原锅重置中高火，下虾仁快炒1分钟至刚断生、微卷。",
      "zhHint": "虾变色即盛出",
      "stateNote": {
        "visual": "Shrimp turn uniformly pink-white with gentle C-curl.",
        "visualZh": "虾仁呈均匀粉白色，轻卷成‘C’形。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-high",
        "signal": "Edges begin to separate slightly from center.",
        "signalZh": "虾仁边缘与中心略分离。"
      }
    },
    {
      "text": "Push shrimp to sides. Add light soy sauce to center and let bubble 15 seconds. Stir in cornstarch slurry.",
      "textZh": "虾推至锅边，将生抽倒入锅心，中高火煸15秒，再倒入水淀粉汁。",
      "zhHint": "酱在中心爆香",
      "stateNote": {
        "visual": "Soy sauce sizzles and darkens slightly at edges.",
        "visualZh": "生抽边缘微焦、颜色略深。",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "medium-high",
        "signal": "Tiny brown flecks appear where sauce meets hot metal.",
        "signalZh": "酱汁接触锅壁处出现细微褐点。"
      }
    },
    {
      "text": "Return cashews to wok. Toss everything together over medium heat for 30 seconds until sauce coats evenly and turns translucent.",
      "textZh": "腰果回锅，中火翻炒30秒，至酱汁均匀包裹、呈半透明状。",
      "zhHint": "回锅快拌",
      "stateNote": {
        "visual": "Sauce glistens but does not pool; shrimp and cashews separate cleanly.",
        "visualZh": "酱汁油亮不积液；虾仁与腰果粒粒分明。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "No streaks of white slurry remain visible.",
        "signalZh": "不见白色芡汁条纹残留。"
      }
    }
  ],
  "tips": [
    "Toast cashews *before* cooking shrimp — they burn easily in wet sauce.",
    "Use a wooden spatula to prevent scratching nonstick woks.",
    "For authentic Shanghai style, serve at room temperature — not piping hot."
  ],
  "tipsZh": [
    "腰果必须先焙——混入湿酱极易焦糊。",
    "建议用木铲翻炒，保护不粘锅涂层。",
    "本帮正宗吃法是放至室温食用，非滚烫上桌。"
  ],
  "relatedSlugs": [
    "white-boiled-shrimp",
    "oil-braised-large-shrimp"
  ],
  "image": "/images/recipes/cashew-shrimp.webp"
};
