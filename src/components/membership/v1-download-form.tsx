"use client";

import { useState, type FormEvent } from "react";
import { membershipText } from "@/lib/membership-i18n";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** V1 免费 PDF 下载：填邮箱 → 记录 lead → 下载 */
export function V1DownloadForm({
  volumeId,
  locale,
}: {
  volumeId: string;
  locale: "en" | "zh";
}) {
  const t = membershipText(locale);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus("idle");
    setMessage(null);

    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setMessage(t.invalidEmail);
      setBusy(false);
      return;
    }

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), volumeId }),
      });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        setStatus("error");
        setMessage(
          data.error === "not-ready" ? t.comingSoon : t.genericError
        );
        setBusy(false);
        return;
      }
      setStatus("ok");
      setMessage(t.emailSuccess);
      window.location.assign(data.url);
    } catch {
      setStatus("error");
      setMessage(t.genericError);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.email}
        className="flex-1 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg)] px-3 py-2 text-sm outline-none focus:border-[var(--hw-ginger)]"
      />
      <button
        type="submit"
        disabled={busy}
        className="rounded-lg bg-[var(--hw-soy)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50 dark:bg-[var(--hw-ginger)]"
      >
        {busy ? "…" : t.downloadBtn}
      </button>
      {message && (
        <p
          className={`text-xs ${
            status === "ok" ? "text-[var(--hw-scallion)]" : "text-red-600"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
