# OpsMira Web

OpsMira is a Next.js + Tailwind marketing site for a delivery-first AI operations service focused on SMBs.

## Current Positioning

OpsMira should read as:

`A done-for-you AI operations implementation service for SMBs focused on cost savings, workflow control, customer follow-up, scheduling coordination, reporting automation, and owner visibility.`

This site should not feel like:

- a personal brand website
- vague consulting
- a generic AI agency
- a software-only SaaS product with no delivery model

## Current Visual Direction

- Premium navy/indigo SaaS-style sections
- Clear productized-service layout
- Minimal, operational brand language
- Minimal founder emphasis
- Stronger commercial and ROI framing than aesthetic storytelling

## Tech Stack

- Next.js App Router
- Tailwind CSS
- Static export enabled in `next.config.mjs`

## Key Routes

- `/`
- `/services`
- `/pricing`
- `/case-studies`
- `/about`
- `/contact`

## Main Navbar

Current primary navigation:

- `Services`
- `Pricing`
- `Case Studies`
- `About`
- `Contact`

Notes:

- `Pricing` links to `/pricing` — a dedicated pricing page
- The navbar is intentionally solid navy now; do not assume the earlier translucent versions are still desired

## Homepage Sections (simplified)

1. Hero
2. ROI Calculator (with tooltip explanations on each slider)
3. Services + Comparison table (combined)
4. Process (3 steps: Audit → Build & Deploy → Measure & Refine)
5. Contact CTA

## Important Files

- [SESSION_CONTEXT.md](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/SESSION_CONTEXT.md)
- [AI_CONTINUATION_PROMPT.md](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/AI_CONTINUATION_PROMPT.md)
- [lib/data.ts](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/lib/data.ts)
- [app/page.tsx](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/app/page.tsx)
- [app/pricing/page.tsx](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/app/pricing/page.tsx)
- [app/services/page.tsx](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/app/services/page.tsx)
- [app/case-studies/page.tsx](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/app/case-studies/page.tsx)
- [app/about/page.tsx](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/app/about/page.tsx)
- [app/contact/page.tsx](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/app/contact/page.tsx)

## Build

```powershell
npm.cmd run build
```

Note:

- On this Windows/OneDrive setup, `.next` sometimes causes intermittent `readlink` build errors.
- If that happens, remove `.next` and rerun the build.

```powershell
Remove-Item -LiteralPath .next -Recurse -Force
npm.cmd run build
```

## Strong Areas

- Hero and primary homepage positioning
- ROI and pricing framing
- Delivery model clarity
- Qualification and objection handling
- Contact/intake framing
- Solid navbar / brand shell
- Simple reusable brand mark and strengthened SVG favicon

## Remaining High-Value Next Steps

- Browser-based visual QA across desktop and mobile
- Test one live form submission on GoDaddy to confirm PHP mail() works
- Replace illustrative proof with real testimonials, logos, or case material (typed scaffolding is ready in `lib/data.ts`)
- Add real screenshots or workflow visuals if available

## Contact Form Behavior

- The contact form submits to `/api/contact.php` via client-side fetch.
- The PHP handler runs on GoDaddy's Apache/PHP hosting and emails submissions to `adrianclara@opsmira.ai`.
- A honeypot field (`_gotcha`) provides basic spam protection.
- No third-party service or environment variables required.

## Working Rule

Refine the current system. Do not restart the site from scratch unless explicitly told to.
