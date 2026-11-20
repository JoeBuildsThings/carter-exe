import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workstation Support",
  description:
    "A transparent request for help acquiring a reliable development laptop.",
};

const targetSpecs = [
  ["Reference model", "Lenovo ThinkPad T14 Gen 2 AMD"],
  ["Reference machine type", "20XK00BGUS"],
  ["Processor", "AMD Ryzen 5 PRO 5650U · 6 cores / 12 threads"],
  ["Memory", "16GB soldered DDR4-3200"],
  ["Storage", "512GB M.2 2280 PCIe NVMe SSD"],
  ["Display", "14-inch FHD IPS"],
] as const;

const checks = [
  "Confirm the exact machine type or regional model number. T14 Gen 2 configurations vary.",
  "Check that the BIOS is accessible and no supervisor password or organization lock prevents use.",
  "Inspect the screen, hinges, keyboard, trackpad, ports, webcam, speakers, and charger.",
  "Request battery health information and an SSD health report where possible.",
  "Confirm that the installed memory and storage match the agreed configuration.",
  "Agree on a reasonable inspection or return window before completing a purchase.",
] as const;

export default function SupportPage() {
  return (
    <main id="main-content" className="detail-page">
      <section className="detail-hero section-wrap">
        <div className="detail-kicker">
          <span className="eyebrow">01 / Workstation support</span>
          <span className="detail-index">A DIRECT, TRANSPARENT REQUEST</span>
        </div>

        <div className="detail-hero-grid">
          <div>
            <p className="detail-pretitle">HELP EQUIP THE NEXT BUILD.</p>
            <h1 className="detail-title">
              A better machine
              <br />
              <span>for the work ahead.</span>
            </h1>
          </div>
          <div className="detail-summary">
            <p>
              I&apos;m looking for help acquiring a dependable development
              laptop so I can keep designing, building, testing, and shipping
              software.
            </p>
            <p>
              The request is direct: help source this machine or a comparable
              one. There is no payment form, checkout, donation counter, or
              public fundraising tally. A supporter can arrange a laptop
              directly or contact me before discussing any contribution.
            </p>
          </div>
        </div>

        <div className="support-status-line">
          <span><i aria-hidden="true" /> REQUEST DETAILS PUBLISHED</span>
          <span>NO PAYMENT PROCESSING</span>
          <span>NO AFFILIATION OR ENDORSEMENT CLAIMED</span>
        </div>
      </section>

      <section className="support-proof section-wrap" aria-labelledby="support-proof-title">
        <div className="support-proof-heading">
          <p className="eyebrow">02 / Work already in public</p>
          <h2 id="support-proof-title">Not a project<br /><span>that exists only on paper.</span></h2>
          <p>
            These public repositories show software I have already designed
            and built. Each one can be inspected before anyone decides whether
            to help.
          </p>
        </div>
        <div className="support-proof-grid">
          <article>
            <span>01 / SECURITY WORKBENCH</span>
            <h3>NetRecon</h3>
            <p>
              A Python and Flask reconnaissance workbench for DNS, TLS, web
              security posture and scoped network checks, with explicit
              safeguards around active probing.
            </p>
            <a href="https://github.com/JoeBuildsThings/NetRecon" target="_blank" rel="noreferrer">
              Inspect source <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article>
            <span>02 / ANDROID APPLICATION</span>
            <h3>Frost Music Player</h3>
            <p>
              An offline-first Android music player built with Kotlin,
              Jetpack Compose and Media3, with background playback and
              on-device library management.
            </p>
            <a href="https://github.com/JoeBuildsThings/frost-music-player" target="_blank" rel="noreferrer">
              Inspect source <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article>
            <span>03 / AI TOOLING</span>
            <h3>JOEBOT</h3>
            <p>
              A terminal AI agent with project tools, provider fallback and
              an approval gate before file writes or shell commands.
            </p>
            <a href="https://github.com/JoeBuildsThings/joebot" target="_blank" rel="noreferrer">
              Inspect source <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article>
            <span>04 / E-COMMERCE</span>
            <h3>Synsorempire</h3>
            <p>
              A storefront with a managed product catalogue, private admin
              area and WhatsApp order flow for a local fashion retailer.
            </p>
            <a href="https://github.com/JoeBuildsThings/synsorempire" target="_blank" rel="noreferrer">
              Inspect source <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>

      <section className="support-main section-wrap">
        <div className="support-copy">
          <p className="eyebrow">03 / The target</p>
          <h2>One specific<br /><span>workstation goal.</span></h2>
          <p className="support-explainer">
            The target is a refurbished Lenovo ThinkPad T14 Gen 2 AMD with a
            Ryzen 5 PRO 5650U, 16GB memory, and a 512GB NVMe SSD. This is a
            practical target configuration, not a claim that every T14 Gen 2
            has the same parts.
          </p>
          <p className="support-explainer">
            Lenovo lists the reference machine type below as withdrawn, so
            this is a request for a verified used or refurbished unit. Other
            regional machine types are fine when the actual specifications
            match.
          </p>
          <p className="support-explainer">
            This configuration uses integrated Radeon graphics, not a
            dedicated gaming GPU. I am asking for a practical development
            machine for web projects, local builds, browser testing and
            Android work, not claiming it is a high-end Unreal workstation.
          </p>
          <a
            className="text-link"
            href="https://psref.lenovo.com/Detail/ThinkPad_T14_Gen_2_AMD?M=20XK00BGUS"
            target="_blank"
            rel="noreferrer"
          >
            Check Lenovo&apos;s official specification record <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="spec-sheet">
          <div className="spec-sheet-head">
            <span>REFERENCE CONFIGURATION</span>
            <span>LENOVO / 20XK00BGUS</span>
          </div>
          <div className="spec-sheet-title">
            <span>THINKPAD</span>
            <strong>T14 <em>GEN 2</em></strong>
            <span>AMD PLATFORM / REFURBISHED TARGET</span>
          </div>
          <dl className="spec-list">
            {targetSpecs.map(([label, value], index) => (
              <div className="spec-row" key={label}>
                <dt><span>{String(index + 1).padStart(2, "0")}</span>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="spec-sheet-foot">
            <span>SPECIFICATIONS VARY BY MACHINE TYPE</span>
            <span>VERIFY BEFORE PURCHASE</span>
          </div>
        </div>
      </section>

      <section className="support-options section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Ways to help</p>
            <h2>Two straightforward<br /><span>ways to make it happen.</span></h2>
          </div>
          <p className="section-intro">
            Support is entirely voluntary. There is no expected amount, public
            donor list, or pressure to contribute.
          </p>
        </div>

        <div className="support-option-grid">
          <article className="support-option">
            <span className="option-index">A / DIRECT GIFT</span>
            <h3>Help source the laptop itself.</h3>
            <p>
              A supporter can help locate or purchase a suitable machine and
              arrange a direct handover. The exact unit should be checked
              against the specification and condition notes on this page.
            </p>
          </article>
          <article className="support-option">
            <span className="option-index">B / PRIVATE DISCUSSION</span>
            <h3>Discuss financial help privately.</h3>
            <p>
              Someone who prefers to contribute financially can first get in
              touch to discuss the details privately. No money is collected
              through this website.
            </p>
          </article>
        </div>
      </section>

      <section className="inspection-section section-wrap">
        <div className="inspection-heading">
          <p className="eyebrow">05 / Before any purchase</p>
          <h2>Check the actual<br /><span>machine, not the listing.</span></h2>
          <p>
            Refurbished laptops can differ significantly in condition. These
            checks protect both the supporter and the person receiving it.
          </p>
        </div>
        <ol className="inspection-list">
          {checks.map((check, index) => (
            <li key={check}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{check}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-placeholder section-wrap" id="contact">
        <div>
          <p className="eyebrow">06 / Start a conversation</p>
          <h2>Talk to me<br /><span>directly.</span></h2>
          <p>
            For a laptop offer, a question about the specifications, or a
            private conversation about support, contact me through my public
            professional profile. Please do not send money to an account
            found in an unrelated comment or message.
          </p>
          <div className="support-contact-actions">
            <a className="button button-primary" href="https://www.linkedin.com/in/joseph-ayomide-adebiyi-5bb66844b/" target="_blank" rel="noreferrer">
              Message me on LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a className="support-contact-secondary" href="https://github.com/JoeBuildsThings" target="_blank" rel="noreferrer">
              View my GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="contact-placeholder-tag">
          <span className="contact-dot" />
          PUBLIC CONTACT / LINKEDIN + GITHUB
        </div>
      </section>

      <p className="support-disclaimer section-wrap">
        CREATOR ARCADE is an independent fan-made project. It is not affiliated
        with, sponsored by, or endorsed by any featured creator, their partners,
        or Lenovo.
      </p>
    </main>
  );
}
