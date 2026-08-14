import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { terms } from "@/data/terms";

export const metadata: Metadata = {
  title: "Chinese Cooking Glossary — 中餐术语表",
  description:
    "The essential Chinese cooking glossary: light soy sauce (生抽), dark soy (老抽), Shaoxing wine (绍兴酒), doubanjiang (豆瓣酱) and more — bilingual terms with quantities and substitutions.",
};

export const dynamic = "force-static";

const categories = [
  { id: "sauce", label: "Sauces & seasonings", zh: "酱料" },
  { id: "spice", label: "Spices", zh: "香料" },
  { id: "technique", label: "Techniques", zh: "技法" },
  { id: "ingredient", label: "Ingredients", zh: "食材" },
  { id: "measurement", label: "Measurements", zh: "计量" },
] as const;

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
          Chinese cooking glossary
        </h1>
        <p className="mt-2 text-[var(--hw-fg-muted)]">
          {terms.length} terms every Chinese home cook needs — bilingual, quantified, with
          substitutions. Hover any term in a recipe for the same info.
        </p>

        {categories.map((cat) => {
          const list = terms.filter((t) => t.category === cat.id);
          if (list.length === 0) return null;
          return (
            <section key={cat.id} className="mt-10">
              <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
                {cat.label} <span className="text-sm font-normal text-[var(--hw-fg-muted)]">{cat.zh}</span>
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-[var(--hw-border)]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[var(--hw-bg-soft)] text-xs uppercase tracking-wide text-[var(--hw-fg-muted)]">
                    <tr>
                      <th className="px-4 py-2.5">中文</th>
                      <th className="px-4 py-2.5">English</th>
                      <th className="hidden px-4 py-2.5 sm:table-cell">What it is</th>
                      <th className="hidden px-4 py-2.5 md:table-cell">Swap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--hw-border)]/60 bg-[var(--hw-card)]">
                    {list.map((t) => (
                      <tr key={t.id}>
                        <td className="px-4 py-3">
                          <span className="font-semibold text-[var(--hw-fg)]">{t.zh}</span>
                          <span className="block text-xs text-[var(--hw-fg-muted)]">{t.pinyin}</span>
                        </td>
                        <td className="px-4 py-3 font-medium text-[var(--hw-fg)]">{t.en}</td>
                        <td className="hidden px-4 py-3 text-[var(--hw-fg-muted)] sm:table-cell">
                          {t.definition}
                          {t.quantEquivalent && (
                            <span className="mt-1 block text-xs font-medium text-[var(--hw-scallion)]">
                              ⚖ {t.quantEquivalent}
                            </span>
                          )}
                        </td>
                        <td className="hidden px-4 py-3 text-xs text-[var(--hw-fg-muted)] md:table-cell">
                          {t.substituteHint ?? "—"}
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
      <Footer />
    </>
  );
}
