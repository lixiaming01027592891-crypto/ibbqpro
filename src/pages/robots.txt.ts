import type { APIRoute } from "astro";

const siteUrl = "https://ibbqpro.pages.dev";

// 測試階段：全站封鎖 (Disallow: /)
// 上線時請改為 Allow: /
const robotsContent = `User-agent: *
Disallow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

export const GET: APIRoute = async () => {
  return new Response(robotsContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
