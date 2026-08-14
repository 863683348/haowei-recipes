/** robots.txt — route handler 手动缓存头 */
export async function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /shopping-list

Sitemap: https://haoweirecipes.com/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
