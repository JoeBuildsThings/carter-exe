import Link from "next/link";
import { siteConfig } from "@/lib/site";

const modules = [
  {
    number: "01",
    category: "PLAY / CANVAS",
    title: "Carter Dash",
    description:
      "A compact browser game built around timing, quick decisions, and PC culture. Designed to run smoothly on modest devices.",
    status: "Planned",
  },
  {
    number: "02",
    category: "RESEARCH / HARDWARE",
    title: "No Snooze Spec Check",
    description:
      "A practical compatibility tool for checking parts, power requirements, and fit before money changes hands.",
    status: "Planned",
  },
  {
    number: "03",
    category: "EDITORIAL / SOURCES",
    title: "Creator dossier",
    description:
      "A clear, source-linked guide to CarterPCs and the public work behind the channel. Claims stay attached to evidence.",
    status: "Planned",
  },
  {
    number: "04",
    category: "COMMUNITY / SUPPORT",
    title: "Workstation support",
    description:
      "A respectful, transparent request for help with a development laptop. Direct conversations only. No checkout or payment handling.",
    status: "Planned",
  },
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-rail">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Unofficial CarterPCs fan project
          </p>
          <p className="hero-serial">INDEPENDENT BUILD / 001</p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-pretitle">FOR THE LOVE OF THE BUILD.</p>
            <h1 id="hero-title">
              A FAN PROJECT.
              <br />
              <span>BUILT TO DO MORE.</span>
            </h1>

            <p className="hero-description">
              An independent, unofficial experience inspired by CarterPCs.
              We&apos;re putting together a browser game, a useful PC
              compatibility tool, and a carefully sourced creator dossier.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" href="#build">
                Explore the build <span aria-hidden="true">↘</span>
              </Link>
              <a
                className="button button-secondary"
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Inspect the source <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-footnote">
              <span>NO AFFILIATION CLAIMED</span>
              <span>BUILT IN PUBLIC</span>
            </div>
          </div>

          <div className="hero-art-wrap">
            <div className="art-label art-label-top">
              <span>FIG. 001</span>
              <span>THE WORKBENCH</span>
            </div>

            <div className="hero-art">
              <svg
                className="workbench-illustration"
                viewBox="0 0 640 520"
                role="img"
                aria-labelledby="workbench-title workbench-description"
              >
                <title id="workbench-title">CARTER.EXE workbench illustration</title>
                <desc id="workbench-description">
                  An original vector illustration of a desktop computer,
                  monitor, tower, and keyboard.
                </desc>

                <defs>
                  <pattern id="fine-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M28 0H0V28" fill="none" stroke="#485148" strokeWidth="0.7" opacity="0.45" />
                  </pattern>
                </defs>

                <rect width="640" height="520" fill="#171d18" />
                <rect width="640" height="520" fill="url(#fine-grid)" />
                <path d="M38 55H602M38 465H602" stroke="#596354" strokeWidth="1" />
                <path d="M38 55V465M602 55V465" stroke="#596354" strokeWidth="1" />

                <g fill="#e9e6d9" fontFamily="monospace" fontSize="10" letterSpacing="2">
                  <text x="54" y="39">CARTER.EXE / SYSTEM STUDY</text>
                  <text x="586" y="39" textAnchor="end">REV 001</text>
                </g>

                <g>
                  <rect x="83" y="101" width="390" height="260" rx="12" fill="#333d35" stroke="#8c9887" strokeWidth="2" />
                  <rect x="100" y="118" width="356" height="224" rx="3" fill="#080d0a" stroke="#59685a" strokeWidth="2" />
                  <rect x="113" y="131" width="330" height="198" fill="#15241a" />

                  <g stroke="#a9ba9a" strokeWidth="1" opacity="0.2">
                    <path d="M113 164H443M113 197H443M113 230H443M113 263H443M113 296H443" />
                    <path d="M146 131V329M179 131V329M212 131V329M245 131V329M278 131V329M311 131V329M344 131V329M377 131V329M410 131V329" />
                  </g>

                  <g fill="#d9ff70">
                    <rect x="134" y="151" width="8" height="8" />
                    <rect x="148" y="151" width="8" height="8" opacity="0.4" />
                    <rect x="162" y="151" width="8" height="8" opacity="0.4" />
                    <rect x="394" y="288" width="16" height="16" />
                    <rect x="414" y="268" width="16" height="36" opacity="0.55" />
                    <rect x="374" y="308" width="16" height="16" opacity="0.35" />
                  </g>

                  <g fill="#f0eee3" fontFamily="monospace" fontWeight="700">
                    <text x="139" y="211" fontSize="34" letterSpacing="-2">BUILD.</text>
                    <text x="139" y="247" fontSize="34" letterSpacing="-2">PLAY.</text>
                    <text x="139" y="283" fontSize="34" letterSpacing="-2">REPEAT.</text>
                  </g>
                  <path d="M139 300H310" stroke="#d9ff70" strokeWidth="2" />
                  <circle cx="427" cy="311" r="4" fill="#d9ff70" />
                  <circle cx="427" cy="311" r="9" fill="none" stroke="#d9ff70" opacity="0.45" />

                  <path d="M246 361V400H310V361" fill="#303a32" stroke="#7b897a" strokeWidth="2" />
                  <path d="M201 402H355L372 416H184Z" fill="#4b594c" stroke="#899585" strokeWidth="1.5" />
                </g>

                <g>
                  <rect x="496" y="153" width="89" height="264" rx="5" fill="#242d26" stroke="#8c9887" strokeWidth="2" />
                  <rect x="509" y="168" width="63" height="16" fill="#111812" stroke="#59685a" />
                  <circle cx="540" cy="205" r="19" fill="#111812" stroke="#718071" strokeWidth="2" />
                  <circle cx="540" cy="205" r="11" fill="none" stroke="#d9ff70" strokeWidth="2" opacity="0.8" />
                  <path d="M540 194V216M529 205H551" stroke="#d9ff70" strokeWidth="1.3" opacity="0.7" />
                  <rect x="516" y="242" width="50" height="4" fill="#59685a" />
                  <rect x="516" y="254" width="50" height="4" fill="#59685a" />
                  <rect x="516" y="266" width="34" height="4" fill="#59685a" />
                  <rect x="519" y="386" width="8" height="8" fill="#d9ff70" />
                  <text x="540" y="365" fill="#c4cbbb" fontFamily="monospace" fontSize="8" textAnchor="middle">C / EXE</text>
                </g>

                <g>
                  <path d="M113 429L443 429L469 459H91Z" fill="#303a32" stroke="#839080" strokeWidth="1.5" />
                  <path d="M129 437H426L441 453H115Z" fill="#151d17" />
                  {Array.from({ length: 9 }, (_, row) =>
                    Array.from({ length: 17 }, (_, column) => (
                      <rect
                        key={row * 17 + column}
                        x={137 + column * 16 + (row % 2) * 3}
                        y={439 + row * 1.4}
                        width="11"
                        height="4"
                        rx="1"
                        fill={row === 0 && column === 8 ? "#d9ff70" : "#8b9889"}
                        opacity={row === 0 && column === 8 ? 1 : 0.55}
                      />
                    )),
                  )}
                </g>

                <g fill="#d9ff70" fontFamily="monospace" fontSize="9" letterSpacing="1.5">
                  <text x="54" y="486">ORIGINAL VECTOR ART</text>
                  <text x="586" y="486" textAnchor="end">NO HEAVY ASSETS</text>
                </g>
                <g stroke="#d9ff70" strokeWidth="1">
                  <path d="M54 68V82H68M572 68V82H586M54 452V438H68M572 452V438H586" />
                </g>
              </svg>
            </div>

            <div className="art-label art-label-bottom">
              <span>DESIGNED FOR THE BROWSER</span>
              <span>01 / 04</span>
            </div>
          </div>
        </div>

        <div className="hero-bottomline">
          <span>INDEPENDENT BY DESIGN</span>
          <span>MADE FOR DESKTOP AND MOBILE</span>
          <span>NO ENDORSEMENT IMPLIED</span>
        </div>
      </section>

      <section className="build-section section-wrap" id="build">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / The build</p>
            <h2>Four pieces.<br /><span>One clear purpose.</span></h2>
          </div>
          <p className="section-intro">
            This is the roadmap, not a list of finished features. Each part
            earns its place by being useful, properly built, and tested.
          </p>
        </div>

        <div className="module-list">
          {modules.map((module) => (
            <article className="module-row" key={module.number}>
              <span className="module-number">{module.number}</span>
              <div className="module-copy">
                <p className="module-category">{module.category}</p>
                <h3>{module.title}</h3>
                <p className="module-description">{module.description}</p>
              </div>
              <span className="module-status">{module.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section section-wrap" id="approach">
        <div className="approach-heading">
          <p className="eyebrow">02 / Why it exists</p>
          <h2>One project.<br /><span>Two real outcomes.</span></h2>
          <p className="approach-intro">
            The reason for building this is straightforward. The work should
            be worth exploring even before anyone reads the request.
          </p>
        </div>

        <div className="outcome-list">
          <article className="outcome-row">
            <span className="outcome-number">A</span>
            <div>
              <p className="outcome-label">THE OPPORTUNITY</p>
              <h3>Open a genuine conversation about a development laptop.</h3>
              <p>
                A dedicated support page will explain the need, the intended
                machine, and how someone can discuss direct help privately.
                No pressure, fake progress bars, or payment collection.
              </p>
            </div>
          </article>

          <article className="outcome-row">
            <span className="outcome-number">B</span>
            <div>
              <p className="outcome-label">THE PROOF</p>
              <h3>Show the engineering, not just the screenshots.</h3>
              <p>
                The finished product will give prospective clients something
                real to inspect: a browser game, a hardware tool, thoughtful
                content, and a documented build process.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="closing-section section-wrap">
        <div>
          <p className="eyebrow">03 / Follow the work</p>
          <h2>The next commit<br /><span>should make it better.</span></h2>
        </div>
        <a
          className="button button-dark"
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          Follow the repository <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
