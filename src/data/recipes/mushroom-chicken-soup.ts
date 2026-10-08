import type { Recipe } from "@/lib/types";

/** Mushroom Chicken Soup (菌菇鸡汤) (菌菇鸡汤) — Day batch */
export const mushroom_chicken_soup: Recipe = {
  "id": "mushroom-chicken-soup",
  "slug": "mushroom-chicken-soup",
  "titleEn": "Mushroom Chicken Soup (菌菇鸡汤)",
  "titleZh": "菌菇鸡汤",
  "pinyin": "jūn gū jī tāng",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version: a whole chicken simmered with dried shiitake and fresh mushrooms, seasoned only at the end with salt. Restaurant version uses a double-boiler (炖盅) for 2-3 hours, adds dried scallops and a slice of Jinhua ham, and strains the broth until it is completely clear.",
  "versionNoteZh": "家庭版：整鸡与干香菇、鲜菌同炖，最后才下盐。餐厅版用炖盅隔水炖 2-3 小时，加干贝和一片金华火腿，并把汤滤至完全清澈。",
  "tags": [
    "soup",
    "cantonese",
    "comfort-food",
    "medium",
    "umami"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the soup Chinese families make when someone needs to be restored. The pairing is almost scientific: chicken supplies glutamate, dried shiitake supplies guanylate, and together they produce a savory depth neither one reaches alone. Cantonese cooks insist on two rules — blanch the chicken first so the broth stays clean, and never salt until the very end, because salt added early tightens the meat and stops the flavor from moving into the water.",
  "storyZh": "这是中国家庭里有人需要补一补时做的汤。这个搭配近乎科学：鸡肉提供谷氨酸，干香菇提供鸟苷酸，两者合一的鲜味深度是各自都到不了的。粤菜师傅坚持两条规矩——鸡先焯水保证汤清，盐一定最后放，因为早放盐会让肉收紧、鲜味就进不到汤里。",
  "ingredients": [
    {
      "id": "mcs-chicken",
      "nameEn": "whole chicken or chicken thighs on the bone",
      "nameZh": "整鸡或带骨鸡腿",
      "amountMetric": "1 kg",
      "amountUS": "about 2.2 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "mcs-shiitake",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "amountMetric": "8 caps (about 25 g)",
      "amountUS": "about 0.9 oz",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-shiitake",
      "note": "Save the soaking liquid — strained, it is the most flavorful part of this soup.",
      "noteZh": "泡香菇的水留着——滤净后是这锅汤最有味的部分。"
    },
    {
      "id": "mcs-fresh",
      "nameEn": "mixed fresh mushrooms (button, oyster, shiitake)",
      "nameZh": "鲜菌菇（口蘑、平菇、鲜香菇）",
      "amountMetric": "250 g",
      "amountUS": "about 9 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "mcs-ginger",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "生姜，切片",
      "amountMetric": "5 slices",
      "amountUS": "5 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "mcs-scallion",
      "nameEn": "scallions, tied into a knot",
      "nameZh": "小葱，打结",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "mcs-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "mcs-water",
      "nameEn": "cold water",
      "nameZh": "冷水",
      "amountMetric": "2.5 L",
      "amountUS": "about 10.5 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "mcs-pepper",
      "nameEn": "ground white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "mcs-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1.5 tsp",
      "amountUS": "1.5 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cover the dried shiitake with 500 ml warm water and soak for 30 minutes until the caps are fully soft. Lift the mushrooms out, squeeze them gently, and strain the soaking liquid through a fine sieve, leaving the last gritty tablespoon behind.",
      "textZh": "干香菇加 500 毫升温水泡 30 分钟至菇伞完全变软。捞出香菇轻捏，泡菇水用细筛过滤，碗底最后那勺带沙的不要。",
      "stateNote": {
        "visual": "Caps swell from wrinkled and hard to plump and pliable; the soaking water turns a deep amber-brown",
        "visualZh": "菇伞由干瘪发硬变为饱满柔韧，泡菇水转成深琥珀褐色",
        "timeRef": "30 minutes in warm water",
        "timeRefZh": "温水泡 30 分钟",
        "signal": "Squeeze a cap — the center is soft all the way through with no hard core",
        "signalZh": "捏一下菇伞——中心完全变软，无硬芯"
      }
    },
    {
      "text": "Put the chicken in a pot, cover with cold water, and bring to a boil. Boil for 3 minutes, then pour everything out and rinse the chicken under cold water. Wash the pot too. This removes the scum that would otherwise cloud the soup permanently.",
      "textZh": "鸡放入锅中加冷水没过，烧开后煮 3 分钟，整锅倒掉并用冷水冲洗鸡身。锅也洗一下。这能去除会让汤永久浑浊的血沫。",
      "stateNote": {
        "visual": "Thick grey-brown foam collects on the surface and the water turns cloudy; the rinsed skin looks clean and taut",
        "visualZh": "表面聚起厚厚的灰褐色浮沫、水变浑；冲净后的鸡皮干净紧致",
        "heat": "high",
        "timeRef": "3 minutes at a boil",
        "timeRefZh": "沸煮 3 分钟",
        "signal": "No pink liquid remains in the cavity and the rinsed surface is no longer slippery",
        "signalZh": "腹腔内无粉色血水，冲洗过的表面不再滑腻"
      }
    },
    {
      "text": "Return the clean chicken to the clean pot with 2.5 L cold water, the ginger, scallion knot, Shaoxing wine, soaked shiitake, and the strained soaking liquid. Bring to a boil, then immediately drop to the lowest simmer.",
      "textZh": "净鸡回净锅，加 2.5 升冷水、姜片、葱结、黄酒、泡发香菇和滤净的泡菇水。烧开后立刻转最小火微沸。",
      "stateNote": {
        "visual": "Surface shows only the occasional lazy bubble breaking; a few beads of clear fat gather at the rim",
        "visualZh": "汤面只有偶尔懒懒地冒一个泡，锅边聚起几颗清亮的油珠",
        "heat": "low",
        "timeRef": "60 minutes at the lowest simmer",
        "timeRefZh": "最小火微沸 60 分钟",
        "signal": "The broth is already pale gold and smells savory; the liquid level has dropped by less than a fifth",
        "signalZh": "汤色已呈淡金、香气咸鲜；水位下降不到五分之一"
      }
    },
    {
      "text": "Simmer for 60 minutes, skimming the surface two or three times. Then add the fresh mushrooms and continue for 15 more minutes. Fresh mushrooms go in late on purpose — added at the start they dissolve and cloud the broth.",
      "textZh": "微沸 60 分钟，中途撇沫两三次。然后下鲜菌菇再煮 15 分钟。鲜菌菇特意后放——一开始下会煮化并使汤变浑。",
      "stateNote": {
        "visual": "Broth has deepened to a clear amber-gold; fresh mushroom caps are plump and intact, floating just under the surface",
        "visualZh": "汤色加深为清亮的金琥珀色；鲜菇伞饱满完整，浮在汤面之下",
        "heat": "low",
        "timeRef": "60 + 15 minutes",
        "timeRefZh": "60 + 15 分钟",
        "signal": "A chopstick pierces the thigh with no resistance and the juices run clear, not pink",
        "signalZh": "筷子能毫无阻力地扎透鸡腿，流出的汁水清澈不泛红"
      }
    },
    {
      "text": "Only now add salt and white pepper. Taste and adjust — the soup should taste clean and deeply savory, not salty. Skim the last of the surface fat with a spoon if you want it lighter, then ladle into bowls, making sure each one gets chicken, dried shiitake, and fresh mushrooms.",
      "textZh": "此刻才加盐和白胡椒。尝味调整——汤应清鲜醇厚，而不是咸。想更清爽可用勺撇去表层浮油，然后分盛入碗，每碗都要有鸡、干香菇和鲜菌菇。",
      "stateNote": {
        "visual": "Clear amber broth, chicken skin translucent and pale gold, shiitake caps dark and glossy, fresh mushrooms plump",
        "visualZh": "汤色清亮琥珀，鸡皮半透明呈浅金，香菇伞深褐油亮，鲜菇饱满",
        "signal": "The broth coats the tongue and the savory note lingers for several seconds after swallowing",
        "signalZh": "汤液挂舌，咽下后鲜味能停留数秒"
      }
    }
  ],
  "tips": [
    "Blanching the chicken and washing the pot is not optional. It is the whole reason Cantonese soups look clear.",
    "Salt last. Salt added early firms the protein and keeps the flavor in the meat rather than the broth.",
    "Keep the shiitake soaking liquid, strained. It carries more umami than the mushrooms themselves.",
    "Add fresh mushrooms only in the last 15 minutes so they keep their shape and the broth stays clear.",
    "Never let it boil after the first blanch. A rolling boil emulsifies the fat and turns the soup milky."
  ],
  "tipsZh": [
    "鸡焯水、锅洗净，这步不能省。粤式汤清亮的根源就在这里。",
    "盐最后放。早放盐会让蛋白收紧，鲜味留在肉里而进不了汤。",
    "泡香菇的水滤净后留用。它的鲜味比香菇本身还足。",
    "鲜菌菇只在最后 15 分钟下，才能保形、汤才清。",
    "首次焯水后绝不能再滚沸。一滚就把脂肪乳化，汤就变奶白。"
  ],
  "relatedSlugs": [
    "chicken-mushroom-stew",
    "shiitake-mushroom-chicken-stew",
    "huai-yang-yam-chicken-soup",
    "chicken-broth-noodle-soup"
  ],
  "image": "/images/recipes/shiitake-mushroom-chicken-stew.webp"
};
