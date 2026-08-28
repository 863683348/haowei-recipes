import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isLocale,
  pageAlternates,
  type Locale,
} from "@/i18n/config";
import { membershipText } from "@/lib/membership-i18n";
import { VOLUMES, PLANS } from "@/lib/membership";
import { V1DownloadForm } from "@/components/membership/v1-download-form";
import { CheckoutButton } from "@/components/membership/checkout-button";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const t = membershipText(loc);
  return {
    title: t.downloadsTitle,
    description: t.downloadsDesc,
    alternates: pageAlternates("/downloads", loc),
  };
}

function volumeTitle(id: string, zh: boolean): string {
  if (id === "v1")
    return zh ? "V1 · 首发合集（10 道）" : "V1 · Launch Collection (10 recipes)";
  if (id === "v2")
    return zh ? "V2 · 川菜专场（制作中）" : "V2 · Sichuan Special (in production)";
  if (id === "v3")
    return zh
      ? "V3 · Top 25 家常菜电子书（免费）"
      : "V3 · Top 25 Home Recipes eBook (Free)";
  return `${id.toUpperCase()}`;
}

export default async function DownloadsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = membershipText(loc);
  const zh = loc === "zh";

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {t.downloadsTitle}
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--hw-fg-muted)]">
        {t.downloadsDesc}
      </p>

      <div className="mt-8 space-y-6">
        {VOLUMES.map((vol) => (
          <section
            key={vol.id}
            className="rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
                  {volumeTitle(vol.id, zh)}
                </h2>
                <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">
                  {vol.recipeSlugs.length} {t.recipesInVolume}
                  {vol.free
                    ? ` · ${t.free}`
                    : ` · ${zh ? `¥${PLANS.pdf_volume.priceCny}` : `$${PLANS.pdf_volume.priceUsd}`} ${t.perVolume} · ${t.volumePrice}`}
                </p>
              </div>

              {vol.free ? (
                <div className="w-full max-w-sm">
                  <p className="mb-2 text-xs text-[var(--hw-fg-muted)]">
                    {t.emailForDownload}
                  </p>
                  <V1DownloadForm volumeId={vol.id} locale={loc} />
                </div>
              ) : (
                <div className="shrink-0 text-right">
                  <CheckoutButton
                    planCode="pdf_volume"
                    volumeId={vol.id}
                    locale={loc}
                    label={t.volumePrice}
                  />
                  <p className="mt-2 max-w-xs text-right text-xs text-[var(--hw-fg-muted)]">
                    {t.volumePreviewNote}
                  </p>
                </div>
              )}
            </div>

            {!vol.free && (
              <p className="mt-3 rounded-lg bg-[var(--hw-bg-soft)] px-3 py-2 text-xs text-[var(--hw-fg-muted)]">
                {t.v2ComingSoon}
              </p>
            )}
          </section>
        ))}
      </div>

      {/* PDF 会员 / All-Access 引导 */}
      <section className="mt-8 rounded-xl bg-[var(--hw-bg-soft)] p-5 text-center">
        <p className="text-sm font-medium text-[var(--hw-fg)]">
          {zh
            ? "想要全部合集？PDF 会员或 All-Access 一次解锁所有册。"
            : "Want them all? PDF Pass or All-Access unlocks every volume."}
        </p>
        <a
          href={`/${locale}/pricing`}
          className="mt-2 inline-block text-sm font-semibold text-[var(--hw-ginger)] hover:underline"
        >
          {t.goPricing} →
        </a>
      </section>
    </main>
  );
}
