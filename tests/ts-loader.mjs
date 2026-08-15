/**
 * ESM loader 钩子：无扩展名相对导入补 `.ts`；并把 `next/headers` 映射到测试桩。
 * 运行方式：
 *   node --experimental-strip-types --experimental-loader ./tests/ts-loader.mjs tests/<file>.test.ts
 */
const STUB_NEXT_HEADERS_URL = new URL("./stubs/next-headers.mjs", import.meta.url).href;

export async function resolve(specifier, context, nextResolve) {
  if (specifier === "next/headers") {
    return nextResolve(STUB_NEXT_HEADERS_URL, context);
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
