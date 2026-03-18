# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo. The frontend lives in `tsr-frontend/`. All development work happens there.

```
tsr-frontend/        # Next.js 16 app (the only active frontend)
platform-backend/    # Separate backend (moved to its own repo, ignore)
```

## Commands

All commands run from `tsr-frontend/`:

```bash
pnpm dev        # Start dev server at localhost:3000
pnpm build      # Production build
pnpm lint       # ESLint
```

Package manager is **pnpm** (not npm/yarn).

## Architecture

### Route Groups

The app uses Next.js route groups to separate concerns:

- `src/app/(website)/` — Public landing pages (no auth required)
- `src/app/(protected)/dashboard/` — Authenticated dashboard area
- `src/app/(config)/` — Configuration files shared across the app (not routes)

### Component Organization

- `src/components/landing/` — Landing page section components (Navbar, HeroSection, etc.)
- `src/components/dashboard/` — Dashboard shell components (Sidebar, SidebarNav, SidebarUserCard)
- `src/components/ui/` — shadcn/ui primitives; **do not edit these manually**, use `pnpm dlx shadcn add <component>` instead

### Navigation Config

Sidebar nav items are defined in `src/app/(config)/Sidebar-config/index.ts` as `NAV_GROUPS`. Add new dashboard routes here — the `Sidebar.tsx` component reads from this config, so you never need to touch the sidebar UI to add a nav item.

### Styling

- Tailwind CSS v4 with CSS variables for theming
- Design uses a dark theme: `#171717` background, `#768BDD` accent (periwinkle/violet), `zinc-*` for text hierarchy
- `cn()` utility from `src/lib/utils.ts` for conditional class merging

### Key Notes

- The `Sidebar.tsx` has a `MOCK_USER` constant — this is a placeholder awaiting real auth integration (next-auth is the planned solution per the comment)
- `suppressHydrationWarning` is set on `<html>` in the root layout
- shadcn is configured with the **new-york** style and **lucide** icons

## Governance Rules

- Do not run git pull
- Do not run git fetch
- Do not run git push
- Do not access GitHub APIs
- Do not create, modify, or review PRs
- Do not trigger GitHub Actions