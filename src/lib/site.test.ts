import { describe, expect, it } from "vitest";
import { navigationItems, siteConfig } from "./site";

describe("site configuration", () => {
  it("has a clear project identity and repository destination", () => {
    expect(siteConfig.name).toBe("CARTER.EXE");
    expect(siteConfig.githubUrl).toMatch(/^https:\/\/github\.com\//);
  });

  it("has unique navigation destinations", () => {
    const destinations = navigationItems.map((item) => item.href);

    expect(new Set(destinations).size).toBe(destinations.length);
    expect(destinations).toContain("/support");
    expect(destinations).toContain("/hire");
  });
});
