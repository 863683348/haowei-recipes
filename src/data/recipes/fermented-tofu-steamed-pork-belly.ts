import type { Recipe } from "@/lib/types";

/** Steamed Pork Belly with Fermented Bean Curd | Fu Ru Zheng Wu Hua Rou (腐乳蒸五花肉) — Day batch */
export const fermented_tofu_steamed_pork_belly: Recipe = {
  "id": "fermented-tofu-steamed-pork-belly",
  "slug": "fermented-tofu-steamed-pork-belly",
  "titleEn": "Steamed Pork Belly with Fermented Bean Curd | Fu Ru Zheng Wu Hua Rou",
  "titleZh": "腐乳蒸五花肉",
  "pinyin": "fǔ rǔ zhēng wǔ huā ròu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version uses red fermented bean curd and a 35-minute steam; restaurant versions add a layer of taro or preserved mustard greens and steam for over an hour.",
  "versionNoteZh": "家庭版用红腐乳蒸 35 分钟；餐厅版会垫芋头或梅干菜并蒸一小时以上。",
  "tags": [
    "cantonese",
    "steamed",
    "pork-belly",
    "umami",
    "rice-pairing"
  ],
  "dietary": [
    "none"
  ],
  "story": "Red fermented bean curd does for pork what miso does for fish: it seasons, colours and tenderises all at once. This is a five-ingredient dish that tastes like it simmered all afternoon, and it is ready in under an hour.",
  "storyZh": "红腐乳对猪肉的作用，就像味噌对鱼：同时调味、上色、嫩化。五样材料的菜，吃起来像炖了一下午，实际不到一小时。",
  "ingredients": [
    {
      "id": "fb-01",
      "nameEn": "pork belly, sliced 5 mm thick",
      "nameZh": "五花肉片（5 毫米厚）",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "fb-02",
      "nameEn": "red fermented bean curd",
      "nameZh": "红腐乳",
      "amountMetric": "3 cubes",
      "amountUS": "3 cubes",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "fb-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "fb-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "fb-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "fb-06",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "fb-07",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "15 g",
      "amountUS": "1 knob",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "fb-08",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "fb-09",
      "nameEn": "scallion",
      "nameZh": "葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Mash the fermented bean curd cubes with 1 tbsp of their brine, soy sauce, Shaoxing wine, rock sugar, five-spice, minced garlic and ginger into a smooth red paste.",
      "textZh": "红腐乳连 1 汤匙腐乳汁压碎，加生抽、料酒、冰糖、五香粉、蒜末、姜末调成顺滑红酱。",
      "stateNote": {
        "visual": "The mixture becomes a uniform brick-red sauce with no visible curd lumps.",
        "visualZh": "酱体呈均匀砖红，看不到腐乳颗粒。",
        "signal": "The spoon leaves a clean streak on the bowl bottom",
        "signalZh": "勺子划过碗底留下干净痕迹",
        "timeRef": "3 minutes",
        "timeRefZh": "约 3 分钟",
        "heat": "low"
      },
      "tip": "Include some of the brine — it carries most of the aroma."
    },
    {
      "text": "Toss the pork belly slices with the paste until each one is evenly coated, then marinate 20 minutes.",
      "textZh": "五花肉片与腐乳酱拌匀，每片都裹到，腌 20 分钟。",
      "stateNote": {
        "visual": "The slices turn a dull red-brown and the marinade clings rather than running off.",
        "visualZh": "肉片转为暗红棕，酱汁附着而非流走。",
        "signal": "No pale fat patches remain visible",
        "signalZh": "看不到白色肥肉斑",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Arrange the slices slightly overlapping in a shallow heatproof dish, pouring any remaining sauce over the top.",
      "textZh": "肉片略微叠压码入浅口耐热盘，余下酱汁浇在上面。",
      "stateNote": {
        "visual": "A single loose layer with thin gaps so steam moves through; the sauce pools at the base.",
        "visualZh": "单层码放留有细缝便于蒸汽穿透，酱汁积在底部。",
        "signal": "Slices are not stacked more than one deep",
        "signalZh": "肉片没有叠超过一层厚",
        "timeRef": "3 minutes",
        "timeRefZh": "约 3 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Steam over high heat for 35 minutes, until the fat layer turns translucent and the meat gives easily to a chopstick.",
      "textZh": "大火蒸 35 分钟，至肥肉层变透明、筷子轻压即入。",
      "stateNote": {
        "visual": "The white fat has turned glassy and the sauce has thinned into a glossy red liquid around the meat.",
        "visualZh": "白色肥肉转为玻璃样透明，酱汁化成亮红汤汁围住肉片。",
        "signal": "A chopstick slides through the lean layer without resistance",
        "signalZh": "筷子无阻力穿过瘦肉层",
        "timeRef": "35 minutes",
        "timeRefZh": "35 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Scatter the scallion over, let it rest 3 minutes, and serve with the sauce spooned over rice.",
      "textZh": "撒葱花，静置 3 分钟，连汤汁一起浇饭上桌。",
      "stateNote": {
        "visual": "The sauce has thickened slightly and coats the back of a spoon; the scallion stays bright green.",
        "visualZh": "汤汁略稠能挂勺，葱花保持翠绿。",
        "signal": "The surface of the sauce shows a thin layer of clear rendered fat",
        "signalZh": "汤面浮一层清亮猪油",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "White fermented bean curd gives a milder, saltier result; red gives colour and sweetness.",
    "Add a bed of taro or potato underneath to soak up the sauce.",
    "Slice the belly when it is partly frozen for clean, even 5 mm slices."
  ],
  "tipsZh": [
    "白腐乳更咸更清淡，红腐乳上色带甜。",
    "底下垫芋头或土豆吸汁，非常好吃。",
    "五花肉半冻时再切，能切出均匀 5 毫米片。"
  ],
  "relatedSlugs": [
    "fermented-tofu-braised-pork",
    "steamed-pork-rice-flour",
    "suan-ni-bai-rou",
    "meicai-kourou"
  ],
  "image": "/images/recipes/suan-ni-bai-rou.webp"
};
