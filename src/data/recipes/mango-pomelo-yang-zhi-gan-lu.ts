import type { Recipe } from "@/lib/types";

/** Mango Pomelo Sago (Yang Zhi Gan Lu) (杨枝甘露) — Seed batch */
export const mango_pomelo_yang_zhi_gan_lu: Recipe = {
  "id": "yang-zhi-gan-lu",
  "slug": "mango-pomelo-yang-zhi-gan-lu",
  "titleEn": "Mango Pomelo Sago (Yang Zhi Gan Lu)",
  "titleZh": "杨枝甘露",
  "pinyin": "yáng zhī gān lù",
  "cuisine": "甜品饮品",
  "cuisineEn": "Dessert & Beverage",
  "region": "Hong Kong",
  "regionZh": "香港",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "This is the home version: no evaporated milk, no artificial creamer — just coconut milk, real pomelo, and hand-cut mango. The sago is cooked separately and rinsed to stay springy.",
  "versionNoteZh": "家常版：不用淡奶、无人工奶精——仅用椰浆、真实柚肉与手切芒果；西米单独煮、过凉水，确保Q弹。",
  "tags": [
    "30-min",
    "summer",
    "no-cook-base"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My cousin Mei in Sham Shui Po makes this every August during typhoon season — she says the tart pomelo cuts through humidity better than any air conditioner, and her grandmother always added a pinch of salt to balance sweetness.",
  "storyZh": "我在深水埗的表妹美每年八月台风季必做此甜品——她说柚子的微酸比空调更能驱散湿气，而祖母总爱撒一小撮盐来调和甜度。",
  "ingredients": [
    {
      "id": "yz-01",
      "nameEn": "small ripe mangoes (Ataulfo or Champagne variety)",
      "nameZh": "小台农/阿特尔福芒果",
      "pinyin": "xiǎo tái nóng / ā tè ěr fú máng guǒ",
      "amountMetric": "350 g",
      "amountUS": "2 large mangoes",
      "category": "produce",
      "pantry": "local",
      "note": "Must be fragrant, yielding to gentle pressure near stem. Avoid fibrous varieties like Tommy Atkins.",
      "noteZh": "须熟香、轻按果蒂处微软；避开纤维粗的凯特芒等品种。"
    },
    {
      "id": "yz-02",
      "nameEn": "fresh pomelo segments (membrane removed)",
      "nameZh": "新鲜柚子果肉（去白络）",
      "pinyin": "xīn xiān yòu zi guǒ ròu",
      "amountMetric": "150 g",
      "amountUS": "1 cup, packed",
      "category": "produce",
      "pantry": "local",
      "note": "Look for pink or red-fleshed pomelo (e.g., Ruby Red) — avoid grapefruit (too bitter) or dried pomelo (too chewy).",
      "noteZh": "优选红心/粉心柚（如红宝石柚）；勿用西柚（太苦）或蜜饯柚（太韧）。"
    },
    {
      "id": "yz-03",
      "nameEn": "unsweetened full-fat coconut milk",
      "nameZh": "无糖全脂椰浆",
      "pinyin": "wú táng quán zhī yē jiāng",
      "amountMetric": "240 ml",
      "amountUS": "1 cup",
      "category": "dairy",
      "pantry": "asian",
      "note": "Shake well before using. Do not substitute light coconut milk or coconut water — fat is essential for richness.",
      "noteZh": "使用前充分摇匀；不可用低脂椰浆或椰子水替代——脂肪是醇厚的关键。"
    },
    {
      "id": "yz-04",
      "nameEn": "tiny pearl sago (tapioca), uncooked",
      "nameZh": "小西米（未煮）",
      "pinyin": "xiǎo xī mǐ",
      "amountMetric": "60 g",
      "amountUS": "1/4 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinse thoroughly before cooking. Cook until translucent with tiny white dot center — overcooking makes them mushy.",
      "noteZh": "煮前充分冲洗；煮至通体透明、中心留小白点即停——煮过头则糊烂。"
    }
  ],
  "steps": [
    {
      "text": "Rinse sago under cold water. Bring 600 ml (2½ cups) water to rolling boil in a small pot. Add sago, stir once, then cover and cook on medium-low heat for 15 minutes.",
      "textZh": "西米冷水冲洗。小锅中600毫升（2½杯）水大火烧沸，倒入西米，搅1次后盖盖，中小火煮15分钟。",
      "zhHint": "煮西米要盖盖",
      "stateNote": {
        "visual": "Sago pearls turn mostly translucent, each with a tiny opaque white dot in center",
        "visualZh": "西米基本变透明，每颗中心留一小颗白点",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "Water becomes slightly cloudy and viscous",
        "signalZh": "水变微浊、略带粘性"
      }
    },
    {
      "text": "Turn off heat. Let sago sit covered for 10 minutes — residual heat finishes cooking. Drain and rinse under cold running water until cool and slippery.",
      "textZh": "关火，盖盖焖10分钟——余热助其熟透。滤出后冲冷水至凉爽滑溜。",
      "zhHint": "焖+冲凉保Q弹",
      "stateNote": {
        "visual": "Sago glistens, separate and bouncy, not clumped or sticky",
        "visualZh": "西米晶莹、粒粒分明、弹牙不黏连",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Cold rinse stops cooking and removes excess starch",
        "signalZh": "冷水冲洗终止熟化并洗去多余淀粉"
      }
    },
    {
      "text": "Peel and cube mangoes into 1 cm pieces. Reserve ¼ for garnish. In a blender, purée remaining mango with 120 ml (½ cup) coconut milk until smooth. Strain through fine mesh to remove fiber.",
      "textZh": "芒果去皮切1厘米方丁，留¼作装饰。余下芒果与120毫升（½杯）椰浆入搅拌机打匀，细筛滤去纤维。",
      "zhHint": "芒果泥要过筛",
      "stateNote": {
        "visual": "Purée is vibrant orange, silky, with no specks or stringiness",
        "visualZh": "果泥明橙色、丝滑，无渣无丝",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "signal": "Blade spins freely without dragging",
        "signalZh": "刀片转动顺畅无阻力"
      }
    },
    {
      "text": "In a large bowl, combine mango purée, remaining 120 ml (½ cup) coconut milk, and pomelo segments. Gently fold in cooled sago — do not stir vigorously or crush pomelo.",
      "textZh": "大碗中混合芒果泥、剩余120毫升（½杯）椰浆与柚肉。轻柔拌入已凉西米——切忌大力搅拌压碎柚肉。",
      "zhHint": "轻拌防压碎柚肉",
      "stateNote": {
        "visual": "Pale yellow base flecked with pink pomelo and glossy sago pearls",
        "visualZh": "浅黄基底缀着粉红柚肉与油亮西米",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Pomelo membranes remain intact, not shredded",
        "signalZh": "柚络完好，未被撕碎"
      }
    },
    {
      "text": "Taste and adjust: add a pinch of fine sea salt if too sweet. Chill for at least 20 minutes. Serve in glasses, topped with reserved mango cubes and a light drizzle of extra coconut milk.",
      "textZh": "尝味调整：若过甜，可加一小撮海盐提鲜。冷藏至少20分钟。玻璃杯盛装，撒预留芒果丁，淋少许椰浆。",
      "zhHint": "盐点睛，不抢味",
      "stateNote": {
        "visual": "Surface glistens with coconut oil sheen, mango cubes float distinctively",
        "visualZh": "表面泛椰油光泽，芒果丁清晰浮于上层",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Coconut milk separates slightly at top — stir gently before serving",
        "signalZh": "椰浆略分层——饮用前轻搅即可"
      }
    }
  ],
  "tips": [
    "Pomelo is non-negotiable — canned or bottled versions lack brightness and add unwanted sodium.",
    "Chill all components separately before assembling — prevents sago from turning gummy.",
    "For vegan version: ensure coconut milk contains no dairy-derived emulsifiers (check label for 'carrageenan only')."
  ],
  "tipsZh": [
    "柚肉必须用新鲜的——罐头或瓶装柚肉黯淡无光且钠含量高。",
    "所有材料需分别冷藏后再组合，避免西米吸水变糊。",
    "纯素版：确认椰浆不含乳源乳化剂（标签仅含‘卡拉胶’即可）。"
  ],
  "relatedSlugs": [
    "red-bean-soup-hong-dou-sha"
  ],
  "image": "/images/recipes/mango-pomelo-yang-zhi-gan-lu.webp"
};
