import type { FlavorRule } from "@/lib/types";

/**
 * 口味量化调整规则（R-06）
 * 规则函数：用户选择辣/咸/油/素食等级 → 返回调料量化换算，前端同步更新购物清单。
 * v1.1 多语言：英文为主，中文增量字段（labelZh/questionZh/noteZh）。
 */
export const flavorRules: FlavorRule[] = [
  {
    id: "flavor-spicy",
    key: "spicy",
    label: "Spice level",
    labelZh: "辣度",
    question: "How spicy do you want it?",
    questionZh: "你想要多辣？",
    levels: [
      {
        id: "spicy-mild",
        label: "Mild — half the chilies",
        labelZh: "微辣 — 干辣椒减半",
        adjustments: [
          {
            termKey: "chili-flakes",
            label: "Dried chilies / chili flakes",
            labelZh: "干辣椒 / 辣椒面",
            from: "as written",
            to: "half of written amount",
            note: "Remove chili seeds for even less heat.",
            noteZh: "去掉辣椒籽辣度更低。",
          },
        ],
      },
      {
        id: "spicy-as-written",
        label: "As written",
        labelZh: "按原配方",
        adjustments: [],
      },
      {
        id: "spicy-extra",
        label: "Extra spicy — 1.5× chilies",
        labelZh: "加辣 — 干辣椒 1.5 倍",
        adjustments: [
          {
            termKey: "chili-flakes",
            label: "Dried chilies / chili flakes",
            labelZh: "干辣椒 / 辣椒面",
            from: "as written",
            to: "1.5× written amount",
            note: "Add a pinch of sugar to balance heat, not salt.",
            noteZh: "加一小撮糖平衡辣味，别加盐。",
          },
        ],
      },
    ],
  },
  {
    id: "flavor-salty",
    key: "salty",
    label: "Saltiness",
    labelZh: "咸度",
    question: "How salty should the seasoning be?",
    questionZh: "调味想要多咸？",
    levels: [
      {
        id: "salty-less",
        label: "Less salty — soy sauce × 2/3",
        labelZh: "减咸 — 生抽减至 2/3",
        adjustments: [
          {
            termKey: "light-soy-sauce",
            label: "Light soy sauce",
            labelZh: "生抽",
            from: "as written",
            to: "2/3 of written amount",
            note: "Finish with salt only to taste — soy is the main sodium source.",
            noteZh: "最后只按口味补盐——生抽是主要钠来源。",
          },
          {
            termKey: "oyster-sauce",
            label: "Oyster sauce",
            labelZh: "蚝油",
            from: "as written",
            to: "2/3 of written amount",
            note: "Oyster sauce is also salty; scale together.",
            noteZh: "蚝油也含盐，一起按比例减。",
          },
        ],
      },
      {
        id: "salty-as-written",
        label: "As written",
        labelZh: "按原配方",
        adjustments: [],
      },
      {
        id: "salty-more",
        label: "More savory — +10% soy",
        labelZh: "更咸鲜 — 生抽 +10%",
        adjustments: [
          {
            termKey: "light-soy-sauce",
            label: "Light soy sauce",
            labelZh: "生抽",
            from: "as written",
            to: "1.1× written amount",
            note: "Taste first — most home cooks oversalt on first try.",
            noteZh: "先尝再决定——很多人第一次就放咸了。",
          },
        ],
      },
    ],
  },
  {
    id: "flavor-oily",
    key: "oily",
    label: "Oiliness",
    labelZh: "油量",
    question: "How much oil would you like?",
    questionZh: "想要多少油？",
    levels: [
      {
        id: "oily-light",
        label: "Light — half the oil",
        labelZh: "少油 — 油量减半",
        adjustments: [
          {
            termKey: "sesame-oil",
            label: "Neutral cooking oil",
            labelZh: "食用油",
            from: "as written",
            to: "half of written amount",
            note: "Use a non-stick pan and add a splash of water if it looks dry.",
            noteZh: "用不粘锅，如果看起来干就加一点水。",
          },
        ],
      },
      {
        id: "oily-as-written",
        label: "As written",
        labelZh: "按原配方",
        adjustments: [],
      },
    ],
  },
  {
    id: "flavor-veg",
    key: "vegetarian",
    label: "Make it vegetarian",
    labelZh: "做成素食",
    question: "Make this vegetarian?",
    questionZh: "要做成素食吗？",
    levels: [
      {
        id: "veg-yes",
        label: "Yes — vegetarian",
        labelZh: "是 — 素食",
        adjustments: [
          {
            termKey: "oyster-sauce",
            label: "Oyster sauce → mushroom stir-fry sauce",
            labelZh: "蚝油 → 菌菇炒酱",
            from: "as written",
            to: "1:1 mushroom sauce (vegetarian)",
            note: "Most 'mushroom oyster sauce' is vegan & often GF.",
            noteZh: "多数“菌菇蚝油”是纯素且常无麸质。",
          },
          {
            termKey: "shaoxing-wine",
            label: "Meat (beef/chicken/pork)",
            labelZh: "肉类（牛/鸡/猪）",
            from: "as written",
            to: "Tofu (firm) or mushrooms, 1:1 by weight",
            note: "Dried shiitake + soaking liquid adds lost umami.",
            noteZh: "干香菇 + 泡发水能补回鲜味。",
          },
        ],
      },
      {
        id: "veg-no",
        label: "No, keep as is",
        labelZh: "不用，保持原样",
        adjustments: [],
      },
    ],
  },
];

/** 按 key 取口味规则 */
export function getFlavorRule(key: string): FlavorRule | undefined {
  return flavorRules.find((r) => r.key === key);
}
