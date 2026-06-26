# Migration Plan: Next.js + Vercel → Astro + Cloudflare

## Part 1 — Init Astro in-place

- Remove Next.js deps: `bun remove next eslint-config-next babel-plugin-react-compiler`
- Install Astro deps: `bun add astro @astrojs/react @astrojs/cloudflare`
- Create `astro.config.mjs` manually (adapter, integrations, output)
- Create `src/pages/` and `src/layouts/` directories
- Update `package.json` scripts: `dev`/`build`/`start` → `astro dev`/`astro build`/`astro preview`
- Port `tsconfig.json`: keep `@/*` alias + strict flags, add Astro types (`astro/client`)

---

## Part 2 — Migrate pages

| Next.js route | Astro equivalent |
|---|---|
| `app/page.tsx` | `src/pages/index.astro` |
| `app/about/page.tsx` | `src/pages/about.astro` |
| `app/projects/page.tsx` | `src/pages/projects.astro` |
| `app/not-found.tsx` | `src/pages/404.astro` |
| `app/layout.tsx` | `src/layouts/Layout.astro` |

---

## Part 3 — Handle Next.js-specific imports

| Was | Replace with |
|---|---|
| `next/image` | Astro `<Image>` (`@astrojs/image`) |
| `next/font` (Geist) | `@fontsource/geist` or direct CSS `@import` |
| `next/dynamic` (fuzzy-text) | Astro `client:only="react"` |
| `next/navigation` | Astro `Astro.url`, `Astro.redirect` |
| `MetadataRoute` (sitemap/robots) | Astro endpoint files (see Part 5) |
| React Compiler (`babel-plugin-react-compiler`) | Drop — not applicable in Astro |
| `ViewTransition` (React canary) | Astro `<ViewTransitions />` from `astro:transitions` |
| Inline theme-blocking `<script>` in layout | Move verbatim into `Layout.astro` `<head>` |

---

## Part 4 — React components → Islands

**Preserve as-is (React), just add `client:` directive:**

| Component | Directive |
|---|---|
| `fuzzy-text.tsx` | `client:only="react"` |
| `noise.tsx` / `noise-wrapper.tsx` | `client:only="react"` |
| `contact-form.tsx` | `client:load` |
| `mode-menu.tsx` / `theme-menu.tsx` | `client:load` |
| `pages-menu.tsx` | `client:load` |
| `toast.tsx` | `client:only="react"` |
| `ThemeProvider` / `QueryProvider` | wrap interactive islands only, not whole layout |

**Can convert to `.astro` (no client JS needed):**

- `badge.tsx`, `footer.tsx`, `icons.tsx`, `static-title.tsx`
- All `sections/*.tsx` (static content arrays — no interactivity)
- `navbar.tsx` — except the menu sub-components above

---

## Part 5 — Migrate API route + SEO endpoints

**`/api/send-email`:**
- Move to `src/pages/api/send-email.ts`
- Replace `NextRequest`/`NextResponse` with Astro `APIRoute` + native `Request`/`Response`
- Keep: Zod validation, Upstash Redis ratelimit, nodemailer — all framework-agnostic

**SEO:**
- `sitemap.ts` → `src/pages/sitemap.xml.ts` (Astro endpoint returning XML string)
- `robots.ts` → `src/pages/robots.txt.ts`
- Metadata → frontmatter props passed into `Layout.astro` `<head>`

---

## Part 6 — Cloudflare deployment

- `astro.config.mjs`: set `adapter: cloudflare()`, `output: "server"`
- Create `wrangler.toml` (worker name, compatibility date, `nodejs_compat` flag for nodemailer)
- Migrate Vercel env vars → Cloudflare Worker env secrets (`wrangler secret put`)
- Required secrets: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `EMAIL_USER`, `EMAIL_PASS`
- Build + deploy: `bun run build && wrangler deploy`

---

## Part 7 — Replace Tailwind with raw CSS

- Drop `tailwindcss`, `@tailwindcss/postcss`, `@astrojs/tailwind`, `postcss.config.mjs`
- Create `src/styles/global.css` — port all CSS variables from current `globals.css` (theme colors, dark/teal modes)
- Replace all utility classes in components with scoped CSS:
  - `.astro` components → `<style>` blocks (auto-scoped)
  - React island components → CSS Modules (`.module.css`) or a shared `src/styles/components.css`
- Preserve existing CSS variable names (theme system depends on them — `--background`, `--foreground`, etc.)
- Import `global.css` once in `Layout.astro`
- No PostCSS pipeline needed; Astro handles plain CSS natively

---

## Part 8 — Deps cleanup

**Remove:**
```
next  eslint-config-next  babel-plugin-react-compiler
tailwindcss  @tailwindcss/postcss  @astrojs/tailwind
```

**Keep:**
```
react  react-dom  react-hook-form  @hookform/resolvers
@tanstack/react-query  zod
@upstash/ratelimit  @upstash/redis  nodemailer
@biomejs/biome  typescript
```

**Add:**
```
astro  @astrojs/react  @astrojs/cloudflare
@fontsource/geist  (if dropping next/font)
```

---

## Part 9 — Validation checklist

- [ ] `bun run build` passes (no TS errors)
- [ ] `bun run lint` (Biome) clean
- [ ] All 3 pages render in dev
- [ ] Contact form POST works (rate limit + email send)
- [ ] Light/dark + teal themes apply without flash
- [ ] `fuzzy-text` canvas effect loads client-side only
- [ ] `/sitemap.xml` and `/robots.txt` return correct responses
- [ ] `wrangler deploy` succeeds, smoke test on `*.workers.dev`
