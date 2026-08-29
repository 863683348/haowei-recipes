import type { Recipe } from "@/lib/types";

/** Fermented Black Bean & Tilapia Stir-Fry with Oil-Mustard Greens (豆豉鲮鱼油麦菜) — Seed batch */
export const fermented_black_bean_tilapia_stir_fry_oil_mustard_greens: Recipe = {
  "id": "dou-chi-ling-yu-you-mai-cai",
  "slug": "fermented-black-bean-tilapia-stir-fry-oil-mustard-greens",
  "titleEn": "Fermented Black Bean & Tilapia Stir-Fry with Oil-Mustard Greens",
  "titleZh": "豆豉鲮鱼油麦菜",
  "pinyin": "dòu chǐ líng yú yóu mài cài",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses canned tilapia (lingyu) and skips deep-frying the fish—just flake and stir-fry gently. Restaurants often fry whole fish first for crunch.",
  "versionNoteZh": "家常版直接用罐头鲮鱼碎炒制，省去炸鱼步骤；餐馆版常整条炸酥再炒。",
  "tags": [
    "20-min",
    "pantry-staple",
    "protein-packed"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Guangzhou’s Liwan District kept a tin of 'Chun Hing' fermented black bean tilapia on his kitchen shelf since 1987—he’d open it only for Sunday dinners, saying ‘The beans must sing before you add the greens.’",
  "storyZh": "我广州荔湾的祖父自1987年起就在厨房柜子上常年备着一罐‘春盛’豆豉鲮鱼——只在周日晚饭开罐，说：‘豆豉得先在锅里‘唱’起来，才能下青菜。’",
  "ingredients": [
    {
      "id": "om-01",
      "nameEn": "oil-mustard greens (gai lan stems or baby bok choy stems if unavailable)",
      "nameZh": "油麦菜（或芥兰梗/小棵上海青梗）",
      "pinyin": "yóu mài cài",
      "amountMetric": "300 g",
      "amountUS": "4 cups loosely packed",
      "category": "produce",
      "pantry": "local",
      "note": "Choose crisp, pale-green stalks with tight, unopened buds; substitute broccoli stems + baby bok choy if oil-mustard greens are unavailable.",
      "noteZh": "选茎秆浅绿脆嫩、花苞紧实者；若买不到，可用西兰花梗+小棵上海青替代。"
    },
    {
      "id": "bc-01",
      "nameEn": "canned fermented black bean tilapia (lingyu), drained and flaked",
      "nameZh": "豆豉鲮鱼罐头（沥干后拆散）",
      "pinyin": "dòu chǐ líng yú guàn tóu",
      "amountMetric": "120 g",
      "amountUS": "1/2 cup flaked",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for ‘Chun Hing’ or ‘Lee Kum Kee’ brands. If unavailable, substitute 20 g dried shrimp + 1 tsp fermented black beans.",
      "noteZh": "推荐‘春盛’或‘李锦记’品牌；若无，可用20克虾皮+1茶匙豆豉替代。"
    },
    {
      "id": "fb-01",
      "nameEn": "fermented black beans (douchi), rinsed and lightly mashed",
      "nameZh": "豆豉（洗净后略压碎）",
      "pinyin": "dòu chǐ",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse well to reduce saltiness; mash gently with back of spoon—don’t pulverize.",
      "noteZh": "需淘洗去咸；用勺背轻压碎，勿成粉。"
    },
    {
      "id": "oi-02",
      "nameEn": "peanut oil or neutral oil",
      "nameZh": "花生油或中性植物油",
      "pinyin": "huā shēng yóu huò zhōng xìng zhí wù yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Trim oil-mustard greens: discard yellowed leaves and root ends; cut stems diagonally into 4-cm pieces, separating thicker stems from tender leaves.",
      "textZh": "择去油麦菜黄叶及老根；斜刀切4厘米段，粗茎与嫩叶分开放置。",
      "zhHint": "茎叶分放"
    },
    {
      "text": "Rinse douchi under cold water for 10 seconds; drain well and mash lightly with spoon back—grains should stay intact but slightly flattened.",
      "textZh": "豆豉冷水冲10秒，沥干后用勺背轻压——颗粒微扁但不碎。",
      "zhHint": "豆豉轻压不碎"
    },
    {
      "text": "Flake canned tilapia with fork, removing any large bones; set aside with douchi.",
      "textZh": "鲮鱼罐头用叉子拨散，剔净大骨，与豆豉同置一碗。",
      "zhHint": "鲮鱼拨散去骨"
    },
    {
      "text": "Heat wok over medium-high heat until just smoking; add oil and swirl. When oil surface shimmers steadily, add douchi and tilapia.",
      "textZh": "锅烧至微冒烟，下油滑匀；油面稳定泛光时，下豆豉与鲮鱼。",
      "zhHint": "热锅热油下豆豉鲮鱼",
      "stateNote": {
        "visual": "Oil flows smoothly without breaking into beads",
        "visualZh": "油液顺滑流动，不聚成珠",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "medium-high",
        "signal": "A thin, steady shimmer appears across entire oil surface",
        "signalZh": "油面整体浮现均匀薄光"
      }
    },
    {
      "text": "Stir-fry 45 seconds until douchi fragrance blooms and tilapia turns golden at edges—do not brown.",
      "textZh": "快速煸炒45秒，至豆豉香迸发、鱼肉边缘微金黄——切忌焦黑。",
      "zhHint": "闻香即下茎",
      "stateNote": {
        "visual": "Tilapia flakes gain faint golden halo; douchi glistens dark and moist",
        "visualZh": "鲮鱼碎边缘泛浅金晕；豆豉乌润发亮",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium-high",
        "signal": "A rich, fermented umami aroma fills the air—no bitterness",
        "signalZh": "浓郁发酵酱香扑鼻，无焦苦味"
      }
    },
    {
      "text": "Add thick stems first; stir-fry 1 minute until stems brighten. Then add leaves and stir-fry 30 seconds until wilted but still crisp.",
      "textZh": "先下粗茎炒1分钟至色亮，再下嫩叶翻炒30秒至微蔫仍脆。",
      "zhHint": "先茎后叶"
    }
  ],
  "tips": [
    "Never add soy sauce—canned lingyu and douchi supply all needed salt and umami.",
    "If using dried shrimp substitute, soak 10 minutes in warm water first, then drain and pat dry.",
    "This dish tastes best with day-old steamed rice—the starch absorbs the savory oil perfectly."
  ],
  "tipsZh": [
    "切勿另加酱油——鲮鱼罐头与豆豉已含足量咸鲜。",
    "若用虾皮替代，需温水泡10分钟，沥干拍干再用。",
    "配隔夜米饭最佳，米粒吸饱酱香油脂，风味加倍。"
  ],
  "relatedSlugs": [
    "garlic-stir-fry-water-spinach"
  ],
  "image": "/images/recipes/fermented-black-bean-tilapia-stir-fry-oil-mustard-greens.webp"
};
