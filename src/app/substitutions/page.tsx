import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SubstitutionPanel } from "@/components/substitution-panel";
import { substitutions } from "@/data/substitutions";

export const metadata: Metadata = {
  title: "Chinese Ingredient Substitutions",
  description:
    "Don't have Shaoxing wine, dark soy, or doubanjiang? Find the best Western-supermarket substitutes with fidelity ratings, ratios, and flavor notes.",
};

export const dynamic = "force-static";

export default function SubstitutionsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
          Chinese ingredient substitutions
        </h1>
        <p className="mt-2 text-[var(--hw-fg-muted)]">
          {substitutions.length} vetted swaps, each with a fidelity rating — so you know how
          close the flavor will be before you commit.
        </p>

        <div className="mt-8">
          <SubstitutionPanel />
        </div>

        <section className="mt-12">
          <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
            Full substitution table
          </h2>
          <div className="mt-4 space-y-3">
            {substitutions.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-[var(--hw-fg)]">
                    {s.from}
                    {s.fromZh && (
                      <span className="ml-1.5 font-normal text-[var(--hw-fg-muted)]">
                        {s.fromZh}
                      </span>
                    )}
                  </span>
                  <span className="text-sm" title={`Fidelity ${s.fidelity}/5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className={n <= s.fidelity ? "text-[var(--hw-ginger)]" : "text-[var(--hw-border)]"}>
                        ★
                      </span>
                    ))}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--hw-fg)]">
                  <span className="font-medium text-[var(--hw-scallion)]">Use: </span>
                  {s.to} <span className="text-[var(--hw-fg-muted)]">({s.ratio})</span>
                </p>
                <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">{s.note}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
