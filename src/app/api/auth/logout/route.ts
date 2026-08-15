import { NextResponse, type NextRequest } from "next/server";
import { clearSessionCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const res = NextResponse.redirect(
    new URL("/en/account", request.url),
    302
  );
  return clearSessionCookie(res);
}
