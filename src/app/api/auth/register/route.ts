import { NextResponse, type NextRequest } from "next/server";
import { hashPassword, setSessionCookie } from "@/lib/auth";
import { store } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email =
    typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  const name =
    typeof body?.name === "string" && body.name.trim()
      ? body.name.trim().slice(0, 60)
      : email.split("@")[0] ?? "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid-email" }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ error: "weak-password" }, { status: 400 });
  }

  const existing = await store.findUserByEmail(email);
  if (existing) {
    return NextResponse.json({ error: "email-exists" }, { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const user = await store.createUser({ email, name, passwordHash });

  const res = NextResponse.json({
    ok: true,
    user: { id: user.id, email: user.email, name: user.name },
  });
  return setSessionCookie(res, user.id);
}
