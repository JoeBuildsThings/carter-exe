import type { Metadata } from "next";
import Link from "next/link";
import { creatorProfiles } from "@/lib/creators";

export const metadata: Metadata = {
  title: "Choose a Creator",
  description:
    "Choose a CarterPCs or KayJahoPC creator edition and play the Bench Rush browser challenge.",
};

const creators = [
  creatorProfiles.carterpcs,
  creatorProfiles.kayjahopc,
] as const;

export default function PlayPage() {
  return (
    <main id="main-content" className="play-page">
      <div className="play-topline">
        <p className="play-eyebrow">ARCADE ACCESS / CARTER.EXE</p>
        <span>SELECT YOUR CREATOR / 02 EDITIONS</span>
      </div>

      <section className="play-intro" aria-labelledby="play-title">
        <p className="play-kicker">THE WORKSHOP IS OPEN</p>
        <h1 id="play-title">
          Pick your
          <br />
          <span>player.</span>
        </h1>
        <p>
          Two creator editions. One component challenge. Choose the route
          you want to play, then see how well you handle the workshop.
        </p>
      </section>

      <section className="creator-selection" aria-label="Choose a creator">
        {creators.map((creator, index) => (
          <article
            className={"creator-card creator-card-" + creator.variant}
            key={creator.slug}
          >
            <div className="creator-card-topline">
              <span>{creator.label}</span>
              <span>0{index + 1} / 02</span>
            </div>
            <div className="creator-card-mark" aria-hidden="true">
              {creator.initial}
            </div>
            <div className="creator-card-copy">
              <p className="creator-card-kicker">CREATOR ROUTE</p>
              <h2>{creator.name}</h2>
              <p>{creator.description}</p>
            </div>
            <Link
              className="creator-card-link"
              href={"/play/" + creator.slug}
              aria-label={"Play the " + creator.name + " edition"}
            >
              Enter this edition <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </section>

      <div className="play-footnote">
        <span>BUILT FOR KEYBOARD AND TOUCH</span>
        <span>NO DOWNLOAD REQUIRED</span>
        <span>INDEPENDENT FAN PROJECT</span>
      </div>
    </main>
  );
}
