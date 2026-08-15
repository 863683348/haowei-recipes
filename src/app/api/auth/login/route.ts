import { NextResponse, type NextRequest } from "next/server";
import { setSessionCookie, verifyPassword } from "@/lib/auth";
import { store } from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email =
    typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json({ error: "missing-fields" }, { status: 400 });
  }

  const user = await store.findUserByEmail(email);
  if (!user) {
    return NextResponse.json({ error: "invalid-credentials" }, { status: 401 });
  }
  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) {
    return NextResponse.json({ error: "invalid-credentials" }, { status: 401 });
  }

  const res = NextResponse.json({
    ok: true,
    user: { id: user.id, email: user.email, name: user.name },
  });
  return setSessionCookie(res, user.id);
}
