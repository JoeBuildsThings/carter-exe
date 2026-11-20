export const creatorProfiles = {
  carterpcs: {
    slug: "carterpcs",
    name: "CarterPCs",
    handle: "@carterpcs",
    platform: "TikTok",
    profileUrl: "https://www.tiktok.com/@carterpcs",
    category: "PC + TECH",
    initial: "C",
    label: "CREATOR EDITION 01",
    tagline: "Six calls. One build. Keep it running.",
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
    category: "PC BUILDS + TECH",
    initial: "K",
    label: "CREATOR EDITION 02",
    tagline: "Unusual builds. Serious hardware decisions.",
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
