/**
 * 审计用 ESM loader：把 `@/lib/types` 映射到 src/lib/types.ts，
 * 并为无扩展名相对导入补 `.ts`。专供 scripts/audit-recipes.mjs 使用。
 */
export async function resolve(specifier, context, nextResolve) {
  if (specifier === "@/lib/types") {
    return nextResolve(new URL("../src/lib/types.ts", import.meta.url).href, context);
  }
  if (specifier.startsWith("@/")) {
    const sub = specifier.slice(2);
    // 目录导入（如 @/data/recipes → ../src/data/recipes/index.ts）
    if (sub.endsWith("/recipes") || sub.endsWith("/data")) {
      return nextResolve(new URL(`../src/${sub}/index.ts`, import.meta.url).href, context);
    }
    return nextResolve(new URL(`../src/${sub}`, import.meta.url).href, context);
  }
  try {
    return await nextResolve(specifier, context);
  } catch (err) {
    if (
      (specifier.startsWith(".") || specifier.startsWith("/")) &&
      !/\.[a-zA-Z0-9]+$/.test(specifier)
    ) {
      return nextResolve(specifier + ".ts", context);
    }
    throw err;
  }
}
