import { describe, expect, it } from "vitest";
import { navigationItems, siteConfig } from "./site";
import { creatorProfiles, creatorRoster } from "./creators";

describe("site configuration", () => {
  it("uses a multi-creator project identity", () => {
    expect(siteConfig.name).toBe("CREATOR ARCADE");
    expect(siteConfig.description).toContain("PC creator arcade");
    expect(siteConfig.githubUrl).toMatch(/^https:\/\/github\.com\//);
  });

  it("has unique navigation destinations", () => {
    const destinations = navigationItems.map((item) => item.href);

    expect(new Set(destinations).size).toBe(destinations.length);
    expect(destinations).toContain("/play");
    expect(destinations).toContain("/support");
    expect(destinations).toContain("/hire");
  });
});

describe("creator roster", () => {
  it("contains both creator routes with accurate public handles", () => {
    expect(creatorRoster.map((creator) => creator.slug)).toEqual([
      "carterpcs",
      "kayjayohpcs",
    ]);
    expect(creatorProfiles.kayjayohpcs.name).toBe("KayJayOhPCs");
    expect(creatorProfiles.kayjayohpcs.handle).toBe("@kayjayohpcs");
  });

  it("provides a public profile link for each creator", () => {
    for (const creator of creatorRoster) {
      expect(creator.profileUrl).toMatch(/^https:\/\/www\.tiktok\.com\/@/);
    }
  });
});
