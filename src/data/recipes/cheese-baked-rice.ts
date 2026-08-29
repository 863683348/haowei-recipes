import type { Recipe } from "@/lib/types";

/** Cheese-Baked Rice (芝士焗饭) — Seed batch */
export const cheese_baked_rice: Recipe = {
  "id": "zhi-shi-ju-fan",
  "slug": "cheese-baked-rice",
  "titleEn": "Cheese-Baked Rice",
  "titleZh": "芝士焗饭",
  "pinyin": "zhī shì jū fàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses simple baked custard-style topping—no béchamel, no flour. Just eggs, milk, cheese, and a gentle oven bake for creamy richness.",
  "versionNoteZh": "家庭版采用简易烘烤蛋奶糊顶——不调白酱、不加面粉，仅用鸡蛋、牛奶与芝士，低温烘烤出柔润奶香。",
  "tags": [
    "30-min",
    "comfort",
    "oven"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Liwan made this when I had a fever—she’d layer leftover congee rice with shredded cheddar, pour over a beaten egg-milk mixture, and bake it low and slow until golden and quivering like a warm pudding.",
  "storyZh": "我在荔湾的外婆在我发烧时总做这道菜——她把隔夜粥饭铺进碗里，撒上切达奶酪丝，淋上蛋奶液，低温慢烤至金黄微颤，像一碗温热布丁。",
  "ingredients": [
    {
      "id": "cb-01",
      "nameEn": "cold cooked rice",
      "nameZh": "隔夜熟米饭",
      "pinyin": "gé yè shú mǐ fàn",
      "amountMetric": "300 g",
      "amountUS": "2 cups (lightly packed)",
      "category": "staple",
      "pantry": "local",
      "note": "Congee-style rice preferred (slightly softer than jasmine), but any leftover works",
      "noteZh": "优选隔夜粥饭（比茉莉香米稍软），但任何剩饭皆可"
    },
    {
      "id": "cb-02",
      "nameEn": "cheddar cheese, shredded",
      "nameZh": "切达奶酪（切丝）",
      "pinyin": "qiē dá nǎi lào (qiē sī)",
      "amountMetric": "100 g",
      "amountUS": "1 cup, loosely packed",
      "category": "dairy",
      "pantry": "local",
      "note": "Mild or medium cheddar recommended; avoid pre-shredded (anti-caking agents hinder melt)",
      "noteZh": "推荐温和或中度切达；避免预包装刨丝奶酪（含抗结剂影响融化）"
    },
    {
      "id": "cb-03",
      "nameEn": "egg",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "50 g",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cb-04",
      "nameEn": "whole milk",
      "nameZh": "全脂牛奶",
      "pinyin": "quán zhī niú nǎi",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "cb-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Preheat oven to 175°C (350°F). Grease a 1.5-quart baking dish with butter or neutral oil.",
      "textZh": "烤箱预热至175°C（350°F）。用黄油或中性油涂抹1.5夸脱（约1.4升）烤盘。",
      "zhHint": "预热烤箱",
      "stateNote": {
        "visual": "Oven indicator light turns off; interior feels warm when door opened",
        "visualZh": "烤箱指示灯熄灭；开门时内部已感温热",
        "timeRef": "10 minutes",
        "timeRefZh": "10分钟",
        "signal": "Oven thermometer reads 170–175°C",
        "signalZh": "烤箱温度计显示170–175°C"
      }
    },
    {
      "text": "In a bowl, whisk egg and milk until fully blended and slightly frothy.",
      "textZh": "碗中打散鸡蛋与牛奶，搅至完全融合、表面微起泡。",
      "zhHint": "蛋奶搅匀",
      "stateNote": {
        "visual": "Mixture is pale yellow and uniform, no streaks",
        "visualZh": "呈均匀淡黄色，无蛋清条纹",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "signal": "Surface shows fine bubbles when lifted and dropped",
        "signalZh": "勺起滴落时表面有细密气泡"
      }
    },
    {
      "text": "Layer cold rice evenly in baking dish. Drizzle light soy sauce over top and gently fold in with chopsticks—do not crush grains.",
      "textZh": "将冷米饭平铺入烤盘。淋上生抽，用筷子轻轻翻拌均匀——勿压碎米粒。",
      "zhHint": "酱油拌饭",
      "stateNote": {
        "visual": "Rice absorbs sauce evenly without pooling",
        "visualZh": "米饭均匀吸酱，无酱汁积聚",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "signal": "Grains remain distinct and plump",
        "signalZh": "米粒颗颗饱满、形态完整"
      }
    },
    {
      "text": "Pour egg-milk mixture over rice. Gently shake dish to level. Sprinkle cheese evenly over surface.",
      "textZh": "将蛋奶液缓缓浇在米饭上，轻震烤盘抹平。撒上奶酪丝覆盖全表面。",
      "zhHint": "淋液撒奶酪",
      "stateNote": {
        "visual": "Cheese covers 95% of surface, no bare spots",
        "visualZh": "奶酪覆盖95%表面，无裸露处",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "signal": "Liquid seeps into rice edges but doesn’t flood center",
        "signalZh": "蛋奶液渗入米饭边缘，中心不泛滥"
      }
    },
    {
      "text": "Bake uncovered 20 minutes until edges are set, center jiggles slightly, and top is golden with melted cheese.",
      "textZh": "不盖盖烘烤20分钟，至边缘定型、中心微颤、表面金黄奶酪熔融。",
      "zhHint": "烘烤定型",
      "stateNote": {
        "visual": "Top is golden-brown with bubbly cheese; center wobbles like jelly",
        "visualZh": "顶部金褐、奶酪鼓泡；中心如果冻般轻颤",
        "timeRef": "20 minutes",
        "timeRefZh": "20分钟",
        "signal": "Edges pull away slightly from dish sides",
        "signalZh": "边缘轻微离壁"
      }
    }
  ],
  "tips": [
    "For extra umami, stir 1 tsp oyster sauce (substitution note: widely available in Western supermarkets) into egg-milk mixture.",
    "Let rest 3 minutes before serving—the custard sets further and stays creamy.",
    "If cheese browns too fast, tent loosely with foil for last 5 minutes."
  ],
  "tipsZh": [
    "为增鲜，可在蛋奶液中拌入1茶匙蚝油（替代提示：西超常见）。",
    "出炉后静置3分钟再食用——蛋奶糊继续凝固，口感更柔润。",
    "若奶酪上色过快，最后5分钟可松散盖锡纸。"
  ],
  "relatedSlugs": [
    "soy-sauce-fried-rice",
    "kimchi-fried-rice"
  ],
  "image": "/images/recipes/cheese-baked-rice.webp"
};
