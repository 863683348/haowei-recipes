import type { Recipe } from "@/lib/types";

/** Xi’an-Style You Po Noodles (陕西油泼面) — Seed batch */
export const you_po_noodles: Recipe = {
  "id": "you-po-mian",
  "slug": "you-po-noodles",
  "titleEn": "Xi’an-Style You Po Noodles",
  "titleZh": "陕西油泼面",
  "pinyin": "shǎn xī yóu pō miàn",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Snack",
  "region": "Xi'an",
  "regionZh": "西安",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses toasted sesame oil instead of lard for cleaner heat—and adds garlic oil for fragrance, just like my cousin’s stall near the Muslim Quarter.",
  "versionNoteZh": "家常版以香油代猪油提香减腻，并额外淋蒜油增香，仿照回民街表哥摊子的手法。",
  "tags": [
    "25-min",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My cousin ran a tiny stall beside the Great Mosque in Xi’an. At 5 a.m., he’d toast chili flakes in oil until they bloomed crimson—then pour it over steaming noodles with a shout: 'Yǒu pō! Hot heart, warm belly!'",
  "storyZh": "表哥在西安大清真寺旁支小摊。每天凌晨5点，他把辣椒面在油里焙到绽开深红，再‘哗啦’一声泼在滚面碗上，喊一句：‘油泼！心热，肚暖！’",
  "ingredients": [
    {
      "id": "yp-01",
      "nameEn": "chili flakes (Sichuan or Shaanxi style)",
      "nameZh": "辣椒面（川陕风味）",
      "pinyin": "là jiāo miàn",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Must be coarse-ground, not powder. Substitute Korean gochugaru if unavailable—but reduce by 1/3.",
      "noteZh": "须粗粒辣椒面，非细粉。若无，可用韩式辣面替代，但减量1/3。"
    },
    {
      "id": "yp-02",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜，剁碎",
      "pinyin": "dà suàn",
      "amountMetric": "20 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "yp-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "yp-04",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "yp-05",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Place chili flakes, minced garlic, light soy sauce, and black vinegar in a heatproof bowl. Set aside.",
      "textZh": "耐热碗中放入辣椒面、蒜末、生抽、陈醋，静置备用。",
      "zhHint": "调料先备齐",
      "stateNote": {
        "visual": "Garlic floats on top of liquid; chili flakes stay dry.",
        "visualZh": "蒜末浮于液面；辣椒面保持干燥。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No sizzling or steam yet.",
        "signalZh": "尚无滋滋声或蒸汽。"
      }
    },
    {
      "text": "Bring a large pot of water to rolling boil. Cook hand-rolled noodles until just tender (al dente), ~3 minutes.",
      "textZh": "大锅水烧滚，下面条煮至断生（略硬芯），约3分钟。",
      "zhHint": "面煮八分熟",
      "stateNote": {
        "visual": "Noodles float freely; tips curl slightly when lifted.",
        "visualZh": "面条全部浮起；夹起时尖端微卷。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Water returns to full boil within 30 seconds of adding noodles.",
        "signalZh": "下面后30秒内水重沸。"
      }
    },
    {
      "text": "Reserve 60 ml cooking water, then drain noodles and immediately transfer to the bowl with seasonings.",
      "textZh": "舀出60毫升面汤，迅速捞面入料碗。",
      "zhHint": "趁热泼油才响",
      "stateNote": {
        "visual": "Noodles glisten with surface moisture; steam rises steadily.",
        "visualZh": "面条泛水光；持续升腾热气。",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "signal": "No visible drying or sticking.",
        "signalZh": "面条未干、未粘连。"
      }
    },
    {
      "text": "Heat 30 ml neutral oil (e.g., peanut or canola) in a small saucepan until shimmering (180°C / 350°F). Do NOT smoke.",
      "textZh": "小锅中烧30毫升植物油至微烟前（约180°C），切勿冒青烟。",
      "zhHint": "油温够高才够泼",
      "stateNote": {
        "visual": "Oil surface ripples gently; faint wisps rise.",
        "visualZh": "油面微涟漪；有极细白气。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "high",
        "signal": "Wooden chopstick tip bubbles steadily when dipped.",
        "signalZh": "筷子尖插入油中，周围匀泡。"
      }
    },
    {
      "text": "Immediately pour hot oil over the seasonings — it will sizzle and bloom the chili. Stir once, then drizzle with sesame oil.",
      "textZh": "立即将热油泼向碗中料——‘刺啦’一声，辣椒面瞬间红亮。快速拌匀，最后淋香油。",
      "zhHint": "泼油要准要快",
      "stateNote": {
        "visual": "Chili turns deep red; garlic sizzles and turns golden at edges.",
        "visualZh": "辣椒面转深红；蒜末边缘微金黄。",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "signal": "Loud, sharp sizzle followed by aromatic steam.",
        "signalZh": "响亮‘刺啦’声，随即升腾椒香热气。"
      }
    }
  ],
  "tips": [
    "Never skip the reserved noodle water—it tempers heat and binds flavors.",
    "For authentic Xi’an heat, use chili flakes with Sichuan peppercorn bits (look for ‘hong you’ blend).",
    "Serve immediately—the magic fades after 90 seconds as oil cools and garlic mellows."
  ],
  "tipsZh": [
    "务必留面汤——它降油温、融滋味、防辣呛。",
    "追求地道西安辣度？选含花椒碎的‘红油辣椒面’（包装标‘hong you’）。",
    "务必即泼即食——90秒后油温降、蒜味散，风味锐减。"
  ],
  "relatedSlugs": [
    "zhajiang-noodles",
    "daluma-dan-rou-noodles"
  ],
  "image": "/images/recipes/you-po-noodles.webp"
};
