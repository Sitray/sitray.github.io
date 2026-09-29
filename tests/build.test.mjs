import { readFileSync, existsSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";
import { basename, resolve } from "node:path";
import config from "../astro.config.mjs";

const html = readFileSync("dist/index.html", "utf8");

test("build contains complete semantic content without client-side JavaScript", () => {
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<main\b[^>]*id="main"[^>]*tabindex="-1"/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.match(html, /Eric Marès/);
  assert.match(html, /The Knot Worldwide/);
  assert.match(html, /Wheel Hub/);
  assert.match(html, /Escola Pia Mataró/);
  assert.doesNotMatch(html, /<script\b|<astro-island\b|client:only/);
});

test("all non-empty fragment links resolve to an element", () => {
  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  const fragments = [...html.matchAll(/href="#([^"]+)"/g)].map(
    (match) => match[1],
  );
  assert.ok(
    fragments.includes("main"),
    "skip link must target the main content",
  );
  for (const fragment of fragments)
    assert.ok(ids.has(fragment), `Missing anchor: ${fragment}`);
});

test("CV links download a real PDF and contact links preserve supplied destinations", () => {
  const downloads = [
    ...html.matchAll(/<a\b[^>]*href="([^"]+\.pdf)"[^>]*download[^>]*>/g),
  ];
  assert.equal(downloads.length, 2);
  for (const [, href] of downloads) {
    assert.equal(basename(href), "eric-mares-cv.pdf");
    const path = resolve("dist", basename(href));
    assert.ok(existsSync(path), `Missing PDF: ${href}`);
    assert.equal(readFileSync(path).subarray(0, 5).toString(), "%PDF-");
  }
  assert.match(html, /mailto:ericmares13@gmail\.com/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/eric-mares-aguilera/);
  assert.match(html, /https:\/\/github\.com\/Sitray/);
});

test("renders a direct CV-led page with the requested public name", () => {
  const withoutLinks = html.replace(/href="[^"]*"/g, "");
  assert.doesNotMatch(withoutLinks, /Aguilera/i);
  assert.match(html, /<title>Eric Marès — Software Engineer<\/title>/);
  assert.doesNotMatch(
    html,
    /Human problems|Built for people|The path so far|what’s next|hero-note|id="work"/,
  );
  assert.match(html, /personalized suggestions/);
  assert.match(
    html,
    /2 hours of development and 2 hours of Product validation/,
  );
  assert.match(html, /ABB Edge Config Tool/);
  assert.match(html, /Azure IoT Edge pipelines/);
  assert.match(html, /TypeORM and MySQL/);
  assert.equal((html.match(/class="accomplishments"/g) || []).length, 3);
});


test("publishes root-relative assets for the configured GitHub user site", () => {
  assert.equal(config.site, "https://sitray.github.io");
  assert.ok(!config.base || config.base === "/");
  assert.match(html, /href="\/eric-mares-cv\.pdf"/);
  assert.match(html, /href="\/favicon\.svg"/);
  const stylesheets = [...html.matchAll(/href="(\/_astro\/[^"?]+\.css)"/g)];
  assert.ok(stylesheets.length > 0, "built page must link a stylesheet");
  for (const [, href] of stylesheets) {
    assert.ok(existsSync(resolve("dist", href.slice(1))), `Missing stylesheet: ${href}`);
  }
  assert.equal(existsSync("dist/CNAME"), false);
});
