/// <reference types="astro/client" />

// Runtime secrets/vars exposed to the Cloudflare Worker. Set locally in
// `.env` (loaded by the dev server) and in production via
// `wrangler secret put <NAME>`.
declare module "cloudflare:workers" {
  export const env: {
    UPSTASH_REDIS_REST_URL: string;
    UPSTASH_REDIS_REST_TOKEN: string;
    EMAIL_USER: string;
    EMAIL_PASS: string;
  };
}
