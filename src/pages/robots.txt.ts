import type { APIRoute } from "astro";

export const prerender = true;

// `User-agent: *` already permits AI crawlers (GPTBot, ClaudeBot,
// PerplexityBot, Google-Extended, etc.); `Allow: /` is the standard syntax.
const body = `User-agent: *
Allow: /

Sitemap: https://www.quinchy.dev/sitemap-index.xml
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
