import type { Recipe } from "@/lib/types";

/** Braised Pork Belly with Preserved Mustard Greens (梅干菜扣肉) — Seed batch */
export const meicai_kourou: Recipe = {
  "id": "meicai-kourou",
  "slug": "meicai-kourou",
  "titleEn": "Braised Pork Belly with Preserved Mustard Greens",
  "titleZh": "梅干菜扣肉",
  "pinyin": "méi gān cài kòu ròu",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Shaoxing, Zhejiang",
  "regionZh": "浙江绍兴",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "This is the slow-simmered, layered version my grandmother in Shaoxing made—no pressure cooker, no shortcuts. She always steamed it overnight in a clay pot buried in warm ash.",
  "versionNoteZh": "这是绍兴外婆用的慢炖分层做法——不用高压锅，不走捷径。她总把陶罐埋进温热的灶灰里，蒸一整夜。",
  "tags": [
    "slow-cooked",
    "comfort",
    "special-occasion"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Shaoxing kept a crock of meicai under her kitchen stairs, fermented each autumn from local mustard greens. Every winter solstice, she’d braise pork belly with it—layering fat and lean by hand, then steaming until the meat collapsed at the touch of a chopstick.",
  "storyZh": "绍兴外婆每年秋天都用本地雪里蕻在厨房楼梯下腌一坛梅干菜。每逢冬至，她必做这道菜——亲手将肥瘦相间的五花肉层层码入碗中，蒸到筷子一戳即化。",
  "ingredients": [
    {
      "id": "mc-01",
      "nameEn": "pork belly, skin-on, cut into 4 cm cubes",
      "nameZh": "带皮五花肉，切4厘米方块",
      "pinyin": "dài pí wǔ huā ròu",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Choose belly with even marbling (3:2 fat-to-lean ratio). Avoid pre-sliced 'stir-fry' cuts.",
      "noteZh": "选肥瘦均匀（肥瘦比约3:2）的整块五花；勿用预切薄片‘炒肉’款。"
    },
    {
      "id": "mc-02",
      "nameEn": "preserved mustard greens (meicai), rinsed and chopped fine",
      "nameZh": "梅干菜（洗净后切碎）",
      "pinyin": "méi gān cài",
      "amountMetric": "120 g",
      "amountUS": "1 cup loosely packed",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for vacuum-packed ‘Shaoxing meicai’ or ‘Zhejiang preserved mustard greens’ in Asian grocers. Substitute dried shiitake soaking liquid if unavailable (see tip).",
      "noteZh": "认准真空包装‘绍兴梅干菜’或‘浙江雪里蕻干’。若无，可用泡发香菇水替代（见小贴士）。"
    },
    {
      "id": "mc-03",
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
      "id": "mc-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "mc-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "25 g",
      "amountUS": "1 tbsp crushed",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Do not substitute granulated sugar—it lacks depth and caramelizes too fast.",
      "noteZh": "勿用白砂糖替代——缺乏醇厚感且焦化过快。"
    }
  ],
  "steps": [
    {
      "text": "Blanch pork belly cubes in boiling water with 1 tbsp Shaoxing wine for 3 minutes. Skim foam, then rinse under cold water. Pat dry thoroughly.",
      "textZh": "五花肉块冷水下锅，加1大勺绍兴酒，水沸后煮3分钟去腥。捞出冲净浮沫，彻底擦干。",
      "zhHint": "焯水去腥，务必擦干",
      "stateNote": {
        "visual": "Foam rises to surface; meat turns opaque gray-white",
        "visualZh": "水面浮起灰白泡沫；肉块转为不透明灰白色",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Foam stops rising vigorously",
        "signalZh": "浮沫不再大量涌出"
      }
    },
    {
      "text": "In a wok over medium heat, sear pork cubes on all sides until golden-brown (about 6 minutes total). Remove and set aside.",
      "textZh": "中火热锅不放油，将五花肉块各面煎至金黄（共约6分钟）。盛出备用。",
      "zhHint": "干煎上色，不放油",
      "stateNote": {
        "visual": "Deep golden crust forms; small droplets of fat bead on surface",
        "visualZh": "表面形成深金色脆壳；渗出细小油珠",
        "timeRef": "6 minutes total",
        "timeRefZh": "共6分钟",
        "heat": "medium",
        "signal": "Meat releases easily from pan when flipped",
        "signalZh": "翻面时肉块自然脱锅"
      }
    },
    {
      "text": "In same wok, stir-fry chopped meicai over medium-low heat until fragrant and slightly darkened (4–5 minutes). Add light soy sauce, remaining Shaoxing wine, and rock sugar; simmer 1 minute.",
      "textZh": "原锅转中小火，煸炒梅干菜至香气溢出、颜色微深（4–5分钟）。加入生抽、余下黄酒和冰糖，小火熬1分钟。",
      "zhHint": "煸香梅干菜，激出咸鲜",
      "stateNote": {
        "visual": "Meicai deepens to olive-brown; aroma becomes nutty and earthy",
        "visualZh": "梅干菜变为橄榄褐色；散发坚果与泥土般醇香",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "heat": "medium-low",
        "signal": "Oil begins to separate from meicai",
        "signalZh": "梅干菜边缘微微出油"
      }
    },
    {
      "text": "Return pork to wok. Add just enough hot water to cover ¾ of meat. Bring to gentle simmer, then transfer to a lidded ceramic bowl.",
      "textZh": "将五花肉回锅，加热水至没过肉块3/4处。烧至微沸后，连汤倒入带盖陶瓷碗中。",
      "zhHint": "水量勿多，仅浸没3/4",
      "stateNote": {
        "visual": "Liquid simmers with steady, tiny bubbles—not rolling boil",
        "visualZh": "汤面持续冒细密小泡，非大滚",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "First bubbles break surface gently",
        "signalZh": "初见汤面轻柔冒泡"
      }
    },
    {
      "text": "Cover bowl tightly with foil or lid. Steam over boiling water for 2.5 hours, checking water level every 45 minutes. Meat should be tender enough to collapse with light pressure.",
      "textZh": "碗口严密封锡纸或盖盖。隔水蒸2.5小时，每45分钟添一次沸水。肉质应软烂至轻压即散。",
      "zhHint": "全程隔水慢蒸，不可省略",
      "stateNote": {
        "visual": "Fat renders into translucent layer; meat fibers visibly separate",
        "visualZh": "肥肉呈半透明状；肉丝纤维清晰松散",
        "timeRef": "2.5 hours",
        "timeRefZh": "2.5 小时",
        "heat": "medium",
        "signal": "Chopstick slides in and out with zero resistance",
        "signalZh": "筷子插入拔出毫无阻力"
      }
    }
  ],
  "tips": [
    "If meicai is too salty, soak 15 minutes in cool water before chopping.",
    "For authentic texture, serve hot from the steamer — never reheat. The fat must be molten, not congealed.",
    "Leftovers keep 4 days refrigerated. Reheat only the portion you’ll eat — steam 10 minutes to restore tenderness."
  ],
  "tipsZh": [
    "若梅干菜过咸，切碎前先用凉水浸泡15分钟。",
    "追求地道口感，请务必现蒸现吃——勿回锅。肥肉须呈熔融态，不可凝结。",
    "剩菜冷藏可存4天。仅复热当餐份量——隔水蒸10分钟恢复软糯。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/meicai-kourou.webp"
};
