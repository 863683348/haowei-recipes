/**
 * 会员体系核心逻辑运行时测试（v2.1）
 * 运行：node --experimental-strip-types --test tests/membership-flow.test.ts
 * 覆盖：权益纯函数、mock 结算全流程、双权益分离、幂等。
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  PLANS,
  VOLUMES,
  FREE_RECIPE_LIMIT,
  emptyEntitlements,
  extendDate,
  grantForPlan,
  hasPdfPassAccess,
  hasRecipeAccess,
  hasVolumeAccess,
  isPremiumRecipe,
} from "../src/lib/membership";
import { store } from "../src/lib/db";
import { createCheckoutSession, finalizeOrder } from "../src/lib/payments/service";

/* ---------- 权益纯函数 ---------- */

test("extendDate 从当前时间向后延长", () => {
  const d = extendDate(null, 365);
  const diff = new Date(d).getTime() - Date.now();
  assert.ok(diff > 364.9 * 864e5 && diff < 366 * 864e5);
});

test("extendDate 续费不会缩短已有期限", () => {
  const future = new Date(Date.now() + 200 * 864e5).toISOString();
  const d = extendDate(future, 365);
  assert.ok(new Date(d).getTime() > new Date(future).getTime());
});

test("grantForPlan 各方案权益变更正确", () => {
  assert.deepEqual(grantForPlan(PLANS.recipe_pass), { recipePassDays: 365 });
  assert.deepEqual(grantForPlan(PLANS.pdf_pass), { pdfPassDays: 365 });
  const all = grantForPlan(PLANS.all_access);
  assert.equal(all.recipePassDays, 365);
  assert.equal(all.pdfPassDays, 365);
  assert.deepEqual(grantForPlan(PLANS.pdf_volume, "v2"), { volumeId: "v2" });
});

test("权益判定：菜谱与 PDF 两维度互不串扰", () => {
  const e = emptyEntitlements();
  assert.equal(hasRecipeAccess(e), false);
  assert.equal(hasPdfPassAccess(e), false);
  assert.equal(hasVolumeAccess(e, "v2"), false);
});

test("isPremiumRecipe：免费额度内的菜谱为公开（渐进式）", () => {
  const slugs = Array.from({ length: 12 }, (_, i) => `r${i}`);
  assert.equal(isPremiumRecipe("r0", slugs), false); // 免费额度内
  assert.equal(isPremiumRecipe(`r${FREE_RECIPE_LIMIT}`, slugs), true); // 超出免费额度
  assert.equal(isPremiumRecipe("not-exist", slugs), false);
});

/* ---------- 数据层 ---------- */

test("用户注册与查重", async () => {
  const u = await store.createUser({
    email: "test@haowei.example",
    name: "Tester",
    passwordHash: "pbkdf2_sha256$salt$hash",
  });
  assert.equal(u.email, "test@haowei.example");
  const again = await store.findUserByEmail("TEST@haowei.example"); // 大小写不敏感
  assert.equal(again?.id, u.id);
});

test("V1 免费下载记录 lead", async () => {
  await store.addLead("lead@example.com", "v1");
  await store.addDownloadEvent("lead@example.com", "v1", "127.0.0.1");
  // 内存实现无查询接口，此处验证不抛错即可（Neon 有唯一约束防重）
  assert.ok(true);
});

/* ---------- mock 结算全流程（双权益分离核心验收） ---------- */

async function mockOrder(userId: string, planCode: "recipe_pass" | "pdf_pass" | "all_access" | "pdf_volume", volumeId?: string) {
  const { url } = await createCheckoutSession({
    userId,
    planCode,
    volumeId,
    locale: "en",
  });
  const u = new URL(url);
  assert.ok(u.searchParams.get("orderId"), "mock 回调 URL 应携带 orderId");
  assert.equal(u.searchParams.get("locale"), "en", "mock 回调 URL 应携带 locale");
  await finalizeOrder(u.searchParams.get("orderId")!);
  return u.searchParams.get("orderId")!;
}

