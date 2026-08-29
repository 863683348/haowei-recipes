import type { Recipe } from "@/lib/types";

/** Tomato Geda Tang (Homestyle Tomato Dumpling Soup) (西红柿疙瘩汤) — Seed batch */
export const tomato_geda_soup: Recipe = {
  "id": "xihongshi-gedatang",
  "slug": "tomato-geda-soup",
  "titleEn": "Tomato Geda Tang (Homestyle Tomato Dumpling Soup)",
  "titleZh": "西红柿疙瘩汤",
  "pinyin": "xī hóng shì gē da tāng",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses hand-pulled flour lumps instead of pre-made dumpling dough — tender, irregular, and full of texture.",
  "versionNoteZh": "家常版用手揪面疙瘩，不依赖预制面团——口感软嫩、形状自然、富有嚼劲。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort",
    "gedat-tang"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Jinan made this every rainy autumn evening — she’d stir the batter with chopsticks while humming old Shandong folk songs, and I’d watch the tomato pulp melt into a rich, glossy broth before dropping in the tiny, springy geda.",
  "storyZh": "我济南的姑妈每逢秋雨傍晚必做这道汤——她用筷子搅着面糊哼着老山东小调，我看西红柿果肉在锅里慢慢化开成油亮红汤，再轻轻撒入弹牙的小面疙瘩。",
  "ingredients": [
    {
      "id": "to-01",
      "nameEn": "ripe tomatoes",
      "nameZh": "熟透西红柿",
      "pinyin": "shú tòu xī hóng shì",
      "amountMetric": "300 g",
      "amountUS": "2 medium (about 2 cups diced)",
      "category": "produce",
      "pantry": "local",
      "note": "Choose deep-red, slightly soft tomatoes for best flavor and natural sweetness.",
      "noteZh": "选深红色、稍软的番茄，风味更浓、天然甜度更高。"
    },
    {
      "id": "fl-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "120 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "local",
      "note": "Do not substitute with cake or bread flour — gluten strength must be moderate for tender geda.",
      "noteZh": "不可用低筋或高筋粉替代——中筋粉的面筋强度恰能做出柔韧不硬的疙瘩。"
    },
    {
      "id": "eg-01",
      "nameEn": "large egg",
      "nameZh": "大鸡蛋",
      "pinyin": "dà jī dàn",
      "amountMetric": "50 g",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "note": "Adds richness and helps bind the geda without making them dense.",
      "noteZh": "增加汤体醇厚感，并帮助面疙瘩成形而不板结。"
    },
    {
      "id": "sc-01",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Blanch, peel, and finely dice 2 tomatoes. Reserve juice. Heat oil in a wok over medium heat; add scallion whites and sauté until fragrant (30 seconds). Add diced tomatoes and cook, stirring, until softened and releasing deep red juices (~4 minutes).",
      "textZh": "番茄焯水去皮切小丁，保留汁水；热锅凉油，中火下葱白爆香30秒，加入番茄丁翻炒至软烂、渗出浓郁红汁（约4分钟）。",
      "zhHint": "先爆香葱白，再炒番茄出红油",
      "stateNote": {
        "visual": "Tomatoes break down into a thick, glossy, brick-red paste with visible oil separation at edges.",
        "visualZh": "番茄融化成浓稠油亮的砖红色酱状，锅边浮现薄薄一层红油。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "Oil begins to shimmer around tomato edges and aroma turns sweet-savory.",
        "signalZh": "锅边油光微闪，香气由酸转为甜鲜。"
      }
    },
    {
      "text": "Add reserved tomato juice and 600 ml water. Bring to a gentle simmer. Season lightly with salt (no soy sauce needed — tomatoes provide umami depth). Simmer uncovered for 8 minutes to concentrate flavor.",
      "textZh": "倒入预留番茄汁和600ml清水，煮沸后转小火慢煨8分钟，不盖盖，让汤味醇厚。",
      "zhHint": "小火慢煨出本味",
      "stateNote": {
        "visual": "Surface bubbles gently and steadily; broth reduces slightly, turning deeper red.",
        "visualZh": "汤面持续冒出细密匀称的小泡；汤量略收，颜色更深。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-low",
        "signal": "Steam rises steadily but no vigorous boiling occurs.",
        "signalZh": "蒸汽匀速上升，无剧烈翻滚。"
      }
    },
    {
      "text": "In a bowl, whisk flour with 120 ml cold water and egg until smooth. Rest batter 5 minutes. Using chopsticks or fingers, drop small irregular lumps (pea- to walnut-sized) directly into simmering soup.",
      "textZh": "面粉加冷水和蛋液搅成顺滑面糊，静置5分钟；用筷子或手指将面糊拨入汤中，形成豌豆至核桃大小的不规则小疙瘩。",
      "zhHint": "边搅边拨，疙瘩才松散不粘连",
      "stateNote": {
        "visual": "Each geda floats immediately and holds shape without dissolving or clumping.",
        "visualZh": "每个疙瘩入锅即浮起，形态完整，不散不坨。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Soup maintains steady gentle simmer — if boiling hard, reduce heat before adding geda.",
        "signalZh": "保持微沸状态，若翻滚剧烈，需先调小火再下疙瘩。"
      }
    },
    {
      "text": "Simmer gently for 3 more minutes until geda are cooked through and plump. Stir occasionally to prevent sticking. Taste and adjust salt only if needed.",
      "textZh": "继续小火煮3分钟，至疙瘩膨润熟透；期间轻搅防沉底；尝味后仅按需补盐。",
      "zhHint": "疙瘩浮起变大即熟",
      "stateNote": {
        "visual": "Geda swell visibly, turn opaque white, and float freely in broth.",
        "visualZh": "疙瘩明显膨大、呈不透明乳白色，自由漂浮于汤中。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "No raw flour taste remains when tasting a geda.",
        "signalZh": "咬一口无生面粉味。"
      }
    },
    {
      "text": "Turn off heat. Stir in scallion greens and a drizzle of sesame oil (optional). Serve hot in deep bowls.",
      "textZh": "关火，撒入葱绿段，淋少许芝麻油（可选），趁热盛入深碗。",
      "zhHint": "最后撒葱增香提色",
      "stateNote": {
        "visual": "Scallion greens retain bright green color; oil forms delicate golden swirls on surface.",
        "visualZh": "葱绿段鲜亮翠绿；芝麻油在汤面漾开细密金纹。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Steam rises softly — no residual sizzle after ladling.",
        "signalZh": "盛汤时仅见柔和热气，无滋滋声。"
      }
    }
  ],
  "tips": [
    "Use room-temperature eggs — cold eggs cause lumps in batter.",
    "If batter is too thick, add 1 tsp water at a time; too thin → geda will dissolve.",
    "For richer broth, add 1 tsp light soy sauce — but authentic Shandong style omits it."
  ],
  "tipsZh": [
    "鸡蛋需室温——过冷易使面糊结块。",
    "面糊太稠加水（每次1茶匙）；太稀则疙瘩易散。",
    "如需更醇厚汤底可加1茶匙生抽，但正宗山东做法不放。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/tomato-geda-soup.webp"
};
