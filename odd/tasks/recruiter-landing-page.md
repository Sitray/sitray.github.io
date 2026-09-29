# Recruiter-focused personal landing page

## Objective and authorization
Rebuild the existing personal site as an English recruiter-first landing page and CV, using the supplied CV and the visual restraint of https://fmenemo.github.io/.
User explicitly confirmed implementation on 2026-09-28. Local implementation and ODD work-unit commits were authorized initially. On 2026-09-29 the user explicitly authorized commit, push, repository rename and public GitHub Pages deployment (including CV) using the existing Sitray GitHub CLI login. User accepted the size exception and main publication after checks/review. The requested emares.github.io host requires ownership of emares; user does not own it and will add a custom domain later. Proceed with Sitray/sitray.github.io and https://sitray.github.io; no account rename or custom-domain change is authorized.

## Problem and direction
The current homepage mounts a client-only 3D space scene rather than presenting recruiter-readable HTML.
Retain Astro and provide semantic static HTML, concise career evidence, prominent CV download and contact links.
Use only supplied career facts; no invented metrics, seniority, availability, projects or feature-specific reach.
Maintain English artifact copy. Do not expose the telephone number prominently by default; the supplied CV itself includes it.

## Scope and constraints
- Introduction, selected achievements, experience, skills/education and contact.
- Copy the supplied English PDF unchanged into public assets with a stable filename.
- Responsive restrained editorial design, accessible focus/navigation, reduced-motion and print support.
- Update placeholder page metadata and starter README.
- User explicitly authorized starting from zero: replace the old app and remove obsolete 3D components, sample data, tests and dependencies. Preserve Git history, unrelated local files, original CV and workflow configuration.
- Preserve preexisting untracked .atl/ and generated .codegraph/; exclude both from delivery.
- Retain Astro as a lightweight static foundation; publish via GitHub Pages Actions. Custom-domain setup is deferred.

## Baseline
- Repository: Sitray/landing-page
- Base: main at a602ba4229ff933ad1db1fa1502b7a9ca934ef74
- CodeGraph initialized successfully for this checkout before exploration.
- Existing dependencies: Astro 6.1.9, React 19.2.5, Tailwind 4.2.4, Vitest 4.1.5.
- node_modules absent at exploration.
- TDD: disabled; explicit existing Engram observation #2, with no newer repository override found.
- Runner: npm test -- --run (Vitest/jsdom).
- RDD: enabled, deciding source global; candidate consent remains separate.
- No lint/typecheck script or deployment workflow observed.

## Delivery
- Strategy: exception-ok. User explicitly accepted the size exception on 2026-09-29; one cohesive rebuild rather than artificial slicing.
- Current pre-deployment authored site count: 2,015 (923 additions + 1,092 deletions), excluding lockfile, binary files, unrelated .gitignore and task document. Tracking document previously added 94 lines; remeasure at commit.
- One cohesive slicing pass found content/legacy retirement and visual work each above 400 lines; preserve readability and complete tests.
- Delivery: rebuild work unit T1–T3 and Pages setup T4 may share a cohesive initial-publication commit under the accepted exception. No PR requested or planned. No force push or protection bypass.
- Fresh remote preflight: gh identity Sitray has admin/push access; public repository, main matches local base, no branch rules/protections, existing workflows, Pages site or environment. No target repository collision observed.
- Last reviewed boundary: a602ba4229ff933ad1db1fa1502b7a9ca934ef74.
- The 400-line heuristic guides cohesive slices, not compression or omitted tests.

