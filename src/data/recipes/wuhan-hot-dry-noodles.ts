import type { Recipe } from "@/lib/types";

/** Wuhan Hot Dry Noodles (热干面) — Seed batch */
export const wuhan_hot_dry_noodles: Recipe = {
  "id": "re-gan-mian",
  "slug": "wuhan-hot-dry-noodles",
  "titleEn": "Wuhan Hot Dry Noodles",
  "titleZh": "热干面",
  "pinyin": "Rè Gān Miàn",
  "cuisine": "面点小吃",
  "cuisineEn": "Noodle & Dumpling Snacks",
  "region": "Wuhan, Hubei",
  "regionZh": "湖北武汉",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses freshly boiled alkaline noodles tossed in sesame oil while hot — no commercial chili oil or MSG-laced sauces.",
  "versionNoteZh": "家常版用现煮碱水面，趁热拌芝麻油防粘——不用市售辣油，不加味精酱料。",
  "tags": [
    "30-min",
    "breakfast",
    "street-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every morning before school, my uncle in Jianghan Road handed me a paper-wrapped bundle of hot dry noodles — he’d say, ‘Eat fast, or the sesame oil cools and the noodles lock up!’ His secret was tossing them *twice*: once hot, once after resting.",
  "storyZh": "每天上学前，江汉路的舅舅总会递给我一包纸裹热干面——他说：‘趁热吃，凉了麻油凝住，面就坨了！’他的秘诀是‘两拌’：刚出锅拌一次，稍晾后再拌一次。",
  "ingredients": [
    {
      "id": "rg-01",
      "nameEn": "alkaline wheat noodles (fresh or dried)",
      "nameZh": "碱水面（鲜面或干面）",
      "pinyin": "Jiǎn Shuǐ Miàn",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz (about 2 bundles fresh)",
      "category": "staple",
      "pantry": "asian",
      "note": "Look for ‘jiǎn shuǐ miàn’ or ‘ramen-style noodles’; substitute with fresh ramen or spaghetti if unavailable.",
      "noteZh": "认准‘碱水面’或日式拉面；无碱水面可用鲜拉面或意大利细面替代。"
    },
    {
      "id": "rg-02",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "Zhī Ma Yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "rg-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "Shēng Chōu",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "rg-04",
      "nameEn": "pickled mustard tuber (zha cai)",
      "nameZh": "榨菜",
      "pinyin": "Zhà Cài",
      "amountMetric": "40 g",
      "amountUS": "¼ cup minced",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse and squeeze dry to reduce saltiness; substitute with chopped kimchi or daikon radish if unavailable.",
      "noteZh": "冲洗后挤干减咸；无榨菜可用泡菜或萝卜干替代。"
    }
  ],
  "steps": [
    {
      "text": "Boil noodles in plenty of salted water until just tender (1–2 min for fresh, 4–5 min for dried). Drain immediately.",
      "textZh": "宽水下碱水面，煮至断生（鲜面1–2分钟，干面4–5分钟），立即沥干。",
      "zhHint": "宁短勿长，防面软烂",
      "stateNote": {
        "visual": "Noodles are plump, flexible, and separate easily when stirred",
        "visualZh": "面条饱满柔软，搅动即散开",
        "timeRef": "1–5 minutes depending on type",
        "timeRefZh": "依面型而定，1–5分钟",
        "heat": "high",
        "signal": "A single strand bends without snapping when lifted",
        "signalZh": "单根面条弯曲不断裂"
      }
    },
    {
      "text": "While still piping hot, drizzle 1 tbsp sesame oil over noodles and toss vigorously with chopsticks for 1 minute until glossy and separated.",
      "textZh": "趁面条滚烫，淋1汤匙芝麻油，快速用筷子抖拌1分钟至油亮松散。",
      "zhHint": "高温锁油，防粘关键",
      "stateNote": {
        "visual": "Noodles glisten uniformly and slide past each other without sticking",
        "visualZh": "面条油亮均一，相互滑动不粘连",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Chopsticks move freely with rhythmic ‘clack-clack’ sound",
        "signalZh": "筷子抖动发出清晰‘咔咔’声"
      }
    },
    {
      "text": "Let noodles rest uncovered for 10 minutes to cool slightly and absorb oil. Toss again briefly.",
      "textZh": "摊开晾置10分钟，稍降温并吸油；再次快速拌匀。",
      "zhHint": "晾面定型，二拌更韧",
      "stateNote": {
        "visual": "Noodles appear drier on surface but retain internal springiness",
        "visualZh": "表面略干，内里仍弹韧",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No steam rises when lifted with chopsticks",
        "signalZh": "筷子挑起无热气升腾"
      }
    },
    {
      "text": "In a small bowl, mix light soy sauce and remaining sesame oil. Pour over noodles and toss thoroughly.",
      "textZh": "小碗中混合生抽与剩余芝麻油，淋入面中，彻底拌匀。",
      "zhHint": "酱油后放，防面发硬",
      "stateNote": {
        "visual": "Noodles turn rich amber and coat evenly with thin, shiny film",
        "visualZh": "面条呈琥珀色，表面覆薄亮油膜",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "No pooling of sauce at bottom of bowl",
        "signalZh": "碗底无酱汁积聚"
      }
    },
    {
      "text": "Top with minced zha cai. Serve immediately — no broth, no steam, just bold, chewy, aromatic noodles.",
      "textZh": "撒上榨菜末，立刻上桌——无汤、无热气，唯劲道浓香。",
      "zhHint": "即拌即食，口感巅峰",
      "stateNote": {
        "visual": "Zha cai bits cling to each noodle strand like tiny jewels",
        "visualZh": "榨菜末如碎宝石般附着于每根面条",
        "timeRef": "within 1 minute of final toss",
        "timeRefZh": "最后一拌后1分钟内",
        "signal": "Noodles emit warm, nutty, fermented aroma when stirred",
        "signalZh": "拌动时散发温润坚果与发酵香"
      }
    }
  ],
  "tips": [
    "The noodles must be hot when first oiled — that’s what creates the signature slickness.",
    "Use a wide, shallow bowl for tossing — gives maximum air exposure and prevents clumping.",
    "For authentic texture, avoid overcooking: noodles should have slight resistance ('al dente')."
  ],
  "tipsZh": [
    "首次拌油必须趁热——这是形成标志性顺滑感的关键。",
    "用宽浅碗拌面——增大接触空气面积，防结团。",
    "追求地道口感：面条需保留轻微咬劲（‘al dente’）。"
  ],
  "relatedSlugs": [
    "wuchang-fish-hubei-style",
    "hubei-pork-rib-and-lotus-root-soup"
  ],
  "image": "/images/recipes/wuhan-hot-dry-noodles.webp"
};
