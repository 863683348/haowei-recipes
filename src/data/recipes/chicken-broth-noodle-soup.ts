import type { Recipe } from "@/lib/types";

/** Chicken Broth Noodle Soup (鸡汤面) — Seed batch */
export const chicken_broth_noodle_soup: Recipe = {
  "id": "ji-tang-mian",
  "slug": "chicken-broth-noodle-soup",
  "titleEn": "Chicken Broth Noodle Soup",
  "titleZh": "鸡汤面",
  "pinyin": "jī tāng miàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Nanjing",
  "regionZh": "南京",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "True Nanjing home style: noodles boiled separately, broth seasoned only with salt and scallion—no soy or vinegar masking the chicken’s sweetness.",
  "versionNoteZh": "地道南京家常味：面条另煮，汤只用盐与葱提鲜，不加酱油醋，护住鸡肉本味甘甜。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Nanjing’s Qinhuai district served this every Sunday after temple visits. He’d say, ‘A good jī tāng miàn must taste like the chicken looked at you kindly before it became soup.’ We laughed—but never added extra seasoning.",
  "storyZh": "南京秦淮区的舅舅每逢庙会归来必煮此面。他说：‘好鸡汤面，得喝出鸡生前对你温良一笑的味道。’我们笑，却从不敢多加一滴调料。",
  "ingredients": [
    {
      "id": "jm-01",
      "nameEn": "bone-in chicken legs (skin-on)",
      "nameZh": "带骨鸡腿（带皮）",
      "pinyin": "dài gǔ jī tuǐ",
      "amountMetric": "400 g",
      "amountUS": "14 oz (2 legs)",
      "category": "protein",
      "pantry": "local",
      "note": "Skin-on bones add collagen and body; substitute chicken wings if legs unavailable.",
      "noteZh": "带皮带骨增胶质与厚度；若无鸡腿，可用鸡翅替代。"
    },
    {
      "id": "jm-02",
      "nameEn": "fresh wheat noodles (medium thickness)",
      "nameZh": "鲜切面（中粗）",
      "pinyin": "xiān qiè miàn",
      "amountMetric": "200 g",
      "amountUS": "2 bundles (~7 oz)",
      "category": "staple",
      "pantry": "asian",
      "note": "Find in refrigerated aisle; substitute dried ramen or udon—reduce cooking time by 1 minute.",
      "noteZh": "冷藏柜找鲜面；若用干拉面或乌冬，煮制时间减1分钟。"
    },
    {
      "id": "jm-03",
      "nameEn": "scallions (green parts only)",
      "nameZh": "小葱（仅葱绿）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp finely sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "jm-04",
      "nameEn": "sea salt",
      "nameZh": "海盐",
      "pinyin": "hǎi yán",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Avoid iodized table salt—it dulls broth clarity.",
      "noteZh": "忌用碘盐，易使汤色浑浊。"
    }
  ],
  "steps": [
    {
      "text": "Place chicken legs in a pot with 1.2 L cold water. Bring to a vigorous boil over high heat, then drain and rinse chicken under cold water to remove impurities.",
      "textZh": "鸡腿入锅加1.2升冷水，大火烧沸后倒掉水，鸡腿用冷水冲洗干净。",
      "zhHint": "双焯水法去腥保清",
      "stateNote": {
        "visual": "Water turns cloudy gray; chicken surface looks clean and pale.",
        "visualZh": "水呈灰浊色；鸡表皮洁净泛白。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Large bubbles erupt continuously across surface.",
        "signalZh": "水面持续翻滚大气泡。"
      }
    },
    {
      "text": "Return rinsed chicken to clean pot with fresh 1.2 L cold water. Add 10 g ginger slices (optional) and bring to simmer. Skim foam, then cover and simmer on low for 25 minutes.",
      "textZh": "洗净鸡腿回净锅，加新水1.2升及10克姜片（可选），烧至微沸撇沫，盖盖小火炖25分钟。",
      "zhHint": "加盖锁住香气",
      "stateNote": {
        "visual": "Steam rises steadily; broth remains pale with tiny bubbles at edge.",
        "visualZh": "蒸汽匀稳上升；汤色淡、边缘微泡。",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "low",
        "signal": "Lid trembles slightly once per second.",
        "signalZh": "锅盖每秒轻颤一次。"
      }
    },
    {
      "text": "Strain broth through a fine-mesh sieve into a heatproof bowl. Discard solids except chicken meat—shred it finely and set aside.",
      "textZh": "用细网筛滤出清汤入耐热碗；弃渣留鸡肉，撕成细丝备用。",
      "zhHint": "滤网越细汤越清",
      "tip": "Press solids gently with ladle back to extract every drop—do not squeeze hard or cloud broth.",
      "tipZh": "用勺背轻压渣料取尽汤汁；切勿重挤，否则汤浊。"
    },
    {
      "text": "Season warm broth with sea salt to taste. Reheat to just below simmer (do not boil).",
      "textZh": "温热时以海盐调味。回炉加热至将沸未沸（勿滚）。",
      "zhHint": "盐后不滚，护汤清亮",
      "stateNote": {
        "visual": "Tiny bubbles form at bottom but don’t rise; surface shimmers faintly.",
        "visualZh": "锅底微泡未升腾；汤面泛微光。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium-low",
        "signal": "Small vapor wisps rise without audible hiss.",
        "signalZh": "缕缕白气升起，无声响。"
      }
    },
    {
      "text": "Cook noodles according to package directions until al dente. Drain, rinse briefly under warm water to remove excess starch, then divide between two bowls. Ladle hot broth over noodles, top with shredded chicken and scallion greens.",
      "textZh": "按包装煮面至弹牙，沥干后用温水快冲去淀粉。分装两碗，浇热汤，铺鸡丝与葱绿。",
      "zhHint": "温水冲面不降温不糊汤",
      "stateNote": {
        "visual": "Noodles separate cleanly; no clumps or sticky strands.",
        "visualZh": "面条根根分明，无粘连或糊团。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium",
        "signal": "Noodles bend easily but snap back when pressed.",
        "signalZh": "面条可弯折，轻压后回弹。"
      }
    }
  ],
  "tips": [
    "Always use room-temperature noodles—cold noodles shock hot broth and mute flavor.",
    "Save leftover broth for congee or steamed egg custard.",
    "For depth, add 1 star anise to broth while simmering—remove before serving."
  ],
  "tipsZh": [
    "面条务必室温下锅，冷面遇热汤会闷住鲜味。",
    "剩汤可煮粥或蒸蛋羹。",
    "增香可于炖汤时加1颗八角，出锅前捞出。"
  ],
  "relatedSlugs": [
    "chicken-broth-wonton-soup"
  ],
  "image": "/images/recipes/chicken-broth-noodle-soup.webp"
};
