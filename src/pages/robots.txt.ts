import type { APIRoute } from "astro";

const siteUrl = "https://bbqprotw.com";

const robotsContent = `User-agent: *
Allow: /

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
