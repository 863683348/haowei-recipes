import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isLocale,
  pageAlternates,
  type Locale,
} from "@/i18n/config";
import { membershipText } from "@/lib/membership-i18n";
import { getSessionUserId } from "@/lib/auth";
import { store } from "@/lib/db";
import {
  hasPdfPassAccess,
  hasRecipeAccess,
  type PlanCode,
} from "@/lib/membership";
import { LoginForm } from "@/components/membership/login-form";

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const t = membershipText(loc);
  return {
    title: t.accountTitle,
    description: t.accountDesc,
    alternates: pageAlternates("/account", loc),
  };
}

function formatDate(iso: string, zh: boolean): string {
  return new Date(iso).toLocaleDateString(zh ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function AccountPage({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = membershipText(loc);
  const zh = loc === "zh";
  const sp = await searchParams;
  const paid = sp?.paid === "1";

  const userId = await getSessionUserId();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {t.accountTitle}
      </h1>
      <p className="mt-2 text-sm text-[var(--hw-fg-muted)]">{t.accountDesc}</p>

      {paid && (
        <div className="mt-5 rounded-xl border border-[var(--hw-scallion)]/40 bg-[var(--hw-scallion)]/10 p-4 text-sm font-medium text-[var(--hw-fg)]">
          {t.paidBanner}
        </div>
      )}

      {!userId ? (
        <div className="mt-8">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {t.signInTitle}
          </h2>
          <LoginForm locale={loc} />
        </div>
      ) : (
        <SignedInView userId={userId} locale={loc} zh={zh} />
      )}
    </main>
  );
}

async function SignedInView({
  userId,
  locale,
  zh,
}: {
  userId: string;
  locale: Locale;
  zh: boolean;
}) {
  const t = membershipText(locale);
  const user = await store.findUserById(userId);
  const entitlements = await store.getEntitlements(userId);
  const orders = await store.listOrders(userId);

  const planName = (code: string, volumeId: string | null): string => {
    switch (code as PlanCode) {
      case "recipe_pass":
        return t.recipePassName;
      case "pdf_pass":
        return t.pdfPassName;
      case "all_access":
        return t.allAccessName;
      case "pdf_volume":
        return `${t.pdfVolumeName} · ${(volumeId ?? "v2").toUpperCase()}`;
      default:
        return code;
    }
  };

  const statusLabel = (s: string) =>
    s === "paid" ? t.statusPaid : s === "failed" ? t.statusFailed : t.statusPending;

  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center justify-between rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5">
        <div>
          <p className="text-sm font-semibold text-[var(--hw-fg)]">
            {t.welcomeBack}
          </p>
          <p className="mt-0.5 text-sm text-[var(--hw-fg-muted)]">
            {user?.email ?? userId}
          </p>
        </div>
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="rounded-lg border border-[var(--hw-border)] px-3 py-1.5 text-sm text-[var(--hw-fg-muted)] transition hover:text-[var(--hw-fg)]"
          >
            {t.signOut}
          </button>
        </form>
      </div>

      {/* 双权益状态：两个独立维度 */}
      <section className="rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5">
        <h2 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
          {t.entitlementsTitle}
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <EntitlementCard
            label={t.recipeAccessLabel}
            active={hasRecipeAccess(entitlements)}
            until={entitlements.recipePassUntil}
            notActive={t.notActive}
            activeUntil={t.activeUntil}
            zh={zh}
          />
          <EntitlementCard
            label={t.pdfAccessLabel}
            active={hasPdfPassAccess(entitlements)}
            until={entitlements.pdfPassUntil}
            notActive={t.notActive}
            activeUntil={t.activeUntil}
            zh={zh}
          />
        </div>

        <div className="mt-5">
          <h3 className="text-sm font-semibold text-[var(--hw-fg)]">
            {t.volumesOwned}
          </h3>
          {entitlements.volumes.length === 0 ? (
            <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
              {t.noVolumes}
            </p>
          ) : (
            <div className="mt-2 flex flex-wrap gap-2">
              {entitlements.volumes.map((v) => (
                <span
                  key={v}
                  className="rounded-full bg-[var(--hw-ginger)]/15 px-3 py-1 text-xs font-semibold text-[var(--hw-ginger)]"
                >
                  {v.toUpperCase()}
                </span>
              ))}
            </div>
          )}
        </div>

        <a
          href={`/${locale}/pricing`}
          className="mt-5 inline-block text-sm font-semibold text-[var(--hw-ginger)] hover:underline"
        >
          {t.goPricing} →
        </a>
      </section>

      {/* 订单记录 */}
      <section className="rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5">
        <h2 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
          {t.ordersTitle}
        </h2>
        {orders.length === 0 ? (
          <p className="mt-3 text-sm text-[var(--hw-fg-muted)]">{t.noOrders}</p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--hw-border)] text-xs text-[var(--hw-fg-muted)]">
                  <th className="py-2 pr-4 font-medium">{t.orderPlan}</th>
                  <th className="py-2 pr-4 font-medium">{t.orderDate}</th>
                  <th className="py-2 font-medium">{t.orderStatus}</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-[var(--hw-border)]/60">
                    <td className="py-2.5 pr-4 text-[var(--hw-fg)]">
                      {planName(o.planCode, o.volumeId)}
                    </td>
                    <td className="py-2.5 pr-4 text-[var(--hw-fg-muted)]">
                      {formatDate(o.createdAt, zh)}
                    </td>
                    <td className="py-2.5 text-[var(--hw-fg-muted)]">
                      {statusLabel(o.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function EntitlementCard({
  label,
  active,
  until,
  notActive,
  activeUntil,
  zh,
}: {
  label: string;
  active: boolean;
  until: string | null;
  notActive: string;
  activeUntil: string;
  zh: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        active
          ? "border-[var(--hw-scallion)]/40 bg-[var(--hw-scallion)]/10"
          : "border-[var(--hw-border)] bg-[var(--hw-bg-soft)]"
      }`}
    >
      <p className="text-sm font-semibold text-[var(--hw-fg)]">{label}</p>
      <p
        className={`mt-1 text-xs ${
          active ? "text-[var(--hw-scallion)]" : "text-[var(--hw-fg-muted)]"
        }`}
      >
        {active ? `${activeUntil} ${formatDate(until!, zh)}` : notActive}
      </p>
    </div>
  );
}
