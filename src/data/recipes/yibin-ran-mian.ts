import type { Recipe } from "@/lib/types";

/** Yibin-Style Ran Mian (Oil-Blazed Noodles) (宜宾燃面) — Seed batch */
export const yibin_ran_mian: Recipe = {
  "id": "yibin-ran-mian",
  "slug": "yibin-ran-mian",
  "titleEn": "Yibin-Style Ran Mian (Oil-Blazed Noodles)",
  "titleZh": "宜宾燃面",
  "pinyin": "Yíbīn rán miàn",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Yibin",
  "regionZh": "宜宾",
  "difficulty": "medium",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "True Yibin Ran Mian uses no broth—just dry-tossed noodles blistered in hot oil with preserved vegetables and chili oil. Our version omits MSG but keeps the signature 'burning' aroma from high-heat oil.",
  "versionNoteZh": "正宗宜宾燃面无汤，全靠热油爆香拌面，突出‘燃’字——油温高、香气烈、面干爽。本方不加味精，但保留热油激香精髓。",
  "tags": [
    "30-min",
    "vegetarian-option",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Grandfather Li ran a noodle stall near Yibin’s ancient Jinsha River docks in the 1950s. He’d toss noodles in a 200°C wok so fast the oil sizzled like fire—hence ‘Ran Mian’. His secret? Twice-fried preserved mustard greens, crispy as potato chips.",
  "storyZh": "李爷爷20世纪50年代在宜宾金沙江古码头摆面摊，甩面入200℃热锅，油声如爆竹炸裂，故名‘燃面’。他的绝招？两次油炸的芽菜，脆得像薯片。",
  "ingredients": [
    {
      "id": "yr-01",
      "nameEn": "preserved mustard greens (ya cai)",
      "nameZh": "宜宾芽菜",
      "pinyin": "Yíbīn yá cài",
      "amountMetric": "50 g",
      "amountUS": "1/4 cup finely chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute Korean kimchi brine-cured radish (cut fine) + 1/4 tsp sugar",
      "noteZh": "可用韩式辣萝卜（切细）+1/4茶匙糖替代"
    },
    {
      "id": "yr-02",
      "nameEn": "chili oil with sediment",
      "nameZh": "红油（带渣）",
      "pinyin": "hóng yóu (dài zhā)",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for ‘chili crisp’ or make your own with fried chili flakes + oil",
      "noteZh": "选‘辣椒酥’或自制：辣椒碎+热油浇淋"
    },
    {
      "id": "yr-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēngchōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "yr-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "yr-05",
      "nameEn": "fresh wheat noodles",
      "nameZh": "鲜切面",
      "pinyin": "xiān qiē miàn",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "yr-06",
      "nameEn": "roasted peanuts",
      "nameZh": "烤花生仁",
      "pinyin": "kǎo huāshēng rén",
      "amountMetric": "30 g",
      "amountUS": "3 tbsp",
      "category": "staple",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse preserved mustard greens under cold water to remove excess salt; squeeze dry and chop finely. Heat 1 tbsp neutral oil in wok over medium-high heat. Fry greens until deeply golden and crisp (~2 min). Remove and drain on paper towel.",
      "textZh": "芽菜冷水冲洗去咸，挤干切细；热油中火高炸至金黄酥脆（约2分钟），捞出吸油。",
      "zhHint": "洗→挤→切→炸→吸",
      "stateNote": {
        "visual": "Greens darken to amber and curl at edges",
        "visualZh": "芽菜转琥珀色，边缘微卷",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Faint nutty aroma and audible crispness when stirred",
        "signalZh": "搅动时发出清脆声，飘出坚果香"
      }
    },
    {
      "text": "Cook noodles in boiling salted water until al dente (3 min for fresh). Drain thoroughly, then spread on a tray and fan vigorously for 1 minute to evaporate surface moisture—this ensures oil adhesion.",
      "textZh": "面煮至断生（鲜面3分钟），彻底沥干，平铺扇风1分钟吹干表面水汽——锁油关键。",
      "zhHint": "断生→沥干→扇风→锁油",
      "stateNote": {
        "visual": "Noodles look matte, not glistening",
        "visualZh": "面条呈哑光，无水光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No steam rises when held 10 cm above tray",
        "signalZh": "距盘10厘米无热气升腾"
      }
    },
    {
      "text": "Reheat wok until smoking lightly. Add chili oil and swirl. Immediately add noodles and toss rapidly with two chopsticks for 45 seconds—noodles should sizzle and darken slightly.",
      "textZh": "锅烧至微冒青烟，下红油旋匀；立刻下面，快筷翻拌45秒——面应嘶嘶作响、微褐增香。",
      "zhHint": "锅热→油旋→面下→快拌",
      "stateNote": {
        "visual": "Noodles develop faint golden speckles and separate cleanly",
        "visualZh": "面条现浅金斑点，根根分明",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "Distinct sizzling sound persists without burning",
        "signalZh": "持续清脆嘶嘶声，无焦糊味"
      }
    },
    {
      "text": "Reduce heat to medium. Stir in light soy sauce, sesame oil, and 1 tsp sugar. Toss 30 seconds until sauce coats evenly and noodles smell toasted.",
      "textZh": "转中火，加生抽、香油、糖，快拌30秒至酱匀、面香微焦。",
      "zhHint": "降火→合酱→闻香",
      "stateNote": {
        "visual": "Oil sheen intensifies and noodles glisten uniformly",
        "visualZh": "油光增强，面条通体油亮",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Toasted wheat fragrance becomes unmistakable",
        "signalZh": "麦香焦香扑鼻可辨"
      }
    },
    {
      "text": "Transfer to bowls. Top with fried芽菜, roasted peanuts, and extra chili oil. Serve immediately—no waiting, or the ‘burn’ fades.",
      "textZh": "装碗，覆芽菜、花生、红油；即刻上桌——‘燃’字只在一瞬。",
      "zhHint": "快装·热盖·即食",
      "stateNote": {
        "visual": "Steam rises in thin, steady ribbons",
        "visualZh": "热气细而匀，如丝如缕",
        "timeRef": "within 30 seconds of plating",
        "timeRefZh": "装碗后30秒内",
        "heat": "medium-low",
        "signal": "Noodles retain springy bite when tested with chopsticks",
        "signalZh": "筷子夹起仍弹牙有劲"
      }
    }
  ],
  "tips": [
    "Yibin芽菜 is non-negotiable for authenticity—order online if unavailable locally.",
    "Use a carbon-steel wok: it reaches higher temps than stainless or nonstick, essential for the 'blazing' effect.",
    "For vegetarian version, omit pork (not in ingredients) and double the芽菜 and peanuts."
  ],
  "tipsZh": [
    "宜宾芽菜不可替代，本地无售请网购。",
    "务必用碳钢锅——升温快、温度高，是‘燃’感核心。",
    "素食版：本方本无肉，加倍芽菜与花生即可。"
  ],
  "relatedSlugs": [
    "dan-dan-noodles-chengdu"
  ],
  "image": "/images/recipes/yibin-ran-mian.webp"
};
