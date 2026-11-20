import type { Metadata } from "next";
import { CreatorGame } from "@/components/creator-game";
import { creatorProfiles } from "@/lib/creators";

export const metadata: Metadata = {
  title: "KayJayOhPCs Challenge",
  description:
    "Play the KayJayOhPCs edition of Bench Rush, an independent PC-building browser challenge.",
};

export default function LegacyKayJayOhPCsPage() {
  return <CreatorGame creator={creatorProfiles.kayjayohpcs} />;
}
