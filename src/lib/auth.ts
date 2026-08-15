/**
 * 零依赖鉴权（v2.1）
 * 沙箱无法安装依赖（package.json 被锁），故用 Node 内置 crypto 实现：
 * - 密码：PBKDF2-SHA256（10 万次迭代）+ 随机盐
 * - 会话：HMAC-SHA256 签名的 httpOnly cookie（30 天），payload = { uid, exp }
 * 生产环境务必设置 AUTH_SECRET；后续可平滑替换为 NextAuth/其他方案。
 */
import {
  createHmac,
  randomBytes,
  pbkdf2,
  timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

const pbkdf2Async = promisify(pbkdf2);

const SECRET =
  process.env.AUTH_SECRET ?? "dev-only-insecure-haowei-secret-change-me";
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
export const SESSION_COOKIE = "hw_session";

function derive(password: string, salt: string): Promise<Buffer> {
  return pbkdf2Async(password, salt, 100_000, 32, "sha256") as Promise<Buffer>;
}

/** 生成密码哈希：pbkdf2_sha256$salt$hash */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const hash = await derive(password, salt);
  return `pbkdf2_sha256$${salt}$${hash.toString("hex")}`;
}

export async function verifyPassword(
  password: string,
  stored: string
): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 3 || parts[0] !== "pbkdf2_sha256") return false;
  const [, salt, hash] = parts;
  const candidate = await derive(password, salt);
  const expected = Buffer.from(hash, "hex");
  if (candidate.length !== expected.length) return false;
  return timingSafeEqual(candidate, expected);
}

interface SessionPayload {
  uid: string;
  exp: number;
}

export function signSession(userId: string): string {
  const payload: SessionPayload = { uid: userId, exp: Date.now() + SESSION_TTL_MS };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = createHmac("sha256", SECRET).update(body).digest("base64url");
  return `${body}.${sig}`;
}

export function verifySessionToken(token: string): SessionPayload | null {
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = createHmac("sha256", SECRET).update(body).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8")
    ) as SessionPayload;
    if (!data.uid || typeof data.exp !== "number" || data.exp < Date.now())
      return null;
    return data;
  } catch {
    return null;
  }
}

/** 服务端组件/路由内读取当前会话 userId（无则 null） */
export async function getSessionUserId(): Promise<string | null> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token)?.uid ?? null;
}

export function setSessionCookie(res: NextResponse, userId: string): NextResponse {
  res.cookies.set(SESSION_COOKIE, signSession(userId), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  });
  return res;
}

export function clearSessionCookie(res: NextResponse): NextResponse {
  res.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return res;
}
