const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const recipesDir = path.resolve("src/data/recipes");
const outDir = path.resolve(".recipe-export");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(recipesDir).filter((f) => f.endsWith(".ts"));
const opts = {
  module: ts.ModuleKind.CommonJS,
  target: ts.ScriptTarget.ES2019,
  esModuleInterop: true,
  jsx: ts.JsxEmit.None,
  removeComments: true,
};

for (const f of files) {
  const src = fs.readFileSync(path.join(recipesDir, f), "utf8");
  const out = ts.transpileModule(src, { compilerOptions: opts, fileName: f });
  const base = f.replace(/\.ts$/, ".js");
  fs.writeFileSync(path.join(outDir, base), out.outputText);
}

const idx = require(path.join(outDir, "index.js"));
const recipes = idx.recipes;
const outPath = path.resolve("scripts/recipes-export.json");
fs.writeFileSync(outPath, JSON.stringify(recipes, null, 2, ));
console.log("Exported", recipes.length, "recipes ->", outPath);
// quick field sanity
const r0 = recipes[0];
console.log("sample:", r0.titleZh, "/", r0.titleEn, "| ingredients:", r0.ingredients.length, "| steps:", r0.steps.length);
