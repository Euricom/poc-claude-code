# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start Vite dev server
bun run build        # TypeScript check + Vite production build
bun run lint         # ESLint (flat config)
bun run preview      # Preview production build
```

No test framework is configured.

## Architecture

React 19 SPA built with Vite, TypeScript, and TailwindCSS v4. Uses `bun` as the package manager (lockfile: `bun.lock`), though `pnpm` is declared as `packageManager` in package.json.

**Routing:** React Router v7 with optional hash routing (`VITE_USE_HASH_ROUTE`). Routes defined in `src/Router.tsx`, wrapped in `AppLayout` which provides header + centered content area.

**API layer:** HTTP client built on `ofetch` via `src/hooks/useApiInstance.ts`. Returns a typed wrapper with `get`/`post`/`put`/`delete` methods. Auth token read from `sessionStorage`. API functions (e.g., `src/api/products/products.ts`) accept an `ApiInstance` parameter and are called from components using TanStack React Query.

**API types:** Generated from OpenAPI spec (`openapi.json`) using `openapi-typescript` into `src/api/schema.ts`. Domain types in `src/api/*/types.ts` reference `components["schemas"]` from the generated schema. Do not edit `schema.ts` directly.

**Backend:** Euricom Test API at `https://euricom-test-api-v2.herokuapp.com` (docs at `/docs`, OpenAPI at `/openapi`).

**UI components:** shadcn/ui (new-york style) in `src/components/ui/`. Added via `npx shadcn@latest add <component>`. Custom app components in `src/components/`. Icons from `lucide-react`.

**Environment:** Validated at startup with Zod in `src/env.ts`. Required vars: `VITE_API_URL`, `VITE_APP_NAME`. See `.env.example`.

**Path alias:** `@/` maps to `src/` (configured in both `tsconfig.json` and `vite.config.ts`).

**Theme:** Custom `ThemeProvider` in `src/contexts/ThemeContext.tsx` (light/dark/system), stored in `localStorage`.

## Conventions

- Menu items configured in `src/config/menu.ts`, app metadata in `src/config/app.ts`
- API modules follow the pattern: `src/api/<resource>/types.ts` (types), `src/api/<resource>/<resource>.ts` (functions), `src/api/<resource>/index.ts` (barrel export)
- Pages live in `src/pages/`, nested routes use subdirectories (e.g., `src/pages/products/Page.tsx`)
