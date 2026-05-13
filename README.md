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
- `/case-studies`
- `/about`
- `/contact`

## Main Navbar

Current primary navigation:

- `Services`
- `Savings Calculator`
- `Case Studies`
- `About`
- `Contact`

Notes:

- `Savings Calculator` links to the homepage anchor `/#savings-calculator`
- The navbar is intentionally solid navy now; do not assume the earlier translucent versions are still desired

## Important Files

- [SESSION_CONTEXT.md](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/SESSION_CONTEXT.md)
- [AI_CONTINUATION_PROMPT.md](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/AI_CONTINUATION_PROMPT.md)
- [lib/data.ts](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/lib/data.ts)
- [app/page.tsx](C:/Users/adria/OneDrive/OpsMira%20Project%20Web/app/page.tsx)
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
- Replace the current mailto-based contact submission with a live backend or external form handler if desired
- Replace illustrative proof with real testimonials, logos, or case material
- Add real screenshots or workflow visuals if available

## Contact Form Behavior

- The current contact form works on static hosting by opening a prefilled email draft to `adrianarmando9@gmail.com`.
- This preserves static export compatibility on GitHub Pages and gives visitors a working intake path without a hosted backend.
- If you want silent in-page submission instead of email-draft submission, the next step is integrating an external form service or moving off pure static hosting.

## Working Rule

Refine the current system. Do not restart the site from scratch unless explicitly told to.
