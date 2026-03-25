# Breathe Sanctuary — Project Instructions

## Project
- Premium thermal spa & wellness destination website, Phuket Thailand
- Single-page scrolling site, serene luxury aesthetic
- Next.js 16 + Tailwind v4 + Framer Motion, deployed on Vercel

## Git Workflow
- `main` → Production (Vercel auto-deploys)
- `staging` → Preview/QA
- `feature/*` → All development work
- Start: `git start-feature <name>`
- Land: `git done "message"`
- Promote: staging → main via `--no-ff` merge
- GitHub: `vem54/breathe-sanctuary`

## Design System
- **Palette**: Warm White (#FAF8F5), Cream (#F0EBE3), Sand (#C4B59B), Teak (#8B6914), Charcoal (#1A1A1A), Stone (#6B6560), Forest (#2D3E2D)
- **Fonts**: Cormorant Garamond (display/headlines), DM Sans (body)
- **Motion**: Subtle fade-ins, soft parallax. No bounce/spring. Ease: cubic-bezier(0.25, 0.1, 0.25, 1)

## Stack
- Next.js 16 (App Router) — see AGENTS.md for version-specific guidance
- Tailwind CSS v4 (CSS-based config with `@theme` blocks, no tailwind.config.ts)
- Framer Motion 12 for animations
- Deployed on Vercel

## Important
- Tailwind v4: theme is defined in `app/globals.css` via `@theme inline {}`, NOT in a config file
- All components in `app/components/` (layout/, sections/, ui/)
- Placeholder images/video until real assets provided
