import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "HǎoWèi 好味 exists to make authentic Chinese home cooking approachable for cooks outside China — bilingual, quantified, and substitution-friendly.",
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">About HǎoWèi 好味</h1>
        <div className="mt-6 space-y-4 leading-relaxed text-[var(--hw-fg)]">
          <p>
            <span className="font-serif text-xl font-semibold">好味 (hǎo wèi)</span> means
            "good taste" — and also "the taste of home". HǎoWèi was born from a simple
            observation: millions of people outside China love Chinese food, but most
            "Chinese" recipes they find are Americanized, vague, or call for ingredients
            they've never seen.
          </p>
          <p>We set out to fix the three biggest obstacles to cooking real Chinese food abroad:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold">The terminology wall.</span> 生抽, 老抽, 料酒,
              蚝油 — every term is bilingual and quantified (1 tbsp ≈ 15 ml), never "适量".
            </li>
            <li>
              <span className="font-semibold">The ingredient problem.</span> Every recipe's
              ingredients are tagged as "local supermarket" or "Asian grocery", and the
              substitution engine tells you exactly how to swap, with a fidelity rating.
            </li>
            <li>
              <span className="font-semibold">The "look" problem.</span> Chinese cooking is
              about watching the food, not reading a timer. Every visual cue ("cooked until
              fragrant", "edges turn golden") gets a state note describing what to look for.
            </li>
          </ul>
          <p>
            Our recipes come from real Chinese family kitchens — 家常菜, the food that's
            actually cooked at home, not the restaurant canon. Every dish is written in
            English first (for our readers) with Chinese as a companion, because authenticity
            and clarity should not be in conflict.
          </p>
          <p className="text-[var(--hw-fg-muted)]">
            Questions? <a href="/contact" className="text-[var(--hw-ginger)] underline">Get in touch</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
