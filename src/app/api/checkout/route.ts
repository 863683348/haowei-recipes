import { NextResponse, type NextRequest } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { PLANS, type PlanCode } from "@/lib/membership";
import { createCheckoutSession } from "@/lib/payments/service";

export async function POST(request: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json(
      { error: "unauthorized", signinRequired: true },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => null);
  const planCode = body?.planCode as PlanCode | undefined;
  if (!planCode || !PLANS[planCode]) {
    return NextResponse.json({ error: "unknown-plan" }, { status: 400 });
  }
  const volumeId =
    typeof body?.volumeId === "string" && body.volumeId ? body.volumeId : undefined;
  const locale = body?.locale === "zh" ? "zh" : "en";

  if (planCode === "pdf_volume" && !volumeId) {
    return NextResponse.json({ error: "volume-required" }, { status: 400 });
  }

  try {
    const { url } = await createCheckoutSession({
      userId,
      planCode,
      volumeId,
      locale,
    });
    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "checkout-failed";
    const status = message === "unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
