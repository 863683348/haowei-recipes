import type { Recipe } from "@/lib/types";

/** Puffed Egg-Stuffed Pancake (鸡蛋灌饼) — Seed batch */
export const ji_dan_guan_bing: Recipe = {
  "id": "ji-dan-guan-bing",
  "slug": "ji-dan-guan-bing",
  "titleEn": "Puffed Egg-Stuffed Pancake",
  "titleZh": "鸡蛋灌饼",
  "pinyin": "jī dàn guàn bǐng",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Street Snack",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks skip the press-and-poke technique used by street vendors — instead, we use gentle steam-injection via egg injection after partial cooking, yielding reliable puff without special tools.",
  "versionNoteZh": "家庭版弃用街头摊贩的‘压孔注蛋’手法，改用半熟后注入蛋液+盖锅焖蒸法，无需专用工具，蓬松稳定。",
  "tags": [
    "30-min",
    "breakfast",
    "egg-pancake"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Beijing’s Hutong made these every Sunday before temple visits. She’d whisper ‘the egg must breathe’ as she lifted the edge to inject — meaning: leave air space for steam expansion.",
  "storyZh": "我北京胡同里的奶奶每逢周日去庙里前都做这个。她掀饼边注蛋时总念叨‘蛋要喘气’——意思是留出蒸汽膨胀的空隙。",
  "ingredients": [
    {
      "id": "eg-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "250 g",
      "amountUS": "2 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Standard all-purpose flour — no need for specialty flours.",
      "noteZh": "普通中筋面粉即可，无需特殊粉类。"
    },
    {
      "id": "eg-02",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "eg-03",
      "nameEn": "egg",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "3",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "eg-04",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp, finely chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "eg-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "pinyin": "yán",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Mix flour and salt. Gradually add 150 ml warm water (40°C), kneading into a soft, supple dough. Cover and rest 30 minutes.",
      "textZh": "将面粉与盐混合，缓慢加入150ml温水（40°C），揉成柔软有弹性的面团，盖湿布醒发30分钟。",
      "zhHint": "水温不烫手为宜",
      "stateNote": {
        "visual": "Dough forms a smooth, slightly tacky ball that springs back slowly when poked.",
        "visualZh": "面团成光滑略粘手球体，指压后缓慢回弹。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "Surface looks hydrated, no dry cracks.",
        "signalZh": "表面润泽，无干裂纹。"
      }
    },
    {
      "text": "Divide dough into two balls. Roll each into a 15-cm round. Brush top surface lightly with sesame oil, sprinkle scallions and pinch edges to seal. Roll again into 18-cm rounds — layers will form naturally.",
      "textZh": "将面团分两份，各擀成15厘米圆饼；表面薄刷香油，撒葱花，捏紧边缘封口；再擀成18厘米圆饼，自然形成层次。",
      "zhHint": "封口要严，防漏气",
      "stateNote": {
        "visual": "Surface shows faint concentric rings and subtle sheen from oil.",
        "visualZh": "表面可见隐约同心圆纹及油润光泽。",
        "timeRef": "2 minutes per piece",
        "timeRefZh": "每张2分钟",
        "signal": "Edges stay sealed without splitting during rolling.",
        "signalZh": "擀制时边缘不开裂、不漏气。"
      }
    },
    {
      "text": "Heat a heavy-bottomed skillet over medium heat. Cook first pancake 90 seconds until bottom is pale gold and blisters appear. Flip — do NOT press down.",
      "textZh": "厚底平底锅中火加热，烙第一张饼90秒至底面浅金黄并起泡；翻面——切勿按压！",
      "zhHint": "起泡=内部开始膨胀",
      "stateNote": {
        "visual": "Small, even blisters (2–3 mm) dot the surface like tapioca pearls.",
        "visualZh": "表面密布2–3毫米大小均匀气泡，如木薯珍珠。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium",
        "signal": "Blisters hold shape when gently tapped with spatula.",
        "signalZh": "铲背轻触，气泡不塌陷。"
      }
    },
    {
      "text": "Immediately after flipping, pierce 3 small holes around center with chopstick tip. Quickly pour 1 lightly beaten egg (about 30 ml) through holes into the pocket. Cover pan and steam 60 seconds.",
      "textZh": "翻面后即用筷子尖在饼中心周围戳3个小孔，迅速将1个打散蛋液（约30ml）注入孔中，盖锅焖蒸60秒。",
      "zhHint": "蛋液要分次注入，防溢出",
      "stateNote": {
        "visual": "Egg flows visibly into gaps; surface swells upward 5–8 mm.",
        "visualZh": "蛋液清晰渗入夹层，饼面整体隆起5–8毫米。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "medium-low",
        "signal": "Slight hissing sound under lid; steam condenses on underside.",
        "signalZh": "锅盖下有轻微嘶嘶声；盖内侧凝结水珠。"
      }
    },
    {
      "text": "Uncover, cook uncovered 45 seconds until top sets and bottom crisps. Flip once more and cook final 30 seconds. Slice into wedges and serve hot.",
      "textZh": "揭盖，再烙45秒至表层凝固、底面酥脆；再翻面烙30秒。切块趁热上桌。",
      "zhHint": "最后一面决定酥脆度",
      "stateNote": {
        "visual": "Edges curl and turn deep amber; cut surface reveals airy, eggy core.",
        "visualZh": "边缘卷曲呈深琥珀色；切开见蓬松蛋芯。",
        "timeRef": "75 seconds total uncovered",
        "timeRefZh": "共75秒敞盖",
        "heat": "medium",
        "signal": "Bottom emits hollow ‘tap’ sound when tapped with spatula handle.",
        "signalZh": "铲柄轻叩底面，发出空响。"
      }
    }
  ],
  "tips": [
    "Keep egg at room temperature — cold egg slows puffing.",
    "If egg leaks, reduce next injection volume by 5 ml — dough hydration varies.",
    "Best eaten within 5 minutes; reheating makes it dense."
  ],
  "tipsZh": [
    "蛋液需回温至室温，冷蛋延缓膨起。",
    "若蛋液外溢，下次减注5ml——面团吸水率因品牌而异。",
    "最佳赏味期5分钟内；回热会使饼体变实。"
  ],
  "relatedSlugs": [
    "jianbing-guo-zi"
  ],
  "image": "/images/recipes/ji-dan-guan-bing.webp"
};
