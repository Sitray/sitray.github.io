import { describe, expect, it } from "vitest";
import { assetPath, experience, profile } from "../data/profile";

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
});
