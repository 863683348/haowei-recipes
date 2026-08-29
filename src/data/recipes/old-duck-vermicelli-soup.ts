import type { Recipe } from "@/lib/types";

/** Old Duck Vermicelli Soup (老鸭粉丝汤) — Seed batch */
export const old_duck_vermicelli_soup: Recipe = {
  "id": "lao-ya-fen-si-tang",
  "slug": "old-duck-vermicelli-soup",
  "titleEn": "Old Duck Vermicelli Soup",
  "titleZh": "老鸭粉丝汤",
  "pinyin": "lǎo yā fěn sī tāng",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Nanjing",
  "regionZh": "南京",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Authentic Nanjing street version scaled down: duck leg + neck for gelatinous richness, soaked vermicelli for springy bite, and just enough white pepper to warm—not burn.",
  "versionNoteZh": "还原南京街头风味：鸭腿+鸭颈增胶质，粉丝先泡发保弹牙，白胡椒只取暖意不辣口。",
  "tags": [
    "60-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "At my aunt’s tiny stall near Confucius Temple in Nanjing, she’d start this soup at dawn using 3-year-old ducks from Gaochun. Her secret? A 10-minute ‘rest’ after straining—‘let the broth remember the duck’s soul before meeting noodles.’",
  "storyZh": "南京夫子庙旁姑妈的小摊，天未亮就用高淳三年老鸭熬汤。她的秘诀？滤汤后静置10分钟——‘让汤记得鸭子的灵魂，再迎粉丝入怀。’",
  "ingredients": [
    {
      "id": "vf-01",
      "nameEn": "bone-in duck legs and neck (about 800 g total)",
      "nameZh": "带骨鸭腿与鸭脖（共约800克）",
      "pinyin": "dài gǔ yā tuǐ yǔ yā bó",
      "amountMetric": "800 g",
      "amountUS": "1.75 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Duck neck adds collagen; substitute extra duck legs if neck unavailable.",
      "noteZh": "鸭脖增胶质；若无，可用鸭腿补足。"
    },
    {
      "id": "vf-02",
      "nameEn": "dried cellophane noodles (mung bean starch)",
      "nameZh": "干粉丝（绿豆淀粉）",
      "pinyin": "gān fěn sī",
      "amountMetric": "120 g",
      "amountUS": "1.5 cups (dry)",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak in room-temp water 20 min until pliable but firm—not mushy.",
      "noteZh": "室温水泡20分钟至柔韧不烂。"
    },
    {
      "id": "vf-03",
      "nameEn": "dried tofu skin (yuba), cut into thin strips",
      "nameZh": "干豆腐皮（千张），切细丝",
      "pinyin": "gān dòu fu pí",
      "amountMetric": "50 g",
      "amountUS": "½ cup shredded",
      "category": "protein",
      "pantry": "asian",
      "note": "Find in refrigerated or dried section; soak 10 min in warm water, then squeeze dry.",
      "noteZh": "冷藏或干货区找‘千张’；温水泡10分钟，挤干水分。"
    },
    {
      "id": "vf-04",
      "nameEn": "white pepper",
      "nameZh": "白胡椒",
      "pinyin": "bái hú jiāo",
      "amountMetric": "2 g",
      "amountUS": "1 tsp freshly ground",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Rinse duck pieces thoroughly. Place in large pot with 2 L cold water. Bring to rapid boil over high heat, then drain and rinse again under cold running water.",
      "textZh": "鸭件反复冲洗。入大锅加2升冷水，大火烧沸后倒掉水，再用流水冲洗。",
      "zhHint": "三洗一焯去腥膻",
      "stateNote": {
        "visual": "Water runs clear after final rinse; duck skin appears matte and clean.",
        "visualZh": "最后冲洗水流清亮；鸭皮呈哑光洁净状。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Boil breaks surface with violent, continuous bubbling.",
        "signalZh": "沸腾时水面剧烈持续翻滚。"
      }
    },
    {
      "text": "Return duck to clean pot with fresh 2 L water, 20 g ginger slices, and 3 scallion whites. Bring to simmer, skim foam, then cover and simmer on low for 75 minutes.",
      "textZh": "鸭件回净锅，加新水2升、姜片20克、葱白3根。烧至微沸撇沫，盖盖小火炖75分钟。",
      "zhHint": "长时慢炖出胶质",
      "stateNote": {
        "visual": "Broth develops light amber hue; surface shows occasional slow bubble.",
        "visualZh": "汤色渐呈浅琥珀；表面偶有缓泡。",
        "timeRef": "75 minutes",
        "timeRefZh": "75 分钟",
        "heat": "low",
        "signal": "Vapor rises in steady, quiet stream—no spluttering.",
        "signalZh": "蒸汽匀稳上升，无声爆溅。"
      }
    },
    {
      "text": "Strain broth through fine-mesh sieve into large bowl. Let rest uncovered for 10 minutes—this allows fat to rise and flavors to settle.",
      "textZh": "细网筛滤汤入大碗。敞口静置10分钟——让浮油上浮，滋味沉淀。",
      "zhHint": "静置是汤清味醇关键",
      "stateNote": {
        "visual": "Thin golden layer forms on surface; broth underneath is crystal-clear.",
        "visualZh": "汤面浮起薄金层；下方汤体晶莹剔透。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No steam rises; surface reflects light evenly.",
        "signalZh": "无蒸汽；汤面均匀反光。"
      }
    },
    {
      "text": "Skim off solidified fat with spoon. Season broth with white pepper and sea salt to taste. Keep warm on lowest heat.",
      "textZh": "用勺撇去凝固浮油。以白胡椒与海盐调味。最小火保温。",
      "zhHint": "白胡椒后下保辛香",
      "tip": "Grind white pepper fresh—it loses aroma fast when pre-ground.",
      "tipZh": "白胡椒现磨，久置失香。"
    },
    {
      "text": "Soak dried tofu skin and cellophane noodles as directed. Drain well. Bring seasoned broth to gentle simmer. Add soaked noodles and tofu skin; cook 2 minutes. Serve hot in bowls, garnished with scallion greens.",
      "textZh": "按说明泡发豆腐皮与粉丝。沥干。将调味汤烧至微沸，下粉丝与豆腐皮，煮2分钟。热汤盛碗，撒葱绿。",
      "zhHint": "粉丝后下防糊烂",
      "stateNote": {
        "visual": "Noodles are translucent and springy; tofu skin curls slightly at edges.",
        "visualZh": "粉丝透亮弹牙；豆腐皮边缘微卷。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Noodles move freely in broth without sticking together.",
        "signalZh": "粉丝在汤中自由舒展，不粘连。"
      }
    }
  ],
  "tips": [
    "Freeze duck broth in ice cube trays—use 2 cubes per bowl for quick weeknight soups.",
    "Add a splash of Chinese black vinegar just before serving for brightness (optional).",
    "For vegetarian version: replace duck with shiitake stems + dried lily bulbs—simmer 60 min."
  ],
  "tipsZh": [
    "鸭汤冻成冰格，每碗取2块，快手汤底立得。",
    "上桌前淋几滴镇江香醋，提神解腻（可选）。",
    "素版替换：香菇蒂+干百合，同炖60分钟。"
  ],
  "relatedSlugs": [
    "chicken-broth-wonton-soup",
    "chicken-broth-noodle-soup"
  ],
  "image": "/images/recipes/old-duck-vermicelli-soup.webp"
};
