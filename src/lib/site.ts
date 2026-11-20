export const siteConfig = {
  name: "CREATOR ARCADE",
  description:
    "An independent PC creator arcade featuring playable challenges inspired by the creators and communities around PC culture.",
  githubUrl: "https://github.com/JoeBuildsThings/carter-exe",
  githubProfileUrl: "https://github.com/JoeBuildsThings",
  disclaimer:
    "An independent fan-made project. Not affiliated with or endorsed by any featured creator, their partners, or Lenovo.",
} as const;

export const navigationItems = [
  { label: "Creators", href: "/play" },
  { label: "The project", href: "/#project" },
  { label: "Laptop support", href: "/support" },
  { label: "Hire", href: "/hire" },
] as const;
