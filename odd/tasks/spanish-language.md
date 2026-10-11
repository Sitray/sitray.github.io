# Spanish language option

## Objective and authorization
Add a visible EN / ES language option and a complete Spanish translation to the recruiter website. English remains the root default; Spanish uses /es/. User requested implementation on 2026-10-06. Local implementation and feature-branch work-unit commits are authorized under ODD; this request does not grant a new push, publication, or PR operation.

## Scope and design
- Reuse one static Astro page template for both locales, with typed locale content.
- Prefer a static rest route generating only English root and /es/ to avoid duplicate markup; verify current Astro documentation before applying this routing option.
- Translate visible copy, metadata, dates, role descriptions, accessibility labels, and navigation into neutral professional Spanish. Preserve career facts, names, tools and contact destinations.
- Use ordinary links with an accessible active-language indication; no browser language redirect, persistence, JavaScript, new dependency or flag icons.
- Preserve the original English CV bytes and /eric-mares-cv.pdf; label the document as English on the Spanish page.
- Preserve unrelated .gitignore changes, .atl, .codegraph, Git history and the already published English page.

## Baseline and delivery
- Local HEAD: 6f7f6ecfe1a657d090dd494bf9e2b4c2b6d4883a; branch codex/recruiter-landing-page.
- CodeGraph-first exploration completed by delegated explorer; parent spot-checked page markup.
- RDD on, deciding source global; no new candidate consent yet.
- Strategy: ask-on-risk. Initial forecast approximately 300–450 authored changed lines with rename detection; remeasure before commit. If above 400, resolve cohesive delivery/size exception before commit, never compress code or omit tests.
- The original rebuild size exception is not assumed to authorize an unrelated new exception.
- Runtime identity unavailable: Engram mirror and summary writes prohibited; local document is the recovery record.

## Tasks
- [x] T1 — Deliver complete bilingual static pages with an accessible language switch.
  - Route: delegated direct writer; translation, routing, styling, tests and docs require multiple non-trivial files and preparation reading.
  - Allowed surfaces passed explicitly to writer; parent owns this task document.
  - Test-first: applicable deterministic RED for absent /es/ output and language navigation, then GREEN and refactor. Current user policy supersedes historical TDD-off notes. Runners: npm test -- --run and npm run test:build.
  - Acceptance: both static pages render complete factual content, correct html lang and localized metadata; EN/ES switch works both ways and identifies active language; shared PDF/assets resolve; no horizontal overflow at 320/390px; English output preserved apart from language navigation/metadata.
  - Verification: unit and generated-output tests, git diff --check; desktop/mobile language navigation and keyboard focus; PDF hash preservation. Parent spot check one reported command.
  - Rollback: remove Spanish locale/navigation and restore root-only routing together; preserve original profile/PDF and unrelated files.
  - Progress: implementation and functional/browser verification complete; commit and native review remain pending. No publication performed.
  - Commit, review and browser evidence: pending.

## Next step
Delegate test-first implementation, inspect concise returned proof, perform browser QA and parent spot check. Normalize before native review freeze. Honor native consent and ordinary delivery authorization; do not publish this change automatically.

## Implementation and verification evidence
- Delegated writer implemented one static rest route, typed EN/ES content, localized dates/metadata and accessible ordinary language links. Site content is complete in both languages; no client JavaScript or dependency added.
- Observed test-first RED: npm run test:build built the original page then failed with ENOENT dist/es/index.html. GREEN after implementation and copy correction: npm test -- --run 7/7; npm run test:build 6/6; both static routes generated. Writer and parent git diff --check passed.
- Parent found and corrected via writer one translation relationship error: ABB Robotics and PortAventura are the client projects, not clients of ABB. Revised wording preserves the original fact.
- Desktop Spanish layout inspected; actual clicks and keyboard Enter navigated ES -> EN -> ES. At 320px and 390px, document scrollWidth equals viewport width. Active Spanish link exposes aria-current=page, document lang=es. Spanish skip-link activation focuses MAIN#main. Viewport override reset.
- Actual Spanish CV link downloaded eric-mares-cv (3).pdf (local collision suffix). Original PDF remained unchanged; served and downloaded SHA-256 both match 44bf642c0e11db7bcc57369c8237d9edea31a5045ec35c2cd0ac089ee6745f38.
- Local preview: http://127.0.0.1:4321/es/. Screenshot saved outside repository in the task visualization directory. Public site unchanged; no remote call or push this request.
- Native print preview and reduced-motion OS emulation not repeated; no motion behavior was introduced. Native review not yet started; do not claim reviewed.
- Actual size estimate approximately640 authored changed lines before task-document additions (rename-aware route111 additions/93 deletions; typed content233 lines). One honest slicing pass found atomic route/content/style core already about470 lines; separating tests/docs would produce incoherent incomplete behavior. Recommend one explicit size exception; no code compression or artificial splitting performed.
- 2026-10-11: user accepted the size exception ("sure finish it"). Re-verified before commit: npm test -- --run 7/7, npm run test:build 6/6, git diff --check clean. T1 complete; committed as one work unit (feat(i18n)). Unrelated .gitignore change left unstaged.
- Superseded decision: accept a size exception for this bilingual feature before any work-unit commit. The older rebuild exception does not automatically cover this request. Memory mirror remains prohibited/pending due unavailable runtime identity.
