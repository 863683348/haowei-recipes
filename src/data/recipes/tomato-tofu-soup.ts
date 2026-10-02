import type { Recipe } from "@/lib/types";

/** Tomato and Tofu Soup (番茄豆腐汤) (番茄豆腐汤) — Day batch */
export const tomato_tofu_soup: Recipe = {
  "id": "fan-qie-dou-fu-tang",
  "slug": "tomato-tofu-soup",
  "titleEn": "Tomato and Tofu Soup (番茄豆腐汤)",
  "titleZh": "番茄豆腐汤",
  "pinyin": "fān qié dòu fu tāng",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Eastern China",
  "regionZh": "中国东部",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurant versions thicken with a heavier starch slurry and finish with a swirl of beaten egg; the family version keeps the broth thin and lets the tofu carry the texture.",
  "versionNoteZh": "餐厅版会用较厚的水淀粉勾芡并淋蛋花；家庭版保持清汤，靠豆腐提供口感层次。",
  "tags": [
    "25-min",
    "vegetarian",
    "soup",
    "tofu",
    "light",
    "beginner"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "The first soup I learned to cook on my own: nothing can really go wrong, and it tastes like something you would order. It is still what I make when the fridge holds only tomatoes and a block of tofu.",
  "storyZh": "我学会的第一道汤：几乎不可能失败，却好喝得像外面点的。冰箱里只剩番茄和一块豆腐时，我现在还是做这个。",
  "ingredients": [
    {
      "id": "ing-tofu",
      "nameEn": "soft or medium tofu, cubed",
      "nameZh": "嫩豆腐/中豆腐（切块）",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Soft tofu gives the silky texture this soup is known for.",
      "noteZh": "嫩豆腐才有这汤特有的滑嫩口感。",
      "termKey": "tofu"
    },
    {
      "id": "ing-tomato",
      "nameEn": "ripe tomatoes, cut in wedges",
      "nameZh": "成熟番茄（切块）",
      "amountMetric": "3 medium (400 g)",
      "amountUS": "3 medium (14 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "ing-shiitake",
      "nameEn": "dried shiitake, rehydrated and sliced",
      "nameZh": "干香菇（泡发切片）",
      "amountMetric": "4",
      "amountUS": "4 dried",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-shiitake"
    },
    {
      "id": "ing-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "amountMetric": "8 g",
      "amountUS": "1.5 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ing-cornstarch",
      "nameEn": "cornstarch slurry",
      "nameZh": "水淀粉",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ing-sesame",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "ing-scallion",
      "nameEn": "scallion, chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Bring a pot of water to a boil, add the tofu cubes and blanch 1 minute. Lift out gently and set aside.",
      "textZh": "锅中水烧开，下豆腐块焯 1 分钟。轻轻捞出备用。",
      "stateNote": {
        "visual": "Tofu looks slightly firmer and the water turns faintly cloudy.",
        "visualZh": "豆腐略变挺，水微微发浑。",
        "signal": "Cubes hold their corners when lifted with a slotted spoon.",
        "signalZh": "用漏勺捞起时豆腐仍保持棱角。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high"
      },
      "tip": "Blanching removes the raw bean taste and stops the tofu from breaking up later.",
      "tipZh": "焯水能去豆腥味，也让豆腐后面不容易碎。"
    },
    {
      "text": "Heat 1 tbsp oil over medium-high in a soup pot. Add tomato and ginger, stir-fry 4 minutes until jammy.",
      "textZh": "汤锅加 1 汤匙油中大火加热，下番茄和姜片，炒 4 分钟至出浓酱。",
      "stateNote": {
        "visual": "Tomatoes slump and the oil turns orange-red.",
        "visualZh": "番茄软塌，油色变橙红。",
        "signal": "The mixture holds a spoon-drawn channel for a moment.",
        "signalZh": "勺子划出的沟能短暂保持。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Pour in 1 L hot water and the sliced shiitake. Boil 5 minutes so the mushroom and tomato build the broth.",
      "textZh": "倒入 1 升热水和香菇片，煮 5 分钟让香菇与番茄把汤味撑起来。",
      "stateNote": {
        "visual": "Broth deepens from pale pink to a clear amber-red.",
        "visualZh": "汤色由淡粉转为清亮的琥珀红。",
        "signal": "Shiitake caps look fully rehydrated and glossy.",
        "signalZh": "香菇伞盖完全泡透、表面发亮。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Slide in the blanched tofu, lower to medium-low, and simmer 4 minutes without vigorous stirring.",
      "textZh": "放入焯好的豆腐，转中小火炖 4 分钟，不要用力搅动。",
      "stateNote": {
        "visual": "Tofu edges look translucent and the cubes bob gently.",
        "visualZh": "豆腐边缘呈半透明，块在汤中轻轻浮动。",
        "signal": "Nothing breaks when you swirl the pot instead of stirring.",
        "signalZh": "转锅而不搅拌时豆腐不碎。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-low"
      }
    },
    {
      "text": "Thicken with slurry, season with salt, then finish off the heat with sesame oil and scallion.",
      "textZh": "勾薄芡、加盐调味，关火后淋香油撒葱花。",
      "stateNote": {
        "visual": "Soup has a light sheen; scallion floats bright green.",
        "visualZh": "汤面有淡淡光泽，葱花翠绿浮起。",
        "signal": "The broth coats the ladle instead of running off clean.",
        "signalZh": "汤汁挂在勺上而不是完全流净。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Use the shiitake soaking liquid instead of some of the water for a deeper broth.",
    "Stir by swirling the pot — a spoon will shatter soft tofu.",
    "For a heartier bowl, add a handful of vermicelli in the last 3 minutes."
  ],
  "tipsZh": [
    "用泡香菇的水代替部分清水，汤味更浓。",
    "搅动靠转锅——用勺子会把嫩豆腐搅碎。",
    "想更顶饱，最后 3 分钟加一把粉丝。"
  ],
  "relatedSlugs": [
    "tomato-tofu",
    "three-delicacy-tofu-soup",
    "home-style-tofu",
    "moo-shu-tofu"
  ],
  "image": "/images/recipes/tomato-egg-drop-soup.webp"
};
