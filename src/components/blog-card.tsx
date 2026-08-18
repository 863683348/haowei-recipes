import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/types";
import { localizePath, type Locale } from "@/i18n/config";

/** Blog 列表卡片（server component，无交互） */
export function BlogCard({ post, locale }: { post: BlogPost; locale: Locale }) {
  const isZh = locale === "zh";
  const title = isZh ? post.titleZh : post.titleEn;
  const excerpt = isZh ? post.excerptZh : post.excerptEn;
  const category = isZh ? post.categoryZh : post.categoryEn;

  return (
    <Link
      href={localizePath(`/blog/${post.slug}`, locale)}
      className="group block overflow-hidden rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] transition hover:shadow-md"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--hw-bg-soft)]">
        <Image
          src={post.coverImage}
          alt={title}
          fill
          sizes="(min-width: 1024px) 384px, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-[var(--hw-ginger)]">{category}</span>
        <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-[var(--hw-fg)]">
          {title}
        </h3>
        <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-[var(--hw-fg-muted)]">
          {excerpt}
        </p>
        <span className="mt-3 inline-block text-xs text-[var(--hw-fg-muted)]">
          {post.publishDate}
        </span>
      </div>
    </Link>
  );
}
