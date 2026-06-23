# Repository Guidelines

## Project Structure & Module Organization

This is a Bun-managed Next.js 16 portfolio using the App Router, React 19, TypeScript, and Tailwind CSS v4.

- `src/app/` contains routes, layouts, metadata, global styles, and the `api/send-email` endpoint.
- `src/components/` contains shared UI; portfolio content is stored in typed arrays under `src/components/sections/`.
- `src/hooks/`, `src/providers/`, and `src/validation/` hold reusable hooks, React providers, and Zod schemas.
- `public/` stores project images, logos, the résumé PDF, and other static assets.
- Root configuration lives in `next.config.ts`, `tsconfig.json`, `biome.json`, and `postcss.config.mjs`.

Use the `@/*` alias for imports from `src/`. Keep route-specific code near its route and reusable UI in `components/`.

## Build, Test, and Development Commands

Use Bun; `bun.lock` is the source of dependency resolution.

- `bun install` installs dependencies.
- `bun dev` starts the development server at `http://localhost:3000`.
- `bun run lint` runs Biome checks, including linting and import organization.
- `bun run format` rewrites files using Biome formatting.
- `bun run build` creates a production build and performs Next.js/TypeScript validation.
- `bun run start` serves the completed production build.

## Coding Style & Naming Conventions

Biome enforces two-space indentation, recommended React/Next.js rules, and organized imports. Use strict TypeScript, double quotes, and the existing component patterns. Name React components in PascalCase, functions and variables in camelCase, hooks with a `use-` filename prefix, and component files in kebab-case (for example, `theme-provider.tsx`).

Keep theme keys synchronized between `src/app/layout.tsx`, `src/providers/theme-provider.tsx`, and CSS variables in `src/app/globals.css`.

## Testing Guidelines

No automated test runner is currently configured. Before submitting changes, run `bun run lint` and `bun run build`, then manually verify affected routes and responsive states. For UI changes, check light/dark and default/teal themes. If adding tests, use `*.test.ts` or `*.test.tsx` beside the code and add the runner command to `package.json`.

## Security & Configuration

The contact endpoint requires `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `EMAIL_USER`, and `EMAIL_PASS`. Store these in local environment files; `.env*` is intentionally ignored. Never commit credentials.

## Commit & Pull Request Guidelines

Follow the repository’s Conventional Commit style: `feat(projects): ...`, `content(experience): ...`, `perf(projects): ...`, or `chore(deps): ...`. Keep commits focused and imperative. Pull requests should explain behavior changes, list validation performed, link related issues, and include screenshots for visual changes. Call out new environment variables or configuration changes explicitly.
