"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { membershipText } from "@/lib/membership-i18n";

type Mode = "signin" | "register";

/** 登录/注册表单（会员中心未登录态展示） */
export function LoginForm({ locale }: { locale: "en" | "zh" }) {
  const t = membershipText(locale);
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  function errorMessage(code: string): string {
    switch (code) {
      case "invalid-email":
        return t.invalidEmail;
      case "weak-password":
        return t.errWeakPassword;
      case "email-exists":
        return t.errEmailExists;
      case "invalid-credentials":
        return t.errInvalidCredentials;
      case "missing-fields":
        return t.required;
      default:
        return t.genericError;
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(
        mode === "signin" ? "/api/auth/login" : "/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, name }),
        }
      );
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(errorMessage(data.error ?? "generic"));
        setBusy(false);
        return;
      }
      router.push(`/${locale}/account`);
      router.refresh();
    } catch {
      setError(t.genericError);
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-sm rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6 shadow-sm">
      <div className="mb-5 flex rounded-lg bg-[var(--hw-bg-soft)] p-1">
        {(["signin", "register"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => {
              setMode(m);
              setError(null);
            }}
            className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition ${
              mode === m
                ? "bg-[var(--hw-ginger)] text-white"
                : "text-[var(--hw-fg-muted)]"
            }`}
          >
            {m === "signin" ? t.signInSubmit : t.registerSubmit}
          </button>
        ))}
      </div>

      <a
        href={`/api/auth/google?locale=${locale}&next=${encodeURIComponent(`/${locale}/account`)}`}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg)] px-4 py-2.5 text-sm font-semibold text-[var(--hw-fg)] transition hover:border-[var(--hw-ginger)]"
      >
        <GoogleGlyph />
        {t.continueWithGoogle}
      </a>

      <div className="my-4 flex items-center gap-3 text-xs text-[var(--hw-fg-muted)]">
        <span className="h-px flex-1 bg-[var(--hw-border)]" />
        {t.orWithEmail}
        <span className="h-px flex-1 bg-[var(--hw-border)]" />
      </div>

      <form onSubmit={onSubmit} className="space-y-3">
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-[var(--hw-fg)]">
            {t.email}
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg)] px-3 py-2 text-sm outline-none focus:border-[var(--hw-ginger)]"
          />
        </label>

        {mode === "register" && (
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-[var(--hw-fg)]">
              {t.name}
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg)] px-3 py-2 text-sm outline-none focus:border-[var(--hw-ginger)]"
            />
          </label>
        )}

        <label className="block text-sm">
          <span className="mb-1 block font-medium text-[var(--hw-fg)]">
            {t.password}
          </span>
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg)] px-3 py-2 text-sm outline-none focus:border-[var(--hw-ginger)]"
          />
        </label>

        {error && (
          <p className="text-xs text-red-600" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-lg bg-[var(--hw-ginger)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {busy
            ? "…"
            : mode === "signin"
              ? t.signInSubmit
              : t.registerSubmit}
        </button>

        <p className="text-center text-xs text-[var(--hw-fg-muted)]">
          {mode === "signin" ? t.switchToRegister : t.switchToSignIn}
        </p>
      </form>
    </div>
  );
}

/** Google "G" 标记（内联 SVG，非 emoji；尺寸 18px，对齐表单按钮） */
function GoogleGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.89 2.68-6.62z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.72A5.41 5.41 0 0 1 3.68 9c0-.6.1-1.18.28-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"
      />
    </svg>
  );
}