## Tasks
- [ ] T4 — Configure and publish the verified static site on GitHub Pages.
  - Route: delegated writer for config/workflow/docs/tests (multi-file preparation and writer triggers); dedicated delivery delegate owns all Git/remote mutations. Parent owns task tracking and native review orchestration.
  - Scope: site https://sitray.github.io with root assets, main-triggered Actions install/test/build/upload/deploy, least privilege, github-pages environment, no CNAME until a domain is supplied. Preserve unrelated .gitignore, .atl and .codegraph.
  - TDD: disabled, source existing observation #2; npm test -- --run (Vitest) and npm run test:build (Astro + node:test). Run ordinary checks, not invented RED evidence.
  - Acceptance: checks pass, native candidate gate resolved, repo renamed and normal-pushed without remote drift; Pages deployment succeeds; public homepage/assets/PDF verified.
  - Checks: npm ci, unit/build smoke tests, git diff --check, workflow inspection; remote deployment result and published HTTPS page/PDF verification.
  - Rollback boundary: Pages workflow/config/docs additions can be reverted together; the public app/PDF remain the T1–T3 boundary. No destructive rollback authorized.
  - Progress: local setup complete, no remote mutation yet. Astro site configured; main-only workflow uses Node 24, checkout@v7, setup-node@v7, upload-pages-artifact@v3 and deploy-pages@v4. Build is contents:read; deploy alone has pages:write/id-token:write. README documents deployment and deferred custom domain.
  - Local evidence: npm ci passed with zero audit vulnerabilities; 6 Vitest tests and 5 built-output smoke tests passed; YAML structure/permission/step-order assertions and git diff --check passed. Parent inspected actual workflow/config/test/README output. Workflow execution and public URL remain pending.
  - Commit and native review: pending. Engram mirror pending due unavailable runtime identity.
- [ ] T3 — Make the page direct and CV-led (user request, 2026-09-29).
  - Authorized scope: use Eric Marès throughout rendered site/metadata/accessibility copy; remove generic slogans and redundant selected-work summaries; expand experience with concrete CV-backed contributions. Preserve the original downloadable PDF and factual contact URLs.
  - Route: delegated preparation and writer; profile data, page template, CSS and regression tests require multi-file understanding and edits.
  - Acceptance: compact introduction, direct section headings, detailed readable accomplishment bullets, no invented metrics or savings frequency, no second surname in rendered page text/metadata. Preserve dark visual style, mobile layout, keyboard navigation and PDF links.
  - TDD: disabled under existing configuration; checks npm test -- --run, npm run test:build, git diff --check and desktop/mobile browser verification.
  - Progress: implementation and functional verification complete; commit/native-review closure remains pending under existing delivery constraints.
  - Changes: Eric Marès in rendered name, metadata, accessibility labels and README; compact factual introduction; removed selected-work duplication, generic slogans, hero-note, decorative name punctuation and oversized contact section. Experience now contains 11 CV-backed accomplishment bullets across all three employers. Original PDF and LinkedIn URL unchanged.
  - Evidence: npm test -- --run passed 6 tests; npm run test:build passed build and 4 smoke tests; git diff --check clean. Desktop and 390px/320px mobile visually verified; scrollWidth matched each mobile viewport. Browser confirmed 11 experience bullets, no Aguilera in visible page text, correct title and no broken fragment targets. Preview remains http://127.0.0.1:4321/.
  - Delegated writer owned profile/page/CSS/tests/README. Parent made one mechanical single-file polish removing remaining decorative name punctuation and reran all checks. Unrelated .gitignore modification was inspected and preserved.
  - Rollback: reverse T3 content/presentation changes only, retaining original recruiter redesign, preserved PDF and unrelated local changes. No rollback performed.
  - Engram mirror: pending; runtime hook explicitly prohibits writes until authoritative identity is restored. Do not attempt alternate session/manual saves.
  - Small follow-up (2026-09-29): user requested a site-aligned but visible download button and filename eric-mares-cv. Button now uses dark background, gold border/icon, ivory text and gold-filled hover; dimensions/focus preserved. Renamed served asset to public/eric-mares-cv.pdf and updated profile, path tests, smoke filename assertion and README. Original Downloads source unchanged.
  - Follow-up evidence: 6 unit + 4 build tests passed, build and diff checks passed, HTTP 200. Parent visually inspected button and performed real browser download saved as Downloads/eric-mares-cv.pdf; all three PDF hashes (original, public, downloaded) match. No remote upload/deployment, commits or unrelated edits. Memory writes remain prohibited/pending.
