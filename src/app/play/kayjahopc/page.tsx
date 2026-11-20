import type { Metadata } from "next";
import { CreatorGame } from "@/components/creator-game";
import { creatorProfiles } from "@/lib/creators";

export const metadata: Metadata = {
  title: "KayJahoPC Challenge",
  description:
    "Play the KayJahoPC edition of Bench Rush, an independent PC-building browser challenge.",
};

export default function KayJahoPCPage() {
  return <CreatorGame creator={creatorProfiles.kayjahopc} />;
}
