import { recipes } from "@/data/recipes";
import { blogPosts } from "@/data/blog";
import { CUISINE_LIST } from "@/data/cuisines";
import { TAG_LIST } from "@/data/tags";
import { OCCASION_LIST } from "@/data/occasions";
import { locales, SITE_URL } from "@/i18n/config";

/** sitemap.xml — 双语言 URL + hreflang alternates（route handler 手动缓存头） */
export async function GET() {
  const staticPaths = [
    "",
    "/blog",
    "/recipes",
    "/recipes/chicken",
    "/recipes/pork",
    "/recipes/egg",
    "/recipes/beef",
    "/recipes/tofu",
    "/recipes/noodles",
    "/recipes/dumplings",
    "/recipes/soups",
    "/recipes/vegetarian",
    "/substitutions",
    "/terms",
    "/ai-assistant",
    "/about",
    "/faq",
    "/privacy",
    "/contact",
    // 注意：/shopping-list 不收录（robots.txt 已 Disallow，避免浪费抓取预算）
  ];
  const paths = [
    ...staticPaths.map((p) => ({ path: p, lastmod: "2026-08-15", freq: "monthly" })),
    ...CUISINE_LIST.map((c) => ({
      path: `/cuisine/${c.slug}`,
      lastmod: "2026-08-29",
      freq: "monthly",
    })),
    ...TAG_LIST.map((t) => ({
      path: `/tag/${t.slug}`,
      lastmod: "2026-08-29",
      freq: "monthly",
    })),
    ...OCCASION_LIST.map((o) => ({
      path: `/occasion/${o.slug}`,
      lastmod: "2026-08-29",
      freq: "monthly",
    })),
    ...recipes.map((r) => ({
      path: `/recipes/${r.slug}`,
      lastmod: "2026-08-15",
      freq: "weekly",
    })),
    ...blogPosts.map((p) => ({
      path: `/blog/${p.slug}`,
      lastmod: p.publishDate,
      freq: "weekly",
    })),
  ];

  const urlset = paths
    .map((u) => {
      const alternates = locales
        .map(
          (loc) =>
            `      <xhtml:link rel="alternate" hreflang="${loc}" href="${SITE_URL}/${loc}${u.path}" />`
        )
        .join("\n");
      return `  <url>
    <loc>${SITE_URL}/${locales[0]}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.freq}</changefreq>
${alternates}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlset}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