- [ ] T1 — Replace the old app with the semantic recruiter page, factual profile content, PDF download and focused regression tests; remove unused 3D code and dependencies.
  - Route: delegated writer. Evidence: index.astro plus profile data/tests are multiple non-trivial files; preparation mapping also required 4+ files.
  - Acceptance: correct chronology and facts, accessible section anchors, CV/contact links, no hydrated 3D entry.
  - Checks: npm ci; npm test -- --run; npm run build; basic rendered page/link/PDF checks.
  - Implementation: complete and functionally verified; task closure awaits commit/delivery decision.
  - Evidence: npm ci passed; 6 Vitest tests passed; npm run test:build built successfully and passed 3 node:test smoke checks; homepage/PDF HTTP 200; generated homepage has zero scripts/islands/canvases. Actual browser download hash matches original CV.
  - Rollback: restore retired app, configs and dependencies together; remove new profile/tests/PDF, preserving unrelated files. No destructive rollback was performed.
  - Commit: pending.
  - RDD assessment: pending.
- [ ] T2 — Apply the editorial visual system, verify responsive/accessibility behavior and update site documentation.
  - Route: delegated writer. Evidence: stylesheet, page refinements and relevant tests/documentation form a non-trivial multi-file change.
  - Acceptance: desktop and mobile layouts without horizontal overflow, visible keyboard focus, usable navigation, reduced-motion and print styles.
  - Checks: full tests/build; browser desktop/mobile, navigation and CV download; inspect print/reduced-motion behavior where supported.
  - Implementation: complete and functionally verified; task closure awaits commit/delivery decision.
  - Evidence: desktop 1280x720, mobile 390x844 and narrow 320x740 visually inspected. Mobile scrollWidth equals viewport width at 390 and 320. Experience/contact anchors land correctly; all non-empty fragment targets exist. Header CV links have 44px minimum height. Keyboard skip link displays focus outline and now transfers activeElement to MAIN#main. Print/reduced-motion rules inspected but native print preview and OS reduced-motion emulation not exercised.
  - Rollback: styling/presentation/docs changes only; retain T1 content.
  - Commit: pending.
  - RDD assessment: pending.

## Progress and evidence
- Confirmed repository identity and recruiter audience.
- Read the complete one-page CV. Strong evidence: The Bump AI name matching, editorial self-service, ABB industrial IoT.
- Exploration completed through delegated CodeGraph mapping; no source edits.
- Existing five tests only cover legacy sample project data.
- All functional checks above passed; git diff --check passed. No configured standalone lint/typecheck script, so neither is claimed.
- Engram mirror: observation #2467; full file and mirror readback required after this update.
- User accepted a from-scratch rebuild. Do not interpret this as deletion of Git history, .atl/, .codegraph/, workflow files or unrelated personal data.
- Local branch codex/recruiter-landing-page was created by the delivery delegate at the recorded base; main unchanged.
- Removed 9 obsolete 3D components, 4 hooks, sample data/tests and React/Three/Tailwind dependencies. Static content uses no browser JavaScript; styling is plain CSS.
- Final dependencies: Astro 7.3.5, Vitest 4.1.11; Node >=22.12. Initial audit found 12 advisories, compatible fixes left 3; official Astro7 migration checked and upgrade cleared all. Final npm audit reports 0 vulnerabilities. compressHTML:true preserves inline whitespace under Astro7.
- Browser-found skip-focus bug fixed using main tabindex=-1 and covered by built-HTML assertion; keyboard behavior verified after fix.
- Original supplied CV is unchanged. Test download /Users/ericmares/Downloads/Eric_Mares_Aguilera_CV_EN (2).pdf was verified identical and preserved.
- Preview http://127.0.0.1:4321/ uses Astro7 background preview (PID 38011 at start). Stop with npm run astro -- preview stop when no longer needed; leave running for user review.
- Native RDD initial assessment of the tracking-document-only candidate was passive after exact untracked selection. This does NOT assess new application code. No source commit exists; native committed-candidate review remains pending, with no consent or approval fabricated.

## Next step
Delegate T4 setup, rerun checks, record proof, then delegate exact work-unit commit on codex/recruiter-landing-page. Run native assessment/preflight against the recorded base and honor separate candidate consent. After review resolution, rename repository, update origin, enable Pages Actions and normal-push reviewed commit to main after a fresh remote SHA/protection check. Verify deployment and public CV before claiming published. No PR or custom-domain setup requested. Local document supersedes old observation #2467; memory writes remain prohibited without an authoritative registered runtime identity.
