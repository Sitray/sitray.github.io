# UX polish

## Objective and authorization
Apply the redesign-existing-projects audit to the bilingual recruiter site without changing its stack, content facts, or no-client-JavaScript contract. User authorized implementation on 2026-10-11 ("sure finish it"). Work-unit commits on feat/ux-polish are authorized; push, PR and publication are not.

## Audit findings (baseline 3e3efc9)
- System Helvetica stack; no typographic character.
- Undersized text: nav 12px, footer 9-10px, eyebrow 10-11px, job dates 11px.
- No text-wrap balance/pretty; dates lack tabular figures; hardcoded #c3c6bd outside tokens.
- No :active press feedback; wordmark and back-to-top use href="#".
- Header not sticky.
- canonical/hreflang are relative; no og:url, no twitter card; no custom 404.
- Flat surface; content mounts with no entry motion.

## Constraints
- Astro static, vanilla CSS, no client JavaScript (build test asserts no <script>).
- Self-host the font through an npm @fontsource package (no third-party font CDN: GDPR, Spain).
- Respect prefers-reduced-motion and print styles. No horizontal overflow at 320/390px.
- Delivery strategy: ask-on-risk. Forecast about 250-350 authored changed lines.

## Tasks
- [x] T1 — Typography and readability: self-hosted Geist, readable minimum sizes, text-wrap, tabular-nums, token cleanup.
- [x] T2 — Interaction and navigation: sticky translucent header, press states, real top anchor instead of href="#".
- [x] T3 — Metadata and 404: absolute canonical/hreflang/og:url from Astro.site, twitter card, branded bilingual-aware 404 page.
- [x] T4 — Surface and motion: subtle grain overlay and CSS-only staggered hero entry, disabled under reduced motion.
- Route: delegated direct, one writer (2+ non-trivial files; reading prepares the write).
- Test-first: build tests for absolute canonical/hreflang, top anchor, and dist/404.html get RED before implementation. CSS-only visual changes verified in browser.
- Checks: npm test -- --run; npm run test:build; git diff --check; browser at desktop, 390px, 320px.

## Progress
- Delegated writer implemented T1-T4. RED observed before implementation: canonical not absolute, en still has href="#", dist/404.html missing. GREEN: npm test -- --run 7/7; npm run test:build 9/9 (parent spot check re-ran: 9/9); git diff --check clean.
- Browser QA: Geist loaded, header sticky, canonical https://sitray.github.io/. Found cramped 320px /es/ header (wordmark touching nav, CV label wrapping); writer fixed with a two-row mobile grid header (101px). Re-verified at 320px /es/ and 390px /: scrollWidth equals viewport, no wrapping. 404 renders correctly after entry animation.
- impeccable detect over src: 0 findings.
- Not done: og:image (needs a real 1200x630 asset); print preview and OS reduced-motion emulation not re-run.
- Committed as one work unit (feat(ui)); untracked tool dirs and .gitignore left out.
