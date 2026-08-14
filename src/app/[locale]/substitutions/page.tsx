import type { Metadata } from "next";
import { SubstitutionPanel } from "@/components/substitution-panel";
import { StarIcon } from "@/components/icons";
import { substitutions } from "@/data/substitutions";
import { isLocale, pageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale as Locale);
  return {
    title: t.metadata.substitutionsTitle,
    description: t.metadata.substitutionsDesc,
    alternates: pageAlternates("/substitutions", locale as Locale),
  };
}

export default async function SubstitutionsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {t.substitutionsPage.title}
      </h1>
      <p className="mt-2 text-[var(--hw-fg-muted)]">
        {t.substitutionsPage.subtitle.replace("{n}", String(substitutions.length))}
      </p>

      <div className="mt-8">
        <SubstitutionPanel />
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
          {t.substitutionsPage.fullTable}
        </h2>
        <div className="mt-4 space-y-3">
          {substitutions.map((s) => (
            <div
              key={s.id}
              className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-semibold text-[var(--hw-fg)]">
                  {isZh ? s.fromZh ?? s.from : s.from}
                  {!isZh && s.fromZh && (
                    <span className="ml-1.5 font-normal text-[var(--hw-fg-muted)]">
                      {s.fromZh}
                    </span>
                  )}
                </span>
                <span className="text-sm" title={t.recipeDetail.fidelity.replace("{f}", String(s.fidelity))}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <StarIcon
                      key={n}
                      className={
                        n <= s.fidelity
                          ? "inline-block h-3.5 w-3.5 fill-[var(--hw-ginger)] text-[var(--hw-ginger)]"
                          : "inline-block h-3.5 w-3.5 text-[var(--hw-border)]"
                      }
                    />
                  ))}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--hw-fg)]">
                <span className="font-medium text-[var(--hw-scallion)]">
                  {t.recipeDetail.use}
                </span>
                {isZh ? s.toZh ?? s.to : s.to}{" "}
                <span className="text-[var(--hw-fg-muted)]">({s.ratio})</span>
              </p>
              <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">
                {isZh ? s.noteZh ?? s.note : s.note}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
