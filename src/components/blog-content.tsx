import type { BlogBlock } from "@/lib/types";

/**
 * 渲染 BlogBlock 数组（p / h2 / ul / ol / note）。
 * 中英文正文都用同一 renderer，按 locale 取对应 body 数组即可。
 */
export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-8 font-serif text-2xl font-semibold text-[var(--hw-fg)]"
              >
                {b.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-[15px] leading-relaxed text-[var(--hw-fg)]">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-1.5 pl-6 text-[15px] text-[var(--hw-fg)]">
                {b.items?.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-1.5 pl-6 text-[15px] text-[var(--hw-fg)]">
                {b.items?.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            );
          case "note":
            return (
              <div
                key={i}
                className="rounded-lg border border-[var(--hw-ginger)]/40 bg-[var(--hw-bg-soft)] p-3 text-sm text-[var(--hw-fg-muted)]"
              >
                💡 {b.text}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
