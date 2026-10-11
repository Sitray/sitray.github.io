# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: technical and non-technical recruiters (in-house and agency) screening candidates for remote software roles. They arrive from LinkedIn, a CV, or a direct link, skim in under a minute, and decide whether to download the CV or reach out. Hiring managers and engineers may follow the same link to check depth.

## Product Purpose

Personal website for Eric Marès that gets a recruiter from first glance to a confident match and a next step. Success is a CV download or an email/LinkedIn contact from a relevant opportunity.

## Positioning

Applied AI engineer: builds AI-powered product features in production (OpenAI API, LLM-backed matching and suggestions at The Knot Worldwide / The Bump), on a solid full-stack foundation (TypeScript, React, Next.js, Node.js). The AI claim is backed by shipped work for a platform serving millions of monthly users, not side projects.

Confirmed hero title (2026-10-11): "Software Engineer · Full Stack & Applied AI" stays as written. The Applied AI emphasis is carried by evidence and supporting copy, not by renaming the title.

## Operating Context

- Recruiters compare this site against the PDF CV and LinkedIn profile; facts must match across all three.
- Fully remote work history; based in Córdoba, Spain.
- Bilingual: English at `/` (default), neutral professional Spanish at `/es/`. The CV is English only and labelled as such on the Spanish page.

## Capabilities and Constraints

- Astro static site on GitHub Pages at https://sitray.github.io; no client JavaScript (enforced by build tests).
- Content is typed data: `src/data/profile.ts` (facts) and `src/data/site-content.ts` (EN/ES copy).
- Primary actions: download `public/eric-mares-cv.pdf` (byte-identical to the supplied CV), email, LinkedIn, GitHub.
- Must print cleanly and work keyboard-only, at 320px and up.
- Self-hosted assets only (no third-party font or analytics CDN; EU/GDPR context).

## Brand Commitments

- Name: Eric Marès; wordmark "em." in use.
- Voice: plain, specific, factual; concrete accomplishments over marketing language.

## Evidence on Hand

- Employment history and accomplishments: The Knot Worldwide (Jul 2024–present), ALTEN (Nov 2022–Jun 2024, client projects for ABB Robotics and PortAventura), Wheel Hub (Feb 2022–Nov 2022, Generalitat de Catalunya hospital project).
- Education: Escola Pia Mataró (2015–2017); language proficiencies.
- CV PDF at `public/eric-mares-cv.pdf`.
- Absent and must not be fabricated: testimonials, recommendations, metrics beyond those in the CV, portfolio case studies, client logos, open-source stats, an og:image asset.

## Product Principles

1. Recruiter speed first: role, seniority signal and next action readable in the first viewport.
2. Every claim traces to the CV; no inflated or invented evidence.
3. Lead with Applied AI, prove it with shipped production work, ground it in full-stack depth.
4. Parity across languages: Spanish carries the same facts, never a reduced version.
5. Accessible and lightweight by default: static, fast, keyboard and print friendly.

## Accessibility & Inclusion

WCAG 2.2 AA target: visible focus, skip link, 44px tap targets, reduced-motion respected, correct `lang` per locale.
