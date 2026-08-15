/** 测试桩：next/headers（仅用于在 Node 中加载 auth.ts 的 crypto 部分，cookies 不会被调用） */
export async function cookies() {
  throw new Error("next/headers.cookies is not available in Node tests");
}
