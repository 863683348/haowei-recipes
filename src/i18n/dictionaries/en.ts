/**
 * UI 文案字典 — English（类型源头）
 * 所有 UI 文案集中于此；zh.ts 以相同结构翻译。
 */
export const dict = {
  common: {
    brand: "HǎoWèi",
    brandZh: "好味",
    minutes: "min",
    serves: "serves",
    difficulty: {
      easy: "Easy",
      medium: "Medium",
      hard: "Hard",
    },
    dietary: {
      vegetarian: "Vegetarian-ok",
      vegan: "Vegan",
      "gluten-free": "Gluten-free",
      "low-sodium": "Low-sodium",
      halal: "Halal",
    },
    theme: { light: "Light", dark: "Dark" },
    languageSwitch: "中文",
    unitMetric: "g/ml",
    unitUS: "cup/tbsp",
  },
  header: {
    recipes: "Recipes",
    substitutions: "Substitutions",
    glossary: "Glossary",
    blog: "Blog",
    aiAssistant: "AI Assistant",
    shoppingList: "🛒 List",
    signIn: "Sign In",
  },
  footer: {
    tagline:
      "Authentic Chinese home cooking in English — with substitutions for Western supermarkets, bilingual terms, and state photos you can actually follow.",
    explore: "Explore",
    allRecipes: "All recipes",
    ingredientSubstitutions: "Ingredient substitutions",
    glossary: "Chinese cooking glossary",
    askAI: "Ask the AI assistant",
    about: "About",
    ourStory: "Our story",
    faq: "FAQ",
    editorialPolicy: "Editorial policy",
    privacy: "Privacy",
    contact: "Contact",
    copyright: "Authentic Chinese home cooking, made easy.",
  },
  home: {
    eyebrow: "家常菜 · Chinese home cooking",
    heroTitle: "Authentic Chinese home cooking, made easy",
    heroDesc:
      "Real recipes from Chinese family kitchens — in English, with substitutions for Western supermarkets, bilingual terms, and state photos so you know exactly what to look for. No more “适量”.",
    browseAll: "Browse all recipes",
    askAI: "🥢 Ask the AI assistant",
    situationsTitle: "Cooking for every situation",
    scenarios: [
      {
        icon: "⚡",
        title: "30-minute dinners",
        desc: "Weeknight classics that go from fridge to table fast.",
        href: "/recipes?time=30",
      },
      {
        icon: "🍚",
        title: "Leftover magic",
        desc: "Day-old rice and odds & ends become dinner.",
        href: "/recipes?tag=leftover",
      },
      {
        icon: "🌱",
        title: "Vegetarian-friendly",
        desc: "Mapo tofu, scallion pancakes, and more without meat.",
        href: "/recipes?diet=vegetarian",
      },
    ],
    startHere: "Start here",
    viewAll: "View all →",
    hubTitle: "Explore by category",
    hubLinks: [
      { title: "Sichuan", desc: "Mapo tofu, kung pao & la zi ji", href: "/cuisine/sichuan", icon: "🌶️" },
      { title: "Chicken", desc: "Kung pao, wings & braised legs", href: "/recipes/chicken", icon: "🍗" },
      { title: "Beef", desc: "Velvet stir-fries & stews", href: "/recipes/beef", icon: "🥩" },
      { title: "Tofu", desc: "Mapo, braised & home-style", href: "/recipes/tofu", icon: "🧊" },
      { title: "Noodles & Rice", desc: "Scallion noodles & fried rice", href: "/recipes/noodles", icon: "🍜" },
      { title: "Dumplings", desc: "Chive egg & pork cabbage", href: "/recipes/dumplings", icon: "🥟" },
      { title: "Soups", desc: "Egg drop & winter melon", href: "/recipes/soups", icon: "🍲" },
      { title: "Vegetarian", desc: "17 meatless home dishes", href: "/recipes/vegetarian", icon: "🌱" },
      { title: "Seasonal menus", desc: "CNY feast, solstice, Thanksgiving sides", href: "/occasion/chinese-new-year", icon: "🧧" },
    ],
    pdfCta: {
      title: "Get the HǎoWèi Recipe Collection (PDF)",
      desc: "Our first 30 recipes, formatted for print and offline cooking.",
      preview: "Preview",
      download: "Download free PDF",
    },
  },
  recipes: {
    title: "All recipes",
    subtitle: "{n} recipe{s} · every ingredient bilingual, every “look” step has a state note.",
    allCuisines: "All cuisines",
    anyDifficulty: "Any difficulty",
    anyTime: "Any time",
    timeOptions: [
      { value: "15", label: "≤ 15 min" },
      { value: "30", label: "≤ 30 min" },
      { value: "45", label: "≤ 45 min" },
    ],
    anyDiet: "Any diet",
    noRestriction: "No restriction",
    search: "Search…",
    filter: "Filter",
    reset: "Reset",
    empty: "No recipes match those filters yet — we're adding new dishes every week.",
    prev: "Prev",
    next: "Next",
    pageOf: "Page {page} of {pages} · {total} recipes",
    otherCuisines: "Explore other Chinese cuisines",
    cuisineEmpty: "Recipes for this cuisine are being added.",
    moreTags: "More collections",
    moreOccasions: "More seasonal menus",
  },
  recipeDetail: {
    homeVersion: "家庭快手版 · Home version",
    instructions: "Instructions",
    tips: "Tips",
    cookNext: "Cook next",
    ingredients: "Ingredients",
    addAllToList: "🛒 Add all to shopping list",
    addToShoppingList: "🛒 Add ingredients to shopping list",
    addedToShoppingList: "✓ Added to list",
    lookFor: "🔍 Look for",
    visual: "Visual: ",
    youKnow: "You know it's right when: ",
    use: "Use: ",
    fidelity: "Fidelity: {f}/5",
    pantryLocal: "🛒 local",
    pantryAsian: "🏮 asian",
    stateNoteHeat: "🔥 {heat}",
    recipeJsonLd: "",
    pairingTitle: "What to serve with it",
    pairingDesc: "A complete Chinese dinner in one plan — pick one from each role.",
    pairingMain: "Main",
    pairingSide: "Side",
    pairingStaple: "Staple",
    pairingSoup: "Soup",
    relatedFaqs: "Common questions",
    viewsLabel: "views",
    depthSubs: "Ingredient swaps",
    depthSubsDesc: "Can't find an Asian-market staple? Use these.",
    depthMistakes: "Don't make these mistakes",
    depthMistakesDesc: "The traps every home cook hits — and how to avoid them.",
    depthVars: "Ways to change it up",
    depthVarsDesc: "One dish, three moods.",
    swap: "Swap",
    ratioLabel: "Ratio",
    mistakeFix: "Fix:",
    authorLabel: "Recipe author",
    authorName: "HǎoWèi Test Kitchen",
    authorRole: "Home-cooking research team",
    reviewedBy: "Reviewed by",
    reviewedByName: "HǎoWèi editorial team",
    lastUpdated: "Last updated",
    referencesTitle: "Sources & references",
    referencesIntro:
      "Quantities, technique notes, and substitution ratios are cross-checked against established Chinese cookery references and standard food-science sources.",
    editorialPolicyLink: "Read our editorial policy",
  },
  stateNote: {
    heatLabels: {
      low: "Low heat",
      "medium-low": "Medium-low",
      medium: "Medium heat",
      "medium-high": "Medium-high",
      high: "High heat",
    },
  },
  substitutionPanel: {
    title: "🔁 Ingredient substitution finder",
    hint: "“I don't have X — what do I use?” Type the ingredient",
    placeholder: "e.g. dark soy sauce",
    find: "Find",
    fidelityExcellent: "Excellent match",
    fidelityVeryClose: "Very close",
    fidelityGood: "Good, adjusted",
    fidelityApproximate: "Approximate",
    notFound:
      'No substitution found for "{q}". Try a pantry staple like soy sauce, vinegar, or cooking wine — or ask in the AI assistant.',
    aiAssistantLink: "AI assistant",
    ingredientLabel: "Ingredient to substitute",
  },
  flavor: {
    title: "🌶️ Adjust to your taste",
    subtitle: 'Pick a level and we\'ll show exactly how much to change — no more "适量".',
  },
  aiAssistant: {
    title: "🥢 Ask HǎoWèi",
    subtitle:
      "Questions about technique, ingredients, substitutions, and flavor — answered from our verified cooking knowledge base.",
    placeholder: 'e.g. "Why do you cook garlic first on low heat?"',
    ask: "Ask",
    confidence: {
      high: "Verified",
      medium: "Advisory",
      low: "Try with care",
    },
    source: "Source",
    suggestions: [
      "Why low heat for garlic?",
      "What's the difference between light and dark soy?",
      "No Shaoxing wine — substitute?",
      "Too salty, how to fix?",
      "Is this gluten-free?",
      "Make it vegetarian?",
    ],
    fallback:
      'I\'m not sure about "{q}" yet — I\'m currently a rule-based helper covering technique, ingredients, flavor, equipment, and diet questions. Try rephrasing, or check the FAQ page. I\'ll learn LLM-powered answers in a future update.',
  },
  shoppingList: {
    title: "🛒 Shopping list",
    copy: "📋 Copy as text",
    copied: "✓ Copied",
    clearAll: "Clear all",
    empty: "Your list is empty. Open a recipe and hit",
    addHint: "“Add ingredients to shopping list”.",
    browseRecipes: "Browse recipes",
    localSupermarket: "Local supermarket",
    asianGrocery: "Asian grocery / online",
    other: "Other",
    nothingHere: "Nothing here yet.",
    remove: "Remove",
    header: "HǎoWèi shopping list",
    listHeader: "🛒 Local supermarket",
    listAsian: "🏮 Asian grocery / online",
    listOther: "Other",
  },
  termsPage: {
    title: "Chinese cooking glossary",
    subtitle:
      "{n} terms every Chinese home cook needs — bilingual, quantified, with substitutions. Hover any term in a recipe for the same info.",
    categories: [
      { id: "sauce", label: "Sauces & seasonings" },
      { id: "spice", label: "Spices" },
      { id: "technique", label: "Techniques" },
      { id: "ingredient", label: "Ingredients" },
      { id: "measurement", label: "Measurements" },
    ],
    colZh: "中文",
    colEn: "English",
    colWhat: "What it is",
    colSwap: "Swap",
  },
  substitutionsPage: {
    title: "Chinese ingredient substitutions",
    subtitle:
      "{n} vetted swaps, each with a fidelity rating — so you know how close the flavor will be before you commit.",
    fullTable: "Full substitution table",
  },
  aboutPage: {
    title: "About HǎoWèi 好味",
    paragraphs: [
      {
        lead: true,
        content:
          "好味 (hǎo wèi) means “good taste” — and also “the taste of home”. HǎoWèi was born from a simple observation: millions of people outside China love Chinese food, but most “Chinese” recipes they find are Americanized, vague, or call for ingredients they've never seen.",
      },
      {
        lead: false,
        content:
          "We set out to fix the three biggest obstacles to cooking real Chinese food abroad:",
      },
      {
        lead: false,
        bullets: [
          {
            strong: "The terminology wall.",
            text: " 生抽, 老抽, 料酒, 蚝油 — every term is bilingual and quantified (1 tbsp ≈ 15 ml), never “适量”.",
          },
          {
            strong: "The ingredient problem.",
            text: " Every recipe's ingredients are tagged as “local supermarket” or “Asian grocery”, and the substitution engine tells you exactly how to swap, with a fidelity rating.",
          },
          {
            strong: "The “look” problem.",
            text: " Chinese cooking is about watching the food, not reading a timer. Every visual cue (“cooked until fragrant”, “edges turn golden”) gets a state note describing what to look for.",
          },
        ],
      },
      {
        lead: false,
        content:
          "Our recipes come from real Chinese family kitchens — 家常菜, the food that's actually cooked at home, not the restaurant canon. Every dish is written in English first (for our readers) with Chinese as a companion, because authenticity and clarity should not be in conflict.",
      },
    ],
    getInTouch: "Questions?",
    contactLink: "Get in touch",
  },
  editorialPage: {
    title: "Editorial Policy",
    lastUpdated: "Last updated: August 29, 2026.",
    sections: [
      {
        heading: "Our recipe standards",
        content:
          "Every recipe on HǎoWèi is designed for home cooks outside China. We write in English first, then provide Chinese companion text, because clarity and authenticity should not conflict. Each recipe includes bilingual ingredients, metric and US measurements, substitution notes, and visual state cues so you know exactly what to look for.",
      },
      {
        heading: "How we source and test",
        content:
          "Recipes are based on regional Chinese home-cooking techniques, cross-referenced with established Chinese cookery references, standard food-science sources, and real family-kitchen practice. Ingredient ratios and substitution recommendations are tested or verified against published culinary references and nutritional databases.",
      },
      {
        heading: "Substitution ratings",
        content:
          "Substitutions are rated on a 1–5 fidelity scale. A 5-star swap means the dish stays recognizably authentic; lower ratings tell you the flavor profile will shift and by how much. We always explain the trade-off.",
      },
      {
        heading: "Updates and corrections",
        content:
          "Recipes are reviewed periodically. When a reader reports an error or we improve a technique, we update the page and bump the last-updated date. You can request a correction through the contact page.",
      },
      {
        heading: "Affiliates and independence",
        content:
          "Shopping links may be affiliate links. They do not influence which ingredients we recommend or how we rate substitutions.",
      },
    ],
  },
  faqPage: {
    title: "FAQ",
    subtitle: "Answers from our cooking knowledge base. Prefer to ask in your own words? Try the",
    aiAssistantLink: "AI assistant",
    source: "Source",
  },
  privacyPage: {
    title: "Privacy Policy",
    paragraphs: [
      {
        strong: "In short:",
        text: " HǎoWèi 好味 stores almost nothing about you. There is no account system and no tracking beyond what's needed to run the site.",
      },
      {
        strong: "Local storage.",
        text: " Your shopping list, unit preference (g/ml vs cup/tbsp), and theme choice are stored only in your own browser's local storage. We never see them.",
      },
      {
        strong: "No accounts.",
        text: " The site has no sign-up, no login, and no user profiles. The AI assistant is a rule-based FAQ engine — your questions are answered locally in your browser and are not transmitted to any third party.",
      },
      {
        strong: "Analytics.",
        text: " We may use privacy-respecting, cookieless analytics to understand which recipes are popular. No personal data is collected.",
      },
      {
        strong: "Third-party links.",
        text: " Shopping-list links may point to affiliate stores; we disclose affiliate relationships on pages where they appear.",
      },
      {
        strong: "Contact.",
        text: " Questions?",
      },
    ],
    contactLink: "Contact us",
    lastUpdated: "Last updated: 2026-08-15.",
  },
  contactPage: {
    title: "Contact",
    subtitle: "Recipe requests, corrections, or collaboration ideas — we read everything.",
    emailLine: "For now, email us at",
    tellUs:
      "Tell us: which dish you want next, which ingredient confused you, or which recipe didn't work — we'll fix it.",
  },
  notFound: {
    title: "This dish isn't on the menu yet",
    desc: "The page you're looking for doesn't exist — but there are plenty of recipes that do.",
    browse: "Browse recipes",
  },
  metadata: {
    siteTitle: "HǎoWèi 好味 — Authentic Chinese Home Cooking, Made Easy",
    siteDesc:
      "Real Chinese home-cooking recipes in English, with ingredient substitutions for Western supermarkets, bilingual terms, and step-by-step state photos. From mapo tofu to tomato eggs — cook authentic 家常菜 at home.",
    homeTitle: "Authentic Chinese Home Cooking — HǎoWèi 好味",
    homeDesc:
      "Real Chinese 家常菜 recipes in English with ingredient substitutions, bilingual terms, and step-by-step state photos. From mapo tofu to tomato eggs — cook authentic Chinese food at home.",
    recipesTitle: "All Recipes",
    recipesDesc:
      "Browse authentic Chinese home-cooking recipes — filter by cuisine, difficulty, time, and dietary needs. English recipes with bilingual terms and substitutions.",
    termsTitle: "Chinese Cooking Glossary — 中餐术语表",
    termsDesc:
      "The essential Chinese cooking glossary: light soy sauce (生抽), dark soy (老抽), Shaoxing wine (绍兴酒), doubanjiang (豆瓣酱) and more — bilingual terms with quantities and substitutions.",
    substitutionsTitle: "Chinese Ingredient Substitutions",
    substitutionsDesc:
      "Don't have Shaoxing wine, dark soy, or doubanjiang? Find the best Western-supermarket substitutes with fidelity ratings, ratios, and flavor notes.",
    aiTitle: "AI Cooking Assistant",
    aiDesc:
      "Ask HǎoWèi anything about Chinese cooking: why low heat, how to substitute ingredients, what 'velveting' means, and how to fix a too-salty dish.",
    aboutTitle: "About Us",
    aboutDesc:
      "HǎoWèi 好味 exists to make authentic Chinese home cooking approachable for cooks outside China — bilingual, quantified, and substitution-friendly.",
    faqTitle: "FAQ",
    faqDesc:
      "Frequently asked questions about Chinese home cooking — substitutions, techniques, diet adaptations, and equipment.",
    privacyTitle: "Privacy Policy",
    privacyDesc: "HǎoWèi 好味 privacy policy — what we store (almost nothing) and why.",
    editorialPolicyTitle: "Editorial Policy",
    editorialPolicyDesc:
      "How HǎoWèi 好味 develops, tests, and fact-checks recipes — our standards for accuracy, substitutions, and citations.",
    contactTitle: "Contact",
    contactDesc: "Get in touch with HǎoWèi 好味.",
    recipeTitle: "{title} Recipe",
    blogTitle: "Blog",
    blogDesc:
      "Tips, techniques, and home-cooking notes for authentic Chinese food abroad — pantry building, sauce swaps, and the stories behind the dishes.",
  },
  blog: {
    title: "Blog",
    subtitle:
      "Techniques, pantry notes, and the stories behind Chinese home cooking.",
    publishedOn: "Published",
    by: "By",
    relatedRecipes: "Related recipes",
    backToBlog: "Back to blog",
  },
};

/** Dict 宽类型：结构与 en.ts 一致，值允许任意字符串（zh.ts 翻译用） */
export type Dict = typeof dict;
