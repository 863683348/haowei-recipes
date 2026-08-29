import type { Recipe } from "@/lib/types";

/** Shrimp Steamed Egg (虾仁蒸蛋) — Seed batch */
export const shrimp_steamed_egg: Recipe = {
  "id": "xia-ren-zheng-dan",
  "slug": "shrimp-steamed-egg",
  "titleEn": "Shrimp Steamed Egg",
  "titleZh": "虾仁蒸蛋",
  "pinyin": "xiā rén zhēng dàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses gentle steaming and minimal seasoning — no broth or cornstarch, just eggs, shrimp, and light soy. Restaurant versions often add chicken stock or fish maw.",
  "versionNoteZh": "家庭版用纯蛋液与鲜虾清蒸，不加高汤或鱼胶；餐馆版常加入鸡汤或鱼鳔提鲜。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Yangpu District made this every Sunday morning when I was seven — she’d crack the eggs into a ceramic bowl, stir just until blended (never frothy), and tuck plump shrimp into the surface before sliding it into her bamboo steamer over simmering water. She said the secret was 'quiet steam, not boiling roar'.",
  "storyZh": "我杨浦区的姑妈在我七岁时每个周日清晨都做这道菜——她把鸡蛋打进瓷碗，只搅匀不打发，再将饱满的虾仁轻轻嵌入蛋液表面，最后放进竹蒸笼，置于微沸水之上。她说秘诀是‘静汽不滚’。",
  "ingredients": [
    {
      "id": "eg-01",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "200 g",
      "amountUS": "4 large",
      "category": "protein",
      "pantry": "local",
      "note": "Use room-temperature eggs for smoother texture",
      "noteZh": "使用室温鸡蛋，质地更细腻"
    },
    {
      "id": "sh-01",
      "nameEn": "fresh shrimp, peeled and deveined",
      "nameZh": "鲜虾仁",
      "pinyin": "xiān xiā rén",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup (small to medium size)",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute frozen raw shrimp if fresh unavailable; thaw & pat dry",
      "noteZh": "如无鲜虾，可用冷冻生虾仁替代；解冻后吸干水分"
    },
    {
      "id": "wa-01",
      "nameEn": "cool boiled water or filtered water",
      "nameZh": "凉开水或过滤水",
      "pinyin": "liáng kāi shuǐ huò guò lǜ shuǐ",
      "amountMetric": "160 ml",
      "amountUS": "2/3 cup",
      "category": "staple",
      "pantry": "local",
      "note": "Water temperature must be cool — warm water causes curdling",
      "noteZh": "水温必须凉，热水会导致蛋液结块"
    },
    {
      "id": "ls-01",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "so-01",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "2 ml",
      "amountUS": "1/4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "In a mixing bowl, whisk eggs gently with chopsticks or a fork until just combined — no bubbles or foam.",
      "textZh": "取大碗，用筷子或叉子轻柔搅打鸡蛋，至刚混合均匀即可，切勿起泡。",
      "zhHint": "轻搅，不起泡"
    },
    {
      "text": "Add cool boiled water and whisk again gently until fully incorporated. Strain through a fine-mesh sieve into a heatproof dish (e.g., shallow ceramic bowl).",
      "textZh": "加入凉开水，再次轻柔搅匀；过细网筛滤入耐热浅碗中。",
      "zhHint": "过筛去泡"
    },
    {
      "text": "Arrange shrimp evenly on the surface of the egg mixture. Cover dish tightly with aluminum foil or a heatproof lid.",
      "textZh": "将虾仁均匀铺在蛋液表面，盖紧铝箔纸或耐热盖。",
      "zhHint": "虾仁朝上，封严"
    },
    {
      "text": "Place dish in a wok or pot with 3 cm of simmering water. Steam over medium-low heat for 12–14 minutes.",
      "textZh": "将碗放入已烧开微沸水（水深约3厘米）的锅中，中火转小火蒸12–14分钟。",
      "zhHint": "水微沸，小火蒸",
      "stateNote": {
        "visual": "Surface is set but still slightly glossy, with no liquid pooling",
        "visualZh": "表面已凝固但仍有光泽，无水析出",
        "timeRef": "12–14 minutes",
        "timeRefZh": "12–14 分钟",
        "heat": "medium-low",
        "signal": "A clean toothpick inserted near center comes out mostly clean, with slight moisture",
        "signalZh": "牙签插入中心附近，拔出时略带湿润但无蛋液挂壁"
      }
    },
    {
      "text": "Remove from steamer, discard foil, drizzle with light soy sauce and sesame oil. Garnish with thinly sliced scallion greens.",
      "textZh": "取出蒸碗，揭去铝箔，淋上生抽和香油，撒葱绿丝。",
      "zhHint": "出锅再淋酱"
    }
  ],
  "tips": [
    "Always use cool water — warm or hot water creates uneven texture and holes.",
    "Straining removes air bubbles and guarantees silkiness.",
    "Do not oversteam: overcooked egg becomes spongy and weeps water."
  ],
  "tipsZh": [
    "务必使用凉开水，温水或热水会导致蛋羹质地不均、出现蜂窝。",
    "过筛可去除气泡，确保口感如丝绸般顺滑。",
    "切勿蒸过头：蒸老的蛋羹会变海绵状并析出水。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/shrimp-steamed-egg.webp"
};
