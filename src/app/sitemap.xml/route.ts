import { recipes } from "@/data/recipes";

/** sitemap.xml — route handler 手动缓存头（skill 铁律：route.ts 不自动走 headers 规则） */
export async function GET() {
  const base = "https://haoweirecipes.com";
  const staticPaths = [
    "",
    "/recipes",
    "/substitutions",
    "/terms",
    "/ai-assistant",
    "/about",
    "/faq",
    "/privacy",
    "/contact",
    "/shopping-list",
  ];
  const urls = [
    ...staticPaths.map((p) => ({ path: p, lastmod: "2026-08-15" })),
    ...recipes.map((r) => ({ path: `/recipes/${r.slug}`, lastmod: "2026-08-15" })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${base}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.path.includes("/recipes/") ? "weekly" : "monthly"}</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
