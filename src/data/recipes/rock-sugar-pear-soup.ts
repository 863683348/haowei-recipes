import type { Recipe } from "@/lib/types";

/** Rock Sugar Pear Soup (冰糖雪梨) — Seed batch */
export const rock_sugar_pear_soup: Recipe = {
  "id": "bing-tang-xue-li",
  "slug": "rock-sugar-pear-soup",
  "titleEn": "Rock Sugar Pear Soup",
  "titleZh": "冰糖雪梨",
  "pinyin": "bīng táng xuě lí",
  "cuisine": "汤羹凉菜",
  "cuisineEn": "Soup & Dessert",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses whole pear halves with cores intact to retain shape and subtle tannins — no blending or straining, unlike some modern 'smooth' adaptations.",
  "versionNoteZh": "家常版保留完整梨半只带核慢炖，保持果形与微涩回甘；区别于现代打浆过滤版。",
  "tags": [
    "30-min",
    "soothing",
    "cold-season"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "When I had a cough as a child in Guangzhou, my aunt would poach two ‘Xue Li’ pears in a black clay pot over charcoal, whispering ‘let the steam carry the phlegm away.’ She always left the cores in — ‘the heart holds the medicine.’",
  "storyZh": "小时候在广州咳嗽，姑妈总用黑陶锅炭火慢炖两只‘雪梨’，边炖边念‘让蒸汽把痰带走’。她从不挖净梨核——‘梨心才存药性’。",
  "ingredients": [
    {
      "id": "bt-01",
      "nameEn": "Asian pears (Xue Li variety, firm, unblemished)",
      "nameZh": "雪梨（亚洲梨，紧实无伤）",
      "pinyin": "xuě lí",
      "amountMetric": "2 medium (about 500 g total)",
      "amountUS": "2 medium (about 1¾ cups diced, but use whole)",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute: Bosc or Anjou pears — peel first and add 1 tsp lemon juice to prevent browning.",
      "noteZh": "替代：西洋梨如博斯克或安茹梨，需去皮，并加1茶匙柠檬汁防褐变。"
    },
    {
      "id": "bt-02",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "60 g",
      "amountUS": "¼ cup granulated (or ⅓ cup crushed)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Crushed dissolves faster and yields clearer broth.",
      "noteZh": "敲碎后溶解更快，汤色更清亮。"
    },
    {
      "id": "bt-03",
      "nameEn": "dried lily bulbs (Bai He)",
      "nameZh": "干百合",
      "pinyin": "gān bǎi hé",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: 30 g fresh lily bulbs (available at Asian grocers), blanched 1 minute.",
      "noteZh": "替代：鲜百合30克（亚超有售），焯水1分钟。"
    },
    {
      "id": "bt-04",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "800 ml",
      "amountUS": "3⅓ cups",
      "category": "western-pantry",
      "pantry": "local",
      "note": "",
      "noteZh": ""
    }
  ],
  "steps": [
    {
      "text": "Wash pears thoroughly. Using a melon baller or small knife, carefully scoop out cores — leaving bottoms intact to form 'bowls'. Peel only if using non-Xue Li pears.",
      "textZh": "梨洗净。用挖球器或小刀小心挖去梨核，底部保留完整成‘碗’状。若非雪梨则需去皮。",
      "zhHint": "留底成碗",
      "stateNote": {
        "visual": "Pear cavity is smooth-walled, ~2 cm deep, with no tears or thin spots.",
        "visualZh": "梨腔壁光滑，深约2厘米，无裂口或薄壁。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Stem end remains firmly attached.",
        "signalZh": "梨柄端仍牢固连接。"
      }
    },
    {
      "text": "Place pear halves upright in a small saucepan. Add water, rock sugar, and dried lily bulbs. Bring to a gentle simmer over medium heat.",
      "textZh": "梨半只直立放入小锅，加水、冰糖、干百合，中火煮至微沸。",
      "zhHint": "梨立水浸",
      "stateNote": {
        "visual": "Small bubbles break softly at surface; pear skins begin to blush faintly golden.",
        "visualZh": "水面浮起细密小泡；梨皮渐泛淡金晕。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "First steady ring of steam rises from pot rim.",
        "signalZh": "锅沿升起第一圈稳定蒸气。"
      }
    },
    {
      "text": "Reduce heat to low, cover partially with lid (leave 1 cm gap), and simmer for 30 minutes. Gently rotate pears halfway through.",
      "textZh": "转最小火，锅盖半掩（留1厘米缝隙），慢炖30分钟，中途轻翻梨身。",
      "zhHint": "半盖慢煨",
      "stateNote": {
        "visual": "Pears soften visibly at shoulders but hold shape; liquid reduces slightly and glistens.",
        "visualZh": "梨肩部明显变软但形态完好；汤汁微减，泛光。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "Tip of spoon inserted meets slight resistance — not mushy.",
        "signalZh": "勺尖插入略带阻力，非绵软烂糊。"
      }
    },
    {
      "text": "Turn off heat. Let pears steep in hot liquid for 10 minutes off the stove — this deepens sweetness and infuses lily flavor.",
      "textZh": "关火，盖盖焖10分钟，使甜味与百合香充分浸润梨肉。",
      "zhHint": "关火焖香",
      "stateNote": {
        "visual": "Steam condenses heavily on lid; pear flesh becomes translucent near core.",
        "visualZh": "锅盖凝结大量水珠；梨肉近核处呈半透明。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Aroma shifts from raw fruit to floral-honey depth.",
        "signalZh": "香气由生果味转为花蜜般醇厚。"
      }
    },
    {
      "text": "Carefully lift pears into serving bowls using chopsticks. Ladle hot syrup and lily bulbs over each. Serve warm or at room temperature.",
      "textZh": "用筷子小心夹出梨只入碗，浇上热糖水与百合，趁热或室温食用。",
      "zhHint": "整只盛碗",
      "stateNote": {
        "visual": "Syrup coats back of spoon thickly but pours in a steady ribbon.",
        "visualZh": "糖水挂勺成厚膜，倾倒时呈连贯细带。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Lily bulbs are tender but retain petal definition.",
        "signalZh": "百合瓣柔韧，花瓣轮廓清晰。"
      }
    }
  ],
  "tips": [
    "Do not overcook — pears become grainy if simmered >40 minutes total.",
    "For extra throat-soothing effect, add 1 thin slice of fresh ginger (peeled) during simmering.",
    "This soup tastes best within 24 hours — refrigerate covered, but do not freeze (pear texture degrades)."
  ],
  "tipsZh": [
    "切勿久煮——总炖煮超40分钟梨肉会变粉渣。",
    "如需加强润喉效果，可于炖煮时加入1片薄姜（去皮）。",
    "此汤最佳风味在24小时内，冷藏密封保存，不可冷冻（梨质受损）。"
  ],
  "relatedSlugs": [
    "silver-fungus-lotus-seed-soup"
  ],
  "image": "/images/recipes/rock-sugar-pear-soup.webp"
};
