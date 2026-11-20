import Link from "next/link";
import { creatorRoster } from "@/lib/creators";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main id="main-content" className="arena-home">
      <section className="arena-hero" aria-labelledby="arena-title">
        <div className="arena-rail">
          <p>INDEPENDENT PC CREATOR ARCADE</p>
          <span>ISSUE 001 / OPEN PLAY</span>
        </div>

        <div className="arena-hero-grid">
          <div className="arena-hero-copy">
            <p className="arena-kicker">PICK A CREATOR. TAKE THE BENCH.</p>
            <h1 id="arena-title">
              PC CULTURE
              <br />
              GOES <span>PLAYABLE.</span>
            </h1>
            <p className="arena-lede">
              Creator-inspired challenges built for people who love PCs.
              Choose a route, make the calls, and see whether your build
              instincts hold up.
            </p>
            <div className="arena-actions">
              <Link className="button button-primary" href="/play">
                Choose your creator <span aria-hidden="true">↗</span>
              </Link>
              <Link className="arena-text-link" href="/support">
                Why the laptop request exists <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <p className="arena-note">
              INDEPENDENT FAN PROJECT. NO CREATOR PARTNERSHIP OR ENDORSEMENT
              IS IMPLIED.
            </p>
          </div>

          <aside className="arena-scoreboard" aria-label="Arcade status">
            <div className="arena-scoreboard-head">
              <span>THE BENCH / LIVE BOARD</span>
              <span>001</span>
            </div>
            {creatorRoster.map((creator, index) => (
              <Link
                className={"arena-score-row arena-score-" + creator.variant}
                href={"/play/" + creator.slug}
                key={creator.slug}
              >
                <span className="arena-score-index">0{index + 1}</span>
                <span className="arena-score-name">
                  <small>{creator.category}</small>
                  <strong>{creator.name}</strong>
                </span>
                <span className="arena-score-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
            <div className="arena-scoreboard-stats">
              <div>
                <strong>06</strong>
                <span>ROUNDS</span>
              </div>
              <div>
                <strong>12s</strong>
                <span>PER PICK</span>
              </div>
              <div>
                <strong>03</strong>
                <span>STRIKES</span>
              </div>
            </div>
            <p className="arena-scoreboard-foot">
              TWO CREATOR ROUTES ARE OPEN. MORE CAN JOIN THE LINEUP.
            </p>
          </aside>
        </div>

        <div className="arena-hero-bottom">
          <span>NO DOWNLOAD REQUIRED</span>
          <span>BUILT FOR TOUCH + KEYBOARD</span>
          <span>MADE INDEPENDENTLY</span>
        </div>
      </section>

      <section className="arena-roster" aria-labelledby="roster-title">
        <div className="arena-section-head">
          <div>
            <p className="eyebrow">01 / The current lineup</p>
            <h2 id="roster-title">
              Choose your
              <br />
              <span>creator route.</span>
            </h2>
          </div>
          <p>
            Each creator gets a separate edition of the same challenge.
            The lineup is data-driven, so new creator routes can be added
            without rebuilding the game engine.
          </p>
        </div>

        <div className="arena-roster-grid">
          {creatorRoster.map((creator, index) => (
            <article
              className={"arena-creator-card arena-creator-" + creator.variant}
              key={creator.slug}
            >
              <div className="arena-card-top">
                <span>{creator.label}</span>
                <span>0{index + 1} / 0{creatorRoster.length}</span>
              </div>
              <div className="arena-card-monogram" aria-hidden="true">
                {creator.initial}
              </div>
              <div className="arena-card-copy">
                <p>{creator.category}</p>
                <h3>{creator.name}</h3>
                <span>{creator.description}</span>
              </div>
              <div className="arena-card-actions">
                <Link href={"/play/" + creator.slug}>
                  Play this edition <span aria-hidden="true">↗</span>
                </Link>
                <a href={creator.profileUrl} target="_blank" rel="noreferrer">
                  {creator.handle} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="arena-project" id="project" aria-labelledby="project-title">
        <div className="arena-project-heading">
          <p className="eyebrow">02 / Why this exists</p>
          <h2 id="project-title">
            A good project
            <br />
            <span>should do two jobs.</span>
          </h2>
        </div>
        <div className="arena-project-grid">
          <article>
            <span>01 / THE EXPERIENCE</span>
            <h3>Give PC communities something to play.</h3>
            <p>
              The challenge comes first. Six timed hardware decisions,
              instant feedback, a score, and a result that makes sense
              whether you win or lose.
            </p>
            <Link href="/play">
              Enter the arcade <span aria-hidden="true">↗</span>
            </Link>
          </article>
          <article>
            <span>02 / THE REAL-WORLD GOAL</span>
            <h3>Make a practical laptop request without pressure.</h3>
            <p>
              The letter explains the development-laptop need, the target
              specifications, and how someone could help source a suitable
              refurbished machine. There is no payment form.
            </p>
            <Link href="/support">
              Read the laptop details <span aria-hidden="true">↗</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="arena-build-strip">
        <div>
          <p className="eyebrow">03 / The engineering</p>
          <h2>Built to be inspected.</h2>
          <p>
            {siteConfig.description} The source, test coverage, and build
            history are public. The compatibility checker and creator
            research pages remain planned until they are ready.
          </p>
        </div>
        <a
          className="button button-dark"
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          Inspect the source <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
