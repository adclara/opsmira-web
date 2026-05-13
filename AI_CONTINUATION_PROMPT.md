# OpsMira AI Continuation Prompt

Use this prompt when continuing work on the OpsMira website in a future session or with another AI.

## Project Location

`C:\Users\adria\OneDrive\OpsMira Project Web`

## Read First

Before editing anything, read:

1. `SESSION_CONTEXT.md`
2. `README.md`
3. the current homepage and internal page components

## Project State Summary

- This is the OpsMira marketing website built with Next.js and Tailwind.
- The site went through a major simplification pass on 2026-05-13 to reduce cognitive load and improve conversion.
- The homepage was reduced from 13 sections to 5 sections.
- A new `/pricing` page was created with 3 pricing tiers.
- Typography was fixed (letter-spacing and line-height improved across all headings).
- The ROI Calculator was overhauled with better ranges, tooltip explanations, and less clutter.
- The navbar and brand shell use a solid navy treatment with `AI Innovations` subtitle.

## Current Positioning

`OpsMira is a done-for-you AI operations implementation service for SMBs focused on cost savings, workflow control, customer follow-up, scheduling coordination, reporting automation, and owner visibility.`

## Homepage Sections (5 total)

1. `Hero` — headline, value prop, 2 CTAs, dashboard mockup with stats
2. `ROICalculator` — interactive savings calculator with 6 sliders (each has ? tooltip), plan selector, live results
3. `ServicesSection` — core offer card + 4 service cards + integrated before/after comparison table
4. `ProcessSection` — 3-step process: Audit | Build & Deploy | Measure & Refine
5. `ContactSection` — CTA with 3 intake outputs

## Navbar

- `Services` → `/services`
- `Pricing` → `/pricing`
- `Case Studies` → `/case-studies`
- `About` → `/about`
- `Contact` → `/contact`

Do not revert the solid navy navbar. Do not add back "Savings Calculator" to the nav — the calculator lives on the homepage below the hero.

## Internal Pages

- `/services` — Service detail modules, comparison table, engagement summary, CTA
- `/pricing` — PageHero + 3-tier PackagesSection (Starter $299, Professional $599, Premium $899)
- `/case-studies` — Problem → implementation → outcome scenarios with economic logic
- `/about` — Operating philosophy, implementation principles, values (simplified — no rollout timeline or engagement points)
- `/contact` — Implementation intake form, fit section, rollout timeline sidebar

## Messaging Rules

- Do not make the site feel like a personal brand.
- Keep founder presence minimal.
- Speak directly to owners, operators, and SMB decision-makers.
- Cost savings is the primary sales lens.
- Avoid hype language and vague claims.
- Do not re-add redundant sections — the 13→5 simplification was intentional.

## Technical Constraints

- Next.js App Router with static export
- Tailwind CSS
- Do not rebuild from scratch

## Build

```powershell
npm.cmd run build
```

If `.next` readlink error on Windows/OneDrive:

```powershell
Remove-Item -LiteralPath .next -Recurse -Force
npm.cmd run build
```

## Highest-Value Remaining Work

1. Browser-based visual QA on desktop and mobile
2. Replace mailto-based contact form with a real backend or external form handler
3. Replace illustrative proof with real testimonials, logos, or case material
4. Add real screenshots, dashboards, or workflow visuals

## Success Criteria

- The site feels clear, light, and premium.
- The client understands the offer quickly without excessive reading.
- The message is strong — says less, but says the right things.
- Pricing, ROI calculator, and delivery model feel connected.
- The site converts because it reduces decision friction.
