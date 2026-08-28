import { NextResponse, type NextRequest } from "next/server";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { getSessionUserId } from "@/lib/auth";
import { store } from "@/lib/db";
import { getVolume, hasVolumeAccess } from "@/lib/membership";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 册 → public/pdf/ 下的文件名（v2 尚未生成，文件缺失时返回 not-ready） */
const VOLUME_PDF_FILES: Record<string, string> = {
  v1: "haowei-v1.pdf",
  v2: "haowei-v2.pdf",
  v3: "haowei-top25.pdf",
};

function pdfExists(volumeId: string): boolean {
  const file = VOLUME_PDF_FILES[volumeId];
  if (!file) return false;
  return existsSync(join(process.cwd(), "public", "pdf", file));
}

function clientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

/**
 * 下载：
 * - 免费册（v1）：POST { email, volumeId } → 记录 lead → 返回文件 URL
 * - 付费册（v2+）：需登录且具备该册权益；文件未就绪返回 not-ready
 * GET 变体用于直接跳转（免费册带 email 参数）。
 */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const volumeId =
    typeof body?.volumeId === "string" ? body.volumeId : "";
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  const vol = getVolume(volumeId);
  if (!vol) {
    return NextResponse.json({ error: "unknown-volume" }, { status: 404 });
  }

  if (vol.free) {
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "invalid-email" }, { status: 400 });
    }
    await store.addLead(email, volumeId);
    await store.addDownloadEvent(email, volumeId, clientIp(request));
    if (!pdfExists(volumeId)) {
      return NextResponse.json({ error: "not-ready" }, { status: 404 });
    }
    return NextResponse.json({ url: `/pdf/${VOLUME_PDF_FILES[volumeId]}` });
  }

  // 付费册：登录 + 权益校验
  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json(
      { error: "unauthorized", signinRequired: true },
      { status: 401 }
    );
  }
  const entitlements = await store.getEntitlements(userId);
  if (!hasVolumeAccess(entitlements, volumeId)) {
    return NextResponse.json({ error: "no-access" }, { status: 403 });
  }
  if (!pdfExists(volumeId)) {
    return NextResponse.json({ error: "not-ready" }, { status: 404 });
  }
  await store.addDownloadEvent(userId, volumeId, clientIp(request));
  return NextResponse.json({ url: `/pdf/${VOLUME_PDF_FILES[volumeId]}` });
}

export async function GET(request: NextRequest) {
  const volumeId = request.nextUrl.searchParams.get("volume") ?? "";
  const email = request.nextUrl.searchParams.get("email")?.trim().toLowerCase() ?? "";
  const vol = getVolume(volumeId);
  if (!vol) {
    return NextResponse.json({ error: "unknown-volume" }, { status: 404 });
  }

  if (vol.free) {
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "invalid-email" }, { status: 400 });
    }
    await store.addLead(email, volumeId);
    await store.addDownloadEvent(email, volumeId, clientIp(request));
    if (!pdfExists(volumeId)) {
      return NextResponse.json({ error: "not-ready" }, { status: 404 });
    }
    return NextResponse.redirect(
      new URL(`/pdf/${VOLUME_PDF_FILES[volumeId]}`, request.url),
      302
    );
  }

  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json(
      { error: "unauthorized", signinRequired: true },
      { status: 401 }
    );
  }
  const entitlements = await store.getEntitlements(userId);
  if (!hasVolumeAccess(entitlements, volumeId)) {
    return NextResponse.json({ error: "no-access" }, { status: 403 });
  }
  if (!pdfExists(volumeId)) {
    return NextResponse.json({ error: "not-ready" }, { status: 404 });
  }
  await store.addDownloadEvent(userId, volumeId, clientIp(request));
  return NextResponse.redirect(
    new URL(`/pdf/${VOLUME_PDF_FILES[volumeId]}`, request.url),
    302
  );
}
