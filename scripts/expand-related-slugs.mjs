import fs from "node:fs/promises";

const updates = [
  ["src/data/recipes/tomato-eggs.ts",        ["egg-fried-rice", "mapo-tofu"],          ["egg-fried-rice", "mapo-tofu", "scallion-pancakes"]],
  ["src/data/recipes/mapo-tofu.ts",          ["tomato-and-egg", "kung-pao-chicken"],    ["tomato-and-egg", "kung-pao-chicken", "beef-and-broccoli"]],
  ["src/data/recipes/kung-pao-chicken.ts",   ["mapo-tofu", "beef-and-broccoli"],        ["mapo-tofu", "beef-and-broccoli", "tomato-and-egg"]],
  ["src/data/recipes/scallion-pancakes.ts",  ["tomato-and-egg", "egg-fried-rice"],      ["tomato-and-egg", "egg-fried-rice", "kung-pao-chicken"]],
  ["src/data/recipes/egg-fried-rice.ts",     ["tomato-and-egg", "scallion-pancakes"],   ["tomato-and-egg", "scallion-pancakes", "kung-pao-chicken"]],
  ["src/data/recipes/beef-and-broccoli.ts",  ["kung-pao-chicken", "mapo-tofu"],         ["kung-pao-chicken", "mapo-tofu", "egg-fried-rice"]],
];
for (const [f, oldSlugs, newSlugs] of updates) {
  const src = await fs.readFile(f, "utf8");
  const oldStr = `relatedSlugs: [${oldSlugs.map((s) => `"${s}"`).join(", ")}],`;
  const newStr = `relatedSlugs: [${newSlugs.map((s) => `"${s}"`).join(", ")}],`;
  if (!src.includes(oldStr)) { console.log("NO MATCH", f); continue; }
  if (src.includes(newStr)) { console.log("ALREADY", f); continue; }
  await fs.writeFile(f, src.replace(oldStr, newStr), "utf8");
  console.log("OK", f);
}