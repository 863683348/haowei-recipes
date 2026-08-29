import type { Recipe } from "@/lib/types";

/** Huaiyang Yam Chicken Soup (山药鸡汤) — Seed batch */
export const huai_yang_yam_chicken_soup: Recipe = {
  "id": "shan-yao-ji-tang",
  "slug": "huai-yang-yam-chicken-soup",
  "titleEn": "Huaiyang Yam Chicken Soup",
  "titleZh": "山药鸡汤",
  "pinyin": "shān yào jī tāng",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu/Zhejiang",
  "region": "Yangzhou",
  "regionZh": "扬州",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses whole chicken pieces and quick-simmer method—no skimming, no long decoction. Restaurant versions clarify broth with egg white and serve chilled in summer.",
  "versionNoteZh": "家常版用整块鸡肉快炖，不滤渣、不长时间熬；餐厅版常用蛋清澄清，夏季冷食。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Yangzhou—a retired chef from Fuchun Teahouse—taught me this soup after I got sick with a cold: ‘Yam calms the lungs, chicken warms the blood, and ginger wakes the qi—like a quiet conversation between body and bowl.’",
  "storyZh": "扬州富春茶社退休的舅舅在我感冒时教我这道汤：‘山药润肺，鸡肉温血，姜活气——身体与碗之间，是一场静默对话。’",
  "ingredients": [
    {
      "id": "ya-01",
      "nameEn": "bone-in chicken thighs",
      "nameZh": "带骨鸡腿肉",
      "pinyin": "dài gǔ jī tuǐ ròu",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Skin-on, left whole or halved; bones enrich broth",
      "noteZh": "带皮，整块或对半切；骨头增汤鲜"
    },
    {
      "id": "ya-02",
      "nameEn": "Chinese yam (nagaimo or huai yam)",
      "nameZh": "怀山药",
      "pinyin": "huái shān yào",
      "amountMetric": "300 g",
      "amountUS": "2.5 cups (peeled, julienned)",
      "category": "produce",
      "pantry": "asian",
      "note": "Substitute: peeled russet potato (less slimy, milder flavor)",
      "noteZh": "替代：去皮褐土豆（无黏液，味淡）"
    },
    {
      "id": "ya-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "1.5-inch knob, smashed",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ya-04",
      "nameEn": "white pepper",
      "nameZh": "白胡椒",
      "pinyin": "bái hú jiāo",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp, freshly ground",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken. In a clean pot, combine chicken, ginger, and 1.5 L cold water. Bring to a full rolling boil over high heat.",
      "textZh": "鸡块冲洗干净。净锅中加鸡块、姜块与1.5升冷水，大火烧至沸腾。",
      "zhHint": "冷水下锅去浮沫",
      "stateNote": {
        "visual": "Large, vigorous bubbles break surface continuously",
        "visualZh": "大而密集气泡持续翻滚",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "heat": "high",
        "signal": "Foam rises rapidly and turns beige-gray",
        "signalZh": "浮沫快速涌起，呈灰褐色"
      }
    },
    {
      "text": "Skim off foam with a fine-mesh ladle. Reduce heat to low. Partially cover and simmer 20 minutes.",
      "textZh": "用细网勺撇净浮沫；转小火，半盖盖子慢炖20分钟。",
      "zhHint": "撇净才清亮",
      "stateNote": {
        "visual": "Surface calm with occasional small bubble",
        "visualZh": "汤面平静，偶有小泡",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low",
        "signal": "Broth turns pale ivory, aroma clean and herbal",
        "signalZh": "汤色呈淡乳白，清香微辛"
      }
    },
    {
      "text": "Peel and julienne yam. Rinse under cold water to remove slime. Add to pot and simmer 5 more minutes.",
      "textZh": "山药去皮切丝，冷水冲洗去黏液；入锅再炖5分钟。",
      "zhHint": "冲水防痒手",
      "stateNote": {
        "visual": "Yam strands soften but retain slight bite",
        "visualZh": "山药丝变软但仍有脆感",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Yam releases subtle sweetness into broth",
        "signalZh": "山药释放微甜入汤"
      }
    },
    {
      "text": "Season with white pepper. Taste and adjust—do not add salt unless broth tastes flat (chicken provides natural savoriness).",
      "textZh": "撒白胡椒粉调味；尝味后酌情补盐（鸡肉本有天然鲜味）。",
      "zhHint": "胡椒提神不抢味",
      "stateNote": {
        "visual": "Steam carries warm, peppery fragrance",
        "visualZh": "蒸汽带温热辛香",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "Tongue feels gently awakened, not burning",
        "signalZh": "舌尖微醒，不灼辣"
      }
    },
    {
      "text": "Ladle into warmed bowls. Serve immediately—yam softens quickly if held.",
      "textZh": "盛入预热碗中，即刻上桌——山药久置易软烂。",
      "zhHint": "趁热喝最养人",
      "stateNote": {
        "visual": "Soup steams steadily, yam floats lightly",
        "visualZh": "汤面持续冒热气，山药丝轻浮其中",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Bowl warms palm comfortably",
        "signalZh": "碗壁温热不烫手"
      }
    }
  ],
  "tips": [
    "Wear gloves when peeling raw yam—it contains itch-inducing sap.",
    "For silky texture, grate yam instead of julienning (adds thickness).",
    "Add a few goji berries in last 2 minutes for color and mild sweetness."
  ],
  "tipsZh": [
    "削生山药戴手套——汁液致手痒。",
    "喜滑润口感可用刨丝器代替刀切（增稠）。",
    "最后2分钟可加几粒枸杞增色添甜。"
  ],
  "relatedSlugs": [
    "chestnut-chicken-braise",
    "shiitake-mushroom-chicken-stew"
  ],
  "image": "/images/recipes/huai-yang-yam-chicken-soup.webp"
};
