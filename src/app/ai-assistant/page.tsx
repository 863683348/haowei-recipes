import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AIAssistant } from "@/components/ai-assistant";

export const metadata: Metadata = {
  title: "AI Cooking Assistant",
  description:
    "Ask HǎoWèi anything about Chinese cooking: why low heat, how to substitute ingredients, what 'velveting' means, and how to fix a too-salty dish.",
};

export const dynamic = "force-static";

export default function AIAssistantPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
            🥢 Ask HǎoWèi
          </h1>
          <p className="mt-2 text-[var(--hw-fg-muted)]">
            Your rule-based Chinese-cooking companion — technique, ingredients, substitutions,
            flavor fixes, and diet questions, answered from our verified knowledge base.
          </p>
        </div>
        <div className="mt-8">
          <AIAssistant />
        </div>
      </main>
      <Footer />
    </>
  );
}
