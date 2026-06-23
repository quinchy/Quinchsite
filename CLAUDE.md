# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Cyril James De Guzman's personal portfolio/resume site (quinchy.dev), built with Next.js 16 (App Router), React 19, and Tailwind CSS v4. Bun is the package manager (`bun.lock`).

## Commands

```bash
bun dev          # start dev server (next dev)
bun run build    # production build (next build)
bun run start    # serve production build
bun run lint     # biome check (lint + format check + import sort, no separate ESLint/Prettier)
bun run format   # biome format --write
```

There is no test suite configured in this repo.

## Architecture

- **Routes** (`src/app/`): `/` (home — composes all section components), `/about`, `/projects` (full project list), `/api/send-email` (POST-only contact form endpoint), plus `robots.ts`/`sitemap.ts`.
- **Content is hardcoded in components, not a CMS.** Resume data (projects, experiences, education, skills) lives as typed arrays directly inside `src/components/sections/*.tsx`. To update resume content, edit those arrays in place.
- **Draft gating**: project entries can carry `draft: true` (see `src/components/sections/projects.tsx`); they're filtered out unless `NODE_ENV` is `development`, `dev`, or `local`.
- **Theming**: two independent axes — mode (`light`/`dark`/`system`) and color theme (`default`/`teal`) — persisted to `localStorage` (`theme`, `color-theme`) and applied as classes (`.dark`, `.teal`) on `<html>`. An inline blocking `<script>` in `src/app/layout.tsx` sets these classes pre-hydration to avoid a flash of incorrect theme; `src/providers/theme-provider.tsx` (`ThemeProvider`/`useThemeContext`) mirrors this for in-app toggles (`mode-menu.tsx`, `theme-menu.tsx`). When changing theme keys/values, keep the inline script and the provider in sync. CSS variables for each mode/theme combination are defined in `src/app/globals.css`.
- **Contact form flow**: `contact-form.tsx` (react-hook-form + zod) → `POST /api/send-email` → re-validates with the same zod schema (`src/validation/contact.ts`), rate-limits via Upstash Redis (`@upstash/ratelimit`, 5 requests/day per IP), then sends mail with `nodemailer` over Gmail using `EMAIL_USER`/`EMAIL_PASS` env vars. TanStack Query is only used to drive this form's mutation (wrapped via `QueryProvider` in the root layout).
- **Visual flourishes**: `fuzzy-text.tsx` (canvas-based glitch text effect for section headers, dynamically imported client-only with a `StaticTitle` fallback to avoid layout shift/SSR mismatch), `noise.tsx`/`noise-wrapper.tsx` (canvas grain overlay), `toast.tsx` (global toast via an imperative `showToast()` function rather than a React context).
- **Path alias**: `@/*` → `src/*` (see `tsconfig.json`). Static assets under `public/` are imported as `StaticImageData` via relative-escape imports like `@/../public/<project>/<image>.webp` for use with `next/image` blur placeholders.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`, `babel-plugin-react-compiler`), and `ViewTransition` (React canary API, typed via `src/react-canary.d.ts`) is used for page transitions — avoid patterns that would defeat compiler memoization assumptions.
