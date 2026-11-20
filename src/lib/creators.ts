export const creatorProfiles = {
  carterpcs: {
    slug: "carterpcs",
    name: "CarterPCs",
    initial: "C",
    label: "CREATOR EDITION 01",
    tagline: "A quick run through the workshop.",
    description:
      "Take on a fast component challenge inspired by PC-building culture. Make the right calls, keep your streak alive, and see what is waiting at the end.",
    variant: "orange",
  },
  kayjahopc: {
    slug: "kayjahopc",
    name: "KayJahoPC",
    initial: "K",
    label: "CREATOR EDITION 02",
    tagline: "A different route. Same workshop.",
    description:
      "Step into a second creator edition of the component challenge. The rules stay simple: think clearly, choose quickly, and protect the build.",
    variant: "lime",
  },
} as const;

export type CreatorSlug = keyof typeof creatorProfiles;
export type CreatorProfile =
  (typeof creatorProfiles)[CreatorSlug];
