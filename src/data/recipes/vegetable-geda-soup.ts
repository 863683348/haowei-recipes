import type { Recipe } from "@/lib/types";

/** Vegetable Geda Tang (Clear, Light & Wholesome Dumpling Soup) (蔬菜疙瘩汤) — Seed batch */
export const vegetable_geda_soup: Recipe = {
  "id": "shucai-gedatang",
  "slug": "vegetable-geda-soup",
  "titleEn": "Vegetable Geda Tang (Clear, Light & Wholesome Dumpling Soup)",
  "titleZh": "蔬菜疙瘩汤",
  "pinyin": "shū cài gē da tāng",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version skips meat entirely — relies on shredded carrots, spinach, and dried shiitake soaking liquid for savory depth and natural sweetness.",
  "versionNoteZh": "家常版全素——靠胡萝卜丝、菠菜与干香菇泡发水提供鲜甜与醇厚感，不依赖荤料。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian",
    "gedat-tang"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My mother in Beijing made this every winter morning when I had a sore throat — she’d rehydrate dried shiitakes overnight, shred carrots paper-thin with a knife (never a grater!), and stir the geda in so gently that each one stayed light as cloud puffs.",
  "storyZh": "小时候我在北京，每到冬天嗓子疼，妈妈清晨就做这道汤——干香菇头天泡发，胡萝卜全凭刀工切出纸般薄丝（绝不用擦丝器！），搅疙瘩时手轻如云，颗颗蓬松似絮。",
  "ingredients": [
    {
      "id": "sh-02",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "pinyin": "gān xiāng gū",
      "amountMetric": "10 g",
      "amountUS": "4–5 caps",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in 250 ml warm water for 20 min; reserve liquid and slice caps thinly.",
      "noteZh": "用250ml温水泡发20分钟；留泡发水，香菇切薄片。"
    },
    {
      "id": "ca-01",
      "nameEn": "carrots",
      "nameZh": "胡萝卜",
      "pinyin": "hú luó bo",
      "amountMetric": "120 g",
      "amountUS": "1 medium (about 1 cup shredded)",
      "category": "produce",
      "pantry": "local",
      "note": "Shred by hand using a sharp knife for finer, more tender strands.",
      "noteZh": "用刀手工切丝，比擦丝器更细嫩。"
    },
    {
      "id": "sp-01",
      "nameEn": "baby spinach",
      "nameZh": "嫩菠菜",
      "pinyin": "nèn bō cài",
      "amountMetric": "80 g",
      "amountUS": "3 cups loosely packed",
      "category": "produce",
      "pantry": "local",
      "note": "Stems removed; leaves washed thoroughly — grit ruins texture.",
      "noteZh": "去老茎，仔细清洗——沙粒影响口感。"
    },
    {
      "id": "fl-03",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "90 g",
      "amountUS": "3/4 cup",
      "category": "staple",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak dried shiitakes in warm water 20 min. Strain soaking liquid through coffee filter or fine mesh; reserve liquid and thinly slice mushrooms.",
      "textZh": "干香菇温水泡发20分钟；滤布或咖啡滤纸过滤泡发水；香菇切薄片备用。",
      "zhHint": "滤泡发水去杂质，汤更清",
      "stateNote": {
        "visual": "Liquid is amber-gold, clear, and intensely fragrant; mushrooms plump and supple.",
        "visualZh": "泡发水呈琥珀金色、澄澈、香气浓郁；香菇饱满柔韧。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Mushrooms feel soft and elastic when pressed — no hard core remains.",
        "signalZh": "轻按香菇柔软有弹性——无硬芯。"
      }
    },
    {
      "text": "Heat oil in pot over medium heat. Sauté shiitake slices and carrot shreds until carrots soften slightly and release sweetness (3–4 min). Do not brown.",
      "textZh": "热油中火煸香香菇片与胡萝卜丝，至胡萝卜微软、甜香溢出（3–4分钟），切勿上色。",
      "zhHint": "煸出甜香，不焦不褐",
      "stateNote": {
        "visual": "Carrot shreds turn translucent at edges; oil glistens with golden hue.",
        "visualZh": "胡萝卜丝边缘变半透明；油泛金光。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium",
        "signal": "Fragrance shifts from earthy to sweet-caramel — no bitter notes.",
        "signalZh": "香气由土腥转为焦糖甜香——无苦味。"
      }
    },
    {
      "text": "Add reserved mushroom liquid and 500 ml water. Bring to gentle simmer. Stir in salt and white pepper. Simmer uncovered 5 minutes to meld flavors.",
      "textZh": "倒入香菇泡发水与500ml清水，煮沸后转小火，加盐与白胡椒粉，敞盖煨5分钟融味。",
      "zhHint": "小火煨出复合鲜味",
      "stateNote": {
        "visual": "Surface shimmers with slow, even bubbles; broth deepens to pale amber.",
        "visualZh": "汤面匀速微泡；汤色渐呈浅琥珀。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Steam rises steadily — broth volume reduces ~10%.",
        "signalZh": "蒸汽匀速上升，汤量减少约十分之一。"
      }
    },
    {
      "text": "Whisk flour with 90 ml cold water until smooth. Rest 2 min. Use chopsticks to flick batter into simmering broth — aim for tiny, rice-grain geda.",
      "textZh": "面粉加冷水搅匀成稀糊，静置2分钟；用筷子快速拨入汤中，形成米粒大小疙瘩。",
      "zhHint": "快拨快散，疙瘩才细小均匀",
      "stateNote": {
        "visual": "Geda form instantly as distinct specks — no strings or trails in broth.",
        "visualZh": "疙瘩入锅即成独立小点——汤中无面线或拖尾。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium-low",
        "signal": "Each flick produces a ‘pop’ sound — indicates proper broth temperature.",
        "signalZh": "每次拨入有轻微‘噗’声——汤温正合适。"
      }
    },
    {
      "text": "Simmer 3 minutes until geda float and swell. Stir in spinach leaves and cook just until wilted (30 sec). Turn off heat. Serve immediately.",
      "textZh": "小火煮3分钟至疙瘩浮起膨润；下菠菜烫至刚软（30秒）即关火，趁热上桌。",
      "zhHint": "菠菜后下，保翠绿与嫩度",
      "stateNote": {
        "visual": "Spinach turns vibrant dark green; geda are plump, white, and suspended evenly.",
        "visualZh": "菠菜转为鲜亮深绿；疙瘩膨润乳白，均匀悬浮。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "Leaves collapse fully but retain sheen — no dull olive color.",
        "signalZh": "叶片完全塌软但泛油光——无暗橄榄色。"
      }
    }
  ],
  "tips": [
    "Hand-cut carrot shreds absorb broth better than grated ones.",
    "Add spinach last — overcooking makes it slimy and dulls color.",
    "For extra umami, add 1 tsp light soy sauce — optional but common in Beijing homes."
  ],
  "tipsZh": [
    "手切胡萝卜丝比擦丝更易吸汤入味。",
    "菠菜最后下锅——煮久易发黏、失翠。",
    "如需增强鲜味，可加1茶匙生抽——非必需，但北京家庭常用。"
  ],
  "relatedSlugs": [
    "tomato-geda-soup",
    "seafood-geda-soup"
  ],
  "image": "/images/recipes/vegetable-geda-soup.webp"
};
