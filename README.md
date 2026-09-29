# Codnroid Spectrum Light

Local, light-first digital product studio homepage. Built on the requested Sites starter using React, TypeScript, Vinext/Vite, Tailwind CSS, and a retained shadcn button primitive.

## Run

```sh
npm ci
npm run dev
```

Use the local URL printed by the server (normally http://localhost:3000). No hosting account or deployment is required.

## Configure

Edit `lib/site.ts`:

- `googleFormUrl`: published responder URL (`https://forms.gle/...` or `https://docs.google.com/forms/...`). Empty/invalid values lead to the explicit contact unavailable state. A configured form opens in a new tab; the site does not collect or store submissions.
- `productionOrigin`: keep empty for local previews. Before a real production release, set the verified HTTPS origin, e.g. `https://your-real-domain.com`. This enables indexing, canonical metadata, a homepage-only sitemap, and factual Organization structured data. No future placeholder pages are indexed.

Service, project, technology, process, and FAQ content lives in `lib/content.ts`. Future page paths are reserved in `lib/routes.ts`. Asset provenance and publication gaps are documented in `docs/content-sources.md`.

## Quality checks

```sh
npm run format
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run test:browser
```

Browser checks expect the local server to be running. They use installed Google Chrome through Playwright; no browser download is needed on this machine. They write screenshots and a summary to ignored `test-results/`.

## Implementation decisions

- Visual direction: 75% light editorial composition, 25% restrained spectrum atmosphere. Original official logo artwork retained.
- Focused components and typed content; no classes or generic service layers without a concrete need.
- Native details for FAQs and project previews. Motion uses CSS and pointer input only, with reduced-motion support.
- No invented testimonials, client metrics, legal copy, contact addresses, or integrations.
- Local delivery only. `task.md` records sequential ticket completion and verification.
