import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { basename, resolve } from "node:path";
import { test } from "node:test";
import config from "../astro.config.mjs";

const readPage = (path) => readFileSync(path, "utf8");
const english = readPage("dist/index.html");
const spanish = readPage("dist/es/index.html");
const pages = [
  { locale: "en", html: english },
  { locale: "es", html: spanish },
];

test("build contains complete semantic content without client-side JavaScript", () => {
  assert.match(english, /<html lang="en">/);
  assert.match(spanish, /<html lang="es">/);
  for (const { html } of pages) {
    assert.match(html, /<main\b[^>]*id="main"[^>]*tabindex="-1"/);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.match(html, /Eric Marès/);
    assert.match(html, /The Knot Worldwide/);
    assert.match(html, /Wheel Hub/);
    assert.match(html, /Escola Pia Mataró/);
    assert.doesNotMatch(html, /<script\b|<astro-island\b|client:only/);
  }
});

test("both localized pages publish complete, bidirectional language navigation", () => {
  assert.match(english, /<title>Eric Marès — Software Engineer · Full Stack &amp; Applied AI<\/title>/);
  assert.match(
    spanish,
    /<title>Eric Marès — Ingeniero de software · Full Stack e IA aplicada<\/title>/,
  );
  assert.match(
    english,
    /<a[^>]*href="\/"[^>]*hreflang="en"[^>]*aria-current="page"[^>]*>\s*EN/,
  );
  assert.match(
    english,
    /<a[^>]*href="\/es\/"[^>]*hreflang="es"[^>]*>\s*ES/,
  );
  assert.match(
    spanish,
    /<a[^>]*href="\/"[^>]*hreflang="en"[^>]*>\s*EN/,
  );
  assert.match(
    spanish,
    /<a[^>]*href="\/es\/"[^>]*hreflang="es"[^>]*aria-current="page"[^>]*>\s*ES/,
  );
  assert.match(english, /href="\/es\/" hreflang="es"/);
  assert.match(spanish, /href="\/" hreflang="en"/);
  assert.match(spanish, /Descargar CV en inglés/);
  assert.match(spanish, /Experiencia/);
  assert.match(spanish, /Actualidad/);
});

test("all non-empty fragment links resolve to an element on every locale", () => {
  for (const { locale, html } of pages) {
    const ids = new Set(
      [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
    );
    const fragments = [...html.matchAll(/href="#([^"]+)"/g)].map(
      (match) => match[1],
    );
    assert.ok(
      fragments.includes("main"),
      `${locale} skip link must target the main content`,
    );
    for (const fragment of fragments)
      assert.ok(ids.has(fragment), `${locale} is missing anchor: ${fragment}`);
  }
});

test("CV links download the supplied PDF and contact links preserve destinations", () => {
  for (const { locale, html } of pages) {
    const downloads = [
      ...html.matchAll(/<a\b[^>]*href="([^"]+\.pdf)"[^>]*download[^>]*>/g),
    ];
    assert.equal(downloads.length, 3, `${locale} has three CV download links`);
    for (const [, href] of downloads) {
      assert.equal(basename(href), "eric-mares-cv.pdf");
      const path = resolve("dist", basename(href));
      assert.ok(existsSync(path), `Missing PDF: ${href}`);
      assert.equal(readFileSync(path).subarray(0, 5).toString(), "%PDF-");
    }
    assert.match(html, /mailto:ericmares13@gmail\.com/);
    assert.match(html, /https:\/\/www\.linkedin\.com\/in\/eric-mares-aguilera/);
    assert.match(html, /https:\/\/github\.com\/Sitray/);
  }
  assert.deepEqual(
    readFileSync("dist/eric-mares-cv.pdf"),
    readFileSync("public/eric-mares-cv.pdf"),
  );
});

test("renders a direct CV-led page with the requested public name", () => {
  const withoutLinks = english.replace(/href="[^"]*"/g, "");
  assert.doesNotMatch(withoutLinks, /Aguilera/i);
  assert.doesNotMatch(
    english,
    /Human problems|Built for people|The path so far|what’s next|hero-note|id="work"/,
  );
  assert.match(english, /personalized suggestions/);
  assert.match(
    english,
    /2 hours of development and 2 hours of Product validation/,
  );
  assert.match(english, /ABB Edge Config Tool/);
  assert.match(english, /Azure IoT Edge pipelines/);
  assert.match(english, /TypeORM and MySQL/);
  assert.equal((english.match(/class="accomplishments"/g) || []).length, 3);
  assert.equal((spanish.match(/class="accomplishments"/g) || []).length, 3);
});

