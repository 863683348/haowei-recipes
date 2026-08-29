import type { Recipe } from "@/lib/types";

/** Electric Rice Cooker Claypot-Style Rice (电饭煲焖饭) — Seed batch */
export const electric_rice_cooker_claypot_style_rice: Recipe = {
  "id": "dian-fan-bao-men-fan",
  "slug": "electric-rice-cooker-claypot-style-rice",
  "titleEn": "Electric Rice Cooker Claypot-Style Rice",
  "titleZh": "电饭煲焖饭",
  "pinyin": "diàn fàn bǎo mèn fàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses gentle steaming in the rice cooker instead of high-heat claypot charring — safer for daily use and yields tender, fragrant rice with no burnt bottom.",
  "versionNoteZh": "家庭版改用电饭煲焖煮代替砂锅明火焦香，更安全省心，米饭软润入味，无糊底风险。",
  "tags": [
    "30-min",
    "weeknight",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Yangpu District, Shanghai, taught me this when I was 12 — she’d layer leftover char siu and shiitakes into cold rice, press ‘cook’, and serve it piping hot with pickled mustard greens. She said, ‘A good one-pot meal feeds the body and calms the rush of city life.’",
  "storyZh": "我上海杨浦区的阿姨在我12岁时教我这道菜——她把剩叉烧和香菇铺在冷米饭上，按下‘煮饭’键，出锅就配雪菜上桌。她说：‘一锅好饭，养身也安神。’",
  "ingredients": [
    {
      "id": "rf-01",
      "nameEn": "short-grain rice",
      "nameZh": "短粒大米",
      "pinyin": "duǎn lì dà mǐ",
      "amountMetric": "300 g",
      "amountUS": "1 ½ cups",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until water runs clear to remove excess starch",
      "noteZh": "淘洗至水清，去除多余淀粉"
    },
    {
      "id": "rf-02",
      "nameEn": "boneless pork shoulder, thinly sliced",
      "nameZh": "猪梅肉（薄片）",
      "pinyin": "zhū méi ròu",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute pork belly if preferred — blanch first to reduce grease",
      "noteZh": "可选五花肉，需先焯水去腻"
    },
    {
      "id": "rf-03",
      "nameEn": "dried shiitake mushrooms, rehydrated & sliced",
      "nameZh": "干香菇（泡发切片）",
      "pinyin": "gān xiāng gū",
      "amountMetric": "40 g",
      "amountUS": "¼ cup (packed)",
      "category": "produce",
      "pantry": "asian",
      "note": "Soak in warm water 20 min; reserve soaking liquid",
      "noteZh": "温水泡发20分钟；留用泡菇水"
    },
    {
      "id": "rf-04",
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
      "id": "rf-05",
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
      "id": "rf-06",
      "nameEn": "scallions, finely chopped",
      "nameZh": "小葱（切末）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse rice thoroughly and drain. Place in rice cooker inner pot. Add reserved shiitake soaking liquid and enough water to reach 1 cm above rice surface (approx. 360 ml total liquid).",
      "textZh": "将大米淘净沥干，倒入电饭煲内胆；加入泡香菇的水及清水，总液面高出米约1 cm（约360 ml）。",
      "zhHint": "水量关键"
    },
    {
      "text": "Marinate pork slices with light soy sauce, Shaoxing wine, and ½ tsp white pepper for 10 minutes.",
      "textZh": "猪肉片用生抽、绍酒和½茶匙白胡椒粉腌制10分钟。",
      "zhHint": "提前腌制入味"
    },
    {
      "text": "Arrange marinated pork and shiitake slices evenly over rice. Do NOT stir.",
      "textZh": "将腌好的肉片和香菇片均匀铺在米面上，切勿翻拌。",
      "zhHint": "分层不搅动"
    },
    {
      "text": "Close lid and cook on standard ‘white rice’ cycle. When cycle ends, let steam rest 15 minutes without opening.",
      "textZh": "盖上盖子，选择‘白米’模式启动；程序结束后，焖15分钟不开盖。",
      "zhHint": "焖透是关键",
      "stateNote": {
        "visual": "Steam condensing heavily on inner lid; rice grains plump and glistening",
        "visualZh": "内盖凝结大量水珠；米粒饱满油亮",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "No more audible steam hissing; lid feels warm but not hot",
        "signalZh": "无明显嘶嘶声；盖面微烫但不灼手"
      }
    },
    {
      "text": "Fluff rice gently with chopsticks, mixing in top layer. Garnish with scallions.",
      "textZh": "用筷子轻柔拨松米饭，使上层食材与饭粒自然融合，撒上葱末。",
      "zhHint": "轻拨不压碎"
    }
  ],
  "tips": [
    "Use day-old rice if reheating — it absorbs sauce better.",
    "For richer umami, add 1 tsp oyster sauce to marinade.",
    "Always rinse rice — un-rinsed rice makes sticky, gluey texture."
  ],
  "tipsZh": [
    "隔夜饭回焖更吸汁入味。",
    "想增鲜可于腌料中加1茶匙蚝油。",
    "务必淘米，否则易成胶状粘饭。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/electric-rice-cooker-claypot-style-rice.webp"
};
