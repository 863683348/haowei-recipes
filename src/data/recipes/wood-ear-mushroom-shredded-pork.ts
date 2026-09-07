import type { Recipe } from "@/lib/types";

/** Wood Ear Mushroom Shredded Pork (木耳炒肉丝) (木耳炒肉丝) — Day batch */
export const wood_ear_mushroom_shredded_pork: Recipe = {
  "id": "wood-ear-mushroom-shredded-pork",
  "slug": "wood-ear-mushroom-shredded-pork",
  "titleEn": "Wood Ear Mushroom Shredded Pork (木耳炒肉丝)",
  "titleZh": "木耳炒肉丝",
  "pinyin": "mù ěr chǎo ròu sī",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "North China (华北)",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version uses rehydrated dried wood ear mushrooms for convenience.",
  "versionNoteZh": "家常版用干木耳泡发后炒制，方便快捷。",
  "tags": [
    "15-min",
    "weeknight",
    "pork",
    "healthy",
    "quick"
  ],
  "dietary": [
    "none"
  ],
  "story": "Mù ěr — wood ear mushroom — is a staple of Chinese home cooking, prized for its satisfying crunch.",
  "storyZh": "木耳——中式家常菜的常客——以其爽脆口感和吸收酱汁的能力著称。",
  "ingredients": [
    {
      "id": "wm-pork",
      "nameEn": "pork tenderloin, julienned",
      "nameZh": "猪里脊切丝",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-tenderloin"
    },
    {
      "id": "wm-wood",
      "nameEn": "dried wood ear mushrooms, rehydrated and torn",
      "nameZh": "干木耳（泡发撕小朵）",
      "amountMetric": "15 g dried (~100 g rehydrated)",
      "amountUS": "½ oz dried (~3.5 oz rehydrated)",
      "category": "produce",
      "pantry": "asian",
      "termKey": "wood-ear"
    },
    {
      "id": "wm-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "wm-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "wm-starch",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "wm-garlic",
      "nameEn": "garlic cloves, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "wm-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "wm-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "¼ tsp",
      "amountUS": "¼ tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak dried wood ear mushrooms in warm water for 20 minutes until plump. Tear into bite-size pieces. Rinse well.",
      "textZh": "干木耳用温水泡发20分钟至饱满。撕成一口大小，冲洗干净。",
      "stateNote": {
        "visual": "Mushrooms are black, gelatinous, and fully expanded",
        "visualZh": "木耳乌黑胶质、完全舒展",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "No hard or crunchy centers remaining"
      }
    },
    {
      "text": "Cut pork into 4 cm × 3 mm strips. Toss with Shaoxing wine and cornstarch. Rest 10 minutes.",
      "textZh": "猪里脊切细丝，加料酒和玉米淀粉抓匀，静置10分钟。",
      "stateNote": {
        "visual": "Pork coated in glossy slurry",
        "visualZh": "肉丝裹上晶莹浆液",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Surface is tacky"
      }
    },
    {
      "text": "Heat oil in a wok over high heat. Add pork and sear 30 seconds. Stir-fry until white.",
      "textZh": "热锅下油，大火烧至冒烟。下肉丝煎30秒，翻炒至变白。",
      "stateNote": {
        "visual": "Pork edges opaque white, fat rendered",
        "visualZh": "肉丝边缘变白，肥肉出油",
        "heat": "high",
        "timeRef": "30-45 seconds",
        "timeRefZh": "30-45 秒",
        "signal": "Pork sizzles and releases from pan"
      }
    },
    {
      "text": "Add garlic and wood ear mushrooms. Stir-fry 1 minute until mushrooms are hot and slightly crispy at edges.",
      "textZh": "下蒜末和木耳，翻炒1分钟至木耳热透、边缘微脆。",
      "stateNote": {
        "visual": "Mushrooms glisten and edges begin to curl slightly",
        "visualZh": "木耳油亮，边缘微卷",
        "heat": "high",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Mushrooms make a characteristic crackling sound"
      }
    },
    {
      "text": "Add soy sauce and salt. Toss 15 seconds. Serve immediately.",
      "textZh": "加生抽和盐，翻匀15秒出锅。",
      "stateNote": {
        "visual": "Glossy, everything well-coated, no pooling liquid",
        "visualZh": "油亮均匀，无积汁",
        "signal": "Aromatics are fragrant, not burnt"
      }
    }
  ],
  "tips": [
    "Rehydrate wood ear mushrooms in warm (not hot) water — hot water makes them slimy.",
    "Wood ear mushrooms have an incredible crunch that holds up well to high-heat stir-frying.",
    "This dish pairs beautifully with congee or plain steamed rice.",
    "Wood ear mushrooms are rich in iron and known in TCM for blood-cleansing properties."
  ],
  "tipsZh": [
    "木耳用温水泡发——热水会让它变黏。",
    "木耳的脆爽口感经得起猛火快炒。",
    "这道菜配粥或 plain 白米饭都很搭。",
    "木耳富含铁，中医认为有养血功效。"
  ],
  "relatedSlugs": [
    "pepper-pork",
    "garlic-sprout-shredded-pork",
    "home-style-pork",
    "pickled-mustard-green-pork-shreds"
  ],
  "image": "/images/recipes/cold-wood-ear.webp"
};
