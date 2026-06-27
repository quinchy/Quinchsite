/// <reference types="astro/client" />

// Runtime secrets/vars exposed to the Cloudflare Worker. Set locally in
// `.env` (loaded by the dev server) and in production via
// `wrangler secret put <NAME>`.
declare module "cloudflare:workers" {
  type RateLimitBinding = {
    limit(options: { key: string }): Promise<{ success: boolean }>;
  };

  export const env: {
    CONTACT_RATE_LIMITER: RateLimitBinding;
    EMAIL_USER: string;
    EMAIL_PASS: string;
  };
}
