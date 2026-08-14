import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/recipes", label: "Recipes" },
  { href: "/substitutions", label: "Substitutions" },
  { href: "/terms", label: "Glossary" },
  { href: "/ai-assistant", label: "AI Assistant" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--hw-border)] bg-[var(--hw-bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-bold text-[var(--hw-soy)] dark:text-[var(--hw-soy)]">
            HǎoWèi
          </span>
          <span className="hidden text-sm text-[var(--hw-fg-muted)] sm:inline">好味</span>
        </Link>
        <nav className="flex items-center gap-4 overflow-x-auto">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="whitespace-nowrap text-sm font-medium text-[var(--hw-fg-muted)] transition hover:text-[var(--hw-ginger)]"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/shopping-list"
            className="whitespace-nowrap rounded-lg bg-[var(--hw-ginger)] px-3 py-1.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            🛒 List
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
