import type { Recipe } from "@/lib/types";

/** Tiger-Skin Pepper Stuffed with Pork (虎皮青椒酿肉) (虎皮青椒酿肉) — Day batch */
export const tiger_skin_pepper_stuffed_pork: Recipe = {
  "id": "tiger-skin-pepper-stuffed-pork",
  "slug": "tiger-skin-pepper-stuffed-pork",
  "titleEn": "Tiger-Skin Pepper Stuffed with Pork (虎皮青椒酿肉)",
  "titleZh": "虎皮青椒酿肉",
  "pinyin": "hǔ pí qīng jiāo niàng ròu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan",
  "regionZh": "湖南",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version stuffs mild or medium peppers. Restaurant versions sometimes use very hot peppers and deep-fry first.",
  "versionNoteZh": "家常版用不太辣的青椒。餐厅版有时用猛辣青椒且先过油。",
  "tags": [
    "quick",
    "spicy",
    "hunan",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "The 'tiger skin' (虎皮) comes from blistering the pepper skin in a dry pan until it chars in spots — creating a smoky, wrinkled surface that soaks up sauce. Hollowed and stuffed with spiced pork, it's a Hunan home classic that bridges the gap between vegetable side and main dish.",
  "storyZh": "'虎皮'是青椒在干锅里煎出焦斑、表皮起皱的效果，能吸满酱汁。挖空酿入调味猪肉，是湖南家常的过渡菜——像配菜又像主菜。",
  "ingredients": [
    {
      "id": "tspep-01",
      "nameEn": "large green chili peppers",
      "nameZh": "青椒",
      "amountMetric": "5 large",
      "amountUS": "5 large",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tspep-02",
      "nameEn": "ground pork (20% fat)",
      "nameZh": "猪肉末（肥瘦2:8）",
      "amountMetric": "180 g",
      "amountUS": "6 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "tspep-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tspep-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tspep-05",
      "nameEn": "doubanjiang",
      "nameZh": "郫县豆瓣酱",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "tspep-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "tspep-07",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "tspep-08",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut off the top of each pepper and remove seeds and membrane. Set aside.",
      "textZh": "青椒去蒂去籽，挖空内部，备用。",
      "stateNote": {
        "visual": "pepper shells are hollow cups with intact bottoms",
        "visualZh": "青椒壳成空心杯状，底部完整",
        "signal": "if the bottom punctures, start over — you need a container",
        "signalZh": "底部破了就重来——需要能装的容器"
      }
    },
    {
      "text": "Mix pork with half the garlic, soy sauce, sesame oil, and sugar. Stir until sticky.",
      "textZh": "猪肉末加一半蒜末、生抽、香油、糖，搅拌至起胶。"
    },
    {
      "text": "Stuff each pepper generously with the pork mixture, packing it in tightly. Shake off excess.",
      "textZh": "每个青椒酿满肉馅，压实，抖掉多余。"
    },
    {
      "text": "Heat oil in a non-stick skillet over medium-high. Place peppers stuffed-side down. Fry undisturbed 3 min until the skin blisters and chars in spots — this is the 'tiger skin'.",
      "textZh": "锅热油，中大火，酿面朝下放入青椒。不翻动煎3分钟，直到表皮起泡起焦斑——这就是'虎皮'。",
      "stateNote": {
        "visual": "green skin develops dark blisters and char marks",
        "visualZh": "青椒皮出现深色气泡和焦斑",
        "signal": "tiger skin forms when the skin dehydrates and blisters — don't flip too early",
        "signalZh": "虎皮形成需要表皮脱水起泡——别急着翻"
      }
    },
    {
      "text": "Flip peppers. Add remaining garlic and doubanjiang. Pour in ¼ cup water. Cover and cook 6 min, flipping once halfway.",
      "textZh": "翻面，下剩余蒜末和豆瓣酱，加半碗水。盖盖焖6分钟，中途翻一次。",
      "stateNote": {
        "visual": "sauce darkens, pork is cooked through, peppers are tender",
        "visualZh": "酱汁变深，肉熟透，青椒变软",
        "signal": "internal temperature of pork reaches 71°C / 160°F — no pink when cut",
        "signalZh": "猪肉内部达71°C——切开无粉红"
      }
    },
    {
      "text": "Uncover, increase heat, and reduce sauce to coat the peppers. Serve immediately.",
      "textZh": "开盖大火收汁，包裹青椒。趁热上桌。"
    }
  ],
  "tips": [
    "Choose peppers that stand upright when filled — uniform shape cooks evenly.",
    "If your peppers are very hot, soak in cold water for 10 min before stuffing to mellow the heat.",
    "The tiger skin should be blistered but not burnt — char adds flavor, bitterness ruins the dish."
  ],
  "tipsZh": [
    "选能立住的青椒——形状均匀受热好。",
    "辣青椒可冷水泡10分钟减辣。",
    "虎皮要起泡但不能焦——焦香是风味，焦苦毁菜。"
  ],
  "relatedSlugs": [
    "chopped-chili-steamed-eggplant",
    "mapo-tofu",
    "twice-cooked-pork"
  ],
  "image": "/images/recipes/tiger-skin-pepper-stuffed-pork.webp"
};
