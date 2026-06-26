import type { APIRoute } from "astro";

export const prerender = true;

const body = `User-agent: *
Allow: *

Sitemap: https://www.quinchy.dev/sitemap.xml
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
