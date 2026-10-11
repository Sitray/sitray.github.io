# Eric Marès: personal website

A recruiter-focused bilingual website with detailed professional experience, technical skills, education, and a downloadable English CV. English is the default at `/`; Spanish is available at `/es/`. The hero shows a seniority line derived from the earliest CV start date and highlights the Applied AI proof phrases inside the summary. Content constraints (positioning, evidence on hand, what must not be invented) live in [PRODUCT.md](PRODUCT.md).

## Develop

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npm test -- --run
npm run test:build
npm run preview
```

`npm test` runs the vitest unit tests over the typed content: identity and contact details, employment order, CV accomplishments without invented metrics, locale parity, derived years of experience, hero highlight phrases, the em dash ban, and the deployment-base asset helper.

`test:build` builds the site and checks the generated HTML: localized pages without client JavaScript, titles and metadata, bidirectional language navigation with self-named links, fragment anchors, the byte-identical downloadable PDF, contact links, canonical and hreflang URLs, the derived seniority line and proof highlighting, the em dash ban, and the 404 page (noindex, skip link, CV download, email and footer). Browser checks are still needed for responsive layout, keyboard navigation, and printing. There is no separate lint or type-check command configured.

## Content and structure

- `src/data/profile.ts`: factual profile, employment accomplishments, and tools.
- `src/data/site-content.ts`: typed English and Spanish content that reuses shared factual profile records.
- `src/pages/[...locale].astro`: semantic static template for `/` and `/es/`, metadata, language navigation, and contact links.
- `src/pages/404.astro`: static, noindexed not-found page with links to both locales, the CV download, email and footer.
- `src/styles/global.css`: responsive editorial design, focus states, reduced motion, and print styles.
- `public/eric-mares-cv.pdf`: supplied CV, copied without modification.
- `src/__tests__/profile.test.ts`: content, locale parity, and deployment-base regression tests.
- `tests/build.test.mjs`: generated-site smoke tests over `dist/`.
- `PRODUCT.md`: product brief and content constraints every change must respect.

Astro 7 renders the complete page as static HTML. No React, WebGL, client-side JavaScript, third-party font CDN, analytics, or contact service is needed. The Geist variable font is self-hosted from `@fontsource-variable/geist` and bundled into `dist/_astro/`. Contact links open the visitor’s email application or the relevant public profile.

## Deployment

The publication target is [sitray.github.io](https://sitray.github.io), served from the `Sitray/sitray.github.io` repository.

1. In the repository’s **Settings → Pages**, select **GitHub Actions** as the source.
2. Push a verified change to `main`. The **Deploy GitHub Pages** workflow installs dependencies with `npm ci`, runs unit tests, builds the site, checks the generated output, and publishes `dist/`.
3. Confirm that the workflow’s deployment job succeeds, then check the public page and CV download. A local build alone does not confirm publication.

The workflow uses Node.js 24 and the `github-pages` environment. Only the deployment job receives Pages and OIDC write permissions; the build has read-only repository access. It can also be run manually from `main`.

Astro’s `site` is `https://sitray.github.io`. Assets use the root path because this is a user site, not a project subdirectory. No custom domain or `CNAME` is configured.

Setup references: [Astro’s GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) and [GitHub’s Pages deployment action](https://github.com/actions/deploy-pages).

The CV is a public download and includes the contact information in the original document. Replace it with a redacted version before publishing if those details should not be public.
