import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Chinese home cooking — substitutions, techniques, diet adaptations, and equipment.",
};

export const dynamic = "force-static";

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">FAQ</h1>
        <p className="mt-2 text-[var(--hw-fg-muted)]">
          Answers from our cooking knowledge base. Prefer to ask in your own words? Try the{" "}
          <a href="/ai-assistant" className="text-[var(--hw-ginger)] underline">AI assistant</a>.
        </p>
        <div className="mt-8 space-y-5">
          {faqs.map((f) => (
            <details
              key={f.id}
              className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 shadow-sm"
            >
              <summary className="cursor-pointer font-medium text-[var(--hw-fg)]">
                {f.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--hw-fg)]">{f.answer}</p>
              {f.source && (
                <p className="mt-2 text-xs text-[var(--hw-fg-muted)]">Source: {f.source}</p>
              )}
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
