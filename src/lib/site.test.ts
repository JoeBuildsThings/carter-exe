import { describe, expect, it } from "vitest";
import { navigationItems, siteConfig } from "./site";

describe("site configuration", () => {
  it("has a clear project identity and repository destination", () => {
    expect(siteConfig.name).toBe("CARTER.EXE");
    expect(siteConfig.githubUrl).toMatch(/^https:\/\/github\.com\//);
  });

  it("uses unique in-page navigation targets", () => {
    const targets = navigationItems.map((item) => item.href);

    expect(new Set(targets).size).toBe(targets.length);
    expect(targets.every((target) => target.startsWith("#"))).toBe(true);
  });
});
