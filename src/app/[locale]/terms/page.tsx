import type { Metadata } from "next";
import { terms } from "@/data/terms";
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
    title: t.metadata.termsTitle,
    description: t.metadata.termsDesc,
    alternates: pageAlternates("/terms", locale as Locale),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const categories = t.termsPage.categories;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {t.termsPage.title}
      </h1>
      <p className="mt-2 text-[var(--hw-fg-muted)]">
        {t.termsPage.subtitle.replace("{n}", String(terms.length))}
      </p>

      {categories.map((cat) => {
        const list = terms.filter((term) => term.category === cat.id);
        if (list.length === 0) return null;
        return (
          <section key={cat.id} className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
              {cat.label}
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-[var(--hw-border)]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--hw-bg-soft)] text-xs uppercase tracking-wide text-[var(--hw-fg-muted)]">
                  <tr>
                    <th className="px-4 py-2.5">{t.termsPage.colZh}</th>
                    <th className="px-4 py-2.5">{t.termsPage.colEn}</th>
                    <th className="hidden px-4 py-2.5 sm:table-cell">
                      {t.termsPage.colWhat}
                    </th>
                    <th className="hidden px-4 py-2.5 md:table-cell">
                      {t.termsPage.colSwap}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--hw-border)]/60 bg-[var(--hw-card)]">
                  {list.map((term) => (
                    <tr key={term.id}>
                      <td className="px-4 py-3">
                        <span className="font-semibold text-[var(--hw-fg)]">{term.zh}</span>
                        <span className="block text-xs text-[var(--hw-fg-muted)]">
                          {term.pinyin}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-[var(--hw-fg)]">{term.en}</td>
                      <td className="hidden px-4 py-3 text-[var(--hw-fg-muted)] sm:table-cell">
                        {isZh ? term.definitionZh ?? term.definition : term.definition}
                        {term.quantEquivalent && (
                          <span className="mt-1 block text-xs font-medium text-[var(--hw-scallion)]">
                            ⚖ {term.quantEquivalent}
                          </span>
                        )}
                      </td>
                      <td className="hidden px-4 py-3 text-xs text-[var(--hw-fg-muted)] md:table-cell">
                        {isZh
                          ? term.substituteHintZh ?? term.substituteHint ?? "—"
                          : term.substituteHint ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </main>
  );
}
