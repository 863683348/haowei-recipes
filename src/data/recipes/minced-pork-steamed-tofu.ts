import type { Recipe } from "@/lib/types";

/** Steamed Tofu with Minced Pork | Rou Mo Zheng Dou Fu (肉末蒸豆腐) — Day batch */
export const minced_pork_steamed_tofu: Recipe = {
  "id": "minced-pork-steamed-tofu",
  "slug": "minced-pork-steamed-tofu",
  "titleEn": "Steamed Tofu with Minced Pork | Rou Mo Zheng Dou Fu",
  "titleZh": "肉末蒸豆腐",
  "pinyin": "ròu mò zhēng dòu fu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version uses soft tofu straight from the tub and a single steam; restaurant versions press the tofu first and finish the dish with a sizzling oil pour.",
  "versionNoteZh": "家庭版直接用盒装嫩豆腐一次蒸成；餐厅版会先压去水分，最后淋一勺热油激香。",
  "tags": [
    "home-style",
    "steamed",
    "tofu",
    "quick",
    "budget"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the dish that gets made when there is half a block of tofu and a handful of mince left in the fridge. It takes longer to boil the water than to assemble, and it is the reliable answer to 'what do we eat with rice tonight'.",
  "storyZh": "冰箱里剩半块豆腐、一把肉末时做的就是这道。组装比烧水还快，是「今晚拿什么配饭」的万能答案。",
  "ingredients": [
    {
      "id": "mt-01",
      "nameEn": "soft tofu",
      "nameZh": "嫩豆腐",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "mt-02",
      "nameEn": "pork mince",
      "nameZh": "猪肉末",
      "amountMetric": "150 g",
      "amountUS": "5.3 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "mt-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "mt-04",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "mt-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "mt-06",
      "nameEn": "cornstarch",
      "nameZh": "生粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "other",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "mt-07",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "mt-08",
      "nameEn": "scallion",
      "nameZh": "葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "mt-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "mt-10",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Cut the tofu into 2 cm slabs and arrange them in a shallow heatproof dish. Sprinkle with a pinch of salt and let them sit 5 minutes.",
      "textZh": "豆腐切 2 厘米厚片，摆入浅口耐热盘，撒少许盐静置 5 分钟。",
      "stateNote": {
        "visual": "A thin film of water beads on the tofu surface and pools at the bottom of the dish.",
        "visualZh": "豆腐表面渗出细水珠，盘底积起一层水。",
        "signal": "Visible water has collected around the slabs",
        "signalZh": "豆腐四周明显出水",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low"
      },
      "tip": "Drain this water off before steaming or the sauce will be watery."
    },
    {
      "text": "Mix the pork mince with half the soy sauce, Shaoxing wine, cornstarch, white pepper and a little minced garlic. Stir in one direction until sticky.",
      "textZh": "猪肉末加一半生抽、料酒、生粉、白胡椒和少许蒜末，顺一个方向搅至起胶。",
      "stateNote": {
        "visual": "The mince goes from loose and crumbly to a cohesive paste that clings to the bowl.",
        "visualZh": "肉末由松散转为抱团、粘住碗壁。",
        "signal": "The paste holds a peak when lifted with chopsticks",
        "signalZh": "筷子挑起能立住不塌",
        "timeRef": "2 minutes",
        "timeRefZh": "约 2 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Spread the seasoned pork over the tofu in an even layer, pressing lightly so it adheres.",
      "textZh": "把调好味的肉末均匀铺在豆腐上，轻压使其贴合。",
      "stateNote": {
        "visual": "A continuous pink-grey layer covers the white tofu with no bare patches.",
        "visualZh": "连续灰粉色肉层覆盖白色豆腐，无露白。",
        "signal": "The mince does not slide off when the dish is tilted slightly",
        "signalZh": "盘子微倾时肉末不滑动",
        "timeRef": "2 minutes",
        "timeRefZh": "约 2 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Steam over high heat for 12 minutes until the pork is set and cooked through.",
      "textZh": "大火蒸 12 分钟至肉末定型熟透。",
      "stateNote": {
        "visual": "The pork turns uniformly pale brown and firm; the tofu around it looks glossy and slightly swollen.",
        "visualZh": "肉末整体转为浅褐并定形；周围豆腐发亮微鼓。",
        "signal": "No pink remains in the thickest part of the mince layer",
        "signalZh": "肉层最厚处无粉色",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Pour off the excess liquid into a small pan, add the remaining soy sauce and oyster sauce, boil 30 seconds, then pour it back over the dish. Finish with scallion and sesame oil.",
      "textZh": "把盘中多余汤汁滗入小锅，加剩余生抽和蚝油煮 30 秒，再淋回盘中，撒葱花、淋香油。",
      "stateNote": {
        "visual": "The sauce reduces slightly and turns glossy, coating the pork and running into the tofu seams.",
        "visualZh": "汤汁略收并变亮，裹住肉末、流进豆腐缝里。",
        "signal": "Bubbles turn from large and fast to small and even",
        "signalZh": "气泡由大急转为细小均匀",
        "timeRef": "30-60 seconds",
        "timeRefZh": "30-60 秒",
        "heat": "medium-high"
      }
    }
  ],
  "tips": [
    "Firm tofu also works but needs 3 extra minutes; soft tofu gives the silkiest result.",
    "Add a spoon of doubanjiang to the pork for a Sichuan spin.",
    "Serve it straight from the steaming dish — the tofu breaks if you try to plate it."
  ],
  "tipsZh": [
    "老豆腐也能做，多蒸 3 分钟；嫩豆腐口感最滑。",
    "肉末里加一勺豆瓣酱就是川味版。",
    "连蒸盘上桌，豆腐一倒扣就碎。"
  ],
  "relatedSlugs": [
    "home-style-tofu",
    "clay-pot-tofu",
    "minced-pork-steamed-egg",
    "mapo-tofu"
  ],
  "image": "/images/recipes/home-style-tofu.webp"
};
