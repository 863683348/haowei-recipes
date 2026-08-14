import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
        <p className="font-serif text-6xl font-bold text-[var(--hw-ginger)]">404</p>
        <h1 className="mt-4 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
          This dish isn&apos;t on the menu yet
        </h1>
        <p className="mt-2 text-[var(--hw-fg-muted)]">
          The page you&apos;re looking for doesn&apos;t exist — but there are plenty of
          recipes that do.
        </p>
        <Link
          href="/recipes"
          className="mt-6 rounded-lg bg-[var(--hw-soy)] px-6 py-3 text-sm font-semibold text-white dark:bg-[var(--hw-ginger)]"
        >
          Browse recipes
        </Link>
      </main>
      <Footer />
    </>
  );
}
