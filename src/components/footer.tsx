import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--hw-border)] bg-[var(--hw-bg-soft)]">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
            HǎoWèi 好味
          </p>
          <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
            Authentic Chinese home cooking in English — with substitutions for Western
            supermarkets, bilingual terms, and state photos you can actually follow.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--hw-fg)]">Explore</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--hw-fg-muted)]">
            <li><Link className="hover:text-[var(--hw-ginger)]" href="/recipes">All recipes</Link></li>
            <li><Link className="hover:text-[var(--hw-ginger)]" href="/substitutions">Ingredient substitutions</Link></li>
            <li><Link className="hover:text-[var(--hw-ginger)]" href="/terms">Chinese cooking glossary</Link></li>
            <li><Link className="hover:text-[var(--hw-ginger)]" href="/ai-assistant">Ask the AI assistant</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--hw-fg)]">About</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--hw-fg-muted)]">
            <li><Link className="hover:text-[var(--hw-ginger)]" href="/about">Our story</Link></li>
            <li><Link className="hover:text-[var(--hw-ginger)]" href="/faq">FAQ</Link></li>
            <li><Link className="hover:text-[var(--hw-ginger)]" href="/privacy">Privacy</Link></li>
            <li><Link className="hover:text-[var(--hw-ginger)]" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--hw-border)] py-4 text-center text-xs text-[var(--hw-fg-muted)]">
        © {new Date().getFullYear()} HǎoWèi 好味 · Authentic Chinese home cooking, made easy.
      </div>
    </footer>
  );
}
