import type { Recipe } from "@/lib/types";

/** Baby Bok Choy Rice Congee (青菜粥) — Day batch */
export const greens_congee: Recipe = {
  "id": "greens-congee",
  "slug": "greens-congee",
  "titleEn": "Baby Bok Choy Rice Congee",
  "titleZh": "青菜粥",
  "pinyin": "qīng cài zhōu",
  "cuisine": "家常菜",
  "cuisineEn": "Jiangnan Home-Style",
  "region": "Jiangnan",
  "regionZh": "江南",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version cooks the greens in the pot for a soft, integrated flavour; restaurant versions blanch the greens separately and lay them on top for brighter colour.",
  "versionNoteZh": "家常版把青菜直接煮进粥里，味道融合柔和；餐厅版把青菜另焯后铺面，颜色更翠绿。",
  "tags": [
    "40-min",
    "congee",
    "vegetarian",
    "light",
    "breakfast"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "The plainest congee in the Chinese repertoire, and the one people come back to. In Jiangnan it is what you eat after a week of banquets — white rice, green vegetables, a little salt, nothing else. My grandfather ate it standing at the stove with a spoon, refusing to sit down until it cooled a little.",
  "storyZh": "这是中餐里最朴素的一道粥，也是人最常回去的那一碗。在江南，它是连吃一周宴席之后的那顿饭——白米、青菜、一点盐，别无他物。我爷爷总站在灶边用勺子吃，非要等它凉一点才肯坐下。",
  "ingredients": [
    {
      "id": "qc-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "100 g",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until clear and soak 30 minutes for the creamiest result",
      "noteZh": "淘洗至水清并泡30分钟，粥最绵滑"
    },
    {
      "id": "qc-02",
      "nameEn": "baby bok choy, cut into 2 cm pieces",
      "nameZh": "小白菜，切2厘米段",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "250 g",
      "amountUS": "3 cups chopped",
      "category": "produce",
      "pantry": "asian",
      "termKey": "baby-bok-choy",
      "note": "Separate stems from leaves — stems go in first",
      "noteZh": "梗叶分开，梗先下锅"
    },
    {
      "id": "qc-03",
      "nameEn": "carrot, finely diced",
      "nameZh": "胡萝卜，切细丁",
      "pinyin": "hú luó bo",
      "amountMetric": "80 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "qc-04",
      "nameEn": "fresh ginger, finely shredded",
      "nameZh": "鲜姜，切细丝",
      "pinyin": "jiāng sī",
      "amountMetric": "10 g",
      "amountUS": "2 tsp shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "qc-05",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切细",
      "pinyin": "xiǎo cōng",
      "amountMetric": "15 g",
      "amountUS": "1½ stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "qc-06",
      "nameEn": "toasted sesame oil",
      "nameZh": "芝麻香油",
      "pinyin": "zhī má xiāng yóu",
      "amountMetric": "8 ml",
      "amountUS": "½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "qc-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "qc-08",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Rinse the rice until the runoff runs clear, then soak in 1 L (4¼ cups) cold water for 30 minutes without draining.",
      "textZh": "大米淘洗至水清，加1升冷水浸泡30分钟，不要倒掉泡米水。",
      "zhHint": "淘洗浸泡30分",
      "stateNote": {
        "visual": "Grains turn opaque white and the soaking water looks faintly cloudy",
        "visualZh": "米粒转不透明乳白，泡米水微浑",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "A grain snaps cleanly when bitten, with no dry chalky core",
        "signalZh": "咬断米粒干脆，中心无干粉硬芯"
      }
    },
    {
      "text": "Bring rice and soaking water to a boil over high heat, then lower to medium-low and simmer uncovered 20 minutes, stirring every 5 minutes.",
      "textZh": "米连泡米水大火烧沸，转中小火不加盖煮20分钟，每5分钟搅一次。",
      "zhHint": "小火慢熬20分",
      "stateNote": {
        "visual": "Grains split open and the liquid thickens to a cloudy, milky porridge",
        "visualZh": "米粒裂开，汤汁变稠呈乳白浑浊",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "medium-low",
        "signal": "Bubbles break slowly on the surface and the spoon leaves a trail that fills in",
        "signalZh": "表面气泡缓破，勺痕会慢慢回填"
      }
    },
    {
      "text": "Add carrot dice and bok choy stems with the ginger. Simmer 8 minutes until the carrot softens and the stems turn translucent.",
      "textZh": "下胡萝卜丁、小白菜梗与姜丝，小火煮8分钟至胡萝卜变软、菜梗转半透明。",
      "zhHint": "梗与胡萝卜先下",
      "stateNote": {
        "visual": "Stems shift from opaque pale green to a glassy jade; carrot brightens",
        "visualZh": "菜梗由不透明白绿转为通透青玉色，胡萝卜更鲜亮",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-low",
        "signal": "A stem piece bends without snapping and tastes sweet, not grassy",
        "signalZh": "菜梗可弯折不断，入口清甜无青草味"
      }
    },
    {
      "text": "Stir in the bok choy leaves and cook 2 minutes until just wilted and bright green.",
      "textZh": "下小白菜叶煮2分钟至刚塌软、颜色翠绿。",
      "zhHint": "菜叶最后放",
      "stateNote": {
        "visual": "Leaves collapse into the porridge and hold a vivid green colour",
        "visualZh": "菜叶塌入粥中，保持鲜亮绿色",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "No dull olive tint yet — if it turns olive, it has cooked too long",
        "signalZh": "尚未出现暗橄榄色——若转橄榄色即为过熟"
      }
    },
    {
      "text": "Season with light soy sauce and white pepper, then taste and adjust salt.",
      "textZh": "以生抽与白胡椒粉调味，尝味后补盐。",
      "zhHint": "轻盐调味",
      "stateNote": {
        "visual": "Porridge takes on a faint beige tint and a glossy surface sheen",
        "visualZh": "粥体微带米黄色，表面泛光泽",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Flavour is clean and lightly savoury with a pepper warmth, not salty",
        "signalZh": "味道清鲜微咸带胡椒暖意，不过咸"
      }
    },
    {
      "text": "Turn off the heat, stir in sesame oil and scallion, and serve at once.",
      "textZh": "关火，拌入芝麻油与葱花，立即上桌。",
      "zhHint": "香油葱花收尾",
      "stateNote": {
        "visual": "White congee flecked with jade green and orange, thin golden oil beads on top",
        "visualZh": "白粥点缀青绿与橙黄，表面浮细小金色油珠",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Aroma is nutty sesame over clean rice sweetness",
        "signalZh": "香气为米甜之上浮一层芝麻坚果香"
      }
    }
  ],
  "tips": [
    "Stems in first, leaves last — 6 minutes apart keeps both perfectly cooked.",
    "For a brighter restaurant look, blanch the leaves separately for 20 seconds and lay them on top.",
    "Add a spoon of cooked barley or millet for extra body and a nuttier finish."
  ],
  "tipsZh": [
    "梗先下、叶后下，相隔6分钟，两者都恰到好处。",
    "想要餐厅般翠绿，把菜叶另焯20秒后铺在粥面。",
    "加一勺熟薏米或小米，粥体更厚实并带坚果香。"
  ],
  "relatedSlugs": [
    "chicken-congee",
    "pidan-shourou-congee"
  ],
  "image": "/images/recipes/tingzai-congee.webp"
};
