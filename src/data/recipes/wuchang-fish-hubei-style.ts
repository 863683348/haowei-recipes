import type { Recipe } from "@/lib/types";

/** Wuchang Fish (Steamed with Ginger and Scallions) (武昌鱼) — Seed batch */
export const wuchang_fish_hubei_style: Recipe = {
  "id": "wu-chang-yu",
  "slug": "wuchang-fish-hubei-style",
  "titleEn": "Wuchang Fish (Steamed with Ginger and Scallions)",
  "titleZh": "武昌鱼",
  "pinyin": "Wǔ Chāng Yú",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Wuhan, Hubei",
  "regionZh": "湖北武汉",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses gentle steaming and minimal seasoning to highlight the fish’s natural sweetness — no deep-frying or heavy sauces.",
  "versionNoteZh": "家常版采用清蒸法，仅用姜葱提鲜，突出武昌鱼本味，不油炸、不浓酱。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Wuchang District would steam this fish every Lunar New Year Eve — she said the silvery skin symbolized prosperity, and the whole fish meant 'abundance year after year'. She always scored the fillets three times, just like her mother taught her.",
  "storyZh": "我武昌区的姑妈每逢除夕必蒸这道鱼——她说银亮的鱼皮象征富贵，整条鱼则寓意‘年年有余’。她总在鱼身划三刀，像她母亲教的那样。",
  "ingredients": [
    {
      "id": "wc-01",
      "nameEn": "Wuchang fish (silver carp, ~500 g)",
      "nameZh": "武昌鱼（约500克）",
      "pinyin": "Wǔ Chāng Yú",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Look for firm, bright-eyed whole fish with silvery scales; substitute with tilapia or white sea bass if unavailable.",
      "noteZh": "选鱼身紧实、眼睛明亮、鳞片银亮者；无武昌鱼可用罗非鱼或海鲈鱼替代。"
    },
    {
      "id": "wc-02",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "pinyin": "Shēng Jiāng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "wc-03",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "Xiǎo Cōng",
      "amountMetric": "60 g",
      "amountUS": "½ cup finely sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "wc-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "Shēng Chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "wc-05",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "Zhī Ma Yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Scale, gut, and thoroughly rinse the fish. Pat dry inside and out. Score three diagonal cuts on each side of the fish.",
      "textZh": "刮鳞、去内脏、彻底冲洗鱼身内外，擦干水分；在鱼身两侧各斜切三刀。",
      "zhHint": "擦干防溅油，斜刀易入味",
      "stateNote": {
        "visual": "Fish surface is matte and completely dry to the touch",
        "visualZh": "鱼身表面哑光、触感完全干燥",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No water beads remain on skin",
        "signalZh": "鱼皮上无水珠残留"
      }
    },
    {
      "text": "Stuff cavity with half the ginger and scallions. Rub remaining ginger and scallions over both sides of the fish.",
      "textZh": "将一半姜葱塞入鱼腹；剩余姜葱均匀铺在鱼身两面。",
      "zhHint": "腹内填料去腥，外敷增香",
      "stateNote": {
        "visual": "Ginger and scallions cling evenly without clumping",
        "visualZh": "姜葱均匀附着，不结团",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Flesh feels cool and slightly tacky from moisture absorption",
        "signalZh": "鱼肉微凉、略带黏感，说明已吸住调料"
      }
    },
    {
      "text": "Place fish on a heatproof plate. Steam over vigorously boiling water for 12–14 minutes, until flesh flakes easily with a fork near the backbone.",
      "textZh": "鱼置耐热盘中，水沸后上锅大火蒸12–14分钟，至鱼背最厚处用筷子轻拨即离骨。",
      "zhHint": "水沸再入锅，计时从冒汽起",
      "stateNote": {
        "visual": "Steam rises steadily and thickly from pot lid",
        "visualZh": "锅盖持续冒出浓密白汽",
        "timeRef": "12–14 minutes",
        "timeRefZh": "12–14 分钟",
        "heat": "high",
        "signal": "Flesh at thickest part turns opaque and separates cleanly when nudged",
        "signalZh": "鱼背最厚处肉质变白不透明，轻碰即散开"
      }
    },
    {
      "text": "Carefully remove fish. Discard cooked ginger and scallions from cavity and surface. Drizzle light soy sauce evenly over hot fish.",
      "textZh": "小心取出鱼盘，倒掉腹内及表面已熟的姜葱；趁热均匀淋入生抽。",
      "zhHint": "趁热淋酱，激发香气",
      "stateNote": {
        "visual": "Sauce sizzles faintly on hot fish surface",
        "visualZh": "生抽在滚烫鱼身上微微滋滋作响",
        "timeRef": "immediately after steaming",
        "timeRefZh": "出锅即淋",
        "signal": "Aromatic steam rises sharply upon contact",
        "signalZh": "酱汁接触瞬间腾起明显香气白汽"
      }
    },
    {
      "text": "Heat sesame oil in a small pan until shimmering but not smoking. Pour hot oil over fish, then garnish with fresh scallion greens.",
      "textZh": "小锅烧热芝麻油至微冒烟（约180°C），立即浇在鱼身上，撒新鲜葱绿段。",
      "zhHint": "油温够高才激香，但不可焦苦",
      "stateNote": {
        "visual": "Oil shimmers with fine ripples and no smoke",
        "visualZh": "油面泛细纹，无青烟",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "A nutty aroma rises, and oil moves fluidly around pan",
        "signalZh": "散发坚果香，油在锅中流动顺畅"
      }
    }
  ],
  "tips": [
    "Use a wok rack or inverted heatproof bowl to elevate the plate — ensures even steam circulation.",
    "If using tilapia, reduce steaming time by 2 minutes — it cooks faster.",
    "Never skip the final hot-oil pour — it transforms flavor and texture."
  ],
  "tipsZh": [
    "用蒸架或倒扣耐热碗垫高鱼盘，确保蒸汽环绕流通。",
    "若用罗非鱼，蒸制时间减2分钟——熟得更快。",
    "最后热油浇淋不可省略——这是风味与口感升华的关键。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/wuchang-fish-hubei-style.webp"
};
