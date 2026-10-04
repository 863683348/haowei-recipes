import type { Recipe } from "@/lib/types";

/** Cheesy Mashed Potatoes, Chinese Home-Style (芝士土豆泥) (芝士土豆泥) — Day batch */
export const cheesy_mashed_potato: Recipe = {
  "id": "cheesy-mashed-potato",
  "slug": "cheesy-mashed-potato",
  "titleEn": "Cheesy Mashed Potatoes, Chinese Home-Style (芝士土豆泥)",
  "titleZh": "芝士土豆泥",
  "pinyin": "zhi shi tu dou ni",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide (全国)",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version is mashed by hand with a fork, leaving a little texture, and finished under the broiler for a blistered cheese top. Restaurant versions pipe it smooth and bake in individual ramekins.",
  "versionNoteZh": "家庭版用叉子手压，保留一点颗粒感，最后上火烤出焦斑芝士层。餐厅版会过筛到顺滑，分装进小烤盅焗烤。",
  "tags": [
    "potato",
    "vegetarian",
    "kid-friendly",
    "comfort",
    "baked"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This is the dish Chinese parents make when a child refuses to eat plain potatoes. It sits exactly on the border between Chinese home cooking and Western comfort food: steamed potato, a splash of milk, a handful of mozzarella, and five minutes under the broiler. My cousin ate it every week for a year and still asks for it at family dinners.",
  "storyZh": "这是中国家长在孩子不肯吃白水土豆时端出的菜。它正好卡在中餐家常与西式慰藉食物之间：蒸熟的土豆、一点牛奶、一把马苏里拉，上火烤五分钟。我表弟连吃了一年，至今家庭聚餐还点名要。",
  "ingredients": [
    {
      "id": "cmp-1",
      "nameEn": "starchy potatoes, peeled and cubed",
      "nameZh": "土豆（去皮切块）",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cmp-2",
      "nameEn": "unsalted butter",
      "nameZh": "无盐黄油",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "cmp-3",
      "nameEn": "whole milk, warmed",
      "nameZh": "全脂牛奶（温热）",
      "amountMetric": "80 ml",
      "amountUS": "1/3 cup",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "cmp-4",
      "nameEn": "mozzarella cheese, shredded",
      "nameZh": "马苏里拉芝士（刨丝）",
      "amountMetric": "80 g",
      "amountUS": "3/4 cup",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "cmp-5",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "tsp"
    },
    {
      "id": "cmp-6",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "cmp-7",
      "nameEn": "scallion, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cmp-8",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Put the cubed potatoes in a pot, cover with cold salted water by 2 cm, and bring to a boil. Simmer until a knife slides through with no resistance.",
      "textZh": "土豆块入锅，加冷水没过 2 厘米，大火煮开后转中小火，煮到刀能轻松穿透。",
      "stateNote": {
        "visual": "potato edges beginning to crumble",
        "signal": "knife slides through cleanly",
        "timeRef": "15-18 min"
      }
    },
    {
      "text": "Drain thoroughly and return the potatoes to the hot pot for 30 seconds to steam off residual water.",
      "textZh": "彻底沥干，把土豆倒回热锅里静置 30 秒，让残余水汽蒸掉。",
      "stateNote": {
        "visual": "potatoes look dry and floury on the surface",
        "signal": "no steam rising",
        "timeRef": "30 sec"
      }
    },
    {
      "text": "Add butter, warm milk, salt and white pepper. Mash with a fork or potato masher until mostly smooth with a little texture left.",
      "textZh": "加入黄油、温牛奶、盐和白胡椒，用叉子或压泥器压到基本顺滑、留一点颗粒。",
      "stateNote": {
        "visual": "creamy, holds soft peaks",
        "signal": "no lumps larger than a pea",
        "timeRef": "2 min"
      }
    },
    {
      "text": "Taste and adjust salt, then stir in half the mozzarella and the light soy sauce. Transfer to a shallow baking dish and level the top.",
      "textZh": "尝味补盐，拌入一半马苏里拉和生抽。倒入浅烤盘抹平表面。",
      "stateNote": {
        "visual": "surface smooth and slightly glossy",
        "signal": "cheese just beginning to melt into streaks",
        "timeRef": "1 min"
      }
    },
    {
      "text": "Scatter the remaining mozzarella over the top. Broil on the top rack until the cheese melts and takes on brown blisters, watching closely the whole time.",
      "textZh": "表面撒上剩下的马苏里拉。放最上层上火烤至芝士融化并出现焦斑，全程盯紧别走开。",
      "stateNote": {
        "visual": "cheese bubbling with golden-brown spots",
        "signal": "edges bubbling hard",
        "timeRef": "4-5 min",
        "heat": "high"
      }
    },
    {
      "text": "Rest for 3 minutes, scatter with scallion, and serve while the cheese is still stretchy.",
      "textZh": "静置 3 分钟，撒上葱花，趁芝士还能拉丝时上桌。",
      "stateNote": {
        "visual": "cheese pulls into strings when spooned",
        "signal": "ready to serve",
        "timeRef": "3 min"
      }
    }
  ],
  "tips": [
    "Warm the milk before adding it — cold milk makes the mash gluey.",
    "Never use a blender or food processor; it ruptures the starch and turns the mash into wallpaper paste.",
    "A teaspoon of light soy sauce adds savoury depth that salt alone cannot give.",
    "Swap mozzarella for cheddar if you want a sharper, more assertive top."
  ],
  "tipsZh": [
    "牛奶要先用温的——冷牛奶会让土豆泥发黏。",
    "千万别用料理机/破壁机，会打碎淀粉结构，变成浆糊。",
    "一小勺生抽能带来盐给不了的鲜味层次。",
    "想要更冲的风味可以把马苏里拉换成切达芝士。"
  ],
  "relatedSlugs": [
    "curry-potatoes",
    "salt-and-pepper-potatoes",
    "braised-potatoes",
    "potato-stewed-green-beans"
  ],
  "image": "/images/recipes/cheese-baked-rice.webp"
};
