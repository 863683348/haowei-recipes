import type { FlavorRule } from "@/lib/types";

/**
 * 口味量化调整规则（R-06）
 * 规则函数：用户选择辣/咸/油/素食等级 → 返回调料量化换算，前端同步更新购物清单。
 */
export const flavorRules: FlavorRule[] = [
  {
    id: "flavor-spicy",
    key: "spicy",
    label: "Spice level",
    question: "How spicy do you want it?",
    levels: [
      {
        id: "spicy-mild",
        label: "Mild — half the chilies",
        adjustments: [
          {
            termKey: "chili-flakes",
            label: "Dried chilies / chili flakes",
            from: "as written",
            to: "half of written amount",
            note: "Remove chili seeds for even less heat.",
          },
        ],
      },
      {
        id: "spicy-as-written",
        label: "As written",
        adjustments: [],
      },
      {
        id: "spicy-extra",
        label: "Extra spicy — 1.5× chilies",
        adjustments: [
          {
            termKey: "chili-flakes",
            label: "Dried chilies / chili flakes",
            from: "as written",
            to: "1.5× written amount",
            note: "Add a pinch of sugar to balance heat, not salt.",
          },
        ],
      },
    ],
  },
  {
    id: "flavor-salty",
    key: "salty",
    label: "Saltiness",
    question: "How salty should the seasoning be?",
    levels: [
      {
        id: "salty-less",
        label: "Less salty — soy sauce × 2/3",
        adjustments: [
          {
            termKey: "light-soy-sauce",
            label: "Light soy sauce",
            from: "as written",
            to: "2/3 of written amount",
            note: "Finish with salt only to taste — soy is the main sodium source.",
          },
          {
            termKey: "oyster-sauce",
            label: "Oyster sauce",
            from: "as written",
            to: "2/3 of written amount",
            note: "Oyster sauce is also salty; scale together.",
          },
        ],
      },
      {
        id: "salty-as-written",
        label: "As written",
        adjustments: [],
      },
      {
        id: "salty-more",
        label: "More savory — +10% soy",
        adjustments: [
          {
            termKey: "light-soy-sauce",
            label: "Light soy sauce",
            from: "as written",
            to: "1.1× written amount",
            note: "Taste first — most home cooks oversalt on first try.",
          },
        ],
      },
    ],
  },
  {
    id: "flavor-oily",
    key: "oily",
    label: "Oiliness",
    question: "How much oil would you like?",
    levels: [
      {
        id: "oily-light",
        label: "Light — half the oil",
        adjustments: [
          {
            termKey: "sesame-oil",
            label: "Neutral cooking oil",
            from: "as written",
            to: "half of written amount",
            note: "Use a non-stick pan and add a splash of water if it looks dry.",
          },
        ],
      },
      {
        id: "oily-as-written",
        label: "As written",
        adjustments: [],
      },
    ],
  },
  {
    id: "flavor-veg",
    key: "vegetarian",
    label: "Make it vegetarian",
    question: "Make this vegetarian?",
    levels: [
      {
        id: "veg-yes",
        label: "Yes — vegetarian",
        adjustments: [
          {
            termKey: "oyster-sauce",
            label: "Oyster sauce → mushroom stir-fry sauce",
            from: "as written",
            to: "1:1 mushroom sauce (vegetarian)",
            note: "Most 'mushroom oyster sauce' is vegan & often GF.",
          },
          {
            termKey: "shaoxing-wine",
            label: "Meat (beef/chicken/pork)",
            from: "as written",
            to: "Tofu (firm) or mushrooms, 1:1 by weight",
            note: "Dried shiitake + soaking liquid adds lost umami.",
          },
        ],
      },
      {
        id: "veg-no",
        label: "No, keep as is",
        adjustments: [],
      },
    ],
  },
];

/** 按 key 取口味规则 */
export function getFlavorRule(key: string): FlavorRule | undefined {
  return flavorRules.find((r) => r.key === key);
}
