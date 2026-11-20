export const creatorProfiles = {
  carterpcs: {
    slug: "carterpcs",
    name: "CarterPCs",
    handle: "@carterpcs",
    platform: "TikTok",
    profileUrl: "https://www.tiktok.com/@carterpcs",
    contextUrl: "https://www.microcenter.com/site/mc-news/article/happening-at-mc-charlotte.aspx?storeid=085",
    category: "PC + TECH",
    initial: "C",
    label: "CREATOR EDITION 01",
    tagline: "Fast hardware calls. Twelve seconds to get them right.",
    modeTitle: "Tech Quickfire",
    modeDescription: "Six fast decisions across the parts and standards behind a reliable PC.",
    description:
      "A PC and tech creator whose content moves through hardware, builds, and everyday technology. Take the CarterPCs edition of Bench Rush.",
    variant: "orange",
  },
  kayjayohpcs: {
    slug: "kayjayohpcs",
    name: "KayJayOhPCs",
    handle: "@kayjayohpcs",
    platform: "TikTok",
    profileUrl: "https://www.tiktok.com/@kayjayohpcs",
    contextUrl: "https://www.microcenter.com/site/mc-news/article/miami-influencer-schedule.aspx?osfs=false&showfullsite=false&storeid=029",
    category: "PC BUILDS + TECH",
    initial: "K",
    label: "CREATOR EDITION 02",
    tagline: "Build around the impossible. Keep the hardware safe.",
    modeTitle: "Odd Build Lab",
    modeDescription: "Solve the fit, airflow, power and safety problems behind an unconventional PC build.",
    description:
      "A tech and PC creator known for inventive builds, including a working PC inside a car tire. Take the KayJayOhPCs edition of Bench Rush.",
    variant: "lime",
  },
} as const;

export type CreatorSlug = keyof typeof creatorProfiles;
export type CreatorProfile = (typeof creatorProfiles)[CreatorSlug];

export const creatorRoster: readonly CreatorProfile[] = [
  creatorProfiles.carterpcs,
  creatorProfiles.kayjayohpcs,
];
