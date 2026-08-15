import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isLocale,
  localizePath,
  pageAlternates,
  type Locale,
} from "@/i18n/config";
import { membershipText } from "@/lib/membership-i18n";
import { PLANS } from "@/lib/membership";
import { CheckoutButton } from "@/components/membership/checkout-button";
import { CheckIcon } from "@/components/icons";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const t = membershipText(loc);
  return {
    title: t.pricingTitle,
    description: t.pricingDesc,
    alternates: pageAlternates("/pricing", loc),
  };
}

const PLAN_FEATURES: Record<
  string,
  { zh: string[]; en: string[] }
> = {
  recipe_pass: {
    zh: [
      "解锁全部菜谱与未来新菜（即时，免 7 天延迟）",
      "口味调整向导无限次",
      "购物清单高级换算与导出",
      "高清图片下载",
      "收藏夹与个人资料同步",
    ],
    en: [
      "Full recipe library + instant new recipes (no 7-day delay)",
      "Unlimited flavor adjuster",
      "Advanced shopping-list scaling & export",
      "HD image downloads",
      "Favorites & synced profile",
    ],
  },
  pdf_volume: {
    zh: [
      "该册 10 道菜合集 PDF（双语、双计量）",
      "买家邮箱水印",
      "买断永久拥有",
      "随时签名链接下载",
    ],
    en: [
      "A 10-recipe collection PDF (bilingual, dual units)",
      "Buyer-email watermark",
      "Owned forever (one-time purchase)",
      "Download anytime via signed link",
    ],
  },
  pdf_pass: {
    zh: [
      "全部已出版合集 PDF",
      "当年新增合集自动到手",
      "买家邮箱水印",
      "新合集优先通知",
    ],
    en: [
      "All published PDF volumes",
      "Every new volume this year, automatically",
      "Buyer-email watermark",
      "Early notice for new volumes",
    ],
  },
  all_access: {
    zh: [
      "菜谱会员全部权益",
      "PDF 会员全部权益",
      "一次开通，双权益到账",
    ],
    en: [
      "Everything in Recipe Pass",
      "Everything in PDF Pass",
      "Both benefits with one plan",
    ],
  },
};

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = membershipText(loc);
  const zh = loc === "zh";

  const passPlans = ["recipe_pass", "pdf_pass", "all_access"] as const;

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="text-center">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)] sm:text-4xl">
          {t.pricingTitle}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--hw-fg-muted)] sm:text-base">
          {t.pricingDesc}
        </p>
        <p className="mt-3 text-xs text-[var(--hw-fg-muted)]">{t.needAccount}</p>
      </header>

      {/* 三档年订阅 */}
      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {passPlans.map((code) => {
          const plan = PLANS[code];
          const name =
            code === "recipe_pass"
              ? t.recipePassName
              : code === "pdf_pass"
                ? t.pdfPassName
                : t.allAccessName;
          const tagline =
            code === "recipe_pass"
              ? t.recipePassTagline
              : code === "pdf_pass"
                ? t.pdfPassTagline
                : t.allAccessTagline;
          const features = PLAN_FEATURES[code];
          const highlight = code === "all_access";
          return (
            <div
              key={code}
              className={`flex flex-col rounded-2xl border p-6 ${
                highlight
                  ? "border-[var(--hw-ginger)] bg-[var(--hw-ginger)]/5 shadow-md"
                  : "border-[var(--hw-border)] bg-[var(--hw-card)]"
              }`}
            >
              <h2 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
                {name}
              </h2>
              <p className="mt-1 min-h-10 text-xs leading-relaxed text-[var(--hw-fg-muted)]">
                {tagline}
              </p>
              <p className="mt-4">
                <span className="text-3xl font-bold text-[var(--hw-fg)]">
                  {zh ? `¥${plan.priceCny}` : `$${plan.priceUsd}`}
                </span>
                <span className="ml-1 text-sm text-[var(--hw-fg-muted)]">
                  {t.perYear}
                </span>
              </p>
              <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">
                {zh
                  ? `约 $${plan.priceUsd}/年 · ¥${plan.priceCny}`
                  : `≈ ¥${plan.priceCny}/year · $${plan.priceUsd}`}
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {(zh ? features.zh : features.en).map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[var(--hw-fg)]"
                  >
                    <span className="mt-0.5 text-[var(--hw-ginger)]"><CheckIcon className="h-4 w-4" /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CheckoutButton
                  planCode={code}
                  locale={loc}
                  label={t.choosePlan}
                  className="block"
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* PDF 单册（买断） */}
      <section className="mt-8 rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
              {t.pdfVolumeName}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-[var(--hw-fg-muted)]">
              {t.pdfVolumeTagline}
            </p>
            <p className="mt-3">
              <span className="text-3xl font-bold text-[var(--hw-fg)]">
                {zh ? `¥${PLANS.pdf_volume.priceCny}` : `$${PLANS.pdf_volume.priceUsd}`}
              </span>
              <span className="ml-1 text-sm text-[var(--hw-fg-muted)]">
                {t.perVolume} · {t.volumePrice}
              </span>
            </p>
          </div>
          <div className="shrink-0">
            <CheckoutButton
              planCode="pdf_volume"
              volumeId="v2"
              locale={loc}
              label={t.upgrade}
            />
          </div>
        </div>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {(zh ? PLAN_FEATURES.pdf_volume.zh : PLAN_FEATURES.pdf_volume.en).map(
            (f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-[var(--hw-fg)]"
              >
                <span className="mt-0.5 text-[var(--hw-ginger)]"><CheckIcon className="h-4 w-4" /></span>
                {f}
              </li>
            )
          )}
        </ul>
        <p className="mt-3 text-xs text-[var(--hw-fg-muted)]">{t.v2ComingSoon}</p>
      </section>

      {/* 免费权益说明 */}
      <section className="mt-8 rounded-xl bg-[var(--hw-bg-soft)] p-5 text-center">
        <h3 className="font-serif text-base font-semibold text-[var(--hw-fg)]">
          {t.freePlanTitle}
        </h3>
        <p className="mx-auto mt-1 max-w-xl text-xs leading-relaxed text-[var(--hw-fg-muted)]">
          {t.freePlanDesc}
        </p>
        <a
          href={localizePath("/downloads", loc)}
          className="mt-3 inline-block text-sm font-semibold text-[var(--hw-ginger)] hover:underline"
        >
          {t.volumeFreeDownload} →
        </a>
      </section>
    </main>
  );
}
