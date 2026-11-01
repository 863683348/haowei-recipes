import type { Recipe } from "@/lib/types";

/** Rice Cooker Char Siu (Dianfanbao Chashao) (电饭煲叉烧) — Day batch */
export const rice_cooker_char_siu: Recipe = {
  "id": "dian-fan-bao-cha-shao",
  "slug": "rice-cooker-char-siu",
  "titleEn": "Rice Cooker Char Siu (Dianfanbao Chashao)",
  "titleZh": "电饭煲叉烧",
  "pinyin": "diàn fàn bǎo chā shāo",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 70,
  "servings": 4,
  "version": "family",
  "versionNote": "This is the apartment version of char siu: the rice cooker does what an oven or hanging rack would do in a restaurant, and the sauce reduces right in the pot. Restaurant char siu has a drier, more caramelised exterior from high heat, which you cannot fully copy here.",
  "versionNoteZh": "这是叉烧的公寓版：电饭煲代替了餐馆的烤炉或挂炉，酱汁直接在锅里收干。餐馆叉烧靠高温得到更干、更焦糖化的外皮，这一点在家无法完全复刻。",
  "tags": [
    "70-min",
    "rice-cooker",
    "cantonese",
    "pork",
    "make-ahead"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the recipe that circulates in every Chinese student group chat, usually with a photo of a very surprised-looking person holding up a rice cooker lid. It works because a rice cooker holds a steady low temperature for a long time, which is exactly what a tough cut like pork shoulder needs. It is not the same as real char siu, but it is very good on rice.",
  "storyZh": "这是每个中国留学生群里都在转的方子，配图通常是一个人举着电饭煲盖、表情非常惊喜。它成立的原因是电饭煲能长时间保持稳定低温，而这正是猪肩肉这种部位需要的。它不等于真正的叉烧，但配米饭非常好吃。",
  "ingredients": [
    {
      "id": "cs-01",
      "nameEn": "pork shoulder, in one piece",
      "nameZh": "猪肩肉（整块）",
      "pinyin": "zhū jiān ròu",
      "amountMetric": "700 g",
      "amountUS": "1.5 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Shoulder has enough fat to stay juicy. Sub: pork loin, but reduce cooking time by 15 minutes.",
      "noteZh": "猪肩肉肥瘦适中不易柴。替代：猪里脊，但时间要缩短15分钟。"
    },
    {
      "id": "cs-02",
      "nameEn": "char siu sauce",
      "nameZh": "叉烧酱",
      "pinyin": "chā shāo jiàng",
      "amountMetric": "60 g",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sub: mix 2 tbsp hoisin, 1 tbsp honey, 1 tbsp light soy, 1/2 tsp five-spice.",
      "noteZh": "替代：2汤匙海鲜酱+1汤匙蜂蜜+1汤匙生抽+1/2茶匙五香粉调匀。"
    },
    {
      "id": "cs-03",
      "nameEn": "hoisin sauce",
      "nameZh": "海鲜酱",
      "pinyin": "hǎi xiān jiàng",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "hoisin-sauce"
    },
    {
      "id": "cs-04",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "pinyin": "fēng mì",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cs-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cs-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cs-07",
      "nameEn": "garlic, crushed",
      "nameZh": "蒜（拍碎）",
      "pinyin": "suàn",
      "amountMetric": "15 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cs-08",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wǔ xiāng fěn",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "cs-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Prick the pork all over with a fork or skewer, about 20 times on each side, then put it in a bowl with char siu sauce, hoisin, soy sauce, wine, garlic, five-spice and white pepper. Turn it to coat and marinate at least 30 minutes, or overnight covered in the fridge.",
      "textZh": "用叉子或竹签在猪肉两面各扎约20下，放入碗中加叉烧酱、海鲜酱、生抽、黄酒、蒜、五香粉和白胡椒粉，翻匀腌制至少30分钟，或加盖冷藏过夜。",
      "zhHint": "扎孔后腌30分钟以上",
      "stateNote": {
        "visual": "Surface is evenly coated dark red-brown; marinade clings instead of sliding off; prick holes visible on all sides",
        "visualZh": "表面均匀裹上深红褐色酱料；腌料挂住不滑落；两面可见扎孔",
        "timeRef": "30 minutes or overnight",
        "timeRefZh": "30分钟或过夜",
        "signal": "Lifting the meat leaves a thick coating, and marinade has begun to darken where it entered the holes",
        "signalZh": "提起肉块时挂着厚厚一层酱，扎孔处酱色已渗深"
      },
      "tip": "The pricking is not decorative — it is how the marinade gets past the surface into the meat.",
      "tipZh": "扎孔不是摆样子——这是腌料从表面进到肉里的通道。"
    },
    {
      "text": "Put the pork and all the marinade into the rice cooker pot. Close the lid and press the standard cook button.",
      "textZh": "把猪肉连同全部腌料放入电饭煲内锅。盖盖，按下标准煮饭键。",
      "zhHint": "连腌料一起入电饭煲",
      "stateNote": {
        "visual": "Meat sits in about 1 cm of sauce in the bottom of the pot; liquid does not come up the sides of the meat",
        "visualZh": "肉块浸在锅底约1厘米深的酱汁中；液体未没过肉的侧面",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Tilting the pot slightly moves the sauce around the meat but never covers it",
        "signalZh": "轻倾锅体酱汁会绕肉流动但始终盖不住肉"
      },
      "tip": "Do not add water — the meat and sauce release plenty of liquid and extra water makes it boil rather than braise.",
      "tipZh": "不要加水——肉和酱汁本身会出很多水，额外加水会变成水煮而非卤烧。"
    },
    {
      "text": "When the cooker switches to keep-warm, turn the meat over, press cook again, and let a second cycle run.",
      "textZh": "跳闸保温后把肉翻面，再按一次煮饭键，跑第二个循环。",
      "zhHint": "翻面再走一个煮饭循环",
      "stateNote": {
        "visual": "The side that was down is now deep red-brown and slightly caramelised; the top side is still pale pink-brown",
        "visualZh": "朝下一面已变成深红褐色、略带焦糖化；朝上一面仍是浅粉褐色",
        "timeRef": "about 30 minutes",
        "timeRefZh": "约30分钟",
        "signal": "A skewer pushed into the thickest part meets no resistance and the juices that run out are clear, not pink",
        "signalZh": "竹签插入最厚处毫无阻力，流出的汁水清澈而非粉红"
      },
      "tip": "The second cycle is where the colour develops. One cycle gives you poached pork, two gives you char siu.",
      "tipZh": "上色全靠第二个循环。一个循环只是水煮肉，两个循环才是叉烧。"
    },
    {
      "text": "Remove the meat to a board and pour the sauce from the pot into a small pan. Simmer over medium heat 5 minutes until it thickens enough to coat a spoon.",
      "textZh": "把肉取出放砧板，锅里的酱汁倒入小锅，中火煮5分钟至能挂勺的浓稠度。",
      "zhHint": "酱汁倒出收浓5分钟",
      "stateNote": {
        "visual": "Sauce darkens and thickens; bubbles become slower and glossy; a spoon drawn through leaves a channel that fills slowly",
        "visualZh": "酱汁变深变稠；气泡变慢且发亮；勺子划过留下缓慢回填的沟痕",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "The sauce runs off a tilted spoon in a slow sheet, not a watery drip",
        "signalZh": "倾斜勺子时酱汁呈片状缓慢流下，而不是水滴状滴落"
      },
      "tip": "Skim the pale fat off the top first if you want a glossier sauce that clings to the meat.",
      "tipZh": "想让酱汁更亮更挂肉，先把上层白色浮油撇掉。"
    },
    {
      "text": "Brush half the reduced sauce over the pork while it is still hot, then let it rest 10 minutes before slicing against the grain into 5 mm / 1/4 in slices.",
      "textZh": "肉还热时把一半收浓的酱汁刷在表面，静置10分钟后逆着纹理切成5毫米厚的片。",
      "zhHint": "刷酱静置10分钟再逆纹切片",
      "stateNote": {
        "visual": "Surface is lacquered dark red and tacky; slices show a pink interior ring fading to a dark red edge",
        "visualZh": "表面呈深红亮泽、略发黏；切面可见粉红内圈向外渐变为深红",
        "timeRef": "10 minutes resting",
        "timeRefZh": "静置10分钟",
        "signal": "The brush drags slightly rather than gliding, meaning the glaze has set",
        "signalZh": "刷子划过时略有阻力而非顺滑，说明酱已挂住"
      },
      "tip": "Resting before slicing is non-negotiable — cut too early and all the juice runs onto the board.",
      "tipZh": "切片前静置不能省——切太早，肉汁会全流到砧板上。"
    },
    {
      "text": "Serve the slices with the remaining sauce spooned over, on plain rice or in a steamed bun.",
      "textZh": "肉片摆盘，淋上剩余酱汁，配白米饭或夹入蒸馒头中食用。",
      "zhHint": "淋汁配饭或夹馒头",
      "stateNote": {
        "visual": "Slices are glossy and distinct, not stuck together; sauce pools slightly at the base of the plate",
        "visualZh": "肉片油亮分明、互不粘连；盘底略有酱汁积聚",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Lifting a slice shows sauce stretching briefly before it breaks",
        "signalZh": "提起一片肉时酱汁会短暂拉丝后断开"
      },
      "tip": "Save the trimmings and end pieces — chopped up with rice the next day they make the best fried rice of your week.",
      "tipZh": "边角料别扔——第二天切碎炒饭，是你这周最好吃的一碗。"
    }
  ],
  "tips": [
    "Line the pot with a sheet of parchment if your rice cooker has a non-stick coating you want to protect from the sugar.",
    "For a more authentic edge, finish the slices under a grill for 2 minutes a side, watching closely.",
    "Marinate overnight if you can — thirty minutes flavours the surface, overnight flavours the meat."
  ],
  "tipsZh": [
    "想保护电饭煲不粘涂层不被糖分侵蚀，可在锅底垫一张烘焙纸。",
    "想要更接近烧腊店的效果，可把肉片放烤炉下两面各烤2分钟，务必盯紧。",
    "能过夜就过夜——30分钟只腌到表面，过夜才腌进肉里。"
  ],
  "relatedSlugs": [
    "char-siu-pork",
    "twice-cooked-pork",
    "hongshao-pork"
  ],
  "image": "/images/recipes/char-siu-pork.webp"
};
