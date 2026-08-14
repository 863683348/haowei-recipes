import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "HǎoWèi 好味 privacy policy — what we store (almost nothing) and why.",
};

export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">Privacy Policy</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--hw-fg)]">
          <p><strong>In short:</strong> HǎoWèi 好味 stores almost nothing about you. There is no account system and no tracking beyond what's needed to run the site.</p>
          <p><strong>Local storage.</strong> Your shopping list, unit preference (g/ml vs cup/tbsp), and theme choice are stored only in your own browser's local storage. We never see them.</p>
          <p><strong>No accounts.</strong> The site has no sign-up, no login, and no user profiles. The AI assistant is a rule-based FAQ engine — your questions are answered locally in your browser and are not transmitted to any third party.</p>
          <p><strong>Analytics.</strong> We may use privacy-respecting, cookieless analytics to understand which recipes are popular. No personal data is collected.</p>
          <p><strong>Third-party links.</strong> Shopping-list links may point to affiliate stores; we disclose affiliate relationships on pages where they appear.</p>
          <p><strong>Contact.</strong> Questions? <a href="/contact" className="text-[var(--hw-ginger)] underline">Contact us</a>.</p>
          <p className="text-[var(--hw-fg-muted)]">Last updated: 2026-08-15.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
