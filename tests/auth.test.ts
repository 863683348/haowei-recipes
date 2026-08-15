/**
 * 零依赖鉴权运行时测试（v2.1）
 * 运行：node --experimental-strip-types --experimental-loader ./tests/ts-loader.mjs tests/auth.test.ts
 * 覆盖：PBKDF2 密码哈希/校验、HMAC 会话签名/防篡改/过期。
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";

// 先注入测试密钥，再动态加载模块（静态 import 会在 env 设置前求值）
process.env.AUTH_SECRET = "test-secret-for-auth-spec";
const auth = await import("../src/lib/auth");

test("hashPassword 生成 pbkdf2_sha256 格式，校验通过", async () => {
  const h = await auth.hashPassword("s3cret-pass");
  assert.match(h, /^pbkdf2_sha256\$[0-9a-f]{32}\$[0-9a-f]{64}$/);
  assert.equal(await auth.verifyPassword("s3cret-pass", h), true);
  assert.equal(await auth.verifyPassword("wrong-pass", h), false);
});

test("同密码两次哈希盐不同", async () => {
  const a = await auth.hashPassword("same-pass");
  const b = await auth.hashPassword("same-pass");
  assert.notEqual(a, b);
});

test("畸形存储串返回 false 而不抛错", async () => {
  assert.equal(await auth.verifyPassword("x", "not-a-valid-format"), false);
  assert.equal(await auth.verifyPassword("x", "bcrypt$abc"), false);
});

test("signSession 生成 token，verifySessionToken 还原 userId", async () => {
  const token = auth.signSession("user-42");
  const payload = auth.verifySessionToken(token);
  assert.equal(payload?.uid, "user-42");
  assert.equal(typeof payload?.exp, "number");
});

test("篡改 token 被拒绝", async () => {
  const token = auth.signSession("user-42");
  const [body, sig] = token.split(".");
  const tampered = `${body.slice(0, -1)}X.${sig}`;
  assert.equal(auth.verifySessionToken(tampered), null);
  // 篡改签名
  const badSig = createHmac("sha256", "wrong-secret").update(body).digest("base64url");
  assert.equal(auth.verifySessionToken(`${body}.${badSig}`), null);
  // 格式错误
  assert.equal(auth.verifySessionToken("garbage"), null);
  assert.equal(auth.verifySessionToken("a.b.c"), null);
});

test("过期 token 被拒绝", () => {
  const body = Buffer.from(
    JSON.stringify({ uid: "user-42", exp: Date.now() - 1000 })
  ).toString("base64url");
  const sig = createHmac("sha256", "test-secret-for-auth-spec")
    .update(body)
    .digest("base64url");
  assert.equal(auth.verifySessionToken(`${body}.${sig}`), null);
});

test("不同密钥签发的 token 无法通过校验（密钥轮换安全性）", () => {
  const body = Buffer.from(
    JSON.stringify({ uid: "u", exp: Date.now() + 60000 })
  ).toString("base64url");
  const sig = createHmac("sha256", "another-secret").update(body).digest("base64url");
  assert.equal(auth.verifySessionToken(`${body}.${sig}`), null);
});
