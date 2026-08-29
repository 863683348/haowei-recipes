import type { Recipe } from "@/lib/types";

/** Seafood Geda Tang (Light & Briny Home-Style Dumpling Soup) (海鲜疙瘩汤) — Seed batch */
export const seafood_geda_soup: Recipe = {
  "id": "haixian-gedatang",
  "slug": "seafood-geda-soup",
  "titleEn": "Seafood Geda Tang (Light & Briny Home-Style Dumpling Soup)",
  "titleZh": "海鲜疙瘩汤",
  "pinyin": "hǎi xiān gē da tāng",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Qingdao",
  "regionZh": "青岛",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses fresh local shrimp and clams — no frozen surimi or imitation seafood — and cooks the geda directly in the clarified seafood broth for clean, ocean-fresh flavor.",
  "versionNoteZh": "家常版选用新鲜虾仁与蛤蜊，不用冷冻仿蟹棒；面疙瘩直接入清亮海鲜高汤中煮，鲜味纯粹无杂味。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort",
    "gedat-tang"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every summer, my grandmother in Qingdao would buy live clams from the Zhongshan Road market at dawn, steam them open with ginger and Shaoxing wine, then strain the briny liquor — that golden broth became the soul of her geda tang, served with steamed buns after swimming at Shilaoren Beach.",
  "storyZh": "每年夏天，青岛的奶奶清晨去中山路市场买活蛤蜊，用姜片和绍兴酒蒸开，滤出咸鲜金汤——这便是她疙瘩汤的灵魂，配馒头，吃完就带我去石老人海滩游泳。",
  "ingredients": [
    {
      "id": "cl-01",
      "nameEn": "fresh littleneck clams",
      "nameZh": "小蛤蜊",
      "pinyin": "xiǎo gé lí",
      "amountMetric": "500 g",
      "amountUS": "1 lb (about 20–24 clams)",
      "category": "protein",
      "pantry": "local",
      "note": "Soak in cold saltwater (1 tbsp salt per 2 cups water) for 30 min to purge sand.",
      "noteZh": "用淡盐水（1汤匙盐+2杯水）浸泡30分钟吐沙。"
    },
    {
      "id": "sh-01",
      "nameEn": "raw shrimp, peeled and deveined",
      "nameZh": "鲜虾仁",
      "pinyin": "xiān xiā rén",
      "amountMetric": "150 g",
      "amountUS": "1/2 cup (small-medium size)",
      "category": "protein",
      "pantry": "local",
      "note": "Thaw frozen shrimp fully and pat dry — excess water dilutes broth.",
      "noteZh": "冻虾需彻底解冻并吸干水分，避免稀释汤味。"
    },
    {
      "id": "fl-02",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "100 g",
      "amountUS": "3/4 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "wi-01",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Steam clams with 1 cm ginger slices and 1 tbsp Shaoxing wine until fully opened (5–7 min). Discard any unopened clams. Strain broth through cheesecloth; reserve both broth and clams.",
      "textZh": "蛤蜊加姜片、绍兴酒上锅蒸至全部开口（5–7分钟），剔除未开口者；滤布过滤得清亮蛤蜊汤，保留汤与肉。",
      "zhHint": "蒸开后滤汤，去沙留鲜",
      "stateNote": {
        "visual": "Clams gape wide open; broth is pale gold, clear, and aromatic — no grit or foam.",
        "visualZh": "蛤蜊完全张口；汤色浅金、澄澈、有酒香，无泡沫或杂质。",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "heat": "high",
        "signal": "All shells have fully separated and broth smells sweet-briny, not fishy.",
        "signalZh": "所有蛤壳完全张开，汤气咸鲜清甜，无腥气。"
      }
    },
    {
      "text": "Bring reserved clam broth to a gentle simmer. Add shrimp and cook just until pink and curled (1.5–2 min). Remove shrimp with slotted spoon and set aside.",
      "textZh": "蛤蜊汤烧至微沸，下虾仁烫至变粉红卷曲（1.5–2分钟），捞出备用。",
      "zhHint": "虾仁断生即捞，防老",
      "stateNote": {
        "visual": "Shrimp turn opaque pink and curl into loose 'C' shapes — no gray or stringy texture.",
        "visualZh": "虾仁变不透明粉红，呈松散‘C’形——无灰白或纤维状。",
        "timeRef": "1.5–2 minutes",
        "timeRefZh": "1.5–2 分钟",
        "heat": "medium-low",
        "signal": "Edges of shrimp begin to whiten and flesh firms slightly.",
        "signalZh": "虾边缘泛白，肉质初显紧实。"
      }
    },
    {
      "text": "Whisk flour with 100 ml cold water until smooth. Let rest 3 minutes. Gradually drizzle batter into simmering broth while stirring gently with chopsticks — aim for rice-grain to pea-sized geda.",
      "textZh": "面粉加冷水搅匀成稀糊，静置3分钟；边搅汤边将面糊缓缓滴入，形成米粒至豌豆大小的疙瘩。",
      "zhHint": "滴入时顺一个方向搅，防结团",
      "stateNote": {
        "visual": "Each droplet forms a distinct, separate geda that swells within seconds.",
        "visualZh": "每滴面糊入锅即成独立疙瘩，数秒内微微膨起。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Batter sizzles faintly on contact — if silent, broth is too cool.",
        "signalZh": "面糊入锅有轻微滋滋声——若无声，说明汤温不足。"
      }
    },
    {
      "text": "Simmer 4 minutes until geda are tender and float. Return shrimp and clams to soup. Warm through (1 min), stirring gently.",
      "textZh": "小火煮4分钟至疙瘩熟透浮起；回入虾仁与蛤蜊，轻搅加热1分钟。",
      "zhHint": "回料后勿久煮，保鲜嫩",
      "stateNote": {
        "visual": "All geda buoyant and uniformly pearly-white; shrimp and clams glisten in broth.",
        "visualZh": "所有疙瘩浮起、呈均匀乳白色；虾仁与蛤蜊在汤中泛光。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Broth resumes gentle shimmer — no vigorous bubbling.",
        "signalZh": "汤面重现微光，无剧烈沸腾。"
      }
    },
    {
      "text": "Off heat, stir in scallion greens and 1 tsp sesame oil. Taste — only add salt if broth lacks depth (most clam broths need none).",
      "textZh": "关火，撒葱绿，淋芝麻油；尝味——多数蛤蜊汤无需额外加盐。",
      "zhHint": "蛤蜊自带咸鲜，慎加盐",
      "stateNote": {
        "visual": "Oil creates shimmering ribbons; scallions stay vivid green.",
        "visualZh": "芝麻油在汤面拉出细亮金丝；葱绿段鲜翠欲滴。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Aroma lifts warmly — no raw alcohol or flour notes remain.",
        "signalZh": "香气升腾温润，无生酒或生面味。"
      }
    }
  ],
  "tips": [
    "Clam broth is naturally salty — always taste before seasoning.",
    "Use small shrimp (31–40 count) — larger ones overcook before geda finish.",
    "For extra clarity, skim foam during initial simmer."
  ],
  "tipsZh": [
    "蛤蜊汤自带咸度，务必先尝再调味。",
    "选用中小虾仁（31–40只/磅）——大虾易老。",
    "初沸时撇去浮沫，汤色更清亮。"
  ],
  "relatedSlugs": [
    "tomato-geda-soup"
  ],
  "image": "/images/recipes/seafood-geda-soup.webp"
};
