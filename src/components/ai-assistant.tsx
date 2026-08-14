"use client";

import { useState } from "react";
import { matchFAQ } from "@/data/faqs";

const confidenceLabel = {
  high: { text: "Verified", cls: "text-[var(--hw-scallion)] bg-[rgba(74,124,89,0.12)]" },
  medium: { text: "Advisory", cls: "text-[var(--hw-ginger)] bg-[rgba(199,123,46,0.15)]" },
  low: { text: "Try with care", cls: "text-[var(--hw-fg-muted)] bg-[var(--hw-bg-soft)]" },
};

const suggestions = [
  "Why low heat for garlic?",
  "What's the difference between light and dark soy?",
  "No Shaoxing wine — substitute?",
  "Too salty, how to fix?",
  "Is this gluten-free?",
  "Make it vegetarian?",
];

/**
 * R-05 AI 交互式追问（规则版）：FAQ 关键词匹配 + 边界诚实
 */
export function AIAssistant() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { q: string; answer: string; source?: string; confidence: string }[]
  >([]);

  const ask = (raw?: string) => {
    const q = (raw ?? input).trim();
    if (!q) return;
    const hit = matchFAQ(q);
    const answer = hit
      ? hit.faq.answer
      : `I'm not sure about "${q}" yet — I'm currently a rule-based helper covering technique, ingredients, flavor, equipment, and diet questions (18 topics so far). Try rephrasing, or check the ${"faq"} page. I'll learn LLM-powered answers in a future update.`;
    setHistory((prev) => [
      ...prev,
      {
        q,
        answer,
        source: hit?.faq.source,
        confidence: hit?.faq.confidence ?? "low",
      },
    ]);
    setInput("");
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5 shadow-sm">
        <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
          🥢 Ask HǎoWèi
        </h2>
        <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
          Questions about technique, ingredients, substitutions, and flavor — answered from our
          verified cooking knowledge base.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask();
          }}
          className="mt-4 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='e.g. "Why do you cook garlic first on low heat?"'
            className="min-w-0 flex-1 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg)] px-3 py-2 text-sm text-[var(--hw-fg)] outline-none focus:border-[var(--hw-ginger)]"
            aria-label="Ask a cooking question"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-[var(--hw-soy)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-[var(--hw-ginger)]"
          >
            Ask
          </button>
        </form>

        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => ask(s)}
              className="rounded-full border border-[var(--hw-border)] px-3 py-1 text-xs text-[var(--hw-fg-muted)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {history.length > 0 && (
        <ul className="mt-4 space-y-4">
          {history.map((h, i) => {
            const conf = confidenceLabel[h.confidence as keyof typeof confidenceLabel];
            return (
              <li
                key={i}
                className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-[var(--hw-fg)]">Q: {h.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--hw-fg)]">
                  {h.answer}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span className={`rounded-full px-2 py-0.5 font-medium ${conf.cls}`}>
                    {conf.text}
                  </span>
                  {h.source && (
                    <span className="text-[var(--hw-fg-muted)]">Source: {h.source}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
