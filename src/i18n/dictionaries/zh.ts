/**
 * UI 文案字典 — 中文
 * 结构与 en.ts 完全一致（Dict 类型约束）。
 */
import type { Dict } from "./en";

export const dictZh: Dict = {
  common: {
    brand: "HǎoWèi",
    brandZh: "好味",
    minutes: "分钟",
    serves: "人份",
    difficulty: {
      easy: "简单",
      medium: "中等",
      hard: "较难",
    },
    dietary: {
      vegetarian: "素食友好",
      vegan: "纯素",
      "gluten-free": "无麸质",
      "low-sodium": "低钠",
      halal: "清真",
    },
    theme: { light: "浅色", dark: "深色" },
    languageSwitch: "EN",
    unitMetric: "g/ml",
    unitUS: "cup/tbsp",
  },
  header: {
    recipes: "菜谱",
    substitutions: "替换",
    glossary: "术语表",
    aiAssistant: "AI 助手",
    shoppingList: "清单",
  },
  footer: {
    tagline:
      "正宗中国家常菜，英文菜谱 + 西方超市替代方案 + 中英对照术语 + 可对照的火候状态图。告别“适量”。",
    explore: "探索",
    allRecipes: "全部菜谱",
    ingredientSubstitutions: "食材替换",
    glossary: "中餐术语表",
    askAI: "问 AI 助手",
    about: "关于",
    ourStory: "我们的故事",
    faq: "常见问题",
    privacy: "隐私政策",
    contact: "联系我们",
    copyright: "正宗中国家常菜，简单易做。",
  },
  home: {
    eyebrow: "家常菜 · Chinese home cooking",
    heroTitle: "正宗中国家常菜，简单易做",
    heroDesc:
      "来自中国家庭厨房的真实菜谱——提供西方超市食材替换、中英对照术语和火候状态图，让你知道每一步该看什么。告别“适量”。",
    browseAll: "浏览全部菜谱",
    askAI: "问 AI 助手",
    situationsTitle: "无论什么场景都能做",
    scenarios: [
      {
        icon: "bolt",
        title: "30 分钟快手菜",
        desc: "工作日经典菜，从冰箱到餐桌快速搞定。",
        href: "/recipes?time=30",
      },
      {
        icon: "rice",
        title: "剩饭大变身",
        desc: "隔夜饭和零碎食材也能变成一顿晚餐。",
        href: "/recipes?tag=leftover",
      },
      {
        icon: "leaf",
        title: "素食友好",
        desc: "麻婆豆腐、葱油饼等无需肉类的美味。",
        href: "/recipes?diet=vegetarian",
      },
    ],
    startHere: "从这里开始",
    viewAll: "查看全部 →",
  },
  recipes: {
    title: "全部菜谱",
    subtitle: "{n} 篇菜谱 · 每种食材中英对照，每个“看状态”步骤都有状态说明。",
    allCuisines: "全部菜系",
    anyDifficulty: "任意难度",
    anyTime: "任意时长",
    timeOptions: [
      { value: "15", label: "≤ 15 分钟" },
      { value: "30", label: "≤ 30 分钟" },
      { value: "45", label: "≤ 45 分钟" },
    ],
    anyDiet: "任意饮食",
    noRestriction: "无限制",
    search: "搜索…",
    filter: "筛选",
    reset: "重置",
    empty: "没有符合筛选条件的菜谱——我们每周都在上新。",
  },
  recipeDetail: {
    homeVersion: "家庭快手版 · Home version",
    instructions: "做法",
    tips: "小贴士",
    cookNext: "接着做",
    ingredients: "食材",
    addAllToList: "全部加入购物清单",
    addToShoppingList: "食材加入购物清单",
    addedToShoppingList: "已加入清单",
    lookFor: "看状态",
    visual: "状态：",
    youKnow: "判断标准：",
    use: "使用：",
    fidelity: "还原度：{f}/5",
    pantryLocal: "本地超市",
    pantryAsian: "亚超",
    stateNoteHeat: "{heat}",
    recipeJsonLd: "",
  },
  stateNote: {
    heatLabels: {
      low: "小火",
      "medium-low": "中小火",
      medium: "中火",
      "medium-high": "中大火",
      high: "大火",
    },
  },
  substitutionPanel: {
    title: "食材替换查询",
    hint: "“没有 X，用什么代替？”输入食材名称",
    placeholder: "例如：老抽",
    find: "查询",
    fidelityExcellent: "完美替代",
    fidelityVeryClose: "非常接近",
    fidelityGood: "可用，需调整",
    fidelityApproximate: "近似",
    notFound:
      '没有找到“{q}”的替代方案。试试酱油、醋、料酒这类常备调料——或在 AI 助手里提问。',
    aiAssistantLink: "AI 助手",
    ingredientLabel: "要替换的食材",
  },
  flavor: {
    title: "按你的口味调整",
    subtitle: "选一个等级，我们告诉你具体改多少——告别“适量”。",
  },
  aiAssistant: {
    title: "问 HǎoWèi",
    subtitle: "关于技法、食材、替换和口味的问题——基于我们验证过的烹饪知识库回答。",
    placeholder: "例如：“为什么要用小火先炒蒜？”",
    ask: "提问",
    confidence: {
      high: "已核实",
      medium: "仅供参考",
      low: "谨慎尝试",
    },
    source: "来源",
    suggestions: [
      "为什么蒜要用小火先炒？",
      "生抽和老抽有什么区别？",
      "没有料酒怎么办？",
      "太咸了怎么补救？",
      "这道菜无麸质吗？",
      "可以做成素食吗？",
    ],
    fallback:
      '我暂时不确定“{q}”的答案——目前我是基于规则库回答，覆盖技法、食材、口味、厨具和饮食问题。换个问法试试，或查看常见问题页。未来我会支持更智能的 LLM 回答。',
  },
  shoppingList: {
    title: "购物清单",
    copy: "复制为文本",
    copied: "已复制",
    clearAll: "清空",
    empty: "清单还是空的。打开一篇菜谱，点击",
    addHint: "“食材加入购物清单”。",
    browseRecipes: "浏览菜谱",
    localSupermarket: "本地超市",
    asianGrocery: "亚超 / 线上",
    other: "其他",
    nothingHere: "这里还没有内容。",
    remove: "移除",
    header: "HǎoWèi 购物清单",
    listHeader: "本地超市",
    listAsian: "亚超 / 线上",
    listOther: "其他",
  },
  termsPage: {
    title: "中餐术语表",
    subtitle:
      "{n} 个中国家常菜必备术语——中英对照、定量换算、附替代方案。菜谱中悬停任意术语即可查看。",
    categories: [
      { id: "sauce", label: "酱料" },
      { id: "spice", label: "香料" },
      { id: "technique", label: "技法" },
      { id: "ingredient", label: "食材" },
      { id: "measurement", label: "计量" },
    ],
    colZh: "中文",
    colEn: "English",
    colWhat: "是什么",
    colSwap: "替代",
  },
  substitutionsPage: {
    title: "中餐食材替换表",
    subtitle:
      "{n} 个经过验证的替换方案，每个都标注还原度——动手前就知道味道有多接近。",
    fullTable: "完整替换表",
  },
  aboutPage: {
    title: "关于 HǎoWèi 好味",
    paragraphs: [
      {
        lead: true,
        content:
          "好味 (hǎo wèi) 意为“好的味道”——也是“家的味道”。HǎoWèi 的诞生源于一个简单的观察：海外有无数人热爱中餐，但他们能找到的“中式”菜谱大多美式中餐化、含糊不清，或者用到见都没见过的食材。",
      },
      {
        lead: false,
        content: "我们致力于解决在海外做正宗中餐的三大障碍：",
      },
      {
        lead: false,
        bullets: [
          {
            strong: "术语之墙。",
            text: "生抽、老抽、料酒、蚝油——每个术语都中英对照、定量换算（1 汤匙 ≈ 15 毫升），绝不写“适量”。",
          },
          {
            strong: "食材难题。",
            text: "每道菜的食材都标注“本地超市”或“亚超”，替换引擎会告诉你具体怎么换、还原度几星。",
          },
          {
            strong: "“看状态”难题。",
            text: "中餐讲究看食物而不是看计时器。每个视觉信号（“炒出香味”“边缘金黄”）都配状态说明，告诉你该看什么。",
          },
        ],
      },
      {
        lead: false,
        content:
          "我们的菜谱来自真实的中国家庭厨房——家常菜，是家里真正会做的菜，而不是餐厅菜谱的翻版。每道菜以英文为主（面向读者）、中文为辅，因为正宗与清晰不该互相矛盾。",
      },
    ],
    getInTouch: "有问题？",
    contactLink: "联系我们",
  },
  faqPage: {
    title: "常见问题",
    subtitle: "来自烹饪知识库的解答。想用自己的话说？试试",
    aiAssistantLink: "AI 助手",
    source: "来源",
  },
  privacyPage: {
    title: "隐私政策",
    paragraphs: [
      {
        strong: "简而言之：",
        text: "HǎoWèi 好味几乎不存储你的任何信息。本站没有账号系统，除运行所需外不做任何追踪。",
      },
      {
        strong: "本地存储。",
        text: "你的购物清单、计量偏好（g/ml 与 cup/tbsp）、主题选择只保存在你自己浏览器的本地存储中，我们看不到。",
      },
      {
        strong: "无账号。",
        text: "本站无需注册、登录，也没有用户档案。AI 助手是基于规则库的问答引擎——你的问题在浏览器本地得到回答，不会传给任何第三方。",
      },
      {
        strong: "统计。",
        text: "我们可能使用尊重隐私、无 cookie 的统计工具来了解哪些菜谱受欢迎。不收集任何个人数据。",
      },
      {
        strong: "第三方链接。",
        text: "购物清单中的链接可能指向联盟商家；在相关页面我们会注明联盟关系。",
      },
      {
        strong: "联系。",
        text: "有问题？",
      },
    ],
    contactLink: "联系我们",
    lastUpdated: "最后更新：2026-08-15。",
  },
  contactPage: {
    title: "联系我们",
    subtitle: "菜谱建议、勘误或合作想法——我们都会认真阅读。",
    emailLine: "目前请发邮件至",
    tellUs:
      "告诉我们：你最想要哪道菜、哪个食材让你困惑、哪道菜没做成功——我们都会修复。",
  },
  notFound: {
    title: "这道菜还没上菜单",
    desc: "你要找的页面不存在——但这里有很多菜谱。",
    browse: "浏览菜谱",
  },
  metadata: {
    siteTitle: "HǎoWèi 好味 — 正宗中国家常菜，简单易做",
    siteDesc:
      "正宗中国家常菜谱：西方超市食材替换、中英对照术语、分步状态图。从麻婆豆腐到番茄炒蛋，在家做出地道家常菜。",
    homeTitle: "正宗中国家常菜 — HǎoWèi 好味",
    homeDesc:
      "正宗中国家常菜谱：西方超市食材替换、中英对照术语、分步状态图。从麻婆豆腐到番茄炒蛋，在家做出地道中餐。",
    recipesTitle: "全部菜谱",
    recipesDesc:
      "浏览正宗中国家常菜谱——按菜系、难度、时长和饮食需求筛选。英文菜谱，中英对照术语与替换方案。",
    termsTitle: "中餐术语表",
    termsDesc:
      "必备中餐术语表：生抽、老抽、绍兴酒、郫县豆瓣酱等——中英对照，含定量换算与替代方案。",
    substitutionsTitle: "中餐食材替换",
    substitutionsDesc:
      "没有料酒、老抽或郫县豆瓣酱？找到最好的西方超市替代品，含还原度星级、换算比例与风味说明。",
    aiTitle: "AI 烹饪助手",
    aiDesc:
      "问 HǎoWèi 任何中餐问题：为什么用小火、如何替换食材、什么是“上浆”、菜太咸怎么补救。",
    aboutTitle: "关于我们",
    aboutDesc:
      "HǎoWèi 好味致力于让海外华人也能轻松做出正宗中国家常菜——中英对照、定量精准、替换友好。",
    faqTitle: "常见问题",
    faqDesc: "中国家常菜常见问题——替换、技法、饮食调整与厨具。",
    privacyTitle: "隐私政策",
    privacyDesc: "HǎoWèi 好味隐私政策——我们几乎不存储任何信息，以及原因。",
    contactTitle: "联系我们",
    contactDesc: "联系 HǎoWèi 好味。",
    recipeTitle: "{title} 菜谱",
  },
};