test("购买菜谱会员 → 仅菜谱权益生效，PDF 权益不受影响", async () => {
  const u = await store.createUser({ email: "a1@haowei.example", name: "A1", passwordHash: "x" });
  await mockOrder(u.id, "recipe_pass");
  const e = await store.getEntitlements(u.id);
  assert.equal(hasRecipeAccess(e), true);
  assert.equal(hasPdfPassAccess(e), false);
  assert.equal(hasVolumeAccess(e, "v2"), false);
});

test("购买 PDF 单册 → 仅该册解锁，菜谱权益不受影响", async () => {
  const u = await store.createUser({ email: "a2@haowei.example", name: "A2", passwordHash: "x" });
  await mockOrder(u.id, "pdf_volume", "v2");
  const e = await store.getEntitlements(u.id);
  assert.equal(hasRecipeAccess(e), false);
  assert.equal(hasVolumeAccess(e, "v2"), true);
  assert.equal(hasVolumeAccess(e, "v1"), false); // 未购买 v1（免费册不走买断）
  const dl = await store.hasDownload(u.id, "v2");
  assert.equal(dl, true);
});

test("购买 PDF 会员 → 全部册可下载，但菜谱权益不生效", async () => {
  const u = await store.createUser({ email: "a3@haowei.example", name: "A3", passwordHash: "x" });
  await mockOrder(u.id, "pdf_pass");
  const e = await store.getEntitlements(u.id);
  assert.equal(hasPdfPassAccess(e), true);
  assert.equal(hasVolumeAccess(e, "v1"), true);
  assert.equal(hasVolumeAccess(e, "v2"), true);
  assert.equal(hasRecipeAccess(e), false);
});

test("购买 All-Access → 双权益同时生效", async () => {
  const u = await store.createUser({ email: "a4@haowei.example", name: "A4", passwordHash: "x" });
  await mockOrder(u.id, "all_access");
  const e = await store.getEntitlements(u.id);
  assert.equal(hasRecipeAccess(e), true);
  assert.equal(hasPdfPassAccess(e), true);
  assert.equal(hasVolumeAccess(e, "v2"), true);
});

test("结算幂等：重复 finalize 不重复发放/延长", async () => {
  const u = await store.createUser({ email: "a5@haowei.example", name: "A5", passwordHash: "x" });
  const orderId = await mockOrder(u.id, "recipe_pass");
  const e1 = await store.getEntitlements(u.id);
  await finalizeOrder(orderId); // 重复回调
  await finalizeOrder(orderId);
  const e2 = await store.getEntitlements(u.id);
  assert.equal(e1.recipePassUntil, e2.recipePassUntil); // 未延长
  const orders = await store.listOrders(u.id);
  assert.equal(orders.filter((o) => o.status === "paid").length, 1);
});

test("两个用户权益互不影响", async () => {
  const u1 = await store.createUser({ email: "b1@haowei.example", name: "B1", passwordHash: "x" });
  const u2 = await store.createUser({ email: "b2@haowei.example", name: "B2", passwordHash: "x" });
  await mockOrder(u1.id, "pdf_volume", "v2");
  const e1 = await store.getEntitlements(u1.id);
  const e2 = await store.getEntitlements(u2.id);
  assert.equal(hasVolumeAccess(e1, "v2"), true);
  assert.equal(hasVolumeAccess(e2, "v2"), false);
  assert.equal(hasRecipeAccess(e2), false);
});

test("V1 免费册在目录中标记为 free，V2 付费", () => {
  const v1 = VOLUMES.find((v) => v.id === "v1");
  const v2 = VOLUMES.find((v) => v.id === "v2");
  assert.equal(v1?.free, true);
  assert.equal(v2?.free, false);
  assert.equal(v1?.recipeSlugs.length, 10);
});
