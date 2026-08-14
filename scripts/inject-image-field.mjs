import fs from "node:fs/promises";
const files = [
  ["src/data/recipes/tomato-eggs.ts", "tomato-and-egg"],
  ["src/data/recipes/mapo-tofu.ts", "mapo-tofu"],
  ["src/data/recipes/kung-pao-chicken.ts", "kung-pao-chicken"],
  ["src/data/recipes/scallion-pancakes.ts", "scallion-pancakes"],
  ["src/data/recipes/egg-fried-rice.ts", "egg-fried-rice"],
  ["src/data/recipes/beef-and-broccoli.ts", "beef-and-broccoli"],
];
const re = /(  relatedSlugs: \[[^\]]*\],?)/;
for (const [f, slug] of files) {
  const src = await fs.readFile(f, "utf8");
  if (src.includes("  image:")) { console.log("SKIP", f); continue; }
  const m = src.match(re);
  if (!m) { console.log("NO MATCH", f); continue; }
  const next = src.replace(m[1], m[1] + `\n  image: "/images/recipes/${slug}.png",`);
  await fs.writeFile(f, next, "utf8");
  console.log("OK", f);
}