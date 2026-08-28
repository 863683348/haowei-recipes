import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  locales,
  isLocale,
  pageAlternates,
  type Locale,
} from "@/i18n/config";
import { membershipText } from "@/lib/membership-i18n";
import { VOLUMES, PLANS, getVolume } from "@/lib/membership";
import { getRecipeBySlug } from "@/data/recipes";
import { RecipeCard } from "@/components/recipe-card";
import { LockIcon } from "@/components/icons";
import { V1DownloadForm } from "@/components/membership/v1-download-form";
import { CheckoutButton } from "@/components/membership/checkout-button";

interface Props {
  params: Promise<{ locale: string; volumeId: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    VOLUMES.map((v) => ({ locale, volumeId: v.id }))
  );
}

export const dynamic = "force-static";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, volumeId } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const zh = loc === "zh";
  const vol = getVolume(volumeId);
  const title = vol ? volumeTitle(vol.id, zh) : volumeId.toUpperCase();
  return {
    title: `${title} · PDF`,
    description: zh
      ? `${title}——好味双语家常菜谱合集 PDF，含买家水印，买断永久拥有。`
      : `${title} — a bilingual Chinese home-cooking collection PDF from HǎoWèi, watermarked and owned forever.`,
    alternates: pageAlternates(`/pdf/${volumeId}`, loc),
  };
}

export default async function VolumePage({ params }: Props) {
  const { locale, volumeId } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = membershipText(loc);
  const zh = loc === "zh";
  const vol = getVolume(volumeId);
  if (!vol) notFound();

  const included = vol.recipeSlugs
    .map((slug) => getRecipeBySlug(slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  const preview = included.slice(0, vol.previewCount);
  const locked = included.slice(vol.previewCount);
  const isV1 = vol.free;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {volumeTitle(vol.id, zh)}
      </h1>
      <p className="mt-2 text-sm text-[var(--hw-fg-muted)]">
        {vol.recipeSlugs.length} {t.recipesInVolume}
        {isV1
          ? ` · ${t.free}`
          : ` · ${zh ? `¥${PLANS.pdf_volume.priceCny}` : `$${PLANS.pdf_volume.priceUsd}`} ${t.perVolume} · ${t.volumePrice}`}
      </p>

      {/* 购买 / 下载控制 */}
      <div className="mt-6 rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6">
        <p className="text-sm font-semibold text-[var(--hw-fg)]">
          {t.volumeIncludes}
        </p>
        <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">
          {t.volumePdfNote}
        </p>
        <div className="mt-4 max-w-md">
          {isV1 ? (
            <V1DownloadForm volumeId={vol.id} locale={loc} />
          ) : (
            <CheckoutButton
              planCode="pdf_volume"
              volumeId={vol.id}
              locale={loc}
              label={t.volumePrice}
            />
          )}
        </div>
        {!isV1 && (
          <p className="mt-3 text-xs text-[var(--hw-fg-muted)]">
            {t.volumePreviewNote}
          </p>
        )}
      </div>

      {/* 目录预览 */}
      <h2 className="mt-10 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
        {zh ? "本册收录" : "What's inside"}
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
        {locked.map((r) => (
          <div
            key={r.slug}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-dashed border-[var(--hw-border)] bg-[var(--hw-bg-soft)]"
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-[var(--hw-bg-soft)] text-[var(--hw-fg-muted)]">
              <LockIcon className="h-8 w-8" />
            </div>
            <div className="p-4">
              <p className="font-serif text-sm font-semibold text-[var(--hw-fg)]">
                {zh ? r.titleZh : r.titleEn}
              </p>
              <p className="mt-1 text-xs text-[var(--hw-ginger)]">{t.locked}</p>
            </div>
          </div>
        ))}
      </div>
      {locked.length > 0 && (
        <p className="mt-3 text-xs text-[var(--hw-fg-muted)]">{t.v2ComingSoon}</p>
      )}

      <p className="mt-8 text-center text-xs text-[var(--hw-fg-muted)]">
        {zh ? "还想要更多？" : "Want more?"}{" "}
        <a
          href={`/${locale}/downloads`}
          className="font-semibold text-[var(--hw-ginger)] hover:underline"
        >
          {t.downloadsTitle} →
        </a>
      </p>
    </main>
  );
}
