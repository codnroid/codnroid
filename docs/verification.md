# Verification — 8 September 2026

- `npm run format:check`, `npm run lint`, `npm run typecheck`, and `npm run build`: pass.
- Playwright: 4 tests pass. Viewports: 375, 390, 430, 768, 1024, 1280, 1440, 1920, and 2560 pixels.
- All target widths: no document overflow, broken images, missing anchor targets, browser console errors, or uncaught browser errors.
- Keyboard: skip link, mobile-menu focus cycle and Escape, menu project CTA, project details, FAQ expansion/collapse, and technology category controls pass.
- Axe WCAG 2/2.1/2.2 A/AA checks: zero reported violations at 390 and 1440 pixels. Automated checks are supplemented by inspection of desktop and mobile screenshots; they do not constitute formal accessibility certification.
- Reduced motion disables decorative animation and smooth scrolling.
- Dark mode follows the system preference on first visit, persists an explicit choice, initializes before paint, and passes the automated WCAG A/AA audit.
- Google Form configuration: missing/invalid URL falls back to contact; accepted Google Form URLs use a new tab and `noopener noreferrer`.
- Local metadata includes noindex; robots disallows crawling; no canonical or sitemap URLs are published without a production origin.
- Dependency install audit: zero vulnerabilities after compatible starter updates. Lockfile retained.
- Screenshot evidence: `test-results/page-{width}.png` and `test-results/hero-{width}.png` (generated, ignored by Git).

## Remaining content setup

Google Form responder URL and production origin intentionally remain empty in `lib/site.ts`, as requested. Testimonials, legal policies, Insights, and verified case-study results remain explicitly pending. No public deployment was performed.
