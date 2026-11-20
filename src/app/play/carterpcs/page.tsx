import type { Metadata } from "next";
import { CreatorGame } from "@/components/creator-game";
import { creatorProfiles } from "@/lib/creators";

export const metadata: Metadata = {
  title: "CarterPCs Challenge",
  description:
    "Play the CarterPCs edition of Bench Rush, an independent PC-building browser challenge.",
};

export default function CarterPCsPage() {
  return <CreatorGame creator={creatorProfiles.carterpcs} />;
}
