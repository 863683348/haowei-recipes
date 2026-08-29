import type { Recipe } from "@/lib/types";

/** Grilled Chicken Wings (烤鸡翅) — Seed batch */
export const grilled_chicken_wings: Recipe = {
  "id": "kao-ji-chi",
  "slug": "grilled-chicken-wings",
  "titleEn": "Grilled Chicken Wings",
  "titleZh": "烤鸡翅",
  "pinyin": "kao ji chi",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version skips sugar-heavy glazes — instead, uses ginger-garlic paste and light soy for savory depth, finished with scallion oil.",
  "versionNoteZh": "家常版不用浓糖浆，以姜蒜蓉与生抽提鲜，最后淋葱油增香。",
  "tags": [
    "30-min",
    "weeknight",
    "grill"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Beijing’s Hutong made these every Mid-Autumn Festival — she’d pound ginger and garlic in her stone mortar, then brush wings with the paste before tossing them onto the charcoal brazier beside her courtyard gate.",
  "storyZh": "我北京胡同里的奶奶每逢中秋节都做这道菜——她用石臼捶打姜蒜成蓉，刷在鸡翅上，再放进院门边的炭火盆里烤。",
  "ingredients": [
    {
      "id": "gc-01",
      "nameEn": "chicken wings (whole, tips removed)",
      "nameZh": "鸡翅（全翅，去翅尖）",
      "pinyin": "ji chi",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher to split at joints; whole wings cook more evenly than drumettes alone.",
      "noteZh": "请肉贩沿关节分段；全翅比纯翅中更易均匀受热。"
    },
    {
      "id": "gc-02",
      "nameEn": "fresh ginger, peeled and minced",
      "nameZh": "生姜（去皮切末）",
      "pinyin": "sheng jiang",
      "amountMetric": "20 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "gc-03",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜（切末）",
      "pinyin": "da suan",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gc-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "sheng chou",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gc-05",
      "nameEn": "scallion oil (see tip below)",
      "nameZh": "葱油",
      "pinyin": "cong you",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: 1 tbsp neutral oil + 1 finely chopped scallion, heated 30 sec until fragrant.",
      "noteZh": "替代法：1汤匙无味油+1根葱花，小火煸30秒至香。"
    }
  ],
  "steps": [
    {
      "text": "Pat wings completely dry. Score two shallow cuts on each side of the drumette and flat sections — helps marinade penetrate and speeds cooking.",
      "textZh": "鸡翅彻底擦干，鼓槌段与翅中段两侧各划两道浅口——助入味，促熟。",
      "zhHint": "擦干再划口",
      "stateNote": {
        "visual": "Skin looks taut and matte, no damp patches.",
        "visualZh": "表皮紧绷哑光，无湿斑。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No water beads form when pressed lightly.",
        "signalZh": "轻压无水珠渗出。"
      }
    },
    {
      "text": "In a bowl, combine ginger, garlic, and light soy sauce. Add wings and toss to coat. Marinate 15 minutes at room temperature.",
      "textZh": "碗中混合姜末、蒜末、生抽，加入鸡翅拌匀，室温腌15分钟。",
      "zhHint": "短时姜蒜腌",
      "stateNote": {
        "visual": "Wings glisten with thin, beige-tinted marinade.",
        "visualZh": "鸡翅裹薄层米白色酱汁，泛微光。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Skin begins to soften slightly at scored lines.",
        "signalZh": "划口处表皮开始微软。"
      }
    },
    {
      "text": "Preheat grill pan or oven broiler to high. Shake excess marinade from wings — too much causes flare-ups and steaming.",
      "textZh": "烤盘或烤箱炙烤档预热至高火；甩掉多余酱汁——防明火、防水蒸。",
      "zhHint": "甩净再烤",
      "stateNote": {
        "visual": "Wings look lightly tacky, not dripping.",
        "visualZh": "鸡翅微黏手，不滴酱。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "No droplets fall when held horizontally.",
        "signalZh": "横持无酱滴落。"
      }
    },
    {
      "text": "Grill wings on preheated pan over medium-high heat, turning every 2 minutes, until skin is blistered and golden-brown — about 8 minutes total.",
      "textZh": "中高火烤制，每2分钟翻面，至表皮起泡、金棕酥脆——共约8分钟。",
      "zhHint": "勤翻防焦",
      "stateNote": {
        "visual": "Skin shows fine blisters and even golden-brown color.",
        "visualZh": "表皮布满细密气泡，呈均匀金棕色。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-high",
        "signal": "Edges curl up slightly; sizzle remains steady.",
        "signalZh": "边缘微卷；滋滋声持续稳定。"
      }
    },
    {
      "text": "Transfer to a plate. Drizzle generously with scallion oil while hot — the heat unlocks its fragrance.",
      "textZh": "装盘后趁热淋足量葱油——热力激发出葱香。",
      "zhHint": "热淋才香",
      "stateNote": {
        "visual": "Oil pools slightly around wings, shimmering with green flecks.",
        "visualZh": "油在盘边微聚，浮着翠绿葱粒。",
        "timeRef": "immediately after grilling",
        "timeRefZh": "出炉即淋",
        "signal": "Fragrant steam rises as oil hits hot skin.",
        "signalZh": "热油触皮，腾起清香白汽。"
      }
    }
  ],
  "tips": [
    "For crispier skin: refrigerate marinated wings uncovered for 30 minutes before grilling.",
    "Scallion oil keeps 3 days refrigerated — make extra.",
    "Don’t overcrowd the pan — steam makes skin soggy."
  ],
  "tipsZh": [
    "想皮更脆？腌好后敞盖冷藏30分钟再烤。",
    "葱油冷藏可存3天——建议多做些。",
    "勿堆叠烤制——水汽会让表皮变韧。"
  ],
  "relatedSlugs": [
    "lamb-skewers-chinese-bbq"
  ],
  "image": "/images/recipes/grilled-chicken-wings.webp"
};
