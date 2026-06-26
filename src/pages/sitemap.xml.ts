import type { APIRoute } from "astro";

export const prerender = true;

const baseUrl = "https://www.quinchy.dev";

const routes = [
  { path: "/", changefreq: "monthly", priority: 1 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/projects", changefreq: "monthly", priority: 0.8 },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();

  const urls = routes
    .map(
      (route) =>
        `<url><loc>${baseUrl}${route.path}</loc><lastmod>${lastmod}</lastmod><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
