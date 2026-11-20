import type { Metadata } from "next";
import Link from "next/link";
import { creatorRoster } from "@/lib/creators";

export const metadata: Metadata = {
  title: "Choose a Creator",
  description:
    "Choose a creator-specific PC and tech challenge with original question banks inspired by the public work of CarterPCs and KayJayOhPCs.",
};

export default function PlayPage() {
  return (
    <main id="main-content" className="play-page">
      <div className="play-topline">
        <p className="play-eyebrow">CREATOR ARCADE / ROUTE SELECT</p>
        <span>
          SELECT YOUR CREATOR / {String(creatorRoster.length).padStart(2, "0")} LIVE ROUTES
        </span>
      </div>

      <section className="play-intro" aria-labelledby="play-title">
        <p className="play-kicker">THE BENCH IS OPEN</p>
        <h1 id="play-title">
          Pick your
          <br />
          <span>player.</span>
        </h1>
        <p>
          Two creators, two different challenge banks. Take Carter's
          everyday PC and tech quickfire, or step into KayJay's custom-build
          lab where fit, airflow and power decisions matter.
        </p>
      </section>

      <section className="creator-selection" aria-label="Choose a creator">
        {creatorRoster.map((creator, index) => (
          <article
            className={"creator-card creator-card-" + creator.variant}
            key={creator.slug}
          >
            <div className="creator-card-topline">
              <span>{creator.label}</span>
              <span>
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(creatorRoster.length).padStart(2, "0")}
              </span>
            </div>
            <div className="creator-card-mark" aria-hidden="true">
              {creator.initial}
            </div>
            <div className="creator-card-copy">
              <p className="creator-card-kicker">{creator.category} / {creator.modeTitle}</p>
              <h2>{creator.name}</h2>
              <p>{creator.description}</p>
              <p className="creator-mode-summary">{creator.modeDescription}</p>
            </div>
            <div className="creator-route-actions">
              <Link
                className="creator-card-link"
                href={"/play/" + creator.slug}
                aria-label={"Play the " + creator.name + " edition"}
              >
                Enter this edition <span aria-hidden="true">↗</span>
              </Link>
              <a
                className="creator-profile-link"
                href={creator.profileUrl}
                target="_blank"
                rel="noreferrer"
              >
                Public profile: {creator.handle} <span aria-hidden="true">↗</span>
              </a>
              <a
                className="creator-profile-link"
                href={creator.contextUrl}
                target="_blank"
                rel="noreferrer"
              >
                Creator background / Micro Center <span aria-hidden="true">↗</span>
              </a>
            </div>
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
