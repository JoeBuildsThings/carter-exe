export const siteConfig = {
  name: "CARTER.EXE",
  description:
    "An independent, unofficial browser-based fan project inspired by CarterPCs.",
  githubUrl: "https://github.com/JoeBuildsThings/carter-exe",
  githubProfileUrl: "https://github.com/JoeBuildsThings",
  disclaimer:
    "An independent fan project. Not affiliated with CarterPCs, Rakugo Media, or Lenovo.",
} as const;

export const navigationItems = [
  { label: "The build", href: "/#build" },
  { label: "Why it exists", href: "/#approach" },
  { label: "Support", href: "/support" },
  { label: "Hire", href: "/hire" },
] as const;
