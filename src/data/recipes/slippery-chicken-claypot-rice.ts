import type { Recipe } from "@/lib/types";

/** Cantonese Slippery Chicken Claypot Rice (滑鸡煲仔饭) — Seed batch */
export const slippery_chicken_claypot_rice: Recipe = {
  "id": "hua-ji-bao-zai-fan",
  "slug": "slippery-chicken-claypot-rice",
  "titleEn": "Cantonese Slippery Chicken Claypot Rice",
  "titleZh": "滑鸡煲仔饭",
  "pinyin": "huá jī bāo zǎi fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Foshan",
  "regionZh": "佛山",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips cornstarch-heavy slurry — chicken stays tender using velveting with egg white and minimal marinade, just like my grandmother did in her Foshan kitchen.",
  "versionNoteZh": "家常版不依赖大量淀粉勾芡——仅用蛋清与少量腌料‘上浆’，如我佛山祖母当年所做，鸡肉滑嫩不腻。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Foshan made this every Lunar New Year’s Eve — she’d marinate free-range chicken thighs overnight in ginger, Shaoxing wine, and a whisper of oyster sauce, then stir-fry them quickly before layering over rice. She said the ‘slippery’ texture meant prosperity would glide smoothly into the new year.",
  "storyZh": "我佛山的祖母每逢除夕必做这道菜——她会用姜、绍兴酒和少许蚝油将走地鸡腿肉腌一整夜，快炒后铺在米饭上。她说‘滑’是顺遂，寓意新年诸事顺畅。",
  "ingredients": [
    {
      "id": "hj-01",
      "nameEn": "boneless, skinless chicken thighs",
      "nameZh": "去骨鸡腿肉",
      "pinyin": "qù gǔ jī tuǐ ròu",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Cut into 1.5 cm cubes; pat dry before marinating",
      "noteZh": "切1.5厘米见方丁，腌前吸干水分"
    },
    {
      "id": "hj-02",
      "nameEn": "ginger, peeled and minced",
      "nameZh": "生姜末",
      "pinyin": "shēng jiāng mò",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "hj-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "hj-04",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "hj-05",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "pinyin": "dàn qīng",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "dairy",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "In a bowl, combine chicken, ginger, Shaoxing wine, oyster sauce, and egg white. Mix gently with chopsticks until liquid is fully absorbed and chicken feels slick — marinate 20 minutes at room temperature.",
      "textZh": "将鸡丁、姜末、绍兴酒、蚝油、蛋清放入碗中，用筷子朝同一方向轻拌至液体全被吸收、鸡丁表面滑润，室温腌20分钟。",
      "zhHint": "蛋清上浆是滑嫩关键"
    },
    {
      "text": "Rinse jasmine rice and soak in cold water for 20 minutes. Drain well. Heat claypot over medium-low heat for 1 minute, add 1 tsp oil, then stir-fry marinated chicken until just opaque (no browning), ~2 minutes.",
      "textZh": "大米淘净冷浸20分钟，沥干。砂锅中小火预热1分钟，加1茶匙油，下腌好的鸡丁快速滑炒至断生（不焦不褐），约2分钟。",
      "zhHint": "鸡丁只炒至刚熟，余热继续烹制",
      "stateNote": {
        "visual": "Chicken turns pale ivory; surface glistens, no grey or dry edges",
        "visualZh": "鸡肉呈淡象牙色；表面油亮，无灰白或干边",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Edges curl slightly; juices remain clear, not milky",
        "signalZh": "边缘微卷；渗出汁液清澈，非乳白"
      }
    },
    {
      "text": "Remove chicken and set aside. Add soaked rice and 360 ml (1 ½ cups) boiling water to pot. Bring to boil, cover, reduce heat to low, and simmer 12 minutes.",
      "textZh": "将鸡丁盛出备用。砂锅中加入沥干大米与360毫升（1½杯）沸水，大火烧开后盖盖，转最小火焖12分钟。",
      "zhHint": "沸水加速米粒吸水"
    },
    {
      "text": "Uncover, arrange chicken evenly over rice. Cover again and cook on low heat for 6 more minutes — steam re-cooks chicken gently and infuses rice with savory aroma.",
      "textZh": "揭盖，将鸡丁均匀铺于饭面，盖盖续焖6分钟——蒸汽二次加热鸡肉，同时将鲜香沁入米饭。",
      "zhHint": "二次焖蒸，鲜味交融"
    },
    {
      "text": "Turn off heat. Rest covered for 5 minutes. Drizzle with extra oyster sauce and sesame oil (optional). Garnish with scallion greens. Serve hot with crispy guō bā.",
      "textZh": "关火，加盖静置5分钟。淋少许蚝油与芝麻油（可选），撒葱绿。趁热连锅巴一同上桌。",
      "zhHint": "静置后锅巴成型更完整",
      "stateNote": {
        "visual": "Rice grains are separate and glossy; chicken is tender, juicy, and fully heated through",
        "visualZh": "米粒分明油亮；鸡肉柔嫩多汁，完全热透",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No steam escapes when lid is lifted; aroma is rich and earthy",
        "signalZh": "掀盖无蒸汽逸出；香气浓郁醇厚"
      }
    }
  ],
  "tips": [
    "Velveting works best with chicken thighs — their higher fat content keeps them tender even if slightly overcooked.",
    "If you can’t find Shaoxing wine, substitute dry sherry (not cooking wine) — it’s closer in depth and sweetness.",
    "Never stir rice after adding water — disturbance breaks starch chains and causes mushiness."
  ],
  "tipsZh": [
    "上浆以鸡腿肉为佳——脂肪含量高，即使略过火仍柔嫩。",
    "若无绍兴酒，可用干雪利酒替代（非料酒），风味更接近其醇厚微甜。",
    "加水后切勿搅动米饭——破坏淀粉链，易致粘烂。"
  ],
  "relatedSlugs": [
    "lap-cheong-claypot-rice"
  ],
  "image": "/images/recipes/slippery-chicken-claypot-rice.webp"
};
