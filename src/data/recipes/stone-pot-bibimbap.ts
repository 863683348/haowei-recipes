import type { Recipe } from "@/lib/types";

/** Korean Stone Pot Bibimbap (Dolsot Bibimbap) (石锅拌饭) — Seed batch */
export const stone_pot_bibimbap: Recipe = {
  "id": "dolsot-bibimbap",
  "slug": "stone-pot-bibimbap",
  "titleEn": "Korean Stone Pot Bibimbap (Dolsot Bibimbap)",
  "titleZh": "石锅拌饭",
  "pinyin": "shí guō bàn fàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Seoul",
  "regionZh": "首尔",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses pre-cooked short-grain rice and pan-seared vegetables — skips labor-intensive blanching and achieves crisp-bottomed rice in under 10 minutes on electric stovetop.",
  "versionNoteZh": "家常版用现成短粒米饭与煎制蔬菜——省去费时焯水，电炉10分钟内即可做出焦香锅巴。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian-option"
  ],
  "dietary": [
    "none"
  ],
  "story": "My Korean mother-in-law in Seoul taught me this after I burned three dolsots trying to replicate her restaurant-style version. She laughed, handed me a nonstick skillet, and said, 'Real stone pots are for patience — your stove needs speed. So we make the crust *first*, then build the bowl.' Now I teach my daughter the same trick.",
  "storyZh": "我在首尔的韩国婆婆见我连烧三个石锅后笑着教我：‘真石锅要耐心——你家灶台要速度。所以咱们先煎出锅巴，再堆成碗。’如今我也这样教女儿。",
  "ingredients": [
    {
      "id": "sb-01",
      "nameEn": "short-grain white rice (cooked, cooled 1 hour)",
      "nameZh": "短粒白米饭（熟，冷藏1小时）",
      "pinyin": "duǎn lì bái mǐ fàn (shú, lěng cáng 1 xiǎo shí)",
      "amountMetric": "300 g",
      "amountUS": "2 cups, loosely packed",
      "category": "staple",
      "pantry": "local",
      "note": "Use day-old rice or chill freshly cooked rice 60 min to firm up",
      "noteZh": "可用隔夜饭，或新煮饭冷藏60分钟定型"
    },
    {
      "id": "sb-02",
      "nameEn": "spinach",
      "nameZh": "菠菜",
      "pinyin": "bō cài",
      "amountMetric": "150 g",
      "amountUS": "4 cups, stemmed",
      "category": "produce",
      "pantry": "local",
      "note": "Blanch 30 sec, then squeeze dry — or sauté 2 min with 1 tsp oil",
      "noteZh": "可焯水30秒挤干，或用1茶匙油快炒2分钟"
    },
    {
      "id": "sb-03",
      "nameEn": "carrot",
      "nameZh": "胡萝卜",
      "pinyin": "hú luó bo",
      "amountMetric": "80 g",
      "amountUS": "½ cup, julienned",
      "category": "produce",
      "pantry": "local",
      "note": "Sauté 3 min until just tender-crisp",
      "noteZh": "中火炒3分钟至断生仍脆"
    },
    {
      "id": "sb-04",
      "nameEn": "gochujang",
      "nameZh": "韩式辣酱",
      "pinyin": "hán shì là jiàng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute with miso + ½ tsp chili flakes + 1 tsp brown sugar if unavailable",
      "noteZh": "无货时可用味噌+½茶匙辣椒碎+1茶匙红糖调和"
    },
    {
      "id": "sb-05",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Heat 15 cm nonstick skillet over medium-high heat. Add 1 tsp sesame oil, swirl to coat. Spread chilled rice evenly, pressing down firmly.",
      "textZh": "15厘米不粘平底锅中火加热，加1茶匙芝麻油晃匀，铺入冷藏米饭并用力压实。",
      "zhHint": "油热再下饭，防粘",
      "stateNote": {
        "visual": "Oil shimmers but does not smoke",
        "visualZh": "油面微漾，未见青烟",
        "timeRef": "30 seconds heating",
        "timeRefZh": "预热30秒",
        "heat": "medium-high",
        "signal": "First drop of water sizzles violently",
        "signalZh": "滴入一滴水即剧烈爆裂"
      }
    },
    {
      "text": "Cook undisturbed 4 minutes until deep golden crust forms. Lift edge gently with spatula to check — crust should be crisp and release easily.",
      "textZh": "全程不翻动，煎4分钟至底部呈深金黄色锅巴。用铲轻掀边缘检查——锅巴应酥脆且易脱锅。",
      "zhHint": "忍住别翻动！",
      "stateNote": {
        "visual": "Rice surface appears dry; edges pull away from pan",
        "visualZh": "饭面干燥，边缘微微离锅",
        "timeRef": "4 minutes",
        "timeRefZh": "4分钟",
        "heat": "medium-high",
        "signal": "Distinct nutty aroma rises",
        "signalZh": "散发明显坚果焦香"
      }
    },
    {
      "text": "Meanwhile, quickly sauté carrot julienne in 1 tsp oil until crisp-tender. Blanch spinach 30 sec, then squeeze dry and toss with ½ tsp sesame oil.",
      "textZh": "同步将胡萝卜丝用1茶匙油快炒至断生；菠菜焯水30秒，挤干后拌½茶匙芝麻油。",
      "zhHint": "同步操作省时间",
      "stateNote": {
        "visual": "Carrots retain bright orange color; spinach is dark green and supple",
        "visualZh": "胡萝卜鲜橙色不褪；菠菜墨绿柔韧",
        "timeRef": "3 minutes total",
        "timeRefZh": "共3分钟",
        "heat": "medium-high",
        "signal": "Carrot sticks offer slight resistance when bitten",
        "signalZh": "咬胡萝卜丝略有脆感"
      }
    },
    {
      "text": "Flip rice crust onto serving plate. Top with sautéed carrots, dressed spinach, sliced cucumber, and fried egg (optional). Drizzle with gochujang and remaining sesame oil.",
      "textZh": "将锅巴倒扣于餐盘。依次铺上炒胡萝卜、拌菠菜、黄瓜片及煎蛋（可选），淋韩式辣酱和剩余芝麻油。",
      "zhHint": "倒扣显锅巴，仪式感强",
      "stateNote": {
        "visual": "Crust remains intact with audible crunch when tapped",
        "visualZh": "锅巴完整，轻叩有清脆声",
        "timeRef": "immediately after flipping",
        "timeRefZh": "倒扣后即刻",
        "signal": "Steam rises gently from hot crust base",
        "signalZh": "热锅巴底部缓缓升腾微汽"
      }
    },
    {
      "text": "Serve immediately with chopsticks. Stir vigorously at table to mix hot crust, cool toppings, and spicy sauce — the contrast is essential.",
      "textZh": "立即上桌，用筷子大力搅拌——热锅巴、凉配菜、辣酱三者交融，口感层次即在此刻。",
      "zhHint": "现场搅拌才正宗",
      "stateNote": {
        "visual": "Rice grains separate, coated evenly in red sauce and oil",
        "visualZh": "米粒分明，均匀裹上红酱与油光",
        "timeRef": "10 seconds stirring",
        "timeRefZh": "搅拌约10秒",
        "signal": "Aroma intensifies as ingredients combine",
        "signalZh": "食材混合瞬间香气迸发"
      }
    }
  ],
  "tips": [
    "Chilling rice prevents mushiness and helps crust form faster.",
    "For vegan version, omit egg and use toasted sesame seeds instead of fish-based gochujang (check label).",
    "Always serve bibimbap piping hot — cold crust loses its magic."
  ],
  "tipsZh": [
    "冷藏米饭防糊烂，且助锅巴快速成型。",
    "纯素版可去蛋，并选用无鱼露成分的韩式辣酱（看标签）或改撒焙香芝麻。",
    "务必趁热上桌——冷锅巴失去灵魂。"
  ],
  "relatedSlugs": [
    "clay-pot-rice",
    "bamboo-tube-rice"
  ],
  "image": "/images/recipes/stone-pot-bibimbap.webp"
};
