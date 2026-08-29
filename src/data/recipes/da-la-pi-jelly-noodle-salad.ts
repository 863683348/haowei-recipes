import type { Recipe } from "@/lib/types";

/** Big-Pull Jelly Noodles (大拉皮) — Seed batch */
export const da_la_pi_jelly_noodle_salad: Recipe = {
  "id": "da-la-pi",
  "slug": "da-la-pi-jelly-noodle-salad",
  "titleEn": "Big-Pull Jelly Noodles",
  "titleZh": "大拉皮",
  "pinyin": "dà lā pí",
  "cuisine": "汤羹凉菜",
  "cuisineEn": "Cold Dishes & Soups",
  "region": "Jilin",
  "regionZh": "吉林",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses store-bought mung bean starch sheets (or instant starch jelly) — no homemade starch pulling required. Texture is chewy, slippery, and resilient.",
  "versionNoteZh": "家常版用市售绿豆淀粉皮或速溶粉冻成冻，免去传统手工‘拉’制，口感弹韧滑溜。",
  "tags": [
    "45-min",
    "make-ahead",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "My cousin in Changchun ran a tiny street stall where she pulled da la pi by hand every morning before school — stretching steaming starch sheets over bamboo poles until they shimmered like silk. We’d sneak bites still warm, dipped in garlic-vinegar sauce.",
  "storyZh": "我在长春的表姐曾摆街边小摊，每天清晨上学前手工拉大拉皮——将滚烫的淀粉皮挂在竹竿上抻开，薄如蝉翼、亮似丝绸。我们偷吃刚出锅的，蘸蒜醋汁，烫得直哈气。",
  "ingredients": [
    {
      "id": "starch-01",
      "nameEn": "mung bean starch (or potato starch for substitution)",
      "nameZh": "绿豆淀粉（或马铃薯淀粉替代）",
      "pinyin": "lǜ dòu diàn fěn",
      "amountMetric": "120 g",
      "amountUS": "¾ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Must be pure mung bean starch (e.g., Jinhua brand). Potato starch yields softer, less elastic noodles.",
      "noteZh": "须纯绿豆淀粉（如金花牌）；马铃薯淀粉成品偏软、弹性弱。"
    },
    {
      "id": "water-01",
      "nameEn": "cold water",
      "nameZh": "凉开水",
      "pinyin": "liáng kāi shuǐ",
      "amountMetric": "480 ml",
      "amountUS": "2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "vineg-01",
      "nameEn": "Chinese black vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "sesame-01",
      "nameEn": "toasted sesame oil",
      "nameZh": "熟芝麻油",
      "pinyin": "shú zhī ma yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "gar-01",
      "nameEn": "garlic, finely minced",
      "nameZh": "大蒜（细剁）",
      "pinyin": "dà suàn",
      "amountMetric": "10 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    }
  ],
  "steps": [
    {
      "text": "Whisk starch and 120 ml cold water in a heatproof bowl until smooth and lump-free. Set aside.",
      "textZh": "耐热碗中混合淀粉与120毫升凉开水，搅至顺滑无颗粒，静置备用。",
      "zhHint": "务必过筛一次更稳妥。",
      "stateNote": {
        "visual": "Mixture is milky-white and flows like thin cream.",
        "visualZh": "浆液乳白，如稀奶油般顺滑流淌。",
        "timeRef": "immediate",
        "timeRefZh": "即刻",
        "signal": "No grittiness felt when rubbed between fingers.",
        "signalZh": "指腹揉搓无颗粒感。"
      }
    },
    {
      "text": "Bring remaining 360 ml water to a rolling boil in a wide pot. Slowly pour in starch slurry while whisking constantly. Cook on medium-high heat, stirring nonstop, until mixture thickens to translucent, glossy pudding — about 3–4 minutes.",
      "textZh": "宽锅中烧沸余下360毫升水；边搅边缓缓倒入淀粉浆，中大火持续搅拌至透明胶状、光泽明亮（约3–4分钟）。",
      "zhHint": "停搅即结块，务必不停手。",
      "stateNote": {
        "visual": "Mixture turns glassy and holds shape briefly when lifted on spoon.",
        "visualZh": "浆体透亮，勺起悬垂片刻不滴落。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium-high",
        "signal": "Bubbles break loudly and surface shimmers uniformly.",
        "signalZh": "气泡爆裂声清脆，表面均匀泛光。"
      }
    },
    {
      "text": "Immediately pour hot gel into a 20 cm square baking dish lined with oiled parchment. Smooth surface with an oiled spatula. Cool uncovered at room temperature for 30 minutes, then refrigerate 1 hour until fully set.",
      "textZh": "热浆立即倒入铺油纸的20厘米方烤盘，油刮刀抹平表面；室温晾30分钟，再冷藏1小时至完全凝固。",
      "zhHint": "油纸防粘，冷透才好切。",
      "stateNote": {
        "visual": "Surface is taut, mirror-smooth, and completely opaque when tapped.",
        "visualZh": "表面紧绷、镜面光滑，轻叩呈哑光。",
        "timeRef": "1 hour + 30 min",
        "timeRefZh": "1 小时 + 30 分钟",
        "signal": "No indentation remains after light finger press.",
        "signalZh": "轻按无指痕。"
      }
    },
    {
      "text": "Loosen edges with a knife, invert onto a cutting board, and peel off parchment. Cut into 0.5 cm wide ribbons using a sharp knife or bench scraper.",
      "textZh": "刀沿边划松，倒扣案板揭去油纸；用利刀或压面刀切成0.5厘米宽条。",
      "zhHint": "刀蘸凉水防粘，切口更利落。",
      "stateNote": {
        "visual": "Ribbons are even, translucent, and separate cleanly without tearing.",
        "visualZh": "粉条均匀透亮，切口齐整不连。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No sticking occurs between strands during cutting.",
        "signalZh": "切割时粉条互不粘连。"
      }
    },
    {
      "text": "In a bowl, whisk black vinegar, sesame oil, and minced garlic. Toss noodles gently until evenly coated. Serve chilled with optional cucumber matchsticks.",
      "textZh": "碗中混合镇江醋、芝麻油、蒜末搅匀；粉条轻拌至均匀挂汁。冰镇后上桌，可配黄瓜丝。",
      "zhHint": "拌时手轻，防断条。",
      "stateNote": {
        "visual": "Noodles glisten with thin, even sheen; no pooling oil or vinegar.",
        "visualZh": "粉条泛薄而匀亮光；无油醋积聚。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Each ribbon carries a delicate film, not droplets.",
        "signalZh": "每根粉条裹薄衣，非挂水滴。"
      }
    }
  ],
  "tips": [
    "Chill noodles 15 minutes before tossing — prevents gumminess.",
    "Use a metal bench scraper instead of a knife for faster, cleaner cuts.",
    "For restaurant-style shine, rinse cut noodles once in ice water, then drain thoroughly."
  ],
  "tipsZh": [
    "拌前先冷藏粉条15分钟，防黏坨。",
    "用金属压面刀切比刀更利落、不易断。",
    "追求餐馆级亮泽？切好粉条用冰水快速冲一遍，彻底沥干。"
  ],
  "relatedSlugs": [
    "laohu-cai-lao-cu-peanut",
    "lao-hu-cai-tiger-salad"
  ],
  "image": "/images/recipes/da-la-pi-jelly-noodle-salad.webp"
};
