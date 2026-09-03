import type { Recipe } from "@/lib/types";

/** Air Fryer Spring Rolls (空气炸锅春卷) — Day batch */
export const air_fryer_spring_rolls: Recipe = {
  "id": "air-fryer-spring-rolls",
  "slug": "air-fryer-spring-rolls",
  "titleEn": "Air Fryer Spring Rolls",
  "titleZh": "空气炸锅春卷",
  "pinyin": "kōng qì zhá guō chūn juǎn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version brushes with oil instead of deep-frying—less greasy, still crispy.",
  "versionNoteZh": "家常版刷油代替油炸—— less 油腻，同样酥脆。",
  "tags": [
    "30-min",
    "weeknight",
    "air-fryer",
    "appetizer"
  ],
  "dietary": [
    "none"
  ],
  "story": "Spring rolls are the ultimate party appetizer. Air-frying gives that golden, crackly exterior without the oil bath of deep-frying.",
  "storyZh": "春卷是终极派对开胃菜。空气炸锅能做出金黄酥脆的外皮，无需深炸的油浴。",
  "ingredients": [
    {
      "id": "asr-01",
      "nameEn": "spring roll wrappers",
      "nameZh": "春卷皮",
      "amountMetric": "8 sheets",
      "amountUS": "8 sheets",
      "category": "staple",
      "pantry": "asian"
    },
    {
      "id": "asr-02",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "asr-03",
      "nameEn": "Napa cabbage",
      "nameZh": "大白菜",
      "amountMetric": "100 g",
      "amountUS": "1.5 cups shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "napa-cabbage"
    },
    {
      "id": "asr-04",
      "nameEn": "carrot",
      "nameZh": "胡萝卜",
      "amountMetric": "1 medium",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "asr-05",
      "nameEn": "soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "asr-06",
      "nameEn": "neutral oil",
      "nameZh": "中性油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Heat oil in wok. Add ground pork, stir-fry until no pink remains.",
      "textZh": "热锅下油，炒猪肉末至无粉色。",
      "stateNote": {
        "visual": "Pork turns from pink to opaque white-gray",
        "visualZh": "猪肉从粉红变不透明白灰色",
        "signal": "No pink spots remain in meat"
      }
    },
    {
      "text": "Check doneness and adjust cooking time as needed.",
      "textZh": "检查熟度并根据需要调整烹饪时间。",
      "stateNote": {
        "visual": "Food is cooked through with desired texture",
        "visualZh": "食物完全熟透，质地符合预期",
        "signal": "Internal temperature or visual cue confirms doneness"
      }
    },
    {
      "text": "Transfer to serving plate. Garnish and serve immediately while hot.",
      "textZh": "移至餐盘，装饰后立即热食。",
      "stateNote": {
        "visual": "Dish is steaming and appetizing",
        "visualZh": "菜品热气腾腾，食欲诱人",
        "signal": "Aroma is prominent and inviting"
      }
    },
    {
      "text": "Adjust cooking time based on your air fryer model and desired crispiness level.",
      "textZh": "根据空气炸锅型号和 desired 酥脆度调整烹饪时间。",
      "stateNote": {
        "visual": "Food approaches desired doneness",
        "visualZh": "食物接近 desired 熟度",
        "signal": "Check doneness by piercing with a fork"
      }
    },
    {
      "text": "Adjust cooking time based on your air fryer model and desired crispiness level.",
      "textZh": "根据空气炸锅型号和 desired 酥脆度调整烹饪时间。",
      "stateNote": {
        "visual": "Food approaches desired doneness",
        "visualZh": "食物接近 desired 熟度",
        "signal": "Check doneness by piercing with a fork"
      }
    }
  ],
  "tips": [
    "Don't overfill—wrappers will burst",
    "Brush oil on all sides for even browning",
    "Serve immediately with sweet chili sauce"
  ],
  "tipsZh": [
    "不要包太满——皮会破",
    "三面刷油确保均匀上色",
    "配甜辣酱立即食用"
  ],
  "relatedSlugs": [
    "homestyle-spring-rolls",
    "chinese-fries"
  ],
  "image": "/images/recipes/homestyle-spring-rolls.webp"
};
