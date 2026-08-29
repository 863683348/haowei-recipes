import type { Recipe } from "@/lib/types";

/** Dry-Fried Pork Intestine (干煸肥肠) — Seed batch */
export const dry_fried_pork_intestine: Recipe = {
  "id": "gan-bian-fei-chang",
  "slug": "dry-fried-pork-intestine",
  "titleEn": "Dry-Fried Pork Intestine",
  "titleZh": "干煸肥肠",
  "pinyin": "gān biān féi cháng",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses blanched, pre-cleaned pork intestine from the butcher — no lye or alum treatment. Restaurant versions often deep-fry for extra crispness; home cooks dry-fry in a wok over steady medium heat for chewy-crisp texture.",
  "versionNoteZh": "家常版使用肉铺已预处理（焯水去腥）的猪大肠，不添加碱或明矾；餐馆版常二次油炸追求酥脆，而家庭做法用中火持续干煸至外微韧、内软弹。",
  "tags": [
    "30-min",
    "weeknight",
    "bold-flavor"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle Li in Chengdu’s Shaocheng district would wake at 5 a.m. to buy fresh pig intestines from the wet market near Kuanzhai Alley — he swore only morning-cut ones had the right snap. He’d simmer them with ginger and star-anise until tender, then dry-fry with fermented black beans and Sichuan peppercorns on his old carbon-steel wok.",
  "storyZh": "我成都少城的李叔每天清晨五点就去宽窄巷子附近的菜市场买新鲜猪大肠——他坚持只有早市刚宰的才有爽脆筋道。他先用姜片和八角卤至软烂，再用老铁锅干煸，加豆豉与花椒提香。",
  "ingredients": [
    {
      "id": "fc-01",
      "nameEn": "pork large intestine (pre-cleaned, blanched)",
      "nameZh": "猪大肠（已清洗焯水）",
      "pinyin": "zhū dà cháng",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Ask your butcher for 'blanched, ready-to-cook' pork intestine — it should be pale pink, odorless, and slightly firm. Avoid raw uncleaned versions.",
      "noteZh": "请肉铺提供‘已焯水可直接烹饪’的大肠，应呈淡粉色、无异味、略有弹性。切勿使用未处理生肠。"
    },
    {
      "id": "fc-02",
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
      "id": "fc-03",
      "nameEn": "fermented black beans (rinsed, lightly mashed)",
      "nameZh": "豆豉（洗净，略压碎）",
      "pinyin": "dòu chǐ",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for 'Chinese fermented black beans' in glass jars — avoid canned versions with excessive salt brine.",
      "noteZh": "选玻璃罐装‘中式发酵豆豉’，避免盐水过重的罐头款。"
    },
    {
      "id": "fc-04",
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
      "id": "fc-05",
      "nameEn": "ginger (thin matchsticks)",
      "nameZh": "生姜（切细丝）",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Pat dry the blanched pork intestine thoroughly with paper towels — moisture is the enemy of dry-frying.",
      "textZh": "用厨房纸彻底吸干焯好猪大肠表面水分——湿气是干煸失败的主因。",
      "zhHint": "务必擦干！",
      "stateNote": {
        "visual": "Intestine pieces look matte, not glistening",
        "visualZh": "大肠表面哑光，无水光反光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "No steam rising when touched with tongs",
        "signalZh": "用筷子轻触无水汽冒出"
      }
    },
    {
      "text": "Heat wok over medium-high heat until a wisp of smoke rises, then add 1 tbsp neutral oil. Swirl to coat.",
      "textZh": "中大火烧热炒锅至微冒青烟，倒入1汤匙无味油，晃匀锅壁。",
      "zhHint": "锅要够热",
      "stateNote": {
        "visual": "Thin, translucent smoke curls just above surface",
        "visualZh": "锅面浮起一缕淡青色轻烟",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium-high",
        "signal": "A drop of water sizzles and vanishes instantly",
        "signalZh": "滴入一滴水即‘滋’声爆裂蒸发"
      }
    },
    {
      "text": "Add pork intestine in a single layer. Let sit undisturbed 1 minute to sear — resist stirring!",
      "textZh": "将大肠平铺入锅，静置1分钟使其初煎上色，切勿翻动！",
      "zhHint": "先定型再翻炒",
      "stateNote": {
        "visual": "Edges turn golden-brown and slightly curled",
        "visualZh": "边缘转为金棕色并微微卷起",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-high",
        "signal": "Faint sizzle becomes steady and rhythmic",
        "signalZh": "滋滋声由短促转为稳定有节奏"
      }
    },
    {
      "text": "Stir-fry 3 minutes until deeply browned and slightly shriveled. Push to side, add Sichuan peppercorns and fermented black beans to center — toast 20 seconds until fragrant.",
      "textZh": "翻炒3分钟至深棕微皱；拨至锅边，将花椒与豆豉堆在锅心，焙香20秒。",
      "zhHint": "先焙香料再合炒",
      "stateNote": {
        "visual": "Peppercorns plump slightly; beans darken to deep brown",
        "visualZh": "花椒微微鼓起，豆豉颜色加深至深褐色",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "medium",
        "signal": "Aromatic, citrusy-nutty scent fills air",
        "signalZh": "空气中弥漫柑橘与坚果混合香气"
      }
    },
    {
      "text": "Return intestine to center. Add light soy sauce and ginger. Stir-fry 2 more minutes until sauce coats evenly and intestine develops a leathery sheen.",
      "textZh": "将大肠回锅中心，淋入生抽与姜丝，猛火快炒2分钟，至酱汁裹匀、表面泛出柔韧光泽。",
      "zhHint": "最后收汁亮油",
      "stateNote": {
        "visual": "Glossy, lacquer-like film coats each piece",
        "visualZh": "每块大肠裹着一层透亮釉光",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Oil separates slightly around edges of wok",
        "signalZh": "锅边可见少量油星析出"
      }
    }
  ],
  "tips": [
    "Pre-cleaned intestine saves 90% of prep time — skip the vinegar-and-flour scrub unless you’re using raw whole intestine.",
    "If your wok smokes heavily, reduce heat slightly — dry-frying relies on controlled Maillard, not burning.",
    "Serve immediately: texture softens within 5 minutes off heat."
  ],
  "tipsZh": [
    "选用已预处理大肠可省去90%准备工作——除非用整根生肠，否则无需再用醋+面粉搓洗。",
    "若锅烟过重，请略调小火——干煸靠的是精准美拉德反应，不是焦糊。",
    "务必趁热食用：离火5分钟后口感明显变韧。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/dry-fried-pork-intestine.webp"
};
