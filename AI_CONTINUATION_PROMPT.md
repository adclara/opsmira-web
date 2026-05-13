# OpsMira AI Continuation Prompt

Use this prompt when continuing work on the OpsMira website in a future session or with another AI.

## Project Location

`C:\Users\adria\OneDrive\OpsMira Project Web`

## Read First

Before editing anything, read:

1. `SESSION_CONTEXT.md`
2. `README.md`
3. the current homepage and internal page components
4. the visual references in `public/reference`

## Project State Summary

- This is the OpsMira marketing website built with Next.js and Tailwind.
- The site has already been substantially repositioned away from generic consulting and founder-heavy language.
- The current identity is much closer to a delivery-first AI operations service for SMBs.
- The site now emphasizes:
  - what OpsMira implements
  - how customers receive the implementation
  - what business problems it removes
  - how cost savings and operational gains justify the investment

## Current Positioning

Use this positioning consistently:

`OpsMira is a done-for-you AI operations implementation service for SMBs focused on cost savings, workflow control, customer follow-up, scheduling coordination, reporting automation, and owner visibility.`

## Current Strong Areas

- Homepage hero and primary message
- Delivery-model clarity
- ROI and pricing alignment
- Qualification and objection handling
- Contact and intake framing
- Internal page consistency
- Brand mark / favicon direction

## Existing Homepage Sections

The homepage currently includes:

1. `Hero`
2. `TrustedBy`
3. `ServicesSection`
4. `ComparisonSection`
5. `EngagementSection`
6. `ROICalculator`
7. `CaseStudySection`
8. `ProcessSection`
9. `IndustriesSection`
10. `PackagesSection`
11. `FitSection`
12. `FAQSection`
13. `ContactSection`

These sections already cover much of the messaging structure. Future work should refine, validate, or strengthen them rather than replacing them casually.

## Existing Internal-Page Direction

- `/services`
  - Deliverables, impact, before/after logic, engagement summary, FAQ, and CTA
- `/case-studies`
  - Representative implementation scenarios with problem -> implementation -> outcome -> economic logic framing
- `/about`
  - OpsMira operating philosophy, rollout logic, implementation standards, and minimal founder background
- `/contact`
  - Implementation intake page with qualification, rollout expectations, and richer intake prompts

## Messaging Rules

- Do not make the site feel like a personal brand.
- Keep founder presence minimal and supporting only.
- Do not reintroduce generic consulting language.
- Speak directly to owners, operators, and SMB decision-makers.
- Keep cost savings as the primary sales lens.
- Keep speed, visibility, coordination, and reporting reduction as supporting benefits.
- Avoid hype language and vague claims.

## Core Themes To Preserve

- administrative labor saved
- owner or manager time recovered
- faster customer response
- missed opportunity recovery
- reduced reporting/admin burden
- stronger scheduling coordination
- better operational visibility
- done-for-you setup
- workflow mapping
- system configuration
- launch support
- optimization after deployment

## Technical Constraints

- Preserve the current Next.js app structure.
- Keep static export compatibility.
- Maintain mobile and desktop quality.
- Do not rebuild from scratch unless explicitly requested.

## Build Verification

Use:

```powershell
npm.cmd run build
```

Important Windows note:

- On this OneDrive/Windows environment, `.next` sometimes causes intermittent `readlink` build failures.
- If build fails with a `.next` `readlink` error, remove `.next` and rerun:

```powershell
Remove-Item -LiteralPath .next -Recurse -Force
npm.cmd run build
```

## Highest-Value Remaining Work

The next session should prioritize one or more of:

1. Browser-based visual QA on desktop and mobile
2. Replacing the current mailto-based contact submission with a real backend or external form handler if a silent in-page submission flow is desired
3. Replacing illustrative proof with real testimonials, proof points, or customer material
4. Adding stronger real visual proof such as screenshots, dashboards, or workflow examples

## Success Criteria

- The site feels like one unified AI operations implementation website.
- The service model is obvious.
- Pricing, ROI, and delivery feel connected.
- Qualification and fit are clear.
- Contact feels like the start of a real implementation process.
- The site remains buildable and ready for further refinement.
