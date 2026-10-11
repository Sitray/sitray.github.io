import { describe, expect, it } from "vitest";
import {
  assetPath,
  experience,
  profile,
  toolkit,
  yearsOfExperience,
} from "../data/profile";
import {
  formatMonth,
  siteContent,
  splitHighlights,
} from "../data/site-content";

describe("recruiter profile", () => {
  it("preserves the supplied identity and direct contact details", () => {
    expect(profile.name).toBe("Eric Marès");
    expect(profile.email).toBe("ericmares13@gmail.com");
    expect(profile.github).toBe("https://github.com/Sitray");
    expect(profile.role).not.toMatch(/senior/i);
  });

  it("presents verified employment in reverse chronological order", () => {
    expect(
      experience.map(({ company, start, end }) => ({ company, start, end })),
    ).toEqual([
      { company: "The Knot Worldwide", start: "2024-07", end: null },
      { company: "ALTEN", start: "2022-11", end: "2024-06" },
      { company: "Wheel Hub", start: "2022-02", end: "2022-11" },
    ]);
  });

  it("retains concrete CV accomplishments without inventing reach or savings frequency", () => {
    expect(experience[0].description).toContain(
      "platform serving millions of monthly active users",
    );
    const bullets = experience.flatMap((job) => job.accomplishments).join(" ");
    expect(bullets).toContain("personalized suggestions");
    expect(bullets).toContain(
      "2 hours of development and 2 hours of Product validation",
    );
    expect(bullets).toContain("ABB Edge Config Tool");
    expect(bullets).toContain("PortAventura");
    expect(bullets).not.toMatch(/millions|per week|per month|per task|\d+%/);
    expect(experience.map((job) => job.accomplishments.length)).toEqual([
      5, 4, 2,
    ]);
  });

  it.each([
    ["/", "/eric-mares-cv.pdf"],
    ["/landing-page/", "/landing-page/eric-mares-cv.pdf"],
    ["/landing-page", "/landing-page/eric-mares-cv.pdf"],
  ])("resolves the CV under deployment base %s", (base, expected) => {
    expect(assetPath(base, profile.cvFilename)).toBe(expected);
  });

  it("leads with shipped Applied AI evidence in every locale", () => {
    expect(experience[0].accomplishments[0]).toContain("OpenAI API");
    for (const content of Object.values(siteContent)) {
      expect(content.jobs[0].accomplishments[0]).toMatch(/OpenAI/);
      expect(content.heroSummary).toMatch(/OpenAI/);
      expect(content.heroSummary).toMatch(/The Bump/);
    }
    expect(siteContent.es.heroSummary).not.toMatch(/con IA con/);
  });

  it("keeps each locale aligned with the shared factual career record", () => {
    for (const content of Object.values(siteContent)) {
      expect(content.jobs).toHaveLength(experience.length);
      expect(content.toolkitLabels).toHaveLength(4);
      expect(content.jobs.map((job) => job.accomplishments.length)).toEqual(
        experience.map((job) => job.accomplishments.length),
      );
    }
    expect(formatMonth(experience[0].start, "en")).toBe("Jul 2024");
    expect(formatMonth(experience[0].start, "es")).toBe("jul. de 2024");
  });

  it.each([
    ["2026-10-11", 4],
    ["2025-10-01", 3],
  ])("derives whole years of experience from the earliest CV start on %s", (date, years) => {
    expect(yearsOfExperience(experience, new Date(`${date}T12:00:00Z`))).toBe(years);
  });

  it("does not count a year before its start month is reached", () => {
    expect(yearsOfExperience(experience, new Date("2026-01-15T12:00:00Z"))).toBe(3);
    expect(yearsOfExperience(experience, new Date("2026-02-15T12:00:00Z"))).toBe(4);
  });

  it("leads the toolkit with the AI group and keeps localized labels aligned", () => {
    expect(toolkit[0].name).toBe("AI & content");
    expect(siteContent.en.toolkitLabels[0]).toBe("AI & content");
    expect(siteContent.es.toolkitLabels).toEqual([
      "IA y contenido",
      "Frontend",
      "Backend y datos",
      "Infraestructura",
    ]);
  });

  it("highlights only proof phrases that appear in each hero summary", () => {
    for (const content of Object.values(siteContent)) {
      expect(content.heroHighlights.length).toBeGreaterThan(0);
      for (const phrase of content.heroHighlights)
        expect(content.heroSummary).toContain(phrase);
    }
  });

  it("splits a summary into ordered plain and highlighted segments", () => {
    expect(splitHighlights("Use the OpenAI API (v1).", ["OpenAI API", "(v1)"])).toEqual([
      { text: "Use the ", highlight: false },
      { text: "OpenAI API", highlight: true },
      { text: " ", highlight: false },
      { text: "(v1)", highlight: true },
      { text: ".", highlight: false },
    ]);
    expect(splitHighlights("plain", [])).toEqual([{ text: "plain", highlight: false }]);
  });
});
