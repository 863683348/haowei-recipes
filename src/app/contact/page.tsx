import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with HǎoWèi 好味.",
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">Contact</h1>
        <p className="mt-2 text-[var(--hw-fg-muted)]">
          Recipe requests, corrections, or collaboration ideas — we read everything.
        </p>
        <div className="mt-8 rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6 shadow-sm">
          <p className="text-sm text-[var(--hw-fg)]">
            For now, email us at{" "}
            <a
              href="mailto:hello@haoweirecipes.com"
              className="font-semibold text-[var(--hw-ginger)] underline"
            >
              hello@haoweirecipes.com
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-[var(--hw-fg-muted)]">
            Tell us: which dish you want next, which ingredient confused you, or which recipe
            didn't work — we'll fix it.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
