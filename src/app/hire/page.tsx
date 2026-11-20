import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire",
  description:
    "Hire JoeBuildsThings for responsive websites, browser tools, and full-stack development.",
};

const services = [
  {
    number: "01",
    title: "Websites that explain the offer.",
    description:
      "Responsive landing pages, business websites, and storefront experiences with clear content and purposeful calls to action.",
    deliverables: "BUSINESS SITES / LANDING PAGES / STOREFRONTS",
  },
  {
    number: "02",
    title: "Browser tools that solve a real task.",
    description:
      "Interactive tools, dashboards, internal utilities, and focused web applications shaped around how people actually work.",
    deliverables: "DASHBOARDS / WEB APPS / CUSTOM TOOLS",
  },
  {
    number: "03",
    title: "Backend and automation work.",
    description:
      "APIs, database-backed features, integrations, and workflow automation that connect the pieces behind a useful product.",
    deliverables: "APIs / INTEGRATIONS / AUTOMATION",
  },
] as const;

const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Supabase",
  "Firebase",
  "Python",
] as const;

const process = [
  ["01", "Scope", "Agree on the problem, audience, deliverables, timeline, and constraints before implementation."],
  ["02", "Build", "Work in visible milestones, with decisions and progress kept clear."],
  ["03", "Verify", "Test the important flows, fix defects, and prepare a clean handover."],
] as const;

export default function HirePage() {
  return (
    <main id="main-content" className="detail-page hire-page">
      <section className="detail-hero section-wrap">
        <div className="detail-kicker">
          <span className="eyebrow">01 / Work with JoeBuildsThings</span>
          <span className="detail-index">INDEPENDENT DEVELOPER</span>
        </div>

        <div className="detail-hero-grid">
          <div>
            <p className="detail-pretitle">MAKE THE NEXT IDEA USEFUL.</p>
            <h1 className="detail-title">
              Web products
              <br />
              <span>built to do a job.</span>
            </h1>
          </div>
          <div className="detail-summary">
            <p>
              I build responsive websites, browser-based tools, and full-stack
              applications for businesses, creators, and people with a clear
              problem to solve.
            </p>
            <p>
              This page is for paid project enquiries. The workstation
              support request has its own separate page and is not part of
              client work.
            </p>
          </div>
        </div>

        <div className="support-status-line">
          <span><i aria-hidden="true" /> OPEN TO SCOPED PROJECTS</span>
          <span>REMOTE COLLABORATION</span>
          <span>NO FABRICATED CLIENT CLAIMS</span>
        </div>
      </section>

      <section className="hire-services section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / What I can build</p>
            <h2>Useful work.<br /><span>Clearly scoped.</span></h2>
          </div>
          <p className="section-intro">
            Start with the outcome you need. The implementation should serve
            the job, not the other way around.
          </p>
        </div>

        <div className="hire-service-list">
          {services.map((service) => (
            <article className="hire-service" key={service.number}>
              <span className="hire-service-number">{service.number}</span>
              <div className="hire-service-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>{service.deliverables}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section section-wrap">
        <div>
          <p className="eyebrow">03 / Tools in the kit</p>
          <h2>A practical<br /><span>web stack.</span></h2>
          <p>
            Technology is selected around the requirements, hosting
            constraints, maintainability, and the people who will use the
            product.
          </p>
        </div>
        <ul className="stack-list" aria-label="Development technologies">
          {stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>

      <section className="process-section section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Working process</p>
            <h2>From brief<br /><span>to handover.</span></h2>
          </div>
        </div>
        <div className="process-grid">
          {process.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hire-contact section-wrap" id="contact">
        <div>
          <p className="eyebrow">05 / Project enquiries</p>
          <h2>Have a clear<br /><span>problem to solve?</span></h2>
          <p>
            Verified business contact details will be added here before this
            page is promoted. Until then, the public source repository is
            available for reviewing the engineering work.
          </p>
        </div>
        <a
          className="button button-dark"
          href="https://github.com/JoeBuildsThings/carter-exe"
          target="_blank"
          rel="noreferrer"
        >
          Inspect this project <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
