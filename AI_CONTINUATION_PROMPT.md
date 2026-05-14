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
- The site went through a major simplification pass (13 sections to 5) followed by a design polish pass on 2026-05-13.
- The design polish tightened the entire visual system: typography scale reduced ~30-40%, border radii standardized to rounded-xl/2xl, letter-spacing on labels cut to 0.1em, section spacing reduced, shadows softened, buttons slimmed.
- The homepage is 5 focused sections. A `/pricing` page exists separately.
- The ROI Calculator has a 3-column layout: left descriptive panel with 3 dynamic savings cards, middle sliders with tooltips, right results panel with guidance footer.
- The navbar uses a compact solid navy treatment with `AI Innovations` subtitle.

## Current Positioning

`OpsMira is a done-for-you AI operations implementation service for SMBs focused on cost savings, workflow control, customer follow-up, scheduling coordination, reporting automation, and owner visibility.`

## Homepage Sections (5 total)

1. `Hero` — headline, value prop, 2 CTAs, dashboard mockup with stats
2. `ROICalculator` — 3-column layout: left (headline + 3 dynamic savings cards), middle (6 sliders with ? tooltips + plan selector), right (monthly value, 4 breakdown cards, yearly/ROI, guidance)
3. `ServicesSection` — core offer card + 4 service cards + integrated before/after comparison table
4. `ProcessSection` — 3-step process: Audit | Build & Deploy | Measure & Refine
5. `ContactSection` — CTA with 3 intake outputs

## Navbar

- `Services` → `/services`
- `Savings Calculator` → `/#savings-calculator`
- `Pricing` → `/pricing`
- `Case Studies` → `/case-studies`
- `About` → `/about`
- `Contact` → `/contact`

Do not revert the solid navy navbar. Keep "Savings Calculator" in the nav.

## Internal Pages

- `/services` — Service detail modules, comparison table, engagement summary, CTA
- `/pricing` — PageHero + 3-tier PackagesSection (Starter $299, Professional $599, Premium $899)
- `/case-studies` — Problem → implementation → outcome scenarios with economic logic
- `/about` — Operating philosophy, implementation principles, values (simplified — no rollout timeline or engagement points)
- `/contact` — Implementation intake form, fit section, rollout timeline sidebar

## Design System (Post-Polish)

- Section titles: `text-2xl sm:text-3xl lg:text-4xl` (via `.section-title` class)
- Hero h1: `text-3xl sm:text-4xl xl:text-5xl`
- Uppercase labels: `text-[0.65rem] tracking-[0.1em]`
- Body text: `text-[0.8rem]` to `text-[0.9rem]`, leading-6
- Border radii: `rounded-xl` for cards/panels, `rounded-lg` for inner elements, `rounded-2xl` for major containers
- Buttons: `rounded-xl px-5 py-2.5 text-sm font-medium`
- Section spacing: `py-10 sm:py-14 lg:py-16` (via `.section-space`)
- Luxury panels: `rounded-2xl` with dark gradient
- Shadows: `shadow-soft` (0 20px 60px rgba(15,23,47,0.08))

Do not increase font sizes, border radii, letter-spacing, or padding back to previous oversized values.

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

## Production Readiness (Completed 2026-05-13)

- Domain: `opsmira.ai` — metadataBase and all OG URLs point here
- Open Graph + Twitter Card tags on all 7 pages
- Branded OG image at `public/og-image.png` (1200x630)
- `public/robots.txt` and `public/sitemap.xml` configured
- `app/not-found.tsx` — branded 404 page
- `public/.htaccess` — security headers (CSP, HSTS, X-Frame-Options, etc.), GZIP, caching, HTTPS redirect
- Desktop visual QA completed; mobile QA still needed

## GoDaddy Deployment

1. Run `npm run build`
2. Upload contents of `out/` folder to GoDaddy `public_html` via cPanel or FTP
3. The `.htaccess` file handles security headers, compression, caching, and HTTPS redirect
4. Verify SSL is active on GoDaddy for HSTS to work

Do not change basePath — it auto-detects GitHub Actions vs production (empty basePath for GoDaddy root domain).

## Recent Changes (2026-05-14)

- The contact form now submits to a self-hosted PHP handler (`public/api/contact.php`) instead of opening a mailto link.
- The PHP script emails submissions to `adrianclara@opsmira.ai` via GoDaddy's built-in `mail()`. No third-party service needed.
- Honeypot spam protection (`_gotcha` field) added to the contact form.
- Proof-asset types (`TestimonialAsset`, `LogoAsset`, `WorkflowVisualAsset`) are scaffolded in `lib/data.ts` with empty arrays.
- Case studies page shows a blue info banner when no real proof assets are available.

## Highest-Value Remaining Work

1. Test one live form submission on GoDaddy to confirm PHP `mail()` works
2. Replace illustrative proof with real testimonials, logos, or case material (scaffolding ready)
3. Add real screenshots, dashboards, or workflow visuals (scaffolding ready)
4. Mobile responsive QA (was not testable in last session due to browser DPR)

## Success Criteria

- The site feels clear, light, and premium.
- The client understands the offer quickly without excessive reading.
- The message is strong — says less, but says the right things.
- Pricing, ROI calculator, and delivery model feel connected.
- The site converts because it reduces decision friction.
