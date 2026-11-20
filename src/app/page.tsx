import Link from "next/link";
import { siteConfig } from "@/lib/site";

const modules = [
  {
    number: "01",
    title: "Carter Dash",
    description:
      "A small, responsive browser game built around timing, momentum, and PC culture.",
    status: "Planned",
  },
  {
    number: "02",
    title: "No Snooze Spec Check",
    description:
      "A practical compatibility guide for checking parts before money changes hands.",
    status: "Planned",
  },
  {
    number: "03",
    title: "Creator dossier",
    description:
      "A carefully sourced directory and editorial record, with claims linked to their sources.",
    status: "Planned",
  },
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Independent fan project <span className="eyebrow-divider">/</span>{" "}
            Built in public
          </p>

          <h1 id="hero-title">
            A little more
            <br />
            than a <span>fan page.</span>
          </h1>

          <p className="hero-description">
            {siteConfig.name} is a browser-based project about PC curiosity,
            creator culture, and the joy of making useful things. Built
            independently, with care and a clear purpose.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="#project">
              Explore the build <span aria-hidden="true">↘</span>
            </Link>
            <a
              className="button button-secondary"
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View source <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="hero-note">
            No affiliation or endorsement is claimed.
          </p>
        </div>

        <div className="workbench" aria-label="Abstract illustration of a PC workbench">
          <div className="workbench-topline">
            <span>WORKBENCH / 001</span>
            <span>IN PROGRESS</span>
          </div>
          <div className="monitor">
            <div className="monitor-screen">
              <div className="screen-top">
                <span>SYS / CARTER.EXE</span>
                <span className="screen-live">● LIVE BUILD</span>
              </div>
              <div className="screen-art" aria-hidden="true">
                <span className="art-cross cross-one">+</span>
                <span className="art-cross cross-two">+</span>
                <span className="art-ring" />
                <span className="art-block block-one" />
                <span className="art-block block-two" />
                <span className="art-line" />
                <span className="art-word">MAKE<br />IT<br />WORK.</span>
              </div>
              <div className="screen-bottom">
                <span>INDEPENDENT BY DESIGN</span>
                <span>BUILD 0001</span>
              </div>
            </div>
            <div className="monitor-neck" />
            <div className="monitor-foot" />
          </div>
          <div className="desk">
            <div className="desk-device">
              <span className="device-light" />
              <span className="device-label">C / EXE</span>
            </div>
            <div className="desk-keyboard" aria-hidden="true">
              {Array.from({ length: 24 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
          <div className="workbench-caption">
            <span>FIG. 01</span>
            <span>A PROJECT TAKING SHAPE</span>
          </div>
        </div>
      </section>

      <section className="project-section section-wrap" id="project">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / The project</p>
            <h2>Built to be explored.</h2>
          </div>
          <p className="section-intro">
            The experience is being assembled in focused pieces. Each one has
            a job to do, and none gets called finished before it works.
          </p>
        </div>

        <div className="module-list">
          {modules.map((module) => (
            <article className="module-row" key={module.number}>
              <span className="module-number">{module.number}</span>
              <div className="module-copy">
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
              <span className="module-status">{module.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section section-wrap" id="approach">
        <div className="approach-heading">
          <p className="eyebrow">02 / Why it exists</p>
          <h2>One build.<br /><span>Two real outcomes.</span></h2>
        </div>

        <div className="approach-grid">
          <article className="approach-card">
            <span className="card-index">A / THE ASK</span>
            <h3>A genuine support opportunity.</h3>
            <p>
              The project will include a respectful, transparent way for
              Carter or a member of the community to discuss helping with a
              development-laptop upgrade. No pressure and no payment
              processing.
            </p>
          </article>

          <article className="approach-card">
            <span className="card-index">B / THE PROOF</span>
            <h3>Work that can stand on its own.</h3>
            <p>
              The finished experience will demonstrate product thinking,
              frontend engineering, performance discipline, and the ability
              to ship useful browser-based tools.
            </p>
          </article>
        </div>
      </section>

      <section className="closing-strip section-wrap">
        <p>THE BUILD IS JUST GETTING STARTED.</p>
        <Link href="#main-content" aria-label="Back to top">
          Back to top <span aria-hidden="true">↑</span>
        </Link>
      </section>
    </main>
  );
}