test("publishes root-relative assets for the configured GitHub user site", () => {
  assert.equal(config.site, "https://sitray.github.io");
  assert.ok(!config.base || config.base === "/");
  for (const { html } of pages) {
    assert.match(html, /href="\/eric-mares-cv\.pdf"/);
    assert.match(html, /href="\/favicon\.svg"/);
    const stylesheets = [...html.matchAll(/href="(\/_astro\/[^"?]+\.css)"/g)];
    assert.ok(stylesheets.length > 0, "built page must link a stylesheet");
    for (const [, href] of stylesheets) {
      assert.ok(
        existsSync(resolve("dist", href.slice(1))),
        `Missing stylesheet: ${href}`,
      );
    }
  }
  assert.equal(existsSync("dist/CNAME"), false);
});

test("canonical and hreflang alternates are absolute URLs on the configured site", () => {
  const expected = [
    { html: english, canonical: "https://sitray.github.io/", ogLocale: "en_US" },
    { html: spanish, canonical: "https://sitray.github.io/es/", ogLocale: "es_ES" },
  ];
  for (const { html, canonical, ogLocale } of expected) {
    assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"`));
    assert.match(html, new RegExp(`<meta property="og:url" content="${canonical}"`));
    assert.match(html, new RegExp(`<meta property="og:locale" content="${ogLocale}"`));
    assert.match(html, /<meta property="og:locale:alternate"/);
    assert.match(html, /<meta name="twitter:card" content="summary"/);
    assert.match(html, /hreflang="en" href="https:\/\/sitray\.github\.io\/"/);
    assert.match(html, /hreflang="es" href="https:\/\/sitray\.github\.io\/es\/"/);
    assert.match(
      html,
      /hreflang="x-default" href="https:\/\/sitray\.github\.io\/"/,
    );
  }
});

test("top-of-page links target a real anchor instead of an empty fragment", () => {
  for (const { locale, html } of pages) {
    assert.doesNotMatch(html, /href="#"/, `${locale} still has href="#"`);
    assert.match(html, /\bid="top"/, `${locale} is missing id="top"`);
    assert.ok(
      (html.match(/href="#top"/g) || []).length >= 2,
      `${locale} wordmark and footer must link to #top`,
    );
  }
});

test("publishes a static, noindexed 404 page linking both locales", () => {
  assert.ok(existsSync("dist/404.html"), "dist/404.html must exist");
  const notFound = readPage("dist/404.html");
  assert.match(notFound, /<html lang="en">/);
  assert.equal((notFound.match(/<h1\b/g) || []).length, 1);
  assert.match(notFound, /<meta name="robots" content="noindex/);
  assert.match(notFound, /href="\/"/);
  assert.match(notFound, /href="\/es\/"/);
  assert.doesNotMatch(notFound, /<script\b/);
});

test("hero shows a derived seniority line instead of a tracked-caps eyebrow", () => {
  assert.match(english, /Córdoba, Spain · 4\+ years of experience/);
  assert.match(spanish, /Córdoba, España · Más de 4 años de experiencia/);
  for (const { locale, html } of pages) {
    assert.doesNotMatch(html, /class="eyebrow"/, `${locale} still has an eyebrow`);
    assert.match(html, /<strong class="proof">/, `${locale} has no proof emphasis`);
  }
  assert.match(english, /<strong class="proof">OpenAI API<\/strong>/);
  assert.match(spanish, /<strong class="proof">API de OpenAI<\/strong>/);
});

test("contact section closes with a CV download", () => {
  for (const { locale, html } of pages) {
    const contact = html.slice(html.indexOf('id="contact"'));
    assert.match(
      contact,
      /<a\b[^>]*class="button"[^>]*href="[^"]+\.pdf"[^>]*download/,
      `${locale} contact section is missing the CV button`,
    );
  }
});
